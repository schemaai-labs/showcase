/**
 * catalog — exhibit directory (consumed by the gallery) plus lazy Lang DSL loading.
 *
 * Data comes from build-time sync artifacts (scripts/sync-exhibits.mjs; see apps/showcase/.gitignore):
 * - `generated/catalog.json`        — template directory, already projected to English;
 * - `generated/templates/<id>.lang.txt` — one Lang DSL document per template, lazy-loaded via import.meta.glob.
 */

import rawCatalog from '../generated/catalog.json';

export interface ExhibitEntry {
  id: string;
  /** Owning tab. */
  tab: string;
  /** Group within the tab (from the manifest). */
  group?: string | null;
  title: string;
  summary?: string;
  tags?: string[];
  pages?: number;
  capabilities?: string[];
  priority?: string;
  /** `sty-` style series — pinned to the top of the gallery and badged as a style piece. */
  style?: boolean;
  /**
   * Language the shipped document is actually written in — `'en'` or `'zh'`.
   *
   * Templates are being translated in batches, so during the rollout some still fall back to
   * their Chinese source. The gallery badges those, so visitors know what to expect before
   * opening one. Remove the badge once the rollout completes.
   */
  lang?: 'en' | 'zh';
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

/** Lazily load an exhibit's Lang DSL text (inlined at build time as its own chunk). */
export async function loadExhibitLang(entry: ExhibitEntry): Promise<string> {
  const loader = TEMPLATE_LANGS[`../generated/${entry.langFile}`];
  if (!loader) {
    throw new Error(`[catalog] Lang asset missing: ${entry.langFile} (re-run sync:exhibits)`);
  }
  return loader();
}

/**
 * Gallery grouping: `sty-` style pieces first within each tab (they lead the external story),
 * everything else in manifest order.
 */
export function templatesByTab(tabId: string): ExhibitEntry[] {
  const list = CATALOG.templates.filter((t) => t.tab === tabId);
  return [...list.filter((t) => t.style), ...list.filter((t) => !t.style)];
}
