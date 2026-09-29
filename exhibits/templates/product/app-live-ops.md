# Live Ops Console — "Cloudflare-style" on-call view for 云扉云

> Template role (Product / App tab · SaaS Tools): the **real-time data + state-domain** utility-page skeleton — top bar (brand + time range + hotkeys), a live metrics strip (SSE push), a polling card (scheduled HTTP), an alert list (per-row acknowledge state), a detail page (route params) and a search overlay (⌘K).
> Scenario brief: build an on-call console for a fictional SaaS ops team: (1) top bar — brand, time-range select (**page domain + synced to the URL**, survives refresh), one-click refresh (**⌘R hotkey**), unread badge (**App domain**, shared across pages), search button (⌘K opens the overlay); (2) metrics strip — three cards (CPU / memory / QPS, **SSE push**) plus a "today's orders" card (**HTTP polling** every 30s); (3) alert list — order no. / customer / amount / status tag / per-row "Acknowledge" button (**independent per row**) and double-click to open the detail page; (4) detail page `/alert/:id` (shows the route param, one-click back); (5) search overlay (sub-page). Light grey canvas, white cards, no animation on utility screens.
> Data sources: everything points at the platform's conventional paths `/api/*` (the local profile ships deterministic demo data via the platform mock backend); in a real project swap `url` for your service — bindings, state domains and capability shapes stay identical.
> **How to see data flow**: (1) start the platform server (`pnpm --filter server dev`; the mock data surface is on by default in the local profile); (2) click "Preview" in the editor toolbar — **the editing canvas does not run events** (the template's `onMount: data.query(...)` only fires in preview); (3) the server log prints `[mockdata] GET /api/orders?...` lines so you can confirm requests arrive.

```lang
<App dsl-version="0.3" name="云扉云 Live Ops Console">
  <Page id="ops" name="On-call" route="/ops">
    <FlexContainer id="ops_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; padding:16px; gap:14px">

      <!-- ─── 1. 顶栏：品牌 + 时间范围（页面域 · 进 URL）+ 刷新（⌘R）+ 未读（App 域）+ 搜索（⌘K） ─── -->
      <Container id="ops_header" style="width:100%; height:64px; flex-shrink:0">
        <FlexContainer id="ops_header_row" props={direction: "row"} style="width:100%; height:100%; align-items:center; gap:12px">
          <Container id="ops_brand_cell" style="width:auto; height:auto; flex-shrink:0">
            <FlexContainer id="ops_brand_row" props={direction: "row"} style="width:auto; height:auto; align-items:center; gap:10px">
              <Container id="ops_logo_cell" style="width:auto; height:auto"><Icon id="ops_logo" props={iconName: "Radar", iconSource: "lucide"}/></Container>
              <Container id="ops_brand_text_cell" style="width:auto; height:auto"><Text id="ops_brand" props={content: "云扉云 · Live Ops Console", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ops_spacer" style="width:auto; height:auto; flex-grow:1"/>
          <Container id="ops_range_cell" style="width:150px; height:auto; flex-shrink:0">
            <Select id="ops_range" props={value: "{{page.range}}", options: [{label: "Last hour", value: "1h"}, {label: "Last 24h", value: "24h"}, {label: "Last 7d", value: "7d"}], placeholder: "Last hour"} style="width:100%; height:32px"/>
          </Container>
          <Container id="ops_refresh_cell" style="width:auto; height:auto; flex-shrink:0">
            <Button id="ops_refresh" props={content: "Refresh ⌘R"} style="width:104px; height:32px"/>
          </Container>
          <Container id="ops_unread_cell" style="width:auto; height:auto; flex-shrink:0">
            <Badge id="ops_unread" props={text: "{{app.unreadCount}}", color: "#dc2626"}/>
          </Container>
          <Container id="ops_search_cell" style="width:auto; height:auto; flex-shrink:0">
            <Button id="ops_search" props={content: "Search ⌘K", variant: "primary"} style="width:110px; height:32px"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 指标条：SSE 实时三卡（绑定与 HTTP 同形）+ 轮询卡 ─── -->
      <Container id="ops_metrics" style="width:100%; height:104px; flex-shrink:0">
        <FlexContainer id="ops_metrics_row" props={direction: "row"} style="width:100%; height:100%; gap:12px">
          <Container id="ops_cpu_cell" style="width:100%; height:100%; flex-grow:1">
            <Card id="ops_cpu_card" props={title: "CPU usage"} style="width:100%; height:100%">
              <Container id="ops_cpu_body" style="width:100%; height:100%">
                <Statistic id="ops_cpu" props={value: "{{DOM.ops_root.queries.live.data.cpu}}", suffix: "%"} style="width:100%; height:auto"/>
              </Container>
            </Card>
          </Container>
          <Container id="ops_mem_cell" style="width:100%; height:100%; flex-grow:1">
            <Card id="ops_mem_card" props={title: "Memory usage"} style="width:100%; height:100%">
              <Container id="ops_mem_body" style="width:100%; height:100%">
                <Statistic id="ops_mem" props={value: "{{DOM.ops_root.queries.live.data.memory}}", suffix: "%"} style="width:100%; height:auto"/>
              </Container>
            </Card>
          </Container>
          <Container id="ops_qps_cell" style="width:100%; height:100%; flex-grow:1">
            <Card id="ops_qps_card" props={title: "Gateway QPS"} style="width:100%; height:100%">
              <Container id="ops_qps_body" style="width:100%; height:100%">
                <Statistic id="ops_qps" props={value: "{{DOM.ops_root.queries.live.data.qps}}"} style="width:100%; height:auto"/>
              </Container>
            </Card>
          </Container>
          <Container id="ops_orders_cell" style="width:100%; height:100%; flex-grow:1">
            <Card id="ops_orders_card" props={title: "Orders today (30s poll)"} style="width:100%; height:100%">
              <Container id="ops_orders_body" style="width:100%; height:100%">
                <Statistic id="ops_orders" props={value: "{{DOM.ops_root.queries.stats.data.total}}", suffix: "单"} style="width:100%; height:auto"/>
              </Container>
            </Card>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 告警列表：查询绑定 + 行内Acknowledge态（行实例域）+ 双击进详情 ─── -->
      <Container id="ops_alerts" style="width:100%; height:auto; flex-grow:1">
        <Card id="ops_alerts_card" props={title: "Pending alerts"} style="width:100%; height:100%">
          <Container id="ops_alerts_body" style="width:100%; height:100%">
            <List id="ops_alert_list" props={dataSource: "{{DOM.ops_root.queries.alerts.data}}"} style="width:100%; height:100%; gap:6px">
              <Container id="ops_alert_row" style="width:100%; height:56px; padding:0px 8px">
                <FlexContainer id="ops_row_inner" props={direction: "row"} style="width:100%; height:100%; align-items:center; gap:12px">
                  <Container id="ops_row_no_cell" style="width:180px; height:auto; flex-shrink:0">
                    <Text id="ops_row_no" props={content: "{{item.orderNo}}", tagName: "span"}/>
                  </Container>
                  <Container id="ops_row_customer_cell" style="width:160px; height:auto; flex-shrink:0">
                    <Text id="ops_row_customer" props={content: "{{item.customer}}", tagName: "span"}/>
                  </Container>
                  <Container id="ops_row_amount_cell" style="width:120px; height:auto; flex-shrink:0">
                    <Text id="ops_row_amount" props={content: "¥{{item.amount}}", tagName: "span"}/>
                  </Container>
                  <Container id="ops_row_status_cell" style="width:110px; height:auto; flex-shrink:0">
                    <Tag id="ops_row_status" props={text: "{{item.status}}"} style="width:auto; height:auto"/>
                  </Container>
                  <Container id="ops_row_ack_cell" style="width:120px; height:auto; flex-shrink:0">
                    <Text id="ops_row_ack" props={content: "{{data.ack}}", tagName: "span"}/>
                  </Container>
                  <Container id="ops_row_spacer" style="width:auto; height:auto; flex-grow:1"/>
                  <Container id="ops_row_ack_btn_cell" style="width:auto; height:auto; flex-shrink:0">
                    <Button id="ops_row_ack_btn" props={content: "Acknowledge"} style="width:72px; height:28px"/>
                  </Container>
                </FlexContainer>
              </Container>
            </List>
          </Container>
        </Card>
      </Container>

      <!-- ─── 4. 页脚 ─── -->
      <Container id="ops_footer" style="width:100%; height:32px; flex-shrink:0">
        <Text id="ops_footer_text" props={content: "⌘R refresh · ⌘K search · double-click an alert row for details (time range and filters persist in the URL)", tagName: "p"}/>
      </Container>
    </FlexContainer>

    <script>
      @page = {
        data: { range: "1h" },
        persist: { range: "url" }
      }

      @app = {
        data: { unreadCount: 3 }
      }

      @ops_root = {
        queries: {
          alerts: { method: "GET", url: "/api/orders", params: { status: "pending", range: "{{page.range}}" }, idempotent: true },
          live: { kind: "sse", url: "/api/stream/metrics", reconnect: "auto" },
          stats: { method: "GET", url: "/api/orders/stats", pollInterval: 30000, idempotent: true }
        },
        events: {
          loadAlerts: { trigger: "onMount", action: data.query("alerts") },
          connectLive: { trigger: "onMount", action: data.query("live") },
          pollStats: { trigger: "onMount", action: data.query("stats") }
        }
      }

      @ops_refresh = {
        events: {
          bindHotkey: { trigger: "onMount", action: keyboard.bind({ keys: "meta+r" }) },
          refresh: { trigger: "onClick", action: data.refresh("alerts") }
        }
      }

      @ops_search = {
        events: {
          bindHotkey: { trigger: "onMount", action: keyboard.bind({ keys: "meta+k" }) },
          open: { trigger: "onClick", action: overlay.open({ page: "ops_search_panel", mode: "modal" }) }
        }
      }

      @ops_range = {
        events: {
          changed: { trigger: "onChange", code: "runQuery('alerts');" }
        }
      }

      @ops_row_ack = {
        data: { ack: "Pending" }
      }

      @ops_row_ack_btn = {
        events: {
          ack: { trigger: "onClick", code: "data.ack = 'Acknowledged';\napp.unreadCount = app.unreadCount > 0 ? app.unreadCount - 1 : 0;" },
          toDetail: { trigger: "onDoubleClick", action: nav.to("/alert/{{item.id}}") }
        },
        writes: ["app.unreadCount"]
      }
    </script>
  </Page>

  <Page id="ops_alert" name="Alert detail" route="/alert/:id">
    <FlexContainer id="detail_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; padding:16px; gap:14px">
      <Container id="detail_head" style="width:100%; height:auto">
        <FlexContainer id="detail_head_row" props={direction: "row"} style="width:100%; height:auto; align-items:center; gap:12px">
          <Container id="detail_title_cell" style="width:100%; height:auto">
            <Text id="detail_title" props={content: "Alert detail #{{params.id}}", tagName: "h3"}/>
          </Container>
          <Container id="detail_back_cell" style="width:auto; height:auto; flex-shrink:0">
            <Button id="detail_back" props={content: "Back"} style="width:88px; height:32px"/>
          </Container>
        </FlexContainer>
      </Container>

      <Container id="detail_card_region" style="width:100%; height:auto; flex-grow:1">
        <Card id="detail_card" props={title: "Details"} style="width:100%; height:320px">
          <Container id="detail_card_body" style="width:100%; height:100%">
            <FlexContainer id="detail_card_col" props={direction: "column"} style="width:100%; height:100%; gap:10px">
              <Container id="detail_line_cell" style="width:100%; height:auto">
                <Text id="detail_line" props={content: "Order {{DOM.detail_root.queries.one.data.orderNo}} · amount ¥{{DOM.detail_root.queries.one.data.amount}}", tagName: "p"}/>
              </Container>
              <Container id="detail_status_cell" style="width:100%; height:auto">
                <Text id="detail_status" props={content: "Status: {{DOM.detail_root.queries.one.data.status}} (route param {{params.id}} is read-only)", tagName: "p"}/>
              </Container>
            </FlexContainer>
          </Container>
        </Card>
      </Container>
    </FlexContainer>

    <script>
      @detail_root = {
        queries: {
          one: { method: "GET", url: "/api/orders/{{params.id}}", idempotent: true }
        },
        events: {
          load: { trigger: "onMount", action: data.query("one") }
        }
      }

      @detail_back = {
        events: {
          goBack: { trigger: "onClick", action: nav.back({ fallback: "/ops" }) }
        }
      }
    </script>
  </Page>

  <Page id="ops_search_panel" subpage>
    <FlexContainer id="search_root" props={direction: "column"} style="width:100%; height:100%; padding:20px; gap:12px">
      <Container id="search_title_cell" style="width:100%; height:auto">
        <Text id="search_title" props={content: "Search alerts (opened with ⌘K · close via button or backdrop)", tagName: "h3"}/>
      </Container>
      <Container id="search_input_cell" style="width:100%; height:auto">
        <Input id="search_input" props={value: "{{page.keyword}}", placeholder: "Order no. or customer name"} style="width:100%; height:32px"/>
      </Container>
      <Container id="search_hint_cell" style="width:100%; height:auto">
        <Text id="search_hint" props={content: "The overlay is a sub-page instance (isolated content); the shared counter lives in the top-bar badge (App domain).", tagName: "span"}/>
      </Container>
      <Container id="search_close_cell" style="width:auto; height:auto">
        <Button id="search_close" props={content: "Close"} style="width:88px; height:32px"/>
      </Container>
    </FlexContainer>

    <script>
      @page = { data: { keyword: "" } }   # the sub-page's own page-domain key (page. is per-page)
      @search_close = {
        events: {
          close: { trigger: "onClick", action: overlay.close() }
        }
      }
    </script>
  </Page>
</App>
```
