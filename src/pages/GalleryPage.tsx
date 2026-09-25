/**
 * GalleryPage — 模板画廊（/）。
 *
 * 结构：头部 → 四主题 tab → 模板卡网格（sty- 风格系列置顶 + 「风格」角标）。
 * 数据全部来自构建期目录（src/generated/catalog.json）。
 */

import React, { useMemo, useState } from 'react';

import { navigate, previewPath } from '../app/router.js';
import { CATALOG, templatesByTab, type ExhibitEntry } from '../exhibits/catalog.js';

const CAPABILITY_LABEL: Record<string, string> = {
  motion: '动效',
  drag: '拖拽',
  data: '数据',
  export: '导出',
};

const CAPABILITY_STYLE: Record<string, string> = {
  motion: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
  drag: 'bg-amber-500/15 text-amber-300 border-amber-400/25',
  data: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
  export: 'bg-sky-500/15 text-sky-300 border-sky-400/25',
};

const TemplateCard: React.FC<{ entry: ExhibitEntry }> = ({ entry }) => (
  <button
    type="button"
    data-showcase-card={entry.id}
    onClick={() => navigate(previewPath(entry.id))}
    className="group text-left rounded-xl overflow-hidden border border-white/10 bg-ink-800/60 hover:border-accent-500/50 hover:bg-ink-800 transition-all flex flex-col"
  >
    <div className="relative aspect-[16/10] bg-ink-900 overflow-hidden">
      {entry.thumb ? (
        <img
          src={entry.thumb}
          alt={entry.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full grid place-items-center text-slate-600 text-xs">无缩略图</div>
      )}
      {entry.style ? (
        <span className="absolute top-2 left-2 text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500/85 text-white font-medium">
          风格系列
        </span>
      ) : null}
      {entry.pages && entry.pages > 1 ? (
        <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-slate-200">
          {entry.pages} 页
        </span>
      ) : null}
    </div>
    <div className="p-3.5 flex flex-col gap-2 flex-1">
      <div className="text-sm font-semibold text-slate-100 leading-snug">{entry.title}</div>
      {entry.summary ? (
        <p className="text-[11px] leading-relaxed text-slate-400 line-clamp-3">{entry.summary}</p>
      ) : null}
      <div className="mt-auto flex items-center gap-1.5 flex-wrap">
        {(entry.capabilities ?? []).map((cap) => (
          <span
            key={cap}
            className={`text-[10px] px-1.5 py-0.5 rounded border ${CAPABILITY_STYLE[cap] ?? 'bg-white/5 text-slate-300 border-white/10'}`}
          >
            {CAPABILITY_LABEL[cap] ?? cap}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-slate-500 group-hover:text-accent-400 transition-colors">
          预览 →
        </span>
      </div>
    </div>
  </button>
);

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATALOG.tabs[0]?.id ?? 'marketing');
  const templates = useMemo(() => templatesByTab(activeTab), [activeTab]);
  const tab = CATALOG.tabs.find((t) => t.id === activeTab);
  const styleCount = templates.filter((t) => t.style).length;

  return (
    <div className="min-h-screen bg-ink-900 text-slate-200">
      <header className="px-8 pt-10 pb-6 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-bold text-white tracking-tight">schemaAI 模板画廊</h1>
            <span className="text-xs text-slate-500">
              {CATALOG.templates.length} 个模板 · 零后端静态渲染
            </span>
          </div>
          <p className="mt-2 text-[13px] text-slate-400 leading-relaxed max-w-3xl">
            这里没有编辑器、没有登录、没有应用管理——只有平台的核心渲染链路：
            <span className="text-slate-300"> Lang DSL → 编译 → 渲染</span>，外加完整的运行时能力
            （动效编排 / 页内滚动 / 浮层 / 拖拽 / 事件代码）。点开任一模板即为真实运行结果。
          </p>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex items-center gap-1.5 flex-wrap">
          {CATALOG.tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              data-showcase-tab={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                t.id === activeTab
                  ? 'bg-accent-500/20 text-accent-400'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-2 text-[11px] text-slate-500">
            {tab?.label} · {templates.length} 个{styleCount > 0 ? `（风格系列 ${styleCount} 个置顶）` : ''}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {templates.map((entry) => (
            <TemplateCard key={entry.id} entry={entry} />
          ))}
        </div>
      </main>

      <footer className="px-8 py-8 text-[11px] text-slate-600 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          展品真源：packages/ai-knowledge/resources · 渲染：@schemaai/renderer-react + lang-compiler + runtime-host
        </div>
      </footer>
    </div>
  );
};
