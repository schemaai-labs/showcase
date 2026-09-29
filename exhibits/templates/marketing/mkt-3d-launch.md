# 3D Product Launch (Model + Primitives) — POLYGO One Desktop Toy

> Template position (Marketing / Growth tab): a **launch page where a model and native geometry share one scene** — the key visual carries the product itself as a `.glb` model while the plinth, halo ring and satellite are native primitives that dress the staging for free; a mid-page band shows a **scroll-driven assembly** (a part flies in along its trajectory), demonstrating "hand the trajectory progress to the reader's wheel".
> Brief: a launch page for a fictional desktop companion toy, "POLYGO One": light canvas with a dark stage card; hero with copy on the left (launch tag, oversized headline, two CTAs, three selling points) and the 3D stage on the right; then a dark assembly band (scroll to the point where the part docks, reversible); three detail cards and a four-item spec strip; a preorder CTA and footer. Two motion choreographies (hero onMount / cards onView) plus one 3D scroll trajectory, no API. **Asset-driven**: the model uses a platform asset-library reference (`assets/models/low-poly-model.glb`, seeded into the app's asset library when the app is created).

```lang
<App dsl-version="0.3" name="POLYGO One — 3D Product Launch">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="pg_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (light glass, sticky) ─── -->
      <Container id="pg_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="pg_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:15px 52px">
          <Container id="pg_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="pg_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="pg_nav_mark_cell" style="height:26px; width:26px; flex-shrink:0">
                <Svg id="pg_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26' fill='none'><path d='M13 2 L23 8 L23 18 L13 24 L3 18 L3 8 Z' stroke='#0f172a' stroke-width='1.4'/><path d='M13 8 L18 11 L18 15 L13 18 L8 15 L8 11 Z' fill='#7c3aed'/></svg>", ariaLabel: "POLYGO logo"} style="height:26px; width:26px"/>
              </Container>
              <Container id="pg_nav_word_cell" style="height:auto; width:auto">
                <Text id="pg_nav_word" props={content: "POLYGO", tagName: "span"} style="height:auto; width:auto"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="pg_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="pg_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="pg_nav_item_hero" props={itemLabel: "Launch", itemTarget: "pg_hero_region"} style="height:auto; width:auto"/>
              <Container id="pg_nav_item_dock" props={itemLabel: "Assembly", itemTarget: "pg_dock_region"} style="height:auto; width:auto"/>
              <Container id="pg_nav_item_spec" props={itemLabel: "Specs", itemTarget: "pg_spec_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="pg_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Button id="pg_nav_cta" props={content: "Preorder now", variant: "primary"} style="height:auto; width:auto; padding:9px 22px"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (copy + 3D stage: model with primitives) ─── -->
      <Container id="pg_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:72px">
        <Animate id="pg_hero_row" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; max-width:1280px; margin-left:auto; margin-right:auto; padding:68px 56px 84px; position:relative; gap:56px; align-items:center">
          <Container id="pg_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="pg_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="pg_hero_tag_cell" style="height:auto; width:auto">
                <Tag id="pg_hero_tag" props={text: "Spring 2026 launch · first 2,000 units", color: "purple"}/>
              </Container>
              <Container id="pg_hero_title_cell" style="height:auto; width:auto"><Text id="pg_hero_title" props={content: "Put a designer toy on your desk", tagName: "h1"} style="height:auto; width:auto"/></Container>
              <Container id="pg_hero_desc_cell" style="height:auto; width:100%; max-width:540px"><Text id="pg_hero_desc" props={content: "A low-poly body, a magnetic dock and voice wake-up — POLYGO One turns a 3D collectible into a desk companion that glows and turns toward you.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="pg_hero_actions_cell" style="height:auto; width:auto; padding-top:8px">
                <FlexContainer id="pg_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
                  <Container id="pg_hero_buy_cell" style="height:auto; width:auto"><Button id="pg_hero_buy" props={content: "Preorder POLYGO One", variant: "primary"} style="height:auto; width:auto; padding:14px 32px"/></Container>
                  <Container id="pg_hero_ghost_cell" style="height:auto; width:auto"><Button id="pg_hero_ghost" props={content: "See the assembly", variant: "default"} style="height:auto; width:auto; padding:14px 28px"/></Container>
                </FlexContainer>
              </Container>
              <Container id="pg_hero_params_cell" style="height:auto; width:auto; padding-top:12px">
                <FlexContainer id="pg_hero_params_row" props={direction: "row"} style="height:auto; width:auto; gap:34px; align-items:center">
                  <Container id="pg_hero_p1_cell" style="height:auto; width:auto"><Text id="pg_hero_p1" props={content: "Magnetic dock", tagName: "span"} style="height:auto; width:auto"/></Container>
                  <Container id="pg_hero_p2_cell" style="height:auto; width:auto"><Text id="pg_hero_p2" props={content: "Voice wake-up", tagName: "span"} style="height:auto; width:auto"/></Container>
                  <Container id="pg_hero_p3_cell" style="height:auto; width:auto"><Text id="pg_hero_p3" props={content: "30-day battery", tagName: "span"} style="height:auto; width:auto"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="pg_hero_stage_cell" style="height:auto; width:560px; flex-shrink:0">
            <Container id="pg_hero_stage" style="height:540px; width:100%; position:relative; overflow:hidden">
              <Scene3d id="pg_hero_scene" props={visible: true, objects: [{ kind: "model", id: "pg_hero_model", src: "assets/models/low-poly-model.glb", position: [0, -0.08, 0] }, { kind: "cylinder", id: "pg_plinth", radius: 1.05, height: 0.16, position: [0, -1.16, 0], finish: "metal", color: "#1e293b" }, { kind: "torus", id: "pg_halo", radius: 1.6, tube: 0.018, rotation: [80, 0, 6], finish: "matte", color: "#38bdf8" }, { kind: "sphere", id: "pg_sat", radius: 0.12, finish: "gloss", color: "#fbbf24", animation: { type: "orbit", radius: 1.6, speed: "slow", tilt: 16, phase: 0.15 } }], lighting: "studio", background: "dark", camera: "auto", autoRotate: true, rotateSpeed: "slow", enableZoom: false} style="height:100%; width:100%"/>
              <Container id="pg_hero_stage_badge_cell" style="height:auto; width:auto; position:absolute; left:22px; top:20px; z-index:2">
                <Container id="pg_hero_stage_badge" style="height:auto; width:236px; padding:8px 14px">
                  <Text id="pg_hero_stage_badge_txt" props={content: "Drag to orbit · auto-rotating", tagName: "span"} style="height:auto; width:auto"/>
                </Container>
              </Container>
              <Container id="pg_hero_stage_id_cell" style="height:auto; width:auto; position:absolute; right:22px; bottom:18px; z-index:2">
                <Container id="pg_hero_stage_id" style="height:auto; width:auto; padding:8px 14px">
                  <Text id="pg_hero_stage_id_txt" props={content: "POLYGO One · low-poly body", tagName: "span"} style="height:auto; width:auto"/>
                </Container>
              </Container>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Assembly band (scroll-driven trajectory) ─── -->
      <FlexContainer id="pg_dock_region" props={direction: "column"} style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; scroll-margin-top:72px">
        <Container id="pg_dock_head_cell" style="height:auto; width:100%; padding:76px 56px 30px">
          <FlexContainer id="pg_dock_head_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; margin-left:auto; margin-right:auto; align-items:center; gap:12px">
            <Container id="pg_dock_eyebrow_cell" style="height:auto; width:auto"><Text id="pg_dock_eyebrow" props={content: "Assembly demo", tagName: "span"} style="height:auto; width:auto"/></Container>
            <Container id="pg_dock_title_cell" style="height:auto; width:100%"><Text id="pg_dock_title" props={content: "Scroll to where the part docks", tagName: "h2"} style="height:auto; width:100%"/></Container>
            <Container id="pg_dock_desc_cell" style="height:auto; width:100%"><Text id="pg_dock_desc" props={content: "The docking pod's progress along its trajectory is bound to your scroll position — scroll down and it approaches, scroll back and it retreats, entirely at your pace.", tagName: "p"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
        <Container id="pg_dock_scene_cell" style="height:auto; width:100%; padding:0px 56px 84px">
          <Container id="pg_dock_frame" style="height:480px; width:100%; max-width:1180px; margin-left:auto; margin-right:auto; position:relative; overflow:hidden">
            <Scene3d id="pg_dock_scene" props={visible: true, objects: [{ kind: "def", id: "pg_sensor_def", children: [{ kind: "box", id: "cube", size: [0.42, 0.42, 0.42], finish: "gloss", color: "#38bdf8" }, { kind: "sphere", id: "lamp", radius: 0.12, position: [0, 0.4, 0], finish: "matte", color: "#fbbf24" }] }, { kind: "cylinder", id: "pg_dock_pad", radius: 0.72, height: 0.1, position: [0, -0.8, 0], finish: "gloss", color: "#475569" }, { kind: "torus", id: "pg_track_ring", radius: 2.1, tube: 0.04, finish: "matte", color: "#64748b" }, { kind: "ref", id: "pg_sensor_a", ref: "pg_sensor_def", position: [2.1, 0, 0] }, { kind: "ref", id: "pg_sensor_b", ref: "pg_sensor_def", position: [-2.1, 0, 0], overrides: [{ id: "cube", patch: { color: "#f472b6" } }] }, { kind: "group", id: "pg_dock_pod", animation: { type: "path", points: [[-2.6, 1.5, 0], [0, 0.12, 0]], speed: "slow", loopMode: "once", faceTangent: true }, children: [{ kind: "box", size: [1.3, 0.6, 0.6], finish: "metal" }, { kind: "cone", radius: 0.34, height: 0.56, rotation: [0, 0, -90], position: [0.96, 0, 0], finish: "gloss", color: "#7c3aed" }, { kind: "box", size: [0.46, 0.14, 0.88], position: [-0.18, 0, 0], finish: "matte", color: "#94a3b8" }] }], lighting: "dramatic", background: "dark", camera: "front", autoRotate: false, enableZoom: false} style="height:100%; width:100%"/>
          </Container>
        </Container>
      </FlexContainer>

      <!-- ─── 4. Detail cards (revealed on view) + spec strip ─── -->
      <Container id="pg_spec_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:84px 56px 96px; scroll-margin-top:72px">
        <FlexContainer id="pg_spec_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px">
          <Container id="pg_spec_head_cell" style="height:auto; width:auto">
            <FlexContainer id="pg_spec_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="pg_spec_eyebrow_cell" style="height:auto; width:auto"><Text id="pg_spec_eyebrow" props={content: "Product details", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="pg_spec_title_cell" style="height:auto; width:auto"><Text id="pg_spec_title" props={content: "A small machine for a small desk", tagName: "h2"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="pg_spec_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="pg_spec_reveal" props={direction: "row", effect: "scaleIn", trigger: "onView", stagger: 90} style="height:auto; width:100%; max-width:1100px; justify-content:center; gap:24px">
              <Container id="pg_spec_body_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="pg_spec_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:30px 26px">
                  <Container id="pg_spec_body_icon_cell" style="height:44px; width:44px; flex-shrink:0"><Icon id="pg_spec_body_icon" props={iconName: "Cpu", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="pg_spec_body_name_cell" style="height:auto; width:100%"><Text id="pg_spec_body_name" props={content: "One-piece body", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="pg_spec_body_desc_cell" style="height:auto; width:100%"><Text id="pg_spec_body_desc" props={content: "The low-poly shell and frame are moulded as one piece, and the ball joint re-aims freely — the desk position never has to compromise the pose.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="pg_spec_dock_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="pg_spec_dock_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:30px 26px">
                  <Container id="pg_spec_dock_icon_cell" style="height:44px; width:44px; flex-shrink:0"><Icon id="pg_spec_dock_icon" props={iconName: "Magnet", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="pg_spec_dock_name_cell" style="height:auto; width:100%"><Text id="pg_spec_dock_name" props={content: "Magnetic dock", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="pg_spec_dock_desc_cell" style="height:auto; width:100%"><Text id="pg_spec_dock_desc" props={content: "Set it down and it snaps into alignment and starts charging; lift it and the power cuts. The dock itself is a display stand with swappable artwork.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="pg_spec_voice_cell" style="height:auto; width:330px; flex-shrink:0">
                <FlexContainer id="pg_spec_voice_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:30px 26px">
                  <Container id="pg_spec_voice_icon_cell" style="height:44px; width:44px; flex-shrink:0"><Icon id="pg_spec_voice_icon" props={iconName: "AudioLines", iconSource: "lucide"} style="height:auto; width:auto"/></Container>
                  <Container id="pg_spec_voice_name_cell" style="height:auto; width:100%"><Text id="pg_spec_voice_name" props={content: "Voice wake-up", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="pg_spec_voice_desc_cell" style="height:auto; width:100%"><Text id="pg_spec_voice_desc" props={content: "A four-mic ring hears you and the head turns toward the sound; the wake-word model runs offline and your voice never leaves the device.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </Animate>
          </Container>
          <Container id="pg_spec_strip_cell" style="height:auto; width:100%; justify-content:center">
            <FlexContainer id="pg_spec_strip" props={direction: "row"} style="height:auto; width:100%; max-width:1100px; justify-content:center; align-items:center; gap:56px; padding:22px 30px">
              <Container id="pg_spec_s1_cell" style="height:auto; width:auto"><Text id="pg_spec_s1" props={content: "96 × 96 × 148 mm", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="pg_spec_s2_cell" style="height:auto; width:auto"><Text id="pg_spec_s2" props={content: "380 g", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="pg_spec_s3_cell" style="height:auto; width:auto"><Text id="pg_spec_s3" props={content: "30-day battery", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="pg_spec_s4_cell" style="height:auto; width:auto"><Text id="pg_spec_s4" props={content: "USB-C + magnetic charging", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Preorder CTA ─── -->
      <Container id="pg_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 56px 104px">
        <Container id="pg_cta_card" style="height:auto; width:100%; max-width:1100px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="pg_cta_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:60px 56px">
            <Container id="pg_cta_title_cell" style="height:auto; width:auto"><Text id="pg_cta_title" props={content: "First 2,000 units — preorder locks the $69 early price", tagName: "h2"} style="height:auto; width:auto"/></Container>
            <Container id="pg_cta_desc_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="pg_cta_desc" props={content: "Shipping starts 18 March, with a set of dock artwork stickers in the box. No payment now — you confirm by SMS seven days before dispatch.", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="pg_cta_btn_cell" style="height:auto; width:auto; padding-top:12px"><Button id="pg_cta_btn" props={content: "Preorder POLYGO One", variant: "primary"} style="height:auto; width:auto; padding:14px 34px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="pg_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="pg_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:30px 56px 40px">
        <FlexContainer id="pg_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px">
          <Container id="pg_footer_brand_cell" style="height:auto; width:auto"><Text id="pg_footer_brand" props={content: "POLYGO · desktop toy lab", tagName: "span"} style="height:auto; width:auto"/></Container>
          <Container id="pg_footer_note_cell" style="height:auto; width:100%"><Text id="pg_footer_note" props={content: "© 2026 POLYGO · demo template (brand and figures are fictional; the 3D model ships with the platform asset library)", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Scroll-driven assembly: the docking pod's trajectory progress is bound to scrolling (default viewport range: it advances as the scene enters the viewport, reversible)
      @pg_dock_scene = {
        events: { bindDock: { trigger: "onMount", action: scene3d.scrub({target: "pg_dock_scene", objectId: "pg_dock_pod", rhythm: "standard"}) } }
      }
      # Declarative feedback (pure front-end actions, no endpoints)
      @pg_hero_buy = {
        events: { preorder: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Preordered: you'll get an SMS confirmation seven days before dispatch"}) } }
      }
      @pg_nav_cta = {
        events: { preorder: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Preordered: you'll get an SMS confirmation seven days before dispatch"}) } }
      }
      @pg_cta_btn = {
        events: { preorder: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Preordered: you'll get an SMS confirmation seven days before dispatch"}) } }
      }
    </script>

    <styles>
      # 0. Light base
      @pg_root = { background: #f7f8fc; }
      @pg_nav_region = {
        background: rgba(247, 248, 252, 0.8);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(15, 23, 42, 0.06); }
      }
      @pg_nav_word = { color: #0f172a; font-size: 17px; font-weight: 900; letter-spacing: 2px; }
      @pg_nav_menu = {
        :scope { --anchor-item-color: #475569; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #7c3aed; --anchor-item-active-bg: transparent; --anchor-gap: 34px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #7c3aed; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #7c3aed; }
      }
      @pg_nav_cta = {
        color: #ffffff;
        background: #0f172a;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 700;
        :scope { transition: transform 0.2s ease, background-color 0.2s ease; }
        :scope:hover { transform: translateY(-1px); background-color: #7c3aed; }
      }

      # 1. Hero
      @pg_hero_region = {
        background: linear-gradient(180deg, #ffffff 0%, #f2f0ff 62%, #f7f8fc 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -180px;
          top: -160px;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(124, 58, 237, 0.14), transparent 72%);
        }
      }
      @pg_hero_tag = { background-color: #f3e8ff; color: #7c3aed; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pg_hero_title = { color: #0f172a; font-size: 56px; font-weight: 900; line-height: 1.14; letter-spacing: -2px; }
      @pg_hero_desc = { color: #475569; font-size: 16px; line-height: 1.95; }
      @pg_hero_p1 = { color: #64748b; font-size: 14px; font-weight: 600; }
      @pg_hero_p2 = { color: #64748b; font-size: 14px; font-weight: 600; }
      @pg_hero_p3 = { color: #64748b; font-size: 14px; font-weight: 600; }
      @pg_hero_buy = {
        color: #ffffff;
        background: linear-gradient(120deg, #7c3aed 0%, #6d28d9 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0 12px 28px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(124, 58, 237, 0.38); }
      }
      @pg_hero_ghost = {
        color: #1e293b;
        background: #ffffff;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 700;
        :scope { border: 1px solid rgba(15, 23, 42, 0.14); transition: transform 0.22s ease, border-color 0.22s ease; }
        :scope:hover { transform: translateY(-2px); border-color: rgba(124, 58, 237, 0.5); }
      }
      @pg_hero_stage = {
        border-radius: 26px;
        background: radial-gradient(95% 120% at 50% 10%, #1e293b 0%, #0b1220 70%);
        box-shadow: 0 30px 70px rgba(15, 23, 42, 0.24), inset 0 1px 0 rgba(148, 163, 184, 0.16);
        :scope { border: 1px solid rgba(124, 58, 237, 0.28); }
      }
      @pg_hero_stage_badge = { background: rgba(15, 23, 42, 0.62); border-radius: 999px; :scope { border: 1px solid rgba(148, 163, 184, 0.24); } }
      @pg_hero_stage_badge_txt = { color: #cbd5e1; font-size: 12px; font-weight: 600; }
      @pg_hero_stage_id = { background: rgba(15, 23, 42, 0.62); border-radius: 999px; :scope { border: 1px solid rgba(148, 163, 184, 0.24); } }
      @pg_hero_stage_id_txt = { color: #c4b5fd; font-size: 12px; font-weight: 700; }

      # 2. Assembly band
      @pg_dock_region = {
        background: linear-gradient(180deg, #0b1220 0%, #131c33 60%, #0b1220 100%);
        :scope { margin-top: 8px; }
      }
      @pg_dock_eyebrow = { color: #a78bfa; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @pg_dock_title = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pg_dock_desc = { color: #94a3b8; font-size: 16px; line-height: 1.95; text-align: center; }
      @pg_dock_frame = {
        border-radius: 26px;
        background: radial-gradient(90% 120% at 50% 30%, rgba(51, 65, 85, 0.5) 0%, rgba(11, 18, 32, 0.9) 70%);
        box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.14);
        :scope { border: 1px solid rgba(124, 58, 237, 0.22); }
      }

      # 3. Detail cards and spec strip
      @pg_spec_region = { background: #f7f8fc; }
      @pg_spec_eyebrow = { color: #7c3aed; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @pg_spec_title = { color: #0f172a; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @pg_spec_body_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
        :scope { border: 1px solid #eceefa; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09); }
      }
      @pg_spec_dock_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
        :scope { border: 1px solid #eceefa; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09); }
      }
      @pg_spec_voice_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
        :scope { border: 1px solid #eceefa; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09); }
      }
      @pg_spec_body_icon_cell = { background: linear-gradient(150deg, #ede9fe 0%, #ddd6fe 100%); border-radius: 12px; }
      @pg_spec_dock_icon_cell = { background: linear-gradient(150deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 12px; }
      @pg_spec_voice_icon_cell = { background: linear-gradient(150deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; }
      @pg_spec_body_icon = { color: #7c3aed; font-size: 28px; }
      @pg_spec_dock_icon = { color: #0284c7; font-size: 28px; }
      @pg_spec_voice_icon = { color: #d97706; font-size: 28px; }
      @pg_spec_body_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @pg_spec_dock_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @pg_spec_voice_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @pg_spec_body_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @pg_spec_dock_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @pg_spec_voice_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @pg_spec_strip = { background: #ffffff; border-radius: 18px; :scope { border: 1px solid #eceefa; } }
      @pg_spec_s1 = { color: #475569; font-size: 14px; font-weight: 700; }
      @pg_spec_s2 = { color: #475569; font-size: 14px; font-weight: 700; }
      @pg_spec_s3 = { color: #475569; font-size: 14px; font-weight: 700; }
      @pg_spec_s4 = { color: #475569; font-size: 14px; font-weight: 700; }

      # 4. Preorder CTA
      @pg_cta_card = {
        background: linear-gradient(120deg, #1e1b4b 0%, #4c1d95 52%, #7c3aed 100%);
        border-radius: 28px;
        box-shadow: 0 30px 66px rgba(76, 29, 149, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.18);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -130px; top: -160px; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -150px; bottom: -190px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(closest-side, rgba(56, 189, 248, 0.36), rgba(56, 189, 248, 0) 72%); }
      }
      @pg_cta_title = { color: #ffffff; font-size: 34px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pg_cta_desc = { color: rgba(226, 232, 240, 0.9); font-size: 16px; line-height: 1.8; text-align: center; }
      @pg_cta_btn = {
        color: #4c1d95;
        background: #ffffff;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.3); }
      }

      # 5. Footer
      @pg_footer_divider = { background: rgba(15, 23, 42, 0.08); }
      @pg_footer_brand = { color: #4c1d95; font-size: 16px; font-weight: 800; }
      @pg_footer_note = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Build notes: **model plus primitives** — the `.glb` model is the subject while the plinth, halo ring and satellite are native primitives dressing the staging for free (the model is centred and normalized to 2 units, so the plinth's `position` is what lines it up); swapping products means changing `src` and the copy. **Scroll assembly**: `scene3d.scrub` binds on declaration (`objectId` must carry a trajectory); the default `viewport` range advances as the scene enters the viewport and reverses when you scroll back — one scrub per page, since scrolling is user intent. **Instance reuse**: the two sensor units in the band come from one `def` blueprint (`ref` instances with an `overrides` recolour) — edit the blueprint and both change. **Presentation faces**: the editor canvas shows a static first frame (`autoRotate` stays still), preview and runtime rotate; the hero scene sets `enableZoom: false` so the wheel never hijacks the page. **Honest boundary**: the model loads asynchronously, so the primitive staging renders first; for a static cover, generate one in the asset panel and fill in `poster`.
