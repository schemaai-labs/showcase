# 3D portfolio cover — "Ran Chen UI/UX portfolio: PORTFOLIO DESIGN"

> Template role (marketing / growth tab · image + type overlay): a portfolio cover built from **two
> stacked assets plus drawn components** — a background plate (liquid-metal abstract) fills the art
> board, a cut-out character (transparent PNG) sits on top, and the gradient headline / pill badge /
> skill tags / app-icon tiles / top and bottom info strips are all drawn by platform components.
> Scenario: reproduce a fictional designer's portfolio cover (1104×829 landscape) — a dark abstract
> base with a 3D character pressed against the right edge, an oversized gradient "PORTFOLIO" over a
> wide-tracked "DESIGN", a mint pill badge reading "2021-2023 ✕ UI PORTFOLIO", five skill tags, four
> app-icon tiles (Figma / Ai / a gold polyhedron) and top and bottom info strips. No API, no motion
> (flat-design reproduction discipline).

```lang
<App dsl-version="0.3" name="Ran Chen UI/UX Portfolio Cover">
  <Page id="cover" name="Cover" route="/">
    <FlexContainer id="t2_stage" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; padding:40px 24px; position:relative">

      <Container id="t2_art" style="width:1104px; height:829px; flex-shrink:0; position:relative; overflow:hidden">

        <!-- ─── 0. Background plate (liquid-metal abstract, fills the board) ─── -->
        <Container id="t2_bg_cell" style="position:absolute; left:0px; top:0px; width:1104px; height:832px; z-index:0">
          <Image id="t2_bg" props={src: "assets/images/portfolio-cover-bg.png", alt: "Liquid-metal abstract background", objectFit: "cover", loading: "eager"} style="width:1104px; height:832px"/>
        </Container>

        <!-- ─── 1. Display headline (under the character: her hair covers the LIO) ─── -->
        <FlexContainer id="t2_title1_box" props={direction: "column"} style="position:absolute; left:45px; top:102px; width:820px; height:140px; align-items:flex-start; justify-content:center; z-index:1">
          <Container id="t2_title1_cell" style="width:100%; height:auto">
            <Text id="t2_title1" props={content: "PORTFOLIO", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_title2_box" props={direction: "column"} style="position:absolute; left:51px; top:260px; width:420px; height:96px; align-items:flex-start; justify-content:center; z-index:1">
          <Container id="t2_title2_cell" style="width:100%; height:auto">
            <Text id="t2_title2" props={content: "DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 2. Character asset (transparent cut-out, over the headline) ─── -->
        <Container id="t2_girl_cell" style="position:absolute; left:237px; top:26px; width:1102px; height:830px; z-index:2">
          <Image id="t2_girl" props={src: "assets/images/portfolio-cover-girl.png", alt: "3D illustration of a designer with mint-green hair", objectFit: "contain", loading: "eager"} style="width:1102px; height:830px"/>
        </Container>

        <!-- ─── 3. App-icon tiles (Ai / Figma / gold polyhedron / right edge) ─── -->
        <FlexContainer id="t2_icon_ai_box" props={direction: "column"} style="position:absolute; left:967px; top:360px; width:70px; height:110px; align-items:center; justify-content:center; z-index:3">
          <Container id="t2_icon_ai_txt_cell" style="width:100%; height:auto">
            <Text id="t2_icon_ai_txt" props={content: "Ai", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_icon_figma_box" props={direction: "column"} style="position:absolute; left:552px; top:650px; width:56px; height:86px; align-items:center; justify-content:center; z-index:3; gap:3px">
          <FlexContainer id="t2_figma_r1" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_a_cell" style="width:12px; height:12px"/>
            <Container id="t2_figma_b_cell" style="width:12px; height:12px"/>
          </FlexContainer>
          <FlexContainer id="t2_figma_r2" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_c_cell" style="width:12px; height:12px"/>
            <Container id="t2_figma_d_cell" style="width:12px; height:12px"/>
          </FlexContainer>
          <FlexContainer id="t2_figma_r3" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_e_cell" style="width:12px; height:12px"/>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer id="t2_icon_pyr_box" props={direction: "column"} style="position:absolute; left:927px; top:655px; width:76px; height:80px; align-items:center; justify-content:center; z-index:3">
          <Container id="t2_icon_pyr_cell" style="width:56px; height:52px">
            <Svg id="t2_icon_pyr" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 60' fill='none'><polygon points='6,26 28,6 52,10 62,30 44,54 14,42' fill='#E5BC70'/><polygon points='6,26 28,6 34,24 14,40' fill='#F8E7BE'/><polygon points='28,6 52,10 44,28 34,24' fill='#EDCE8C'/><polygon points='52,10 62,30 44,28' fill='#D8A75D'/><polygon points='14,40 34,24 44,28 44,54' fill='#E7C078'/><polygon points='14,42 44,54 28,58' fill='#C9903F'/></svg>", ariaLabel: "Gold polyhedron icon"} style="width:56px; height:52px"/>
          </Container>
        </FlexContainer>

        <Container id="t2_icon_r_box" style="position:absolute; left:1042px; top:672px; width:62px; height:92px; z-index:3"/>

        <!-- ─── 4. Pill badge (2021-2023 ✕ UI portfolio) ─── -->
        <FlexContainer id="t2_badge_box" props={direction: "column"} style="position:absolute; left:50px; top:418px; width:400px; height:54px; align-items:center; justify-content:center; z-index:4">
          <Container id="t2_badge_txt_cell" style="width:100%; height:auto">
            <Text id="t2_badge_txt" props={content: "2021-2023 ✕ UI PORTFOLIO", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 5. Skill tags (five: dot + label) ─── -->
        <FlexContainer id="t2_tags_row1" props={direction: "row"} style="position:absolute; left:75px; top:534px; width:420px; height:24px; align-items:center; justify-content:flex-start; z-index:4; gap:0px">
          <Container id="t2_t1_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t1_txt_cell" style="width:122px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t1_txt" props={content: "APP DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t2_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t2_txt_cell" style="width:122px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t2_txt" props={content: "WEB DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t3_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t3_txt_cell" style="width:122px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t3_txt" props={content: "H5 DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_tags_row2" props={direction: "row"} style="position:absolute; left:75px; top:577px; width:420px; height:24px; align-items:center; justify-content:flex-start; z-index:4; gap:0px">
          <Container id="t2_t4_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t4_txt_cell" style="width:122px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t4_txt" props={content: "IP DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t5_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t5_txt_cell" style="width:122px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t5_txt" props={content: "AIGC", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 6. Top info strips (both ends) ─── -->
        <FlexContainer id="t2_top_l_box" props={direction: "column"} style="position:absolute; left:52px; top:7px; width:260px; height:24px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_top_l_cell" style="width:100%; height:auto">
            <Text id="t2_top_l" props={content: "▶▶ UI | UX DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_top_r_box" props={direction: "column"} style="position:absolute; left:836px; top:3px; width:252px; height:24px; align-items:flex-end; justify-content:center; z-index:4">
          <Container id="t2_top_r_cell" style="width:100%; height:auto">
            <Text id="t2_top_r" props={content: "APP · WEB · ILLUSTRATION · DATA SCREEN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 7. Bottom info strips (designer / phone / email) ─── -->
        <FlexContainer id="t2_bot_l_box" props={direction: "column"} style="position:absolute; left:58px; top:778px; width:300px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_l_cell" style="width:100%; height:auto">
            <Text id="t2_bot_l" props={content: "DESIGNER: Ran Chen", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_bot_c_box" props={direction: "column"} style="position:absolute; left:258px; top:778px; width:300px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_c_cell" style="width:100%; height:auto">
            <Text id="t2_bot_c" props={content: "TEL: +86 153 6909 8371", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_bot_r_box" props={direction: "column"} style="position:absolute; left:458px; top:778px; width:420px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_r_cell" style="width:100%; height:auto">
            <Text id="t2_bot_r" props={content: "EMAIL: ran@ranchen.design", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 0. Stage and art board ──
      @t2_stage = { background: #0B0E14; }
      @t2_art = { background: #030A15; box-shadow: 0px 26px 60px rgba(0, 0, 0, 0.55); }

      # ── 1. Display headline (gradient type = scoped-css selector channel; wide-tracked second line) ──
      @t2_title1 = {
        font-size: 124px; font-weight: 900; letter-spacing: 8px; line-height: 1; text-align: left;
        :scope {
          background-image: linear-gradient(180deg, #A8FFE0 0%, #E8FFF8 45%, #FFFFFF 68%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      }
      @t2_title2 = {
        color: #FFFFFF; font-size: 75px; font-weight: 600; letter-spacing: 11px; line-height: 1; text-align: left;
      }

      # ── 2. App-icon tiles ──
      @t2_icon_ai_box = { background: linear-gradient(160deg, #6B2C1E 0%, #4A2018 52%, #3A1712 100%); border-radius: 18px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_icon_ai_txt = { color: #FFA31A; font-size: 44px; font-weight: 900; letter-spacing: 0px; line-height: 1; text-align: center; }
      @t2_icon_figma_box = { background: #1E1B24; border-radius: 14px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_figma_a_cell = { background: #F24E1E; border-radius: 50%; }
      @t2_figma_b_cell = { background: #FF7262; border-radius: 50%; }
      @t2_figma_c_cell = { background: #A259FF; border-radius: 50%; }
      @t2_figma_d_cell = { background: #1ABCFE; border-radius: 50%; }
      @t2_figma_e_cell = { background: #0ACF83; border-radius: 50%; }
      @t2_icon_pyr_box = { background: #23262B; border-radius: 16px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_icon_r_box = { background: #23262B; border-radius: 16px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }

      # ── 3. Pill badge (mint ground, black type) ──
      @t2_badge_box = { background: #3EEBD0; border-radius: 27px; box-shadow: 0px 6px 16px rgba(62, 235, 208, 0.28); }
      # 27px was set for four CJK glyphs plus a numeral range; "2021-2023 ✕ UI PORTFOLIO" is 24 Latin
      # glyphs, about 14.5em wide — 22px keeps it inside the 400px pill.
      @t2_badge_txt = { color: #0A1A18; font-size: 22px; font-weight: 700; letter-spacing: 2px; line-height: 1; text-align: center; }

      # ── 4. Skill tags (mint dot + white type) ──
      @t2_t1_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t2_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t3_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t4_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t5_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      # "APP DESIGN" is 10 glyphs against 4 CJK chars: 17px → 15px so two words stay on one line in a 122px cell
      @t2_t1_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t2_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t3_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t4_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t5_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }

      # ── 5. Top and bottom info strips ──
      @t2_top_l = { color: #F2F6FA; font-size: 11px; font-weight: 700; letter-spacing: 1.6px; line-height: 1; text-align: left; }
      @t2_top_r = { color: #F2F6FA; font-size: 12px; font-weight: 700; letter-spacing: 3.2px; line-height: 1; text-align: right; }
      @t2_bot_l = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
      @t2_bot_c = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
      @t2_bot_r = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
    </styles>
  </Page>
</App>
```

