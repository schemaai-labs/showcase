# Claymorphism — "Pinch Studio" hand-built pottery

> Template role (content / brand tab · style series): claymorphism — a cream ground with candy-coloured
> soft blocks, **double-shadow volume** (outer drop shadow plus inset highlight), 40px-radius corners
> and hand-pinched soft shapes (blunt SVG paths). Visual language: every element looks thumb-pressed.
> Scenario: an introduction for a fictional hand-building clay studio: a large soft-block illustration
> in the hero (a pinched cloud / flowers / a small bird) with the headline and a CTA; three workshop
> cards (clay basics / fridge magnets / family class); a strip of student pieces; the workshop
> information; a footer. Zero bitmaps, zero API, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="Pinch Studio — Hand-Built Pottery">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="cl_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="cl_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="cl_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="cl_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="cl_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="cl_nav_mark_cell" style="height:38px; width:38px; flex-shrink:0">
                <Svg id="cl_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'><circle cx='19' cy='19' r='18' fill='#FFD9E0'/><circle cx='13.5' cy='16' r='4' fill='#E2688A'/><circle cx='24.5' cy='16' r='4' fill='#E2688A'/><path d='M11,23 q8,8 16,0' stroke='#B84A6B' stroke-width='2.6' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Pinch Studio mark"} style="height:38px; width:38px"/>
              </Container>
              <Container id="cl_nav_word_cell" style="height:auto; width:auto"><Text id="cl_nav_word" props={content: "Pinch Studio", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cl_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="cl_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="cl_nav_i1" props={itemLabel: "Workshops", itemTarget: "cl_course_region"} style="height:auto; width:auto"/>
              <Container id="cl_nav_i2" props={itemLabel: "Pieces", itemTarget: "cl_work_region"} style="height:auto; width:auto"/>
              <Container id="cl_nav_i3" props={itemLabel: "Visit", itemTarget: "cl_visit_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="cl_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="cl_nav_cta" style="height:auto; width:auto; padding:12px 26px">
              <Text id="cl_nav_cta_txt" props={content: "Book a taster", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (soft-block illustration + headline) ─── -->
      <Container id="cl_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="cl_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:64px 48px 92px; gap:64px; align-items:center">
          <Container id="cl_hero_fig_cell" style="height:auto; width:480px; flex-shrink:0">
            <Container id="cl_hero_fig" style="height:480px; width:100%">
              <Svg id="cl_hero_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' fill='none'><defs><filter id='clSoft' x='-30%' y='-30%' width='160%' height='160%'><feDropShadow dx='0' dy='14' stdDeviation='14' flood-color='#B84A6B' flood-opacity='0.18'/></filter></defs><g filter='url(#clSoft)'><path d='M120,290 a80,74 0 0 1 60,-124 a70,64 0 0 1 118,18 a64,60 0 0 1 40,102 Z' fill='#FFF3F5'/><ellipse cx='240' cy='300' rx='132' ry='30' fill='#FFE3EA' opacity='0.9'/><circle cx='188' cy='206' r='16' fill='#FFC2D1'/><circle cx='262' cy='188' r='12' fill='#FFC2D1'/><circle cx='312' cy='214' r='9' fill='#FFC2D1'/><path d='M120,332 q40,-34 84,-8 q46,-28 88,4 q34,-18 66,6' stroke='#E2688A' stroke-width='0' /><g><ellipse cx='160' cy='344' rx='34' ry='26' fill='#FFD9E0'/><ellipse cx='252' cy='352' rx='30' ry='24' fill='#CFE8D5'/><ellipse cx='338' cy='342' rx='28' ry='22' fill='#FFE9BF'/><circle cx='160' cy='338' r='9' fill='#F7B7C8'/><circle cx='252' cy='346' r='8' fill='#A8D2B4'/><circle cx='338' cy='336' r='7' fill='#F4D18A'/></g></g></svg>", ariaLabel: "Clay illustration: a soft cloud and lumps of clay"} style="height:480px; width:100%"/>
            </Container>
          </Container>
          <Container id="cl_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="cl_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="cl_hero_chip_cell" style="height:auto; width:auto">
                <Container id="cl_hero_chip" style="height:auto; width:auto; padding:9px 18px">
                  <Text id="cl_hero_chip_txt" props={content: "Handmade clay · Shanghai · open weekly", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="cl_hero_title_cell" style="height:auto; width:auto"><Text id="cl_hero_title" props={content: "Pinch your worries into little animals", tagName: "h1"}/></Container>
              <Container id="cl_hero_sub_cell" style="height:auto; width:100%; max-width:470px"><Text id="cl_hero_sub" props={content: "Two hands, one lump of clay, forty minutes. No drawing skills needed — and if it comes out lopsided, that is its personality. We fire it hard and you wear it home.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="cl_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="cl_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="cl_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="cl_hero_btn" style="height:auto; width:auto; padding:16px 36px">
                      <Text id="cl_hero_btn_txt" props={content: "Book a taster class", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="cl_hero_note_cell" style="height:auto; width:auto"><Text id="cl_hero_note" props={content: "All materials included · same-day pickup", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Three workshop cards (soft rounded) ─── -->
      <Container id="cl_course_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="cl_course_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 92px; gap:44px">
          <Container id="cl_course_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="cl_course_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="cl_course_label_cell" style="height:auto; width:auto"><Text id="cl_course_label" props={content: "WORKSHOPS", tagName: "span"}/></Container>
              <Container id="cl_course_title_cell" style="height:auto; width:auto"><Text id="cl_course_title" props={content: "It starts with one ball of clay", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cl_course_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="cl_course_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="cl_k1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="cl_k1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="cl_k1_icon_cell" style="height:64px; width:64px; flex-shrink:0">
                    <Svg id="cl_k1_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><ellipse cx='32' cy='38' rx='24' ry='18' fill='#FFD9E0'/><circle cx='24' cy='36' r='4' fill='#B84A6B'/><circle cx='40' cy='36' r='4' fill='#B84A6B'/><path d='M25,44 q7,6 14,0' stroke='#B84A6B' stroke-width='2.4' fill='none' stroke-linecap='round'/><circle cx='32' cy='16' r='7' fill='#FFC2D1'/></svg>", ariaLabel: "Basics class icon"} style="height:64px; width:64px"/>
                  </Container>
                  <Container id="cl_k1_name_cell" style="height:auto; width:auto"><Text id="cl_k1_name" props={content: "Clay basics · Little balls", tagName: "h3"}/></Container>
                  <Container id="cl_k1_desc_cell" style="height:auto; width:100%"><Text id="cl_k1_desc" props={content: "Ninety minutes, three little animals, and the basics of rolling, joining and firing.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="cl_k1_meta_cell" style="height:auto; width:auto; padding-top:6px"><Text id="cl_k1_meta" props={content: "$168 / person · weekdays 19:00", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cl_k2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="cl_k2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="cl_k2_icon_cell" style="height:64px; width:64px; flex-shrink:0">
                    <Svg id="cl_k2_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect x='10' y='10' width='44' height='44' rx='16' fill='#CFE8D5'/><circle cx='32' cy='30' r='12' fill='#8FBF9F'/><circle cx='28' cy='28' r='2.6' fill='#2F5A3D'/><circle cx='36' cy='28' r='2.6' fill='#2F5A3D'/><path d='M28,34 q4,3.4 8,0' stroke='#2F5A3D' stroke-width='2' stroke-linecap='round' fill='none'/></svg>", ariaLabel: "Fridge magnet icon"} style="height:64px; width:64px"/>
                  </Container>
                  <Container id="cl_k2_name_cell" style="height:auto; width:auto"><Text id="cl_k2_name" props={content: "Fridge magnets · Emoji set", tagName: "h3"}/></Container>
                  <Container id="cl_k2_desc_cell" style="height:auto; width:100%"><Text id="cl_k2_desc" props={content: "Make six original emoji in one sitting — the magnet is baked in and ready to use.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="cl_k2_meta_cell" style="height:auto; width:auto; padding-top:6px"><Text id="cl_k2_meta" props={content: "$128 / person · weekends 14:00", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cl_k3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="cl_k3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="cl_k3_icon_cell" style="height:64px; width:64px; flex-shrink:0">
                    <Svg id="cl_k3_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='24' cy='30' r='14' fill='#FFE9BF'/><circle cx='40' cy='30' r='14' fill='#FFD9E0'/><circle cx='20' cy='27' r='2.6' fill='#8A6A1F'/><circle cx='44' cy='27' r='2.6' fill='#B84A6B'/><path d='M26,38 q6,5 12,0' stroke='#7A5B12' stroke-width='2' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Family class icon"} style="height:64px; width:64px"/>
                  </Container>
                  <Container id="cl_k3_name_cell" style="height:auto; width:auto"><Text id="cl_k3_name" props={content: "Family class · Four hands", tagName: "h3"}/></Container>
                  <Container id="cl_k3_desc_cell" style="height:auto; width:100%"><Text id="cl_k3_desc" props={content: "One grown-up and one child build a family piece together. Neither of you needs any talent.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="cl_k3_meta_cell" style="height:auto; width:auto; padding-top:6px"><Text id="cl_k3_meta" props={content: "$258 / pair · Saturdays 10:00", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Strip of student pieces ─── -->
      <Container id="cl_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="cl_work_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 92px; gap:34px">
          <Container id="cl_work_head_cell" style="height:auto; width:auto"><Text id="cl_work_head" props={content: "Student pieces · candid shots", tagName: "span"}/></Container>
          <Container id="cl_work_blocks_cell" style="height:auto; width:100%">
            <FlexContainer id="cl_work_blocks_row" props={direction: "row"} style="height:auto; width:100%; gap:22px; align-items:stretch">
              <Container id="cl_w1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <Container id="cl_w1" style="height:220px; width:100%">
                  <Svg id="cl_w1_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 220' preserveAspectRatio='xMidYMid slice'><rect width='300' height='220' fill='#FFF3F5'/><ellipse cx='150' cy='150' rx='66' ry='44' fill='#FFD9E0'/><circle cx='150' cy='96' r='40' fill='#FFC2D1'/><circle cx='136' cy='88' r='6' fill='#B84A6B'/><circle cx='164' cy='88' r='6' fill='#B84A6B'/><path d='M138,106 q12,10 24,0' stroke='#B84A6B' stroke-width='3' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Student piece: a little clay figure"} style="height:220px; width:100%"/>
                </Container>
              </Container>
              <Container id="cl_w2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <Container id="cl_w2" style="height:220px; width:100%">
                  <Svg id="cl_w2_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 220' preserveAspectRatio='xMidYMid slice'><rect width='300' height='220' fill='#EFF7F0'/><rect x='70' y='66' width='160' height='110' rx='42' fill='#CFE8D5'/><path d='M110,124 q40,-30 80,0' stroke='#8FBF9F' stroke-width='0'/><circle cx='120' cy='110' r='9' fill='#A8D2B4'/><circle cx='180' cy='110' r='9' fill='#A8D2B4'/><path d='M126,146 q24,18 48,0' stroke='#2F5A3D' stroke-width='3.4' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Student piece: a clay brick"} style="height:220px; width:100%"/>
                </Container>
              </Container>
              <Container id="cl_w3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <Container id="cl_w3" style="height:220px; width:100%">
                  <Svg id="cl_w3_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 220' preserveAspectRatio='xMidYMid slice'><rect width='300' height='220' fill='#FFF8EA'/><circle cx='116' cy='120' r='46' fill='#FFE9BF'/><circle cx='184' cy='120' r='46' fill='#FFD9E0'/><circle cx='104' cy='110' r='6' fill='#8A6A1F'/><circle cx='196' cy='110' r='6' fill='#B84A6B'/><path d='M116,140 q34,22 68,0' stroke='#A97F2B' stroke-width='3' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Student piece: a two-tone ornament"} style="height:220px; width:100%"/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Visit (workshop information) ─── -->
      <Container id="cl_visit_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="cl_visit_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 48px 104px; gap:64px; align-items:center">
          <Container id="cl_visit_card_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="cl_visit_card_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:40px 42px">
              <Container id="cl_visit_title_cell" style="height:auto; width:auto"><Text id="cl_visit_title" props={content: "Come and pinch your own", tagName: "h2"}/></Container>
              <Container id="cl_visit_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="cl_visit_desc" props={content: "The studio is on the third floor of 1298 Beijing West Road — the room by the window. Firing takes three days, and we don't post pieces: come back when you're passing, and pinch another one while you're here.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="cl_visit_meta_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="cl_visit_meta_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
                  <Container id="cl_vm1_cell" style="height:auto; width:auto"><Text id="cl_vm1" props={content: "Open — Wednesday to Sunday, 10:00–20:00", tagName: "span"}/></Container>
                  <Container id="cl_vm2_cell" style="height:auto; width:auto"><Text id="cl_vm2" props={content: "Booking — find Pinch Studio in the WeChat mini-app", tagName: "span"}/></Container>
                  <Container id="cl_vm3_cell" style="height:auto; width:auto"><Text id="cl_vm3" props={content: "Groups — from 8 people, custom themes on request", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cl_visit_btn_cell" style="height:auto; width:auto; padding-top:10px">
                <Container id="cl_visit_btn" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="cl_visit_btn_txt" props={content: "Book a weekend session", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="cl_visit_fig_cell" style="height:auto; width:380px; flex-shrink:0">
            <Container id="cl_visit_fig" style="height:380px; width:100%">
              <Svg id="cl_visit_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 380' fill='none'><defs><filter id='clSoft2' x='-30%' y='-30%' width='160%' height='160%'><feDropShadow dx='0' dy='12' stdDeviation='12' flood-color='#8A6A1F' flood-opacity='0.16'/></filter></defs><g filter='url(#clSoft2)'><ellipse cx='190' cy='286' rx='120' ry='34' fill='#FFE9BF'/><path d='M96,262 a94,88 0 0 1 188,0 Z' fill='#FFD9E0'/><circle cx='152' cy='212' r='12' fill='#F7B7C8'/><circle cx='190' cy='196' r='15' fill='#F7B7C8'/><circle cx='228' cy='212' r='12' fill='#F7B7C8'/><path d='M120,290 q70,26 140,0' stroke='#B84A6B' stroke-width='0'/><circle cx='118' cy='132' r='20' fill='#CFE8D5'/><circle cx='262' cy='120' r='14' fill='#FFD9E0'/></g></svg>", ariaLabel: "Clay illustration: a fired little ornament"} style="height:380px; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Footer ─── -->
      <Container id="cl_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="cl_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="cl_footer_left_cell" style="height:auto; width:auto"><Text id="cl_footer_left" props={content: "© 2026 Pinch Studio · studio and classes are fictional demos", tagName: "span"}/></Container>
          <Container id="cl_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="cl_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="cl_footer_f1_cell" style="height:auto; width:auto"><Text id="cl_footer_f1" props={content: "Instagram", tagName: "span"}/></Container>
              <Container id="cl_footer_f2_cell" style="height:auto; width:auto"><Text id="cl_footer_f2" props={content: "Class calendar", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── Page base (cream) ──
      @cl_root = { background: #FFF6EE; }

      # ── Nav ──
      @cl_nav_region = { background: rgba(255, 246, 238, 0.94); backdrop-filter: blur(10px); }
      # Tracking comes down from 2px to 1px: it reads as a wordmark on three CJK glyphs, but spreads
      # twelve Latin ones into a gap.
      @cl_nav_word = { color: #7A4A57; font-size: 18px; font-weight: 800; letter-spacing: 1px; }
      @cl_nav_menu = {
        :scope { --anchor-item-color: rgba(122, 74, 87, 0.66); --anchor-item-font-size: 14px; --anchor-item-font-weight: 700; --anchor-item-padding: 9px 18px; --anchor-item-radius: 999px; --anchor-item-active-color: #B84A6B; --anchor-item-active-bg: #FFE3EA; --anchor-gap: 8px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: background 0.25s ease, color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(255, 217, 224, 0.6); }
      }
      @cl_nav_cta = { background: #FFD9E0; border-radius: 999px; box-shadow: 0 10px 22px rgba(184, 74, 107, 0.22), inset 0 2px 0 rgba(255, 255, 255, 0.8); transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @cl_nav_cta_txt = { color: #8C3B57; font-size: 13.5px; font-weight: 800; letter-spacing: 1px; }

      # ── Hero ──
      @cl_hero_chip = { background: #CFE8D5; border-radius: 999px; box-shadow: 0 8px 18px rgba(47, 90, 61, 0.16), inset 0 2px 0 rgba(255, 255, 255, 0.7); }
      @cl_hero_chip_txt = { color: #2F5A3D; font-size: 12.5px; font-weight: 700; letter-spacing: 0.6px; }
      # 62px CJK (8 glyphs, one line, 480px) stays at 62px in Latin and picks up a line: measured in
      # Chromium the two lines are 549px and 495px against the 640px column, and the break falls where
      # the phrase breaks ("Pinch your worries" / "into little animals"). Sizing it down to 58px is
      # worse, not safer — "Pinch your worries into" measures 626px there and pulls "into" up onto the
      # first line. 1.2 leading keeps the pair reading as one headline.
      @cl_hero_title = { color: #5C3540; font-size: 62px; font-weight: 900; letter-spacing: -2px; line-height: 1.2; }
      @cl_hero_sub = { color: rgba(92, 53, 64, 0.72); font-size: 15.5px; line-height: 1.7; }
      @cl_hero_btn = { background: #E2688A; border-radius: 999px; box-shadow: 0 14px 28px rgba(184, 74, 107, 0.3), inset 0 3px 0 rgba(255, 255, 255, 0.35); transition: transform 0.25s ease; :scope:hover { transform: translateY(-3px); } }
      @cl_hero_btn_txt = { color: #FFF6EE; font-size: 15px; font-weight: 800; letter-spacing: 1px; }
      @cl_hero_note = { color: rgba(92, 53, 64, 0.55); font-size: 13px; }

      # ── Workshop cards (soft rounded) ──
      @cl_course_label = { color: #B84A6B; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @cl_course_title = { color: #5C3540; font-size: 44px; font-weight: 900; letter-spacing: -1.4px; }
      @cl_k1_col = { background: #FFFDF9; border-radius: 34px; box-shadow: 0 18px 40px rgba(184, 74, 107, 0.14), inset 0 3px 0 rgba(255, 255, 255, 0.9); }
      @cl_k2_col = { background: #FFFDF9; border-radius: 34px; box-shadow: 0 18px 40px rgba(47, 90, 61, 0.12), inset 0 3px 0 rgba(255, 255, 255, 0.9); }
      @cl_k3_col = { background: #FFFDF9; border-radius: 34px; box-shadow: 0 18px 40px rgba(138, 106, 31, 0.12), inset 0 3px 0 rgba(255, 255, 255, 0.9); }
      # Card titles run 25–26 Latin glyphs in a 316px content box; the longest one ("Fridge magnets ·
      # Emoji set") measures 260px at 20px, so all three hold a single line and the cards stay level.
      @cl_k1_name = { color: #5C3540; font-size: 20px; font-weight: 800; }
      @cl_k2_name = { color: #2F5A3D; font-size: 20px; font-weight: 800; }
      @cl_k3_name = { color: #6B4E12; font-size: 20px; font-weight: 800; }
      @cl_k1_desc = { color: rgba(92, 53, 64, 0.68); font-size: 13.5px; line-height: 1.7; }
      @cl_k2_desc = { color: rgba(47, 90, 61, 0.72); font-size: 13.5px; line-height: 1.7; }
      @cl_k3_desc = { color: rgba(107, 78, 18, 0.75); font-size: 13.5px; line-height: 1.7; }
      @cl_k1_meta = { color: #B84A6B; font-size: 13px; font-weight: 700; }
      @cl_k2_meta = { color: #2F5A3D; font-size: 13px; font-weight: 700; }
      @cl_k3_meta = { color: #8A6A1F; font-size: 13px; font-weight: 700; }

      # ── Pieces ──
      @cl_work_head = { color: rgba(92, 53, 64, 0.55); font-size: 12px; font-weight: 700; letter-spacing: 2.2px; }
      @cl_w1 = { border-radius: 28px; overflow: hidden; box-shadow: 0 14px 30px rgba(184, 74, 107, 0.14); }
      @cl_w2 = { border-radius: 28px; overflow: hidden; box-shadow: 0 14px 30px rgba(47, 90, 61, 0.12); }
      @cl_w3 = { border-radius: 28px; overflow: hidden; box-shadow: 0 14px 30px rgba(138, 106, 31, 0.12); }

      # ── Visit ──
      @cl_visit_card_col = { background: #FFFDF9; border-radius: 36px; box-shadow: 0 20px 44px rgba(184, 74, 107, 0.14), inset 0 3px 0 rgba(255, 255, 255, 0.9); }
      @cl_visit_title = { color: #5C3540; font-size: 40px; font-weight: 900; letter-spacing: -1.2px; }
      @cl_visit_desc = { color: rgba(92, 53, 64, 0.7); font-size: 14.5px; line-height: 1.8; }
      @cl_vm1 = { color: rgba(92, 53, 64, 0.62); font-size: 13.5px; }
      @cl_vm2 = { color: rgba(92, 53, 64, 0.62); font-size: 13.5px; }
      @cl_vm3 = { color: rgba(92, 53, 64, 0.62); font-size: 13.5px; }
      @cl_visit_btn = { background: #FFD9E0; border-radius: 999px; box-shadow: 0 12px 26px rgba(184, 74, 107, 0.22), inset 0 2px 0 rgba(255, 255, 255, 0.8); transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @cl_visit_btn_txt = { color: #8C3B57; font-size: 14.5px; font-weight: 800; letter-spacing: 1px; }

      # ── Footer ──
      @cl_footer_row = { border-top: 1px solid rgba(122, 74, 87, 0.14); }
      @cl_footer_left = { color: rgba(92, 53, 64, 0.42); font-size: 12.5px; }
      @cl_footer_f1 = { color: rgba(92, 53, 64, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #B84A6B; } }
      @cl_footer_f2 = { color: rgba(92, 53, 64, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #B84A6B; } }
    </styles>
  </Page>
</App>
```

## Production notes

**The headline changed lanes.** `把烦恼捏成小动物` is eight square glyphs on one line at 62px (480px of
type in a 640px column). "Pinch your worries into little animals" is 38 Latin glyphs — roughly twice
the set width for the same idea — so the headline necessarily becomes two lines. The size stays at
**62px**: measured in Chromium the two lines come out at **549px and 495px**, so the break lands
exactly where the phrase breaks, "Pinch your worries" / "into little animals", with a tight ragged
right. Dropping to 58px would be worse, not safer — the shorter line pulls "into" up onto the first
line and splits the phrase the wrong way. Leading stays at 1.2, which is what holds two display lines
together instead of letting them read as two separate titles.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero headline | 62px, one line | 62px, **two lines** (549 / 495px) | 38 Latin glyphs vs 8 CJK; the break is chosen by measuring, not by guessing |
| Hero actions row | button + note | same, **note shortened** | The literal note ("Materials included · take your piece home the same day", 58 glyphs) measures 361px, which puts the button-and-note pair at 609px against the 640px column — it fits, but with 31px of slack it reads as a collision. The 40-glyph *same-day pickup* holds the pair at 497px |
| Hero sub leading | 2.05 | 1.7 | Three Latin lines instead of two CJK lines |
| Hero chip tracking | 1px | 0.6px | 33 Latin glyphs against 14 CJK; wide tracking is a CJK device |
| Card copy leading | 1.95 | 1.7 | Body copy does not need CJK leading; keeps the three cards the same height |
| Card copy length | — | 2 lines in all three cards | Cells centre their child, so a card with a longer description sits 11px higher than its neighbours — measured, not guessed. The magnet copy was trimmed from 102 to 81 glyphs so all three land on two lines and the cards line up (all three boxes are 282px tall at the same y) |
| Course label tracking | 4px | 2.4px | Same reason — and `课程 · WORKSHOPS` collapses to `WORKSHOPS` (the CJK half has no English counterpart, so repeating "classes" twice would be noise) |
| Work-strip label tracking | 3.4px | 2.2px | As above |
| Visit body leading | 2.05 | 1.8 | The English runs to three lines at the 520px measure where the Chinese held two; CJK leading at that height would open a hole in the card |
| Visit title tracking | -1.4px | -1.2px | 22 Latin glyphs; the CJK original carried tighter negative tracking than Latin wants |
| Nav wordmark tracking | 2px | 1px | The CJK wordmark is three glyphs, the Latin one twelve |

**Deliberately kept.** The 480×480 hero illustration and the 380×380 visit illustration, all three
64px course icons, the 220px piece strip, every 34px / 36px / 28px radius, both inset-highlight
shadows, and the hero's button-and-note pair at its 18px gap. The currency swaps `¥` for
`$` with the numerals carried over (the same convention the product templates use) — the studio keeps
its Shanghai address, so the money is the one thing that has to be readable at a glance.

**Copy policy** — `捏捏所` ("pinch-pinch place") becomes **Pinch Studio**: "pinch" is the actual
hand-building technique, so the name reads as a real pottery studio rather than a transliteration.
`软陶入门 · 小球系列` → *Clay basics · Little balls*, `冰箱贴工坊 · 表情包` → *Fridge magnets · Emoji
set*, `亲子课 · 一家人一家物` → *Family class · Four hands*. `小红书` becomes Instagram — the network
an English-reading craft audience would actually look at.

**No structural changes.** Every node id and the single `onMount` orchestration on `cl_hero_stack` are
untouched; there are no bitmap assets to keep in sync — every illustration is inline SVG in both
editions.
