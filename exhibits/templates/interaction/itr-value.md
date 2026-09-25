# Value interpolation (typewriter + counting numbers) — "Cove" product launch page

> Template role (interaction / motion tab): **value-interpolation effects** — a typewriter reveal
> (`motion.typewriter`) plus counting KPIs (`motion.counter`), both used on the first screen (the
> visible area) only.
> Scenario: a launch page for a fictional productivity product: the headline types itself out on the
> first screen (the default text is the terminal frame), with three metrics counting up underneath
> (teams / on-time rate / hours saved); everything below the fold stays static (three feature cards,
> three steps, a closing CTA). The interpolation is an enhancement — with no JS, or on the reduced
> fallback, the default text and the default numbers are fully readable.

```lang
<App dsl-version="0.3" name="Cove — Product Launch">
  <Page id="value" name="Launch" route="/">
    <FlexContainer id="rv_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. First screen (typewriter + counting numbers) ─── -->
      <Container id="rv_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <FlexContainer id="rv_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:center; gap:22px">
          <Container id="rv_hero_tag_cell" style="height:auto; width:auto">
            <Tag id="rv_hero_tag" props={text: "Cove 2.0 · out today", color: "green"}/>
          </Container>
          <Container id="rv_hero_title_cell" style="height:auto; width:100%">
            <Text id="rv_hero_title" props={content: "Make complex things simple", tagName: "h1"} style="height:auto; width:100%; min-height:80px"/>
          </Container>
          <Container id="rv_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0">
            <Text id="rv_hero_sub" props={content: "Tools shouldn't tell you how to work — Cove gathers projects, docs and conversations into one quiet space.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rv_hero_stats_cell" style="height:auto; width:100%; padding-top:30px">
            <FlexContainer id="rv_hero_stats_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:84px">
              <Container id="rv_stat_teams_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_teams_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_teams_value_cell" style="height:auto; width:auto"><Text id="rv_stat_teams_value" props={content: "1200", tagName: "h3"}/></Container>
                  <Container id="rv_stat_teams_label_cell" style="height:auto; width:auto"><Text id="rv_stat_teams_label" props={content: "teams on board", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_stat_rate_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_rate_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_rate_value_cell" style="height:auto; width:auto"><Text id="rv_stat_rate_value" props={content: "98", tagName: "h3"}/></Container>
                  <Container id="rv_stat_rate_label_cell" style="height:auto; width:auto"><Text id="rv_stat_rate_label" props={content: "% of tasks delivered on time", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_stat_save_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_save_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_save_value_cell" style="height:auto; width:auto"><Text id="rv_stat_save_value" props={content: "3", tagName: "h3"}/></Container>
                  <Container id="rv_stat_save_label_cell" style="height:auto; width:auto"><Text id="rv_stat_save_label" props={content: "hours saved per week", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Features (static) ─── -->
      <Container id="rv_feat_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:110px 64px 96px">
        <FlexContainer id="rv_feat_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:center; gap:40px">
          <Container id="rv_feat_title_cell" style="height:auto; width:auto"><Text id="rv_feat_title" props={content: "Quiet, but it does everything", tagName: "h2"}/></Container>
          <Container id="rv_feat_row_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_feat_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px">
              <Container id="rv_feat_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_1_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_1_icon" props={iconName: "Inbox", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_1_title_cell" style="height:auto; width:100%"><Text id="rv_feat_1_title" props={content: "Gather", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_1_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_1_desc" props={content: "Fragments from five or six tools collect into a single timeline — no more digging through chat logs.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_feat_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_2_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_2_icon" props={iconName: "LayoutList", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_2_title_cell" style="height:auto; width:100%"><Text id="rv_feat_2_title" props={content: "Trace", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_2_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_2_desc" props={content: "One task, from a spoken promise to final sign-off: state is kept once, and everyone reads the same facts.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_feat_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_3_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_3_icon" props={iconName: "BellRing", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_3_title_cell" style="height:auto; width:100%"><Text id="rv_feat_3_title" props={content: "Hush", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_3_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_3_desc" props={content: "Quiet by default: notifications roll up into a single digest, and only what actually matters wakes you.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Three steps to start (static) ─── -->
      <Container id="rv_steps_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 64px 110px">
        <FlexContainer id="rv_steps_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">
          <Container id="rv_step_1_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_1_num_cell" style="height:auto; width:auto"><Text id="rv_step_1_num" props={content: "01", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_1_text_cell" style="height:auto; width:auto"><Text id="rv_step_1_text" props={content: "Import your existing projects — one click from the tools you already use", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="rv_step_2_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_2_num_cell" style="height:auto; width:auto"><Text id="rv_step_2_num" props={content: "02", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_2_text_cell" style="height:auto; width:auto"><Text id="rv_step_2_text" props={content: "Invite the team and give each role its own views and permissions", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="rv_step_3_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_3_num_cell" style="height:auto; width:auto"><Text id="rv_step_3_num" props={content: "03", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_3_text_cell" style="height:auto; width:auto"><Text id="rv_step_3_text" props={content: "Run a real project for a week — if it doesn't fit, you get a refund", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Closing ─── -->
      <Container id="rv_outro_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 64px 104px">
        <Container id="rv_outro_card" style="height:auto; width:100%; max-width:1000px; margin-left:auto; margin-right:auto">
          <FlexContainer id="rv_outro_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:56px 48px">
            <Container id="rv_outro_title_cell" style="height:auto; width:auto"><Text id="rv_outro_title" props={content: "Clear half your to-do list today", tagName: "h2"}/></Container>
            <Container id="rv_outro_btn_cell" style="height:auto; width:auto; padding-top:10px"><Button id="rv_outro_btn" props={content: "Start for free", variant: "primary"} style="height:auto; width:auto; padding:13px 34px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="rv_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 48px 40px">
        <Text id="rv_footer_text" props={content: "© 2026 Cove Product Team · demo template, brand and figures are fictional", tagName: "p"} style="height:auto; width:100%"/>
      </Container>
    </FlexContainer>

    <script>
      # Value interpolation: first screen only (starts onMount; the default text / numbers ARE the
      # terminal frame — the no-JS surface stays fully readable)
      @rv_hero_band = {
        events: {
          typeTitle: { trigger: "onMount", action: motion.typewriter({targets: ["rv_hero_title"], speed: 18, delay: 300}) },
          statsCount: { trigger: "onMount", action: motion.counter({targets: ["rv_stat_teams_value", "rv_stat_rate_value", "rv_stat_save_value"], duration: "slow", delay: 500}) }
        }
      }
      @rv_outro_btn = {
        events: { start: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your 14-day trial workspace is ready"}) } }
      }
    </script>

    <styles>
      # 0. Base
      @rv_root = { background: #ffffff; }
      @rv_hero_band = {
        background: linear-gradient(180deg, #f0fdf4 0%, #ecfeff 55%, #ffffff 100%);
        :scope::before {
          content: '';
          position: absolute;
          right: -130px;
          top: -120px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(16, 185, 129, 0.16), transparent 72%);
        }
      }
      @rv_hero_tag = { background-color: #dcfce7; color: #15803d; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # 68px CJK (10 glyphs, ~680px) becomes 64px Latin: the English headline is 25 glyphs, and measured
      # in Chromium it is 861px at 64px — inside the 900px column, but 918px at 68px, which wraps.
      @rv_hero_title = {
        color: #0f172a;
        font-size: 64px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.15;
        text-align: center;
      }
      # Two Latin lines in the 680px column instead of one CJK line, so the leading tightens.
      @rv_hero_sub = { color: #475569; font-size: 17px; line-height: 1.8; text-align: center; }
      @rv_stat_teams_value = { color: #059669; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_rate_value = { color: #0891b2; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_save_value = { color: #7c3aed; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_teams_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rv_stat_rate_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rv_stat_save_label = { color: #64748b; font-size: 13px; font-weight: 600; }

      # 1. Features
      @rv_feat_title = { color: #0f172a; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @rv_feat_1_cell = { background: #f8fafc; border-radius: 20px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_feat_2_cell = { background: #f8fafc; border-radius: 20px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_feat_3_cell = { background: #f8fafc; border-radius: 20px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_feat_1_icon = { color: #059669; font-size: 30px; }
      @rv_feat_2_icon = { color: #0891b2; font-size: 30px; }
      @rv_feat_3_icon = { color: #7c3aed; font-size: 30px; }
      @rv_feat_1_title = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @rv_feat_2_title = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @rv_feat_3_title = { color: #0f172a; font-size: 20px; font-weight: 800; }
      # The English descriptions run 94-105 glyphs against 29-33 CJK glyphs: three lines in a 293px
      # text column, so the leading comes down to 1.7 to keep the cards from ballooning.
      @rv_feat_1_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @rv_feat_2_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @rv_feat_3_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }

      # 2. Steps
      @rv_step_1_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_2_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_3_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_1_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_2_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_3_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_1_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @rv_step_2_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @rv_step_3_text = { color: #334155; font-size: 15px; font-weight: 600; }

      # 3. Closing
      @rv_outro_card = {
        background: linear-gradient(120deg, #065f46 0%, #0d9488 60%, #0891b2 130%);
        border-radius: 26px;
        box-shadow: 0 28px 64px rgba(6, 95, 70, 0.26);
      }
      @rv_outro_title = { color: #ffffff; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @rv_outro_btn = {
        color: #065f46;
        background: #ffffff;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(2, 6, 23, 0.24); }
      }
      @rv_footer_text = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Craft discipline: value interpolation (rule 19③) — **first screen / visible area only**
> (starts onMount, so anything below the fold would animate unseen); the default text and the default
> numbers _are_ the terminal frame (the no-JS surface stays complete); a short typewriter line plus
> `min-height` reserves the height (no layout jump while characters appear).

## Production notes

**The headline keeps one line, one step down.** 把复杂的事，变得简单 is ten CJK glyphs — 680px at 68px.
"Make complex things simple" is 25 Latin glyphs: measured in Chromium it is **918px at 68px** (the
900px column wraps) and **861px at 64px**, which holds the single-line composition the original is
built around. The typewriter's `min-height: 80px` reservation is unchanged.

**The typewriter speed is retuned, not the capability.** The motion is the same
`motion.typewriter({...})` call; only the rate changes, `9 → 18` characters per second. Ten CJK glyphs
at 9/s reveal in 1.1s, but 26 Latin characters at the same rate would take 2.9s — long enough to read
as a stall rather than a reveal, and close enough to the screenshot settle window to be a hazard.
18/s puts the English reveal back at 1.4s.

| Element | Chinese | English | Reason |
| --- | --- | --- | --- |
| Hero headline | 68px | **64px** | 25 Latin glyphs against 10 CJK; 918px at 68px wraps the 900px column |
| Hero sub leading | 1.9 | **1.8** | Wraps to two Latin lines in the 680px cell |
| Feature body leading | 1.9 | **1.7** | Descriptions run three lines each in a 293px text column |
| Typewriter rate | 9 chars/s | **18 chars/s** | Keeps the same ~1.4s reveal for a 2.6× longer string |
| Stat labels | 家团队在用 / % 任务按时完成 / 小时 / 周 平均节省 | teams on board / % of tasks delivered on time / hours saved per week | The row's 84px gaps hold: 452px of labels + 168px of gaps still clears the 900px column |

**The stat values are untouched** — `1200` deliberately keeps no thousands separator, because
`motion.counter` rejects a number with an adjacent comma (see `parseNumberTemplate`).

**Copy policy** — the product name 屿见 ("island sight") has no workable English echo, so the page
uses **Cove**: a short, calm word for a sheltered space, which is what the Chinese headline is
selling. The three feature headings keep the original's one-verb rhythm — 收拢 / 穿透 / 闭嘴 becomes
Gather / Trace / Hush — and 别让工具教你做事 becomes the idiomatic "Tools shouldn't tell you how to
work" rather than a literal rendering.

**No structural changes.** Every node id, the `onMount` orchestrations, the `onClick` feedback message
and the `lucide` icon names are untouched.
