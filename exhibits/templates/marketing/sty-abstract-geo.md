# Abstract Geometry — "The Weight of Form" contemporary art exhibition

> Template role (marketing / growth tab · style series): abstract geometry — a warm grey paper ground
> with four big colour planes (terracotta / deep ink blue / mustard / black), **oversized geometric
> planes layered across section boundaries** (absolutely positioned decoration layers), fine reference
> grid lines, and gallery-style typography (inventory numbers + medium and dimensions + long white
> space). A layout-driven template: offset colour blocks and an oversized number build the depth.
> Scenario: a site for a fictional contemporary abstract art exhibition: a hero with an oversized title
> and three overlapping planes; an introduction (number 01 + two columns); six works (geometric SVG
> cover + number / title / medium / dimensions); a curator's note band; visiting information (hours /
> address / tickets + a booking CTA); a footer. No bitmap assets, no API, one entrance orchestration
> (hero onMount).

```lang
<App dsl-version="0.3" name="The Weight of Form — Contemporary Abstract Art">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="ag_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="ag_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="ag_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 56px">
          <Container id="ag_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ag_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:14px">
              <Container id="ag_nav_name_cell" style="height:auto; width:auto"><Text id="ag_nav_name" props={content: "THE WEIGHT OF FORM", tagName: "span"}/></Container>
              <Container id="ag_nav_en_cell" style="height:auto; width:auto"><Text id="ag_nav_en" props={content: "WEST BUND MUSEUM", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="ag_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="ag_nav_i1" props={itemLabel: "Exhibition", itemTarget: "ag_intro_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i2" props={itemLabel: "Works", itemTarget: "ag_works_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i3" props={itemLabel: "Curator", itemTarget: "ag_quote_region"} style="height:auto; width:auto"/>
              <Container id="ag_nav_i4" props={itemLabel: "Visit", itemTarget: "ag_visit_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="ag_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="ag_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="ag_nav_cta_txt" props={content: "Book tickets", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (oversized title + three overlapping planes) ─── -->
      <Container id="ag_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="ag_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="ag_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 820' preserveAspectRatio='xMidYMid slice' fill='none'><rect x='880' y='120' width='420' height='420' fill='#B4512E'/><circle cx='1150' cy='520' r='150' fill='#1E2A4A'/><path d='M960,820 L1240,420 L1440,820 Z' fill='#C9A227' opacity='0.92'/><rect x='1180' y='60' width='180' height='180' fill='#141414'/><g stroke='#141414' stroke-width='1' opacity='0.14'><line x1='0' y1='655' x2='1440' y2='655'/><line x1='0' y1='695' x2='1440' y2='695'/><line x1='1040' y1='0' x2='1040' y2='820'/><line x1='1084' y1='0' x2='1084' y2='820'/></g><circle cx='150' cy='700' r='60' stroke='#141414' stroke-width='2' fill='none'/><circle cx='150' cy='700' r='30' stroke='#141414' stroke-width='2' fill='none'/></svg>", ariaLabel: "Hero composition: three overlapping planes with a reference grid"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="ag_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:92px 56px 96px; position:relative; z-index:1; align-items:flex-start">
          <Container id="ag_hero_kicker_cell" style="height:auto; width:auto">
            <FlexContainer id="ag_hero_kicker_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="ag_hero_kicker_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="ag_hero_kicker_chip" style="height:12px; width:12px"/></Container>
              <Container id="ag_hero_kicker_txt_cell" style="height:auto; width:auto"><Text id="ag_hero_kicker_txt" props={content: "CONTEMPORARY ABSTRACT ART · GROUP SHOW 2026", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_hero_title_cell" style="height:auto; width:auto; padding-top:34px">
            <FlexContainer id="ag_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
              <Container id="ag_hero_l1_cell" style="height:auto; width:auto"><Text id="ag_hero_l1" props={content: "THE WEIGHT", tagName: "h1"}/></Container>
              <Container id="ag_hero_l2_cell" style="height:auto; width:auto; padding-left:200px"><Text id="ag_hero_l2" props={content: "OF FORM", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_hero_meta_cell" style="height:auto; width:auto; padding-top:40px">
            <FlexContainer id="ag_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:36px">
              <Container id="ag_hero_meta_date_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_date" props={content: "NOV 8, 2026 — FEB 15, 2027", tagName: "span"}/></Container>
              <Container id="ag_hero_meta_place_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_place" props={content: "West Bund Museum · Main Hall 1F", tagName: "span"}/></Container>
              <Container id="ag_hero_meta_slot_cell" style="height:auto; width:auto"><Text id="ag_hero_meta_slot" props={content: "Closed Mondays", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Introduction (number + two columns) ─── -->
      <Container id="ag_intro_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_intro_row" props={direction: "row"} style="height:auto; width:100%; padding:48px 56px 96px; gap:64px; align-items:flex-start">
          <Container id="ag_intro_num_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ag_intro_num_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
              <Container id="ag_intro_num_txt_cell" style="height:auto; width:auto"><Text id="ag_intro_num_txt" props={content: "01", tagName: "h2"}/></Container>
              <Container id="ag_intro_num_label_cell" style="height:auto; width:auto"><Text id="ag_intro_num_label" props={content: "ABOUT THE SHOW", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_intro_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="ag_intro_body_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="ag_intro_lead_cell" style="height:auto; width:100%; max-width:760px"><Text id="ag_intro_lead" props={content: "Seventeen artists, forty-two works, all circling one old question: does a colour, or a shape, actually weigh anything?", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="ag_intro_p1_cell" style="height:auto; width:100%; max-width:640px"><Text id="ag_intro_p1" props={content: "The exhibition breaks visual weight into three experiences: the pressure of one plane laid over another, the density of a colour itself, and the suspension that empty space holds up. The galleries are divided along those three chapters, and you can enter them in any order.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="ag_intro_p2_cell" style="height:auto; width:100%; max-width:640px"><Text id="ag_intro_p2" props={content: "Everything here is acrylic and mixed media on canvas. The largest piece, Sediment, runs six metres and was made for this show — it will be unveiled at the centre of the main hall.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Works on show (six) ─── -->
      <Container id="ag_works_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_works_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 56px 104px; gap:48px">
          <Container id="ag_works_head_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="ag_works_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="ag_works_head_l_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:16px">
                  <Container id="ag_works_head_num_cell" style="height:auto; width:auto"><Text id="ag_works_head_num" props={content: "02", tagName: "h2"}/></Container>
                  <Container id="ag_works_head_label_cell" style="height:auto; width:auto"><Text id="ag_works_head_label" props={content: "SELECTED WORKS", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ag_works_head_r_cell" style="height:auto; width:340px; flex-shrink:0"><Text id="ag_works_head_r" props={content: "Six key works across the three chapters. Each one carries a 90-second audio guide on site.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_works_row1_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_row1" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:flex-start">
              <Container id="ag_w1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w1_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#EFE9DE'/><rect x='60' y='70' width='180' height='160' fill='#B4512E'/><rect x='150' y='30' width='170' height='110' fill='#1E2A4A' opacity='0.92'/><circle cx='120' cy='250' r='34' fill='#C9A227'/></svg>", ariaLabel: "Work one, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w1_num_cell" style="height:auto; width:auto"><Text id="ag_w1_num" props={content: "№ 01", tagName: "span"}/></Container>
                    <Container id="ag_w1_name_cell" style="height:auto; width:auto"><Text id="ag_w1_name" props={content: "Overlay", tagName: "h4"}/></Container>
                    <Container id="ag_w1_desc_cell" style="height:auto; width:100%"><Text id="ag_w1_desc" props={content: "Acrylic on canvas · 180 × 160 cm · 2024", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w2_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#1E2A4A'/><circle cx='190' cy='150' r='104' fill='#EFE9DE'/><path d='M190,46 A104,104 0 0 1 294,150 L190,150 Z' fill='#C9A227'/><rect x='24' y='228' width='120' height='48' fill='#B4512E'/></svg>", ariaLabel: "Work two, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w2_num_cell" style="height:auto; width:auto"><Text id="ag_w2_num" props={content: "№ 02", tagName: "span"}/></Container>
                    <Container id="ag_w2_name_cell" style="height:auto; width:auto"><Text id="ag_w2_name" props={content: "The Unease of Circles", tagName: "h4"}/></Container>
                    <Container id="ag_w2_desc_cell" style="height:auto; width:100%"><Text id="ag_w2_desc" props={content: "Acrylic on canvas · 150 × 150 cm · 2023", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w3_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#C9A227'/><path d='M0,300 L190,0 L380,300 Z' fill='#B4512E'/><circle cx='190' cy='210' r='56' fill='#1E2A4A'/><rect x='300' y='30' width='50' height='50' fill='#EFE9DE'/></svg>", ariaLabel: "Work three, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w3_num_cell" style="height:auto; width:auto"><Text id="ag_w3_num" props={content: "№ 03", tagName: "span"}/></Container>
                    <Container id="ag_w3_name_cell" style="height:auto; width:auto"><Text id="ag_w3_name" props={content: "Mountain and Hollow", tagName: "h4"}/></Container>
                    <Container id="ag_w3_desc_cell" style="height:auto; width:100%"><Text id="ag_w3_desc" props={content: "Mixed media · 200 × 180 cm · 2025", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="ag_works_row2_cell" style="height:auto; width:100%">
            <FlexContainer id="ag_works_row2" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:flex-start">
              <Container id="ag_w4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w4_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w4_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w4_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#EFE9DE'/><g stroke='#141414' stroke-width='10'><line x1='40' y1='60' x2='340' y2='60'/><line x1='40' y1='120' x2='340' y2='120'/><line x1='40' y1='180' x2='260' y2='180'/><line x1='40' y1='240' x2='320' y2='240'/></g><circle cx='322' cy='240' r='22' fill='#B4512E'/></svg>", ariaLabel: "Work four, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w4_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w4_num_cell" style="height:auto; width:auto"><Text id="ag_w4_num" props={content: "№ 04", tagName: "span"}/></Container>
                    <Container id="ag_w4_name_cell" style="height:auto; width:auto"><Text id="ag_w4_name" props={content: "Quatrain", tagName: "h4"}/></Container>
                    <Container id="ag_w4_desc_cell" style="height:auto; width:100%"><Text id="ag_w4_desc" props={content: "Acrylic on canvas · 160 × 130 cm · 2022", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w5_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w5_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w5_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w5_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#B4512E'/><rect x='48' y='48' width='284' height='204' fill='none' stroke='#EFE9DE' stroke-width='3'/><circle cx='190' cy='150' r='70' fill='#C9A227'/><rect x='120' y='80' width='140' height='140' fill='#1E2A4A' opacity='0.86'/></svg>", ariaLabel: "Work five, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w5_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w5_num_cell" style="height:auto; width:auto"><Text id="ag_w5_num" props={content: "№ 05", tagName: "span"}/></Container>
                    <Container id="ag_w5_name_cell" style="height:auto; width:auto"><Text id="ag_w5_name" props={content: "Echo", tagName: "h4"}/></Container>
                    <Container id="ag_w5_desc_cell" style="height:auto; width:100%"><Text id="ag_w5_desc" props={content: "Acrylic on canvas · 170 × 140 cm · 2023", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="ag_w6_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="ag_w6_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="ag_w6_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                    <Svg id="ag_w6_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 300' preserveAspectRatio='xMidYMid slice'><rect width='380' height='300' fill='#141414'/><g fill='#EFE9DE'><rect x='40' y='40' width='80' height='220'/><rect x='140' y='90' width='80' height='170'/></g><rect x='240' y='150' width='100' height='110' fill='#C9A227'/><circle cx='290' cy='80' r='36' fill='#B4512E'/></svg>", ariaLabel: "Work six, geometric composition"} style="height:300px; width:100%"/>
                  </Container>
                  <FlexContainer id="ag_w6_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                    <Container id="ag_w6_num_cell" style="height:auto; width:auto"><Text id="ag_w6_num" props={content: "№ 06", tagName: "span"}/></Container>
                    <Container id="ag_w6_name_cell" style="height:auto; width:auto"><Text id="ag_w6_name" props={content: "Sediment (new commission)", tagName: "h4"}/></Container>
                    <Container id="ag_w6_desc_cell" style="height:auto; width:100%"><Text id="ag_w6_desc" props={content: "Mixed media · 600 × 220 cm · 2026", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Curator's note ─── -->
      <Container id="ag_quote_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:84px">
        <Container id="ag_quote_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="ag_quote_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 420' preserveAspectRatio='xMidYMid slice' fill='none'><rect width='1440' height='420' fill='#1E2A4A'/><circle cx='1280' cy='80' r='170' fill='#B4512E' opacity='0.85'/><rect x='60' y='300' width='150' height='150' fill='#C9A227' opacity='0.9'/><circle cx='1150' cy='330' r='60' stroke='#EFE9DE' stroke-width='2' fill='none' opacity='0.5'/></svg>", ariaLabel: "Deep blue quote band decoration"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="ag_quote_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px; gap:34px; align-items:center; position:relative; z-index:1">
          <Container id="ag_quote_mark_cell" style="height:auto; width:auto"><Text id="ag_quote_mark" props={content: "CURATOR’S NOTE", tagName: "span"}/></Container>
          <Container id="ag_quote_text_cell" style="height:auto; width:100%; max-width:920px">
            <FlexContainer id="ag_quote_text_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:center">
              <Container id="ag_quote_l1_cell" style="height:auto; width:auto"><Text id="ag_quote_l1" props={content: "“We judge weight with our eyes —", tagName: "h3"}/></Container>
              <Container id="ag_quote_l2_cell" style="height:auto; width:auto"><Text id="ag_quote_l2" props={content: "but real weight is what the body remembers.”", tagName: "h3"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ag_quote_sign_cell" style="height:auto; width:auto"><Text id="ag_quote_sign" props={content: "— Shen Li, curator", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Visiting information ─── -->
      <Container id="ag_visit_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="ag_visit_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:72px; align-items:flex-start">
          <Container id="ag_visit_info_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="ag_visit_info_col" props={direction: "column"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="ag_visit_head_cell" style="height:auto; width:auto">
                <FlexContainer id="ag_visit_head_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:16px">
                  <Container id="ag_visit_head_num_cell" style="height:auto; width:auto"><Text id="ag_visit_head_num" props={content: "03", tagName: "h2"}/></Container>
                  <Container id="ag_visit_head_label_cell" style="height:auto; width:auto"><Text id="ag_visit_head_label" props={content: "PLAN YOUR VISIT", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ag_visit_rows_cell" style="height:auto; width:100%; max-width:560px">
                <FlexContainer id="ag_visit_rows_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="ag_v1_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v1_k_cell" style="height:auto; width:auto"><Text id="ag_v1_k" props={content: "Opening hours", tagName: "span"}/></Container>
                      <Container id="ag_v1_v_cell" style="height:auto; width:auto"><Text id="ag_v1_v" props={content: "Tue – Sun, 10:00 — 18:00", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v2_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v2_k_cell" style="height:auto; width:auto"><Text id="ag_v2_k" props={content: "Address", tagName: "span"}/></Container>
                      <Container id="ag_v2_v_cell" style="height:auto; width:auto"><Text id="ag_v2_v" props={content: "West Bund Museum, Main Hall · Shanghai", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v3_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v3_k_cell" style="height:auto; width:auto"><Text id="ag_v3_k" props={content: "Tickets", tagName: "span"}/></Container>
                      <Container id="ag_v3_v_cell" style="height:auto; width:auto"><Text id="ag_v3_v" props={content: "Early bird CNY 80 / Standard CNY 120 / Students half price", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ag_v4_cell" style="height:auto; width:100%; padding:20px 0px">
                    <FlexContainer id="ag_v4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:24px">
                      <Container id="ag_v4_k_cell" style="height:auto; width:auto"><Text id="ag_v4_k" props={content: "Tours", tagName: "span"}/></Container>
                      <Container id="ag_v4_v_cell" style="height:auto; width:auto"><Text id="ag_v4_v" props={content: "Curator-led tour daily at 14:00 (booking required)", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ag_visit_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="ag_visit_cta" style="height:auto; width:auto; padding:17px 42px">
                  <Text id="ag_visit_cta_txt" props={content: "Book tickets", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="ag_visit_fig_cell" style="height:auto; width:420px; flex-shrink:0">
            <Container id="ag_visit_fig" style="height:460px; width:100%">
              <Svg id="ag_visit_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 460' preserveAspectRatio='xMidYMid slice'><rect width='420' height='460' fill='#EFE9DE'/><rect x='40' y='60' width='240' height='240' fill='#B4512E'/><circle cx='300' cy='180' r='80' fill='#1E2A4A'/><path d='M80,460 L210,260 L340,460 Z' fill='#C9A227'/><g stroke='#141414' stroke-width='1' opacity='0.18'><line x1='0' y1='360' x2='420' y2='360'/><line x1='0' y1='392' x2='420' y2='392'/></g><circle cx='80' cy='390' r='26' stroke='#141414' stroke-width='2' fill='none'/></svg>", ariaLabel: "Visiting information illustration: geometric composition"} style="height:460px; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="ag_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="ag_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="ag_footer_left_cell" style="height:auto; width:auto"><Text id="ag_footer_left" props={content: "© 2026 West Bund Museum · Exhibition and works are fictional, for demonstration only", tagName: "span"}/></Container>
          <Container id="ag_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="ag_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="ag_footer_f1_cell" style="height:auto; width:auto"><Text id="ag_footer_f1" props={content: "Past exhibitions", tagName: "span"}/></Container>
              <Container id="ag_footer_f2_cell" style="height:auto; width:auto"><Text id="ag_footer_f2" props={content: "Membership", tagName: "span"}/></Container>
              <Container id="ag_footer_f3_cell" style="height:auto; width:auto"><Text id="ag_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer "back to top" (nav.scroll capability: return to the top of the current scroll container)
      @ag_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page base (warm grey paper) ──
      @ag_root = { background: #EFE9DE; }

      # ── Nav ──
      @ag_nav_region = { background: rgba(239, 233, 222, 0.94); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(20, 20, 20, 0.22); }
      # 18px CJK (5 glyphs) → 15px Latin (18 glyphs): uppercase Latin advances are ~0.7em against a full
      # CJK em, so the brand would be 2.4× wider at the original size and squeeze the menu row.
      @ag_nav_name = { color: #141414; font-size: 15px; font-weight: 900; letter-spacing: 1.4px; }
      @ag_nav_en = { color: rgba(20, 20, 20, 0.45); font-size: 9.5px; font-weight: 600; letter-spacing: 1.8px; }
      @ag_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #B4512E; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.6px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B4512E; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #B4512E; }
      }
      @ag_nav_cta = { background: #1E2A4A; transition: background 0.25s ease; :scope:hover { background: #B4512E; } }
      @ag_nav_cta_txt = { color: #EFE9DE; font-size: 13.5px; font-weight: 700; letter-spacing: 1.2px; }

      # ── Hero ──
      @ag_hero_kicker_chip = { background: #B4512E; }
      @ag_hero_kicker_txt = { color: rgba(20, 20, 20, 0.7); font-size: 12.5px; font-weight: 700; letter-spacing: 2.2px; }
      # Display type, measured rather than guessed: Inter Black caps run ~0.69em/glyph, so "THE WEIGHT"
      # (10 glyphs) is ~6.3em — 707px at 112px. The 128px of the CJK original would put it at 807px and
      # run the line under the terracotta plane that starts at x=782 of the 1280 canvas.
      @ag_hero_l1 = { color: #141414; font-size: 112px; font-weight: 900; line-height: 1.0; letter-spacing: -3.5px; }
      @ag_hero_l2 = { color: #1E2A4A; font-size: 112px; font-weight: 900; line-height: 1.0; letter-spacing: -3.5px; }
      @ag_hero_meta_date = { color: #B4512E; font-size: 14px; font-weight: 700; letter-spacing: 1.1px; }
      @ag_hero_meta_place = { color: rgba(20, 20, 20, 0.68); font-size: 14px; font-weight: 600; letter-spacing: 1.1px; }
      @ag_hero_meta_slot = { color: rgba(20, 20, 20, 0.45); font-size: 13px; letter-spacing: 1.1px; }

      # ── Introduction ──
      @ag_intro_num_txt = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_intro_num_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      # 27px / 1.75 → 25px / 1.5: the English lead runs ~105 glyphs against 41 CJK, so it needs the
      # smaller size to stay near the two lines the 760px measure was drawn for.
      @ag_intro_lead = { color: #141414; font-size: 25px; font-weight: 800; line-height: 1.5; letter-spacing: -0.3px; }
      @ag_intro_p1 = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 1.65; }
      @ag_intro_p2 = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 1.65; }

      # ── Works ──
      @ag_works_head_num = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_works_head_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      @ag_works_head_r = { color: rgba(20, 20, 20, 0.6); font-size: 13.5px; line-height: 1.65; }
      @ag_w1_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w2_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w3_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w4_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w5_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w6_num = { color: #B4512E; font-size: 13px; font-weight: 800; letter-spacing: 1.4px; }
      @ag_w1_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w2_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w3_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w4_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w5_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w6_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: 0.2px; }
      @ag_w1_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w2_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w3_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w4_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w5_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w6_desc = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; letter-spacing: 0.5px; }
      @ag_w1_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w2_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w3_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w4_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w5_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }
      @ag_w6_fig_cell = { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-6px); } }

      # ── Curator's note ──
      @ag_quote_mark = { color: rgba(239, 233, 222, 0.6); font-size: 12px; font-weight: 700; letter-spacing: 2.6px; }
      # 40px CJK (13 / 18 glyphs) → 36px Latin (31 / 43 glyphs): both lines stay one line each inside the
      # 920px measure instead of breaking into three.
      @ag_quote_l1 = { color: #EFE9DE; font-size: 36px; font-weight: 800; line-height: 1.4; letter-spacing: -0.5px; }
      @ag_quote_l2 = { color: #C9A227; font-size: 36px; font-weight: 800; line-height: 1.4; letter-spacing: -0.5px; }
      @ag_quote_sign = { color: rgba(239, 233, 222, 0.7); font-size: 14px; letter-spacing: 0.9px; }

      # ── Visiting information ──
      @ag_visit_head_num = { color: #B4512E; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @ag_visit_head_label = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 700; letter-spacing: 2.4px; }
      @ag_v1_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v2_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v3_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v4_cell = { border-top: 1px solid rgba(20, 20, 20, 0.2); border-bottom: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_v1_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 0.7px; }
      @ag_v2_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 0.7px; }
      @ag_v3_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 0.7px; }
      @ag_v4_k = { color: rgba(20, 20, 20, 0.5); font-size: 13px; font-weight: 600; letter-spacing: 0.7px; }
      @ag_v1_v = { color: #141414; font-size: 14px; font-weight: 600; }
      @ag_v2_v = { color: #141414; font-size: 14px; font-weight: 600; }
      @ag_v3_v = { color: #141414; font-size: 14px; font-weight: 600; }
      @ag_v4_v = { color: #141414; font-size: 14px; font-weight: 600; }
      @ag_visit_cta = { background: #B4512E; transition: transform 0.25s ease, background 0.25s ease; :scope:hover { transform: translateY(-2px); background: #1E2A4A; } }
      @ag_visit_cta_txt = { color: #EFE9DE; font-size: 15px; font-weight: 800; letter-spacing: 1.6px; }

      # ── Footer ──
      @ag_footer_row = { border-top: 1px solid rgba(20, 20, 20, 0.2); }
      @ag_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.3px; }
      @ag_footer_f1 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
      @ag_footer_f2 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
      @ag_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4512E; } }
    </styles>
  </Page>
</App>
```

