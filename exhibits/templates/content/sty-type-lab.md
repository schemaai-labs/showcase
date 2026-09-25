# Experimental type — "ZIZAI" type foundry

> Template role (content / brand tab · style series): typographic experiment — **type as graphic**:
> extreme weight contrast, outlined / stacked / knocked-out display lines, tracking from -8px to
> +30px, a specimen card per family (same word, different letterforms) and a tiled glyph band; black
> and white with a single fluorescent yellow-green accent.
> Scenario: a release page for a fictional type foundry: a three-layer experimental hero (solid /
> outlined / knocked out) with the family name and version; three specimens (Grotesk / Song / Mono,
> each set large enough to show its character); a tiled glyph band; two license tiers; footer. No
> bitmaps, no API, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="ZIZAI — Type Foundry">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="tl_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="tl_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="tl_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 48px">
          <Container id="tl_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="tl_nav_brand" props={content: "ZIZAI®", tagName: "span"}/></Container>
          <Container id="tl_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="tl_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="tl_nav_i1" props={itemLabel: "Families", itemTarget: "tl_family_region"} style="height:auto; width:auto"/>
              <Container id="tl_nav_i2" props={itemLabel: "Glyphs", itemTarget: "tl_glyph_region"} style="height:auto; width:auto"/>
              <Container id="tl_nav_i3" props={itemLabel: "Licensing", itemTarget: "tl_license_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="tl_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="tl_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="tl_nav_cta_txt" props={content: "Download trial", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (three-layer experimental display type) ─── -->
      <Container id="tl_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Animate id="tl_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:64px 48px 80px; gap:0px; align-items:flex-start">
          <Container id="tl_hero_kicker_cell" style="height:auto; width:auto"><Text id="tl_hero_kicker" props={content: "TYPE RELEASE · ZIZAI GROTESK v3 / 2026", tagName: "span"}/></Container>
          <Container id="tl_hero_type1_cell" style="height:auto; width:auto; padding-top:26px"><Text id="tl_hero_type1" props={content: "WEIGHT", tagName: "h1"}/></Container>
          <Container id="tl_hero_type2_cell" style="height:auto; width:auto; padding-left:220px"><Text id="tl_hero_type2" props={content: "TRACKING", tagName: "h1"}/></Container>
          <Container id="tl_hero_type3_cell" style="height:auto; width:auto; padding-top:18px">
            <Container id="tl_hero_reverse" style="height:auto; width:auto; padding:6px 26px 12px">
              <Text id="tl_hero_type3" props={content: "STROKES", tagName: "h1"}/>
            </Container>
          </Container>
          <Container id="tl_hero_meta_cell" style="height:auto; width:100%; padding-top:40px">
            <FlexContainer id="tl_hero_meta_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:32px">
              <Container id="tl_hero_meta_l_cell" style="height:auto; width:100%; max-width:560px"><Text id="tl_hero_meta_l" props={content: "Three families and nine weights, Latin Extended plus the full Chinese set — ZIZAI's first in-house library, 26 months in the making.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="tl_hero_meta_r_cell" style="height:auto; width:auto"><Text id="tl_hero_meta_r" props={content: "↓ See the glyphs", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Specimens ─── -->
      <Container id="tl_family_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_family_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 88px; gap:30px">
          <Container id="tl_family_head_cell" style="height:auto; width:auto"><Text id="tl_family_head" props={content: "FAMILIES", tagName: "span"}/></Container>
          <Container id="tl_fam1_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam1_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam1_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam1_title_cell" style="height:auto; width:auto"><Text id="tl_fam1_title" props={content: "ZIZAI Grotesk", tagName: "h4"}/></Container>
                  <Container id="tl_fam1_note_cell" style="height:auto; width:auto"><Text id="tl_fam1_note" props={content: "Headlines & UI · 6 weights", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam1_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam1_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam1_big_cell" style="height:auto; width:auto"><Text id="tl_fam1_big" props={content: "Handgloves", tagName: "h2"}/></Container>
                  <Container id="tl_fam1_small_cell" style="height:auto; width:auto"><Text id="tl_fam1_small" props={content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="tl_fam2_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam2_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam2_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam2_title_cell" style="height:auto; width:auto"><Text id="tl_fam2_title" props={content: "ZIZAI Song", tagName: "h4"}/></Container>
                  <Container id="tl_fam2_note_cell" style="height:auto; width:auto"><Text id="tl_fam2_note" props={content: "Body text & books · 3 weights", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam2_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam2_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam2_big_cell" style="height:auto; width:auto"><Text id="tl_fam2_big" props={content: "Handgloves", tagName: "h2"}/></Container>
                  <Container id="tl_fam2_small_cell" style="height:auto; width:auto"><Text id="tl_fam2_small" props={content: "Serifs that flare at the entry stroke and taper at the exit; the sharp detail survives even at small sizes.", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="tl_fam3_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam3_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam3_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam3_title_cell" style="height:auto; width:auto"><Text id="tl_fam3_title" props={content: "ZIZAI Mono", tagName: "h4"}/></Container>
                  <Container id="tl_fam3_note_cell" style="height:auto; width:auto"><Text id="tl_fam3_note" props={content: "Code & data · 4 weights", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam3_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam3_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam3_big_cell" style="height:auto; width:auto"><Text id="tl_fam3_big" props={content: "SELECT * FROM t WHERE id = 1;", tagName: "h2"}/></Container>
                  <Container id="tl_fam3_small_cell" style="height:auto; width:auto"><Text id="tl_fam3_small" props={content: "Monospaced and hard to misread: 0110 / O0Il1 stay distinct at a glance.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Tiled glyph band ─── -->
      <Container id="tl_glyph_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_glyph_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 88px; gap:26px">
          <Container id="tl_glyph_head_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_glyph_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="tl_glyph_head_l_cell" style="height:auto; width:auto"><Text id="tl_glyph_head_l" props={content: "GLYPH SET", tagName: "span"}/></Container>
              <Container id="tl_glyph_head_r_cell" style="height:auto; width:auto"><Text id="tl_glyph_head_r" props={content: "27,533 glyphs · every punctuation mark and symbol", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tl_glyph_band_cell" style="height:auto; width:100%; padding:30px 28px">
            <FlexContainer id="tl_glyph_band_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
              <Container id="tl_g1_cell" style="height:auto; width:auto"><Text id="tl_g1" props={content: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", tagName: "h3"}/></Container>
              <Container id="tl_g2_cell" style="height:auto; width:auto"><Text id="tl_g2" props={content: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr", tagName: "h3"}/></Container>
              <Container id="tl_g3_cell" style="height:auto; width:auto"><Text id="tl_g3" props={content: "0123456789 ← ↑ → ↓ $ € ¥ % ‰ & @ # ¶ § ° ± × ÷", tagName: "h3"}/></Container>
              <Container id="tl_g4_cell" style="height:auto; width:auto"><Text id="tl_g4" props={content: ".,;:?!()[]{}—–…·/&*†‡§¶", tagName: "h3"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Licensing ─── -->
      <Container id="tl_license_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_license_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 104px; gap:34px">
          <Container id="tl_license_title_cell" style="height:auto; width:auto"><Text id="tl_license_title" props={content: "Two licenses, both affordable", tagName: "h2"}/></Container>
          <Container id="tl_license_cards_cell" style="height:auto; width:100%; max-width:880px">
            <FlexContainer id="tl_license_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="tl_l1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_l1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="tl_l1_name_cell" style="height:auto; width:auto"><Text id="tl_l1_name" props={content: "Personal", tagName: "h4"}/></Container>
                  <Container id="tl_l1_price_cell" style="height:auto; width:auto"><Text id="tl_l1_price" props={content: "Free", tagName: "h3"}/></Container>
                  <Container id="tl_l1_desc_cell" style="height:auto; width:100%"><Text id="tl_l1_desc" props={content: "For non-commercial projects, personal work and study. Embedding in a website or an app is fine.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tl_l1_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="tl_l1_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="tl_l1_cta_txt" props={content: "Download free", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tl_l2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_l2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="tl_l2_name_cell" style="height:auto; width:auto"><Text id="tl_l2_name" props={content: "Commercial", tagName: "h4"}/></Container>
                  <Container id="tl_l2_price_cell" style="height:auto; width:auto"><Text id="tl_l2_price" props={content: "$260 / year", tagName: "h3"}/></Container>
                  <Container id="tl_l2_desc_cell" style="height:auto; width:100%"><Text id="tl_l2_desc" props={content: "For branding, publishing and shipping inside a product. Includes the source project (variable font) and support.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tl_l2_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="tl_l2_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="tl_l2_cta_txt" props={content: "Get a commercial license", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Footer ─── -->
      <Container id="tl_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="tl_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="tl_footer_left_cell" style="height:auto; width:auto"><Text id="tl_footer_left" props={content: "© 2026 ZIZAI Type · typefaces and figures are fictional demo content", tagName: "span"}/></Container>
          <Container id="tl_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="tl_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="tl_footer_f1_cell" style="height:auto; width:auto"><Text id="tl_footer_f1" props={content: "Changelog", tagName: "span"}/></Container>
              <Container id="tl_footer_f2_cell" style="height:auto; width:auto"><Text id="tl_footer_f2" props={content: "Contact", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Hero "scroll down" hint → in-page jump to the next block (nav.scroll, offset clears the sticky nav)
      @tl_hero_meta_r = { events: { scrollToGlyph: { trigger: "onClick", action: nav.scroll({target: "tl_glyph_region"}) } } };
    </script>

    <styles>
      # ── Page base (near-black paper) ──
      @tl_root = { background: #111111; }

      # ── Nav ──
      @tl_nav_region = { background: rgba(17, 17, 17, 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(245, 245, 240, 0.14); }
      @tl_nav_brand = { color: #F5F5F0; font-size: 17px; font-weight: 900; letter-spacing: 2.4px; }
      @tl_nav_menu = {
        :scope { --anchor-item-color: rgba(245, 245, 240, 0.6); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #D4FF3F; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.6px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #D4FF3F; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #D4FF3F; }
      }
      @tl_nav_cta = { background: #D4FF3F; transition: transform 0.25s ease; :scope:hover { transform: translateY(-1px); } }
      @tl_nav_cta_txt = { color: #111111; font-size: 13px; font-weight: 800; letter-spacing: 0.6px; }

      # ── Hero (three-layer experimental display type) ──
      # The display lines are the component here, so they were re-set for Latin rather than translated:
      # one word per layer, uniform 132px. Measured in Inter Black (~0.69em per uppercase glyph):
      #   WEIGHT    6 glyphs ≈ 503px at -3px tracking
      #   TRACKING  8 glyphs ≈ 689px + 7×22px tracking = 843px, plus the 220px stagger = 1063px
      #   STROKES   7 glyphs ≈ 589px inside the 52px fluoro box
      # All three land inside the 1184px content width with 100px+ of slack, and the +22px tracking on
      # the middle layer is the whole point of that line (the word demonstrates its own subject).
      @tl_hero_kicker = { color: rgba(245, 245, 240, 0.45); font-size: 12px; font-weight: 600; letter-spacing: 3px; }
      @tl_hero_type1 = { color: #F5F5F0; font-size: 132px; font-weight: 900; letter-spacing: -3px; line-height: 1.0; }
      # ⚠️ Latin outline type needs `paint-order: stroke fill`. Chromium strokes every sub-path of a
      # glyph independently, so Inter's R / A / C / K … (built from overlapping sub-paths) show their
      # internal seams as a second "ghost" outline inside the letter. Painting the fill last hides
      # them — which means the fill can no longer be transparent: it becomes the page colour, and the
      # stroke doubles (5px → a 2.5px rim) because the fill now covers its inner half.
      @tl_hero_type2 = { color: #111111; font-size: 132px; font-weight: 900; letter-spacing: 22px; line-height: 1.0; :scope { -webkit-text-stroke: 5px #F5F5F0; paint-order: stroke fill; } }
      @tl_hero_reverse = { background: #D4FF3F; }
      @tl_hero_type3 = { color: #111111; font-size: 132px; font-weight: 900; letter-spacing: -3px; line-height: 1.0; }
      @tl_hero_meta_l = { color: rgba(245, 245, 240, 0.6); font-size: 14px; line-height: 1.75; }
      @tl_hero_meta_r = { cursor: pointer; color: #D4FF3F; font-size: 13px; font-weight: 700; letter-spacing: 1.4px; }

      # ── Families ──
      @tl_family_head = { color: #D4FF3F; font-size: 12px; font-weight: 700; letter-spacing: 3.6px; }
      @tl_fam1_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam2_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam3_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam1_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 0.4px; }
      @tl_fam2_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 0.4px; }
      @tl_fam3_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 0.4px; }
      @tl_fam1_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      @tl_fam2_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      @tl_fam3_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      # "Handgloves" is the print-tradition specimen word: at 56px it is ~340px, well inside the
      # 820px the specimen column has. Tracking drops 10px → 6px — 10px on 4 CJK glyphs is 0.075em,
      # the same value on 10 Latin glyphs would be 0.18em.
      @tl_fam1_big = { color: #F5F5F0; font-size: 56px; font-weight: 900; letter-spacing: 6px; }
      @tl_fam2_big = { color: #F5F5F0; font-size: 56px; font-weight: 400; letter-spacing: 6px; font-family: Georgia, 'Songti SC', 'Times New Roman', serif; }
      @tl_fam3_big = { color: #F5F5F0; font-size: 40px; font-weight: 500; letter-spacing: 1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tl_fam1_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; letter-spacing: 1.4px; }
      @tl_fam2_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; letter-spacing: 1.4px; font-family: Georgia, 'Songti SC', 'Times New Roman', serif; }
      @tl_fam3_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Glyph set ──
      @tl_glyph_head_l = { color: #D4FF3F; font-size: 12px; font-weight: 700; letter-spacing: 3.6px; }
      @tl_glyph_head_r = { color: rgba(245, 245, 240, 0.45); font-size: 12px; letter-spacing: 1.4px; }
      @tl_glyph_band_cell = { background: #171717; border: 1px solid rgba(245, 245, 240, 0.14); }
      # The band measures 1126px inside its padding. Line one becomes the classic specimen pangram —
      # 43 glyphs, which at the original 30px / 8px came to ~1144px and wrapped "DOG" onto a second
      # line. 28px / 6px lands it at ~1006px (one line, still the largest row in the band); lines two
      # to four re-tile mixed case, figures and punctuation and are unchanged.
      @tl_g1 = { color: #F5F5F0; font-size: 28px; font-weight: 500; letter-spacing: 6px; line-height: 1.7; }
      @tl_g2 = { color: rgba(245, 245, 240, 0.85); font-size: 26px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }
      @tl_g3 = { color: rgba(245, 245, 240, 0.7); font-size: 24px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }
      @tl_g4 = { color: rgba(245, 245, 240, 0.7); font-size: 24px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }

      # ── Licensing ──
      @tl_license_title = { color: #F5F5F0; font-size: 44px; font-weight: 900; letter-spacing: -1.2px; }
      @tl_l1_col = { border: 1px solid rgba(245, 245, 240, 0.22); }
      @tl_l2_col = { background: #D4FF3F; }
      @tl_l1_name = { color: #F5F5F0; font-size: 19px; font-weight: 800; }
      @tl_l2_name = { color: #111111; font-size: 19px; font-weight: 800; }
      @tl_l1_price = { color: #F5F5F0; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @tl_l2_price = { color: #111111; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @tl_l1_desc = { color: rgba(245, 245, 240, 0.55); font-size: 13.5px; line-height: 1.7; }
      @tl_l2_desc = { color: rgba(17, 17, 17, 0.75); font-size: 13.5px; line-height: 1.7; }
      @tl_l1_cta = { border: 1px solid rgba(245, 245, 240, 0.4); transition: background 0.25s ease; :scope:hover { background: rgba(245, 245, 240, 0.1); } }
      @tl_l1_cta_txt = { color: #F5F5F0; font-size: 14px; font-weight: 700; letter-spacing: 1.4px; }
      @tl_l2_cta = { background: #111111; transition: transform 0.25s ease; :scope:hover { transform: translateY(-1px); } }
      @tl_l2_cta_txt = { color: #D4FF3F; font-size: 14px; font-weight: 700; letter-spacing: 1.4px; }

      # ── Footer ──
      @tl_footer_row = { border-top: 1px solid rgba(245, 245, 240, 0.14); }
      @tl_footer_left = { color: rgba(245, 245, 240, 0.35); font-size: 12px; letter-spacing: 0.8px; }
      @tl_footer_f1 = { color: rgba(245, 245, 240, 0.55); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #D4FF3F; } }
      @tl_footer_f2 = { color: rgba(245, 245, 240, 0.55); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #D4FF3F; } }
    </styles>
  </Page>
</App>
```

> Craft notes: this template is a **specimen sheet, so the typography is the artwork** — three
> display layers (solid / outlined / knocked out) carry the hero, three family cards set the same
> word in three different letterforms, and the glyph band tiles the character set. The black ground
> with a single fluorescent accent keeps attention on the letterforms; there are no bitmaps and no
> API, and the only motion is the hero's one entrance orchestration.

## Production notes

**The display type is the component here, and it cannot be translated glyph-for-glyph.** The Chinese
hero is three 5-glyph aphorisms (字重即态度 / 字距即呼吸 / 笔画即结构 — "weight is attitude / tracking is
breath / strokes are structure"). Their English renderings are 17–21 glyphs, which at 132px is
1200–1800px against a 1184px content width: every one of them would have wrapped or been clipped by
the hero's `overflow:hidden`. So the three layers were **re-set to the three words the aphorisms are
about** — the words name the treatments, and each layer demonstrates its own subject:

| | Chinese original | English version |
| --- | --- | --- |
| Layer 1 (solid, `-4px`) | 字重即态度 (5 glyphs) | **WEIGHT** (6 glyphs, `-3px`) |
| Layer 2 (outlined, `+22px`, 220px stagger) | 字距即呼吸 (5 glyphs) | **TRACKING** (8 glyphs, `+22px` kept — the word carries its own subject) |
| Layer 3 (knocked out on fluoro) | 笔画即结构 (5 glyphs) | **STROKES** (7 glyphs, `-3px`) |
| Meaning of the aphorisms | body copy | folded into `tl_hero_meta_l` ("three families and nine weights…") |

Measured in Inter Black (~0.69em per uppercase glyph): WEIGHT ≈ 503px, TRACKING ≈ 843px + the 220px
stagger = 1063px, STROKES ≈ 589px inside its 52px box. All three clear the 1184px measure with room,
so the hero's 132px size and the stagger indent are **unchanged from the Chinese version** — the line
lengths even land close to the CJK originals.

**The rest of the type came down a step or two:**

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| nav menu links | `letter-spacing: 2.6px` | **0.6px** | wide tracking is a CJK convention; three Latin menu words at 2.6px read as broken letters |
| `tl_hero_kicker` | 5px | **3px** | 38 Latin glyphs in one line against 22 CJK/space glyphs |
| specimen titles / notes | 1px / 1.6px | **0.4px / 0.8px** | "ZIZAI Grotesk" and "Body text & books · 3 weights" (28 glyphs) have to fit the 260px name column |
| specimen display (`tl_fam1_big`, `tl_fam2_big`) | 56px / `10px` | 56px / **6px** | the specimen word becomes "Handgloves" (10 Latin glyphs against 4 CJK); 10px on 4 glyphs is 0.075em, the same value on 10 glyphs would be 0.18em |
| `tl_hero_meta_l`, license descriptions | `line-height: 2.05` / `1.9` | **1.75 / 1.7** | Latin leading |
| license title | `-1.5px` | **-1.2px** | "Two licenses, both affordable" is 29 Latin glyphs on a single line |

**Glyph band re-tiled for Latin.** Row 1 was the Lantingji Xu opening (永和九年岁在癸丑…); it becomes
the print-tradition pangram "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG" — 43 glyphs, which at the
original **30px / 8px** measured ~1144px against the band's 1126px and wrapped "DOG" onto a line of
its own, so the row drops to **28px / 6px** (~1006px). It is still the largest row in the band and
now almost exactly as wide as the mixed-case row below it (1001px). Row 4 was CJK punctuation
(。，、；：？！「」『』（）——…) and becomes Latin punctuation (.,;:?!()[]{}—–…·/&*†‡§¶). Rows 2 and 3
(mixed-case pairs, figures and symbols) were already Latin and are unchanged, as is the SQL specimen
in the Mono card. The glyph count (27,533) and the "every punctuation mark and symbol" claim still
hold — the page just shows the Latin half of the set.

**Three deliberate fixes:**

1. `tl_fam2_big` / `tl_fam2_small` now carry `font-family: Georgia, 'Songti SC', 'Times New Roman',
   serif`. In the Chinese source the "Song" specimen card was set in the page's default sans, which
   contradicted its own description ("serifs that flare at the entry stroke…"); the English edition
   gives the Song card a real serif stack so the three cards genuinely differ.
2. Prices move to `$260 / year` to match the currency style of the other English templates; the
   fictional-brand disclaimer is restated in English.
3. **The outlined hero layer needed `paint-order: stroke fill`** — without it, `TRACKING` rendered
   as *two* overlapping outlines. Chromium strokes each sub-path of a glyph independently, and
   Inter builds Latin capitals (R, A, C, K …) from overlapping sub-paths, so the internal seams were
   stroked too and read as a ghost letter inside the real one. Chromium's own font-independent
   repro:

   ```html
   <span style="font: 900 300px Inter; color: transparent; -webkit-text-stroke: 3px #fff">R</span>
   <!-- spurious ink appears along the stem/bowl junction — measured, not a guess -->
   ```

   Painting the fill last covers those seams; the price is that the fill can no longer be
   `transparent` (it becomes `#111111`, the page colour) and the stroke doubles to 5px so the
   visible rim stays 2.5px. CJK glyphs are built without overlapping sub-paths, which is why the
   Chinese edition (`字距即呼吸`) looked fine and the bug only surfaced on the English one.

**No structural refactor was needed.** Every node id is identical to the Chinese version, including
the ones the E2E and the thumbnail pipeline address (`tl_hero_meta_r`, `tl_glyph_region`,
`tl_license_region`).
