# 钉住叙事 + 视差 + 叠层 — 「拾光」一束光的旅程

> 模板定位（交互 / 动效 tab）：滚动叙事的进阶三件套——**钉住段落**（sticky 行程 + 分段 scrub 替换）/ **视差装饰**（双速率光斑）/ **叠层卡片**（纯 CSS sticky 上叠）。
> 场景需求：做一页品牌叙事长页：首屏入场，随后画面被钉住、按滚动的行程比例依次换出三幕（光从何来 / 如何被塑造 / 抵达何处，不透明叠层替换）；中段一条视差带（两层光斑反向慢走、正文原速）；再一段三张阶梯叠层卡（材质 / 工艺 / 交付）滚动成摞；收口 CTA。深色基调，动效全部为增强（零动效面呈现完整长页）。

```lang
<App dsl-version="0.3" name="拾光 · 一束光的旅程">
  <Page id="pinned" name="光的故事" route="/">
    <FlexContainer id="pn_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 首屏（一次性入场） ─── -->
      <Container id="pn_hero_band" style="flex-shrink:0; flex-grow:0; height:100vh; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <FlexContainer id="pn_hero_col" props={direction: "column"} style="height:auto; width:100%; max-width:900px; align-items:center; gap:20px">
          <Container id="pn_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="pn_hero_eyebrow" props={content: "拾光设计 · 2026 光影企划", tagName: "span"} style="height:auto; width:auto"/></Container>
          <Container id="pn_hero_title_cell" style="height:auto; width:100%"><Text id="pn_hero_title" props={content: "一束光的旅程", tagName: "h1"} style="height:auto; width:100%"/></Container>
          <Container id="pn_hero_sub_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="pn_hero_sub" props={content: "向下滚动：画面会被钉住，按你的滚动节奏依次换幕。", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 钉住叙事（行程容器 + sticky 带 + 三幕叠层） ─── -->
      <Container id="pn_trip" style="flex-shrink:0; flex-grow:0; height:300vh; width:100%; justify-content:flex-start; position:relative">
        <Container id="pn_band" style="height:100vh; left:0px; position:sticky; top:0px; width:100%">
          <Container id="pn_step_1" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_1_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_1_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_1_tag" props={text: "第一幕 · 光从何来", color: "gold"}/></Container>
              <Container id="pn_step_1_title_cell" style="height:auto; width:100%"><Text id="pn_step_1_title" props={content: "它先是一次折射", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_1_desc_cell" style="height:auto; width:100%"><Text id="pn_step_1_desc" props={content: "穿过玻璃与尘埃，在白墙上落下第一道轮廓——所有的设计都是从这道轮廓开始的。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="pn_step_2" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_2_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_2_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_2_tag" props={text: "第二幕 · 如何被塑造", color: "cyan"}/></Container>
              <Container id="pn_step_2_title_cell" style="height:auto; width:100%"><Text id="pn_step_2_title" props={content: "然后被反复校准", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_2_desc_cell" style="height:auto; width:100%"><Text id="pn_step_2_desc" props={content: "色温、角度、留白——我们在 27 版稿子里校准它，直到它既安静又有力。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="pn_step_3" style="height:100%; width:100%; position:absolute; top:0px; left:0px; align-items:center; justify-content:center">
            <FlexContainer id="pn_step_3_col" props={direction: "column"} style="height:auto; width:100%; max-width:820px; align-items:center; gap:16px">
              <Container id="pn_step_3_tag_cell" style="height:auto; width:auto"><Tag id="pn_step_3_tag" props={text: "第三幕 · 抵达何处", color: "green"}/></Container>
              <Container id="pn_step_3_title_cell" style="height:auto; width:100%"><Text id="pn_step_3_title" props={content: "最后落在你的屏幕上", tagName: "h2"} style="height:auto; width:100%"/></Container>
              <Container id="pn_step_3_desc_cell" style="height:auto; width:100%"><Text id="pn_step_3_desc" props={content: "当你读完这行字——这束光完成了它的旅程，也开始了另一次。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </Container>
      </Container>

      <!-- ─── 3. 视差带（双速率装饰 + 正文原速） ─── -->
      <Container id="pn_parallax_band" style="flex-shrink:0; flex-grow:0; height:580px; width:100%; align-items:center; justify-content:center; position:relative; overflow:hidden">
        <Container id="pn_glow_back" style="height:320px; width:320px; position:absolute; left:6%; top:10%"/>
        <Container id="pn_glow_front" style="height:200px; width:200px; position:absolute; right:8%; bottom:12%"/>
        <FlexContainer id="pn_parallax_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:center; gap:12px; position:relative">
          <Container id="pn_parallax_title_cell" style="height:auto; width:100%"><Text id="pn_parallax_title" props={content: "背景慢走，正文原速", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="pn_parallax_desc_cell" style="height:auto; width:100%"><Text id="pn_parallax_desc" props={content: "两层光斑以不同速率跟随滚动（0.35 慢走 / -0.25 反向），文字始终以页面速度前进——可读性第一。", tagName: "p"} style="height:auto; width:100%"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 叠层卡片（纯 CSS sticky 上叠） ─── -->
      <Container id="pn_stack_head" style="flex-shrink:0; flex-grow:0; height:220px; width:100%; align-items:center; justify-content:center">
        <Text id="pn_stack_head_text" props={content: "三个词，讲清交付方式", tagName: "h2"} style="height:auto; width:auto"/>
      </Container>
      <Container id="pn_card_material_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:28px">
        <Container id="pn_card_material_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_material_text" props={content: "01 · 材质：只用经得起打印的颜色", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_card_craft_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:52px">
        <Container id="pn_card_craft_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_craft_text" props={content: "02 · 工艺：网格与留白的比例纪律", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_card_deliver_cell" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; position:sticky; top:76px">
        <Container id="pn_card_deliver_text_cell" style="height:auto; left:64px; position:absolute; top:56px; width:auto">
          <Text id="pn_card_deliver_text" props={content: "03 · 交付：源文件、规范与陪跑", tagName: "h2"} style="height:auto; width:auto"/>
        </Container>
      </Container>
      <Container id="pn_stack_tail" style="flex-shrink:0; flex-grow:0; height:480px; width:100%; align-items:center; justify-content:center">
        <Text id="pn_stack_tail_text" props={content: "三张卡依次钉住、上叠成摞——这一步是纯 CSS，零 JS。", tagName: "p"} style="height:auto; width:auto"/>
      </Container>

      <!-- ─── 5. 收口 ─── -->
      <Container id="pn_outro_band" style="flex-shrink:0; flex-grow:0; height:460px; width:100%; align-items:center; justify-content:center">
        <FlexContainer id="pn_outro_col" props={direction: "column"} style="height:auto; width:100%; max-width:720px; align-items:center; gap:14px">
          <Container id="pn_outro_title_cell" style="height:auto; width:100%"><Text id="pn_outro_title" props={content: "让你的品牌，也有一束光", tagName: "h2"} style="height:auto; width:100%"/></Container>
          <Container id="pn_outro_btn_cell" style="height:auto; width:auto; padding-top:8px"><Button id="pn_outro_btn" props={content: "预约品牌咨询", variant: "primary"} style="height:auto; width:auto; padding:13px 34px"/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 页脚 ─── -->
      <Container id="pn_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="pn_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:26px 48px 36px">
        <Text id="pn_footer_text" props={content: "© 2026 拾光设计 · 演示模板（品牌与数据均为虚构）", tagName: "p"} style="height:auto; width:100%"/>
      </Container>
    </FlexContainer>

    <script>
      # 首屏一次性入场（钉住带首帧即视口内容——不做首屏 scrub）
      @pn_hero_band = {
        events: { heroIn: { trigger: "onMount", action: motion.play({targets: ["pn_hero_eyebrow", "pn_hero_title", "pn_hero_sub"], effect: "fadeInUp", stagger: 110, duration: "slow"}) } }
      }
      # 钉住三幕：共用行程源（pn_trip）、行程比例窗口分段、不透明叠层替换（可回退）
      @pn_band = {
        events: {
          step1: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_1"], source: "pn_trip", range: "element", effect: "fadeInUp", start: 0, end: 0.3}) },
          step2: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_2"], source: "pn_trip", range: "element", effect: "fadeInUp", start: 0.35, end: 0.65}) },
          step3: { trigger: "onMount", action: motion.scroll({targets: ["pn_step_3"], source: "pn_trip", range: "element", effect: "scaleIn", start: 0.7, end: 1}) }
        }
      }
      # 视差：只给装饰层（双速率；正文原速）
      @pn_parallax_band = {
        events: {
          glowBack: { trigger: "onMount", action: motion.parallax({targets: ["pn_glow_back"], speed: 0.35}) },
          glowFront: { trigger: "onMount", action: motion.parallax({targets: ["pn_glow_front"], speed: -0.25}) }
        }
      }
      @pn_outro_btn = {
        events: { consult: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已收到你的预约：品牌顾问将在 1 个工作日内联系"}) } }
      }
    </script>

    <styles>
      # 0. 深色基调
      @pn_root = { background: #0b1220; }
      @pn_hero_band = {
        background: radial-gradient(120% 90% at 50% 0%, #14213d 0%, #0b1220 62%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -180px;
          width: 680px;
          height: 680px;
          border-radius: 50%;
          margin-left: -340px;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.14), transparent 72%);
        }
      }
      @pn_hero_eyebrow = { color: #d4af37; font-size: 14px; font-weight: 700; letter-spacing: 5px; }
      @pn_hero_title = {
        font-size: 76px;
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.1;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 52%, #9db8ab 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      }
      @pn_hero_sub = { color: #94a3b8; font-size: 17px; line-height: 1.9; text-align: center; }

      # 1. 钉住带（三幕各带不透明底）
      @pn_band = { background: #0b1220; }
      @pn_step_1 = { background: #0b1220; }
      @pn_step_2 = { background: #0f1c33; }
      @pn_step_3 = { background: #122040; }
      @pn_step_1_tag = { background-color: rgba(212, 175, 55, 0.16); color: #d4af37; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pn_step_2_tag = { background-color: rgba(34, 211, 238, 0.14); color: #67e8f9; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pn_step_3_tag = { background-color: rgba(52, 211, 153, 0.14); color: #6ee7b7; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @pn_step_1_title = { color: #f1f5f9; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @pn_step_2_title = { color: #f1f5f9; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @pn_step_3_title = { color: #f1f5f9; font-size: 52px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @pn_step_1_desc = { color: #94a3b8; font-size: 16px; line-height: 2; text-align: center; }
      @pn_step_2_desc = { color: #94a3b8; font-size: 16px; line-height: 2; text-align: center; }
      @pn_step_3_desc = { color: #94a3b8; font-size: 16px; line-height: 2; text-align: center; }

      # 2. 视差带（装饰层只给光斑）
      @pn_parallax_band = { background: #0d1930; }
      @pn_glow_back = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(34, 211, 238, 0.2), transparent 72%);
      }
      @pn_glow_front = {
        border-radius: 50%;
        background: radial-gradient(closest-side, rgba(212, 175, 55, 0.22), transparent 70%);
      }
      @pn_parallax_title = { color: #f1f5f9; font-size: 36px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pn_parallax_desc = { color: #94a3b8; font-size: 16px; line-height: 2; text-align: center; }

      # 3. 叠层卡
      @pn_stack_head_text = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @pn_card_material_cell = { background: #101d38; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(129, 140, 248, 0.2); } }
      @pn_card_craft_cell = { background: #16264a; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(34, 211, 238, 0.2); } }
      @pn_card_deliver_cell = { background: #1c2f5c; border-radius: 20px; box-shadow: 0 -16px 40px rgba(2, 6, 23, 0.5); :scope { border: 1px solid rgba(212, 175, 55, 0.24); } }
      @pn_card_material_text = { color: #c7d2fe; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pn_card_craft_text = { color: #a5f3fc; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pn_card_deliver_text = { color: #f5e6b8; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pn_stack_tail_text = { color: #64748b; font-size: 16px; text-align: center; }

      # 4. 收口
      @pn_outro_band = { background: #0b1220; }
      @pn_outro_title = { color: #f1f5f9; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @pn_outro_btn = {
        color: #101d18;
        background: linear-gradient(120deg, #f5e6b8 0%, #d4af37 100%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(212, 175, 55, 0.3); }
      }
      @pn_footer_divider = { background: rgba(148, 163, 184, 0.14); }
      @pn_footer_text = { color: #475569; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：三件套纪律（规则 17）——行程容器**显式 `justify-content: flex-start`** + 与 sticky 带同处父子 + **祖先禁 overflow/transform**；三幕共用 `source` 行程源、窗口分段（0→0.3 / 0.35→0.65 / 0.7→1）、**不透明底叠层替换**（scrub 无 fade-out 相）；视差**只给装饰层**（正文原速、同元素不与 scrub 共存）；叠层卡纯 CSS（top 偏移递增 + DOM 序分层 + 尾部留白 ≥一屏）。
