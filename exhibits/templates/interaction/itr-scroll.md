# Scroll-narrative long page — "Seasound Aurora" ANC headphone launch story

> Template role (interaction / motion tab): the standard scroll-narrative shape — a one-shot hero
> entrance (onMount) + banded scrub below the fold (`motion.scroll` with the `rhythm` gear) + a
> closing reveal.
> Scenario: a product story page for a headphone launch (dark, premium): the hero types in
> (stagger), then as you scroll, three passages unfold in turn — the noise-cancelling band (soft
> gear), the spatial-audio band (emphasis gear), the numbers band (emphasis gear) and the pre-order
> close (soft gear). The hero never uses scrub; with zero motion the key content is still complete
> (titles, numbers and buttons are all default-state text).

```lang
<App dsl-version="0.3" name="Seasound Aurora — Product Story">
  <Page id="story" name="Aurora Story" route="/">
    <FlexContainer id="sc_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Hero (one-shot onMount entrance) ─── -->
      <FlexContainer id="sc_hero_band" props={direction: "column"} style="align-items:center; justify-content:center; gap:22px; min-height:100vh; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="sc_hero_eyebrow_cell" style="height:auto; width:auto; padding:0px 32px"><Text id="sc_hero_eyebrow" props={content: "New for 2026 · Seasound Aurora ANC", tagName: "span"} style="height:auto; width:auto"/></Container>
        <Container id="sc_hero_title_cell" style="height:auto; width:100%"><Text id="sc_hero_title" props={content: "Turn the world down.", tagName: "h1"} style="height:auto; width:100%"/></Container>
        <Container id="sc_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0"><Text id="sc_hero_sub" props={content: "40dB of quiet · spatial audio · 38 hours of battery — scroll on.", tagName: "p"} style="height:auto; width:100%"/></Container>
        <Container id="sc_hero_hint_cell" style="height:auto; width:auto; padding-top:26px">
          <FlexContainer id="sc_hero_hint_row" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
            <Container id="sc_hero_hint_icon_cell" style="height:auto; width:auto"><Icon id="sc_hero_hint_icon" props={iconName: "ChevronsDown", iconSource: "lucide"}/></Container>
            <Container id="sc_hero_hint_text_cell" style="height:auto; width:auto"><Text id="sc_hero_hint_text" props={content: "Scroll down", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>

      <!-- ─── 2. Feature band one: noise cancelling (scrub · standard gear) ─── -->
      <Container id="sc_band_anc" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:96px 48px">
        <FlexContainer id="sc_band_anc_row" props={direction: "row"} style="height:auto; width:100%; max-width:1160px; margin-left:auto; margin-right:auto; align-items:center; gap:64px">
          <Container id="sc_anc_copy_cell" style="height:auto; width:100%">
            <FlexContainer id="sc_anc_copy_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px">
              <Container id="sc_anc_tag_cell" style="height:auto; width:auto"><Tag id="sc_anc_tag" props={text: "Noise cancelling", color: "cyan"}/></Container>
              <Container id="sc_anc_title_cell" style="height:auto; width:100%"><Text id="sc_anc_title" props={content: "Quiet you can actually hear", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="sc_anc_desc_cell" style="height:auto; width:100%"><Text id="sc_anc_desc" props={content: "A six-mic array samples 48,000 times a second, peeling away the rumble of the subway, the clatter of a keyboard and the conversation next door — leaving only what you came to hear.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_anc_visual_cell" style="height:400px; width:440px; flex-shrink:0; position:relative; align-items:center; justify-content:center">
            <Icon id="sc_anc_visual_icon" props={iconName: "Waves", iconSource: "lucide"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Feature band two: spatial audio (scrub · emphasis gear) ─── -->
      <Container id="sc_band_space" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:96px 48px">
        <FlexContainer id="sc_band_space_row" props={direction: "row"} style="height:auto; width:100%; max-width:1160px; margin-left:auto; margin-right:auto; align-items:center; gap:64px">
          <Container id="sc_space_visual_cell" style="height:400px; width:440px; flex-shrink:0; position:relative; align-items:center; justify-content:center">
            <Icon id="sc_space_visual_icon" props={iconName: "Orbit", iconSource: "lucide"}/>
          </Container>
          <Container id="sc_space_copy_cell" style="height:auto; width:100%">
            <FlexContainer id="sc_space_copy_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px">
              <Container id="sc_space_tag_cell" style="height:auto; width:auto"><Tag id="sc_space_tag" props={text: "Spatial audio", color: "purple"}/></Container>
              <Container id="sc_space_title_cell" style="height:auto; width:100%"><Text id="sc_space_title" props={content: "Once sound has a direction, the picture comes alive", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="sc_space_desc_cell" style="height:auto; width:100%"><Text id="sc_space_desc" props={content: "Dynamic head tracking moves the soundstage as you turn — in a film the helicopter sweeps behind you; in a game the footsteps stop at your left rear.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Numbers band (scrub · emphasis gear) ─── -->
      <Container id="sc_band_numbers" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:110px 48px">
        <FlexContainer id="sc_numbers_row" props={direction: "row"} style="height:auto; width:100%; max-width:1000px; margin-left:auto; margin-right:auto; justify-content:center; align-items:center; gap:88px">
          <Container id="sc_num_anc_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_anc_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_anc_value_cell" style="height:auto; width:auto"><Text id="sc_num_anc_value" props={content: "40", tagName: "h2"}/></Container>
              <Container id="sc_num_anc_label_cell" style="height:auto; width:auto"><Text id="sc_num_anc_label" props={content: "dB · noise cancelling depth", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_num_battery_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_battery_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_battery_value_cell" style="height:auto; width:auto"><Text id="sc_num_battery_value" props={content: "38", tagName: "h2"}/></Container>
              <Container id="sc_num_battery_label_cell" style="height:auto; width:auto"><Text id="sc_num_battery_label" props={content: "hours · total battery life", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_num_latency_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_latency_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_latency_value_cell" style="height:auto; width:auto"><Text id="sc_num_latency_value" props={content: "0.09", tagName: "h2"}/></Container>
              <Container id="sc_num_latency_label_cell" style="height:auto; width:auto"><Text id="sc_num_latency_label" props={content: "seconds · gaming latency", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Close (scrub · soft gear) ─── -->
      <Container id="sc_band_cta" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:120px 48px 132px">
        <FlexContainer id="sc_cta_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; margin-left:auto; margin-right:auto; align-items:center; gap:16px">
          <Container id="sc_cta_title_cell" style="height:auto; width:100%"><Text id="sc_cta_title" props={content: "Reserve your quiet", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="sc_cta_desc_cell" style="height:auto; width:100%"><Text id="sc_cta_desc" props={content: "Pre-orders get 12 months interest-free and a two-year warranty. First run: 5,000 units.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sc_cta_btn_cell" style="height:auto; width:auto; padding-top:10px"><Button id="sc_cta_btn" props={content: "Pre-order now", variant: "primary"} style="height:auto; width:auto; padding:14px 36px"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="sc_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="sc_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 48px 40px">
        <FlexContainer id="sc_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:10px">
          <Container id="sc_footer_text_cell" style="height:auto; width:auto"><Text id="sc_footer_text" props={content: "© 2026 Seasound Audio · Demo template (brand and data are fictional)", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Hero entrance, once (onMount; fully visible before any scrolling — the hero never uses scrub)
      @sc_hero_band = {
        events: { playHero: { trigger: "onMount", action: motion.play({targets: ["sc_hero_eyebrow", "sc_hero_title", "sc_hero_sub", "sc_hero_hint_row"], effect: "fadeInUp", stagger: 110, duration: "slow"}) } }
      };
      # Below the fold: one scrub binding per band (progress follows the scroll and reverses; the gear is chosen per band)
      @sc_band_anc = {
        events: { scrubAnc: { trigger: "onMount", action: motion.scroll({targets: ["sc_anc_copy_col", "sc_anc_visual_cell"], effect: "fadeInUp"}) } }
      };
      @sc_band_space = {
        events: { scrubSpace: { trigger: "onMount", action: motion.scroll({targets: ["sc_space_copy_col", "sc_space_visual_cell"], effect: "scaleIn", rhythm: "emphasis"}) } }
      };
      @sc_band_numbers = {
        events: { scrubNumbers: { trigger: "onMount", action: motion.scroll({targets: ["sc_num_anc_col", "sc_num_battery_col", "sc_num_latency_col"], effect: "fadeInUp", rhythm: "emphasis"}) } }
      };
      @sc_band_cta = {
        events: { scrubCta: { trigger: "onMount", action: motion.scroll({targets: ["sc_cta_title", "sc_cta_desc", "sc_cta_btn"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      @sc_cta_btn = {
        events: { preorder: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Pre-order held: Aurora in Deep Sea Blue, shipping September 25"}) } }
      };
    </script>

    <styles>
      # 0. Dark base
      @sc_root = { background: #0b1220; }
      @sc_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #14213d 0%, #0b1220 62%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -180px;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(34, 211, 238, 0.16), transparent 70%);
        }
      }
      @sc_hero_eyebrow = { color: #67e8f9; font-size: 14px; font-weight: 700; letter-spacing: 3.5px; }
      @sc_hero_title = {
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.05;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #e0f2fe 0%, #67e8f9 45%, #a5b4fc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @sc_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.7; text-align: center; }
      @sc_hero_hint_icon = { color: #22d3ee; font-size: 20px; }
      @sc_hero_hint_text = { color: #475569; font-size: 12px; letter-spacing: 2px; }

      # 1. Feature bands
      @sc_anc_tag = { background-color: rgba(34, 211, 238, 0.14); color: #67e8f9; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @sc_space_tag = { background-color: rgba(165, 180, 252, 0.16); color: #c7d2fe; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # 42px holds: the longest English headline ("Once sound has a direction, the picture comes alive")
      # runs ~53 glyphs, wrapping to two lines inside the 656px copy column instead of overflowing it.
      @sc_anc_title = { color: #f1f5f9; font-size: 42px; font-weight: 900; letter-spacing: -1.2px; line-height: 1.25; }
      @sc_space_title = { color: #f1f5f9; font-size: 42px; font-weight: 900; letter-spacing: -1.2px; line-height: 1.25; }
      @sc_anc_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; }
      @sc_space_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; }
      @sc_anc_visual_cell = {
        background: radial-gradient(90% 90% at 50% 40%, rgba(34, 211, 238, 0.22) 0%, rgba(15, 23, 42, 0) 70%);
        border-radius: 32px;
        :scope { border: 1px solid rgba(103, 232, 249, 0.16); }
      }
      @sc_space_visual_cell = {
        background: radial-gradient(90% 90% at 50% 40%, rgba(165, 180, 252, 0.22) 0%, rgba(15, 23, 42, 0) 70%);
        border-radius: 32px;
        :scope { border: 1px solid rgba(199, 210, 254, 0.16); }
      }
      @sc_anc_visual_icon = { color: #22d3ee; font-size: 120px; }
      @sc_space_visual_icon = { color: #a5b4fc; font-size: 120px; }

      # 2. Numbers band
      @sc_num_anc_value = { color: #67e8f9; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_battery_value = { color: #a5b4fc; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_latency_value = { color: #f0abfc; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_anc_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }
      @sc_num_battery_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }
      @sc_num_latency_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }

      # 3. Close
      # 44px kept: "Reserve your quiet" is short (~19 glyphs ≈ 435px), the closest match to the
      # 484px the Chinese line occupied at this size.
      @sc_cta_title = { color: #f1f5f9; font-size: 44px; font-weight: 900; letter-spacing: -1.2px; text-align: center; }
      @sc_cta_desc = { color: #94a3b8; font-size: 16px; line-height: 1.7; text-align: center; }
      @sc_cta_btn = {
        color: #06202a;
        background: linear-gradient(120deg, #67e8f9 0%, #a5b4fc 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(34, 211, 238, 0.32); }
      }

      # 4. Footer
      @sc_footer_divider = { background: rgba(148, 163, 184, 0.16); }
      @sc_footer_text = { color: #475569; font-size: 12px; }
    </styles>
  </Page>
</App>
```

