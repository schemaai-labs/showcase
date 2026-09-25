# 3D 作品集落地页（自适应） — 「陈冉 UI/UX DESIGN」

> 模板定位（营销 / 增长 tab · 响应式页面）：与 `mkt-portfolio-cover`（保真画幅）**同素材同视觉语言**的**完整页面**形态——hero 用容器查询单位（cqw）保持封面版式的比例缩放，内容区（作品栅格 / 关于 / 联系）用流式布局自动重排；窄屏只做两处决策（hero 文案栈收窄 + 关于区堆叠）。
> 场景需求：把作品集封面扩成一页可滚动的落地页——① 吸顶导航；② hero（底图 + 3D 人物 + 超大渐变标题 + 徽章 + 技能标签 + 底部联系条）；③ 作品栅格（六张项目卡，`auto-fit` 自动 3/2/1 列）；④ 关于（人物特写 + 简介双栏，窄屏堆叠）；⑤ 联系收口 + 页脚。零 API、静态数据；响应式用 cqw + clamp + `@media`，**不用固定画板**。

```lang
<App dsl-version="0.3" name="陈冉 UI/UX DESIGN 作品集落地页">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="pf_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:stretch; position:relative">

      <!-- ─── ① 吸顶导航 ─── -->
      <Container id="pf_nav_region" style="width:100%; height:auto; flex-shrink:0; position:sticky; top:0px; z-index:60">
        <FlexContainer id="pf_nav_row" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:space-between; padding:14px 5vw; gap:12px">
          <Container id="pf_nav_brand_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="pf_nav_brand" props={content: "CHEN RAN · UI/UX", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_nav_menu_cell" style="width:auto; height:auto; flex-shrink:0">
            <Anchor id="pf_nav_menu" props={direction: "horizontal", affix: false} style="width:auto; height:auto">
              <Container id="pf_nav_i1" props={itemLabel: "作品", itemTarget: "pf_works_region"} style="width:auto; height:auto"/>
              <Container id="pf_nav_i2" props={itemLabel: "关于", itemTarget: "pf_about_region"} style="width:auto; height:auto"/>
              <Container id="pf_nav_i3" props={itemLabel: "联系", itemTarget: "pf_contact_region"} style="width:auto; height:auto"/>
            </Anchor>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── ② Hero（容器查询上下文：场景层按宽等比缩放） ─── -->
      <FlexContainer id="pf_hero_region" props={direction: "column"} style="width:100%; height:auto; min-height:88vh; flex-shrink:0; position:relative; overflow:hidden; align-items:stretch">

        <Container id="pf_hero_bg_cell" style="position:absolute; left:0px; top:0px; width:100%; height:100%; z-index:0">
          <Image id="pf_hero_bg" props={src: "assets/images/portfolio-cover-bg.png", alt: "液态金属抽象背景", objectFit: "cover", loading: "eager"} style="width:100%; height:100%"/>
        </Container>

        <Container id="pf_hero_girl_cell" style="position:absolute; left:46cqw; top:4cqw; width:78cqw; height:59cqw; z-index:1">
          <Image id="pf_hero_girl" props={src: "assets/images/portfolio-cover-girl.png", alt: "3D 人物插画：薄荷绿发色设计师", objectFit: "contain", loading: "eager"} style="width:100%; height:100%"/>
        </Container>

        <FlexContainer id="pf_hero_stack" props={direction: "column"} style="position:relative; z-index:2; width:100%; height:auto; min-height:88vh; align-items:flex-start; justify-content:center; padding:96px 5vw 120px; gap:18px">

          <Container id="pf_hero_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_hero_eyebrow" props={content: "▶▶ UI | UX DESIGN · PORTFOLIO 2026", tagName: "span"} style="width:auto; height:auto"/>
          </Container>

          <Container id="pf_hero_title1_cell" style="width:100%; height:auto">
            <Text id="pf_hero_title1" props={content: "PORTFOLIO", tagName: "h1"} style="width:100%; height:auto"/>
          </Container>

          <Container id="pf_hero_title2_cell" style="width:100%; height:auto">
            <Text id="pf_hero_title2" props={content: "DESIGN", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>

          <FlexContainer id="pf_hero_meta_row" props={direction: "row"} style="width:100%; height:auto; align-items:center; flex-wrap:wrap; gap:14px; padding-top:10px">
            <Container id="pf_hero_badge_cell" style="width:auto; height:auto; flex-shrink:0">
              <Text id="pf_hero_badge" props={content: "2021-2023 ✕ UI作品集", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_hero_cta_cell" style="width:auto; height:auto; flex-shrink:0">
              <Button id="pf_hero_cta" props={content: "查看作品 ↓", variant: "primary"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>

          <FlexContainer id="pf_hero_tags" props={direction: "row"} style="width:100%; height:auto; align-items:center; flex-wrap:wrap; gap:12px 28px; padding-top:6px">
            <Container id="pf_tag1_cell" style="width:auto; height:auto">
              <Text id="pf_tag1" props={content: "● APP设计", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag2_cell" style="width:auto; height:auto">
              <Text id="pf_tag2" props={content: "● WEB设计", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag3_cell" style="width:auto; height:auto">
              <Text id="pf_tag3" props={content: "● H5设计", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag4_cell" style="width:auto; height:auto">
              <Text id="pf_tag4" props={content: "● IP设计", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag5_cell" style="width:auto; height:auto">
              <Text id="pf_tag5" props={content: "● AIGC", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer id="pf_hero_info" props={direction: "row"} style="position:relative; z-index:2; width:100%; height:auto; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px 32px; padding:20px 5vw 28px; min-height:0px">
          <Container id="pf_info_l_cell" style="width:auto; height:auto">
            <Text id="pf_info_l" props={content: "DESIGNER：陈冉", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_info_c_cell" style="width:auto; height:auto">
            <Text id="pf_info_c" props={content: "TEL：15369098371", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_info_r_cell" style="width:auto; height:auto">
            <Text id="pf_info_r" props={content: "EMAIL：8126065335@coco.com", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ③ 作品栅格（auto-fit：3 / 2 / 1 列自动） ─── -->
      <FlexContainer id="pf_works_region" props={direction: "column"} style="width:100%; height:auto; flex-shrink:0; align-items:center; padding:88px 5vw 72px; gap:34px">
        <FlexContainer id="pf_works_head" props={direction: "column"} style="width:100%; max-width:1120px; height:auto; align-items:flex-start; gap:10px">
          <Container id="pf_works_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_works_eyebrow" props={content: "SELECTED WORKS", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_works_title_cell" style="width:100%; height:auto">
            <Text id="pf_works_title" props={content: "六个能对上需求的项目", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="pf_works_grid" props={direction: "row"} style="width:100%; max-width:1120px; height:auto; flex-wrap:wrap; align-items:stretch; gap:20px">
          <FlexContainer id="pf_work1" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work1_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work1_tag" props={content: "APP · 2023", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work1_name_cell" style="width:100%; height:auto">
              <Text id="pf_work1_name" props={content: "巡检 App 改版", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work1_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work1_desc" props={content: "把纸质巡检表搬进手机：扫码、拍照留证、离线可用，一线培训成本降到半天。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work2" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work2_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work2_tag" props={content: "WEB · 2022", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work2_name_cell" style="width:100%; height:auto">
              <Text id="pf_work2_name" props={content: "数据中台可视化", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work2_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work2_desc" props={content: "把 40 张报表收敛成 6 块看板：指标口径统一，业务方自助取数。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work3" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work3_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work3_tag" props={content: "H5 · 2022", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work3_name_cell" style="width:100%; height:auto">
              <Text id="pf_work3_name" props={content: "品牌周年 H5", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work3_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work3_desc" props={content: "活动 7 天 12 万次参与：抽奖链路压到 3 步，分享裂变率翻倍。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work4" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work4_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work4_tag" props={content: "IP · 2021", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work4_name_cell" style="width:100%; height:auto">
              <Text id="pf_work4_name" props={content: "吉祥物「芮宝」", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work4_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work4_desc" props={content: "从三视图到表情包：一套形象打通 App、物料与周边。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work5" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work5_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work5_tag" props={content: "AIGC · 2023", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work5_name_cell" style="width:100%; height:auto">
              <Text id="pf_work5_name" props={content: "AI 出图工作流", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work5_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work5_desc" props={content: "把电商主图从「拍一天」压到「半小时出 8 版」，含合规检查清单。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work6" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work6_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work6_tag" props={content: "WEB · 2021", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work6_name_cell" style="width:100%; height:auto">
              <Text id="pf_work6_name" props={content: "设计系统 1.0", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work6_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work6_desc" props={content: "68 个组件、两套主题变量：设计与前端共用一套 token，走查从周降到天。", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ④ 关于（双栏：人物特写 + 简介；窄屏堆叠） ─── -->
      <FlexContainer id="pf_about_region" props={direction: "row"} style="width:100%; height:auto; flex-shrink:0; align-items:center; justify-content:center; flex-wrap:wrap; gap:40px; padding:80px 5vw">

        <Container id="pf_about_portrait_cell" style="width:340px; height:auto; flex-shrink:0; position:relative; overflow:hidden">
          <Image id="pf_about_portrait" props={src: "assets/images/portfolio-cover-girl.png", alt: "设计师形象", objectFit: "contain", loading: "lazy"} style="width:340px; height:256px"/>
        </Container>

        <FlexContainer id="pf_about_text" props={direction: "column"} style="width:100%; max-width:560px; height:auto; align-items:flex-start; gap:14px">
          <Container id="pf_about_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_about_eyebrow" props={content: "ABOUT ME", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_about_title_cell" style="width:100%; height:auto">
            <Text id="pf_about_title" props={content: "四年、六个行业、一套方法", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>
          <Container id="pf_about_p1_cell" style="width:100%; height:auto">
            <Text id="pf_about_p1" props={content: "我做的不是「好看的页面」，而是能上线的界面：先对齐业务口径，再用可复用的组件把方案落成资产。", tagName: "p"} style="width:100%; height:auto"/>
          </Container>
          <Container id="pf_about_p2_cell" style="width:100%; height:auto">
            <Text id="pf_about_p2" props={content: "近两年专注把 AI 接进设计流程：从需求梳理到出图落地，把重复劳动交给工具。", tagName: "p"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ⑤ 联系收口 ─── -->
      <FlexContainer id="pf_contact_region" props={direction: "column"} style="width:100%; height:auto; flex-shrink:0; align-items:center; padding:96px 5vw 88px; gap:16px">
        <Container id="pf_contact_title_cell" style="width:100%; height:auto">
          <Text id="pf_contact_title" props={content: "有合适的机会？聊聊看", tagName: "h2"} style="width:100%; height:auto"/>
        </Container>
        <Container id="pf_contact_desc_cell" style="width:100%; max-width:560px; height:auto">
          <Text id="pf_contact_desc" props={content: "全职 · 远程友好 · 也接单品设计外包；邮件通常 24 小时内回。", tagName: "p"} style="width:100%; height:auto"/>
        </Container>
        <Container id="pf_contact_btn_cell" style="width:auto; height:auto; padding-top:10px">
          <Button id="pf_contact_btn" props={content: "发邮件给我", variant: "primary"} style="width:auto; height:auto"/>
        </Container>
      </FlexContainer>

      <!-- ─── ⑥ 页脚 ─── -->
      <FlexContainer id="pf_footer_region" props={direction: "row"} style="width:100%; height:auto; flex-shrink:0; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px 24px; padding:26px 5vw 30px">
        <Container id="pf_footer_brand_cell" style="width:auto; height:auto">
          <Text id="pf_footer_brand" props={content: "CHEN RAN · UI/UX DESIGN", tagName: "span"} style="width:auto; height:auto"/>
        </Container>
        <Container id="pf_footer_note_cell" style="width:auto; height:auto">
          <Text id="pf_footer_note" props={content: "© 2026 作品集演示 · 文案与数据均为虚构", tagName: "span"} style="width:auto; height:auto"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # 收口 CTA：声明式反馈（纯前端动作，无接口）
      @pf_contact_btn = {
        events: { mailMe: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已复制邮箱 8126065335@coco.com，欢迎来聊"}) } }
      }
      @pf_hero_cta = {
        events: { toWorks: { trigger: "onClick", action: nav.scroll({target: "pf_works_region"}) } }
      }
    </script>

    <styles>
      # ── 0. 基调（深色舞台 + 薄荷绿强调；与复刻画幅同一视觉语言） ──
      @pf_root = { background: #0B0E14; }
      @pf_nav_region = { background: rgba(11, 14, 20, 0.72); backdrop-filter: blur(12px) saturate(150%); :scope { border-bottom: 1px solid rgba(62, 235, 208, 0.10); } }
      @pf_nav_brand = { color: #E8FFF8; font-size: 13px; font-weight: 800; letter-spacing: 2.2px; line-height: 1; }
      @pf_nav_menu = {
        :scope { --anchor-item-color: #9FB3B0; --anchor-item-font-size: 13px; --anchor-item-font-weight: 700; --anchor-item-padding: 6px 2px; --anchor-item-active-color: #3EEBD0; --anchor-item-active-bg: transparent; --anchor-gap: 26px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #3EEBD0; }
      }

      # ── 1. Hero（场景层：cqw 等比；文案层：clamp 字号，窄屏收窄） ──
      @pf_hero_region = {
        background: #050810;
        :scope { container-type: inline-size; container-name: pfhero; }
      }
      @pf_hero_eyebrow = { color: #7FE3D2; font-size: clamp(10px, 1.1cqw, 13px); font-weight: 800; letter-spacing: clamp(1.2px, 0.24cqw, 2.6px); line-height: 1; }
      @pf_hero_title1 = {
        font-weight: 900; line-height: 1; text-align: left;
        font-size: clamp(46px, 12.4cqw, 137px); letter-spacing: clamp(2px, 0.7cqw, 8px);
        :scope {
          background-image: linear-gradient(180deg, #A8FFE0 0%, #E8FFF8 45%, #FFFFFF 68%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      }
      @pf_hero_title2 = { color: #FFFFFF; font-weight: 600; line-height: 1; text-align: left; font-size: clamp(26px, 6.8cqw, 75px); letter-spacing: clamp(3px, 1cqw, 11px); }
      @pf_hero_badge_cell = { background: #3EEBD0; border-radius: 999px; padding: 10px 22px; box-shadow: 0px 6px 16px rgba(62, 235, 208, 0.22); }
      @pf_hero_badge = { color: #0A1A18; font-size: clamp(12px, 1.5cqw, 17px); font-weight: 700; letter-spacing: 0.6px; line-height: 1; }
      @pf_hero_cta = { border-radius: 12px; font-size: clamp(12px, 1.3cqw, 15px); font-weight: 700; :scope { background: #3EEBD0; border-color: #3EEBD0; color: #0A1A18; } }
      @pf_tag1 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag2 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag3 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag4 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag5 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      # 注：flex-direction / flex-wrap 属 wrapper 落点键（FlexContainer 由 props 强制），
      # scoped-css 的 @media **改不动**——所以联系条用「一次写死 flex-wrap」而非断点重排。
      @pf_info_l = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }
      @pf_info_c = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }
      @pf_info_r = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }

      # ── 2. 作品区（auto-fit 栅格：3/2/1 列自动；卡片涂装 + 悬停） ──
      @pf_works_region = { background: #0B0E14; }
      @pf_works_eyebrow = { color: #3EEBD0; font-size: 13px; font-weight: 800; letter-spacing: 3px; line-height: 1; }
      @pf_works_title = { color: #F2F6FA; font-size: clamp(26px, 3.2vw, 40px); font-weight: 900; letter-spacing: -0.5px; line-height: 1.25; }
      @pf_work1 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work2 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work3 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work4 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work5 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work6 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work1_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work2_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work3_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work4_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work5_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work6_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work1_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work2_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work3_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work4_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work5_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work6_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work1_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }
      @pf_work2_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }
      @pf_work3_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }
      @pf_work4_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }
      @pf_work5_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }
      @pf_work6_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.85; }

      # ── 3. 关于（双栏，窄屏自动堆叠靠 flex-wrap） ──
      @pf_about_region = { background: #0E1219; }
      @pf_about_portrait_cell = { background: radial-gradient(120% 120% at 30% 20%, rgba(62, 235, 208, 0.16), rgba(62, 235, 208, 0) 62%); border-radius: 20px; :scope { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05); } }
      @pf_about_eyebrow = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 3px; line-height: 1; }
      @pf_about_title = { color: #F2F6FA; font-size: clamp(24px, 2.6vw, 32px); font-weight: 900; letter-spacing: -0.4px; line-height: 1.3; }
      @pf_about_p1 = { color: #9AA7B4; font-size: 15px; line-height: 2; }
      @pf_about_p2 = { color: #9AA7B4; font-size: 15px; line-height: 2; }

      # ── 4. 联系 + 页脚 ──
      @pf_contact_region = { background: linear-gradient(140deg, #0E2A2A 0%, #0B1418 58%, #0B0E14 100%); :scope { border-top: 1px solid rgba(62, 235, 208, 0.10); } }
      @pf_contact_title = { color: #F2F6FA; font-size: clamp(26px, 3.4vw, 44px); font-weight: 900; letter-spacing: -0.6px; line-height: 1.25; text-align: center; }
      @pf_contact_desc = { color: #9FB3B0; font-size: 15px; line-height: 1.9; text-align: center; }
      @pf_contact_btn = { border-radius: 12px; font-size: 15px; font-weight: 700; padding: 12px 26px; :scope { background: #3EEBD0; border-color: #3EEBD0; color: #0A1A18; } }
      @pf_footer_region = { background: #080B11; :scope { border-top: 1px solid rgba(255, 255, 255, 0.06); } }
      @pf_footer_brand = { color: #7FE3D2; font-size: 12px; font-weight: 800; letter-spacing: 1.8px; line-height: 1; }
      @pf_footer_note = { color: #6B7A85; font-size: 12px; letter-spacing: 0.6px; line-height: 1; }
    </styles>
  </Page>
</App>
```

> 制作要点：**同一个视觉语言，两种交付形态**——`mkt-portfolio-cover` 是固定画幅（物料），本模板是**完整页面**（自适应）。响应式策略分三层：① **hero 场景层**用容器查询单位（`cqw`：人物宽 78cqw / 高 59cqw = 素材比例；标题 `clamp(46px, 12.4cqw, 137px)`）→ 任意宽度下版式比例不变；② **内容层**用流式（`flex-wrap` + `grid auto-fit minmax(280px,1fr)`）→ 作品栅格自动 3/2/1 列、关于区自动堆叠，**零媒体查询**；③ **两处显式决策**：hero 底部联系条在 ≤760px 转列（`@media` 写在 `:scope` 内）、标题下限由 `clamp` 兜底。
>
> 排版键（`font-size` / `letter-spacing`）全部走 `<styles>` 区或 direct key —— 2026-09-23 起引擎已把排版类键并入可转移集合（`CUSTOM_CSS_OVERRIDABLE_KEYS`），`@media` 内的排版覆盖与组件默认字号覆盖均生效。
