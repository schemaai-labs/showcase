# 设计系统 / 组件库展示 — 「扉间设计系统」规范页

> 模板定位（产品 / 应用 tab · 设计系统）：设计系统展示页——色板 / 字阶 / 按钮与标签变体 / 表单控件 / 间距刻度逐节陈列（平台组件全量的自证页）。
> 场景需求：给虚构设计系统做规范展示页：顶栏品牌与版本号，依次是品牌色板（6 色块 + 名称 + 色值）、语义色（4 色）、字阶样本（4 级）、按钮变体（主/次/危险/禁用）、标签变体（5 色）、表单控件陈列（输入框 / 下拉 / 开关）、间距刻度（4/8/16/24/32）。浅色画布、白卡分区、零动效。

```lang
<App dsl-version="0.3" name="扉间设计系统 · 规范展示">
  <Page id="ds" name="设计系统" route="/design-system">
    <FlexContainer id="ds_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 顶栏 ─── -->
      <Container id="ds_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="ds_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="ds_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ds_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="ds_logo_cell" style="height:auto; width:auto"><Icon id="ds_logo" props={iconName: "Palette", iconSource: "lucide"}/></Container>
              <Container id="ds_brand_text_cell" style="height:auto; width:auto"><Text id="ds_brand" props={content: "扉间设计系统", tagName: "span"}/></Container>
              <Container id="ds_version_cell" style="height:auto; width:auto"><Tag id="ds_version" props={text: "v2.4", color: "geekblue"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ds_top_note_cell" style="height:auto; width:auto; flex-shrink:0">
            <Text id="ds_top_note" props={content: "全局令牌 · 24 组件 · 更新于 2026-09-14", tagName: "span"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 内容区 ─── -->
      <Container id="ds_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 48px">
        <FlexContainer id="ds_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- 品牌色板 -->
          <Container id="ds_colors_card" style="height:auto; width:100%">
            <FlexContainer id="ds_colors_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_colors_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_colors_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                  <Container id="ds_colors_title_cell" style="height:auto; width:auto"><Text id="ds_colors_title" props={content: "品牌色板", tagName: "h3"}/></Container>
                  <Container id="ds_colors_desc_cell" style="height:auto; width:auto"><Text id="ds_colors_desc" props={content: "主色用于关键操作与焦点；语义色只表达状态，不用于装饰。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_swatch_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_swatch_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:14px">
                  <Container id="ds_swatch_primary_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_primary_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_primary_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_primary_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_primary_name" props={content: "主色 Indigo", tagName: "span"}/></Container>
                      <Container id="ds_swatch_primary_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_primary_hex" props={content: "#6366F1", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_deep_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_deep_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_deep_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_deep_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_deep_name" props={content: "深主色", tagName: "span"}/></Container>
                      <Container id="ds_swatch_deep_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_deep_hex" props={content: "#4F46E5", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_cyan_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_cyan_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_cyan_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_cyan_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_cyan_name" props={content: "辅助 Cyan", tagName: "span"}/></Container>
                      <Container id="ds_swatch_cyan_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_cyan_hex" props={content: "#06B6D4", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_success_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_success_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_success_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_success_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_success_name" props={content: "成功 Green", tagName: "span"}/></Container>
                      <Container id="ds_swatch_success_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_success_hex" props={content: "#10B981", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_warning_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_warning_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_warning_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_warning_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_warning_name" props={content: "警告 Amber", tagName: "span"}/></Container>
                      <Container id="ds_swatch_warning_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_warning_hex" props={content: "#F59E0B", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_swatch_danger_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_swatch_danger_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:12px">
                      <Container id="ds_swatch_danger_block_cell" style="height:64px; width:100%"/>
                      <Container id="ds_swatch_danger_name_cell" style="height:auto; width:100%"><Text id="ds_swatch_danger_name" props={content: "危险 Red", tagName: "span"}/></Container>
                      <Container id="ds_swatch_danger_hex_cell" style="height:auto; width:100%"><Text id="ds_swatch_danger_hex" props={content: "#EF4444", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 字阶 -->
          <Container id="ds_type_card" style="height:auto; width:100%">
            <FlexContainer id="ds_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
              <Container id="ds_type_title_cell" style="height:auto; width:100%"><Text id="ds_type_title" props={content: "字阶", tagName: "h3"}/></Container>
              <Container id="ds_type_h1_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_h1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_h1_sample_cell" style="height:auto; width:auto"><Text id="ds_type_h1_sample" props={content: "标题一 · Aa 页面主标题", tagName: "h1"}/></Container>
                  <Container id="ds_type_h1_meta_cell" style="height:auto; width:auto"><Text id="ds_type_h1_meta" props={content: "40 / 900 / -1px", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_h2_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_h2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_h2_sample_cell" style="height:auto; width:auto"><Text id="ds_type_h2_sample" props={content: "标题二 · Aa 区块标题", tagName: "h2"}/></Container>
                  <Container id="ds_type_h2_meta_cell" style="height:auto; width:auto"><Text id="ds_type_h2_meta" props={content: "28 / 800 / -0.5px", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_body_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_body_sample_cell" style="height:auto; width:auto"><Text id="ds_type_body_sample" props={content: "正文 · 十六号常规字重，行高 1.8，用于段落与说明。", tagName: "p"}/></Container>
                  <Container id="ds_type_body_meta_cell" style="height:auto; width:auto"><Text id="ds_type_body_meta" props={content: "16 / 400 / 1.8", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_type_caption_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_type_caption_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ds_type_caption_sample_cell" style="height:auto; width:auto"><Text id="ds_type_caption_sample" props={content: "辅助 · 十三号次要信息与时间戳。", tagName: "span"}/></Container>
                  <Container id="ds_type_caption_meta_cell" style="height:auto; width:auto"><Text id="ds_type_caption_meta" props={content: "13 / 400", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 按钮与标签 -->
          <Container id="ds_controls_card" style="height:auto; width:100%">
            <FlexContainer id="ds_controls_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_btn_title_cell" style="height:auto; width:100%"><Text id="ds_btn_title" props={content: "按钮变体", tagName: "h3"}/></Container>
              <Container id="ds_btn_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_btn_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_btn_primary_cell" style="height:auto; width:auto"><Button id="ds_btn_primary" props={content: "主要操作", variant: "primary"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_default_cell" style="height:auto; width:auto"><Button id="ds_btn_default" props={content: "次要操作", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_danger_cell" style="height:auto; width:auto"><Button id="ds_btn_danger" props={content: "危险操作", variant: "danger"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                  <Container id="ds_btn_disabled_cell" style="height:auto; width:auto"><Button id="ds_btn_disabled" props={content: "禁用状态", variant: "default", disabled: true} style="height:auto; width:auto; padding:9px 22px"/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_tag_title_cell" style="height:auto; width:100%"><Text id="ds_tag_title" props={content: "标签变体", tagName: "h3"}/></Container>
              <Container id="ds_tag_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_tag_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                  <Container id="ds_tag_blue_cell" style="height:auto; width:auto"><Tag id="ds_tag_blue" props={text: "处理中", color: "blue"}/></Container>
                  <Container id="ds_tag_green_cell" style="height:auto; width:auto"><Tag id="ds_tag_green" props={text: "已完成", color: "green"}/></Container>
                  <Container id="ds_tag_gold_cell" style="height:auto; width:auto"><Tag id="ds_tag_gold" props={text: "待审批", color: "gold"}/></Container>
                  <Container id="ds_tag_red_cell" style="height:auto; width:auto"><Tag id="ds_tag_red" props={text: "已逾期", color: "red"}/></Container>
                  <Container id="ds_tag_purple_cell" style="height:auto; width:auto"><Tag id="ds_tag_purple" props={text: "会员专享", color: "purple"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 表单控件 -->
          <Container id="ds_form_card" style="height:auto; width:100%">
            <FlexContainer id="ds_form_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
              <Container id="ds_form_title_cell" style="height:auto; width:100%"><Text id="ds_form_title" props={content: "表单控件", tagName: "h3"}/></Container>
              <Container id="ds_form_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_form_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:16px">
                  <Container id="ds_form_input_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_form_input_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ds_form_input_label_cell" style="height:auto; width:auto"><Text id="ds_form_input_label" props={content: "文本输入", tagName: "span"}/></Container>
                      <Container id="ds_form_input_field_cell" style="height:auto; width:100%"><Input id="ds_form_input_field" props={placeholder: "请输入内容…"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_form_select_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ds_form_select_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ds_form_select_label_cell" style="height:auto; width:auto"><Text id="ds_form_select_label" props={content: "下拉选择", tagName: "span"}/></Container>
                      <Container id="ds_form_select_field_cell" style="height:auto; width:100%"><Select id="ds_form_select_field" props={options: [{label: "选项 A", value: "a"}, {label: "选项 B", value: "b"}, {label: "选项 C", value: "c"}], placeholder: "请选择…"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ds_form_switch_cell" style="height:auto; width:auto; flex-shrink:0; padding-bottom:6px">
                    <FlexContainer id="ds_form_switch_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:8px">
                      <Container id="ds_form_switch_label_cell" style="height:auto; width:auto"><Text id="ds_form_switch_label" props={content: "开关", tagName: "span"}/></Container>
                      <Container id="ds_form_switch_field_cell" style="height:auto; width:auto"><Switch id="ds_form_switch_field" props={checked: true}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 间距刻度 -->
          <Container id="ds_space_card" style="height:auto; width:100%">
            <FlexContainer id="ds_space_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
              <Container id="ds_space_title_cell" style="height:auto; width:100%"><Text id="ds_space_title" props={content: "间距刻度", tagName: "h3"}/></Container>
              <Container id="ds_space_1_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_1_bar_cell" style="height:8px; width:16px; flex-shrink:0"/>
                  <Container id="ds_space_1_text_cell" style="height:auto; width:auto"><Text id="ds_space_1_text" props={content: "space-1 · 4px · 图标与文字", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_2_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_2_bar_cell" style="height:8px; width:32px; flex-shrink:0"/>
                  <Container id="ds_space_2_text_cell" style="height:auto; width:auto"><Text id="ds_space_2_text" props={content: "space-2 · 8px · 同组元素", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_3_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_3_bar_cell" style="height:8px; width:64px; flex-shrink:0"/>
                  <Container id="ds_space_3_text_cell" style="height:auto; width:auto"><Text id="ds_space_3_text" props={content: "space-3 · 16px · 卡片内边距", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_4_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_4_bar_cell" style="height:8px; width:96px; flex-shrink:0"/>
                  <Container id="ds_space_4_text_cell" style="height:auto; width:auto"><Text id="ds_space_4_text" props={content: "space-4 · 24px · 卡片间距", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ds_space_5_cell" style="height:auto; width:100%">
                <FlexContainer id="ds_space_5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                  <Container id="ds_space_5_bar_cell" style="height:8px; width:128px; flex-shrink:0"/>
                  <Container id="ds_space_5_text_cell" style="height:auto; width:auto"><Text id="ds_space_5_text" props={content: "space-5 · 32px · 区块间距", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # 0. 画布与顶栏
      @ds_root = { background: #f7f8fb; }
      @ds_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @ds_logo = { color: #6366f1; font-size: 22px; }
      @ds_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ds_version = { background-color: #eef2ff; color: #4338ca; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @ds_top_note = { color: #94a3b8; font-size: 13px; }

      # 1. 卡片
      @ds_colors_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_type_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_controls_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_form_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_space_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ds_colors_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ds_colors_desc = { color: #94a3b8; font-size: 12px; }
      @ds_type_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ds_btn_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ds_tag_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ds_form_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ds_space_title = { color: #0f172a; font-size: 17px; font-weight: 800; }

      # 2. 色板
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

      # 3. 字阶样本
      @ds_type_h1_sample = { color: #0f172a; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @ds_type_h2_sample = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @ds_type_body_sample = { color: #334155; font-size: 16px; line-height: 1.8; }
      @ds_type_caption_sample = { color: #64748b; font-size: 13px; }
      @ds_type_h1_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_h2_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_body_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }
      @ds_type_caption_meta = { color: #94a3b8; font-size: 12px; letter-spacing: 0.5px; }

      # 4. 按钮 / 表单 / 间距
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

> 制作要点：设计系统页 = 令牌陈列（色板/字阶/按钮/标签/表单/间距逐节）；纯静态自证页（平台组件变体的活样例）；色值文本与色块一致（人读校样）。
