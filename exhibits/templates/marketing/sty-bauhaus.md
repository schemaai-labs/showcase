# Bauhaus — "GÉOMÉTRIE" design studio site

> Template role (marketing / growth tab · style series): the Bauhaus visual language — three
> primaries plus black on a warm paper white, basic forms (circle / semicircle / triangle / heavy
> rule) and heavy typography. **A layout-driven template**: a staggered oversized hero, layered
> geometric ornaments, a staircase of work cards, a black manifesto band and a red CTA cutting the
> rhythm — deliberately breaking the even three-column skeleton.
> Scenario: a website for a fictional design studio: paper-white ground with a black / red / yellow /
> blue system; a hero of three staggered display lines — FORM / FOLLOWS / FUNCTION, the last in red to
> land the point — over a geometric ornament layer (red circle / yellow circle / blue arc / black
> triangle); a black manifesto band with three basic-form cards; three staircase work cards (pure SVG
> geometry plus large numerals); a numbers band; an asymmetric 7:5 "method" split; a red CTA; a black
> footer. No bitmap assets (every geometric element is hand-written SVG), no API, static data, two
> entrance orchestrations (hero onMount / work cards onView).

```lang
<App dsl-version="0.3" name="GÉOMÉTRIE — Bauhaus Studio Site">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="bh_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (paper ground + tri-colour mark) ─── -->
      <Container id="bh_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="bh_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 56px">
          <Container id="bh_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="bh_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="bh_nav_mark_cell" style="height:38px; width:38px; flex-shrink:0">
                <Svg id="bh_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'><rect x='0' y='0' width='18' height='18' fill='#D8342C'/><circle cx='28.5' cy='9' r='9' fill='#F0B429'/><polygon points='9,38 0,21 18,21' fill='#1F4FA8'/><rect x='20' y='21' width='18' height='17' fill='#141414'/></svg>", ariaLabel: "GÉOMÉTRIE studio mark"} style="height:38px; width:38px"/>
              </Container>
              <Container id="bh_nav_word_cell" style="height:auto; width:auto">
                <FlexContainer id="bh_nav_word_col" props={direction: "column"} style="height:auto; width:auto; gap:3px">
                  <Container id="bh_nav_word_cn_cell" style="height:auto; width:auto"><Text id="bh_nav_word_cn" props={content: "GÉOMÉTRIE", tagName: "span"}/></Container>
                  <Container id="bh_nav_word_en_cell" style="height:auto; width:auto"><Text id="bh_nav_word_en" props={content: "DESIGN STUDIO", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="bh_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="bh_nav_i1" props={itemLabel: "Work", itemTarget: "bh_work_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i2" props={itemLabel: "Method", itemTarget: "bh_method_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i3" props={itemLabel: "Studio", itemTarget: "bh_manifesto_region"} style="height:auto; width:auto"/>
              <Container id="bh_nav_i4" props={itemLabel: "Contact", itemTarget: "bh_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="bh_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="bh_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="bh_nav_cta_txt" props={content: "Start a project", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (geometric ornament layer + staggered display type) ─── -->
      <Container id="bh_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="bh_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="bh_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 880' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='28' cy='-26' r='212' fill='#D8342C' opacity='0.95'/><circle cx='1338' cy='128' r='164' fill='#F0B429'/><path d='M1180,880 A220,220 0 0 1 1400,660 L1400,880 Z' fill='#1F4FA8'/><polygon points='96,880 244,880 170,778' fill='#141414' opacity='0.9'/><line x1='0' y1='470' x2='1440' y2='470' stroke='#141414' stroke-width='1' opacity='0.16'/><line x1='0' y1='504' x2='1440' y2='504' stroke='#141414' stroke-width='1' opacity='0.09'/><rect x='872' y='238' width='132' height='14' fill='#141414'/><circle cx='1104' cy='304' r='26' stroke='#141414' stroke-width='2'/><circle cx='1180' cy='304' r='26' stroke='#141414' stroke-width='2' opacity='0.55'/><circle cx='1256' cy='304' r='26' stroke='#141414' stroke-width='2' opacity='0.3'/><path d='M620,880 A300,300 0 0 1 920,580' stroke='#D8342C' stroke-width='3' opacity='0.45'/></svg>", ariaLabel: "Hero composition: red circle / yellow circle / blue arc / black triangle"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="bh_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:88px 56px 0px; position:relative; z-index:1; align-items:flex-start">
          <Container id="bh_hero_eyebrow_cell" style="height:auto; width:auto">
            <Container id="bh_hero_eyebrow" style="height:auto; width:auto; padding:8px 16px">
              <Text id="bh_hero_eyebrow_txt" props={content: "BAUHAUS · DESIGN STUDIO · SHANGHAI / BERLIN", tagName: "span"}/>
            </Container>
          </Container>
          <!-- The side column bottom-aligns with the display type, so shorter English type (96px vs
               132px) pulls it up into the decorative circles behind. Extra top padding pushes the
               whole row back down clear of them. -->
          <Container id="bh_hero_main_cell" style="height:auto; width:100%; padding-top:104px">
            <FlexContainer id="bh_hero_main_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:56px">
              <Container id="bh_hero_type_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_hero_type_col" props={direction: "column"} style="height:auto; width:100%; gap:4px; align-items:flex-start">
                  <Container id="bh_hero_l1_cell" style="height:auto; width:auto">
                    <Text id="bh_hero_l1_big" props={content: "FORM", tagName: "h1"}/>
                  </Container>
                  <Container id="bh_hero_l2_cell" style="height:auto; width:auto; padding-left:80px">
                    <Text id="bh_hero_l2_big" props={content: "FOLLOWS", tagName: "h1"}/>
                  </Container>
                  <Container id="bh_hero_l3_cell" style="height:auto; width:auto; padding-left:160px">
                    <Text id="bh_hero_l3_big" props={content: "FUNCTION", tagName: "h1"}/>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_hero_side_cell" style="height:auto; width:280px; flex-shrink:0">
                <FlexContainer id="bh_hero_side_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
                  <Container id="bh_hero_side_rule_cell" style="height:4px; width:64px; flex-shrink:0"><Container id="bh_hero_side_rule" style="height:4px; width:64px"/></Container>
                  <Container id="bh_hero_side_desc_cell" style="height:auto; width:100%"><Text id="bh_hero_side_desc" props={content: "Founded in 2017. We use the geometric language of modernism to bring clear order to brands, spaces and digital products.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="bh_hero_side_meta_cell" style="height:auto; width:100%">
                    <FlexContainer id="bh_hero_side_meta_col" props={direction: "column"} style="height:auto; width:100%; gap:10px">
                      <Container id="bh_hero_meta_1_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_1" props={content: "Based — Shanghai · Berlin", tagName: "span"}/></Container>
                      <Container id="bh_hero_meta_2_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_2" props={content: "Founded — 2017", tagName: "span"}/></Container>
                      <Container id="bh_hero_meta_3_cell" style="height:auto; width:100%"><Text id="bh_hero_meta_3" props={content: "Projects — 142", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_hero_bar_cell" style="height:auto; width:100%; padding-top:64px">
            <FlexContainer id="bh_hero_bar_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_hero_bars_cell" style="height:auto; width:100%">
                <FlexContainer id="bh_hero_bars_row" props={direction: "row"} style="height:auto; width:100%; gap:0px; align-items:flex-end">
                  <Container id="bh_hero_bar_r_cell" style="height:34px; width:320px; flex-shrink:0"><Container id="bh_hero_bar_r" style="height:34px; width:320px"/></Container>
                  <Container id="bh_hero_bar_y_cell" style="height:34px; width:180px; flex-shrink:0"><Container id="bh_hero_bar_y" style="height:34px; width:180px"/></Container>
                  <Container id="bh_hero_bar_b_cell" style="height:34px; width:96px; flex-shrink:0"><Container id="bh_hero_bar_b" style="height:34px; width:96px"/></Container>
                  <Container id="bh_hero_bar_k_cell" style="height:34px; flex-basis:0; flex-grow:1; width:100%"><Container id="bh_hero_bar_k" style="height:34px; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_hero_barcap_cell" style="height:auto; width:100%; padding:14px 0px 26px">
                <FlexContainer id="bh_hero_barcap_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center">
                  <Container id="bh_hero_barcap_l_cell" style="height:auto; width:auto"><Text id="bh_hero_barcap_l" props={content: "Circle · square · triangle — our three most basic tools", tagName: "span"}/></Container>
                  <Container id="bh_hero_barcap_r_cell" style="height:auto; width:auto"><Text id="bh_hero_barcap_r" props={content: "Scroll ↓", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Manifesto band (black ground + basic-form marks) ─── -->
      <Container id="bh_manifesto_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_manifesto_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 88px; gap:56px">
          <Container id="bh_manifesto_head_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_manifesto_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:16px">
              <Container id="bh_manifesto_chip_cell" style="height:14px; width:14px; flex-shrink:0"><Container id="bh_manifesto_chip" style="height:14px; width:14px"/></Container>
              <Container id="bh_manifesto_label_cell" style="height:auto; width:auto"><Text id="bh_manifesto_label" props={content: "MANIFESTO", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_manifesto_body_cell" style="height:auto; width:100%; max-width:1080px">
            <FlexContainer id="bh_manifesto_body_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; align-items:flex-start">
              <Container id="bh_manifesto_l1_cell" style="height:auto; width:auto"><Text id="bh_manifesto_l1" props={content: "We use circles, squares and triangles", tagName: "h2"}/></Container>
              <Container id="bh_manifesto_l2_cell" style="height:auto; width:auto"><Text id="bh_manifesto_l2" props={content: "to bring order to the real world.", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_forms_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_forms_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="bh_form_circle_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_circle_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_circle_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_circle_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><circle cx='28' cy='28' r='26' stroke='#F0B429' stroke-width='3' fill='none'/></svg>", ariaLabel: "Circle mark"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_circle_name_cell" style="height:auto; width:auto"><Text id="bh_form_circle_name" props={content: "Circle", tagName: "h3"}/></Container>
                  <Container id="bh_form_circle_desc_cell" style="height:auto; width:100%"><Text id="bh_form_circle_desc" props={content: "The infinite and the cyclical. Where a mark begins — one line closing into a whole.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_form_square_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_square_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_square_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_square_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><rect x='3' y='3' width='50' height='50' stroke='#D8342C' stroke-width='3' fill='none'/></svg>", ariaLabel: "Square mark"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_square_name_cell" style="height:auto; width:auto"><Text id="bh_form_square_name" props={content: "Square", tagName: "h3"}/></Container>
                  <Container id="bh_form_square_desc_cell" style="height:auto; width:100%"><Text id="bh_form_square_desc" props={content: "Order and the page. The grid answers every typographic question — rules first, freedom after.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_form_triangle_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="bh_form_triangle_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:30px 28px 32px">
                  <Container id="bh_form_triangle_icon_cell" style="height:56px; width:56px; flex-shrink:0">
                    <Svg id="bh_form_triangle_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'><polygon points='28,3 53,50 3,50' stroke='#1F4FA8' stroke-width='3' fill='none' stroke-linejoin='round'/></svg>", ariaLabel: "Triangle mark"} style="height:56px; width:56px"/>
                  </Container>
                  <Container id="bh_form_triangle_name_cell" style="height:auto; width:auto"><Text id="bh_form_triangle_name" props={content: "Triangle", tagName: "h3"}/></Container>
                  <Container id="bh_form_triangle_desc_cell" style="height:auto; width:100%"><Text id="bh_form_triangle_desc" props={content: "Tension and direction. When a plane needs a little instability, the triangle carries the eye away.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Work (staircase cards) ─── -->
      <Container id="bh_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_work_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 128px; gap:64px">
          <Container id="bh_work_head_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_work_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="bh_work_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="bh_work_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:16px; align-items:flex-start">
                  <Container id="bh_work_label_cell" style="height:auto; width:auto"><Text id="bh_work_label" props={content: "SELECTED WORKS", tagName: "span"}/></Container>
                  <Container id="bh_work_title_cell" style="height:auto; width:auto"><Text id="bh_work_title" props={content: "Less is more", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_work_head_r_cell" style="height:auto; width:380px; flex-shrink:0">
                <Text id="bh_work_head_note" props={content: "Three projects, three basic forms. We always start from the fewest elements — and stop only when nothing else can go.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_work_reveal_cell" style="height:auto; width:100%">
          <Animate id="bh_work_reveal" props={direction: "row", effect: "fadeInUp", trigger: "onView", triggerThreshold: 0.2, stagger: 130, duration: "slow"} style="height:auto; width:100%; gap:32px; align-items:flex-start">
            <Container id="bh_w1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_w1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w1_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#141414'/><circle cx='200' cy='150' r='104' fill='#D8342C'/><rect x='296' y='46' width='104' height='104' fill='#F0B429'/><path d='M0,300 A120,120 0 0 1 120,180 L120,300 Z' fill='#F4F1EA'/></svg>", ariaLabel: "Bauhaus centenary — geometric visual"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w1_num_cell" style="height:auto; width:auto"><Text id="bh_w1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="bh_w1_name_cell" style="height:auto; width:auto"><Text id="bh_w1_name" props={content: "Bauhaus Centenary · Visual System", tagName: "h3"}/></Container>
                  <Container id="bh_w1_meta_cell" style="height:auto; width:auto"><Text id="bh_w1_meta" props={content: "2024 · Exhibition identity · Wayfinding / posters / digital", tagName: "span"}/></Container>
                  <Container id="bh_w1_desc_cell" style="height:auto; width:100%"><Text id="bh_w1_desc" props={content: "Rebuilding an exhibition's visual order from circles and semicircles — one mark carried across 400 metres of visitor route.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
            <Container id="bh_w2_cell" style="height:auto; flex-basis:0; flex-grow:1; padding-top:64px; width:100%">
              <FlexContainer id="bh_w2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w2_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#1F4FA8'/><polygon points='200,42 348,264 52,264' fill='#F4F1EA'/><circle cx='200' cy='196' r='42' fill='#141414'/><rect x='24' y='24' width='56' height='56' fill='#F0B429'/></svg>", ariaLabel: "Urban furniture — wayfinding composition"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w2_num_cell" style="height:auto; width:auto"><Text id="bh_w2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="bh_w2_name_cell" style="height:auto; width:auto"><Text id="bh_w2_name" props={content: "Urban Furniture · Wayfinding", tagName: "h3"}/></Container>
                  <Container id="bh_w2_meta_cell" style="height:auto; width:auto"><Text id="bh_w2_meta" props={content: "2023 · Spatial wayfinding · Signage / lightboxes / maps", tagName: "span"}/></Container>
                  <Container id="bh_w2_desc_cell" style="height:auto; width:100%"><Text id="bh_w2_desc" props={content: "A signage system for a riverside public space that can grow: the triangular arrow is the single motif behind every direction.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
            <Container id="bh_w3_cell" style="height:auto; flex-basis:0; flex-grow:1; padding-top:128px; width:100%">
              <FlexContainer id="bh_w3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                <Container id="bh_w3_fig_cell" style="height:300px; width:100%; flex-shrink:0">
                  <Svg id="bh_w3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'><rect width='400' height='300' fill='#F0B429'/><rect x='56' y='56' width='128' height='188' fill='#141414'/><rect x='216' y='56' width='128' height='88' fill='#D8342C'/><circle cx='280' cy='200' r='44' fill='#1F4FA8'/><line x1='0' y1='150' x2='400' y2='150' stroke='#F4F1EA' stroke-width='2' opacity='0.6'/></svg>", ariaLabel: "New Objectivity posters — composition"} style="height:300px; width:100%"/>
                </Container>
                <FlexContainer id="bh_w3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; padding:24px 0px 0px">
                  <Container id="bh_w3_num_cell" style="height:auto; width:auto"><Text id="bh_w3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="bh_w3_name_cell" style="height:auto; width:auto"><Text id="bh_w3_name" props={content: "New Objectivity · Poster Series", tagName: "h3"}/></Container>
                  <Container id="bh_w3_meta_cell" style="height:auto; width:auto"><Text id="bh_w3_meta" props={content: "2022 · Print publishing · Screen print / 12 sheets", tagName: "span"}/></Container>
                  <Container id="bh_w3_desc_cell" style="height:auto; width:100%"><Text id="bh_w3_desc" props={content: "A square grid overprinting three primaries: twelve posters, one exercise in objectivity.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </FlexContainer>
            </Container>
          </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Numbers band ─── -->
      <Container id="bh_numbers_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bh_numbers_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="bh_numbers_rule_cell" style="height:2px; width:100%; flex-shrink:0"><Container id="bh_numbers_rule" style="height:2px; width:100%"/></Container>
          <FlexContainer id="bh_numbers_row" props={direction: "row"} style="height:auto; width:100%; padding:48px 0px 56px; gap:32px; align-items:flex-start">
            <Container id="bh_n1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n1_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n1_num_cell" style="height:auto; width:auto"><Text id="bh_n1_num" props={content: "142", tagName: "h3"}/></Container>
                <Container id="bh_n1_label_cell" style="height:auto; width:auto"><Text id="bh_n1_label" props={content: "Projects delivered", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n2_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n2_num_cell" style="height:auto; width:auto"><Text id="bh_n2_num" props={content: "26", tagName: "h3"}/></Container>
                <Container id="bh_n2_label_cell" style="height:auto; width:auto"><Text id="bh_n2_label" props={content: "International awards", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n3_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n3_num_cell" style="height:auto; width:auto"><Text id="bh_n3_num" props={content: "9", tagName: "h3"}/></Container>
                <Container id="bh_n3_label_cell" style="height:auto; width:auto"><Text id="bh_n3_label" props={content: "Years in practice", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="bh_n4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="bh_n4_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="bh_n4_num_cell" style="height:auto; width:auto"><Text id="bh_n4_num" props={content: "4", tagName: "h3"}/></Container>
                <Container id="bh_n4_label_cell" style="height:auto; width:auto"><Text id="bh_n4_label" props={content: "Cities", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Method (asymmetric 7:5 split) ─── -->
      <Container id="bh_method_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_method_row" props={direction: "row"} style="height:auto; width:100%; padding:104px 56px 96px; gap:72px; align-items:flex-start">
          <Container id="bh_method_left_cell" style="height:auto; flex-basis:0; flex-grow:7; width:100%">
            <FlexContainer id="bh_method_left_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="bh_method_label_cell" style="height:auto; width:auto"><Text id="bh_method_label" props={content: "STUDIO", tagName: "span"}/></Container>
              <Container id="bh_method_title_cell" style="height:auto; width:auto"><Text id="bh_method_title" props={content: "We don't sell a style.", tagName: "h2"}/></Container>
              <Container id="bh_method_title2_cell" style="height:auto; width:auto"><Text id="bh_method_title2" props={content: "We solve problems.", tagName: "h2"}/></Container>
              <Container id="bh_method_desc_cell" style="height:auto; width:100%; max-width:560px; padding-top:10px">
                <Text id="bh_method_desc" props={content: "A studio of fourteen: print, spatial and digital teams around one long table. What Bauhaus left us is not a look but a method — start from the problem, arrive with the fewest elements.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_method_right_cell" style="height:auto; flex-basis:0; flex-grow:5; width:100%">
            <FlexContainer id="bh_method_right_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_m1_cell" style="height:auto; width:100%; padding:26px 0px 26px">
                <FlexContainer id="bh_m1_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m1_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="bh_m1_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m1_name_cell" style="height:auto; width:auto"><Text id="bh_m1_name" props={content: "Observe", tagName: "h3"}/></Container>
                      <Container id="bh_m1_desc_cell" style="height:auto; width:100%"><Text id="bh_m1_desc" props={content: "See the problem clearly before touching anything. Most projects fail by skipping this.", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_m2_cell" style="height:auto; width:100%; padding:26px 0px 26px">
                <FlexContainer id="bh_m2_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m2_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="bh_m2_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m2_name_cell" style="height:auto; width:auto"><Text id="bh_m2_name" props={content: "Distil", tagName: "h3"}/></Container>
                      <Container id="bh_m2_desc_cell" style="height:auto; width:100%"><Text id="bh_m2_desc" props={content: "Reduce the complicated to basic forms — cut until nothing else can go.", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="bh_m3_cell" style="height:auto; width:100%; padding:26px 0px 0px">
                <FlexContainer id="bh_m3_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
                  <Container id="bh_m3_num_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="bh_m3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="bh_m3_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                    <FlexContainer id="bh_m3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                      <Container id="bh_m3_name_cell" style="height:auto; width:auto"><Text id="bh_m3_name" props={content: "Build", tagName: "h3"}/></Container>
                      <Container id="bh_m3_desc_cell" style="height:auto; width:100%"><Text id="bh_m3_desc" props={content: "Land the form in pixels and millimetres, like an engineer.", tagName: "p"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Red CTA ─── -->
      <Container id="bh_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="bh_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:104px 56px 100px; gap:40px; align-items:flex-start; position:relative; overflow:hidden">
          <Container id="bh_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="bh_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 520' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='1310' cy='430' r='230' stroke='#F4F1EA' stroke-width='2' opacity='0.5'/><circle cx='1310' cy='430' r='150' stroke='#F4F1EA' stroke-width='2' opacity='0.35'/><rect x='1186' y='286' width='86' height='86' fill='#F0B429'/><polygon points='1180,90 1248,90 1214,32' fill='#F4F1EA' opacity='0.7'/></svg>", ariaLabel: "CTA geometric ornament"} style="height:100%; width:100%"/>
          </Container>
          <Container id="bh_cta_label_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="bh_cta_label_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
              <Container id="bh_cta_chip_cell" style="height:14px; width:14px; flex-shrink:0"><Container id="bh_cta_chip" style="height:14px; width:14px"/></Container>
              <Container id="bh_cta_label_txt_cell" style="height:auto; width:auto"><Text id="bh_cta_label_txt" props={content: "Got something in mind?", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="bh_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <Text id="bh_cta_title" props={content: "Let's make something different", tagName: "h2"}/>
          </Container>
          <Container id="bh_cta_sub_cell" style="height:auto; width:100%; max-width:560px; position:relative; z-index:1">
            <Text id="bh_cta_sub" props={content: "Turn a vague idea into a clearly structured system. We reply within 24 hours on business days.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="bh_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="bh_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:24px">
              <Container id="bh_cta_btn" style="height:auto; width:auto; padding:16px 40px">
                <Text id="bh_cta_btn_txt" props={content: "Book a call", tagName: "span"}/>
              </Container>
              <Container id="bh_cta_mail_cell" style="height:auto; width:auto"><Text id="bh_cta_mail" props={content: "hello@geometrie.studio", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 8. Footer ─── -->
      <Container id="bh_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="bh_footer_col" props={direction: "column"} style="height:auto; width:100%; padding:64px 56px 40px; gap:44px">
          <Container id="bh_footer_top_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_footer_top_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-start; gap:48px">
              <Container id="bh_footer_brand_cell" style="height:auto; width:320px; flex-shrink:0">
                <FlexContainer id="bh_footer_brand_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start">
                  <Container id="bh_footer_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                    <Svg id="bh_footer_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'><rect x='0' y='0' width='18' height='18' fill='#D8342C'/><circle cx='28.5' cy='9' r='9' fill='#F0B429'/><polygon points='9,38 0,21 18,21' fill='#1F4FA8'/><rect x='20' y='21' width='18' height='17' fill='#F4F1EA'/></svg>", ariaLabel: "Footer mark"} style="height:32px; width:32px"/>
                  </Container>
                  <Container id="bh_footer_slogan_cell" style="height:auto; width:100%"><Text id="bh_footer_slogan" props={content: "Form follows function. Said in 1919, still good today.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="bh_footer_nav_cell" style="height:auto; width:auto; flex-shrink:0">
                <FlexContainer id="bh_footer_nav_row" props={direction: "row"} style="height:auto; width:auto; gap:72px; align-items:flex-start">
                  <Container id="bh_footer_col1_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col1" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc1_t_cell" style="height:auto; width:auto"><Text id="bh_fc1_t" props={content: "NAVIGATE", tagName: "span"}/></Container>
                      <Container id="bh_fc1_1_cell" style="height:auto; width:auto"><Text id="bh_fc1_1" props={content: "Work", tagName: "span"}/></Container>
                      <Container id="bh_fc1_2_cell" style="height:auto; width:auto"><Text id="bh_fc1_2" props={content: "Method", tagName: "span"}/></Container>
                      <Container id="bh_fc1_3_cell" style="height:auto; width:auto"><Text id="bh_fc1_3" props={content: "Studio", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_footer_col2_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col2" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc2_t_cell" style="height:auto; width:auto"><Text id="bh_fc2_t" props={content: "FOLLOW", tagName: "span"}/></Container>
                      <Container id="bh_fc2_1_cell" style="height:auto; width:auto"><Text id="bh_fc2_1" props={content: "Behance", tagName: "span"}/></Container>
                      <Container id="bh_fc2_2_cell" style="height:auto; width:auto"><Text id="bh_fc2_2" props={content: "Instagram", tagName: "span"}/></Container>
                      <Container id="bh_fc2_3_cell" style="height:auto; width:auto"><Text id="bh_fc2_3" props={content: "WeChat", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="bh_footer_col3_cell" style="height:auto; width:auto">
                    <FlexContainer id="bh_footer_col3" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
                      <Container id="bh_fc3_t_cell" style="height:auto; width:auto"><Text id="bh_fc3_t" props={content: "CONTACT", tagName: "span"}/></Container>
                      <Container id="bh_fc3_1_cell" style="height:auto; width:auto"><Text id="bh_fc3_1" props={content: "hello@geometrie.studio", tagName: "span"}/></Container>
                      <Container id="bh_fc3_2_cell" style="height:auto; width:auto"><Text id="bh_fc3_2" props={content: "Shanghai · 2555 Longteng Ave, West Bund", tagName: "span"}/></Container>
                      <Container id="bh_fc3_3_cell" style="height:auto; width:auto"><Text id="bh_fc3_3" props={content: "Berlin · Kreuzberg", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="bh_footer_bar_cell" style="height:auto; width:100%">
            <FlexContainer id="bh_footer_bar_outer" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="bh_footer_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="bh_footer_rule" style="height:1px; width:100%"/></Container>
              <FlexContainer id="bh_footer_bar_row" props={direction: "row"} style="height:auto; width:100%; padding-top:22px; justify-content:space-between; align-items:center">
                <Container id="bh_footer_copy_cell" style="height:auto; width:auto"><Text id="bh_footer_copy" props={content: "© 2026 GÉOMÉTRIE · All rights reserved", tagName: "span"}/></Container>
                <Container id="bh_footer_squares_cell" style="height:auto; width:auto">
                  <FlexContainer id="bh_footer_squares_row" props={direction: "row"} style="height:auto; width:auto; gap:6px; align-items:center">
                    <Container id="bh_fs1_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs1" style="height:10px; width:10px"/></Container>
                    <Container id="bh_fs2_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs2" style="height:10px; width:10px"/></Container>
                    <Container id="bh_fs3_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="bh_fs3" style="height:10px; width:10px"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Hero "Scroll ↓" hint → in-page jump to the next section (nav.scroll, offset clears the sticky nav)
      @bh_hero_barcap_r = { events: { scrollToMethod: { trigger: "onClick", action: nav.scroll({target: "bh_method_region"}) } } };
    </script>

    <styles>
      # ── Page base ──
      @bh_root = { background: #F4F1EA; }

      # ── Nav ──
      @bh_nav_region = { background: rgba(244, 241, 234, 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(20, 20, 20, 0.10); }
      @bh_nav_word_cn = { color: #141414; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @bh_nav_word_en = { color: rgba(20, 20, 20, 0.45); font-size: 9.5px; font-weight: 600; letter-spacing: 2.4px; }
      @bh_nav_menu = {
        :scope { --anchor-item-color: rgba(20, 20, 20, 0.78); --anchor-item-font-size: 14px; --anchor-item-font-weight: 700; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #D8342C; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.5px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #D8342C; }
      }
      @bh_nav_cta = { background: #141414; transition: background 0.25s ease; :scope:hover { background: #D8342C; } }
      @bh_nav_cta_txt = { color: #F4F1EA; font-size: 13.5px; font-weight: 700; letter-spacing: 1.5px; }

      # ── Hero ──
      @bh_hero_eyebrow = { background: #F4F1EA; border: 1.5px solid #141414; }
      @bh_hero_eyebrow_txt = { color: #141414; font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      # Display type. Measured, not guessed: Inter Black uppercase runs ~0.69em per glyph, so at 132px
      # "FUNCTION" alone is ~728px — and the type column is only ~832px wide once the side note takes
      # its 280px. With a 248px indent that wraps (it did). 96px with 80px steps puts the longest line
      # at ~688px, leaving real headroom, and the staircase still reads as a diagonal.
      @bh_hero_l1_big = { color: #141414; font-size: 96px; font-weight: 900; line-height: 1.0; letter-spacing: -2px; }
      @bh_hero_l2_big = { color: #141414; font-size: 96px; font-weight: 900; line-height: 1.0; letter-spacing: -2px; }
      @bh_hero_l3_big = { color: #D8342C; font-size: 96px; font-weight: 900; line-height: 1.0; letter-spacing: -2px; }
      @bh_hero_side_rule = { background: #141414; }
      @bh_hero_side_desc = { color: #141414; font-size: 15px; line-height: 1.75; font-weight: 500; }
      @bh_hero_meta_1 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_meta_2 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_meta_3 = { color: rgba(20, 20, 20, 0.55); font-size: 12.5px; font-weight: 600; letter-spacing: 0.5px; }
      @bh_hero_bar_r = { background: #D8342C; }
      @bh_hero_bar_y = { background: #F0B429; }
      @bh_hero_bar_b = { background: #1F4FA8; }
      @bh_hero_bar_k = { background: #141414; }
      @bh_hero_barcap_l = { color: rgba(20, 20, 20, 0.6); font-size: 12.5px; font-weight: 600; letter-spacing: 1px; }
      @bh_hero_barcap_r = { cursor: pointer; color: rgba(20, 20, 20, 0.6); font-size: 12.5px; font-weight: 600; letter-spacing: 1px; }

      # ── Manifesto band ──
      @bh_manifesto_col = { background: #141414; }
      @bh_manifesto_chip = { background: #D8342C; }
      @bh_manifesto_label = { color: rgba(244, 241, 234, 0.6); font-size: 12px; font-weight: 700; letter-spacing: 4px; }
      # 64px CJK (9 glyphs per line) becomes 50px Latin — the English lines run ~37 characters each,
      # and at 64px they would wrap past the 1080px measure.
      @bh_manifesto_l1 = { color: #F4F1EA; font-size: 50px; font-weight: 800; line-height: 1.25; letter-spacing: -1.5px; }
      @bh_manifesto_l2 = { color: #F0B429; font-size: 50px; font-weight: 800; line-height: 1.25; letter-spacing: -1.5px; }
      @bh_form_circle_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_square_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_triangle_col = { border: 1px solid rgba(244, 241, 234, 0.16); }
      @bh_form_circle_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @bh_form_square_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @bh_form_triangle_name = { color: #F4F1EA; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @bh_form_circle_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.7; }
      @bh_form_square_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.7; }
      @bh_form_triangle_desc = { color: rgba(244, 241, 234, 0.62); font-size: 13.5px; line-height: 1.7; }

      # ── Work ──
      @bh_work_label = { color: #D8342C; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @bh_work_title = { color: #141414; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; }
      @bh_work_head_note = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.7; }
      @bh_w1_num = { color: #D8342C; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w2_num = { color: #1F4FA8; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w3_num = { color: #B07C05; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @bh_w1_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w2_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w3_name = { color: #141414; font-size: 20px; font-weight: 800; letter-spacing: -0.4px; }
      @bh_w1_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w2_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w3_meta = { color: rgba(20, 20, 20, 0.5); font-size: 12px; font-weight: 600; letter-spacing: 0.6px; }
      @bh_w1_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.7; }
      @bh_w2_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.7; }
      @bh_w3_desc = { color: rgba(20, 20, 20, 0.68); font-size: 13.5px; line-height: 1.7; }
      @bh_w1_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }
      @bh_w2_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }
      @bh_w3_fig_cell = { transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1); :scope:hover { transform: translateY(-8px); } }

      # ── Numbers band ──
      @bh_numbers_rule = { background: #141414; }
      @bh_n1_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n2_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n3_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n4_num = { color: #141414; font-size: 64px; font-weight: 900; letter-spacing: -3px; }
      @bh_n1_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n2_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n3_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }
      @bh_n4_label = { color: rgba(20, 20, 20, 0.55); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; }

      # ── Method ──
      @bh_method_label = { color: #D8342C; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      # 52px → 44px: "We don't sell a style." is 21 Latin glyphs against 7 CJK chars, and the column is
      # only 7/12 of the measure.
      @bh_method_title = { color: #141414; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @bh_method_title2 = { color: #141414; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @bh_method_desc = { color: rgba(20, 20, 20, 0.68); font-size: 14.5px; line-height: 1.8; }
      @bh_m1_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m2_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m3_cell = { border-top: 1px solid rgba(20, 20, 20, 0.14); }
      @bh_m1_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m2_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m3_num = { color: #D8342C; font-size: 15px; font-weight: 900; letter-spacing: 1px; }
      @bh_m1_name = { color: #141414; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @bh_m2_name = { color: #141414; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @bh_m3_name = { color: #141414; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @bh_m1_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }
      @bh_m2_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }
      @bh_m3_desc = { color: rgba(20, 20, 20, 0.62); font-size: 13.5px; line-height: 1.7; }

      # ── CTA ──
      @bh_cta_col = { background: #D8342C; }
      @bh_cta_chip = { background: #141414; }
      @bh_cta_label_txt = { color: rgba(244, 241, 234, 0.85); font-size: 12.5px; font-weight: 700; letter-spacing: 4px; }
      # 72px → 62px: "Let's make something different" is 29 glyphs against 9 CJK chars.
      @bh_cta_title = { color: #F4F1EA; font-size: 62px; font-weight: 900; letter-spacing: -2px; }
      @bh_cta_sub = { color: rgba(244, 241, 234, 0.85); font-size: 15px; line-height: 1.75; }
      @bh_cta_btn = { background: #141414; transition: background 0.25s ease, transform 0.25s ease; :scope:hover { background: #F0B429; transform: translateY(-2px); } }
      @bh_cta_btn_txt = { color: #F4F1EA; font-size: 15px; font-weight: 800; letter-spacing: 3px; }
      @bh_cta_mail = { color: rgba(244, 241, 234, 0.9); font-size: 14px; font-weight: 600; letter-spacing: 0.5px; border-bottom: 1px solid rgba(244, 241, 234, 0.5); padding-bottom: 3px; }

      # ── Footer ──
      @bh_footer_col = { background: #141414; }
      @bh_footer_slogan = { color: rgba(244, 241, 234, 0.6); font-size: 13.5px; line-height: 1.7; }
      @bh_fc1_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc2_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc3_t = { color: rgba(244, 241, 234, 0.42); font-size: 11.5px; font-weight: 700; letter-spacing: 3px; }
      @bh_fc1_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc1_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc1_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc2_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #F0B429; } }
      @bh_fc3_1 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_fc3_2 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_fc3_3 = { color: rgba(244, 241, 234, 0.78); font-size: 13.5px; }
      @bh_footer_rule = { background: rgba(244, 241, 234, 0.16); }
      @bh_footer_copy = { color: rgba(244, 241, 234, 0.42); font-size: 12px; letter-spacing: 0.6px; }
      @bh_fs1 = { background: #D8342C; }
      @bh_fs2 = { background: #F0B429; }
      @bh_fs3 = { background: #1F4FA8; }
    </styles>
  </Page>
</App>
```

