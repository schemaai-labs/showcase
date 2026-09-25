# 低多边形 3D 风 — 「POLYFORM 潮玩实验室」数字藏品展示页

> 模板定位（产品 / 应用 tab · 设计系统分组 · 风格系列）：低多边形（low-poly）3D 视觉——深墨蓝「暗房」底 + 低多边形面片装饰层 + 亮青 / 暖橙双强调色；核心区用 **`model3d` 组件承载真实可旋转的 3D 模型**（低多边形潮玩），静态面（编辑画布 / 缩略卡）为静态首帧，预览 / 运行时自动旋转可交互。**素材驱动型模板**：模型走平台素材库相对引用（`assets/models/low-poly-model.glb`，建应用时自动播种进应用素材库）。
> 场景需求：给一个虚构的 3D 潮玩工作室做藏品页：顶部导航；首屏左文案（型号标签 / 大字标题 / 描述 / 双 CTA / 三项参数）+ 右侧 3D 模型实时展示卡（描边光 + 网格底 + 型号角标叠层）；规格参数带（顶点 / 面数 / 材质 / 导出格式）；三款藏品卡（SVG 多边形构成的面片插画）；四步制作流程；收口获取 CTA；页脚。零 API、静态数据、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="POLYFORM 潮玩实验室 — 低多边形 3D 藏品页">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="lp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="lp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="lp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 56px">
          <Container id="lp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="lp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="lp_nav_mark_cell" style="height:34px; width:34px; flex-shrink:0">
                <Svg id="lp_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34'><polygon points='17,2 32,17 17,32 2,17' fill='#38E1C6'/><polygon points='17,10 24,17 17,24 10,17' fill='#0B1220'/></svg>", ariaLabel: "POLYFORM 标志"} style="height:34px; width:34px"/>
              </Container>
              <Container id="lp_nav_word_cell" style="height:auto; width:auto">
                <FlexContainer id="lp_nav_word_col" props={direction: "column"} style="height:auto; width:auto; gap:3px">
                  <Container id="lp_nav_word_cn_cell" style="height:auto; width:auto"><Text id="lp_nav_word_cn" props={content: "POLYFORM", tagName: "span"}/></Container>
                  <Container id="lp_nav_word_en_cell" style="height:auto; width:auto"><Text id="lp_nav_word_en" props={content: "潮玩实验室 · 3D", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="lp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="lp_nav_i1" props={itemLabel: "藏品", itemTarget: "lp_series_region"} style="height:auto; width:auto"/>
              <Container id="lp_nav_i2" props={itemLabel: "工序", itemTarget: "lp_flow_region"} style="height:auto; width:auto"/>
              <Container id="lp_nav_i3" props={itemLabel: "授权", itemTarget: "lp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="lp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="lp_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="lp_nav_cta_txt" props={content: "获取模型", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（左文案 + 右 3D 展示卡） ─── -->
      <Container id="lp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="lp_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="lp_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 860' preserveAspectRatio='xMidYMid slice' fill='none'><polygon points='-40,120 180,-30 300,210' fill='#38E1C6' opacity='0.10'/><polygon points='1180,700 1400,560 1460,820' fill='#FFB35C' opacity='0.10'/><polygon points='1260,60 1390,30 1350,160' fill='#38E1C6' opacity='0.16'/><polygon points='90,700 210,640 240,780' fill='#7C6CFF' opacity='0.12'/><path d='M0,430 L120,360 L240,430 L360,360 L480,430 L600,360 L720,430 L840,360 L960,430 L1080,360 L1200,430 L1320,360 L1440,430' stroke='#38E1C6' stroke-width='1' opacity='0.16'/><circle cx='640' cy='120' r='3' fill='#38E1C6' opacity='0.5'/><circle cx='1120' cy='860' r='4' fill='#FFB35C' opacity='0.5'/></svg>", ariaLabel: "低多边形面片与折线装饰层"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="lp_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 140, duration: "slow"} style="height:auto; width:100%; padding:76px 56px 88px; position:relative; z-index:1; gap:64px; align-items:center">
          <Container id="lp_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="lp_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:26px; align-items:flex-start">
              <Container id="lp_hero_chip_cell" style="height:auto; width:auto">
                <Container id="lp_hero_chip" style="height:auto; width:auto; padding:8px 16px">
                  <Text id="lp_hero_chip_txt" props={content: "收藏系列 №.001 · 限量 300 体", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="lp_hero_title_cell" style="height:auto; width:auto"><Text id="lp_hero_title" props={content: "PICO 橡皮鸭", tagName: "h1"}/></Container>
              <Container id="lp_hero_sub_cell" style="height:auto; width:auto"><Text id="lp_hero_sub" props={content: "LOW-POLY COLLECTIBLE", tagName: "span"}/></Container>
              <Container id="lp_hero_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="lp_hero_desc" props={content: "2400 个顶点、一种材质、零贴图烘焙——我们相信低多边形不是省钱的做法，而是诚实的形式：每一块面片都看得见、都算数。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="lp_hero_actions_cell" style="height:auto; width:auto; padding-top:8px">
                <FlexContainer id="lp_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="lp_hero_buy_cell" style="height:auto; width:auto">
                    <Container id="lp_hero_buy" style="height:auto; width:auto; padding:15px 38px">
                      <Text id="lp_hero_buy_txt" props={content: "获取模型文件", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="lp_hero_ghost_cell" style="height:auto; width:auto">
                    <Container id="lp_hero_ghost" style="height:auto; width:auto; padding:15px 34px">
                      <Text id="lp_hero_ghost_txt" props={content: "查看工序", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="lp_hero_params_cell" style="height:auto; width:auto; padding-top:14px">
                <FlexContainer id="lp_hero_params_row" props={direction: "row"} style="height:auto; width:auto; gap:38px; align-items:center">
                  <Container id="lp_hero_p1_cell" style="height:auto; width:auto"><Text id="lp_hero_p1" props={content: "2,399 顶点", tagName: "span"}/></Container>
                  <Container id="lp_hero_p2_cell" style="height:auto; width:auto"><Text id="lp_hero_p2" props={content: "4,120 面", tagName: "span"}/></Container>
                  <Container id="lp_hero_p3_cell" style="height:auto; width:auto"><Text id="lp_hero_p3" props={content: "glTF 2.0", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lp_hero_viewer_cell" style="height:auto; width:560px; flex-shrink:0">
            <Container id="lp_hero_viewer_frame" style="height:520px; width:100%; position:relative; overflow:hidden">
              <Container id="lp_hero_viewer_glow_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
                <Svg id="lp_hero_viewer_glow" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 520' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='lpGlow' cx='0.5' cy='0.42' r='0.62'><stop offset='0' stop-color='#38E1C6' stop-opacity='0.30'/><stop offset='0.55' stop-color='#38E1C6' stop-opacity='0.07'/><stop offset='1' stop-color='#38E1C6' stop-opacity='0'/></radialGradient></defs><rect width='560' height='520' fill='#0E1830'/><rect width='560' height='520' fill='url(#lpGlow)'/><g opacity='0.22' stroke='#38E1C6' stroke-width='0.6'><line x1='0' y1='420' x2='560' y2='420'/><line x1='0' y1='450' x2='560' y2='450'/><line x1='0' y1='482' x2='560' y2='482'/><line x1='80' y1='430' x2='300' y2='520'/><line x1='300' y1='430' x2='520' y2='520'/><line x1='180' y1='430' x2='-60' y2='520'/><line x1='420' y1='430' x2='640' y2='520'/></g><polygon points='60,120 108,96 148,132 100,158' stroke='#38E1C6' stroke-width='1' opacity='0.25'/><polygon points='452,300 496,282 512,326 468,344' stroke='#FFB35C' stroke-width='1' opacity='0.28'/></svg>", ariaLabel: "3D 展示卡背景：暗房 + 网格地面 + 面片装饰"} style="height:100%; width:100%"/>
              </Container>
              <Container id="lp_hero_viewer_model_cell" style="height:100%; width:100%; position:relative; z-index:1">
                <Model3d id="lp_hero_model" props={src: "assets/models/low-poly-model.glb", autoRotate: true, rotateSpeed: "slow", enableZoom: true, enablePan: false} style="height:100%; width:100%"/>
              </Container>
              <Container id="lp_hero_viewer_badge_cell" style="height:auto; width:auto; position:absolute; left:24px; top:22px; z-index:2">
                <Container id="lp_hero_viewer_badge" style="height:auto; width:auto; padding:9px 14px">
                  <Text id="lp_hero_viewer_badge_txt" props={content: "拖拽旋转 · 滚轮缩放", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="lp_hero_viewer_id_cell" style="height:auto; width:auto; position:absolute; right:24px; bottom:20px; z-index:2">
                <Container id="lp_hero_viewer_id" style="height:auto; width:auto; padding:9px 14px">
                  <Text id="lp_hero_viewer_id_txt" props={content: "№.001 / glb 120KB", tagName: "span"}/>
                </Container>
              </Container>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 规格参数带 ─── -->
      <Container id="lp_spec_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lp_spec_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="lp_spec_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="lp_spec_rule" style="height:1px; width:100%"/></Container>
          <FlexContainer id="lp_spec_row" props={direction: "row"} style="height:auto; width:100%; padding:44px 0px 48px; gap:32px; align-items:flex-start">
            <Container id="lp_sp1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp1_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp1_label_cell" style="height:auto; width:auto"><Text id="lp_sp1_label" props={content: "几何 · GEOMETRY", tagName: "span"}/></Container>
                <Container id="lp_sp1_value_cell" style="height:auto; width:auto"><Text id="lp_sp1_value" props={content: "2,399 顶点 / 4,120 面", tagName: "h4"}/></Container>
                <Container id="lp_sp1_note_cell" style="height:auto; width:100%"><Text id="lp_sp1_note" props={content: "全四边形拓扑，细分一次即可高阶化。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp2_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp2_label_cell" style="height:auto; width:auto"><Text id="lp_sp2_label" props={content: "材质 · MATERIAL", tagName: "span"}/></Container>
                <Container id="lp_sp2_value_cell" style="height:auto; width:auto"><Text id="lp_sp2_value" props={content: "单张 512 色板贴图", tagName: "h4"}/></Container>
                <Container id="lp_sp2_note_cell" style="height:auto; width:100%"><Text id="lp_sp2_note" props={content: "平直着色（flat shading）+ 色板索引。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp3_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp3_label_cell" style="height:auto; width:auto"><Text id="lp_sp3_label" props={content: "格式 · FORMAT", tagName: "span"}/></Container>
                <Container id="lp_sp3_value_cell" style="height:auto; width:auto"><Text id="lp_sp3_value" props={content: "glTF 2.0 / 120 KB", tagName: "h4"}/></Container>
                <Container id="lp_sp3_note_cell" style="height:auto; width:100%"><Text id="lp_sp3_note" props={content: "内嵌贴图；Blender / Unity 直读。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp4_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp4_label_cell" style="height:auto; width:auto"><Text id="lp_sp4_label" props={content: "授权 · LICENSE", tagName: "span"}/></Container>
                <Container id="lp_sp4_value_cell" style="height:auto; width:auto"><Text id="lp_sp4_value" props={content: "个人免费 / 商用另询", tagName: "h4"}/></Container>
                <Container id="lp_sp4_note_cell" style="height:auto; width:100%"><Text id="lp_sp4_note" props={content: "署名后可二次创作，禁止转售模型本体。", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 系列藏品卡 ─── -->
      <Container id="lp_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_series_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 104px; gap:52px">
          <Container id="lp_series_head_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="lp_series_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="lp_series_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="lp_series_label_cell" style="height:auto; width:auto"><Text id="lp_series_label" props={content: "在售系列 · COLLECTION", tagName: "span"}/></Container>
                  <Container id="lp_series_title_cell" style="height:auto; width:auto"><Text id="lp_series_title" props={content: "三款面片玩具", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_series_head_r_cell" style="height:auto; width:340px; flex-shrink:0"><Text id="lp_series_head_note" props={content: "同一个工艺，三种性格。编号即出货顺序，售完不补。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="lp_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="lp_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c1_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='200,42 306,120 262,208 138,208 94,120' fill='#38E1C6'/><polygon points='200,42 262,208 138,208' fill='#1FAF9B'/><polygon points='200,42 138,208 94,120' fill='#63EBD6'/><circle cx='170' cy='108' r='9' fill='#0B1220'/><polygon points='228,116 258,128 226,140' fill='#FFB35C'/></svg>", ariaLabel: "藏品 001 面片插画"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c1_num_cell" style="height:auto; width:auto"><Text id="lp_c1_num" props={content: "№.001", tagName: "span"}/></Container>
                    <Container id="lp_c1_name_cell" style="height:auto; width:auto"><Text id="lp_c1_name" props={content: "橡皮鸭 PICO", tagName: "h3"}/></Container>
                    <Container id="lp_c1_note_cell" style="height:auto; width:100%"><Text id="lp_c1_note" props={content: "本页展示款 · 原色橡皮鸭 · 2400 顶点", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c1_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c1_price" props={content: "¥ 199", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lp_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c2_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='200,36 296,96 296,180 200,226 104,180 104,96' fill='#FFB35C'/><polygon points='200,36 296,96 200,140' fill='#FF9E3D'/><polygon points='200,36 104,96 200,140' fill='#FFC989'/><polygon points='104,96 200,140 104,180' fill='#E08A2B'/><polygon points='296,96 200,140 296,180' fill='#FFD9A8'/><circle cx='168' cy='112' r='8' fill='#0B1220'/><polygon points='228,150 252,150 240,170' fill='#0B1220'/></svg>", ariaLabel: "藏品 002 面片插画"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c2_num_cell" style="height:auto; width:auto"><Text id="lp_c2_num" props={content: "№.002", tagName: "span"}/></Container>
                    <Container id="lp_c2_name_cell" style="height:auto; width:auto"><Text id="lp_c2_name" props={content: "六面熊 HEXA", tagName: "h3"}/></Container>
                    <Container id="lp_c2_note_cell" style="height:auto; width:100%"><Text id="lp_c2_note" props={content: "十二面体坐姿 · 琥珀配色 · 3200 顶点", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c2_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c2_price" props={content: "¥ 249", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lp_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c3_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='160,60 250,60 292,130 250,200 160,200 118,130' fill='#7C6CFF'/><polygon points='160,60 250,60 205,130' fill='#9A8CFF'/><polygon points='250,60 292,130 205,130' fill='#5D4DE0'/><polygon points='292,130 250,200 205,130' fill='#8B7BFF'/><polygon points='118,130 160,60 205,130' fill='#6E5EF5'/><polygon points='118,130 205,130 160,200' fill='#4A3BC7'/><circle cx='185' cy='104' r='9' fill='#0B1220'/><circle cx='232' cy='104' r='9' fill='#0B1220'/><polygon points='196,140 224,140 210,158' fill='#FFB35C'/></svg>", ariaLabel: "藏品 003 面片插画"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c3_num_cell" style="height:auto; width:auto"><Text id="lp_c3_num" props={content: "№.003", tagName: "span"}/></Container>
                    <Container id="lp_c3_name_cell" style="height:auto; width:auto"><Text id="lp_c3_name" props={content: "紫晶兽 CRYSTAL", tagName: "h3"}/></Container>
                    <Container id="lp_c3_note_cell" style="height:auto; width:100%"><Text id="lp_c3_note" props={content: "切割晶体兽 · 紫罗兰配色 · 2600 顶点", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c3_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c3_price" props={content: "¥ 219", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 制作工序 ─── -->
      <Container id="lp_flow_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_flow_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 104px; gap:44px">
          <Container id="lp_flow_head_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_flow_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:40px">
              <Container id="lp_flow_head_l_cell" style="height:auto; width:auto"><Text id="lp_flow_head_l" props={content: "制作工序 · PIPELINE", tagName: "span"}/></Container>
              <Container id="lp_flow_head_r_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lp_flow_head_r" props={content: "从草图到可旋转的网页模型，四步，每一步都可以被检查。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="lp_flow_steps_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_flow_steps_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="lp_f1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f1_num_cell" style="height:auto; width:auto"><Text id="lp_f1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="lp_f1_name_cell" style="height:auto; width:auto"><Text id="lp_f1_name" props={content: "建模", tagName: "h4"}/></Container>
                  <Container id="lp_f1_note_cell" style="height:auto; width:100%"><Text id="lp_f1_note" props={content: "手绘三视图，确定体块与性格特征。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f2_num_cell" style="height:auto; width:auto"><Text id="lp_f2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="lp_f2_name_cell" style="height:auto; width:auto"><Text id="lp_f2_name" props={content: "拓扑", tagName: "h4"}/></Container>
                  <Container id="lp_f2_note_cell" style="height:auto; width:100%"><Text id="lp_f2_note" props={content: "清面、合点，保证平直着色的面片干净。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f3_num_cell" style="height:auto; width:auto"><Text id="lp_f3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="lp_f3_name_cell" style="height:auto; width:auto"><Text id="lp_f3_name" props={content: "配色", tagName: "h4"}/></Container>
                  <Container id="lp_f3_note_cell" style="height:auto; width:100%"><Text id="lp_f3_note" props={content: "一张色板贴图，逐面片指认颜色。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f4_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f4_num_cell" style="height:auto; width:auto"><Text id="lp_f4_num" props={content: "04", tagName: "span"}/></Container>
                  <Container id="lp_f4_name_cell" style="height:auto; width:auto"><Text id="lp_f4_name" props={content: "导出", tagName: "h4"}/></Container>
                  <Container id="lp_f4_note_cell" style="height:auto; width:100%"><Text id="lp_f4_note" props={content: "导出 glTF，网页与引擎共用同一份资产。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 ─── -->
      <Container id="lp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:100px 56px; gap:32px; align-items:flex-start; position:relative; overflow:hidden">
          <Container id="lp_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="lp_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 460' preserveAspectRatio='xMidYMid slice' fill='none'><polygon points='1150,-40 1440,80 1440,-40' fill='#38E1C6' opacity='0.12'/><polygon points='980,470 1180,340 1260,470' fill='#7C6CFF' opacity='0.12'/><polygon points='60,60 140,20 170,110' stroke='#38E1C6' stroke-width='1' opacity='0.3'/><polygon points='1290,220 1360,190 1380,270' stroke='#FFB35C' stroke-width='1' opacity='0.3'/></svg>", ariaLabel: "收口区面片装饰"} style="height:100%; width:100%"/>
          </Container>
          <Container id="lp_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="lp_cta_title" props={content: "把这只鸭子带走", tagName: "h2"}/></Container>
          <Container id="lp_cta_sub_cell" style="height:auto; width:100%; max-width:560px; position:relative; z-index:1"><Text id="lp_cta_sub" props={content: "个人使用免费下载；商用授权包含源工程、UV 与色板说明。工作室接受定制委托。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="lp_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="lp_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:26px">
              <Container id="lp_cta_btn" style="height:auto; width:auto; padding:16px 40px">
                <Text id="lp_cta_btn_txt" props={content: "下载模型", tagName: "span"}/>
              </Container>
              <Container id="lp_cta_mail_cell" style="height:auto; width:auto"><Text id="lp_cta_mail" props={content: "hello@polyform.studio", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="lp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="lp_footer_left_cell" style="height:auto; width:auto"><Text id="lp_footer_left" props={content: "© 2026 POLYFORM 潮玩实验室 · 模型版权归工作室所有", tagName: "span"}/></Container>
          <Container id="lp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="lp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="lp_footer_f1_cell" style="height:auto; width:auto"><Text id="lp_footer_f1" props={content: "Sketchfab", tagName: "span"}/></Container>
              <Container id="lp_footer_f2_cell" style="height:auto; width:auto"><Text id="lp_footer_f2" props={content: "Behance", tagName: "span"}/></Container>
              <Container id="lp_footer_f3_cell" style="height:auto; width:auto"><Text id="lp_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @lp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（暗房） ──
      @lp_root = { background: #0B1220; }

      # ── 锚点落点偏移（sticky 导航避让） ──

      # ── 导航 ──
      @lp_nav_region = { background: rgba(11, 18, 32, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_nav_word_cn = { color: #EAF6F3; font-size: 16px; font-weight: 800; letter-spacing: 3.4px; }
      @lp_nav_word_en = { color: rgba(234, 246, 243, 0.45); font-size: 10px; font-weight: 600; letter-spacing: 2.6px; }
      @lp_nav_menu = {
        :scope { --anchor-item-color: rgba(234, 246, 243, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #38E1C6; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 38px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1.4px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #38E1C6; }
        :scope [data-rb-anchor-link][aria-current] { text-shadow: 0 0 18px rgba(56, 225, 198, 0.55); }
      }
      @lp_nav_cta = { background: rgba(56, 225, 198, 0.12); border: 1px solid rgba(56, 225, 198, 0.45); transition: background 0.25s ease; :scope:hover { background: rgba(56, 225, 198, 0.22); } }
      @lp_nav_cta_txt = { color: #38E1C6; font-size: 13px; font-weight: 700; letter-spacing: 1.6px; }

      # ── 首屏 ──
      @lp_hero_chip = { background: rgba(255, 179, 92, 0.12); border: 1px solid rgba(255, 179, 92, 0.4); }
      @lp_hero_chip_txt = { color: #FFB35C; font-size: 12px; font-weight: 700; letter-spacing: 2px; }
      @lp_hero_title = { color: #F2FAF8; font-size: 88px; font-weight: 900; letter-spacing: -3px; }
      @lp_hero_sub = { color: rgba(56, 225, 198, 0.75); font-size: 13px; font-weight: 700; letter-spacing: 7px; }
      @lp_hero_desc = { color: rgba(234, 246, 243, 0.66); font-size: 15px; line-height: 2.0; }
      @lp_hero_buy = { background: #38E1C6; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(56, 225, 198, 0.28); } }
      @lp_hero_buy_txt = { color: #06231D; font-size: 14.5px; font-weight: 800; letter-spacing: 2px; }
      @lp_hero_ghost = { border: 1px solid rgba(234, 246, 243, 0.3); transition: border-color 0.25s ease; :scope:hover { border-color: rgba(234, 246, 243, 0.6); } }
      @lp_hero_ghost_txt = { color: rgba(234, 246, 243, 0.85); font-size: 14.5px; font-weight: 700; letter-spacing: 2px; }
      @lp_hero_p1 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 1.4px; }
      @lp_hero_p2 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 1.4px; }
      @lp_hero_p3 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 1.4px; }
      @lp_hero_viewer_frame = { border: 1px solid rgba(56, 225, 198, 0.2); }
      @lp_hero_viewer_badge = { background: rgba(11, 18, 32, 0.72); border: 1px solid rgba(56, 225, 198, 0.3); }
      @lp_hero_viewer_badge_txt = { color: rgba(56, 225, 198, 0.9); font-size: 11px; font-weight: 700; letter-spacing: 1.6px; :scope { white-space: nowrap; } }
      @lp_hero_viewer_id = { background: rgba(11, 18, 32, 0.72); border: 1px solid rgba(255, 179, 92, 0.34); }
      @lp_hero_viewer_id_txt = { color: rgba(255, 179, 92, 0.92); font-size: 11px; font-weight: 700; letter-spacing: 1.6px; :scope { white-space: nowrap; } }

      # ── 规格带 ──
      @lp_spec_rule = { background: rgba(56, 225, 198, 0.18); }
      @lp_sp1_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 3px; }
      @lp_sp2_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 3px; }
      @lp_sp3_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 3px; }
      @lp_sp4_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 3px; }
      @lp_sp1_value = { color: #EAF6F3; font-size: 21px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_sp2_value = { color: #EAF6F3; font-size: 21px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_sp3_value = { color: #EAF6F3; font-size: 21px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_sp4_value = { color: #EAF6F3; font-size: 21px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_sp1_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.8; }
      @lp_sp2_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.8; }
      @lp_sp3_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.8; }
      @lp_sp4_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.8; }

      # ── 藏品卡 ──
      @lp_series_label = { color: #FFB35C; font-size: 11.5px; font-weight: 800; letter-spacing: 4px; }
      @lp_series_title = { color: #F2FAF8; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @lp_series_head_note = { color: rgba(234, 246, 243, 0.55); font-size: 13.5px; line-height: 1.9; }
      @lp_c1_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(56, 225, 198, 0.45); } }
      @lp_c2_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(255, 179, 92, 0.45); } }
      @lp_c3_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(124, 108, 255, 0.5); } }
      @lp_c1_num = { color: rgba(56, 225, 198, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_c2_num = { color: rgba(255, 179, 92, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_c3_num = { color: rgba(124, 108, 255, 0.9); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_c1_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c2_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c3_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c1_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.8; }
      @lp_c2_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.8; }
      @lp_c3_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.8; }
      @lp_c1_price = { color: #38E1C6; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }
      @lp_c2_price = { color: #FFB35C; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }
      @lp_c3_price = { color: #9A8CFF; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }

      # ── 工序 ──
      @lp_flow_head_l = { color: rgba(56, 225, 198, 0.8); font-size: 11.5px; font-weight: 800; letter-spacing: 4px; }
      @lp_flow_head_r = { color: rgba(234, 246, 243, 0.55); font-size: 13.5px; line-height: 1.9; }
      @lp_f1_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f2_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f3_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f4_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f1_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @lp_f2_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @lp_f3_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @lp_f4_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @lp_f1_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @lp_f2_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @lp_f3_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @lp_f4_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @lp_f1_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.85; }
      @lp_f2_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.85; }
      @lp_f3_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.85; }
      @lp_f4_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.85; }

      # ── 收口 ──
      @lp_cta_col = { background: #0E1830; border-top: 1px solid rgba(56, 225, 198, 0.16); }
      @lp_cta_title = { color: #F2FAF8; font-size: 60px; font-weight: 900; letter-spacing: -2px; }
      @lp_cta_sub = { color: rgba(234, 246, 243, 0.6); font-size: 14.5px; line-height: 1.95; }
      @lp_cta_btn = { background: #38E1C6; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(56, 225, 198, 0.28); } }
      @lp_cta_btn_txt = { color: #06231D; font-size: 14.5px; font-weight: 800; letter-spacing: 2.4px; }
      @lp_cta_mail = { color: rgba(234, 246, 243, 0.85); font-size: 14px; font-weight: 600; letter-spacing: 0.6px; border-bottom: 1px solid rgba(56, 225, 198, 0.45); padding-bottom: 3px; }

      # ── 页脚 ──
      @lp_footer_row = { border-top: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_footer_left = { color: rgba(234, 246, 243, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      @lp_footer_f1 = { color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
      @lp_footer_f2 = { color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
      @lp_footer_f3 = { cursor: pointer; color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
    </styles>
  </Page>
</App>
```
