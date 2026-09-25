/**
 * OverlayLayer — the overlay host (render surface and lifecycle for overlay.open / overlay.close).
 *
 * Semantics align with the editor (system-architecture §6.3, same rule as apps/studio-web ModalLayer):
 * - `onOverlayInit(data)`: runs **once** after the instance mounts, eventArg = the page-level raw
 *   value (sendData, not wrapped in { data });
 * - `onOverlayClose(result)`: runs **once** before the instance is removed — backdrop click / close
 *   button / code `overlay.close` all take the same two-phase path (mark closing → run handler → remove);
 * - The instance tree (modal.overlayTree) carries controlled write-back inside the overlay, keeping
 *   concurrent overlays from polluting each other.
 *
 * The shell is drawn by the showcase itself (modal centered / drawer sliding in + backdrop), with no
 * dependency on editor components.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { SchemaRenderer, CANONICAL_COMPONENT_META } from '@schemaai/renderer-react';
import {
  resolveOverlayCloseRun,
  resolveOverlayInitRun,
  selectOverlayCloseActions,
} from '@schemaai/runtime-core';
import { runOverlayClose, runOverlayInit } from '@schemaai/runtime-host';
import type { ModalInstance, NodeSchema } from '@schemaai/schema';

import { ShowcaseSurfaceProvider, useShowcaseStore } from './store.js';
import { ShowcaseNode } from './ShowcaseNode.js';

const renderComponent = (node: NodeSchema) => <ShowcaseNode node={node} />;
const getComponentMeta = (type: string) =>
  CANONICAL_COMPONENT_META[type as keyof typeof CANONICAL_COMPONENT_META];

function resolveOverlayTree(modal: ModalInstance, pages: { id: string; tree: NodeSchema }[]): NodeSchema | null {
  const page = pages.find((p) => p.id === modal.pageId);
  const base = modal.overlayTree ?? page?.tree ?? null;
  if (!base) return null;
  if (!modal.targetNodeId) return base;
  const find = (node: NodeSchema): NodeSchema | null => {
    if (node.id === modal.targetNodeId) return node;
    for (const child of node.children ?? []) {
      const hit = find(child);
      if (hit) return hit;
    }
    return null;
  };
  return find(base);
}

export const OverlayLayer: React.FC = () => {
  const { state, actions } = useShowcaseStore();
  const initedRef = useRef<Set<string>>(new Set());

  // onOverlayInit — once per instance (after mount; executed against the instance tree)
  useEffect(() => {
    for (const modal of state.modals) {
      if (modal.closing) continue;
      if (initedRef.current.has(modal.id)) continue;
      if (!resolveOverlayInitRun(modal, { pages: state.pages })) continue;
      initedRef.current.add(modal.id);
      runOverlayInit(modal, state, actions as unknown as Record<string, unknown>).catch((err) => {
        console.error('[OverlayLayer] runOverlayInit error:', err);
      });
    }
  }, [state, actions]);

  // onOverlayClose — two-phase close (run handler → remove)
  useEffect(() => {
    for (const modal of selectOverlayCloseActions(state.modals)) {
      actions.markModalCloseRun(modal.id);
      const finish = () => actions.removeModal(modal.id);
      if (!resolveOverlayCloseRun(modal, { pages: state.pages })) {
        finish();
        continue;
      }
      runOverlayClose(modal, state, actions as unknown as Record<string, unknown>)
        .catch((err) => console.error('[OverlayLayer] runOverlayClose error:', err))
        .finally(finish);
    }
  }, [state, actions]);

  const closeTop = useCallback(
    (modal: ModalInstance) => actions.closeModal(modal.id),
    [actions],
  );

  if (state.modals.length === 0) return null;

  return (
    <>
      {state.modals.map((modal) => {
        const tree = resolveOverlayTree(modal, state.pages);
        const isDrawer = modal.config.overlayType === 'drawer';
        const position = modal.config.position ?? (isDrawer ? 'right' : 'center');
        const panelClass = isDrawer
          ? 'absolute top-0 bottom-0 w-[520px] max-w-[92vw] bg-white shadow-2xl overflow-auto'
          : 'relative bg-white rounded-xl shadow-2xl w-[720px] max-w-[92vw] max-h-[86vh] overflow-auto';
        const panelStyle: React.CSSProperties = isDrawer
          ? { [position === 'left' ? 'left' : 'right']: 0 }
          : { width: modal.config.width, height: modal.config.height };

        return (
          <div
            key={modal.id}
            className="fixed inset-0 z-[900]"
            data-showcase-overlay={modal.id}
            data-overlay-page={modal.pageId}
          >
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
              onClick={() => modal.config.closeOnBackdropClick !== false && closeTop(modal)}
            />
            <div
              className={
                isDrawer
                  ? panelClass
                  : 'absolute inset-0 flex items-center justify-center p-8 pointer-events-none'
              }
            >
              <div
                className={panelClass}
                style={{ ...panelStyle, pointerEvents: 'auto' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Close"
                  className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 text-xl leading-none"
                  onClick={() => closeTop(modal)}
                >
                  ×
                </button>
                {tree ? (
                  // Overlay instance surface: binding resolution / write-back both land on the instance tree ({@link ShowcaseSurface})
                  <ShowcaseSurfaceProvider
                    value={{ tree, pageId: modal.pageId, modalId: modal.id }}
                  >
                    <SchemaRenderer
                      node={tree}
                      renderComponent={renderComponent}
                      getComponentMeta={getComponentMeta}
                    />
                  </ShowcaseSurfaceProvider>
                ) : (
                  <div className="p-6 text-sm text-slate-500">Overlay target is empty</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
