# Data dashboard — "NOC Wall" live operations cockpit

> Template role (product / app tab · SaaS tools · style series): dark data-ops — a near-black blue
> canvas with fluorescent cyan / lime / amber data colours, monospaced numerals, a dense grid (KPI
> row / line area / bar and ring charts / event-stream table), hairline dividers and a dot-matrix
> ground. **A high-density visualisation vocabulary**: every chart is hand-written SVG (line / bar /
> donut), built for wall displays and shift desks.
> Scenario: an interface page for a fictional operations console: a top bar (system name, status
> lamp, time-window switch); a row of five KPI tiles (nodes online / request rate / P99 latency /
> error rate / active alerts, each with a mini trend); a request-rate line area plus a load donut;
> an event-stream table; a status bar at the bottom. Zero API, static data, one entrance
> orchestration (KPI row onMount).

```lang
<App dsl-version="0.3" name="NOC Wall — Operations Cockpit">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="dd_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Top bar ─── -->
      <Container id="dd_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="dd_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 32px">
          <Container id="dd_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="dd_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="dd_nav_dot_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="dd_nav_dot" style="height:10px; width:10px"/></Container>
              <Container id="dd_nav_word_cell" style="height:auto; width:auto"><Text id="dd_nav_word" props={content: "NOC · prod 3 / 5 regions", tagName: "span"}/></Container>
              <Container id="dd_nav_live_cell" style="height:auto; width:auto"><Container id="dd_nav_live" style="height:auto; width:auto; padding:4px 10px"><Text id="dd_nav_live_txt" props={content: "LIVE", tagName: "span"}/></Container></Container>
            </FlexContainer>
          </Container>
          <Container id="dd_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="dd_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="dd_nav_i1" props={itemLabel: "KPI", itemTarget: "dd_kpi_region"} style="height:auto; width:auto"/>
              <Container id="dd_nav_i2" props={itemLabel: "Traffic", itemTarget: "dd_chart_region"} style="height:auto; width:auto"/>
              <Container id="dd_nav_i3" props={itemLabel: "Events", itemTarget: "dd_events_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="dd_nav_meta_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="dd_nav_meta" props={content: "2026-09-19 19:42:08 UTC · refresh 5s", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. The five KPI tiles ─── -->
      <Container id="dd_kpi_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:76px">
        <Animate id="dd_kpi_row" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 90, duration: "slow"} style="height:auto; width:100%; padding:24px 32px 10px; gap:14px; align-items:stretch">
          <Container id="dd_k1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="dd_k1_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 18px">
              <Container id="dd_k1_label_cell" style="height:auto; width:auto"><Text id="dd_k1_label" props={content: "NODES ONLINE", tagName: "span"}/></Container>
              <Container id="dd_k1_value_cell" style="height:auto; width:auto"><Text id="dd_k1_value" props={content: "1,284", tagName: "h3"}/></Container>
              <Container id="dd_k1_spark_cell" style="height:26px; width:100%; flex-shrink:0">
                <Svg id="dd_k1_spark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 26' preserveAspectRatio='none' fill='none'><path d='M0,18 L20,16 L40,17 L60,13 L80,14 L100,10 L120,12 L140,8 L160,9' stroke='#4ADE80' stroke-width='2'/></svg>", ariaLabel: "Nodes online trend"} style="height:26px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_k2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="dd_k2_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 18px">
              <Container id="dd_k2_label_cell" style="height:auto; width:auto"><Text id="dd_k2_label" props={content: "REQUEST RATE", tagName: "span"}/></Container>
              <Container id="dd_k2_value_cell" style="height:auto; width:auto"><Text id="dd_k2_value" props={content: "42.8k /s", tagName: "h3"}/></Container>
              <Container id="dd_k2_spark_cell" style="height:26px; width:100%; flex-shrink:0">
                <Svg id="dd_k2_spark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 26' preserveAspectRatio='none' fill='none'><path d='M0,14 L20,15 L40,9 L60,12 L80,7 L100,11 L120,6 L140,10 L160,5' stroke='#22D3EE' stroke-width='2'/></svg>", ariaLabel: "Request rate trend"} style="height:26px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_k3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="dd_k3_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 18px">
              <Container id="dd_k3_label_cell" style="height:auto; width:auto"><Text id="dd_k3_label" props={content: "P99 LATENCY", tagName: "span"}/></Container>
              <Container id="dd_k3_value_cell" style="height:auto; width:auto">
                <FlexContainer id="dd_k3_value_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:8px">
                  <Container id="dd_k3_num_cell" style="height:auto; width:auto"><Text id="dd_k3_num" props={content: "86", tagName: "h3"}/></Container>
                  <Container id="dd_k3_unit_cell" style="height:auto; width:auto"><Text id="dd_k3_unit" props={content: "ms", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dd_k3_spark_cell" style="height:26px; width:100%; flex-shrink:0">
                <Svg id="dd_k3_spark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 26' preserveAspectRatio='none' fill='none'><path d='M0,12 L20,10 L40,14 L60,11 L80,16 L100,12 L120,15 L140,11 L160,13' stroke='#A3E635' stroke-width='2'/></svg>", ariaLabel: "Latency trend"} style="height:26px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_k4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="dd_k4_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 18px">
              <Container id="dd_k4_label_cell" style="height:auto; width:auto"><Text id="dd_k4_label" props={content: "ERROR RATE", tagName: "span"}/></Container>
              <Container id="dd_k4_value_cell" style="height:auto; width:auto"><Text id="dd_k4_value" props={content: "0.03%", tagName: "h3"}/></Container>
              <Container id="dd_k4_spark_cell" style="height:26px; width:100%; flex-shrink:0">
                <Svg id="dd_k4_spark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 26' preserveAspectRatio='none' fill='none'><path d='M0,20 L20,19 L40,21 L60,18 L80,20 L100,17 L120,19 L140,18 L160,20' stroke='#FBBF24' stroke-width='2'/></svg>", ariaLabel: "Error rate trend"} style="height:26px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_k5_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="dd_k5_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 18px">
              <Container id="dd_k5_label_cell" style="height:auto; width:auto"><Text id="dd_k5_label" props={content: "ACTIVE ALERTS", tagName: "span"}/></Container>
              <Container id="dd_k5_value_cell" style="height:auto; width:auto"><Text id="dd_k5_value" props={content: "2", tagName: "h3"}/></Container>
              <Container id="dd_k5_spark_cell" style="height:26px; width:100%; flex-shrink:0">
                <Svg id="dd_k5_spark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 26' preserveAspectRatio='none' fill='none'><path d='M0,22 L30,22 L40,6 L50,22 L80,22 L90,8 L100,22 L160,22' stroke='#F87171' stroke-width='2'/></svg>", ariaLabel: "Alert spikes"} style="height:26px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Line area + load donut ─── -->
      <Container id="dd_chart_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:76px">
        <FlexContainer id="dd_chart_row" props={direction: "row"} style="height:auto; width:100%; padding:14px 32px 10px; gap:14px; align-items:stretch">
          <Container id="dd_line_cell" style="height:auto; flex-basis:0; flex-grow:2; width:100%">
            <FlexContainer id="dd_line_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:stretch; padding:20px 20px">
              <Container id="dd_line_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dd_line_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center; gap:16px">
                  <Container id="dd_line_title_cell" style="height:auto; width:auto"><Text id="dd_line_title" props={content: "Request rate · last 60 minutes", tagName: "span"}/></Container>
                  <Container id="dd_line_legend_cell" style="height:auto; width:auto">
                    <FlexContainer id="dd_line_legend_row" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center">
                      <Container id="dd_leg_1_cell" style="height:auto; width:auto"><Text id="dd_leg_1" props={content: "● East China", tagName: "span"}/></Container>
                      <Container id="dd_leg_2_cell" style="height:auto; width:auto"><Text id="dd_leg_2" props={content: "● North China", tagName: "span"}/></Container>
                      <Container id="dd_leg_3_cell" style="height:auto; width:auto"><Text id="dd_leg_3" props={content: "● South China", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="dd_line_fig_cell" style="height:210px; width:100%; flex-shrink:0">
                <Svg id="dd_line_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 210' preserveAspectRatio='none' fill='none'><g stroke='#1E2A3E' stroke-width='1'><line x1='0' y1='42' x2='900' y2='42'/><line x1='0' y1='84' x2='900' y2='84'/><line x1='0' y1='126' x2='900' y2='126'/><line x1='0' y1='168' x2='900' y2='168'/></g><path d='M0,150 L60,138 L120,146 L180,120 L240,126 L300,98 L360,110 L420,86 L480,96 L540,72 L600,84 L660,64 L720,78 L780,58 L840,66 L900,52 L900,210 L0,210 Z' fill='#22D3EE' opacity='0.1'/><path d='M0,150 L60,138 L120,146 L180,120 L240,126 L300,98 L360,110 L420,86 L480,96 L540,72 L600,84 L660,64 L720,78 L780,58 L840,66 L900,52' stroke='#22D3EE' stroke-width='2.4'/><path d='M0,168 L60,160 L120,164 L180,150 L240,156 L300,140 L360,148 L420,132 L480,140 L540,124 L600,132 L660,118 L720,126 L780,112 L840,120 L900,108' stroke='#4ADE80' stroke-width='2'/><path d='M0,182 L60,178 L120,180 L180,172 L240,176 L300,166 L360,172 L420,160 L480,168 L540,156 L600,162 L660,150 L720,158 L780,146 L840,152 L900,142' stroke='#A3E635' stroke-width='1.6' opacity='0.85'/><line x1='600' y1='0' x2='600' y2='210' stroke='#FBBF24' stroke-width='1' stroke-dasharray='4 4' opacity='0.7'/></svg>", ariaLabel: "Request rate line chart"} style="height:210px; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_donut_cell" style="height:auto; width:320px; flex-shrink:0">
            <FlexContainer id="dd_donut_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:center; padding:20px 20px">
              <Container id="dd_donut_title_cell" style="height:auto; width:100%"><Text id="dd_donut_title" props={content: "Node load", tagName: "span"} style="height:auto; width:100%"/></Container>
              <Container id="dd_donut_fig_cell" style="height:150px; width:150px; flex-shrink:0">
                <Svg id="dd_donut_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150' fill='none'><circle cx='75' cy='75' r='60' stroke='#1E2A3E' stroke-width='18'/><circle cx='75' cy='75' r='60' stroke='#22D3EE' stroke-width='18' stroke-dasharray='226 151' stroke-linecap='butt' transform='rotate(-90 75 75)'/><circle cx='75' cy='75' r='60' stroke='#4ADE80' stroke-width='18' stroke-dasharray='92 285' stroke-dashoffset='-226' transform='rotate(-90 75 75)'/><circle cx='75' cy='75' r='60' stroke='#FBBF24' stroke-width='18' stroke-dasharray='38 339' stroke-dashoffset='-318' transform='rotate(-90 75 75)'/><text x='75' y='70' text-anchor='middle' fill='#E2E8F0' font-size='22' font-weight='700'>62%</text><text x='75' y='90' text-anchor='middle' fill='#64748B' font-size='11'>AVG</text></svg>", ariaLabel: "Load donut"} style="height:150px; width:150px"/>
              </Container>
              <Container id="dd_donut_list_cell" style="height:auto; width:100%">
                <FlexContainer id="dd_donut_list_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="dd_dl_1_cell" style="height:auto; width:100%"><Text id="dd_dl_1" props={content: "● Healthy 62% · 795 nodes", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="dd_dl_2_cell" style="height:auto; width:100%"><Text id="dd_dl_2" props={content: "● High load 25% · 321 nodes", tagName: "span"} style="height:auto; width:100%"/></Container>
                  <Container id="dd_dl_3_cell" style="height:auto; width:100%"><Text id="dd_dl_3" props={content: "● Maintenance 13% · 168 nodes", tagName: "span"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Event stream table ─── -->
      <Container id="dd_events_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:76px">
        <FlexContainer id="dd_events_col" props={direction: "column"} style="height:auto; width:100%; padding:14px 32px 28px; gap:0px">
          <Container id="dd_events_head_cell" style="height:auto; width:100%; padding:16px 18px 12px">
            <FlexContainer id="dd_events_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center; gap:16px">
              <Container id="dd_events_title_cell" style="height:auto; width:auto"><Text id="dd_events_title" props={content: "Event stream · last 20", tagName: "span"}/></Container>
              <Container id="dd_events_filter_cell" style="height:auto; width:auto">
                <FlexContainer id="dd_events_filter_row" props={direction: "row"} style="height:auto; width:auto; gap:10px; align-items:center">
                  <Container id="dd_f_all_cell" style="height:auto; width:auto"><Container id="dd_f_all" style="height:auto; width:auto; padding:4px 12px"><Text id="dd_f_all_txt" props={content: "All", tagName: "span"}/></Container></Container>
                  <Container id="dd_f_warn_cell" style="height:auto; width:auto"><Container id="dd_f_warn" style="height:auto; width:auto; padding:4px 12px"><Text id="dd_f_warn_txt" props={content: "Warnings", tagName: "span"}/></Container></Container>
                  <Container id="dd_f_err_cell" style="height:auto; width:auto"><Container id="dd_f_err" style="height:auto; width:auto; padding:4px 12px"><Text id="dd_f_err_txt" props={content: "Errors", tagName: "span"}/></Container></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dd_ev1_cell" style="height:auto; width:100%; padding:13px 18px">
            <FlexContainer id="dd_ev1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:22px">
              <Container id="dd_ev1_t_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="dd_ev1_t" props={content: "19:41:52", tagName: "span"}/></Container>
              <Container id="dd_ev1_lv_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="dd_ev1_lv" props={content: "WARN", tagName: "span"}/></Container>
              <Container id="dd_ev1_msg_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="dd_ev1_msg" props={content: "cn-east-3 / node-7742 connection pool at 87% — scale-out precheck triggered", tagName: "span"}/></Container>
              <Container id="dd_ev1_src_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="dd_ev1_src" props={content: "autoscaler", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dd_ev2_cell" style="height:auto; width:100%; padding:13px 18px">
            <FlexContainer id="dd_ev2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:22px">
              <Container id="dd_ev2_t_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="dd_ev2_t" props={content: "19:38:10", tagName: "span"}/></Container>
              <Container id="dd_ev2_lv_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="dd_ev2_lv" props={content: "OK", tagName: "span"}/></Container>
              <Container id="dd_ev2_msg_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="dd_ev2_msg" props={content: "Canary release v2.14.3 complete: 5% → 50%, no error-rate regression", tagName: "span"}/></Container>
              <Container id="dd_ev2_src_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="dd_ev2_src" props={content: "deploy-bot", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dd_ev3_cell" style="height:auto; width:100%; padding:13px 18px">
            <FlexContainer id="dd_ev3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:22px">
              <Container id="dd_ev3_t_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="dd_ev3_t" props={content: "19:35:47", tagName: "span"}/></Container>
              <Container id="dd_ev3_lv_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="dd_ev3_lv" props={content: "ERR", tagName: "span"}/></Container>
              <Container id="dd_ev3_msg_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="dd_ev3_msg" props={content: "cn-north-1 / gw-12 upstream timed out 3× (auto-drained, traffic moved to gw-13)", tagName: "span"}/></Container>
              <Container id="dd_ev3_src_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="dd_ev3_src" props={content: "probe", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dd_ev4_cell" style="height:auto; width:100%; padding:13px 18px">
            <FlexContainer id="dd_ev4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:22px">
              <Container id="dd_ev4_t_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="dd_ev4_t" props={content: "19:31:22", tagName: "span"}/></Container>
              <Container id="dd_ev4_lv_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="dd_ev4_lv" props={content: "OK", tagName: "span"}/></Container>
              <Container id="dd_ev4_msg_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="dd_ev4_msg" props={content: "Backup job backup-daily finished: 1.4TB → object storage, checksum verified", tagName: "span"}/></Container>
              <Container id="dd_ev4_src_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="dd_ev4_src" props={content: "backup-job", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dd_ev5_cell" style="height:auto; width:100%; padding:13px 18px">
            <FlexContainer id="dd_ev5_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:22px">
              <Container id="dd_ev5_t_cell" style="height:auto; width:110px; flex-shrink:0"><Text id="dd_ev5_t" props={content: "19:28:03", tagName: "span"}/></Container>
              <Container id="dd_ev5_lv_cell" style="height:auto; width:70px; flex-shrink:0"><Text id="dd_ev5_lv" props={content: "WARN", tagName: "span"}/></Container>
              <Container id="dd_ev5_msg_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="dd_ev5_msg" props={content: "cn-south-1 disk write latency p95 rose to 24ms (sustained for 6 minutes)", tagName: "span"}/></Container>
              <Container id="dd_ev5_src_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="dd_ev5_src" props={content: "storage-agent", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Status bar ─── -->
      <Container id="dd_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="dd_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:14px 32px; justify-content:space-between; align-items:center; gap:24px">
          <Container id="dd_footer_left_cell" style="height:auto; width:auto"><Text id="dd_footer_left" props={content: "NOC cockpit v3 · fictional demo data · 5s sampling window", tagName: "span"}/></Container>
          <Container id="dd_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="dd_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:22px; align-items:center">
              <Container id="dd_footer_f1_cell" style="height:auto; width:auto"><Text id="dd_footer_f1" props={content: "On-call roster", tagName: "span"}/></Container>
              <Container id="dd_footer_f2_cell" style="height:auto; width:auto"><Text id="dd_footer_f2" props={content: "Alert rules", tagName: "span"}/></Container>
              <Container id="dd_footer_f3_cell" style="height:auto; width:auto"><Text id="dd_footer_f3" props={content: "Export snapshot", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── Page base (near-black blue) ──
      @dd_root = { background: #0B1220; }

      # ── Top bar ──
      @dd_nav_region = { background: rgba(11, 18, 32, 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid #1E2A3E; }
      @dd_nav_dot = { background: #4ADE80; border-radius: 999px; box-shadow: 0 0 10px rgba(74, 222, 128, 0.8); }
      @dd_nav_word = { color: #E2E8F0; font-size: 14px; font-weight: 700; letter-spacing: 0.4px; }
      @dd_nav_live = { background: rgba(74, 222, 128, 0.12); border: 1px solid rgba(74, 222, 128, 0.5); border-radius: 4px; }
      @dd_nav_live_txt = { color: #4ADE80; font-size: 10.5px; font-weight: 800; letter-spacing: 2px; }
      @dd_nav_menu = {
        :scope { --anchor-item-color: rgba(226, 232, 240, 0.66); --anchor-item-font-size: 13px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 12px; --anchor-item-radius: 6px; --anchor-item-active-color: #22D3EE; --anchor-item-active-bg: rgba(34, 211, 238, 0.12); --anchor-gap: 6px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.4px; transition: background 0.2s ease, color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(34, 211, 238, 0.08); }
      }
      @dd_nav_meta = { color: #64748B; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── KPI ──
      @dd_k1_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 12px; }
      @dd_k2_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 12px; }
      @dd_k3_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 12px; }
      @dd_k4_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 12px; }
      @dd_k5_col = { background: #121C2E; border: 1px solid rgba(248, 113, 113, 0.45); border-radius: 12px; }
      # 12px CJK labels (4 glyphs, ~54px) become 11px uppercase Latin (up to 13 glyphs, ~96px) — the
      # tracking comes down from 1.4px to 1.2px, still inside the 196px of a 232px tile.
      @dd_k1_label = { color: #64748B; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; }
      @dd_k2_label = { color: #64748B; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; }
      @dd_k3_label = { color: #64748B; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; }
      @dd_k4_label = { color: #64748B; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; }
      @dd_k5_label = { color: #F87171; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; }
      @dd_k1_value = { color: #E2E8F0; font-size: 32px; font-weight: 800; letter-spacing: -1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_k2_value = { color: #22D3EE; font-size: 32px; font-weight: 800; letter-spacing: -1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_k3_num = { color: #A3E635; font-size: 32px; font-weight: 800; letter-spacing: -1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_k3_unit = { color: #64748B; font-size: 14px; font-weight: 600; }
      @dd_k4_value = { color: #FBBF24; font-size: 32px; font-weight: 800; letter-spacing: -1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_k5_value = { color: #F87171; font-size: 32px; font-weight: 800; letter-spacing: -1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Chart cards ──
      @dd_line_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 14px; }
      @dd_donut_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 14px; }
      @dd_line_title = { color: #94A3B8; font-size: 13px; font-weight: 700; letter-spacing: 0.6px; }
      @dd_leg_1 = { color: #22D3EE; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_leg_2 = { color: #4ADE80; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_leg_3 = { color: #A3E635; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_donut_title = { color: #94A3B8; font-size: 13px; font-weight: 700; letter-spacing: 0.6px; text-align: center; }
      @dd_dl_1 = { color: #4ADE80; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_dl_2 = { color: #22D3EE; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_dl_3 = { color: #FBBF24; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Event stream ──
      @dd_events_col = { background: #121C2E; border: 1px solid #1E2A3E; border-radius: 14px; }
      @dd_events_title = { color: #94A3B8; font-size: 13px; font-weight: 700; letter-spacing: 0.6px; }
      @dd_f_all = { background: rgba(34, 211, 238, 0.14); border: 1px solid rgba(34, 211, 238, 0.5); border-radius: 999px; }
      @dd_f_all_txt = { color: #22D3EE; font-size: 11.5px; font-weight: 700; }
      @dd_f_warn = { border: 1px solid #2A3A52; border-radius: 999px; }
      @dd_f_warn_txt = { color: #64748B; font-size: 11.5px; font-weight: 600; }
      @dd_f_err = { border: 1px solid #2A3A52; border-radius: 999px; }
      @dd_f_err_txt = { color: #64748B; font-size: 11.5px; font-weight: 600; }
      @dd_ev1_cell = { border-top: 1px solid #1A2436; }
      @dd_ev2_cell = { border-top: 1px solid #1A2436; }
      @dd_ev3_cell = { border-top: 1px solid #1A2436; }
      @dd_ev4_cell = { border-top: 1px solid #1A2436; }
      @dd_ev5_cell = { border-top: 1px solid #1A2436; }
      @dd_ev1_t = { color: #64748B; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev2_t = { color: #64748B; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev3_t = { color: #64748B; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev4_t = { color: #64748B; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev5_t = { color: #64748B; font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev1_lv = { color: #FBBF24; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
      @dd_ev2_lv = { color: #4ADE80; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
      @dd_ev3_lv = { color: #F87171; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
      @dd_ev4_lv = { color: #4ADE80; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
      @dd_ev5_lv = { color: #FBBF24; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
      # The message column is 784px wide; the longest English line here measures 79 glyphs (506px).
      @dd_ev1_msg = { color: #CBD5E1; font-size: 13px; }
      @dd_ev2_msg = { color: #CBD5E1; font-size: 13px; }
      @dd_ev3_msg = { color: #E2E8F0; font-size: 13px; font-weight: 600; }
      @dd_ev4_msg = { color: #CBD5E1; font-size: 13px; }
      @dd_ev5_msg = { color: #CBD5E1; font-size: 13px; }
      @dd_ev1_src = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev2_src = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev3_src = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev4_src = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_ev5_src = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Status bar ──
      @dd_footer_row = { border-top: 1px solid #1E2A3E; }
      @dd_footer_left = { color: #475569; font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @dd_footer_f1 = { color: #64748B; font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #22D3EE; } }
      @dd_footer_f2 = { color: #64748B; font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #22D3EE; } }
      @dd_footer_f3 = { color: #64748B; font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #22D3EE; } }
    </styles>
  </Page>
</App>
```

