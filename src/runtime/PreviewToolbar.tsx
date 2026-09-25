/**
 * PreviewToolbar — preview page top bar: back to gallery / exhibit info / page tabs (multi-page) /
 * device width.
 *
 * Page tabs go through PreviewRuntimeProvider's switchPage (= the platform's multi-page routing:
 * the hash carries routePath); device width goes through setDeviceWidth (fixed artboard width:
 * desktop 1280 / mobile 390).
 */

import React from 'react';
import { usePreviewRuntime } from '@schemaai/renderer-react';

import { useShowcaseStore } from './store.js';
import { navigate } from '../app/router.js';

export const PreviewToolbar: React.FC = () => {
  const { state } = useShowcaseStore();
  const { switchPage, deviceWidth, setDeviceWidth } = usePreviewRuntime();
  const pages = state.pages;
  const width = deviceWidth ?? 1280;

  return (
    <div
      data-showcase-toolbar
      className="shrink-0 flex items-center gap-4 px-4 h-12 bg-ink-900 text-slate-300 border-b border-white/10"
    >
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
      >
        ← Back to the gallery
      </button>

      <div className="flex items-center gap-2 min-w-0">
        {pages.length > 1 ? (
          pages.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => switchPage(page.id)}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                page.id === state.activePageId
                  ? 'bg-accent-500/20 text-accent-400'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
              data-showcase-page-tab={page.id}
            >
              {page.name || page.id}
            </button>
          ))
        ) : (
          <span className="text-xs text-slate-400 truncate">{pages[0]?.name || ''}</span>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1 bg-white/5 rounded-md p-0.5">
        {[
          { label: 'Desktop 1280', value: 1280 },
          { label: 'Mobile 390', value: 390 },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setDeviceWidth(option.value)}
            className={`text-[11px] px-2 py-1 rounded transition-colors ${
              width === option.value ? 'bg-accent-500/25 text-accent-400' : 'hover:bg-white/10'
            }`}
            data-showcase-device={option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/** Artboard viewport width (consumer of PreviewRuntimeProvider's deviceWidth). */
export function useArtboardWidth(): number {
  const { deviceWidth } = usePreviewRuntime();
  return deviceWidth ?? 1280;
}
