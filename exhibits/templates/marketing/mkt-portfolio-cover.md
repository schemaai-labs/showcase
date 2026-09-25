# 3D 作品集封面 — 「陈冉 UI/UX 作品集：PORTFOLIO DESIGN」

> 模板定位（营销 / 增长 tab · 图文叠印）：**双素材叠放 + 组件绘制**的作品集封面——底图（液态金属抽象背景）铺满画板、人物透明素材（已抠图）叠在其上，标题渐变字 / 圆角徽章 / 技能标签 / 应用图标瓦片 / 上下信息条全由平台组件绘制。
> 场景需求：复刻一张虚构设计师的作品集封面（1104×829 横版）——深色抽象底 + 3D 人物压右侧，超大渐变标题 "PORTFOLIO" 与宽字距 "DESIGN"，薄荷绿胶囊徽章「2021-2023 ✕ UI作品集」，五枚技能标签，四枚应用图标瓦片（Figma / Ai / 3D 金字），顶部与底部信息条。零 API、零动效（平面设计复刻纪律）。

```lang
<App dsl-version="0.3" name="陈冉 UI/UX 作品集封面">
  <Page id="cover" name="封面" route="/">
    <FlexContainer id="t2_stage" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; padding:40px 24px; position:relative">

      <Container id="t2_art" style="width:1104px; height:829px; flex-shrink:0; position:relative; overflow:hidden">

        <!-- ─── 0. 底图（液态金属抽象背景，铺满画板） ─── -->
        <Container id="t2_bg_cell" style="position:absolute; left:0px; top:0px; width:1104px; height:832px; z-index:0">
          <Image id="t2_bg" props={src: "assets/images/portfolio-cover-bg.png", alt: "液态金属抽象背景", objectFit: "cover", loading: "eager"} style="width:1104px; height:832px"/>
        </Container>

        <!-- ─── 1. 主标题（在人物之下：发丝遮住 LIO） ─── -->
        <FlexContainer id="t2_title1_box" props={direction: "column"} style="position:absolute; left:45px; top:102px; width:820px; height:140px; align-items:flex-start; justify-content:center; z-index:1">
          <Container id="t2_title1_cell" style="width:100%; height:auto">
            <Text id="t2_title1" props={content: "PORTFOLIO", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_title2_box" props={direction: "column"} style="position:absolute; left:51px; top:260px; width:420px; height:96px; align-items:flex-start; justify-content:center; z-index:1">
          <Container id="t2_title2_cell" style="width:100%; height:auto">
            <Text id="t2_title2" props={content: "DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 2. 人物素材（透明抠图，压在标题之上） ─── -->
        <Container id="t2_girl_cell" style="position:absolute; left:237px; top:26px; width:1102px; height:830px; z-index:2">
          <Image id="t2_girl" props={src: "assets/images/portfolio-cover-girl.png", alt: "3D 人物插画：薄荷绿发色设计师", objectFit: "contain", loading: "eager"} style="width:1102px; height:830px"/>
        </Container>

        <!-- ─── 3. 应用图标瓦片（Ai / Figma / 3D 金字 / 右缘） ─── -->
        <FlexContainer id="t2_icon_ai_box" props={direction: "column"} style="position:absolute; left:967px; top:360px; width:70px; height:110px; align-items:center; justify-content:center; z-index:3">
          <Container id="t2_icon_ai_txt_cell" style="width:100%; height:auto">
            <Text id="t2_icon_ai_txt" props={content: "Ai", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_icon_figma_box" props={direction: "column"} style="position:absolute; left:552px; top:650px; width:56px; height:86px; align-items:center; justify-content:center; z-index:3; gap:3px">
          <FlexContainer id="t2_figma_r1" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_a_cell" style="width:12px; height:12px"/>
            <Container id="t2_figma_b_cell" style="width:12px; height:12px"/>
          </FlexContainer>
          <FlexContainer id="t2_figma_r2" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_c_cell" style="width:12px; height:12px"/>
            <Container id="t2_figma_d_cell" style="width:12px; height:12px"/>
          </FlexContainer>
          <FlexContainer id="t2_figma_r3" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:center; gap:3px">
            <Container id="t2_figma_e_cell" style="width:12px; height:12px"/>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer id="t2_icon_pyr_box" props={direction: "column"} style="position:absolute; left:927px; top:655px; width:76px; height:80px; align-items:center; justify-content:center; z-index:3">
          <Container id="t2_icon_pyr_cell" style="width:56px; height:52px">
            <Svg id="t2_icon_pyr" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 60' fill='none'><polygon points='6,26 28,6 52,10 62,30 44,54 14,42' fill='#E5BC70'/><polygon points='6,26 28,6 34,24 14,40' fill='#F8E7BE'/><polygon points='28,6 52,10 44,28 34,24' fill='#EDCE8C'/><polygon points='52,10 62,30 44,28' fill='#D8A75D'/><polygon points='14,40 34,24 44,28 44,54' fill='#E7C078'/><polygon points='14,42 44,54 28,58' fill='#C9903F'/></svg>", ariaLabel: "金色多面体图标"} style="width:56px; height:52px"/>
          </Container>
        </FlexContainer>

        <Container id="t2_icon_r_box" style="position:absolute; left:1042px; top:672px; width:62px; height:92px; z-index:3"/>

        <!-- ─── 4. 胶囊徽章（2021-2023 ✕ UI作品集） ─── -->
        <FlexContainer id="t2_badge_box" props={direction: "column"} style="position:absolute; left:50px; top:418px; width:384px; height:54px; align-items:center; justify-content:center; z-index:4">
          <Container id="t2_badge_txt_cell" style="width:100%; height:auto">
            <Text id="t2_badge_txt" props={content: "2021-2023 ✕ UI作品集", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 5. 技能标签（五枚：点 + 文案） ─── -->
        <FlexContainer id="t2_tags_row1" props={direction: "row"} style="position:absolute; left:75px; top:534px; width:420px; height:24px; align-items:center; justify-content:flex-start; z-index:4; gap:0px">
          <Container id="t2_t1_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t1_txt_cell" style="width:112px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t1_txt" props={content: "APP设计", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t2_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t2_txt_cell" style="width:112px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t2_txt" props={content: "WEB设计", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t3_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t3_txt_cell" style="width:112px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t3_txt" props={content: "H5设计", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_tags_row2" props={direction: "row"} style="position:absolute; left:75px; top:577px; width:420px; height:24px; align-items:center; justify-content:flex-start; z-index:4; gap:0px">
          <Container id="t2_t4_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t4_txt_cell" style="width:112px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t4_txt" props={content: "IP设计", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="t2_t5_dot_cell" style="width:9px; height:9px; flex-shrink:0"/>
          <Container id="t2_t5_txt_cell" style="width:112px; height:auto; flex-shrink:0; padding-left:8px">
            <Text id="t2_t5_txt" props={content: "AIGC", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 6. 顶部信息条（左右两端） ─── -->
        <FlexContainer id="t2_top_l_box" props={direction: "column"} style="position:absolute; left:52px; top:7px; width:260px; height:24px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_top_l_cell" style="width:100%; height:auto">
            <Text id="t2_top_l" props={content: "▶▶ UI | UX DESIGN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_top_r_box" props={direction: "column"} style="position:absolute; left:836px; top:3px; width:252px; height:24px; align-items:flex-end; justify-content:center; z-index:4">
          <Container id="t2_top_r_cell" style="width:100%; height:auto">
            <Text id="t2_top_r" props={content: "APP · WEB · ILLUSTRATION · DATA SCREEN", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 7. 底部信息条（设计师 / 电话 / 邮箱） ─── -->
        <FlexContainer id="t2_bot_l_box" props={direction: "column"} style="position:absolute; left:58px; top:778px; width:300px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_l_cell" style="width:100%; height:auto">
            <Text id="t2_bot_l" props={content: "DESIGNER：陈冉", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_bot_c_box" props={direction: "column"} style="position:absolute; left:258px; top:778px; width:300px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_c_cell" style="width:100%; height:auto">
            <Text id="t2_bot_c" props={content: "TEL：15369098371", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="t2_bot_r_box" props={direction: "column"} style="position:absolute; left:458px; top:778px; width:420px; height:26px; align-items:flex-start; justify-content:center; z-index:4">
          <Container id="t2_bot_r_cell" style="width:100%; height:auto">
            <Text id="t2_bot_r" props={content: "EMA：8126065335@coco.com", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 0. 舞台与画板 ──
      @t2_stage = { background: #0B0E14; }
      @t2_art = { background: #030A15; box-shadow: 0px 26px 60px rgba(0, 0, 0, 0.55); }

      # ── 1. 主标题（渐变字 = scoped-css 选择器通道；宽字距副题） ──
      @t2_title1 = {
        font-size: 124px; font-weight: 900; letter-spacing: 8px; line-height: 1; text-align: left;
        :scope {
          background-image: linear-gradient(180deg, #A8FFE0 0%, #E8FFF8 45%, #FFFFFF 68%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      }
      @t2_title2 = {
        color: #FFFFFF; font-size: 75px; font-weight: 600; letter-spacing: 11px; line-height: 1; text-align: left;
      }

      # ── 2. 应用图标瓦片 ──
      @t2_icon_ai_box = { background: linear-gradient(160deg, #6B2C1E 0%, #4A2018 52%, #3A1712 100%); border-radius: 18px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_icon_ai_txt = { color: #FFA31A; font-size: 44px; font-weight: 900; letter-spacing: 0px; line-height: 1; text-align: center; }
      @t2_icon_figma_box = { background: #1E1B24; border-radius: 14px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_figma_a_cell = { background: #F24E1E; border-radius: 50%; }
      @t2_figma_b_cell = { background: #FF7262; border-radius: 50%; }
      @t2_figma_c_cell = { background: #A259FF; border-radius: 50%; }
      @t2_figma_d_cell = { background: #1ABCFE; border-radius: 50%; }
      @t2_figma_e_cell = { background: #0ACF83; border-radius: 50%; }
      @t2_icon_pyr_box = { background: #23262B; border-radius: 16px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }
      @t2_icon_r_box = { background: #23262B; border-radius: 16px; box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.35); }

      # ── 3. 胶囊徽章（薄荷绿 + 黑字） ──
      @t2_badge_box = { background: #3EEBD0; border-radius: 27px; box-shadow: 0px 6px 16px rgba(62, 235, 208, 0.28); }
      @t2_badge_txt = { color: #0A1A18; font-size: 27px; font-weight: 700; letter-spacing: 3px; line-height: 1; text-align: center; }

      # ── 4. 技能标签（薄荷圆点 + 白字） ──
      @t2_t1_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t2_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t3_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t4_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t5_dot_cell = { background: #3EEBD0; border-radius: 50%; }
      @t2_t1_txt = { color: #FFFFFF; font-size: 17px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t2_txt = { color: #FFFFFF; font-size: 17px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t3_txt = { color: #FFFFFF; font-size: 17px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t4_txt = { color: #FFFFFF; font-size: 17px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }
      @t2_t5_txt = { color: #FFFFFF; font-size: 17px; font-weight: 700; letter-spacing: 1px; line-height: 1; text-align: left; }

      # ── 5. 上下信息条 ──
      @t2_top_l = { color: #F2F6FA; font-size: 11px; font-weight: 700; letter-spacing: 1.6px; line-height: 1; text-align: left; }
      @t2_top_r = { color: #F2F6FA; font-size: 12px; font-weight: 700; letter-spacing: 3.2px; line-height: 1; text-align: right; }
      @t2_bot_l = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
      @t2_bot_c = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
      @t2_bot_r = { color: #25333C; font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; line-height: 1; text-align: left; }
    </styles>
  </Page>
</App>
```

