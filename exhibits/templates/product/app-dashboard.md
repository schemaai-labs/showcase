# Analytics Dashboard — "Northline Retail" HQ view

> Template role (product / app tab · SaaS tools): the standard skeleton for a utility dashboard —
> header (brand + filter + actions) plus a content grid (a KPI row of four, a chart row of two,
> a full-width detail table), using the real chart components (line trend + donut composition).
> Scenario: an operations cockpit for a retail chain HQ: one navigation bar on top (brand, date
> range, refresh, notifications, account), then four KPI cards in a row (sales / orders / new
> members / average order value, each with a period-over-period delta), two chart cards in the
> middle (30-day sales trend — this period vs last; channel mix — donut), and a store ranking
> table (6 rows) below. Light grey canvas, white cards, zero motion on the whole page, static
> data, no API calls — a utility page does not get entrance choreography (interaction discipline:
> tool and dense-data pages ship without motion by default).

```lang
<App dsl-version="0.3" name="Northline Retail Operations Cockpit">
  <Page id="dashboard" name="Operations Cockpit" route="/dashboard">
    <FlexContainer id="dash_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Header ─── -->
      <Container id="dash_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="dash_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="dash_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="dash_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="dash_logo_cell" style="height:auto; width:auto"><Icon id="dash_logo" props={iconName: "ChartLine", iconSource: "lucide"}/></Container>
              <Container id="dash_brand_text_cell" style="height:auto; width:auto"><Text id="dash_brand" props={content: "Northline Retail · Operations", tagName: "span"}/></Container>
              <Container id="dash_meta_cell" style="height:auto; width:auto"><Text id="dash_meta" props={content: "Updated 2026-09-14 08:00", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_actions_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="dash_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
              <Container id="dash_range_cell" style="height:auto; width:160px; flex-shrink:0">
                <Select id="dash_range_select" props={options: [{label: "Last 7 days", value: "7d"}, {label: "Last 30 days", value: "30d"}, {label: "This quarter", value: "q3"}], placeholder: "Last 30 days"} style="height:auto; width:100%"/>
              </Container>
              <Container id="dash_refresh_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="dash_refresh_btn" props={content: "Refresh", variant: "default"} style="height:auto; width:auto; padding:7px 16px"/>
              </Container>
              <Container id="dash_bell_cell" style="height:auto; width:auto; flex-shrink:0"><Icon id="dash_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="dash_avatar_cell" style="height:auto; width:auto; flex-shrink:0"><Avatar id="dash_avatar" props={text: "A", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="dash_user_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="dash_user" props={content: "A. Chen", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Content grid (3 rows × 4 cols) ─── -->
      <Container id="dash_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 32px">
        <GridContainer id="dash_grid" props={rows: 3, cols: 4, rowSizes: ["auto", "auto", "1fr"], colSizes: ["1fr", "1fr", "1fr", "1fr"]} style="height:auto; width:100%; gap:16px">

          <!-- row 1: KPI ×4 -->
          <Container id="dash_kpi_sales_cell" style="height:100%; width:100%; grid-row:1; grid-column:1">
            <FlexContainer id="dash_kpi_sales_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_sales_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_sales_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_sales_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_sales_label" props={content: "Sales today", tagName: "span"}/></Container>
                  <Container id="dash_kpi_sales_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_sales_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_sales_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_sales_value" props={value: "864", prefix: "$", suffix: "K"}/></Container>
              <Container id="dash_kpi_sales_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_sales_trend" props={content: "↑ 12.4% vs. yesterday", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_orders_cell" style="height:100%; width:100%; grid-row:1; grid-column:2">
            <FlexContainer id="dash_kpi_orders_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_orders_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_orders_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_orders_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_orders_label" props={content: "Orders today", tagName: "span"}/></Container>
                  <Container id="dash_kpi_orders_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_orders_icon" props={iconName: "ShoppingCart", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_orders_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_orders_value" props={value: "3,284"}/></Container>
              <Container id="dash_kpi_orders_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_orders_trend" props={content: "↑ 8.1% vs. yesterday", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_members_cell" style="height:100%; width:100%; grid-row:1; grid-column:3">
            <FlexContainer id="dash_kpi_members_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_members_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_members_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_members_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_members_label" props={content: "New members", tagName: "span"}/></Container>
                  <Container id="dash_kpi_members_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_members_icon" props={iconName: "Users", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_members_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_members_value" props={value: "412"}/></Container>
              <Container id="dash_kpi_members_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_members_trend" props={content: "↑ 5.6% vs. yesterday", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_aov_cell" style="height:100%; width:100%; grid-row:1; grid-column:4">
            <FlexContainer id="dash_kpi_aov_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_aov_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_aov_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_aov_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_aov_label" props={content: "Avg. order value", tagName: "span"}/></Container>
                  <Container id="dash_kpi_aov_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_aov_icon" props={iconName: "Wallet", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_aov_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_aov_value" props={value: "263", prefix: "$"}/></Container>
              <Container id="dash_kpi_aov_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_aov_trend" props={content: "↓ 1.8% vs. yesterday", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>

          <!-- row 2: charts ×2 (two columns each) -->
          <Container id="dash_chart_trend_cell" style="height:100%; width:100%; grid-row:2; grid-column:1 / 3">
            <FlexContainer id="dash_chart_trend_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_chart_trend_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_chart_trend_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_chart_trend_title_cell" style="height:auto; width:auto"><Text id="dash_chart_trend_title" props={content: "30-day sales trend", tagName: "h3"}/></Container>
                  <Container id="dash_chart_trend_note_cell" style="height:auto; width:auto"><Text id="dash_chart_trend_note" props={content: "USD thousands · online included", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_chart_trend_body_cell" style="height:auto; width:100%">
                <Chart id="dash_chart_trend" props={type: "line", dataSource: [{date: "09-01", gmv: 62.4, last: 58.2}, {date: "09-04", gmv: 68.1, last: 60.5}, {date: "09-07", gmv: 74.6, last: 66.9}, {date: "09-10", gmv: 71.2, last: 69.4}, {date: "09-13", gmv: 79.8, last: 70.1}, {date: "09-16", gmv: 83.5, last: 73.6}, {date: "09-19", gmv: 78.9, last: 75.2}, {date: "09-22", gmv: 88.2, last: 76.8}, {date: "09-25", gmv: 92.6, last: 80.4}, {date: "09-28", gmv: 96.3, last: 82.7}], xField: "date", series: [{dataKey: "gmv", name: "This period", color: "#4f46e5"}, {dataKey: "last", name: "Last period", color: "#c7d2fe"}], options: {height: 268, smooth: true, grid: true, tooltip: true, legend: true}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dash_chart_channel_cell" style="height:100%; width:100%; grid-row:2; grid-column:3 / 5">
            <FlexContainer id="dash_chart_channel_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_chart_channel_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_chart_channel_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_chart_channel_title_cell" style="height:auto; width:auto"><Text id="dash_chart_channel_title" props={content: "Sales by channel", tagName: "h3"}/></Container>
                  <Container id="dash_chart_channel_note_cell" style="height:auto; width:auto"><Text id="dash_chart_channel_note" props={content: "Last 30 days · by GMV", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_chart_channel_body_cell" style="height:auto; width:100%">
                <Chart id="dash_chart_channel" props={type: "pie", dataSource: [{channel: "In-store", value: 58}, {channel: "App", value: 26}, {channel: "Delivery", value: 16}], xField: "channel", series: [{dataKey: "value", name: "Sales"}], options: {height: 268, pieInnerRadius: 52, legend: true, tooltip: true, colorPalette: ["#4f46e5", "#0ea5e9", "#f59e0b"]}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- row 3: store ranking table (full width) -->
          <Container id="dash_table_cell" style="height:100%; width:100%; grid-row:3; grid-column:1 / 5">
            <FlexContainer id="dash_table_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_table_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_table_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_table_title_cell" style="height:auto; width:auto"><Text id="dash_table_title" props={content: "Store ranking", tagName: "h3"}/></Container>
                  <Container id="dash_table_note_cell" style="height:auto; width:auto"><Text id="dash_table_note" props={content: "Attainment = period sales / monthly target", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_table_body_cell" style="height:auto; width:100%">
                <Table id="dash_store_table" props={columns: [{title: "Rank", dataIndex: "rank", key: "rank", width: "80px"}, {title: "Store", dataIndex: "store", key: "store", width: "220px"}, {title: "City", dataIndex: "city", key: "city", width: "120px"}, {title: "Sales", dataIndex: "gmv", key: "gmv", width: "140px"}, {title: "Orders", dataIndex: "orders", key: "orders", width: "120px"}, {title: "Attainment", dataIndex: "rate", key: "rate", width: "120px"}], dataSource: [{id: 1, rank: "1", store: "Northline Central", city: "Hangzhou", gmv: "$186K", orders: "1,284", rate: "108%"}, {id: 2, rank: "2", store: "Riverside Flagship", city: "Hangzhou", gmv: "$162K", orders: "1,102", rate: "102%"}, {id: 3, rank: "3", store: "Wangjing SOHO", city: "Beijing", gmv: "$148K", orders: "986", rate: "96%"}, {id: 4, rank: "4", store: "Teemall", city: "Guangzhou", gmv: "$124K", orders: "872", rate: "92%"}, {id: 5, rank: "5", store: "Chunxi Road", city: "Chengdu", gmv: "$116K", orders: "803", rate: "88%"}, {id: 6, rank: "6", store: "MixC", city: "Shenzhen", gmv: "$102K", orders: "741", rate: "84%"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>

        </GridContainer>
      </Container>
    </FlexContainer>

    <script>
      # Utility page has no data logic (static demo data); refresh is a declarative feedback action
      @dash_refresh_btn = {
        events: { refresh: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Data refreshed as of 2026-09-14 08:00"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and card base
      @dash_root = { background: #f4f6fa; }
      @dash_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @dash_logo = { color: #4f46e5; font-size: 22px; }
      @dash_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @dash_meta = { color: #94a3b8; font-size: 12px; }
      @dash_refresh_btn = {
        color: #3730a3;
        background: #eef2ff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #e0e7ff; }
      }
      @dash_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @dash_avatar = { background-color: #4f46e5; color: #ffffff; font-size: 13px; }
      @dash_user = { color: #334155; font-size: 14px; font-weight: 600; }

      # 1. KPI cards
      @dash_kpi_sales_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_orders_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_members_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_aov_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      # 12px labels: the English KPI names run ~2x the Chinese ones and must stay clear of the corner icon.
      @dash_kpi_sales_label = { color: #64748b; font-size: 12px; font-weight: 600; }
      @dash_kpi_orders_label = { color: #64748b; font-size: 12px; font-weight: 600; }
      @dash_kpi_members_label = { color: #64748b; font-size: 12px; font-weight: 600; }
      @dash_kpi_aov_label = { color: #64748b; font-size: 12px; font-weight: 600; }
      @dash_kpi_sales_icon = { color: #4f46e5; font-size: 18px; }
      @dash_kpi_orders_icon = { color: #0ea5e9; font-size: 18px; }
      @dash_kpi_members_icon = { color: #10b981; font-size: 18px; }
      @dash_kpi_aov_icon = { color: #f59e0b; font-size: 18px; }
      @dash_kpi_sales_value = { color: #4f46e5; font-size: 27px; font-weight: 800; }
      @dash_kpi_orders_value = { color: #0ea5e9; font-size: 27px; font-weight: 800; }
      @dash_kpi_members_value = { color: #10b981; font-size: 27px; font-weight: 800; }
      @dash_kpi_aov_value = { color: #f59e0b; font-size: 27px; font-weight: 800; }
      @dash_kpi_sales_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @dash_kpi_orders_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @dash_kpi_members_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @dash_kpi_aov_trend = { color: #ef4444; font-size: 12px; font-weight: 600; }

      # 2. Chart cards
      @dash_chart_trend_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_chart_channel_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_chart_trend_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @dash_chart_channel_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @dash_chart_trend_note = { color: #94a3b8; font-size: 12px; }
      @dash_chart_channel_note = { color: #94a3b8; font-size: 12px; }

      # 3. Table card
      @dash_table_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_table_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @dash_table_note = { color: #94a3b8; font-size: 12px; }
    </styles>
  </Page>
</App>
```

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** Same reasoning as `mkt-landing`: CJK glyphs are
square and set without word spacing, so English text at identical nominal sizes runs wider. A dense
utility page is where that shows up first — the KPI cards are only ~280px wide, so every label
contends for room with the corner icon.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| KPI labels | 13px | **12px** | "Avg. order value" is ~15 Latin glyphs against 4 CJK chars; at 13px it crowds the 18px corner icon in a 280px card |
| card titles | 17px | **16px** | "30-day sales trend" / "Sales by channel" vs 7–6 CJK chars |
| KPI figures | 27px | 27px (kept) | numerals are the same width in both scripts |
| currency | `¥` prefix + `万` suffix | `$` prefix + `K` suffix | 万 (ten-thousand) has no English equivalent; values are re-expressed in thousands |

Everything else — the grid (`rows: 3, cols: 4` with explicit `grid-row` / `grid-column`), card radii,
shadows, chart options and colour palette — is language-neutral and unchanged.

**Copy policy**: not a literal translation. Chinese retail framing is rewritten to international
equivalents: `星河零售` → Northline Retail, store names transliterated to neutral English stand-ins
(Hangzhou/Beijing/Guangzhou/Chengdu/Shenzhen kept as the real cities they are), `小程序` → App,
`外卖平台` → Delivery. Table figures carried over with the currency restated.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
can address either one by the same selectors.

**Why this template has zero motion**: it is the deliberate counterweight to `mkt-landing`. Dense
utility and data pages ship without entrance choreography — that contrast is the point of having
both templates in the gallery.
