# Quiet Luxury — "NOIR & OR" fine-jewellery private viewing

> Template role (marketing / growth tab · style series): quiet luxury — a near-black ground with
> champagne-gold hairlines, feather-light weights at very generous leading, a great deal of white
> space, restrained motion and badge-like small caps labels. **Asset-driven template**: one "piece"
> uses a photograph from the platform asset library (`assets/images/kitten-portrait.jpg`,
> re-graded), seeded automatically when an app is created from this template.
> Scenario: a site for a fictional fine-jewellery private viewing — a centred inscription hero (one
> display line, a gold rule, date and place in small type); three collection entries (hairline rules
> with year / material); "the piece" as a large photograph (dark grade, thin gold frame, glass
> caption); three private services; an appointment CTA (gold outline); a footer. No API, static
> data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="NOIR & OR — Fine Jewellery Private Viewing">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="lx_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (minimal, gold hairline) ─── -->
      <Container id="lx_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="lx_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:24px 64px">
          <Container id="lx_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="lx_nav_brand" props={content: "NOIR & OR", tagName: "span"}/></Container>
          <Container id="lx_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="lx_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="lx_nav_i1" props={itemLabel: "Collections", itemTarget: "lx_series_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i2" props={itemLabel: "The Piece", itemTarget: "lx_piece_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i3" props={itemLabel: "Services", itemTarget: "lx_service_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i4" props={itemLabel: "Visit", itemTarget: "lx_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="lx_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="lx_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="lx_nav_cta_txt" props={content: "Book a viewing", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (centred inscription + gold rule) ─── -->
      <Container id="lx_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="lx_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="lx_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 700' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='lxGlow' cx='0.5' cy='0.42' r='0.6'><stop offset='0' stop-color='#C9A96A' stop-opacity='0.16'/><stop offset='0.6' stop-color='#C9A96A' stop-opacity='0.03'/><stop offset='1' stop-color='#C9A96A' stop-opacity='0'/></radialGradient></defs><rect width='1440' height='700' fill='url(#lxGlow)'/><circle cx='720' cy='300' r='230' stroke='#C9A96A' stroke-width='0.8' opacity='0.3'/><circle cx='720' cy='300' r='330' stroke='#C9A96A' stroke-width='0.6' opacity='0.18'/><path d='M120,640 L1320,640' stroke='#C9A96A' stroke-width='0.8' opacity='0.35'/></svg>", ariaLabel: "Faint gold rings and a baseline rule"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="lx_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 150, duration: "slow"} style="height:auto; width:100%; padding:120px 64px 132px; position:relative; z-index:1; gap:30px; align-items:center">
          <Container id="lx_hero_kicker_cell" style="height:auto; width:auto"><Text id="lx_hero_kicker" props={content: "PRIVATE VIEWING · BY INVITATION", tagName: "span"}/></Container>
          <Container id="lx_hero_title_cell" style="height:auto; width:100%">
            <FlexContainer id="lx_hero_title_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:center">
              <Container id="lx_hero_l1_cell" style="height:auto; width:auto"><Text id="lx_hero_l1" props={content: "When the light comes in,", tagName: "h1"}/></Container>
              <Container id="lx_hero_l2_cell" style="height:auto; width:auto"><Text id="lx_hero_l2" props={content: "the stones begin their story", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_hero_rule_cell" style="height:1px; width:120px; flex-shrink:0"><Container id="lx_hero_rule" style="height:1px; width:120px"/></Container>
          <Container id="lx_hero_meta_cell" style="height:auto; width:auto">
            <FlexContainer id="lx_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:44px">
              <Container id="lx_hero_meta_date_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_date" props={content: "2026.12.05 — 12.21", tagName: "span"}/></Container>
              <Container id="lx_hero_meta_place_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_place" props={content: "The Bund · No. 1 Residence, 3F", tagName: "span"}/></Container>
              <Container id="lx_hero_meta_by_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_by" props={content: "By invitation only", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Collections (hairline entries) ─── -->
      <Container id="lx_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_series_col" props={direction: "column"} style="height:auto; width:100%; padding:24px 64px 96px; gap:0px">
          <Container id="lx_series_head_cell" style="height:auto; width:100%; padding:26px 0px">
            <FlexContainer id="lx_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="lx_series_head_l_cell" style="height:auto; width:auto"><Text id="lx_series_head_l" props={content: "COLLECTIONS · 2024 — 2026", tagName: "span"}/></Container>
              <Container id="lx_series_head_r_cell" style="height:auto; width:auto"><Text id="lx_series_head_r" props={content: "Three series · nine pieces", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s1_cell" style="height:auto; width:100%; padding:34px 0px">
            <FlexContainer id="lx_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s1_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s1_num" props={content: "I", tagName: "span"}/></Container>
              <Container id="lx_s1_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s1_name" props={content: "Silence — rough emerald and matte gold", tagName: "h4"}/></Container>
              <Container id="lx_s1_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s1_year" props={content: "2026", tagName: "span"}/></Container>
              <Container id="lx_s1_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s1_spec" props={content: "3 pieces · one of one", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s2_cell" style="height:auto; width:100%; padding:34px 0px">
            <FlexContainer id="lx_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s2_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s2_num" props={content: "II", tagName: "span"}/></Container>
              <Container id="lx_s2_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s2_name" props={content: "Daylight — pearl and mirror-white gold", tagName: "h4"}/></Container>
              <Container id="lx_s2_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s2_year" props={content: "2025", tagName: "span"}/></Container>
              <Container id="lx_s2_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s2_spec" props={content: "3 pieces · single edition", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s3_cell" style="height:auto; width:100%; padding:34px 0px 6px">
            <FlexContainer id="lx_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s3_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s3_num" props={content: "III", tagName: "span"}/></Container>
              <Container id="lx_s3_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s3_name" props={content: "Nocturne — black onyx and rose gold", tagName: "h4"}/></Container>
              <Container id="lx_s3_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s3_year" props={content: "2024", tagName: "span"}/></Container>
              <Container id="lx_s3_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s3_spec" props={content: "3 pieces · 1 sold", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. The piece (photograph + thin gold frame) ─── -->
      <Container id="lx_piece_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_piece_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 64px 104px; gap:36px; align-items:center">
          <Container id="lx_piece_head_cell" style="height:auto; width:100%; max-width:1040px">
            <FlexContainer id="lx_piece_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="lx_piece_label_cell" style="height:auto; width:auto"><Text id="lx_piece_label" props={content: "THE PIECE · THIS SEASON", tagName: "span"}/></Container>
              <Container id="lx_piece_num_cell" style="height:auto; width:auto"><Text id="lx_piece_num" props={content: "№ 007", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_piece_frame_cell" style="height:auto; width:100%; max-width:1040px">
            <Container id="lx_piece_frame" style="height:620px; width:100%; position:relative; overflow:hidden">
              <Container id="lx_piece_img_cell" style="height:100%; width:100%">
                <Image id="lx_piece_img" props={src: "assets/images/kitten-portrait.jpg", alt: "The featured piece, 'Mist-Beast' — still-life photograph", objectFit: "cover", loading: "lazy"} style="height:100%; width:100%"/>
              </Container>
              <Container id="lx_piece_cap_cell" style="height:auto; width:auto; position:absolute; left:0px; bottom:0px; z-index:2">
                <FlexContainer id="lx_piece_cap_col" props={direction: "column"} style="height:auto; width:auto; gap:8px; align-items:flex-start; padding:30px 44px 26px">
                  <Container id="lx_piece_cap_title_cell" style="height:auto; width:auto"><Text id="lx_piece_cap_title" props={content: "The Mist-Beast brooch", tagName: "h3"}/></Container>
                  <Container id="lx_piece_cap_desc_cell" style="height:auto; width:auto"><Text id="lx_piece_cap_desc" props={content: "18K matte gold · grey moonstone · one of one", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </Container>
          </Container>
          <Container id="lx_piece_note_cell" style="height:auto; width:100%; max-width:1040px">
            <Text id="lx_piece_note" props={content: "The featured piece took the atelier eleven months: every moonstone was chosen for the direction of its glow, and the goldwork keeps the marks of the engraver's hand — imperfect, and impossible to repeat.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Private services ─── -->
      <Container id="lx_service_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_service_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 64px 96px; gap:44px">
          <Container id="lx_service_head_cell" style="height:auto; width:auto"><Text id="lx_service_head" props={content: "SERVICES · BY APPOINTMENT", tagName: "span"}/></Container>
          <Container id="lx_service_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="lx_service_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:0px; align-items:stretch">
              <Container id="lx_v1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 40px 0px 0px">
                <FlexContainer id="lx_v1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v1_num_cell" style="height:auto; width:auto"><Text id="lx_v1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="lx_v1_name_cell" style="height:auto; width:auto"><Text id="lx_v1_name" props={content: "Bespoke commissions", tagName: "h4"}/></Container>
                  <Container id="lx_v1_desc_cell" style="height:auto; width:100%"><Text id="lx_v1_desc" props={content: "Four sittings from stone to setting, with the founder in the room throughout.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lx_v2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 40px">
                <FlexContainer id="lx_v2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v2_num_cell" style="height:auto; width:auto"><Text id="lx_v2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="lx_v2_name_cell" style="height:auto; width:auto"><Text id="lx_v2_name" props={content: "Heirloom commissions", tagName: "h4"}/></Container>
                  <Container id="lx_v2_desc_cell" style="height:auto; width:100%"><Text id="lx_v2_desc" props={content: "Remounting and provenance: a paper dossier and a wax seal for each piece.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lx_v3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 0px 0px 40px">
                <FlexContainer id="lx_v3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v3_num_cell" style="height:auto; width:auto"><Text id="lx_v3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="lx_v3_name_cell" style="height:auto; width:auto"><Text id="lx_v3_name" props={content: "Lifetime care", tagName: "h4"}/></Container>
                  <Container id="lx_v3_desc_cell" style="height:auto; width:100%"><Text id="lx_v3_desc" props={content: "Annual cleaning and polishing at no cost, and resizing whenever the hand asks for it.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Appointment CTA ─── -->
      <Container id="lx_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 64px; gap:30px; align-items:center">
          <Container id="lx_cta_title_cell" style="height:auto; width:auto"><Text id="lx_cta_title" props={content: "Reserve a quiet two hours", tagName: "h2"}/></Container>
          <Container id="lx_cta_sub_cell" style="height:auto; width:100%; max-width:540px"><Text id="lx_cta_sub" props={content: "Each viewing receives six guests only, with champagne and a private fitting. Please book seven days ahead.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="lx_cta_btn_cell" style="height:auto; width:auto; padding-top:8px">
            <Container id="lx_cta_btn" style="height:auto; width:auto; padding:16px 46px">
              <Text id="lx_cta_btn_txt" props={content: "Request an invitation", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="lx_cta_mail_cell" style="height:auto; width:auto"><Text id="lx_cta_mail" props={content: "concierge@noir-or.salon", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="lx_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lx_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 64px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="lx_footer_left_cell" style="height:auto; width:auto"><Text id="lx_footer_left" props={content: "© 2026 NOIR & OR · Brand and pieces are fictional", tagName: "span"}/></Container>
          <Container id="lx_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="lx_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:30px; align-items:center">
              <Container id="lx_footer_f1_cell" style="height:auto; width:auto"><Text id="lx_footer_f1" props={content: "Authenticity", tagName: "span"}/></Container>
              <Container id="lx_footer_f2_cell" style="height:auto; width:auto"><Text id="lx_footer_f2" props={content: "Privacy", tagName: "span"}/></Container>
              <Container id="lx_footer_f3_cell" style="height:auto; width:auto"><Text id="lx_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer back-to-top (nav.scroll: return the current scroll container to its top)
      @lx_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground (near-black) ──
      @lx_root = { background: #0D0D0F; }

      # ── Nav ──
      @lx_nav_region = { background: rgba(13, 13, 15, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(201, 169, 106, 0.22); }
      # Tracking is where CJK and Latin diverge most: the Chinese sets uppercase Latin at 6px / 4.4px
      # because a CJK glyph needs opening up; Latin already carries its own sidebearings, so every
      # tracked label here is pulled back to roughly half its original value (still wide for Latin).
      @lx_nav_brand = { color: #EFE7D8; font-size: 15px; font-weight: 600; letter-spacing: 2.6px; }
      @lx_nav_menu = {
        :scope { --anchor-item-color: rgba(239, 231, 216, 0.6); --anchor-item-font-size: 13px; --anchor-item-font-weight: 500; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #C9A96A; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #EFE7D8; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 1px solid #C9A96A; }
      }
      @lx_nav_cta = { border: 1px solid rgba(201, 169, 106, 0.55); border-radius: 2px; transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.12); } }
      @lx_nav_cta_txt = { color: #C9A96A; font-size: 12.5px; font-weight: 600; letter-spacing: 1.2px; }

      # ── Hero ──
      @lx_hero_kicker = { color: rgba(201, 169, 106, 0.8); font-size: 11.5px; font-weight: 600; letter-spacing: 2.8px; }
      # 58px CJK (2 glyphs per line, ~450–580px wide) becomes 72px Latin: a Latin sans at weight 300
      # runs ~0.51em per glyph, so the same nominal size reads much lighter and narrower. Measured in
      # the live page at 72px: line 1 "When the light comes in," is 873px and line 2 "the stones begin
      # their story" is 965px — both inside the 1152px measure (1280 minus 64px gutters each side).
      @lx_hero_l1 = { color: #EFE7D8; font-size: 72px; font-weight: 300; letter-spacing: 0.5px; line-height: 1.35; }
      @lx_hero_l2 = { color: #EFE7D8; font-size: 72px; font-weight: 300; letter-spacing: 0.5px; line-height: 1.35; }
      @lx_hero_rule = { background: #C9A96A; opacity: 0.7; }
      @lx_hero_meta_date = { color: rgba(239, 231, 216, 0.6); font-size: 12.5px; font-weight: 500; letter-spacing: 1.2px; }
      @lx_hero_meta_place = { color: rgba(239, 231, 216, 0.6); font-size: 12.5px; font-weight: 500; letter-spacing: 1.2px; }
      @lx_hero_meta_by = { color: #C9A96A; font-size: 12.5px; font-weight: 600; letter-spacing: 1.2px; }

      # ── Collections ──
      @lx_series_head_cell = { border-top: 1px solid rgba(201, 169, 106, 0.3); border-bottom: 1px solid rgba(201, 169, 106, 0.3); }
      @lx_series_head_l = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 2.2px; }
      @lx_series_head_r = { color: rgba(239, 231, 216, 0.45); font-size: 11.5px; letter-spacing: 1.4px; }
      @lx_s1_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s2_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s3_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s1_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 1.6px; }
      @lx_s2_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 1.6px; }
      @lx_s3_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 1.6px; }
      # Longest entry "Daylight — pearl and mirror-white gold" measures 489px against the 652px the
      # name column gets once the numeral / year / spec columns have taken theirs.
      @lx_s1_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 0.4px; }
      @lx_s2_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 0.4px; }
      @lx_s3_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 0.4px; }
      @lx_s1_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }
      @lx_s2_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }
      @lx_s3_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }
      @lx_s1_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }
      @lx_s2_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }
      @lx_s3_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 1.1px; }

      # ── The piece ──
      @lx_piece_label = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 2.2px; }
      @lx_piece_num = { color: rgba(239, 231, 216, 0.45); font-size: 11.5px; letter-spacing: 1.4px; }
      @lx_piece_frame = { border: 1px solid rgba(201, 169, 106, 0.35); }
      @lx_piece_img = { filter: grayscale(0.45) contrast(1.12) brightness(0.82) saturate(0.9); }
      @lx_piece_cap_col = { background: rgba(13, 13, 15, 0.82); backdrop-filter: blur(8px); }
      @lx_piece_cap_title = { color: #EFE7D8; font-size: 20px; font-weight: 400; letter-spacing: 0.6px; }
      @lx_piece_cap_desc = { color: #C9A96A; font-size: 12px; letter-spacing: 1.3px; }
      # Leading comes down from 2.2 to 1.9: the lavish CJK leading makes a Latin paragraph fall apart
      # into disconnected lines. 1.9 still reads as "airy" for this template's identity.
      @lx_piece_note = { color: rgba(239, 231, 216, 0.55); font-size: 14px; line-height: 1.9; letter-spacing: 0.2px; }

      # ── Private services ──
      @lx_service_head = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 2.2px; }
      @lx_v1_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v2_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v3_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v1_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 1.5px; }
      @lx_v2_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 1.5px; }
      @lx_v3_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 1.5px; }
      @lx_v1_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 0.5px; }
      @lx_v2_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 0.5px; }
      @lx_v3_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 0.5px; }
      @lx_v1_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 1.85; }
      @lx_v2_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 1.85; }
      @lx_v3_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 1.85; }

      # ── CTA ──
      @lx_cta_region = { background: #0A0A0C; }
      # 42px → 48px: the Latin line is 15 glyphs wider than the Chinese one, and at weight 300 it can
      # take the extra size without losing the whisper-quiet feel (measured 624px, centred in 1152px).
      @lx_cta_title = { color: #EFE7D8; font-size: 48px; font-weight: 300; letter-spacing: 1px; }
      @lx_cta_sub = { color: rgba(239, 231, 216, 0.55); font-size: 14px; line-height: 1.9; text-align: center; letter-spacing: 0.2px; }
      @lx_cta_btn = { border: 1px solid #C9A96A; border-radius: 2px; transition: background 0.3s ease, transform 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.14); transform: translateY(-1px); } }
      @lx_cta_btn_txt = { color: #C9A96A; font-size: 14px; font-weight: 600; letter-spacing: 1.6px; }
      @lx_cta_mail = { color: rgba(239, 231, 216, 0.45); font-size: 12.5px; letter-spacing: 1.1px; }

      # ── Footer ──
      @lx_footer_row = { border-top: 1px solid rgba(201, 169, 106, 0.2); }
      @lx_footer_left = { color: rgba(239, 231, 216, 0.35); font-size: 12px; letter-spacing: 0.4px; }
      @lx_footer_f1 = { color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
      @lx_footer_f2 = { color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
      @lx_footer_f3 = { cursor: pointer; color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 0.8px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
    </styles>
  </Page>
</App>
```

## Production notes

**A typographic template, retuned rather than translated.** Quiet luxury lives on letter-spacing,
weight and leading — and those three are exactly where CJK and Latin disagree. Nothing structural
was needed here (there is no Chinese-only "display line + English annotation" pairing in this
template), so **every node id is identical to the Chinese version** and tooling can address either
document with the same selectors.

**Letter-spacing came down across the board — roughly halved.** A CJK glyph needs opening up; Latin
already carries its own sidebearings, and wide tracking on lowercase Latin reads as broken rather
than luxurious:

| Element | Chinese | English |
| --- | --- | --- |
| Brand `NOIR & OR` | 6px | **2.6px** |
| Kicker / service label (11.5px) | 6px / 4.4px | **2.8px / 2.2px** |
| Hero display line (72px) | 6px | **0.5px** |
| Meta rows | 2.6px | **1.1–1.2px** |
| Buttons / links | 3.4px / 2.2px | **1.6px / 1.1px** |

**The hero went up, not down — deliberately.** Chinese sets 2 glyphs per line (448px / 576px
measured). A Latin sans at weight 300 runs ~0.51em per glyph, so the same nominal size would have
read thin and undersized; the display lines were raised from 58px to **72px** and measured in the
live page: `When the light comes in,` = 873px, `the stones begin their story` = 965px, both inside
the 1152px measure. Leading 1.5 → **1.35** (the Chinese 1.5 is airiness between two square blocks;
for Latin it reads as a gap).

**Body leading came down**, per the Latin/CJK rule: the piece note 2.2 → **1.9**, service
descriptions 2.1 → **1.85**, CTA sub 2.2 → **1.9**. Not the full 1.7 used on busier templates —
the "very generous leading" *is* this template's design language, so it is pulled back only to
where a Latin paragraph still hangs together.

**CTA title went up** (42px → 48px): the English line `Reserve a quiet two hours` is 15 glyphs
against 10 CJK, and at weight 300 it carries the extra size — measured 624px, centred in the
1152px measure.

**Copy policy — equivalent, not literal.** `《缄默》/《昼白》/《夜行》` (Silence / Daylight / Nocturne)
keep their three-mood structure and become `Silence — rough emerald and matte gold`, `Daylight —
pearl and mirror-white gold`, `Nocturne — black onyx and rose gold`. `私享服务` → "Services by
appointment"; `传家委托` → "Heirloom commissions" (a house offering, not a transliteration);
`《雾中兽》` → "The Mist-Beast"; `返回顶部 ↑` → "Back to top ↑". The bilingual middot labels
(`系列 · COLLECTIONS`) lose their redundant half and keep the rhythm by pairing two English
phrases instead — `COLLECTIONS · 2024 — 2026`, `SERVICES · BY APPOINTMENT`, `THE PIECE · THIS
SEASON` — so the gold-label / dim-count structure of each row survives without a node change.
`外滩源 · 壹号公馆 3F` → "The Bund · No. 1 Residence, 3F"; the brand, email and date range were
already Latin and are unchanged.
