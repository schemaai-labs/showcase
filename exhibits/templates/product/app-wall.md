# Data Wall (Monitoring) — "City Metro" Line 1 live board

> Template role (product / app tab · SaaS tools): the standard dark control-room wall — a status bar
> on top, four large KPI figures with rolling counters, two chart cards, and an event stream along
> the bottom.
> Scenario: a monitoring wall for a fictional metro line: deep navy canvas with cyan glow; the top
> bar carries the line name, running status and clock; four KPI tiles (ridership / on-time rate /
> trains in service / alerts, each counting up on entry); two chart cards (24-hour ridership area
> chart, per-station bar chart); and the latest event stream at the bottom (time + severity tag +
> description). A wall is a mostly static surface — the KPI counters are the only motion.

```lang
<App dsl-version="0.3" name="City Metro · Line 1 Live Board">
  <Page id="wall" name="Monitoring Wall" route="/wall">
    <FlexContainer id="wl_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <FlexContainer id="wl_frame" props={direction: "column"} style="height:auto; width:100%; gap:16px; padding:20px 22px 24px; position:relative">

      <!-- ─── Top bar ─── -->
      <Container id="wl_topbar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_topbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 22px">
          <Container id="wl_title_cell" style="height:auto; width:auto">
            <FlexContainer id="wl_title_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="wl_logo_cell" style="height:auto; width:auto"><Icon id="wl_logo" props={iconName: "TrainFront", iconSource: "lucide"}/></Container>
              <Container id="wl_title_text_cell" style="height:auto; width:auto"><Text id="wl_title_text" props={content: "City Metro Line 1 · Live", tagName: "h1"}/></Container>
              <Container id="wl_status_cell" style="height:auto; width:auto"><Tag id="wl_status" props={text: "● All lines running", color: "green"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_clock_cell" style="height:auto; width:auto">
            <FlexContainer id="wl_clock_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="wl_clock_icon_cell" style="height:auto; width:auto"><Icon id="wl_clock_icon" props={iconName: "Clock", iconSource: "lucide"}/></Container>
              <Container id="wl_clock_text_cell" style="height:auto; width:auto"><Text id="wl_clock_text" props={content: "2026-09-14 20:45:12", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── KPI row ×4 (counting up) ─── -->
      <Container id="wl_kpi_row" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; justify-content:center">
        <FlexContainer id="wl_kpi_row_flex" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
          <Container id="wl_kpi_pax_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_pax_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_pax_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_label" props={content: "Ridership today (K)", tagName: "span"}/></Container>
              <Container id="wl_kpi_pax_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_value" props={content: "128", tagName: "h2"}/></Container>
              <Container id="wl_kpi_pax_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_note" props={content: "+6.2% vs. same window", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_ontime_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_ontime_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_ontime_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_label" props={content: "On-time rate (%)", tagName: "span"}/></Container>
              <Container id="wl_kpi_ontime_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_value" props={content: "99.2", tagName: "h2"}/></Container>
              <Container id="wl_kpi_ontime_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_note" props={content: "Rolling 30-day average", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_train_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_train_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_train_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_label" props={content: "Trains in service", tagName: "span"}/></Container>
              <Container id="wl_kpi_train_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_value" props={content: "42", tagName: "h2"}/></Container>
              <Container id="wl_kpi_train_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_note" props={content: "3 min 10 s headway", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_alert_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_alert_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_alert_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_label" props={content: "Alerts today", tagName: "span"}/></Container>
              <Container id="wl_kpi_alert_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_value" props={content: "3", tagName: "h2"}/></Container>
              <Container id="wl_kpi_alert_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_note" props={content: "All closed · 0 open", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Charts ─── -->
      <Container id="wl_charts_row" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_charts_row_flex" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
          <Container id="wl_chart_flow_cell" style="flex-grow:1; height:auto; width:60%">
            <FlexContainer id="wl_chart_flow_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
              <Container id="wl_chart_flow_title_cell" style="height:auto; width:100%"><Text id="wl_chart_flow_title" props={content: "24-hour ridership trend", tagName: "h3"}/></Container>
              <Container id="wl_chart_flow_body_cell" style="height:auto; width:100%">
                <Chart id="wl_chart_flow" props={type: "area", dataSource: [{t: "08:00", pax: 6.2}, {t: "10:00", pax: 9.8}, {t: "12:00", pax: 7.4}, {t: "14:00", pax: 6.1}, {t: "16:00", pax: 8.6}, {t: "18:00", pax: 14.2}, {t: "19:00", pax: 12.8}, {t: "20:00", pax: 9.4}], xField: "t", series: [{dataKey: "pax", name: "Ridership (K)", color: "#22d3ee"}], options: {height: 240, smooth: true, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="wl_chart_station_cell" style="flex-grow:1; height:auto; width:40%">
            <FlexContainer id="wl_chart_station_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
              <Container id="wl_chart_station_title_cell" style="height:auto; width:100%"><Text id="wl_chart_station_title" props={content: "Top 5 stations · ridership (K)", tagName: "h3"}/></Container>
              <Container id="wl_chart_station_body_cell" style="height:auto; width:100%">
                <Chart id="wl_chart_station" props={type: "bar", dataSource: [{s: "Central", pax: 18.6}, {s: "Riverside", pax: 15.2}, {s: "Museum", pax: 13.8}, {s: "Harborview", pax: 11.4}, {s: "Uptown", pax: 9.2}], xField: "s", series: [{dataKey: "pax", name: "Ridership", color: "#34d399"}], options: {height: 240, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Event stream ─── -->
      <Container id="wl_events_card" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_events_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
          <Container id="wl_events_title_cell" style="height:auto; width:100%"><Text id="wl_events_title" props={content: "Latest events", tagName: "h3"}/></Container>
          <Container id="wl_event_1_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_1_time_cell" style="height:auto; width:auto"><Text id="wl_event_1_time" props={content: "20:42", tagName: "span"}/></Container>
              <Container id="wl_event_1_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_1_tag" props={text: "Info", color: "cyan"}/></Container>
              <Container id="wl_event_1_text_cell" style="height:auto; width:auto"><Text id="wl_event_1_text" props={content: "Platform 3 screen-door sensors passed self-check (routine)", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_2_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_2_time_cell" style="height:auto; width:auto"><Text id="wl_event_2_time" props={content: "20:31", tagName: "span"}/></Container>
              <Container id="wl_event_2_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_2_tag" props={text: "Alert", color: "orange"}/></Container>
              <Container id="wl_event_2_text_cell" style="height:auto; width:auto"><Text id="wl_event_2_text" props={content: "Crowd density at Riverside Exit B above threshold — one extra train added", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_3_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_3_time_cell" style="height:auto; width:auto"><Text id="wl_event_3_time" props={content: "20:15", tagName: "span"}/></Container>
              <Container id="wl_event_3_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_3_tag" props={text: "Notice", color: "blue"}/></Container>
              <Container id="wl_event_3_text_cell" style="height:auto; width:auto"><Text id="wl_event_3_text" props={content: "Train 012 completed depot inspection and returned to service", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_4_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_4_time_cell" style="height:auto; width:auto"><Text id="wl_event_4_time" props={content: "19:58", tagName: "span"}/></Container>
              <Container id="wl_event_4_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_4_tag" props={text: "Done", color: "green"}/></Container>
              <Container id="wl_event_4_text_cell" style="height:auto; width:auto"><Text id="wl_event_4_text" props={content: "Evening-peak capacity plan finished; all lines back on schedule", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # KPI counters (interpolate the entry values; no JS / reduced motion → final digits shown as-is)
      @wl_kpi_row = {
        events: { kpiCount: { trigger: "onMount", action: motion.counter({targets: ["wl_kpi_pax_value", "wl_kpi_ontime_value", "wl_kpi_train_value", "wl_kpi_alert_value"], duration: "slow"}) } }
      };
    </script>

    <styles>
      # 0. Dark wall base
      @wl_root = { background: radial-gradient(120% 100% at 50% 0%, #071528 0%, #020617 62%); }
      @wl_topbar = { background: rgba(15, 32, 56, 0.6); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.18); } }
      @wl_logo = { color: #22d3ee; font-size: 24px; }
      @wl_title_text = { color: #e0f2fe; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @wl_status = { background-color: rgba(52, 211, 153, 0.14); color: #6ee7b7; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @wl_clock_icon = { color: #67e8f9; font-size: 16px; }
      @wl_clock_text = { color: #7dd3fc; font-size: 15px; font-weight: 600; letter-spacing: 1px; }

      # 1. KPI tiles
      @wl_kpi_pax_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.16); box-shadow: inset 0 0 32px rgba(34, 211, 238, 0.05); } }
      @wl_kpi_ontime_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(52, 211, 153, 0.16); box-shadow: inset 0 0 32px rgba(52, 211, 153, 0.05); } }
      @wl_kpi_train_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(129, 140, 248, 0.18); box-shadow: inset 0 0 32px rgba(129, 140, 248, 0.05); } }
      @wl_kpi_alert_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(251, 146, 60, 0.2); box-shadow: inset 0 0 32px rgba(251, 146, 60, 0.06); } }
      # 13px labels: each tile offers only 253px of content box (1236 − 4×card padding − 3×16 gap,
      # divided by 4), so every English label was checked against that measure — the longest,
      # "Ridership today (K)" with 1px tracking, lands at ~150px and stays on one line.
      @wl_kpi_pax_label = { color: #7dd3fc; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @wl_kpi_ontime_label = { color: #6ee7b7; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @wl_kpi_train_label = { color: #a5b4fc; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @wl_kpi_alert_label = { color: #fdba74; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @wl_kpi_pax_value = { color: #22d3ee; font-size: 46px; font-weight: 900; letter-spacing: -1px; }
      @wl_kpi_ontime_value = { color: #34d399; font-size: 46px; font-weight: 900; letter-spacing: -1px; }
      @wl_kpi_train_value = { color: #a5b4fc; font-size: 46px; font-weight: 900; letter-spacing: -1px; }
      @wl_kpi_alert_value = { color: #fb923c; font-size: 46px; font-weight: 900; letter-spacing: -1px; }
      @wl_kpi_pax_note = { color: #475569; font-size: 12px; }
      @wl_kpi_ontime_note = { color: #475569; font-size: 12px; }
      @wl_kpi_train_note = { color: #475569; font-size: 12px; }
      @wl_kpi_alert_note = { color: #475569; font-size: 12px; }

      # 2. Chart cards
      @wl_chart_flow_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.14); } }
      @wl_chart_station_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(52, 211, 153, 0.14); } }
      @wl_chart_flow_title = { color: #bae6fd; font-size: 16px; font-weight: 700; letter-spacing: 1px; }
      @wl_chart_station_title = { color: #a7f3d0; font-size: 16px; font-weight: 700; letter-spacing: 1px; }

      # 3. Event stream
      @wl_events_card = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(148, 163, 184, 0.14); } }
      @wl_events_title = { color: #cbd5e1; font-size: 16px; font-weight: 700; letter-spacing: 1px; }
      @wl_event_1_time = { color: #64748b; font-size: 13px; font-weight: 600; }
      @wl_event_2_time = { color: #64748b; font-size: 13px; font-weight: 600; }
      @wl_event_3_time = { color: #64748b; font-size: 13px; font-weight: 600; }
      @wl_event_4_time = { color: #64748b; font-size: 13px; font-weight: 600; }
      @wl_event_1_tag = { background-color: rgba(34, 211, 238, 0.14); color: #67e8f9; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wl_event_2_tag = { background-color: rgba(251, 146, 60, 0.16); color: #fdba74; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wl_event_3_tag = { background-color: rgba(96, 165, 250, 0.16); color: #93c5fd; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wl_event_4_tag = { background-color: rgba(52, 211, 153, 0.14); color: #6ee7b7; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wl_event_1_text = { color: #94a3b8; font-size: 14px; }
      @wl_event_2_text = { color: #94a3b8; font-size: 14px; }
      @wl_event_3_text = { color: #94a3b8; font-size: 14px; }
      @wl_event_4_text = { color: #94a3b8; font-size: 14px; }
    </styles>
  </Page>
</App>
```