## Production notes

**This is the hard case, and the reason it was chosen as a pilot.** Bauhaus is a *typographic*
template — the hero is three 132px words stepping down a diagonal, and every section heading is set
large. CJK and Latin do not scale into each other here: a two-glyph Chinese word and an
eight-glyph English word occupy the same nominal font size but nowhere near the same width.

**The hero was restructured, not translated.** The Chinese original prints 形式 / 追随 / 功能 at
132px with FORM / FOLLOWS / FUNCTION as small English annotations beside each line. In English the
annotation *is* the content, so the annotation column was removed and the display words promoted:

| | Chinese original | English version |
| --- | --- | --- |
| Display lines | 形式 · 追随 · 功能 (2 glyphs each) | FORM · FOLLOWS · FUNCTION (4 / 7 / 8 glyphs) |
| Indent steps | 0 / 132 / 264px | 0 / 124 / 248px |
| ANNOTATION column | FORM · FOLLOWS · FUNCTION at 13px | **removed** — redundant once the display type is English |
| Tracking | `-3px` | `-2px` — uppercase Latin already carries its own spacing |

Node ids `bh_hero_l{1,2,3}_big` are unchanged; `bh_hero_l{1,2,3}_en` and their cells and styles are
gone. The E2E addresses `bh_hero_barcap_r` and `bh_method_region`, both untouched.

**Section heading sizes came down across the board** — the English lines are simply longer:

| Element | Chinese | English | Reason |
| --- | --- | --- | --- |
| Manifesto lines | 64px | **50px** | ~37 Latin glyphs per line against 9 CJK; at 64px it wraps past the 1080px measure |
| CTA title | 72px | **62px** | "Let's make something different" — 29 glyphs vs 9 |
| Method titles | 52px | **44px** | 21 glyphs in a 7/12 column |
| Work title | 56px | 52px | "Less is more" is short; kept near the original presence |
| Body copy leading | 1.8–2.0 | **1.7** | Latin does not need CJK leading |

**Copy policy** — not literal: `少即是多` becomes "Less is more" (the dictum the Chinese is quoting);
`新即物主义` → "New Objectivity"; `城市家具计划` → "Urban Furniture"; the WeChat footer entry becomes
"WeChat" rather than a transliteration. Studio name, addresses and email carried over as-is — they
are already Latin and they are the fictional brand's identity.

**Node ids are otherwise identical to the Chinese version**, so tooling can address either document
by the same selectors — with the single exception noted above.
