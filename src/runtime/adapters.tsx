/**
 * adapters — 展示站宿主适配器（能力 → 副作用实现），**单点注册**。
 *
 * 与编辑器（apps/studio-web Renderer.tsx）的差异：那里每个节点注册自己的
 * 适配器闭包（含 elementRef，用于 navScroll 以本节点为起点的回顶）；展示站
 * 在应用层注册一次（避免大模板下 N 份 getter 合并），回顶起点用
 * 「最近交互节点」（ShowcaseNode 在 pointerdown 时登记）→ 无交互时回落画板。
 *
 * 覆盖能力：feedback / nav.to / nav.scroll / motion 全族 / data.query /
 * data.refresh / data.setState / overlay.open / overlay.close / platform.clipboard。
 */

import React, { useEffect, useMemo, useRef } from 'react';
import {
  deriveAsyncStateForNode,
  type RuntimeHostCapability,
  type RuntimeQueryContext,
} from '@schemaai/runtime-core';
import type { ModalInstance, NodeSchema, Page } from '@schemaai/schema';
import {
  createHostRuntimeCapability,
  findQueryByName,
  parseSetStatePath,
  registerHostActionAdapters,
  SET_STATE_ALLOWED_SECTIONS,
  type HostActionAdapters,
} from '@schemaai/runtime-host';
import { usePreviewRuntime } from '@schemaai/renderer-react';

import { findNodeInPages, useShowcaseStore } from './store.js';
import { executeQueryMock } from './query.js';
import { pushToast } from './toast.js';

// ─── 交互节点登记（navScroll 回顶起点）─────────────────────────────────────

let lastInteractedElement: HTMLElement | null = null;

/** ShowcaseNode 在 pointerdown 时登记（模块级：不触发 React 重渲染）。 */
export function setActiveNodeElement(element: HTMLElement | null): void {
  lastInteractedElement = element;
}

// ─── 目标解析（与编辑器同规：节点 name → 画板元素）─────────────────────────

function artboardScope(): ParentNode {
  return document.querySelector('[data-rb-artboard="true"]') ?? document;
}

/** 节点名（或 id）→ 渲染面元素（未建模 / 未渲染 → 跳过并 warn）。 */
function resolveTargets(pages: Page[], names: string[]): Element[] {
  const scope = artboardScope();
  const elements: Element[] = [];
  for (const name of names) {
    const node = findNodeInPages(pages, name);
    if (!node) {
      console.warn(`[runtime] node '${name}' not modeled on the current pages — skipped`);
      continue;
    }
    const el = scope.querySelector(`[data-node-id="${node.id}"]`);
    if (el) elements.push(el);
    else console.warn(`[runtime] rendered element for '${name}' not found — skipped`);
  }
  return elements;
}

function readTargetNames(targets: unknown): string[] {
  return Array.isArray(targets) ? targets.map((t) => String(t)).filter((t) => t.length > 0) : [];
}

// ─── 浮层实例构建（对齐 editor-react 的 overlay 契约）──────────────────────

function buildModalInstance(
  pages: Page[],
  payload: {
    page?: string;
    targetNode?: string;
    mode?: string;
    position?: string;
    size?: { width?: string; height?: string };
    sendData?: unknown;
  },
): ModalInstance | { error: string } {
  const pageName = String(payload.page ?? '').trim();
  const target = pages.find((p) => p.name === pageName || p.id === pageName);
  if (!target) {
    return { error: `overlay.open: page '${pageName}' 未建模（可用页面：${pages.map((p) => p.name).join(' / ')}）` };
  }
  let targetNodeId: string | undefined;
  if (payload.targetNode) {
    const node = findNodeInPages([target], String(payload.targetNode));
    if (!node) {
      return { error: `overlay.open: targetNode '${payload.targetNode}' 在页面 '${pageName}' 中不存在` };
    }
    targetNodeId = node.id;
  }
  const mode = (payload.mode as ModalInstance['config']['overlayType']) ?? 'modal';
  return {
    id: `overlay-${Date.now()}-${Math.round(Math.random() * 1e4)}`,
    pageId: target.id,
    targetNodeId,
    config: {
      overlayType: mode,
      width: payload.size?.width,
      height: payload.size?.height,
      position: (payload.position as ModalInstance['config']['position']) ?? (mode === 'drawer' ? 'right' : 'center'),
      animation: 'fade',
      closeOnBackdropClick: true,
    },
    sendData: payload.sendData,
  };
}

// ─── 适配器注册（单点）─────────────────────────────────────────────────────

