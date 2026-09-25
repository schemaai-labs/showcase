# 文档 / 报告 / 信息图 — 「澄见科技」2026 上半年用户增长报告

> 模板定位（内容 / 品牌 tab）：长文档报告标准形态——阅读进度条 + 报告头 + 关键指标 + 图表区 + 正文排版（章节 / 引用块 / 要点）+ 数据明细表 + 方法论。
> 场景需求：做一期半年度数据报告网页：顶部 3px 阅读进度条（滚动填充），报告头（刊期 / 标题 / 发布信息），四格关键指标，两张图表（用户增长趋势折线与渠道构成环形），正文分「整体表现 / 增长拆解」两章（含引用结论块与要点列表），渠道数据明细表，末尾方法论说明。学术感排版、静态数据零 API；阅读进度条是增强（无 JS 面完整可读）。

```lang
<App dsl-version="0.3" name="澄见科技 · 2026 上半年用户增长报告">
  <Page id="report" name="增长报告" route="/">
    <FlexContainer id="rp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; position:relative">

      <!-- ─── 阅读进度条（吸顶，motion.progress 刻度填充） ─── -->
      <Container id="rp_track" style="flex-shrink:0; flex-grow:0; height:3px; width:100%; position:sticky; top:0px; z-index:50">
        <Container id="rp_fill" style="height:100%; width:100%"/>
      </Container>

      <!-- ─── 1. 报告头 ─── -->
      <Container id="rp_head" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="rp_head_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:flex-start; gap:18px; padding:72px 32px 40px">
          <Container id="rp_head_eyebrow_cell" style="height:auto; width:auto">
            <Tag id="rp_head_eyebrow" props={text: "数据报告 · 2026 半年刊", color: "geekblue"}/>
          </Container>
          <Container id="rp_head_title_cell" style="height:auto; width:100%">
            <Text id="rp_head_title" props={content: "把增长拉回「健康区间」", tagName: "h1"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rp_head_sub_cell" style="height:auto; width:100%">
            <Text id="rp_head_sub" props={content: "2026 上半年用户增长报告：新增、留存与渠道效率的完整拆解。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rp_head_meta_cell" style="height:auto; width:100%; padding-top:6px">
            <FlexContainer id="rp_head_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px">
              <Container id="rp_head_org_cell" style="height:auto; width:auto"><Text id="rp_head_org" props={content: "澄见科技 · 数据研究院", tagName: "span"}/></Container>
              <Container id="rp_head_date_cell" style="height:auto; width:auto"><Text id="rp_head_date" props={content: "发布于 2026-09-14", tagName: "span"}/></Container>
              <Container id="rp_head_read_cell" style="height:auto; width:auto"><Text id="rp_head_read" props={content: "阅读约 12 分钟", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 关键指标 ─── -->
      <Container id="rp_kpi_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 32px 40px">
        <FlexContainer id="rp_kpi_row" props={direction: "row"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">
          <Container id="rp_kpi_users_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_users_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_users_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_users_label" props={content: "新增用户", tagName: "span"}/></Container>
              <Container id="rp_kpi_users_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_users_value" props={value: "128", suffix: "万"}/></Container>
              <Container id="rp_kpi_users_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_users_trend" props={content: "同比 +34%", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_mau_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_mau_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_mau_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_mau_label" props={content: "月活跃用户", tagName: "span"}/></Container>
              <Container id="rp_kpi_mau_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_mau_value" props={value: "560", suffix: "万"}/></Container>
              <Container id="rp_kpi_mau_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_mau_trend" props={content: "同比 +21%", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_retention_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_retention_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_retention_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_retention_label" props={content: "次月留存", tagName: "span"}/></Container>
              <Container id="rp_kpi_retention_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_retention_value" props={value: "41", suffix: "%"}/></Container>
              <Container id="rp_kpi_retention_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_retention_trend" props={content: "环比 +2.6pt", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="rp_kpi_nps_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
            <FlexContainer id="rp_kpi_nps_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:22px 20px">
              <Container id="rp_kpi_nps_label_cell" style="height:auto; width:100%"><Text id="rp_kpi_nps_label" props={content: "净推荐值 NPS", tagName: "span"}/></Container>
              <Container id="rp_kpi_nps_value_cell" style="height:auto; width:100%"><Statistic id="rp_kpi_nps_value" props={value: "62"}/></Container>
              <Container id="rp_kpi_nps_trend_cell" style="height:auto; width:100%"><Text id="rp_kpi_nps_trend" props={content: "连续三季上升", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 图表区 ─── -->
      <Container id="rp_chart_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 32px 48px">
        <Container id="rp_chart_wrap" style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto">
          <FlexContainer id="rp_chart_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
            <Container id="rp_chart_trend_cell" style="flex-grow:1; height:auto; width:60%">
              <FlexContainer id="rp_chart_trend_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 20px">
                <Container id="rp_chart_trend_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="rp_chart_trend_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                    <Container id="rp_chart_trend_title_cell" style="height:auto; width:auto"><Text id="rp_chart_trend_title" props={content: "月活跃用户趋势", tagName: "h3"}/></Container>
                    <Container id="rp_chart_trend_note_cell" style="height:auto; width:auto"><Text id="rp_chart_trend_note" props={content: "单位：万人", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="rp_chart_trend_body_cell" style="height:auto; width:100%">
                  <Chart id="rp_chart_trend" props={type: "line", dataSource: [{m: "1月", mau: 402}, {m: "2月", mau: 418}, {m: "3月", mau: 455}, {m: "4月", mau: 492}, {m: "5月", mau: 528}, {m: "6月", mau: 560}], xField: "m", series: [{dataKey: "mau", name: "月活跃", color: "#4f46e5"}], options: {height: 240, smooth: true, grid: true, tooltip: true, legend: false}} style="height:auto; width:100%"/>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="rp_chart_channel_cell" style="flex-grow:1; height:auto; width:40%">
              <FlexContainer id="rp_chart_channel_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 20px">
                <Container id="rp_chart_channel_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="rp_chart_channel_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                    <Container id="rp_chart_channel_title_cell" style="height:auto; width:auto"><Text id="rp_chart_channel_title" props={content: "新增渠道构成", tagName: "h3"}/></Container>
                    <Container id="rp_chart_channel_note_cell" style="height:auto; width:auto"><Text id="rp_chart_channel_note" props={content: "上半年累计", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="rp_chart_channel_body_cell" style="height:auto; width:100%">
                  <Chart id="rp_chart_channel" props={type: "pie", dataSource: [{channel: "内容自增长", value: 44}, {channel: "社交裂变", value: 28}, {channel: "付费投放", value: 21}, {channel: "生态合作", value: 7}], xField: "channel", series: [{dataKey: "value", name: "占比"}], options: {height: 240, pieInnerRadius: 48, legend: true, tooltip: true, colorPalette: ["#4f46e5", "#0ea5e9", "#f59e0b", "#94a3b8"]}} style="height:auto; width:100%"/>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 4. 正文 · 第一章 ─── -->
      <Container id="rp_body_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:0px 32px 24px">
        <FlexContainer id="rp_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:20px">
          <Container id="rp_ch1_title_cell" style="height:auto; width:100%"><Text id="rp_ch1_title" props={content: "一、整体表现：增长曲线重回健康斜率", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch1_p1_cell" style="height:auto; width:100%"><Text id="rp_ch1_p1" props={content: "上半年月活跃用户从 402 万增长至 560 万，六个月复合增速 6.9%。与去年同期相比，增长的驱动力发生了明显切换：内容自增长与社交裂变合计贡献 72% 的新增，付费投放占比由 38% 降至 21%——获客结构更健康，也为下半年留出投放弹性。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch1_quote_cell" style="height:auto; width:100%">
            <Text id="rp_ch1_quote" props={content: "「当留存开始抬升，增长才真正属于你。」—— 报告结论 · 第 3 页", tagName: "p"} style="height:auto; width:100%; padding:20px 24px"/>
          </Container>
          <Container id="rp_ch1_p2_cell" style="height:auto; width:100%"><Text id="rp_ch1_p2" props={content: "留存侧的改善同样明显：次月留存由 38.4% 提升至 41%，其中新版本上线后的推送策略调整贡献约 1.8pt。NPS 连续三个季度上升，达到 62。", tagName: "p"} style="height:auto; width:100%"/></Container>

          <!-- 第二章 -->
          <Container id="rp_ch2_title_cell" style="height:auto; width:100%; padding-top:12px"><Text id="rp_ch2_title" props={content: "二、增长拆解：三个值得下注的方向", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_ch2_point_1_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_1_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_1_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_1_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_1_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_1_title" props={content: "内容自增长：复利最高的一条路", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_1_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_1_desc" props={content: "持续输出的行业模板与案例内容，单篇平均带来 1.2 万注册；建议下半年将内容团队扩编 30%。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="rp_ch2_point_2_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_2_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_2_icon" props={iconName: "Share2", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_2_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_2_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_2_title" props={content: "社交裂变：邀请机制拉动 28% 新增", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_2_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_2_desc" props={content: "邀请得权益的转化率是普通用户的 2.4 倍；建议把邀请入口前置到关键任务完成时刻。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="rp_ch2_point_3_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_ch2_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px">
              <Container id="rp_ch2_point_3_icon_cell" style="height:auto; width:auto"><Icon id="rp_ch2_point_3_icon" props={iconName: "Target", iconSource: "lucide"}/></Container>
              <Container id="rp_ch2_point_3_text_cell" style="height:auto; width:auto">
                <FlexContainer id="rp_ch2_point_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="rp_ch2_point_3_title_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_3_title" props={content: "付费投放：从「买量」转向「买留存」", tagName: "h3"}/></Container>
                  <Container id="rp_ch2_point_3_desc_cell" style="height:auto; width:auto"><Text id="rp_ch2_point_3_desc" props={content: "以 7 日留存为首要出价目标后，投放 ROI 提升 46%；预算建议向高留存渠道集中。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 明细表 -->
          <Container id="rp_table_title_cell" style="height:auto; width:100%; padding-top:12px"><Text id="rp_table_title" props={content: "渠道数据明细", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="rp_table_cell" style="height:auto; width:100%">
            <Table id="rp_table" props={columns: [{title: "渠道", dataIndex: "channel", key: "channel", width: "180px"}, {title: "新增用户", dataIndex: "users", key: "users", width: "140px"}, {title: "占比", dataIndex: "share", key: "share", width: "100px"}, {title: "次月留存", dataIndex: "retention", key: "retention", width: "120px"}, {title: "获客成本", dataIndex: "cac", key: "cac", width: "120px"}], dataSource: [{id: 1, channel: "内容自增长", users: "56.3 万", share: "44%", retention: "48%", cac: "¥4.2"}, {id: 2, channel: "社交裂变", users: "35.8 万", share: "28%", retention: "45%", cac: "¥6.8"}, {id: 3, channel: "付费投放", users: "26.9 万", share: "21%", retention: "31%", cac: "¥38.5"}, {id: 4, channel: "生态合作", users: "9.0 万", share: "7%", retention: "52%", cac: "¥12.0"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
          </Container>

          <!-- 方法论 -->
          <Container id="rp_method_cell" style="height:auto; width:100%">
            <FlexContainer id="rp_method_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:20px 24px">
              <Container id="rp_method_title_cell" style="height:auto; width:100%"><Text id="rp_method_title" props={content: "方法论与口径", tagName: "h3"}/></Container>
              <Container id="rp_method_text_cell" style="height:auto; width:100%"><Text id="rp_method_text" props={content: "月活跃用户 = 当月登录 ≥1 次去重账号；次月留存 = 当月新增在次月仍活跃的比例；NPS 来自季度抽样问卷（n=4,200）。数据经第三方审计抽样复核。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 页脚 ─── -->
      <Container id="rp_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%; max-width:860px"/>
      <Container id="rp_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 32px 48px">
        <FlexContainer id="rp_footer_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:center; gap:10px">
          <Container id="rp_footer_text_cell" style="height:auto; width:auto"><Text id="rp_footer_text" props={content: "© 2026 澄见科技 · 数据研究院（演示模板，品牌与数据均为虚构）", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 阅读进度条（刻度直映 scaleX 边缘锚定；无 JS / reduced-motion → 默认满条）
      @rp_root = {
        events: { readingProgress: { trigger: "onMount", action: motion.progress({targets: ["rp_fill"]}) } }
      };
    </script>

    <styles>
      # 0. 基调（学术排版）
      @rp_root = { background: #ffffff; }
      @rp_track = { background: #e2e8f0; }
      @rp_fill = { background: linear-gradient(90deg, #4f46e5 0%, #0ea5e9 100%); }
      @rp_head = { :scope { border-bottom: 1px solid #f1f5f9; } }
      @rp_head_eyebrow = { background-color: #eef2ff; color: #4338ca; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @rp_head_title = { color: #0f172a; font-size: 52px; font-weight: 900; letter-spacing: -2px; line-height: 1.15; }
      @rp_head_sub = { color: #475569; font-size: 18px; line-height: 1.8; }
      @rp_head_org = { color: #334155; font-size: 13px; font-weight: 700; }
      @rp_head_date = { color: #94a3b8; font-size: 13px; }
      @rp_head_read = { color: #94a3b8; font-size: 13px; }

      # 1. 指标卡
      @rp_kpi_users_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_mau_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_retention_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rp_kpi_nps_cell = { background: #f8fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
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

      # 2. 图表卡
      @rp_chart_trend_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #f1f5f9; } }
      @rp_chart_channel_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #f1f5f9; } }
      @rp_chart_trend_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @rp_chart_channel_title = { color: #0f172a; font-size: 16px; font-weight: 700; }
      @rp_chart_trend_note = { color: #94a3b8; font-size: 12px; }
      @rp_chart_channel_note = { color: #94a3b8; font-size: 12px; }

      # 3. 正文
      @rp_ch1_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @rp_ch2_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @rp_ch1_p1 = { color: #334155; font-size: 16px; line-height: 2; }
      @rp_ch1_p2 = { color: #334155; font-size: 16px; line-height: 2; }
      @rp_ch1_quote_cell = { background: #eef2ff; border-radius: 12px; :scope { border-left: 4px solid #4f46e5; } }
      @rp_ch1_quote = { color: #3730a3; font-size: 16px; font-weight: 600; line-height: 1.9; }
      @rp_ch2_point_1_icon = { color: #4f46e5; font-size: 22px; }
      @rp_ch2_point_2_icon = { color: #0ea5e9; font-size: 22px; }
      @rp_ch2_point_3_icon = { color: #f59e0b; font-size: 22px; }
      @rp_ch2_point_1_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_2_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_3_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @rp_ch2_point_1_desc = { color: #475569; font-size: 14px; line-height: 1.9; }
      @rp_ch2_point_2_desc = { color: #475569; font-size: 14px; line-height: 1.9; }
      @rp_ch2_point_3_desc = { color: #475569; font-size: 14px; line-height: 1.9; }
      @rp_table_title = { color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
      @rp_method_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px dashed #cbd5e1; } }
      @rp_method_title = { color: #334155; font-size: 15px; font-weight: 800; }
      @rp_method_text = { color: #64748b; font-size: 13px; line-height: 1.9; }
      @rp_footer_divider = { background: #f1f5f9; }
      @rp_footer_text = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：报告型长文档 = 阅读进度条（scaleX 增强，默认满条）+ 指标 + 图表 + 章节排版 + 明细表 + 方法论；正文用 `max-width:860px` 阅读列；除进度条外零动效（阅读语境）。
>
> 质感升级（2026-09-14，规则 16）——涂装/留白分层修复 ×9（页头带 + 四指标卡 + 两图表卡 + 引述块 + 方法论卡）；指标卡内高光与柔和投影。
