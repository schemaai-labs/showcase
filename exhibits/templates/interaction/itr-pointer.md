# Pointer effects (magnetic CTA + cursor follow) — "WaveField" live music

> Template role (interaction / motion tab): **pointer effects** — a magnetic CTA
> (`motion.magnetic`: the button leans toward the cursor inside its snap radius and settles back on
> leave) plus a following glow (`motion.follow`: a decorative layer trails with damping and stops
> when the pointer stops).
> Scenario: a one-page electronic-music event site (dark neon): the decorative glow follows the
> cursor (`pointer-events: none`, sitting beneath the content); the hero carries the display title
> and a magnetic "Get tickets" button (one magnetic target per screen, no more); below sit three
> lineup cards and the session details. The effects are an enhancement — on touch or in a degraded
> view there is no pointer effect at all, and the button and information stay fully usable.

```lang
<App dsl-version="0.3" name="WaveField · Live Music">
  <Page id="pointer" name="WaveField Live" route="/">
    <FlexContainer id="pf_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; position:relative; overflow:hidden">

      <!-- Decorative glow (DOM-first: beneath the content; pointer-events none via a :scope rule) -->
      <Container id="pf_glow" style="height:260px; width:260px; position:fixed; left:0px; top:0px; z-index:0"/>

      <!-- Content layer (z-index lifted above the glow) -->
      <FlexContainer id="pf_content" props={direction: "column"} style="height:auto; width:100%; position:relative; z-index:1">

        <!-- ─── 1. Hero ─── -->
        <Container id="pf_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center">
          <FlexContainer id="pf_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:920px; align-items:center; gap:24px">
            <Container id="pf_hero_tag_cell" style="height:auto; width:auto">
              <Tag id="pf_hero_tag" props={text: "Oct 1–3 · Riverside Docks, Warehouse 3", color: "magenta"}/>
            </Container>
            <Container id="pf_hero_title_cell" style="height:auto; width:100%">
              <Text id="pf_hero_title" props={content: "WAVEFIELD", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="pf_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0">
              <Text id="pf_hero_sub" props={content: "Three days, eighteen acts, one warehouse that breathes — ears to the low end, nights to WaveField.", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
            <Container id="pf_hero_cta_cell" style="height:auto; width:auto; padding-top:14px">
              <Button id="pf_hero_cta" props={content: "Get tickets · $95 a day", variant: "primary"} style="height:auto; width:auto; padding:15px 44px"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 2. Lineup ─── -->
        <Container id="pf_lineup_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:40px 64px 96px">
          <FlexContainer id="pf_lineup_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:stretch; gap:36px">
            <Container id="pf_lineup_head_cell" style="height:auto; width:100%">
              <FlexContainer id="pf_lineup_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                <Container id="pf_lineup_title_cell" style="height:auto; width:auto"><Text id="pf_lineup_title" props={content: "First wave", tagName: "h2"}/></Container>
                <Container id="pf_lineup_note_cell" style="height:auto; width:auto"><Text id="pf_lineup_note" props={content: "Full lineup announced every Friday", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="pf_lineup_cards_cell" style="height:auto; width:100%">
              <FlexContainer id="pf_lineup_cards_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px">
                <Container id="pf_artist_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_1_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_1_icon" props={iconName: "AudioWaveform", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_1_name_cell" style="height:auto; width:100%"><Text id="pf_artist_1_name" props={content: "DEEPWATER", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_1_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_1_desc" props={content: "Techno · closing the main stage on Oct 1 with a 120-minute live set.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="pf_artist_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_2_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_2_icon" props={iconName: "Disc3", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_2_name_cell" style="height:auto; width:100%"><Text id="pf_artist_2_name" props={content: "NEON SIGNAL", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_2_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_2_desc" props={content: "Synthwave · the Oct 2 sunset slot, warehouse skylights wide open.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="pf_artist_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_3_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_3_icon" props={iconName: "Radio", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_3_name_cell" style="height:auto; width:100%"><Text id="pf_artist_3_name" props={content: "SLOW TRAIN", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_3_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_3_desc" props={content: "Ambient · the Oct 3 closing set, scored to the night ferries' horns.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 3. Session details ─── -->
        <Container id="pf_info_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 64px 110px">
          <Container id="pf_info_card" style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto">
            <FlexContainer id="pf_info_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; gap:32px; padding:32px 36px">
              <Container id="pf_info_left_cell" style="height:auto; width:auto">
                <FlexContainer id="pf_info_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:10px">
                  <Container id="pf_info_time_cell" style="height:auto; width:auto">
                    <FlexContainer id="pf_info_time_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="pf_info_time_icon_cell" style="height:auto; width:auto"><Icon id="pf_info_time_icon" props={iconName: "Clock", iconSource: "lucide"}/></Container>
                      <Container id="pf_info_time_text_cell" style="height:auto; width:auto"><Text id="pf_info_time_text" props={content: "Doors 4pm daily · last set ends 1am", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pf_info_place_cell" style="height:auto; width:auto">
                    <FlexContainer id="pf_info_place_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="pf_info_place_icon_cell" style="height:auto; width:auto"><Icon id="pf_info_place_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                      <Container id="pf_info_place_text_cell" style="height:auto; width:auto"><Text id="pf_info_place_text" props={content: "Warehouse 3, Riverside Docks (Metro Line 2, Jiangwan Exit C)", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="pf_info_cta_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="pf_info_cta" props={content: "See session details", variant: "default"} style="height:auto; width:auto; padding:11px 28px"/>
              </Container>
            </FlexContainer>
          </Container>
        </Container>

        <!-- ─── Footer ─── -->
        <Container id="pf_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 48px 44px">
          <Text id="pf_footer_text" props={content: "© 2026 WaveField · Demo template (brand and details are fictional)", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # Pointer effects (mouse/pen only; touch / reduced-motion stay still — this is an enhancement layer)
      @pf_root = {
        events: {
          glowFollow: { trigger: "onMount", action: motion.follow({targets: ["pf_glow"], damping: 0.12}) },
          ctaMagnet: { trigger: "onMount", action: motion.magnetic({targets: ["pf_hero_cta"], strength: 0.3, radius: 90}) }
        }
      }
      @pf_hero_cta = {
        events: { buy: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Ticket page opened: $95 a day, early-bird price (demo)"}) } }
      }
      @pf_info_cta = {
        events: { detail: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Session details expanded (demo)"}) } }
      }
    </script>

    <styles>
      # 0. Dark neon base
      @pf_root = { background: #0a0a12; }
      @pf_glow = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(232, 121, 249, 0.22) 0%, rgba(34, 211, 238, 0.12) 45%, transparent 74%);
        :scope { pointer-events: none; }
      }
      @pf_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #1b1030 0%, #0a0a12 60%);
      }
      @pf_hero_tag = { background-color: rgba(232, 121, 249, 0.16); color: #f0abfc; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # 92px → 120px: the Chinese display line pairs 声场 with WAVEFIELD; in English the word stands
      # alone at 9 glyphs, and uppercase Inter Black runs ~0.69em/glyph — measured 747px at 120px,
      # the same measure the Chinese hero took inside the 920px column (677px at 112px read small).
      @pf_hero_title = {
        font-size: 120px;
        font-weight: 900;
        letter-spacing: 2px;
        line-height: 1.05;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f0abfc 0%, #67e8f9 55%, #a5b4fc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @pf_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.7; text-align: center; }
      @pf_hero_cta = {
        color: #1a0b2e;
        background: linear-gradient(120deg, #f0abfc 0%, #67e8f9 100%);
        border-radius: 16px;
        font-size: 17px;
        font-weight: 800;
        :scope { transition: box-shadow 0.25s ease; }
        :scope:hover { box-shadow: 0 16px 40px rgba(240, 171, 252, 0.36); }
      }

      # 1. Lineup
      @pf_lineup_title = { color: #f1f5f9; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @pf_lineup_note = { color: #64748b; font-size: 13px; }
      @pf_artist_1_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(240, 171, 252, 0.14); :scope { border: 1px solid rgba(240, 171, 252, 0.24); } }
      @pf_artist_2_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(103, 232, 249, 0.14); :scope { border: 1px solid rgba(103, 232, 249, 0.24); } }
      @pf_artist_3_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(165, 180, 252, 0.14); :scope { border: 1px solid rgba(165, 180, 252, 0.24); } }
      @pf_artist_1_icon = { color: #f0abfc; font-size: 30px; }
      @pf_artist_2_icon = { color: #67e8f9; font-size: 30px; }
      @pf_artist_3_icon = { color: #a5b4fc; font-size: 30px; }
      @pf_artist_1_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_2_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_3_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_1_desc = { color: #94a3b8; font-size: 14px; line-height: 1.7; }
      @pf_artist_2_desc = { color: #94a3b8; font-size: 14px; line-height: 1.7; }
      @pf_artist_3_desc = { color: #94a3b8; font-size: 14px; line-height: 1.7; }

      # 2. Session details
      @pf_info_card = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 20px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14); :scope { border: 1px solid rgba(148, 163, 184, 0.24); } }
      @pf_info_time_icon = { color: #67e8f9; font-size: 17px; }
      @pf_info_place_icon = { color: #67e8f9; font-size: 17px; }
      @pf_info_time_text = { color: #cbd5e1; font-size: 15px; font-weight: 600; }
      @pf_info_place_text = { color: #cbd5e1; font-size: 15px; font-weight: 600; }
      @pf_info_cta = {
        color: #e2e8f0;
        background: transparent;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 700;
        :scope { border: 1px solid rgba(148, 163, 184, 0.4); transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @pf_footer_text = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Production notes: pointer-effect discipline (rule 19) — **at most one magnetic target per screen**
> (give it a standalone CTA; the click semantics are unaffected by the displacement) / **follow only
> on a decorative layer**, with `pointer-events: none` expressed through a `:scope` rule
> (`pointer-events` is not on the visual whitelist) plus the decorative node placed DOM-first (beneath
> the content, so it never intercepts hits); the easing lives in the styles block (the executor only
> writes values); touch / reduced-motion stay still (enhancement layer).

## Production notes

**The hero moved in the opposite direction from most templates (2026-09-25).** Here English is
*shorter* than the Chinese, so the display line was scaled **up** rather than down — the rule is
"re-set to the measured measure", not "always shrink".

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero display | `声场 WAVEFIELD` @ 92px (~760px wide) | **`WAVEFIELD` @ 120px** (measured 725px) | 9 uppercase glyphs at ~0.69em; at the original 92px the line would have collapsed to ~557px inside a 920px column and lost the hero's mass. 112px measured 677px and still read small, so the line was set to 120px |
| Hero subtitle | 680px cell, 1 line, leading 1.9 | same cell, **2 lines, leading 1.7** | The English sentence is ~99 glyphs and wraps (measured 637px on its longest line); leading was tightened to 1.7 so the second line costs only ~29px of hero height |
| Artist descriptions | 14px, leading 1.9 | 14px, **leading 1.7** | Two-line English descriptions (~70 glyphs) in 295px cards; Latin leading does not need CJK spacing |
| Lineup / details / footer type | 36px / 15px / 12px | unchanged | All English lines land inside their columns with room to spare ("Warehouse 3, Riverside Docks (Metro Line 2, Jiangwan Exit C)" measured 449px, with the row's CTA still 340px away) |

**Copy policy** — not literal: `声场` → the brand is simply **WaveField** (the Chinese word has no
English counterpart, and printing both would double the line); the hero hook becomes "ears to the low
end, nights to WaveField"; `首批阵容` → "First wave"; `深水区 / 霓虹信号 / 慢速列车` →
"DEEPWATER / NEON SIGNAL / SLOW TRAIN"; `¥280` → "$95" with the demo toast restated in dollars.

**Node ids are identical to the Chinese version**, and the two `motion.*` actions plus the two CTA
toasts are unchanged in shape — so the E2E and the capability checks address either document the same
way.
