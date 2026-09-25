/**
 * store — 展示站运行时状态（编辑器 store 的最小替代）。
 *
 * 实现 @schemaai/renderer-react 的 PreviewRuntimeEditorState / Actions 契约
 * （PreviewRuntimeProvider 注入面），同时充当：
 * - BindingContext 源（{{}} 绑定解析）；
 * - runtime-host 的 HostRuntimeActions（事件代码沙箱写回）；
 * - 浮层实例宿主（modals + updateModalTree，对齐 editor store 语义）。
 *
 * 写回语义对齐 editor-react 的 UPDATE_NODE 归约：props/style/data 浅合并
 * （显式 replace 标志时整体替换）——showcase 是同一运行时的第二宿主，
 * 语义不另立一套。
 */

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { ModalInstance, NodeSchema, Page, Variable } from '@schemaai/schema';

// ─── 状态与写回 ───────────────────────────────────────────────────────────

export interface NodeUpdatePayload {
  props?: Record<string, unknown>;
  data?: Record<string, unknown>;
  style?: Record<string, unknown>;
  name?: string;
  replace?: { props?: boolean; data?: boolean; style?: boolean };
}

export interface ShowcaseRuntimeState {
  pages: Page[];
  activePageId: string;
  runtimeValues: Record<string, unknown>;
  queryResults: Record<string, unknown>;
  variables: Variable[];
  modals: ModalInstance[];
}

export interface HydratePayload {
  pages: Page[];
  activePageId: string;
  themeConfig?: unknown;
  variables?: unknown[];
  runtimeValues?: Record<string, unknown>;
  queryResults?: Record<string, unknown>;
  viewport?: string;
}

export interface ShowcaseRuntimeActions {
  hydratePreview: (payload: HydratePayload) => void;
  setRuntimeValues: (values: Record<string, unknown>) => void;
  setRuntimeValue: (id: string, value: unknown) => void;
  setQueryResults: (results: Record<string, unknown>) => void;
  setQueryResult: (queryId: string, data: unknown) => void;
  switchPage: (pageId: string) => void;
  updateNode: (nodeId: string, payload: NodeUpdatePayload) => void;
  updateNodeInPage: (pageId: string, nodeId: string, payload: NodeUpdatePayload) => void;
  openModal: (modal: ModalInstance) => void;
  closeModal: (id?: string, result?: unknown) => void;
  updateModalTree: (modalId: string, nodeId: string, updates: NodeUpdatePayload) => void;
  markModalCloseRun: (modalId: string) => void;
  removeModal: (modalId: string) => void;
}

interface ShowcaseStoreValue {
  state: ShowcaseRuntimeState;
  actions: ShowcaseRuntimeActions;
}

const ShowcaseStoreContext = createContext<ShowcaseStoreValue | null>(null);

export function useShowcaseStore(): ShowcaseStoreValue {
  const value = useContext(ShowcaseStoreContext);
  if (!value) throw new Error('useShowcaseStore must be used inside <ShowcaseStoreProvider>');
  return value;
}

// ─── 渲染面上下文（浮层实例）──────────────────────────────────────────────

/**
 * 渲染面：页面画布（缺省）或浮层实例面。
 * 浮层内的**绑定解析**与**写回**都必须落实例树 / 实例写回通道——否则
 * `{{DOM.<子页节点>.data.x}}` 会在主页面树里找不到节点（studio-web 用
 * editor surface 表达同一语义）。
 */
export interface ShowcaseSurface {
  tree: NodeSchema;
  pageId: string;
  modalId?: string;
}

const ShowcaseSurfaceContext = createContext<ShowcaseSurface | null>(null);

export const ShowcaseSurfaceProvider = ShowcaseSurfaceContext.Provider;

export function useShowcaseSurface(): ShowcaseSurface | null {
  return useContext(ShowcaseSurfaceContext);
}

// ─── 树写回 ───────────────────────────────────────────────────────────────

function applyNodePatch(node: NodeSchema, patch: NodeUpdatePayload): NodeSchema {
  const next: NodeSchema = { ...node };
  if (patch.props) {
    next.props = patch.replace?.props
      ? patch.props
      : { ...(node.props ?? {}), ...patch.props };
  }
  if (patch.data) {
    next.data = patch.replace?.data
      ? patch.data
      : { ...(node.data ?? {}), ...patch.data };
  }
  if (patch.style) {
    next.style = (patch.replace?.style
      ? patch.style
      : { ...(node.style ?? {}), ...patch.style }) as NodeSchema['style'];
  }
  if (patch.name !== undefined) next.name = patch.name;
  return next;
}

function updateNodeInTree(
  node: NodeSchema,
  nodeId: string,
  patch: NodeUpdatePayload,
): { tree: NodeSchema; changed: boolean } {
  if (node.id === nodeId) {
    return { tree: applyNodePatch(node, patch), changed: true };
  }
  if (!node.children?.length) return { tree: node, changed: false };
  let changed = false;
  const children = node.children.map((child) => {
    const result = updateNodeInTree(child, nodeId, patch);
    if (result.changed) changed = true;
    return result.tree;
  });
  return changed ? { tree: { ...node, children }, changed } : { tree: node, changed: false };
}

