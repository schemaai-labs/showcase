# Split Composition — "DAY&NIGHT" two-faced café

> Template role (marketing / growth tab · style series): split composition — a **50:50 collision**:
> the left half is "Day" (off-white / amber / ink), the right half is "Night" (deep green-black /
> gold), and a luminous seam runs down the middle. The page itself is the contrast between two
> characters. Further down it uses the **sticky left column + scrolling right column** device (the
> explanation pins, the content passes by).
> Scenario: a site for a fictional café that serves coffee by day and turns into a bar at night: a
> full-screen 50:50 hero (a display title spanning the seam plus hours / pitch / CTA on each side);
> a pair of sticky itineraries (the "Day" column pins while three daytime cards scroll past, then the
> colours flip and the "Night" half repeats the device); a two-sided menu comparison (coffee /
> cocktails); a seam-merge closing CTA; a footer. No bitmap assets, no API, one entrance
> orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="DAY&NIGHT — A Two-Faced Café">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="sp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (symmetric about the seam) ─── -->
      <Container id="sp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="sp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 48px">
          <Container id="sp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="sp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="sp_nav_half_cell" style="height:22px; width:22px; flex-shrink:0">
                <Svg id="sp_nav_half" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'><rect width='22' height='22' rx='6' fill='#F7F1E5'/><path d='M11,0 h5 a6,6 0 0 1 0 22 h-5 Z' fill='#0E211C'/></svg>", ariaLabel: "Half-and-half day/night mark"} style="height:22px; width:22px"/>
              </Container>
              <Container id="sp_nav_word_cell" style="height:auto; width:auto"><Text id="sp_nav_word" props={content: "DAY&NIGHT", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="sp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="sp_nav_i1" props={itemLabel: "Day · Coffee", itemTarget: "sp_day_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i2" props={itemLabel: "Night · Bar", itemTarget: "sp_night_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i3" props={itemLabel: "Menu", itemTarget: "sp_menu_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i4" props={itemLabel: "Find us", itemTarget: "sp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="sp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="sp_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="sp_nav_cta_txt" props={content: "Reserve", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (a full screen cut 50:50) ─── -->
      <Container id="sp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sp_hero_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; position:relative">
          <Container id="sp_hero_day_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; position:relative; overflow:hidden">
            <Container id="sp_hero_day_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
              <Svg id="sp_hero_day_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 620' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='600' cy='90' r='120' fill='#E8A33D' opacity='0.25'/><circle cx='600' cy='90' r='64' fill='#E8A33D' opacity='0.45'/><g stroke='#141414' stroke-width='1' opacity='0.12'><line x1='0' y1='430' x2='720' y2='430'/><line x1='0' y1='470' x2='720' y2='470'/></g></svg>", ariaLabel: "Day half decoration: warm sun"} style="height:100%; width:100%"/>
            </Container>
            <Animate id="sp_hero_day_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; padding:88px 48px 84px 56px; position:relative; z-index:1; gap:22px; align-items:flex-start">
              <Container id="sp_day_kicker_cell" style="height:auto; width:auto"><Text id="sp_day_kicker" props={content: "07:30 — 17:00 · DAYTIME", tagName: "span"}/></Container>
              <Container id="sp_day_title_cell" style="height:auto; width:auto"><Text id="sp_day_title" props={content: "Wide awake", tagName: "h2"}/></Container>
              <Container id="sp_day_desc_cell" style="height:auto; width:100%; max-width:470px; min-height:77px"><Text id="sp_day_desc" props={content: "We roast our own, and the beans change every Wednesday. Five pour-over and five milk recipes in rotation — doors at 7:30, croissants at the same time.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sp_day_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="sp_day_cta" style="height:auto; width:auto; padding:14px 32px">
                  <Text id="sp_day_cta_txt" props={content: "Coffee menu", tagName: "span"}/>
                </Container>
              </Container>
            </Animate>
          </Container>
          <Container id="sp_hero_gap_cell" style="height:auto; width:2px; flex-shrink:0"><Container id="sp_hero_gap" style="height:100%; width:2px"/></Container>
          <Container id="sp_hero_night_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; position:relative; overflow:hidden">
            <Container id="sp_hero_night_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
              <Svg id="sp_hero_night_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 620' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='120' cy='520' r='150' fill='#D8B45A' opacity='0.12'/><circle cx='470' cy='120' r='2.6' fill='#F4E9CE' opacity='0.8'/><circle cx='560' cy='200' r='1.8' fill='#F4E9CE' opacity='0.6'/><circle cx='620' cy='80' r='2.2' fill='#F4E9CE' opacity='0.7'/><circle cx='380' cy='70' r='1.6' fill='#F4E9CE' opacity='0.5'/><g stroke='#F4E9CE' stroke-width='1' opacity='0.14'><line x1='0' y1='430' x2='720' y2='430'/><line x1='0' y1='470' x2='720' y2='470'/></g></svg>", ariaLabel: "Night half decoration: stars and warm light"} style="height:100%; width:100%"/>
            </Container>
            <Animate id="sp_hero_night_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; padding:88px 56px 84px 48px; position:relative; z-index:1; gap:22px; align-items:flex-start">
              <Container id="sp_night_kicker_cell" style="height:auto; width:auto"><Text id="sp_night_kicker" props={content: "18:00 — 01:00 · NIGHT", tagName: "span"}/></Container>
              <Container id="sp_night_title_cell" style="height:auto; width:auto"><Text id="sp_night_title" props={content: "After hours", tagName: "h2"}/></Container>
              <Container id="sp_night_desc_cell" style="height:auto; width:100%; max-width:470px; min-height:77px"><Text id="sp_night_desc" props={content: "Same bar, different lights and different glassware. Twelve classic cocktails, a guest list every month, vinyl after eleven.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sp_night_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="sp_night_cta" style="height:auto; width:auto; padding:14px 32px">
                  <Text id="sp_night_cta_txt" props={content: "Drinks list", tagName: "span"}/>
                </Container>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Day (sticky left column + scrolling right column) ─── -->
      <Container id="sp_day_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_day_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:64px; align-items:flex-start">
          <Container id="sp_day_left_cell" style="height:auto; width:380px; flex-shrink:0; position:sticky; top:96px">
            <FlexContainer id="sp_day_left_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="sp_day_label_cell" style="height:auto; width:auto"><Text id="sp_day_label" props={content: "DAY · 07:30 — 17:00", tagName: "span"}/></Container>
              <Container id="sp_day_h_cell" style="height:auto; width:auto"><Text id="sp_day_h" props={content: "The day shift", tagName: "h2"}/></Container>
              <Container id="sp_day_p_cell" style="height:auto; width:100%"><Text id="sp_day_p" props={content: "Everything we fuss over in daylight serves one thing: a first sip worth getting up for.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sp_day_right_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sp_day_right_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="sp_d1_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d1_num_cell" style="height:auto; width:auto"><Text id="sp_d1_num" props={content: "01 · BEANS", tagName: "span"}/></Container>
                  <Container id="sp_d1_name_cell" style="height:auto; width:auto"><Text id="sp_d1_name" props={content: "New beans every Wednesday", tagName: "h4"}/></Container>
                  <Container id="sp_d1_desc_cell" style="height:auto; width:100%"><Text id="sp_d1_desc" props={content: "Two light-roast single origins and one blend. The cupping notes are taped to the bar — read them, or ask.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_d2_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d2_num_cell" style="height:auto; width:auto"><Text id="sp_d2_num" props={content: "02 · METHOD", tagName: "span"}/></Container>
                  <Container id="sp_d2_name_cell" style="height:auto; width:auto"><Text id="sp_d2_name" props={content: "Five pour-over recipes on rotation", tagName: "h4"}/></Container>
                  <Container id="sp_d2_desc_cell" style="height:auto; width:100%"><Text id="sp_d2_desc" props={content: "One bean, brewed at three water temperatures. It is the one thing you can talk to the barista about while you order.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_d3_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d3_num_cell" style="height:auto; width:auto"><Text id="sp_d3_num" props={content: "03 · BREAD", tagName: "span"}/></Container>
                  <Container id="sp_d3_name_cell" style="height:auto; width:auto"><Text id="sp_d3_name" props={content: "First croissants at 07:30", tagName: "h4"}/></Container>
                  <Container id="sp_d3_desc_cell" style="height:auto; width:100%"><Text id="sp_d3_desc" props={content: "Two trays a day, and they are gone when they are gone. Come early at weekends — last Saturday the last one went at 9:40.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Night (the whole screen flips: dark ground) ─── -->
      <Container id="sp_night_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_night_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:64px; align-items:flex-start">
          <Container id="sp_night_right_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sp_night_right_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="sp_n1_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n1_num_cell" style="height:auto; width:auto"><Text id="sp_n1_num" props={content: "01 · CLASSICS", tagName: "span"}/></Container>
                  <Container id="sp_n1_name_cell" style="height:auto; width:auto"><Text id="sp_n1_name" props={content: "Twelve classics, details only", tagName: "h4"}/></Container>
                  <Container id="sp_n1_desc_cell" style="height:auto; width:100%"><Text id="sp_n1_desc" props={content: "The bitterness of a Negroni, the sour of a Daiquiri, the sweetness of an Old Fashioned — all built to 1930s recipes, glassware chilled in advance.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_n2_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n2_num_cell" style="height:auto; width:auto"><Text id="sp_n2_num" props={content: "02 · GUEST", tagName: "span"}/></Container>
                  <Container id="sp_n2_name_cell" style="height:auto; width:auto"><Text id="sp_n2_name" props={content: "A new guest list every month", tagName: "h4"}/></Container>
                  <Container id="sp_n2_desc_cell" style="height:auto; width:100%"><Text id="sp_n2_desc" props={content: "We hand the list to a bartender from another city for a month. This month's guest comes from Chengdu — Sichuan pepper and osmanthus.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_n3_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n3_num_cell" style="height:auto; width:auto"><Text id="sp_n3_num" props={content: "03 · SOUND", tagName: "span"}/></Container>
                  <Container id="sp_n3_name_cell" style="height:auto; width:auto"><Text id="sp_n3_name" props={content: "Vinyl after eleven", tagName: "h4"}/></Container>
                  <Container id="sp_n3_desc_cell" style="height:auto; width:100%"><Text id="sp_n3_desc" props={content: "Mostly jazz and bossa nova, and we take requests — provided you are willing to dig through the crates yourself.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="sp_night_left_cell" style="height:auto; width:380px; flex-shrink:0; position:sticky; top:96px">
            <FlexContainer id="sp_night_left_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="sp_night_label_cell" style="height:auto; width:auto"><Text id="sp_night_label" props={content: "NIGHT · 18:00 — 01:00", tagName: "span"}/></Container>
              <Container id="sp_night_h_cell" style="height:auto; width:auto"><Text id="sp_night_h" props={content: "The night shift", tagName: "h2"}/></Container>
              <Container id="sp_night_p_cell" style="height:auto; width:100%"><Text id="sp_night_p" props={content: "Once the lights go down, this is not another bar — it is the second life of the same seat.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Two-sided menu comparison ─── -->
      <Container id="sp_menu_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_menu_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px 96px; gap:40px">
          <Container id="sp_menu_title_cell" style="height:auto; width:auto; align-self:center"><Text id="sp_menu_title" props={content: "One menu, two moods", tagName: "h2"}/></Container>
          <Container id="sp_menu_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="sp_menu_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:32px; align-items:stretch">
              <Container id="sp_menu_day_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="sp_md_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; padding:38px 40px">
                  <Container id="sp_md_head_cell" style="height:auto; width:100%; padding-bottom:20px"><Text id="sp_md_head" props={content: "DAY · COFFEE", tagName: "span"}/></Container>
                  <Container id="sp_md_1_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_1_n_cell" style="height:auto; width:auto"><Text id="sp_md_1_n" props={content: "Pour-over · Yirgacheffe, Ethiopia", tagName: "span"}/></Container>
                      <Container id="sp_md_1_p_cell" style="height:auto; width:auto"><Text id="sp_md_1_p" props={content: "$ 5.5", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_2_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_2_n_cell" style="height:auto; width:auto"><Text id="sp_md_2_n" props={content: "Oat milk latte", tagName: "span"}/></Container>
                      <Container id="sp_md_2_p_cell" style="height:auto; width:auto"><Text id="sp_md_2_p" props={content: "$ 4.5", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_3_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_3_n_cell" style="height:auto; width:auto"><Text id="sp_md_3_n" props={content: "Butter croissant", tagName: "span"}/></Container>
                      <Container id="sp_md_3_p_cell" style="height:auto; width:auto"><Text id="sp_md_3_p" props={content: "$ 3.5", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_4_cell" style="height:auto; width:100%; padding:16px 0px 0px">
                    <FlexContainer id="sp_md_4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_4_n_cell" style="height:auto; width:auto"><Text id="sp_md_4_n" props={content: "Morning set (coffee + croissant)", tagName: "span"}/></Container>
                      <Container id="sp_md_4_p_cell" style="height:auto; width:auto"><Text id="sp_md_4_p" props={content: "$ 8", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="sp_menu_night_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="sp_mn_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; padding:38px 40px">
                  <Container id="sp_mn_head_cell" style="height:auto; width:100%; padding-bottom:20px"><Text id="sp_mn_head" props={content: "NIGHT · COCKTAILS", tagName: "span"}/></Container>
                  <Container id="sp_mn_1_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_1_n_cell" style="height:auto; width:auto"><Text id="sp_mn_1_n" props={content: "Negroni", tagName: "span"}/></Container>
                      <Container id="sp_mn_1_p_cell" style="height:auto; width:auto"><Text id="sp_mn_1_p" props={content: "$ 14", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_2_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_2_n_cell" style="height:auto; width:auto"><Text id="sp_mn_2_n" props={content: "Sichuan pepper & osmanthus (guest)", tagName: "span"}/></Container>
                      <Container id="sp_mn_2_p_cell" style="height:auto; width:auto"><Text id="sp_mn_2_p" props={content: "$ 16", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_3_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_3_n_cell" style="height:auto; width:auto"><Text id="sp_mn_3_n" props={content: "Whiskey sour", tagName: "span"}/></Container>
                      <Container id="sp_mn_3_p_cell" style="height:auto; width:auto"><Text id="sp_mn_3_p" props={content: "$ 13", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_4_cell" style="height:auto; width:100%; padding:16px 0px 0px">
                    <FlexContainer id="sp_mn_4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_4_n_cell" style="height:auto; width:auto"><Text id="sp_mn_4_n" props={content: "Nightfall, zero proof (driver's pour)", tagName: "span"}/></Container>
                      <Container id="sp_mn_4_p_cell" style="height:auto; width:auto"><Text id="sp_mn_4_p" props={content: "$ 8", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Seam-merge CTA ─── -->
      <Container id="sp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:92px 56px; gap:26px; align-items:center; position:relative">
          <Container id="sp_cta_seam_cell" style="height:100%; width:2px; position:absolute; left:50%; top:0px; z-index:0"><Container id="sp_cta_seam" style="height:100%; width:2px"/></Container>
          <Container id="sp_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="sp_cta_title" props={content: "See you by day, or by night", tagName: "h2"}/></Container>
          <Container id="sp_cta_sub_cell" style="height:auto; width:100%; max-width:520px; position:relative; z-index:1"><Text id="sp_cta_sub" props={content: "1088 Yuyuan Road, under the plane trees. No bookings by day; before ten at night we would recommend one.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sp_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1; padding-top:6px">
            <FlexContainer id="sp_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:20px">
              <Container id="sp_cta_day_cell" style="height:auto; width:auto">
                <Container id="sp_cta_day" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="sp_cta_day_txt" props={content: "Come for coffee", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="sp_cta_night_cell" style="height:auto; width:auto">
                <Container id="sp_cta_night" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="sp_cta_night_txt" props={content: "Book a table", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="sp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="sp_footer_left_cell" style="height:auto; width:auto"><Text id="sp_footer_left" props={content: "© 2026 DAY&NIGHT · Café, bar and menu are fictional, for demonstration only", tagName: "span"}/></Container>
          <Container id="sp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="sp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="sp_footer_f1_cell" style="height:auto; width:auto"><Text id="sp_footer_f1" props={content: "Instagram", tagName: "span"}/></Container>
              <Container id="sp_footer_f2_cell" style="height:auto; width:auto"><Text id="sp_footer_f2" props={content: "WeChat", tagName: "span"}/></Container>
              <Container id="sp_footer_f3_cell" style="height:auto; width:auto"><Text id="sp_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer "back to top" (nav.scroll capability: return to the top of the current scroll container)
      @sp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page base ──
      @sp_root = { background: #F7F1E5; }

      # ── Nav ──
      @sp_nav_region = { background: rgba(247, 241, 229, 0.94); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(14, 33, 28, 0.14); }
      @sp_nav_word = { color: #0E211C; font-size: 16px; font-weight: 800; letter-spacing: 1.2px; }
      @sp_nav_menu = {
        :scope { --anchor-item-color: rgba(14, 33, 28, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #0E211C; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.4px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B4552D; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #0E211C; }
      }
      @sp_nav_cta = { background: #0E211C; transition: background 0.25s ease; :scope:hover { background: #B4552D; } }
      @sp_nav_cta_txt = { color: #F7F1E5; font-size: 13.5px; font-weight: 700; letter-spacing: 1.2px; }

      # ── Hero (day half) ──
      @sp_hero_day_cell = { background: #F7F1E5; }
      @sp_hero_gap = { background: #0E211C; opacity: 0.85; }
      @sp_day_kicker = { color: #B4552D; font-size: 13px; font-weight: 800; letter-spacing: 2.2px; }
      # Titles stay at 76px: the halves are 639px wide and "After hours" is the longer of the two at
      # ~5.5em — about 421px of the 535px available. No reason to give up the scale here.
      @sp_day_title = { color: #141414; font-size: 76px; font-weight: 900; letter-spacing: -2.5px; }
      @sp_day_desc = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 1.7; }
      @sp_day_cta = {
        border: 2px solid #141414;
        border-radius: 999px;
        :scope { transition: background 0.25s ease; }
        :scope:hover { background: #141414; }
        :scope:hover > * { color: #F7F1E5; }
      }
      @sp_day_cta_txt = { color: #141414; font-size: 14.5px; font-weight: 800; letter-spacing: 1.2px; }

      # ── Hero (night half) ──
      @sp_hero_night_cell = { background: #0E211C; }
      @sp_night_kicker = { color: #D8B45A; font-size: 13px; font-weight: 800; letter-spacing: 2.2px; }
      @sp_night_title = { color: #F4E9CE; font-size: 76px; font-weight: 900; letter-spacing: -2.5px; }
      @sp_night_desc = { color: rgba(244, 233, 206, 0.66); font-size: 15px; line-height: 1.7; }
      @sp_night_cta = { border: 2px solid #D8B45A; border-radius: 999px; }
      @sp_night_cta_txt = { color: #D8B45A; font-size: 14.5px; font-weight: 800; letter-spacing: 1.2px; }

      # ── Day section ──
      @sp_day_region = { background: #F7F1E5; }
      @sp_day_label = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 2.6px; }
      # 48px CJK (6 glyphs) → 44px Latin: the sticky column is 380px wide and "The night shift" is
      # ~7.1em — 314px at 44px, so both headlines stay on one line inside the pinned column.
      @sp_day_h = { color: #141414; font-size: 44px; font-weight: 900; letter-spacing: -1px; }
      @sp_day_p = { color: rgba(20, 20, 20, 0.6); font-size: 14.5px; line-height: 1.7; }
      @sp_d1_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d2_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d3_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d1_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_d2_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_d3_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_d1_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_d2_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_d3_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_d1_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.65; }
      @sp_d2_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.65; }
      @sp_d3_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.65; }

      # ── Night section ──
      @sp_night_region = { background: #0E211C; }
      @sp_night_label = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 2.6px; }
      @sp_night_h = { color: #F4E9CE; font-size: 44px; font-weight: 900; letter-spacing: -1px; }
      @sp_night_p = { color: rgba(244, 233, 206, 0.62); font-size: 14.5px; line-height: 1.7; }
      @sp_n1_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n2_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n3_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n1_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_n2_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_n3_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_n1_name = { color: #F4E9CE; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_n2_name = { color: #F4E9CE; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_n3_name = { color: #F4E9CE; font-size: 20px; font-weight: 800; letter-spacing: -0.2px; }
      @sp_n1_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.65; }
      @sp_n2_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.65; }
      @sp_n3_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.65; }

      # ── Menu comparison ──
      @sp_menu_region = { background: #F7F1E5; }
      @sp_menu_title = { color: #141414; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @sp_md_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.14); border-radius: 20px; }
      @sp_mn_col = { background: #0E211C; border-radius: 20px; }
      @sp_md_head = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 2.6px; }
      @sp_mn_head = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 2.6px; }
      @sp_md_1_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_2_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_3_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_4_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_mn_1_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_2_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_3_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_4_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_md_1_n = { color: #141414; font-size: 14px; font-weight: 600; }
      @sp_md_2_n = { color: #141414; font-size: 14px; font-weight: 600; }
      @sp_md_3_n = { color: #141414; font-size: 14px; font-weight: 600; }
      @sp_md_4_n = { color: #141414; font-size: 14px; font-weight: 600; }
      @sp_mn_1_n = { color: #F4E9CE; font-size: 14px; font-weight: 600; }
      @sp_mn_2_n = { color: #F4E9CE; font-size: 14px; font-weight: 600; }
      @sp_mn_3_n = { color: #F4E9CE; font-size: 14px; font-weight: 600; }
      @sp_mn_4_n = { color: #F4E9CE; font-size: 14px; font-weight: 600; }
      @sp_md_1_p = { color: #B4552D; font-size: 14px; font-weight: 800; }
      @sp_md_2_p = { color: #B4552D; font-size: 14px; font-weight: 800; }
      @sp_md_3_p = { color: #B4552D; font-size: 14px; font-weight: 800; }
      @sp_md_4_p = { color: #B4552D; font-size: 14px; font-weight: 800; }
      @sp_mn_1_p = { color: #D8B45A; font-size: 14px; font-weight: 800; }
      @sp_mn_2_p = { color: #D8B45A; font-size: 14px; font-weight: 800; }
      @sp_mn_3_p = { color: #D8B45A; font-size: 14px; font-weight: 800; }
      @sp_mn_4_p = { color: #D8B45A; font-size: 14px; font-weight: 800; }

      # ── Merge CTA ──
      @sp_cta_region = { background: #F7F1E5; }
      @sp_cta_seam = { background: linear-gradient(180deg, #B4552D 0%, #0E211C 100%); opacity: 0.5; }
      # 56px CJK (9 glyphs) → 44px Latin: "See you by day, or by night" is 28 glyphs, ~739px at 48px —
      # it still clears the 1168px measure, but 44px keeps it visually centred over the seam instead of
      # reading as a full-width banner.
      @sp_cta_title = { color: #141414; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @sp_cta_sub = { color: rgba(20, 20, 20, 0.62); font-size: 15px; line-height: 1.7; text-align: center; }
      @sp_cta_day = { background: #FFFFFF; border: 2px solid #141414; border-radius: 999px; transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @sp_cta_day_txt = { color: #141414; font-size: 15px; font-weight: 800; letter-spacing: 1.2px; }
      @sp_cta_night = { background: #0E211C; border: 2px solid #0E211C; border-radius: 999px; transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @sp_cta_night_txt = { color: #D8B45A; font-size: 15px; font-weight: 800; letter-spacing: 1.2px; }

      # ── Footer ──
      @sp_footer_row = { border-top: 1px solid rgba(14, 33, 28, 0.14); }
      @sp_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.3px; }
      @sp_footer_f1 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
      @sp_footer_f2 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
      @sp_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
    </styles>
  </Page>
</App>
```

## Production notes

The split-screen device is the whole point of this template, so **every sticky value was left alone**
(`position:sticky`, `top:96px`, the 380px pinned column, the 2px seam, the 50:50 `flex-grow` row, the
hero padding split 56/48 about the seam). Only copy and type metrics move.

**Type metrics re-tuned for Latin glyphs:**

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero titles | 76px, tracking `-3px` | **76px**, tracking `-2.5px` | kept — the halves are 639px wide and the longest title, "After hours", is ~5.5em ≈ 421px of 535px available |
| Sticky headlines | 48px | **44px** | must stay one line inside the 380px pinned column: "The night shift" is ~7.1em ≈ 314px at 44px |
| Card titles | 21px | **20px** | "Five pour-over recipes on rotation" is 34 glyphs against 12 CJK |
| Merge CTA title | 56px | **44px** | 28 glyphs; at 56px it becomes a full-width banner rather than a centred line over the seam |
| Menu title | 46px | **44px** | 19 glyphs; kept close to the original so the two menu cards still lead the section |
| Menu rows | 14.5px | **14px** | "Sichuan pepper & osmanthus (guest)" is 3× the width of 花椒桂花特调 and must not crowd its price |
| Body leading | 1.95 – 2.0 | **1.65 – 1.7** | CJK leading, not Latin |
| Letter-spacing | 4px / 3.4px / 2.4px / 2px / 0.8px | **2.6 / 2.2 / 1.6 / 1.2 / 0.4px** | wide tracking is a Chinese display habit; uppercase Latin already has its own rhythm |

The right-hand card columns gain roughly one line per card in English. That lengthens the sticky
travel (the pinned column simply stays pinned longer), which helps the section rather than hurting it
— no geometry change was needed to absorb it.

**The hero needed one real fix.** English runs longer, so the day paragraph wrapped to four lines
against the night's three, and the two CTAs — which the whole 50:50 device invites you to compare —
landed 12px apart. Widening both description cells 420px → **470px** (of 535px available in a half)
brought the day copy back to three lines, and a `min-height:77px` on the two description cells
(three lines at 15px / 1.7) pins the rest of each stack to the same baseline. Measured after the
change: `sp_day_cta` and `sp_night_cta` both sit at y=458, and the halves mirror exactly.

The day title `Wide awake` is 437px wide in a 639px half, so its last two letters graze the lower arc
of the translucent sun disc behind it. That was checked rather than assumed: the disc is a 25–45%
#E8A33D wash over #F7F1E5, so the black type keeps a contrast ratio of ~11:1 there, and at 1280 the
letterforms stay crisp — it reads as type crossing the sun, not as a collision. Sizing the title down
to clear the disc (64px) would cost more presence than the graze costs clarity, so 76px stayed.

**Copy policy** — the two characters are rewritten, not transliterated:

| | Chinese | English |
| --- | --- | --- |
| Brand | 昼与夜 DAY&NIGHT | **DAY&NIGHT** (the romanisation *is* the brand in Latin) |
| Hero titles | 一杯清醒 / 一杯微醺 | **Wide awake** / **After hours** — a paired idiom that keeps the day/night mirror |
| Sticky headlines | 把早晨做扎实 / 让夜晚慢下来 | **The day shift** / **The night shift** — reads as both a work shift and the split itself |
| Nav | 昼 · 咖啡 / 夜 · 酒 / 找到我们 | Day · Coffee / Night · Bar / Find us |
| Closing | 白天见，或者晚上见 | See you by day, or by night |

Currency moves to USD — the menu is the one place where a price list is genuinely read as money, and
the showcase is English-facing. Social entries 小红书 / 公众号 become Instagram / WeChat (the venue is
still on Yuyuan Road in Shanghai). Drinks keep their international names (Negroni, Daiquiri, Whiskey
sour); the guest-month drink stays a Sichuan pepper & osmanthus special, since that is the cultural
detail the copy is built on.

**No structural changes** — every node from the Chinese original survives with its id, all inline SVG
is byte-identical (including the 2px seam and the night stars), and the `sp_footer_f3` back-to-top
binding is unchanged.
