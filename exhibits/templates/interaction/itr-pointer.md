# 指针特效（磁吸 + 跟随光标） — 「声场」音乐现场

> 模板定位（交互 / 动效 tab）：**指针特效**——磁吸 CTA（`motion.magnetic`：光标进入吸附区按钮轻吸向光标、离开回位）+ 跟随光斑（`motion.follow`：装饰层阻尼追随、停手收敛即停）。
> 场景需求：做一页电子音乐现场活动页（深色霓虹）：装饰光斑跟随光标（`pointer-events: none` 置于内容之下）；首屏大标题 + 磁吸「立即购票」按钮（一屏仅此一处磁吸）；向下是阵容三卡与场次信息。特效是增强——触屏/降级面无指针特效，按钮与信息完整可用。

```lang
<App dsl-version="0.3" name="声场 WaveField · 音乐现场">
  <Page id="pointer" name="声场现场" route="/">
    <FlexContainer id="pf_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; position:relative; overflow:hidden">

      <!-- 装饰光斑（DOM 前置：内容之下；pointer-events 经 :scope 规则置 none） -->
      <Container id="pf_glow" style="height:260px; width:260px; position:fixed; left:0px; top:0px; z-index:0"/>

      <!-- 内容层（z-index 抬升到光斑之上） -->
      <FlexContainer id="pf_content" props={direction: "column"} style="height:auto; width:100%; position:relative; z-index:1">

        <!-- ─── 1. 首屏 ─── -->
        <Container id="pf_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center">
          <FlexContainer id="pf_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:920px; align-items:center; gap:24px">
            <Container id="pf_hero_tag_cell" style="height:auto; width:auto">
              <Tag id="pf_hero_tag" props={text: "10.01 — 10.03 · 滨江码头仓库", color: "magenta"}/>
            </Container>
            <Container id="pf_hero_title_cell" style="height:auto; width:100%">
              <Text id="pf_hero_title" props={content: "声场 WAVEFIELD", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="pf_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0">
              <Text id="pf_hero_sub" props={content: "三天 · 十八组音乐人 · 一座会呼吸的仓库——把耳朵交给低频，把夜晚交给声场。", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
            <Container id="pf_hero_cta_cell" style="height:auto; width:auto; padding-top:14px">
              <Button id="pf_hero_cta" props={content: "立即购票 · 单日 ¥280", variant: "primary"} style="height:auto; width:auto; padding:15px 44px"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 2. 阵容 ─── -->
        <Container id="pf_lineup_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:40px 64px 96px">
          <FlexContainer id="pf_lineup_col" props={direction: "column"} style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto; align-items:stretch; gap:36px">
            <Container id="pf_lineup_head_cell" style="height:auto; width:100%">
              <FlexContainer id="pf_lineup_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                <Container id="pf_lineup_title_cell" style="height:auto; width:auto"><Text id="pf_lineup_title" props={content: "首批阵容", tagName: "h2"}/></Container>
                <Container id="pf_lineup_note_cell" style="height:auto; width:auto"><Text id="pf_lineup_note" props={content: "完整阵容每周五更新", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="pf_lineup_cards_cell" style="height:auto; width:100%">
              <FlexContainer id="pf_lineup_cards_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:22px">
                <Container id="pf_artist_1_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_1_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_1_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_1_icon" props={iconName: "AudioWaveform", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_1_name_cell" style="height:auto; width:100%"><Text id="pf_artist_1_name" props={content: "深水区 DEEPWATER", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_1_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_1_desc" props={content: "Techno · 10.01 主舞台压轴，120 分钟现场连打。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="pf_artist_2_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_2_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_2_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_2_icon" props={iconName: "Disc3", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_2_name_cell" style="height:auto; width:100%"><Text id="pf_artist_2_name" props={content: "霓虹信号 NEONSIGNAL", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_2_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_2_desc" props={content: "Synthwave · 10.02 落日时段，仓库天窗全开。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="pf_artist_3_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                  <FlexContainer id="pf_artist_3_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:24px 24px">
                    <Container id="pf_artist_3_icon_cell" style="height:auto; width:auto"><Icon id="pf_artist_3_icon" props={iconName: "Radio", iconSource: "lucide"}/></Container>
                    <Container id="pf_artist_3_name_cell" style="height:auto; width:100%"><Text id="pf_artist_3_name" props={content: "慢速列车 SLOWTRAIN", tagName: "h3"} style="height:auto; width:100%"/></Container>
                    <Container id="pf_artist_3_desc_cell" style="height:auto; width:100%"><Text id="pf_artist_3_desc" props={content: "Ambient · 10.03 收场 Set，配合码头夜航汽笛。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 3. 场次信息 ─── -->
        <Container id="pf_info_band" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:0px 64px 110px">
          <Container id="pf_info_card" style="height:auto; width:100%; max-width:1080px; margin-left:auto; margin-right:auto">
            <FlexContainer id="pf_info_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; gap:32px; padding:32px 36px">
              <Container id="pf_info_left_cell" style="height:auto; width:auto">
                <FlexContainer id="pf_info_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:10px">
                  <Container id="pf_info_time_cell" style="height:auto; width:auto">
                    <FlexContainer id="pf_info_time_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="pf_info_time_icon_cell" style="height:auto; width:auto"><Icon id="pf_info_time_icon" props={iconName: "Clock", iconSource: "lucide"}/></Container>
                      <Container id="pf_info_time_text_cell" style="height:auto; width:auto"><Text id="pf_info_time_text" props={content: "每日 16:00 入场 · 次日 01:00 结束", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pf_info_place_cell" style="height:auto; width:auto">
                    <FlexContainer id="pf_info_place_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="pf_info_place_icon_cell" style="height:auto; width:auto"><Icon id="pf_info_place_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                      <Container id="pf_info_place_text_cell" style="height:auto; width:auto"><Text id="pf_info_place_text" props={content: "滨江码头 3 号仓库（地铁 2 号线 江湾站 C 口）", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="pf_info_cta_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="pf_info_cta" props={content: "查看场次详情", variant: "default"} style="height:auto; width:auto; padding:11px 28px"/>
              </Container>
            </FlexContainer>
          </Container>
        </Container>

        <!-- ─── 页脚 ─── -->
        <Container id="pf_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:24px 48px 44px">
          <Text id="pf_footer_text" props={content: "© 2026 声场 WaveField · 演示模板（品牌与信息均为虚构）", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # 指针特效（仅 mouse/pen 生效；触屏 / reduced-motion 静置——增强层语义）
      @pf_root = {
        events: {
          glowFollow: { trigger: "onMount", action: motion.follow({targets: ["pf_glow"], damping: 0.12}) },
          ctaMagnet: { trigger: "onMount", action: motion.magnetic({targets: ["pf_hero_cta"], strength: 0.3, radius: 90}) }
        }
      }
      @pf_hero_cta = {
        events: { buy: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已跳转购票页：早鸟单日 ¥280（演示）"}) } }
      }
      @pf_info_cta = {
        events: { detail: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "场次详情已展开（演示）"}) } }
      }
    </script>

    <styles>
      # 0. 深色霓虹基调
      @pf_root = { background: #0a0a12; }
      @pf_glow = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(232, 121, 249, 0.22) 0%, rgba(34, 211, 238, 0.12) 45%, transparent 74%);
        :scope { pointer-events: none; }
      }
      @pf_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #1b1030 0%, #0a0a12 60%);
      }
      @pf_hero_tag = { background-color: rgba(232, 121, 249, 0.16); color: #f0abfc; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pf_hero_title = {
        font-size: 92px;
        font-weight: 900;
        letter-spacing: 2px;
        line-height: 1.05;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f0abfc 0%, #67e8f9 55%, #a5b4fc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @pf_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.9; text-align: center; }
      @pf_hero_cta = {
        color: #1a0b2e;
        background: linear-gradient(120deg, #f0abfc 0%, #67e8f9 100%);
        border-radius: 16px;
        font-size: 17px;
        font-weight: 800;
        :scope { transition: box-shadow 0.25s ease; }
        :scope:hover { box-shadow: 0 16px 40px rgba(240, 171, 252, 0.36); }
      }

      # 1. 阵容
      @pf_lineup_title = { color: #f1f5f9; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @pf_lineup_note = { color: #64748b; font-size: 13px; }
      @pf_artist_1_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(240, 171, 252, 0.14); :scope { border: 1px solid rgba(240, 171, 252, 0.24); } }
      @pf_artist_2_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(103, 232, 249, 0.14); :scope { border: 1px solid rgba(103, 232, 249, 0.24); } }
      @pf_artist_3_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 18px; box-shadow: inset 0 1px 0 rgba(165, 180, 252, 0.14); :scope { border: 1px solid rgba(165, 180, 252, 0.24); } }
      @pf_artist_1_icon = { color: #f0abfc; font-size: 30px; }
      @pf_artist_2_icon = { color: #67e8f9; font-size: 30px; }
      @pf_artist_3_icon = { color: #a5b4fc; font-size: 30px; }
      @pf_artist_1_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_2_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_3_name = { color: #f1f5f9; font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
      @pf_artist_1_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @pf_artist_2_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }
      @pf_artist_3_desc = { color: #94a3b8; font-size: 14px; line-height: 1.9; }

      # 2. 场次信息
      @pf_info_card = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 20px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14); :scope { border: 1px solid rgba(148, 163, 184, 0.24); } }
      @pf_info_time_icon = { color: #67e8f9; font-size: 17px; }
      @pf_info_place_icon = { color: #67e8f9; font-size: 17px; }
      @pf_info_time_text = { color: #cbd5e1; font-size: 15px; font-weight: 600; }
      @pf_info_place_text = { color: #cbd5e1; font-size: 15px; font-weight: 600; }
      @pf_info_cta = {
        color: #e2e8f0;
        background: transparent;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 700;
        :scope { border: 1px solid rgba(148, 163, 184, 0.4); transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @pf_footer_text = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：指针特效纪律（规则 19）——**磁吸一屏 ≤1 处**（给独立 CTA；点击语义不受位移影响）／**跟随只给装饰层**且 `pointer-events: none` 经 `:scope` 规则表达（`pointer-events` 不在视觉白名单）＋装饰节点 DOM 前置（内容之下，命中不遮挡）；平滑过渡归 styles 区（执行器只写值）；触屏 / reduced-motion 静置（增强层）。
