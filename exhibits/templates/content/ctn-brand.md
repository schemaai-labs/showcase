# Brand kit — "SEEKLICHT DESIGN" brand manual

> Template role (content / brand tab): a brand manual — logo area (standard lockup + usage rules) /
> colour system (four colours + their jobs) / typography (three levels) / applications (business card
> / letterhead / packaging) / usage don'ts.
> Scenario: a one-page brand manual for a fictional design studio: deep green and gold as the base,
> a brand bar on top, then the logo card (gold mark on a dark stage + minimum size / clear-space
> notes), the four-colour system (big blocks + hex + jobs), the typography rules (display / body /
> numerals samples), three application mockups (the colour-block composition of a card, a letterhead
> and packaging) and four usage don'ts. No motion, a purely static spec page.

```lang
<App dsl-version="0.3" name="SEEKLICHT DESIGN · Brand Manual">
  <Page id="brand" name="Brand Manual" route="/">
    <FlexContainer id="br_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Top bar ─── -->
      <Container id="br_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="br_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 32px">
          <Container id="br_header_left_cell" style="height:auto; width:auto">
            <FlexContainer id="br_header_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="br_header_icon_cell" style="height:auto; width:auto"><Icon id="br_header_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
              <Container id="br_header_text_cell" style="height:auto; width:auto"><Text id="br_header_text" props={content: "SEEKLICHT DESIGN · Brand Manual", tagName: "span"}/></Container>
              <Container id="br_header_version_cell" style="height:auto; width:auto"><Tag id="br_header_version" props={text: "v1.0", color: "gold"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="br_header_note_cell" style="height:auto; width:auto">
            <Text id="br_header_note" props={content: "Internal standard · public assets follow this manual", tagName: "span"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Content ─── -->
      <Container id="br_body" style="flex-grow:1; height:auto; width:100%; padding:20px 32px 56px">
        <FlexContainer id="br_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:1040px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- Logo -->
          <Container id="br_logo_card" style="height:auto; width:100%">
            <FlexContainer id="br_logo_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px; padding:24px">
              <Container id="br_logo_stage_cell" style="flex-grow:1; height:auto; width:60%">
                <FlexContainer id="br_logo_stage" props={direction: "column"} style="height:230px; width:100%; align-items:center; justify-content:center; gap:14px">
                  <Container id="br_logo_mark_cell" style="height:auto; width:auto"><Icon id="br_logo_mark" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
                  <Container id="br_logo_wordmark_cell" style="height:auto; width:auto"><Text id="br_logo_wordmark" props={content: "SEEKLICHT DESIGN", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_logo_spec_cell" style="flex-grow:1; height:auto; width:40%">
                <FlexContainer id="br_logo_spec_col" props={direction: "column"} style="height:100%; width:100%; align-items:flex-start; gap:12px; padding:20px 22px">
                  <Container id="br_logo_spec_title_cell" style="height:auto; width:100%"><Text id="br_logo_spec_title" props={content: "Logo usage", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_1_cell" style="height:auto; width:100%"><Text id="br_logo_spec_1" props={content: "· Standard lockup = aperture mark + wordmark, gap 40% of the mark height", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_2_cell" style="height:auto; width:100%"><Text id="br_logo_spec_2" props={content: "· Minimum size: 18 mm in print / 24 px on screen", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_3_cell" style="height:auto; width:100%"><Text id="br_logo_spec_3" props={content: "· Clear space: at least 50% of the mark height", tagName: "span"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Colour system -->
          <Container id="br_color_card" style="height:auto; width:100%">
            <FlexContainer id="br_color_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:24px">
              <Container id="br_color_title_cell" style="height:auto; width:100%"><Text id="br_color_title" props={content: "Colour system", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_color_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_color_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="br_color_gold_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_gold_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_gold_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_gold_name_cell" style="height:auto; width:100%"><Text id="br_color_gold_name" props={content: "Signet Gold #D4AF37", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_gold_use_cell" style="height:auto; width:100%"><Text id="br_color_gold_use" props={content: "Primary · logo, emphasis, CTAs", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_ink_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_ink_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_ink_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_ink_name_cell" style="height:auto; width:100%"><Text id="br_color_ink_name" props={content: "Night Ink #0D1F1A", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_ink_use_cell" style="height:auto; width:100%"><Text id="br_color_ink_use" props={content: "Ground · dark layouts, covers", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_paper_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_paper_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_paper_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_paper_name_cell" style="height:auto; width:100%"><Text id="br_color_paper_name" props={content: "Mist Paper #F5F1E8", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_paper_use_cell" style="height:auto; width:100%"><Text id="br_color_paper_use" props={content: "Paper · body, reports, stationery", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_moss_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_moss_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_moss_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_moss_name_cell" style="height:auto; width:100%"><Text id="br_color_moss_name" props={content: "Moss #7BA98E", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_moss_use_cell" style="height:auto; width:100%"><Text id="br_color_moss_use" props={content: "Secondary · charts and states", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Typography -->
          <Container id="br_type_card" style="height:auto; width:100%">
            <FlexContainer id="br_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:24px">
              <Container id="br_type_title_cell" style="height:auto; width:100%"><Text id="br_type_title" props={content: "Typography", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_type_1_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_1_sample_cell" style="height:auto; width:auto"><Text id="br_type_1_sample" props={content: "Display · Grotesk Heavy, weight 900", tagName: "h2"}/></Container>
                  <Container id="br_type_1_meta_cell" style="height:auto; width:auto"><Text id="br_type_1_meta" props={content: "For covers and section titles", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_type_2_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_2_sample_cell" style="height:auto; width:auto"><Text id="br_type_2_sample" props={content: "Body · Serif Regular, weight 400, leading 1.7", tagName: "p"}/></Container>
                  <Container id="br_type_2_meta_cell" style="height:auto; width:auto"><Text id="br_type_2_meta" props={content: "For long copy and notes", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_type_3_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_3_sample_cell" style="height:auto; width:auto"><Text id="br_type_3_sample" props={content: "Numerals · tabular figures, 0123456789", tagName: "span"}/></Container>
                  <Container id="br_type_3_meta_cell" style="height:auto; width:auto"><Text id="br_type_3_meta" props={content: "For data and price tags", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Applications -->
          <Container id="br_apply_card" style="height:auto; width:100%">
            <FlexContainer id="br_apply_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:24px">
              <Container id="br_apply_title_cell" style="height:auto; width:100%"><Text id="br_apply_title" props={content: "Applications", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_apply_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_apply_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="br_apply_card_mock_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_apply_card_mock_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                      <Container id="br_apply_card_mock_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center">
                        <Icon id="br_apply_card_mock_icon" props={iconName: "Aperture", iconSource: "lucide"}/>
                      </Container>
                      <Container id="br_apply_card_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_card_mock_name" props={content: "Business card · gold on ink", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_apply_letter_mock_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_apply_letter_mock_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                      <Container id="br_apply_letter_mock_visual_cell" style="height:150px; width:100%; align-items:flex-start; justify-content:flex-start">
                        <FlexContainer id="br_apply_letter_mock_stack" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:16px">
                          <Container id="br_apply_letter_mock_mark_cell" style="height:auto; width:auto"><Icon id="br_apply_letter_mock_mark" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
                          <Container id="br_apply_letter_mock_line_cell" style="height:6px; width:70%"/>
                          <Container id="br_apply_letter_mock_line2_cell" style="height:6px; width:52%"/>
                          <Container id="br_apply_letter_mock_line3_cell" style="height:6px; width:61%"/>
                        </FlexContainer>
                      </Container>
                      <Container id="br_apply_letter_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_letter_mock_name" props={content: "Letterhead · mist paper, ink rules", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_apply_box_mock_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_apply_box_mock_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                      <Container id="br_apply_box_mock_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center">
                        <FlexContainer id="br_apply_box_mock_stack" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:8px">
                          <Container id="br_apply_box_mock_seal_cell" style="height:44px; width:44px"/>
                          <Container id="br_apply_box_mock_word_cell" style="height:auto; width:auto"><Text id="br_apply_box_mock_word" props={content: "SEEKLICHT", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="br_apply_box_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_box_mock_name" props={content: "Packaging · moss seal", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Don'ts -->
          <Container id="br_dont_card" style="height:auto; width:100%">
            <FlexContainer id="br_dont_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:24px">
              <Container id="br_dont_title_cell" style="height:auto; width:100%"><Text id="br_dont_title" props={content: "Don'ts", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_dont_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_dont_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:14px">
                  <Container id="br_dont_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_1" props={content: "✕ Never stretch or condense the logo", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_2" props={content: "✕ Never use colours outside gold, ink, paper", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_3" props={content: "✕ Never add outlines, shadows or gradients", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_4_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_4" props={content: "✕ Never set the logo on a busy background", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # 0. Base
      @br_root = { background: #f5f1e8; }
      @br_header = { background: #0d1f1a; }
      @br_header_icon = { color: #d4af37; font-size: 20px; }
      @br_header_text = { color: #f5f1e8; font-size: 16px; font-weight: 700; letter-spacing: 0.6px; }
      @br_header_version = { background-color: rgba(212, 175, 55, 0.16); color: #d4af37; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @br_header_note = { color: #5f7a6d; font-size: 12px; letter-spacing: 0.3px; }

      # 1. Cards
      @br_logo_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_color_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_type_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_apply_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_dont_card = { background: #fff7ed; border-radius: 16px; box-shadow: 0 2px 10px rgba(154, 52, 18, 0.05); :scope { border: 1px solid #fed7aa; } }
      @br_color_title = { color: #1c1917; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @br_type_title = { color: #1c1917; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @br_apply_title = { color: #1c1917; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @br_dont_title = { color: #9a3412; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }

      # 2. Logo area
      @br_logo_stage = {
        background: radial-gradient(closest-side at 50% 42%, #16332a 0%, #0d1f1a 72%);
        border-radius: 14px;
        box-shadow: inset 0 1px 0 rgba(212, 175, 55, 0.18);
        :scope { border: 1px solid rgba(212, 175, 55, 0.28); }
        :scope::before { content: ''; position: absolute; left: 50%; top: 50%; width: 320px; height: 320px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0) 72%); }
      }
      @br_logo_mark = { color: #d4af37; font-size: 56px; }
      # Wordmark re-set for Latin: 拾光设计 SEEKLICHT becomes the Latin lockup "SEEKLICHT DESIGN"
      # (16 glyphs). 6px tracking is 0.27em — wide even for a lockup — so it comes down to 3px, which
      # measures ~256px inside the ~590px stage and still reads as a mark rather than a sentence.
      @br_logo_wordmark = { color: #f5e6b8; font-size: 22px; font-weight: 700; letter-spacing: 3px; }
      @br_logo_spec_cell = { background: #faf7f0; border-radius: 14px; :scope { border: 1px solid #eee7d7; } }
      @br_logo_spec_title = { color: #1c1917; font-size: 16px; font-weight: 800; }
      # The spec panel has ~353px of text width; each English rule is worded to hold two lines or one,
      # as the Chinese did at 13px.
      @br_logo_spec_1 = { color: #57534e; font-size: 13px; line-height: 1.7; }
      @br_logo_spec_2 = { color: #57534e; font-size: 13px; line-height: 1.7; }
      @br_logo_spec_3 = { color: #57534e; font-size: 13px; line-height: 1.7; }

      # 3. Colour
      @br_color_gold_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_ink_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_paper_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_moss_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_gold_block_cell = { background: #d4af37; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      @br_color_ink_block_cell = { background: #0d1f1a; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      @br_color_paper_block_cell = { background: #f5f1e8; border-radius: 10px; :scope { border: 1px solid #e7e0d2; } }
      @br_color_moss_block_cell = { background: #7ba98e; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      # Four columns of 208px after padding: each name (~150px at 14px bold) and each job line
      # (≤205px at 12px) was worded to sit on one line, as in the Chinese.
      @br_color_gold_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_ink_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_paper_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_moss_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_gold_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_ink_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_paper_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_moss_use = { color: #78716c; font-size: 12px; line-height: 1.7; }

      # 4. Typography
      @br_type_1_sample = { color: #1c1917; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @br_type_2_sample = { color: #1c1917; font-size: 17px; line-height: 1.7; }
      # The numerals line drops 2px → 1px tracking: 2px on CJK is a narrow gap, on 31 Latin glyphs it
      # is 0.12em and the sample starts to read as broken type.
      @br_type_3_sample = { color: #1c1917; font-size: 17px; letter-spacing: 1px; }
      @br_type_1_meta = { color: #a8a29e; font-size: 12px; }
      @br_type_2_meta = { color: #a8a29e; font-size: 12px; }
      @br_type_3_meta = { color: #a8a29e; font-size: 12px; }

      # 5. Applications
      @br_apply_card_mock_cell = { background: #faf7f0; border-radius: 12px; }
      @br_apply_letter_mock_cell = { background: #faf7f0; border-radius: 12px; }
      @br_apply_box_mock_cell = { background: #faf7f0; border-radius: 12px; }
      @br_apply_card_mock_visual_cell = { background: #0d1f1a; border-radius: 10px; }
      @br_apply_card_mock_icon = { color: #d4af37; font-size: 42px; }
      @br_apply_letter_mock_visual_cell = { background: #f5f1e8; border-radius: 10px; :scope { border: 1px solid #e7e0d2; } }
      @br_apply_letter_mock_mark = { color: #0d1f1a; font-size: 22px; }
      @br_apply_letter_mock_line_cell = { background: #d6cfc0; border-radius: 3px; }
      @br_apply_letter_mock_line2_cell = { background: #d6cfc0; border-radius: 3px; }
      @br_apply_letter_mock_line3_cell = { background: #d6cfc0; border-radius: 3px; }
      @br_apply_box_mock_visual_cell = { background: #fdfbf5; border-radius: 10px; :scope { border: 1px dashed #d6cfc0; } }
      @br_apply_box_mock_seal_cell = { background: #7ba98e; border-radius: 999px; }
      # 拾光 (2 glyphs) becomes the one-word lockup "SEEKLICHT" at 13px / 2px so it still sits under
      # the 44px seal without crowding it.
      @br_apply_box_mock_word = { color: #0d1f1a; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @br_apply_card_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }
      @br_apply_letter_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }
      @br_apply_box_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }

      # 6. Don'ts
      @br_dont_1_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_2_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_3_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_4_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      # Each panel has ~193px of text width; the four English rules were worded to land on two lines
      # apiece, the same as the Chinese, so the row keeps an even height.
      @br_dont_1 = { color: #9a3412; font-size: 13px; line-height: 1.7; }
      @br_dont_2 = { color: #9a3412; font-size: 13px; line-height: 1.7; }
      @br_dont_3 = { color: #9a3412; font-size: 13px; line-height: 1.7; }
      @br_dont_4 = { color: #9a3412; font-size: 13px; line-height: 1.7; }
    </styles>
  </Page>
</App>
```

