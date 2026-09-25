/**
 * ExhibitRuntime — 展品运行面（Lang DSL → 编译 → 渲染 + 完整能力宿主）。
 *
 * 链路（就是平台的核心渲染链路，无编辑器形态）：
 *   展品 lang 文本
 *     → parseLangDocument + compileLangDocument（@schemaai/lang-compiler）
 *     → PreviewRuntimeProvider（runtime-core 状态 + hash 路由）
 *     → ShowcaseStoreProvider（宿主 store，注入 editorState/editorActions）
 *     → ShowcaseHostAdapters（能力适配器单点注册）
 *     → ShowcaseCanvas（画板 + ShowcaseNode 递归渲染）
 *     → OverlayLayer（浮层）+ ToastHost（feedback）
 */

import React, { useEffect, useMemo, useState } from 'react';
import { PreviewRuntimeProvider, type PreviewRuntimeEditorActions } from '@schemaai/renderer-react';
import { compileLangDocument, parseLangDocument } from '@schemaai/lang-compiler';
import type { PreviewInitPayload } from '@schemaai/runtime-core';

import { loadExhibitLang, type ExhibitEntry } from '../exhibits/catalog.js';
import { ShowcaseStoreProvider, useShowcaseStore } from './store.js';
import { ShowcaseHostAdapters } from './adapters.js';
import { ShowcaseCanvas } from './ShowcaseNode.js';
import { OverlayLayer } from './OverlayLayer.js';
import { ToastHost } from './toast.js';
import { PreviewToolbar, useArtboardWidth } from './PreviewToolbar.js';

// ─── 编译（DSL 文本 → 页面树）─────────────────────────────────────────────

function compileExhibit(lang: string): PreviewInitPayload {
  const document = parseLangDocument(lang);
  const app = compileLangDocument(document);
  return {
    pages: app.pages,
    activePageId: app.activePageId,
    variables: [],
    runtimeValues: {},
    queryResults: {},
    tenantContext: {
      tenantId: 'showcase',
      apiBaseUrl: '',
      i18nLocale: 'zh-CN',
      featureFlags: {},
    },
  } as PreviewInitPayload;
}

// ─── 运行面 ───────────────────────────────────────────────────────────────

const RuntimeBridge: React.FC<{ payload: PreviewInitPayload }> = ({ payload }) => {
  const { state, actions } = useShowcaseStore();
  const editorState = useMemo(
    () => ({
      pages: state.pages,
      activePageId: state.activePageId,
      runtimeValues: state.runtimeValues,
    }),
    [state.pages, state.activePageId, state.runtimeValues],
  );

  return (
    <PreviewRuntimeProvider
      tenantId="showcase"
      appId="showcase"
      standalone
      initialPayload={payload}
      editorState={editorState}
      editorActions={actions as unknown as PreviewRuntimeEditorActions}
    >
      <ShowcaseHostAdapters />
      <ToastHost />
      <div className="flex flex-col h-screen bg-ink-900">
        <PreviewToolbar />
        <div className="flex-1 min-h-0 flex flex-col bg-slate-200">
          <CanvasSurface />
        </div>
      </div>
      <OverlayLayer />
    </PreviewRuntimeProvider>
  );
};

const CanvasSurface: React.FC = () => {
  const { state } = useShowcaseStore();
  const artboardWidth = useArtboardWidth();
  const page = state.pages.find((p) => p.id === state.activePageId) ?? state.pages[0];
  if (!page) {
    return <div className="flex-1 grid place-items-center text-slate-500 text-sm">页面为空</div>;
  }
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden bg-slate-300/60">
      <div
        className="min-h-0 flex-1 flex flex-col overflow-hidden"
        style={{ width: artboardWidth, maxWidth: '100%', margin: '0 auto' }}
        data-showcase-artboard-frame="true"
      >
        <ShowcaseCanvas pageTree={page.tree} layoutStrategy={page.layoutStrategy} />
      </div>
    </div>
  );
};

export const ExhibitRuntime: React.FC<{ entry: ExhibitEntry }> = ({ entry }) => {
  const [payload, setPayload] = useState<PreviewInitPayload | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    setPayload(null);
    setError('');
    loadExhibitLang(entry)
      .then((lang) => {
        if (cancelled) return;
        setPayload(compileExhibit(lang));
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[showcase] 展品 ${entry.id} 编译失败：`, err);
        setError(message);
      });
    return () => {
      cancelled = true;
    };
  }, [entry]);

  if (error) {
    return (
      <div className="flex-1 grid place-items-center bg-ink-900">
        <div className="max-w-xl p-6 rounded-xl border border-rose-500/30 bg-rose-500/5 text-rose-200">
          <p className="font-semibold mb-2">展品编译失败：{entry.id}</p>
          <pre className="text-xs whitespace-pre-wrap text-rose-300/80">{error}</pre>
        </div>
      </div>
    );
  }
  if (!payload) {
    return (
      <div className="flex-1 grid place-items-center bg-ink-900 text-slate-400 text-sm">
        正在编译展品 DSL…
      </div>
    );
  }

  return (
    <ShowcaseStoreProvider>
      <RuntimeBridge payload={payload} />
    </ShowcaseStoreProvider>
  );
};
