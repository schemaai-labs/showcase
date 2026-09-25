# SchemaAI Showcase

**English** ｜ [简体中文](./README.zh-CN.md)

---

**SchemaAI** is a schema-driven low-code engine — every component and platform capability is expressed as schema. This repository is its capability showcase: the product shell (editor, sign-in, app management) stripped away, leaving only the core rendering pipeline — **Lang DSL → compile → render**.

**Live demo** → https://schemaai-labs.github.io/

Every template in the gallery is **a real app that actually runs** — not a recording, not a screenshot. Motion, navigation, overlays, drag and drop, and the event-code sandbox all execute for real.

> **A note on language**: the showcase is in English for an international audience. The 47 template bodies are being translated in batches; templates not yet translated carry a `中文` badge in the gallery.

## What's inside

47 templates across four themes:

| Theme | Contents |
| --- | --- |
| Marketing / Growth | Landing pages, campaign pages, ad creative, portfolios… |
| Product / App | Dashboards, admin skeletons, settings, kanban apps… |
| Content / Brand | Brand storytelling, editorial layout, photography… |
| Interaction / Motion | Scroll narratives, flip cards, kanban drag and drop… |

19 of them are the `sty-` style series (Bauhaus, Memphis, quiet luxury, editorial fashion, low-poly 3D…), pinned to the top of the gallery.

**Capabilities proven here** (each one has a real-browser assertion behind it):

- **Motion** — entrance choreography, number counters, parallax, scroll-progress indicators, typewriter, magnetic and cursor-follow effects, 3D model viewing
- **Interaction** — multi-page `nav.to`, in-page `nav.scroll` anchoring and back-to-top, overlays (parent/child payloads + cross-page write-back), kanban cross-column drag
- **Data** — the query executor and `{{}}` bindings (this repo ships a local mock transport; the real transport lives on the backend)
- **Event-code sandbox** — the events inside templates are **code that really executes**, with a namespace allowlist and timeouts

## Running it

```bash
pnpm install
pnpm dev          # → http://localhost:3010
pnpm build        # static output only (dist/), no backend
pnpm test:e2e     # real-browser capability proof (start dev first)
```

Requires Node 22+ and pnpm 10+. The first E2E run needs a browser download — playwright is **version-pinned**, and browsers are tied one-to-one to it:

```bash
pnpm exec playwright install chromium
```

## Where the engine lives

This repo holds only the showcase shell. The engine is the `@schemaai/*` packages on npm:

| Package | Role | Distribution |
| --- | --- | --- |
| `@schemaai/schema` | Contracts: types, capability registry, validation | Apache-2.0, **source included** |
| `@schemaai/registry` | Contracts: component descriptors, knowledge units | Apache-2.0, **source included** |
| `@schemaai/lang-compiler` | Lang DSL compiler (parse / compile / serialize / import) | Apache-2.0, **source included** |
| `@schemaai/runtime-core` | Framework-agnostic runtime: binding resolution, events, query execution | Proprietary (compiled) |
| `@schemaai/motion` | Motion executor: declarative spec + trigger controllers | Proprietary (compiled) |
| `@schemaai/renderer-react` | React renderer and component implementations | Proprietary (compiled) |
| `@schemaai/runtime-host` | Host execution layer: action dispatch, code sandbox, overlay lifecycle | Proprietary (compiled) |

The three contract-layer packages are open source under Apache-2.0 and ship their TypeScript sources. The four engine packages ship compiled output; see each package's `LICENSE` — use as a dependency is permitted, reverse engineering and redistribution are not.

## Layout

```text
src/
  app/            routing (path-based; the hash belongs to PreviewRuntimeProvider for in-template pages)
  pages/          GalleryPage / PreviewPage
  runtime/        the showcase host: store, node renderer, capability adapters, overlay layer, query executor
  exhibits/       exhibit catalog + lazy Lang DSL loading
exhibits/         template assets (md + thumbnails) and the manifest — **an upstream artifact**
assets-src/       demo assets (images / video / glb), copied into public/ at build time
scripts/          build-time sync (exhibits → generated/ + public/)
tests/            real-browser capability proof
```

`src/generated/` and `public/exhibits/` are build-time derived data (not tracked); `pnpm dev` and `pnpm build` rebuild them automatically.

## Where the templates come from

`exhibits/` is an **upstream artifact** — the SchemaAI monorepo syncs it from the template source of truth. This repo does not own the templates. To add or change one, do it upstream; please don't hand-edit `exhibits/` here.

## License

[Apache-2.0](./LICENSE) — covering this repo's source and the template assets under `exhibits/`.

Demo assets under `assets-src/` are AI-generated and provided as sample material for the templates — see [CREDITS.md](./CREDITS.md).

The `@schemaai/*` engine packages carry their own terms, listed in the table above.
