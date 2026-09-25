/**
 * catalog — 展品目录（画廊消费）+ Lang DSL 懒加载。
 *
 * 数据来自构建期同步产物（scripts/sync-exhibits.mjs，见 apps/showcase/.gitignore）：
 * - `generated/catalog.json`：模板目录（ai-knowledge manifest 投影）；
 * - `generated/templates/<id>.lang.txt`：每模板一份 Lang DSL 文本（import.meta.glob 懒加载）。
 */

import rawCatalog from '../generated/catalog.json';

export interface ExhibitEntry {
  id: string;
  /** 所属 tab。 */
  tab: string;
  /** tab 内分组（manifest group）。 */
  group?: string | null;
  title: string;
  summary?: string;
  tags?: string[];
  pages?: number;
  capabilities?: string[];
  priority?: string;
  /** sty- 风格系列（画廊置顶 + 「风格」角标）。 */
  style?: boolean;
  thumb?: string | null;
  langFile: string;
}

export interface CatalogTab {
  id: string;
  label: string;
  groups: Array<{ id: string; label: string }>;
}

export interface ShowcaseCatalog {
  generatedAt: string;
  tabs: CatalogTab[];
  templates: ExhibitEntry[];
  assets: string[];
}

export const CATALOG = rawCatalog as unknown as ShowcaseCatalog;

const TEMPLATE_LANGS = import.meta.glob('../generated/templates/*.lang.txt', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

export function findExhibit(id: string): ExhibitEntry | undefined {
  return CATALOG.templates.find((entry) => entry.id === id);
}

/** 懒加载展品的 Lang DSL 文本（构建期已内联为独立 chunk）。 */
export async function loadExhibitLang(entry: ExhibitEntry): Promise<string> {
  const loader = TEMPLATE_LANGS[`../generated/${entry.langFile}`];
  if (!loader) {
    throw new Error(`[catalog] Lang 资源缺失：${entry.langFile}（请重跑 sync:exhibits）`);
  }
  return loader();
}

/**
 * 画廊分组：每 tab 内 **sty- 风格系列置顶**（对外宣传优先），其余按 manifest 原序。
 */
export function templatesByTab(tabId: string): ExhibitEntry[] {
  const list = CATALOG.templates.filter((t) => t.tab === tabId);
  return [...list.filter((t) => t.style), ...list.filter((t) => !t.style)];
}
