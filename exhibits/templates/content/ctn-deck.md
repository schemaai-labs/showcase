# Pitch Deck（多页翻页） — 「拾光设计」品牌升级提案

> 模板定位（内容 / 品牌 tab）：演示文稿——五页幻灯片（封面 / 洞察 / 方案 / 数据 / 收尾），按钮翻页 `nav.to`，每页自带页码与导航条。
> 场景需求：给虚构设计品牌做提案 deck：① 封面（品牌标 + 主标题 + 日期）；② 洞察（三条观察卡）；③ 方案（三个升级方向）；④ 数据（三个结果数字 + 一句注脚）；⑤ 收尾（致谢 + 联系方式 + 回到封面）。每页底部左页码右翻页按钮；宽屏排版（1280 设计），页面间导航可走通。

```lang
<App dsl-version="0.3" name="拾光设计 · 品牌升级提案">
  <!-- ══════════════ 1. 封面 ══════════════ -->
  <Page id="cover" name="封面" route="/">
    <FlexContainer id="dk_cover_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">
      <FlexContainer id="dk_cover_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:flex-start; gap:26px; padding:72px 64px 96px">
        <Container id="dk_cover_brand_cell" style="height:auto; width:auto">
          <FlexContainer id="dk_cover_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
            <Container id="dk_cover_brand_icon_cell" style="height:auto; width:auto"><Icon id="dk_cover_brand_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
            <Container id="dk_cover_brand_text_cell" style="height:auto; width:auto"><Text id="dk_cover_brand_text" props={content: "拾光设计 SEEKLICHT", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_cover_title_cell" style="height:auto; width:100%">
          <Text id="dk_cover_title" props={content: "品牌升级提案", tagName: "h1"} style="height:auto; width:100%"/>
        </Container>
        <Container id="dk_cover_sub_cell" style="height:auto; width:100%">
          <Text id="dk_cover_sub" props={content: "从「与光同尘」出发：一次关于色彩、字体与图形的系统更新。", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
        <Container id="dk_cover_meta_cell" style="height:auto; width:100%; padding-top:10px">
          <Text id="dk_cover_meta" props={content: "提案方：拾光设计品牌组 · 2026 年 9 月", tagName: "span"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
      <Container id="dk_cover_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:900px; padding-top:56px">
        <FlexContainer id="dk_cover_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_cover_page_cell" style="height:auto; width:auto"><Text id="dk_cover_page" props={content: "01 / 05", tagName: "span"}/></Container>
          <Container id="dk_cover_next_cell" style="height:auto; width:auto"><Button id="dk_cover_next" props={content: "开始浏览", variant: "primary"} style="height:auto; width:auto; padding:11px 30px"/></Container>
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
      @dk_cover_brand_text = { color: #d9e7df; font-size: 17px; font-weight: 600; letter-spacing: 3px; }
      @dk_cover_title = {
        font-size: 88px;
        font-weight: 900;
        letter-spacing: 6px;
        line-height: 1.15;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 52%, #f5e6b8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 18px 48px rgba(212, 175, 55, 0.28);
        }
      }
      @dk_cover_sub = { color: #9db8ab; font-size: 20px; line-height: 1.9; }
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

  <!-- ══════════════ 2. 洞察 ══════════════ -->
  <Page id="insight" name="洞察" route="/insight">
    <FlexContainer id="dk_insight_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_insight_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:stretch; gap:36px; padding:72px 64px 96px">
        <Container id="dk_insight_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_insight_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
            <Container id="dk_insight_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_insight_eyebrow" props={content: "01 · 洞察", tagName: "span"}/></Container>
            <Container id="dk_insight_title_cell" style="height:auto; width:100%"><Text id="dk_insight_title" props={content: "我们观察到的三个断层", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_insight_cards_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_insight_cards_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:20px">
            <Container id="dk_insight_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_1_num_cell" style="height:auto; width:auto"><Text id="dk_insight_1_num" props={content: "01", tagName: "span"}/></Container>
                <Container id="dk_insight_1_title_cell" style="height:auto; width:100%"><Text id="dk_insight_1_title" props={content: "色彩散点化", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_1_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_1_desc" props={content: "各渠道海报出现 14 种\"品牌红\"，主色缺锚点，远看不成体系。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_insight_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_2_num_cell" style="height:auto; width:auto"><Text id="dk_insight_2_num" props={content: "02", tagName: "span"}/></Container>
                <Container id="dk_insight_2_title_cell" style="height:auto; width:100%"><Text id="dk_insight_2_title" props={content: "字体三层混用", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_2_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_2_desc" props={content: "标题在三种字重间摇摆，正文行高不统一，阅读节奏被打断。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_insight_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_insight_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:26px 24px">
                <Container id="dk_insight_3_num_cell" style="height:auto; width:auto"><Text id="dk_insight_3_num" props={content: "03", tagName: "span"}/></Container>
                <Container id="dk_insight_3_title_cell" style="height:auto; width:100%"><Text id="dk_insight_3_title" props={content: "图形语言缺席", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="dk_insight_3_desc_cell" style="height:auto; width:100%"><Text id="dk_insight_3_desc" props={content: "除 logo 外没有可延展的图形资产，物料总在\"从零画一遍\"。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
      <Container id="dk_insight_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_insight_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_insight_prev_cell" style="height:auto; width:auto"><Button id="dk_insight_prev" props={content: "上一页", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_insight_page_cell" style="height:auto; width:auto"><Text id="dk_insight_page" props={content: "02 / 05", tagName: "span"}/></Container>
          <Container id="dk_insight_next_cell" style="height:auto; width:auto"><Button id="dk_insight_next" props={content: "下一页 · 方案", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_insight_prev = { events: { prev: { trigger: "onClick", action: nav.to("/") } } };
      @dk_insight_next = { events: { next: { trigger: "onClick", action: nav.to("/solution") } } };
    </script>
    <styles>
      @dk_insight_root = { background: #f5f1e8; }
      @dk_insight_eyebrow = { color: #b45309; font-size: 14px; font-weight: 800; letter-spacing: 4px; }
      @dk_insight_title = { color: #1c1917; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @dk_insight_1_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_2_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_3_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_insight_1_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_2_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_3_num = { color: #d4af37; font-size: 30px; font-weight: 900; }
      @dk_insight_1_title = { color: #1c1917; font-size: 19px; font-weight: 800; }
      @dk_insight_2_title = { color: #1c1917; font-size: 19px; font-weight: 800; }
      @dk_insight_3_title = { color: #1c1917; font-size: 19px; font-weight: 800; }
      @dk_insight_1_desc = { color: #57534e; font-size: 14px; line-height: 1.9; }
      @dk_insight_2_desc = { color: #57534e; font-size: 14px; line-height: 1.9; }
      @dk_insight_3_desc = { color: #57534e; font-size: 14px; line-height: 1.9; }
      @dk_insight_prev = { color: #57534e; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e7e0d2; } :scope:hover { border-color: #a8a29e; } }
      @dk_insight_page = { color: #a8a29e; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_insight_next = { color: #1c1917; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 3. 方案 ══════════════ -->
  <Page id="solution" name="方案" route="/solution">
    <FlexContainer id="dk_solution_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_solution_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:stretch; gap:36px; padding:72px 64px 96px">
        <Container id="dk_solution_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_solution_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
            <Container id="dk_solution_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_solution_eyebrow" props={content: "02 · 方案", tagName: "span"}/></Container>
            <Container id="dk_solution_title_cell" style="height:auto; width:100%"><Text id="dk_solution_title" props={content: "三个升级方向", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_solution_rows_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_solution_rows_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="dk_solution_1_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_1_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_1_icon" props={iconName: "Palette", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_1_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_1_name_cell" style="height:auto; width:auto"><Text id="dk_solution_1_name" props={content: "色彩：一枚主金，两级辅色", tagName: "h3"}/></Container>
                    <Container id="dk_solution_1_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_1_desc" props={content: "14 种红收敛为「拾光金 + 夜墨 + 雾白」三级体系，覆盖印刷与屏幕。", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="dk_solution_2_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_2_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_2_icon" props={iconName: "Type", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_2_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_2_name_cell" style="height:auto; width:auto"><Text id="dk_solution_2_name" props={content: "字体：三档字重，一条行高", tagName: "h3"}/></Container>
                    <Container id="dk_solution_2_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_2_desc" props={content: "标题 900 / 中标题 700 / 正文 400；正文行高统一 1.9，长文可读性优先。", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="dk_solution_3_cell" style="height:auto; width:100%">
              <FlexContainer id="dk_solution_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:20px; padding:20px 24px">
                <Container id="dk_solution_3_icon_cell" style="height:auto; width:auto"><Icon id="dk_solution_3_icon" props={iconName: "Shapes", iconSource: "lucide"}/></Container>
                <Container id="dk_solution_3_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="dk_solution_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                    <Container id="dk_solution_3_name_cell" style="height:auto; width:auto"><Text id="dk_solution_3_name" props={content: "图形：「光束切片」延展系统", tagName: "h3"}/></Container>
                    <Container id="dk_solution_3_desc_cell" style="height:auto; width:auto"><Text id="dk_solution_3_desc" props={content: "以 logo 的六束光为母题，切分出封面 / 分隔 / 角标三类可复用图形。", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
      <Container id="dk_solution_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_solution_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_solution_prev_cell" style="height:auto; width:auto"><Button id="dk_solution_prev" props={content: "上一页", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_solution_page_cell" style="height:auto; width:auto"><Text id="dk_solution_page" props={content: "03 / 05", tagName: "span"}/></Container>
          <Container id="dk_solution_next_cell" style="height:auto; width:auto"><Button id="dk_solution_next" props={content: "下一页 · 数据", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_solution_prev = { events: { prev: { trigger: "onClick", action: nav.to("/insight") } } };
      @dk_solution_next = { events: { next: { trigger: "onClick", action: nav.to("/data") } } };
    </script>
    <styles>
      @dk_solution_root = { background: #0d1f1a; }
      @dk_solution_eyebrow = { color: #d4af37; font-size: 14px; font-weight: 800; letter-spacing: 4px; }
      @dk_solution_title = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @dk_solution_1_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_2_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_3_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(245, 230, 184, 0.16); :scope { border: 1px solid rgba(212, 175, 55, 0.28); } }
      @dk_solution_1_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_2_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_3_icon = { color: #d4af37; font-size: 30px; }
      @dk_solution_1_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; }
      @dk_solution_2_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; }
      @dk_solution_3_name = { color: #f5e6b8; font-size: 18px; font-weight: 800; }
      @dk_solution_1_desc = { color: #9db8ab; font-size: 14px; line-height: 1.9; }
      @dk_solution_2_desc = { color: #9db8ab; font-size: 14px; line-height: 1.9; }
      @dk_solution_3_desc = { color: #9db8ab; font-size: 14px; line-height: 1.9; }
      @dk_solution_prev = { color: #9db8ab; background: transparent; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid rgba(157, 184, 171, 0.4); } :scope:hover { border-color: #9db8ab; } }
      @dk_solution_page = { color: #5f7a6d; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_solution_next = { color: #101d18; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 4. 数据 ══════════════ -->
  <Page id="data" name="数据" route="/data">
    <FlexContainer id="dk_data_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="dk_data_col" props={direction: "column"} style="height:auto; width:100%; max-width:1000px; align-items:center; gap:40px; padding:72px 64px 96px">
        <Container id="dk_data_head_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_data_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:10px">
            <Container id="dk_data_eyebrow_cell" style="height:auto; width:auto"><Text id="dk_data_eyebrow" props={content: "03 · 试运行数据", tagName: "span"}/></Container>
            <Container id="dk_data_title_cell" style="height:auto; width:100%"><Text id="dk_data_title" props={content: "上线 90 天后的变化", tagName: "h2"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="dk_data_stats_cell" style="height:auto; width:100%">
          <FlexContainer id="dk_data_stats_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:20px">
            <Container id="dk_data_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_1_value_cell" style="height:auto; width:100%"><Text id="dk_data_1_value" props={content: "+38%", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_1_label_cell" style="height:auto; width:100%"><Text id="dk_data_1_label" props={content: "物料制作效率提升", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_data_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_2_value_cell" style="height:auto; width:100%"><Text id="dk_data_2_value" props={content: "-62%", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_2_label_cell" style="height:auto; width:100%"><Text id="dk_data_2_label" props={content: "品牌违规物料数", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="dk_data_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="dk_data_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:28px 24px">
                <Container id="dk_data_3_value_cell" style="height:auto; width:100%"><Text id="dk_data_3_value" props={content: "4.7/5", tagName: "h2"} style="height:auto; width:100%"/></Container>
                <Container id="dk_data_3_label_cell" style="height:auto; width:100%"><Text id="dk_data_3_label" props={content: "内部设计满意度", tagName: "span"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
        <Container id="dk_data_note_cell" style="height:auto; width:100%">
          <Text id="dk_data_note" props={content: "注：数据来自 5 个渠道团队试运行问卷与物料审计抽样（n=212）。", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
      <Container id="dk_data_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:48px">
        <FlexContainer id="dk_data_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_data_prev_cell" style="height:auto; width:auto"><Button id="dk_data_prev" props={content: "上一页", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_data_page_cell" style="height:auto; width:auto"><Text id="dk_data_page" props={content: "04 / 05", tagName: "span"}/></Container>
          <Container id="dk_data_next_cell" style="height:auto; width:auto"><Button id="dk_data_next" props={content: "下一页 · 收尾", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @dk_data_prev = { events: { prev: { trigger: "onClick", action: nav.to("/solution") } } };
      @dk_data_next = { events: { next: { trigger: "onClick", action: nav.to("/end") } } };
    </script>
    <styles>
      @dk_data_root = { background: #f5f1e8; }
      @dk_data_eyebrow = { color: #b45309; font-size: 14px; font-weight: 800; letter-spacing: 4px; }
      @dk_data_title = { color: #1c1917; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @dk_data_1_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_2_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_3_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(13, 31, 26, 0.05); :scope { border: 1px solid #e7e0d2; } }
      @dk_data_1_value = { color: #b45309; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      @dk_data_2_value = { color: #0f766e; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      @dk_data_3_value = { color: #1d4ed8; font-size: 52px; font-weight: 900; letter-spacing: -2px; text-align: center; }
      @dk_data_1_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_2_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_3_label = { color: #57534e; font-size: 14px; font-weight: 600; text-align: center; }
      @dk_data_note = { color: #a8a29e; font-size: 13px; text-align: center; }
      @dk_data_prev = { color: #57534e; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e7e0d2; } :scope:hover { border-color: #a8a29e; } }
      @dk_data_page = { color: #a8a29e; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_data_next = { color: #1c1917; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>

  <!-- ══════════════ 5. 收尾 ══════════════ -->
  <Page id="end" name="收尾" route="/end">
    <FlexContainer id="dk_end_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">
      <FlexContainer id="dk_end_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:center; gap:22px; padding:72px 64px">
        <Container id="dk_end_icon_cell" style="height:auto; width:auto"><Icon id="dk_end_icon" props={iconName: "Aperture", iconSource: "lucide"}/></Container>
        <Container id="dk_end_title_cell" style="height:auto; width:100%"><Text id="dk_end_title" props={content: "让每一次曝光，都有拾光的样子", tagName: "h2"} style="height:auto; width:100%"/></Container>
        <Container id="dk_end_desc_cell" style="height:auto; width:100%"><Text id="dk_end_desc" props={content: "完整品牌手册与源文件已同步到团队资料库；下周一起启用新物料模板。", tagName: "p"} style="height:auto; width:100%"/></Container>
        <Container id="dk_end_contact_cell" style="height:auto; width:100%"><Text id="dk_end_contact" props={content: "品牌组 · brand@seeklicht.example.com · 分机 8221", tagName: "span"} style="height:auto; width:100%"/></Container>
      </FlexContainer>
      <Container id="dk_end_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; max-width:1000px; padding-top:52px">
        <FlexContainer id="dk_end_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
          <Container id="dk_end_prev_cell" style="height:auto; width:auto"><Button id="dk_end_prev" props={content: "上一页", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="dk_end_page_cell" style="height:auto; width:auto"><Text id="dk_end_page" props={content: "05 / 05", tagName: "span"}/></Container>
          <Container id="dk_end_restart_cell" style="height:auto; width:auto"><Button id="dk_end_restart" props={content: "回到封面", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
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
      @dk_end_desc = { color: #9db8ab; font-size: 16px; line-height: 1.9; text-align: center; }
      @dk_end_contact = { color: #5f7a6d; font-size: 13px; letter-spacing: 1px; text-align: center; }
      @dk_end_prev = { color: #9db8ab; background: transparent; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid rgba(157, 184, 171, 0.4); } :scope:hover { border-color: #9db8ab; } }
      @dk_end_page = { color: #5f7a6d; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @dk_end_restart = { color: #101d18; background: #d4af37; border-radius: 10px; font-size: 13px; font-weight: 800; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b8962e; } }
    </styles>
  </Page>
</App>
```

> 制作要点：Deck = 多页幻灯片（每页 `min-height:100vh` 居中排版 + 底栏页码/导航）；翻页走 `nav.to`（快捷键基建缺口下用按钮通道）；深浅页交替（封面/方案/收尾深、洞察/数据浅）形成提案节奏。
>
> 质感升级（2026-09-14，规则 16）——涂装/留白分层修复 ×14（封面与四个内页的**页根渐变曾内缩**、九张卡描边贴内容——padding 全部下沉内层）；封面金色标题辉光 + 第二光斑 + 按钮内高光；内页白卡投影、金边玻璃卡内高光。
