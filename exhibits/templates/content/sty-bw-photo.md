# Black-and-white photography — "LIN MO" photographer portfolio

> Template role (content / brand tab · style series): black-and-white photography plus editorial
> typesetting — three steps of black / white / grey only, the fracture between oversized display type
> and finely tracked labels, full-bleed work images overlaid with a caption card, a vertical side
> label and a two-column statement. **Asset-driven template**: the work image comes from the platform
> asset library by relative reference (`assets/images/kitten-portrait.jpg`, seeded into the app's
> asset library when an app is created); the page drops it to black and white with a CSS filter.
> Scenario: a portfolio for a fictional photographer — a minimal top nav; a hero of staggered display
> lines ("MONUMENTS / OF THE ORDINARY") with a narrow statement column on the right; a full-bleed
> work image (black and white, with a caption card — number / title / year / process — over the
> bottom-left corner and a vertical series label top-right); a four-row series index; a black
> statement band with the quote and the exhibition dates; a closing contact band; a minimal footer.
> No API, static data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="LIN MO — Black-and-White Photographer">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="bw_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (minimal) ─── -->
      <Container id="bw_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="bw_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:22px 64px">
          <Container id="bw_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="bw_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:14px">
              <Container id="bw_nav_name_cell" style="height:auto; width:auto"><Text id="bw_nav_name" props={content: "LIN MO", tagName: "span"}/></Container>
              <Container id="bw_nav_name_en_cell" style="height:auto; width:auto"><Text id="bw_nav_name_en" props={content: "PHOTOGRAPHER · SHANGHAI", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="bw_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="bw_nav_i1" props={itemLabel: "Works", itemTarget: "bw_feature_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i2" props={itemLabel: "Series", itemTarget: "bw_series_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i3" props={itemLabel: "Exhibitions", itemTarget: "bw_statement_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i4" props={itemLabel: "Contact", itemTarget: "bw_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (staggered display type + narrow statement column) ─── -->
      <Container id="bw_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="bw_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:72px 64px 0px; align-items:flex-start">
          <Container id="bw_hero_top_cell" style="height:auto; width:100%">
            <FlexContainer id="bw_hero_top_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center">
              <Container id="bw_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="bw_hero_eyebrow" props={content: "BLACK AND WHITE · PORTFOLIO · 2019 — 2026", tagName: "span"}/></Container>
              <Container id="bw_hero_count_cell" style="height:auto; width:auto"><Text id="bw_hero_count" props={content: "34 prints / 4 series", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_hero_rule_cell" style="height:1px; width:100%; flex-shrink:0; padding-top:22px">
            <Container id="bw_hero_rule" style="height:1px; width:100%"/>
          </Container>
          <Container id="bw_hero_main_cell" style="height:auto; width:100%; padding-top:56px">
            <FlexContainer id="bw_hero_main_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:48px">
              <Container id="bw_hero_type_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bw_hero_type_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; align-items:flex-start">
                  <Container id="bw_hero_l1_cell" style="height:auto; width:auto"><Text id="bw_hero_l1" props={content: "MONUMENTS", tagName: "h1"}/></Container>
                  <Container id="bw_hero_l2_cell" style="height:auto; width:auto; padding-left:88px"><Text id="bw_hero_l2" props={content: "OF THE ORDINARY", tagName: "h1"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_hero_side_cell" style="height:auto; width:280px; flex-shrink:0; padding-bottom:14px">
                <FlexContainer id="bw_hero_side_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start">
                  <Container id="bw_hero_side_desc_cell" style="height:auto; width:100%"><Text id="bw_hero_side_desc" props={content: "I photograph what people walk past every day without ever seeing it: a cat on a windowsill, an afternoon wall. Black and white is not nostalgia — it is how I keep the light.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="bw_hero_side_meta_cell" style="height:auto; width:100%"><Text id="bw_hero_side_meta" props={content: "Based in Shanghai · Published in Aperture and Chinese Photography", tagName: "span"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Full-bleed work image (caption card + vertical series label) ─── -->
      <Container id="bw_feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <Container id="bw_feature_stack_cell" style="height:auto; width:100%; padding:88px 64px 0px">
          <Container id="bw_feature_frame" style="height:660px; width:100%; position:relative; overflow:hidden">
            <Container id="bw_feature_img_cell" style="height:100%; width:100%">
              <Image id="bw_feature_img" props={src: "assets/images/kitten-portrait.jpg", alt: "Black-and-white photograph “The Sill” — a cat at an afternoon window", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
            </Container>
            <Container id="bw_feature_tag_cell" style="height:auto; width:auto; position:absolute; right:44px; top:44px; z-index:2">
              <Container id="bw_feature_tag" style="height:auto; width:auto; padding:14px 10px">
                <Text id="bw_feature_tag_txt" props={content: "SERIES I · THE SILL", tagName: "span"}/>
              </Container>
            </Container>
            <Container id="bw_feature_cap_cell" style="height:auto; width:auto; position:absolute; left:0px; bottom:0px; z-index:2">
              <FlexContainer id="bw_feature_cap_col" props={direction: "column"} style="height:auto; width:auto; gap:8px; align-items:flex-start; padding:34px 56px 30px 64px">
                <Container id="bw_feature_cap_top_cell" style="height:auto; width:auto">
                  <FlexContainer id="bw_feature_cap_top_row" props={direction: "row"} style="height:auto; width:auto; gap:18px; align-items:baseline">
                    <Container id="bw_feature_cap_num_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_num" props={content: "01", tagName: "span"}/></Container>
                    <Container id="bw_feature_cap_title_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_title" props={content: "The Sill", tagName: "h3"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="bw_feature_cap_meta_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_meta" props={content: "2024 · silver gelatin print · 60 × 40 cm · edition of 3", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </Container>
        </Container>
      </Container>

      <!-- ─── 4. Series index (row based) ─── -->
      <Container id="bw_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_series_col" props={direction: "column"} style="height:auto; width:100%; padding:88px 64px 96px; gap:0px">
          <Container id="bw_series_head_cell" style="height:auto; width:100%; padding-bottom:26px">
            <FlexContainer id="bw_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end">
              <Container id="bw_series_head_l_cell" style="height:auto; width:auto"><Text id="bw_series_head_l" props={content: "SERIES INDEX", tagName: "span"}/></Container>
              <Container id="bw_series_head_r_cell" style="height:auto; width:auto"><Text id="bw_series_head_r" props={content: "Click to view · selected prints available", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s1_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s1_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s1_num" props={content: "01", tagName: "span"}/></Container>
              <Container id="bw_s1_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s1_name" props={content: "The Sill — a cat in afternoon light", tagName: "h4"}/></Container>
              <Container id="bw_s1_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s1_year" props={content: "2024", tagName: "span"}/></Container>
              <Container id="bw_s1_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s1_spec" props={content: "Silver gelatin · 60 × 40 cm", tagName: "span"}/></Container>
              <Container id="bw_s1_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s1_count" props={content: "11 prints", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s2_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s2_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s2_num" props={content: "02", tagName: "span"}/></Container>
              <Container id="bw_s2_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s2_name" props={content: "The Alley — walls and shadows at dusk", tagName: "h4"}/></Container>
              <Container id="bw_s2_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s2_year" props={content: "2023", tagName: "span"}/></Container>
              <Container id="bw_s2_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s2_spec" props={content: "Silver gelatin · 50 × 40 cm", tagName: "span"}/></Container>
              <Container id="bw_s2_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s2_count" props={content: "9 prints", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s3_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s3_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s3_num" props={content: "03", tagName: "span"}/></Container>
              <Container id="bw_s3_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s3_name" props={content: "The Bank — bridges and barges in fog", tagName: "h4"}/></Container>
              <Container id="bw_s3_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s3_year" props={content: "2022", tagName: "span"}/></Container>
              <Container id="bw_s3_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s3_spec" props={content: "Platinum print · 40 × 30 cm", tagName: "span"}/></Container>
              <Container id="bw_s3_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s3_count" props={content: "8 prints", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s4_cell" style="height:auto; width:100%; padding:26px 0px 6px">
            <FlexContainer id="bw_s4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s4_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s4_num" props={content: "04", tagName: "span"}/></Container>
              <Container id="bw_s4_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s4_name" props={content: "Night School — bulbs and desks in song", tagName: "h4"}/></Container>
              <Container id="bw_s4_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s4_year" props={content: "2021", tagName: "span"}/></Container>
              <Container id="bw_s4_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s4_spec" props={content: "Silver gelatin · 60 × 50 cm", tagName: "span"}/></Container>
              <Container id="bw_s4_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s4_count" props={content: "6 prints", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Black statement band + exhibitions ─── -->
      <Container id="bw_statement_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_statement_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 64px; gap:88px; align-items:flex-start">
          <Container id="bw_statement_left_cell" style="height:auto; flex-basis:0; flex-grow:3; width:100%">
            <FlexContainer id="bw_statement_left_col" props={direction: "column"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="bw_statement_label_cell" style="height:auto; width:auto"><Text id="bw_statement_label" props={content: "STATEMENT", tagName: "span"}/></Container>
              <Container id="bw_statement_q1_cell" style="height:auto; width:auto"><Text id="bw_statement_q1" props={content: "The camera doesn't speak.", tagName: "h2"}/></Container>
              <Container id="bw_statement_q2_cell" style="height:auto; width:auto"><Text id="bw_statement_q2" props={content: "It tells me to look.", tagName: "h2"}/></Container>
              <Container id="bw_statement_desc_cell" style="height:auto; width:100%; max-width:560px; padding-top:8px"><Text id="bw_statement_desc" props={content: "For seven years I carried a twin-lens camera between the county towns of the Yangtze delta. “Monuments of the Ordinary” is not about cats, alleys or riverbanks — it is about how we live with the things we cannot go back to. Every frame was taken twice: once to compose, once to say goodbye.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_statement_right_cell" style="height:auto; flex-basis:0; flex-grow:2; width:100%">
            <FlexContainer id="bw_statement_right_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bw_ex_label_cell" style="height:auto; width:100%; padding-bottom:22px"><Text id="bw_ex_label" props={content: "EXHIBITIONS", tagName: "span"} style="height:auto; width:100%"/></Container>
              <Container id="bw_ex1_cell" style="height:auto; width:100%; padding:22px 0px">
                <FlexContainer id="bw_ex1_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex1_date_cell" style="height:auto; width:auto"><Text id="bw_ex1_date" props={content: "2026.10.17 — 11.30", tagName: "span"}/></Container>
                  <Container id="bw_ex1_name_cell" style="height:auto; width:auto"><Text id="bw_ex1_name" props={content: "Shanghai · Ming Studio Gallery (solo)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_ex2_cell" style="height:auto; width:100%; padding:22px 0px">
                <FlexContainer id="bw_ex2_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex2_date_cell" style="height:auto; width:auto"><Text id="bw_ex2_date" props={content: "2026.03.02 — 04.12", tagName: "span"}/></Container>
                  <Container id="bw_ex2_name_cell" style="height:auto; width:auto"><Text id="bw_ex2_name" props={content: "Berlin · KUNSTHALLE NORD (group show)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_ex3_cell" style="height:auto; width:100%; padding:22px 0px 0px">
                <FlexContainer id="bw_ex3_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex3_date_cell" style="height:auto; width:auto"><Text id="bw_ex3_date" props={content: "2025.09 — present", tagName: "span"}/></Container>
                  <Container id="bw_ex3_name_cell" style="height:auto; width:auto"><Text id="bw_ex3_name" props={content: "Touring · Hangzhou / Chengdu / Guangzhou", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Closing contact band ─── -->
      <Container id="bw_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 64px; gap:34px; align-items:flex-start">
          <Container id="bw_cta_title_cell" style="height:auto; width:auto"><Text id="bw_cta_title" props={content: "For a print or a project — write to me.", tagName: "h2"}/></Container>
          <Container id="bw_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="bw_cta_sub" props={content: "Prints, exhibition invitations and book projects — tell me what you have in mind. Editions and archival prints get an answer within one working day.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="bw_cta_actions_cell" style="height:auto; width:auto">
            <FlexContainer id="bw_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:30px">
              <Container id="bw_cta_btn" style="height:auto; width:auto; padding:16px 42px">
                <Text id="bw_cta_btn_txt" props={content: "Write to me", tagName: "span"}/>
              </Container>
              <Container id="bw_cta_mail_cell" style="height:auto; width:auto"><Text id="bw_cta_mail" props={content: "studio@linmo.photo", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="bw_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bw_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 64px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="bw_footer_left_cell" style="height:auto; width:auto"><Text id="bw_footer_left" props={content: "© 2026 LIN MO · All images remain the artist's", tagName: "span"}/></Container>
          <Container id="bw_footer_mid_cell" style="height:auto; width:auto"><Text id="bw_footer_mid" props={content: "Silver gelatin · Platinum · Archival pigment", tagName: "span"}/></Container>
          <Container id="bw_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="bw_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="bw_footer_f1_cell" style="height:auto; width:auto"><Text id="bw_footer_f1" props={content: "Archive", tagName: "span"}/></Container>
              <Container id="bw_footer_f2_cell" style="height:auto; width:auto"><Text id="bw_footer_f2" props={content: "Instagram", tagName: "span"}/></Container>
              <Container id="bw_footer_f3_cell" style="height:auto; width:auto"><Text id="bw_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer back-to-top (nav.scroll: return the current scroll container to its top)
      @bw_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground (paper + ink) ──
      @bw_root = { background: #FAFAF9; }

      # ── Nav ──
      @bw_nav_region = { background: rgba(250, 250, 249, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(10, 10, 10, 0.10); }
      @bw_nav_name = { color: #0A0A0A; font-size: 19px; font-weight: 800; letter-spacing: 2.2px; }
      @bw_nav_name_en = { color: rgba(10, 10, 10, 0.45); font-size: 10px; font-weight: 600; letter-spacing: 2px; }
      @bw_nav_menu = {
        :scope { --anchor-item-color: rgba(10, 10, 10, 0.7); --anchor-item-font-size: 13px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #0A0A0A; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1.2px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #0A0A0A; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #0A0A0A; }
      }

      # ── Hero ──
      @bw_hero_eyebrow = { color: rgba(10, 10, 10, 0.55); font-size: 11.5px; font-weight: 600; letter-spacing: 2.4px; }
      @bw_hero_count = { color: rgba(10, 10, 10, 0.55); font-size: 11.5px; font-weight: 600; letter-spacing: 2.4px; }
      @bw_hero_rule = { background: #0A0A0A; }
      # 118px CJK (3 glyphs per line, 354px) becomes 80px Latin: measured in the live page,
      # "OF THE ORDINARY" is 628px at 72px and 702px at 80px — with the 88px step that is 790px inside
      # the 824px the type column keeps once the 280px side note and the 48px gap are taken out of the
      # 1152px measure (so 80px is the largest size that still holds one line with headroom).
      @bw_hero_l1 = { color: #0A0A0A; font-size: 80px; font-weight: 900; line-height: 1.06; letter-spacing: -2.5px; }
      @bw_hero_l2 = { color: #0A0A0A; font-size: 80px; font-weight: 900; line-height: 1.06; letter-spacing: -2.5px; }
      @bw_hero_side_desc = { color: rgba(10, 10, 10, 0.78); font-size: 14.5px; line-height: 1.75; }
      @bw_hero_side_meta = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.4px; }

      # ── Work image (black-and-white filter + overlaid caption) ──
      @bw_feature_frame = { background: #0A0A0A; }
      @bw_feature_img = { filter: grayscale(1) contrast(1.06) brightness(1.02); }
      @bw_feature_tag = { background: rgba(250, 250, 249, 0.92); }
      @bw_feature_tag_txt = { color: #0A0A0A; font-size: 10.5px; font-weight: 700; letter-spacing: 1.8px; :scope { writing-mode: vertical-rl; } }
      @bw_feature_cap_col = { background: #FAFAF9; }
      @bw_feature_cap_num = { color: rgba(10, 10, 10, 0.5); font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }
      @bw_feature_cap_title = { color: #0A0A0A; font-size: 22px; font-weight: 800; letter-spacing: -0.2px; }
      @bw_feature_cap_meta = { color: rgba(10, 10, 10, 0.55); font-size: 12px; letter-spacing: 0.6px; }

      # ── Series index ──
      @bw_series_head_l = { color: rgba(10, 10, 10, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 2.4px; }
      @bw_series_head_r = { color: rgba(10, 10, 10, 0.4); font-size: 11.5px; letter-spacing: 0.5px; }
      @bw_s1_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s2_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s3_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s4_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); border-bottom: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s1_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }
      @bw_s2_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }
      @bw_s3_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }
      @bw_s4_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }
      # 24px kept: each name gets 492px of the row and the longest one measures ~395px.
      @bw_s1_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.2px; }
      @bw_s2_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.2px; }
      @bw_s3_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.2px; }
      @bw_s4_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.2px; }
      @bw_s1_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s2_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s3_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s4_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s1_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s2_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s3_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s4_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s1_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s2_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s3_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 0.8px; }
      @bw_s4_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 0.8px; }

      # ── Statement (black ground) + exhibitions ──
      @bw_statement_row = { background: #0A0A0A; }
      @bw_statement_label = { color: rgba(250, 250, 249, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 2.4px; }
      # 46px keeps both lines inside the 3/5 column (638px): the longer one measures ~610px.
      @bw_statement_q1 = { color: #FAFAF9; font-size: 46px; font-weight: 800; line-height: 1.3; letter-spacing: -1.2px; }
      @bw_statement_q2 = { color: #FAFAF9; font-size: 46px; font-weight: 800; line-height: 1.3; letter-spacing: -1.2px; }
      @bw_statement_desc = { color: rgba(250, 250, 249, 0.62); font-size: 14.5px; line-height: 1.8; }
      @bw_ex_label = { color: rgba(250, 250, 249, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 2.4px; }
      @bw_ex1_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex2_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex3_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex1_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @bw_ex2_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @bw_ex3_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @bw_ex1_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.2px; }
      @bw_ex2_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.2px; }
      @bw_ex3_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.2px; }

      # ── Closing band + footer ──
      @bw_cta_col = { border-top: 1px solid rgba(10, 10, 10, 0.12); }
      # 54px → 50px: "For a print or a project — write to me." is 40 Latin glyphs against 11 CJK, and
      # measures 743px at 44px / ~844px at 50px — the closest the 1152px measure allows to the original.
      @bw_cta_title = { color: #0A0A0A; font-size: 50px; font-weight: 900; letter-spacing: -1.5px; }
      @bw_cta_sub = { color: rgba(10, 10, 10, 0.68); font-size: 14.5px; line-height: 1.8; }
      @bw_cta_btn = { background: #0A0A0A; transition: opacity 0.25s ease, transform 0.25s ease; :scope:hover { opacity: 0.85; transform: translateY(-2px); } }
      @bw_cta_btn_txt = { color: #FAFAF9; font-size: 14px; font-weight: 800; letter-spacing: 2.4px; }
      @bw_cta_mail = { color: rgba(10, 10, 10, 0.85); font-size: 14px; font-weight: 600; letter-spacing: 0.4px; border-bottom: 1px solid rgba(10, 10, 10, 0.4); padding-bottom: 3px; }
      @bw_footer_row = { border-top: 1px solid rgba(10, 10, 10, 0.12); }
      @bw_footer_left = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.4px; }
      @bw_footer_mid = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.4px; }
      @bw_footer_f1 = { color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
      @bw_footer_f2 = { color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
      @bw_footer_f3 = { cursor: pointer; color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
    </styles>
  </Page>
</App>
```

## Production notes

**Same scene, re-set for Latin type (2026-09-25).** Black-and-white photography is an *editorial*
template: the hero is a staggered pair of display lines and the page's rhythm comes from a few very
large type moments against finely tracked labels. Latin and CJK do not scale into each other — a
three-glyph Chinese line and a fifteen-glyph English line are nowhere near the same width at the same
nominal size — so the display scale came down and every wide tracking value was pulled back.

**One node was removed.** `bw_hero_en_cell` / `bw_hero_en` held `MONUMENTS OF THE ORDINARY` at 12px
as an annotation under the Chinese display lines. In the English edition the display type *is*
`MONUMENTS / OF THE ORDINARY`, so the annotation became a duplicate of the headline and was deleted
(the same call as `sty-bauhaus.en.md`). Every other node id is unchanged, and no E2E in the showcase
addresses `bw_*` nodes, so nothing observable moves.

**The hero was re-set, then measured in the live page.** The Chinese prints 日常的 / 纪念碑 at 118px
(354px per line, stepped 168px). Re-set as `MONUMENTS` (9 glyphs) / `OF THE ORDINARY` (15 glyphs), the
long line is the constraint: at 118px it would run ~1035px — over the 824px the type column keeps once
the 280px side note and the 48px gap come out of the 1152px measure (1280 minus 64px gutters).

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Display lines | 118px | **80px** | `OF THE ORDINARY` measures 702px at 80px; +88px step = 790px inside 824px (4% headroom) — the largest size that still holds one line |
| Display step (l2 indent) | 168px | **88px** | the step is a fraction of the line, not a fixed distance — a 168px step under a 702px line would break the column |
| Display leading | 1.04 | 1.06 | two 15-glyph lines need marginally more air than two 3-glyph ones |
| Display tracking | −4px | **−2.5px** | uppercase Latin carries its own sidebearings |
| Hero row gap / side column | 72px / 296px | **48px / 280px** | buys the display block 40px of measure; 280px still holds 14.5px body copy (5 lines) |
| Hero body leading | 2.0 | **1.75** | Latin does not need CJK leading |
| Statement quote | 46px | 46px (kept) | `The camera doesn't speak.` measures 587px inside the 638px 3/5 column — measured, so kept |
| Closing title | 54px | **50px** | 40 Latin glyphs vs 11 CJK; 852px at 50px inside the 1152px measure |
| Series names | 24px | 24px (kept) | each name gets 492px; the longest measures 460px |
| Wide tracking (labels) | 2.4–6px | **0.4–2.4px** | wide tracking stays as this template's idiom, just not CJK-wide |

**Copy policy — equivalent, not literal.** `日常的纪念碑` becomes the English title of the same
series, `MONUMENTS / OF THE ORDINARY`; the epigraph `「相机不替我说话，它只让我闭嘴，看。」` is
re-set for two short display lines — `The camera doesn't speak. / It tells me to look.` — because the
literal English is 33 glyphs and would fall under 40px. Series names and captions are written to the
row (`《窗台》 The Sill` was already bilingual, so it simply loses the Chinese); the print process
vocabulary is the English one (`银盐冲印` → "silver gelatin print", `铂金印相` → "platinum print") and
`11 幅` → "11 prints". The photographer keeps the Latin form of his name, `LIN MO`, and
`studio@linmo.photo` is carried over — it is the fictional brand's identity.

**Nothing structural moved otherwise**: the image path (`assets/images/kitten-portrait.jpg`), the
grayscale filter, the vertical series label (`writing-mode: vertical-rl`), the caption card geometry
and the sticky-nav offsets are all as in the Chinese edition.
