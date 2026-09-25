# 叙事滚动风 — 「城市的一天」纪实影像叙事

> 模板定位（交互 / 动效 tab · 风格系列）：叙事滚动（Scroll Narrative）——把「一天的三个时刻」做成滚动驱动的章节叙事：顶部**阅读进度条**（`motion.progress`）+ 每章一组 **scrub 滚动补间**（`motion.scroll` + `rhythm` 节奏档位，进度随滚动推进、回退可逆）+ 黄昏章的**视差装饰层**（`motion.parallax`）。首屏一次性入场（`onMount`，绝不用 scrub）。
> 场景需求：给一组虚构的城市纪实影像做叙事长页：全幅封面（照片 + 压题 + 向下滚动提示）；清晨 / 正午 / 黄昏三章（章节号 + 大字 + 图文构成，逐章 scrub 展开）；收口页（去线下看展 CTA）。**素材驱动**：封面与正午章用平台素材库照片（建应用自动播种）。零 API、静态数据。

```lang
<App dsl-version="0.3" name="城市的一天 — 纪实影像叙事">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="sn_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 阅读进度条（吸顶；motion.progress 刻度填充） ─── -->
      <Container id="sn_progress_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:60">
        <Container id="sn_progress_track" style="height:3px; width:100%">
          <Container id="sn_progress_fill" style="height:3px; width:100%"/>
        </Container>
      </Container>

      <!-- ─── 1. 导航 ─── -->
      <Container id="sn_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:3px; z-index:50">
        <FlexContainer id="sn_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="sn_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="sn_nav_brand" props={content: "城市的一天 · A CITY DAY", tagName: "span"}/></Container>
          <Container id="sn_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="sn_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="sn_nav_i1" props={itemLabel: "清晨", itemTarget: "sn_ch1_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i2" props={itemLabel: "正午", itemTarget: "sn_ch2_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i3" props={itemLabel: "黄昏", itemTarget: "sn_ch3_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i4" props={itemLabel: "去处", itemTarget: "sn_outro_band"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="sn_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="sn_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="sn_nav_cta_txt" props={content: "看线下展", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 封面（全幅照片 + 压题） ─── -->
      <Container id="sn_hero_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="sn_hero_media_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Image id="sn_hero_media" props={src: "assets/images/kitten-portrait.jpg", alt: "封面：城市的一天", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
        </Container>
        <Container id="sn_hero_scrim_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Container id="sn_hero_scrim" style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="sn_hero_stack" props={direction: "column"} style="height:auto; width:100%; padding:170px 48px 54px; position:relative; z-index:1; gap:26px; align-items:flex-start">
          <Container id="sn_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="sn_hero_eyebrow" props={content: "纪实影像 · 长三角 · 2024—2026", tagName: "span"}/></Container>
          <Container id="sn_hero_title_cell" style="height:auto; width:auto"><Text id="sn_hero_title" props={content: "城市的一天", tagName: "h1"}/></Container>
          <Container id="sn_hero_sub_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_hero_sub" props={content: "同一扇窗，三种光。摄影师在同一位置等待了 217 天——只为了记录时间如何落在一座城里。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sn_hero_hint_row_cell" style="height:auto; width:auto; padding-top:20px">
            <FlexContainer id="sn_hero_hint_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="sn_hero_hint_dot_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="sn_hero_hint_dot" style="height:10px; width:10px"/></Container>
              <Container id="sn_hero_hint_text_cell" style="height:auto; width:auto"><Text id="sn_hero_hint_text" props={content: "向下滚动，依次进入三个时刻", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 第一章 · 清晨（scrub） ─── -->
      <Container id="sn_ch1_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_ch1_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 48px; gap:64px; align-items:center">
          <Container id="sn_ch1_visual_cell" style="height:auto; width:340px; flex-shrink:0">
            <Container id="sn_ch1_visual_frame" style="height:380px; width:100%">
              <Svg id="sn_ch1_visual" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 380' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='snDawn' x1='0' y1='0' x2='0' y2='380'><stop offset='0' stop-color='#F2C6A0'/><stop offset='0.55' stop-color='#E8A87C'/><stop offset='1' stop-color='#3E5C76'/></linearGradient></defs><rect width='340' height='380' fill='url(#snDawn)'/><circle cx='170' cy='150' r='54' fill='#F7E4C8' opacity='0.9'/><g stroke='#3A3A3A' stroke-width='2' opacity='0.5'><line x1='0' y1='252' x2='340' y2='252'/><line x1='0' y1='276' x2='340' y2='276'/><line x1='0' y1='300' x2='340' y2='300'/></g><path d='M40,380 L40,300 L80,300 L80,380 Z M120,380 L120,272 L156,272 L156,380 Z M196,380 L196,308 L244,308 L244,380 Z M280,380 L280,286 L322,286 L322,380 Z' fill='#2A2A2E' opacity='0.85'/></svg>", ariaLabel: "清晨：窗台与日出"} style="height:380px; width:100%"/>
            </Container>
          </Container>
          <Container id="sn_ch1_copy_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_ch1_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="sn_ch1_num_cell" style="height:auto; width:auto"><Text id="sn_ch1_num" props={content: "第一章 · 05:40", tagName: "span"}/></Container>
              <Container id="sn_ch1_title_cell" style="height:auto; width:auto"><Text id="sn_ch1_title" props={content: "城市先醒来的是光", tagName: "h2"}/></Container>
              <Container id="sn_ch1_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_ch1_desc" props={content: "第一班公交进站时，楼群的窗户还没睁开。只有东边的天际线先亮起来——像有人把城市从内侧点着了。这个瞬间大约持续十一分钟，晚到的人只能看到灰白。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sn_ch1_meta_cell" style="height:auto; width:auto"><Text id="sn_ch1_meta" props={content: "拍摄地 / 苏州河畔某栋居民楼 11 层", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 第二章 · 正午（照片 + scrub 强调档） ─── -->
      <Container id="sn_ch2_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_ch2_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 48px 104px; gap:64px; align-items:center">
          <Container id="sn_ch2_copy_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_ch2_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="sn_ch2_num_cell" style="height:auto; width:auto"><Text id="sn_ch2_num" props={content: "第二章 · 12:20", tagName: "span"}/></Container>
              <Container id="sn_ch2_title_cell" style="height:auto; width:auto"><Text id="sn_ch2_title" props={content: "正午，影子缩到最小", tagName: "h2"}/></Container>
              <Container id="sn_ch2_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_ch2_desc" props={content: "中午的城市是失焦的：外卖、快递、遮阳伞，所有人都在赶路，没有人停下来。我按下快门的理由是——它在看。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sn_ch2_meta_cell" style="height:auto; width:auto"><Text id="sn_ch2_meta" props={content: "拍摄地 / 同一窗台 · 夏至后第三天", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sn_ch2_visual_cell" style="height:auto; width:520px; flex-shrink:0">
            <Container id="sn_ch2_visual_frame" style="height:420px; width:100%; position:relative; overflow:hidden">
              <Image id="sn_ch2_visual" props={src: "assets/images/kitten-portrait.jpg", alt: "正午：窗台上的注视", objectFit: "cover", loading: "lazy"} style="height:100%; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 第三章 · 黄昏（视差层 + scrub 缓入档） ─── -->
      <Container id="sn_ch3_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:96px">
        <Container id="sn_ch3_parallax_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="sn_ch3_parallax" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 700' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='snDusk' x1='0' y1='0' x2='0' y2='700'><stop offset='0' stop-color='#7C4A3A'/><stop offset='0.5' stop-color='#C9784E'/><stop offset='1' stop-color='#2E2A38'/></linearGradient></defs><rect width='1440' height='700' fill='url(#snDusk)'/><circle cx='1080' cy='300' r='90' fill='#F2D6A8' opacity='0.85'/><path d='M0,420 C240,380 420,460 720,420 C1020,380 1240,440 1440,410 L1440,700 L0,700 Z' fill='#33304A' opacity='0.75'/><path d='M0,520 C280,470 520,560 820,510 C1100,466 1300,530 1440,500 L1440,700 L0,700 Z' fill='#211F2E' opacity='0.9'/></svg>", ariaLabel: "黄昏：层叠山影装饰（视差层）"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="sn_ch3_stack" props={direction: "column"} style="height:auto; width:100%; padding:150px 48px 130px; position:relative; z-index:1; gap:24px; align-items:center">
          <Container id="sn_ch3_num_cell" style="height:auto; width:auto"><Text id="sn_ch3_num" props={content: "第三章 · 18:05", tagName: "span"}/></Container>
          <Container id="sn_ch3_title_cell" style="height:auto; width:auto"><Text id="sn_ch3_title" props={content: "黄昏把白天折叠起来", tagName: "h2"}/></Container>
          <Container id="sn_ch3_desc_cell" style="height:auto; width:100%; max-width:620px"><Text id="sn_ch3_desc" props={content: "傍晚的光不落在物体上，它落在空气里。整条街像被泡在茶汤里慢慢变浓——这是相机最诚实、也最容易失手的时刻。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sn_ch3_note_cell" style="height:auto; width:auto; padding-top:10px"><Text id="sn_ch3_note" props={content: "本页滚动时，背后山影以不同速率移动", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 ─── -->
      <Container id="sn_outro_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_outro_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 48px; gap:72px; align-items:flex-start">
          <Container id="sn_outro_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_outro_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="sn_outro_title_cell" style="height:auto; width:auto"><Text id="sn_outro_title" props={content: "去看完整的一天", tagName: "h2"}/></Container>
              <Container id="sn_outro_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_outro_desc" props={content: "线上看到的是节选：完整展陈包含 217 天的逐日影像与一段 12 分钟的声音记录。展期三个月，免费预约。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sn_outro_right_cell" style="height:auto; width:340px; flex-shrink:0">
            <FlexContainer id="sn_outro_right_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
              <Container id="sn_outro_place_cell" style="height:auto; width:auto"><Text id="sn_outro_place" props={content: "上海 · 苏州河畔影像空间 B1", tagName: "span"}/></Container>
              <Container id="sn_outro_date_cell" style="height:auto; width:auto"><Text id="sn_outro_date" props={content: "2026.10.01 — 12.31 · 周一闭馆", tagName: "span"}/></Container>
              <Container id="sn_outro_btn_cell" style="height:auto; width:auto; padding-top:8px">
                <Container id="sn_outro_btn" style="height:auto; width:auto; padding:15px 36px">
                  <Text id="sn_outro_btn_txt" props={content: "预约观展", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="sn_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sn_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="sn_footer_left_cell" style="height:auto; width:auto"><Text id="sn_footer_left" props={content: "© 2026 城市的一天 · 影像与展讯均为虚构演示", tagName: "span"}/></Container>
          <Container id="sn_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="sn_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="sn_footer_f1_cell" style="height:auto; width:auto"><Text id="sn_footer_f1" props={content: "摄影师手记", tagName: "span"}/></Container>
              <Container id="sn_footer_f2_cell" style="height:auto; width:auto"><Text id="sn_footer_f2" props={content: "影像授权", tagName: "span"}/></Container>
              <Container id="sn_footer_f3_cell" style="height:auto; width:auto"><Text id="sn_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏一次性入场（onMount；滚动前完整可见）
      @sn_hero_band = {
        events: { playHero: { trigger: "onMount", action: motion.play({targets: ["sn_hero_eyebrow", "sn_hero_title", "sn_hero_sub", "sn_hero_hint_row"], effect: "fadeInUp", stagger: 120, duration: "slow"}) } }
      };
      # 阅读进度条（缺省源 = 滚动容器阅读进度；刻度直映填充条宽度）
      @sn_progress_region = {
        events: { trackProgress: { trigger: "onMount", action: motion.progress({targets: ["sn_progress_fill"], axis: "x"}) } }
      };
      # 三章 scrub（进度随滚动推进、回退可逆；节奏档位按章节气质选）
      @sn_ch1_band = {
        events: { scrubDawn: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch1_visual_cell", "sn_ch1_copy_col"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      @sn_ch2_band = {
        events: { scrubNoon: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch2_copy_col", "sn_ch2_visual_cell"], effect: "fadeInUp", rhythm: "emphasis"}) } }
      };
      @sn_ch3_band = {
        events: { scrubDusk: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch3_num", "sn_ch3_title", "sn_ch3_desc"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      # 黄昏山影视差层（速率 0.42 = 慢速漂浮）
      @sn_ch3_parallax_cell = {
        events: { driftDusk: { trigger: "onMount", action: motion.parallax({targets: ["sn_ch3_parallax"], speed: 0.42}) } }
      };
      # 收口揭示
      @sn_outro_band = {
        events: { revealOutro: { trigger: "onMount", action: motion.scroll({targets: ["sn_outro_left_col", "sn_outro_right_col"], effect: "fadeInUp", rhythm: "standard"}) } }
      };
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @sn_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调 ──
      @sn_root = { background: #101014; }

      # ── 进度条 / 导航 ──
      @sn_progress_track = { background: rgba(255, 255, 255, 0.1); }
      @sn_progress_fill = { background: linear-gradient(90deg, #E8A87C 0%, #F2D6A8 100%); }
      @sn_nav_region = { background: rgba(16, 16, 20, 0.82); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
      @sn_nav_brand = { color: rgba(245, 243, 238, 0.9); font-size: 14px; font-weight: 700; letter-spacing: 3.4px; }
      @sn_nav_menu = {
        :scope { --anchor-item-color: rgba(245, 243, 238, 0.6); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #E8A87C; --anchor-item-active-bg: transparent; --anchor-gap: 38px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1.4px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #F2D6A8; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #E8A87C; }
      }
      @sn_nav_cta = { border: 1px solid rgba(232, 168, 124, 0.5); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(232, 168, 124, 0.14); } }
      @sn_nav_cta_txt = { color: #E8A87C; font-size: 12.5px; font-weight: 700; letter-spacing: 1.6px; }

      # ── 封面（照片作暗调背景） ──
      @sn_hero_media = { filter: grayscale(0.35) brightness(0.5) contrast(1.05); }
      @sn_hero_scrim = { background: linear-gradient(180deg, rgba(16, 16, 20, 0.25) 0%, rgba(16, 16, 20, 0.55) 60%, rgba(16, 16, 20, 0.92) 100%); }
      @sn_hero_eyebrow = { color: rgba(242, 214, 168, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 4.4px; }
      @sn_hero_title = { color: #F5F3EE; font-size: 96px; font-weight: 900; letter-spacing: -4px; }
      @sn_hero_sub = { color: rgba(245, 243, 238, 0.72); font-size: 15.5px; line-height: 2.0; }
      @sn_hero_hint_dot = { background: #E8A87C; border-radius: 999px; }
      @sn_hero_hint_text = { color: rgba(245, 243, 238, 0.6); font-size: 12.5px; letter-spacing: 2px; }

      # ── 章节 ──
      @sn_ch1_num = { color: #E8A87C; font-size: 12.5px; font-weight: 800; letter-spacing: 4px; }
      @sn_ch2_num = { color: #E8A87C; font-size: 12.5px; font-weight: 800; letter-spacing: 4px; }
      @sn_ch3_num = { color: #F2D6A8; font-size: 12.5px; font-weight: 800; letter-spacing: 4px; }
      @sn_ch1_title = { color: #F5F3EE; font-size: 54px; font-weight: 900; letter-spacing: -2px; }
      @sn_ch2_title = { color: #F5F3EE; font-size: 54px; font-weight: 900; letter-spacing: -2px; }
      @sn_ch3_title = { color: #FFFFFF; font-size: 60px; font-weight: 900; letter-spacing: -2.4px; }
      @sn_ch1_desc = { color: rgba(245, 243, 238, 0.66); font-size: 15px; line-height: 2.1; }
      @sn_ch2_desc = { color: rgba(245, 243, 238, 0.66); font-size: 15px; line-height: 2.1; }
      @sn_ch3_desc = { color: rgba(255, 250, 240, 0.82); font-size: 15px; line-height: 2.1; text-align: center; }
      @sn_ch1_meta = { color: rgba(245, 243, 238, 0.42); font-size: 12px; letter-spacing: 1.6px; }
      @sn_ch2_meta = { color: rgba(245, 243, 238, 0.42); font-size: 12px; letter-spacing: 1.6px; }
      @sn_ch3_note = { color: rgba(255, 250, 240, 0.55); font-size: 12px; letter-spacing: 2px; }
      @sn_ch1_visual_frame = { border-radius: 18px; overflow: hidden; box-shadow: 0 22px 54px rgba(0, 0, 0, 0.45); }
      @sn_ch2_visual_frame = { border-radius: 18px; overflow: hidden; box-shadow: 0 22px 54px rgba(0, 0, 0, 0.45); }
      @sn_ch2_visual = { filter: saturate(1.05) contrast(1.03); }

      # ── 收口 ──
      @sn_outro_band = { background: #16161C; }
      @sn_outro_title = { color: #F5F3EE; font-size: 52px; font-weight: 900; letter-spacing: -2px; }
      @sn_outro_desc = { color: rgba(245, 243, 238, 0.66); font-size: 14.5px; line-height: 2.1; }
      @sn_outro_place = { color: rgba(245, 243, 238, 0.8); font-size: 14px; font-weight: 600; letter-spacing: 1px; }
      @sn_outro_date = { color: rgba(245, 243, 238, 0.5); font-size: 13px; letter-spacing: 1.2px; }
      @sn_outro_btn = { background: #E8A87C; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(232, 168, 124, 0.35); } }
      @sn_outro_btn_txt = { color: #1A1A20; font-size: 14.5px; font-weight: 800; letter-spacing: 2.4px; }

      # ── 页脚 ──
      @sn_footer_row = { border-top: 1px solid rgba(255, 255, 255, 0.1); }
      @sn_footer_left = { color: rgba(245, 243, 238, 0.4); font-size: 12.5px; letter-spacing: 0.6px; }
      @sn_footer_f1 = { color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
      @sn_footer_f2 = { color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
      @sn_footer_f3 = { cursor: pointer; color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
    </styles>
  </Page>
</App>
```
