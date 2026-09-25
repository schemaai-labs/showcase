# Pinned narrative + parallax + layers — "Gatherlight", the journey of a beam

> Template role (interaction / motion tab): the advanced scroll-narrative trio — **pinned passage**
> (sticky travel plus banded scrub swaps) / **parallax decoration** (two light spots at different
> rates) / **layered cards** (pure CSS sticky stacking).
> Scenario: a brand-story long page: the hero enters, then the frame pins itself and swaps three
> acts by scroll progress (where light comes from / how it is shaped / where it lands, opaque layers
> replacing one another); a parallax band follows (two light spots drifting at different rates while
> the copy keeps page speed); then three staircase cards (material / craft / delivery) stack up as
> you scroll; a closing CTA. Dark base, every effect an enhancement (with zero motion the full long
> page is still intact).

```lang
<App dsl-version="0.3" name="Gatherlight · The Journey of a Beam">
  <Page id="pinned" name="Light Story" route="/">
    <FlexContainer id="pn_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Hero (one-shot entrance) ─── -->
      <Container id="pn_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <FlexContainer id="pn_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:center; gap:20px">
          <Container id="pn_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="pn_hero_eyebrow" props={content: "Gatherlight Studio · 2026 Light Programme", tagName: "span"} style="height:auto; width:auto"/></Container>
          <Container id="pn_hero_title_cell" style="height:auto; width:100%"><Text id="pn_hero_title" props={content: "The journey of a beam", tagName: "h1"} style="height:auto; width:100%"/></Container>
          <Container id="pn_hero_sub_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="pn_hero_sub" props={content: "Scroll on: the frame pins and changes scenes at your pace.", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Pinned narrative (travel container + sticky band + three layered acts) ─── -->
      <Container id="pn_trip" style="flex-shrink:0; flex-grow:0; height:300vh; width:100%; justify-content:flex-start; position:relative">
        <Container id="pn_band" style="height:100vh; left:0px; position:sticky; top:0px; width:100%">
          <Container id="pn_step_1" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_1_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_1_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_1_tag" props={text: "Act I · Where light comes from", color: "gold"}/></Container>
              <Container id="pn_step_1_title_cell" style="height:auto; width:100%"><Text id="pn_step_1_title" props={content: "First, a refraction", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_1_desc_cell" style="height:auto; width:100%"><Text id="pn_step_1_desc" props={content: "Through glass and dust it lays its first outline on a white wall — every design begins with that outline.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="pn_step_2" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_2_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_2_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_2_tag" props={text: "Act II · How it is shaped", color: "cyan"}/></Container>
              <Container id="pn_step_2_title_cell" style="height:auto; width:100%"><Text id="pn_step_2_title" props={content: "Then refined again and again", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_2_desc_cell" style="height:auto; width:100%"><Text id="pn_step_2_desc" props={content: "Colour temperature, angle, negative space — 27 drafts until it was both quiet and strong.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="pn_step_3" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_3_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_3_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_3_tag" props={text: "Act III · Where it lands", color: "green"}/></Container>
              <Container id="pn_step_3_title_cell" style="height:auto; width:100%"><Text id="pn_step_3_title" props={content: "Then it lands on your screen", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_3_desc_cell" style="height:auto; width:100%"><Text id="pn_step_3_desc" props={content: "By the time you read this line the beam has finished its journey — and started another.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </Container>
      </Container>

      <!-- ─── 3. Parallax band (dual-rate decoration + copy at page speed) ─── -->
      <Container id="pn_parallax_band" style="flex-shrink:0; flex-grow:0; height:580px; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <Container id="pn_glow_back" style="height:320px; width:320px; position:absolute; left:6%; top:10%"/>
        <Container id="pn_glow_front" style="height:200px; width:200px; position:absolute; right:8%; bottom:12%"/>
        <FlexContainer id="pn_parallax_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:center; gap:12px; position:relative">
          <Container id="pn_parallax_title_cell" style="height:auto; width:100%"><Text id="pn_parallax_title" props={content: "Slow background, steady text", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="pn_parallax_desc_cell" style="height:auto; width:100%"><Text id="pn_parallax_desc" props={content: "Two light spots drift with the scroll at different rates (0.35 with the page, -0.25 against it) while the copy always moves at page speed — readability first.", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Layered cards (pure CSS sticky stacking) ─── -->
      <Container id="pn_stack_head" style="flex-shrink:0; flex-grow:0; height:220px; width:100%; align-items:center; justify-content:center">
        <Text id="pn_stack_head_text" props={content: "Three words for how we deliver", tagName: "h2"} style="height:auto; width:auto"/>
      </Container>
      <Container id="pn_card_material_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:28px">
        <Container id="pn_card_material_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_material_text" props={content: "01 · Material: only colours that survive print", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_card_craft_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:52px">
        <Container id="pn_card_craft_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_craft_text" props={content: "02 · Craft: the discipline of grid and negative space", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_card_deliver_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:76px">
        <Container id="pn_card_deliver_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_deliver_text" props={content: "03 · Delivery: source files, guidelines and support", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_stack_tail" style="flex-shrink:0; flex-grow:0; height:480px; width:100%; align-items:center; justify-content:center">
        <Text id="pn_stack_tail_text" props={content: "The cards pin and stack one on another — pure CSS, zero JavaScript.", tagName: "p"} style="height:auto; width:auto"/>
      </Container>

      <!-- ─── 5. Close ─── -->
      <Container id="pn_outro_band" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; align-items:center; justify-content:center">
        <FlexContainer id="pn_outro_col" props={direction: "column"} style="height:auto; width:100%; max-width:720px; align-items:center; gap:14px">
          <Container id="pn_outro_title_cell" style="height:auto; width:100%"><Text id="pn_outro_title" props={content: "Give your brand its own beam", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="pn_outro_btn_cell" style="height:auto; width:auto; padding-top:8px"><Button id="pn_outro_btn" props={content: "Book a brand consult", variant: "primary"} style="height:auto; width:auto; padding:13px 34px"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="pn_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="pn_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:26px 48px 36px">
        <Text id="pn_footer_text" props={content: "© 2026 Gatherlight Studio · Demo template (brand and data are fictional)", tagName: "p"} style="height:auto; width:100%"/>
      </Container>
    </FlexContainer>

    <script>
      # Hero entrance, once (the pinned band's first frame is what the viewport shows — no hero scrub)
      @pn_hero_band = {
        events: { heroIn: { trigger: "onMount", action: motion.play({targets: ["pn_hero_eyebrow", "pn_hero_title", "pn_hero_sub"], effect: "fadeInUp", stagger: 110, duration: "slow"}) } }
      }
      # Three acts: one shared travel source (pn_trip), banded progress windows, opaque layer swaps (reversible)
      @pn_band = {
        events: {
          step1: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_1"], source: "pn_trip", range: "element", effect: "fadeInUp", start: 0, end: 0.3}) },
          step2: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_2"], source: "pn_trip", range: "element", effect: "fadeInUp", start: 0.35, end: 0.65}) },
          step3: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_3"], source: "pn_trip", range: "element", effect: "scaleIn", start: 0.7, end: 1}) }
        }
      }
      # Parallax: decoration layers only (two rates; the copy keeps page speed)
      @pn_parallax_band = {
        events: {
          glowBack: { trigger: "onMount", action: motion.parallax({targets: ["pn_glow_back"], speed: 0.35}) },
          glowFront: { trigger: "onMount", action: motion.parallax({targets: ["pn_glow_front"], speed: -0.25}) }
        }
      }
      @pn_outro_btn = {
        events: { consult: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Request received: a brand consultant will be in touch within one working day"}) } }
      }
    </script>

    <styles>
      # 0. Dark base
      @pn_root = { background: #0b1220; }
      @pn_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #14213d 0%, #0b1220 62%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -180px;
          width: 680px;
          height: 680px;
          border-radius: 50%;
          margin-left: -340px;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.14), transparent 72%);
        }
      }
      @pn_hero_eyebrow = { color: #d4af37; font-size: 14px; font-weight: 700; letter-spacing: 4px; }
      # 76px → 72px: "The journey of a beam" is 21 Latin glyphs against 7 CJK, and it measured 799px
      # inside the 900px column at 76px — only 100px of air left. 72px brings it back to ~757px.
      @pn_hero_title = {
        font-size: 72px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.1;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 52%, #9db8ab 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @pn_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.7; text-align: center; }

      # 1. Pinned band (each act carries an opaque ground)
      @pn_band = { background: #0b1220; }
      @pn_step_1 = { background: #0b1220; }
      @pn_step_2 = { background: #0f1c33; }
      @pn_step_3 = { background: #122040; }
      @pn_step_1_tag = { background-color: rgba(212, 175, 55, 0.16); color: #d4af37; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pn_step_2_tag = { background-color: rgba(34, 211, 238, 0.14); color: #67e8f9; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pn_step_3_tag = { background-color: rgba(52, 211, 153, 0.14); color: #6ee7b7; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # 52px → 46px: the act headlines are 20–29 Latin glyphs against 7 CJK characters, and the copy
      # column is 820px wide (29 glyphs at 52px ≈ 784px — no headroom left for the centred line).
      @pn_step_1_title = { color: #f1f5f9; font-size: 46px; font-weight: 900; letter-spacing: -1.2px; text-align: center; }
      @pn_step_2_title = { color: #f1f5f9; font-size: 46px; font-weight: 900; letter-spacing: -1.2px; text-align: center; }
      @pn_step_3_title = { color: #f1f5f9; font-size: 46px; font-weight: 900; letter-spacing: -1.2px; text-align: center; }
      @pn_step_1_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; text-align: center; }
      @pn_step_2_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; text-align: center; }
      @pn_step_3_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; text-align: center; }

      # 2. Parallax band (decoration gets the light spots, nothing else)
      @pn_parallax_band = { background: #0d1930; }
      @pn_glow_back = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(34, 211, 238, 0.2), transparent 72%);
      }
      @pn_glow_front = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(212, 175, 55, 0.22), transparent 70%);
      }
      @pn_parallax_title = { color: #f1f5f9; font-size: 36px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pn_parallax_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; text-align: center; }

      # 3. Layered cards
      @pn_stack_head_text = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @pn_card_material_cell = { background: #101d38; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(129, 140, 248, 0.2); } }
      @pn_card_craft_cell = { background: #16264a; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(34, 211, 238, 0.2); } }
      @pn_card_deliver_cell = { background: #1c2f5c; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(212, 175, 55, 0.24); } }
      # 34px → 30px: these lines are absolutely positioned at left:64px with width:auto, so a long
      # English line has nothing to wrap against — it would run off the card (the longest is ~53 glyphs).
      @pn_card_material_text = { color: #c7d2fe; font-size: 30px; font-weight: 900; letter-spacing: -0.8px; }
      @pn_card_craft_text = { color: #a5f3fc; font-size: 30px; font-weight: 900; letter-spacing: -0.8px; }
      @pn_card_deliver_text = { color: #f5e6b8; font-size: 30px; font-weight: 900; letter-spacing: -0.8px; }
      @pn_stack_tail_text = { color: #64748b; font-size: 16px; text-align: center; }

      # 4. Close
      @pn_outro_band = { background: #0b1220; }
      # 40px kept: "Give your brand its own beam" is ~29 glyphs ≈ 603px inside the 720px column.
      @pn_outro_title = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pn_outro_btn = {
        color: #101d18;
        background: linear-gradient(120deg, #f5e6b8 0%, #d4af37 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(212, 175, 55, 0.3); }
      }
      @pn_footer_divider = { background: rgba(148, 163, 184, 0.14); }
      @pn_footer_text = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Production notes: the trio's discipline (rule 17) — the travel container is **explicitly
> `justify-content: flex-start`** and lives in the same parent-child pair as the sticky band, with
> **no overflow/transform on any ancestor**; the three acts share one `source` and use banded windows
> (0→0.3 / 0.35→0.65 / 0.7→1) with **opaque grounds** replacing one another (scrub has no fade-out
> phase); parallax goes to **decoration only** (copy keeps page speed, and one element never carries
> both parallax and scrub); the layered cards are pure CSS (ascending top offsets + DOM order +
> at least one screen of tail space).

## Production notes

**Two lines needed real geometry work (2026-09-25)**: the act headlines and the stacked-card titles.
Both are cases where English is simply longer than the Chinese and there is a hard edge nearby.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Act headlines | 52px, 1 line each | **46px** | "Then refined again and again" is 29 Latin glyphs and measured 633px at 46px (~716px at the original 52px) inside an 820px column with a centred line — too little headroom |
| Stacked-card titles | 34px | **30px** | These are absolutely positioned at `left:64px` with `width:auto`, so nothing wraps them if a fallback font runs wider: the longest ("02 · Craft: the discipline of grid and negative space") measured 721px at 30px (~817px at 34px) inside the 1280px card minus the 64px inset |
| Hero title | 76px | **72px** | "The journey of a beam" is 21 Latin glyphs against 7 CJK; at 76px it measured 799px inside the 900px column (89% full), so it came down one step to 72px (measured 755px) for the margins the Chinese line had |
| Hero / act / parallax body copy | leading 1.9–2.0 | **1.7** | Latin does not need CJK leading. The act-2 description first came out at 114 glyphs — exactly the wrap point of the 820px column — and broke with a one-word orphan ("strong."); trimmed to 87 glyphs it sits on one line, matching the Chinese acts |
| Stack head / outro headline | 40px | 40px (kept) | "Three words for how we deliver" measured 596px in a full-width band; "Give your brand its own beam" measured 562px inside the 720px column |

**Copy policy** — not literal: `拾光设计` → Gatherlight Studio; `一束光的旅程` → "The journey of a
beam"; the three tags `第一幕 · 光从何来 / 第二幕 · 如何被塑造 / 第三幕 · 抵达何处` → "Act I · Where
light comes from / Act II · How it is shaped / Act III · Where it lands"; `陪跑` (running alongside
the client) → "support". Numbers and the 0.35 / -0.25 parallax speeds are carried over untouched.

**Node ids are identical to the Chinese version** — including the pinned travel container `pn_trip`,
which the scrub windows depend on, so capability checks address either document the same way.
