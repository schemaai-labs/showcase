/**
 * GalleryPage — the template gallery (`/`).
 *
 * Layout: brand header → theme chips → uniform card grid.
 * All data comes from the build-time catalog (src/generated/catalog.json).
 *
 * Design intent: the gallery is a **lightbox for the templates**, and the templates are where the
 * colour lives — 43 pieces each carrying their own art direction. So the chrome stays deliberately
 * flat: one neutral ramp, one accent used only for interactive state, no decorative gradients, and
 * capability markers kept monochrome. Anything louder competes with the work on display.
 *
 * The grid is **uniform**: every card is the same size so no template is visually promoted over
 * another. The thumbnail is the subject, so the text strip below it stays to a single compact row.
 */

import React, { useMemo, useState } from 'react';

import { navigate, previewPath } from '../app/router.js';
import { CATALOG, templatesByTab, type ExhibitEntry } from '../exhibits/catalog.js';

/** Capability marker vocabulary. Monochrome on purpose — see the file header. */
const CAPABILITY_LABEL: Record<string, string> = {
  motion: 'Motion',
  drag: 'Drag',
  data: 'Data',
  export: 'Export',
};

/** Brand mark — the same schema-node glyph as the favicon, inlined so it inherits currentColor. */
const BrandMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M16 11.7v3.4M16 15.1l-6.4 5.2M16 15.1l6.4 5.2" />
    </g>
    <g fill="currentColor">
      <circle cx="16" cy="8.5" r="3.2" />
      <circle cx="8.5" cy="22.5" r="3.2" />
      <circle cx="23.5" cy="22.5" r="3.2" />
    </g>
  </svg>
);

/**
 * One exhibit card. Uniform by design — see the file header.
 *
 * The text strip is deliberately one row: title on the left, capability markers on the right.
 * The thumbnail is what a visitor is scanning; a paragraph under every tile slows that scan down
 * and pushes the cards apart.
 */
