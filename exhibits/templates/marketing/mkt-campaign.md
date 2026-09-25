# 活动专题页（大促 / 节日 / 发布会） — 「星河生活节」年度大促

> 模板定位（营销 / 增长 tab）：活动专题页标准形态——大促 hero（限时节点 + 数字滚动）+ 利益点 + 优惠券领取 + 爆款清单 + 活动规则折叠 + 收口 CTA。
> 场景需求：给虚构零售品牌「星河零售」做 10.20-11.11 年度大促专题页：暖色节日氛围（红金渐变 + 纸屑感光斑），首屏大标题 + 限时文案 + 两个行动按钮 + 滚动数字（已发券 / 参与门店 / 会员折扣），往下依次是三张优惠券卡（满减梯度 + 剩余数量）、四张爆款单品卡（图标 + 价签 + 已售进度）、活动规则折叠面板、底部再次收口。动效两组（首屏 onMount 入场 + 数字滚动），零 API 静态数据。

```lang
<App dsl-version="0.3" name="星河生活节 · 年度大促专题">
  <Page id="campaign" name="星河生活节" route="/">
    <FlexContainer id="cp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 顶部导航 ─── -->
      <Container id="cp_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="cp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 48px">
          <Container id="cp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="cp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="cp_nav_logo_cell" style="height:auto; width:auto"><Icon id="cp_nav_logo" props={iconName: "Sparkles", iconSource: "lucide"}/></Container>
              <Container id="cp_nav_brand_text_cell" style="height:auto; width:auto"><Text id="cp_nav_brand" props={content: "星河生活节", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="cp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="cp_nav_item_main_cell" props={itemLabel: "主会场", itemTarget: "cp_hero"} style="height:auto; width:auto"/>
              <Container id="cp_nav_item_play_cell" props={itemLabel: "玩法攻略", itemTarget: "cp_rules_region"} style="height:auto; width:auto"/>
              <Container id="cp_nav_item_prize_cell" props={itemLabel: "我的奖品", itemTarget: "cp_coupon_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="cp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Button id="cp_nav_cta" props={content: "立即参与", variant: "primary"} style="height:auto; width:auto; padding:8px 22px"/>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 大促 Hero（onMount 入场 + 数字滚动） ─── -->
      <Container id="cp_hero" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden; scroll-margin-top:72px">
        <Container id="cp_hero_deco_cell" style="height:620px; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="cp_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 620' fill='none'><defs><linearGradient id='cpTrailA' x1='40' y1='10' x2='252' y2='124' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#F59E0B' stop-opacity='0'/><stop offset='0.55' stop-color='#F59E0B' stop-opacity='0.38'/><stop offset='1' stop-color='#FBBF24' stop-opacity='0.95'/></linearGradient><linearGradient id='cpTrailB' x1='1240' y1='80' x2='1030' y2='192' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#F97316' stop-opacity='0'/><stop offset='1' stop-color='#FBBF24' stop-opacity='0.8'/></linearGradient><filter id='cpGlow' x='-60%' y='-60%' width='220%' height='220%'><feGaussianBlur stdDeviation='4' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter><filter id='cpSoft' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='13'/></filter></defs><circle cx='1090' cy='64' r='44' fill='#F59E0B' opacity='0.16' filter='url(#cpSoft)'/><circle cx='186' cy='196' r='30' fill='#FBBF24' opacity='0.18' filter='url(#cpSoft)'/><circle cx='1132' cy='430' r='36' fill='#F97316' opacity='0.13' filter='url(#cpSoft)'/><circle cx='128' cy='440' r='26' fill='#FBBF24' opacity='0.15' filter='url(#cpSoft)'/><path d='M40,10 C118,42 196,84 252,124' stroke='url(#cpTrailA)' stroke-width='3.2' stroke-linecap='round' filter='url(#cpGlow)'/><g filter='url(#cpGlow)'><path d='M252,107 C255.7,118.9 257.1,120.3 269,124 C257.1,127.7 255.7,129.1 252,141 C248.3,129.1 246.9,127.7 235,124 C246.9,120.3 248.3,118.9 252,107 Z' fill='#F59E0B' opacity='0.95'/><circle cx='252' cy='124' r='3.2' fill='#FFFFFF' opacity='0.9'/></g><path d='M1240,80 C1160,116 1088,156 1030,192' stroke='url(#cpTrailB)' stroke-width='2.2' stroke-linecap='round' opacity='0.9' filter='url(#cpGlow)'/><path d='M1030,181 C1032.4,188.7 1033.3,189.6 1041,192 C1033.3,194.4 1032.4,195.3 1030,203 C1027.6,195.3 1026.7,194.4 1019,192 C1026.7,189.6 1027.6,188.7 1030,181 Z' fill='#FBBF24' opacity='0.9' filter='url(#cpGlow)'/><path d='M690,45 C691.5,49.9 692.1,50.5 697,52 C692.1,53.5 691.5,54.1 690,59 C688.5,54.1 687.9,53.5 683,52 C687.9,50.5 688.5,49.9 690,45 Z' fill='#F59E0B' opacity='0.7'/><path d='M940,80 C941.3,84.2 941.8,84.7 946,86 C941.8,87.3 941.3,87.8 940,92 C938.7,87.8 938.2,87.3 934,86 C938.2,84.7 938.7,84.2 940,80 Z' fill='#FBBF24' opacity='0.6'/><path d='M150,308 C151.8,313.6 152.4,314.2 158,316 C152.4,317.8 151.8,318.4 150,324 C148.2,318.4 147.6,317.8 142,316 C147.6,314.2 148.2,313.6 150,308 Z' fill='#F59E0B' opacity='0.65'/><path d='M1116,272 C1117.3,276.2 1117.8,276.7 1122,278 C1117.8,279.3 1117.3,279.8 1116,284 C1114.7,279.8 1114.2,279.3 1110,278 C1114.2,276.7 1114.7,276.2 1116,272 Z' fill='#FBBF24' opacity='0.55'/><path d='M352,462 C353.3,466.2 353.8,466.7 358,468 C353.8,469.3 353.3,469.8 352,474 C350.7,469.8 350.2,469.3 346,468 C350.2,466.7 350.7,466.2 352,462 Z' fill='#F97316' opacity='0.5'/><circle cx='586' cy='46' r='2.2' fill='#F59E0B' opacity='0.5'/><circle cx='832' cy='486' r='2' fill='#F59E0B' opacity='0.45'/><circle cx='1024' cy='520' r='2.4' fill='#FBBF24' opacity='0.4'/></svg>", ariaLabel: "金色星光拖尾与四角星点（星河主题装饰层）"} style="height:auto; width:100%"/>
        </Container>
        <Animate id="cp_hero_reveal" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 100, duration: "slow"} style="align-items:center; gap:20px; height:auto; width:100%; padding:72px 48px 84px; position:relative">
          <Container id="cp_hero_eyebrow_cell" style="height:auto; width:auto">
            <Tag id="cp_hero_eyebrow" props={text: "10.20 20:00 — 11.11 24:00 · 全年最低", color: "red"}/>
          </Container>
          <Container id="cp_hero_title_cell" style="height:auto; width:100%">
            <Text id="cp_hero_title" props={content: "星河生活节 · 全场狂欢", tagName: "h1"} style="height:auto; width:100%"/>
          </Container>
          <Container id="cp_hero_sub_cell" style="height:auto; width:700px; flex-shrink:0">
            <Text id="cp_hero_sub" props={content: "跨店满 199 减 30、会员折上再 9 折、每晚 8 点整点秒杀——一年只有一次的价格，现在开始囤货。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="cp_hero_cta_cell" style="height:auto; width:auto; padding-top:8px">
            <FlexContainer id="cp_hero_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center">
              <Container id="cp_hero_cta_coupon_cell" style="height:auto; width:auto"><Button id="cp_hero_cta_coupon" props={content: "一键领券", variant: "primary"} style="height:auto; width:auto; padding:13px 30px"/></Container>
              <Container id="cp_hero_cta_guide_cell" style="height:auto; width:auto"><Button id="cp_hero_cta_guide" props={content: "看玩法攻略", variant: "default"} style="height:auto; width:auto; padding:13px 26px"/></Container>
            </FlexContainer>
          </Container>
          <Container id="cp_hero_stats_cell" style="height:auto; width:100%; padding-top:26px">
            <FlexContainer id="cp_hero_stats_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:76px">
              <Container id="cp_stat_coupon_cell" style="height:auto; width:auto">
                <FlexContainer id="cp_stat_coupon_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="cp_stat_coupon_value_cell" style="height:auto; width:auto"><Text id="cp_stat_coupon_value" props={content: "128", tagName: "h3"}/></Container>
                  <Container id="cp_stat_coupon_label_cell" style="height:auto; width:auto"><Text id="cp_stat_coupon_label" props={content: "万张优惠券已发放", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_stat_div_1" style="height:44px; width:1px"/>
              <Container id="cp_stat_store_cell" style="height:auto; width:auto">
                <FlexContainer id="cp_stat_store_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="cp_stat_store_value_cell" style="height:auto; width:auto"><Text id="cp_stat_store_value" props={content: "3200", tagName: "h3"}/></Container>
                  <Container id="cp_stat_store_label_cell" style="height:auto; width:auto"><Text id="cp_stat_store_label" props={content: "家门店同步参与", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_stat_div_2" style="height:44px; width:1px"/>
              <Container id="cp_stat_member_cell" style="height:auto; width:auto">
                <FlexContainer id="cp_stat_member_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="cp_stat_member_value_cell" style="height:auto; width:auto"><Text id="cp_stat_member_value" props={content: "9", tagName: "h3"}/></Container>
                  <Container id="cp_stat_member_label_cell" style="height:auto; width:auto"><Text id="cp_stat_member_label" props={content: "折 · 会员专享折扣", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 优惠券领取 ─── -->
      <Container id="cp_coupon_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:16px 48px 40px; scroll-margin-top:72px">
        <FlexContainer id="cp_coupon_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:32px">
          <Container id="cp_coupon_head_cell" style="height:auto; width:auto">
            <FlexContainer id="cp_coupon_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:8px">
              <Container id="cp_coupon_title_cell" style="height:auto; width:auto"><Text id="cp_coupon_title" props={content: "先领券，再下单", tagName: "h2"}/></Container>
              <Container id="cp_coupon_note_cell" style="height:auto; width:auto"><Text id="cp_coupon_note" props={content: "每档每人限领 1 张，领取后 48 小时内有效", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cp_coupon_cards_cell" style="height:auto; width:100%; justify-content:center">
            <FlexContainer id="cp_coupon_row" props={direction: "row"} style="height:auto; width:100%; max-width:1120px; justify-content:center; align-items:stretch; gap:24px">
              <Container id="cp_coupon_c1_cell" style="height:auto; width:340px; flex-shrink:0; position:relative">
                <FlexContainer id="cp_coupon_c1_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:30px 28px">
                  <Container id="cp_coupon_c1_amount_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c1_amount_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:4px">
                      <Container id="cp_coupon_c1_cur_cell" style="height:auto; width:auto"><Text id="cp_coupon_c1_cur" props={content: "¥", tagName: "span"}/></Container>
                      <Container id="cp_coupon_c1_num_cell" style="height:auto; width:auto"><Text id="cp_coupon_c1_num" props={content: "30", tagName: "h3"}/></Container>
                      <Container id="cp_coupon_c1_tier_cell" style="height:auto; width:auto; margin-left:auto; align-self:center"><Container id="cp_coupon_c1_tier_pill" style="height:auto; width:auto"><Text id="cp_coupon_c1_tier" props={content: "通用券", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c1_cond_cell" style="height:auto; width:100%"><Text id="cp_coupon_c1_cond" props={content: "满 199 元可用 · 跨店通用", tagName: "p"}/></Container>
                  <Container id="cp_coupon_c1_stock_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c1_stock_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                      <Container id="cp_coupon_c1_bar_cell" style="height:6px; width:0px; flex-basis:0px; flex-grow:1"><Container id="cp_coupon_c1_bar_fill" style="height:100%; width:62%; flex-grow:0"/></Container>
                      <Container id="cp_coupon_c1_stock_text_cell" style="height:auto; width:auto"><Text id="cp_coupon_c1_stock" props={content: "剩余 62%", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c1_cta_cell" style="height:auto; width:auto; padding:16px 28px 0px; margin-left:-28px; margin-right:-28px; position:relative"><Button id="cp_coupon_c1_cta" props={content: "立即领取", variant: "primary"} style="height:auto; width:100%; padding:10px 0px"/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_coupon_c2_cell" style="height:auto; width:340px; flex-shrink:0; position:relative">
                <FlexContainer id="cp_coupon_c2_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:30px 28px">
                  <Container id="cp_coupon_c2_amount_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c2_amount_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:4px">
                      <Container id="cp_coupon_c2_cur_cell" style="height:auto; width:auto"><Text id="cp_coupon_c2_cur" props={content: "¥", tagName: "span"}/></Container>
                      <Container id="cp_coupon_c2_num_cell" style="height:auto; width:auto"><Text id="cp_coupon_c2_num" props={content: "80", tagName: "h3"}/></Container>
                      <Container id="cp_coupon_c2_tier_cell" style="height:auto; width:auto; margin-left:auto; align-self:center"><Container id="cp_coupon_c2_tier_pill" style="height:auto; width:auto"><Text id="cp_coupon_c2_tier" props={content: "全品类", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c2_cond_cell" style="height:auto; width:100%"><Text id="cp_coupon_c2_cond" props={content: "满 399 元可用 · 全品类", tagName: "p"}/></Container>
                  <Container id="cp_coupon_c2_stock_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c2_stock_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                      <Container id="cp_coupon_c2_bar_cell" style="height:6px; width:0px; flex-basis:0px; flex-grow:1"><Container id="cp_coupon_c2_bar_fill" style="height:100%; width:38%; flex-grow:0"/></Container>
                      <Container id="cp_coupon_c2_stock_text_cell" style="height:auto; width:auto"><Text id="cp_coupon_c2_stock" props={content: "剩余 38%", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c2_cta_cell" style="height:auto; width:auto; padding:16px 28px 0px; margin-left:-28px; margin-right:-28px; position:relative"><Button id="cp_coupon_c2_cta" props={content: "立即领取", variant: "primary"} style="height:auto; width:100%; padding:10px 0px"/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_coupon_c3_cell" style="height:auto; width:340px; flex-shrink:0; position:relative">
                <FlexContainer id="cp_coupon_c3_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:30px 28px">
                  <Container id="cp_coupon_c3_amount_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c3_amount_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:4px">
                      <Container id="cp_coupon_c3_cur_cell" style="height:auto; width:auto"><Text id="cp_coupon_c3_cur" props={content: "¥", tagName: "span"}/></Container>
                      <Container id="cp_coupon_c3_num_cell" style="height:auto; width:auto"><Text id="cp_coupon_c3_num" props={content: "150", tagName: "h3"}/></Container>
                      <Container id="cp_coupon_c3_tier_cell" style="height:auto; width:auto; margin-left:auto; align-self:center"><Container id="cp_coupon_c3_tier_pill" style="height:auto; width:auto"><Text id="cp_coupon_c3_tier" props={content: "家电专享", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c3_cond_cell" style="height:auto; width:100%"><Text id="cp_coupon_c3_cond" props={content: "满 699 元可用 · 含家电", tagName: "p"}/></Container>
                  <Container id="cp_coupon_c3_stock_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_coupon_c3_stock_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                      <Container id="cp_coupon_c3_bar_cell" style="height:6px; width:0px; flex-basis:0px; flex-grow:1"><Container id="cp_coupon_c3_bar_fill" style="height:100%; width:12%; flex-grow:0"/></Container>
                      <Container id="cp_coupon_c3_stock_text_cell" style="height:auto; width:auto"><Text id="cp_coupon_c3_stock" props={content: "剩余 12% · 即将领完", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_coupon_c3_cta_cell" style="height:auto; width:auto; padding:16px 28px 0px; margin-left:-28px; margin-right:-28px; position:relative"><Button id="cp_coupon_c3_cta" props={content: "立即领取", variant: "primary"} style="height:auto; width:100%; padding:10px 0px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 爆款清单（onView 视图揭示） ─── -->
      <Container id="cp_hot_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:40px 48px 72px">
        <FlexContainer id="cp_hot_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:36px">
          <Container id="cp_hot_head_cell" style="height:auto; width:auto">
            <FlexContainer id="cp_hot_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:8px">
              <Container id="cp_hot_title_cell" style="height:auto; width:auto"><Text id="cp_hot_title" props={content: "爆款清单 · 手慢无", tagName: "h2"}/></Container>
              <Container id="cp_hot_note_cell" style="height:auto; width:auto"><Text id="cp_hot_note" props={content: "每晚 8 点补货，售罄即止", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cp_hot_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="cp_hot_reveal" props={direction: "row", effect: "scaleIn", trigger: "onView", stagger: 90} style="height:auto; width:100%; max-width:1160px; justify-content:center; gap:22px">
              <Container id="cp_hot_a_cell" style="height:auto; width:268px; flex-shrink:0">
                <FlexContainer id="cp_hot_a_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                  <Container id="cp_hot_a_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center; position:relative">
                    <Container id="cp_hot_a_badge_cell" style="height:auto; width:auto; position:absolute; left:12px; top:12px; z-index:1"><Container id="cp_hot_a_badge" style="height:auto; width:auto"><Text id="cp_hot_a_badge_text" props={content: "爆款", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    <Icon id="cp_hot_a_icon" props={iconName: "CookingPot", iconSource: "lucide"}/>
                  </Container>
                  <Container id="cp_hot_a_name_cell" style="height:auto; width:100%"><Text id="cp_hot_a_name" props={content: "多功能电煮锅 2.5L", tagName: "h3"}/></Container>
                  <Container id="cp_hot_a_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_hot_a_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:8px">
                      <Container id="cp_hot_a_now_cell" style="height:auto; width:auto"><Text id="cp_hot_a_now" props={content: "¥139", tagName: "h3"}/></Container>
                      <Container id="cp_hot_a_was_cell" style="height:auto; width:auto"><Text id="cp_hot_a_was" props={content: "¥219", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_hot_a_progress_cell" style="height:6px; width:100%">
                    <Container id="cp_hot_a_fill" style="height:100%; width:82%; flex-grow:0"/>
                  </Container>
                  <Container id="cp_hot_a_sold_cell" style="height:auto; width:100%"><Text id="cp_hot_a_sold" props={content: "已售 82%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_hot_b_cell" style="height:auto; width:268px; flex-shrink:0">
                <FlexContainer id="cp_hot_b_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                  <Container id="cp_hot_b_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center; position:relative">
                    <Container id="cp_hot_b_badge_cell" style="height:auto; width:auto; position:absolute; left:12px; top:12px; z-index:1"><Container id="cp_hot_b_badge" style="height:auto; width:auto"><Text id="cp_hot_b_badge_text" props={content: "直降 ¥200", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    <Icon id="cp_hot_b_icon" props={iconName: "Headphones", iconSource: "lucide"}/>
                  </Container>
                  <Container id="cp_hot_b_name_cell" style="height:auto; width:100%"><Text id="cp_hot_b_name" props={content: "降噪蓝牙耳机 Pro", tagName: "h3"}/></Container>
                  <Container id="cp_hot_b_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_hot_b_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:8px">
                      <Container id="cp_hot_b_now_cell" style="height:auto; width:auto"><Text id="cp_hot_b_now" props={content: "¥399", tagName: "h3"}/></Container>
                      <Container id="cp_hot_b_was_cell" style="height:auto; width:auto"><Text id="cp_hot_b_was" props={content: "¥599", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_hot_b_progress_cell" style="height:6px; width:100%">
                    <Container id="cp_hot_b_fill" style="height:100%; width:64%; flex-grow:0"/>
                  </Container>
                  <Container id="cp_hot_b_sold_cell" style="height:auto; width:100%"><Text id="cp_hot_b_sold" props={content: "已售 64%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_hot_c_cell" style="height:auto; width:268px; flex-shrink:0">
                <FlexContainer id="cp_hot_c_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                  <Container id="cp_hot_c_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center; position:relative">
                    <Container id="cp_hot_c_badge_cell" style="height:auto; width:auto; position:absolute; left:12px; top:12px; z-index:1"><Container id="cp_hot_c_badge" style="height:auto; width:auto"><Text id="cp_hot_c_badge_text" props={content: "直降 ¥400", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    <Icon id="cp_hot_c_icon" props={iconName: "Coffee", iconSource: "lucide"}/>
                  </Container>
                  <Container id="cp_hot_c_name_cell" style="height:auto; width:100%"><Text id="cp_hot_c_name" props={content: "全自动咖啡机 Mini", tagName: "h3"}/></Container>
                  <Container id="cp_hot_c_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_hot_c_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:8px">
                      <Container id="cp_hot_c_now_cell" style="height:auto; width:auto"><Text id="cp_hot_c_now" props={content: "¥899", tagName: "h3"}/></Container>
                      <Container id="cp_hot_c_was_cell" style="height:auto; width:auto"><Text id="cp_hot_c_was" props={content: "¥1299", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_hot_c_progress_cell" style="height:6px; width:100%">
                    <Container id="cp_hot_c_fill" style="height:100%; width:91%; flex-grow:0"/>
                  </Container>
                  <Container id="cp_hot_c_sold_cell" style="height:auto; width:100%"><Text id="cp_hot_c_sold" props={content: "已售 91%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="cp_hot_d_cell" style="height:auto; width:268px; flex-shrink:0">
                <FlexContainer id="cp_hot_d_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:18px">
                  <Container id="cp_hot_d_visual_cell" style="height:150px; width:100%; align-items:center; justify-content:center; position:relative">
                    <Container id="cp_hot_d_badge_cell" style="height:auto; width:auto; position:absolute; left:12px; top:12px; z-index:1"><Container id="cp_hot_d_badge" style="height:auto; width:auto"><Text id="cp_hot_d_badge_text" props={content: "直降 ¥130", tagName: "span"} style="height:auto; width:auto; padding:4px 12px"/></Container></Container>
                    <Icon id="cp_hot_d_icon" props={iconName: "Lamp", iconSource: "lucide"}/>
                  </Container>
                  <Container id="cp_hot_d_name_cell" style="height:auto; width:100%"><Text id="cp_hot_d_name" props={content: "智能护眼台灯", tagName: "h3"}/></Container>
                  <Container id="cp_hot_d_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="cp_hot_d_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:8px">
                      <Container id="cp_hot_d_now_cell" style="height:auto; width:auto"><Text id="cp_hot_d_now" props={content: "¥199", tagName: "h3"}/></Container>
                      <Container id="cp_hot_d_was_cell" style="height:auto; width:auto"><Text id="cp_hot_d_was" props={content: "¥329", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="cp_hot_d_progress_cell" style="height:6px; width:100%">
                    <Container id="cp_hot_d_fill" style="height:100%; width:47%; flex-grow:0"/>
                  </Container>
                  <Container id="cp_hot_d_sold_cell" style="height:auto; width:100%"><Text id="cp_hot_d_sold" props={content: "已售 47%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 活动规则（折叠） ─── -->
      <Container id="cp_rules_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:40px 48px 72px; scroll-margin-top:72px">
        <FlexContainer id="cp_rules_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:32px">
          <Container id="cp_rules_title_cell" style="height:auto; width:auto"><Text id="cp_rules_title" props={content: "活动规则", tagName: "h2"}/></Container>
          <Container id="cp_rules_body_cell" style="height:auto; width:100%; justify-content:center">
            <Collapse id="cp_rules_collapse" props={accordion: true} style="height:auto; width:100%; max-width:860px">
              <Container id="cp_rule_time" props={panelLabel: "活动时间是多久？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="cp_rule_time_text" props={content: "10 月 20 日 20:00 开始，11 月 11 日 24:00 结束；优惠券领取截止 11 月 11 日 23:00，逾期未使用自动退回券池。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="cp_rule_stack" props={panelLabel: "优惠可以叠加吗？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="cp_rule_stack_text" props={content: "跨店满减与品类券可叠加使用；会员折扣在最终支付金额上再享 9 折；秒杀商品不参与满减。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="cp_rule_ship" props={panelLabel: "发货和物流怎么安排？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="cp_rule_ship_text" props={content: "现货商品 48 小时内发出；预售商品按商品页标注时间发货；大促期间物流压力较大，偏远地区预计延迟 1-2 天。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="cp_rule_return" props={panelLabel: "支持退换货吗？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="cp_rule_return_text" props={content: "全平台商品支持 7 天无理由退换；使用优惠券下单的商品，退货后优惠券按原有效期退回账户。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </Collapse>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 CTA ─── -->
      <Container id="cp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:8px 48px 88px">
        <Container id="cp_cta_card" style="height:auto; width:100%; max-width:1120px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="cp_cta_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:12px; padding:56px 48px">
            <Container id="cp_cta_title_cell" style="height:auto; width:auto"><Text id="cp_cta_title" props={content: "券已到手，别让它过期", tagName: "h2"}/></Container>
            <Container id="cp_cta_desc_cell" style="height:auto; width:auto"><Text id="cp_cta_desc" props={content: "去主会场挑好物，结算时自动抵扣最优券组合。", tagName: "p"}/></Container>
            <Container id="cp_cta_btn_cell" style="height:auto; width:auto; padding-top:10px"><Button id="cp_cta_btn" props={content: "去主会场逛逛", variant: "primary"} style="height:auto; width:auto; padding:13px 32px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="cp_footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="cp_footer" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:28px 48px 36px">
        <FlexContainer id="cp_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:12px">
          <Container id="cp_footer_links_cell" style="height:auto; width:100%">
            <FlexContainer id="cp_footer_links_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; gap:26px">
              <Container id="cp_footer_rule_cell" style="height:auto; width:auto"><Link id="cp_footer_rule" props={content: "活动细则", to: "https://example.com/rules", target: "_blank"}/></Container>
              <Container id="cp_footer_service_cell" style="height:auto; width:auto"><Link id="cp_footer_service" props={content: "客服中心", to: "https://example.com/support", target: "_blank"}/></Container>
              <Container id="cp_footer_contact_cell" style="height:auto; width:auto"><Link id="cp_footer_contact" props={content: "商务合作", to: "https://example.com/contact", target: "_blank"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="cp_footer_copyright_cell" style="height:auto; width:100%"><Text id="cp_footer_copyright" props={content: "© 2026 星河零售 · 星河生活节（演示模板，品牌与数据均为虚构）", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏数字滚动（已发券 / 参与门店值插值；无 JS / reduced-motion → 默认数字完整）
      @cp_hero_stats_cell = {
        events: { statsCount: { trigger: "onMount", action: motion.counter({targets: ["cp_stat_coupon_value", "cp_stat_store_value", "cp_stat_member_value"], duration: "slow"}) } }
      };
      # 声明式反馈（纯前端动作）
      @cp_nav_cta = {
        events: { joinNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已加入活动会场，先去领券吧"}) } }
      };
      @cp_hero_cta_coupon = {
        events: { claimAll: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "三档优惠券已放入卡包，结算时自动抵扣"}) } }
      };
      @cp_coupon_c1_cta = {
        events: { claim1: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "满 199 减 30 券已领取，48 小时内有效"}) } }
      };
      @cp_coupon_c2_cta = {
        events: { claim2: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "满 399 减 80 券已领取，48 小时内有效"}) } }
      };
      @cp_coupon_c3_cta = {
        events: { claim3: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "满 699 减 150 券已领取，48 小时内有效"}) } }
      };
      @cp_cta_btn = {
        events: { toMain: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "主会场已开启：满减 + 秒杀 + 券池一次逛完"}) } }
      };
    </script>

    <styles>
      # 0. 基调（暖色节日）
      @cp_root = { background: #fffaf3; }
      @cp_nav = {
        background: rgba(255, 250, 243, 0.82);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(225, 29, 72, 0.08); }
      }
      @cp_nav_logo = { color: #e11d48; font-size: 22px; }
      @cp_nav_brand = { color: #7f1d1d; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      @cp_nav_menu = {
        :scope { --anchor-item-color: #7c2d12; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #e11d48; --anchor-item-active-bg: transparent; --anchor-gap: 34px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #e11d48; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #e11d48; }
      }
      @cp_nav_cta = {
        color: #ffffff;
        background: linear-gradient(120deg, #e11d48 0%, #f97316 100%);
        border-radius: 999px;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 6px 18px rgba(225, 29, 72, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.38);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(225, 29, 72, 0.35); }
      }

      # 1. Hero（红金渐变 + 纸屑光斑）
      @cp_hero = {
        background: linear-gradient(165deg, #fff1e6 0%, #ffe3d0 42%, #ffd9c7 68%, #fffaf3 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -140px;
          top: -120px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(249, 115, 22, 0.22), transparent 72%);
        }
        :scope::after {
          content: '';
          position: absolute;
          right: -120px;
          top: 30px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(225, 29, 72, 0.18), transparent 70%);
        }
      }
      @cp_hero_eyebrow = { background-color: #fee2e2; color: #b91c1c; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @cp_hero_title = {
        font-size: 60px;
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -2px;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #9f1239 0%, #e11d48 42%, #f97316 78%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 14px 38px rgba(225, 29, 72, 0.2);
        }
      }
      @cp_hero_sub = { color: #7c2d12; font-size: 17px; line-height: 1.9; text-align: center; }
      @cp_hero_cta_coupon = {
        color: #ffffff;
        background: linear-gradient(120deg, #e11d48 0%, #f97316 120%);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 26px rgba(225, 29, 72, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.38);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(225, 29, 72, 0.38); }
      }
      @cp_hero_cta_guide = {
        color: #9f1239;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        :scope { border: 1px solid rgba(225, 29, 72, 0.28); transition: transform 0.22s ease, border-color 0.22s ease; }
        :scope:hover { transform: translateY(-2px); border-color: #e11d48; }
      }
      @cp_stat_coupon_value = { color: #e11d48; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @cp_stat_store_value = { color: #f97316; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @cp_stat_member_value = { color: #b45309; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @cp_stat_coupon_label = { color: #9a3412; font-size: 13px; font-weight: 600; }
      @cp_stat_store_label = { color: #9a3412; font-size: 13px; font-weight: 600; }
      @cp_stat_member_label = { color: #9a3412; font-size: 13px; font-weight: 600; }

      # 2. 优惠券卡（票券视觉：虚线切口 + 渐变底）
      @cp_coupon_title = { color: #7f1d1d; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @cp_coupon_note = { color: #9a3412; font-size: 15px; }
      @cp_coupon_c1_cell = {
        background: linear-gradient(150deg, #ffffff 0%, #fff1f2 100%);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(225, 29, 72, 0.1);
        :scope { border: 1px dashed rgba(225, 29, 72, 0.35); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(225, 29, 72, 0.18); }
      }
      @cp_coupon_c2_cell = {
        background: linear-gradient(150deg, #ffffff 0%, #fff1f2 100%);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(225, 29, 72, 0.1);
        :scope { border: 1px dashed rgba(225, 29, 72, 0.35); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(225, 29, 72, 0.18); }
      }
      @cp_coupon_c3_cell = {
        background: linear-gradient(150deg, #ffffff 0%, #fff1f2 100%);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(225, 29, 72, 0.1);
        :scope { border: 1px dashed rgba(225, 29, 72, 0.35); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(225, 29, 72, 0.18); }
      }
      @cp_coupon_c1_cur = { color: #e11d48; font-size: 20px; font-weight: 800; }
      @cp_coupon_c2_cur = { color: #e11d48; font-size: 20px; font-weight: 800; }
      @cp_coupon_c3_cur = { color: #e11d48; font-size: 20px; font-weight: 800; }
      @cp_coupon_c1_num = { font-size: 46px; font-weight: 900; letter-spacing: -1px; :scope { background-image: linear-gradient(120deg, #e11d48 0%, #f97316 100%); -webkit-background-clip: text; background-clip: text; color: transparent; } }
      @cp_coupon_c2_num = { font-size: 46px; font-weight: 900; letter-spacing: -1px; :scope { background-image: linear-gradient(120deg, #e11d48 0%, #f97316 100%); -webkit-background-clip: text; background-clip: text; color: transparent; } }
      @cp_coupon_c3_num = { font-size: 46px; font-weight: 900; letter-spacing: -1px; :scope { background-image: linear-gradient(120deg, #e11d48 0%, #f97316 100%); -webkit-background-clip: text; background-clip: text; color: transparent; } }
      @cp_coupon_c1_cond = { color: #7c2d12; font-size: 14px; }
      @cp_coupon_c2_cond = { color: #7c2d12; font-size: 14px; }
      @cp_coupon_c3_cond = { color: #7c2d12; font-size: 14px; }
      @cp_coupon_c1_stock = { color: #b91c1c; font-size: 12px; font-weight: 700; }
      @cp_coupon_c2_stock = { color: #b91c1c; font-size: 12px; font-weight: 700; }
      @cp_coupon_c3_stock = { color: #be123c; font-size: 12px; font-weight: 800; }
      @cp_coupon_c1_cta = { color: #ffffff; background: #e11d48; border-radius: 10px; font-size: 15px; font-weight: 700; box-shadow: 0 5px 14px rgba(225, 29, 72, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.3); :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #be123c; } }
      @cp_coupon_c2_cta = { color: #ffffff; background: #e11d48; border-radius: 10px; font-size: 15px; font-weight: 700; box-shadow: 0 5px 14px rgba(225, 29, 72, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.3); :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #be123c; } }
      @cp_coupon_c3_cta = { color: #ffffff; background: #e11d48; border-radius: 10px; font-size: 15px; font-weight: 700; box-shadow: 0 5px 14px rgba(225, 29, 72, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.3); :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #be123c; } }

      # 3. 爆款卡
      @cp_hot_title = { color: #7f1d1d; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @cp_hot_note = { color: #9a3412; font-size: 15px; }
      @cp_hot_a_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 4px 16px rgba(124, 45, 18, 0.07); :scope { border: 1px solid #ffedd5; transition: transform 0.25s ease, box-shadow 0.25s ease; } :scope:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(124, 45, 18, 0.14); } }
      @cp_hot_b_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 4px 16px rgba(124, 45, 18, 0.07); :scope { border: 1px solid #ffedd5; transition: transform 0.25s ease, box-shadow 0.25s ease; } :scope:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(124, 45, 18, 0.14); } }
      @cp_hot_c_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 4px 16px rgba(124, 45, 18, 0.07); :scope { border: 1px solid #ffedd5; transition: transform 0.25s ease, box-shadow 0.25s ease; } :scope:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(124, 45, 18, 0.14); } }
      @cp_hot_d_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 4px 16px rgba(124, 45, 18, 0.07); :scope { border: 1px solid #ffedd5; transition: transform 0.25s ease, box-shadow 0.25s ease; } :scope:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(124, 45, 18, 0.14); } }
      @cp_hot_a_visual_cell = { background: linear-gradient(150deg, #fff7ed 0%, #ffedd5 100%); border-radius: 14px; :scope::before { content: ''; position: absolute; left: 50%; top: 46%; width: 118px; height: 118px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 76%); } }
      @cp_hot_b_visual_cell = { background: linear-gradient(150deg, #fff1f2 0%, #ffe4e6 100%); border-radius: 14px; :scope::before { content: ''; position: absolute; left: 50%; top: 46%; width: 118px; height: 118px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 76%); } }
      @cp_hot_c_visual_cell = { background: linear-gradient(150deg, #fefce8 0%, #fef3c7 100%); border-radius: 14px; :scope::before { content: ''; position: absolute; left: 50%; top: 46%; width: 118px; height: 118px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 76%); } }
      @cp_hot_d_visual_cell = { background: linear-gradient(150deg, #f0fdfa 0%, #ccfbf1 100%); border-radius: 14px; :scope::before { content: ''; position: absolute; left: 50%; top: 46%; width: 118px; height: 118px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 76%); } }
      @cp_hot_a_icon = { color: #ea580c; font-size: 54px; }
      @cp_hot_b_icon = { color: #e11d48; font-size: 54px; }
      @cp_hot_c_icon = { color: #ca8a04; font-size: 54px; }
      @cp_hot_d_icon = { color: #0d9488; font-size: 54px; }
      @cp_hot_a_name = { color: #1c1917; font-size: 16px; font-weight: 700; }
      @cp_hot_b_name = { color: #1c1917; font-size: 16px; font-weight: 700; }
      @cp_hot_c_name = { color: #1c1917; font-size: 16px; font-weight: 700; }
      @cp_hot_d_name = { color: #1c1917; font-size: 16px; font-weight: 700; }
      @cp_hot_a_now = { color: #e11d48; font-size: 24px; font-weight: 900; }
      @cp_hot_b_now = { color: #e11d48; font-size: 24px; font-weight: 900; }
      @cp_hot_c_now = { color: #e11d48; font-size: 24px; font-weight: 900; }
      @cp_hot_d_now = { color: #e11d48; font-size: 24px; font-weight: 900; }
      @cp_hot_a_was = { color: #a8a29e; font-size: 13px; text-decoration: line-through; }
      @cp_hot_b_was = { color: #a8a29e; font-size: 13px; text-decoration: line-through; }
      @cp_hot_c_was = { color: #a8a29e; font-size: 13px; text-decoration: line-through; }
      @cp_hot_d_was = { color: #a8a29e; font-size: 13px; text-decoration: line-through; }
      @cp_hot_a_progress_cell = { background: #fee2e2; border-radius: 999px; }
      @cp_hot_b_progress_cell = { background: #fee2e2; border-radius: 999px; }
      @cp_hot_c_progress_cell = { background: #fee2e2; border-radius: 999px; }
      @cp_hot_d_progress_cell = { background: #fee2e2; border-radius: 999px; }
      @cp_hot_a_fill = { background: linear-gradient(90deg, #f97316 0%, #e11d48 100%); border-radius: 999px; }
      @cp_hot_b_fill = { background: linear-gradient(90deg, #f97316 0%, #e11d48 100%); border-radius: 999px; }
      @cp_hot_c_fill = { background: linear-gradient(90deg, #f97316 0%, #e11d48 100%); border-radius: 999px; }
      @cp_hot_d_fill = { background: linear-gradient(90deg, #f97316 0%, #e11d48 100%); border-radius: 999px; }
      @cp_hot_a_sold = { color: #b91c1c; font-size: 12px; font-weight: 700; }
      @cp_hot_b_sold = { color: #b91c1c; font-size: 12px; font-weight: 700; }
      @cp_hot_c_sold = { color: #b91c1c; font-size: 12px; font-weight: 700; }
      @cp_hot_d_sold = { color: #b91c1c; font-size: 12px; font-weight: 700; }

      # 4. 规则与收口
      @cp_rules_title = { color: #7f1d1d; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @cp_rule_time_text = { color: #7c2d12; font-size: 15px; line-height: 1.9; }
      @cp_rule_stack_text = { color: #7c2d12; font-size: 15px; line-height: 1.9; }
      @cp_rule_ship_text = { color: #7c2d12; font-size: 15px; line-height: 1.9; }
      @cp_rule_return_text = { color: #7c2d12; font-size: 15px; line-height: 1.9; }
      @cp_cta_card = {
        background: linear-gradient(120deg, #9f1239 0%, #e11d48 52%, #f97316 120%);
        border-radius: 28px;
        box-shadow: 0 30px 70px rgba(159, 18, 57, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.22);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -120px; top: -150px; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -140px; bottom: -170px; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(closest-side, rgba(251, 191, 36, 0.34), rgba(251, 191, 36, 0) 72%); }
      }
      @cp_cta_title = { color: #ffffff; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @cp_cta_desc = { color: rgba(255, 241, 242, 0.92); font-size: 16px; }
      @cp_cta_btn = {
        color: #9f1239;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(28, 25, 23, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(28, 25, 23, 0.26); }
      }

      # 5. 页脚
      @cp_footer_divider = { background: #ffedd5; }
      @cp_footer_rule = { color: #9a3412; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #e11d48; } }
      @cp_footer_service = { color: #9a3412; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #e11d48; } }
      @cp_footer_contact = { color: #9a3412; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #e11d48; } }
      @cp_footer_copyright = { color: #c2410c; font-size: 12px; text-align: center; }

      # 6. 质感升级（2026-09-14：光效 + 徽记 + 票券化 + 星河装饰层——visual-composition 规则 16）
      @cp_hero_deco_cell = {
        :scope { animation: cpDecoFloat 7s ease-in-out infinite; }
        @keyframes cpDecoFloat { 0% { transform: translateY(0px) } 50% { transform: translateY(-10px) } 100% { transform: translateY(0px) } }
      }
@cp_stat_div_1 = { background: linear-gradient(180deg, rgba(225, 29, 72, 0), rgba(225, 29, 72, 0.26) 50%, rgba(225, 29, 72, 0)); }
@cp_stat_div_2 = { background: linear-gradient(180deg, rgba(225, 29, 72, 0), rgba(225, 29, 72, 0.26) 50%, rgba(225, 29, 72, 0)); }
@cp_coupon_c1_tier_pill = { background: #fee2e2; border-radius: 999px; }
@cp_coupon_c1_tier = { color: #b91c1c; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
@cp_coupon_c1_bar_cell = { background: #ffe4e6; border-radius: 999px; }
@cp_coupon_c1_bar_fill = { background: linear-gradient(90deg, #fb7185 0%, #e11d48 100%); border-radius: 999px; }
@cp_coupon_c1_cta_cell = {
        :scope { border-top: 1px dashed rgba(225, 29, 72, 0.32); }
        :scope::before { content: ''; position: absolute; left: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
        :scope::after { content: ''; position: absolute; right: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
      }
@cp_coupon_c2_tier_pill = { background: #fee2e2; border-radius: 999px; }
@cp_coupon_c2_tier = { color: #b91c1c; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
@cp_coupon_c2_bar_cell = { background: #ffe4e6; border-radius: 999px; }
@cp_coupon_c2_bar_fill = { background: linear-gradient(90deg, #fb7185 0%, #e11d48 100%); border-radius: 999px; }
@cp_coupon_c2_cta_cell = {
        :scope { border-top: 1px dashed rgba(225, 29, 72, 0.32); }
        :scope::before { content: ''; position: absolute; left: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
        :scope::after { content: ''; position: absolute; right: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
      }
@cp_coupon_c3_tier_pill = { background: #fee2e2; border-radius: 999px; }
@cp_coupon_c3_tier = { color: #b91c1c; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
@cp_coupon_c3_bar_cell = { background: #ffe4e6; border-radius: 999px; }
@cp_coupon_c3_bar_fill = { background: linear-gradient(90deg, #fb7185 0%, #e11d48 100%); border-radius: 999px; }
@cp_coupon_c3_cta_cell = {
        :scope { border-top: 1px dashed rgba(225, 29, 72, 0.32); }
        :scope::before { content: ''; position: absolute; left: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
        :scope::after { content: ''; position: absolute; right: -13px; top: -13px; width: 26px; height: 26px; border-radius: 50%; background: #fffaf3; }
      }
@cp_hot_a_badge = { background: linear-gradient(120deg, #e11d48 0%, #f97316 100%); border-radius: 999px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3); }
@cp_hot_a_badge_text = { color: #ffffff; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
@cp_hot_b_badge = { background: linear-gradient(120deg, #e11d48 0%, #f97316 100%); border-radius: 999px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3); }
@cp_hot_b_badge_text = { color: #ffffff; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
@cp_hot_c_badge = { background: linear-gradient(120deg, #e11d48 0%, #f97316 100%); border-radius: 999px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3); }
@cp_hot_c_badge_text = { color: #ffffff; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
@cp_hot_d_badge = { background: linear-gradient(120deg, #e11d48 0%, #f97316 100%); border-radius: 999px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3); }
@cp_hot_d_badge_text = { color: #ffffff; font-size: 12px; font-weight: 800; letter-spacing: 1px; }
    </styles>
  </Page>
</App>
```