> Craft notes: a brand manual = logo (standard lockup + usage rules) / colour (four colours + their
> jobs) / typography (three levels) / applications (three mockup compositions) / don'ts; the
> application mockups sketch the composition with colour blocks and icons (no bitmap assets at all).
> Shares the fictional "SEEKLICHT" brand world with `mkt-poster`.
>
> Finish upgrade (2026-09-14, visual-composition rule 16) — ① **finish/whitespace layering fixed in 19
> places**: the five cards (logo / colour / type / applications / don'ts) + the spec panel + the four
> colour tiles + the four application mockups + the four don't panels (including the header band and
> the text node carrying the padding recipe) — they used to be "paint box = content box, padding on
> the shell"; ② **section headings left-aligned** (adding `width:100%` to fight the cell-centring
> injection — they used to be centred while their content sat left); ③ the logo stage got a radial
> gold glow, a gold edge and an inner highlight; ④ soft card shadows + inner highlights on the colour
> tiles (a material feel).

## Production notes

**A brand manual is a spec sheet, so the token strings, the meta lines and the CSS all have to agree**
— every copy change below keeps that property.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `br_logo_wordmark` | 拾光设计 SEEKLICHT, 22px / `letter-spacing: 6px` | **SEEKLICHT DESIGN**, 22px / **3px** | the bilingual lockup collapses to the Latin wordmark (16 glyphs, ~256px inside the ~590px stage); 6px tracking is 0.27em and on Latin it stops reading as a mark, so it comes down to 3px |
| `br_header_text` | 16px / `1px` | 16px / **0.6px** | "SEEKLICHT DESIGN · Brand Manual" is 30 Latin glyphs against 9 CJK |
| `br_header_note` | `0.5px` | **0.3px** | 51 Latin glyphs in a 12px note |
| `br_logo_spec_1..3` | `line-height: 1.9` | **1.7** | Latin leading; each rule is re-worded so line 2 and line 3 still hold one line inside the ~353px panel |
| colour names + job lines | 拾光金 #D4AF37 / 底色 · 深色版式 / 封面 / 海报底 … | **Signet Gold #D4AF37 / Ground · dark layouts, covers** … | the Chinese colour names move to the English names used across the brand templates; both the name (≤150px) and the job line (≤205px) were worded to sit on one line inside the 208px column |
| `br_type_2_sample` | 17px / `line-height: 1.9` | 17px / **1.7** | matches the leading the manual itself specifies (`leading 1.7` in the sample text) |
| `br_type_3_sample` | 17px / `2px` | 17px / **1px** | 2px tracking on CJK is a narrow gap; on 31 Latin glyphs it is 0.12em and the sample reads as broken type |
| `br_apply_box_mock_word` | 拾光, 18px / `4px` | **SEEKLICHT**, 13px / 2px | the packaging seal carries the one-word lockup; 9 glyphs at 18px would crowd the 44px circle, 13px keeps the seal centred under it |
| don't panels (`br_dont_1..4`) | `line-height: 1.8` | **1.7** | Latin leading; all four rules were worded to two lines each in the ~193px panel, so the row stays even |

**Copy policy — re-expressed, not translated.** 拾光设计 SEEKLICHT becomes **SEEKLICHT DESIGN** (the
same rendering the marketing templates use, so the fictional brand reads the same across template
families), and the four colours get English names that keep their Chinese meaning — 拾光金 → **Signet
Gold**, 夜墨 → **Night Ink**, 雾白 → **Mist Paper**, 青苔 → **Moss**. The measurements that make the
manual a manual are carried over verbatim: the 40% lockup gap, the 18 mm / 24 px minimum size and the
50% clear space. The don'ts keep their four cases and their ✕ marks; the type section keeps the
900 / 400 split (and states the English body leading of 1.7).

**No structural refactor was needed.** Every node id is identical to the Chinese version, including
the three application mockups (`br_apply_card_mock_*`, `br_apply_letter_mock_*`, `br_apply_box_mock_*`)
and the letterhead rule bars, whose percentage widths are language-neutral.
