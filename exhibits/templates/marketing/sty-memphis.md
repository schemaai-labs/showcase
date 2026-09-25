# 孟菲斯风 — 「MIXPLUS 创意热店」工作室官网

> 模板定位（营销 / 增长 tab · 风格系列）：孟菲斯（Memphis）视觉语言——高饱和撞色（品红 / 青 / 明黄 / 黑 + 米白）、粗黑描边、几何图案（波浪线 / 圆点阵 / 棋盘格 / 半圆）、**俏皮不对称**构图与倾斜元素。版式型模板：斜切色带、错位贴纸式卡片、彩色斑点装饰层。
> 场景需求：给一家虚构的创意热店做官网：米白底 + 撞色图形；首屏超大字「好玩 / 是生产力」+ 波浪与圆点装饰 + 贴纸徽章；斜向色带宣言；三张错位案例卡（粗描边 + 色块封面）；服务标签墙（胶囊贴纸）；撞色收口 CTA；页脚。零位图（全部手工 svg 图案与色块）、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="MIXPLUS 创意热店 — 孟菲斯风格官网">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="mp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="mp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="mp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="mp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="mp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="mp_nav_mark_cell" style="height:40px; width:40px; flex-shrink:0">
                <Svg id="mp_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect x='2' y='2' width='36' height='36' rx='10' fill='#fff' stroke='#111' stroke-width='3'/><circle cx='14' cy='16' r='5' fill='#FF3D8B' stroke='#111' stroke-width='2'/><path d='M22,26 q4,-8 8,0 q-4,8 -8,0 Z' fill='#18C5D5' stroke='#111' stroke-width='2'/></svg>", ariaLabel: "MIXPLUS 标志"} style="height:40px; width:40px"/>
              </Container>
              <Container id="mp_nav_word_cell" style="height:auto; width:auto"><Text id="mp_nav_word" props={content: "MIXPLUS", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="mp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="mp_nav_i1" props={itemLabel: "案例", itemTarget: "mp_work_region"} style="height:auto; width:auto"/>
              <Container id="mp_nav_i2" props={itemLabel: "玩法", itemTarget: "mp_service_region"} style="height:auto; width:auto"/>
              <Container id="mp_nav_i3" props={itemLabel: "开聊", itemTarget: "mp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="mp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="mp_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="mp_nav_cta_txt" props={content: "找个点子", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（超大字 + 图案装饰叠层 + 贴纸徽章） ─── -->
      <Container id="mp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 760' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M-40,120 q30,-36 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0' stroke='#18C5D5' stroke-width='7' stroke-linecap='round'/><g fill='#111'><circle cx='1180' cy='96' r='5'/><circle cx='1220' cy='96' r='5'/><circle cx='1260' cy='96' r='5'/><circle cx='1180' cy='136' r='5'/><circle cx='1220' cy='136' r='5'/><circle cx='1260' cy='136' r='5'/><circle cx='1180' cy='176' r='5'/><circle cx='1220' cy='176' r='5'/><circle cx='1260' cy='176' r='5'/></g><path d='M980,700 q60,-90 120,0 Z' fill='#FFD23F' stroke='#111' stroke-width='6'/><circle cx='120' cy='640' r='58' fill='#FF3D8B' stroke='#111' stroke-width='7'/><path d='M240,600 l70,0 l0,70 l-70,0 Z M310,670 l70,0 l0,70 l-70,0' fill='#111'/><path d='M1330,540 q40,60 0,120 q-40,-60 0,-120 Z' fill='#B4E33D' stroke='#111' stroke-width='5'/></svg>", ariaLabel: "孟菲斯装饰层：波浪线 / 圆点阵 / 半圆与斑点"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="mp_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:84px 48px 76px; position:relative; z-index:1; align-items:flex-start">
          <Container id="mp_hero_chip_cell" style="height:auto; width:auto">
            <Container id="mp_hero_chip" style="height:auto; width:auto; padding:9px 18px">
              <Text id="mp_hero_chip_txt" props={content: "创意热店 · 上海 / 深圳", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="mp_hero_title_cell" style="height:auto; width:auto; padding-top:30px">
            <FlexContainer id="mp_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:2px; align-items:flex-start">
              <Container id="mp_hero_l1_cell" style="height:auto; width:auto"><Text id="mp_hero_l1" props={content: "好玩", tagName: "h1"}/></Container>
              <Container id="mp_hero_l2_cell" style="height:auto; width:auto; padding-left:120px"><Text id="mp_hero_l2" props={content: "是生产力", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_hero_sub_cell" style="height:auto; width:100%; max-width:560px; padding-top:26px">
            <Text id="mp_hero_sub" props={content: "品牌、活动与内容，我们只做让人愿意多看一眼的东西。看腻了千篇一律？我们也是——所以才开这家店。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="mp_hero_actions_cell" style="height:auto; width:auto; padding-top:30px">
            <FlexContainer id="mp_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:20px">
              <Container id="mp_hero_btn_cell" style="height:auto; width:auto">
                <Container id="mp_hero_btn" style="height:auto; width:auto; padding:16px 38px">
                  <Text id="mp_hero_btn_txt" props={content: "看我们的案子", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="mp_hero_badge_cell" style="height:auto; width:auto">
                <Container id="mp_hero_badge" style="height:auto; width:auto; padding:14px 20px">
                  <Text id="mp_hero_badge_txt" props={content: "成立 9 年 · 137 个案子", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 斜向色带宣言 ─── -->
      <Container id="mp_band_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_band_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_band_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240' preserveAspectRatio='xMidYMid slice'><rect x='-80' y='-60' width='1700' height='340' fill='#FF3D8B' transform='rotate(-2 720 120)'/><g stroke='#111' stroke-width='0'><rect x='-80' y='150' width='1700' height='16' fill='#111' transform='rotate(-2 720 120)' opacity='0.9'/></g></svg>", ariaLabel: "斜向品红色带"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="mp_band_row" props={direction: "row"} style="height:auto; width:100%; padding:74px 48px; position:relative; z-index:1; align-items:center; justify-content:center; gap:26px">
          <Container id="mp_band_icon_cell" style="height:52px; width:52px; flex-shrink:0">
            <Svg id="mp_band_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><path d='M26,4 l6,16 l16,6 l-16,6 l-6,16 l-6,-16 l-16,-6 l16,-6 Z' fill='#FFD23F' stroke='#111' stroke-width='3'/></svg>", ariaLabel: "星形徽记"} style="height:52px; width:52px"/>
          </Container>
          <Container id="mp_band_text_cell" style="height:auto; width:auto">
            <Text id="mp_band_text" props={content: "别做大家已经看过的第十四版", tagName: "h2"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 案例（错位贴纸卡） ─── -->
      <Container id="mp_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_work_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 48px 110px; gap:56px">
          <Container id="mp_work_head_cell" style="height:auto; width:100%">
            <FlexContainer id="mp_work_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="mp_work_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="mp_work_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="mp_work_label_cell" style="height:auto; width:auto"><Text id="mp_work_label" props={content: "最近在忙什么 · WORKS", tagName: "span"}/></Container>
                  <Container id="mp_work_title_cell" style="height:auto; width:auto"><Text id="mp_work_title" props={content: "三个刚出锅的案子", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="mp_work_head_r_cell" style="height:auto; width:330px; flex-shrink:0"><Text id="mp_work_head_r" props={content: "从气泡水到艺术节，我们擅长把「说不清楚」变成「看一眼就懂」。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="mp_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="mp_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mp_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c1_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#18C5D5'/><path d='M40,80 q40,-52 80,0 t80,0 t80,0 t80,0' stroke='#111' stroke-width='8' fill='none' stroke-linecap='round'/><rect x='120' y='140' width='160' height='60' rx='14' fill='#FFD23F' stroke='#111' stroke-width='6'/><circle cx='200' cy='170' r='16' fill='#FF3D8B' stroke='#111' stroke-width='5'/></svg>", ariaLabel: "气泡水品牌视觉"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c1_tag_cell" style="height:auto; width:auto"><Text id="mp_c1_tag" props={content: "品牌全案", tagName: "span"}/></Container>
                    <Container id="mp_c1_name_cell" style="height:auto; width:auto"><Text id="mp_c1_name" props={content: "「噗呲」气泡水", tagName: "h3"}/></Container>
                    <Container id="mp_c1_desc_cell" style="height:auto; width:100%"><Text id="mp_c1_desc" props={content: "包装到快闪店：让一瓶水看起来就很解渴。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="mp_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding-top:44px">
                <FlexContainer id="mp_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c2_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#FFD23F'/><path d='M60,180 L120,60 L180,180 Z' fill='#B4E33D' stroke='#111' stroke-width='7'/><path d='M170,180 L230,60 L290,180 Z' fill='#FF3D8B' stroke='#111' stroke-width='7'/><circle cx='330' cy='80' r='30' fill='#18C5D5' stroke='#111' stroke-width='7'/><path d='M40,200 h320' stroke='#111' stroke-width='8'/></svg>", ariaLabel: "音乐节视觉"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c2_tag_cell" style="height:auto; width:auto"><Text id="mp_c2_tag" props={content: "活动视觉", tagName: "span"}/></Container>
                    <Container id="mp_c2_name_cell" style="height:auto; width:auto"><Text id="mp_c2_name" props={content: "「野声」音乐节", tagName: "h3"}/></Container>
                    <Container id="mp_c2_desc_cell" style="height:auto; width:100%"><Text id="mp_c2_desc" props={content: "主视觉 + 全城 200 块灯箱，两天卖光早鸟票。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="mp_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding-top:88px">
                <FlexContainer id="mp_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c3_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#B4E33D'/><g fill='#111'><rect x='60' y='50' width='44' height='44'/><rect x='148' y='50' width='44' height='44'/><rect x='236' y='50' width='44' height='44'/><rect x='104' y='94' width='44' height='44'/><rect x='192' y='94' width='44' height='44'/><rect x='280' y='94' width='44' height='44'/><rect x='60' y='138' width='44' height='44'/><rect x='148' y='138' width='44' height='44'/><rect x='236' y='138' width='44' height='44'/></g></svg>", ariaLabel: "潮玩品牌视觉"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c3_tag_cell" style="height:auto; width:auto"><Text id="mp_c3_tag" props={content: "内容创意", tagName: "span"}/></Container>
                    <Container id="mp_c3_name_cell" style="height:auto; width:auto"><Text id="mp_c3_name" props={content: "「方块动物园」潮玩", tagName: "h3"}/></Container>
                    <Container id="mp_c3_desc_cell" style="height:auto; width:100%"><Text id="mp_c3_desc" props={content: "一组会做表情的方块，三个月涨粉 12 万。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 服务贴纸墙 ─── -->
      <Container id="mp_service_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_service_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 96px; gap:34px; align-items:center">
          <Container id="mp_service_title_cell" style="height:auto; width:auto"><Text id="mp_service_title" props={content: "我们能接的活", tagName: "h2"}/></Container>
          <Container id="mp_service_row1_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_service_row1" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center; justify-content:center">
              <Container id="mp_s1_cell" style="height:auto; width:auto"><Container id="mp_s1" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s1_txt" props={content: "品牌命名", tagName: "span"}/></Container></Container>
              <Container id="mp_s2_cell" style="height:auto; width:auto"><Container id="mp_s2" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s2_txt" props={content: "视觉系统", tagName: "span"}/></Container></Container>
              <Container id="mp_s3_cell" style="height:auto; width:auto"><Container id="mp_s3" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s3_txt" props={content: "包装设计", tagName: "span"}/></Container></Container>
              <Container id="mp_s4_cell" style="height:auto; width:auto"><Container id="mp_s4" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s4_txt" props={content: "活动视觉", tagName: "span"}/></Container></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_service_row2_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_service_row2" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center; justify-content:center">
              <Container id="mp_s5_cell" style="height:auto; width:auto"><Container id="mp_s5" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s5_txt" props={content: "快闪店", tagName: "span"}/></Container></Container>
              <Container id="mp_s6_cell" style="height:auto; width:auto"><Container id="mp_s6" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s6_txt" props={content: "社媒内容", tagName: "span"}/></Container></Container>
              <Container id="mp_s7_cell" style="height:auto; width:auto"><Container id="mp_s7" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s7_txt" props={content: "IP 形象", tagName: "span"}/></Container></Container>
              <Container id="mp_s8_cell" style="height:auto; width:auto"><Container id="mp_s8" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s8_txt" props={content: "创意咨询", tagName: "span"}/></Container></Container>
              <Container id="mp_s9_cell" style="height:auto; width:auto"><Container id="mp_s9" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s9_txt" props={content: "…还有你想不到的", tagName: "span"}/></Container></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 CTA ─── -->
      <Container id="mp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 420' preserveAspectRatio='xMidYMid slice' fill='none'><rect width='1440' height='420' fill='#18C5D5'/><g fill='#FFD23F' stroke='#111' stroke-width='4'><circle cx='120' cy='90' r='40'/><circle cx='1400' cy='350' r='52'/></g><path d='M1100,60 q36,44 0,88 q-36,-44 0,-88 Z' fill='#FF3D8B' stroke='#111' stroke-width='4'/><path d='M60,340 l60,0 l0,60 l-60,0 Z' fill='#B4E33D' stroke='#111' stroke-width='4'/></svg>", ariaLabel: "青色 CTA 底色与斑点"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="mp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 48px; gap:30px; align-items:center; position:relative; z-index:1">
          <Container id="mp_cta_title_cell" style="height:auto; width:auto"><Text id="mp_cta_title" props={content: "把想法丢过来", tagName: "h2"}/></Container>
          <Container id="mp_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="mp_cta_sub" props={content: "不用整理成 PPT——一句话、一张草图、一个语音备忘都行。我们擅长把它变成能落地的东西。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="mp_cta_btn_cell" style="height:auto; width:auto; padding-top:8px">
            <Container id="mp_cta_btn" style="height:auto; width:auto; padding:18px 46px">
              <Text id="mp_cta_btn_txt" props={content: "hello@mixplus.design", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="mp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="mp_footer_left_cell" style="height:auto; width:auto"><Text id="mp_footer_left" props={content: "© 2026 MIXPLUS 创意热店 · 所有案子均为虚构演示", tagName: "span"}/></Container>
          <Container id="mp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="mp_footer_f1_cell" style="height:auto; width:auto"><Text id="mp_footer_f1" props={content: "小红书", tagName: "span"}/></Container>
              <Container id="mp_footer_f2_cell" style="height:auto; width:auto"><Text id="mp_footer_f2" props={content: "Behance", tagName: "span"}/></Container>
              <Container id="mp_footer_f3_cell" style="height:auto; width:auto"><Text id="mp_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @mp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（米白纸 + 黑描边） ──
      @mp_root = { background: #FFFBF2; }

      # ── 锚点落点偏移 ──
      @mp_work_region = { :scope { scroll-margin-top: 84px; } }
      @mp_service_region = { :scope { scroll-margin-top: 84px; } }
      @mp_cta_region = { :scope { scroll-margin-top: 84px; } }

      # ── 导航 ──
      @mp_nav_region = { background: rgba(255, 251, 242, 0.94); backdrop-filter: blur(8px); border-bottom: 3px solid #111; }
      @mp_nav_word = { color: #111; font-size: 20px; font-weight: 900; letter-spacing: 3px; }
      @mp_nav_menu = { :scope { --anchor-item-color: #111; --anchor-item-font-size: 14px; --anchor-item-font-weight: 800; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #FF3D8B; --anchor-item-active-bg: transparent; --anchor-gap: 34px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link]:hover { color: #FF3D8B; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -3px 0 #FF3D8B; }
      }
      @mp_nav_cta = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; transition: transform 0.2s ease, box-shadow 0.2s ease; :scope:hover { transform: translate(1px, 1px); box-shadow: 2px 2px 0 #111; } }
      @mp_nav_cta_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1px; }

      # ── 首屏 ──
      @mp_hero_chip = { background: #B4E33D; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_hero_chip_txt = { color: #111; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @mp_hero_l1 = { color: #111; font-size: 124px; font-weight: 900; line-height: 1.02; letter-spacing: -3px; }
      @mp_hero_l2 = { color: #FF3D8B; font-size: 124px; font-weight: 900; line-height: 1.02; letter-spacing: -3px; :scope { -webkit-text-stroke: 3px #111; } }
      @mp_hero_sub = { color: #3F3A33; font-size: 16px; line-height: 1.95; font-weight: 500; }
      @mp_hero_btn = { background: #111; border: 3px solid #111; border-radius: 999px; transition: transform 0.2s ease; :scope:hover { transform: translateY(-3px); } }
      @mp_hero_btn_txt = { color: #FFFBF2; font-size: 15px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_hero_badge = { background: #FFFBF2; border: 3px dashed #111; border-radius: 18px; }
      @mp_hero_badge_txt = { color: #111; font-size: 13px; font-weight: 700; letter-spacing: 1px; }

      # ── 宣言带 ──
      @mp_band_text = {color: #FFFBF2; font-size: 40px; font-weight: 900; letter-spacing: 1px; :scope { text-shadow: 3px 3px 0 #111; } }

      # ── 案例卡 ──
      @mp_work_label = { color: #111; background: #FFD23F; border: 2px solid #111; border-radius: 999px; padding: 5px 14px; font-size: 12px; font-weight: 800; letter-spacing: 2px; }
      @mp_work_title = { color: #111; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @mp_work_head_r = { color: #6B6357; font-size: 14px; line-height: 1.9; }
      @mp_c1_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c2_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c3_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c1_tag = { color: #111; background: #18C5D5; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_c2_tag = { color: #111; background: #FFD23F; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_c3_tag = { color: #111; background: #B4E33D; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_c1_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.3px; }
      @mp_c2_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.3px; }
      @mp_c3_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.3px; }
      @mp_c1_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.8; }
      @mp_c2_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.8; }
      @mp_c3_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.8; }

      # ── 服务贴纸 ──
      @mp_service_title = { color: #111; font-size: 46px; font-weight: 900; letter-spacing: -1.5px; }
      @mp_s1 = { background: #FF3D8B; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s2 = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s3 = { background: #18C5D5; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s4 = { background: #B4E33D; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s5 = { background: #FFFBF2; border: 3px dashed #111; border-radius: 999px; }
      @mp_s6 = { background: #FF3D8B; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s7 = { background: #18C5D5; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s8 = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s9 = { background: #111; border: 3px solid #111; border-radius: 999px; }
      @mp_s1_txt = { color: #FFFBF2; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s2_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s3_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s4_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s5_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s6_txt = { color: #FFFBF2; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s7_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s8_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }
      @mp_s9_txt = { color: #FFD23F; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; }

      # ── 收口 ──
      @mp_cta_title = {color: #111; font-size: 62px; font-weight: 900; letter-spacing: -2px; :scope { text-shadow: 4px 4px 0 #FFD23F; } }
      @mp_cta_sub = { color: #083B41; font-size: 15.5px; line-height: 1.95; font-weight: 600; text-align: center; }
      @mp_cta_btn = { background: #FFFBF2; border: 3px solid #111; border-radius: 999px; box-shadow: 5px 5px 0 #111; transition: transform 0.2s ease, box-shadow 0.2s ease; :scope:hover { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #111; } }
      @mp_cta_btn_txt = { color: #111; font-size: 17px; font-weight: 900; letter-spacing: 1.5px; }

      # ── 页脚 ──
      @mp_footer_row = { border-top: 3px solid #111; }
      @mp_footer_left = { color: #6B6357; font-size: 12.5px; letter-spacing: 0.6px; }
      @mp_footer_f1 = { color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
      @mp_footer_f2 = { color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
      @mp_footer_f3 = { cursor: pointer; color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
    </styles>
  </Page>
</App>
```
