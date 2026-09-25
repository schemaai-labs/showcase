# 黑白摄影排版风 — 「林默 LIN MO」摄影师作品集

> 模板定位（内容 / 品牌 tab · 风格系列）：黑白摄影 + 编辑排版（editorial）——纯黑白灰三阶、超大字与细字距标签的断层对比、大幅作品图叠压题注卡、竖排侧标与分栏自述。**素材驱动型模板**：作品图走平台素材库相对引用（`assets/images/kitten-portrait.jpg`，建应用时自动播种进应用素材库），页面用 CSS 滤镜统一黑白调。
> 场景需求：给一位虚构摄影师做作品集：顶部极简导航；首屏「日常的 / 纪念碑」阶梯错位大标题 + 右侧窄栏自述；全幅作品大图（黑白 + 左下叠压题注卡「编号 / 标题 / 年份 / 工艺」+ 右上竖排系列标）；四个系列行式索引；黑底自述引用带；展讯双栏；收口联系；极简页脚。零 API、静态数据、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="林默 LIN MO — 黑白摄影作品集">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="bw_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（极简） ─── -->
      <Container id="bw_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="bw_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:22px 64px">
          <Container id="bw_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="bw_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:14px">
              <Container id="bw_nav_name_cell" style="height:auto; width:auto"><Text id="bw_nav_name" props={content: "林默", tagName: "span"}/></Container>
              <Container id="bw_nav_name_en_cell" style="height:auto; width:auto"><Text id="bw_nav_name_en" props={content: "LIN MO — PHOTOGRAPHER", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="bw_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="bw_nav_i1" props={itemLabel: "作品", itemTarget: "bw_feature_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i2" props={itemLabel: "系列", itemTarget: "bw_series_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i3" props={itemLabel: "展讯", itemTarget: "bw_statement_region"} style="height:auto; width:auto"/>
              <Container id="bw_nav_i4" props={itemLabel: "联系", itemTarget: "bw_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（阶梯错位大标题 + 窄栏自述） ─── -->
      <Container id="bw_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="bw_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:72px 64px 0px; align-items:flex-start">
          <Container id="bw_hero_top_cell" style="height:auto; width:100%">
            <FlexContainer id="bw_hero_top_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center">
              <Container id="bw_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="bw_hero_eyebrow" props={content: "黑白摄影 · 作品集 · 2019 — 2026", tagName: "span"}/></Container>
              <Container id="bw_hero_count_cell" style="height:auto; width:auto"><Text id="bw_hero_count" props={content: "34 幅 / 4 系列", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_hero_rule_cell" style="height:1px; width:100%; flex-shrink:0; padding-top:22px">
            <Container id="bw_hero_rule" style="height:1px; width:100%"/>
          </Container>
          <Container id="bw_hero_main_cell" style="height:auto; width:100%; padding-top:56px">
            <FlexContainer id="bw_hero_main_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:72px">
              <Container id="bw_hero_type_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bw_hero_type_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; align-items:flex-start">
                  <Container id="bw_hero_l1_cell" style="height:auto; width:auto"><Text id="bw_hero_l1" props={content: "日常的", tagName: "h1"}/></Container>
                  <Container id="bw_hero_l2_cell" style="height:auto; width:auto; padding-left:168px"><Text id="bw_hero_l2" props={content: "纪念碑", tagName: "h1"}/></Container>
                  <Container id="bw_hero_en_cell" style="height:auto; width:auto; padding-left:172px; padding-top:18px"><Text id="bw_hero_en" props={content: "MONUMENTS OF THE ORDINARY", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_hero_side_cell" style="height:auto; width:296px; flex-shrink:0; padding-bottom:14px">
                <FlexContainer id="bw_hero_side_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start">
                  <Container id="bw_hero_side_desc_cell" style="height:auto; width:100%"><Text id="bw_hero_side_desc" props={content: "我拍那些被反复经过、却从未被真正看见的东西：一只停在窗台的猫，一段午后的墙。黑白不是怀旧，是把光留下来。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="bw_hero_side_meta_cell" style="height:auto; width:100%"><Text id="bw_hero_side_meta" props={content: "现居上海 · 作品见于《光圈》《中国摄影》", tagName: "span"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 作品大图（叠压题注卡 + 竖排系列标） ─── -->
      <Container id="bw_feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <Container id="bw_feature_stack_cell" style="height:auto; width:100%; padding:88px 64px 0px">
          <Container id="bw_feature_frame" style="height:660px; width:100%; position:relative; overflow:hidden">
            <Container id="bw_feature_img_cell" style="height:100%; width:100%">
              <Image id="bw_feature_img" props={src: "assets/images/kitten-portrait.jpg", alt: "黑白摄影作品《窗台》——午后窗前的猫", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
            </Container>
            <Container id="bw_feature_tag_cell" style="height:auto; width:auto; position:absolute; right:44px; top:44px; z-index:2">
              <Container id="bw_feature_tag" style="height:auto; width:auto; padding:14px 10px">
                <Text id="bw_feature_tag_txt" props={content: "SERIES I · 窗台", tagName: "span"}/>
              </Container>
            </Container>
            <Container id="bw_feature_cap_cell" style="height:auto; width:auto; position:absolute; left:0px; bottom:0px; z-index:2">
              <FlexContainer id="bw_feature_cap_col" props={direction: "column"} style="height:auto; width:auto; gap:8px; align-items:flex-start; padding:34px 56px 30px 64px">
                <Container id="bw_feature_cap_top_cell" style="height:auto; width:auto">
                  <FlexContainer id="bw_feature_cap_top_row" props={direction: "row"} style="height:auto; width:auto; gap:18px; align-items:baseline">
                    <Container id="bw_feature_cap_num_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_num" props={content: "01", tagName: "span"}/></Container>
                    <Container id="bw_feature_cap_title_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_title" props={content: "《窗台》 The Sill", tagName: "h3"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="bw_feature_cap_meta_cell" style="height:auto; width:auto"><Text id="bw_feature_cap_meta" props={content: "2024 · 银盐冲印 · 60 × 40 cm · 独版 3 张", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </Container>
        </Container>
      </Container>

      <!-- ─── 4. 系列索引（行式） ─── -->
      <Container id="bw_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_series_col" props={direction: "column"} style="height:auto; width:100%; padding:88px 64px 96px; gap:0px">
          <Container id="bw_series_head_cell" style="height:auto; width:100%; padding-bottom:26px">
            <FlexContainer id="bw_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end">
              <Container id="bw_series_head_l_cell" style="height:auto; width:auto"><Text id="bw_series_head_l" props={content: "系列索引 · SERIES INDEX", tagName: "span"}/></Container>
              <Container id="bw_series_head_r_cell" style="height:auto; width:auto"><Text id="bw_series_head_r" props={content: "点击查看 · 部分可售", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s1_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s1_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s1_num" props={content: "01", tagName: "span"}/></Container>
              <Container id="bw_s1_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s1_name" props={content: "《窗台》 The Sill——午后的猫与光", tagName: "h4"}/></Container>
              <Container id="bw_s1_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s1_year" props={content: "2024", tagName: "span"}/></Container>
              <Container id="bw_s1_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s1_spec" props={content: "银盐 · 60 × 40 cm", tagName: "span"}/></Container>
              <Container id="bw_s1_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s1_count" props={content: "11 幅", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s2_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s2_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s2_num" props={content: "02", tagName: "span"}/></Container>
              <Container id="bw_s2_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s2_name" props={content: "《巷口》 The Alley——傍晚的墙与影子", tagName: "h4"}/></Container>
              <Container id="bw_s2_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s2_year" props={content: "2023", tagName: "span"}/></Container>
              <Container id="bw_s2_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s2_spec" props={content: "银盐 · 50 × 40 cm", tagName: "span"}/></Container>
              <Container id="bw_s2_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s2_count" props={content: "9 幅", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s3_cell" style="height:auto; width:100%; padding:26px 0px 26px">
            <FlexContainer id="bw_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s3_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s3_num" props={content: "03", tagName: "span"}/></Container>
              <Container id="bw_s3_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s3_name" props={content: "《河岸》 The Bank——雾天的桥与货船", tagName: "h4"}/></Container>
              <Container id="bw_s3_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s3_year" props={content: "2022", tagName: "span"}/></Container>
              <Container id="bw_s3_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s3_spec" props={content: "铂金印相 · 40 × 30 cm", tagName: "span"}/></Container>
              <Container id="bw_s3_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s3_count" props={content: "8 幅", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_s4_cell" style="height:auto; width:100%; padding:26px 0px 6px">
            <FlexContainer id="bw_s4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="bw_s4_num_cell" style="height:auto; width:64px; flex-shrink:0"><Text id="bw_s4_num" props={content: "04", tagName: "span"}/></Container>
              <Container id="bw_s4_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="bw_s4_name" props={content: "《夜校》 Night School——灯泡与课桌的合唱", tagName: "h4"}/></Container>
              <Container id="bw_s4_year_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="bw_s4_year" props={content: "2021", tagName: "span"}/></Container>
              <Container id="bw_s4_spec_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="bw_s4_spec" props={content: "银盐 · 60 × 50 cm", tagName: "span"}/></Container>
              <Container id="bw_s4_count_cell" style="height:auto; width:96px; flex-shrink:0"><Text id="bw_s4_count" props={content: "6 幅", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 黑底自述引用 + 展讯 ─── -->
      <Container id="bw_statement_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_statement_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 64px; gap:88px; align-items:flex-start">
          <Container id="bw_statement_left_cell" style="height:auto; flex-basis:0; flex-grow:3; width:100%">
            <FlexContainer id="bw_statement_left_col" props={direction: "column"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="bw_statement_label_cell" style="height:auto; width:auto"><Text id="bw_statement_label" props={content: "自述 · STATEMENT", tagName: "span"}/></Container>
              <Container id="bw_statement_q1_cell" style="height:auto; width:auto"><Text id="bw_statement_q1" props={content: "「相机不替我说话，", tagName: "h2"}/></Container>
              <Container id="bw_statement_q2_cell" style="height:auto; width:auto"><Text id="bw_statement_q2" props={content: "它只让我闭嘴，看。」", tagName: "h2"}/></Container>
              <Container id="bw_statement_desc_cell" style="height:auto; width:100%; max-width:560px; padding-top:8px"><Text id="bw_statement_desc" props={content: "过去七年，我带着一台双反相机在长三角的县城间往返。《日常的纪念碑》不是关于猫、巷子或河岸——是关于我们如何与再也回不去的东西相处。每一张都只拍了两次：一次构图，一次告别。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="bw_statement_right_cell" style="height:auto; flex-basis:0; flex-grow:2; width:100%">
            <FlexContainer id="bw_statement_right_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bw_ex_label_cell" style="height:auto; width:100%; padding-bottom:22px"><Text id="bw_ex_label" props={content: "展讯 · EXHIBITION", tagName: "span"} style="height:auto; width:100%"/></Container>
              <Container id="bw_ex1_cell" style="height:auto; width:100%; padding:22px 0px">
                <FlexContainer id="bw_ex1_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex1_date_cell" style="height:auto; width:auto"><Text id="bw_ex1_date" props={content: "2026.10.17 — 11.30", tagName: "span"}/></Container>
                  <Container id="bw_ex1_name_cell" style="height:auto; width:auto"><Text id="bw_ex1_name" props={content: "上海 · 明室画廊（个展）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_ex2_cell" style="height:auto; width:100%; padding:22px 0px">
                <FlexContainer id="bw_ex2_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex2_date_cell" style="height:auto; width:auto"><Text id="bw_ex2_date" props={content: "2026.03.02 — 04.12", tagName: "span"}/></Container>
                  <Container id="bw_ex2_name_cell" style="height:auto; width:auto"><Text id="bw_ex2_name" props={content: "柏林 · KUNSTHALLE NORD（群展）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bw_ex3_cell" style="height:auto; width:100%; padding:22px 0px 0px">
                <FlexContainer id="bw_ex3_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="bw_ex3_date_cell" style="height:auto; width:auto"><Text id="bw_ex3_date" props={content: "2025.09 — 至今", tagName: "span"}/></Container>
                  <Container id="bw_ex3_name_cell" style="height:auto; width:auto"><Text id="bw_ex3_name" props={content: "巡回 · 杭州 / 成都 / 广州", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口联系 ─── -->
      <Container id="bw_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="bw_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 64px; gap:34px; align-items:flex-start">
          <Container id="bw_cta_title_cell" style="height:auto; width:auto"><Text id="bw_cta_title" props={content: "收藏或合作，都欢迎写信。", tagName: "h2"}/></Container>
          <Container id="bw_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="bw_cta_sub" props={content: "原作收藏、展览邀约与出版合作请注明来意；印刷品与限量版画在一个工作日内回复。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="bw_cta_actions_cell" style="height:auto; width:auto">
            <FlexContainer id="bw_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:30px">
              <Container id="bw_cta_btn" style="height:auto; width:auto; padding:16px 42px">
                <Text id="bw_cta_btn_txt" props={content: "写信给我", tagName: "span"}/>
              </Container>
              <Container id="bw_cta_mail_cell" style="height:auto; width:auto"><Text id="bw_cta_mail" props={content: "studio@linmo.photo", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="bw_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bw_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 64px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="bw_footer_left_cell" style="height:auto; width:auto"><Text id="bw_footer_left" props={content: "© 2026 林默 LIN MO · 影像版权归创作者所有", tagName: "span"}/></Container>
          <Container id="bw_footer_mid_cell" style="height:auto; width:auto"><Text id="bw_footer_mid" props={content: "银盐 · 铂金 · 收藏级微喷", tagName: "span"}/></Container>
          <Container id="bw_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="bw_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="bw_footer_f1_cell" style="height:auto; width:auto"><Text id="bw_footer_f1" props={content: "照片档案", tagName: "span"}/></Container>
              <Container id="bw_footer_f2_cell" style="height:auto; width:auto"><Text id="bw_footer_f2" props={content: "Instagram", tagName: "span"}/></Container>
              <Container id="bw_footer_f3_cell" style="height:auto; width:auto"><Text id="bw_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @bw_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（纸张 + 墨） ──
      @bw_root = { background: #FAFAF9; }

      # ── 锚点落点偏移（sticky 导航避让） ──

      # ── 导航 ──
      @bw_nav_region = { background: rgba(250, 250, 249, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(10, 10, 10, 0.10); }
      @bw_nav_name = { color: #0A0A0A; font-size: 19px; font-weight: 800; letter-spacing: 4px; }
      @bw_nav_name_en = { color: rgba(10, 10, 10, 0.45); font-size: 10px; font-weight: 600; letter-spacing: 3.2px; }
      @bw_nav_menu = {
        :scope { --anchor-item-color: rgba(10, 10, 10, 0.7); --anchor-item-font-size: 13px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #0A0A0A; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 44px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 2.4px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #0A0A0A; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #0A0A0A; }
      }

      # ── 首屏 ──
      @bw_hero_eyebrow = { color: rgba(10, 10, 10, 0.55); font-size: 11.5px; font-weight: 600; letter-spacing: 3.4px; }
      @bw_hero_count = { color: rgba(10, 10, 10, 0.55); font-size: 11.5px; font-weight: 600; letter-spacing: 3.4px; }
      @bw_hero_rule = { background: #0A0A0A; }
      @bw_hero_l1 = { color: #0A0A0A; font-size: 118px; font-weight: 900; line-height: 1.04; letter-spacing: -4px; }
      @bw_hero_l2 = { color: #0A0A0A; font-size: 118px; font-weight: 900; line-height: 1.04; letter-spacing: -4px; }
      @bw_hero_en = { color: rgba(10, 10, 10, 0.4); font-size: 12px; font-weight: 600; letter-spacing: 6px; }
      @bw_hero_side_desc = { color: rgba(10, 10, 10, 0.78); font-size: 14.5px; line-height: 2.0; }
      @bw_hero_side_meta = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.8px; }

      # ── 作品大图（黑白滤镜 + 叠压题注） ──
      @bw_feature_frame = { background: #0A0A0A; }
      @bw_feature_img = { filter: grayscale(1) contrast(1.06) brightness(1.02); }
      @bw_feature_tag = { background: rgba(250, 250, 249, 0.92); }
      @bw_feature_tag_txt = { color: #0A0A0A; font-size: 10.5px; font-weight: 700; letter-spacing: 3px; :scope { writing-mode: vertical-rl; } }
      @bw_feature_cap_col = { background: #FAFAF9; }
      @bw_feature_cap_num = { color: rgba(10, 10, 10, 0.5); font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @bw_feature_cap_title = { color: #0A0A0A; font-size: 22px; font-weight: 800; letter-spacing: -0.4px; }
      @bw_feature_cap_meta = { color: rgba(10, 10, 10, 0.55); font-size: 12px; letter-spacing: 1.2px; }

      # ── 系列索引 ──
      @bw_series_head_l = { color: rgba(10, 10, 10, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 3.4px; }
      @bw_series_head_r = { color: rgba(10, 10, 10, 0.4); font-size: 11.5px; letter-spacing: 1px; }
      @bw_s1_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s2_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s3_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s4_cell = { border-top: 1px solid rgba(10, 10, 10, 0.16); border-bottom: 1px solid rgba(10, 10, 10, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(10, 10, 10, 0.035); } }
      @bw_s1_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @bw_s2_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @bw_s3_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @bw_s4_num = { color: rgba(10, 10, 10, 0.42); font-size: 13px; font-weight: 700; letter-spacing: 2px; }
      @bw_s1_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.4px; }
      @bw_s2_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.4px; }
      @bw_s3_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.4px; }
      @bw_s4_name = { color: #0A0A0A; font-size: 24px; font-weight: 700; letter-spacing: -0.4px; }
      @bw_s1_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s2_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s3_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s4_year = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s1_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s2_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s3_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s4_spec = { color: rgba(10, 10, 10, 0.6); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s1_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s2_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s3_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 1.6px; }
      @bw_s4_count = { color: rgba(10, 10, 10, 0.42); font-size: 13px; letter-spacing: 1.6px; }

      # ── 自述（黑底）+ 展讯 ──
      @bw_statement_row = { background: #0A0A0A; }
      @bw_statement_label = { color: rgba(250, 250, 249, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 3.4px; }
      @bw_statement_q1 = { color: #FAFAF9; font-size: 46px; font-weight: 800; line-height: 1.5; letter-spacing: -1px; }
      @bw_statement_q2 = { color: #FAFAF9; font-size: 46px; font-weight: 800; line-height: 1.5; letter-spacing: -1px; }
      @bw_statement_desc = { color: rgba(250, 250, 249, 0.62); font-size: 14.5px; line-height: 2.1; }
      @bw_ex_label = { color: rgba(250, 250, 249, 0.5); font-size: 11.5px; font-weight: 700; letter-spacing: 3.4px; }
      @bw_ex1_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex2_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex3_cell = { border-top: 1px solid rgba(250, 250, 249, 0.18); }
      @bw_ex1_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 2px; }
      @bw_ex2_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 2px; }
      @bw_ex3_date = { color: rgba(250, 250, 249, 0.55); font-size: 12.5px; letter-spacing: 2px; }
      @bw_ex1_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.6px; }
      @bw_ex2_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.6px; }
      @bw_ex3_name = { color: #FAFAF9; font-size: 15px; font-weight: 600; letter-spacing: 0.6px; }

      # ── 收口 + 页脚 ──
      @bw_cta_col = { border-top: 1px solid rgba(10, 10, 10, 0.12); }
      @bw_cta_title = { color: #0A0A0A; font-size: 54px; font-weight: 900; letter-spacing: -2px; }
      @bw_cta_sub = { color: rgba(10, 10, 10, 0.68); font-size: 14.5px; line-height: 2.0; }
      @bw_cta_btn = { background: #0A0A0A; transition: opacity 0.25s ease, transform 0.25s ease; :scope:hover { opacity: 0.85; transform: translateY(-2px); } }
      @bw_cta_btn_txt = { color: #FAFAF9; font-size: 14px; font-weight: 800; letter-spacing: 4px; }
      @bw_cta_mail = { color: rgba(10, 10, 10, 0.85); font-size: 14px; font-weight: 600; letter-spacing: 0.6px; border-bottom: 1px solid rgba(10, 10, 10, 0.4); padding-bottom: 3px; }
      @bw_footer_row = { border-top: 1px solid rgba(10, 10, 10, 0.12); }
      @bw_footer_left = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.8px; }
      @bw_footer_mid = { color: rgba(10, 10, 10, 0.45); font-size: 12px; letter-spacing: 0.8px; }
      @bw_footer_f1 = { color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
      @bw_footer_f2 = { color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
      @bw_footer_f3 = { cursor: pointer; color: rgba(10, 10, 10, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #0A0A0A; } }
    </styles>
  </Page>
</App>
```
