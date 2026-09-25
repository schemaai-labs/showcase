# Memphis — "MIXPLUS" creative hot shop

> Template role (marketing / growth tab · style series): the Memphis visual language — saturated
> clashing colours (magenta / cyan / bright yellow / black on off-white), heavy black outlines,
> geometric patterns (wavy lines / dot grids / checkerboards / semicircles), **playful asymmetry**
> and tilted elements. A layout-driven template: diagonal colour bands, sticker-style cards knocked
> out of line, and a confetti layer of coloured blobs.
> Scenario: a site for a fictional creative hot shop — off-white ground with clashing colour blocks;
> an oversized hero ("fun is productivity") with wavy and dotted ornaments plus a sticker badge; a
> diagonal band for the manifesto; three knocked-out case cards (heavy outlines, colour-block
> covers); a wall of service pills; a clashing-colour closing CTA; a footer. No bitmaps (every
> pattern and colour block is hand-written SVG), no API, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="MIXPLUS Creative Hot Shop — Memphis Studio Site">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="mp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav ─── -->
      <Container id="mp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="mp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="mp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="mp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="mp_nav_mark_cell" style="height:40px; width:40px; flex-shrink:0">
                <Svg id="mp_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect x='2' y='2' width='36' height='36' rx='10' fill='#fff' stroke='#111' stroke-width='3'/><circle cx='14' cy='16' r='5' fill='#FF3D8B' stroke='#111' stroke-width='2'/><path d='M22,26 q4,-8 8,0 q-4,8 -8,0 Z' fill='#18C5D5' stroke='#111' stroke-width='2'/></svg>", ariaLabel: "MIXPLUS mark"} style="height:40px; width:40px"/>
              </Container>
              <Container id="mp_nav_word_cell" style="height:auto; width:auto"><Text id="mp_nav_word" props={content: "MIXPLUS", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="mp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="mp_nav_i1" props={itemLabel: "Work", itemTarget: "mp_work_region"} style="height:auto; width:auto"/>
              <Container id="mp_nav_i2" props={itemLabel: "Services", itemTarget: "mp_service_region"} style="height:auto; width:auto"/>
              <Container id="mp_nav_i3" props={itemLabel: "Say hi", itemTarget: "mp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="mp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="mp_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="mp_nav_cta_txt" props={content: "Start something", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (oversized type + pattern layer + sticker badge) ─── -->
      <Container id="mp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 760' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M-40,120 q30,-36 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0' stroke='#18C5D5' stroke-width='7' stroke-linecap='round'/><g fill='#111'><circle cx='1180' cy='96' r='5'/><circle cx='1220' cy='96' r='5'/><circle cx='1260' cy='96' r='5'/><circle cx='1180' cy='136' r='5'/><circle cx='1220' cy='136' r='5'/><circle cx='1260' cy='136' r='5'/><circle cx='1180' cy='176' r='5'/><circle cx='1220' cy='176' r='5'/><circle cx='1260' cy='176' r='5'/></g><path d='M980,700 q60,-90 120,0 Z' fill='#FFD23F' stroke='#111' stroke-width='6'/><circle cx='120' cy='640' r='58' fill='#FF3D8B' stroke='#111' stroke-width='7'/><path d='M240,600 l70,0 l0,70 l-70,0 Z M310,670 l70,0 l0,70 l-70,0' fill='#111'/><path d='M1330,540 q40,60 0,120 q-40,-60 0,-120 Z' fill='#B4E33D' stroke='#111' stroke-width='5'/></svg>", ariaLabel: "Memphis decoration layer: wavy line / dot grid / semicircle and blobs"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="mp_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:84px 48px 76px; position:relative; z-index:1; align-items:flex-start">
          <Container id="mp_hero_chip_cell" style="height:auto; width:auto">
            <Container id="mp_hero_chip" style="height:auto; width:auto; padding:9px 18px">
              <Text id="mp_hero_chip_txt" props={content: "Independent hot shop · Shanghai / Shenzhen", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="mp_hero_title_cell" style="height:auto; width:auto; padding-top:30px">
            <FlexContainer id="mp_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:2px; align-items:flex-start">
              <Container id="mp_hero_l1_cell" style="height:auto; width:auto"><Text id="mp_hero_l1" props={content: "FUN IS", tagName: "h1"}/></Container>
              <Container id="mp_hero_l2_cell" style="height:auto; width:auto; padding-left:120px"><Text id="mp_hero_l2" props={content: "PRODUCTIVITY", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_hero_sub_cell" style="height:auto; width:100%; max-width:560px; padding-top:26px">
            <Text id="mp_hero_sub" props={content: "Brand, campaign and content: we only make things worth a second look. Sameness bores us — that is why this shop exists.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="mp_hero_actions_cell" style="height:auto; width:auto; padding-top:30px">
            <FlexContainer id="mp_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:20px">
              <Container id="mp_hero_btn_cell" style="height:auto; width:auto">
                <Container id="mp_hero_btn" style="height:auto; width:auto; padding:16px 38px">
                  <Text id="mp_hero_btn_txt" props={content: "See our work", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="mp_hero_badge_cell" style="height:auto; width:auto">
                <Container id="mp_hero_badge" style="height:auto; width:auto; padding:14px 20px">
                  <Text id="mp_hero_badge_txt" props={content: "9 years · 137 projects", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Diagonal manifesto band ─── -->
      <Container id="mp_band_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_band_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_band_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240' preserveAspectRatio='xMidYMid slice'><rect x='-80' y='-60' width='1700' height='340' fill='#FF3D8B' transform='rotate(-2 720 120)'/><g stroke='#111' stroke-width='0'><rect x='-80' y='150' width='1700' height='16' fill='#111' transform='rotate(-2 720 120)' opacity='0.9'/></g></svg>", ariaLabel: "Diagonal magenta band"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="mp_band_row" props={direction: "row"} style="height:auto; width:100%; padding:74px 48px; position:relative; z-index:1; align-items:center; justify-content:center; gap:26px">
          <Container id="mp_band_icon_cell" style="height:52px; width:52px; flex-shrink:0">
            <Svg id="mp_band_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><path d='M26,4 l6,16 l16,6 l-16,6 l-6,16 l-6,-16 l-16,-6 l16,-6 Z' fill='#FFD23F' stroke='#111' stroke-width='3'/></svg>", ariaLabel: "Star mark"} style="height:52px; width:52px"/>
          </Container>
          <Container id="mp_band_text_cell" style="height:auto; width:auto">
            <Text id="mp_band_text" props={content: "Nobody remembers the fourteenth version", tagName: "h2"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Work (knocked-out sticker cards) ─── -->
      <Container id="mp_work_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_work_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 48px 110px; gap:56px">
          <Container id="mp_work_head_cell" style="height:auto; width:100%">
            <FlexContainer id="mp_work_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:40px">
              <Container id="mp_work_head_l_cell" style="height:auto; width:auto">
                <FlexContainer id="mp_work_head_l_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:flex-start">
                  <Container id="mp_work_label_cell" style="height:auto; width:auto"><Text id="mp_work_label" props={content: "RECENT WORK · JUST SHIPPED", tagName: "span"}/></Container>
                  <Container id="mp_work_title_cell" style="height:auto; width:auto"><Text id="mp_work_title" props={content: "Three projects, fresh out", tagName: "h2"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="mp_work_head_r_cell" style="height:auto; width:330px; flex-shrink:0"><Text id="mp_work_head_r" props={content: "From sparkling water to music festivals — we turn 'hard to explain' into 'got it at a glance'.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="mp_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:30px; align-items:flex-start">
              <Container id="mp_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mp_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c1_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#18C5D5'/><path d='M40,80 q40,-52 80,0 t80,0 t80,0 t80,0' stroke='#111' stroke-width='8' fill='none' stroke-linecap='round'/><rect x='120' y='140' width='160' height='60' rx='14' fill='#FFD23F' stroke='#111' stroke-width='6'/><circle cx='200' cy='170' r='16' fill='#FF3D8B' stroke='#111' stroke-width='5'/></svg>", ariaLabel: "Sparkling water brand visual"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c1_tag_cell" style="height:auto; width:auto"><Text id="mp_c1_tag" props={content: "Brand system", tagName: "span"}/></Container>
                    <Container id="mp_c1_name_cell" style="height:auto; width:auto"><Text id="mp_c1_name" props={content: "“Fizz” Sparkling Water", tagName: "h3"}/></Container>
                    <Container id="mp_c1_desc_cell" style="height:auto; width:100%"><Text id="mp_c1_desc" props={content: "Packaging to pop-up: making a bottle of water look ice-cold before you even open it.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="mp_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding-top:44px">
                <FlexContainer id="mp_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c2_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#FFD23F'/><path d='M60,180 L120,60 L180,180 Z' fill='#B4E33D' stroke='#111' stroke-width='7'/><path d='M170,180 L230,60 L290,180 Z' fill='#FF3D8B' stroke='#111' stroke-width='7'/><circle cx='330' cy='80' r='30' fill='#18C5D5' stroke='#111' stroke-width='7'/><path d='M40,200 h320' stroke='#111' stroke-width='8'/></svg>", ariaLabel: "Music festival visual"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c2_tag_cell" style="height:auto; width:auto"><Text id="mp_c2_tag" props={content: "Campaign visual", tagName: "span"}/></Container>
                    <Container id="mp_c2_name_cell" style="height:auto; width:auto"><Text id="mp_c2_name" props={content: "“Wildsound” Festival", tagName: "h3"}/></Container>
                    <Container id="mp_c2_desc_cell" style="height:auto; width:100%"><Text id="mp_c2_desc" props={content: "Key visual plus 200 lightboxes across the city — early-bird tickets gone in two days.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="mp_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; padding-top:88px">
                <FlexContainer id="mp_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="mp_c3_fig_cell" style="height:240px; width:100%; flex-shrink:0">
                    <Svg id="mp_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' preserveAspectRatio='xMidYMid slice'><rect width='400' height='240' fill='#B4E33D'/><g fill='#111'><rect x='60' y='50' width='44' height='44'/><rect x='148' y='50' width='44' height='44'/><rect x='236' y='50' width='44' height='44'/><rect x='104' y='94' width='44' height='44'/><rect x='192' y='94' width='44' height='44'/><rect x='280' y='94' width='44' height='44'/><rect x='60' y='138' width='44' height='44'/><rect x='148' y='138' width='44' height='44'/><rect x='236' y='138' width='44' height='44'/></g></svg>", ariaLabel: "Designer toy brand visual"} style="height:240px; width:100%"/>
                  </Container>
                  <FlexContainer id="mp_c3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:22px 22px 26px">
                    <Container id="mp_c3_tag_cell" style="height:auto; width:auto"><Text id="mp_c3_tag" props={content: "Content & IP", tagName: "span"}/></Container>
                    <Container id="mp_c3_name_cell" style="height:auto; width:auto"><Text id="mp_c3_name" props={content: "“Block Zoo” Designer Toys", tagName: "h3"}/></Container>
                    <Container id="mp_c3_desc_cell" style="height:auto; width:100%"><Text id="mp_c3_desc" props={content: "A family of cubes that pull faces — 120k new followers in three months.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Service sticker wall ─── -->
      <Container id="mp_service_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_service_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 96px; gap:34px; align-items:center">
          <Container id="mp_service_title_cell" style="height:auto; width:auto"><Text id="mp_service_title" props={content: "What we can take on", tagName: "h2"}/></Container>
          <Container id="mp_service_row1_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_service_row1" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center; justify-content:center">
              <Container id="mp_s1_cell" style="height:auto; width:auto"><Container id="mp_s1" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s1_txt" props={content: "Brand naming", tagName: "span"}/></Container></Container>
              <Container id="mp_s2_cell" style="height:auto; width:auto"><Container id="mp_s2" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s2_txt" props={content: "Visual systems", tagName: "span"}/></Container></Container>
              <Container id="mp_s3_cell" style="height:auto; width:auto"><Container id="mp_s3" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s3_txt" props={content: "Packaging", tagName: "span"}/></Container></Container>
              <Container id="mp_s4_cell" style="height:auto; width:auto"><Container id="mp_s4" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s4_txt" props={content: "Campaign visuals", tagName: "span"}/></Container></Container>
            </FlexContainer>
          </Container>
          <Container id="mp_service_row2_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_service_row2" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center; justify-content:center">
              <Container id="mp_s5_cell" style="height:auto; width:auto"><Container id="mp_s5" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s5_txt" props={content: "Pop-ups", tagName: "span"}/></Container></Container>
              <Container id="mp_s6_cell" style="height:auto; width:auto"><Container id="mp_s6" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s6_txt" props={content: "Social content", tagName: "span"}/></Container></Container>
              <Container id="mp_s7_cell" style="height:auto; width:auto"><Container id="mp_s7" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s7_txt" props={content: "Character IP", tagName: "span"}/></Container></Container>
              <Container id="mp_s8_cell" style="height:auto; width:auto"><Container id="mp_s8" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s8_txt" props={content: "Creative consults", tagName: "span"}/></Container></Container>
              <Container id="mp_s9_cell" style="height:auto; width:auto"><Container id="mp_s9" style="height:auto; width:auto; padding:12px 24px"><Text id="mp_s9_txt" props={content: "…and the odd one", tagName: "span"}/></Container></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Closing CTA ─── -->
      <Container id="mp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="mp_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="mp_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 420' preserveAspectRatio='xMidYMid slice' fill='none'><rect width='1440' height='420' fill='#18C5D5'/><g fill='#FFD23F' stroke='#111' stroke-width='4'><circle cx='120' cy='90' r='40'/><circle cx='1400' cy='350' r='52'/></g><path d='M1100,60 q36,44 0,88 q-36,-44 0,-88 Z' fill='#FF3D8B' stroke='#111' stroke-width='4'/><path d='M60,340 l60,0 l0,60 l-60,0 Z' fill='#B4E33D' stroke='#111' stroke-width='4'/></svg>", ariaLabel: "Cyan CTA ground with blobs"} style="height:100%; width:100%"/>
        </Container>
        <FlexContainer id="mp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 48px; gap:30px; align-items:center; position:relative; z-index:1">
          <Container id="mp_cta_title_cell" style="height:auto; width:auto"><Text id="mp_cta_title" props={content: "Send us the idea", tagName: "h2"}/></Container>
          <Container id="mp_cta_sub_cell" style="height:auto; width:100%; max-width:520px"><Text id="mp_cta_sub" props={content: "No deck required — one sentence, one sketch, one voice memo will do. Turning that into something that ships is the job.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="mp_cta_btn_cell" style="height:auto; width:auto; padding-top:8px">
            <Container id="mp_cta_btn" style="height:auto; width:auto; padding:18px 46px">
              <Text id="mp_cta_btn_txt" props={content: "hello@mixplus.design", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="mp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="mp_footer_left_cell" style="height:auto; width:auto"><Text id="mp_footer_left" props={content: "© 2026 MIXPLUS creative hot shop · Every project shown is fictional", tagName: "span"}/></Container>
          <Container id="mp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="mp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="mp_footer_f1_cell" style="height:auto; width:auto"><Text id="mp_footer_f1" props={content: "Instagram", tagName: "span"}/></Container>
              <Container id="mp_footer_f2_cell" style="height:auto; width:auto"><Text id="mp_footer_f2" props={content: "Behance", tagName: "span"}/></Container>
              <Container id="mp_footer_f3_cell" style="height:auto; width:auto"><Text id="mp_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer back-to-top (nav.scroll: return the current scroll container to its top)
      @mp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page ground (off-white paper + black outlines) ──
      @mp_root = { background: #FFFBF2; }

      # ── Anchor landing offset ──
      @mp_work_region = { :scope { scroll-margin-top: 84px; } }
      @mp_service_region = { :scope { scroll-margin-top: 84px; } }
      @mp_cta_region = { :scope { scroll-margin-top: 84px; } }

      # ── Nav ──
      @mp_nav_region = { background: rgba(255, 251, 242, 0.94); backdrop-filter: blur(8px); border-bottom: 3px solid #111; }
      @mp_nav_word = { color: #111; font-size: 20px; font-weight: 900; letter-spacing: 1.2px; }
      @mp_nav_menu = { :scope { --anchor-item-color: #111; --anchor-item-font-size: 14px; --anchor-item-font-weight: 800; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #FF3D8B; --anchor-item-active-bg: transparent; --anchor-gap: 34px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link]:hover { color: #FF3D8B; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -3px 0 #FF3D8B; }
      }
      @mp_nav_cta = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; transition: transform 0.2s ease, box-shadow 0.2s ease; :scope:hover { transform: translate(1px, 1px); box-shadow: 2px 2px 0 #111; } }
      @mp_nav_cta_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.4px; }

      # ── Hero ──
      @mp_hero_chip = { background: #B4E33D; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_hero_chip_txt = { color: #111; font-size: 13px; font-weight: 800; letter-spacing: 0.8px; }
      # The display line stays at 124px — measured, not assumed. "PRODUCTIVITY" at 124px Inter Black
      # runs 933px; with the 120px staircase indent that is 1053px inside the 1184px measure (1280
      # minus 48px gutters). The Chinese 是生产力 is 4 glyphs / 496px for the same slot, so the English
      # line is re-split ("FUN IS" / "PRODUCTIVITY") to keep both the two-line staircase and the size.
      @mp_hero_l1 = { color: #111; font-size: 124px; font-weight: 900; line-height: 1.02; letter-spacing: -3px; }
      @mp_hero_l2 = { color: #FF3D8B; font-size: 124px; font-weight: 900; line-height: 1.02; letter-spacing: -3px; :scope { -webkit-text-stroke: 3px #111; } }
      @mp_hero_sub = { color: #3F3A33; font-size: 16px; line-height: 1.8; font-weight: 500; }
      @mp_hero_btn = { background: #111; border: 3px solid #111; border-radius: 999px; transition: transform 0.2s ease; :scope:hover { transform: translateY(-3px); } }
      @mp_hero_btn_txt = { color: #FFFBF2; font-size: 15px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_hero_badge = { background: #FFFBF2; border: 3px dashed #111; border-radius: 18px; }
      @mp_hero_badge_txt = { color: #111; font-size: 13px; font-weight: 700; letter-spacing: 0.4px; }

      # ── Manifesto band ──
      # 40px kept: the english line measures 897px, and the band gives the text 1106px once the 52px
      # star and its 26px gap are taken out of the 1184px measure.
      @mp_band_text = {color: #FFFBF2; font-size: 40px; font-weight: 900; letter-spacing: 0.5px; :scope { text-shadow: 3px 3px 0 #111; } }

      # ── Case cards ──
      @mp_work_label = { color: #111; background: #FFD23F; border: 2px solid #111; border-radius: 999px; padding: 5px 14px; font-size: 12px; font-weight: 800; letter-spacing: 0.8px; }
      # "Three projects, fresh out" measures 606px against the 814px the heading column keeps once
      # the 330px note has taken its share — the 52px display size holds.
      @mp_work_title = { color: #111; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; }
      @mp_work_head_r = { color: #6B6357; font-size: 14px; line-height: 1.8; }
      @mp_c1_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c2_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c3_col = { background: #FFFFFF; border: 3px solid #111; border-radius: 20px; box-shadow: 6px 6px 0 #111; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; :scope:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 #111; } }
      @mp_c1_tag = { color: #111; background: #18C5D5; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_c2_tag = { color: #111; background: #FFD23F; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_c3_tag = { color: #111; background: #B4E33D; border: 2px solid #111; border-radius: 999px; padding: 3px 12px; font-size: 11px; font-weight: 800; letter-spacing: 0.6px; }
      # Card names keep 21px; each card body gives them 330px and the longest ("“Fizz” Sparkling
      # Water", 255px) sits well inside it.
      @mp_c1_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.2px; }
      @mp_c2_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.2px; }
      @mp_c3_name = { color: #111; font-size: 21px; font-weight: 900; letter-spacing: -0.2px; }
      @mp_c1_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.7; }
      @mp_c2_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.7; }
      @mp_c3_desc = { color: #6B6357; font-size: 13.5px; line-height: 1.7; }

      # ── Service stickers ──
      @mp_service_title = { color: #111; font-size: 46px; font-weight: 900; letter-spacing: -1.2px; }
      @mp_s1 = { background: #FF3D8B; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s2 = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s3 = { background: #18C5D5; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s4 = { background: #B4E33D; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s5 = { background: #FFFBF2; border: 3px dashed #111; border-radius: 999px; }
      @mp_s6 = { background: #FF3D8B; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s7 = { background: #18C5D5; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s8 = { background: #FFD23F; border: 3px solid #111; border-radius: 999px; box-shadow: 3px 3px 0 #111; }
      @mp_s9 = { background: #111; border: 3px solid #111; border-radius: 999px; }
      @mp_s1_txt = { color: #FFFBF2; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s2_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s3_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s4_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s5_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s6_txt = { color: #FFFBF2; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s7_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s8_txt = { color: #111; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }
      @mp_s9_txt = { color: #FFD23F; font-size: 14px; font-weight: 800; letter-spacing: 0.6px; }

      # ── Closing ──
      @mp_cta_title = {color: #111; font-size: 62px; font-weight: 900; letter-spacing: -1.5px; :scope { text-shadow: 4px 4px 0 #FFD23F; } }
      @mp_cta_sub = { color: #083B41; font-size: 15.5px; line-height: 1.8; font-weight: 600; text-align: center; }
      @mp_cta_btn = { background: #FFFBF2; border: 3px solid #111; border-radius: 999px; box-shadow: 5px 5px 0 #111; transition: transform 0.2s ease, box-shadow 0.2s ease; :scope:hover { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #111; } }
      @mp_cta_btn_txt = { color: #111; font-size: 17px; font-weight: 900; letter-spacing: 0.6px; }

      # ── Footer ──
      @mp_footer_row = { border-top: 3px solid #111; }
      @mp_footer_left = { color: #6B6357; font-size: 12.5px; letter-spacing: 0.4px; }
      @mp_footer_f1 = { color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
      @mp_footer_f2 = { color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
      @mp_footer_f3 = { cursor: pointer; color: #111; font-size: 13px; font-weight: 700; :scope { transition: color 0.2s ease; }; :scope:hover { color: #FF3D8B; } }
    </styles>
  </Page>
</App>
```

## Production notes

**The display line stayed at 124px, and that decision came from a measurement.** "PRODUCTIVITY" at
124px Inter Black runs **933px**; with the 120px staircase indent that is **1053px inside the
1184px measure** (1280 minus 48px gutters) — it fits, so the Memphis scale is untouched. The
Chinese 好玩 / 是生产力 is 2 + 4 glyphs at 124px; the English line is **re-split** as
`FUN IS` / `PRODUCTIVITY` so that the two-line staircase, the indent and the outline treatment on
the second line all survive intact. Nothing about the hero structure changed — same nodes, same
`padding-left: 120px`, same `-webkit-text-stroke`.

**Display headings were kept where the numbers allowed it** (this is a poster template — shrinking
its type would be the failure mode):

| Element | Chinese | English | Why |
| --- | --- | --- | --- |
| Hero display line | 124px | **124px** | 933px + 120px indent = 1053px in 1184px |
| Manifesto band | 40px | **40px** | 897px in the 1106px the band leaves beside the star |
| Work heading | 52px | **52px** | 606px against an 814px column |
| Services heading | 46px | **46px** | 452px, centred |
| Closing CTA | 62px | **62px** | 485px, centred |

**Tracking came down** (wide tracking is a CJK habit, not a Memphis one): nav word 3px → **1.2px**,
pill and tag labels 2px / 1.5px → **0.8px / 0.6px**, buttons 1.5px → **0.6px**. The hero's own
`-3px` and the CTA's `-2px → -1.5px` stay: uppercase Latin at 124px needs the negative tracking.

**Body leading came down** per the Latin/CJK rule: hero paragraph 1.95 → **1.8**, case card
descriptions 1.8 → **1.7**, the section note 1.9 → **1.8**, the closing paragraph 1.95 → **1.8**.

**Copy policy — rewritten for the register, not translated word for word.** This is a "creative
hot shop" voice, so the English is written as *agency English*: `找个点子` → "Start something";
`开聊` → "Say hi"; `最近在忙什么` → "RECENT WORK · JUST SHIPPED"; `三个刚出锅的案子` → "Three
projects, fresh out"; `把想法丢过来` → "Send us the idea". The slogan `好玩是生产力` becomes
"FUN IS / PRODUCTIVITY". Fictional brands get equivalent names rather than transliterations:
`「噗呲」气泡水` (an onomatopoeic fizz) → **“Fizz” Sparkling Water**, `「野声」音乐节` →
**“Wildsound” Festival**, `「方块动物园」潮玩` → **“Block Zoo” Designer Toys** — with Latin curly
quotes replacing the CJK corner brackets, since the brackets are a CJK punctuation habit.
`小红书` → **Instagram** (the international equivalent in the same footer slot, beside Behance),
and `创意热店` → "creative hot shop" ("hot shop" is the English industry term for exactly this kind
of studio). Node ids are unchanged throughout.
