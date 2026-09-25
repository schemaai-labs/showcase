/**
 * store — the showcase runtime state (a minimal replacement for the editor store).
 *
 * Implements @schemaai/renderer-react's PreviewRuntimeEditorState / Actions contract (the
 * PreviewRuntimeProvider injection surface) while also serving as:
 * - the BindingContext source ({{}} binding resolution);
 * - runtime-host's HostRuntimeActions (event-code sandbox write-back);
 * - the overlay instance host (modals + updateModalTree, aligned with editor store semantics).
 *
 * Write-back semantics follow editor-react's UPDATE_NODE reducer: shallow merge of props/style/data
 * (full replacement when the explicit replace flag is set) — the showcase is a second host of the
 * same runtime, so semantics are not forked.
 */

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { ModalInstance, NodeSchema, Page, Variable } from '@schemaai/schema';

// ─── State and write-back ───────────────────────────────────────────────────

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

// ─── Surface context (overlay instances) ────────────────────────────────────

/**
 * Surface: the page canvas (default) or an overlay instance surface.
 * Binding resolution and write-back inside an overlay must land on the instance tree / instance
 * write-back channel — otherwise `{{DOM.<sub-page node>.data.x}}` fails to find the node in the
 * main page tree (studio-web expresses the same semantics via the editor surface).
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

// ─── Tree write-back ────────────────────────────────────────────────────────

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

  /** Stable reference: adapter/sandbox closures always read the latest state (no re-registration on state changes). */
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

/** The current active page (undefined when there are no pages). */
export function useActivePage(): Page | undefined {
  const { state } = useShowcaseStore();
  return state.pages.find((page) => page.id === state.activePageId) ?? state.pages[0];
}

/** Convenience: node lookup within a page tree (used by adapters, without subscribing). */
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
