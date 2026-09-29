# 3D Hero (Pure Geometry) — PRISM Engine, Real-Time 3D Rendering

> Template position (Marketing / Growth tab): a **3D hero that starts from zero assets** — the key visual is built entirely from native geometry (a knot, a halo ring, two orbiting satellites) at runtime, so you get a dimensional first screen without shipping any `.glb` model; three camera buttons demonstrate switching viewpoints at runtime.
> Brief: a product hero for a fictional "real-time 3D engine in the browser": deep-space ground with a purple-and-cyan geometry centrepiece (spinning ring knot, two orbiting satellites, a plinth), left-aligned copy with two CTAs, and a camera row under the scene; then three capability cards revealed on scroll; a gradient closing CTA and footer. Motion is limited to two choreographies (hero onMount / cards onView) plus the 3D trajectories themselves — no API, all static data.

```lang
<App dsl-version="0.3" name="PRISM Engine — 3D Hero">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="m3h_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (dark glass, sticky) ─── -->
      <Container id="m3h_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="m3h_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 52px">
          <Container id="m3h_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="m3h_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="m3h_nav_mark_cell" style="height:26px; width:26px; flex-shrink:0">
                <Svg id="m3h_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'><polygon points='13,1 25,13 13,25 1,13' fill='#8b5cf6'/><polygon points='13,7 19,13 13,19 7,13' fill='#0b1220'/></svg>", ariaLabel: "PRISM logo"} style="height:26px; width:26px"/>
              </Container>
              <Container id="m3h_nav_word_cell" style="height:auto; width:auto">
                <Text id="m3h_nav_word" props={content: "PRISM Engine", tagName: "span"} style="height:auto; width:auto"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="m3h_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="m3h_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="m3h_nav_item_scene" props={itemLabel: "Key visual", itemTarget: "m3h_scene_region"} style="height:auto; width:auto"/>
              <Container id="m3h_nav_item_feature" props={itemLabel: "Capabilities", itemTarget: "m3h_feature_region"} style="height:auto; width:auto"/>
              <Container id="m3h_nav_item_try" props={itemLabel: "Start building", itemTarget: "m3h_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="m3h_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Button id="m3h_nav_cta" props={content: "Try it free", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (onMount choreography + 3D key visual) ─── -->
      <FlexContainer id="m3h_hero_region" props={direction: "column"} style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="m3h_hero_copy_cell" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
          <Animate id="m3h_hero_copy" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 90, duration: "slow"} style="align-items:center; gap:20px; height:auto; width:100%; padding:78px 48px 40px; position:relative">
            <Container id="m3h_hero_eyebrow_cell" style="height:auto; width:auto">
              <Tag id="m3h_hero_eyebrow" props={text: "Real-time WebGL · no plugin, no modelling pipeline", color: "purple"}/>
            </Container>
            <Container id="m3h_hero_title_cell" style="height:auto; width:100%">
              <Text id="m3h_hero_title" props={content: "Grow a three-dimensional world in the browser", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="m3h_hero_sub_cell" style="height:auto; width:700px; flex-shrink:0">
              <Text id="m3h_hero_sub" props={content: "Native geometry builds the scene, trajectories drive the motion, and models share the same space as primitives — declare it and it renders; the canvas has depth the moment you open it.", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
            <Container id="m3h_hero_cta_cell" style="height:auto; width:auto; padding-top:8px">
              <FlexContainer id="m3h_hero_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center">
                <Container id="m3h_hero_cta_primary_cell" style="height:auto; width:auto"><Button id="m3h_hero_cta_primary" props={content: "Start building free", variant: "primary"} style="height:auto; width:auto; padding:13px 30px"/></Container>
                <Container id="m3h_hero_cta_demo_cell" style="height:auto; width:auto"><Button id="m3h_hero_cta_demo" props={content: "See the capability list", variant: "default"} style="height:auto; width:auto; padding:13px 26px"/></Container>
              </FlexContainer>
            </Container>
          </Animate>
        </Container>

        <!-- 3D key visual: a pure-geometry scene (zero assets); drag to orbit, the wheel never hijacks page scroll -->
        <Container id="m3h_scene_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 48px 26px; position:relative; scroll-margin-top:72px">
          <Container id="m3h_scene_cell" style="height:520px; width:100%; max-width:1180px; margin-left:auto; margin-right:auto; position:relative">
            <Scene3d id="m3h_scene" props={visible: true, objects: [{ kind: "camera", id: "m3h_cam_iso", preset: "iso" }, { kind: "camera", id: "m3h_cam_top", preset: "top", distance: 6.5 }, { kind: "cylinder", id: "m3h_plinth", radius: 1.35, height: 0.06, position: [0, -1.45, 0], finish: "matte", color: "#1e293b" }, { kind: "torusKnot", id: "m3h_core", radius: 0.9, tube: 0.26, segments: 64, finish: "gloss", color: "#8b5cf6", animation: { type: "spin", speed: "slow" } }, { kind: "torus", id: "m3h_halo", radius: 1.75, tube: 0.02, rotation: [80, 0, 10], finish: "metal", color: "#38bdf8", animation: { type: "spin", axis: "z", speed: "normal" } }, { kind: "sphere", id: "m3h_sat_a", radius: 0.16, finish: "gloss", color: "#22d3ee", animation: { type: "orbit", radius: 1.75, speed: "normal", phase: 0.2, tilt: 14 } }, { kind: "sphere", id: "m3h_sat_b", radius: 0.1, finish: "satin", color: "#e2e8f0", animation: { type: "orbit", radius: 1.3, speed: "fast", phase: 0.62, tilt: -18 } }], lighting: "dramatic", background: "transparent", camera: "iso", autoRotate: true, rotateSpeed: "slow", enableZoom: false} style="height:100%; width:100%"/>
          </Container>
        </Container>

        <!-- Camera switching (a runtime 3D capability: named cameras) -->
        <Container id="m3h_cam_row_cell" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 48px 84px">
          <FlexContainer id="m3h_cam_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:12px">
            <Container id="m3h_cam_hint_cell" style="height:auto; width:auto"><Text id="m3h_cam_hint" props={content: "Drag to orbit · auto-rotating slowly", tagName: "span"} style="height:auto; width:auto"/></Container>
            <Container id="m3h_cam_iso_cell" style="height:auto; width:auto"><Button id="m3h_cam_iso_btn" props={content: "Isometric", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
            <Container id="m3h_cam_top_cell" style="height:auto; width:auto"><Button id="m3h_cam_top_btn" props={content: "Top-down", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>

      <!-- ─── 3. Engine capability cards (revealed on view) ─── -->
      <Container id="m3h_feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:64px 48px 96px; scroll-margin-top:72px">
        <FlexContainer id="m3h_feature_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px">
          <Container id="m3h_feature_head_cell" style="height:auto; width:auto">
            <FlexContainer id="m3h_feature_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="m3h_feature_eyebrow_cell" style="height:auto; width:auto"><Text id="m3h_feature_eyebrow" props={content: "Engine capabilities", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="m3h_feature_title_cell" style="height:auto; width:auto"><Text id="m3h_feature_title" props={content: "Three words explain how it works", tagName: "h2"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="m3h_feature_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="m3h_feature_reveal" props={direction: "row", effect: "scaleIn", trigger: "onView", stagger: 90} style="height:auto; width:100%; max-width:1160px; justify-content:center; gap:24px">
              <Container id="m3h_feat_geom_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="m3h_feat_geom_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="m3h_feat_geom_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="m3h_feat_geom_icon" props={iconName: "Box", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="m3h_feat_geom_name_cell" style="height:auto; width:100%"><Text id="m3h_feat_geom_name" props={content: "Geometry is the scene", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="m3h_feat_geom_desc_cell" style="height:auto; width:100%"><Text id="m3h_feat_geom_desc" props={content: "Spheres, rings, knots and cones are declared directly — no model assets to prepare. One container is all it takes to go from nothing to depth.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="m3h_feat_track_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="m3h_feat_track_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="m3h_feat_track_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="m3h_feat_track_icon" props={iconName: "Orbit", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="m3h_feat_track_name_cell" style="height:auto; width:100%"><Text id="m3h_feat_track_name" props={content: "Trajectories are the motion", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="m3h_feat_track_desc_cell" style="height:auto; width:100%"><Text id="m3h_feat_track_desc" props={content: "Spin, bob, orbit and path are written on the node itself; scrolling can drive progress too, handing the assembly to the reader's wheel.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="m3h_feat_mix_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="m3h_feat_mix_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="m3h_feat_mix_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="m3h_feat_mix_icon" props={iconName: "Blend", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="m3h_feat_mix_name_cell" style="height:auto; width:100%"><Text id="m3h_feat_mix_name" props={content: "Models mix in", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="m3h_feat_mix_desc_cell" style="height:auto; width:100%"><Text id="m3h_feat_mix_desc" props={content: "A .glb model shares one coordinate space with primitives: group them into a whole, instance and reuse them, retint materials, then export the result back to a model.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
          </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Closing CTA ─── -->
      <Container id="m3h_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 48px 104px; scroll-margin-top:72px">
        <Container id="m3h_cta_card" style="height:auto; width:100%; max-width:1120px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="m3h_cta_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:64px 56px">
            <Container id="m3h_cta_title_cell" style="height:auto; width:auto"><Text id="m3h_cta_title" props={content: "Make your next page one people can spin", tagName: "h2"} style="height:auto; width:auto"/></Container>
            <Container id="m3h_cta_desc_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="m3h_cta_desc" props={content: "Copy this template and you have an interactive 3D hero: swap the copy and the palette, or trade the geometry for your own model — the first screen can ship today.", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="m3h_cta_btn_cell" style="height:auto; width:auto; padding-top:12px"><Button id="m3h_cta_btn" props={content: "Start building free", variant: "primary"} style="height:auto; width:auto; padding:13px 32px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="m3h_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="m3h_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:30px 48px 40px">
        <FlexContainer id="m3h_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px">
          <Container id="m3h_footer_brand_cell" style="height:auto; width:auto"><Text id="m3h_footer_brand" props={content: "PRISM Engine", tagName: "span"} style="height:auto; width:auto"/></Container>
          <Container id="m3h_footer_note_cell" style="height:auto; width:100%"><Text id="m3h_footer_note" props={content: "© 2026 PRISM Engine · demo template (brand and figures are fictional)", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Runtime camera switching: named cameras (isometric / top-down) — declarative actions, no code blocks
      @m3h_cam_iso_btn = {
        events: { handleIso: { trigger: "onClick", action: scene3d.setCamera({target: "m3h_scene", camera: "m3h_cam_iso"}) } }
      }
      @m3h_cam_top_btn = {
        events: { handleTop: { trigger: "onClick", action: scene3d.setCamera({target: "m3h_scene", camera: "m3h_cam_top"}) } }
      }
      # Declarative feedback (pure front-end actions, no endpoints)
      @m3h_hero_cta_primary = {
        events: { startBuild: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your workspace is ready: open the canvas and drop in a 3D scene"}) } }
      }
      @m3h_nav_cta = {
        events: { startBuild: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your workspace is ready: open the canvas and drop in a 3D scene"}) } }
      }
      @m3h_cta_btn = {
        events: { startBuild: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your workspace is ready: open the canvas and drop in a 3D scene"}) } }
      }
    </script>

    <styles>
      # 0. Deep-space base
      @m3h_root = { background: #070b14; }
      @m3h_nav_region = {
        background: rgba(7, 11, 20, 0.72);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(139, 92, 246, 0.14); }
      }
      @m3h_nav_word = { color: #e2e8f0; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @m3h_nav_menu = {
        :scope { --anchor-item-color: #94a3b8; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #c4b5fd; --anchor-item-active-bg: transparent; --anchor-gap: 34px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #c4b5fd; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #8b5cf6; }
      }
      @m3h_nav_cta = {
        color: #ffffff;
        background: linear-gradient(120deg, #7c3aed 0%, #6366f1 100%);
        border-radius: 999px;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 6px 18px rgba(124, 58, 237, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(124, 58, 237, 0.42); }
      }

      # 1. Hero
      @m3h_hero_region = {
        background: radial-gradient(120% 90% at 50% 0%, #14213d 0%, #0a1024 58%, #070b14 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -220px;
          width: 760px;
          height: 760px;
          border-radius: 50%;
          margin-left: -380px;
          background: radial-gradient(closest-side, rgba(139, 92, 246, 0.22), transparent 72%);
        }
      }
      @m3h_hero_eyebrow = { background-color: rgba(139, 92, 246, 0.16); color: #c4b5fd; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @m3h_hero_title = {
        font-size: 62px;
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -2px;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f8fafc 0%, #c4b5fd 46%, #67e8f9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @m3h_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.9; text-align: center; }
      @m3h_hero_cta_primary = {
        color: #ffffff;
        background: linear-gradient(120deg, #7c3aed 0%, #6366f1 115%);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0 10px 26px rgba(124, 58, 237, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(124, 58, 237, 0.42); }
      }
      @m3h_hero_cta_demo = {
        color: #cbd5f5;
        background: rgba(148, 163, 184, 0.08);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        :scope { border: 1px solid rgba(148, 163, 184, 0.26); transition: transform 0.22s ease, border-color 0.22s ease; }
        :scope:hover { transform: translateY(-2px); border-color: rgba(196, 181, 253, 0.6); }
      }

      # 2. 3D stage (outline + dot grid + inner highlight for the transparent WebGL canvas)
      @m3h_scene_cell = {
        border-radius: 28px;
        background: radial-gradient(90% 120% at 50% 8%, rgba(30, 41, 59, 0.85) 0%, rgba(7, 11, 20, 0.9) 68%);
        box-shadow: 0 34px 80px rgba(2, 6, 23, 0.6), inset 0 1px 0 rgba(148, 163, 184, 0.12);
        :scope { border: 1px solid rgba(139, 92, 246, 0.24); overflow: hidden; }
        :scope::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(148, 163, 184, 0.16) 1px, rgba(148, 163, 184, 0) 1px);
          background-size: 28px 28px;
          -webkit-mask-image: radial-gradient(120% 100% at 50% 20%, #000000 18%, transparent 74%);
          mask-image: radial-gradient(120% 100% at 50% 20%, #000000 18%, transparent 74%);
          pointer-events: none;
        }
      }
      @m3h_cam_hint = { color: #64748b; font-size: 13px; font-weight: 600; }
      @m3h_cam_iso_btn = {
        color: #c4b5fd;
        background: rgba(139, 92, 246, 0.12);
        border-radius: 999px;
        font-size: 13px;
        font-weight: 700;
        :scope { border: 1px solid rgba(139, 92, 246, 0.3); transition: background-color 0.2s ease; }
        :scope:hover { background-color: rgba(139, 92, 246, 0.22); }
      }
      @m3h_cam_top_btn = {
        color: #a5f3fc;
        background: rgba(34, 211, 238, 0.1);
        border-radius: 999px;
        font-size: 13px;
        font-weight: 700;
        :scope { border: 1px solid rgba(34, 211, 238, 0.3); transition: background-color 0.2s ease; }
        :scope:hover { background-color: rgba(34, 211, 238, 0.2); }
      }

      # 3. Capability cards
      @m3h_feature_region = { background: #070b14; }
      @m3h_feature_eyebrow = { color: #a78bfa; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @m3h_feature_title = { color: #f1f5f9; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @m3h_feat_geom_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 0.85) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(139, 92, 246, 0.2); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(196, 181, 253, 0.5); }
      }
      @m3h_feat_track_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 0.85) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(34, 211, 238, 0.2); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(103, 232, 249, 0.5); }
      }
      @m3h_feat_mix_cell = {
        background: linear-gradient(165deg, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 0.85) 100%);
        border-radius: 20px;
        :scope { border: 1px solid rgba(244, 114, 182, 0.2); transition: transform 0.28s ease, border-color 0.28s ease; }
        :scope:hover { transform: translateY(-6px); border-color: rgba(249, 168, 212, 0.5); }
      }
      @m3h_feat_geom_icon_cell = { background: linear-gradient(150deg, rgba(139, 92, 246, 0.24) 0%, rgba(99, 102, 241, 0.16) 100%); border-radius: 12px; }
      @m3h_feat_track_icon_cell = { background: linear-gradient(150deg, rgba(34, 211, 238, 0.22) 0%, rgba(14, 165, 233, 0.14) 100%); border-radius: 12px; }
      @m3h_feat_mix_icon_cell = { background: linear-gradient(150deg, rgba(244, 114, 182, 0.22) 0%, rgba(236, 72, 153, 0.14) 100%); border-radius: 12px; }
      @m3h_feat_geom_icon = { color: #c4b5fd; font-size: 30px; }
      @m3h_feat_track_icon = { color: #67e8f9; font-size: 30px; }
      @m3h_feat_mix_icon = { color: #f9a8d4; font-size: 30px; }
      @m3h_feat_geom_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @m3h_feat_track_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @m3h_feat_mix_name = { color: #f1f5f9; font-size: 19px; font-weight: 800; }
      @m3h_feat_geom_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @m3h_feat_track_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @m3h_feat_mix_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }

      # 4. Closing CTA
      @m3h_cta_card = {
        background: linear-gradient(120deg, #312e81 0%, #4338ca 44%, #7c3aed 76%, #0ea5e9 130%);
        border-radius: 28px;
        box-shadow: 0 30px 70px rgba(49, 46, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -150px; bottom: -180px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(closest-side, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0) 72%); }
      }
      @m3h_cta_title = { color: #ffffff; font-size: 36px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @m3h_cta_desc = { color: rgba(224, 231, 255, 0.92); font-size: 16px; line-height: 1.8; text-align: center; }
      @m3h_cta_btn = {
        color: #312e81;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.3); }
      }

      # 5. Footer
      @m3h_footer_divider = { background: rgba(148, 163, 184, 0.14); }
      @m3h_footer_brand = { color: #c4b5fd; font-size: 16px; font-weight: 800; }
      @m3h_footer_note = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Build notes: **zero assets** — the key visual is assembled from native geometry (sphere / ring / knot / cylinder), so the 3D capability shows without a single `.glb`; wiring in your own model is just adding `src` to a node or swapping in the `model3d` pattern. **Camera demo**: two named cameras (`m3h_cam_iso` / `m3h_cam_top`) live inside the scene and the buttons switch between them through `scene3d.setCamera` — a **session-level** capability (the schema is never written back), while the page's inherent direction still comes from the `camera` prop's initial value. **Scroll discipline**: the hero scene sets `enableZoom: false` (never hijacks page scrolling) and keeps drag-to-orbit; `autoRotate` is static in the editor canvas and live in preview / runtime, and stops entirely under `prefers-reduced-motion`. **Honest boundary**: a geometry scene has no poster image — the thumbnail face and no-WebGL environments show a placeholder, so generate one in the asset panel and fill in `poster` when you need a static cover.
