# 滚动叙事长页 — 「聆海 Aurora」降噪耳机新品故事

> 模板定位（交互 / 动效 tab）：滚动叙事标准形态——首屏一次性入场（onMount）+ 折叠线下分带 scrub（`motion.scroll` + `rhythm` 节奏档位）+ 收口揭示。
> 场景需求：做一页耳机新品叙事（深色高级感）：首屏大标题入场（stagger），向下滚动时三段落依次「跟随滚动展开」——降噪特性带（缓入）、空间音频带（强调档）、三个数字带（强调档）、预购收口（缓入档）。首屏绝不用 scrub；关键内容零动效面完整（标题/数字/按钮都是默认态文本）。

```lang
<App dsl-version="0.3" name="聆海 Aurora 新品叙事页">
  <Page id="story" name="Aurora 故事" route="/">
    <FlexContainer id="sc_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 首屏（onMount 一次性入场） ─── -->
      <FlexContainer id="sc_hero_band" props={direction: "column"} style="align-items:center; justify-content:center; gap:22px; min-height:100vh; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="sc_hero_eyebrow_cell" style="height:auto; width:auto; padding:0px 32px"><Text id="sc_hero_eyebrow" props={content: "2026 新品 · 聆海 Aurora ANC", tagName: "span"} style="height:auto; width:auto"/></Container>
        <Container id="sc_hero_title_cell" style="height:auto; width:100%"><Text id="sc_hero_title" props={content: "把世界，调成静音", tagName: "h1"} style="height:auto; width:100%"/></Container>
        <Container id="sc_hero_sub_cell" style="height:auto; width:680px; flex-shrink:0"><Text id="sc_hero_sub" props={content: "40dB 深度降噪 · 空间音频 · 38 小时续航——向下滚动，听它讲完自己的故事。", tagName: "p"} style="height:auto; width:100%"/></Container>
        <Container id="sc_hero_hint_cell" style="height:auto; width:auto; padding-top:26px">
          <FlexContainer id="sc_hero_hint_row" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
            <Container id="sc_hero_hint_icon_cell" style="height:auto; width:auto"><Icon id="sc_hero_hint_icon" props={iconName: "ChevronsDown", iconSource: "lucide"}/></Container>
            <Container id="sc_hero_hint_text_cell" style="height:auto; width:auto"><Text id="sc_hero_hint_text" props={content: "向下滚动", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>

      <!-- ─── 2. 特性带一：降噪（scrub · 标准档） ─── -->
      <Container id="sc_band_anc" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:96px 48px">
        <FlexContainer id="sc_band_anc_row" props={direction: "row"} style="height:auto; width:100%; max-width:1160px; margin-left:auto; margin-right:auto; align-items:center; gap:64px">
          <Container id="sc_anc_copy_cell" style="height:auto; width:100%">
            <FlexContainer id="sc_anc_copy_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px">
              <Container id="sc_anc_tag_cell" style="height:auto; width:auto"><Tag id="sc_anc_tag" props={text: "深度降噪", color: "cyan"}/></Container>
              <Container id="sc_anc_title_cell" style="height:auto; width:100%"><Text id="sc_anc_title" props={content: "40dB 的安静，是听得见的", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="sc_anc_desc_cell" style="height:auto; width:100%"><Text id="sc_anc_desc" props={content: "六麦克风阵列每秒采样 48,000 次，把地铁的轰鸣、键盘的敲击、隔壁的谈话逐层剥离——剩下的，只有你想听的声音。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_anc_visual_cell" style="height:400px; width:440px; flex-shrink:0; position:relative; align-items:center; justify-content:center">
            <Icon id="sc_anc_visual_icon" props={iconName: "Waves", iconSource: "lucide"}/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 特性带二：空间音频（scrub · 强调档） ─── -->
      <Container id="sc_band_space" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:96px 48px">
        <FlexContainer id="sc_band_space_row" props={direction: "row"} style="height:auto; width:100%; max-width:1160px; margin-left:auto; margin-right:auto; align-items:center; gap:64px">
          <Container id="sc_space_visual_cell" style="height:400px; width:440px; flex-shrink:0; position:relative; align-items:center; justify-content:center">
            <Icon id="sc_space_visual_icon" props={iconName: "Orbit", iconSource: "lucide"}/>
          </Container>
          <Container id="sc_space_copy_cell" style="height:auto; width:100%">
            <FlexContainer id="sc_space_copy_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px">
              <Container id="sc_space_tag_cell" style="height:auto; width:auto"><Tag id="sc_space_tag" props={text: "空间音频", color: "purple"}/></Container>
              <Container id="sc_space_title_cell" style="height:auto; width:100%"><Text id="sc_space_title" props={content: "声音有了方向，画面就活了", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="sc_space_desc_cell" style="height:auto; width:100%"><Text id="sc_space_desc" props={content: "动态头部追踪让声场随你转头而移动——看电影时，直升机会从身后掠过；打游戏时，脚步停在你的左后方。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 数字带（scrub · 强调档） ─── -->
      <Container id="sc_band_numbers" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:110px 48px">
        <FlexContainer id="sc_numbers_row" props={direction: "row"} style="height:auto; width:100%; max-width:1000px; margin-left:auto; margin-right:auto; justify-content:center; align-items:center; gap:88px">
          <Container id="sc_num_anc_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_anc_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_anc_value_cell" style="height:auto; width:auto"><Text id="sc_num_anc_value" props={content: "40", tagName: "h2"}/></Container>
              <Container id="sc_num_anc_label_cell" style="height:auto; width:auto"><Text id="sc_num_anc_label" props={content: "dB · 降噪深度", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_num_battery_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_battery_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_battery_value_cell" style="height:auto; width:auto"><Text id="sc_num_battery_value" props={content: "38", tagName: "h2"}/></Container>
              <Container id="sc_num_battery_label_cell" style="height:auto; width:auto"><Text id="sc_num_battery_label" props={content: "小时 · 综合续航", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sc_num_latency_cell" style="height:auto; width:auto">
            <FlexContainer id="sc_num_latency_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="sc_num_latency_value_cell" style="height:auto; width:auto"><Text id="sc_num_latency_value" props={content: "0.09", tagName: "h2"}/></Container>
              <Container id="sc_num_latency_label_cell" style="height:auto; width:auto"><Text id="sc_num_latency_label" props={content: "秒 · 游戏低延迟", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 收口（scrub · 缓入档） ─── -->
      <Container id="sc_band_cta" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:120px 48px 132px">
        <FlexContainer id="sc_cta_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; margin-left:auto; margin-right:auto; align-items:center; gap:16px">
          <Container id="sc_cta_title_cell" style="height:auto; width:100%"><Text id="sc_cta_title" props={content: "现在预购，静音先到", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="sc_cta_desc_cell" style="height:auto; width:100%"><Text id="sc_cta_desc" props={content: "预购用户享 12 期免息与两年质保，首批限量 5,000 台。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sc_cta_btn_cell" style="height:auto; width:auto; padding-top:10px"><Button id="sc_cta_btn" props={content: "立即预购", variant: "primary"} style="height:auto; width:auto; padding:14px 36px"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 页脚 ─── -->
      <Container id="sc_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="sc_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 48px 40px">
        <FlexContainer id="sc_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:10px">
          <Container id="sc_footer_text_cell" style="height:auto; width:auto"><Text id="sc_footer_text" props={content: "© 2026 聆海音频 · 演示模板（品牌与数据均为虚构）", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏一次性入场（onMount；滚动前完整可见——首屏绝不用 scrub）
      @sc_hero_band = {
        events: { playHero: { trigger: "onMount", action: motion.play({targets: ["sc_hero_eyebrow", "sc_hero_title", "sc_hero_sub", "sc_hero_hint_row"], effect: "fadeInUp", stagger: 110, duration: "slow"}) } }
      };
      # 折叠线下：每带一组 scrub 绑定（进度随滚动推进、回退可逆；节奏档位按带位选）
      @sc_band_anc = {
        events: { scrubAnc: { trigger: "onMount", action: motion.scroll({targets: ["sc_anc_copy_col", "sc_anc_visual_cell"], effect: "fadeInUp"}) } }
      };
      @sc_band_space = {
        events: { scrubSpace: { trigger: "onMount", action: motion.scroll({targets: ["sc_space_copy_col", "sc_space_visual_cell"], effect: "scaleIn", rhythm: "emphasis"}) } }
      };
      @sc_band_numbers = {
        events: { scrubNumbers: { trigger: "onMount", action: motion.scroll({targets: ["sc_num_anc_col", "sc_num_battery_col", "sc_num_latency_col"], effect: "fadeInUp", rhythm: "emphasis"}) } }
      };
      @sc_band_cta = {
        events: { scrubCta: { trigger: "onMount", action: motion.scroll({targets: ["sc_cta_title", "sc_cta_desc", "sc_cta_btn"], effect: "fadeInUp", rhythm: "soft"}) } }
      };
      @sc_cta_btn = {
        events: { preorder: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "预购名额已锁定：Aurora 深海蓝，预计 9 月 25 日发货"}) } }
      };
    </script>

    <styles>
      # 0. 深色基调
      @sc_root = { background: #0b1220; }
      @sc_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #14213d 0%, #0b1220 62%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -180px;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(34, 211, 238, 0.16), transparent 70%);
        }
      }
      @sc_hero_eyebrow = { color: #67e8f9; font-size: 14px; font-weight: 700; letter-spacing: 4px; }
      @sc_hero_title = {
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -3px;
        line-height: 1.05;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #e0f2fe 0%, #67e8f9 45%, #a5b4fc 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @sc_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.9; text-align: center; }
      @sc_hero_hint_icon = { color: #22d3ee; font-size: 20px; }
      @sc_hero_hint_text = { color: #475569; font-size: 12px; letter-spacing: 2px; }

      # 1. 特性带
      @sc_anc_tag = { background-color: rgba(34, 211, 238, 0.14); color: #67e8f9; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @sc_space_tag = { background-color: rgba(165, 180, 252, 0.16); color: #c7d2fe; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @sc_anc_title = { color: #f1f5f9; font-size: 42px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.25; }
      @sc_space_title = { color: #f1f5f9; font-size: 42px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.25; }
      @sc_anc_desc = { color: #94a3b8; font-size: 16px; line-height: 2; }
      @sc_space_desc = { color: #94a3b8; font-size: 16px; line-height: 2; }
      @sc_anc_visual_cell = {
        background: radial-gradient(90% 90% at 50% 40%, rgba(34, 211, 238, 0.22) 0%, rgba(15, 23, 42, 0) 70%);
        border-radius: 32px;
        :scope { border: 1px solid rgba(103, 232, 249, 0.16); }
      }
      @sc_space_visual_cell = {
        background: radial-gradient(90% 90% at 50% 40%, rgba(165, 180, 252, 0.22) 0%, rgba(15, 23, 42, 0) 70%);
        border-radius: 32px;
        :scope { border: 1px solid rgba(199, 210, 254, 0.16); }
      }
      @sc_anc_visual_icon = { color: #22d3ee; font-size: 120px; }
      @sc_space_visual_icon = { color: #a5b4fc; font-size: 120px; }

      # 2. 数字带
      @sc_num_anc_value = { color: #67e8f9; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_battery_value = { color: #a5b4fc; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_latency_value = { color: #f0abfc; font-size: 64px; font-weight: 900; letter-spacing: -2px; }
      @sc_num_anc_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 1px; }
      @sc_num_battery_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 1px; }
      @sc_num_latency_label = { color: #64748b; font-size: 14px; font-weight: 600; letter-spacing: 1px; }

      # 3. 收口
      @sc_cta_title = { color: #f1f5f9; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @sc_cta_desc = { color: #94a3b8; font-size: 16px; line-height: 1.9; text-align: center; }
      @sc_cta_btn = {
        color: #06202a;
        background: linear-gradient(120deg, #67e8f9 0%, #a5b4fc 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(34, 211, 238, 0.32); }
      }

      # 4. 页脚
      @sc_footer_divider = { background: rgba(148, 163, 184, 0.16); }
      @sc_footer_text = { color: #475569; font-size: 12px; }
    </styles>
  </Page>
</App>
```

> 制作要点：首屏 `onMount` 入场（绝不用 scrub）；折叠线下四带各自 `motion.scroll` 绑定（目标 = 该带单元，不整页铺）；节奏档位按带位（主体标准 / 数字强调 / 收口缓入）；深色配色与营销 tab 的浅色形成对照；关键文案零动效面完整。
