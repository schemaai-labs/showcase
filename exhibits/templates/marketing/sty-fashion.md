# Editorial Fashion — "MUSE" annual issue, Wild Elegance

> Template role (marketing / growth tab · style series): fashion editorial — black / white / acid
> red, oversized masthead typography at wide tracking, a full-bleed cover with the title laid over
> the image, numbered LOOK entries and a film screening section (the platform `video` component plus
> a poster image). **Asset-driven template**: the cover and the film poster come from the platform
> asset library (`assets/images/kitten-portrait.jpg` + `assets/videos/atelier-film.mp4`, seeded when
> an app is created from this template).
> Scenario: an annual-issue special for a fictional fashion title — a full-bleed cover (photograph
> underneath, display type and masthead over it); three LOOK entries (number / name / piece list); a
> film section (video player plus poster); a numbers band; a subscribe CTA; a footer. No API, static
> data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="MUSE Annual Issue — Wild Elegance">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="fs_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="fs_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="fs_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 56px">
          <Container id="fs_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="fs_nav_brand" props={content: "MUSE", tagName: "span"}/></Container>
          <Container id="fs_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="fs_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="fs_nav_i1" props={itemLabel: "Issue", itemTarget: "fs_hero_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i2" props={itemLabel: "Looks", itemTarget: "fs_looks_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i3" props={itemLabel: "Film", itemTarget: "fs_film_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i4" props={itemLabel: "Subscribe", itemTarget: "fs_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="fs_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="fs_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="fs_nav_cta_txt" props={content: "Get the issue", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Cover (full-bleed, title over image) ─── -->
      <Container id="fs_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:84px">
        <Container id="fs_hero_media_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Image id="fs_hero_media" props={src: "assets/images/kitten-portrait.jpg", alt: "Annual issue cover: Wild Elegance", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
        </Container>
        <Container id="fs_hero_scrim_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:1">
          <Container id="fs_hero_scrim" style="height:100%; width:100%"/>
        </Container>
        <Animate id="fs_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 140, duration: "slow"} style="height:auto; width:100%; padding:220px 56px 64px; position:relative; z-index:2; gap:0px; align-items:flex-start">
          <Container id="fs_hero_kicker_cell" style="height:auto; width:auto"><Text id="fs_hero_kicker" props={content: "ANNUAL ISSUE · N° 012", tagName: "span"}/></Container>
          <Container id="fs_hero_title_cell" style="height:auto; width:auto; padding-top:26px">
            <FlexContainer id="fs_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
              <Container id="fs_hero_l1_cell" style="height:auto; width:auto"><Text id="fs_hero_l1" props={content: "WILD", tagName: "h1"}/></Container>
              <Container id="fs_hero_l2_cell" style="height:auto; width:auto; padding-left:180px"><Text id="fs_hero_l2" props={content: "ELEGANCE", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_hero_meta_cell" style="height:auto; width:100%; padding-top:44px">
            <FlexContainer id="fs_hero_meta_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:32px">
              <Container id="fs_hero_meta_l_cell" style="height:auto; width:auto"><Text id="fs_hero_meta_l" props={content: "Photography / Shen Mo · Styling / A. Che · Editor / MUSE", tagName: "span"}/></Container>
              <Container id="fs_hero_meta_r_cell" style="height:auto; width:auto"><Text id="fs_hero_meta_r" props={content: "24 pages · one film", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. The three LOOKS ─── -->
      <Container id="fs_looks_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_looks_col" props={direction: "column"} style="height:auto; width:100%; padding:88px 56px 96px; gap:48px">
          <Container id="fs_looks_head_cell" style="height:auto; width:100%">
            <FlexContainer id="fs_looks_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="fs_looks_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="fs_looks_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="fs_looks_label_cell" style="height:auto; width:auto"><Text id="fs_looks_label" props={content: "LOOKS · 01 — 03", tagName: "span"}/></Container>
                  <Container id="fs_looks_title_cell" style="height:auto; width:auto"><Text id="fs_looks_title" props={content: "Pose first, clothes second", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="fs_looks_head_r_cell" style="height:auto; width:320px; flex-shrink:0"><Text id="fs_looks_head_r" props={content: "All three looks are re-cut from garments that already existed — sustainability is a decision made at the cutting table, not a slogan.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_looks_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="fs_looks_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="fs_l1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l1_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#141414'/><path d='M190,40 L250,120 L190,240 L130,120 Z' fill='#F5F5F2'/><path d='M190,40 L250,120 L190,240 Z' fill='#D6D6D0'/><circle cx='304' cy='64' r='34' fill='#E8362F'/></svg>", ariaLabel: "LOOK 01 composition"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l1_num_cell" style="height:auto; width:auto"><Text id="fs_l1_num" props={content: "LOOK 01", tagName: "span"}/></Container>
                    <Container id="fs_l1_name_cell" style="height:auto; width:auto"><Text id="fs_l1_name" props={content: "The trench, reborn", tagName: "h3"}/></Container>
                    <Container id="fs_l1_desc_cell" style="height:auto; width:100%"><Text id="fs_l1_desc" props={content: "A 1998 army-green trench, unpicked and re-joined into a cape silhouette.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="fs_l2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l2_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#F5F5F2'/><rect x='90' y='50' width='120' height='180' rx='8' fill='#141414'/><rect x='120' y='90' width='180' height='130' rx='8' fill='#E8362F' opacity='0.92'/><path d='M60,250 L320,250' stroke='#141414' stroke-width='3'/></svg>", ariaLabel: "LOOK 02 composition"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l2_num_cell" style="height:auto; width:auto"><Text id="fs_l2_num" props={content: "LOOK 02", tagName: "span"}/></Container>
                    <Container id="fs_l2_name_cell" style="height:auto; width:auto"><Text id="fs_l2_name" props={content: "One red, all else white", tagName: "h3"}/></Container>
                    <Container id="fs_l2_desc_cell" style="height:auto; width:100%"><Text id="fs_l2_desc" props={content: "Red cashmere vest cut from deadstock, with white wide-leg trousers and pre-loved shoes.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="fs_l3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l3_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#E8362F'/><circle cx='190' cy='140' r='86' fill='#141414'/><circle cx='190' cy='140' r='52' fill='#F5F5F2'/><rect x='160' y='36' width='60' height='208' fill='#141414' opacity='0.85'/></svg>", ariaLabel: "LOOK 03 composition"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l3_num_cell" style="height:auto; width:auto"><Text id="fs_l3_num" props={content: "LOOK 03", tagName: "span"}/></Container>
                    <Container id="fs_l3_name_cell" style="height:auto; width:auto"><Text id="fs_l3_name" props={content: "Night, talking to light", tagName: "h3"}/></Container>
                    <Container id="fs_l3_desc_cell" style="height:auto; width:100%"><Text id="fs_l3_desc" props={content: "A black satin gown with silver accessories — under flash, only the silhouette survives.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Film section ─── -->
      <Container id="fs_film_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_film_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 56px 104px; gap:56px; align-items:center">
          <Container id="fs_film_copy_cell" style="height:auto; width:380px; flex-shrink:0">
            <FlexContainer id="fs_film_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="fs_film_label_cell" style="height:auto; width:auto"><Text id="fs_film_label" props={content: "THE FILM · 02:11", tagName: "span"}/></Container>
              <Container id="fs_film_title_cell" style="height:auto; width:auto"><Text id="fs_film_title" props={content: "Behind 02:11", tagName: "h2"}/></Container>
              <Container id="fs_film_desc_cell" style="height:auto; width:100%"><Text id="fs_film_desc" props={content: "It rained half the day we shot, so the set moved indoors. This film catches the stylist and the model improvising — no script, just music and a lens.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="fs_film_meta_cell" style="height:auto; width:auto"><Text id="fs_film_meta" props={content: "Director / A. Che · Runtime 02:11 · 4K", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_film_player_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <Container id="fs_film_player_frame" style="height:auto; width:100%; padding:14px">
              <Container id="fs_film_player_media_cell" style="height:auto; width:100%">
                <Video id="fs_film_player" props={src: "assets/videos/atelier-film.mp4", poster: "assets/images/kitten-portrait.jpg", controls: true} style="height:auto; width:100%"/>
              </Container>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Numbers band ─── -->
      <Container id="fs_stats_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="fs_stats_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="fs_stats_rule_cell" style="height:3px; width:100%; flex-shrink:0"><Container id="fs_stats_rule" style="height:3px; width:100%"/></Container>
          <FlexContainer id="fs_stats_row" props={direction: "row"} style="height:auto; width:100%; padding:44px 0px 48px; gap:32px; align-items:flex-start">
            <Container id="fs_st1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st1_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st1_num_cell" style="height:auto; width:auto"><Text id="fs_st1_num" props={content: "24 pages", tagName: "h4"}/></Container>
                <Container id="fs_st1_label_cell" style="height:auto; width:auto"><Text id="fs_st1_label" props={content: "In this issue", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st2_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st2_num_cell" style="height:auto; width:auto"><Text id="fs_st2_num" props={content: "3 looks", tagName: "h4"}/></Container>
                <Container id="fs_st2_label_cell" style="height:auto; width:auto"><Text id="fs_st2_label" props={content: "Re-made from archive", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st3_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st3_num_cell" style="height:auto; width:auto"><Text id="fs_st3_num" props={content: "1 film", tagName: "h4"}/></Container>
                <Container id="fs_st3_label_cell" style="height:auto; width:auto"><Text id="fs_st3_label" props={content: "Behind the scenes", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st4_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st4_num_cell" style="height:auto; width:auto"><Text id="fs_st4_num" props={content: "0 new buys", tagName: "h4"}/></Container>
                <Container id="fs_st4_label_cell" style="height:auto; width:auto"><Text id="fs_st4_label" props={content: "Everything from stock & vintage", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Subscribe CTA ─── -->
      <Container id="fs_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:92px 56px; gap:28px; align-items:center">
          <Container id="fs_cta_kicker_cell" style="height:auto; width:auto"><Text id="fs_cta_kicker" props={content: "SEASON PASS", tagName: "span"}/></Container>
          <Container id="fs_cta_title_cell" style="height:auto; width:auto"><Text id="fs_cta_title" props={content: "Next issue — start with the cover", tagName: "h2"}/></Container>
          <Container id="fs_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="fs_cta_sub" props={content: "Print edition $68 / four issues a year, digital included. Subscribers get first refusal on our studio shoots.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="fs_cta_btn_cell" style="height:auto; width:auto; padding-top:6px">
            <Container id="fs_cta_btn" style="height:auto; width:auto; padding:17px 44px">
              <Text id="fs_cta_btn_txt" props={content: "Subscribe for a year", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="fs_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="fs_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 56px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="fs_footer_left_cell" style="height:auto; width:auto"><Text id="fs_footer_left" props={content: "© 2026 MUSE · The title and its people are fictional", tagName: "span"}/></Container>
          <Container id="fs_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="fs_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="fs_footer_f1_cell" style="height:auto; width:auto"><Text id="fs_footer_f1" props={content: "Back issues", tagName: "span"}/></Container>
              <Container id="fs_footer_f2_cell" style="height:auto; width:auto"><Text id="fs_footer_f2" props={content: "Submissions", tagName: "span"}/></Container>
              <Container id="fs_footer_f3_cell" style="height:auto; width:auto"><Text id="fs_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer back-to-top (nav.scroll: return the current scroll container to its top)
      @fs_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground ──
      @fs_root = { background: #F5F5F2; }

      # ── Nav ──
      @fs_nav_region = { background: rgba(245, 245, 242, 0.94); backdrop-filter: blur(10px); border-bottom: 3px solid #141414; }
      # Masthead tracking 12px → 6px: wide tracking on a Latin masthead is an editorial idiom, so it
      # stays wide — just not CJK-wide, where the letters would read as four separate words.
      @fs_nav_brand = { color: #141414; font-size: 22px; font-weight: 900; letter-spacing: 6px; }
      @fs_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.72); --anchor-item-font-size: 13px; --anchor-item-font-weight: 700; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #E8362F; --anchor-item-active-bg: transparent; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #E8362F; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -3px 0 #E8362F; }
      }
      @fs_nav_cta = { background: #141414; transition: background 0.25s ease; :scope:hover { background: #E8362F; } }
      @fs_nav_cta_txt = { color: #F5F5F2; font-size: 13px; font-weight: 800; letter-spacing: 1.2px; }

      # ── Cover ──
      @fs_hero_media = { filter: saturate(1.12) contrast(1.05); }
      @fs_hero_scrim = { background: linear-gradient(180deg, rgba(10, 10, 10, 0.05) 0%, rgba(10, 10, 10, 0.28) 55%, rgba(10, 10, 10, 0.78) 100%); }
      @fs_hero_kicker = { color: #F5F5F2; font-size: 12px; font-weight: 700; letter-spacing: 2.8px; }
      # The masthead keeps its size. Measured in the live page: "ELEGANCE" at 148px Inter Black runs
      # 756px, plus the 180px indent = 936px inside the 1168px measure (1280 minus 56px gutters) — the
      # full-bleed scale is the whole point of this template, so it stays. Tracking -6px → -4px and the
      # indent stays at 180px: uppercase Latin already carries its own sidebearings, so it needs less
      # negative tracking than the two-glyph Chinese line did.
      @fs_hero_l1 = { color: #FFFFFF; font-size: 148px; font-weight: 900; line-height: 0.98; letter-spacing: -4px; :scope { text-shadow: 0 3px 26px rgba(0, 0, 0, 0.4); } }
      # ⚠️ `paint-order: stroke fill` is required for Latin outline type: Chromium strokes every
      # sub-path of a glyph independently, so Inter's R / A / N / C … (overlapping sub-paths) leak
      # their internal seams through the fill as a "ghost" outline (the zh edition's 优雅 is CJK and
      # never showed it). The fill is painted last now, so it hides the seams; the stroke doubles
      # (3px → 6px) to keep the same visible rim, since the fill covers its inner half.
      @fs_hero_l2 = { color: #F5F5F2; font-size: 148px; font-weight: 900; line-height: 0.98; letter-spacing: -4px; :scope { -webkit-text-stroke: 6px #141414; paint-order: stroke fill; } }
      @fs_hero_meta_l = { color: rgba(245, 245, 242, 0.85); font-size: 12.5px; font-weight: 600; letter-spacing: 1.2px; }
      @fs_hero_meta_r = { color: rgba(245, 245, 242, 0.85); font-size: 12.5px; font-weight: 600; letter-spacing: 1.2px; }

      # ── LOOK ──
      @fs_looks_label = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      # 52px kept: "Pose first, clothes second" measures 638px against the 808px the heading column
      # gets once the 320px note has taken its share.
      @fs_looks_title = { color: #141414; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; }
      @fs_looks_head_r = { color: rgba(20, 20, 20, 0.62); font-size: 14px; line-height: 1.8; }
      @fs_l1_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 1.4px; }
      @fs_l2_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 1.4px; }
      @fs_l3_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 1.4px; }
      # Look names stay at 22px but the copy is short on purpose: each card gives the name 324px
      # (372px column minus 24px padding each side), and "One red, all else white" measures 270px.
      @fs_l1_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.2px; }
      @fs_l2_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.2px; }
      @fs_l3_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.2px; }
      @fs_l1_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }
      @fs_l2_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }
      @fs_l3_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }
      @fs_l1_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @fs_l2_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @fs_l3_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }

      # ── Film ──
      @fs_film_label = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      # "Behind 02:11" is short (287px) in a 380px column — the 48px display size holds.
      @fs_film_title = { color: #141414; font-size: 48px; font-weight: 900; letter-spacing: -1.5px; }
      @fs_film_desc = { color: rgba(20, 20, 20, 0.66); font-size: 14px; line-height: 1.8; }
      @fs_film_meta = { color: rgba(20, 20, 20, 0.45); font-size: 12px; letter-spacing: 1px; }
      @fs_film_player_frame = { background: #141414; }
      @fs_film_player_media_cell = { background: #000000; }

      # ── Numbers band ──
      @fs_stats_rule = { background: #141414; }
      # Latin numerals with a unit ("24 pages", 151px) sit against a 268px column; 34px keeps the
      # four-across rhythm without the labels below wrapping past two lines.
      @fs_st1_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -0.8px; }
      @fs_st2_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -0.8px; }
      @fs_st3_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -0.8px; }
      @fs_st4_num = { color: #E8362F; font-size: 34px; font-weight: 900; letter-spacing: -0.8px; }
      @fs_st1_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @fs_st2_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @fs_st3_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @fs_st4_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }

      # ── CTA ──
      @fs_cta_region = { background: #141414; }
      @fs_cta_kicker = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 2.8px; }
      # 54px kept: "Next issue — start with the cover" measures 841px, centred in the 1168px measure.
      @fs_cta_title = { color: #F5F5F2; font-size: 54px; font-weight: 900; letter-spacing: -1.5px; }
      @fs_cta_sub = { color: rgba(245, 245, 242, 0.66); font-size: 14.5px; line-height: 1.8; text-align: center; }
      @fs_cta_btn = { background: #E8362F; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(232, 54, 47, 0.4); } }
      @fs_cta_btn_txt = { color: #FFFFFF; font-size: 15px; font-weight: 800; letter-spacing: 2px; }

      # ── Footer ──
      @fs_footer_row = { border-top: 1px solid rgba(20, 20, 20, 0.16); }
      @fs_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.4px; }
      @fs_footer_f1 = { color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
      @fs_footer_f2 = { color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
      @fs_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
    </styles>
  </Page>
</App>
```

## Production notes

**The masthead stayed at 148px — this one was measured, not shrunk on principle.** Editorial
fashion is a *poster* template; the display type is the design. The Chinese prints 野性 / 优雅 (2
glyphs per line) at 148px, which measures 296px per line. Two-glyph Latin words do not exist, so
the display line was re-set as `WILD` / `ELEGANCE` and measured in the live page: `ELEGANCE` at
148px Inter Black runs **756px**, plus the 180px indent = **936px inside the 1168px measure**
(1280 minus 56px gutters). It fits with 232px of headroom, so the full-bleed scale is untouched.
Tracking went `-6px` → **`-4px`**: uppercase Latin carries its own sidebearings.

**Wide tracking was pulled back, not removed** — it is part of this template's language, so the
labels keep more tracking than any other template in the series, just not CJK-wide values:

| Element | Chinese | English |
| --- | --- | --- |
| Masthead `MUSE` | 12px | **6px** |
| Kicker / label / CTA kicker (12px) | 6px / 5px | **2.8px / 2.4px** |
| Nav links / footer links | 2.6px / 1.6px | **1px / 0.8px** |
| CTA button | 4px | **2px** |

**Section headings kept their sizes where measurement allowed it**: LOOK heading 52px
(`Pose first, clothes second` = 638px against an 808px column), film heading 48px (`Behind 02:11`
= 287px in a 380px column), CTA heading 54px (`Next issue — start with the cover` = 841px,
centred). Nothing was reduced for its own sake — only where the numbers said so.

**Body leading came down** per the Latin/CJK rule: LOOK descriptions 1.85 → **1.7**, the section
note 1.9 → **1.8**, the film paragraph 2.05 → **1.8**, the CTA paragraph 2.0 → **1.8**.

**Look names are deliberately short copy.** Each card gives the name 324px (372px column minus 24px
padding each side); `One red, all else white` measures 270px. The Chinese names are 8–10 glyphs and
had no such constraint — the English equivalents were written to the card, not to the literal
translation (`一件红，其余留白` → "One red, all else white", `夜色与光的对话` → "Night, talking to
light").

**Copy policy — equivalent, not literal.** `野性优雅` (the campaign title) splits into the
English campaign's own two words, `WILD` / `ELEGANCE`; `LOOK` is already a Latin loanword in the
Chinese and stays. `订阅全年` → "Subscribe for a year"; `往期` → "Back issues"; `投稿` →
"Submissions". The price is re-denominated rather than translated — `¥128 / 年四期` becomes
**"$68 / four issues a year"** — and the fictional crew (`摄影/造型/编辑`) becomes a Latin
credit line, `Photography / Shen Mo · Styling / A. Che · Editor / MUSE`. The film caption
`02:11 的幕后` → "Behind 02:11" so the runtime keeps its place in both the label and the heading.
Node ids are unchanged throughout.

**One rendering fix, same root cause as `sty-type-lab`.** The outlined hero line needed
`paint-order: stroke fill`. Chromium strokes each sub-path of a glyph independently, and Inter builds
Latin capitals (E, L, G, A, N, C …) out of *overlapping* sub-paths, so the internal seams got stroked
too and bled through the off-white fill as a ghost outline inside each letter. Painting the fill last
covers them; the stroke doubles 3px → 6px so the visible rim is unchanged (the fill now covers the
stroke's inner half). The zh edition's 优雅 is CJK — no overlapping sub-paths, no artifact.
