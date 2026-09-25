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
      className="flex h-12 shrink-0 items-center gap-4 border-b border-ink-700/60 bg-ink-900 px-4 text-ink-300"
    >
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-ink-300 transition-colors hover:bg-ink-800 hover:text-ink-100"
      >
        ← Gallery
      </button>

      <div className="flex min-w-0 items-center gap-1.5">
        {pages.length > 1 ? (
          pages.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => switchPage(page.id)}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors ${
                page.id === state.activePageId
                  ? 'bg-ink-800 font-medium text-ink-100'
                  : 'text-ink-500 hover:bg-ink-800/60 hover:text-ink-300'
              }`}
              data-showcase-page-tab={page.id}
            >
              {page.name || page.id}
            </button>
          ))
        ) : (
          <span className="truncate text-xs text-ink-500">{pages[0]?.name || ''}</span>
        )}
      </div>

      <div className="ml-auto flex items-center gap-0.5 rounded-md bg-ink-850 p-0.5">
        {[
          { label: 'Desktop 1280', value: 1280 },
          { label: 'Mobile 390', value: 390 },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setDeviceWidth(option.value)}
            className={`rounded px-2 py-1 text-[11px] transition-colors ${
              width === option.value
                ? 'bg-ink-700 font-medium text-accent-400'
                : 'text-ink-500 hover:text-ink-300'
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