export const ShowcaseHostAdapters: React.FC = () => {
  const { state, actions } = useShowcaseStore();
  const { switchPage } = usePreviewRuntime();

  const stateRef = useRef(state);
  stateRef.current = state;
  const actionsRef = useRef(actions);
  actionsRef.current = actions;
  const switchPageRef = useRef(switchPage);
  switchPageRef.current = switchPage;

  const adapters = useMemo<HostActionAdapters>(() => {
    const hostCapability = (): RuntimeHostCapability =>
      createHostRuntimeCapability(stateRef.current, actionsRef.current);

    const queryContext = (): RuntimeQueryContext => {
      const current = stateRef.current;
      const page = current.pages.find((p) => p.id === current.activePageId) ?? current.pages[0];
      return {
        variables: current.variables,
        runtimeValues: current.runtimeValues,
        tree: (page?.tree ?? { id: 'empty', type: 'container', props: {}, style: {}, children: [] }) as NodeSchema,
        queryResults: current.queryResults,
      };
    };

    const runQuery = async (queryName: string) => {
      const current = stateRef.current;
      const query = findQueryByName(current.pages, queryName);
      if (!query) {
        console.error(`[data.query] query '${queryName}' not found on the current pages`);
        return undefined;
      }
      const host = hostCapability();
      // A2 asyncState 自动派生（loading → ready/error，写 owner 节点 data.asyncState）
      const ownerNode = query.ownerId
        ? current.pages.map((p) => findNodeInPages([p], query.ownerId as string)).find(Boolean)
        : undefined;
      if (ownerNode) deriveAsyncStateForNode(ownerNode, host, { status: 'loading' });
      const result = await executeQueryMock(query, queryContext());
      actionsRef.current.setQueryResult(query.id, result);
      if (ownerNode) {
        deriveAsyncStateForNode(
          ownerNode,
          host,
          result.success
            ? { status: 'ready' }
            : { status: 'error', message: result.error ?? 'query failed' },
        );
      }
      return result;
    };

    return {
      feedback: (payload) => pushToast(payload),
      nav: (to) => {
        const target = String(to ?? '');
        if (!target) return;
        const page = stateRef.current.pages.find((p) => p.routePath === target);
        if (page) {
          switchPageRef.current(page.id);
          return;
        }
        if (/^https?:\/\//i.test(target)) {
          window.open(target, '_blank', 'noopener');
          return;
        }
        console.warn(`[nav.to] 路由 '${target}' 未建模（展示站只支持展品内页面切换）`);
      },
      navScroll: async (payload) => {
        const target = typeof payload?.target === 'string' ? payload.target.trim() : '';
        const { scrollToElement, scrollToTop } = await import('@schemaai/motion');
        if (!target) {
          scrollToTop(lastInteractedElement ?? artboardScope().querySelector?.('[data-rb-artboard="true"]') ?? null);
          return undefined;
        }
        const element = resolveTargets(stateRef.current.pages, [target])[0];
        if (!element) return undefined;
        scrollToElement(element);
        return undefined;
      },
      motionPlay: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { playOrchestration } = await import('@schemaai/motion');
        return playOrchestration(elements, payload);
      },
      motionScroll: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const sourceEl = typeof payload?.source === 'string'
          ? resolveTargets(stateRef.current.pages, [payload.source])[0]
          : undefined;
        const { attachScrollProgress } = await import('@schemaai/motion');
        // payload 来自能力契约（字段宽松）→ 执行器要求具体类型：适配器边界收敛
        return attachScrollProgress(elements, { ...payload, sourceEl } as never);
      },
      motionParallax: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { attachParallax } = await import('@schemaai/motion');
        return attachParallax(elements, payload as never);
      },
      motionProgress: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const sourceEl = typeof payload?.source === 'string'
          ? resolveTargets(stateRef.current.pages, [payload.source])[0]
          : undefined;
        const { attachProgress } = await import('@schemaai/motion');
        return attachProgress(elements, { ...payload, sourceEl } as never);
      },
      motionMagnetic: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { attachMagnetic } = await import('@schemaai/motion');
        return attachMagnetic(elements, payload);
      },
      motionFollow: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { attachFollow } = await import('@schemaai/motion');
        return attachFollow(elements, payload);
      },
      motionTypewriter: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { attachTypewriter } = await import('@schemaai/motion');
        return attachTypewriter(elements, payload);
      },
      motionCounter: async (payload) => {
        const names = readTargetNames(payload?.targets);
        if (names.length === 0) return undefined;
        const elements = resolveTargets(stateRef.current.pages, names);
        if (elements.length === 0) return undefined;
        const { attachCounter } = await import('@schemaai/motion');
        return attachCounter(elements, payload);
      },
      dataQuery: async ({ queryName }) => runQuery(String(queryName ?? '')),
      dataRefresh: async ({ queryName }) => runQuery(String(queryName ?? '')),
      dataSetState: ({ path, value }) => {
        const parsed = parseSetStatePath(String(path ?? ''));
        if (!parsed) {
          console.warn(`[data.setState] invalid path '${path}'（期望 DOM.<nodeId>.(data|Rendered_data|General_data).<key>）`);
          return;
        }
        if (!SET_STATE_ALLOWED_SECTIONS.has(parsed.section)) {
          console.warn(`[data.setState] section '${parsed.section}' 不可写（仅 data / Rendered_data / General_data）`);
          return;
        }
        const node = findNodeInPages(stateRef.current.pages, parsed.nodeId);
        if (!node) {
          console.warn(`[data.setState] node '${parsed.nodeId}' not found`);
          return;
        }
        if (parsed.section === 'Rendered_data') {
          actionsRef.current.updateNode(node.id, { props: { ...node.props, [parsed.key]: value } });
        } else {
          actionsRef.current.updateNode(node.id, { data: { ...(node.data ?? {}), [parsed.key]: value } });
        }
      },
      overlayOpen: (payload) => {
        const built = buildModalInstance(stateRef.current.pages, payload ?? { page: '' });
        if ('error' in built) {
          console.error(built.error);
          return;
        }
        actionsRef.current.openModal(built);
      },
      overlayClose: (payload) => {
        actionsRef.current.closeModal(payload?.overlayId, payload?.result);
      },
      custom: {
        'platform.clipboard': async ({ text }: { text?: unknown }) => {
          if (typeof navigator === 'undefined' || !('clipboard' in navigator)) {
            console.warn('[platform.clipboard] clipboard API unavailable in this host');
            return;
          }
          await navigator.clipboard.writeText(String(text ?? ''));
        },
      },
    };
  }, []);

  useEffect(() => registerHostActionAdapters(() => adapters), [adapters]);

  return null;
};
