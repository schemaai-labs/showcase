# 值插值（打字机 + 数字滚动） — 「屿见」产品发布页

> 模板定位（交互 / 动效 tab）：**值插值特效**——打字机逐字揭示（`motion.typewriter`）+ KPI 数字滚动（`motion.counter`），仅首屏（可见区）使用。
> 场景需求：给虚构效率产品做发布页：首屏大标题逐字打出（默认文本即终帧）、下方三个指标数字滚动入场（服务团队 / 完成率 / 平均节省时间）；折叠线下保持静态（特性三卡 + 三步介绍 + 收口 CTA）。值插值是增强——无 JS / 降级面默认文本与默认数字完整可读。

```lang
<App dsl-version="0.3" name="屿见 · 产品发布页">
  <Page id="value" name="发布页" route="/">
    <FlexContainer id="rv_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 首屏（打字机 + 数字滚动） ─── -->
      <Container id="rv_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <FlexContainer id="rv_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:center; gap:22px">
          <Container id="rv_hero_tag_cell" style="height:auto; width:auto">
            <Tag id="rv_hero_tag" props={text: "屿见 2.0 · 今日发布", color: "green"}/>
          </Container>
          <Container id="rv_hero_title_cell" style="height:auto; width:100%">
            <Text id="rv_hero_title" props={content: "把复杂的事，变得简单", tagName: "h1"} style="height:auto; width:100%; min-height:80px"/>
          </Container>
          <Container id="rv_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0">
            <Text id="rv_hero_sub" props={content: "别让工具教你做事——屿见把项目、文档与协作收进一个安静的空间。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="rv_hero_stats_cell" style="height:auto; width:100%; padding-top:30px">
            <FlexContainer id="rv_hero_stats_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:84px">
              <Container id="rv_stat_teams_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_teams_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_teams_value_cell" style="height:auto; width:auto"><Text id="rv_stat_teams_value" props={content: "1200", tagName: "h3"}/></Container>
                  <Container id="rv_stat_teams_label_cell" style="height:auto; width:auto"><Text id="rv_stat_teams_label" props={content: "家团队在用", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_stat_rate_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_rate_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_rate_value_cell" style="height:auto; width:auto"><Text id="rv_stat_rate_value" props={content: "98", tagName: "h3"}/></Container>
                  <Container id="rv_stat_rate_label_cell" style="height:auto; width:auto"><Text id="rv_stat_rate_label" props={content: "% 任务按时完成", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_stat_save_cell" style="height:auto; width:auto">
                <FlexContainer id="rv_stat_save_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="rv_stat_save_value_cell" style="height:auto; width:auto"><Text id="rv_stat_save_value" props={content: "3", tagName: "h3"}/></Container>
                  <Container id="rv_stat_save_label_cell" style="height:auto; width:auto"><Text id="rv_stat_save_label" props={content: "小时 / 周 平均节省", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 特性（静态） ─── -->
      <Container id="rv_feat_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:110px 64px 96px">
        <FlexContainer id="rv_feat_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:center; gap:40px">
          <Container id="rv_feat_title_cell" style="height:auto; width:auto"><Text id="rv_feat_title" props={content: "安静，但什么都在", tagName: "h2"}/></Container>
          <Container id="rv_feat_row_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_feat_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px">
              <Container id="rv_feat_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_1_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_1_icon" props={iconName: "Inbox", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_1_title_cell" style="height:auto; width:100%"><Text id="rv_feat_1_title" props={content: "收拢", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_1_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_1_desc" props={content: "五六个工具里的碎片，自动汇总成一条时间线，不用再翻聊天记录。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_feat_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_2_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_2_icon" props={iconName: "LayoutList", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_2_title_cell" style="height:auto; width:100%"><Text id="rv_feat_2_title" props={content: "穿透", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_2_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_2_desc" props={content: "一个任务从口头承诺到交付验收，状态只维护一次，所有人看同一份事实。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="rv_feat_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="rv_feat_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:28px 26px">
                  <Container id="rv_feat_3_icon_cell" style="height:auto; width:auto"><Icon id="rv_feat_3_icon" props={iconName: "BellRing", iconSource: "lucide"}/></Container>
                  <Container id="rv_feat_3_title_cell" style="height:auto; width:100%"><Text id="rv_feat_3_title" props={content: "闭嘴", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="rv_feat_3_desc_cell" style="height:auto; width:100%"><Text id="rv_feat_3_desc" props={content: "默认不打扰：通知按优先级聚合成一份摘要，重要的事才叫醒你。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 三步上手（静态） ─── -->
      <Container id="rv_steps_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 64px 110px">
        <FlexContainer id="rv_steps_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">
          <Container id="rv_step_1_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_1_num_cell" style="height:auto; width:auto"><Text id="rv_step_1_num" props={content: "01", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_1_text_cell" style="height:auto; width:auto"><Text id="rv_step_1_text" props={content: "导入现有项目（支持主流工具一键迁移）", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="rv_step_2_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_2_num_cell" style="height:auto; width:auto"><Text id="rv_step_2_num" props={content: "02", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_2_text_cell" style="height:auto; width:auto"><Text id="rv_step_2_text" props={content: "邀请成员，按角色分配视图与权限", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
          <Container id="rv_step_3_cell" style="height:auto; width:100%">
            <FlexContainer id="rv_step_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:18px; padding:20px 24px">
              <Container id="rv_step_3_num_cell" style="height:auto; width:auto"><Text id="rv_step_3_num" props={content: "03", tagName: "span"} style="height:auto; width:auto"/></Container>
              <Container id="rv_step_3_text_cell" style="height:auto; width:auto"><Text id="rv_step_3_text" props={content: "开一个真实项目跑一周——不好用，全额退", tagName: "span"} style="height:auto; width:auto"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 收口 ─── -->
      <Container id="rv_outro_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 64px 104px">
        <Container id="rv_outro_card" style="height:auto; width:100%; max-width:1000px; margin-left:auto; margin-right:auto">
          <FlexContainer id="rv_outro_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:56px 48px">
            <Container id="rv_outro_title_cell" style="height:auto; width:auto"><Text id="rv_outro_title" props={content: "今天就把待办清空一半", tagName: "h2"}/></Container>
            <Container id="rv_outro_btn_cell" style="height:auto; width:auto; padding-top:10px"><Button id="rv_outro_btn" props={content: "免费开始使用", variant: "primary"} style="height:auto; width:auto; padding:13px 34px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 页脚 ─── -->
      <Container id="rv_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 48px 40px">
        <Text id="rv_footer_text" props={content: "© 2026 屿见产品团队 · 演示模板（品牌与数据均为虚构）", tagName: "p"} style="height:auto; width:100%"/>
      </Container>
    </FlexContainer>

    <script>
      # 值插值：仅首屏（onMount 起播；默认文本 / 默认数字即终帧——无 JS 面完整可读）
      @rv_hero_band = {
        events: {
          typeTitle: { trigger: "onMount", action: motion.typewriter({targets: ["rv_hero_title"], speed: 9, delay: 300}) },
          statsCount: { trigger: "onMount", action: motion.counter({targets: ["rv_stat_teams_value", "rv_stat_rate_value", "rv_stat_save_value"], duration: "slow", delay: 500}) }
        }
      }
      @rv_outro_btn = {
        events: { start: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已为你开通 14 天试用空间"}) } }
      }
    </script>

    <styles>
      # 0. 基调
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
      @rv_hero_title = {
        color: #0f172a;
        font-size: 68px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.15;
        text-align: center;
      }
      @rv_hero_sub = { color: #475569; font-size: 17px; line-height: 1.9; text-align: center; }
      @rv_stat_teams_value = { color: #059669; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_rate_value = { color: #0891b2; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_save_value = { color: #7c3aed; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @rv_stat_teams_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rv_stat_rate_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @rv_stat_save_label = { color: #64748b; font-size: 13px; font-weight: 600; }

      # 1. 特性
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
      @rv_feat_1_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @rv_feat_2_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @rv_feat_3_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }

      # 2. 步骤
      @rv_step_1_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_2_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_3_cell = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @rv_step_1_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_2_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_3_num = { color: #059669; font-size: 22px; font-weight: 900; }
      @rv_step_1_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @rv_step_2_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @rv_step_3_text = { color: #334155; font-size: 15px; font-weight: 600; }

      # 3. 收口
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

> 制作要点：值插值纪律（规则 19③）——**仅首屏/可见区**（onMount 起播，折叠线下白播）；默认文本 / 默认数字即终帧（无 JS 面完整）；打字机短句 + `min-height` 预留高度（防逐字时布局跳动）。
