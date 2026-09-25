# 包豪斯风 — 「几何工作室 GÉOMÉTRIE」设计工作室官网

> 模板定位（营销 / 增长 tab · 风格系列）：包豪斯（Bauhaus）视觉语言——三原色 + 黑 + 米白纸感、基本形（圆 / 半圆 / 三角 / 粗线）与大字重排印。**版式型模板**：首屏错位超大字 + 几何装饰叠层、作品区阶梯错位卡、黑底宣言带与红底 CTA 构成节奏断层——刻意打破等宽三栏的常规骨架。
> 场景需求：给一家虚构设计工作室做官网：米白纸感底 + 黑 / 红 / 黄 / 蓝四色体系；首屏「形式 / 追随 / 功能」三行阶梯错位大字（第三行红字点题）+ 几何构成装饰层（红圆 / 黄圆 / 蓝弧 / 黑三角）；黑底宣言带（圆 / 方 / 三角三枚徽记卡）；三张阶梯错位作品卡（纯 svg 几何视觉 + 大编号）；数字带；7:5 不对称「方法」分栏；红底 CTA；黑底页脚。零位图资产（几何全部手写 svg）、零 API、静态数据、两组入场编排（首屏 onMount / 作品卡 onView）。

```lang
<App dsl-version="0.3" name="几何工作室 GÉOMÉTRIE — 包豪斯风格官网">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="bh_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（纸感底 + 三色马克） ─── -->
      <Container id="bh_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="bh_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 56px">
          <Container id="bh_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="bh_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="bh_nav_mark_cell" style="height:38px; width:38px; flex-shrink:0">
                <Svg id="bh_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'><rect x='0' y='0' width='18' height='18' fill='#D8342C'/><circle cx='28.5' cy='9' r='9' fill='#F0B429'/><polygon points='9,38 0,21 18,21' fill='#1F4FA8'/><rect x='20' y='21' width='18' height='17' fill='#141414'/></svg>", ariaLabel: "几何工作室标志"} style="height:38px; width:38px"/>
              </Container>
              <Container id="bh_nav_word_cell" style="height:auto; width:auto">
                <FlexContainer id="bh_nav_word_col" props={direction: "column"} style="height:auto; width:auto; gap:3px">
                  <Container id="bh_nav_word_cn_cell" style="height:auto; width:auto"><Text id="bh_nav_word_cn" props={content: "几何工作室", tagName: "span"}/></Container>
                  <Container id="bh_nav_word_en_cell" style="height:auto; width:auto"><Text id="bh_nav_word_en" props={content: "GÉOMÉTRIE STUDIO", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="bh_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="bh_nav_i1" props={itemLabel: "作品", itemTarget: "bh_work_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i2" props={itemLabel: "方法", itemTarget: "bh_method_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i3" props={itemLabel: "工作室", itemTarget: "bh_manifesto_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i4" props={itemLabel: "联系", itemTarget: "bh_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="bh_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="bh_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="bh_nav_cta_txt" props={content: "聊聊项目", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（几何装饰叠层 + 阶梯错位大字） ─── -->
      <Container id="bh_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="bh_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="bh_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 880' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='28' cy='-26' r='212' fill='#D8342C' opacity='0.95'/><circle cx='1338' cy='128' r='164' fill='#F0B429'/><path d='M1180,880 A220,220 0 0 1 1400,660 L1400,880 Z' fill='#1F4FA8'/><polygon points='96,880 244,880 170,778' fill='#141414' opacity='0.9'/><line x1='0' y1='470' x2='1440' y2='470' stroke='#141414' stroke-width='1' opacity='0.16'/><line x1='0' y1='504' x2='1440' y2='504' stroke='#141414' stroke-width='1' opacity='0.09'/><rect x='872' y='238' width='132' height='14' fill='#141414'/><circle cx='1104' cy='304' r='26' stroke='#141414' stroke-width='2'/><circle cx='1180' cy='304' r='26' stroke='#141414' stroke-width='2' opacity='0.55'/><circle cx='1256' cy='304' r='26' stroke='#141414' stroke-width='2' opacity='0.3'/><path d='M620,880 A300,300 0 0 1 920,580' stroke='#D8342C' stroke-width='3' opacity='0.45'/></svg>", ariaLabel: "首屏几何构成：红圆 / 黄圆 / 蓝弧 / 黑三角装饰层"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="bh_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:88px 56px 0px; position:relative; z-index:1; align-items:flex-start">
          <Container id="bh_hero_eyebrow_cell" style="height:auto; width:auto">
            <Container id="bh_hero_eyebrow" style="height:auto; width:auto; padding:8px 16px">
              <Text id="bh_hero_eyebrow_txt" props={content: "包豪斯风格 · 设计工作室 · 上海 / 柏林", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="bh_hero_main_cell" style="height:auto; width:100%; padding-top:44px">
            <FlexContainer id="bh_hero_main_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:56px">
              <Container id="bh_hero_type_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_hero_type_col" props={direction: "column"} style="height:auto; width:100%; gap:4px; align-items:flex-start">
                  <Container id="bh_hero_l1_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_hero_l1_row" props={direction: "row"} style="height:auto; width:auto; align-items:flex-end; gap:26px">
                      <Container id="bh_hero_l1_big_cell" style="height:auto; width:auto"><Text id="bh_hero_l1_big" props={content: "形式", tagName: "h1"}/></Container>
                      <Container id="bh_hero_l1_en_cell" style="height:auto; width:auto; padding-bottom:16px"><Text id="bh_hero_l1_en" props={content: "FORM", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_hero_l2_cell" style="height:auto; width:auto; padding-left:132px">
                    <FlexContainer id="bh_hero_l2_row" props={direction: "row"} style="height:auto; width:auto; align-items:flex-end; gap:26px">
                      <Container id="bh_hero_l2_big_cell" style="height:auto; width:auto"><Text id="bh_hero_l2_big" props={content: "追随", tagName: "h1"}/></Container>
                      <Container id="bh_hero_l2_en_cell" style="height:auto; width:auto; padding-bottom:16px"><Text id="bh_hero_l2_en" props={content: "FOLLOWS", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_hero_l3_cell" style="height:auto; width:auto; padding-left:264px">
                    <FlexContainer id="bh_hero_l3_row" props={direction: "row"} style="height:auto; width:auto; align-items:flex-end; gap:26px">
                      <Container id="bh_hero_l3_big_cell" style="height:auto; width:auto"><Text id="bh_hero_l3_big" props={content: "功能", tagName: "h1"}/></Container>
                      <Container id="bh_hero_l3_en_cell" style="height:auto; width:auto; padding-bottom:16px"><Text id="bh_hero_l3_en" props={content: "FUNCTION", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_hero_side_cell" style="height:auto; width:336px; flex-shrink:0">
                <FlexContainer id="bh_hero_side_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
                  <Container id="bh_hero_side_rule_cell" style="height:4px; width:64px; flex-shrink:0"><Container id="bh_hero_side_rule" style="height:4px; width:64px"/></Container>
                  <Container id="bh_hero_side_desc_cell" style="height:auto; width:100%"><Text id="bh_hero_side_desc" props={content: "成立于 2017 年。我们以现代主义的几何语言，为品牌、空间与数字产品建立清晰秩序。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="bh_hero_side_meta_cell" style="height:auto; width:100%">
                    <FlexContainer id="bh_hero_side_meta_col" props={direction: "column"} style="height:auto; width:100%; gap:10px">
                      <Container id="bh_hero_meta_1_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_1" props={content: "坐标 — 上海 · 柏林", tagName: "span"}/></Container>
                      <Container id="bh_hero_meta_2_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_2" props={content: "成立 — 2017", tagName: "span"}/></Container>
                      <Container id="bh_hero_meta_3_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_3" props={content: "项目 — 142", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_hero_bar_cell" style="height:auto; width:100%; padding-top:76px">
            <FlexContainer id="bh_hero_bar_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_hero_bars_cell" style="height:auto; width:100%">
                <FlexContainer id="bh_hero_bars_row" props={direction: "row"} style="height:auto; width:100%; gap:0px; align-items:flex-end">
                  <Container id="bh_hero_bar_r_cell" style="height:34px; width:320px; flex-shrink:0"><Container id="bh_hero_bar_r" style="height:34px; width:320px"/></Container>
                  <Container id="bh_hero_bar_y_cell" style="height:34px; width:180px; flex-shrink:0"><Container id="bh_hero_bar_y" style="height:34px; width:180px"/></Container>
                  <Container id="bh_hero_bar_b_cell" style="height:34px; width:96px; flex-shrink:0"><Container id="bh_hero_bar_b" style="height:34px; width:96px"/></Container>
                  <Container id="bh_hero_bar_k_cell" style="height:34px; flex-basis:0; flex-grow:1; width:100%"><Container id="bh_hero_bar_k" style="height:34px; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_hero_barcap_cell" style="height:auto; width:100%; padding:14px 0px 26px">
                <FlexContainer id="bh_hero_barcap_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center">
                  <Container id="bh_hero_barcap_l_cell" style="height:auto; width:auto"><Text id="bh_hero_barcap_l" props={content: "圆 · 方 · 三角 — 我们最基本的三种工具", tagName: "span"}/></Container>
                  <Container id="bh_hero_barcap_r_cell" style="height:auto; width:auto"><Text id="bh_hero_barcap_r" props={content: "向下滚动 ↓", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 宣言带（黑底 + 基本形徽记） ─── -->
      <Container id="bh_manifesto_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_manifesto_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 88px; gap:56px">
          <Container id="bh_manifesto_head_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_manifesto_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:16px">
              <Container id="bh_manifesto_chip_cell" style="height:14px; width:14px; flex-shrink:0"><Container id="bh_manifesto_chip" style="height:14px; width:14px"/></Container>
              <Container id="bh_manifesto_label_cell" style="height:auto; width:auto"><Text id="bh_manifesto_label" props={content: "宣言 · MANIFESTO", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_manifesto_body_cell" style="height:auto; width:100%; max-width:1080px">
            <FlexContainer id="bh_manifesto_body_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; align-items:flex-start">
              <Container id="bh_manifesto_l1_cell" style="height:auto; width:auto"><Text id="bh_manifesto_l1" props={content: "我们用圆、方、三角，", tagName: "h2"}/></Container>
              <Container id="bh_manifesto_l2_cell" style="height:auto; width:auto"><Text id="bh_manifesto_l2" props={content: "为真实世界建立秩序。", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_forms_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_forms_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="bh_form_circle_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_circle_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_circle_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_circle_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><circle cx='28' cy='28' r='26' stroke='#F0B429' stroke-width='3' fill='none'/></svg>", ariaLabel: "圆形徽记"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_circle_name_cell" style="height:auto; width:auto"><Text id="bh_form_circle_name" props={content: "圆形", tagName: "h3"}/></Container>
                  <Container id="bh_form_circle_desc_cell" style="height:auto; width:100%"><Text id="bh_form_circle_desc" props={content: "无限与循环。品牌标记的出发点——从一根线闭合成整体。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_form_square_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_square_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_square_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_square_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><rect x='3' y='3' width='50' height='50' stroke='#D8342C' stroke-width='3' fill='none'/></svg>", ariaLabel: "方形徽记"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_square_name_cell" style="height:auto; width:auto"><Text id="bh_form_square_name" props={content: "方形", tagName: "h3"}/></Container>
                  <Container id="bh_form_square_desc_cell" style="height:auto; width:100%"><Text id="bh_form_square_desc" props={content: "秩序与版面。网格是一切排印问题的答案——先立规矩，再谈自由。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_form_triangle_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_triangle_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_triangle_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_triangle_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><polygon points='28,3 53,50 3,50' stroke='#1F4FA8' stroke-width='3' fill='none' stroke-linejoin='round'/></svg>", ariaLabel: "三角徽记"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_triangle_name_cell" style="height:auto; width:auto"><Text id="bh_form_triangle_name" props={content: "三角", tagName: "h3"}/></Container>
                  <Container id="bh_form_triangle_desc_cell" style="height:auto; width:100%"><Text id="bh_form_triangle_desc" props={content: "张力与方向。当平面需要一点不稳定感，三角形负责把视线带走。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 作品（阶梯错位卡） ─── -->
      <Container id="bh_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_work_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 128px; gap:64px">
          <Container id="bh_work_head_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_work_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="bh_work_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="bh_work_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:16px; align-items:flex-start">
                  <Container id="bh_work_label_cell" style="height:auto; width:auto"><Text id="bh_work_label" props={content: "精选作品 · SELECTED WORKS", tagName: "span"}/></Container>
                  <Container id="bh_work_title_cell" style="height:auto; width:auto"><Text id="bh_work_title" props={content: "少即是多", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_work_head_r_cell" style="height:auto; width:360px; flex-shrink:0">
                <Text id="bh_work_head_note" props={content: "三个项目，三种基本形。我们总从最少的元素开始——直到不能再减。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_work_reveal_cell" style="height:auto; width:100%">
          <Animate id="bh_work_reveal" props={direction: "row", effect: "fadeInUp", trigger: "onView", triggerThreshold: 0.2, stagger: 130, duration: "slow"} style="height:auto; width:100%; gap:32px; align-items:flex-start">
            <Container id="bh_w1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_w1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w1_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#141414'/><circle cx='200' cy='150' r='104' fill='#D8342C'/><rect x='296' y='46' width='104' height='104' fill='#F0B429'/><path d='M0,300 A120,120 0 0 1 120,180 L120,300 Z' fill='#F4F1EA'/></svg>", ariaLabel: "百年包豪斯特展 几何视觉"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w1_num_cell" style="height:auto; width:auto"><Text id="bh_w1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="bh_w1_name_cell" style="height:auto; width:auto"><Text id="bh_w1_name" props={content: "百年包豪斯特展 · 视觉系统", tagName: "h3"}/></Container>
                  <Container id="bh_w1_meta_cell" style="height:auto; width:auto"><Text id="bh_w1_meta" props={content: "2024 · 展览视觉 · 导视 / 海报 / 数字展陈", tagName: "span"}/></Container>
                  <Container id="bh_w1_desc_cell" style="height:auto; width:100%"><Text id="bh_w1_desc" props={content: "以圆与半圆重建展览的视觉秩序——一枚徽记贯穿 400 米的参观动线。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
            <Container id="bh_w2_cell" style="height:auto; flex-basis:0; flex-grow:1; padding-top:64px; width:100%">
              <FlexContainer id="bh_w2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w2_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#1F4FA8'/><polygon points='200,42 348,264 52,264' fill='#F4F1EA'/><circle cx='200' cy='196' r='42' fill='#141414'/><rect x='24' y='24' width='56' height='56' fill='#F0B429'/></svg>", ariaLabel: "城市家具计划 导视构成"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w2_num_cell" style="height:auto; width:auto"><Text id="bh_w2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="bh_w2_name_cell" style="height:auto; width:auto"><Text id="bh_w2_name" props={content: "城市家具计划 · 导视系统", tagName: "h3"}/></Container>
                  <Container id="bh_w2_meta_cell" style="height:auto; width:auto"><Text id="bh_w2_meta" props={content: "2023 · 空间导视 · 标识 / 灯箱 / 地图", tagName: "span"}/></Container>
                  <Container id="bh_w2_desc_cell" style="height:auto; width:100%"><Text id="bh_w2_desc" props={content: "为滨江公共空间设计一套可生长的标识系统：三角箭头是全部导向的母题。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
            <Container id="bh_w3_cell" style="height:auto; flex-basis:0; flex-grow:1; padding-top:128px; width:100%">
              <FlexContainer id="bh_w3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w3_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#F0B429'/><rect x='56' y='56' width='128' height='188' fill='#141414'/><rect x='216' y='56' width='128' height='88' fill='#D8342C'/><circle cx='280' cy='200' r='44' fill='#1F4FA8'/><line x1='0' y1='150' x2='400' y2='150' stroke='#F4F1EA' stroke-width='2' opacity='0.6'/></svg>", ariaLabel: "新即物主义海报集 构成"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w3_num_cell" style="height:auto; width:auto"><Text id="bh_w3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="bh_w3_name_cell" style="height:auto; width:auto"><Text id="bh_w3_name" props={content: "新即物主义 · 海报集", tagName: "h3"}/></Container>
                  <Container id="bh_w3_meta_cell" style="height:auto; width:auto"><Text id="bh_w3_meta" props={content: "2022 · 平面出版 · 丝网印刷 / 12 张", tagName: "span"}/></Container>
                  <Container id="bh_w3_desc_cell" style="height:auto; width:100%"><Text id="bh_w3_desc" props={content: "方形网格套印三原色：12 张海报，一次对「客观」的练习。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
          </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 数字带 ─── -->
      <Container id="bh_numbers_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bh_numbers_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="bh_numbers_rule_cell" style="height:2px; width:100%; flex-shrink:0"><Container id="bh_numbers_rule" style="height:2px; width:100%"/></Container>
          <FlexContainer id="bh_numbers_row" props={direction: "row"} style="height:auto; width:100%; padding:48px 0px 56px; gap:32px; align-items:flex-start">
            <Container id="bh_n1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n1_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n1_num_cell" style="height:auto; width:auto"><Text id="bh_n1_num" props={content: "142", tagName: "h3"}/></Container>
                <Container id="bh_n1_label_cell" style="height:auto; width:auto"><Text id="bh_n1_label" props={content: "已完成项目", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n2_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n2_num_cell" style="height:auto; width:auto"><Text id="bh_n2_num" props={content: "26", tagName: "h3"}/></Container>
                <Container id="bh_n2_label_cell" style="height:auto; width:auto"><Text id="bh_n2_label" props={content: "国际设计奖项", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n3_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n3_num_cell" style="height:auto; width:auto"><Text id="bh_n3_num" props={content: "9", tagName: "h3"}/></Container>
                <Container id="bh_n3_label_cell" style="height:auto; width:auto"><Text id="bh_n3_label" props={content: "年持续耕耘", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n4_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n4_num_cell" style="height:auto; width:auto"><Text id="bh_n4_num" props={content: "4", tagName: "h3"}/></Container>
                <Container id="bh_n4_label_cell" style="height:auto; width:auto"><Text id="bh_n4_label" props={content: "座城市协作", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 方法（7:5 不对称分栏） ─── -->
      <Container id="bh_method_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_method_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 56px 96px; gap:72px; align-items:flex-start">
          <Container id="bh_method_left_cell" style="height:auto; flex-basis:0; flex-grow:7; width:100%">
            <FlexContainer id="bh_method_left_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="bh_method_label_cell" style="height:auto; width:auto"><Text id="bh_method_label" props={content: "工作室 · STUDIO", tagName: "span"}/></Container>
              <Container id="bh_method_title_cell" style="height:auto; width:auto"><Text id="bh_method_title" props={content: "我们不卖风格，", tagName: "h2"}/></Container>
              <Container id="bh_method_title2_cell" style="height:auto; width:auto"><Text id="bh_method_title2" props={content: "我们解决问题。", tagName: "h2"}/></Container>
              <Container id="bh_method_desc_cell" style="height:auto; width:100%; max-width:560px; padding-top:10px">
                <Text id="bh_method_desc" props={content: "一间十四个人的工作室：平面、空间与数字团队共用一张长桌。包豪斯留给我们的不是一种样式，而是一种工作方法——从问题出发，用最少的元素抵达答案。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_method_right_cell" style="height:auto; flex-basis:0; flex-grow:5; width:100%">
            <FlexContainer id="bh_method_right_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_m1_cell" style="height:auto; width:100%; padding:26px 0px 26px">
                <FlexContainer id="bh_m1_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m1_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="bh_m1_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m1_name_cell" style="height:auto; width:auto"><Text id="bh_m1_name" props={content: "观察", tagName: "h3"}/></Container>
                      <Container id="bh_m1_desc_cell" style="height:auto; width:100%"><Text id="bh_m1_desc" props={content: "先看清问题，再动手。多数项目死在跳过这一步。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_m2_cell" style="height:auto; width:100%; padding:26px 0px 26px">
                <FlexContainer id="bh_m2_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m2_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="bh_m2_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m2_name_cell" style="height:auto; width:auto"><Text id="bh_m2_name" props={content: "提纯", tagName: "h3"}/></Container>
                      <Container id="bh_m2_desc_cell" style="height:auto; width:100%"><Text id="bh_m2_desc" props={content: "把复杂的事物化简为基本形——删到不能再删为止。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_m3_cell" style="height:auto; width:100%; padding:26px 0px 0px">
                <FlexContainer id="bh_m3_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m3_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="bh_m3_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m3_name_cell" style="height:auto; width:auto"><Text id="bh_m3_name" props={content: "建造", tagName: "h3"}/></Container>
                      <Container id="bh_m3_desc_cell" style="height:auto; width:100%"><Text id="bh_m3_desc" props={content: "像工程师一样，把形式落到像素与毫米。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 红底 CTA ─── -->
      <Container id="bh_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 56px 100px; gap:40px; align-items:flex-start; position:relative; overflow:hidden">
          <Container id="bh_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="bh_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 520' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='1310' cy='430' r='230' stroke='#F4F1EA' stroke-width='2' opacity='0.5'/><circle cx='1310' cy='430' r='150' stroke='#F4F1EA' stroke-width='2' opacity='0.35'/><rect x='1186' y='286' width='86' height='86' fill='#F0B429'/><polygon points='1180,90 1248,90 1214,32' fill='#F4F1EA' opacity='0.7'/></svg>", ariaLabel: "CTA 区几何装饰"} style="height:100%; width:100%"/>
          </Container>
          <Container id="bh_cta_label_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="bh_cta_label_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
              <Container id="bh_cta_chip_cell" style="height:14px; width:14px; flex-shrink:0"><Container id="bh_cta_chip" style="height:14px; width:14px"/></Container>
              <Container id="bh_cta_label_txt_cell" style="height:auto; width:auto"><Text id="bh_cta_label_txt" props={content: "有一个想法？", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <Text id="bh_cta_title" props={content: "让我们做点不一样的", tagName: "h2"}/>
          </Container>
          <Container id="bh_cta_sub_cell" style="height:auto; width:100%; max-width:560px; position:relative; z-index:1">
            <Text id="bh_cta_sub" props={content: "把一个模糊的念头，变成结构清晰的系统。工作日 24 小时内回复。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="bh_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="bh_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:24px">
              <Container id="bh_cta_btn" style="height:auto; width:auto; padding:16px 40px">
                <Text id="bh_cta_btn_txt" props={content: "预约咨询", tagName: "span"}/>
              </Container>
              <Container id="bh_cta_mail_cell" style="height:auto; width:auto"><Text id="bh_cta_mail" props={content: "hello@geometrie.studio", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 8. 页脚 ─── -->
      <Container id="bh_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bh_footer_col" props={direction: "column"} style="height:auto; width:100%; padding:64px 56px 40px; gap:44px">
          <Container id="bh_footer_top_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_footer_top_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-start; gap:48px">
              <Container id="bh_footer_brand_cell" style="height:auto; width:320px; flex-shrink:0">
                <FlexContainer id="bh_footer_brand_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="bh_footer_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                    <Svg id="bh_footer_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'><rect x='0' y='0' width='18' height='18' fill='#D8342C'/><circle cx='28.5' cy='9' r='9' fill='#F0B429'/><polygon points='9,38 0,21 18,21' fill='#1F4FA8'/><rect x='20' y='21' width='18' height='17' fill='#F4F1EA'/></svg>", ariaLabel: "页脚标志"} style="height:32px; width:32px"/>
                  </Container>
                  <Container id="bh_footer_slogan_cell" style="height:auto; width:100%"><Text id="bh_footer_slogan" props={content: "形式追随功能。1919 年的话，今天依然好用。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_footer_nav_cell" style="height:auto; width:auto; flex-shrink:0">
                <FlexContainer id="bh_footer_nav_row" props={direction: "row"} style="height:auto; width:auto; gap:72px; align-items:flex-start">
                  <Container id="bh_footer_col1_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col1" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc1_t_cell" style="height:auto; width:auto"><Text id="bh_fc1_t" props={content: "导航", tagName: "span"}/></Container>
                      <Container id="bh_fc1_1_cell" style="height:auto; width:auto"><Text id="bh_fc1_1" props={content: "作品", tagName: "span"}/></Container>
                      <Container id="bh_fc1_2_cell" style="height:auto; width:auto"><Text id="bh_fc1_2" props={content: "方法", tagName: "span"}/></Container>
                      <Container id="bh_fc1_3_cell" style="height:auto; width:auto"><Text id="bh_fc1_3" props={content: "工作室", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_footer_col2_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col2" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc2_t_cell" style="height:auto; width:auto"><Text id="bh_fc2_t" props={content: "关注", tagName: "span"}/></Container>
                      <Container id="bh_fc2_1_cell" style="height:auto; width:auto"><Text id="bh_fc2_1" props={content: "Behance", tagName: "span"}/></Container>
                      <Container id="bh_fc2_2_cell" style="height:auto; width:auto"><Text id="bh_fc2_2" props={content: "Instagram", tagName: "span"}/></Container>
                      <Container id="bh_fc2_3_cell" style="height:auto; width:auto"><Text id="bh_fc2_3" props={content: "微信公众号", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_footer_col3_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col3" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc3_t_cell" style="height:auto; width:auto"><Text id="bh_fc3_t" props={content: "联系", tagName: "span"}/></Container>
                      <Container id="bh_fc3_1_cell" style="height:auto; width:auto"><Text id="bh_fc3_1" props={content: "hello@geometrie.studio", tagName: "span"}/></Container>
                      <Container id="bh_fc3_2_cell" style="height:auto; width:auto"><Text id="bh_fc3_2" props={content: "上海 · 西岸 龙腾大道 2555 号", tagName: "span"}/></Container>
                      <Container id="bh_fc3_3_cell" style="height:auto; width:auto"><Text id="bh_fc3_3" props={content: "柏林 · Kreuzberg", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_footer_bar_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_footer_bar_outer" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_footer_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="bh_footer_rule" style="height:1px; width:100%"/></Container>
              <FlexContainer id="bh_footer_bar_row" props={direction: "row"} style="height:auto; width:100%; padding-top:22px; justify-content:space-between; align-items:center">
                <Container id="bh_footer_copy_cell" style="height:auto; width:auto"><Text id="bh_footer_copy" props={content: "© 2026 几何工作室 GÉOMÉTRIE · 保留所有权利", tagName: "span"}/></Container>
                <Container id="bh_footer_squares_cell" style="height:auto; width:auto">
                  <FlexContainer id="bh_footer_squares_row" props={direction: "row"} style="height:auto; width:auto; gap:6px; align-items:center">
                    <Container id="bh_fs1_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs1" style="height:10px; width:10px"/></Container>
                    <Container id="bh_fs2_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs2" style="height:10px; width:10px"/></Container>
                    <Container id="bh_fs3_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs3" style="height:10px; width:10px"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏「向下滚动」提示 → 页内定位到下一区块（nav.scroll 能力，落点避让吸顶导航）
      @bh_hero_barcap_r = { events: { scrollToMethod: { trigger: "onClick", action: nav.scroll({target: "bh_method_region"}) } } };
    </script>

    <styles>
      # ── 页面基调 ──
      @bh_root = { background: #F4F1EA; }

      # ── 锚点落点偏移（sticky 导航避让） ──

      # ── 导航 ──
      @bh_nav_region = { background: rgba(244, 241, 234, 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(20, 20, 20, 0.10); }
      @bh_nav_word_cn = { color: #141414; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @bh_nav_word_en = { color: rgba(20, 20, 20, 0.45); font-size: 9.5px; font-weight: 600; letter-spacing: 2.4px; }
      @bh_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.78); --anchor-item-font-size: 14px; --anchor-item-font-weight: 700; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #D8342C; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.5px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #D8342C; }
      }
      @bh_nav_cta = { background: #141414; transition: background 0.25s ease; :scope:hover { background: #D8342C; } }
      @bh_nav_cta_txt = { color: #F4F1EA; font-size: 13.5px; font-weight: 700; letter-spacing: 1.5px; }

      # ── 首屏 ──
      @bh_hero_eyebrow = { background: #F4F1EA; border: 1.5px solid #141414; }
      @bh_hero_eyebrow_txt = { color: #141414; font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_hero_l1_big = { color: #141414; font-size: 132px; font-weight: 900; line-height: 1.0; letter-spacing: -3px; }
      @bh_hero_l2_big = { color: #141414; font-size: 132px; font-weight: 900; line-height: 1.0; letter-spacing: -3px; }
      @bh_hero_l3_big = { color: #D8342C; font-size: 132px; font-weight: 900; line-height: 1.0; letter-spacing: -3px; }
      @bh_hero_l1_en = { color: rgba(20, 20, 20, 0.4); font-size: 13px; font-weight: 700; letter-spacing: 5px; }
      @bh_hero_l2_en = { color: rgba(20, 20, 20, 0.4); font-size: 13px; font-weight: 700; letter-spacing: 5px; }
      @bh_hero_l3_en = { color: rgba(216, 52, 44, 0.55); font-size: 13px; font-weight: 700; letter-spacing: 5px; }
      @bh_hero_side_rule = { background: #141414; }
      @bh_hero_side_desc = { color: #141414; font-size: 15.5px; line-height: 1.85; font-weight: 500; }
      @bh_hero_meta_1 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_meta_2 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_meta_3 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_bar_r = { background: #D8342C; }
      @bh_hero_bar_y = { background: #F0B429; }
      @bh_hero_bar_b = { background: #1F4FA8; }
      @bh_hero_bar_k = { background: #141414; }
      @bh_hero_barcap_l = { color: rgba(20, 20, 20, 0.6); font-size: 12.5px; font-weight: 600; letter-spacing: 1px; }
      @bh_hero_barcap_r = { cursor: pointer; color: rgba(20, 20, 20, 0.6); font-size: 12.5px; font-weight: 600; letter-spacing: 1px; }

      # ── 宣言带 ──
      @bh_manifesto_col = { background: #141414; }
      @bh_manifesto_chip = { background: #D8342C; }
      @bh_manifesto_label = { color: rgba(244, 241, 234, 0.6); font-size: 12px; font-weight: 700; letter-spacing: 4px; }
      @bh_manifesto_l1 = { color: #F4F1EA; font-size: 64px; font-weight: 800; line-height: 1.28; letter-spacing: -1px; }
      @bh_manifesto_l2 = { color: #F0B429; font-size: 64px; font-weight: 800; line-height: 1.28; letter-spacing: -1px; }
      @bh_form_circle_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_square_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_triangle_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_circle_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 2px; }
      @bh_form_square_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 2px; }
      @bh_form_triangle_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 2px; }
      @bh_form_circle_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.8; }
      @bh_form_square_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.8; }
      @bh_form_triangle_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.8; }

      # ── 作品 ──
      @bh_work_label = { color: #D8342C; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @bh_work_title = { color: #141414; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @bh_work_head_note = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.85; }
      @bh_w1_num = { color: #D8342C; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w2_num = { color: #1F4FA8; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w3_num = { color: #B07C05; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w1_name = { color: #141414; font-size: 21px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w2_name = { color: #141414; font-size: 21px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w3_name = { color: #141414; font-size: 21px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w1_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w2_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w3_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w1_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.85; }
      @bh_w2_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.85; }
      @bh_w3_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.85; }
      @bh_w1_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }
      @bh_w2_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }
      @bh_w3_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }

      # ── 数字带 ──
      @bh_numbers_rule = { background: #141414; }
      @bh_n1_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n2_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n3_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n4_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n1_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n2_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n3_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n4_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }

      # ── 方法 ──
      @bh_method_label = { color: #D8342C; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @bh_method_title = { color: #141414; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @bh_method_title2 = { color: #141414; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @bh_method_desc = { color: rgba(20, 20, 20, 0.68); font-size: 15px; line-height: 2.0; }
      @bh_m1_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m2_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m3_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m1_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m2_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m3_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m1_name = { color: #141414; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @bh_m2_name = { color: #141414; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @bh_m3_name = { color: #141414; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @bh_m1_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }
      @bh_m2_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }
      @bh_m3_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }

      # ── CTA ──
      @bh_cta_col = { background: #D8342C; }
      @bh_cta_chip = { background: #141414; }
      @bh_cta_label_txt = { color: rgba(244, 241, 234, 0.85); font-size: 12.5px; font-weight: 700; letter-spacing: 4px; }
      @bh_cta_title = { color: #F4F1EA; font-size: 72px; font-weight: 900; letter-spacing: -3px; }
      @bh_cta_sub = { color: rgba(244, 241, 234, 0.85); font-size: 15.5px; line-height: 1.9; }
      @bh_cta_btn = { background: #141414; transition: background 0.25s ease, transform 0.25s ease; :scope:hover { background: #F0B429; transform: translateY(-2px); } }
      @bh_cta_btn_txt = { color: #F4F1EA; font-size: 15px; font-weight: 800; letter-spacing: 3px; }
      @bh_cta_mail = { color: rgba(244, 241, 234, 0.9); font-size: 14px; font-weight: 600; letter-spacing: 0.5px; border-bottom: 1px solid rgba(244, 241, 234, 0.5); padding-bottom: 3px; }

      # ── 页脚 ──
      @bh_footer_col = { background: #141414; }
      @bh_footer_slogan = { color: rgba(244, 241, 234, 0.6); font-size: 13.5px; line-height: 1.9; }
      @bh_fc1_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc2_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc3_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc1_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc1_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc1_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc3_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_fc3_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_fc3_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_footer_rule = { background: rgba(244, 241, 234, 0.16); }
      @bh_footer_copy = { color: rgba(244, 241, 234, 0.42); font-size: 12px; letter-spacing: 0.6px; }
      @bh_fs1 = { background: #D8342C; }
      @bh_fs2 = { background: #F0B429; }
      @bh_fs3 = { background: #1F4FA8; }
    </styles>
  </Page>
</App>
```
