# 品牌视觉套件 — 「拾光设计」品牌手册

> 模板定位（内容 / 品牌 tab）：品牌手册——标志区（标准组合 + 使用规范）/ 色彩体系（主辅四色 + 用途）/ 字体规范（三档）/ 应用示例（名片 / 信纸 / 包装）/ 使用禁忌。
> 场景需求：给虚构设计品牌做一页品牌手册：墨绿与金色基调，顶部品牌条，依次是标志展示卡（深底金标 + 最小尺寸 / 安全区说明）、四色体系（大色块 + 色值 + 用途）、字体规范（标题 / 正文 / 数字三行样本）、三件应用示例（名片 / 信纸 / 包装的色块构图）、使用禁忌四则。零动效、纯静态规范页。

```lang
<App dsl-version="0.3" name="拾光设计 · 品牌手册">
  <Page id="brand" name="品牌手册" route="/">
    <FlexContainer id="br_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 顶栏 ─── -->
      <Container id="br_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="br_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 32px">
          <Container id="br_header_left_cell" style="height:auto; width:auto">
            <FlexContainer id="br_header_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="br_header_icon_cell" style="height:auto; width:auto"><Icon id="br_header_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
              <Container id="br_header_text_cell" style="height:auto; width:auto"><Text id="br_header_text" props={content: "拾光设计 · 品牌手册", tagName: "span"}/></Container>
              <Container id="br_header_version_cell" style="height:auto; width:auto"><Tag id="br_header_version" props={text: "v1.0", color: "gold"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="br_header_note_cell" style="height:auto; width:auto">
            <Text id="br_header_note" props={content: "内部规范 · 对外物料以本手册为准", tagName: "span"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 内容区 ─── -->
      <Container id="br_body" style="flex-grow:1; height:auto; width:100%; padding:20px 32px 56px">
        <FlexContainer id="br_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:1040px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- 标志区 -->
          <Container id="br_logo_card" style="height:auto; width:100%">
            <FlexContainer id="br_logo_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px; padding:24px">
              <Container id="br_logo_stage_cell" style="flex-grow:1; height:auto; width:60%">
                <FlexContainer id="br_logo_stage" props={direction: "column"} style="height:230px; width:100%; align-items:center; justify-content:center; gap:14px">
                  <Container id="br_logo_mark_cell" style="height:auto; width:auto"><Icon id="br_logo_mark" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
                  <Container id="br_logo_wordmark_cell" style="height:auto; width:auto"><Text id="br_logo_wordmark" props={content: "拾光设计 SEEKLICHT", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_logo_spec_cell" style="flex-grow:1; height:auto; width:40%">
                <FlexContainer id="br_logo_spec_col" props={direction: "column"} style="height:100%; width:100%; align-items:flex-start; gap:12px; padding:20px 22px">
                  <Container id="br_logo_spec_title_cell" style="height:auto; width:100%"><Text id="br_logo_spec_title" props={content: "标志使用", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_1_cell" style="height:auto; width:100%"><Text id="br_logo_spec_1" props={content: "· 标准组合 = 光孔标记 + 中英文标准字，间距为标记高度的 40%", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_2_cell" style="height:auto; width:100%"><Text id="br_logo_spec_2" props={content: "· 最小使用尺寸：印刷 18mm / 屏幕 24px", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="br_logo_spec_3_cell" style="height:auto; width:100%"><Text id="br_logo_spec_3" props={content: "· 安全区：四周留白不小于标记高度的 50%", tagName: "span"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 色彩体系 -->
          <Container id="br_color_card" style="height:auto; width:100%">
            <FlexContainer id="br_color_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:24px">
              <Container id="br_color_title_cell" style="height:auto; width:100%"><Text id="br_color_title" props={content: "色彩体系", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_color_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_color_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="br_color_gold_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_gold_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_gold_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_gold_name_cell" style="height:auto; width:100%"><Text id="br_color_gold_name" props={content: "拾光金 #D4AF37", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_gold_use_cell" style="height:auto; width:100%"><Text id="br_color_gold_use" props={content: "主色 · 标志 / 强调文案 / 行动点", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_ink_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_ink_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_ink_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_ink_name_cell" style="height:auto; width:100%"><Text id="br_color_ink_name" props={content: "夜墨 #0D1F1A", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_ink_use_cell" style="height:auto; width:100%"><Text id="br_color_ink_use" props={content: "底色 · 深色版式 / 封面 / 海报底", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_paper_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_paper_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_paper_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_paper_name_cell" style="height:auto; width:100%"><Text id="br_color_paper_name" props={content: "雾白 #F5F1E8", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_paper_use_cell" style="height:auto; width:100%"><Text id="br_color_paper_use" props={content: "纸色 · 正文底 / 报表 / 信纸", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_color_moss_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_color_moss_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px">
                      <Container id="br_color_moss_block_cell" style="height:120px; width:100%"/>
                      <Container id="br_color_moss_name_cell" style="height:auto; width:100%"><Text id="br_color_moss_name" props={content: "青苔 #7BA98E", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="br_color_moss_use_cell" style="height:auto; width:100%"><Text id="br_color_moss_use" props={content: "辅助 · 图表 / 状态 / 次级强调", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 字体规范 -->
          <Container id="br_type_card" style="height:auto; width:100%">
            <FlexContainer id="br_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:24px">
              <Container id="br_type_title_cell" style="height:auto; width:100%"><Text id="br_type_title" props={content: "字体规范", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_type_1_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_1_sample_cell" style="height:auto; width:auto"><Text id="br_type_1_sample" props={content: "标题｜黑体 Heavy · 字重 900", tagName: "h2"}/></Container>
                  <Container id="br_type_1_meta_cell" style="height:auto; width:auto"><Text id="br_type_1_meta" props={content: "用于封面与章节标题", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_type_2_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_2_sample_cell" style="height:auto; width:auto"><Text id="br_type_2_sample" props={content: "正文｜思源宋体 Regular · 字重 400 · 行高 1.9", tagName: "p"}/></Container>
                  <Container id="br_type_2_meta_cell" style="height:auto; width:auto"><Text id="br_type_2_meta" props={content: "用于长文与说明", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="br_type_3_cell" style="height:auto; width:100%">
                <FlexContainer id="br_type_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="br_type_3_sample_cell" style="height:auto; width:auto"><Text id="br_type_3_sample" props={content: "数字｜等宽字形 · 0123456789", tagName: "span"}/></Container>
                  <Container id="br_type_3_meta_cell" style="height:auto; width:auto"><Text id="br_type_3_meta" props={content: "用于数据与价签", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 应用示例 -->
          <Container id="br_apply_card" style="height:auto; width:100%">
            <FlexContainer id="br_apply_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:24px">
              <Container id="br_apply_title_cell" style="height:auto; width:100%"><Text id="br_apply_title" props={content: "应用示例", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_apply_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_apply_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="br_apply_card_mock_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_apply_card_mock_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                      <Container id="br_apply_card_mock_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center">
                        <Icon id="br_apply_card_mock_icon" props={iconName: "Aperture", iconSource: "lucide"}/>
                      </Container>
                      <Container id="br_apply_card_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_card_mock_name" props={content: "名片 · 金标深底", tagName: "span"} style="height:auto; width:100%"/></Container>
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
                      <Container id="br_apply_letter_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_letter_mock_name" props={content: "信纸 · 雾白 + 墨线", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="br_apply_box_mock_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="br_apply_box_mock_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                      <Container id="br_apply_box_mock_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center">
                        <FlexContainer id="br_apply_box_mock_stack" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:8px">
                          <Container id="br_apply_box_mock_seal_cell" style="height:44px; width:44px"/>
                          <Container id="br_apply_box_mock_word_cell" style="height:auto; width:auto"><Text id="br_apply_box_mock_word" props={content: "拾光", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="br_apply_box_mock_name_cell" style="height:auto; width:100%"><Text id="br_apply_box_mock_name" props={content: "包装 · 青苔封贴", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 使用禁忌 -->
          <Container id="br_dont_card" style="height:auto; width:100%">
            <FlexContainer id="br_dont_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:24px">
              <Container id="br_dont_title_cell" style="height:auto; width:100%"><Text id="br_dont_title" props={content: "使用禁忌", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="br_dont_row_cell" style="height:auto; width:100%">
                <FlexContainer id="br_dont_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:14px">
                  <Container id="br_dont_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_1" props={content: "✕ 禁止拉伸或压缩标志比例", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_2" props={content: "✕ 禁止替换品牌色（金 / 墨 / 白三色之外）", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_3" props={content: "✕ 禁止加描边、投影或渐变特效", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                  <Container id="br_dont_4_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <Text id="br_dont_4" props={content: "✕ 禁止在杂乱底图上直接投放标志", tagName: "span"} style="height:auto; width:100%; padding:14px 16px"/>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # 0. 基调
      @br_root = { background: #f5f1e8; }
      @br_header = { background: #0d1f1a; }
      @br_header_icon = { color: #d4af37; font-size: 20px; }
      @br_header_text = { color: #f5f1e8; font-size: 16px; font-weight: 700; letter-spacing: 1px; }
      @br_header_version = { background-color: rgba(212, 175, 55, 0.16); color: #d4af37; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @br_header_note = { color: #5f7a6d; font-size: 12px; letter-spacing: 0.5px; }

      # 1. 卡片
      @br_logo_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_color_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_type_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_apply_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @br_dont_card = { background: #fff7ed; border-radius: 16px; box-shadow: 0 2px 10px rgba(154, 52, 18, 0.05); :scope { border: 1px solid #fed7aa; } }
      @br_color_title = { color: #1c1917; font-size: 17px; font-weight: 800; }
      @br_type_title = { color: #1c1917; font-size: 17px; font-weight: 800; }
      @br_apply_title = { color: #1c1917; font-size: 17px; font-weight: 800; }
      @br_dont_title = { color: #9a3412; font-size: 17px; font-weight: 800; }

      # 2. 标志区
      @br_logo_stage = {
        background: radial-gradient(closest-side at 50% 42%, #16332a 0%, #0d1f1a 72%);
        border-radius: 14px;
        box-shadow: inset 0 1px 0 rgba(212, 175, 55, 0.18);
        :scope { border: 1px solid rgba(212, 175, 55, 0.28); }
        :scope::before { content: ''; position: absolute; left: 50%; top: 50%; width: 320px; height: 320px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0) 72%); }
      }
      @br_logo_mark = { color: #d4af37; font-size: 56px; }
      @br_logo_wordmark = { color: #f5e6b8; font-size: 22px; font-weight: 700; letter-spacing: 6px; }
      @br_logo_spec_cell = { background: #faf7f0; border-radius: 14px; :scope { border: 1px solid #eee7d7; } }
      @br_logo_spec_title = { color: #1c1917; font-size: 16px; font-weight: 800; }
      @br_logo_spec_1 = { color: #57534e; font-size: 13px; line-height: 1.9; }
      @br_logo_spec_2 = { color: #57534e; font-size: 13px; line-height: 1.9; }
      @br_logo_spec_3 = { color: #57534e; font-size: 13px; line-height: 1.9; }

      # 3. 色彩
      @br_color_gold_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_ink_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_paper_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_moss_cell = { background: #faf7f0; border-radius: 12px; }
      @br_color_gold_block_cell = { background: #d4af37; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      @br_color_ink_block_cell = { background: #0d1f1a; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      @br_color_paper_block_cell = { background: #f5f1e8; border-radius: 10px; :scope { border: 1px solid #e7e0d2; } }
      @br_color_moss_block_cell = { background: #7ba98e; border-radius: 10px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.06); }
      @br_color_gold_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_ink_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_paper_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_moss_name = { color: #1c1917; font-size: 14px; font-weight: 700; }
      @br_color_gold_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_ink_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_paper_use = { color: #78716c; font-size: 12px; line-height: 1.7; }
      @br_color_moss_use = { color: #78716c; font-size: 12px; line-height: 1.7; }

      # 4. 字体
      @br_type_1_sample = { color: #1c1917; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @br_type_2_sample = { color: #1c1917; font-size: 17px; line-height: 1.9; }
      @br_type_3_sample = { color: #1c1917; font-size: 17px; letter-spacing: 2px; }
      @br_type_1_meta = { color: #a8a29e; font-size: 12px; }
      @br_type_2_meta = { color: #a8a29e; font-size: 12px; }
      @br_type_3_meta = { color: #a8a29e; font-size: 12px; }

      # 5. 应用示例
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
      @br_apply_box_mock_word = { color: #0d1f1a; font-size: 18px; font-weight: 800; letter-spacing: 4px; }
      @br_apply_card_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }
      @br_apply_letter_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }
      @br_apply_box_mock_name = { color: #78716c; font-size: 12px; font-weight: 600; }

      # 6. 禁忌
      @br_dont_1_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_2_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_3_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_4_cell = { background: #ffffff; border-radius: 10px; :scope { border: 1px solid #fed7aa; } }
      @br_dont_1 = { color: #9a3412; font-size: 13px; line-height: 1.8; }
      @br_dont_2 = { color: #9a3412; font-size: 13px; line-height: 1.8; }
      @br_dont_3 = { color: #9a3412; font-size: 13px; line-height: 1.8; }
      @br_dont_4 = { color: #9a3412; font-size: 13px; line-height: 1.8; }
    </styles>
  </Page>
</App>
```

> 制作要点：品牌手册 = 标志（标准组合 + 规范说明）/ 色彩（主辅四色 + 用途）/ 字体（三档）/ 应用（三件 mock 构图）/ 禁忌；应用示例用色块与图标做构图示意（零位图资产）。与 `mkt-poster` 共享「拾光」虚构品牌世界观。
> 质感升级（2026-09-14，visual-composition 规则 16）——① **涂装/留白分层修复 ×19**：五张卡（标志/色彩/字体/应用/禁忌）+ 说明板 + 四色格 ×4 + 应用 mock ×4 + 禁忌四则（含 header 条与文字节点持 padding 配方）——原为「涂装盒 = 内容盒、padding 落壳」；② **节标题左对齐**（补 `width:100%` 抗 cell 居中注入——原居中与左侧内容混排）；③ 标志舞台：径向金辉光 + 金边 + 内高光；④ 卡片柔和投影 + 色块内高光（材质感）。
