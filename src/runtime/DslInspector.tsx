/**
 * DslInspector — the preview page's "Lang DSL" affordance: a floating button that opens the
 * exhibit's own Lang DSL source, lets the visitor edit it, and re-renders on Apply.
 *
 * Apply recompiles the text in place (parseLangDocument + compileLangDocument, same pipeline the
 * runtime bootstrapped with) and hands the parent a fresh payload object; the runtime hydrates on
 * payload **identity** (renderer-react runtime-provider), so the canvas re-renders without a remount.
 *
 * Session-only by design: the edit lives in React state and dies with the page, so a reload always
 * restores the template's committed source. Nothing is persisted — no storage, no write-back, no
 * URL.
 *
 * This is app chrome, not rendered content: marked `data-showcase-chrome` so the thumbnail pipeline
 * hides it (same contract as the preview toolbar).
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';

// ─── Glyphs ─────────────────────────────────────────────────────────────────
// Hand-drawn inline SVG, like the gallery's BrandMark: the app ships no icon library, so chrome
// glyphs stay in the same stroke language (currentColor, 1.8, round caps) and cost no dependency.

/** `</>` — the panel's subject is markup, so the mark is markup. */
const CodeMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8.6 7.4 4 12l4.6 4.6" />
    <path d="M15.4 7.4 20 12l-4.6 4.6" />
    <path d="M13.4 6.6 10.6 17.4" />
  </svg>
);

const CloseMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
  </svg>
);

const PlayMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M8 5.6v12.8L18.6 12z" />
  </svg>
);

interface DslInspectorProps {
  /** The DSL the canvas is currently running. Seeds the editor every time it opens. */
  lang: string;
  /**
   * Compile `next` and swap it into the canvas. **Throws** on a parse/compile error, in which case
   * the message is surfaced in the panel and the canvas is left untouched.
   */
  onApply: (next: string) => void;
}

/** Keeps the button fully on screen (44px button + 8px breathing room). */
const BUTTON_SIZE = 44;
const EDGE = 8;
const clampToViewport = (x: number, y: number) => ({
  x: Math.min(Math.max(x, EDGE), Math.max(EDGE, window.innerWidth - BUTTON_SIZE - EDGE)),
  y: Math.min(Math.max(y, EDGE), Math.max(EDGE, window.innerHeight - BUTTON_SIZE - EDGE)),
});

/** Pointer travel (px) past which a press counts as a drag and no longer opens the panel. */
const DRAG_THRESHOLD = 4;

