# 有机曲线风 — 「流」肢体工作室

> 模板定位（内容 / 品牌 tab · 风格系列）：有机曲线（Organic / Flowing）——雾青与灰粉的柔和渐变、连续流动的巨幅曲线（SVG 贝塞尔曲线带、blob 色块）、非对称圆润版面与呼吸感留白。整体像一段还没停下来的动作。
> 场景需求：给一间虚构的肢体/舞蹈工作室做介绍页：首屏流动曲线装饰 + 大字标题（左）与「动线」插画（右）；三种课程（现代舞 / 接触即兴 / 晨间拉伸）；课程表（一周三档）；空间与预约；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="流 — 肢体工作室">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="og_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="og_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="og_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 52px">
          <Container id="og_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="og_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="og_nav_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                <Svg id="og_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'><path d='M4,22 C10,10 22,10 28,20' stroke='#4A6B66' stroke-width='3' stroke-linecap='round'/><circle cx='6' cy='23' r='3.4' fill='#C88A8A'/></svg>", ariaLabel: "流标志"} style="height:32px; width:32px"/>
              </Container>
              <Container id="og_nav_word_cell" style="height:auto; width:auto"><Text id="og_nav_word" props={content: "流 · FLOW STUDIO", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="og_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="og_nav_i1" props={itemLabel: "课程", itemTarget: "og_course_region"} style="height:auto; width:auto"/>
              <Container id="og_nav_i2" props={itemLabel: "课表", itemTarget: "og_schedule_region"} style="height:auto; width:auto"/>
              <Container id="og_nav_i3" props={itemLabel: "空间", itemTarget: "og_space_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="og_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="og_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="og_nav_cta_txt" props={content: "首次免费体验", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（流动曲线 + 动线插画） ─── -->
      <Container id="og_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="og_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="og_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 780' preserveAspectRatio='xMidYMid slice' fill='none'><defs><linearGradient id='ogRibbon' x1='0' y1='0' x2='1440' y2='600'><stop offset='0' stop-color='#8FBFB4' stop-opacity='0.5'/><stop offset='0.55' stop-color='#C8A8A8' stop-opacity='0.4'/><stop offset='1' stop-color='#8FBFB4' stop-opacity='0'/></linearGradient></defs><path d='M-60,540 C260,380 420,700 720,560 C1020,420 1180,660 1500,500' stroke='url(#ogRibbon)' stroke-width='82' stroke-linecap='round'/><path d='M-40,240 C240,140 380,320 640,240 C900,160 1080,300 1460,200' stroke='#B9CFC7' stroke-width='26' stroke-linecap='round' opacity='0.45'/><ellipse cx='1180' cy='120' rx='170' ry='120' fill='#D9C2C2' opacity='0.35'/><ellipse cx='180' cy='96' rx='120' ry='86' fill='#A9C7BE' opacity='0.3'/></svg>", ariaLabel: "流动曲线装饰层"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="og_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:80px 52px 96px; position:relative; z-index:1; gap:56px; align-items:center">
          <Container id="og_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="og_hero_eyebrow_cell" style="height:auto; width:auto">
                <Container id="og_hero_eyebrow" style="height:auto; width:auto; padding:8px 18px">
                  <Text id="og_hero_eyebrow_txt" props={content: "肢体 · 即兴 · 呼吸", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="og_hero_title_cell" style="height:auto; width:auto"><Text id="og_hero_title" props={content: "身体知道下一步", tagName: "h1"}/></Container>
              <Container id="og_hero_sub_cell" style="height:auto; width:100%; max-width:480px"><Text id="og_hero_sub" props={content: "不需要会跳舞。我们做的只有一件事：帮你的身体找回它本来就会的流动——从一次完整的呼吸开始。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="og_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="og_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="og_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="og_hero_btn" style="height:auto; width:auto; padding:16px 36px">
                      <Text id="og_hero_btn_txt" props={content: "预约首次体验", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="og_hero_note_cell" style="height:auto; width:auto"><Text id="og_hero_note" props={content: "穿舒适的衣服来就好", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="og_hero_fig_cell" style="height:auto; width:440px; flex-shrink:0">
            <Container id="og_hero_fig" style="height:460px; width:100%">
              <Svg id="og_hero_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 460' fill='none'><defs><linearGradient id='ogBody' x1='0' y1='0' x2='440' y2='460'><stop offset='0' stop-color='#6E9C90'/><stop offset='1' stop-color='#C88A8A'/></linearGradient></defs><path d='M220,60 C270,90 268,150 236,182 C300,206 322,272 288,330 C262,374 210,392 168,372 C120,348 108,286 140,246 C102,222 96,158 138,124 C164,102 196,96 220,60 Z' fill='url(#ogBody)' opacity='0.9'/><path d='M220,60 C252,140 246,240 210,330' stroke='#F6F1EC' stroke-width='2.4' opacity='0.6'/><path d='M140,246 C190,262 250,258 288,330' stroke='#F6F1EC' stroke-width='2.4' opacity='0.5'/><path d='M60,404 C140,376 220,420 300,392 C344,378 380,392 396,404' stroke='#8FBFB4' stroke-width='10' stroke-linecap='round' opacity='0.7'/><circle cx='352' cy='112' r='26' fill='#D9C2C2' opacity='0.6'/></svg>", ariaLabel: "插画：身体的动线"} style="height:460px; width:100%"/>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 三种课程 ─── -->
      <Container id="og_course_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_course_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 52px 92px; gap:44px">
          <Container id="og_course_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="og_course_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="og_course_label_cell" style="height:auto; width:auto"><Text id="og_course_label" props={content: "三种课 · CLASSES", tagName: "span"}/></Container>
              <Container id="og_course_title_cell" style="height:auto; width:auto"><Text id="og_course_title" props={content: "从安静到打开", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_course_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="og_course_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="og_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c1_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M20,90 C70,40 130,96 180,56 C220,26 260,60 284,46' stroke='#6E9C90' stroke-width='12' stroke-linecap='round'/><circle cx='50' cy='82' r='10' fill='#C88A8A' opacity='0.7'/></svg>", ariaLabel: "晨间拉伸 动线"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c1_name_cell" style="height:auto; width:auto"><Text id="og_c1_name" props={content: "晨间拉伸 · 60 分钟", tagName: "h3"}/></Container>
                  <Container id="og_c1_desc_cell" style="height:auto; width:100%"><Text id="og_c1_desc" props={content: "跟着呼吸慢慢展开：适合久坐的人，一周两次就有感觉。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c1_meta_cell" style="height:auto; width:auto"><Text id="og_c1_meta" props={content: "周二 / 周四 07:30 · 小班 12 人", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c2_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M16,64 C60,16 120,112 170,52 C210,8 252,88 286,40' stroke='#C88A8A' stroke-width='12' stroke-linecap='round'/><circle cx='252' cy='44' r='9' fill='#6E9C90' opacity='0.7'/></svg>", ariaLabel: "接触即兴 动线"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c2_name_cell" style="height:auto; width:auto"><Text id="og_c2_name" props={content: "接触即兴 · 90 分钟", tagName: "h3"}/></Container>
                  <Container id="og_c2_desc_cell" style="height:auto; width:100%"><Text id="og_c2_desc" props={content: "两个人的重量与平衡练习：学会托住别人，也学会被托住。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c2_meta_cell" style="height:auto; width:auto"><Text id="og_c2_meta" props={content: "周五 19:30 · 开放报名", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="og_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="og_c3_fig_cell" style="height:120px; width:100%; flex-shrink:0">
                    <Svg id="og_c3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M30,96 C90,96 100,24 160,24 C220,24 230,96 282,96' stroke='#8A9A7B' stroke-width='12' stroke-linecap='round'/><circle cx='160' cy='30' r='10' fill='#D9C2C2' opacity='0.8'/></svg>", ariaLabel: "现代舞 动线"} style="height:120px; width:100%"/>
                  </Container>
                  <Container id="og_c3_name_cell" style="height:auto; width:auto"><Text id="og_c3_name" props={content: "现代舞基础 · 75 分钟", tagName: "h3"}/></Container>
                  <Container id="og_c3_desc_cell" style="height:auto; width:100%"><Text id="og_c3_desc" props={content: "从地板动作到重心转移：把「跳舞」拆成可以练的身体逻辑。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="og_c3_meta_cell" style="height:auto; width:auto"><Text id="og_c3_meta" props={content: "周六 10:00 · 小班 14 人", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 一周课表 ─── -->
      <Container id="og_schedule_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_schedule_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 52px 92px; gap:56px; align-items:flex-start">
          <Container id="og_schedule_left_cell" style="height:auto; width:260px; flex-shrink:0">
            <FlexContainer id="og_schedule_left_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
              <Container id="og_schedule_label_cell" style="height:auto; width:auto"><Text id="og_schedule_label" props={content: "一周课表", tagName: "span"}/></Container>
              <Container id="og_schedule_note_cell" style="height:auto; width:auto"><Text id="og_schedule_note" props={content: "所有课程可单次报名", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="og_schedule_table_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_schedule_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="og_s1_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s1_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s1_day" props={content: "周二", tagName: "span"}/></Container>
                  <Container id="og_s1_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s1_cls" props={content: "晨间拉伸 · 07:30", tagName: "span"}/></Container>
                  <Container id="og_s1_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s1_free" props={content: "余 4 位", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s2_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s2_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s2_day" props={content: "周四", tagName: "span"}/></Container>
                  <Container id="og_s2_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s2_cls" props={content: "晨间拉伸 · 07:30", tagName: "span"}/></Container>
                  <Container id="og_s2_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s2_free" props={content: "余 7 位", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s3_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s3_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s3_day" props={content: "周五", tagName: "span"}/></Container>
                  <Container id="og_s3_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s3_cls" props={content: "接触即兴 · 19:30", tagName: "span"}/></Container>
                  <Container id="og_s3_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s3_free" props={content: "已满 · 可候补", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_s4_cell" style="height:auto; width:100%; padding:20px 4px">
                <FlexContainer id="og_s4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="og_s4_day_cell" style="height:auto; width:120px; flex-shrink:0"><Text id="og_s4_day" props={content: "周六", tagName: "span"}/></Container>
                  <Container id="og_s4_cls_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="og_s4_cls" props={content: "现代舞基础 · 10:00", tagName: "span"}/></Container>
                  <Container id="og_s4_free_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="og_s4_free" props={content: "余 2 位", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 空间与预约 ─── -->
      <Container id="og_space_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="og_space_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 52px 104px; gap:56px; align-items:center">
          <Container id="og_space_fig_cell" style="height:auto; width:420px; flex-shrink:0">
            <Container id="og_space_fig" style="height:380px; width:100%">
              <Svg id="og_space_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 380' fill='none'><defs><linearGradient id='ogFloor' x1='0' y1='0' x2='420' y2='380'><stop offset='0' stop-color='#DCE8E3'/><stop offset='1' stop-color='#EFE3E3'/></linearGradient></defs><rect width='420' height='380' fill='url(#ogFloor)'/><path d='M40,300 C120,260 180,320 260,282 C320,254 380,282 400,270' stroke='#6E9C90' stroke-width='10' stroke-linecap='round' opacity='0.7'/><path d='M40,340 C140,300 220,352 320,312' stroke='#C88A8A' stroke-width='8' stroke-linecap='round' opacity='0.5'/><rect x='60' y='80' width='300' height='150' rx='26' fill='#F6F1EC' opacity='0.8'/><circle cx='210' cy='155' r='34' fill='#B9CFC7'/><path d='M210,121 L210,189 M176,155 L244,155' stroke='#F6F1EC' stroke-width='4' opacity='0.8'/></svg>", ariaLabel: "空间插画：地板与光"} style="height:380px; width:100%"/>
            </Container>
          </Container>
          <Container id="og_space_card_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="og_space_card_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:38px 40px">
              <Container id="og_space_title_cell" style="height:auto; width:auto"><Text id="og_space_title" props={content: "一间木地板的教室", tagName: "h2"}/></Container>
              <Container id="og_space_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="og_space_desc" props={content: "120 平米、整面落地镜、地暖与新风。更衣间和淋浴在走廊尽头——下课直接去上班也没问题。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="og_space_meta_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="og_space_meta_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
                  <Container id="og_sm1_cell" style="height:auto; width:auto"><Text id="og_sm1" props={content: "地址 — 成都 · 芳草街 12 号 2F", tagName: "span"}/></Container>
                  <Container id="og_sm2_cell" style="height:auto; width:auto"><Text id="og_sm2" props={content: "首次体验 — 免费（每人限一次）", tagName: "span"}/></Container>
                  <Container id="og_sm3_cell" style="height:auto; width:auto"><Text id="og_sm3" props={content: "月卡 — ¥ 880 / 8 次课", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="og_space_btn_cell" style="height:auto; width:auto; padding-top:10px">
                <Container id="og_space_btn" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="og_space_btn_txt" props={content: "预约体验课", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 页脚 ─── -->
      <Container id="og_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="og_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 52px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="og_footer_left_cell" style="height:auto; width:auto"><Text id="og_footer_left" props={content: "© 2026 流 FLOW STUDIO · 工作室与课表均为虚构演示", tagName: "span"}/></Container>
          <Container id="og_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="og_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="og_footer_f1_cell" style="height:auto; width:auto"><Text id="og_footer_f1" props={content: "身体笔记", tagName: "span"}/></Container>
              <Container id="og_footer_f2_cell" style="height:auto; width:auto"><Text id="og_footer_f2" props={content: "教师团队", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 页面基调（雾青米白） ──
      @og_root = { background: #F6F1EC; }

      # ── 导航 ──
      @og_nav_region = { background: rgba(246, 241, 236, 0.92); backdrop-filter: blur(10px); }
      @og_nav_word = { color: #3E5C56; font-size: 14.5px; font-weight: 800; letter-spacing: 3.4px; }
      @og_nav_menu = {
        :scope { --anchor-item-color: rgba(62, 92, 86, 0.68); --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 9px 18px; --anchor-item-radius: 999px; --anchor-item-active-color: #3E5C56; --anchor-item-active-bg: #DCE8E3; --anchor-gap: 8px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: background 0.25s ease, color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(185, 207, 199, 0.5); }
      }
      @og_nav_cta = { background: #6E9C90; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(110, 156, 144, 0.35); } }
      @og_nav_cta_txt = { color: #F6F1EC; font-size: 13px; font-weight: 700; letter-spacing: 1.2px; }

      # ── 首屏 ──
      @og_hero_eyebrow = { background: #FFFFFF; border-radius: 999px; }
      @og_hero_eyebrow_txt = { color: #3E5C56; font-size: 12.5px; font-weight: 700; letter-spacing: 2.4px; }
      @og_hero_title = { color: #2E4742; font-size: 68px; font-weight: 900; letter-spacing: -2.4px; line-height: 1.26; }
      @og_hero_sub = { color: rgba(46, 71, 66, 0.72); font-size: 15.5px; line-height: 2.1; }
      @og_hero_btn = { background: #C88A8A; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(200, 138, 138, 0.35); } }
      @og_hero_btn_txt = { color: #FFF9F5; font-size: 15px; font-weight: 800; letter-spacing: 1.6px; }
      @og_hero_note = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }

      # ── 课程卡 ──
      @og_course_label = { color: #6E9C90; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @og_course_title = { color: #2E4742; font-size: 44px; font-weight: 900; letter-spacing: -1.6px; }
      @og_c1_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(110, 156, 144, 0.18); } }
      @og_c2_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(200, 138, 138, 0.18); } }
      @og_c3_col = { background: #FFFFFF; border-radius: 30px; transition: transform 0.35s ease, box-shadow 0.35s ease; :scope:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(138, 154, 123, 0.18); } }
      @og_c1_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c2_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c3_name = { color: #2E4742; font-size: 20px; font-weight: 800; }
      @og_c1_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.95; }
      @og_c2_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.95; }
      @og_c3_desc = { color: rgba(46, 71, 66, 0.66); font-size: 13.5px; line-height: 1.95; }
      @og_c1_meta = { color: #6E9C90; font-size: 12.5px; font-weight: 700; }
      @og_c2_meta = { color: #C88A8A; font-size: 12.5px; font-weight: 700; }
      @og_c3_meta = { color: #8A9A7B; font-size: 12.5px; font-weight: 700; }

      # ── 课表 ──
      @og_schedule_label = { color: #6E9C90; font-size: 12px; font-weight: 800; letter-spacing: 3.4px; }
      @og_schedule_note = { color: rgba(46, 71, 66, 0.5); font-size: 12.5px; }
      @og_s1_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s2_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s3_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s4_cell = { border-top: 1px solid rgba(62, 92, 86, 0.16); border-bottom: 1px solid rgba(62, 92, 86, 0.16); transition: background 0.25s ease; :scope:hover { background: rgba(220, 232, 227, 0.55); } }
      @og_s1_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @og_s2_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @og_s3_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @og_s4_day = { color: #6E9C90; font-size: 13px; font-weight: 800; letter-spacing: 2px; }
      @og_s1_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s2_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s3_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s4_cls = { color: #2E4742; font-size: 16px; font-weight: 600; }
      @og_s1_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }
      @og_s2_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }
      @og_s3_free = { color: #C88A8A; font-size: 13px; font-weight: 600; }
      @og_s4_free = { color: rgba(46, 71, 66, 0.55); font-size: 13px; }

      # ── 空间 ──
      @og_space_card_col = { background: #FFFFFF; border-radius: 32px; box-shadow: 0 18px 40px rgba(110, 156, 144, 0.14); }
      @og_space_title = { color: #2E4742; font-size: 38px; font-weight: 900; letter-spacing: -1.2px; }
      @og_space_desc = { color: rgba(46, 71, 66, 0.68); font-size: 14.5px; line-height: 2.05; }
      @og_sm1 = { color: rgba(46, 71, 66, 0.72); font-size: 13.5px; }
      @og_sm2 = { color: #6E9C90; font-size: 13.5px; font-weight: 600; }
      @og_sm3 = { color: rgba(46, 71, 66, 0.72); font-size: 13.5px; }
      @og_space_btn = { background: #6E9C90; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(110, 156, 144, 0.35); } }
      @og_space_btn_txt = { color: #F6F1EC; font-size: 14.5px; font-weight: 800; letter-spacing: 1.6px; }

      # ── 页脚 ──
      @og_footer_row = { border-top: 1px solid rgba(62, 92, 86, 0.16); }
      @og_footer_left = { color: rgba(46, 71, 66, 0.42); font-size: 12.5px; }
      @og_footer_f1 = { color: rgba(46, 71, 66, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6E9C90; } }
      @og_footer_f2 = { color: rgba(46, 71, 66, 0.62); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6E9C90; } }
    </styles>
  </Page>
</App>
```
