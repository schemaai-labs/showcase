/**
 * ShowcaseNode — 展示站最小节点渲染器（平台渲染链路的直接形态）。
 *
 * 移植自 apps/studio-web/src/widgets/editor-workspace/ui/Renderer.tsx 的运行时
 * 骨架，**剖去编辑器形态**：无拖拽/框选/尺寸手柄/缩略面/编辑器 surface——
 * 保留的是平台渲染链路本身：
 *
 *   createBindingResolver（{{}} 绑定）
 *     → createControlledHandlers（受控写回 + 事件执行）
 *     → createLogicProps（组件事件 props 装配）
 *     → resolveCoreRuntimeProps（树遍历 / updateNode 注入）
 *     → useRuntimeNodeAssembly（props/style 装配 + 素材 URL 解析 + 可见性）
 *     → useRuntimeEventLifecycle（onMount / onUpdate / onListen 生命周期）
 *     → assembleLayoutStyles（布局域 / 壳拆分 / scoped-css）
 *     → RenderNodeFrame（wrapper + data-node-id + 组件）
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
          组件 {this.props.nodeType} 渲染失败：{this.state.error.message}
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
  // 渲染面（浮层实例）优先：绑定解析与写回都落实例树 / 实例通道
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

  /** 执行面状态视图：本面树 + 活动页（与编辑器 runtimeState 同形）。 */
  const runtimeState = useMemo(
    () => ({
      ...state,
      tree: tree ?? node,
      activePageId: surface?.pageId ?? activePage?.id ?? state.activePageId,
    }),
    [state, tree, node, surface?.pageId, activePage?.id],
  );
  /** 编辑器拖拽选中抑制窗口（预览面无拖拽，恒 0 —— 满足契约、行为不参与）。 */
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

  // 1. {{}} 绑定解析（canonical resolver in @schemaai/runtime-core）
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

  // 2. 受控处理器（受控写回 + 事件执行；runtimeBridge 写回 store）
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

  // 3. 事件 props 装配（onClick/onChange/onOk… 由 meta.eventBindings 驱动）
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

  // 4. props / style 装配 + 素材 URL 解析 + 可见性
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

  // 5. 事件生命周期（onMount / onUpdate / onUnmount / onListen）
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

  // 6. 布局样式装配（布局域 / 容器壳拆分 / scoped-css）
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
      // 展示站 = 预览面（与编辑器预览一致）：关闭 % 高度 px 解析（避免钉值跳动）
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
        未知组件类型：{node.type}
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
              缺渲染器：<span className="font-mono">{missingRendererType ?? node.type}</span>（插件组件需先加载插件）
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

/** 页面画布：三层结构（定高视口 → 滚动区 → 画板）——sticky / 滚动能力的成立前提。 */
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
