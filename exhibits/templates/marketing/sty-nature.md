# 自然生态风 — 「原野食集」宠物天然粮品牌

> 模板定位（营销 / 增长 tab · 风格系列）：自然生态（Organic / Eco）——苔绿 / 燕麦米 / 陶土三色大地色系、手绘有机形状（叶脉 / 弧带 / 点阵）、大圆角与柔和投影，大量留白与舒缓节奏。**素材驱动型模板**：主视觉用平台素材库中的宠物照片（`assets/images/kitten-portrait.jpg`，建应用自动播种）。
> 场景需求：给一款虚构的宠物天然粮品牌做官网：首屏左文右图（猫照片圆角大图 + 有机弧带装饰）；成分三栏（来源 / 配方 / 包装）；可持续数字带；两档产品卡；收口订阅 CTA；页脚。零 API、静态数据、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="原野食集 — 宠物天然粮">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="nt_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="nt_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="nt_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 52px">
          <Container id="nt_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nt_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="nt_nav_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                <Svg id="nt_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16,3 C23,8 27,14 16,29 C5,14 9,8 16,3 Z' fill='#5C7A4A'/><path d='M16,10 L16,26' stroke='#F3EFE4' stroke-width='1.6'/></svg>", ariaLabel: "叶形标志"} style="height:32px; width:32px"/>
              </Container>
              <Container id="nt_nav_word_cell" style="height:auto; width:auto"><Text id="nt_nav_word" props={content: "原野食集", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="nt_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="nt_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="nt_nav_i1" props={itemLabel: "成分", itemTarget: "nt_ing_region"} style="height:auto; width:auto"/>
              <Container id="nt_nav_i2" props={itemLabel: "坚持", itemTarget: "nt_stats_region"} style="height:auto; width:auto"/>
              <Container id="nt_nav_i3" props={itemLabel: "选粮", itemTarget: "nt_product_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="nt_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="nt_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="nt_nav_cta_txt" props={content: "先试吃一包", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（左文右图） ─── -->
      <Container id="nt_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="nt_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="nt_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 760' preserveAspectRatio='xMidYMid slice' fill='none'><path d='M-60,620 C220,520 420,700 720,620 C1020,540 1240,660 1500,580' stroke='#C8B48A' stroke-width='46' stroke-linecap='round' opacity='0.35'/><circle cx='1320' cy='120' r='90' fill='#B8703F' opacity='0.14'/><circle cx='180' cy='120' r='6' fill='#5C7A4A' opacity='0.35'/><circle cx='220' cy='150' r='5' fill='#5C7A4A' opacity='0.28'/><circle cx='150' cy='170' r='4' fill='#5C7A4A' opacity='0.22'/></svg>", ariaLabel: "大地色系弧带与点阵装饰"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="nt_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:76px 52px 88px; position:relative; z-index:1; gap:64px; align-items:center">
          <Container id="nt_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="nt_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="nt_hero_chip_cell" style="height:auto; width:auto">
                <Container id="nt_hero_chip" style="height:auto; width:auto; padding:8px 16px">
                  <Text id="nt_hero_chip_txt" props={content: "90% 鲜肉 · 0 谷物添加", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="nt_hero_title_cell" style="height:auto; width:auto"><Text id="nt_hero_title" props={content: "从原野到食盆", tagName: "h1"}/></Container>
              <Container id="nt_hero_sub_cell" style="height:auto; width:100%; max-width:480px"><Text id="nt_hero_sub" props={content: "我们不研究「宠物的口味」，我们研究它们本来该吃什么。整鸡、鳕鱼与南瓜——配方短到一屏写得下。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="nt_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="nt_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="nt_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="nt_hero_btn" style="height:auto; width:auto; padding:15px 34px">
                      <Text id="nt_hero_btn_txt" props={content: "领取试吃装", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="nt_hero_note_cell" style="height:auto; width:auto"><Text id="nt_hero_note" props={content: "顺丰包邮 · 不爱吃全额退", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="nt_hero_meta_cell" style="height:auto; width:auto; padding-top:14px">
                <FlexContainer id="nt_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; gap:34px; align-items:center">
                  <Container id="nt_hero_m1_cell" style="height:auto; width:auto"><Text id="nt_hero_m1" props={content: "12,400 个家庭在喂", tagName: "span"}/></Container>
                  <Container id="nt_hero_m2_cell" style="height:auto; width:auto"><Text id="nt_hero_m2" props={content: "4.9 分 · 96% 回购", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="nt_hero_fig_cell" style="height:auto; width:540px; flex-shrink:0">
            <Container id="nt_hero_fig_frame" style="height:560px; width:100%; position:relative; overflow:hidden">
              <Container id="nt_hero_fig_img_cell" style="height:100%; width:100%">
                <Image id="nt_hero_fig_img" props={src: "assets/images/kitten-portrait.jpg", alt: "吃原野食集的猫", objectFit: "cover", loading: "eager"} style="height:100%; width:100%"/>
              </Container>
              <Container id="nt_hero_fig_badge_cell" style="height:auto; width:auto; position:absolute; left:22px; bottom:22px; z-index:2">
                <Container id="nt_hero_fig_badge" style="height:auto; width:auto; padding:12px 18px">
                  <Text id="nt_hero_fig_badge_txt" props={content: "「一岁半 · 橘白 · 试吃官 No.214」", tagName: "span"}/>
                </Container>
              </Container>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 成分三栏 ─── -->
      <Container id="nt_ing_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="nt_ing_col" props={direction: "column"} style="height:auto; width:100%; padding:48px 52px 96px; gap:44px">
          <Container id="nt_ing_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="nt_ing_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="nt_ing_label_cell" style="height:auto; width:auto"><Text id="nt_ing_label" props={content: "成分 · INGREDIENTS", tagName: "span"}/></Container>
              <Container id="nt_ing_title_cell" style="height:auto; width:auto"><Text id="nt_ing_title" props={content: "看得懂的配方，猜得到的来源", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="nt_ing_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="nt_ing_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="nt_i1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="nt_i1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="nt_i1_icon_cell" style="height:52px; width:52px; flex-shrink:0">
                    <Svg id="nt_i1_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle cx='26' cy='26' r='25' fill='#E8E0C9'/><path d='M26,10 C34,16 38,24 26,42 C14,24 18,16 26,10 Z' fill='#5C7A4A'/><path d='M26,18 L26,38' stroke='#E8E0C9' stroke-width='1.8'/></svg>", ariaLabel: "来源图标"} style="height:52px; width:52px"/>
                  </Container>
                  <Container id="nt_i1_name_cell" style="height:auto; width:auto"><Text id="nt_i1_name" props={content: "单一来源", tagName: "h3"}/></Container>
                  <Container id="nt_i1_desc_cell" style="height:auto; width:100%"><Text id="nt_i1_desc" props={content: "鸡肉来自山东合作农场，批次可追溯到鸡舍编号——每一袋包装背后印着农场主的名字。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="nt_i2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="nt_i2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="nt_i2_icon_cell" style="height:52px; width:52px; flex-shrink:0">
                    <Svg id="nt_i2_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle cx='26' cy='26' r='25' fill='#F0E2D2'/><path d='M14,32 L26,16 L38,32' stroke='#B8703F' stroke-width='3' fill='none' stroke-linecap='round'/><circle cx='26' cy='36' r='4' fill='#B8703F'/></svg>", ariaLabel: "配方图标"} style="height:52px; width:52px"/>
                  </Container>
                  <Container id="nt_i2_name_cell" style="height:auto; width:auto"><Text id="nt_i2_name" props={content: "七种原料封顶", tagName: "h3"}/></Container>
                  <Container id="nt_i2_desc_cell" style="height:auto; width:100%"><Text id="nt_i2_desc" props={content: "超过七种原料的配方，多半是在掩盖某种不足。我们的配料表，两行就写完了。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="nt_i3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="nt_i3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="nt_i3_icon_cell" style="height:52px; width:52px; flex-shrink:0">
                    <Svg id="nt_i3_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle cx='26' cy='26' r='25' fill='#E4E9DC'/><rect x='15' y='17' width='22' height='18' rx='4' stroke='#5C7A4A' stroke-width='2.6' fill='none'/><path d='M19,14 L19,20 M33,14 L33,20' stroke='#5C7A4A' stroke-width='2.6' stroke-linecap='round'/></svg>", ariaLabel: "包装图标"} style="height:52px; width:52px"/>
                  </Container>
                  <Container id="nt_i3_name_cell" style="height:auto; width:auto"><Text id="nt_i3_name" props={content: "可堆肥包装", tagName: "h3"}/></Container>
                  <Container id="nt_i3_desc_cell" style="height:auto; width:100%"><Text id="nt_i3_desc" props={content: "玉米淀粉基材，埋进土里 180 天降解。我们把省下的包装成本，换成了更贵的原料。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 数字带 ─── -->
      <Container id="nt_stats_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="nt_stats_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 52px">
          <Container id="nt_stats_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="nt_stats_rule" style="height:1px; width:100%"/></Container>
          <FlexContainer id="nt_stats_row" props={direction: "row"} style="height:auto; width:100%; padding:46px 0px 52px; gap:32px; align-items:flex-start">
            <Container id="nt_s1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="nt_s1_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="nt_s1_num_cell" style="height:auto; width:auto"><Text id="nt_s1_num" props={content: "0 谷物", tagName: "h4"}/></Container>
                <Container id="nt_s1_label_cell" style="height:auto; width:auto"><Text id="nt_s1_label" props={content: "不用谷物填充", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="nt_s2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="nt_s2_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="nt_s2_num_cell" style="height:auto; width:auto"><Text id="nt_s2_num" props={content: "180 天", tagName: "h4"}/></Container>
                <Container id="nt_s2_label_cell" style="height:auto; width:auto"><Text id="nt_s2_label" props={content: "包装堆肥降解周期", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="nt_s3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="nt_s3_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="nt_s3_num_cell" style="height:auto; width:auto"><Text id="nt_s3_num" props={content: "23 家", tagName: "h4"}/></Container>
                <Container id="nt_s3_label_cell" style="height:auto; width:auto"><Text id="nt_s3_label" props={content: "直采合作农场", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="nt_s4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="nt_s4_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                <Container id="nt_s4_num_cell" style="height:auto; width:auto"><Text id="nt_s4_num" props={content: "1% 营收", tagName: "h4"}/></Container>
                <Container id="nt_s4_label_cell" style="height:auto; width:auto"><Text id="nt_s4_label" props={content: "捐给流浪动物救助", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 产品卡 ─── -->
      <Container id="nt_product_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="nt_product_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 52px 104px; gap:48px; align-items:center">
          <Container id="nt_product_head_cell" style="height:auto; width:auto">
            <FlexContainer id="nt_product_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="nt_product_label_cell" style="height:auto; width:auto"><Text id="nt_product_label" props={content: "选粮 · PICK YOUR BOX", tagName: "span"}/></Container>
              <Container id="nt_product_title_cell" style="height:auto; width:auto"><Text id="nt_product_title" props={content: "按月订，按口味换", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="nt_product_cards_cell" style="height:auto; width:100%; max-width:920px">
            <FlexContainer id="nt_product_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:28px; align-items:stretch">
              <Container id="nt_p1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="nt_p1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="nt_p1_name_cell" style="height:auto; width:auto"><Text id="nt_p1_name" props={content: "尝鲜盒", tagName: "h4"}/></Container>
                  <Container id="nt_p1_price_cell" style="height:auto; width:auto"><Text id="nt_p1_price" props={content: "¥ 69 / 月起", tagName: "h3"}/></Container>
                  <Container id="nt_p1_desc_cell" style="height:auto; width:100%"><Text id="nt_p1_desc" props={content: "每月 1.5kg，混合口味适合第一次转粮的猫。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="nt_p1_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="nt_p1_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="nt_p1_cta_txt" props={content: "开始试吃", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="nt_p2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="nt_p2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="nt_p2_head_cell" style="height:auto; width:100%">
                    <FlexContainer id="nt_p2_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center; gap:16px">
                      <Container id="nt_p2_name_cell" style="height:auto; width:auto"><Text id="nt_p2_name" props={content: "正餐盒", tagName: "h4"}/></Container>
                      <Container id="nt_p2_badge_cell" style="height:auto; width:auto"><Container id="nt_p2_badge" style="height:auto; width:auto; padding:6px 14px"><Text id="nt_p2_badge_txt" props={content: "老客都选它", tagName: "span"}/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="nt_p2_price_cell" style="height:auto; width:auto"><Text id="nt_p2_price" props={content: "¥ 149 / 月起", tagName: "h3"}/></Container>
                  <Container id="nt_p2_desc_cell" style="height:auto; width:100%"><Text id="nt_p2_desc" props={content: "每月 3.5kg，鸡肉 / 鳕鱼 / 火鸡三种配方任意轮换。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="nt_p2_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="nt_p2_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="nt_p2_cta_txt" props={content: "按月订购", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 CTA ─── -->
      <Container id="nt_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="nt_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:92px 52px; gap:26px; align-items:center; position:relative; overflow:hidden">
          <Container id="nt_cta_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="nt_cta_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400' preserveAspectRatio='xMidYMid slice' fill='none'><rect width='1440' height='400' fill='#40563A'/><path d='M-40,300 C260,220 460,360 760,290 C1060,220 1260,330 1500,260' stroke='#5C7A4A' stroke-width='52' stroke-linecap='round' opacity='0.6'/><circle cx='1230' cy='90' r='70' fill='#C8B48A' opacity='0.3'/><circle cx='170' cy='80' r='5' fill='#F3EFE4' opacity='0.5'/><circle cx='210' cy='110' r='4' fill='#F3EFE4' opacity='0.4'/></svg>", ariaLabel: "深苔绿收口底色"} style="height:100%; width:100%"/>
          </Container>
          <Container id="nt_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="nt_cta_title" props={content: "先让它尝一口", tagName: "h2"}/></Container>
          <Container id="nt_cta_sub_cell" style="height:auto; width:100%; max-width:520px; position:relative; z-index:1"><Text id="nt_cta_sub" props={content: "填地址就寄出 200g 试吃装，猫不满意，退款不用退货。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="nt_cta_btn_cell" style="height:auto; width:auto; position:relative; z-index:1">
            <Container id="nt_cta_btn" style="height:auto; width:auto; padding:16px 40px">
              <Text id="nt_cta_btn_txt" props={content: "免费领试吃装", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="nt_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="nt_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 52px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="nt_footer_left_cell" style="height:auto; width:auto"><Text id="nt_footer_left" props={content: "© 2026 原野食集 · 品牌与数据均为虚构演示", tagName: "span"}/></Container>
          <Container id="nt_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="nt_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="nt_footer_f1_cell" style="height:auto; width:auto"><Text id="nt_footer_f1" props={content: "溯源查询", tagName: "span"}/></Container>
              <Container id="nt_footer_f2_cell" style="height:auto; width:auto"><Text id="nt_footer_f2" props={content: "养宠手册", tagName: "span"}/></Container>
              <Container id="nt_footer_f3_cell" style="height:auto; width:auto"><Text id="nt_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @nt_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（燕麦米纸感） ──
      @nt_root = { background: #F3EFE4; }

      # ── 导航 ──
      @nt_nav_region = { background: rgba(243, 239, 228, 0.94); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(64, 86, 58, 0.14); }
      @nt_nav_word = { color: #40563A; font-size: 17px; font-weight: 800; letter-spacing: 2.4px; }
      @nt_nav_menu = {
        :scope { --anchor-item-color: rgba(64, 86, 58, 0.72); --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #40563A; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 38px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 1px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B8703F; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #5C7A4A; }
      }
      @nt_nav_cta = { background: #5C7A4A; border-radius: 999px; transition: background 0.25s ease, transform 0.25s ease; :scope:hover { background: #40563A; transform: translateY(-1px); } }
      @nt_nav_cta_txt = { color: #F3EFE4; font-size: 13.5px; font-weight: 700; letter-spacing: 1.4px; }

      # ── 首屏 ──
      @nt_hero_chip = { background: #E4E9DC; border-radius: 999px; }
      @nt_hero_chip_txt = { color: #40563A; font-size: 12.5px; font-weight: 700; letter-spacing: 1.6px; }
      @nt_hero_title = { color: #2E3D28; font-size: 76px; font-weight: 900; letter-spacing: -3px; line-height: 1.1; }
      @nt_hero_sub = { color: rgba(46, 61, 40, 0.72); font-size: 15.5px; line-height: 2.05; }
      @nt_hero_btn = { background: #B8703F; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(184, 112, 63, 0.32); } }
      @nt_hero_btn_txt = { color: #FBF7EE; font-size: 15px; font-weight: 800; letter-spacing: 1.6px; }
      @nt_hero_note = { color: rgba(46, 61, 40, 0.55); font-size: 13px; letter-spacing: 0.6px; }
      @nt_hero_m1 = { color: rgba(46, 61, 40, 0.6); font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @nt_hero_m2 = { color: rgba(46, 61, 40, 0.6); font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @nt_hero_fig_frame = { border-radius: 28px; overflow: hidden; }
      @nt_hero_fig_img = { filter: saturate(1.02) contrast(1.02); }
      @nt_hero_fig_badge = { background: rgba(243, 239, 228, 0.94); border-radius: 999px; }
      @nt_hero_fig_badge_txt = { color: #40563A; font-size: 12px; font-weight: 700; letter-spacing: 1px; }

      # ── 成分卡 ──
      @nt_ing_label = { color: #B8703F; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @nt_ing_title = { color: #2E3D28; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @nt_i1_col = { background: #FBF7EE; border-radius: 22px; box-shadow: 0 10px 26px rgba(64, 86, 58, 0.08); }
      @nt_i2_col = { background: #FBF7EE; border-radius: 22px; box-shadow: 0 10px 26px rgba(64, 86, 58, 0.08); }
      @nt_i3_col = { background: #FBF7EE; border-radius: 22px; box-shadow: 0 10px 26px rgba(64, 86, 58, 0.08); }
      @nt_i1_name = { color: #2E3D28; font-size: 20px; font-weight: 800; }
      @nt_i2_name = { color: #2E3D28; font-size: 20px; font-weight: 800; }
      @nt_i3_name = { color: #2E3D28; font-size: 20px; font-weight: 800; }
      @nt_i1_desc = { color: rgba(46, 61, 40, 0.64); font-size: 13.5px; line-height: 1.95; }
      @nt_i2_desc = { color: rgba(46, 61, 40, 0.64); font-size: 13.5px; line-height: 1.95; }
      @nt_i3_desc = { color: rgba(46, 61, 40, 0.64); font-size: 13.5px; line-height: 1.95; }

      # ── 数字带 ──
      @nt_stats_rule = { background: rgba(64, 86, 58, 0.25); }
      @nt_s1_num = { color: #2E3D28; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_s2_num = { color: #2E3D28; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_s3_num = { color: #2E3D28; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_s4_num = { color: #2E3D28; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_s1_label = { color: rgba(46, 61, 40, 0.55); font-size: 13px; letter-spacing: 1px; }
      @nt_s2_label = { color: rgba(46, 61, 40, 0.55); font-size: 13px; letter-spacing: 1px; }
      @nt_s3_label = { color: rgba(46, 61, 40, 0.55); font-size: 13px; letter-spacing: 1px; }
      @nt_s4_label = { color: rgba(46, 61, 40, 0.55); font-size: 13px; letter-spacing: 1px; }

      # ── 产品卡 ──
      @nt_product_label = { color: #B8703F; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @nt_product_title = { color: #2E3D28; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @nt_p1_col = { background: #FBF7EE; border: 1px solid rgba(64, 86, 58, 0.16); border-radius: 22px; }
      @nt_p2_col = { background: #E4E9DC; border: 1.5px solid #5C7A4A; border-radius: 22px; box-shadow: 0 14px 32px rgba(64, 86, 58, 0.16); }
      @nt_p1_name = { color: #2E3D28; font-size: 20px; font-weight: 800; }
      @nt_p2_name = { color: #2E3D28; font-size: 20px; font-weight: 800; }
      @nt_p1_price = { color: #B8703F; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_p2_price = { color: #40563A; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @nt_p1_desc = { color: rgba(46, 61, 40, 0.64); font-size: 13.5px; line-height: 1.9; }
      @nt_p2_desc = { color: rgba(46, 61, 40, 0.72); font-size: 13.5px; line-height: 1.9; }
      @nt_p2_badge = { background: #5C7A4A; border-radius: 999px; }
      @nt_p2_badge_txt = { color: #F3EFE4; font-size: 11.5px; font-weight: 800; letter-spacing: 1px; }
      @nt_p1_cta = { border: 1.5px solid #40563A; border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(64, 86, 58, 0.08); } }
      @nt_p1_cta_txt = { color: #40563A; font-size: 14.5px; font-weight: 800; letter-spacing: 1.6px; }
      @nt_p2_cta = { background: #40563A; border-radius: 999px; transition: background 0.25s ease, transform 0.25s ease; :scope:hover { background: #2E3D28; transform: translateY(-1px); } }
      @nt_p2_cta_txt = { color: #F3EFE4; font-size: 14.5px; font-weight: 800; letter-spacing: 1.6px; }

      # ── 收口 ──
      @nt_cta_title = { color: #F3EFE4; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @nt_cta_sub = { color: rgba(243, 239, 228, 0.78); font-size: 15px; line-height: 1.95; text-align: center; }
      @nt_cta_btn = { background: #C8B48A; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25); } }
      @nt_cta_btn_txt = { color: #2E3D28; font-size: 15px; font-weight: 800; letter-spacing: 2px; }

      # ── 页脚 ──
      @nt_footer_row = { border-top: 1px solid rgba(64, 86, 58, 0.18); }
      @nt_footer_left = { color: rgba(46, 61, 40, 0.5); font-size: 12.5px; letter-spacing: 0.6px; }
      @nt_footer_f1 = { color: rgba(46, 61, 40, 0.7); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B8703F; } }
      @nt_footer_f2 = { color: rgba(46, 61, 40, 0.7); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B8703F; } }
      @nt_footer_f3 = { cursor: pointer; color: rgba(46, 61, 40, 0.7); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B8703F; } }
    </styles>
  </Page>
</App>
```
