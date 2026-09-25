# 数据大屏（监控墙） — 「城市轨道」一号线实时监控

> 模板定位（产品 / 应用 tab · SaaS 工具）：深色数据大屏标准形态——顶栏状态 + KPI 大数字（滚动计数）+ 图表双卡 + 底栏事件流。
> 场景需求：给虚构地铁线路做监控大屏：深蓝黑底 + 青色发光，顶栏（线路名 + 运行状态 + 时间），四格 KPI（载客量 / 准点率 / 在线列车 / 告警数，数字滚动入场），两卡图表（24 小时客流折线 + 站点客流柱状），底栏最新事件流（时间 + 等级标签 + 描述）。大屏语境静止展示为主，仅 KPI 一处数字滚动。

```lang
<App dsl-version="0.3" name="城市轨道 · 一号线监控大屏">
  <Page id="wall" name="监控大屏" route="/wall">
    <FlexContainer id="wl_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <FlexContainer id="wl_frame" props={direction: "column"} style="height:auto; width:100%; gap:16px; padding:20px 22px 24px; position:relative">

      <!-- ─── 顶栏 ─── -->
      <Container id="wl_topbar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_topbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 22px">
          <Container id="wl_title_cell" style="height:auto; width:auto">
            <FlexContainer id="wl_title_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="wl_logo_cell" style="height:auto; width:auto"><Icon id="wl_logo" props={iconName: "TrainFront", iconSource: "lucide"}/></Container>
              <Container id="wl_title_text_cell" style="height:auto; width:auto"><Text id="wl_title_text" props={content: "城市轨道 1 号线 · 实时监控", tagName: "h1"}/></Container>
              <Container id="wl_status_cell" style="height:auto; width:auto"><Tag id="wl_status" props={text: "● 全线运行中", color: "green"}/></Container>
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

      <!-- ─── KPI 行 ×4（数字滚动） ─── -->
      <Container id="wl_kpi_row" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; justify-content:center">
        <FlexContainer id="wl_kpi_row_flex" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
          <Container id="wl_kpi_pax_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_pax_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_pax_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_label" props={content: "今日载客（万）", tagName: "span"}/></Container>
              <Container id="wl_kpi_pax_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_value" props={content: "128", tagName: "h2"}/></Container>
              <Container id="wl_kpi_pax_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_pax_note" props={content: "较昨日同时段 +6.2%", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_ontime_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_ontime_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_ontime_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_label" props={content: "准点率（%）", tagName: "span"}/></Container>
              <Container id="wl_kpi_ontime_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_value" props={content: "99.2", tagName: "h2"}/></Container>
              <Container id="wl_kpi_ontime_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_ontime_note" props={content: "近 30 日滚动值", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_train_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_train_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_train_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_label" props={content: "在线列车（列）", tagName: "span"}/></Container>
              <Container id="wl_kpi_train_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_value" props={content: "42", tagName: "h2"}/></Container>
              <Container id="wl_kpi_train_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_train_note" props={content: "发车间隔 3 分 10 秒", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_kpi_alert_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="wl_kpi_alert_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
              <Container id="wl_kpi_alert_label_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_label" props={content: "今日告警（条）", tagName: "span"}/></Container>
              <Container id="wl_kpi_alert_value_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_value" props={content: "3", tagName: "h2"}/></Container>
              <Container id="wl_kpi_alert_note_cell" style="height:auto; width:100%"><Text id="wl_kpi_alert_note" props={content: "均已闭环 · 0 条待处理", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 图表区 ─── -->
      <Container id="wl_charts_row" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_charts_row_flex" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
          <Container id="wl_chart_flow_cell" style="flex-grow:1; height:auto; width:60%">
            <FlexContainer id="wl_chart_flow_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
              <Container id="wl_chart_flow_title_cell" style="height:auto; width:100%"><Text id="wl_chart_flow_title" props={content: "24 小时客流趋势", tagName: "h3"}/></Container>
              <Container id="wl_chart_flow_body_cell" style="height:auto; width:100%">
                <Chart id="wl_chart_flow" props={type: "area", dataSource: [{t: "08:00", pax: 6.2}, {t: "10:00", pax: 9.8}, {t: "12:00", pax: 7.4}, {t: "14:00", pax: 6.1}, {t: "16:00", pax: 8.6}, {t: "18:00", pax: 14.2}, {t: "19:00", pax: 12.8}, {t: "20:00", pax: 9.4}], xField: "t", series: [{dataKey: "pax", name: "客流（万）", color: "#22d3ee"}], options: {height: 240, smooth: true, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="wl_chart_station_cell" style="flex-grow:1; height:auto; width:40%">
            <FlexContainer id="wl_chart_station_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
              <Container id="wl_chart_station_title_cell" style="height:auto; width:100%"><Text id="wl_chart_station_title" props={content: "站点客流 TOP5（万）", tagName: "h3"}/></Container>
              <Container id="wl_chart_station_body_cell" style="height:auto; width:100%">
                <Chart id="wl_chart_station" props={type: "bar", dataSource: [{s: "人民广场", pax: 18.6}, {s: "滨江道", pax: 15.2}, {s: "中山路", pax: 13.8}, {s: "西湖站", pax: 11.4}, {s: "北苑", pax: 9.2}], xField: "s", series: [{dataKey: "pax", name: "客流", color: "#34d399"}], options: {height: 240, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 事件流 ─── -->
      <Container id="wl_events_card" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="wl_events_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px 20px">
          <Container id="wl_events_title_cell" style="height:auto; width:100%"><Text id="wl_events_title" props={content: "最新事件", tagName: "h3"}/></Container>
          <Container id="wl_event_1_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_1_time_cell" style="height:auto; width:auto"><Text id="wl_event_1_time" props={content: "20:42", tagName: "span"}/></Container>
              <Container id="wl_event_1_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_1_tag" props={text: "提示", color: "cyan"}/></Container>
              <Container id="wl_event_1_text_cell" style="height:auto; width:auto"><Text id="wl_event_1_text" props={content: "3 号站台屏蔽门传感器自检通过（例行）", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_2_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_2_time_cell" style="height:auto; width:auto"><Text id="wl_event_2_time" props={content: "20:31", tagName: "span"}/></Container>
              <Container id="wl_event_2_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_2_tag" props={text: "告警", color: "orange"}/></Container>
              <Container id="wl_event_2_text_cell" style="height:auto; width:auto"><Text id="wl_event_2_text" props={content: "滨江道站 B 口客流密度超阈值，已加开一列备车", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_3_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_3_time_cell" style="height:auto; width:auto"><Text id="wl_event_3_time" props={content: "20:15", tagName: "span"}/></Container>
              <Container id="wl_event_3_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_3_tag" props={text: "信息", color: "blue"}/></Container>
              <Container id="wl_event_3_text_cell" style="height:auto; width:auto"><Text id="wl_event_3_text" props={content: "列车 012 完成回库例行检修，恢复正线运营", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="wl_event_4_cell" style="height:auto; width:100%">
            <FlexContainer id="wl_event_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
              <Container id="wl_event_4_time_cell" style="height:auto; width:auto"><Text id="wl_event_4_time" props={content: "19:58", tagName: "span"}/></Container>
              <Container id="wl_event_4_tag_cell" style="height:auto; width:auto"><Tag id="wl_event_4_tag" props={text: "完成", color: "green"}/></Container>
              <Container id="wl_event_4_text_cell" style="height:auto; width:auto"><Text id="wl_event_4_text" props={content: "晚高峰运力预案执行完毕，全线准点恢复", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # KPI 数字滚动（大屏入场值插值；无 JS / reduced-motion → 默认数字完整）
      @wl_kpi_row = {
        events: { kpiCount: { trigger: "onMount", action: motion.counter({targets: ["wl_kpi_pax_value", "wl_kpi_ontime_value", "wl_kpi_train_value", "wl_kpi_alert_value"], duration: "slow"}) } }
      };
    </script>

    <styles>
      # 0. 深色大屏基调
      @wl_root = { background: radial-gradient(120% 100% at 50% 0%, #071528 0%, #020617 62%); }
      @wl_topbar = { background: rgba(15, 32, 56, 0.6); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.18); } }
      @wl_logo = { color: #22d3ee; font-size: 24px; }
      @wl_title_text = { color: #e0f2fe; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @wl_status = { background-color: rgba(52, 211, 153, 0.14); color: #6ee7b7; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @wl_clock_icon = { color: #67e8f9; font-size: 16px; }
      @wl_clock_text = { color: #7dd3fc; font-size: 15px; font-weight: 600; letter-spacing: 1px; }

      # 1. KPI 卡
      @wl_kpi_pax_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.16); box-shadow: inset 0 0 32px rgba(34, 211, 238, 0.05); } }
      @wl_kpi_ontime_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(52, 211, 153, 0.16); box-shadow: inset 0 0 32px rgba(52, 211, 153, 0.05); } }
      @wl_kpi_train_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(129, 140, 248, 0.18); box-shadow: inset 0 0 32px rgba(129, 140, 248, 0.05); } }
      @wl_kpi_alert_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(251, 146, 60, 0.2); box-shadow: inset 0 0 32px rgba(251, 146, 60, 0.06); } }
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

      # 2. 图表卡
      @wl_chart_flow_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(34, 211, 238, 0.14); } }
      @wl_chart_station_cell = { background: rgba(15, 32, 56, 0.72); border-radius: 14px; :scope { border: 1px solid rgba(52, 211, 153, 0.14); } }
      @wl_chart_flow_title = { color: #bae6fd; font-size: 16px; font-weight: 700; letter-spacing: 1px; }
      @wl_chart_station_title = { color: #a7f3d0; font-size: 16px; font-weight: 700; letter-spacing: 1px; }

      # 3. 事件流
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

> 制作要点：大屏 = 深色底 + 描边发光卡 + KPI 大数字（**唯一动效 = 数字滚动**，大屏语境克制）；图表 canonical chart（area/bar）；事件流用 Tag 语义色分级；零 API 静态数据。