## Production notes

This is the same gallery as the Chinese original, re-typeset for Latin glyphs rather than translated
line by line. Nodes, ids, colours, spacing and motion are unchanged; the type metrics are not.

**Display type is measured, not guessed.** Inter Black caps run ~0.69em per glyph, so
`THE WEIGHT` (10 glyphs) is ~6.3em wide:

| | Chinese source | English version |
| --- | --- | --- |
| Hero lines | 形态的 / 重量 — 3 + 2 glyphs | THE WEIGHT / OF FORM — 10 + 7 glyphs |
| Hero size | 128px, tracking `-5px` | **112px**, tracking **`-3.5px`** |
| Line-2 indent | 196px | **200px** (keeps the two lines ending within ~30px of each other) |

At 128px the first line would be ~807px and would run under the terracotta plane that starts at
x=782 of the 1280 canvas. At 112px it ends at ~760px, so the plane stays a plane and the type stays
legible — the overlap in this composition is meant to happen at the *edges*, not across the title.

**Tracking came down wherever the original carried CJK letter-spacing** (4px → 2.6px on eyebrow
labels, 3.4px → 2.2px / 2.4px, 2px → 1.2–1.4px on inventory numbers and buttons, 1.6px → 1.1px on the
hero meta row). Wide tracking is a Chinese display convention; uppercase Latin already carries its
own rhythm and looks loose with it.

