/**
 * ExhibitRuntime — the exhibit runtime surface (Lang DSL → compile → render + full capability host).
 *
 * Pipeline (the platform's core rendering pipeline, without the editor form):
 *   exhibit lang text
 *     → parseLangDocument + compileLangDocument (@schemaai/lang-compiler)
 *     → PreviewRuntimeProvider (runtime-core state + hash routing)
 *     → ShowcaseStoreProvider (host store, injecting editorState/editorActions)
 *     → ShowcaseHostAdapters (single-point capability adapter registration)
 *     → ShowcaseCanvas (artboard + recursive ShowcaseNode rendering)
 *     → OverlayLayer (overlays) + ToastHost (feedback)
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { DslInspector } from './DslInspector.js';

// ─── Compilation (DSL text → page tree) ──────────────────────────────────────

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
      i18nLocale: 'en-US',
      featureFlags: {},
    },
  } as PreviewInitPayload;
}

// ─── Runtime surface ────────────────────────────────────────────────────────

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
      <div className="flex h-screen flex-col bg-ink-950">
        {/* <PreviewToolbar /> */}
        <div className="flex min-h-0 flex-1 flex-col bg-ink-950">
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
    return <div className="grid flex-1 place-items-center text-sm text-ink-500">Empty page</div>;
  }
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden bg-ink-950">
      {/* Dark surround + a soft shadow on the frame: the template reads as a lit page in a dark room.
          The shadow also separates dark templates (sty-luxe, ctn-deck's cover) from the backdrop.
          box-shadow only — no ring or border, which would shift layout and break the scroll assertions. */}
      <div
        className="flex min-h-0 flex-1 flex-col overflow-hidden shadow-[0_0_80px_-12px_rgba(0,0,0,0.9)]"
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
  // The compiled source is kept around so the DSL inspector can show it and recompile an edit.
  const [lang, setLang] = useState('');

  useEffect(() => {
    let cancelled = false;
    setPayload(null);
    setError('');
    setLang('');
    loadExhibitLang(entry)
      .then((text) => {
        if (cancelled) return;
        setLang(text);
        setPayload(compileExhibit(text));
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[showcase] failed to compile exhibit ${entry.id}:`, err);
        setError(message);
      });
    return () => {
      cancelled = true;
    };
  }, [entry]);

  /**
   * Swap an edited document into the canvas. Recompiling yields a **new** payload object, which is
   * what the runtime watches (identity, not deep equality) — so the canvas re-renders in place.
   * Failures propagate to the caller; the canvas keeps running the last good document.
   */
  const applyLang = useCallback((next: string) => {
    // Compile first: a failure must leave both the canvas and the inspector's notion of "current
    // source" on the last good document. `lang` is committed alongside the payload so that
    // reopening the panel shows what is actually rendering, not the file's original text.
    const compiled = compileExhibit(next);
    setLang(next);
    setPayload(compiled);
  }, []);

  if (error) {
    return (
      <div className="flex-1 grid place-items-center bg-ink-900">
        <div className="max-w-xl p-6 rounded-xl border border-rose-500/30 bg-rose-500/5 text-rose-200">
          <p className="font-semibold mb-2">Exhibit compilation failed: {entry.id}</p>
          <pre className="text-xs whitespace-pre-wrap text-rose-300/80">{error}</pre>
        </div>
      </div>
    );
  }
  if (!payload) {
    return (
      <div className="flex-1 grid place-items-center bg-ink-950 text-ink-400 text-sm">
        Compiling exhibit DSL…
      </div>
    );
  }

  return (
    <ShowcaseStoreProvider>
      <RuntimeBridge payload={payload} />
      {/* App chrome, not exhibit content — fixed-positioned so it never perturbs the artboard. */}
      <DslInspector lang={lang} onApply={applyLang} />
    </ShowcaseStoreProvider>
  );
};
