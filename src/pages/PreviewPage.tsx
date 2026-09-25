/**
 * PreviewPage — 展品预览页（/preview/<id>）。
 *
 * 无编辑器形态：直接把展品的 Lang DSL 编译成页面树并用平台渲染链路渲染；
 * 能力（motion / nav / data / overlay / 事件代码沙箱）由 runtime 宿主承接。
 */

import React from 'react';

import { navigate } from '../app/router.js';
import { findExhibit } from '../exhibits/catalog.js';
import { ExhibitRuntime } from '../runtime/ExhibitRuntime.js';

export const PreviewPage: React.FC<{ exhibitId: string }> = ({ exhibitId }) => {
  const entry = findExhibit(exhibitId);

  if (!entry) {
    return (
      <div className="min-h-screen grid place-items-center bg-ink-900 text-slate-300">
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold">展品不存在：{exhibitId}</p>
          <p className="text-xs text-slate-500">展品清单由构建期同步生成（sync:exhibits）</p>
          <button
            type="button"
            className="text-sm text-accent-400 hover:text-accent-500"
            onClick={() => navigate('/')}
          >
            ← 回到模板画廊
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-ink-900" data-showcase-exhibit={entry.id}>
      <ExhibitRuntime key={entry.id} entry={entry} />
    </div>
  );
};
