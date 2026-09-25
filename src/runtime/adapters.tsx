/**
 * adapters — showcase host adapters (capability → side-effect implementation), **registered once**.
 *
 * Differences from the editor (apps/studio-web Renderer.tsx): there every node registers its own
 * adapter closure (including elementRef, so navScroll scrolls to top from that node); the showcase
 * registers once at the app layer (avoiding N merged getters on large templates), and the
 * scroll-to-top origin is the "most recently interacted node" (registered by ShowcaseNode on
 * pointerdown) → falling back to the artboard when there has been no interaction.
 *
 * Capabilities covered: feedback / nav.to / nav.scroll / the whole motion family / data.query /
 * data.refresh / data.setState / overlay.open / overlay.close / platform.clipboard.
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

// ─── Active node registration (navScroll scroll-to-top origin) ───────────────

let lastInteractedElement: HTMLElement | null = null;

/** Registered by ShowcaseNode on pointerdown (module-level: avoids React re-renders). */
export function setActiveNodeElement(element: HTMLElement | null): void {
  lastInteractedElement = element;
}

// ─── Target resolution (same rule as the editor: node name → artboard element)

function artboardScope(): ParentNode {
  return document.querySelector('[data-rb-artboard="true"]') ?? document;
}

/** Node name (or id) → rendered element (not modeled / not rendered → skip and warn). */
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

// ─── Overlay instance construction (aligned with editor-react's overlay contract)

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
    return { error: `overlay.open: page '${pageName}' is not modeled (available pages: ${pages.map((p) => p.name).join(' / ')})` };
  }
  let targetNodeId: string | undefined;
  if (payload.targetNode) {
    const node = findNodeInPages([target], String(payload.targetNode));
    if (!node) {
      return { error: `overlay.open: targetNode '${payload.targetNode}' does not exist on page '${pageName}'` };
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

// ─── Adapter registration (single point) ─────────────────────────────────────

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
      // A2 asyncState derivation (loading → ready/error, written to the owner node's data.asyncState)
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
        console.warn(`[nav.to] route '${target}' is not modeled (the showcase only supports page switching within an exhibit)`);
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
        // payload comes from the capability contract (loose fields) → the executor demands concrete types: narrow at the adapter boundary
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
          console.warn(`[data.setState] invalid path '${path}' (expected DOM.<nodeId>.(data|Rendered_data|General_data).<key>)`);
          return;
        }
        if (!SET_STATE_ALLOWED_SECTIONS.has(parsed.section)) {
          console.warn(`[data.setState] section '${parsed.section}' is not writable (only data / Rendered_data / General_data)`);
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
