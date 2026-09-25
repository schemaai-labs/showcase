# Pitch deck (multi-page) — "SEEKLICHT DESIGN" rebrand proposal

> Template role (content / brand tab): a presentation — five slides (cover / insight / solution /
> data / closing), paged with buttons (`nav.to`), each slide carrying its own page number and nav bar.
> Scenario: a proposal deck for a fictional design studio: ① cover (brand mark + title + date);
> ② insight (three observation cards); ③ solution (three upgrade directions); ④ data (three result
> numbers + one footnote); ⑤ closing (thanks + contact + back to the cover). Every slide has the page
> number bottom-left and the paging button bottom-right; wide layout (designed at 1280), and the
> navigation works end to end.

```lang
<App dsl-version="0.3" name="SEEKLICHT DESIGN · Rebrand Proposal">
  <!-- ══════════════ 1. Cover ══════════════ -->
  <Page id="cover" name="Cover" route="/">
    <FlexContainer id="dk_cover_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">
      <FlexContainer id="dk_cover_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:flex-start; gap:26px; padding:72px 64px 96px">
        <Container id="dk_cover_brand_cell" style="height:auto; width:auto">
          <FlexContainer id="dk_cover_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
            <Container id="dk_cover_brand_icon_cell" style="height:auto; width:auto"><Icon id="dk_cover_brand_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
            <Container id="dk_cover_brand_text_cell" style="height:auto; width:auto"><Text id="dk_cover_brand_text" props={content: "SEEKLICHT DESIGN", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_cover_title_cell" style="height:auto; width:100%">
          <Text id="dk_cover_title" props={content: "Brand Refresh", tagName: "h1"} style="height:auto; width:100%"/>
        </Container>
        <Container id="dk_cover_sub_cell" style="height:auto; width:100%">
          <Text id="dk_cover_sub" props={content: "From “Of Light & Dust”: colour, type and form, rebuilt.", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
        <Container id="dk_cover_meta_cell" style="height:auto; width:100%; padding-top:10px">
          <Text id="dk_cover_meta" props={content: "Prepared by the SEEKLICHT DESIGN brand team · September 2026", tagName: "span"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
      <Container id="dk_cover_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:900px; padding-top:56px">
        <FlexContainer id="dk_cover_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_cover_page_cell" style="height:auto; width:auto"><Text id="dk_cover_page" props={content: "01 / 05", tagName: "span"}/></Container>
          <Container id="dk_cover_next_cell" style="height:auto; width:auto"><Button id="dk_cover_next" props={content: "Start", variant: "primary"} style="height:auto; width:auto; padding:11px 30px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_cover_next = { events: { next: { trigger: "onClick", action: nav.to("/insight") } } };
    </script>
    <styles>
      @dk_cover_root = {
        background: linear-gradient(160deg, #0d1f1a 0%, #123128 58%, #0a1a16 100%);
        :scope::before {
          content: '';
          position: absolute;
          right: -140px;
          top: -120px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.16), rgba(212, 175, 55, 0.04) 55%, transparent 74%);
        }
        :scope::after {
          content: '';
          position: absolute;
          left: -160px;
          bottom: -150px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.12), rgba(212, 175, 55, 0.03) 55%, transparent 76%);
        }
      }
      @dk_cover_brand_icon = { color: #d4af37; font-size: 26px; }
      @dk_cover_brand_text = { color: #d9e7df; font-size: 17px; font-weight: 600; letter-spacing: 2.6px; }
      # Display line re-set for Latin. 品牌升级提案 is 6 CJK glyphs = 528px + 30px tracking = 558px
      # inside the 772px column (72%). "Brand Refresh" measures **677px** at the 88px seat — 88% of the
      # column, i.e. 28% wider than the Chinese — so the seat comes down one step to **80px**
      # (measured 616px, 80% of the column) and the tracking 6px → 4px, since the same em value reads
      # wider on Latin glyphs. One line, with ~20% slack for font fallback.
      @dk_cover_title = {
        font-size: 80px;
        font-weight: 900;
        letter-spacing: 4px;
        line-height: 1.15;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 52%, #f5e6b8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 18px 48px rgba(212, 175, 55, 0.28);
        }
      }
      @dk_cover_sub = { color: #9db8ab; font-size: 20px; line-height: 1.7; }
      @dk_cover_meta = { color: #5f7a6d; font-size: 14px; letter-spacing: 1px; }
      @dk_cover_page = { color: #5f7a6d; font-size: 14px; letter-spacing: 2px; }
      @dk_cover_next = {
        color: #101d18;
        background: linear-gradient(120deg, #f5e6b8 0%, #d4af37 100%);
        border-radius: 12px;
        font-size: 15px;
        font-weight: 800;
        box-shadow: 0 10px 26px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(212, 175, 55, 0.32); }
      }
    </styles>
  </Page>

  <!-- ══════════════ 2. Insight ══════════════ -->
  <Page id="insight" name="Insight" route="/insight">
    <FlexContainer id="dk_insight_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_insight_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:stretch; gap:36px; padding:72px 64px 96px">
        <Container id="dk_insight_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_insight_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
            <Container id="dk_insight_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_insight_eyebrow" props={content: "01 · INSIGHT", tagName: "span"}/></Container>
            <Container id="dk_insight_title_cell" style="height:auto; width:100%"><Text id="dk_insight_title" props={content: "Three gaps we kept seeing", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_insight_cards_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_insight_cards_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:20px">
            <Container id="dk_insight_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_1_num_cell" style="height:auto; width:auto"><Text id="dk_insight_1_num" props={content: "01", tagName: "span"}/></Container>
                <Container id="dk_insight_1_title_cell" style="height:auto; width:100%"><Text id="dk_insight_1_title" props={content: "Colour has drifted", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_1_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_1_desc" props={content: "Channel posters show fourteen shades of “brand red” — no anchor colour, so nothing reads as a system from a distance.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_insight_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_2_num_cell" style="height:auto; width:auto"><Text id="dk_insight_2_num" props={content: "02", tagName: "span"}/></Container>
                <Container id="dk_insight_2_title_cell" style="height:auto; width:100%"><Text id="dk_insight_2_title" props={content: "Three weights in the mix", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_2_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_2_desc" props={content: "Headlines wobble between three weights and body leading changes page to page, so the reading rhythm keeps breaking.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_insight_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_3_num_cell" style="height:auto; width:auto"><Text id="dk_insight_3_num" props={content: "03", tagName: "span"}/></Container>
                <Container id="dk_insight_3_title_cell" style="height:auto; width:100%"><Text id="dk_insight_3_title" props={content: "No graphic language", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_3_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_3_desc" props={content: "Beyond the logo there is no extendable graphic asset, so every piece is drawn from a blank artboard again.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
      <Container id="dk_insight_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_insight_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_insight_prev_cell" style="height:auto; width:auto"><Button id="dk_insight_prev" props={content: "Previous", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_insight_page_cell" style="height:auto; width:auto"><Text id="dk_insight_page" props={content: "02 / 05", tagName: "span"}/></Container>
          <Container id="dk_insight_next_cell" style="height:auto; width:auto"><Button id="dk_insight_next" props={content: "Next · Solution", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_insight_prev = { events: { prev: { trigger: "onClick", action: nav.to("/") } } };
      @dk_insight_next = { events: { next: { trigger: "onClick", action: nav.to("/solution") } } };
    </script>
    <styles>
      @dk_insight_root = { background: #f5f1e8; }
      @dk_insight_eyebrow = { color: #b45309; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @dk_insight_title = { color: #1c1917; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @dk_insight_1_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_2_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_3_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_1_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_2_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_3_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_1_title = { color: #1c1917; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @dk_insight_2_title = { color: #1c1917; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @dk_insight_3_title = { color: #1c1917; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      # Latin leading: the cards are 229px wide inside their padding, and the English notes run four
      # lines where the Chinese ran three — 1.7 keeps the card height in the same band.
      @dk_insight_1_desc = { color: #57534e; font-size: 14px; line-height: 1.7; }
      @dk_insight_2_desc = { color: #57534e; font-size: 14px; line-height: 1.7; }
      @dk_insight_3_desc = { color: #57534e; font-size: 14px; line-height: 1.7; }
      @dk_insight_prev = { color: #57534e; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e7e0d2; } :scope:hover { border-color: #a8a29e; } }
      @dk_insight_page = { color: #a8a29e; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_insight_next = { color: #1c1917; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 3. Solution ══════════════ -->
  <Page id="solution" name="Solution" route="/solution">
    <FlexContainer id="dk_solution_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_solution_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:stretch; gap:36px; padding:72px 64px 96px">
        <Container id="dk_solution_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_solution_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
            <Container id="dk_solution_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_solution_eyebrow" props={content: "02 · SOLUTION", tagName: "span"}/></Container>
            <Container id="dk_solution_title_cell" style="height:auto; width:100%"><Text id="dk_solution_title" props={content: "Three directions", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_solution_rows_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_solution_rows_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="dk_solution_1_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_1_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_1_icon" props={iconName: "Palette", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_1_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_1_name_cell" style="height:auto; width:auto"><Text id="dk_solution_1_name" props={content: "Colour: one gold, two supporting tones", tagName: "h3"}/></Container>
                    <Container id="dk_solution_1_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_1_desc" props={content: "Fourteen reds collapse into Signet Gold, Night Ink and Mist Paper — for print and screen.", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="dk_solution_2_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_2_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_2_icon" props={iconName: "Type", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_2_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_2_name_cell" style="height:auto; width:auto"><Text id="dk_solution_2_name" props={content: "Type: three weights, one leading", tagName: "h3"}/></Container>
                    <Container id="dk_solution_2_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_2_desc" props={content: "Display 900 / subhead 700 / body 400, with a single 1.7 body leading that puts long copy first.", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="dk_solution_3_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_3_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_3_icon" props={iconName: "Shapes", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_3_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_3_name_cell" style="height:auto; width:auto"><Text id="dk_solution_3_name" props={content: "Form: a “light slice” system", tagName: "h3"}/></Container>
                    <Container id="dk_solution_3_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_3_desc" props={content: "The logo's six beams become a motif, cut into three reusable pieces: cover, divider, corner.", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
      <Container id="dk_solution_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_solution_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_solution_prev_cell" style="height:auto; width:auto"><Button id="dk_solution_prev" props={content: "Previous", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_solution_page_cell" style="height:auto; width:auto"><Text id="dk_solution_page" props={content: "03 / 05", tagName: "span"}/></Container>
          <Container id="dk_solution_next_cell" style="height:auto; width:auto"><Button id="dk_solution_next" props={content: "Next · Data", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_solution_prev = { events: { prev: { trigger: "onClick", action: nav.to("/insight") } } };
      @dk_solution_next = { events: { next: { trigger: "onClick", action: nav.to("/data") } } };
    </script>
    <styles>
      @dk_solution_root = { background: #0d1f1a; }
      @dk_solution_eyebrow = { color: #d4af37; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @dk_solution_title = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @dk_solution_1_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_2_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_3_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_1_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_2_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_3_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_1_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      @dk_solution_2_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      @dk_solution_3_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      # The row is auto-width, so the note line has ~774px of slack next to the 30px icon; each English
      # note was re-worded to land as one line there (665 / 680 / 693px), matching the Chinese row rhythm.
      @dk_solution_1_desc = { color: #9db8ab; font-size: 14px; line-height: 1.7; }
      @dk_solution_2_desc = { color: #9db8ab; font-size: 14px; line-height: 1.7; }
      @dk_solution_3_desc = { color: #9db8ab; font-size: 14px; line-height: 1.7; }
      @dk_solution_prev = { color: #9db8ab; background: transparent; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid rgba(157, 184, 171, 0.4); } :scope:hover { border-color: #9db8ab; } }
      @dk_solution_page = { color: #5f7a6d; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_solution_next = { color: #101d18; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 4. Data ══════════════ -->
  <Page id="data" name="Data" route="/data">
    <FlexContainer id="dk_data_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_data_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:center; gap:40px; padding:72px 64px 96px">
        <Container id="dk_data_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_data_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:10px">
            <Container id="dk_data_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_data_eyebrow" props={content: "03 · PILOT DATA", tagName: "span"}/></Container>
            <Container id="dk_data_title_cell" style="height:auto; width:100%"><Text id="dk_data_title" props={content: "What changed after 90 days", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_data_stats_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_data_stats_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:20px">
            <Container id="dk_data_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_1_value_cell" style="height:auto; width:100%"><Text id="dk_data_1_value" props={content: "+38%", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_1_label_cell" style="height:auto; width:100%"><Text id="dk_data_1_label" props={content: "Asset production efficiency", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_data_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_2_value_cell" style="height:auto; width:100%"><Text id="dk_data_2_value" props={content: "-62%", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_2_label_cell" style="height:auto; width:100%"><Text id="dk_data_2_label" props={content: "Off-brand assets shipped", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_data_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_3_value_cell" style="height:auto; width:100%"><Text id="dk_data_3_value" props={content: "4.7/5", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_3_label_cell" style="height:auto; width:100%"><Text id="dk_data_3_label" props={content: "Internal design satisfaction", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
        <Container id="dk_data_note_cell" style="height:auto; width:100%">
          <Text id="dk_data_note" props={content: "Note: figures come from pilot surveys and asset-audit samples across five channel teams (n=212).", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
      <Container id="dk_data_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_data_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_data_prev_cell" style="height:auto; width:auto"><Button id="dk_data_prev" props={content: "Previous", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_data_page_cell" style="height:auto; width:auto"><Text id="dk_data_page" props={content: "04 / 05", tagName: "span"}/></Container>
          <Container id="dk_data_next_cell" style="height:auto; width:auto"><Button id="dk_data_next" props={content: "Next · Closing", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_data_prev = { events: { prev: { trigger: "onClick", action: nav.to("/solution") } } };
      @dk_data_next = { events: { next: { trigger: "onClick", action: nav.to("/end") } } };
    </script>
    <styles>
      @dk_data_root = { background: #f5f1e8; }
      @dk_data_eyebrow = { color: #b45309; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @dk_data_title = { color: #1c1917; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @dk_data_1_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_2_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_3_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_1_value = { color: #b45309; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      @dk_data_2_value = { color: #0f766e; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      @dk_data_3_value = { color: #1d4ed8; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      # The three cards are 229px wide inside their padding; the longest label ("Internal design
      # satisfaction") measures ~196px at 14px, so all three stay on one line like the Chinese.
      @dk_data_1_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_2_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_3_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_note = { color: #a8a29e; font-size: 13px; text-align: center; }
      @dk_data_prev = { color: #57534e; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e7e0d2; } :scope:hover { border-color: #a8a29e; } }
      @dk_data_page = { color: #a8a29e; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_data_next = { color: #1c1917; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 5. Closing ══════════════ -->
  <Page id="end" name="Closing" route="/end">
    <FlexContainer id="dk_end_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">
      <FlexContainer id="dk_end_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:center; gap:22px; padding:72px 64px">
        <Container id="dk_end_icon_cell" style="height:auto; width:auto"><Icon id="dk_end_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
        <Container id="dk_end_title_cell" style="height:auto; width:100%"><Text id="dk_end_title" props={content: "Same light, every time", tagName: "h2"} style="height:auto; width:100%"/></Container>
        <Container id="dk_end_desc_cell" style="height:auto; width:100%"><Text id="dk_end_desc" props={content: "The full brand manual and source files are already in the team library; the new asset templates go live on Monday.", tagName: "p"} style="height:auto; width:100%"/></Container>
        <Container id="dk_end_contact_cell" style="height:auto; width:100%"><Text id="dk_end_contact" props={content: "Brand team · brand@seeklicht.example.com · ext. 8221", tagName: "span"} style="height:auto; width:100%"/></Container>
      </FlexContainer>
      <Container id="dk_end_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:52px">
        <FlexContainer id="dk_end_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_end_prev_cell" style="height:auto; width:auto"><Button id="dk_end_prev" props={content: "Previous", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_end_page_cell" style="height:auto; width:auto"><Text id="dk_end_page" props={content: "05 / 05", tagName: "span"}/></Container>
          <Container id="dk_end_restart_cell" style="height:auto; width:auto"><Button id="dk_end_restart" props={content: "Back to cover", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_end_prev = { events: { prev: { trigger: "onClick", action: nav.to("/data") } } };
      @dk_end_restart = { events: { restart: { trigger: "onClick", action: nav.to("/") } } };
    </script>
    <styles>
      @dk_end_root = {
        background: radial-gradient(110% 90% at 50% 0%, #14213d 0%, #0b1220 60%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -160px;
          width: 640px;
          height: 640px;
          border-radius: 50%;
          margin-left: -320px;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.14), transparent 72%);
        }
      }
      @dk_end_icon = { color: #d4af37; font-size: 40px; }
      # The closing line is centred in a 632px measure (760px column minus padding). A longer English
      # rendering ("Every impression, in the same light", ~748px at this size) broke to a second line
      # with a one-word widow, so the line was re-worded to "Same light, every time": 22 glyphs, ~490px
      # at the original 44px seat — one line, centred on the axis of the glow above.
      @dk_end_title = {
        font-size: 44px;
        font-weight: 900;
        letter-spacing: -1px;
        line-height: 1.3;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @dk_end_desc = { color: #9db8ab; font-size: 16px; line-height: 1.7; text-align: center; }
      @dk_end_contact = { color: #5f7a6d; font-size: 13px; letter-spacing: 1px; text-align: center; }
      @dk_end_prev = { color: #9db8ab; background: transparent; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid rgba(157, 184, 171, 0.4); } :scope:hover { border-color: #9db8ab; } }
      @dk_end_page = { color: #5f7a6d; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_end_restart = { color: #101d18; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>
</App>
```