> 制作要点：两组动效编排（首屏 onMount / 爆款卡 onView），数字滚动仅首屏（折叠线下白播）；优惠券卡与爆款卡的 hover 归 styles 区（循环/微交互不进编排通道）；活动规则等工具性内容零动效。
>
> 质感升级（2026-09-14，visual-composition 规则 16「UI 质感六件套」）——① **涂装/留白分层全谱系修复**：nav 带 / hero 带 / 券卡 / 爆款卡 / CTA 卡原本「涂装 + padding」同节点（描边贴内容、hero 渐变内缩成矩形），内边距全部下沉内层（nav_row / hero Animate / 卡内列）；② **hero 星河装饰层**：SVG 星光拖尾（渐变描边 + 辉光）+ 四角星徽记 + 柔焦金斑，慢浮动 keyframes（`cpDecoFloat`）；③ **券卡票券化**：档位 pill / 渐变数字 / 库存进度条 / 虚线分隔 + 圆形切口（圆心对齐卡描边：涂装盒内缩 28px → `left:-41px`）；④ **爆款卡**：角标徽记（爆款 / 直降 ¥xx）+ 视觉格柔光底 + 进度条；⑤ **CTA 卡**：双柔光斑 + 内高光，按钮内高光/外发光；⑥ 统计行分隔线。**坑**：进度条填充须显式 `flex-grow:0`（container 子缺省注入 flexGrow:1 会把填充拉满格——原模板四根已售条全部满格）。