// ─── Provider ─────────────────────────────────────────────────────────────

export const ShowcaseStoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<ShowcaseRuntimeState>({
    pages: [],
    activePageId: '',
    runtimeValues: {},
    queryResults: {},
    variables: [],
    modals: [],
  });

  /** 稳定引用：适配器/沙箱闭包永远读到最新状态（不需因 state 变化重注册）。 */
  const stateRef = useRef(state);
  stateRef.current = state;

  const actions = useMemo<ShowcaseRuntimeActions>(() => {
    const patchPageTree = (pageId: string, nodeId: string, payload: NodeUpdatePayload) => {
      setState((prev) => {
        const pages = prev.pages.map((page) => {
          if (page.id !== pageId) return page;
          const { tree, changed } = updateNodeInTree(page.tree, nodeId, payload);
          return changed ? { ...page, tree } : page;
        });
        return pages === prev.pages ? prev : { ...prev, pages };
      });
    };

    return {
      hydratePreview: (payload) =>
        setState((prev) => ({
          ...prev,
          pages: payload.pages ?? [],
          activePageId: payload.activePageId || payload.pages?.[0]?.id || '',
          variables: (payload.variables as Variable[] | undefined) ?? prev.variables,
          runtimeValues: payload.runtimeValues ?? {},
          queryResults: payload.queryResults ?? {},
        })),
      setRuntimeValues: (values) => setState((prev) => ({ ...prev, runtimeValues: values })),
      setRuntimeValue: (id, value) =>
        setState((prev) => ({ ...prev, runtimeValues: { ...prev.runtimeValues, [id]: value } })),
      setQueryResults: (results) => setState((prev) => ({ ...prev, queryResults: results })),
      setQueryResult: (queryId, data) =>
        setState((prev) => ({
          ...prev,
          queryResults: { ...prev.queryResults, [queryId]: data },
        })),
      switchPage: (pageId) =>
        setState((prev) => (prev.activePageId === pageId ? prev : { ...prev, activePageId: pageId })),
      updateNode: (nodeId, payload) => {
        const pageId = stateRef.current.activePageId;
        patchPageTree(pageId, nodeId, payload);
      },
      updateNodeInPage: (pageId, nodeId, payload) => patchPageTree(pageId, nodeId, payload),
      openModal: (modal) => setState((prev) => ({ ...prev, modals: [...prev.modals, modal] })),
      closeModal: (id, result) =>
        setState((prev) => {
          const target = id ? prev.modals.find((m) => m.id === id) : prev.modals[prev.modals.length - 1];
          if (!target) return prev;
          return {
            ...prev,
            modals: prev.modals.map((m) =>
              m.id === target.id
                ? { ...m, closing: true, closeResult: result, hasRunOnOverlayClose: false }
                : m,
            ),
          };
        }),
      updateModalTree: (modalId, nodeId, updates) =>
        setState((prev) => ({
          ...prev,
          modals: prev.modals.map((m) => {
            if (m.id !== modalId) return m;
            const tree = m.overlayTree ?? prev.pages.find((p) => p.id === m.pageId)?.tree;
            if (!tree) return m;
            const result = updateNodeInTree(tree, nodeId, updates);
            return result.changed ? { ...m, overlayTree: result.tree } : m;
          }),
        })),
      markModalCloseRun: (modalId) =>
        setState((prev) => ({
          ...prev,
          modals: prev.modals.map((m) => (m.id === modalId ? { ...m, hasRunOnOverlayClose: true } : m)),
        })),
      removeModal: (modalId) =>
        setState((prev) => ({ ...prev, modals: prev.modals.filter((m) => m.id !== modalId) })),
    };
  }, []);

  const value = useMemo<ShowcaseStoreValue>(() => ({ state, actions }), [state, actions]);
  return <ShowcaseStoreContext.Provider value={value}>{children}</ShowcaseStoreContext.Provider>;
};

/** 当前活动页树（无页 → undefined）。 */
export function useActivePage(): Page | undefined {
  const { state } = useShowcaseStore();
  return state.pages.find((page) => page.id === state.activePageId) ?? state.pages[0];
}

/** 便捷：某页树内的节点查找（供适配器使用，不触发订阅）。 */
export function findNodeInPages(pages: Page[], nodeIdOrName: string): NodeSchema | undefined {
  const search = (node: NodeSchema): NodeSchema | undefined => {
    if (node.id === nodeIdOrName || node.name === nodeIdOrName) return node;
    for (const child of node.children ?? []) {
      const hit = search(child);
      if (hit) return hit;
    }
    return undefined;
  };
  for (const page of pages) {
    const hit = search(page.tree);
    if (hit) return hit;
  }
  return undefined;
}
