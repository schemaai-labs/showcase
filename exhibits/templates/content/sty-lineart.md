# 线描插画风 — 「一笔」独立插画工作室

> 模板定位（内容 / 品牌 tab · 风格系列）：线描插画（Line Art）——米白纸底 + 单色墨线、细描边 SVG 插画（无填充、只走线）、大量留白与细衬线感排印（大字距小字号）、克制到近乎素净。**插画即内容**：所有画面由线条构成。
> 场景需求：给一间虚构的独立插画工作室做作品页：首屏大字与小注 + 右侧线描插画（月相 / 手 / 植物）；三件作品（线描构成 + 名称 + 纸品规格）；一句话自述；委托 CTA；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="一笔 — 独立插画工作室">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="la_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="la_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="la_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:22px 56px">
          <Container id="la_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="la_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="la_nav_mark_cell" style="height:26px; width:26px; flex-shrink:0">
                <Svg id="la_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26' fill='none'><path d='M3,23 C6,12 12,4 23,3' stroke='#1C1B18' stroke-width='1.6' stroke-linecap='round'/><circle cx='19' cy='7' r='2.2' fill='#B4552D'/></svg>", ariaLabel: "一笔标志"} style="height:26px; width:26px"/>
              </Container>
              <Container id="la_nav_word_cell" style="height:auto; width:auto"><Text id="la_nav_word" props={content: "一笔 · ONE LINE", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="la_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="la_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="la_nav_i1" props={itemLabel: "作品", itemTarget: "la_work_region"} style="height:auto; width:auto"/>
              <Container id="la_nav_i2" props={itemLabel: "关于", itemTarget: "la_about_region"} style="height:auto; width:auto"/>
              <Container id="la_nav_i3" props={itemLabel: "委托", itemTarget: "la_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="la_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="la_nav_cta" props={content: "hello@oneline.studio", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏 ─── -->
      <Container id="la_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="la_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:72px 56px 96px; gap:72px; align-items:center">
          <Container id="la_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="la_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:26px; align-items:flex-start">
              <Container id="la_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="la_hero_eyebrow" props={content: "插画 · 出版物 · 委托", tagName: "span"}/></Container>
              <Container id="la_hero_title_cell" style="height:auto; width:auto">
                <FlexContainer id="la_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
                  <Container id="la_hero_l1_cell" style="height:auto; width:auto"><Text id="la_hero_l1" props={content: "用一根线，", tagName: "h1"}/></Container>
                  <Container id="la_hero_l2_cell" style="height:auto; width:auto; padding-left:110px"><Text id="la_hero_l2" props={content: "说完整件事", tagName: "h1"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="la_hero_sub_cell" style="height:auto; width:100%; max-width:470px"><Text id="la_hero_sub" props={content: "不画阴影，不铺颜色。落笔之前先想清楚：这条线为什么存在。如果答不上来，就擦掉。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="la_hero_meta_cell" style="height:auto; width:auto; padding-top:8px"><Text id="la_hero_meta" props={content: "为杂志、书籍与品牌绘制 · 每月只接两单", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="la_hero_fig_cell" style="height:auto; width:460px; flex-shrink:0">
            <Container id="la_hero_fig" style="height:480px; width:100%">
              <Svg id="la_hero_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 480' fill='none' stroke='#1C1B18' stroke-width='1.4' stroke-linecap='round'><circle cx='230' cy='200' r='120'/><circle cx='230' cy='200' r='86' stroke-dasharray='3 7' opacity='0.7'/><path d='M110,200 a120,120 0 0 1 240,0' opacity='0.9'/><path d='M150,140 q26,-30 52,0' opacity='0.8'/><path d='M258,140 q26,-30 52,0' opacity='0.8'/><path d='M180,236 q50,34 100,0' opacity='0.9'/><path d='M60,380 q60,-26 120,0 t120,0 t120,0' opacity='0.6'/><circle cx='352' cy='96' r='5' fill='#B4552D' stroke='none'/><path d='M394,300 q22,-26 10,-52' opacity='0.5'/><path d='M62,120 q18,10 8,30' opacity='0.5'/></svg>", ariaLabel: "线描插画：月相与面孔"} style="height:480px; width:100%"/>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 作品 ─── -->
      <Container id="la_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="la_work_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px 96px; gap:44px">
          <Container id="la_work_head_cell" style="height:auto; width:100%">
            <FlexContainer id="la_work_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="la_work_label_cell" style="height:auto; width:auto"><Text id="la_work_label" props={content: "近期作品 · SELECTED", tagName: "span"}/></Container>
              <Container id="la_work_rule_cell" style="height:1px; flex-basis:0; flex-grow:1; width:100%"><Container id="la_work_rule" style="height:1px; width:100%"/></Container>
              <Container id="la_work_count_cell" style="height:auto; width:auto"><Text id="la_work_count" props={content: "2024 — 2026 选三", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="la_work_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="la_work_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:30px; align-items:stretch">
              <Container id="la_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="la_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="la_c1_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="la_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 300' fill='none' stroke='#1C1B18' stroke-width='1.3'><path d='M60,240 q30,-120 120,-150 q70,-22 120,40' /><path d='M84,252 q28,-100 110,-126' opacity='0.6'/><circle cx='272' cy='96' r='16'/><circle cx='272' cy='96' r='5' fill='#B4552D' stroke='none'/><path d='M40,272 h280' opacity='0.5'/><path d='M120,150 q6,-24 -4,-40 M150,132 q8,-22 0,-38' opacity='0.7'/></svg>", ariaLabel: "作品一 线描构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="la_c1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                    <Container id="la_c1_name_cell" style="height:auto; width:auto"><Text id="la_c1_name" props={content: "《生长的语法》", tagName: "h3"}/></Container>
                    <Container id="la_c1_desc_cell" style="height:auto; width:100%"><Text id="la_c1_desc" props={content: "《城市画报》2025 年度专栏 · 12 期 · 单色印刷", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="la_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="la_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="la_c2_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="la_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 300' fill='none' stroke='#1C1B18' stroke-width='1.3'><path d='M110,60 q-24,90 10,180 q10,26 40,26 q30,0 40,-26 q34,-90 10,-180'/><path d='M138,66 q-8,80 12,160' opacity='0.5'/><path d='M170,66 q6,80 -8,160' opacity='0.5'/><path d='M96,120 q84,30 168,0' opacity='0.7'/><path d='M96,186 q84,26 168,0' opacity='0.5'/><circle cx='258' cy='84' r='3.4' fill='#1C1B18' stroke='none'/></svg>", ariaLabel: "作品二 线描构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="la_c2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                    <Container id="la_c2_name_cell" style="height:auto; width:auto"><Text id="la_c2_name" props={content: "《容器》", tagName: "h3"}/></Container>
                    <Container id="la_c2_desc_cell" style="height:auto; width:100%"><Text id="la_c2_desc" props={content: "茶器品牌包装插画 · 6 款 · 烫黑工艺", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="la_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="la_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="la_c3_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="la_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 300' fill='none' stroke='#1C1B18' stroke-width='1.3'><rect x='70' y='60' width='220' height='180'/><path d='M70,60 L290,240 M290,60 L70,240' opacity='0.25'/><circle cx='180' cy='150' r='54'/><path d='M126,150 a54,54 0 0 1 108,0' opacity='0.8'/><circle cx='180' cy='150' r='10' fill='#B4552D' stroke='none'/><path d='M70,270 h220' opacity='0.5'/></svg>", ariaLabel: "作品三 线描构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="la_c3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                    <Container id="la_c3_name_cell" style="height:auto; width:auto"><Text id="la_c3_name" props={content: "《圆规实验》", tagName: "h3"}/></Container>
                    <Container id="la_c3_desc_cell" style="height:auto; width:100%"><Text id="la_c3_desc" props={content: "个人 zine · 32 页 · 手工装订 300 册", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 自述 + CTA ─── -->
      <Container id="la_about_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="la_about_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 56px 96px; gap:64px; align-items:flex-start">
          <Container id="la_about_left_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="la_about_label" props={content: "关于 · ABOUT", tagName: "span"}/></Container>
          <Container id="la_about_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="la_about_body_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="la_about_q_cell" style="height:auto; width:100%; max-width:760px"><Text id="la_about_q" props={content: "画画十四年，最满意的仍然是最短的那根线。", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="la_about_p_cell" style="height:auto; width:100%; max-width:620px"><Text id="la_about_p" props={content: "工作室只有一个人：从草稿、上墨到和印厂对纸，都自己做。稿费按张计算，交稿周期两周起——着急的项目我会直接说不。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <Container id="la_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="la_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px 104px; gap:22px; align-items:flex-start">
          <Container id="la_cta_title_cell" style="height:auto; width:auto"><Text id="la_cta_title" props={content: "聊聊你想画的东西", tagName: "h2"}/></Container>
          <Container id="la_cta_btn_cell" style="height:auto; width:auto">
            <Container id="la_cta_btn" style="height:auto; width:auto; padding:14px 36px">
              <Text id="la_cta_btn_txt" props={content: "写信委托 · hello@oneline.studio", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 页脚 ─── -->
      <Container id="la_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="la_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 56px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="la_footer_left_cell" style="height:auto; width:auto"><Text id="la_footer_left" props={content: "© 2026 一笔工作室 · 作品均为虚构演示", tagName: "span"}/></Container>
          <Container id="la_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="la_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:30px; align-items:center">
              <Container id="la_footer_f1_cell" style="height:auto; width:auto"><Text id="la_footer_f1" props={content: "小红书", tagName: "span"}/></Container>
              <Container id="la_footer_f2_cell" style="height:auto; width:auto"><Text id="la_footer_f2" props={content: "Behance", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 页面基调（纸白） ──
      @la_root = { background: #FBF9F4; }

      # ── 导航 ──
      @la_nav_region = { background: rgba(251, 249, 244, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(28, 27, 24, 0.12); }
      @la_nav_word = { color: #1C1B18; font-size: 13.5px; font-weight: 700; letter-spacing: 4.4px; }
      @la_nav_menu = {
        :scope { --anchor-item-color: rgba(28, 27, 24, 0.66); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 500; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #B4552D; --anchor-item-active-bg: transparent; --anchor-gap: 44px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 3px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B4552D; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 1px solid #B4552D; }
      }
      @la_nav_cta = { color: rgba(28, 27, 24, 0.55); font-size: 12.5px; letter-spacing: 1.6px; }

      # ── 首屏 ──
      @la_hero_eyebrow = { color: rgba(28, 27, 24, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 5px; }
      @la_hero_l1 = { color: #1C1B18; font-size: 78px; font-weight: 700; letter-spacing: 2px; line-height: 1.3; }
      @la_hero_l2 = { color: #1C1B18; font-size: 78px; font-weight: 700; letter-spacing: 2px; line-height: 1.3; }
      @la_hero_sub = { color: rgba(28, 27, 24, 0.62); font-size: 15px; line-height: 2.2; letter-spacing: 0.6px; }
      @la_hero_meta = { color: rgba(28, 27, 24, 0.45); font-size: 12.5px; letter-spacing: 2.2px; }

      # ── 作品 ──
      @la_work_label = { color: #B4552D; font-size: 12px; font-weight: 700; letter-spacing: 4.4px; }
      @la_work_rule = { background: rgba(28, 27, 24, 0.25); }
      @la_work_count = { color: rgba(28, 27, 24, 0.45); font-size: 12px; letter-spacing: 2.2px; }
      @la_c1_name = { color: #1C1B18; font-size: 20px; font-weight: 700; letter-spacing: 1.6px; }
      @la_c2_name = { color: #1C1B18; font-size: 20px; font-weight: 700; letter-spacing: 1.6px; }
      @la_c3_name = { color: #1C1B18; font-size: 20px; font-weight: 700; letter-spacing: 1.6px; }
      @la_c1_desc = { color: rgba(28, 27, 24, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @la_c2_desc = { color: rgba(28, 27, 24, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @la_c3_desc = { color: rgba(28, 27, 24, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @la_c1_fig_cell = { border: 1px solid rgba(28, 27, 24, 0.14); transition: border-color 0.3s ease; :scope:hover { border-color: rgba(180, 85, 45, 0.5); } }
      @la_c2_fig_cell = { border: 1px solid rgba(28, 27, 24, 0.14); transition: border-color 0.3s ease; :scope:hover { border-color: rgba(180, 85, 45, 0.5); } }
      @la_c3_fig_cell = { border: 1px solid rgba(28, 27, 24, 0.14); transition: border-color 0.3s ease; :scope:hover { border-color: rgba(180, 85, 45, 0.5); } }

      # ── 自述 / CTA ──
      @la_about_label = { color: rgba(28, 27, 24, 0.45); font-size: 12px; font-weight: 600; letter-spacing: 4.4px; }
      @la_about_q = { color: #1C1B18; font-size: 28px; font-weight: 700; letter-spacing: 1.2px; line-height: 1.9; }
      @la_about_p = { color: rgba(28, 27, 24, 0.62); font-size: 14.5px; line-height: 2.2; }
      @la_cta_title = { color: #1C1B18; font-size: 44px; font-weight: 700; letter-spacing: 1.6px; }
      @la_cta_btn = { border: 1.5px solid #1C1B18; transition: background 0.3s ease, color 0.3s ease; :scope:hover { background: #1C1B18; } :scope:hover > * { color: #FBF9F4; } }
      @la_cta_btn_txt = { color: #1C1B18; font-size: 14px; font-weight: 600; letter-spacing: 1.6px; }

      # ── 页脚 ──
      @la_footer_row = { border-top: 1px solid rgba(28, 27, 24, 0.14); }
      @la_footer_left = { color: rgba(28, 27, 24, 0.4); font-size: 12px; letter-spacing: 0.8px; }
      @la_footer_f1 = { color: rgba(28, 27, 24, 0.62); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
      @la_footer_f2 = { color: rgba(28, 27, 24, 0.62); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
    </styles>
  </Page>
</App>
```
