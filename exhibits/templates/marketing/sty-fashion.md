# 时尚大片风 — 「MUSE 年度企划：野性优雅」时尚特辑

> 模板定位（营销 / 增长 tab · 风格系列）：时尚大片（Fashion Editorial）——黑 / 白 / 酸性红三色、超大字号与超宽字距的刊头排印、全幅主视觉压题、编号式 LOOK 条目与「短片」放映区（平台 `video` 组件 + 海报图）。**素材驱动型模板**：封面与短片海报用平台素材库素材（`assets/images/kitten-portrait.jpg` + `assets/videos/atelier-film.mp4`，建应用自动播种）。
> 场景需求：给一本虚构时尚刊物的年度企划做特辑页：全幅封面（照片铺底 + 压题大字与刊头小字）；三组 LOOK 条目（编号 / 名称 / 单品清单）；短片放映区（视频播放器 + 海报）；企划数字带；订阅/预约 CTA；页脚。零 API、静态数据、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="MUSE 年度企划 — 野性优雅">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="fs_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="fs_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="fs_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 56px">
          <Container id="fs_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="fs_nav_brand" props={content: "MUSE", tagName: "span"}/></Container>
          <Container id="fs_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="fs_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="fs_nav_i1" props={itemLabel: "企划", itemTarget: "fs_hero_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i2" props={itemLabel: "LOOK", itemTarget: "fs_looks_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i3" props={itemLabel: "短片", itemTarget: "fs_film_region"} style="height:auto; width:auto"/>
              <Container id="fs_nav_i4" props={itemLabel: "订阅", itemTarget: "fs_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="fs_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="fs_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="fs_nav_cta_txt" props={content: "订阅特辑", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 封面（全幅压题） ─── -->
      <Container id="fs_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:84px">
        <Container id="fs_hero_media_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Image id="fs_hero_media" props={src: "assets/images/kitten-portrait.jpg", alt: "年度企划封面：野性优雅", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
        </Container>
        <Container id="fs_hero_scrim_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:1">
          <Container id="fs_hero_scrim" style="height:100%; width:100%"/>
        </Container>
        <Animate id="fs_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 140, duration: "slow"} style="height:auto; width:100%; padding:220px 56px 64px; position:relative; z-index:2; gap:0px; align-items:flex-start">
          <Container id="fs_hero_kicker_cell" style="height:auto; width:auto"><Text id="fs_hero_kicker" props={content: "年度企划 · ANNUAL ISSUE 012", tagName: "span"}/></Container>
          <Container id="fs_hero_title_cell" style="height:auto; width:auto; padding-top:26px">
            <FlexContainer id="fs_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
              <Container id="fs_hero_l1_cell" style="height:auto; width:auto"><Text id="fs_hero_l1" props={content: "野性", tagName: "h1"}/></Container>
              <Container id="fs_hero_l2_cell" style="height:auto; width:auto; padding-left:180px"><Text id="fs_hero_l2" props={content: "优雅", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_hero_meta_cell" style="height:auto; width:100%; padding-top:44px">
            <FlexContainer id="fs_hero_meta_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:32px">
              <Container id="fs_hero_meta_l_cell" style="height:auto; width:auto"><Text id="fs_hero_meta_l" props={content: "摄影 / 沈墨　造型 / 阿澈　编辑 / MUSE 编辑部", tagName: "span"}/></Container>
              <Container id="fs_hero_meta_r_cell" style="height:auto; width:auto"><Text id="fs_hero_meta_r" props={content: "共 24 页 · 含 1 支短片", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. LOOK 三组 ─── -->
      <Container id="fs_looks_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_looks_col" props={direction: "column"} style="height:auto; width:100%; padding:88px 56px 96px; gap:48px">
          <Container id="fs_looks_head_cell" style="height:auto; width:100%">
            <FlexContainer id="fs_looks_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="fs_looks_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="fs_looks_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="fs_looks_label_cell" style="height:auto; width:auto"><Text id="fs_looks_label" props={content: "LOOKS · 三组造型", tagName: "span"}/></Container>
                  <Container id="fs_looks_title_cell" style="height:auto; width:auto"><Text id="fs_looks_title" props={content: "先有姿态，再有衣服", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="fs_looks_head_r_cell" style="height:auto; width:320px; flex-shrink:0"><Text id="fs_looks_head_r" props={content: "三组造型均由旧衣改制——可持续不是口号，是剪裁台上的选择。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_looks_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="fs_looks_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="fs_l1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l1_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#141414'/><path d='M190,40 L250,120 L190,240 L130,120 Z' fill='#F5F5F2'/><path d='M190,40 L250,120 L190,240 Z' fill='#D6D6D0'/><circle cx='304' cy='64' r='34' fill='#E8362F'/></svg>", ariaLabel: "LOOK 01 造型构成"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l1_num_cell" style="height:auto; width:auto"><Text id="fs_l1_num" props={content: "LOOK 01", tagName: "span"}/></Container>
                    <Container id="fs_l1_name_cell" style="height:auto; width:auto"><Text id="fs_l1_name" props={content: "旧风衣的重生", tagName: "h3"}/></Container>
                    <Container id="fs_l1_desc_cell" style="height:auto; width:100%"><Text id="fs_l1_desc" props={content: "1998 年的军绿风衣，拆解后重新拼接为斗篷廓形。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="fs_l2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l2_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#F5F5F2'/><rect x='90' y='50' width='120' height='180' rx='8' fill='#141414'/><rect x='120' y='90' width='180' height='130' rx='8' fill='#E8362F' opacity='0.92'/><path d='M60,250 L320,250' stroke='#141414' stroke-width='3'/></svg>", ariaLabel: "LOOK 02 造型构成"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l2_num_cell" style="height:auto; width:auto"><Text id="fs_l2_num" props={content: "LOOK 02", tagName: "span"}/></Container>
                    <Container id="fs_l2_name_cell" style="height:auto; width:auto"><Text id="fs_l2_name" props={content: "一件红，其余留白", tagName: "h3"}/></Container>
                    <Container id="fs_l2_desc_cell" style="height:auto; width:100%"><Text id="fs_l2_desc" props={content: "红色羊绒背心来自库存尾料，搭配白色阔腿裤与旧皮鞋。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="fs_l3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="fs_l3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="fs_l3_fig_cell" style="height:280px; width:100%; flex-shrink:0">
                    <Svg id="fs_l3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 280' preserveAspectRatio='xMidYMid slice'><rect width='380' height='280' fill='#E8362F'/><circle cx='190' cy='140' r='86' fill='#141414'/><circle cx='190' cy='140' r='52' fill='#F5F5F2'/><rect x='160' y='36' width='60' height='208' fill='#141414' opacity='0.85'/></svg>", ariaLabel: "LOOK 03 造型构成"} style="height:280px; width:100%"/>
                  </Container>
                  <FlexContainer id="fs_l3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 24px 26px">
                    <Container id="fs_l3_num_cell" style="height:auto; width:auto"><Text id="fs_l3_num" props={content: "LOOK 03", tagName: "span"}/></Container>
                    <Container id="fs_l3_name_cell" style="height:auto; width:auto"><Text id="fs_l3_name" props={content: "夜色与光的对话", tagName: "h3"}/></Container>
                    <Container id="fs_l3_desc_cell" style="height:auto; width:100%"><Text id="fs_l3_desc" props={content: "黑色缎面长裙 + 银色配饰，在闪光灯下只有轮廓。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 短片放映区 ─── -->
      <Container id="fs_film_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_film_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 56px 104px; gap:56px; align-items:center">
          <Container id="fs_film_copy_cell" style="height:auto; width:380px; flex-shrink:0">
            <FlexContainer id="fs_film_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="fs_film_label_cell" style="height:auto; width:auto"><Text id="fs_film_label" props={content: "短片 · THE FILM", tagName: "span"}/></Container>
              <Container id="fs_film_title_cell" style="height:auto; width:auto"><Text id="fs_film_title" props={content: "02:11 的幕后", tagName: "h2"}/></Container>
              <Container id="fs_film_desc_cell" style="height:auto; width:100%"><Text id="fs_film_desc" props={content: "拍摄当天下了半天雨，我们把布景搬进了室内。这支短片记录了造型师与模特在有限空间里的即兴：没有剧本，只有音乐和镜头。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="fs_film_meta_cell" style="height:auto; width:auto"><Text id="fs_film_meta" props={content: "导演 / 阿澈　时长 / 02:11　4K", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="fs_film_player_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <Container id="fs_film_player_frame" style="height:auto; width:100%; padding:14px">
              <Container id="fs_film_player_media_cell" style="height:auto; width:100%">
                <Video id="fs_film_player" props={src: "assets/videos/atelier-film.mp4", poster: "assets/images/kitten-portrait.jpg", controls: true} style="height:auto; width:100%"/>
              </Container>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 数字带 ─── -->
      <Container id="fs_stats_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="fs_stats_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="fs_stats_rule_cell" style="height:3px; width:100%; flex-shrink:0"><Container id="fs_stats_rule" style="height:3px; width:100%"/></Container>
          <FlexContainer id="fs_stats_row" props={direction: "row"} style="height:auto; width:100%; padding:44px 0px 48px; gap:32px; align-items:flex-start">
            <Container id="fs_st1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st1_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st1_num_cell" style="height:auto; width:auto"><Text id="fs_st1_num" props={content: "24 页", tagName: "h4"}/></Container>
                <Container id="fs_st1_label_cell" style="height:auto; width:auto"><Text id="fs_st1_label" props={content: "特辑总篇幅", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st2_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st2_num_cell" style="height:auto; width:auto"><Text id="fs_st2_num" props={content: "3 组", tagName: "h4"}/></Container>
                <Container id="fs_st2_label_cell" style="height:auto; width:auto"><Text id="fs_st2_label" props={content: "旧衣改制造型", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st3_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st3_num_cell" style="height:auto; width:auto"><Text id="fs_st3_num" props={content: "1 支", tagName: "h4"}/></Container>
                <Container id="fs_st3_label_cell" style="height:auto; width:auto"><Text id="fs_st3_label" props={content: "幕后短片", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="fs_st4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="fs_st4_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="fs_st4_num_cell" style="height:auto; width:auto"><Text id="fs_st4_num" props={content: "0 件新购", tagName: "h4"}/></Container>
                <Container id="fs_st4_label_cell" style="height:auto; width:auto"><Text id="fs_st4_label" props={content: "造型全部来自库存与二手", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 订阅 CTA ─── -->
      <Container id="fs_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="fs_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:92px 56px; gap:28px; align-items:center">
          <Container id="fs_cta_kicker_cell" style="height:auto; width:auto"><Text id="fs_cta_kicker" props={content: "SEASON PASS", tagName: "span"}/></Container>
          <Container id="fs_cta_title_cell" style="height:auto; width:auto"><Text id="fs_cta_title" props={content: "下一期，从封面开始收藏", tagName: "h2"}/></Container>
          <Container id="fs_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="fs_cta_sub" props={content: "纸质特辑 ¥128 / 年四期；电子版随刊附赠。订阅用户可优先预约线下拍摄企划。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="fs_cta_btn_cell" style="height:auto; width:auto; padding-top:6px">
            <Container id="fs_cta_btn" style="height:auto; width:auto; padding:17px 44px">
              <Text id="fs_cta_btn_txt" props={content: "订阅全年", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="fs_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="fs_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 56px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="fs_footer_left_cell" style="height:auto; width:auto"><Text id="fs_footer_left" props={content: "© 2026 MUSE 编辑部 · 刊物与人物均为虚构演示", tagName: "span"}/></Container>
          <Container id="fs_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="fs_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="fs_footer_f1_cell" style="height:auto; width:auto"><Text id="fs_footer_f1" props={content: "往期", tagName: "span"}/></Container>
              <Container id="fs_footer_f2_cell" style="height:auto; width:auto"><Text id="fs_footer_f2" props={content: "投稿", tagName: "span"}/></Container>
              <Container id="fs_footer_f3_cell" style="height:auto; width:auto"><Text id="fs_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @fs_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调 ──
      @fs_root = { background: #F5F5F2; }

      # ── 导航 ──
      @fs_nav_region = { background: rgba(245, 245, 242, 0.94); backdrop-filter: blur(10px); border-bottom: 3px solid #141414; }
      @fs_nav_brand = { color: #141414; font-size: 22px; font-weight: 900; letter-spacing: 12px; }
      @fs_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.72); --anchor-item-font-size: 13px; --anchor-item-font-weight: 700; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #E8362F; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 2.6px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #E8362F; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -3px 0 #E8362F; }
      }
      @fs_nav_cta = { background: #141414; transition: background 0.25s ease; :scope:hover { background: #E8362F; } }
      @fs_nav_cta_txt = { color: #F5F5F2; font-size: 13px; font-weight: 800; letter-spacing: 2.4px; }

      # ── 封面 ──
      @fs_hero_media = { filter: saturate(1.12) contrast(1.05); }
      @fs_hero_scrim = { background: linear-gradient(180deg, rgba(10, 10, 10, 0.05) 0%, rgba(10, 10, 10, 0.28) 55%, rgba(10, 10, 10, 0.78) 100%); }
      @fs_hero_kicker = { color: #F5F5F2; font-size: 12px; font-weight: 700; letter-spacing: 6px; }
      @fs_hero_l1 = { color: #FFFFFF; font-size: 148px; font-weight: 900; line-height: 0.98; letter-spacing: -6px; :scope { text-shadow: 0 3px 26px rgba(0, 0, 0, 0.4); } }
      @fs_hero_l2 = { color: #F5F5F2; font-size: 148px; font-weight: 900; line-height: 0.98; letter-spacing: -6px; :scope { -webkit-text-stroke: 3px #141414; } }
      @fs_hero_meta_l = { color: rgba(245, 245, 242, 0.85); font-size: 12.5px; font-weight: 600; letter-spacing: 2px; }
      @fs_hero_meta_r = { color: rgba(245, 245, 242, 0.85); font-size: 12.5px; font-weight: 600; letter-spacing: 2px; }

      # ── LOOK ──
      @fs_looks_label = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 5px; }
      @fs_looks_title = { color: #141414; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @fs_looks_head_r = { color: rgba(20, 20, 20, 0.62); font-size: 14px; line-height: 1.9; }
      @fs_l1_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 3px; }
      @fs_l2_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 3px; }
      @fs_l3_num = { color: #E8362F; font-size: 12.5px; font-weight: 800; letter-spacing: 3px; }
      @fs_l1_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.4px; }
      @fs_l2_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.4px; }
      @fs_l3_name = { color: #141414; font-size: 22px; font-weight: 800; letter-spacing: 0.4px; }
      @fs_l1_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }
      @fs_l2_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }
      @fs_l3_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.85; }
      @fs_l1_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @fs_l2_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @fs_l3_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }

      # ── 短片 ──
      @fs_film_label = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 5px; }
      @fs_film_title = { color: #141414; font-size: 48px; font-weight: 900; letter-spacing: -2px; }
      @fs_film_desc = { color: rgba(20, 20, 20, 0.66); font-size: 14px; line-height: 2.05; }
      @fs_film_meta = { color: rgba(20, 20, 20, 0.45); font-size: 12px; letter-spacing: 1.6px; }
      @fs_film_player_frame = { background: #141414; }
      @fs_film_player_media_cell = { background: #000000; }

      # ── 数字带 ──
      @fs_stats_rule = { background: #141414; }
      @fs_st1_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @fs_st2_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @fs_st3_num = { color: #141414; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @fs_st4_num = { color: #E8362F; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @fs_st1_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @fs_st2_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @fs_st3_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }
      @fs_st4_label = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 1.2px; }

      # ── CTA ──
      @fs_cta_region = { background: #141414; }
      @fs_cta_kicker = { color: #E8362F; font-size: 12px; font-weight: 800; letter-spacing: 6px; }
      @fs_cta_title = { color: #F5F5F2; font-size: 54px; font-weight: 900; letter-spacing: -2px; }
      @fs_cta_sub = { color: rgba(245, 245, 242, 0.66); font-size: 14.5px; line-height: 2.0; text-align: center; }
      @fs_cta_btn = { background: #E8362F; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(232, 54, 47, 0.4); } }
      @fs_cta_btn_txt = { color: #FFFFFF; font-size: 15px; font-weight: 800; letter-spacing: 4px; }

      # ── 页脚 ──
      @fs_footer_row = { border-top: 1px solid rgba(20, 20, 20, 0.16); }
      @fs_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.6px; }
      @fs_footer_f1 = { color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
      @fs_footer_f2 = { color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
      @fs_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.7); font-size: 13px; letter-spacing: 1.6px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8362F; } }
    </styles>
  </Page>
</App>
```