export const DslInspector: React.FC<DslInspectorProps> = ({ lang, onApply }) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(lang);
  const [error, setError] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // The button is draggable so it can be parked out of the way of whatever the exhibit renders in
  // the corner. `null` = the default bottom-right dock; a position only lives in this session (no
  // storage), so a reload puts the button back where the design puts it.
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ active: false, moved: false, pointerId: -1, offsetX: 0, offsetY: 0, startX: 0, startY: 0 });
  const suppressClickRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    // Left button / touch / pen only — a right-click is not a drag.
    if (e.button !== 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = {
      active: true,
      moved: false,
      pointerId: e.pointerId,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      startX: e.clientX,
      startY: e.clientY,
    };
    suppressClickRef.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.stopPropagation();
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    const d = dragRef.current;
    if (!d.active) return;
    if (!d.moved) {
      // Below the threshold this is still a click-in-waiting, so the button must not twitch.
      if (Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < DRAG_THRESHOLD) return;
      d.moved = true;
      setDragging(true);
    }
    setPos(clampToViewport(e.clientX - d.offsetX, e.clientY - d.offsetY));
  }, []);

  const endDrag = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;
    if (e.currentTarget.hasPointerCapture(d.pointerId)) {
      e.currentTarget.releasePointerCapture(d.pointerId);
    }
    // A real drag must not also fire the click that opens the panel.
    suppressClickRef.current = d.moved;
    setDragging(false);
  }, []);

  // A window that shrinks under a parked button would strand it off screen.
  useEffect(() => {
    if (!pos) return;
    const onResize = () => setPos((p) => (p ? clampToViewport(p.x, p.y) : p));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [pos]);

  // Seed the editor from the live source on every open: a discarded draft must not leak into the
  // next session, and an applied edit must be what reopens.
  const openPanel = useCallback(() => {
    setDraft(lang);
    setError('');
    setOpen(true);
  }, [lang]);

  const closePanel = useCallback(() => setOpen(false), []);

  // A drag ends with a click event on the button; that click must not also open the panel.
  const handleClick = useCallback(() => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    openPanel();
  }, [openPanel]);

  const handleApply = useCallback(() => {
    if (!draft.trim()) {
      setError('The document is empty — nothing to compile.');
      return;
    }
    try {
      onApply(draft);
      setError('');
      setOpen(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }, [draft, onApply]);

  // Esc closes. Captured at the window **in the capture phase** on purpose: the panel stops keydown
  // from bubbling (so typing here cannot reach the exhibit's own key handling), and a bubble-phase
  // listener up here would never see the event.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', onKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', onKeyDown, { capture: true });
  }, [open, closePanel]);

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={pos ? { left: pos.x, top: pos.y } : undefined}
        data-showcase-chrome
        data-showcase-dsl-open
        data-showcase-dsl-dragging={dragging ? 'true' : undefined}
        aria-label="View the Lang DSL source (draggable)"
        className={`group fixed z-[990] grid h-11 w-11 touch-none select-none place-items-center rounded-full border border-ink-700/60 bg-ink-900/85 text-ink-400 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur ${
          pos ? '' : 'bottom-5 right-5'
        } ${
          // Transitions are what make the docked button feel alive — and what would make a drag
          // feel like it is on a rubber band. Off while the pointer owns the position.
          dragging
            ? 'cursor-grabbing transition-none'
            : 'cursor-grab transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-400 hover:shadow-[0_14px_36px_-12px_rgba(0,212,255,0.35)] active:translate-y-0 active:duration-75'
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950`}
      >
        <CodeMark className="h-[18px] w-[18px]" />
        {/* Label lives in a hover/focus tooltip instead of the button face — the chrome recedes
            until you go looking for it. Hidden mid-drag: it would sit under the cursor. */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-ink-700/60 bg-ink-850 px-2.5 py-1.5 text-[11px] font-medium text-ink-300 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 ${
            dragging ? 'hidden' : ''
          }`}
        >
          View source · Lang DSL · drag to move
        </span>
      </button>
    );
  }

  return (
    <div
      data-showcase-chrome
      data-showcase-dsl-panel
      role="dialog"
      aria-modal="true"
      aria-label="Lang DSL"
      className="fixed inset-0 z-[1000]"
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={closePanel} />
      <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
        <div className="pointer-events-auto flex h-[min(80vh,760px)] w-[min(1040px,92vw)] flex-col overflow-hidden rounded-xl border border-ink-700/60 bg-ink-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)] transition-colors focus-within:border-ink-600">
          {/* Header */}
          <div className="flex h-12 shrink-0 items-center gap-2.5 border-b border-ink-700/60 px-4">
            <CodeMark className="h-4 w-4 text-accent-500" />
            <span className="text-sm font-semibold text-ink-100">Lang DSL</span>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close"
              data-showcase-dsl-close
              className="ml-auto grid h-7 w-7 place-items-center rounded-md text-ink-500 transition-colors hover:bg-ink-800 hover:text-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/70"
            >
              <CloseMark className="h-4 w-4" />
            </button>
          </div>

          {/* Editor */}
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              setError('');
            }}
            spellCheck={false}
            data-showcase-dsl-input
            className="min-h-0 flex-1 resize-none border-0 bg-ink-950 p-4 font-mono text-[12px] leading-relaxed text-ink-300 outline-none whitespace-pre selection:bg-accent-500/30 selection:text-ink-100"
          />

          {/* Footer */}
          <div className="flex shrink-0 items-center gap-3 border-t border-ink-700/60 px-4 py-3">
            {/* Edits are local to this session — reloading the page restores the original source. */}
            {error && (
              <p
                data-showcase-dsl-error
                className="min-w-0 flex-1 overflow-auto whitespace-pre-wrap rounded-md border border-rose-500/30 bg-rose-500/10 px-2.5 py-1.5 font-mono text-[11px] text-rose-200"
              >
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={handleApply}
              data-showcase-dsl-apply
              className="ml-auto flex shrink-0 items-center gap-1.5 rounded-md bg-accent-500 px-4 py-2 text-xs font-semibold text-ink-950 transition-all duration-150 hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 active:scale-[0.97]"
            >
              <PlayMark className="h-3.5 w-3.5" />
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