> Craft notes: **the `z-index` stack of the two assets *is* the composition** — ① background plate
> fills the board (`objectFit:cover`, coordinates 1:1 with the reference artwork), ② the headline sits
> **under the character** (in the reference artwork her hair covers the `LIO` of "PORTFOLIO", which is
> what makes the character read as being in front), ③ the transparent character goes on top, ④ badge /
> tags / icon tiles / info strips sit above everything. The headline's mint-to-white gradient type
> runs through the scoped-css `:scope` channel (`background-clip: text`).
>
> **Asset prep (learned the hard way)**: the exported character asset had the transparent checkerboard
> baked into its pixels (alpha all 255, a 13px `#fdfdfd`/`#e7e7e7` pattern) — the platform has no image
> processing, so it must be cut out offline first (boundary flood-fill + feathering), and the cut
> version is what goes into the library.
>
> **Responsive variant (optional shape)**: this template is the **fidelity form** (a fixed 1104×829
> board). To make it a page that scales with the screen, convert mechanically as the
> reference-reproduction skill §4.2 (an internal monorepo doc) describes: board
> `width:100%; max-width:1104px; height:auto` + `:scope { container-type: inline-size; aspect-ratio: 1104 / 829 }`,
> then px inside the board → cqw (`px ÷ 1104 × 100`) and font sizes → `clamp(floor, n cqw, design size)`
> (either the direct key or a `:scope` rule in `<styles>` works — since 2026-09-23 the typography keys
> accept Scoped CSS overrides).
>
> **Multi-asset placement**: the scale and offset of both assets against the reference artwork were
> found by **search alignment** — background plate = 0.945 scale + (0, 0), character = 0.9437 scale +
> (237, 26.5) (the matching scales = the same export ratio, which is the consistency evidence in this
> case). Copy hidden behind the character (the email line) was completed from its visible part; it is
> occluded in the render either way.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The unusual thing about this template: the two
display lines were **already Latin in the Chinese original** ("PORTFOLIO" / "DESIGN"), because the
reference artwork is an English-language portfolio cover. So the headline keeps its 124px / 8px and
75px / 11px typography untouched — re-measuring it would have been churn. What did have to change is
the Chinese *supporting* copy, which was sized for 4-glyph CJK labels:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `t2_badge_txt` | 27px / `3px` tracking | **22px / 2px** | "2021-2023 ✕ UI PORTFOLIO" is 24 Latin glyphs (~14.5em) against 14 CJK/figure glyphs; at 27px it overflowed the pill |
| `t2_badge_box` | `width: 384px` | **400px** | 20px of extra room so the longer badge copy keeps a pill margin on both sides; the badge still clears the character |
| skill tag cells | `112px` | **122px** | "APP DESIGN" is two Latin words instead of one CJK compound — the cell has to be wider or the label wraps |
| `t2_t*_txt` | 17px | **15px** | keeps each two-word tag on one line inside the 122px cell (three tags still fit the 420px row: 3 × 139 = 417) |
| `t2_bot_l/c/r` | 11.5px | 11.5px (kept) | the info strips are uppercase micro-type in both versions; the English strings are longer but each box was already sized for them |
| `t2_top_r` | 12px / `3.2px` | 12px / `3.2px` (kept) | already English in the source; it wraps to two right-aligned lines exactly as before |

**No structural refactor was needed.** The layout has no Chinese-only construct (no "big CJK glyph +
small Latin gloss" pairing), so every node id survives unchanged.

**Copy policy**: not a literal translation. `陈冉` → **Ran Chen** (Latin transliteration, matching how
the other English templates handle names); `UI作品集` → "UI PORTFOLIO"; the skill tags become
"APP / WEB / H5 / IP DESIGN" plus "AIGC" (kept as the industry acronym it is). The contact lines were
re-expressed for an English-language card: the fullwidth `：` becomes `: `, the phone is restated in
international format (`+86 153 6909 8371`) and the made-up QQ-style address becomes
`ran@ranchen.design`. The top-left/top-right strips ("▶▶ UI | UX DESIGN", "APP · WEB · ILLUSTRATION ·
DATA SCREEN") were already Latin and are unchanged.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors. The image
paths (`assets/images/portfolio-cover-*.png`) are untouched: both language editions compose the same
two assets.
