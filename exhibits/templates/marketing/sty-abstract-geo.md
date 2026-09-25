# 抽象几何风 — 「形态的重量」当代抽象艺术展

> 模板定位（营销 / 增长 tab · 风格系列）：抽象几何（Abstract Geometry）——暖灰纸底 + 陶土红 / 深墨蓝 / 芥末黄 / 黑四色大色块，**巨幅几何平面叠压**（绝对定位装饰层跨越区块边界）、细网格参考线、画廊式排印（编号 + 材质尺寸 + 大段留白）。版式型模板：错位大色块与超大编号营造空间层次。
> 场景需求：给一场虚构的当代抽象艺术展做官网：首屏「形态的重量」超大标题 + 三块叠压几何构成；展览简介（编号 01 + 双栏）；六件作品（几何构成封面 + 编号 / 名称 / 材质 / 尺寸）；策展人语引用带；参观信息（时间 / 地点 / 票价 + 购票 CTA）；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="形态的重量 — 当代抽象艺术展">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="ag_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="ag_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="ag_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 56px">
          <Container id="ag_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ag_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:14px">
              <Container id="ag_nav_name_cell" style="height:auto; width:auto"><Text id="ag_nav_name" props={content: "形态的重量", tagName: "span"}/></Container>
              <Container id="ag_nav_en_cell" style="height:auto; width:auto"><Text id="ag_nav_en" props={content: "THE WEIGHT OF FORM", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="ag_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="ag_nav_i1" props={itemLabel: "展览", itemTarget: "ag_intro_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i2" props={itemLabel: "作品", itemTarget: "ag_works_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i3" props={itemLabel: "策展人语", itemTarget: "ag_quote_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i4" props={itemLabel: "参观", itemTarget: "ag_visit_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="ag_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="ag_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="ag_nav_cta_txt" props={content: "预约购票", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（超大标题 + 三块叠压构成） ─── -->
      <Container id="ag_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="ag_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="ag_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 820' preserveAspectRatio='xMidYMid slice' fill='none'><rect x='880' y='120' width='420' height='420' fill='#B4512E'/><circle cx='1150' cy='520' r='150' fill='#1E2A4A'/><path d='M960,820 L1240,420 L1440,820 Z' fill='#C9A227' opacity='0.92'/><rect x='1180' y='60' width='180' height='180' fill='#141414'/><g stroke='#141414' stroke-width='1' opacity='0.14'><line x1='0' y1='655' x2='1440' y2='655'/><line x1='0' y1='695' x2='1440' y2='695'/><line x1='1040' y1='0' x2='1040' y2='820'/><line x1='1084' y1='0' x2='1084' y2='820'/></g><circle cx='150' cy='700' r='60' stroke='#141414' stroke-width='2' fill='none'/><circle cx='150' cy='700' r='30' stroke='#141414' stroke-width='2' fill='none'/></svg>", ariaLabel: "首屏几何构成：三块叠压平面与参考网格"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="ag_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:92px 56px 96px; position:relative; z-index:1; align-items:flex-start">
          <Container id="ag_hero_kicker_cell" style="height:auto; width:auto">
            <FlexContainer id="ag_hero_kicker_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="ag_hero_kicker_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="ag_hero_kicker_chip" style="height:12px; width:12px"/></Container>
              <Container id="ag_hero_kicker_txt_cell" style="height:auto; width:auto"><Text id="ag_hero_kicker_txt" props={content: "当代抽象艺术群展 · 2026", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_hero_title_cell" style="height:auto; width:auto; padding-top:34px">
            <FlexContainer id="ag_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
              <Container id="ag_hero_l1_cell" style="height:auto; width:auto"><Text id="ag_hero_l1" props={content: "形态的", tagName: "h1"}/></Container>
              <Container id="ag_hero_l2_cell" style="height:auto; width:auto; padding-left:196px"><Text id="ag_hero_l2" props={content: "重量", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_hero_meta_cell" style="height:auto; width:auto; padding-top:40px">
            <FlexContainer id="ag_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:36px">
              <Container id="ag_hero_meta_date_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_date" props={content: "2026.11.08 — 2027.02.15", tagName: "span"}/></Container>
              <Container id="ag_hero_meta_place_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_place" props={content: "西岸美术馆 · 主展厅 1F", tagName: "span"}/></Container>
              <Container id="ag_hero_meta_slot_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_slot" props={content: "每周一闭馆", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 展览简介（编号 + 双栏） ─── -->
      <Container id="ag_intro_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_intro_row" props={direction: "row"} style="height:auto; width:100%; padding:48px 56px 96px; gap:64px; align-items:flex-start">
          <Container id="ag_intro_num_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ag_intro_num_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
              <Container id="ag_intro_num_txt_cell" style="height:auto; width:auto"><Text id="ag_intro_num_txt" props={content: "01", tagName: "h2"}/></Container>
              <Container id="ag_intro_num_label_cell" style="height:auto; width:auto"><Text id="ag_intro_num_label" props={content: "展览简介", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_intro_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="ag_intro_body_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="ag_intro_lead_cell" style="height:auto; width:100%; max-width:760px"><Text id="ag_intro_lead" props={content: "十七位艺术家的四十二件作品，共同追问一个古老的问题：一块颜色、一个形状，究竟有没有重量？", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="ag_intro_p1_cell" style="height:auto; width:100%; max-width:640px"><Text id="ag_intro_p1" props={content: "本次展览将视觉的重量拆解为三种经验：叠压产生的压力、色彩自身的密度、以及留白所托起的悬浮感。展厅按这三种经验划分为三个章节，观众可以按任意顺序进入。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="ag_intro_p2_cell" style="height:auto; width:100%; max-width:640px"><Text id="ag_intro_p2" props={content: "所有作品均为布面丙烯与综合材料，最大的一件《沉积》长 6 米，专门为本展创作，将在展厅中央首次亮相。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 展出作品（六件） ─── -->
      <Container id="ag_works_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_works_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 56px 104px; gap:48px">
          <Container id="ag_works_head_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="ag_works_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="ag_works_head_l_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:16px">
                  <Container id="ag_works_head_num_cell" style="height:auto; width:auto"><Text id="ag_works_head_num" props={content: "02", tagName: "h2"}/></Container>
                  <Container id="ag_works_head_label_cell" style="height:auto; width:auto"><Text id="ag_works_head_label" props={content: "展出作品 · WORKS", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ag_works_head_r_cell" style="height:auto; width:320px; flex-shrink:0"><Text id="ag_works_head_r" props={content: "六件代表作，涵盖三个章节。现场每件配 90 秒语音导览。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_works_row1_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_row1" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:flex-start">
              <Container id="ag_w1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w1_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#EFE9DE'/><rect x='60' y='70' width='180' height='160' fill='#B4512E'/><rect x='150' y='30' width='170' height='110' fill='#1E2A4A' opacity='0.92'/><circle cx='120' cy='250' r='34' fill='#C9A227'/></svg>", ariaLabel: "作品一 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w1_num_cell" style="height:auto; width:auto"><Text id="ag_w1_num" props={content: "№ 01", tagName: "span"}/></Container>
                    <Container id="ag_w1_name_cell" style="height:auto; width:auto"><Text id="ag_w1_name" props={content: "《叠压》", tagName: "h4"}/></Container>
                    <Container id="ag_w1_desc_cell" style="height:auto; width:100%"><Text id="ag_w1_desc" props={content: "布面丙烯 · 180 × 160 cm · 2024", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w2_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#1E2A4A'/><circle cx='190' cy='150' r='104' fill='#EFE9DE'/><path d='M190,46 A104,104 0 0 1 294,150 L190,150 Z' fill='#C9A227'/><rect x='24' y='228' width='120' height='48' fill='#B4512E'/></svg>", ariaLabel: "作品二 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w2_num_cell" style="height:auto; width:auto"><Text id="ag_w2_num" props={content: "№ 02", tagName: "span"}/></Container>
                    <Container id="ag_w2_name_cell" style="height:auto; width:auto"><Text id="ag_w2_name" props={content: "《圆的不安》", tagName: "h4"}/></Container>
                    <Container id="ag_w2_desc_cell" style="height:auto; width:100%"><Text id="ag_w2_desc" props={content: "布面丙烯 · 150 × 150 cm · 2023", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w3_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#C9A227'/><path d='M0,300 L190,0 L380,300 Z' fill='#B4512E'/><circle cx='190' cy='210' r='56' fill='#1E2A4A'/><rect x='300' y='30' width='50' height='50' fill='#EFE9DE'/></svg>", ariaLabel: "作品三 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w3_num_cell" style="height:auto; width:auto"><Text id="ag_w3_num" props={content: "№ 03", tagName: "span"}/></Container>
                    <Container id="ag_w3_name_cell" style="height:auto; width:auto"><Text id="ag_w3_name" props={content: "《山与洞》", tagName: "h4"}/></Container>
                    <Container id="ag_w3_desc_cell" style="height:auto; width:100%"><Text id="ag_w3_desc" props={content: "综合材料 · 200 × 180 cm · 2025", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="ag_works_row2_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_row2" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:flex-start">
              <Container id="ag_w4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w4_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w4_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w4_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#EFE9DE'/><g stroke='#141414' stroke-width='10'><line x1='40' y1='60' x2='340' y2='60'/><line x1='40' y1='120' x2='340' y2='120'/><line x1='40' y1='180' x2='260' y2='180'/><line x1='40' y1='240' x2='320' y2='240'/></g><circle cx='322' cy='240' r='22' fill='#B4512E'/></svg>", ariaLabel: "作品四 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w4_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w4_num_cell" style="height:auto; width:auto"><Text id="ag_w4_num" props={content: "№ 04", tagName: "span"}/></Container>
                    <Container id="ag_w4_name_cell" style="height:auto; width:auto"><Text id="ag_w4_name" props={content: "《四行诗》", tagName: "h4"}/></Container>
                    <Container id="ag_w4_desc_cell" style="height:auto; width:100%"><Text id="ag_w4_desc" props={content: "布面丙烯 · 160 × 130 cm · 2022", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w5_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w5_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w5_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w5_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#B4512E'/><rect x='48' y='48' width='284' height='204' fill='none' stroke='#EFE9DE' stroke-width='3'/><circle cx='190' cy='150' r='70' fill='#C9A227'/><rect x='120' y='80' width='140' height='140' fill='#1E2A4A' opacity='0.86'/></svg>", ariaLabel: "作品五 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w5_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w5_num_cell" style="height:auto; width:auto"><Text id="ag_w5_num" props={content: "№ 05", tagName: "span"}/></Container>
                    <Container id="ag_w5_name_cell" style="height:auto; width:auto"><Text id="ag_w5_name" props={content: "《回声》", tagName: "h4"}/></Container>
                    <Container id="ag_w5_desc_cell" style="height:auto; width:100%"><Text id="ag_w5_desc" props={content: "布面丙烯 · 170 × 140 cm · 2023", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w6_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w6_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w6_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w6_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#141414'/><g fill='#EFE9DE'><rect x='40' y='40' width='80' height='220'/><rect x='140' y='90' width='80' height='170'/></g><rect x='240' y='150' width='100' height='110' fill='#C9A227'/><circle cx='290' cy='80' r='36' fill='#B4512E'/></svg>", ariaLabel: "作品六 几何构成"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w6_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w6_num_cell" style="height:auto; width:auto"><Text id="ag_w6_num" props={content: "№ 06", tagName: "span"}/></Container>
                    <Container id="ag_w6_name_cell" style="height:auto; width:auto"><Text id="ag_w6_name" props={content: "《沉积》（本展新作）", tagName: "h4"}/></Container>
                    <Container id="ag_w6_desc_cell" style="height:auto; width:100%"><Text id="ag_w6_desc" props={content: "综合材料 · 600 × 220 cm · 2026", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 策展人语 ─── -->
      <Container id="ag_quote_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:84px">
        <Container id="ag_quote_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="ag_quote_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 420' preserveAspectRatio='xMidYMid slice' fill='none'><rect width='1440' height='420' fill='#1E2A4A'/><circle cx='1280' cy='80' r='170' fill='#B4512E' opacity='0.85'/><rect x='60' y='300' width='150' height='150' fill='#C9A227' opacity='0.9'/><circle cx='1150' cy='330' r='60' stroke='#EFE9DE' stroke-width='2' fill='none' opacity='0.5'/></svg>", ariaLabel: "深蓝引用带装饰"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="ag_quote_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px; gap:34px; align-items:center; position:relative; z-index:1">
          <Container id="ag_quote_mark_cell" style="height:auto; width:auto"><Text id="ag_quote_mark" props={content: "策展人语 · CURATOR’S NOTE", tagName: "span"}/></Container>
          <Container id="ag_quote_text_cell" style="height:auto; width:100%; max-width:920px">
            <FlexContainer id="ag_quote_text_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:center">
              <Container id="ag_quote_l1_cell" style="height:auto; width:auto"><Text id="ag_quote_l1" props={content: "「我们习惯用眼睛判断轻重，", tagName: "h3"}/></Container>
              <Container id="ag_quote_l2_cell" style="height:auto; width:auto"><Text id="ag_quote_l2" props={content: "而真正有重量的形态，是被身体记住的。」", tagName: "h3"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_quote_sign_cell" style="height:auto; width:auto"><Text id="ag_quote_sign" props={content: "—— 策展人 沈黎", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 参观信息 ─── -->
      <Container id="ag_visit_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_visit_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:72px; align-items:flex-start">
          <Container id="ag_visit_info_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="ag_visit_info_col" props={direction: "column"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="ag_visit_head_cell" style="height:auto; width:auto">
                <FlexContainer id="ag_visit_head_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:16px">
                  <Container id="ag_visit_head_num_cell" style="height:auto; width:auto"><Text id="ag_visit_head_num" props={content: "03", tagName: "h2"}/></Container>
                  <Container id="ag_visit_head_label_cell" style="height:auto; width:auto"><Text id="ag_visit_head_label" props={content: "参观信息 · VISIT", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ag_visit_rows_cell" style="height:auto; width:100%; max-width:560px">
                <FlexContainer id="ag_visit_rows_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="ag_v1_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v1_k_cell" style="height:auto; width:auto"><Text id="ag_v1_k" props={content: "开放时间", tagName: "span"}/></Container>
                      <Container id="ag_v1_v_cell" style="height:auto; width:auto"><Text id="ag_v1_v" props={content: "周二至周日 10:00 — 18:00", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v2_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v2_k_cell" style="height:auto; width:auto"><Text id="ag_v2_k" props={content: "地址", tagName: "span"}/></Container>
                      <Container id="ag_v2_v_cell" style="height:auto; width:auto"><Text id="ag_v2_v" props={content: "上海 · 西岸美术馆主展厅", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v3_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v3_k_cell" style="height:auto; width:auto"><Text id="ag_v3_k" props={content: "票价", tagName: "span"}/></Container>
                      <Container id="ag_v3_v_cell" style="height:auto; width:auto"><Text id="ag_v3_v" props={content: "早鸟 ¥80 / 全价 ¥120 / 学生半价", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v4_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v4_k_cell" style="height:auto; width:auto"><Text id="ag_v4_k" props={content: "导览", tagName: "span"}/></Container>
                      <Container id="ag_v4_v_cell" style="height:auto; width:auto"><Text id="ag_v4_v" props={content: "每日 14:00 策展人导览（需预约）", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ag_visit_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="ag_visit_cta" style="height:auto; width:auto; padding:17px 42px">
                  <Text id="ag_visit_cta_txt" props={content: "预约购票", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="ag_visit_fig_cell" style="height:auto; width:420px; flex-shrink:0">
            <Container id="ag_visit_fig" style="height:460px; width:100%">
              <Svg id="ag_visit_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 460' preserveAspectRatio='xMidYMid slice'><rect width='420' height='460' fill='#EFE9DE'/><rect x='40' y='60' width='240' height='240' fill='#B4512E'/><circle cx='300' cy='180' r='80' fill='#1E2A4A'/><path d='M80,460 L210,260 L340,460 Z' fill='#C9A227'/><g stroke='#141414' stroke-width='1' opacity='0.18'><line x1='0' y1='360' x2='420' y2='360'/><line x1='0' y1='392' x2='420' y2='392'/></g><circle cx='80' cy='390' r='26' stroke='#141414' stroke-width='2' fill='none'/></svg>", ariaLabel: "参观信息配图：几何构成"} style="height:460px; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="ag_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="ag_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="ag_footer_left_cell" style="height:auto; width:auto"><Text id="ag_footer_left" props={content: "© 2026 西岸美术馆 · 展览与作品均为虚构演示", tagName: "span"}/></Container>
          <Container id="ag_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="ag_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="ag_footer_f1_cell" style="height:auto; width:auto"><Text id="ag_footer_f1" props={content: "往期展览", tagName: "span"}/></Container>
              <Container id="ag_footer_f2_cell" style="height:auto; width:auto"><Text id="ag_footer_f2" props={content: "会员计划", tagName: "span"}/></Container>
              <Container id="ag_footer_f3_cell" style="height:auto; width:auto"><Text id="ag_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @ag_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（暖灰纸） ──
      @ag_root = { background: #EFE9DE; }

      # ── 导航 ──
      @ag_nav_region = { background: rgba(239, 233, 222, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(20, 20, 20, 0.22); }
      @ag_nav_name = { color: #141414; font-size: 18px; font-weight: 900; letter-spacing: 3px; }
      @ag_nav_en = { color: rgba(20, 20, 20, 0.45); font-size: 9.5px; font-weight: 600; letter-spacing: 3px; }
      @ag_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #B4512E; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B4512E; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #B4512E; }
      }
      @ag_nav_cta = { background: #1E2A4A; transition: background 0.25s ease; :scope:hover { background: #B4512E; } }
      @ag_nav_cta_txt = { color: #EFE9DE; font-size: 13.5px; font-weight: 700; letter-spacing: 2px; }

      # ── 首屏 ──
      @ag_hero_kicker_chip = { background: #B4512E; }
      @ag_hero_kicker_txt = { color: rgba(20, 20, 20, 0.7); font-size: 12.5px; font-weight: 700; letter-spacing: 3.4px; }
      @ag_hero_l1 = { color: #141414; font-size: 128px; font-weight: 900; line-height: 1.0; letter-spacing: -5px; }
      @ag_hero_l2 = { color: #1E2A4A; font-size: 128px; font-weight: 900; line-height: 1.0; letter-spacing: -5px; }
      @ag_hero_meta_date = { color: #B4512E; font-size: 14px; font-weight: 700; letter-spacing: 1.6px; }
      @ag_hero_meta_place = { color: rgba(20, 20, 20, 0.68); font-size: 14px; font-weight: 600; letter-spacing: 1.6px; }
      @ag_hero_meta_slot = { color: rgba(20, 20, 20, 0.45); font-size: 13px; letter-spacing: 1.6px; }

      # ── 简介 ──
      @ag_intro_num_txt = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_intro_num_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 3.4px; }
      @ag_intro_lead = { color: #141414; font-size: 27px; font-weight: 800; line-height: 1.75; letter-spacing: -0.4px; }
      @ag_intro_p1 = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 2.1; }
      @ag_intro_p2 = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 2.1; }

      # ── 作品 ──
      @ag_works_head_num = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_works_head_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 3.4px; }
      @ag_works_head_r = { color: rgba(20, 20, 20, 0.6); font-size: 13.5px; line-height: 1.9; }
      @ag_w1_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w2_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w3_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w4_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w5_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w6_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @ag_w1_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w2_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w3_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w4_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w5_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w6_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.6px; }
      @ag_w1_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w2_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w3_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w4_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w5_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w6_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.8px; }
      @ag_w1_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w2_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w3_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w4_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w5_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w6_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }

      # ── 策展人语 ──
      @ag_quote_mark = { color: rgba(239, 233, 222, 0.6); font-size: 12px; font-weight: 700; letter-spacing: 4px; }
      @ag_quote_l1 = { color: #EFE9DE; font-size: 40px; font-weight: 800; line-height: 1.7; letter-spacing: -0.5px; }
      @ag_quote_l2 = { color: #C9A227; font-size: 40px; font-weight: 800; line-height: 1.7; letter-spacing: -0.5px; }
      @ag_quote_sign = { color: rgba(239, 233, 222, 0.7); font-size: 14px; letter-spacing: 1.4px; }

      # ── 参观信息 ──
      @ag_visit_head_num = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_visit_head_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 3.4px; }
      @ag_v1_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v2_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v3_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v4_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); border-bottom: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v1_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 1.4px; }
      @ag_v2_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 1.4px; }
      @ag_v3_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 1.4px; }
      @ag_v4_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 1.4px; }
      @ag_v1_v = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @ag_v2_v = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @ag_v3_v = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @ag_v4_v = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @ag_visit_cta = { background: #B4512E; transition: transform 0.25s ease, background 0.25s ease; :scope:hover { transform: translateY(-2px); background: #1E2A4A; } }
      @ag_visit_cta_txt = { color: #EFE9DE; font-size: 15px; font-weight: 800; letter-spacing: 3px; }

      # ── 页脚 ──
      @ag_footer_row = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.6px; }
      @ag_footer_f1 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
      @ag_footer_f2 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
      @ag_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
    </styles>
  </Page>
</App>
```