const TemplateCard: React.FC<{ entry: ExhibitEntry }> = ({ entry }) => (
  <button
    type="button"
    data-showcase-card={entry.id}
    onClick={() => navigate(previewPath(entry.id))}
    className="group relative flex flex-col overflow-hidden rounded-xl border border-ink-700/70 bg-ink-850 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-600 hover:bg-ink-800 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)] active:translate-y-0 active:duration-75"
  >
    {/* Thumbnail — the subject of the card. */}
    <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-ink-900">
      {entry.thumb ? (
        <img
          src={entry.thumb}
          alt={entry.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center text-[11px] text-ink-600">
          No thumbnail
        </div>
      )}

      {/* Thumbnail overlays. The hairline ring matters: these pills sit on artwork we don't control,
          and templates range from paper-white to near-black — a border keeps them legible on both. */}
      <div className="absolute left-3 top-3 flex items-center gap-1.5">
        {entry.style ? (
          <span className="rounded-full bg-ink-950/75 px-2 py-0.5 text-[10px] font-medium text-ink-300 ring-1 ring-white/10 backdrop-blur-sm">
            Style series
          </span>
        ) : null}
        {/* Translation rollout marker. Not a badge to be proud of — it exists so a visitor knows
            what they will get before opening a template, and disappears as the rollout completes. */}
        {entry.lang === 'zh' ? (
          <span
            title="Body not translated yet — this template renders in Chinese"
            className="rounded-full bg-ink-950/75 px-2 py-0.5 text-[10px] font-medium text-ink-300 ring-1 ring-white/10 backdrop-blur-sm"
          >
            中文
          </span>
        ) : null}
      </div>

      {entry.pages && entry.pages > 1 ? (
        <span className="absolute right-3 top-3 rounded-full bg-ink-950/75 px-2 py-0.5 text-[10px] font-medium text-ink-300 ring-1 ring-white/10 backdrop-blur-sm">
          {entry.pages} pages
        </span>
      ) : null}

      {/* Single affordance: the whole card is the button, so the hover cue is a corner arrow
          rather than a second call to action competing with the title. */}
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full bg-accent-500 text-ink-950 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8h9M8.5 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>

    {/* One compact row: title left, capability markers right. */}
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <h3 className="truncate text-[13px] font-semibold tracking-tight text-ink-100">
        {entry.title}
      </h3>
      {entry.capabilities?.length ? (
        <span className="flex shrink-0 items-center gap-1.5 text-[11px] text-ink-500">
          {entry.capabilities.map((cap) => (
            <span key={cap}>{CAPABILITY_LABEL[cap] ?? cap}</span>
          ))}
        </span>
      ) : null}
    </div>
  </button>
);

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATALOG.tabs[0]?.id ?? 'marketing');
  const templates = useMemo(() => templatesByTab(activeTab), [activeTab]);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-300">
      {/* ─── Header ───
          Centred cluster rather than brand-left / actions-right: the page carries a single identity
          and a single outbound link, so spreading them to opposite edges just reads as empty. */}
      <header className="border-b border-ink-700/60">
        <div className="mx-auto flex max-w-[2560px] items-center justify-center gap-6 px-6 py-4 sm:px-10">
          <span className="group flex items-center gap-2.5">
            <BrandMark className="h-5 w-5 text-accent-500 transition-transform duration-300 ease-out group-hover:rotate-[18deg] group-hover:scale-110" />
            <span className="text-[15px] font-bold tracking-tight text-ink-100">SchemaAI</span>
          </span>
          <a
            href="https://github.com/schemaai-labs/showcase"
            target="_blank"
            rel="noreferrer"
            className="group relative text-[13px] text-ink-400 transition-colors duration-200 hover:text-ink-100"
          >
            GitHub
            {/* Sliding underline — the hover cue reads as motion, not as a colour swap. */}
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-500 transition-transform duration-200 group-hover:scale-x-100" />
          </a>
        </div>
      </header>

      {/* ─── Theme chips ─── */}
      <div className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[2560px] items-center justify-center gap-1 overflow-x-auto px-6 py-3 sm:px-10">
          {CATALOG.tabs.map((t) => {
            const active = t.id === activeTab;
            return (
              <button
                key={t.id}
                type="button"
                data-showcase-tab={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`group relative shrink-0 rounded-lg px-4 py-2 text-[13px] transition-all duration-200 active:scale-[0.97] ${
                  active
                    ? 'bg-ink-800/70 font-medium text-ink-100'
                    : 'text-ink-500 hover:bg-ink-900 hover:text-ink-200'
                }`}
              >
                {t.label}
                {/* Accent underline: slides in under the active chip, and peeks in on hover so the
                    control feels responsive before it becomes the active one. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-2.5 bottom-0.5 h-px origin-center bg-accent-500 transition-transform duration-200 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Uniform grid ───
          Near-full-bleed: a gallery is scanned as images, and images don't suffer from long lines
          the way body text does. Columns grow with the viewport so cards stay large on wide
          displays instead of the layout hugging a narrow column down the middle. */}
      <main className="mx-auto max-w-[2560px] px-6 pb-20 pt-6 sm:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {templates.map((entry) => (
            <TemplateCard key={entry.id} entry={entry} />
          ))}
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-ink-700/60">
        <div className="mx-auto flex max-w-[2560px] flex-col items-center gap-3 px-6 py-8 text-[12px] text-ink-600 sm:flex-row sm:justify-center sm:gap-6 sm:px-10">
          <span className="flex items-center gap-2">
            <BrandMark className="h-3.5 w-3.5 text-ink-600" />
            <span>
              Templates from the SchemaAI monorepo · rendered by{' '}
              <span className="text-ink-500">@schemaai/renderer-react</span> + lang-compiler +
              runtime-host
            </span>
          </span>
          <a
            href="https://github.com/schemaai-labs/showcase/blob/main/CREDITS.md"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink-400"
          >
            Credits
          </a>
        </div>
      </footer>
    </div>
  );
};
