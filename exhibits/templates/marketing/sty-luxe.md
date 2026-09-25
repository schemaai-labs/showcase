# 奢华极简风 — 「NOIR & OR」高级珠宝私享会

> 模板定位（营销 / 增长 tab · 风格系列）：奢华极简（Quiet Luxury）——近黑深灰底 + 香槟金细线、极细字重与超大行距、海量留白、克制的动效与徽记式小字标签。**素材驱动型模板**：一件「作品」用平台素材库照片（`assets/images/kitten-portrait.jpg`，重调性滤镜），建应用自动播种。
> 场景需求：给一场虚构的高级珠宝私享会做官网：首屏居中题字（主标题一行、金线、日期地点小字）；三件系列条目（细线分隔 + 年份 / 材质）；「本次主作品」大幅照片（暗调 + 金细框 + 题注）；私享服务三项；预约 CTA（金描边）；页脚。零 API、静态数据、一组入場编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="NOIR & OR — 高级珠宝私享会">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="lx_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（极简金线） ─── -->
      <Container id="lx_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="lx_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:24px 64px">
          <Container id="lx_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="lx_nav_brand" props={content: "NOIR & OR", tagName: "span"}/></Container>
          <Container id="lx_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="lx_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="lx_nav_i1" props={itemLabel: "系列", itemTarget: "lx_series_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i2" props={itemLabel: "主作品", itemTarget: "lx_piece_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i3" props={itemLabel: "私享服务", itemTarget: "lx_service_region"} style="height:auto; width:auto"/>
              <Container id="lx_nav_i4" props={itemLabel: "预约", itemTarget: "lx_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="lx_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="lx_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="lx_nav_cta_txt" props={content: "私享预约", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（居中题字 + 金线） ─── -->
      <Container id="lx_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="lx_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="lx_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 700' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='lxGlow' cx='0.5' cy='0.42' r='0.6'><stop offset='0' stop-color='#C9A96A' stop-opacity='0.16'/><stop offset='0.6' stop-color='#C9A96A' stop-opacity='0.03'/><stop offset='1' stop-color='#C9A96A' stop-opacity='0'/></radialGradient></defs><rect width='1440' height='700' fill='url(#lxGlow)'/><circle cx='720' cy='300' r='230' stroke='#C9A96A' stroke-width='0.8' opacity='0.3'/><circle cx='720' cy='300' r='330' stroke='#C9A96A' stroke-width='0.6' opacity='0.18'/><path d='M120,640 L1320,640' stroke='#C9A96A' stroke-width='0.8' opacity='0.35'/></svg>", ariaLabel: "暗金细环与基线"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="lx_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 150, duration: "slow"} style="height:auto; width:100%; padding:120px 64px 132px; position:relative; z-index:1; gap:30px; align-items:center">
          <Container id="lx_hero_kicker_cell" style="height:auto; width:auto"><Text id="lx_hero_kicker" props={content: "PRIVATE VIEWING · 私享预览", tagName: "span"}/></Container>
          <Container id="lx_hero_title_cell" style="height:auto; width:100%">
            <FlexContainer id="lx_hero_title_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:center">
              <Container id="lx_hero_l1_cell" style="height:auto; width:auto"><Text id="lx_hero_l1" props={content: "光进来的时候，", tagName: "h1"}/></Container>
              <Container id="lx_hero_l2_cell" style="height:auto; width:auto"><Text id="lx_hero_l2" props={content: "石头的故事才刚开始", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_hero_rule_cell" style="height:1px; width:120px; flex-shrink:0"><Container id="lx_hero_rule" style="height:1px; width:120px"/></Container>
          <Container id="lx_hero_meta_cell" style="height:auto; width:auto">
            <FlexContainer id="lx_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:44px">
              <Container id="lx_hero_meta_date_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_date" props={content: "2026.12.05 — 12.21", tagName: "span"}/></Container>
              <Container id="lx_hero_meta_place_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_place" props={content: "外滩源 · 壹号公馆 3F", tagName: "span"}/></Container>
              <Container id="lx_hero_meta_by_cell" style="height:auto; width:auto"><Text id="lx_hero_meta_by" props={content: "仅限邀请", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 系列（细线条目） ─── -->
      <Container id="lx_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_series_col" props={direction: "column"} style="height:auto; width:100%; padding:24px 64px 96px; gap:0px">
          <Container id="lx_series_head_cell" style="height:auto; width:100%; padding:26px 0px">
            <FlexContainer id="lx_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="lx_series_head_l_cell" style="height:auto; width:auto"><Text id="lx_series_head_l" props={content: "系列 · COLLECTIONS", tagName: "span"}/></Container>
              <Container id="lx_series_head_r_cell" style="height:auto; width:auto"><Text id="lx_series_head_r" props={content: "三组，共九件", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s1_cell" style="height:auto; width:100%; padding:34px 0px">
            <FlexContainer id="lx_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s1_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s1_num" props={content: "I", tagName: "span"}/></Container>
              <Container id="lx_s1_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s1_name" props={content: "《缄默》—— 未打磨的祖母绿与哑光金", tagName: "h4"}/></Container>
              <Container id="lx_s1_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s1_year" props={content: "2026", tagName: "span"}/></Container>
              <Container id="lx_s1_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s1_spec" props={content: "3 件 · 唯一款", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s2_cell" style="height:auto; width:100%; padding:34px 0px">
            <FlexContainer id="lx_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s2_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s2_num" props={content: "II", tagName: "span"}/></Container>
              <Container id="lx_s2_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s2_name" props={content: "《昼白》—— 珍珠与镜面白金", tagName: "h4"}/></Container>
              <Container id="lx_s2_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s2_year" props={content: "2025", tagName: "span"}/></Container>
              <Container id="lx_s2_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s2_spec" props={content: "3 件 · 每件 1 只", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_s3_cell" style="height:auto; width:100%; padding:34px 0px 6px">
            <FlexContainer id="lx_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:40px">
              <Container id="lx_s3_num_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="lx_s3_num" props={content: "III", tagName: "span"}/></Container>
              <Container id="lx_s3_name_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lx_s3_name" props={content: "《夜行》—— 黑玛瑙与玫瑰金", tagName: "h4"}/></Container>
              <Container id="lx_s3_year_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="lx_s3_year" props={content: "2024", tagName: "span"}/></Container>
              <Container id="lx_s3_spec_cell" style="height:auto; width:200px; flex-shrink:0"><Text id="lx_s3_spec" props={content: "3 件 · 已售 1", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 主作品（照片 + 金细框） ─── -->
      <Container id="lx_piece_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_piece_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 64px 104px; gap:36px; align-items:center">
          <Container id="lx_piece_head_cell" style="height:auto; width:100%; max-width:1040px">
            <FlexContainer id="lx_piece_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="lx_piece_label_cell" style="height:auto; width:auto"><Text id="lx_piece_label" props={content: "本次主作品 · THE PIECE", tagName: "span"}/></Container>
              <Container id="lx_piece_num_cell" style="height:auto; width:auto"><Text id="lx_piece_num" props={content: "№ 007", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lx_piece_frame_cell" style="height:auto; width:100%; max-width:1040px">
            <Container id="lx_piece_frame" style="height:620px; width:100%; position:relative; overflow:hidden">
              <Container id="lx_piece_img_cell" style="height:100%; width:100%">
                <Image id="lx_piece_img" props={src: "assets/images/kitten-portrait.jpg", alt: "主作品《雾中兽》静物摄影", objectFit: "cover", loading: "lazy"} style="height:100%; width:100%"/>
              </Container>
              <Container id="lx_piece_cap_cell" style="height:auto; width:auto; position:absolute; left:0px; bottom:0px; z-index:2">
                <FlexContainer id="lx_piece_cap_col" props={direction: "column"} style="height:auto; width:auto; gap:8px; align-items:flex-start; padding:30px 44px 26px">
                  <Container id="lx_piece_cap_title_cell" style="height:auto; width:auto"><Text id="lx_piece_cap_title" props={content: "《雾中兽》胸针", tagName: "h3"}/></Container>
                  <Container id="lx_piece_cap_desc_cell" style="height:auto; width:auto"><Text id="lx_piece_cap_desc" props={content: "18K 哑光金 · 灰月光石 · 独版", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </Container>
          </Container>
          <Container id="lx_piece_note_cell" style="height:auto; width:100%; max-width:1040px">
            <Text id="lx_piece_note" props={content: "主作品由工作室历时 11 个月完成：月光石按光晕方向逐颗筛选，金工部分保留了手工錾刻的痕迹——它不完美，但不可复制。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 私享服务 ─── -->
      <Container id="lx_service_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_service_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 64px 96px; gap:44px">
          <Container id="lx_service_head_cell" style="height:auto; width:auto"><Text id="lx_service_head" props={content: "私享服务 · SERVICES", tagName: "span"}/></Container>
          <Container id="lx_service_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="lx_service_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:0px; align-items:stretch">
              <Container id="lx_v1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 40px 0px 0px">
                <FlexContainer id="lx_v1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v1_num_cell" style="height:auto; width:auto"><Text id="lx_v1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="lx_v1_name_cell" style="height:auto; width:auto"><Text id="lx_v1_name" props={content: "一对一定制", tagName: "h4"}/></Container>
                  <Container id="lx_v1_desc_cell" style="height:auto; width:100%"><Text id="lx_v1_desc" props={content: "从选石到成托共四次面谈，主理人全程在场。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lx_v2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 40px">
                <FlexContainer id="lx_v2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v2_num_cell" style="height:auto; width:auto"><Text id="lx_v2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="lx_v2_name_cell" style="height:auto; width:auto"><Text id="lx_v2_name" props={content: "传家委托", tagName: "h4"}/></Container>
                  <Container id="lx_v2_desc_cell" style="height:auto; width:100%"><Text id="lx_v2_desc" props={content: "旧件重镶与传承档案：为每一件作品建立纸质档案与火漆封缄。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lx_v3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding:0px 0px 0px 40px">
                <FlexContainer id="lx_v3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
                  <Container id="lx_v3_num_cell" style="height:auto; width:auto"><Text id="lx_v3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="lx_v3_name_cell" style="height:auto; width:auto"><Text id="lx_v3_name" props={content: "终身养护", tagName: "h4"}/></Container>
                  <Container id="lx_v3_desc_cell" style="height:auto; width:100%"><Text id="lx_v3_desc" props={content: "每年一次免费养护与抛光，不限次数改圈口。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 预约 CTA ─── -->
      <Container id="lx_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="lx_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 64px; gap:30px; align-items:center">
          <Container id="lx_cta_title_cell" style="height:auto; width:auto"><Text id="lx_cta_title" props={content: "预约一场安静的两小时", tagName: "h2"}/></Container>
          <Container id="lx_cta_sub_cell" style="height:auto; width:100%; max-width:540px"><Text id="lx_cta_sub" props={content: "私享会每场仅接待六位来宾，提供香槟与定制试戴。请提前七日预约。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="lx_cta_btn_cell" style="height:auto; width:auto; padding-top:8px">
            <Container id="lx_cta_btn" style="height:auto; width:auto; padding:16px 46px">
              <Text id="lx_cta_btn_txt" props={content: "预约私享会", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="lx_cta_mail_cell" style="height:auto; width:auto"><Text id="lx_cta_mail" props={content: "concierge@noir-or.salon", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="lx_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lx_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 64px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="lx_footer_left_cell" style="height:auto; width:auto"><Text id="lx_footer_left" props={content: "© 2026 NOIR & OR · 品牌与作品均为虚构演示", tagName: "span"}/></Container>
          <Container id="lx_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="lx_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:30px; align-items:center">
              <Container id="lx_footer_f1_cell" style="height:auto; width:auto"><Text id="lx_footer_f1" props={content: "鉴定说明", tagName: "span"}/></Container>
              <Container id="lx_footer_f2_cell" style="height:auto; width:auto"><Text id="lx_footer_f2" props={content: "隐私", tagName: "span"}/></Container>
              <Container id="lx_footer_f3_cell" style="height:auto; width:auto"><Text id="lx_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @lx_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（近黑） ──
      @lx_root = { background: #0D0D0F; }

      # ── 导航 ──
      @lx_nav_region = { background: rgba(13, 13, 15, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(201, 169, 106, 0.22); }
      @lx_nav_brand = { color: #EFE7D8; font-size: 15px; font-weight: 600; letter-spacing: 6px; }
      @lx_nav_menu = {
        :scope { --anchor-item-color: rgba(239, 231, 216, 0.6); --anchor-item-font-size: 13px; --anchor-item-font-weight: 500; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #C9A96A; --anchor-item-active-bg: transparent; --anchor-gap: 44px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 2.4px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #EFE7D8; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 1px solid #C9A96A; }
      }
      @lx_nav_cta = { border: 1px solid rgba(201, 169, 106, 0.55); border-radius: 2px; transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.12); } }
      @lx_nav_cta_txt = { color: #C9A96A; font-size: 12.5px; font-weight: 600; letter-spacing: 2.4px; }

      # ── 首屏 ──
      @lx_hero_kicker = { color: rgba(201, 169, 106, 0.8); font-size: 11.5px; font-weight: 600; letter-spacing: 6px; }
      @lx_hero_l1 = { color: #EFE7D8; font-size: 58px; font-weight: 300; letter-spacing: 6px; line-height: 1.5; }
      @lx_hero_l2 = { color: #EFE7D8; font-size: 58px; font-weight: 300; letter-spacing: 6px; line-height: 1.5; }
      @lx_hero_rule = { background: #C9A96A; opacity: 0.7; }
      @lx_hero_meta_date = { color: rgba(239, 231, 216, 0.6); font-size: 12.5px; font-weight: 500; letter-spacing: 2.6px; }
      @lx_hero_meta_place = { color: rgba(239, 231, 216, 0.6); font-size: 12.5px; font-weight: 500; letter-spacing: 2.6px; }
      @lx_hero_meta_by = { color: #C9A96A; font-size: 12.5px; font-weight: 600; letter-spacing: 2.6px; }

      # ── 系列 ──
      @lx_series_head_cell = { border-top: 1px solid rgba(201, 169, 106, 0.3); border-bottom: 1px solid rgba(201, 169, 106, 0.3); }
      @lx_series_head_l = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 4.4px; }
      @lx_series_head_r = { color: rgba(239, 231, 216, 0.45); font-size: 11.5px; letter-spacing: 2.6px; }
      @lx_s1_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s2_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s3_cell = { border-bottom: 1px solid rgba(239, 231, 216, 0.1); transition: background 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.05); } }
      @lx_s1_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 3px; }
      @lx_s2_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 3px; }
      @lx_s3_num = { color: #C9A96A; font-size: 15px; font-weight: 500; letter-spacing: 3px; }
      @lx_s1_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 2px; }
      @lx_s2_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 2px; }
      @lx_s3_name = { color: #EFE7D8; font-size: 21px; font-weight: 300; letter-spacing: 2px; }
      @lx_s1_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }
      @lx_s2_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }
      @lx_s3_year = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }
      @lx_s1_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }
      @lx_s2_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }
      @lx_s3_spec = { color: rgba(239, 231, 216, 0.5); font-size: 12.5px; letter-spacing: 2px; }

      # ── 主作品 ──
      @lx_piece_label = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 4.4px; }
      @lx_piece_num = { color: rgba(239, 231, 216, 0.45); font-size: 11.5px; letter-spacing: 2.6px; }
      @lx_piece_frame = { border: 1px solid rgba(201, 169, 106, 0.35); }
      @lx_piece_img = { filter: grayscale(0.45) contrast(1.12) brightness(0.82) saturate(0.9); }
      @lx_piece_cap_col = { background: rgba(13, 13, 15, 0.82); backdrop-filter: blur(8px); }
      @lx_piece_cap_title = { color: #EFE7D8; font-size: 20px; font-weight: 400; letter-spacing: 3px; }
      @lx_piece_cap_desc = { color: #C9A96A; font-size: 12px; letter-spacing: 2.6px; }
      @lx_piece_note = { color: rgba(239, 231, 216, 0.55); font-size: 14px; line-height: 2.2; letter-spacing: 0.8px; }

      # ── 私享服务 ──
      @lx_service_head = { color: #C9A96A; font-size: 11.5px; font-weight: 600; letter-spacing: 4.4px; }
      @lx_v1_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v2_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v3_col = { border-top: 1px solid rgba(201, 169, 106, 0.28); padding-top: 30px; }
      @lx_v1_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 3px; }
      @lx_v2_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 3px; }
      @lx_v3_num = { color: #C9A96A; font-size: 12px; font-weight: 500; letter-spacing: 3px; }
      @lx_v1_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 2.4px; }
      @lx_v2_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 2.4px; }
      @lx_v3_name = { color: #EFE7D8; font-size: 19px; font-weight: 400; letter-spacing: 2.4px; }
      @lx_v1_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 2.1; }
      @lx_v2_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 2.1; }
      @lx_v3_desc = { color: rgba(239, 231, 216, 0.5); font-size: 13px; line-height: 2.1; }

      # ── CTA ──
      @lx_cta_region = { background: #0A0A0C; }
      @lx_cta_title = { color: #EFE7D8; font-size: 42px; font-weight: 300; letter-spacing: 5px; }
      @lx_cta_sub = { color: rgba(239, 231, 216, 0.55); font-size: 14px; line-height: 2.2; text-align: center; letter-spacing: 0.8px; }
      @lx_cta_btn = { border: 1px solid #C9A96A; border-radius: 2px; transition: background 0.3s ease, transform 0.3s ease; :scope:hover { background: rgba(201, 169, 106, 0.14); transform: translateY(-1px); } }
      @lx_cta_btn_txt = { color: #C9A96A; font-size: 14px; font-weight: 600; letter-spacing: 3.4px; }
      @lx_cta_mail = { color: rgba(239, 231, 216, 0.45); font-size: 12.5px; letter-spacing: 2.2px; }

      # ── 页脚 ──
      @lx_footer_row = { border-top: 1px solid rgba(201, 169, 106, 0.2); }
      @lx_footer_left = { color: rgba(239, 231, 216, 0.35); font-size: 12px; letter-spacing: 1.4px; }
      @lx_footer_f1 = { color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
      @lx_footer_f2 = { color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
      @lx_footer_f3 = { cursor: pointer; color: rgba(239, 231, 216, 0.55); font-size: 12.5px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #C9A96A; } }
    </styles>
  </Page>
</App>
```
