# Design system / component library showcase — "Threshold" spec page

> Template role (product / app tab · design system): the standard design-system showcase page — brand
> palette / type scale / button and tag variants / form controls / spacing scale, shown section by
> section (the platform's own component set proving itself).
> Scenario: a spec page for a fictional design system: top bar with brand and version, then the brand
> palette (6 swatches + name + hex), semantic colours (4), a type scale (4 steps), button variants
> (primary / secondary / danger / disabled), tag variants (5 colours), a form-control row (input /
> select / switch) and the spacing scale (4/8/16/24/32). Light canvas, white cards, no motion.

```lang
<App dsl-version="0.3" name="Threshold Design System · Token Showcase">
  <Page id="ds" name="Design System" route="/design-system">
    <FlexContainer id="ds_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Top bar ─── -->
      <Container id="ds_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="ds_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="ds_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ds_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="ds_logo_cell" style="height:auto; width:auto"><Icon id="ds_logo" props={iconName: "Palette", iconSource: "lucide"}/></Container>
              <Container id="ds_brand_text_cell" style="height:auto; width:auto"><Text id="ds_brand" props={content: "Threshold Design System", tagName: "span"}/></Container>
              <Container id="ds_version_cell" style="height:auto; width:auto"><Tag id="ds_version" props={text: "v2.4", color: "geekblue"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ds_top_note_cell" style="height:auto; width:auto; flex-shrink:0">
            <Text id="ds_top_note" props={content: "214 global tokens · 24 components · updated Sep 14, 2026", tagName: "span"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Content ─── -->
      <Container id="ds_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 48px">
        <FlexContainer id="ds_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- Brand palette -->
          <Container id="ds_colors_card" style="height:auto; width:100%">
            <FlexContainer id="ds_colors_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_colors_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_colors_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                  <Container id="ds_colors_title_cell" style="height:auto; width:auto"><Text id="ds_colors_title" props={content: "Brand palette", tagName: "h3"}/></Container>
                  <Container id="ds_colors_desc_cell" style="height:auto; width:auto"><Text id="ds_colors_desc" props={content: "Primary carries key actions and focus; semantic colours state status only, never decoration.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_swatch_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_swatch_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:14px">
                  <Container id="ds_swatch_primary_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_primary_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_primary_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_primary_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_primary_name" props={content: "Primary · Indigo", tagName: "span"}/></Container>
                      <Container id="ds_swatch_primary_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_primary_hex" props={content: "#6366F1", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_deep_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_deep_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_deep_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_deep_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_deep_name" props={content: "Primary · deep", tagName: "span"}/></Container>
                      <Container id="ds_swatch_deep_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_deep_hex" props={content: "#4F46E5", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_cyan_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_cyan_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_cyan_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_cyan_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_cyan_name" props={content: "Accent · Cyan", tagName: "span"}/></Container>
                      <Container id="ds_swatch_cyan_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_cyan_hex" props={content: "#06B6D4", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_success_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_success_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_success_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_success_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_success_name" props={content: "Success · Green", tagName: "span"}/></Container>
                      <Container id="ds_swatch_success_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_success_hex" props={content: "#10B981", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_warning_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_warning_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_warning_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_warning_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_warning_name" props={content: "Warning · Amber", tagName: "span"}/></Container>
                      <Container id="ds_swatch_warning_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_warning_hex" props={content: "#F59E0B", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_danger_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_danger_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_danger_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_danger_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_danger_name" props={content: "Danger · Red", tagName: "span"}/></Container>
                      <Container id="ds_swatch_danger_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_danger_hex" props={content: "#EF4444", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Type scale -->
          <Container id="ds_type_card" style="height:auto; width:100%">
            <FlexContainer id="ds_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
              <Container id="ds_type_title_cell" style="height:auto; width:100%"><Text id="ds_type_title" props={content: "Type scale", tagName: "h3"}/></Container>
              <Container id="ds_type_h1_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_h1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_h1_sample_cell" style="height:auto; width:auto"><Text id="ds_type_h1_sample" props={content: "Heading 1 · Page title", tagName: "h1"}/></Container>
                  <Container id="ds_type_h1_meta_cell" style="height:auto; width:auto"><Text id="ds_type_h1_meta" props={content: "40 / 900 / -1px", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_h2_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_h2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_h2_sample_cell" style="height:auto; width:auto"><Text id="ds_type_h2_sample" props={content: "Heading 2 · Section title", tagName: "h2"}/></Container>
                  <Container id="ds_type_h2_meta_cell" style="height:auto; width:auto"><Text id="ds_type_h2_meta" props={content: "28 / 800 / -0.5px", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_body_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_body_sample_cell" style="height:auto; width:auto"><Text id="ds_type_body_sample" props={content: "Body · regular weight, 1.7 leading, for paragraphs and notes.", tagName: "p"}/></Container>
                  <Container id="ds_type_body_meta_cell" style="height:auto; width:auto"><Text id="ds_type_body_meta" props={content: "16 / 400 / 1.7", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_caption_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_caption_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_caption_sample_cell" style="height:auto; width:auto"><Text id="ds_type_caption_sample" props={content: "Caption · secondary info and timestamps.", tagName: "span"}/></Container>
                  <Container id="ds_type_caption_meta_cell" style="height:auto; width:auto"><Text id="ds_type_caption_meta" props={content: "13 / 400", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Buttons and tags -->
          <Container id="ds_controls_card" style="height:auto; width:100%">
            <FlexContainer id="ds_controls_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_btn_title_cell" style="height:auto; width:100%"><Text id="ds_btn_title" props={content: "Button variants", tagName: "h3"}/></Container>
              <Container id="ds_btn_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_btn_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_btn_primary_cell" style="height:auto; width:auto"><Button id="ds_btn_primary" props={content: "Primary action", variant: "primary"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_default_cell" style="height:auto; width:auto"><Button id="ds_btn_default" props={content: "Secondary action", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_danger_cell" style="height:auto; width:auto"><Button id="ds_btn_danger" props={content: "Danger action", variant: "danger"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_disabled_cell" style="height:auto; width:auto"><Button id="ds_btn_disabled" props={content: "Disabled state", variant: "default", disabled: true} style="height:auto; width:auto; padding:9px 22px"/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_tag_title_cell" style="height:auto; width:100%"><Text id="ds_tag_title" props={content: "Tag variants", tagName: "h3"}/></Container>
              <Container id="ds_tag_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_tag_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                  <Container id="ds_tag_blue_cell" style="height:auto; width:auto"><Tag id="ds_tag_blue" props={text: "In progress", color: "blue"}/></Container>
                  <Container id="ds_tag_green_cell" style="height:auto; width:auto"><Tag id="ds_tag_green" props={text: "Completed", color: "green"}/></Container>
                  <Container id="ds_tag_gold_cell" style="height:auto; width:auto"><Tag id="ds_tag_gold" props={text: "Pending review", color: "gold"}/></Container>
                  <Container id="ds_tag_red_cell" style="height:auto; width:auto"><Tag id="ds_tag_red" props={text: "Overdue", color: "red"}/></Container>
                  <Container id="ds_tag_purple_cell" style="height:auto; width:auto"><Tag id="ds_tag_purple" props={text: "Members only", color: "purple"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Form controls -->
          <Container id="ds_form_card" style="height:auto; width:100%">
            <FlexContainer id="ds_form_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_form_title_cell" style="height:auto; width:100%"><Text id="ds_form_title" props={content: "Form controls", tagName: "h3"}/></Container>
              <Container id="ds_form_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_form_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:16px">
                  <Container id="ds_form_input_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_form_input_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ds_form_input_label_cell" style="height:auto; width:auto"><Text id="ds_form_input_label" props={content: "Text input", tagName: "span"}/></Container>
                      <Container id="ds_form_input_field_cell" style="height:auto; width:100%"><Input id="ds_form_input_field" props={placeholder: "Type something…"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_form_select_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_form_select_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ds_form_select_label_cell" style="height:auto; width:auto"><Text id="ds_form_select_label" props={content: "Select", tagName: "span"}/></Container>
                      <Container id="ds_form_select_field_cell" style="height:auto; width:100%"><Select id="ds_form_select_field" props={options: [{label: "Option A", value: "a"}, {label: "Option B", value: "b"}, {label: "Option C", value: "c"}], placeholder: "Choose…"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_form_switch_cell" style="height:auto; width:auto; flex-shrink:0; padding-bottom:6px">
                    <FlexContainer id="ds_form_switch_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:8px">
                      <Container id="ds_form_switch_label_cell" style="height:auto; width:auto"><Text id="ds_form_switch_label" props={content: "Switch", tagName: "span"}/></Container>
                      <Container id="ds_form_switch_field_cell" style="height:auto; width:auto"><Switch id="ds_form_switch_field" props={checked: true}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Spacing scale -->
          <Container id="ds_space_card" style="height:auto; width:100%">
            <FlexContainer id="ds_space_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
              <Container id="ds_space_title_cell" style="height:auto; width:100%"><Text id="ds_space_title" props={content: "Spacing scale", tagName: "h3"}/></Container>
              <Container id="ds_space_1_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_1_bar_cell" style="height:8px; width:16px; flex-shrink:0"/>
                  <Container id="ds_space_1_text_cell" style="height:auto; width:auto"><Text id="ds_space_1_text" props={content: "space-1 · 4px · icon to label", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_2_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_2_bar_cell" style="height:8px; width:32px; flex-shrink:0"/>
                  <Container id="ds_space_2_text_cell" style="height:auto; width:auto"><Text id="ds_space_2_text" props={content: "space-2 · 8px · inside a group", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_3_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_3_bar_cell" style="height:8px; width:64px; flex-shrink:0"/>
                  <Container id="ds_space_3_text_cell" style="height:auto; width:auto"><Text id="ds_space_3_text" props={content: "space-3 · 16px · card padding", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_4_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_4_bar_cell" style="height:8px; width:96px; flex-shrink:0"/>
                  <Container id="ds_space_4_text_cell" style="height:auto; width:auto"><Text id="ds_space_4_text" props={content: "space-4 · 24px · between cards", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_5_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_5_bar_cell" style="height:8px; width:128px; flex-shrink:0"/>
                  <Container id="ds_space_5_text_cell" style="height:auto; width:auto"><Text id="ds_space_5_text" props={content: "space-5 · 32px · between sections", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # 0. Canvas and top bar
      @ds_root = { background: #f7f8fb; }
      @ds_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @ds_logo = { color: #6366f1; font-size: 22px; }
      @ds_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_version = { background-color: #eef2ff; color: #4338ca; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_top_note = { color: #94a3b8; font-size: 13px; letter-spacing: 0.1px; }

      # 1. Cards
      @ds_colors_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_type_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_controls_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_form_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_space_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_colors_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_colors_desc = { color: #94a3b8; font-size: 12px; }
      @ds_type_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_btn_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_tag_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_form_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_space_title = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }

      # 2. Swatches
      @ds_swatch_primary_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_deep_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_cyan_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_success_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_warning_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_danger_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ds_swatch_primary_block_cell = { background: #6366f1; border-radius: 10px; }
      @ds_swatch_deep_block_cell = { background: #4f46e5; border-radius: 10px; }
      @ds_swatch_cyan_block_cell = { background: #06b6d4; border-radius: 10px; }
      @ds_swatch_success_block_cell = { background: #10b981; border-radius: 10px; }
      @ds_swatch_warning_block_cell = { background: #f59e0b; border-radius: 10px; }
      @ds_swatch_danger_block_cell = { background: #ef4444; border-radius: 10px; }
      @ds_swatch_primary_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_deep_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_cyan_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_success_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_warning_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_danger_name = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @ds_swatch_primary_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_swatch_deep_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_swatch_cyan_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_swatch_success_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_swatch_warning_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_swatch_danger_hex = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }

      # 3. Type specimens
      @ds_type_h1_sample = { color: #0f172a; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @ds_type_h2_sample = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      # Latin leading is tighter than CJK: the sample's own spec line says 1.7, so the specimen, its
      # caption and the meta string all agree.
      @ds_type_body_sample = { color: #334155; font-size: 16px; line-height: 1.7; }
      @ds_type_caption_sample = { color: #64748b; font-size: 13px; }
      @ds_type_h1_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_h2_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_body_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_caption_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }

      # 4. Buttons / forms / spacing
      @ds_btn_primary = { color: #ffffff; background: #6366f1; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #4f46e5; } }
      @ds_btn_default = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; } :scope:hover { border-color: #94a3b8; } }
      @ds_btn_danger = { color: #ffffff; background: #dc2626; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b91c1c; } }
      @ds_btn_disabled = { color: #94a3b8; background: #f1f5f9; border-radius: 10px; font-size: 13px; font-weight: 600; }
      @ds_tag_blue = { background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_tag_green = { background-color: #dcfce7; color: #15803d; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_tag_gold = { background-color: #fef3c7; color: #b45309; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_tag_red = { background-color: #fee2e2; color: #b91c1c; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_tag_purple = { background-color: #f3e8ff; color: #7e22ce; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_form_input_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ds_form_select_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ds_form_switch_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ds_space_1_bar_cell = { background: #6366f1; border-radius: 4px; }
      @ds_space_2_bar_cell = { background: #6366f1; border-radius: 4px; }
      @ds_space_3_bar_cell = { background: #6366f1; border-radius: 4px; }
      @ds_space_4_bar_cell = { background: #6366f1; border-radius: 4px; }
      @ds_space_5_bar_cell = { background: #6366f1; border-radius: 4px; }
      @ds_space_1_text = { color: #334155; font-size: 13px; }
      @ds_space_2_text = { color: #334155; font-size: 13px; }
      @ds_space_3_text = { color: #334155; font-size: 13px; }
      @ds_space_4_text = { color: #334155; font-size: 13px; }
      @ds_space_5_text = { color: #334155; font-size: 13px; }
    </styles>
  </Page>
</App>
```

> Craft notes: a design-system page is a **token display** (palette / type scale / buttons / tags /
> form controls / spacing, section by section); a purely static page that proves itself (the platform's
> component variants as living samples); the hex strings match the colour blocks (a human can proof
> them against each other).

## Production notes

**A token sheet is a measurement page, so every change below keeps the numbers self-consistent** —
the specimen strings, their meta labels and the CSS all say the same thing.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `ds_brand` | 扉间设计系统 (6 glyphs, no tracking) | **Threshold Design System** (24 glyphs, `-0.2px`) | the fictional DS is renamed to a neutral English stand-in (扉间 reads as "the space between door leaves"); the slight negative tracking keeps a 24-glyph wordmark from reading as a sentence |
| `ds_type_body_sample` + `ds_type_body_meta` | 16px / `line-height: 1.8` | **16px / 1.7** | Latin leading; the specimen line now reads "…1.7 leading…" and the meta string says `16 / 400 / 1.7`, so sample, spec and CSS agree |
| `ds_colors_desc` | 12px, one line (33 CJK glyphs ≈ 400px) | 12px, one line (91 Latin glyphs, **measured 520px**) | still well inside the 1032px card measure |
| swatch names | 主色 Indigo / 深主色 / 辅助 Cyan / 成功 Green / 警告 Amber / 危险 Red | **Primary · Indigo / Primary · deep / Accent · Cyan / Success · Green / Warning · Amber / Danger · Red** | role first, hue second — the same information as the Chinese, and each label stays inside the 136px a swatch column has after padding |
| button labels | 主要操作 / 次要操作 / 危险操作 / 禁用状态 | **Primary action / Secondary action / Danger action / Disabled state** | the 9px/22px button padding is unchanged; the widest button measures 156px and the four plus their 14px gaps total ~610px inside the 1032px row, so they sit on one line as in the Chinese |
| `ds_top_note` | 全局令牌 · 24 组件 · 更新于 2026-09-14 | **214 global tokens · 24 components · updated Sep 14, 2026** | token count spelled out, date re-ordered to the international convention |
| spacing captions | space-1 · 4px · 图标与文字 … | **space-1 · 4px · icon to label** … | the bars are unchanged (16/32/64/96/128px); the captions stay one line each |

**Copy policy — re-expressed, not translated.** The sections keep the Chinese layout verbatim (same
six colour swatches, same four type steps, same four buttons, five tags, three form controls, five
spacing steps); the palette *names* moved from hue-only ("主色 Indigo") to role + hue because that is
how a Latin design system labels its ramp, and the tag labels became status words a product page
would really use ("处理中" → "In progress", "会员专享" → "Members only"). The `<Switch>` node is kept
exactly as the Chinese has it — see the platform note below.

**No structural refactor was needed.** Every node id is identical to the Chinese version, including
`ds_form_switch_field` and the `ds_space_*` bar cells.

**Platform note (not introduced here).** `ds_form_switch_field` sits in a `width:auto` flex cell, and
the engine injects `width/height:100%` on a component root whose cell width comes from its content —
a circular dependency that collapses the switch to 0×0. It renders the same way in the Chinese
edition (`ds-showcase.zh.png`); the markup was deliberately left alone rather than worked around, so
the two editions stay addressable by the same selectors.
