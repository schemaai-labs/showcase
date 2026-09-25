# Narrative scroll — "A CITY DAY" documentary photo essay

> Template role (interaction / motion tab · style series): narrative scroll — "three moments in one
> day" told as a scroll-driven chaptered story: a top **reading-progress bar** (`motion.progress`) +
> a set of **scroll-scrubbed tweens** per chapter (`motion.scroll` with `rhythm` gears — progress
> advances as you scroll and is fully reversible) + a **parallax decoration layer** in the dusk
> chapter (`motion.parallax`). The cover runs a one-off entrance (`onMount`, never scrub).
> Scenario: a narrative long page for a set of fictional documentary city images: a full-bleed cover
> (photo + title over it + a scroll hint); dawn / noon / dusk chapters (chapter number + oversized
> heading + image-and-text composition, each scrubbed as it enters); a closing band (visit-the-show
> CTA). **Asset-driven**: the cover and the noon chapter use photos from the platform asset library
> (seeded automatically when an app is created). No API, static data.

```lang
<App dsl-version="0.3" name="A City Day — Documentary Photo Essay">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="sn_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Reading progress bar (sticky; motion.progress fills the tick) ─── -->
      <Container id="sn_progress_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:60">
        <Container id="sn_progress_track" style="height:3px; width:100%">
          <Container id="sn_progress_fill" style="height:3px; width:100%"/>
        </Container>
      </Container>

      <!-- ─── 1. Nav ─── -->
      <Container id="sn_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:3px; z-index:50">
        <FlexContainer id="sn_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="sn_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="sn_nav_brand" props={content: "A CITY DAY · DOCUMENTARY", tagName: "span"}/></Container>
          <Container id="sn_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="sn_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="sn_nav_i1" props={itemLabel: "Dawn", itemTarget: "sn_ch1_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i2" props={itemLabel: "Noon", itemTarget: "sn_ch2_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i3" props={itemLabel: "Dusk", itemTarget: "sn_ch3_band"} style="height:auto; width:auto"/>
              <Container id="sn_nav_i4" props={itemLabel: "Visit", itemTarget: "sn_outro_band"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="sn_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="sn_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="sn_nav_cta_txt" props={content: "See the show", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Cover (full-bleed photo + title over it) ─── -->
      <Container id="sn_hero_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="sn_hero_media_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Image id="sn_hero_media" props={src: "assets/images/kitten-portrait.jpg", alt: "Cover: a day in the city", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
        </Container>
        <Container id="sn_hero_scrim_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Container id="sn_hero_scrim" style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="sn_hero_stack" props={direction: "column"} style="height:auto; width:100%; padding:170px 48px 54px; position:relative; z-index:1; gap:26px; align-items:flex-start">
          <Container id="sn_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="sn_hero_eyebrow" props={content: "DOCUMENTARY · YANGTZE DELTA · 2024—2026", tagName: "span"}/></Container>
          <Container id="sn_hero_title_cell" style="height:auto; width:auto"><Text id="sn_hero_title" props={content: "A City Day", tagName: "h1"}/></Container>
          <Container id="sn_hero_sub_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_hero_sub" props={content: "One window, three kinds of light. The photographer waited in the same spot for 217 days — to record how time lands on a city.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sn_hero_hint_row_cell" style="height:auto; width:auto; padding-top:20px">
            <FlexContainer id="sn_hero_hint_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="sn_hero_hint_dot_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="sn_hero_hint_dot" style="height:10px; width:10px"/></Container>
              <Container id="sn_hero_hint_text_cell" style="height:auto; width:auto"><Text id="sn_hero_hint_text" props={content: "Scroll on through the three moments of the day", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Chapter one · dawn (scrub) ─── -->
      <Container id="sn_ch1_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_ch1_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 48px; gap:64px; align-items:center">
          <Container id="sn_ch1_visual_cell" style="height:auto; width:340px; flex-shrink:0">
            <Container id="sn_ch1_visual_frame" style="height:380px; width:100%">
              <Svg id="sn_ch1_visual" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 340 380' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='snDawn' x1='0' y1='0' x2='0' y2='380'><stop offset='0' stop-color='#F2C6A0'/><stop offset='0.55' stop-color='#E8A87C'/><stop offset='1' stop-color='#3E5C76'/></linearGradient></defs><rect width='340' height='380' fill='url(#snDawn)'/><circle cx='170' cy='150' r='54' fill='#F7E4C8' opacity='0.9'/><g stroke='#3A3A3A' stroke-width='2' opacity='0.5'><line x1='0' y1='252' x2='340' y2='252'/><line x1='0' y1='276' x2='340' y2='276'/><line x1='0' y1='300' x2='340' y2='300'/></g><path d='M40,380 L40,300 L80,300 L80,380 Z M120,380 L120,272 L156,272 L156,380 Z M196,380 L196,308 L244,308 L244,380 Z M280,380 L280,286 L322,286 L322,380 Z' fill='#2A2A2E' opacity='0.85'/></svg>", ariaLabel: "Dawn: a windowsill at sunrise"} style="height:380px; width:100%"/>
            </Container>
          </Container>
          <Container id="sn_ch1_copy_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_ch1_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="sn_ch1_num_cell" style="height:auto; width:auto"><Text id="sn_ch1_num" props={content: "CHAPTER ONE · 05:40", tagName: "span"}/></Container>
              <Container id="sn_ch1_title_cell" style="height:auto; width:auto"><Text id="sn_ch1_title" props={content: "Light wakes the city first", tagName: "h2"}/></Container>
              <Container id="sn_ch1_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_ch1_desc" props={content: "When the first bus pulls in, the towers' windows are still shut. Only the skyline to the east lights up — as if someone had set the city alight from the inside. The moment lasts about eleven minutes; arrive late and you see only grey.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sn_ch1_meta_cell" style="height:auto; width:auto"><Text id="sn_ch1_meta" props={content: "Location / 11th floor, a block on Suzhou Creek", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Chapter two · noon (photo + scrub emphasis gear) ─── -->
      <Container id="sn_ch2_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_ch2_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 48px 104px; gap:64px; align-items:center">
          <Container id="sn_ch2_copy_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_ch2_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="sn_ch2_num_cell" style="height:auto; width:auto"><Text id="sn_ch2_num" props={content: "CHAPTER TWO · 12:20", tagName: "span"}/></Container>
              <Container id="sn_ch2_title_cell" style="height:auto; width:auto"><Text id="sn_ch2_title" props={content: "Shadows shrink to nothing", tagName: "h2"}/></Container>
              <Container id="sn_ch2_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_ch2_desc" props={content: "At noon the city goes out of focus: deliveries, couriers, parasols — everybody is moving, nobody stops. I pressed the shutter because it was watching back.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sn_ch2_meta_cell" style="height:auto; width:auto"><Text id="sn_ch2_meta" props={content: "Location / the same windowsill · three days after midsummer", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sn_ch2_visual_cell" style="height:auto; width:520px; flex-shrink:0">
            <Container id="sn_ch2_visual_frame" style="height:420px; width:100%; position:relative; overflow:hidden">
              <Image id="sn_ch2_visual" props={src: "assets/images/kitten-portrait.jpg", alt: "Noon: a look from the windowsill", objectFit: "cover", loading: "lazy"} style="height:100%; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Chapter three · dusk (parallax layer + scrub soft gear) ─── -->
      <Container id="sn_ch3_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:96px">
        <Container id="sn_ch3_parallax_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="sn_ch3_parallax" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 700' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='snDusk' x1='0' y1='0' x2='0' y2='700'><stop offset='0' stop-color='#7C4A3A'/><stop offset='0.5' stop-color='#C9784E'/><stop offset='1' stop-color='#2E2A38'/></linearGradient></defs><rect width='1440' height='700' fill='url(#snDusk)'/><circle cx='1080' cy='300' r='90' fill='#F2D6A8' opacity='0.85'/><path d='M0,420 C240,380 420,460 720,420 C1020,380 1240,440 1440,410 L1440,700 L0,700 Z' fill='#33304A' opacity='0.75'/><path d='M0,520 C280,470 520,560 820,510 C1100,466 1300,530 1440,500 L1440,700 L0,700 Z' fill='#211F2E' opacity='0.9'/></svg>", ariaLabel: "Dusk: layered hills (parallax layer)"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="sn_ch3_stack" props={direction: "column"} style="height:auto; width:100%; padding:150px 48px 130px; position:relative; z-index:1; gap:24px; align-items:center">
          <Container id="sn_ch3_num_cell" style="height:auto; width:auto"><Text id="sn_ch3_num" props={content: "CHAPTER THREE · 18:05", tagName: "span"}/></Container>
          <Container id="sn_ch3_title_cell" style="height:auto; width:auto"><Text id="sn_ch3_title" props={content: "Dusk folds the day away", tagName: "h2"}/></Container>
          <Container id="sn_ch3_desc_cell" style="height:auto; width:100%; max-width:620px"><Text id="sn_ch3_desc" props={content: "At dusk the light does not land on things, it lands in the air. The whole street steeps like tea, thickening by the minute — the camera's most honest moment, and its easiest to fumble.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sn_ch3_note_cell" style="height:auto; width:auto; padding-top:10px"><Text id="sn_ch3_note" props={content: "As this page scrolls, the hills behind drift at their own speed", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Closing band ─── -->
      <Container id="sn_outro_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:96px">
        <FlexContainer id="sn_outro_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 48px; gap:72px; align-items:flex-start">
          <Container id="sn_outro_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sn_outro_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="sn_outro_title_cell" style="height:auto; width:auto"><Text id="sn_outro_title" props={content: "See the whole day", tagName: "h2"}/></Container>
              <Container id="sn_outro_desc_cell" style="height:auto; width:100%; max-width:560px"><Text id="sn_outro_desc" props={content: "What you see online is a cut: the full installation holds 217 days of images and a twelve-minute sound piece. Three months, free entry, booking required.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sn_outro_right_cell" style="height:auto; width:340px; flex-shrink:0">
            <FlexContainer id="sn_outro_right_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
              <Container id="sn_outro_place_cell" style="height:auto; width:auto"><Text id="sn_outro_place" props={content: "Shanghai · Creek Side Photo Space, B1", tagName: "span"}/></Container>
              <Container id="sn_outro_date_cell" style="height:auto; width:auto"><Text id="sn_outro_date" props={content: "2026.10.01 — 12.31 · Closed Mondays", tagName: "span"}/></Container>
              <Container id="sn_outro_btn_cell" style="height:auto; width:auto; padding-top:8px">
                <Container id="sn_outro_btn" style="height:auto; width:auto; padding:15px 36px">
                  <Text id="sn_outro_btn_txt" props={content: "Book a visit", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="sn_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sn_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="sn_footer_left_cell" style="height:auto; width:auto"><Text id="sn_footer_left" props={content: "© 2026 A City Day · Images and dates are fictional", tagName: "span"}/></Container>
          <Container id="sn_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="sn_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="sn_footer_f1_cell" style="height:auto; width:auto"><Text id="sn_footer_f1" props={content: "Photographer's notes", tagName: "span"}/></Container>
              <Container id="sn_footer_f2_cell" style="height:auto; width:auto"><Text id="sn_footer_f2" props={content: "Image licensing", tagName: "span"}/></Container>
              <Container id="sn_footer_f3_cell" style="height:auto; width:auto"><Text id="sn_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Cover: one-off entrance (onMount; fully visible before any scrolling)
      @sn_hero_band = {
        events: { playHero: { trigger: "onMount", action: motion.play({targets: ["sn_hero_eyebrow", "sn_hero_title", "sn_hero_sub", "sn_hero_hint_row"], effect: "fadeInUp", stagger: 120, duration: "slow"}) } }
      };
      # Reading progress bar (default source = the scroll container's reading progress; the tick drives the fill width directly)
      @sn_progress_region = {
        events: { trackProgress: { trigger: "onMount", action: motion.progress({targets: ["sn_progress_fill"], axis: "x"}) } }
      };
      # Three chapter scrubs (progress follows the scroll, reversible; the rhythm gear is chosen per chapter)
      @sn_ch1_band = {
        events: { scrubDawn: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch1_visual_cell", "sn_ch1_copy_col"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      @sn_ch2_band = {
        events: { scrubNoon: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch2_copy_col", "sn_ch2_visual_cell"], effect: "fadeInUp", rhythm: "emphasis"}) } }
      };
      @sn_ch3_band = {
        events: { scrubDusk: { trigger: "onMount", action: motion.scroll({targets: ["sn_ch3_num", "sn_ch3_title", "sn_ch3_desc"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      # Dusk hills parallax layer (speed 0.42 = slow drift)
      @sn_ch3_parallax_cell = {
        events: { driftDusk: { trigger: "onMount", action: motion.parallax({targets: ["sn_ch3_parallax"], speed: 0.42}) } }
      };
      # Closing band reveal
      @sn_outro_band = {
        events: { revealOutro: { trigger: "onMount", action: motion.scroll({targets: ["sn_outro_left_col", "sn_outro_right_col"], effect: "fadeInUp", rhythm: "standard"}) } }
      };
      # Footer back-to-top (nav.scroll: return the current scroll container to its top)
      @sn_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground ──
      @sn_root = { background: #101014; }

      # ── Progress bar / nav ──
      @sn_progress_track = { background: rgba(255, 255, 255, 0.1); }
      @sn_progress_fill = { background: linear-gradient(90deg, #E8A87C 0%, #F2D6A8 100%); }
      @sn_nav_region = { background: rgba(16, 16, 20, 0.82); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
      @sn_nav_brand = { color: rgba(245, 243, 238, 0.9); font-size: 14px; font-weight: 700; letter-spacing: 2.2px; }
      @sn_nav_menu = {
        :scope { --anchor-item-color: rgba(245, 243, 238, 0.6); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #E8A87C; --anchor-item-active-bg: transparent; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.8px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #F2D6A8; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #E8A87C; }
      }
      @sn_nav_cta = { border: 1px solid rgba(232, 168, 124, 0.5); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(232, 168, 124, 0.14); } }
      @sn_nav_cta_txt = { color: #E8A87C; font-size: 12.5px; font-weight: 700; letter-spacing: 1.2px; }

      # ── Cover (photo as a dark ground) ──
      @sn_hero_media = { filter: grayscale(0.35) brightness(0.5) contrast(1.05); }
      @sn_hero_scrim = { background: linear-gradient(180deg, rgba(16, 16, 20, 0.25) 0%, rgba(16, 16, 20, 0.55) 60%, rgba(16, 16, 20, 0.92) 100%); }
      @sn_hero_eyebrow = { color: rgba(242, 214, 168, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 2.6px; }
      # 96px kept: "A City Day" measures 477px inside the 1184px measure, and the full-bleed cover is the point.
      @sn_hero_title = { color: #F5F3EE; font-size: 96px; font-weight: 900; letter-spacing: -2.5px; }
      @sn_hero_sub = { color: rgba(245, 243, 238, 0.72); font-size: 15.5px; line-height: 1.75; }
      @sn_hero_hint_dot = { background: #E8A87C; border-radius: 999px; }
      @sn_hero_hint_text = { color: rgba(245, 243, 238, 0.6); font-size: 12.5px; letter-spacing: 1.2px; }

      # ── Chapters ──
      @sn_ch1_num = { color: #E8A87C; font-size: 12.5px; font-weight: 800; letter-spacing: 2.4px; }
      @sn_ch2_num = { color: #E8A87C; font-size: 12.5px; font-weight: 800; letter-spacing: 2.4px; }
      @sn_ch3_num = { color: #F2D6A8; font-size: 12.5px; font-weight: 800; letter-spacing: 2.4px; }
      # Chapter headings: same 54px where the measure allows it. Ch1 keeps 54px (measured 637px in a
      # 780px column); ch2 drops to 44px because the 520px photo leaves its column only 600px and
      # "Shadows shrink to nothing" measures 613px at 48px (it wrapped there) — 562px at 44px.
      @sn_ch1_title = { color: #F5F3EE; font-size: 54px; font-weight: 900; letter-spacing: -1.2px; }
      @sn_ch2_title = { color: #F5F3EE; font-size: 44px; font-weight: 900; letter-spacing: -1.2px; }
      @sn_ch3_title = { color: #FFFFFF; font-size: 60px; font-weight: 900; letter-spacing: -1.6px; }
      @sn_ch1_desc = { color: rgba(245, 243, 238, 0.66); font-size: 15px; line-height: 1.8; }
      @sn_ch2_desc = { color: rgba(245, 243, 238, 0.66); font-size: 15px; line-height: 1.8; }
      @sn_ch3_desc = { color: rgba(255, 250, 240, 0.82); font-size: 15px; line-height: 1.8; text-align: center; }
      @sn_ch1_meta = { color: rgba(245, 243, 238, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      @sn_ch2_meta = { color: rgba(245, 243, 238, 0.42); font-size: 12px; letter-spacing: 0.8px; }
      @sn_ch3_note = { color: rgba(255, 250, 240, 0.55); font-size: 12px; letter-spacing: 1.2px; }
      @sn_ch1_visual_frame = { border-radius: 18px; overflow: hidden; box-shadow: 0 22px 54px rgba(0, 0, 0, 0.45); }
      @sn_ch2_visual_frame = { border-radius: 18px; overflow: hidden; box-shadow: 0 22px 54px rgba(0, 0, 0, 0.45); }
      @sn_ch2_visual = { filter: saturate(1.05) contrast(1.03); }

      # ── Closing band ──
      @sn_outro_band = { background: #16161C; }
      # 52px kept: "See the whole day" measures ~424px in a 772px column.
      @sn_outro_title = { color: #F5F3EE; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; }
      @sn_outro_desc = { color: rgba(245, 243, 238, 0.66); font-size: 14.5px; line-height: 1.8; }
      @sn_outro_place = { color: rgba(245, 243, 238, 0.8); font-size: 14px; font-weight: 600; letter-spacing: 0.4px; }
      @sn_outro_date = { color: rgba(245, 243, 238, 0.5); font-size: 13px; letter-spacing: 0.6px; }
      @sn_outro_btn = { background: #E8A87C; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(232, 168, 124, 0.35); } }
      @sn_outro_btn_txt = { color: #1A1A20; font-size: 14.5px; font-weight: 800; letter-spacing: 1.6px; }

      # ── Footer ──
      @sn_footer_row = { border-top: 1px solid rgba(255, 255, 255, 0.1); }
      @sn_footer_left = { color: rgba(245, 243, 238, 0.4); font-size: 12.5px; letter-spacing: 0.3px; }
      @sn_footer_f1 = { color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
      @sn_footer_f2 = { color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
      @sn_footer_f3 = { cursor: pointer; color: rgba(245, 243, 238, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #E8A87C; } }
    </styles>
  </Page>
</App>
```

