/**
 * sync-exhibits — exhibit data sync (static bundling at build time, runs before dev/build).
 *
 * Source of truth = **this repo's** `exhibits/templates/**` (template md + thumbnail png) and
 *                   `exhibits/templates.manifest.json` (the manifest).
 * This script lands "exhibit catalog + Lang DSL text + thumbnails + demo assets" into the app:
 *
 *   src/generated/catalog.json              exhibit catalog (consumed by the gallery)
 *   src/generated/templates/<id>.lang.txt   the template's Lang DSL block (as-is, only asset refs rewritten)
 *   public/exhibits/thumbs/<id>.png         template thumbnails (copied from exhibits/)
 *   public/exhibits/assets/…                demo assets (copied from assets-src/)
 *
 * All outputs are **derived data** (already ignored in .gitignore); re-run this script after
 * changing a template.
 *
 * Note that `exhibits/` itself is an **upstream artifact** (produced by the monorepo's
 * scripts/sync-showcase-exhibits.mjs, which copies from the packages/ai-knowledge source of truth)
 * — template changes belong in the monorepo, not in this repo.
 *
 * Usage: pnpm sync:exhibits (or automatically via predev/prebuild)
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP_DIR = resolve(HERE, '..');
const EXHIBITS_DIR = join(APP_DIR, 'exhibits');
const TEMPLATE_DIR = join(EXHIBITS_DIR, 'templates');

const GEN_DIR = join(APP_DIR, 'src/generated');
const GEN_TEMPLATES = join(GEN_DIR, 'templates');
const PUBLIC_DIR = join(APP_DIR, 'public/exhibits');
const THUMBS_DIR = join(PUBLIC_DIR, 'thumbs');
const ASSETS_DIR = join(PUBLIC_DIR, 'assets');
const ASSETS_SRC = join(APP_DIR, 'assets-src');

/** Demo assets (committed under assets-src/; synced into public for templates to reference). */
const DEMO_ASSETS = [
  { from: 'kitten-portrait.jpg', to: 'images/kitten-portrait.jpg' },
  { from: 'atelier-film.mp4', to: 'videos/atelier-film.mp4' },
  { from: 'low-poly-model.glb', to: 'models/low-poly-model.glb' },
  { from: 'seoul-after-dark-base.png', to: 'images/seoul-after-dark-base.png' },
  { from: 'portfolio-cover-bg.png', to: 'images/portfolio-cover-bg.png' },
  { from: 'portfolio-cover-girl.png', to: 'images/portfolio-cover-girl.png' },
];

/**
 * Extract Lang code blocks from the md (fenced ```lang); keep only blocks containing `<App`.
 */
function extractLangBlocks(markdown) {
  const blocks = [];
  let inFence = false;
  let buf = [];
  const flush = () => {
    if (inFence && buf.length > 0) {
      const text = buf.join('\n').trim();
      if (text.includes('<App')) blocks.push(text);
    }
    buf = [];
    inFence = false;
  };
  for (const line of markdown.split('\n')) {
    const trimmed = line.trim();
    if (inFence) {
      if (trimmed.startsWith('```')) {
        flush();
        continue;
      }
      buf.push(line);
      continue;
    }
    if (trimmed.startsWith('```lang')) {
      inFence = true;
      buf = [];
    }
  }
  flush();
  return blocks;
}

/** Rewrite in-template relative asset refs to static paths (assets/ → /exhibits/assets/; external links pass through). */
function rewriteAssetRefs(text) {
  return text.replace(/(["'(])assets\//g, '$1/exhibits/assets/');
}

function main() {
  if (!existsSync(TEMPLATE_DIR)) {
    throw new Error(
      `Template resource directory missing: ${relative(APP_DIR, TEMPLATE_DIR)}` +
        ` (run pnpm sync:showcase-exhibits in the monorepo first to generate exhibits/)`,
    );
  }
  const manifest = JSON.parse(
    readFileSync(join(EXHIBITS_DIR, 'templates.manifest.json'), 'utf8'),
  );

  rmSync(GEN_DIR, { recursive: true, force: true });
  rmSync(PUBLIC_DIR, { recursive: true, force: true });
  for (const dir of [GEN_TEMPLATES, THUMBS_DIR, ASSETS_DIR]) {
    mkdirSync(dir, { recursive: true });
  }

  // ─── Templates (all built) ───────────────────────────────────────────
  const templates = [];
  let missingThumbs = 0;
  for (const entry of manifest.templates) {
    if (entry.status !== 'built') continue;
    const mdPath = join(TEMPLATE_DIR, entry.tab, `${entry.id}.md`);
    if (!existsSync(mdPath)) {
      throw new Error(`manifest ↔ resource 1:1 broken: missing ${relative(APP_DIR, mdPath)}`);
    }
    const blocks = extractLangBlocks(readFileSync(mdPath, 'utf8'));
    if (blocks.length !== 1) {
      throw new Error(`${entry.id}: template file must contain exactly one Lang block, got ${blocks.length}`);
    }
    const langFile = `templates/${entry.id}.lang.txt`;
    writeFileSync(join(GEN_DIR, langFile), rewriteAssetRefs(blocks[0]), 'utf8');

    const thumbSrc = join(TEMPLATE_DIR, entry.tab, `${entry.id}.png`);
    let thumb = null;
    if (existsSync(thumbSrc)) {
      cpSync(thumbSrc, join(THUMBS_DIR, `${entry.id}.png`));
      thumb = `/exhibits/thumbs/${entry.id}.png`;
    } else {
      missingThumbs += 1;
    }

    templates.push({
      id: entry.id,
      tab: entry.tab,
      group: entry.group ?? null,
      title: entry.title,
      summary: entry.summary,
      tags: entry.tags,
      pages: entry.pages,
      capabilities: entry.capabilities,
      priority: entry.priority,
      style: entry.id.startsWith('sty-'),
      /** Actual language of the body ('en' | 'zh') — templates not yet translated fall back to Chinese during the rollout and the UI badges them accordingly. */
      lang: entry.lang ?? 'en',
      thumb,
      langFile,
    });
  }

  // ─── Demo assets ─────────────────────────────────────────────────────
  const copiedAssets = [];
  for (const asset of DEMO_ASSETS) {
    const from = join(ASSETS_SRC, asset.from);
    if (!existsSync(from)) {
      console.warn(`[sync-exhibits] missing demo asset: assets-src/${asset.from}`);
      continue;
    }
    const to = join(ASSETS_DIR, asset.to);
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to);
    copiedAssets.push(asset.to);
  }

  // ─── Catalog ─────────────────────────────────────────────────────────
  const catalog = {
    generatedAt: new Date().toISOString(),
    tabs: manifest.tabs.map((t) => ({ id: t.id, label: t.label, groups: t.groups ?? [] })),
    templates,
    assets: copiedAssets,
  };
  writeFileSync(join(GEN_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8');

  console.log(
    `[sync-exhibits] templates ${templates.length} (missing thumbs ${missingThumbs}) / assets ${copiedAssets.length} → ${relative(APP_DIR, GEN_DIR)}`,
  );
}

main();
