# 3D Pinned Narrative (Scroll Assembly) — MECHA Assembly Theatre

> Template position (Interaction / Motion tab): **pinned travel plus windowed 3D assembly** — the frame is pinned with sticky while the scroll ratio sends three parts along their trajectories one after another (fully reversible); a top reading-progress bar and two camera buttons show runtime 3D control.
> Brief: a long 3D-installation narrative page: hero copy and a scroll hint; then a 300vh travel where the frame is pinned and the base, body and crown fly in and seat themselves by travel window (0→30% / 35→65% / 70→100%), with a three-line window legend on the left and two camera buttons (wide / close-up) at the bottom; after the travel, three part cards recount the assembly logic; a closing CTA and footer. Dark palette, and all motion is enhancement only — the zero-motion face shows the complete page with the scene already **assembled** (the final frame is the default state).

```lang
<App dsl-version="0.3" name="MECHA Assembly Theatre — 3D Pinned Narrative">
  <Page id="narr" name="Assembly Theatre" route="/">
    <FlexContainer id="nc_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 0. Reading progress bar (sticky 3px, tick fill) ─── -->
      <Container id="nc_track" style="flex-shrink:0; flex-grow:0; height:3px; width:100%; position:sticky; top:0px; z-index:60">
        <Container id="nc_fill" style="height:100%; width:100%"/>
      </Container>

      <!-- ─── 1. Nav (sticky, below the progress bar) ─── -->
      <Container id="nc_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:3px; z-index:50">
        <FlexContainer id="nc_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 52px">
          <Container id="nc_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nc_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="nc_nav_mark_cell" style="height:24px; width:24px; flex-shrink:0">
                <Svg id="nc_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect x='3' y='13' width='18' height='7' rx='1.4' stroke='#67e8f9' stroke-width='1.3'/><path d='M12 3 L17 11 L7 11 Z' stroke='#fbbf24' stroke-width='1.3'/><circle cx='12' cy='7.6' r='1.6' fill='#fbbf24'/></svg>", ariaLabel: "MECHA logo"} style="height:24px; width:24px"/>
              </Container>
              <Container id="nc_nav_word_cell" style="height:auto; width:auto">
                <Text id="nc_nav_word" props={content: "MECHA Assembly Theatre", tagName: "span"} style="height:auto; width:auto"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="nc_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="nc_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="nc_nav_item_assemble" props={itemLabel: "Assembly", itemTarget: "nc_trip"} style="height:auto; width:auto"/>
              <Container id="nc_nav_item_parts" props={itemLabel: "Parts", itemTarget: "nc_parts_region"} style="height:auto; width:auto"/>
              <Container id="nc_nav_item_outro" props={itemLabel: "Closing", itemTarget: "nc_outro_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="nc_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Button id="nc_nav_cta" props={content: "Copy this page", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (one-shot entrance + scroll hint) ─── -->
      <Container id="nc_hero_band" style="flex-shrink:0; flex-grow:0; height:92vh; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <FlexContainer id="nc_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:center; gap:20px">
          <Container id="nc_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="nc_hero_eyebrow" props={content: "Scroll assembly · one scene, three parts", tagName: "span"} style="height:auto; width:auto"/></Container>
          <Container id="nc_hero_title_cell" style="height:auto; width:100%"><Text id="nc_hero_title" props={content: "Assemble it with your scroll wheel", tagName: "h1"} style="height:auto; width:100%"/></Container>
          <Container id="nc_hero_sub_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="nc_hero_sub" props={content: "The frame pins in place while the base, the body and the crown fly in by travel ratio; scroll back and the assembly steps backwards.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="nc_hero_hint_cell" style="height:auto; width:auto; padding-top:10px"><Text id="nc_hero_hint" props={content: "↓ Scroll down to begin the assembly", tagName: "span"} style="height:auto; width:auto"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Pinned travel (300vh: sticky frame + windowed part assembly) ─── -->
      <Container id="nc_trip" style="flex-shrink:0; flex-grow:0; height:300vh; width:100%; justify-content:flex-start; position:relative">
        <Container id="nc_band" style="height:100vh; left:0px; position:sticky; top:0px; width:100%">
          <Container id="nc_scene_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Scene3d id="nc_scene" props={visible: true, objects: [{ kind: "camera", id: "nc_cam_wide", preset: "iso" }, { kind: "camera", id: "nc_cam_close", preset: "front", focus: "nc_body", distance: 3.2 }, { kind: "torus", id: "nc_scaffold", radius: 1.95, tube: 0.03, rotation: [74, 0, 0], finish: "matte", color: "#475569" }, { kind: "cylinder", id: "nc_base", radius: 1.25, height: 0.3, finish: "metal", color: "#cbd5e1", animation: { type: "path", points: [[-2.6, -1.4, 0], [0, -0.5, 0]], speed: "slow", loopMode: "once", progress: 1 } }, { kind: "cone", id: "nc_body", radius: 0.62, height: 1.35, finish: "gloss", color: "#7dd3fc", animation: { type: "path", points: [[2.6, 1.4, 0], [0, 0.55, 0]], speed: "slow", loopMode: "once", progress: 1 } }, { kind: "sphere", id: "nc_crown", radius: 0.3, finish: "gloss", color: "#fbbf24", animation: { type: "path", points: [[0, 2.8, 0], [0, 1.5, 0]], speed: "slow", loopMode: "once", progress: 1 } }], lighting: "studio", background: "dark", camera: "iso", autoRotate: false, enableZoom: false} style="height:100%; width:100%"/>
          </Container>
          <Container id="nc_overlay_cell" style="height:auto; width:460px; position:absolute; left:64px; top:104px; z-index:2">
            <FlexContainer id="nc_overlay_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="nc_overlay_eyebrow_cell" style="height:auto; width:auto"><Text id="nc_overlay_eyebrow" props={content: "Assembly progress bound to scroll", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="nc_overlay_title_cell" style="height:auto; width:100%"><Text id="nc_overlay_title" props={content: "Each part takes its place along the travel", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="nc_overlay_desc_cell" style="height:auto; width:100%"><Text id="nc_overlay_desc" props={content: "The three parts each own a slice of the travel: the base lands first, the body presses in, the crown caps it. Scrolling reverses the whole assembly.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="nc_overlay_legend_cell" style="height:auto; width:100%; padding-top:6px">
                <FlexContainer id="nc_overlay_legend_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                  <Container id="nc_legend_base_cell" style="height:auto; width:auto"><Text id="nc_legend_base" props={content: "Base · travel 0% → 30%", tagName: "span"} style="height:auto; width:auto"/></Container>
                  <Container id="nc_legend_body_cell" style="height:auto; width:auto"><Text id="nc_legend_body" props={content: "Body · travel 35% → 65%", tagName: "span"} style="height:auto; width:auto"/></Container>
                  <Container id="nc_legend_crown_cell" style="height:auto; width:auto"><Text id="nc_legend_crown" props={content: "Crown · travel 70% → 100%", tagName: "span"} style="height:auto; width:auto"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="nc_cam_cell" style="height:auto; width:100%; left:0px; bottom:52px; position:absolute; z-index:2">
            <FlexContainer id="nc_cam_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:12px">
              <Container id="nc_cam_hint_cell" style="height:auto; width:auto"><Text id="nc_cam_hint" props={content: "Switch camera at runtime:", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="nc_cam_wide_cell" style="height:auto; width:auto"><Button id="nc_cam_wide_btn" props={content: "Wide shot", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
              <Container id="nc_cam_close_cell" style="height:auto; width:auto"><Button id="nc_cam_close_btn" props={content: "Body close-up", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
            </FlexContainer>
          </Container>
        </Container>
      </Container>

      <!-- ─── 4. Part cards (revealed on view, recounting the assembly) ─── -->
      <Container id="nc_parts_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:96px 52px 104px; scroll-margin-top:72px">
        <FlexContainer id="nc_parts_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px">
          <Container id="nc_parts_head_cell" style="height:auto; width:auto">
            <FlexContainer id="nc_parts_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="nc_parts_eyebrow_cell" style="height:auto; width:auto"><Text id="nc_parts_eyebrow" props={content: "Assembly list", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="nc_parts_title_cell" style="height:auto; width:auto"><Text id="nc_parts_title" props={content: "What just happened", tagName: "h2"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="nc_parts_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="nc_parts_reveal" props={direction: "row", effect: "fadeInUp", trigger: "onView", stagger: 110} style="height:auto; width:100%; max-width:1100px; justify-content:center; gap:24px">
              <Container id="nc_part_base_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="nc_part_base_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:30px 26px">
                  <Container id="nc_part_base_chip_cell" style="height:auto; width:auto"><Tag id="nc_part_base_chip" props={text: "travel 0% → 30%", color: "cyan"}/></Container>
                  <Container id="nc_part_base_name_cell" style="height:auto; width:100%"><Text id="nc_part_base_name" props={content: "Base · lands", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="nc_part_base_desc_cell" style="height:auto; width:100%"><Text id="nc_part_base_desc" props={content: "The metal disc slides in from the lower left and sets the coordinates — the other two parts register against it.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="nc_part_body_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="nc_part_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:30px 26px">
                  <Container id="nc_part_body_chip_cell" style="height:auto; width:auto"><Tag id="nc_part_body_chip" props={text: "travel 35% → 65%", color: "blue"}/></Container>
                  <Container id="nc_part_body_name_cell" style="height:auto; width:100%"><Text id="nc_part_body_name" props={content: "Body · seats", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="nc_part_body_desc_cell" style="height:auto; width:100%"><Text id="nc_part_body_desc" props={content: "The cone flies in from the upper right and aligns mid-window — the second half of the window stays still so the seating reads clearly.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="nc_part_crown_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="nc_part_crown_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:30px 26px">
                  <Container id="nc_part_crown_chip_cell" style="height:auto; width:auto"><Tag id="nc_part_crown_chip" props={text: "travel 70% → 100%", color: "gold"}/></Container>
                  <Container id="nc_part_crown_name_cell" style="height:auto; width:100%"><Text id="nc_part_crown_name" props={content: "Crown · caps", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="nc_part_crown_desc_cell" style="height:auto; width:100%"><Text id="nc_part_crown_desc" props={content: "The golden sphere drops straight down to close the build; once the travel ends the assembly is complete — scrolling back lifts the crown off again.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Closing ─── -->
      <Container id="nc_outro_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:16px 52px 104px; scroll-margin-top:72px">
        <Container id="nc_outro_card" style="height:auto; width:100%; max-width:1040px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="nc_outro_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:60px 56px">
            <Container id="nc_outro_title_cell" style="height:auto; width:auto"><Text id="nc_outro_title" props={content: "Put an assembly narrative on your product page", tagName: "h2"} style="height:auto; width:auto"/></Container>
            <Container id="nc_outro_desc_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="nc_outro_desc" props={content: "Copy this template: re-aim the cameras, swap the part geometry, retune the travel windows — the scroll assembly and the reading-progress bar are already wired.", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="nc_outro_btn_cell" style="height:auto; width:auto; padding-top:12px"><Button id="nc_outro_btn" props={content: "Copy this page", variant: "primary"} style="height:auto; width:auto; padding:13px 32px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="nc_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="nc_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 52px 38px">
        <Text id="nc_footer_note" props={content: "© 2026 MECHA Assembly Theatre · demo template (brand and figures are fictional)", tagName: "p"} style="height:auto; width:100%"/>
      </Container>
    </FlexContainer>

    <script>
      # Reading progress bar (tick fill; no JS / reduced-motion shows the full default bar)
      @nc_root = {
        events: { readingProgress: { trigger: "onMount", action: motion.progress({targets: ["nc_fill"]}) } }
      }
      # One-shot hero entrance
      @nc_hero_band = {
        events: { heroIn: { trigger: "onMount", action: motion.play({targets: ["nc_hero_eyebrow", "nc_hero_title", "nc_hero_sub", "nc_hero_hint"], effect: "fadeInUp", stagger: 100, duration: "slow"}) } }
      }
      # Pinned assembly: the travel container (nc_trip) is the progress source and each part owns a travel window (range "element" = travel ratio)
      @nc_scene = {
        events: { bindAssembly: { trigger: "onMount", action: scene3d.scrub({target: "nc_scene", source: "nc_trip", range: "element", objects: [{objectId: "nc_base", start: 0, end: 0.3}, {objectId: "nc_body", start: 0.35, end: 0.65}, {objectId: "nc_crown", start: 0.7, end: 1}]}) } }
      }
      # Runtime camera switching: named cameras (wide / body close-up — the close-up overrides framing with focus + distance)
      @nc_cam_wide_btn = {
        events: { handleWide: { trigger: "onClick", action: scene3d.setCamera({target: "nc_scene", camera: "nc_cam_wide"}) } }
      }
      @nc_cam_close_btn = {
        events: { handleClose: { trigger: "onClick", action: scene3d.setCamera({target: "nc_scene", camera: "nc_cam_close"}) } }
      }
      # Declarative feedback (pure front-end actions, no endpoints)
      @nc_nav_cta = {
        events: { copyPage: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Template copied to your workspace: the assembly recipe and the progress bar come along"}) } }
      }
      @nc_outro_btn = {
        events: { copyPage: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Template copied to your workspace: the assembly recipe and the progress bar come along"}) } }
      }
    </script>

    <styles>
      # 0. Dark base
      @nc_root = { background: #080d1a; }
      @nc_track = { background: rgba(148, 163, 184, 0.18); }
      @nc_fill = { background: linear-gradient(90deg, #22d3ee 0%, #7c3aed 100%); }
      @nc_nav_region = {
        background: rgba(8, 13, 26, 0.76);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(34, 211, 238, 0.12); }
      }
      @nc_nav_word = { color: #e2e8f0; font-size: 16px; font-weight: 800; letter-spacing: 0.5px; }
      @nc_nav_menu = {
        :scope { --anchor-item-color: #94a3b8; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #67e8f9; --anchor-item-active-bg: transparent; --anchor-gap: 32px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #67e8f9; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #22d3ee; }
      }
      @nc_nav_cta = {
        color: #06212b;
        background: linear-gradient(120deg, #67e8f9 0%, #22d3ee 100%);
        border-radius: 999px;
        font-size: 14px;
        font-weight: 800;
        box-shadow: 0 6px 18px rgba(34, 211, 238, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(34, 211, 238, 0.38); }
      }

      # 1. Hero
      @nc_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #12203c 0%, #0a1224 60%, #080d1a 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -200px;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          margin-left: -360px;
          background: radial-gradient(closest-side, rgba(34, 211, 238, 0.16), transparent 72%);
        }
      }
      @nc_hero_eyebrow = { color: #67e8f9; font-size: 14px; font-weight: 700; letter-spacing: 4px; }
      @nc_hero_title = {
        font-size: 68px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.1;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f8fafc 0%, #a5f3fc 50%, #c4b5fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @nc_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.95; text-align: center; }
      @nc_hero_hint = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 1px; }

      # 2. Pinned band
      @nc_band = { background: #0a1224; }
      @nc_scene_cell = { :scope { background: radial-gradient(90% 120% at 50% 20%, #16243f 0%, #0a1224 68%); } }
      @nc_overlay_eyebrow = { color: #67e8f9; font-size: 13px; font-weight: 700; letter-spacing: 3px; }
      @nc_overlay_title = { color: #f1f5f9; font-size: 38px; font-weight: 900; letter-spacing: -1px; line-height: 1.2; }
      @nc_overlay_desc = { color: #94a3b8; font-size: 15px; line-height: 1.95; }
      @nc_legend_base = { color: #a5f3fc; font-size: 13px; font-weight: 700; }
      @nc_legend_body = { color: #93c5fd; font-size: 13px; font-weight: 700; }
      @nc_legend_crown = { color: #fcd34d; font-size: 13px; font-weight: 700; }
      @nc_cam_hint = { color: #64748b; font-size: 13px; font-weight: 600; }
      @nc_cam_wide_btn = {
        color: #a5f3fc;
        background: rgba(34, 211, 238, 0.12);
        border-radius: 999px;
        font-size: 13px;
        font-weight: 700;
        :scope { border: 1px solid rgba(34, 211, 238, 0.3); transition: background-color 0.2s ease; }
        :scope:hover { background-color: rgba(34, 211, 238, 0.22); }
      }
      @nc_cam_close_btn = {
        color: #fcd34d;
        background: rgba(251, 191, 36, 0.1);
        border-radius: 999px;
        font-size: 13px;
        font-weight: 700;
        :scope { border: 1px solid rgba(251, 191, 36, 0.3); transition: background-color 0.2s ease; }
        :scope:hover { background-color: rgba(251, 191, 36, 0.2); }
      }

      # 3. Part cards
      @nc_parts_region = { background: #080d1a; }
      @nc_parts_eyebrow = { color: #67e8f9; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @nc_parts_title = { color: #f1f5f9; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @nc_part_base_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.7) 0%, rgba(10, 18, 36, 0.9) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(34, 211, 238, 0.22); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(165, 243, 252, 0.5); }
      }
      @nc_part_body_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.7) 0%, rgba(10, 18, 36, 0.9) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(96, 165, 250, 0.22); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(147, 197, 253, 0.5); }
      }
      @nc_part_crown_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.7) 0%, rgba(10, 18, 36, 0.9) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(251, 191, 36, 0.22); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(252, 211, 77, 0.5); }
      }
      @nc_part_base_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @nc_part_body_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @nc_part_crown_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @nc_part_base_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @nc_part_body_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @nc_part_crown_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }

      # 4. Closing
      @nc_outro_card = {
        background: linear-gradient(120deg, #0e2a4a 0%, #123a63 48%, #1e1b4b 100%);
        border-radius: 28px;
        box-shadow: 0 30px 70px rgba(2, 6, 23, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.14);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(closest-side, rgba(34, 211, 238, 0.26), rgba(34, 211, 238, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -150px; bottom: -180px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(closest-side, rgba(124, 58, 237, 0.32), rgba(124, 58, 237, 0) 72%); }
      }
      @nc_outro_title = { color: #ffffff; font-size: 36px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @nc_outro_desc = { color: rgba(226, 232, 240, 0.9); font-size: 16px; line-height: 1.85; text-align: center; }
      @nc_outro_btn = {
        color: #06212b;
        background: linear-gradient(120deg, #a5f3fc 0%, #67e8f9 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 12px 28px rgba(34, 211, 238, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(34, 211, 238, 0.36); }
      }
      @nc_footer_divider = { background: rgba(148, 163, 184, 0.14); }
      @nc_footer_note = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Build notes: **the three pinning rules** (rule 17) — the travel container `nc_trip` declares `justify-content: flex-start` explicitly (centre injection would push the sticky band off), it is the direct parent of the sticky band, and **no ancestor in the travel chain may carry `overflow` or `transform`**. **Assembly windows**: each part owns a slice of the travel (0→0.3 / 0.35→0.65 / 0.7→1) with breathing room between them, and `range: "element"` makes progress follow the **travel ratio** rather than the viewport ratio. **Final-frame discipline**: every part carries a static `progress: 1` (assembled is the default state), so the editor's static first frame, the no-WebGL face and reduced-motion all show the finished build; at runtime the `scene3d.scrub` override outranks the static pin, and scrolling only replays it. **Cameras**: the close-up uses `focus` (target = the part's position) plus `distance`; both buttons go through `scene3d.setCamera` (session-level, never written back to the schema). **Honest boundary**: one scrub and one 3D scene per page; the 300vh travel is the narrative length, so a short viewport assembles faster (raise it to 400vh if you want it slower).