> 制作要点：**双素材叠放的 `z-index` 是构图的本体**——① 底图铺满（`objectFit:cover`，坐标 = 目标稿 1:1），② 主标题**在人物之下**（目标稿里她的发丝压住了 "PORTFOLIO" 的 `LIO`，这是「人物压标题」的关键观感），③ 人物透明素材叠上，④ 徽章 / 标签 / 图标瓦片 / 上下信息条在最上。标题的薄荷→白渐变字走 scoped-css `:scope` 通道（`background-clip: text`）。
>
> **素材前置（本轮实证）**：人物素材导出时把「透明棋盘格」拍平进了像素（alpha 全 255、13px 周期 `#fdfdfd`/`#e7e7e7`）——平台侧无图像处理能力，须先离线抠图（`apps/studio-web/scripts/design-repro/cutout.mjs`，边界 flood-fill + 羽化），入库的是抠好的版本。
>
> **响应式化（可选形态）**：本模板是**保真形态**（固定 1104×829 画板）。要做成随屏缩放的完整页面，按 参考图复刻 Skill §4.2（内部文档，未随本仓发布） 机械换算：画板 `width:100%; max-width:1104px; height:auto` + `:scope { container-type: inline-size; aspect-ratio: 1104 / 829 }`，画板内 px → cqw（`px ÷ 1104 × 100`），字号改 `clamp(下限, n cqw, 设计字号)`（direct key 或 `<styles>` 区 `:scope` 均可——2026-09-23 起排版键已可被 Scoped CSS 覆盖）。
>
> **多素材定位（本轮实证）**：底图与人物在目标稿里的缩放/位移靠**搜索对齐**（`place-asset.mjs`）——底图 = 0.945 缩放 + (0,0)；人物 = 0.9437 缩放 + (237, 26.5)（两者同缩放 = 同一导出比例，是本例的一致性证据）。被遮挡的邮箱等文案按可见部分补全（原位亦被人物遮挡，渲染结果一致）。
