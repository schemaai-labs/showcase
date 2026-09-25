/**
 * capability-e2e — capability proof for the showcase (real browser).
 *
 * How to run: start `pnpm --filter showcase dev` (:3010), then `node apps/showcase/tests/capability-e2e.mjs`.
 * Assertions cover the gallery directory (43 curated templates / four tabs / sty- pinned first / thumbnails
 * reachable) and that **platform capabilities actually work inside the templates** — motion
 * (Animate + motion.counter), multi-page nav.to, in-page nav.scroll (back to top + landing offset),
 * overlay.open/close (sub-page + onOverlayInit payload + cross-page write-back), Sortable drag
 * (data-axis across columns), and the event-code sandbox (DOM.data write-back / controlled
 * validation bindings).
 */

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = process.env.SHOWCASE_BASE_URL || 'http://localhost:3010';

const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok: Boolean(ok), detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(String(e).slice(0, 240)));
page.on('console', (m) => {
  if (m.type() === 'error') pageErrors.push(`[console] ${m.text().slice(0, 240)}`);
});

const openExhibit = async (id) => {
  await page.goto(`${BASE}/preview/${id}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('[data-rb-artboard="true"]', { timeout: 20000 });
  await page.waitForTimeout(700);
};

const probeScrollport = (nodeId) =>
  page.evaluate((id) => {
    const el = document.querySelector(`[data-node-id="${id}"]`);
    if (!el) return null;
    const isScrollable = (n) => {
      const cs = getComputedStyle(n);
      return /(auto|scroll|overlay)/.test(cs.overflowY) && n.scrollHeight - n.clientHeight > 4;
    };
    let port = null;
    let cur = el.parentElement;
    while (cur) {
      if (isScrollable(cur)) {
        port = cur;
        break;
      }
      cur = cur.parentElement;
    }
    port = port || document.scrollingElement;
    return { scrollTop: Math.round(port.scrollTop), scrollHeight: port.scrollHeight };
  }, nodeId);

// ─── 1. Gallery directory ────────────────────────────────────────────────

await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

const tabIds = await page.$$eval('[data-showcase-tab]', (els) =>
  els.map((e) => e.getAttribute('data-showcase-tab')),
);
check('Gallery: all four theme tabs present', tabIds.join(',') === 'marketing,product,content,interaction', tabIds.join(','));

let pinnedOk = true;
const perTabFirst = {};
const perTabCount = {};
for (const tab of tabIds) {
  await page.click(`[data-showcase-tab="${tab}"]`);
  await page.waitForTimeout(150);
  const ids = await page.$$eval('[data-showcase-card]', (els) =>
    els.map((e) => e.getAttribute('data-showcase-card')),
  );
  perTabFirst[tab] = ids[0];
  perTabCount[tab] = ids.length;
  if (!String(ids[0]).startsWith('sty-')) pinnedOk = false;
}
check('Gallery: first card of every tab is a pinned sty- style piece', pinnedOk, JSON.stringify(perTabFirst));

// 43 = the upstream set (47) minus the four curated out by exhibits.config.json.
// Deliberately hardcoded: a count drift here means templates were lost or leaked in.
const EXPECTED_TEMPLATES = 43;
const templateTotal = Object.values(perTabCount).reduce((sum, n) => sum + n, 0);
check(
  `Gallery: all ${EXPECTED_TEMPLATES} templates are clickable (sum across four tabs)`,
  templateTotal === EXPECTED_TEMPLATES,
  `perTab=${JSON.stringify(perTabCount)} → total=${templateTotal}`,
);

const thumbStatus = await page.evaluate(async () => {
  const srcs = Array.from(document.querySelectorAll('img[src^="/exhibits/thumbs/"]')).map((i) => i.getAttribute('src'));
  const statuses = [];
  for (const src of srcs) {
    const res = await fetch(src, { method: 'GET' });
    statuses.push(res.status);
  }
  return { count: srcs.length, bad: statuses.filter((s) => s !== 200).length };
});
check('Gallery: every thumbnail returns 200', thumbStatus.count > 0 && thumbStatus.bad === 0, JSON.stringify(thumbStatus));

// ─── 2. Motion: Animate entrance + motion.counter number roll ────────────

await openExhibit('mkt-landing');
const counterTextual0 = await page.textContent('[data-node-id="hero_stat_teams_value"]');
const animatedSoon = await page
  .waitForFunction(
    () => {
      const root = document.querySelector('[data-node-id="hero_reveal"]');
      if (!root) return false;
      const nodes = [root, ...root.querySelectorAll('*')];
      return nodes.some((n) => {
        const cs = getComputedStyle(n);
        return cs.transform !== 'none' || (cs.opacity !== '' && Number(cs.opacity) < 1);
      });
    },
    { timeout: 1200 },
  )
  .then(() => true)
  .catch(() => false);
check('mkt-landing: Animate onMount entrance motion applied', animatedSoon, `first text=${counterTextual0}`);
await page.waitForTimeout(2600);
const counterTextual1 = await page.textContent('[data-node-id="hero_stat_teams_value"]');
check(
  'mkt-landing: motion.counter rolls back to its default final frame (1200+)',
  counterTextual1 === '1200+',
  `t0=${counterTextual0} → tEnd=${counterTextual1}`,
);

// ─── 3. Multi-page: nav.to page switching (ctn-deck, 5 pages) ────────────

await openExhibit('ctn-deck');
await page.click('[data-node-id="dk_cover_next"]');
await page.waitForTimeout(900);
const deckAfter = await page.evaluate(() => ({
  hash: location.hash,
  insight: Boolean(document.querySelector('[data-node-id="dk_insight_root"]')),
  cover: Boolean(document.querySelector('[data-node-id="dk_cover_root"]')),
}));
check('ctn-deck: nav.to switches to page 2 (hash + new page tree)', deckAfter.insight && !deckAfter.cover, JSON.stringify(deckAfter));

// ─── 4. In-page scroll: nav.scroll() back to top (template footer) ───────

await openExhibit('sty-memphis');
await page.evaluate(() => {
  const el = document.querySelector('[data-node-id="mp_footer_f3"]');
  const isScrollable = (n) => {
    const cs = getComputedStyle(n);
    return /(auto|scroll|overlay)/.test(cs.overflowY) && n.scrollHeight - n.clientHeight > 4;
  };
  let port = null;
  let cur = el.parentElement;
  while (cur) {
    if (isScrollable(cur)) {
      port = cur;
      break;
    }
    cur = cur.parentElement;
  }
  (port || document.scrollingElement).scrollTop = (port || document.scrollingElement).scrollHeight;
});
await page.waitForTimeout(400);
const beforeTop = await probeScrollport('mp_footer_f3');
await page.click('[data-node-id="mp_footer_f3"]');
await page.waitForTimeout(1500);
const afterTop = await probeScrollport('mp_footer_f3');
check(
  'sty-memphis: footer "Back to top ↑" → nav.scroll() returns to the top',
  beforeTop && beforeTop.scrollTop > 300 && afterTop && afterTop.scrollTop <= 4,
  `before=${beforeTop?.scrollTop} → after=${afterTop?.scrollTop}`,
);

// ─── 5. In-page anchoring: nav.scroll({target}) respects scroll-margin-top ─

await openExhibit('sty-bauhaus');
await page.click('[data-node-id="bh_hero_barcap_r"]');
await page.waitForTimeout(1600);
const landing = await page.evaluate(() => {
  const target = document.querySelector('[data-node-id="bh_method_region"]');
  const origin = document.querySelector('[data-node-id="bh_hero_barcap_r"]');
  const isScrollable = (n) => {
    const cs = getComputedStyle(n);
    return /(auto|scroll|overlay)/.test(cs.overflowY) && n.scrollHeight - n.clientHeight > 4;
  };
  let port = null;
  let cur = origin.parentElement;
  while (cur) {
    if (isScrollable(cur)) {
      port = cur;
      break;
    }
    cur = cur.parentElement;
  }
  if (!port) port = document.scrollingElement;
  const tr = target.getBoundingClientRect();
  const pr = port === document.scrollingElement ? { top: 0 } : port.getBoundingClientRect();
  return {
    topInPort: Math.round(tr.top - pr.top),
    margin: Math.round(parseFloat(getComputedStyle(target).scrollMarginTop) || 0),
  };
});
check(
  'sty-bauhaus: hero "Scroll down ↓" → nav.scroll({target}) offset respected (±28px)',
  Math.abs(landing.topInPort - landing.margin) <= 28,
  JSON.stringify(landing),
);

// ─── 6. Overlay + event-code sandbox: itr-loop confirmation (open → validate → cross-page write-back) ─

await openExhibit('itr-loop');
await page.click('[data-node-id="loop_delete_btn"]');
await page.waitForTimeout(500);
const overlayOpen = await page.evaluate(() => ({
  overlays: document.querySelectorAll('[data-showcase-overlay]').length,
  root: Boolean(document.querySelector('[data-node-id="loop_confirm_root"]')),
  mismatchVisible: Boolean(document.querySelector('[data-node-id="loop_confirm_error"]')),
  readyVisible: Boolean(document.querySelector('[data-node-id="loop_confirm_ok_ready"]')),
}));
check(
  'itr-loop: overlay.open opens a sub-page overlay (onOverlayInit passes sendData → initial name-mismatch state)',
  overlayOpen.overlays === 1 && overlayOpen.root && overlayOpen.mismatchVisible && !overlayOpen.readyVisible,
  JSON.stringify(overlayOpen),
);

await page.fill('[data-node-id="loop_confirm_input"] input, [data-node-id="loop_confirm_input"] textarea', '周报草稿');
await page.waitForTimeout(400);
const afterTyping = await page.evaluate(() => ({
  mismatchVisible: Boolean(document.querySelector('[data-node-id="loop_confirm_error"]')),
  readyVisible: Boolean(document.querySelector('[data-node-id="loop_confirm_ok_ready"]')),
}));
check(
  'itr-loop: event code onChange writes data → validation flips (name matches → confirm button appears)',
  !afterTyping.mismatchVisible && afterTyping.readyVisible,
  JSON.stringify(afterTyping),
);

await page.click('[data-node-id="loop_confirm_ok_ready"]');
await page.waitForTimeout(900);
const afterConfirm = await page.evaluate(() => ({
  overlays: document.querySelectorAll('[data-showcase-overlay]').length,
  deleted: Boolean(document.querySelector('[data-node-id="loop_deleted_text"]')),
}));
check(
  'itr-loop: overlay.close(result) → onOverlayClose cross-page write-back (note page shows the "deleted" state)',
  afterConfirm.overlays === 0 && afterConfirm.deleted,
  JSON.stringify(afterConfirm),
);

// ─── 7. Drag: Sortable data axis across columns (itr-kanban) ─────────────

await openExhibit('itr-kanban');
const kanbanInitial = await page.evaluate(() => ({
  todo: Array.from(document.querySelectorAll('[data-node-id="kb_list_todo"] [data-node-id="kb_todo_card_title"]')).map((n) => n.textContent?.trim()),
  doing: Array.from(document.querySelectorAll('[data-node-id="kb_list_doing"] [data-node-id="kb_doing_card_title"]')).map((n) => n.textContent?.trim()),
}));
check(
  'itr-kanban: Sortable renders the data-axis row set ({{DOM.kb_root.data.todo}} binding)',
  kanbanInitial.todo.length > 0,
  JSON.stringify(kanbanInitial).slice(0, 200),
);

const grip = await page.$('[data-node-id="kb_todo_grip"]');
const laneDoing = await page.$('[data-node-id="kb_list_doing"]');
if (grip && laneDoing) {
  const from = await grip.boundingBox();
  const to = await laneDoing.boundingBox();
  await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
  await page.mouse.down();
  for (let i = 1; i <= 12; i += 1) {
    await page.mouse.move(
      from.x + ((to.x + to.width / 2 - from.x) * i) / 12,
      from.y + ((to.y + to.height / 2 - from.y) * i) / 12,
    );
    await page.waitForTimeout(45);
  }
  await page.mouse.up();
  await page.waitForTimeout(800);
}
const kanbanAfter = await page.evaluate(() => ({
  todo: Array.from(document.querySelectorAll('[data-node-id="kb_list_todo"] [data-node-id="kb_todo_card_title"]')).map((n) => n.textContent?.trim()),
  doing: Array.from(document.querySelectorAll('[data-node-id="kb_list_doing"] [data-node-id="kb_doing_card_title"]')).map((n) => n.textContent?.trim()),
}));
check(
  'itr-kanban: dragging the handle → cross-column move + data write-back (onChange code track)',
  kanbanAfter.todo.length === kanbanInitial.todo.length - 1 &&
    kanbanAfter.doing.length === kanbanInitial.doing.length + 1 &&
    kanbanAfter.doing.includes(kanbanInitial.todo[0]),
  `todo ${kanbanInitial.todo.length}→${kanbanAfter.todo.length} / doing ${kanbanInitial.doing.length}→${kanbanAfter.doing.length}`,
);

// ─── Final check: zero uncaught errors ───────────────────────────────────

const ignorable = /favicon|Download the React DevTools/i;
const realErrors = pageErrors.filter((e) => !ignorable.test(e));
check('Zero uncaught errors throughout (pageerror / console.error)', realErrors.length === 0, realErrors.slice(0, 4).join(' | '));

await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} PASS`);
process.exit(failed.length === 0 ? 0 : 1);
