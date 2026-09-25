/**
 * GalleryPage — the template gallery (`/`).
 *
 * Layout: brand header → statement hero → theme chips → editorial card grid.
 * All data comes from the build-time catalog (src/generated/catalog.json).
 *
 * Design intent: the gallery is a **lightbox for the templates**, and the templates are where the
 * colour lives — 43 pieces each carrying their own art direction. So the chrome stays deliberately
 * flat: one neutral ramp, one accent used only for interactive state, no decorative gradients, and
 * capability markers kept monochrome. Anything louder competes with the work on display.
 *
 * The grid is editorial rather than uniform: the first card of a tab is featured (2×2), which gives
 * the eye somewhere to land before it scans the rest.
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
 * One exhibit card.
 *
 * `featured` promotes it to the 2×2 slot that anchors the tab. The summary is only shown there —
 * on a regular card it would push three lines of small grey text into every tile, which reads as
 * noise at a glance (the title plus the capability markers already say what it is).
 */
const TemplateCard: React.FC<{ entry: ExhibitEntry; featured?: boolean }> = ({
  entry,
  featured = false,
}) => (
  <button
    type="button"
    data-showcase-card={entry.id}
    onClick={() => navigate(previewPath(entry.id))}
    className={`group relative flex flex-col overflow-hidden rounded-xl border border-ink-700/70 bg-ink-850 text-left transition-colors duration-200 hover:border-ink-600 hover:bg-ink-800 ${
      featured ? 'sm:col-span-2 lg:row-span-2' : ''
    }`}
  >
    {/* Thumbnail. `flex-1` lets the featured card's image absorb the extra height of its 2-row span. */}
    <div
      className={`relative overflow-hidden bg-ink-900 ${
        featured ? 'flex-1 min-h-[260px]' : 'aspect-[16/10] shrink-0'
      }`}
    >
      {entry.thumb ? (
        <img
          src={entry.thumb}
          alt={entry.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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

    <div className={`flex flex-col gap-2 ${featured ? 'p-5' : 'p-4'}`}>
      <h3
        className={`font-semibold leading-snug text-ink-100 ${
          featured ? 'text-lg tracking-tight' : 'text-[13px]'
        }`}
      >
        {entry.title}
      </h3>

      {featured && entry.summary ? (
        <p className="max-w-[52ch] text-[13px] leading-relaxed text-ink-400">{entry.summary}</p>
      ) : null}

      {/* Capability markers as plain text, separated by a middot — no chips, no colour, no rotation. */}
      {entry.capabilities?.length ? (
        <div className="mt-0.5 flex items-center gap-2 text-[11px] text-ink-500">
          {entry.capabilities.map((cap, i) => (
            <React.Fragment key={cap}>
              {i > 0 ? <span className="text-ink-600">·</span> : null}
              <span>{CAPABILITY_LABEL[cap] ?? cap}</span>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  </button>
);

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATALOG.tabs[0]?.id ?? 'marketing');
  const templates = useMemo(() => templatesByTab(activeTab), [activeTab]);
  const tab = CATALOG.tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-300">
      {/* ─── Header ─── */}
      <header className="border-b border-ink-700/60">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 sm:px-8">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-[22px] w-[22px] text-accent-500" />
            <span className="text-[15px] font-bold tracking-tight text-ink-100">SchemaAI</span>
            <span className="ml-1 text-[13px] text-ink-500">Showcase</span>
          </div>
          <nav className="flex items-center gap-5 text-[13px]">
            <a
              href="https://github.com/schemaai-labs/showcase"
              target="_blank"
              rel="noreferrer"
              className="text-ink-400 transition-colors hover:text-ink-100"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/org/schemaai"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-ink-800 px-3 py-1.5 font-medium text-ink-200 transition-colors hover:bg-ink-700 hover:text-ink-100"
            >
              npm packages
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Statement hero ─── */}
      <section className="mx-auto max-w-[1240px] px-6 pb-14 pt-16 sm:px-8 sm:pt-24">
        <h1 className="max-w-[18ch] text-4xl font-black leading-[1.05] tracking-tightest text-ink-100 sm:text-5xl lg:text-6xl">
          Schema in.
          <br />
          <span className="text-ink-400">Interface out.</span>
        </h1>
        <p className="mt-7 max-w-[62ch] text-[15px] leading-relaxed text-ink-400">
          The capability showcase for <span className="text-ink-200">SchemaAI</span>, a schema-driven
          low-code engine. Every template below is compiled from the Lang DSL and rendered by the
          engine — in your browser, with no editor, no sign-in and no backend.
        </p>
        <p className="mt-6 text-[13px] text-ink-500">
          {CATALOG.templates.length} templates · {CATALOG.tabs.length} themes · static render
        </p>
      </section>

      {/* ─── Theme chips ─── */}
      <div className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center gap-1 overflow-x-auto px-6 py-3.5 sm:px-8">
          {CATALOG.tabs.map((t) => {
            const active = t.id === activeTab;
            return (
              <button
                key={t.id}
                type="button"
                data-showcase-tab={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`shrink-0 rounded-lg px-3.5 py-1.5 text-[13px] transition-colors duration-150 ${
                  active
                    ? 'bg-ink-800 font-medium text-ink-100'
                    : 'text-ink-500 hover:bg-ink-900 hover:text-ink-300'
                }`}
              >
                {t.label}
              </button>
            );
          })}
          <span className="ml-auto hidden shrink-0 pl-4 text-[12px] text-ink-600 sm:block">
            {tab?.label} · {templates.length}
          </span>
        </div>
      </div>

      {/* ─── Editorial grid ─── */}
      <main className="mx-auto max-w-[1240px] px-6 pb-24 pt-8 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {templates.map((entry, i) => (
            <TemplateCard key={entry.id} entry={entry} featured={i === 0} />
          ))}
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-ink-700/60">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-6 py-10 text-[12px] text-ink-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <BrandMark className="h-3.5 w-3.5 text-ink-600" />
            <span>
              Templates sourced from the SchemaAI monorepo · rendered by{' '}
              <span className="text-ink-500">@schemaai/renderer-react</span> + lang-compiler +
              runtime-host
            </span>
          </div>
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