> Craft notes: a deck = multi-page slides (each page `min-height:100vh`, centred, with a page number
> and paging buttons in the footer bar); paging runs through `nav.to` (buttons, since the keyboard
> shortcut layer is not there yet); dark and light pages alternate (cover / solution / closing dark,
> insight / data light) to give the proposal a rhythm.
>
> Finish upgrade (2026-09-14, rule 16) — finish/whitespace layering fixed in 14 places (the page-root
> gradients on the cover and the four inner pages used to be inset, and nine card borders sat tight
> against their content — padding moved down to the inner layer); gold glow behind the cover title,
> a second light spot, inner highlight on the cover button; card shadows on the light pages, inner
> highlight on the gold-edged glass cards on the dark page.

## Production notes

**A deck's geometry is its type, so the two display lines were re-measured rather than translated.**

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `dk_cover_title` | 88px / `letter-spacing: 6px` | **80px / 4px** | 品牌升级提案 is 6 CJK glyphs = 528px + 30px tracking = 558px, i.e. 72% of the 772px column. Measured in the browser, "Brand Refresh" at the 88px seat is **677px — 88% of the column and 28% wider than the Chinese**, so the seat drops one step to 80px (**measured 616px**, 80%) and the tracking 6px → 4px: the same em value reads wider on Latin glyphs |
| `dk_end_title` | 44px / one line (14 CJK glyphs = 616px in a 632px measure) | **44px / one line, re-worded** | a literal rendering ("Every impression, in the same light") is over 750px at this seat and broke to a second line with a one-word widow ("light") — the same failure mode the report templates hit. **Same light, every time** measures **469px** at the same 44px seat and holds one line, centred on the axis of the glow above |
| `dk_cover_sub` | 20px, 24 CJK glyphs ≈ 480px (86% of the title) | 20px, **re-worded**, measured **503px** (81% of the 620px title) | the first English rendering (76 glyphs) measured 652px and came out *wider than the hero title*, inverting the hierarchy; the line is shortened so the subtitle stays under the title, as in the Chinese |
| `dk_cover_sub`, body notes on all five pages | `line-height: 1.9` | **1.7** | Latin leading; on the insight cards the English note runs four lines where the Chinese ran three, and 1.7 keeps the card height in the same band |
| `dk_cover_brand_text` | 17px / `3px` | 17px / **2.6px** | "SEEKLICHT DESIGN" (16 glyphs) is a wider lockup than 拾光设计 SEEKLICHT; the tracking comes down slightly so the mark stays a mark |
| eyebrows (`*_eyebrow`) | `letter-spacing: 4px` | **3px** | "01 · INSIGHT" is 11 Latin glyphs against 4 CJK; 4px on lowercase-less uppercase reads as broken type |
| card / row titles (`*_title`, `*_name`) | no tracking | **-0.2px** | 19px and 18px Latin headlines tighten slightly, matching how the headline levels elsewhere in the library are set |
| stat values | `+38%` / `-62%` / `4.7/5` | unchanged | numerals are already Latin — the 52px seat and `-2px` tracking carry straight over |

**Copy policy — re-expressed, not translated.** The five pages, their order, the alternating dark /
light scheme, every `route` and every `nav.to` target are unchanged (`/` → `/insight` → `/solution` →
`/data` → `/end` → `/`), so the paging still walks end to end. The proposal's own vocabulary is
restated in the studio's brand language — 与光同尘 becomes the campaign line **"Of Light & Dust"**,
the same rendering the marketing templates use, and 拾光设计 SEEKLICHT becomes **SEEKLICHT DESIGN**
(the mark already carried a Latin wordmark). Quotes inside props use typographic quotes (“…”) rather
than escaped ASCII quotes, which is also what keeps the props strings parse-clean. The pilot-data
labels are shortened so they hold one line each, and the footnote keeps the sample size (n=212).

**No structural refactor was needed.** Every node id is identical to the Chinese version — `dk_cover_*`,
`dk_insight_*`, `dk_solution_*`, `dk_data_*`, `dk_end_*` — so the capability E2E and the thumbnail
pipeline can address either edition with the same selectors.
