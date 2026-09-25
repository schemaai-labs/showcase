/**
 * sync-exhibits — 展品数据同步（构建期静态打包，dev/build 前置）。
 *
 * 真源 = **本仓** `exhibits/templates/**`（模板 md + 缩略图 png）与
 *        `exhibits/templates.manifest.json`（清单）。
 * 本脚本把「展品目录 + Lang DSL 文本 + 缩略图 + 演示素材」落进应用：
 *
 *   src/generated/catalog.json              展品目录（画廊消费）
 *   src/generated/templates/<id>.lang.txt   模板的 Lang DSL 块（原样，仅素材引用改写）
 *   public/exhibits/thumbs/<id>.png         模板缩略图（自 exhibits/ 复制）
 *   public/exhibits/assets/…                演示素材（自 assets-src/ 复制）
 *
 * 产物均为**派生数据**（.gitignore 已忽略），改模板后重跑本脚本即可。
 *
 * 注意 `exhibits/` 本身是**上游生成物**（monorepo 的 scripts/sync-showcase-exhibits.mjs
 * 从 packages/ai-knowledge 真源复制而来）——改模板要去 monorepo 改，不要在本仓手改。
 *
 * 用法：pnpm sync:exhibits（或 predev/prebuild 自动跑）
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

/** 演示素材（提交在 assets-src/；同步进 public 供模板引用）。 */
const DEMO_ASSETS = [
  { from: 'kitten-portrait.jpg', to: 'images/kitten-portrait.jpg' },
  { from: 'atelier-film.mp4', to: 'videos/atelier-film.mp4' },
  { from: 'low-poly-model.glb', to: 'models/low-poly-model.glb' },
  { from: 'seoul-after-dark-base.png', to: 'images/seoul-after-dark-base.png' },
  { from: 'portfolio-cover-bg.png', to: 'images/portfolio-cover-bg.png' },
  { from: 'portfolio-cover-girl.png', to: 'images/portfolio-cover-girl.png' },
];

/**
 * 抽 md 里的 Lang 代码块（栅栏 ```lang）；只保留含 `<App` 的块。
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

/** 模板内素材相对引用改写为静态路径（assets/ → /exhibits/assets/，外链原样透传）。 */
function rewriteAssetRefs(text) {
  return text.replace(/(["'(])assets\//g, '$1/exhibits/assets/');
}

function main() {
  if (!existsSync(TEMPLATE_DIR)) {
    throw new Error(
      `模板资源目录不存在：${relative(APP_DIR, TEMPLATE_DIR)}` +
        `（请先在 monorepo 跑 pnpm sync:showcase-exhibits 生成 exhibits/）`,
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

  // ─── 模板（全部 built）────────────────────────────────────────────────
  const templates = [];
  let missingThumbs = 0;
  for (const entry of manifest.templates) {
    if (entry.status !== 'built') continue;
    const mdPath = join(TEMPLATE_DIR, entry.tab, `${entry.id}.md`);
    if (!existsSync(mdPath)) {
      throw new Error(`manifest ↔ 资源 1:1 破裂：缺 ${relative(APP_DIR, mdPath)}`);
    }
    const blocks = extractLangBlocks(readFileSync(mdPath, 'utf8'));
    if (blocks.length !== 1) {
      throw new Error(`${entry.id}: 模板文件应恰一 Lang 块，实得 ${blocks.length}`);
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
      thumb,
      langFile,
    });
  }

  // ─── 演示素材 ─────────────────────────────────────────────────────────
  const copiedAssets = [];
  for (const asset of DEMO_ASSETS) {
    const from = join(ASSETS_SRC, asset.from);
    if (!existsSync(from)) {
      console.warn(`[sync-exhibits] 缺演示素材：assets-src/${asset.from}`);
      continue;
    }
    const to = join(ASSETS_DIR, asset.to);
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to);
    copiedAssets.push(asset.to);
  }

  // ─── 目录 ─────────────────────────────────────────────────────────────
  const catalog = {
    generatedAt: new Date().toISOString(),
    tabs: manifest.tabs.map((t) => ({ id: t.id, label: t.label, groups: t.groups ?? [] })),
    templates,
    assets: copiedAssets,
  };
  writeFileSync(join(GEN_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8');

  console.log(
    `[sync-exhibits] 模板 ${templates.length}（缺图 ${missingThumbs}）/ 素材 ${copiedAssets.length} → ${relative(APP_DIR, GEN_DIR)}`,
  );
}

main();