**Leading came down for body copy**: intro paragraphs 2.1 → **1.65**, section note 1.9 → 1.65. CJK
needs the air between square glyphs; Latin does not, and English copy occupies more lines for the
same meaning.

| Element | Chinese | English | Why |
| --- | --- | --- | --- |
| `ag_intro_lead` | 27px / 1.75 | **25px / 1.5** | ~105 Latin glyphs against 41 CJK — at 27px the 760px measure gives three lines |
| `ag_quote_l1` / `l2` | 40px / 1.7 | **36px / 1.4** | 31 and 43 glyphs; at 40px the second line breaks inside the 920px measure |
| `ag_works_head_r` cell | `width:320px` | **`width:340px`** | the six-work note gains a line at 320px |
| `ag_v*_v` (visit values) | 14.5px | **14px** | `Early bird CNY 80 / Standard CNY 120 / Students half price` is longer than `早鸟 ¥80 / 全价 ¥120 / 学生半价`; 14px keeps it on one line beside its label |
| `ag_nav_name` | 18px / `3px` | **15px / `1.4px`** | brand is now 18 Latin glyphs, and at 18px it pushes the menu into the CTA |

**Copy policy** — equivalent situations, not literal text. The Chinese title 「形态的重量」 is already
an English-shaped phrase, so **THE WEIGHT OF FORM** is the brand; the small annotation beside it
changes role from a romanisation to the venue (`WEST BUND MUSEUM`), mirroring how the Bauhaus
template pairs a wordmark with a studio descriptor. Works: 《叠压》 → *Overlay*, 《圆的不安》 →
*The Unease of Circles*, 《山与洞》 → *Mountain and Hollow*, 《四行诗》 → *Quatrain*, 《回声》 → *Echo*,
《沉积》 → *Sediment*. Mediums: 布面丙烯 → "Acrylic on canvas", 综合材料 → "Mixed media". Prices stay in
CNY — the museum is in Shanghai and the ticket row is read as a real price list, not a conversion
exercise. 每周一闭馆 → "Closed Mondays"; the curator's name stays Shen Li; footer platform entries
(往期展览 / 会员计划) become "Past exhibitions" / "Membership".

**One knock-on effect worth knowing about.** The introduction's number column is `width:auto` and
each label drives it, so the English label `ABOUT THE SHOW` (145px) is wider than `展览简介` (62px) and
the body column starts at x=265 instead of x=182. Nothing overflows — the 760px lead still ends well
inside the measure — but anyone comparing the two screenshots side by side will see the intro body
sit a little further right. It is the label column, not a re-layout; the works / curator / visit
sections keep their original offsets.

**No structural changes** — all nodes in the Chinese original survive with their ids, and the
`ag_footer_f3` back-to-top binding plus every SVG asset string is untouched.
