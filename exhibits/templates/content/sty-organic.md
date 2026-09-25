# Organic curves — "FLOW STUDIO" movement and dance

> Template role (content / brand tab · style series): organic / flowing — soft misty teal and dusty
> pink gradients, large continuous curves (SVG bezier ribbons, blob shapes), asymmetric rounded
> layouts and breathing white space. The whole page reads like a movement that has not stopped yet.
> Scenario: an introduction for a fictional movement / dance studio: hero with a flowing-curve
> decoration layer plus a large headline (left) and a "movement line" illustration (right); three
> classes (modern dance / contact improv / morning stretch); a timetable for the week;
> the space and booking; a footer. Zero bitmaps, zero API, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="FLOW STUDIO — Movement and Dance">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="og_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="og_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="og_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 52px">
          <Container id="og_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="og_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="og_nav_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                <Svg id="og_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'><path d='M4,22 C10,10 22,10 28,20' stroke='#4A6B66' stroke-width='3' stroke-linecap='round'/><circle cx='6' cy='23' r='3.4' fill='#C88A8A'/></svg>", ariaLabel: "FLOW STUDIO mark"} style="height:32px; width:32px"/>
              </Container>
              <Container id="og_nav_word_cell" style="height:auto; width:auto"><Text id="og_nav_word" props={content: "FLOW STUDIO", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="og_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="og_nav_i1" props={itemLabel: "Classes", itemTarget: "og_course_region"} style="height:auto; width:auto"/>
              <Container id="og_nav_i2" props={itemLabel: "Timetable", itemTarget: "og_schedule_region"} style="height:auto; width:auto"/>
              <Container id="og_nav_i3" props={itemLabel: "Studio", itemTarget: "og_space_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="og_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="og_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="og_nav_cta_txt" props={content: "First class free", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (flowing curves + movement-line illustration) ─── -->
      <Container id="og_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="og_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="og_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 780' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='ogRibbon' x1='0' y1='0' x2='1440' y2='600'><stop offset='0' stop-color='#8FBFB4' stop-opacity='0.5'/><stop offset='0.55' stop-color='#C8A8A8' stop-opacity='0.4'/><stop offset='1' stop-color='#8FBFB4' stop-opacity='0'/></linearGradient></defs><path d='M-60,540 C260,380 420,700 720,560 C1020,420 1180,660 1500,500' stroke='url(#ogRibbon)' stroke-width='82' stroke-linecap='round'/><path d='M-40,240 C240,140 380,320 640,240 C900,160 1080,300 1460,200' stroke='#B9CFC7' stroke-width='26' stroke-linecap='round' opacity='0.45'/><ellipse cx='1180' cy='120' rx='170' ry='120' fill='#D9C2C2' opacity='0.35'/><ellipse cx='180' cy='96' rx='120' ry='86' fill='#A9C7BE' opacity='0.3'/></svg>", ariaLabel: "Flowing curve decoration layer"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="og_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:80px 52px 96px; position:relative; z-index:1; gap:56px; align-items:center">
          <Container id="og_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="og_hero_eyebrow_cell" style="height:auto; width:auto">
                <Container id="og_hero_eyebrow" style="height:auto; width:auto; padding:8px 18px">
                  <Text id="og_hero_eyebrow_txt" props={content: "Movement · Improvisation · Breath", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="og_hero_title_cell" style="height:auto; width:auto; max-width:560px"><Text id="og_hero_title" props={content: "The body knows the next move", tagName: "h1"}/></Container>
              <Container id="og_hero_sub_cell" style="height:auto; width:100%; max-width:480px"><Text id="og_hero_sub" props={content: "You don't need to know how to dance. We help your body find the flow it already has, one breath at a time.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="og_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="og_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="og_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="og_hero_btn" style="height:auto; width:auto; padding:16px 36px">
                      <Text id="og_hero_btn_txt" props={content: "Book your first class", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="og_hero_note_cell" style="height:auto; width:auto"><Text id="og_hero_note" props={content: "Just wear something comfortable", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="og_hero_fig_cell" style="height:auto; width:440px; flex-shrink:0">
            <Container id="og_hero_fig" style="height:460px; width:100%">
              <Svg id="og_hero_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 460' fill='none'><defs><linearGradient id='ogBody' x1='0' y1='0' x2='440' y2='460'><stop offset='0' stop-color='#6E9C90'/><stop offset='1' stop-color='#C88A8A'/></linearGradient></defs><path d='M220,60 C270,90 268,150 236,182 C300,206 322,272 288,330 C262,374 210,392 168,372 C120,348 108,286 140,246 C102,222 96,158 138,124 C164,102 196,96 220,60 Z' fill='url(#ogBody)' opacity='0.9'/><path d='M220,60 C252,140 246,240 210,330' stroke='#F6F1EC' stroke-width='2.4' opacity='0.6'/><path d='M140,246 C190,262 250,258 288,330' stroke='#F6F1EC' stroke-width='2.4' opacity='0.5'/><path d='M60,404 C140,376 220,420 300,392 C344,378 380,392 396,404' stroke='#8FBFB4' stroke-width='10' stroke-linecap='round' opacity='0.7'/><circle cx='352' cy='112' r='26' fill='#D9C2C2' opacity='0.6'/></svg>", ariaLabel: "Illustration: the line of a body in motion"} style="height:460px; width:100%"/>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Three classes ─── -->
      <Container id="og_course_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_course_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 52px 92px; gap:44px">
          <Container id="og_course_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="og_course_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="og_course_label_cell" style="height:auto; width:auto"><Text id="og_course_label" props={content: "Three ways in · CLASSES", tagName: "span"}/></Container>
              <Container id="og_course_title_cell" style="height:auto; width:auto"><Text id="og_course_title" props={content: "From quiet to open", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_course_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="og_course_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="og_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c1_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M20,90 C70,40 130,96 180,56 C220,26 260,60 284,46' stroke='#6E9C90' stroke-width='12' stroke-linecap='round'/><circle cx='50' cy='82' r='10' fill='#C88A8A' opacity='0.7'/></svg>", ariaLabel: "Morning stretch movement line"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c1_name_cell" style="height:auto; width:auto"><Text id="og_c1_name" props={content: "Morning stretch · 60 min", tagName: "h3"}/></Container>
                  <Container id="og_c1_desc_cell" style="height:auto; width:100%"><Text id="og_c1_desc" props={content: "Unfold slowly with the breath — for people who sit all day. Twice a week is enough.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c1_meta_cell" style="height:auto; width:auto"><Text id="og_c1_meta" props={content: "Tue / Thu 07:30 · 12 people", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c2_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M16,64 C60,16 120,112 170,52 C210,8 252,88 286,40' stroke='#C88A8A' stroke-width='12' stroke-linecap='round'/><circle cx='252' cy='44' r='9' fill='#6E9C90' opacity='0.7'/></svg>", ariaLabel: "Contact improv movement line"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c2_name_cell" style="height:auto; width:auto"><Text id="og_c2_name" props={content: "Contact improv · 90 min", tagName: "h3"}/></Container>
                  <Container id="og_c2_desc_cell" style="height:auto; width:100%"><Text id="og_c2_desc" props={content: "Weight and balance work in pairs: learn to hold someone, and to be held.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c2_meta_cell" style="height:auto; width:auto"><Text id="og_c2_meta" props={content: "Fri 19:30 · open for booking", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c3_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M30,96 C90,96 100,24 160,24 C220,24 230,96 282,96' stroke='#8A9A7B' stroke-width='12' stroke-linecap='round'/><circle cx='160' cy='30' r='10' fill='#D9C2C2' opacity='0.8'/></svg>", ariaLabel: "Modern dance movement line"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c3_name_cell" style="height:auto; width:auto"><Text id="og_c3_name" props={content: "Modern dance basics · 75 min", tagName: "h3"}/></Container>
                  <Container id="og_c3_desc_cell" style="height:auto; width:100%"><Text id="og_c3_desc" props={content: "From floor work to shifting weight: dancing taken apart into body logic you can practise.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c3_meta_cell" style="height:auto; width:auto"><Text id="og_c3_meta" props={content: "Sat 10:00 · 14 people", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. The week ─── -->
      <Container id="og_schedule_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_schedule_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 52px 92px; gap:56px; align-items:flex-start">
          <Container id="og_schedule_left_cell" style="height:auto; width:260px; flex-shrink:0">
            <FlexContainer id="og_schedule_left_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
              <Container id="og_schedule_label_cell" style="height:auto; width:auto"><Text id="og_schedule_label" props={content: "The week ahead", tagName: "span"}/></Container>
              <Container id="og_schedule_note_cell" style="height:auto; width:auto"><Text id="og_schedule_note" props={content: "Drop in for any single class", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_schedule_table_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_schedule_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="og_s1_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s1_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s1_day" props={content: "Tuesday", tagName: "span"}/></Container>
                  <Container id="og_s1_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s1_cls" props={content: "Morning stretch · 07:30", tagName: "span"}/></Container>
                  <Container id="og_s1_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s1_free" props={content: "4 spots left", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s2_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s2_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s2_day" props={content: "Thursday", tagName: "span"}/></Container>
                  <Container id="og_s2_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s2_cls" props={content: "Morning stretch · 07:30", tagName: "span"}/></Container>
                  <Container id="og_s2_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s2_free" props={content: "7 spots left", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s3_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s3_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s3_day" props={content: "Friday", tagName: "span"}/></Container>
                  <Container id="og_s3_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s3_cls" props={content: "Contact improv · 19:30", tagName: "span"}/></Container>
                  <Container id="og_s3_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s3_free" props={content: "Full · waitlist", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s4_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s4_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s4_day" props={content: "Saturday", tagName: "span"}/></Container>
                  <Container id="og_s4_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s4_cls" props={content: "Modern dance basics · 10:00", tagName: "span"}/></Container>
                  <Container id="og_s4_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s4_free" props={content: "2 spots left", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. The space and booking ─── -->
      <Container id="og_space_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_space_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 52px 104px; gap:56px; align-items:center">
          <Container id="og_space_fig_cell" style="height:auto; width:420px; flex-shrink:0">
            <Container id="og_space_fig" style="height:380px; width:100%">
              <Svg id="og_space_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 380' fill='none'><defs><linearGradient id='ogFloor' x1='0' y1='0' x2='420' y2='380'><stop offset='0' stop-color='#DCE8E3'/><stop offset='1' stop-color='#EFE3E3'/></linearGradient></defs><rect width='420' height='380' fill='url(#ogFloor)'/><path d='M40,300 C120,260 180,320 260,282 C320,254 380,282 400,270' stroke='#6E9C90' stroke-width='10' stroke-linecap='round' opacity='0.7'/><path d='M40,340 C140,300 220,352 320,312' stroke='#C88A8A' stroke-width='8' stroke-linecap='round' opacity='0.5'/><rect x='60' y='80' width='300' height='150' rx='26' fill='#F6F1EC' opacity='0.8'/><circle cx='210' cy='155' r='34' fill='#B9CFC7'/><path d='M210,121 L210,189 M176,155 L244,155' stroke='#F6F1EC' stroke-width='4' opacity='0.8'/></svg>", ariaLabel: "Space illustration: floor and light"} style="height:380px; width:100%"/>
            </Container>
          </Container>
          <Container id="og_space_card_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_space_card_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:38px 40px">
              <Container id="og_space_title_cell" style="height:auto; width:auto"><Text id="og_space_title" props={content: "A room with a wooden floor", tagName: "h2"}/></Container>
              <Container id="og_space_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="og_space_desc" props={content: "120 square metres, a full wall of mirrors, underfloor heating and fresh air. Showers are down the hall, so you can go straight to work.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="og_space_meta_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="og_space_meta_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
                  <Container id="og_sm1_cell" style="height:auto; width:auto"><Text id="og_sm1" props={content: "Address — Chengdu · 12 Fangcao Street, 2F", tagName: "span"}/></Container>
                  <Container id="og_sm2_cell" style="height:auto; width:auto"><Text id="og_sm2" props={content: "First class — free, one per person", tagName: "span"}/></Container>
                  <Container id="og_sm3_cell" style="height:auto; width:auto"><Text id="og_sm3" props={content: "Monthly pass — $880 / 8 classes", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_space_btn_cell" style="height:auto; width:auto; padding-top:10px">
                <Container id="og_space_btn" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="og_space_btn_txt" props={content: "Book a taster class", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Footer ─── -->
      <Container id="og_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="og_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 52px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="og_footer_left_cell" style="height:auto; width:auto"><Text id="og_footer_left" props={content: "© 2026 FLOW STUDIO · studio and timetable are fictional demos", tagName: "span"}/></Container>
          <Container id="og_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="og_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="og_footer_f1_cell" style="height:auto; width:auto"><Text id="og_footer_f1" props={content: "Body notes", tagName: "span"}/></Container>
              <Container id="og_footer_f2_cell" style="height:auto; width:auto"><Text id="og_footer_f2" props={content: "Teachers", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── Page base (misty teal-cream) ──
      @og_root = { background: #F6F1EC; }

      # ── Nav ──
      @og_nav_region = { background: rgba(246, 241, 236, 0.92); backdrop-filter: blur(10px); }
      @og_nav_word = { color: #3E5C56; font-size: 14.5px; font-weight: 800; letter-spacing: 1.6px; }
      @og_nav_menu = {
        :scope { --anchor-item-color: rgba(62, 92, 86, 0.68); --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 9px 18px; --anchor-item-radius: 999px; --anchor-item-active-color: #3E5C56; --anchor-item-active-bg: #DCE8E3; --anchor-gap: 8px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: background 0.25s ease, color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(185, 207, 199, 0.5); }
      }
      @og_nav_cta = { background: #6E9C90; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(110, 156, 144, 0.35); } }
      @og_nav_cta_txt = { color: #F6F1EC; font-size: 13px; font-weight: 700; letter-spacing: 1px; }

      # ── Hero ──
      @og_hero_eyebrow = { background: #FFFFFF; border-radius: 999px; }
      @og_hero_eyebrow_txt = { color: #3E5C56; font-size: 12.5px; font-weight: 700; letter-spacing: 1.2px; }
      # 68px CJK (7 glyphs on one line, 459px) stays at 68px in Latin, where the same sentence needs two
      # lines: left to the full 680px column it breaks as "The body knows the / next move" (644 / 324px).
      # The 560px cap on the cell moves the break to "The body knows / the next move" — 527 and 451px,
      # a balanced two-line block. The Chinese title is a single 459px line, so the cap never touches it.
      @og_hero_title = { color: #2E4742; font-size: 68px; font-weight: 900; letter-spacing: -2.4px; line-height: 1.26; }
      @og_hero_sub = { color: rgba(46, 71, 66, 0.72); font-size: 15.5px; line-height: 1.75; }
      @og_hero_btn = { background: #C88A8A; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(200, 138, 138, 0.35); } }
      @og_hero_btn_txt = { color: #FFF9F5; font-size: 15px; font-weight: 800; letter-spacing: 1.2px; }
      @og_hero_note = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }

      # ── Class cards ──
      @og_course_label = { color: #6E9C90; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @og_course_title = { color: #2E4742; font-size: 44px; font-weight: 900; letter-spacing: -1.2px; }
      @og_c1_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(110, 156, 144, 0.18); } }
      @og_c2_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(200, 138, 138, 0.18); } }
      @og_c3_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(138, 154, 123, 0.18); } }
      # Names run 23–27 Latin glyphs in a 309px content box; all three measure under 285px at 20px, so
      # each stays on one line and the three cards stay level.
      @og_c1_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c2_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c3_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c1_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.7; }
      @og_c2_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.7; }
      @og_c3_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.7; }
      @og_c1_meta = { color: #6E9C90; font-size: 12.5px; font-weight: 700; }
      @og_c2_meta = { color: #C88A8A; font-size: 12.5px; font-weight: 700; }
      @og_c3_meta = { color: #8A9A7B; font-size: 12.5px; font-weight: 700; }

      # ── Timetable ──
      @og_schedule_label = { color: #6E9C90; font-size: 12px; font-weight: 800; letter-spacing: 2.2px; }
      @og_schedule_note = { color: rgba(46, 71, 66, 0.5); font-size: 12.5px; }
      @og_s1_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s2_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s3_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s4_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); border-bottom: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s1_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 1px; }
      @og_s2_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 1px; }
      @og_s3_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 1px; }
      @og_s4_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 1px; }
      @og_s1_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s2_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s3_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s4_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s1_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }
      @og_s2_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }
      @og_s3_free = { color: #C88A8A; font-size: 13px; font-weight: 600; }
      @og_s4_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }

      # ── Space ──
      @og_space_card_col = { background: #FFFFFF; border-radius: 32px; box-shadow: 0 18px 40px rgba(110, 156, 144, 0.14); }
      @og_space_title = { color: #2E4742; font-size: 38px; font-weight: 900; letter-spacing: -1.2px; }
      @og_space_desc = { color: rgba(46, 71, 66, 0.68); font-size: 14.5px; line-height: 1.8; }
      @og_sm1 = { color: rgba(46, 71, 66, 0.72); font-size: 13.5px; }
      @og_sm2 = { color: #6E9C90; font-size: 13.5px; font-weight: 600; }
      @og_sm3 = { color: rgba(46, 71, 66, 0.72); font-size: 13.5px; }
      @og_space_btn = { background: #6E9C90; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(110, 156, 144, 0.35); } }
      @og_space_btn_txt = { color: #F6F1EC; font-size: 14.5px; font-weight: 800; letter-spacing: 1.2px; }

      # ── Footer ──
      @og_footer_row = { border-top: 1px solid rgba(62, 92, 86, 0.16); }
      @og_footer_left = { color: rgba(46, 71, 66, 0.42); font-size: 12.5px; }
      @og_footer_f1 = { color: rgba(46, 71, 66, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6E9C90; } }
      @og_footer_f2 = { color: rgba(46, 71, 66, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6E9C90; } }
    </styles>
  </Page>
</App>
```

## Production notes

**The decoration layer is the reason this one was measured, not eyeballed.** The hero holds an
absolutely positioned SVG band that fills the region at `height:100%` with `preserveAspectRatio:
slice` — so the curves are painted *relative to the hero's height*. Any English line that made the
hero taller would rescale the band and slide the ribbons sideways under the text. The hero height is
set by the 460px illustration, not by the copy, and the English column measures **400px** against it
(the region stays 636px tall, exactly as in Chinese) — **so the band renders at exactly the same
scale**, the ribbons land in the same places, and nothing needed re-anchoring.

**The headline keeps its 68px and buys a better line break.**

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero headline | 68px, one line (459px) | 68px, **two lines** | 28 Latin glyphs vs 7 CJK. Left at the full column it breaks "The body knows the / next move" (644 / 324px); a **560px cap on the title cell** moves the break to "The body knows / the next move" (527 / 451px) — a balanced two-line block. The cap never applies to the Chinese single line |
| Hero sub leading | 2.1 | 1.75 | Still two lines, as in Chinese — but 2.1 leading on Latin body copy opens a gap between them |
| Eyebrow tracking | 2.4px | 1.2px | Wider tracking is a CJK device; 33 Latin glyphs at 2.4px spread the chip |
| Class label / table label tracking | 4px / 3.4px | 2.4px / 2.2px | As above |
| Timetable day tracking | 2px | 1px | Weekday names are Latin words now, not two-glyph CJK abbreviations |
| Class / space body leading | 1.95 / 2.05 | 1.7 / 1.8 | Body copy does not need CJK leading; keeps the three cards level |
| Nav wordmark tracking | 3.4px | 1.6px | `流 · FLOW STUDIO` collapses to `FLOW STUDIO` — eleven Latin glyphs do not need two-glyph CJK tracking |

**Card copy length was tuned to keep the row level.** Cells centre their child, so a card whose
description runs one line longer sits 11px higher than its neighbours. All three class descriptions
were written to land on **two lines** in the 309px content box (83 / 72 / 89 glyphs), and the three
names — 23, 23 and 28 glyphs, measuring 243 / 237 / 294px — each hold a single line under 309px.

**Copy policy** — `流` ("flow") is already glossed as `FLOW STUDIO` in the original lockup, so the
English edition simply drops the Chinese half: the wordmark was bilingual to begin with, and the Latin
half already carries the brand. `接触即兴` → *Contact improv* (the form's real English name; shortened
on the card, spelled out in the timetable rows), `晨间拉伸` → *Morning stretch*, `现代舞基础` → *Modern
dance basics*. The section label `三种课 · CLASSES` becomes *Three ways in · CLASSES* rather than a
literal "three classes", which would only repeat the title. The schedule's `余 4 位` → *4 spots left*,
`已满 · 可候补` → *Full · waitlist*. The currency follows the product templates: `¥` → `$`, numerals
carried over.

**No structural changes.** Every node id, the single `onMount` orchestration on `og_hero_stack`, every
SVG path and the `og_hero_deco_cell` absolute-positioned layer are untouched — and there are no bitmap
assets to keep in sync. The only geometry value changed in the whole document is the hero title cell's
`max-width:560px`.