> Production notes: the narrative-scroll discipline — the cover enters once (`onMount`, `motion.play`;
> never scrub, so the first screen is always the "final frame"), while the three chapters are
> `motion.scroll` scrubs whose progress follows the scroll and reverses on scroll-back, each with the
> rhythm gear that matches the chapter's temperament (`soft` dawn / `emphasis` noon / `soft` dusk);
> `motion.progress` drives the reading bar from the scroll container's own progress (its default
> source), and the dusk hills drift on a `motion.parallax` layer at speed 0.42. All ids, targets and
> bindings are identical to the Chinese edition — only the copy and the Latin-facing type values
> changed.

## Production notes

**Same scene, re-set for Latin type (2026-09-25).** The motion wiring is untouched — this template's
behaviour is scroll-driven and language-independent — but the copy lengths are not: the cover title,
the three chapter headings and every body paragraph were re-written to the English measure, and the
type values were re-taken to match.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Cover title | 96px | 96px (kept) | "A City Day" measures 477px inside the 1184px measure — the full-bleed scale survives |
| Chapter 1 heading | 54px | 54px (kept) | "Light wakes the city first" measures 637px in a 780px column |
| Chapter 2 heading | 54px | **44px** | the 520px photo leaves that column 600px; "Shadows shrink to nothing" measures 613px at 48px (it wrapped) and 559px at 44px |
| Chapter 3 heading | 60px | 60px (kept) | "Dusk folds the day away" measures 691px on the centred full measure |
| Closing heading | 52px | 52px (kept) | "See the whole day" measures 445px in a 772px column |
| Heading tracking | −2 / −2.4px | **−1.2 / −1.6px** | uppercase Latin carries its own sidebearings |
| Body leading | 2.0–2.1 | **1.75–1.8** | Latin does not need CJK leading |
| Wide tracking (labels) | 2–4.4px | **0.3–2.6px** | pulled back across nav, eyebrows, chapter numbers, notes and buttons |

**Copy policy — equivalent, not literal.** `城市的一天` → "A City Day"; `清晨 / 正午 / 黄昏 / 去处`
→ "Dawn / Noon / Dusk / Visit"; `看线下展` → "See the show"; `预约观展` → "Book a visit";
`苏州河畔影像空间 B1` → "Creek Side Photo Space, B1". The chapter numbers keep their clock times
(`CHAPTER ONE · 05:40`), because the times are the narrative. `217 天` and `12 分钟` stay as the same
numbers in the same places.

**One deliberate copy compression** is worth flagging: the noon paragraph's last line (`我按下快门的
理由是——它在看。`) becomes "I pressed the shutter because it was watching back." — the same beat, one
clause shorter, so the paragraph stays three lines at 15px in the 560px measure rather than four.
The cover subtitle is likewise one sentence shorter than the Chinese so the cover block keeps its
height with 15.5px body copy.

**Nothing structural moved**: the two asset paths (`assets/images/kitten-portrait.jpg`), the three
hand-written SVG layers (identical markup, English `ariaLabel` only), the sticky progress track at
`top:0` with the nav at `top:3px`, and every motion target string are as in the Chinese edition.
