/**
 * PreviewToolbar — 预览页顶栏：返回画廊 / 展品信息 / 页签（多页）/ 设备宽度。
 *
 * 页签切换走 PreviewRuntimeProvider 的 switchPage（= 平台的多页路由：hash 承载
 * routePath）；设备宽度走 setDeviceWidth（画板定宽，桌面 1280 / 移动 390）。
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
    <div className="shrink-0 flex items-center gap-4 px-4 h-12 bg-ink-900 text-slate-300 border-b border-white/10">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
      >
        ← 返回画廊
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
          { label: '桌面 1280', value: 1280 },
          { label: '移动 390', value: 390 },
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

/** 画板视口宽度（PreviewRuntimeProvider 的 deviceWidth 消费面）。 */
export function useArtboardWidth(): number {
  const { deviceWidth } = usePreviewRuntime();
  return deviceWidth ?? 1280;
}