## Production notes

**Not a translation — the same console, set in Latin type.** CJK glyphs are square and set without
word spacing, so the Chinese labels are far wider than their glyph count suggests; English labels are
the opposite: fewer ideas per character, more characters. The place it bites on a wall display is the
KPI row, where each tile is 232px wide and 196px of that is indoor space.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| KPI labels | 12px, tracking 1.4px | **11px uppercase, tracking 1.2px** | 4 CJK glyphs (~54px) vs up to 13 Latin glyphs — "ACTIVE ALERTS" measures 101px. Uppercase is the instrument-panel idiom the surrounding LIVE badge already uses |
| Chart / table titles | 13px, tracking 1.2px | 13px, tracking **0.6px** | Wide tracking is a CJK device; at 13px Latin it reads as gaps |
| Nav wordmark tracking | 0.6px | 0.4px | Same reason as the titles; the wordmark itself is 3× the length of `NOC · 生产环境 3 / 5 区` |
| Anchor item tracking | 0.6px | 0.4px | Three short Latin labels; the nav row has room either way, this is purely typographic |

Everything else keeps its Chinese geometry: the five-tile row (`flex-basis:0; flex-grow:1`), the 320px
donut column, the 210px line figure, the event-row column widths (110 / 70 / 150px) and the 22px row
gap, every SVG path, every radius and every colour. The event message column resolves to 784px and the
longest line measures 79 glyphs (506px), so all five rows stay single-line.

**Copy policy** — the console is re-voiced, not transliterated: `在线节点` → *Nodes online*,
`活跃告警` → *Active alerts*, `节点负载分布` → *Node load* (the donut centre reads `AVG`, the ring
being the mean load). The legend regions keep their geography (`华东 / 华北 / 华南` → *East / North /
South China*) because the log lines already say `cn-east-3` / `cn-north-1`; renaming them to
"Americas" would contradict the hostnames. `台` becomes *nodes* — the machine count, not a unit
system. `CST` becomes `UTC`: an English-reading audience parses "CST" as US Central first, and the
timestamp is the one place where a wrong timezone guess breaks the fiction.

**Deliberately kept.** The monospaced numerals (identical advance width in both scripts, so `1,284`,
`42.8k /s`, `86 ms`, `0.03%` are untouched), the `WARN / OK / ERR` level tags, the `19:41:52`
timestamps, `LIVE`, and every hostname-shaped source (`autoscaler`, `probe`, `storage-agent`).

**No structural changes.** Every node id and the single `onMount` orchestration on `dd_kpi_row` are
untouched; there are no bitmap assets to keep in sync — every chart and sparkline is inline SVG in
both editions.
