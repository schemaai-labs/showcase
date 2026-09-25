/**
 * ShowcaseNode — the showcase's minimal node renderer (the platform rendering pipeline, bare).
 *
 * Ported from the runtime skeleton of apps/studio-web/src/widgets/editor-workspace/ui/Renderer.tsx,
 * **stripped of the editor form**: no drag / marquee / resize handles / thumbnail surface / editor
 * surface — what remains is the platform rendering pipeline itself:
 *
 *   createBindingResolver ({{}} bindings)
 *     → createControlledHandlers (controlled write-back + event execution)
 *     → createLogicProps (component event props assembly)
 *     → resolveCoreRuntimeProps (tree traversal / updateNode injection)
 *     → useRuntimeNodeAssembly (props/style assembly + asset URL resolution + visibility)
 *     → useRuntimeEventLifecycle (onMount / onUpdate / onListen lifecycle)
 *     → assembleLayoutStyles (layout domains / shell splitting / scoped-css)
 *     → RenderNodeFrame (wrapper + data-node-id + component)
 */

import React, { useCallback, useMemo, useRef } from 'react';
import {
  CANONICAL_COMPONENT_META,
  RenderNodeFrame,
  SchemaRenderer,
  assembleLayoutStyles,
  createControlledHandlers,
  createLogicProps,
  getComponentRenderer,
  resolveChildrenLayout,
  resolveCoreRuntimeProps,
  resolveDeclaredChildrenLayout,
  useRuntimeNodeAssembly,
  useRuntimeEventLifecycle,
  type StyleAssemblyContext,
  type StyleAssemblyResult,
  type ControlledContext,
} from '@schemaai/renderer-react';
import { createBindingResolver } from '@schemaai/runtime-core';
import { executeUserCode } from '@schemaai/runtime-host';
import type { LayoutDomain, NodeSchema } from '@schemaai/schema';

import { useShowcaseStore, useShowcaseSurface } from './store.js';
import { setActiveNodeElement } from './adapters.js';

interface ShowcaseNodeProps {
  node: NodeSchema;
  parentNode?: NodeSchema;
  grandParentNode?: NodeSchema;
  scope?: Record<string, unknown>;
  renderInstanceId?: string;
}

const IS_PREVIEW = true;

class NodeErrorBoundary extends React.Component<
  { nodeId: string; nodeType: string; children: React.ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(`[showcase] node '${this.props.nodeId}' (${this.props.nodeType}) failed:`, error);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-2 text-[11px] text-amber-300/90 border border-amber-400/30 rounded bg-amber-500/10">
          Component {this.props.nodeType} failed to render: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}