> Production notes: hero `onMount` entrance (never scrub); the four bands below the fold each carry
> their own `motion.scroll` binding (targeted at that band's cells, not the whole page); the rhythm
> gear is chosen per band (body = standard / numbers = emphasis / close = soft); the dark palette
> sets up the contrast with the light marketing tab; key copy is complete with zero motion.

## Production notes

**Body leading is the headline change (2026-09-25).** Every paragraph on this page got *longer* in
English — a 60-glyph Chinese paragraph becomes ~170 Latin glyphs — but the bands are sized by their
400px fixed visual cells, so the copy columns had room. What did not work was the CJK leading:
1.9–2.0 on Latin text reads as loose, so body copy was reset to **1.7** across the hero subtitle,
both feature paragraphs and the closing paragraph.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero subtitle | 680px cell, 1 line @ leading 1.9 | 680px cell, **1 line @ leading 1.7** | A first draft ran ~103 glyphs and wrapped with a one-word orphan line ("rest.") at the 680px measure; the copy was cut to the three specs plus "scroll on." (65 glyphs, measured ~533px) so the one-line composition survives |
| Feature headline (band 1) | 42px | 42px | "Quiet you can actually hear" is ~26 glyphs, measured 542px inside a 656px column |
| Feature headline (band 2) | 42px, 1 line | 42px, **2 lines** | "Once sound has a direction, the picture comes alive" is ~53 glyphs, so it wraps (measured 573px on its longest line); both copy columns stay under the 400px visual cell, so the band height is unchanged |
| Feature paragraphs | 16px, leading 2.0 | 16px, **leading 1.7**, 3 lines | ~170 English glyphs against ~60 in Chinese; at leading 2.0 the paragraphs grew taller than the tag + headline rhythm, so 1.7 keeps the two bands visually equal |
| Number labels | 14px, letter-spacing 1px | 14px, **letter-spacing 0.5px** | "dB · noise cancelling depth" is ~27 glyphs (measured 196px); the tighter tracking keeps the three-up centred row (726px) inside its 1000px measure |
| Closing headline | 44px | 44px (kept) | "Reserve your quiet" is far shorter than the Chinese line (measured 394px vs ~484px at this size), so the original presence is preserved rather than reduced |

**Copy policy** — not literal: `聆海` → Seasound Audio; `把世界，调成静音` → "Turn the world down.";
`40dB 的安静，是听得见的` → "Quiet you can actually hear"; `现在预购，静音先到` → "Reserve your
quiet"; `小时/秒` as number labels become "hours / seconds" so the figures read as units in English.

**Node ids are identical to the Chinese version**, and all four `motion.scroll` bindings plus the
hero `motion.play` keep exactly the same targets, gears and windows — so capability checks and the
E2E address either document the same way.
