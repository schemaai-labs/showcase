# 数据看板（经营驾驶舱） — 「星河零售」总部视图

> 模板定位（产品 / 应用 tab · SaaS 工具）：工具类看板的标准骨架——顶栏（品牌 + 筛选 + 动作）+ 内容栅格（KPI 行 ×4 / 图表行 ×2 / 明细表整行），真实图表组件（折线趋势 + 环形占比）。
> 场景需求：给连锁零售总部做经营驾驶舱：顶部一条导航（品牌、时间范围选择、刷新、通知、账号），内容区一行四个 KPI（销售额 / 订单数 / 新增会员 / 客单价，带环比趋势），中间两卡图表（近 30 日销售趋势——本期 vs 上期两条线；渠道占比——环形），下方一张门店销售排行表（6 行）。浅灰画布 + 白卡风格，整页零动效、静态数据、零 API——工具页主体不做入场编排（交互纪律：工具/密集数据页默认不做动效）。

```lang
<App dsl-version="0.3" name="星河零售 经营驾驶舱">
  <Page id="dashboard" name="经营驾驶舱" route="/dashboard">
    <FlexContainer id="dash_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 顶栏 ─── -->
      <Container id="dash_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="dash_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="dash_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="dash_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="dash_logo_cell" style="height:auto; width:auto"><Icon id="dash_logo" props={iconName: "ChartLine", iconSource: "lucide"}/></Container>
              <Container id="dash_brand_text_cell" style="height:auto; width:auto"><Text id="dash_brand" props={content: "星河零售 · 经营驾驶舱", tagName: "span"}/></Container>
              <Container id="dash_meta_cell" style="height:auto; width:auto"><Text id="dash_meta" props={content: "数据更新于 2026-09-14 08:00", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_actions_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="dash_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
              <Container id="dash_range_cell" style="height:auto; width:160px; flex-shrink:0">
                <Select id="dash_range_select" props={options: [{label: "近 7 天", value: "7d"}, {label: "近 30 天", value: "30d"}, {label: "本季度", value: "q3"}], placeholder: "近 30 天"} style="height:auto; width:100%"/>
              </Container>
              <Container id="dash_refresh_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="dash_refresh_btn" props={content: "刷新数据", variant: "default"} style="height:auto; width:auto; padding:7px 16px"/>
              </Container>
              <Container id="dash_bell_cell" style="height:auto; width:auto; flex-shrink:0"><Icon id="dash_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="dash_avatar_cell" style="height:auto; width:auto; flex-shrink:0"><Avatar id="dash_avatar" props={text: "澄", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="dash_user_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="dash_user" props={content: "陈列", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 内容栅格（3 行 × 4 列） ─── -->
      <Container id="dash_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 32px">
        <GridContainer id="dash_grid" props={rows: 3, cols: 4, rowSizes: ["auto", "auto", "1fr"], colSizes: ["1fr", "1fr", "1fr", "1fr"]} style="height:auto; width:100%; gap:16px">

          <!-- row1:KPI ×4 -->
          <Container id="dash_kpi_sales_cell" style="height:100%; width:100%; grid-row:1; grid-column:1">
            <FlexContainer id="dash_kpi_sales_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_sales_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_sales_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_sales_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_sales_label" props={content: "今日销售额", tagName: "span"}/></Container>
                  <Container id="dash_kpi_sales_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_sales_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_sales_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_sales_value" props={value: "86.4", prefix: "¥", suffix: "万"}/></Container>
              <Container id="dash_kpi_sales_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_sales_trend" props={content: "↑ 12.4% 较昨日", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_orders_cell" style="height:100%; width:100%; grid-row:1; grid-column:2">
            <FlexContainer id="dash_kpi_orders_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_orders_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_orders_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_orders_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_orders_label" props={content: "今日订单数", tagName: "span"}/></Container>
                  <Container id="dash_kpi_orders_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_orders_icon" props={iconName: "ShoppingCart", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_orders_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_orders_value" props={value: "3,284", suffix: "单"}/></Container>
              <Container id="dash_kpi_orders_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_orders_trend" props={content: "↑ 8.1% 较昨日", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_members_cell" style="height:100%; width:100%; grid-row:1; grid-column:3">
            <FlexContainer id="dash_kpi_members_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_members_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_members_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_members_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_members_label" props={content: "新增会员", tagName: "span"}/></Container>
                  <Container id="dash_kpi_members_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_members_icon" props={iconName: "Users", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_members_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_members_value" props={value: "412", suffix: "人"}/></Container>
              <Container id="dash_kpi_members_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_members_trend" props={content: "↑ 5.6% 较昨日", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="dash_kpi_aov_cell" style="height:100%; width:100%; grid-row:1; grid-column:4">
            <FlexContainer id="dash_kpi_aov_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:18px 20px">
              <Container id="dash_kpi_aov_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_kpi_aov_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="dash_kpi_aov_label_cell" style="height:auto; width:auto"><Text id="dash_kpi_aov_label" props={content: "客单价", tagName: "span"}/></Container>
                  <Container id="dash_kpi_aov_icon_cell" style="height:auto; width:auto"><Icon id="dash_kpi_aov_icon" props={iconName: "Wallet", iconSource: "lucide"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_kpi_aov_value_cell" style="height:auto; width:100%"><Statistic id="dash_kpi_aov_value" props={value: "263", prefix: "¥"}/></Container>
              <Container id="dash_kpi_aov_trend_cell" style="height:auto; width:100%"><Text id="dash_kpi_aov_trend" props={content: "↓ 1.8% 较昨日", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>

          <!-- row2:图表 ×2（各跨 2 列） -->
          <Container id="dash_chart_trend_cell" style="height:100%; width:100%; grid-row:2; grid-column:1 / 3">
            <FlexContainer id="dash_chart_trend_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_chart_trend_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_chart_trend_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_chart_trend_title_cell" style="height:auto; width:auto"><Text id="dash_chart_trend_title" props={content: "近 30 日销售趋势", tagName: "h3"}/></Container>
                  <Container id="dash_chart_trend_note_cell" style="height:auto; width:auto"><Text id="dash_chart_trend_note" props={content: "单位：万元 · 含线上渠道", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_chart_trend_body_cell" style="height:auto; width:100%">
                <Chart id="dash_chart_trend" props={type: "line", dataSource: [{date: "09-01", gmv: 62.4, last: 58.2}, {date: "09-04", gmv: 68.1, last: 60.5}, {date: "09-07", gmv: 74.6, last: 66.9}, {date: "09-10", gmv: 71.2, last: 69.4}, {date: "09-13", gmv: 79.8, last: 70.1}, {date: "09-16", gmv: 83.5, last: 73.6}, {date: "09-19", gmv: 78.9, last: 75.2}, {date: "09-22", gmv: 88.2, last: 76.8}, {date: "09-25", gmv: 92.6, last: 80.4}, {date: "09-28", gmv: 96.3, last: 82.7}], xField: "date", series: [{dataKey: "gmv", name: "本期销售额", color: "#4f46e5"}, {dataKey: "last", name: "上期销售额", color: "#c7d2fe"}], options: {height: 268, smooth: true, grid: true, tooltip: true, legend: true}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="dash_chart_channel_cell" style="height:100%; width:100%; grid-row:2; grid-column:3 / 5">
            <FlexContainer id="dash_chart_channel_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_chart_channel_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_chart_channel_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_chart_channel_title_cell" style="height:auto; width:auto"><Text id="dash_chart_channel_title" props={content: "渠道销售占比", tagName: "h3"}/></Container>
                  <Container id="dash_chart_channel_note_cell" style="height:auto; width:auto"><Text id="dash_chart_channel_note" props={content: "近 30 日 · 按 GMV", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_chart_channel_body_cell" style="height:auto; width:100%">
                <Chart id="dash_chart_channel" props={type: "pie", dataSource: [{channel: "门店", value: 58}, {channel: "小程序", value: 26}, {channel: "外卖平台", value: 16}], xField: "channel", series: [{dataKey: "value", name: "销售额"}], options: {height: 268, pieInnerRadius: 52, legend: true, tooltip: true, colorPalette: ["#4f46e5", "#0ea5e9", "#f59e0b"]}} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- row3:门店排行表（整行） -->
          <Container id="dash_table_cell" style="height:100%; width:100%; grid-row:3; grid-column:1 / 5">
            <FlexContainer id="dash_table_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="dash_table_head_cell" style="height:auto; width:100%">
                <FlexContainer id="dash_table_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="dash_table_title_cell" style="height:auto; width:auto"><Text id="dash_table_title" props={content: "门店销售排行", tagName: "h3"}/></Container>
                  <Container id="dash_table_note_cell" style="height:auto; width:auto"><Text id="dash_table_note" props={content: "达成率 = 本期销售额 / 月度目标", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="dash_table_body_cell" style="height:auto; width:100%">
                <Table id="dash_store_table" props={columns: [{title: "排名", dataIndex: "rank", key: "rank", width: "80px"}, {title: "门店", dataIndex: "store", key: "store", width: "220px"}, {title: "城市", dataIndex: "city", key: "city", width: "120px"}, {title: "销售额", dataIndex: "gmv", key: "gmv", width: "140px"}, {title: "订单数", dataIndex: "orders", key: "orders", width: "120px"}, {title: "达成率", dataIndex: "rate", key: "rate", width: "120px"}], dataSource: [{id: 1, rank: "1", store: "星河中心店", city: "杭州", gmv: "¥18.6万", orders: "1,284", rate: "108%"}, {id: 2, rank: "2", store: "滨江旗舰店", city: "杭州", gmv: "¥16.2万", orders: "1,102", rate: "102%"}, {id: 3, rank: "3", store: "望京 SOHO 店", city: "北京", gmv: "¥14.8万", orders: "986", rate: "96%"}, {id: 4, rank: "4", store: "天河城店", city: "广州", gmv: "¥12.4万", orders: "872", rate: "92%"}, {id: 5, rank: "5", store: "春熙路店", city: "成都", gmv: "¥11.6万", orders: "803", rate: "88%"}, {id: 6, rank: "6", store: "万象城店", city: "深圳", gmv: "¥10.2万", orders: "741", rate: "84%"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>

        </GridContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑（静态演示数据）；刷新为声明式反馈动作
      @dash_refresh_btn = {
        events: { refresh: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "数据已刷新至 2026-09-14 08:00"}) } }
      };
    </script>

    <styles>
      # 0. 画布与卡片基调
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

      # 1. KPI 卡
      @dash_kpi_sales_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_orders_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_members_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_aov_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @dash_kpi_sales_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @dash_kpi_orders_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @dash_kpi_members_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @dash_kpi_aov_label = { color: #64748b; font-size: 13px; font-weight: 600; }
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

      # 2. 图表卡
      @dash_chart_trend_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_chart_channel_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_chart_trend_title = { color: #0f172a; font-size: 17px; font-weight: 700; }
      @dash_chart_channel_title = { color: #0f172a; font-size: 17px; font-weight: 700; }
      @dash_chart_trend_note = { color: #94a3b8; font-size: 12px; }
      @dash_chart_channel_note = { color: #94a3b8; font-size: 12px; }

      # 3. 表格卡
      @dash_table_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @dash_table_title = { color: #0f172a; font-size: 17px; font-weight: 700; }
      @dash_table_note = { color: #94a3b8; font-size: 12px; }
    </styles>
  </Page>
</App>
```

> 制作要点：工具页语境**零入场编排**（交互纪律：密集数据页不做逐块动画——对比营销 tab 的 `mkt-landing` 即两种语境的对照样本）；图表用 canonical `chart` 组件（type/series/options 平台词汇表，禁 vendor 直通）；全部数据为静态字面量（虚构）。