> Craft notes: a wall = dark canvas + glowing outlined cards + large KPI figures (**the only motion on
> the page is the number count-up** — a wall stays restrained); charts use the canonical `chart`
> component (area / bar); the event stream grades severity through Tag semantic colours; static data,
> no API calls.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese wall is typeset for CJK metrics. A
data wall is exactly where the width difference bites first, because the four KPI tiles are fixed at
~297px each (1236px of frame interior, minus three 16px gaps, divided by four) and the tile padding
is 22px a side — so **every label and note lives in a 253px box**. English names for the same
quantity run about twice as long as the four-CJK-character labels they replace, so they were written
against that measure rather than carried over.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| KPI labels | 4–6 CJK chars + unit in parens (e.g. 今日载客（万）) | `Ridership today (K)` / `On-time rate (%)` / `Trains in service` / `Alerts today` — 12–20 glyphs | re-derived against the 253px tile box: the tile is a centred flex cell, so a label longer than the box would overflow it on both sides. With the 1px tracking kept, the longest label ("Ridership today (K)") measures 139px — the 13px size and the tracking both survive |
| KPI notes | 8–14 CJK chars | `+6.2% vs. same window` / `Rolling 30-day average` / `3 min 10 s headway` / `All closed · 0 open` | same 253px box at 12px. The first note was the only one that had to be *written to a measure*: a literal "vs. the same period yesterday" is 33 glyphs and still fits (205px), but at 12px under a 46px figure it read as a second label; `vs. same window` keeps the comparison and the line short |
| KPI figures | 46px / `-1px` | 46px / `-1px` (kept) | the figures are numerals (128 / 99.2 / 42 / 3), and digit advances are identical in both scripts — no reason to touch the display size |
| KPI figures | 46px / `-1px` | 46px / `-1px` (kept) | the figures are numerals (128 / 99.2 / 42 / 3), and digit advances are identical in both scripts — no reason to touch the display size |
| station axis labels | 人民广场 / 滨江道 / 中山路 / 西湖站 / 北苑 (2–4 CJK) | `Central` / `Riverside` / `Museum` / `Harborview` / `Uptown` (6–11 glyphs) | the bar card gives each of the five slots only ~91px; at 12px axis type every English name stays inside its slot, so the axis draws horizontally instead of rotating. **The last slot is the binding one** — its label is centred on the rightmost bar, so half of it hangs past the plot edge: "North Park" (10 glyphs) lost its final letter in the capture and was cut back to `Uptown` (6) |
| top bar title | 城市轨道 1 号线 · 实时监控 (20px) | `City Metro Line 1 · Live` (20px) | not a size change — the English line is ~2x as wide, so the wording was shortened to keep the status tag beside it on one row |

Everything else — the 4-up KPI row (`flex-basis:0; flex-grow:1`), the 60/40 chart split, radii,
glow colours, chart options and the `motion.counter` spec — is language-neutral and unchanged.

**Copy policy**: not a literal translation. Chinese-specific framing is rewritten to international
equivalents: `城市轨道` → City Metro, station names replaced with neutral English stand-ins instead of
transliterations, and `万` (ten-thousand) restated as `(K)`, matching the way the values are written
in English (`128` = 128K riders). Severity vocabulary keeps its four-step ladder: 提示 → Info,
告警 → Alert, 信息 → Notice, 完成 → Done, on the same four tag colours.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
