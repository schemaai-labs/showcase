# Credits

## Demo assets

Everything under `assets-src/` is **AI-generated** and included as sample material so the templates
render a complete picture out of the box. No third-party stock assets are bundled.

| File | Type | Used by |
| --- | --- | --- |
| `kitten-portrait.jpg` | Image | `sty-bw-photo`, `sty-nature`, `sty-fashion`, `sty-luxe`, `sty-scroll-narrative` |
| `seoul-after-dark-base.png` | Image (illustration base) | `mkt-seoul-after-dark` |
| `portfolio-cover-bg.png` | Image (background) | `mkt-portfolio-cover`, `mkt-portfolio-page` |
| `portfolio-cover-girl.png` | Image (cut-out figure) | `mkt-portfolio-cover`, `mkt-portfolio-page` |
| `atelier-film.mp4` | Video | `sty-fashion` |
| `low-poly-model.glb` | 3D model | `sty-lowpoly3d` |

### Terms

These assets are demo material bundled with the showcase. They exist to make the templates
self-contained — a clean clone renders every exhibit without reaching for external files.

AI-generated output sits in an unsettled area of copyright law: several jurisdictions do not grant
copyright in works lacking human authorship. Treat these files as **sample data**, not as a
licensed image library — replace them with your own material before using a template in production.

The repository's [Apache-2.0 licence](./LICENSE) covers the source code and the template documents
under `exhibits/`. This file's purpose is to state plainly where the binary assets came from, which
the licence does not cover.

## Everything else

Inter, the typeface used by the showcase chrome, is served by Google Fonts under the SIL Open Font
License. Icons come from [Lucide](https://lucide.dev) (ISC). Animation runs on
[anime.js](https://animejs.com) (MIT), Lottie playback on
[`@lottiefiles/dotlottie-web`](https://github.com/LottieFiles/dotlottie-web) (MIT) — both consumed
through `@schemaai/*` engine packages.