export const ShowcaseNode: React.FC<ShowcaseNodeProps> = ({
  node,
  parentNode,
  grandParentNode,
  scope,
  renderInstanceId,
}) => {
  const { state, actions } = useShowcaseStore();
  const surface = useShowcaseSurface();
  const meta = CANONICAL_COMPONENT_META[node.type as keyof typeof CANONICAL_COMPONENT_META];
  const activePage = state.pages.find((p) => p.id === state.activePageId) ?? state.pages[0];
  // Surface (overlay instance) takes precedence: binding resolution and write-back both land on the instance tree / instance channel
  const tree = surface?.tree ?? activePage?.tree;
  const pageStrategy = activePage?.layoutStrategy ?? 'free';
  const runtimeActions = useMemo(
    () =>
      surface?.modalId
        ? {
            updateNode: (id: string, patch: Record<string, unknown>) =>
              actions.updateModalTree(surface.modalId as string, id, patch as never),
            updateNodeInPage: (pageId: string, id: string, patch: Record<string, unknown>) =>
              actions.updateModalTree(surface.modalId as string, id, patch as never),
          }
        : {
            updateNode: actions.updateNode,
            updateNodeInPage: actions.updateNodeInPage,
          },
    [surface?.modalId, actions],
  );

  /** Execution-surface state view: this surface's tree + the active page (same shape as the editor's runtimeState). */
  const runtimeState = useMemo(
    () => ({
      ...state,
      tree: tree ?? node,
      activePageId: surface?.pageId ?? activePage?.id ?? state.activePageId,
    }),
    [state, tree, node, surface?.pageId, activePage?.id],
  );
  /** Editor drag-selection suppression window (the preview surface has no drag, always 0 — contract satisfied, behavior unused). */
  const suppressSelectionRef = useRef<number>(0);

  const elementRef = useRef<HTMLDivElement | null>(null);
  const prevPropsRef = useRef<Record<string, unknown>>({});
  const currentRenderInstanceId = renderInstanceId || node.id;

  const parentChildrenLayout: LayoutDomain = useMemo(
    () => resolveChildrenLayout(parentNode, pageStrategy, grandParentNode),
    [parentNode, grandParentNode, pageStrategy],
  );

  const renderRuntimeNode = useCallback(
    (args: {
      node: NodeSchema;
      parentNode?: NodeSchema;
      scope?: Record<string, unknown>;
      key?: string;
      renderInstanceId?: string;
    }) => (
      <ShowcaseNode
        key={args.key || args.node.id}
        node={args.node}
        parentNode={args.parentNode}
        grandParentNode={node}
        scope={args.scope}
        renderInstanceId={args.renderInstanceId}
      />
    ),
    [node],
  );

  // 1. {{}} binding resolution (canonical resolver in @schemaai/runtime-core)
  const bindingCtx = useMemo(
    () => ({
      scope,
      isPreview: IS_PREVIEW,
      variables: state.variables,
      runtimeValues: state.runtimeValues,
      tree: tree ?? node,
      queryResults: state.queryResults,
      pages: state.pages,
    }),
    [scope, state.variables, state.runtimeValues, state.queryResults, state.pages, tree, node],
  );
  const { resolveBinding, resolveDependencyValue } = useMemo(
    () => createBindingResolver(bindingCtx),
    [bindingCtx],
  );

  // 2. Controlled handlers (controlled write-back + event execution; runtimeBridge writes back to the store)
  const controlledCtx: ControlledContext = useMemo(
    () => ({
      isPreview: IS_PREVIEW,
      node,
      scope,
      state: runtimeState,
      actions: {
        updateNode: runtimeActions.updateNode as (id: string, patch: Record<string, unknown>) => void,
        selectNode: () => undefined,
      },
      runtimeBridge: {
        updateNode: runtimeActions.updateNode as (id: string, patch: Record<string, unknown>) => void,
        updateNodeInPage: runtimeActions.updateNodeInPage as (
          pageId: string,
          id: string,
          patch: Record<string, unknown>,
        ) => void,
      },
      executeUserCode: executeUserCode as unknown as ControlledContext['executeUserCode'],
      prevPropsRef,
      suppressCanvasSelectionUntil: suppressSelectionRef,
    }),
    [node, scope, runtimeState, runtimeActions, actions],
  );
  const {
    runEventHandler,
    handleLogicClick,
    handleLogicChange,
    handleLogicOk,
    handleLogicCancel,
    handleLogicClose,
    handleEditChange,
  } = useMemo(() => createControlledHandlers(controlledCtx), [controlledCtx]);

  // 3. Event props assembly (onClick/onChange/onOk… driven by meta.eventBindings)
  const logicProps = useMemo(
    () =>
      createLogicProps({
        isPreview: IS_PREVIEW,
        nodeType: node.type,
        eventBindings: meta?.eventBindings ?? [],
        isFormControl: Boolean(meta?.isFormControl),
        handlers: {
          onEditChange: handleEditChange,
          onLogicChange: handleLogicChange,
          onLogicOk: handleLogicOk,
          onLogicCancel: handleLogicCancel,
          onLogicClose: handleLogicClose,
          runEventHandler,
        },
      }),
    [
      node.type,
      meta?.eventBindings,
      meta?.isFormControl,
      handleEditChange,
      handleLogicChange,
      handleLogicOk,
      handleLogicCancel,
      handleLogicClose,
      runEventHandler,
    ],
  );

  const coreRuntimeProps = useMemo(
    () =>
      resolveCoreRuntimeProps({
        isCoreComponent: true,
        nodeType: node.type,
        isPreview: IS_PREVIEW,
        isThumbnail: false,
        isSelected: false,
        isHovered: false,
        updateNode: runtimeActions.updateNode as (id: string, patch: Record<string, unknown>) => void,
        renderNode: renderRuntimeNode,
      }),
    [node.type, runtimeActions.updateNode, renderRuntimeNode],
  );

  // 4. props / style assembly + asset URL resolution + visibility
  const {
    resolvedProps,
    resolvedStyle,
    isVisible,
    shouldRenderNode,
    componentProps,
    ComponentToRender,
    missingRendererType,
  } = useRuntimeNodeAssembly({
    node,
    scope,
    resolveBinding,
    renderNode: renderRuntimeNode,
    logicProps,
    coreRuntimeProps,
    getComponentRenderer,
    isPreview: IS_PREVIEW,
  });

  // 5. Event lifecycle (onMount / onUpdate / onUnmount / onListen)
  useRuntimeEventLifecycle({
    node,
    isPreview: IS_PREVIEW,
    scope,
    resolvedProps,
    activePageId: surface?.pageId ?? activePage?.id ?? null,
    state: runtimeState,
    actions: actions as unknown as Record<string, unknown>,
    executeUserCode,
    resolveDependencyValue,
    runEventHandler,
    prevPropsRef,
  });

  // 6. Layout style assembly (layout domains / container shell splitting / scoped-css)
  const isFlexChild = parentChildrenLayout === 'flex';
  const layoutCtx: StyleAssemblyContext = useMemo(
    () => ({
      isPreview: IS_PREVIEW,
      isVisible,
      isFlexChild,
      isGridChild: parentChildrenLayout === 'grid',
      node,
      meta: meta as StyleAssemblyContext['meta'],
      parentNode,
      parentChildrenLayout,
      activePageLayoutStrategy: pageStrategy,
      resolvedStyle,
      resolvedProps,
      // The showcase is a preview surface (matching the editor preview): % height → px resolution is off (avoids pinned-value jitter)
      resolvedPercentHeight: null,
      customCssRaw: (node.props as Record<string, unknown> | undefined)?.__rb_customCss as string | undefined,
    }),
    [
      isVisible,
      isFlexChild,
      parentChildrenLayout,
      node,
      meta,
      parentNode,
      resolvedStyle,
      resolvedProps,
      pageStrategy,
    ],
  );
  const layoutResult: StyleAssemblyResult = useMemo(() => assembleLayoutStyles(layoutCtx), [layoutCtx]);

  const handlePointerDown = useCallback(() => {
    setActiveNodeElement(elementRef.current);
  }, []);

  if (!meta) {
    return (
      <div className="p-2 text-[11px] text-rose-300 border border-rose-400/30 rounded bg-rose-500/10">
        Unknown component type: {node.type}
      </div>
    );
  }
  if (!shouldRenderNode) return null;

  return (
    <NodeErrorBoundary nodeId={node.id} nodeType={node.type}>
      <div onPointerDownCapture={handlePointerDown} className="contents">
        <RenderNodeFrame
          nodeId={node.id}
          nodeName={node.name}
          nodeType={node.type}
          renderInstanceId={currentRenderInstanceId}
          elementRef={elementRef}
          wrapperStyle={layoutResult.finalWrapperStyle}
          componentRenderStyle={layoutResult.finalComponentRenderStyle}
          componentVisualStyle={layoutResult.componentVisualStyle}
          innerStyle={layoutResult.innerStyle}
          customCss={layoutResult.finalCustomCss}
          ComponentToRender={ComponentToRender}
          componentProps={componentProps}
          acceptsChildren={Boolean(meta.acceptsChildren)}
          missingRendererFallback={
            <>
              Missing renderer: <span className="font-mono">{missingRendererType ?? node.type}</span> (plugin components require the plugin to be loaded first)
            </>
          }
          missingRendererClassName="w-full h-full p-2 text-[11px] text-amber-300/90 border border-amber-400/30 rounded bg-amber-500/10"
          onClick={handleLogicClick}
        >
          {node.children?.map((child) => (
            <ShowcaseNode
              key={child.id}
              node={child}
              parentNode={node}
              grandParentNode={parentNode}
              scope={scope}
              renderInstanceId={`${currentRenderInstanceId}/${child.id}`}
            />
          ))}
        </RenderNodeFrame>
      </div>
    </NodeErrorBoundary>
  );
};

/** Page canvas: three layers (fixed-height viewport → scroll region → artboard) — the precondition for sticky / scroll capabilities. */
export const ShowcaseCanvas: React.FC<{ pageTree: NodeSchema; layoutStrategy?: string }> = ({
  pageTree,
  layoutStrategy = 'free',
}) => (
  <div className="flex min-h-0 flex-1 overflow-auto items-stretch justify-start">
    <div
      data-rb-artboard="true"
      className="w-full h-auto min-h-screen bg-white"
      style={{ minHeight: '100vh' }}
    >
      <SchemaRenderer
        node={pageTree}
        activePageLayoutStrategy={layoutStrategy as 'free'}
        renderComponent={(node) => <ShowcaseNode node={node} />}
        getComponentMeta={(type) =>
          CANONICAL_COMPONENT_META[type as keyof typeof CANONICAL_COMPONENT_META]
        }
      />
    </div>
  </div>
);
