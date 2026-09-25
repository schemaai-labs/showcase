/**
 * OverlayLayer — 浮层宿主（overlay.open / overlay.close 的渲染面与生命周期）。
 *
 * 语义对齐编辑器（system-architecture §6.3，apps/studio-web ModalLayer 同规）：
 * - `onOverlayInit(data)`：实例挂载后**跑一次**，eventArg = 页面级原值（sendData，
 *   不是 { data } 包装）；
 * - `onOverlayClose(result)`：实例移除**前跑一次**——遮罩点击 / 关闭按钮 / 代码
 *   `overlay.close` 走同一条两阶段路径（标记 closing → 跑 handler → 移除）；
 * - 实例树（modal.overlayTree）承载浮层内受控写回，避免并发浮层互相污染。
 *
 * 壳为展示站自绘（modal 居中 / drawer 侧滑 + 遮罩），不依赖编辑器组件。
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

  // onOverlayInit —— 每实例一次（挂载后；对实例树执行）
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

  // onOverlayClose —— 两阶段关闭（跑 handler → 移除）
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
                  aria-label="关闭"
                  className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 text-xl leading-none"
                  onClick={() => closeTop(modal)}
                >
                  ×
                </button>
                {tree ? (
                  // 浮层实例面：绑定解析 / 写回都落实例树（{@link ShowcaseSurface}）
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
                  <div className="p-6 text-sm text-slate-500">浮层目标为空</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
