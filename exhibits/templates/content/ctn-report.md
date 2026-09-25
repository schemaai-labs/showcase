# Document / report / infographic — "Clearview Analytics" 2026 H1 user growth report

> Template role (content / brand tab): the standard long-form report shape — reading-progress bar +
> report header + headline metrics + chart block + body typography (chapters / pull quote / key
> points) + detail table + methodology.
> Scenario: publish a half-year data report as a web page: a 3px reading-progress bar pinned to the
> top (fills as you scroll), a report header (issue / title / publication details), four metric cards,
> two charts (a monthly-active-users line and a channel-composition donut), body copy split into
> "Overall performance" and "Breaking down the growth" (with a conclusion pull quote and a key-point
> list), a channel detail table, and a closing methodology note. Academic typography, static data, no
> API; the progress bar is an enhancement (the page reads fine without JS).

```lang
<App dsl-version="0.3" name="Clearview Analytics · 2026 H1 User Growth Report">
  <Page id="report" name="Growth Report" route="/">
    <FlexContainer id="rp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; position:relative">

      <!-- ─── Reading progress bar (sticky, filled by motion.progress) ─── -->
      <Container id="rp_track" style="flex-shrink:0; flex-grow:0; height:3px; width:100%; position:sticky; top:0px; z-index:50">
        <Container id="rp_fill" style="height:100%; width:100%"/>
      </Container>

      <!-- ─── 1. Report header ─── -->
      <Container id="rp_head" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="rp_head_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:flex-start; gap:18px; padding:72px 32px 40px">
          <Container id="rp_head_eyebrow_cell" style="height:auto; width:auto">
            <Tag id="rp_head_eyebrow" props={text: "DATA REPORT · H1 2026", color: "geekblue"}/>
          </Container>
          <Container id="rp_head_title_cell" style="height:auto; width:100%">
            <Text id="rp_head_title" props={content: "Growth is back in the healthy range", tagName: "h1"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rp_head_sub_cell" style="height:auto; width:100%">
            <Text id="rp_head_sub" props={content: "How acquisition, retention and channel efficiency moved — the full H1 2026 breakdown.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rp_head_meta_cell" style="height:auto; width:100%; padding-top:6px">
            <FlexContainer id="rp_head_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px">
              <Container id="rp_head_org_cell" style="height:auto; width:auto"><Text id="rp_head_org" props={content: "Clearview Analytics · Data Research Institute", tagName: "span"}/></Container>
              <Container id="rp_head_date_cell" style="height:auto; width:auto"><Text id="rp_head_date" props={content: "Published Sep 14, 2026", tagName: "span"}/></Container>
              <Container id="rp_head_read_cell" style="height:auto; width:auto"><Text id="rp_head_read" props={content: "12 min read", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Headline metrics ─── -->
      <Container id="rp_kpi_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 32px 40px">
        <FlexContainer id="rp_kpi_row" props={direction: "row"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">
          <Container id="rp_kpi_users_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_users_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_users_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_users_label" props={content: "New users", tagName: "span"}/></Container>
              <Container id="rp_kpi_users_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_users_value" props={value: "1.28", suffix: "M"}/></Container>
              <Container id="rp_kpi_users_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_users_trend" props={content: "YoY +34%", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_mau_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_mau_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_mau_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_mau_label" props={content: "Monthly active users", tagName: "span"}/></Container>
              <Container id="rp_kpi_mau_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_mau_value" props={value: "5.60", suffix: "M"}/></Container>
              <Container id="rp_kpi_mau_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_mau_trend" props={content: "YoY +21%", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_retention_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_retention_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_retention_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_retention_label" props={content: "Month-2 retention", tagName: "span"}/></Container>
              <Container id="rp_kpi_retention_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_retention_value" props={value: "41", suffix: "%"}/></Container>
              <Container id="rp_kpi_retention_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_retention_trend" props={content: "QoQ +2.6pt", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_nps_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_nps_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_nps_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_nps_label" props={content: "Net promoter score", tagName: "span"}/></Container>
              <Container id="rp_kpi_nps_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_nps_value" props={value: "62"}/></Container>
              <Container id="rp_kpi_nps_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_nps_trend" props={content: "Up 3 quarters running", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Charts ─── -->
      <Container id="rp_chart_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 32px 48px">
        <Container id="rp_chart_wrap" style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto">
          <FlexContainer id="rp_chart_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
            <Container id="rp_chart_trend_cell" style="flex-grow:1; height:auto; width:60%">
              <FlexContainer id="rp_chart_trend_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 20px">
                <Container id="rp_chart_trend_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="rp_chart_trend_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                    <Container id="rp_chart_trend_title_cell" style="height:auto; width:auto"><Text id="rp_chart_trend_title" props={content: "Monthly active users", tagName: "h3"}/></Container>
                    <Container id="rp_chart_trend_note_cell" style="height:auto; width:auto"><Text id="rp_chart_trend_note" props={content: "Unit: millions", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="rp_chart_trend_body_cell" style="height:auto; width:100%">
                  <Chart id="rp_chart_trend" props={type: "line", dataSource: [{m: "Jan", mau: 4.02}, {m: "Feb", mau: 4.18}, {m: "Mar", mau: 4.55}, {m: "Apr", mau: 4.92}, {m: "May", mau: 5.28}, {m: "Jun", mau: 5.60}], xField: "m", series: [{dataKey: "mau", name: "MAU", color: "#4f46e5"}], options: {height: 240, smooth: true, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="rp_chart_channel_cell" style="flex-grow:1; height:auto; width:40%">
              <FlexContainer id="rp_chart_channel_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 20px">
                <Container id="rp_chart_channel_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="rp_chart_channel_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                    <Container id="rp_chart_channel_title_cell" style="height:auto; width:auto"><Text id="rp_chart_channel_title" props={content: "New users by channel", tagName: "h3"}/></Container>
                    <Container id="rp_chart_channel_note_cell" style="height:auto; width:auto"><Text id="rp_chart_channel_note" props={content: "H1 total", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="rp_chart_channel_body_cell" style="height:auto; width:100%">
                  <Chart id="rp_chart_channel" props={type: "pie", dataSource: [{channel: "Organic content", value: 44}, {channel: "Social referral", value: 28}, {channel: "Paid media", value: 21}, {channel: "Partnerships", value: 7}], xField: "channel", series: [{dataKey: "value", name: "Share"}], options: {height: 240, pieInnerRadius: 48, legend: true, tooltip: true, colorPalette: ["#4f46e5", "#0ea5e9", "#f59e0b", "#94a3b8"]}} style="height:auto; width:100%"/>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 4. Body · chapter one ─── -->
      <Container id="rp_body_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:0px 32px 24px">
        <FlexContainer id="rp_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:20px">
          <Container id="rp_ch1_title_cell" style="height:auto; width:100%"><Text id="rp_ch1_title" props={content: "1. Overall performance: the growth curve is healthy again", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch1_p1_cell" style="height:auto; width:100%"><Text id="rp_ch1_p1" props={content: "Monthly active users grew from 4.02M to 5.60M across the half, a compound monthly rate of 6.9%. The mix behind that growth shifted noticeably year over year: organic content and social referral together produced 72% of new users, while paid media fell from 38% to 21% of acquisition — a healthier structure that also leaves room to scale spend in the second half.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch1_quote_cell" style="height:auto; width:100%">
            <Text id="rp_ch1_quote" props={content: "“When retention starts to climb, the growth is finally yours.” — Report conclusion, page 3", tagName: "p"} style="height:auto; width:100%; padding:20px 24px"/>
          </Container>
          <Container id="rp_ch1_p2_cell" style="height:auto; width:100%"><Text id="rp_ch1_p2" props={content: "Retention improved just as clearly: month-2 retention rose from 38.4% to 41%, about 1.8pt of which came from reworked push timing after the new release shipped. NPS has now risen for three consecutive quarters, reaching 62.", tagName: "p"} style="height:auto; width:100%"/></Container>

          <!-- Chapter two -->
          <Container id="rp_ch2_title_cell" style="height:auto; width:100%; padding-top:12px"><Text id="rp_ch2_title" props={content: "2. Breaking down the growth: three bets worth making", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch2_point_1_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_1_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_1_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_1_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_1_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_1_title" props={content: "Organic content: the highest-compounding path", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_1_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_1_desc" props={content: "Industry templates and case studies published continuously bring in 12,000 sign-ups per piece on average; we suggest expanding the content team by 30% in H2.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="rp_ch2_point_2_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_2_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_2_icon" props={iconName: "Share2", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_2_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_2_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_2_title" props={content: "Social referral: invites drive 28% of new users", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_2_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_2_desc" props={content: "Users who send an invite convert at 2.4× the rate of regular users; we suggest moving the invite entry point to the moment a key task is completed.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="rp_ch2_point_3_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_3_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_3_icon" props={iconName: "Target", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_3_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_3_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_3_title" props={content: "Paid media: buying retention, not just traffic", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_3_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_3_desc" props={content: "Making day-7 retention the primary bid goal lifted campaign ROI by 46%; concentrate the budget in the channels that retain best.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Detail table -->
          <Container id="rp_table_title_cell" style="height:auto; width:100%; padding-top:12px"><Text id="rp_table_title" props={content: "Channel detail", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_table_cell" style="height:auto; width:100%">
            <Table id="rp_table" props={columns: [{title: "Channel", dataIndex: "channel", key: "channel", width: "180px"}, {title: "New users", dataIndex: "users", key: "users", width: "140px"}, {title: "Share", dataIndex: "share", key: "share", width: "100px"}, {title: "M2 retention", dataIndex: "retention", key: "retention", width: "120px"}, {title: "CAC", dataIndex: "cac", key: "cac", width: "120px"}], dataSource: [{id: 1, channel: "Organic content", users: "563K", share: "44%", retention: "48%", cac: "$4.20"}, {id: 2, channel: "Social referral", users: "358K", share: "28%", retention: "45%", cac: "$6.80"}, {id: 3, channel: "Paid media", users: "269K", share: "21%", retention: "31%", cac: "$38.50"}, {id: 4, channel: "Partnerships", users: "90K", share: "7%", retention: "52%", cac: "$12.00"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
          </Container>

          <!-- Methodology -->
          <Container id="rp_method_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_method_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:20px 24px">
              <Container id="rp_method_title_cell" style="height:auto; width:100%"><Text id="rp_method_title" props={content: "Methodology and definitions", tagName: "h3"}/></Container>
              <Container id="rp_method_text_cell" style="height:auto; width:100%"><Text id="rp_method_text" props={content: "Monthly active users = unique accounts that signed in at least once in the month. M2 retention = the share of a month's new users still active the following month. NPS comes from a quarterly sample survey (n=4,200). All figures were re-checked against a third-party audit sample.", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Footer ─── -->
      <Container id="rp_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%; max-width:860px"/>
      <Container id="rp_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 32px 48px">
        <FlexContainer id="rp_footer_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:center; gap:10px">
          <Container id="rp_footer_text_cell" style="height:auto; width:auto"><Text id="rp_footer_text" props={content: "© 2026 Clearview Analytics · Data Research Institute (demo template — brand and figures are fictional)", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Reading progress bar (scaleX straight off the scroll ratio, edge-anchored; no JS / reduced-motion → full bar)
      @rp_root = {
        events: { readingProgress: { trigger: "onMount", action: motion.progress({targets: ["rp_fill"]}) } }
      };
    </script>

    <styles>
      # 0. Base tone (academic typography)
      @rp_root = { background: #ffffff; }
      @rp_track = { background: #e2e8f0; }
      @rp_fill = { background: linear-gradient(90deg, #4f46e5 0%, #0ea5e9 100%); }
      @rp_head = { :scope { border-bottom: 1px solid #f1f5f9; } }
      @rp_head_eyebrow = { background-color: #eef2ff; color: #4338ca; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # Measured, not guessed: the 35-glyph headline is 732px at 44px (92% of the 796px content
      # width), so it holds one line like the 9-grapheme CJK original. Tracking -2px → -1.2px —
      # CJK tracking does not carry over to Latin.
      @rp_head_title = { color: #0f172a; font-size: 44px; font-weight: 900; letter-spacing: -1.2px; line-height: 1.12; }
      @rp_head_sub = { color: #475569; font-size: 18px; line-height: 1.6; }
      @rp_head_org = { color: #334155; font-size: 13px; font-weight: 700; }
      @rp_head_date = { color: #94a3b8; font-size: 13px; }
      @rp_head_read = { color: #94a3b8; font-size: 13px; }

      # 1. Metric cards
      @rp_kpi_users_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_mau_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_retention_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_nps_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      # Label/trend seats stay at 13px / 12px — the cards are 203px wide (163px of text), and the
      # longest English label ("Monthly active users") is ~130px, the longest trend ~132px.
      @rp_kpi_users_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rp_kpi_mau_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rp_kpi_retention_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rp_kpi_nps_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rp_kpi_users_value = { color: #4f46e5; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @rp_kpi_mau_value = { color: #0ea5e9; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @rp_kpi_retention_value = { color: #10b981; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @rp_kpi_nps_value = { color: #f59e0b; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @rp_kpi_users_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @rp_kpi_mau_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @rp_kpi_retention_trend = { color: #10b981; font-size: 12px; font-weight: 600; }
      @rp_kpi_nps_trend = { color: #64748b; font-size: 12px; font-weight: 600; }

      # 2. Chart cards
      @rp_chart_trend_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #f1f5f9; } }
      @rp_chart_channel_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #f1f5f9; } }
      @rp_chart_trend_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @rp_chart_channel_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @rp_chart_trend_note = { color: #94a3b8; font-size: 12px; }
      @rp_chart_channel_note = { color: #94a3b8; font-size: 12px; }

      # 3. Body copy
      # 28px / -0.5px seats kept; the chapter titles are re-worded so each one holds a single line
      # (762px / 724px inside the 860px measure), matching the one-line CJK originals.
      @rp_ch1_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @rp_ch2_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      # Body copy 16px → 17px and leading 2.0 → 1.7. Two reasons: the 860px reading column is fixed
      # (the charts and the detail table ride the same grid), so the only lever on the measure is the
      # type size — at 16px a Latin line holds ~113 characters, at 17px ~101; and a Latin 17px body
      # reads at about the optical size of a CJK 16px one.
      @rp_ch1_p1 = { color: #334155; font-size: 17px; line-height: 1.7; }
      @rp_ch1_p2 = { color: #334155; font-size: 17px; line-height: 1.7; }
      @rp_ch1_quote_cell = { background: #eef2ff; border-radius: 12px; :scope { border-left: 4px solid #4f46e5; } }
      @rp_ch1_quote = { color: #3730a3; font-size: 17px; font-weight: 600; line-height: 1.65; }
      @rp_ch2_point_1_icon = { color: #4f46e5; font-size: 22px; }
      @rp_ch2_point_2_icon = { color: #0ea5e9; font-size: 22px; }
      @rp_ch2_point_3_icon = { color: #f59e0b; font-size: 22px; }
      @rp_ch2_point_1_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_2_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_3_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_1_desc = { color: #475569; font-size: 14px; line-height: 1.7; }
      @rp_ch2_point_2_desc = { color: #475569; font-size: 14px; line-height: 1.7; }
      @rp_ch2_point_3_desc = { color: #475569; font-size: 14px; line-height: 1.7; }
      @rp_table_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @rp_method_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px dashed #cbd5e1; } }
      @rp_method_title = { color: #334155; font-size: 15px; font-weight: 800; }
      @rp_method_text = { color: #64748b; font-size: 13px; line-height: 1.7; }
      @rp_footer_divider = { background: #f1f5f9; }
      @rp_footer_text = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Craft notes: a long-form report = reading-progress bar (scaleX enhancement, full bar by default) +
> metrics + charts + chapter typography + detail table + methodology; the body runs in an
> `max-width:860px` reading column, and apart from the progress bar there is no motion at all (this
> is a reading context).
>
> Finish upgrade (2026-09-14, rule 16) — finish/whitespace layering fixed in nine places (header
> band + four metric cards + two chart cards + pull quote + methodology card); metric cards carry an
> inner highlight and a soft shadow.

## Production notes

**A long-document template lives or dies on its reading measure**, so the two levers here were the
heading seats and the leading:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `rp_head_title` | 52px / `-2px` | **44px / -1.2px** | the headline is re-worded as "Growth is back in the healthy range" and measures 732px at 44px — 92% of the 796px content width, so it holds **one line** like the 9-grapheme CJK original. At the 52px seat the English string needs ~900px and breaks with an orphan |
| body copy (`rp_ch1_p1/p2`) | 16px / `line-height: 2` | **17px / 1.7** | the 860px reading column is fixed (the chart row and the detail table ride the same grid), so type size is the only lever on the measure: ~113 characters a line at 16px, ~101 at 17px. Latin also reads smaller than CJK at the same size |
| pull quote / key-point descriptions / methodology | `line-height: 1.9` | **1.7** | same reason, one step down from the Chinese leading |
| `rp_head_sub` | `line-height: 1.8` | **1.6** | it is a single line in the English edition too (748px on the 796px measure) |
| KPI labels / trends | 13px / 12px | 13px / 12px (kept) | the cards are 203px wide with 163px of text; the longest label ("Monthly active users") measures 131px and the longest trend ("Up 3 quarters running") ~132px, so both stay on one line |
| chapter titles (`rp_ch1_title`, `rp_ch2_title`, `rp_table_title`) | 28px / `-0.5px` | 28px / `-0.5px` (kept), **re-worded** | 一、整体表现：增长曲线重回健康斜率 becomes "1. Overall performance: the growth curve is healthy again" (762px) and 二、增长拆解 becomes "2. Breaking down the growth: three bets worth making" (724px) — both one line, matching the originals |
| metric values | `128万` / `560万` | **`1.28 M` / `5.60 M`** | units move to international notation; the line-chart series is restated in millions (4.02 → 5.60) so the KPI cards and the chart read the same number |

**Copy policy — re-expressed, not translated.** The headline and the two chapter titles are
re-worded rather than transliterated, because a literal rendering (把增长拉回「健康区间」 →
"Putting growth back in the healthy range") overshoots the measure and breaks to a second line with
a one-word widow. The publisher is renamed to a neutral English stand-in the way the other English
templates do it (`澄见科技 · 数据研究院` → **Clearview Analytics · Data Research Institute**); currency
in the CAC column moves from ¥ to $, and the table's "56.3 万 / 9.0 万" become "563K / 90K". The
numbers themselves are untouched, so the report's argument (72% of new users from organic +
referral, paid media down from 38% to 21%, retention up 2.6pt, NPS 62) carries over exactly. The pull
quote uses typographic quotes (“…”) rather than the CJK corner brackets, which is also what keeps
the props string parse-clean.

**No structural refactor was needed.** Every node id is identical to the Chinese version: the layout
has no Chinese-only construct, and the E2E addresses (`rp_root`, `rp_fill`, `rp_track`) are
untouched.
