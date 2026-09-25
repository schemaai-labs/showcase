# Low-poly 3D — "POLYFORM Design Toy Lab" collectible drop

> Template role (product / app tab · design-systems group · style series): the low-poly 3D visual
> language — a deep ink-blue "darkroom" ground + a faceted decoration layer + bright cyan and warm
> orange accents; the core section uses the **`model3d` component to host a real, rotatable 3D model**
> (a low-poly designer toy). Static surfaces (the editor canvas, the thumbnail) show the first frame;
> preview and runtime auto-rotate and accept input. **An asset-driven template**: the model is
> referenced relative to the platform asset library (`assets/models/low-poly-model.glb`, seeded into
> the app's asset library when the app is created).
> Scenario: a collectible page for a fictional 3D toy studio: top navigation; a hero with copy on the
> left (series chip / oversized title / description / two CTAs / three specs) and a live 3D viewer
> card on the right (rim light + grid floor + model-number overlays); a spec band (vertices / faces /
> material / format); three collectible cards (faceted SVG illustrations); a four-step process; a
> closing CTA; footer. Zero API, static data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="POLYFORM Design Toy Lab — Low-Poly 3D Collectibles">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="lp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Navigation ─── -->
      <Container id="lp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="lp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 56px">
          <Container id="lp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="lp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="lp_nav_mark_cell" style="height:34px; width:34px; flex-shrink:0">
                <Svg id="lp_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34'><polygon points='17,2 32,17 17,32 2,17' fill='#38E1C6'/><polygon points='17,10 24,17 17,24 10,17' fill='#0B1220'/></svg>", ariaLabel: "POLYFORM mark"} style="height:34px; width:34px"/>
              </Container>
              <Container id="lp_nav_word_cell" style="height:auto; width:auto">
                <FlexContainer id="lp_nav_word_col" props={direction: "column"} style="height:auto; width:auto; gap:3px">
                  <Container id="lp_nav_word_cn_cell" style="height:auto; width:auto"><Text id="lp_nav_word_cn" props={content: "POLYFORM", tagName: "span"}/></Container>
                  <Container id="lp_nav_word_en_cell" style="height:auto; width:auto"><Text id="lp_nav_word_en" props={content: "DESIGN TOY LAB · 3D", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="lp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="lp_nav_i1" props={itemLabel: "Collection", itemTarget: "lp_series_region"} style="height:auto; width:auto"/>
              <Container id="lp_nav_i2" props={itemLabel: "Process", itemTarget: "lp_flow_region"} style="height:auto; width:auto"/>
              <Container id="lp_nav_i3" props={itemLabel: "License", itemTarget: "lp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="lp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="lp_nav_cta" style="height:auto; width:auto; padding:10px 24px">
              <Text id="lp_nav_cta_txt" props={content: "Get the model", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (copy left + 3D viewer card right) ─── -->
      <Container id="lp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="lp_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="lp_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 860' preserveAspectRatio='xMidYMid slice' fill='none'><polygon points='-40,120 180,-30 300,210' fill='#38E1C6' opacity='0.10'/><polygon points='1180,700 1400,560 1460,820' fill='#FFB35C' opacity='0.10'/><polygon points='1260,60 1390,30 1350,160' fill='#38E1C6' opacity='0.16'/><polygon points='90,700 210,640 240,780' fill='#7C6CFF' opacity='0.12'/><path d='M0,430 L120,360 L240,430 L360,360 L480,430 L600,360 L720,430 L840,360 L960,430 L1080,360 L1200,430 L1320,360 L1440,430' stroke='#38E1C6' stroke-width='1' opacity='0.16'/><circle cx='640' cy='120' r='3' fill='#38E1C6' opacity='0.5'/><circle cx='1120' cy='860' r='4' fill='#FFB35C' opacity='0.5'/></svg>", ariaLabel: "Low-poly facets and folded-line decoration layer"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="lp_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 140, duration: "slow"} style="height:auto; width:100%; padding:76px 56px 88px; position:relative; z-index:1; gap:64px; align-items:center">
          <Container id="lp_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="lp_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:26px; align-items:flex-start">
              <Container id="lp_hero_chip_cell" style="height:auto; width:auto">
                <Container id="lp_hero_chip" style="height:auto; width:auto; padding:8px 16px">
                  <Text id="lp_hero_chip_txt" props={content: "SERIES №.001 · LIMITED TO 300", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="lp_hero_title_cell" style="height:auto; width:auto"><Text id="lp_hero_title" props={content: "PICO", tagName: "h1"}/></Container>
              <Container id="lp_hero_sub_cell" style="height:auto; width:auto"><Text id="lp_hero_sub" props={content: "LOW-POLY RUBBER DUCK", tagName: "span"}/></Container>
              <Container id="lp_hero_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="lp_hero_desc" props={content: "2,400 vertices, one material, zero texture baking. We think low-poly is not a way of saving money but an honest form: every facet is visible, and every facet counts.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="lp_hero_actions_cell" style="height:auto; width:auto; padding-top:8px">
                <FlexContainer id="lp_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="lp_hero_buy_cell" style="height:auto; width:auto">
                    <Container id="lp_hero_buy" style="height:auto; width:auto; padding:15px 38px">
                      <Text id="lp_hero_buy_txt" props={content: "Get the model file", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="lp_hero_ghost_cell" style="height:auto; width:auto">
                    <Container id="lp_hero_ghost" style="height:auto; width:auto; padding:15px 34px">
                      <Text id="lp_hero_ghost_txt" props={content: "See the process", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="lp_hero_params_cell" style="height:auto; width:auto; padding-top:14px">
                <FlexContainer id="lp_hero_params_row" props={direction: "row"} style="height:auto; width:auto; gap:38px; align-items:center">
                  <Container id="lp_hero_p1_cell" style="height:auto; width:auto"><Text id="lp_hero_p1" props={content: "2,399 VERTS", tagName: "span"}/></Container>
                  <Container id="lp_hero_p2_cell" style="height:auto; width:auto"><Text id="lp_hero_p2" props={content: "4,120 FACES", tagName: "span"}/></Container>
                  <Container id="lp_hero_p3_cell" style="height:auto; width:auto"><Text id="lp_hero_p3" props={content: "glTF 2.0", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lp_hero_viewer_cell" style="height:auto; width:560px; flex-shrink:0">
            <Container id="lp_hero_viewer_frame" style="height:520px; width:100%; position:relative; overflow:hidden">
              <Container id="lp_hero_viewer_glow_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
                <Svg id="lp_hero_viewer_glow" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 520' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='lpGlow' cx='0.5' cy='0.42' r='0.62'><stop offset='0' stop-color='#38E1C6' stop-opacity='0.30'/><stop offset='0.55' stop-color='#38E1C6' stop-opacity='0.07'/><stop offset='1' stop-color='#38E1C6' stop-opacity='0'/></radialGradient></defs><rect width='560' height='520' fill='#0E1830'/><rect width='560' height='520' fill='url(#lpGlow)'/><g opacity='0.22' stroke='#38E1C6' stroke-width='0.6'><line x1='0' y1='420' x2='560' y2='420'/><line x1='0' y1='450' x2='560' y2='450'/><line x1='0' y1='482' x2='560' y2='482'/><line x1='80' y1='430' x2='300' y2='520'/><line x1='300' y1='430' x2='520' y2='520'/><line x1='180' y1='430' x2='-60' y2='520'/><line x1='420' y1='430' x2='640' y2='520'/></g><polygon points='60,120 108,96 148,132 100,158' stroke='#38E1C6' stroke-width='1' opacity='0.25'/><polygon points='452,300 496,282 512,326 468,344' stroke='#FFB35C' stroke-width='1' opacity='0.28'/></svg>", ariaLabel: "3D card backdrop: darkroom, grid floor and facet decorations"} style="height:100%; width:100%"/>
              </Container>
              <Container id="lp_hero_viewer_model_cell" style="height:100%; width:100%; position:relative; z-index:1">
                <Model3d id="lp_hero_model" props={src: "assets/models/low-poly-model.glb", autoRotate: true, rotateSpeed: "slow", enableZoom: true, enablePan: false} style="height:100%; width:100%"/>
              </Container>
              <Container id="lp_hero_viewer_badge_cell" style="height:auto; width:auto; position:absolute; left:24px; top:22px; z-index:2">
                <Container id="lp_hero_viewer_badge" style="height:auto; width:auto; padding:9px 14px">
                  <Text id="lp_hero_viewer_badge_txt" props={content: "Drag to rotate · Scroll to zoom", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="lp_hero_viewer_id_cell" style="height:auto; width:auto; position:absolute; right:24px; bottom:20px; z-index:2">
                <Container id="lp_hero_viewer_id" style="height:auto; width:auto; padding:9px 14px">
                  <Text id="lp_hero_viewer_id_txt" props={content: "№.001 / glb · 120 KB", tagName: "span"}/>
                </Container>
              </Container>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Spec band ─── -->
      <Container id="lp_spec_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lp_spec_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px">
          <Container id="lp_spec_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="lp_spec_rule" style="height:1px; width:100%"/></Container>
          <FlexContainer id="lp_spec_row" props={direction: "row"} style="height:auto; width:100%; padding:44px 0px 48px; gap:32px; align-items:flex-start">
            <Container id="lp_sp1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp1_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp1_label_cell" style="height:auto; width:auto"><Text id="lp_sp1_label" props={content: "GEOMETRY", tagName: "span"}/></Container>
                <Container id="lp_sp1_value_cell" style="height:auto; width:auto"><Text id="lp_sp1_value" props={content: "2,399 verts / 4,120 faces", tagName: "h4"}/></Container>
                <Container id="lp_sp1_note_cell" style="height:auto; width:100%"><Text id="lp_sp1_note" props={content: "All-quad topology. One subdivision takes it cleanly high-poly.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp2_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp2_label_cell" style="height:auto; width:auto"><Text id="lp_sp2_label" props={content: "MATERIAL", tagName: "span"}/></Container>
                <Container id="lp_sp2_value_cell" style="height:auto; width:auto"><Text id="lp_sp2_value" props={content: "One 512px palette map", tagName: "h4"}/></Container>
                <Container id="lp_sp2_note_cell" style="height:auto; width:100%"><Text id="lp_sp2_note" props={content: "Flat shading plus a palette index — no UV unwrapping.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp3_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp3_label_cell" style="height:auto; width:auto"><Text id="lp_sp3_label" props={content: "FORMAT", tagName: "span"}/></Container>
                <Container id="lp_sp3_value_cell" style="height:auto; width:auto"><Text id="lp_sp3_value" props={content: "glTF 2.0 / 120 KB", tagName: "h4"}/></Container>
                <Container id="lp_sp3_note_cell" style="height:auto; width:100%"><Text id="lp_sp3_note" props={content: "Textures are embedded. Opens in Blender or Unity as is.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
            <Container id="lp_sp4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="lp_sp4_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="lp_sp4_label_cell" style="height:auto; width:auto"><Text id="lp_sp4_label" props={content: "LICENSE", tagName: "span"}/></Container>
                <Container id="lp_sp4_value_cell" style="height:auto; width:auto"><Text id="lp_sp4_value" props={content: "Free for personal use", tagName: "h4"}/></Container>
                <Container id="lp_sp4_note_cell" style="height:auto; width:100%"><Text id="lp_sp4_note" props={content: "Commercial licence on request. Reselling the model is not.", tagName: "p"} style="height:auto; width:100%"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Series cards ─── -->
      <Container id="lp_series_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_series_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 104px; gap:52px">
          <Container id="lp_series_head_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_series_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="lp_series_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="lp_series_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="lp_series_label_cell" style="height:auto; width:auto"><Text id="lp_series_label" props={content: "COLLECTION", tagName: "span"}/></Container>
                  <Container id="lp_series_title_cell" style="height:auto; width:auto"><Text id="lp_series_title" props={content: "Three faceted toys", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_series_head_r_cell" style="height:auto; width:340px; flex-shrink:0"><Text id="lp_series_head_note" props={content: "One process, three characters. The number is the shipping order; sold out means gone.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="lp_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="lp_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c1_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='200,42 306,120 262,208 138,208 94,120' fill='#38E1C6'/><polygon points='200,42 262,208 138,208' fill='#1FAF9B'/><polygon points='200,42 138,208 94,120' fill='#63EBD6'/><circle cx='170' cy='108' r='9' fill='#0B1220'/><polygon points='228,116 258,128 226,140' fill='#FFB35C'/></svg>", ariaLabel: "Collectible 001 faceted illustration"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c1_num_cell" style="height:auto; width:auto"><Text id="lp_c1_num" props={content: "№.001", tagName: "span"}/></Container>
                    <Container id="lp_c1_name_cell" style="height:auto; width:auto"><Text id="lp_c1_name" props={content: "PICO the Duck", tagName: "h3"}/></Container>
                    <Container id="lp_c1_note_cell" style="height:auto; width:100%"><Text id="lp_c1_note" props={content: "On this page · Original colourway · 2,400 verts", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c1_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c1_price" props={content: "$199", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lp_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c2_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='200,36 296,96 296,180 200,226 104,180 104,96' fill='#FFB35C'/><polygon points='200,36 296,96 200,140' fill='#FF9E3D'/><polygon points='200,36 104,96 200,140' fill='#FFC989'/><polygon points='104,96 200,140 104,180' fill='#E08A2B'/><polygon points='296,96 200,140 296,180' fill='#FFD9A8'/><circle cx='168' cy='112' r='8' fill='#0B1220'/><polygon points='228,150 252,150 240,170' fill='#0B1220'/></svg>", ariaLabel: "Collectible 002 faceted illustration"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c2_num_cell" style="height:auto; width:auto"><Text id="lp_c2_num" props={content: "№.002", tagName: "span"}/></Container>
                    <Container id="lp_c2_name_cell" style="height:auto; width:auto"><Text id="lp_c2_name" props={content: "HEXA the Bear", tagName: "h3"}/></Container>
                    <Container id="lp_c2_note_cell" style="height:auto; width:100%"><Text id="lp_c2_note" props={content: "Seated bear · Amber colourway · 3,200 verts", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c2_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c2_price" props={content: "$249", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lp_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lp_c3_fig_cell" style="height:250px; width:100%; flex-shrink:0">
                    <Svg id="lp_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250' preserveAspectRatio='xMidYMid slice'><rect width='400' height='250' fill='#0E1830'/><polygon points='160,60 250,60 292,130 250,200 160,200 118,130' fill='#7C6CFF'/><polygon points='160,60 250,60 205,130' fill='#9A8CFF'/><polygon points='250,60 292,130 205,130' fill='#5D4DE0'/><polygon points='292,130 250,200 205,130' fill='#8B7BFF'/><polygon points='118,130 160,60 205,130' fill='#6E5EF5'/><polygon points='118,130 205,130 160,200' fill='#4A3BC7'/><circle cx='185' cy='104' r='9' fill='#0B1220'/><circle cx='232' cy='104' r='9' fill='#0B1220'/><polygon points='196,140 224,140 210,158' fill='#FFB35C'/></svg>", ariaLabel: "Collectible 003 faceted illustration"} style="height:250px; width:100%"/>
                  </Container>
                  <FlexContainer id="lp_c3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="lp_c3_num_cell" style="height:auto; width:auto"><Text id="lp_c3_num" props={content: "№.003", tagName: "span"}/></Container>
                    <Container id="lp_c3_name_cell" style="height:auto; width:auto"><Text id="lp_c3_name" props={content: "CRYSTAL the Beast", tagName: "h3"}/></Container>
                    <Container id="lp_c3_note_cell" style="height:auto; width:100%"><Text id="lp_c3_note" props={content: "Crystal beast · Violet colourway · 2,600 verts", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lp_c3_price_cell" style="height:auto; width:auto; padding-top:6px"><Text id="lp_c3_price" props={content: "$219", tagName: "h4"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Process ─── -->
      <Container id="lp_flow_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_flow_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 56px 104px; gap:44px">
          <Container id="lp_flow_head_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_flow_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-end; gap:40px">
              <Container id="lp_flow_head_l_cell" style="height:auto; width:auto"><Text id="lp_flow_head_l" props={content: "PIPELINE", tagName: "span"}/></Container>
              <Container id="lp_flow_head_r_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="lp_flow_head_r" props={content: "From sketch to a rotatable model on the web — four steps, each one you can inspect.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="lp_flow_steps_cell" style="height:auto; width:100%">
            <FlexContainer id="lp_flow_steps_row" props={direction: "row"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="lp_f1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f1_num_cell" style="height:auto; width:auto"><Text id="lp_f1_num" props={content: "01", tagName: "span"}/></Container>
                  <Container id="lp_f1_name_cell" style="height:auto; width:auto"><Text id="lp_f1_name" props={content: "Model", tagName: "h4"}/></Container>
                  <Container id="lp_f1_note_cell" style="height:auto; width:100%"><Text id="lp_f1_note" props={content: "Orthographic sketches fix the masses and the character.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f2_num_cell" style="height:auto; width:auto"><Text id="lp_f2_num" props={content: "02", tagName: "span"}/></Container>
                  <Container id="lp_f2_name_cell" style="height:auto; width:auto"><Text id="lp_f2_name" props={content: "Topology", tagName: "h4"}/></Container>
                  <Container id="lp_f2_note_cell" style="height:auto; width:100%"><Text id="lp_f2_note" props={content: "Clean faces, merge stray points — flat shading needs tidy facets.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f3_num_cell" style="height:auto; width:auto"><Text id="lp_f3_num" props={content: "03", tagName: "span"}/></Container>
                  <Container id="lp_f3_name_cell" style="height:auto; width:auto"><Text id="lp_f3_name" props={content: "Colour", tagName: "h4"}/></Container>
                  <Container id="lp_f3_note_cell" style="height:auto; width:100%"><Text id="lp_f3_note" props={content: "One palette map; colours assigned facet by facet.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="lp_f4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lp_f4_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:28px 24px 30px">
                  <Container id="lp_f4_num_cell" style="height:auto; width:auto"><Text id="lp_f4_num" props={content: "04", tagName: "span"}/></Container>
                  <Container id="lp_f4_name_cell" style="height:auto; width:auto"><Text id="lp_f4_name" props={content: "Export", tagName: "h4"}/></Container>
                  <Container id="lp_f4_note_cell" style="height:auto; width:100%"><Text id="lp_f4_note" props={content: "Export glTF — one asset shared by the web and the engine.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Closing CTA ─── -->
      <Container id="lp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="lp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:100px 56px; gap:32px; align-items:flex-start; position:relative; overflow:hidden">
          <Container id="lp_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="lp_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 460' preserveAspectRatio='xMidYMid slice' fill='none'><polygon points='1150,-40 1440,80 1440,-40' fill='#38E1C6' opacity='0.12'/><polygon points='980,470 1180,340 1260,470' fill='#7C6CFF' opacity='0.12'/><polygon points='60,60 140,20 170,110' stroke='#38E1C6' stroke-width='1' opacity='0.3'/><polygon points='1290,220 1360,190 1380,270' stroke='#FFB35C' stroke-width='1' opacity='0.3'/></svg>", ariaLabel: "Facet decorations for the closing section"} style="height:100%; width:100%"/>
          </Container>
          <Container id="lp_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="lp_cta_title" props={content: "Take the duck home", tagName: "h2"}/></Container>
          <Container id="lp_cta_sub_cell" style="height:auto; width:100%; max-width:560px; position:relative; z-index:1"><Text id="lp_cta_sub" props={content: "Free for personal use. Commercial licences include the source file, the UVs and a palette guide. The studio also takes commissions.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="lp_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <FlexContainer id="lp_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:26px">
              <Container id="lp_cta_btn" style="height:auto; width:auto; padding:16px 40px">
                <Text id="lp_cta_btn_txt" props={content: "Download the model", tagName: "span"}/>
              </Container>
              <Container id="lp_cta_mail_cell" style="height:auto; width:auto"><Text id="lp_cta_mail" props={content: "hello@polyform.studio", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="lp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="lp_footer_left_cell" style="height:auto; width:auto"><Text id="lp_footer_left" props={content: "© 2026 POLYFORM Design Toy Lab · All model rights reserved", tagName: "span"}/></Container>
          <Container id="lp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="lp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:28px; align-items:center">
              <Container id="lp_footer_f1_cell" style="height:auto; width:auto"><Text id="lp_footer_f1" props={content: "Sketchfab", tagName: "span"}/></Container>
              <Container id="lp_footer_f2_cell" style="height:auto; width:auto"><Text id="lp_footer_f2" props={content: "Behance", tagName: "span"}/></Container>
              <Container id="lp_footer_f3_cell" style="height:auto; width:auto"><Text id="lp_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer back-to-top (nav.scroll capability: return to the top of the current scroll container)
      @lp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground (darkroom) ──
      @lp_root = { background: #0B1220; }

      # ── Anchor scroll offsets (sticky nav clearance) ──

      # ── Navigation ──
      @lp_nav_region = { background: rgba(11, 18, 32, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_nav_word_cn = { color: #EAF6F3; font-size: 16px; font-weight: 800; letter-spacing: 2.6px; }
      @lp_nav_word_en = { color: rgba(234, 246, 243, 0.45); font-size: 10px; font-weight: 600; letter-spacing: 1.6px; }
      @lp_nav_menu = {
        :scope { --anchor-item-color: rgba(234, 246, 243, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #38E1C6; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 38px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.8px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #38E1C6; }
        :scope [data-rb-anchor-link][aria-current] { text-shadow: 0 0 18px rgba(56, 225, 198, 0.55); }
      }
      @lp_nav_cta = { background: rgba(56, 225, 198, 0.12); border: 1px solid rgba(56, 225, 198, 0.45); transition: background 0.25s ease; :scope:hover { background: rgba(56, 225, 198, 0.22); } }
      @lp_nav_cta_txt = { color: #38E1C6; font-size: 13px; font-weight: 700; letter-spacing: 0.8px; }

      # ── Hero ──
      @lp_hero_chip = { background: rgba(255, 179, 92, 0.12); border: 1px solid rgba(255, 179, 92, 0.4); }
      @lp_hero_chip_txt = { color: #FFB35C; font-size: 12px; font-weight: 700; letter-spacing: 1.2px; }
      # 88px kept: "PICO" (4 caps) measures 209px, so the display scale survives in the 544px column.
      @lp_hero_title = { color: #F2FAF8; font-size: 88px; font-weight: 900; letter-spacing: -2px; }
      @lp_hero_sub = { color: rgba(56, 225, 198, 0.75); font-size: 13px; font-weight: 700; letter-spacing: 3.5px; }
      @lp_hero_desc = { color: rgba(234, 246, 243, 0.66); font-size: 15px; line-height: 1.7; }
      @lp_hero_buy = { background: #38E1C6; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(56, 225, 198, 0.28); } }
      @lp_hero_buy_txt = { color: #06231D; font-size: 14.5px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_hero_ghost = { border: 1px solid rgba(234, 246, 243, 0.3); transition: border-color 0.25s ease; :scope:hover { border-color: rgba(234, 246, 243, 0.6); } }
      @lp_hero_ghost_txt = { color: rgba(234, 246, 243, 0.85); font-size: 14.5px; font-weight: 700; letter-spacing: 1.2px; }
      @lp_hero_p1 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 0.8px; }
      @lp_hero_p2 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 0.8px; }
      @lp_hero_p3 = { color: rgba(234, 246, 243, 0.45); font-size: 12.5px; font-weight: 600; letter-spacing: 0.8px; }
      @lp_hero_viewer_frame = { border: 1px solid rgba(56, 225, 198, 0.2); }
      @lp_hero_viewer_badge = { background: rgba(11, 18, 32, 0.72); border: 1px solid rgba(56, 225, 198, 0.3); }
      @lp_hero_viewer_badge_txt = { color: rgba(56, 225, 198, 0.9); font-size: 11px; font-weight: 700; letter-spacing: 1px; :scope { white-space: nowrap; } }
      @lp_hero_viewer_id = { background: rgba(11, 18, 32, 0.72); border: 1px solid rgba(255, 179, 92, 0.34); }
      @lp_hero_viewer_id_txt = { color: rgba(255, 179, 92, 0.92); font-size: 11px; font-weight: 700; letter-spacing: 1px; :scope { white-space: nowrap; } }

      # ── Spec band ──
      @lp_spec_rule = { background: rgba(56, 225, 198, 0.18); }
      @lp_sp1_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_sp2_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_sp3_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 2.4px; }
      @lp_sp4_label = { color: rgba(56, 225, 198, 0.8); font-size: 11px; font-weight: 700; letter-spacing: 2.4px; }
      # 21px → 19px: "2,399 verts / 4,120 faces" is 25 Latin glyphs against 14 CJK — measured 252px
      # of the 268px column at 21px (94% fill) vs 228px at 19px (85%), which is the airier band.
      @lp_sp1_value = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @lp_sp2_value = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @lp_sp3_value = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @lp_sp4_value = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @lp_sp1_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_sp2_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_sp3_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_sp4_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }

      # ── Collectible cards ──
      @lp_series_label = { color: #FFB35C; font-size: 11.5px; font-weight: 800; letter-spacing: 3.2px; }
      @lp_series_title = { color: #F2FAF8; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; }
      @lp_series_head_note = { color: rgba(234, 246, 243, 0.55); font-size: 13.5px; line-height: 1.75; }
      @lp_c1_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(56, 225, 198, 0.45); } }
      @lp_c2_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(255, 179, 92, 0.45); } }
      @lp_c3_col = { background: rgba(14, 24, 48, 0.72); border: 1px solid rgba(56, 225, 198, 0.16); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease; :scope:hover { transform: translateY(-6px); border-color: rgba(124, 108, 255, 0.5); } }
      @lp_c1_num = { color: rgba(56, 225, 198, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 1.6px; }
      @lp_c2_num = { color: rgba(255, 179, 92, 0.85); font-size: 12px; font-weight: 700; letter-spacing: 1.6px; }
      @lp_c3_num = { color: rgba(124, 108, 255, 0.9); font-size: 12px; font-weight: 700; letter-spacing: 1.6px; }
      @lp_c1_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c2_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c3_name = { color: #F2FAF8; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
      @lp_c1_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.7; }
      @lp_c2_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.7; }
      @lp_c3_note = { color: rgba(234, 246, 243, 0.52); font-size: 12.5px; line-height: 1.7; }
      @lp_c1_price = { color: #38E1C6; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }
      @lp_c2_price = { color: #FFB35C; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }
      @lp_c3_price = { color: #9A8CFF; font-size: 18px; font-weight: 800; letter-spacing: 0.4px; }

      # ── Process ──
      @lp_flow_head_l = { color: rgba(56, 225, 198, 0.8); font-size: 11.5px; font-weight: 800; letter-spacing: 3.2px; }
      @lp_flow_head_r = { color: rgba(234, 246, 243, 0.55); font-size: 13.5px; line-height: 1.75; }
      @lp_f1_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f2_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f3_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f4_col = { border: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_f1_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_f2_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_f3_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_f4_num = { color: rgba(56, 225, 198, 0.7); font-size: 13px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_f1_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 0.6px; }
      @lp_f2_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 0.6px; }
      @lp_f3_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 0.6px; }
      @lp_f4_name = { color: #EAF6F3; font-size: 19px; font-weight: 800; letter-spacing: 0.6px; }
      @lp_f1_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_f2_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_f3_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }
      @lp_f4_note = { color: rgba(234, 246, 243, 0.5); font-size: 13px; line-height: 1.7; }

      # ── Closing CTA ──
      @lp_cta_col = { background: #0E1830; border-top: 1px solid rgba(56, 225, 198, 0.16); }
      # 60px kept: "Take the duck home" measures ~500px inside the 1168px measure.
      @lp_cta_title = { color: #F2FAF8; font-size: 60px; font-weight: 900; letter-spacing: -1.5px; }
      @lp_cta_sub = { color: rgba(234, 246, 243, 0.6); font-size: 14.5px; line-height: 1.75; }
      @lp_cta_btn = { background: #38E1C6; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(56, 225, 198, 0.28); } }
      @lp_cta_btn_txt = { color: #06231D; font-size: 14.5px; font-weight: 800; letter-spacing: 1.2px; }
      @lp_cta_mail = { color: rgba(234, 246, 243, 0.85); font-size: 14px; font-weight: 600; letter-spacing: 0.4px; border-bottom: 1px solid rgba(56, 225, 198, 0.45); padding-bottom: 3px; }

      # ── Footer ──
      @lp_footer_row = { border-top: 1px solid rgba(56, 225, 198, 0.14); }
      @lp_footer_left = { color: rgba(234, 246, 243, 0.42); font-size: 12px; letter-spacing: 0.6px; }
      @lp_footer_f1 = { color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
      @lp_footer_f2 = { color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
      @lp_footer_f3 = { cursor: pointer; color: rgba(234, 246, 243, 0.6); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #38E1C6; } }
    </styles>
  </Page>
</App>
```

> Craft notes: the darkroom ground carries the whole page — one facet-decoration SVG layer sits behind
> the hero, a second behind the closing CTA, and the 3D model lives in a bordered viewer frame with a
> rim-light + grid-floor background of its own (all hand-written SVG; the only real asset is the glb
> itself). The hero is asymmetric (flexible copy column + a fixed 560px viewer), so nothing is a
> three-up grid above the fold; one entrance orchestration on the hero only. Zero API, static data.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese hero title `PICO 橡皮鸭` fills most of
the 544px column at 88px (four Latin caps plus three square CJK glyphs). That width cannot be
reproduced with Latin type: measured caps run 0.59em, so `PICO RUBBER DUCK` needs ~8.8em ≈ 780px and
would wrap. The title was therefore **restructured rather than shrunk**, exactly as `sty-bauhaus` did
with its display lines:

| | Chinese original | English version |
| --- | --- | --- |
| Display line | `PICO 橡皮鸭` (4 Latin + 3 CJK glyphs, 88px) | **`PICO`** (4 caps, 88px) — measured 209px |
| Sub line | `LOW-POLY COLLECTIBLE` (13px) | `LOW-POLY RUBBER DUCK` (13px) — the object name moved up into the kicker that already existed |

The 88px display size is **kept**: four caps at 88px is a deliberate mark, and the 209px it occupies
sits comfortably in the 544px column. The kicker was the natural home for `rubber duck` — the Chinese
used it as a pure category label, and in English the descriptor *is* the product information. Node
ids are unchanged; no nodes were added or removed.

**Section headings kept their sizes** — measurement, not habit, decided this:

| Element | Chinese | English | Measure | Result |
| --- | --- | --- | --- | --- |
| Hero title | 88px | **88px** | 544px column | 209px — kept |
| Series title | 52px | **52px** | 788px (1168 minus the 340px note and 40px gap) | "Three faceted toys" 463px — kept |
| CTA title | 60px | **60px** | 1168px | "Take the duck home" 572px — kept |
| Spec values | 21px | **19px** | **268px** per column (the 4-up band) | "2,399 verts / 4,120 faces" is 25 glyphs against 14 CJK: measured 228px at 19px, 252px at 21px. It still *fits* at 21px, but at 94% fill the first column reads as jammed against the 32px gutter while its three shorter siblings float — 19px (85% fill) restores the band's rhythm |

**Wide tracking was pulled back** — this template's language is a technical spec sheet, so the labels
keep more tracking than any other template in the series, but not CJK-wide values:

| Element | Chinese | English |
| --- | --- | --- |
| Hero kicker `LOW-POLY …` | 7px | **3.5px** |
| Display titles (hero / series / CTA) | -3px / -2px / -2px | **-2px / -1.5px / -1.5px** |
| Nav wordmark / sub / anchors / CTA | 3.4 / 2.6 / 1.4 / 1.6px | **2.6 / 1.6 / 0.8 / 0.8px** |
| Section labels (COLLECTION / PIPELINE) | 4px | **3.2px** |
| Spec labels / spec values | 3px / -0.3px | **2.4px / -0.2px** |
| Hero chip / hero specs / hero buttons / viewer badges | 2 / 1.4 / 2 / 1.6px | **1.2 / 0.8 / 1.2 / 1px** |
| Card numbers / process numbers / process names | 2.4 / 2 / 1px | **1.6 / 1.2 / 0.6px** |
| CTA button / CTA mail / footer line | 2.4 / 0.6 / 0.8px | **1.2 / 0.4 / 0.6px** |

**Body leading came down** per the Latin/CJK rule: hero description 2.0 → **1.7**, spec notes and
card notes 1.8 → **1.7**, process notes 1.85 → **1.7**, section notes 1.9 → **1.75**, CTA paragraph
1.95 → **1.75**.

**Three copy lengths were written to the box, not translated from it:**

- `lp_sp4_value`: `个人免费 / 商用另询` → **"Free for personal use"**, with the commercial half moved
  into its note ("Commercial licence on request. Reselling the model is not."). The literal phrasing
  ("Personal free · Commercial on request") runs well past the 268px column while its three siblings
  sit on one line each, so the split is what keeps the 4-up row even.
- The spec notes were written to ~60 glyphs each so all four wrap to **two lines** — the row stays
  even instead of ending in a ragged staircase.
- The three `lp_c*_note` strings were cut to 44–47 glyphs so each renders on **one line** (measured:
  a 21px box at 12.5px/1.7). This one was caught by measurement, not by eye — with the 54-glyph
  literal ("The model on this page · Original colourway · 2,400 verts") card 1's note wrapped while
  cards 2 and 3 did not, which made that card's column 22px taller; and because a stretched cell
  centres its child, the *whole body of card 1* rendered 10px higher than its siblings (num, name and
  price all off by 10px). The trimmed copy removed the wrap and the three columns now sit level
  (`lp_c1_col` / `lp_c2_col` / `lp_c3_col` all y=1242, h=438).

**Decoration overlap checked** (the `sty-bauhaus` failure mode). The hero copy is inside the
`z-index:1` stack and the facets are the `z-index:0` layer, so the only real risk is a *box* growing
into the viewer card or its two absolute overlays. Measured on the live page:

| Element | Right edge | Nearest neighbour | Clearance |
| --- | --- | --- | --- |
| `lp_hero_desc` (the longest line, 3 lines at 15px) | 576px | viewer frame at x=664 | **88px** |
| `lp_hero_actions_row` (443px wide) | 499px | viewer frame | 165px |
| `lp_hero_viewer_badge` (219×44, one line) | 908px | frame right edge 1224 | inside, 25px inset from the left |
| `lp_hero_viewer_id` (157×44, one line) | 1199px | frame right edge 1224 | **25px** inset, matching the Chinese |

Both viewer overlays came back **one line each** in English (the Chinese badges wrapped to two), so
the copy growth bought margin rather than costing it. The copy column does grow ~30px in height (the
description gained a third line) but the Animate row is still defined by the fixed 520px viewer, so
the section height is unchanged.

**Copy policy — equivalent, not literal.** The studio keeps its Latin identity (`POLYFORM`, the
Sketchfab / Behance footer links, `hello@polyform.studio` are already international). The Chinese
half of the brand became **"Design Toy Lab"**; `潮玩` (designer toys) has no one-word English
equivalent. Prices were re-denominated from `¥` to **`$`** at plausible collectible levels
(`¥ 199 / 249 / 219` → `$199 / 249 / 219`). Product names follow the Chinese pattern (object +
name) as **"PICO the Duck"**, **"HEXA the Bear"**, **"CRYSTAL the Beast"**; `工序` → "Process",
`授权` → "License", `在售系列` → "Collection", `返回顶部 ↑` → "Back to top ↑".

**`model3d` is untouched**: `src: "assets/models/low-poly-model.glb"` (the seeded asset-library path)
plus `autoRotate` / `rotateSpeed` / `enableZoom` / `enablePan` are byte-identical to the Chinese
version, so both documents resolve the same seeded glb. **Node ids are otherwise identical**, so
tooling can address either document by the same selectors.
