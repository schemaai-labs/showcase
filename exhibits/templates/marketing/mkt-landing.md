# SaaS 产品官网 / 落地页 — 「云巡 CloudPatrol」设备巡检平台

> 模板定位（营销 / 增长 tab）：转化导向的单页官网——首屏入场编排 + 社会证明 + 能力卡（视图揭示）+ 定价方案 + FAQ + 收口 CTA。
> 场景需求：给一款「设备巡检与运维协同」的 B 端 SaaS 做官网落地页：深靛蓝主题，首屏大标题 + 双 CTA + 三个滚动数字（服务团队数 / 异常闭环率 / 平均响应），往下依次是客户名单条、四张能力卡（进入视口逐步揭示）、三档定价（专业版推荐）、常见问题折叠、渐变收口 CTA 与页脚。动效只做两组编排（首屏 onMount / 能力卡 onView），零 API、纯静态数据。

```lang
<App dsl-version="0.3" name="云巡 CloudPatrol 产品官网">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="lp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（玻璃吸顶） ─── -->
      <Container id="nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 48px">
          <Container id="nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="nav_logo_cell" style="height:auto; width:auto">
                <Icon id="nav_logo" props={iconName: "ShieldCheck", iconSource: "lucide"}/>
              </Container>
              <Container id="nav_brand_text_cell" style="height:auto; width:auto">
                <Text id="nav_brand" props={content: "云巡 CloudPatrol", tagName: "span"}/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="nav_item_feature" props={itemLabel: "产品能力", itemTarget: "feature_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_proof" props={itemLabel: "客户案例", itemTarget: "proof_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_pricing" props={itemLabel: "价格方案", itemTarget: "pricing_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_faq" props={itemLabel: "常见问题", itemTarget: "faq_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nav_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:18px; align-items:center">
              <Container id="nav_login_cell" style="height:auto; width:auto"><Text id="nav_login_txt" props={content: "登录", tagName: "span"}/></Container>
              <Container id="nav_trial_cell" style="height:auto; width:auto"><Button id="nav_trial_btn" props={content: "免费试用", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（onMount 入场编排 + 数字滚动） ─── -->
      <Container id="hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="hero_grid_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0"/>
        <Animate id="hero_reveal" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 100, duration: "slow"} style="align-items:center; gap:22px; height:auto; width:100%; padding:84px 48px 88px; position:relative">
          <Container id="hero_eyebrow_cell" style="height:auto; width:auto">
            <Tag id="hero_eyebrow" props={text: "巡检 3.0 全新发布 · 支持离线巡检", color: "blue"}/>
          </Container>
          <Container id="hero_title_cell" style="height:auto; width:100%">
            <Text id="hero_title" props={content: "让每一次巡检，都有据可查", tagName: "h1"} style="height:auto; width:100%"/>
          </Container>
          <Container id="hero_sub_cell" style="height:auto; width:720px; flex-shrink:0">
            <Text id="hero_sub" props={content: "扫码巡检、异常上报、工单派发、数据看板——把散落在纸质表格和微信群里的现场记录，变成可追溯、可分析的数字资产。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="hero_cta_cell" style="height:auto; width:auto; padding-top:8px">
            <FlexContainer id="hero_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center">
              <Container id="hero_cta_primary_cell" style="height:auto; width:auto"><Button id="hero_cta_primary" props={content: "免费开始使用", variant: "primary"} style="height:auto; width:auto; padding:13px 30px"/></Container>
              <Container id="hero_cta_demo_cell" style="height:auto; width:auto"><Button id="hero_cta_demo" props={content: "预约产品演示", variant: "default"} style="height:auto; width:auto; padding:13px 26px"/></Container>
            </FlexContainer>
          </Container>
          <Container id="hero_stats_cell" style="height:auto; width:100%; padding-top:30px">
            <FlexContainer id="hero_stats_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:72px">
              <Container id="hero_stat_teams_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_teams_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_teams_value_cell" style="height:auto; width:auto"><Text id="hero_stat_teams_value" props={content: "1200+", tagName: "h3"}/></Container>
                  <Container id="hero_stat_teams_label_cell" style="height:auto; width:auto"><Text id="hero_stat_teams_label" props={content: "家团队正在使用", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hero_stat_div_1" style="height:44px; width:1px"/>
              <Container id="hero_stat_closed_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_closed_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_closed_value_cell" style="height:auto; width:auto"><Text id="hero_stat_closed_value" props={content: "98%", tagName: "h3"}/></Container>
                  <Container id="hero_stat_closed_label_cell" style="height:auto; width:auto"><Text id="hero_stat_closed_label" props={content: "异常闭环率", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hero_stat_div_2" style="height:44px; width:1px"/>
              <Container id="hero_stat_response_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_response_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_response_value_cell" style="height:auto; width:auto"><Text id="hero_stat_response_value" props={content: "3", tagName: "h3"}/></Container>
                  <Container id="hero_stat_response_label_cell" style="height:auto; width:auto"><Text id="hero_stat_response_label" props={content: "分钟平均响应", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 客户名单条 ─── -->
      <Container id="proof_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:72px">
        <FlexContainer id="proof_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:48px; padding:28px 48px">
          <Container id="proof_label_cell" style="height:auto; width:auto"><Text id="proof_label" props={content: "这些团队都在用", tagName: "span"}/></Container>
          <Container id="proof_names_cell" style="height:auto; width:auto">
            <FlexContainer id="proof_names_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:36px">
              <Container id="proof_brand_huayun_cell" style="height:auto; width:auto"><Text id="proof_brand_huayun" props={content: "华云制造", tagName: "span"}/></Container>
              <Container id="proof_brand_nanfeng_cell" style="height:auto; width:auto"><Text id="proof_brand_nanfeng" props={content: "南风物业", tagName: "span"}/></Container>
              <Container id="proof_brand_jidi_cell" style="height:auto; width:auto"><Text id="proof_brand_jidi" props={content: "极地能源", tagName: "span"}/></Container>
              <Container id="proof_brand_xunda_cell" style="height:auto; width:auto"><Text id="proof_brand_xunda" props={content: "迅达物流", tagName: "span"}/></Container>
              <Container id="proof_brand_lanwan_cell" style="height:auto; width:auto"><Text id="proof_brand_lanwan" props={content: "蓝湾酒店", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 能力卡（onView 视图揭示） ─── -->
      <Container id="feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:64px 48px 96px; scroll-margin-top:72px">
        <FlexContainer id="feature_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px">
          <Container id="feature_head_cell" style="height:auto; width:auto">
            <FlexContainer id="feature_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="feature_eyebrow_cell" style="height:auto; width:auto"><Text id="feature_eyebrow" props={content: "产品能力", tagName: "span"}/></Container>
              <Container id="feature_title_cell" style="height:auto; width:auto"><Text id="feature_title" props={content: "从现场到看板，一条链路跑通", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="feature_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="feature_reveal" props={direction: "row", effect: "scaleIn", trigger: "onView", stagger: 90} style="height:auto; width:100%; max-width:1160px; justify-content:center; gap:24px">
              <Container id="feat_scan_cell" style="height:auto; width:270px; flex-shrink:0">
                <FlexContainer id="feat_scan_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_scan_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_scan_icon" props={iconName: "ScanLine", iconSource: "lucide"}/></Container>
                  <Container id="feat_scan_name_cell" style="height:auto; width:100%"><Text id="feat_scan_name" props={content: "扫码巡检", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_scan_desc_cell" style="height:auto; width:100%"><Text id="feat_scan_desc" props={content: "点位二维码一扫即达，检查项按模板逐条过，拍照留证自动归档。", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_loop_cell" style="height:auto; width:270px; flex-shrink:0">
                <FlexContainer id="feat_loop_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_loop_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_loop_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="feat_loop_name_cell" style="height:auto; width:100%"><Text id="feat_loop_name" props={content: "异常闭环", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_loop_desc_cell" style="height:auto; width:100%"><Text id="feat_loop_desc" props={content: "发现问题就地标记等级与责任人，处理进度全程留痕，超时自动升级提醒。", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_flow_cell" style="height:auto; width:270px; flex-shrink:0">
                <FlexContainer id="feat_flow_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_flow_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_flow_icon" props={iconName: "Zap", iconSource: "lucide"}/></Container>
                  <Container id="feat_flow_name_cell" style="height:auto; width:100%"><Text id="feat_flow_name" props={content: "工单协同", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_flow_desc_cell" style="height:auto; width:100%"><Text id="feat_flow_desc" props={content: "异常一键转工单，派单、接单、验收状态实时同步，微信短信双通道通知。", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_insight_cell" style="height:auto; width:270px; flex-shrink:0">
                <FlexContainer id="feat_insight_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_insight_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_insight_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
                  <Container id="feat_insight_name_cell" style="height:auto; width:100%"><Text id="feat_insight_name" props={content: "数据洞察", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_insight_desc_cell" style="height:auto; width:100%"><Text id="feat_insight_desc" props={content: "人效、点位达标率、故障热区一屏尽览，让排班与检修预算有数可依。", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 定价方案（三档） ─── -->
      <Container id="pricing_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:72px">
        <FlexContainer id="pricing_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px; padding:88px 48px 104px">
          <Container id="pricing_head_cell" style="height:auto; width:auto">
            <FlexContainer id="pricing_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="pricing_eyebrow_cell" style="height:auto; width:auto"><Text id="pricing_eyebrow" props={content: "价格方案", tagName: "span"}/></Container>
              <Container id="pricing_title_cell" style="height:auto; width:auto"><Text id="pricing_title" props={content: "按团队规模，选合适的档位", tagName: "h2"}/></Container>
              <Container id="pricing_note_cell" style="height:auto; width:auto"><Text id="pricing_note" props={content: "所有档位均含 14 天全功能试用，到期自动降级不扣费", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="pricing_cards_cell" style="height:auto; width:100%; justify-content:center">
            <FlexContainer id="pricing_row" props={direction: "row"} style="height:auto; width:100%; max-width:1120px; justify-content:center; align-items:stretch; gap:24px">
              <Container id="tier_starter_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_starter_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_starter_name_cell" style="height:auto; width:100%"><Text id="tier_starter_name" props={content: "入门版", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_starter_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_starter_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_starter_amount_cell" style="height:auto; width:auto"><Text id="tier_starter_amount" props={content: "¥199", tagName: "h3"}/></Container>
                      <Container id="tier_starter_period_cell" style="height:auto; width:auto"><Text id="tier_starter_period" props={content: "/ 月 · 10 人以内", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_starter_desc_cell" style="height:auto; width:100%"><Text id="tier_starter_desc" props={content: "小团队把巡检流程先跑起来。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_starter_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_starter_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_starter_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f1_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f1_text" props={content: "扫码巡检 + 拍照留证", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_starter_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f2_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f2_text" props={content: "异常上报与闭环跟踪", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_starter_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f3_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f3_text" props={content: "基础数据看板", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_starter_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_starter_cta" props={content: "免费试用 14 天", variant: "default"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tier_pro_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_pro_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_pro_head_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                      <Container id="tier_pro_name_cell" style="height:auto; width:auto"><Text id="tier_pro_name" props={content: "专业版", tagName: "h3"}/></Container>
                      <Container id="tier_pro_badge_cell" style="height:auto; width:auto"><Tag id="tier_pro_badge" props={text: "最受欢迎", color: "gold"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_pro_amount_cell" style="height:auto; width:auto"><Text id="tier_pro_amount" props={content: "¥599", tagName: "h3"}/></Container>
                      <Container id="tier_pro_period_cell" style="height:auto; width:auto"><Text id="tier_pro_period" props={content: "/ 月 · 50 人以内", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_desc_cell" style="height:auto; width:100%"><Text id="tier_pro_desc" props={content: "多班组、多项目部的完整协同。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_pro_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_pro_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f1_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f1_text" props={content: "含入门版全部能力", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f2_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f2_text" props={content: "工单派发 / 验收全流程", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f3_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f3_text" props={content: "排班与点位达标率分析", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f4_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f4_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f4_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f4_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f4_text" props={content: "API 开放与单点登录", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f5_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f5_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f5_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f5_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f5_text" props={content: "专属客户成功经理", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_pro_cta" props={content: "立即开通专业版", variant: "primary"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tier_ent_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_ent_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_ent_name_cell" style="height:auto; width:100%"><Text id="tier_ent_name" props={content: "旗舰版", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_ent_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_ent_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_ent_amount_cell" style="height:auto; width:auto"><Text id="tier_ent_amount" props={content: "定制报价", tagName: "h3"}/></Container>
                      <Container id="tier_ent_period_cell" style="height:auto; width:auto"><Text id="tier_ent_period" props={content: "不限人数 · 私有化可选", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_ent_desc_cell" style="height:auto; width:100%"><Text id="tier_ent_desc" props={content: "集团级管控与合规要求。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_ent_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_ent_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_ent_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f1_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f1_text" props={content: "含专业版全部能力", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f2_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f2_text" props={content: "多组织架构与数据隔离", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f3_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f3_text" props={content: "私有化部署 / 专属云", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f4_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f4_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f4_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f4_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f4_text" props={content: "SLA 保障与季度巡检报告", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f5_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f5_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f5_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f5_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f5_text" props={content: "现场培训与陪跑", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_ent_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_ent_cta" props={content: "联系销售", variant: "default"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 常见问题 ─── -->
      <Container id="faq_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:88px 48px 96px; scroll-margin-top:72px">
        <FlexContainer id="faq_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:36px">
          <Container id="faq_head_cell" style="height:auto; width:auto">
            <FlexContainer id="faq_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="faq_eyebrow_cell" style="height:auto; width:auto"><Text id="faq_eyebrow" props={content: "常见问题", tagName: "span"}/></Container>
              <Container id="faq_title_cell" style="height:auto; width:auto"><Text id="faq_title" props={content: "上手之前，你可能想知道", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="faq_body_cell" style="height:auto; width:100%; justify-content:center">
            <Collapse id="faq_collapse" props={accordion: true} style="height:auto; width:100%; max-width:860px">
              <Container id="faq_panel_plan" props={panelLabel: "巡检计划和点位怎么管理？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_plan" props={content: "点位支持批量导入并自动生成二维码标签；巡检计划按点位组 + 检查项模板编排，支持每日、每周与自定义频次，改版即刻下发到一线。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_offline" props={panelLabel: "车间和地下车库没有信号，能用吗？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_offline" props={content: "可以。App 支持离线巡检：无网环境下正常记录与拍照，回到有信号区域自动同步，冲突记录会提示人工确认。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_data" props={panelLabel: "历史数据能导出给甲方或审计吗？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_data" props={content: "可以。巡检记录、异常台账与处理时间线支持按时间与点位导出 Excel / PDF，含操作人与时间戳，满足合规审计要求。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_deploy" props={panelLabel: "部署方式与数据安全怎么保障？"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_deploy" props={content: "默认 SaaS 部署，数据加密存储并每日备份；旗舰版支持私有化部署与专属云，满足集团级数据不出内网的合规要求。", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </Collapse>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 收口 CTA ─── -->
      <Container id="cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:16px 48px 104px">
        <Container id="cta_card" style="height:auto; width:100%; max-width:1120px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="cta_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:64px 56px">
            <Container id="cta_title_cell" style="height:auto; width:auto"><Text id="cta_title" props={content: "今天就让第一张巡检单，变成数据", tagName: "h2"}/></Container>
            <Container id="cta_desc_cell" style="height:auto; width:640px; flex-shrink:0"><Text id="cta_desc" props={content: "30 分钟完成初始化：导入点位、套用模板、邀请成员，一线当天就能用起来。", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="cta_btn_cell" style="height:auto; width:auto; padding-top:12px"><Button id="cta_btn" props={content: "免费开始使用", variant: "primary"} style="height:auto; width:auto; padding:13px 32px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 8. 页脚 ─── -->
      <Container id="footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:32px 48px 40px">
        <FlexContainer id="footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:16px">
          <Container id="footer_brand_cell" style="height:auto; width:auto"><Text id="footer_brand" props={content: "云巡 CloudPatrol", tagName: "span"}/></Container>
          <Container id="footer_links_cell" style="height:auto; width:100%">
            <FlexContainer id="footer_links_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; gap:28px">
              <Container id="footer_link_privacy_cell" style="height:auto; width:auto"><Link id="footer_privacy" props={content: "隐私政策", to: "https://example.com/legal/privacy", target: "_blank"}/></Container>
              <Container id="footer_link_terms_cell" style="height:auto; width:auto"><Link id="footer_terms" props={content: "服务条款", to: "https://example.com/legal/terms", target: "_blank"}/></Container>
              <Container id="footer_link_contact_cell" style="height:auto; width:auto"><Link id="footer_contact" props={content: "联系我们", to: "https://example.com/contact", target: "_blank"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="footer_copyright_cell" style="height:auto; width:100%"><Text id="footer_copyright" props={content: "© 2026 云巡 CloudPatrol · 演示模板（品牌与数据均为虚构）", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏数字滚动（值插值：从 0 补间到默认数字，前后缀保留；无 JS / reduced-motion → 默认数字完整）
      @hero_stats_cell = {
        events: { statsCount: { trigger: "onMount", action: motion.counter({targets: ["hero_stat_teams_value", "hero_stat_closed_value", "hero_stat_response_value"], duration: "slow"}) } }
      };
      # 声明式反馈（纯前端动作，无接口）
      @hero_cta_primary = {
        events: { startNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已为你预留 14 天试用名额，注册后即刻开通"}) } }
      };
      @tier_pro_cta = {
        events: { openPro: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "专业版试用已开启：有效期 14 天，随时可退"}) } }
      };
      @cta_btn = {
        events: { startNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已为你预留 14 天试用名额，注册后即刻开通"}) } }
      };
    </script>

    <styles>
      # 0. 基调
      @lp_root = { background: #ffffff; }
      @nav_region = {
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(79, 70, 229, 0.08); }
      }
      @nav_logo = { color: #4f46e5; font-size: 24px; }
      @nav_brand = { color: #1e1b4b; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      @nav_menu = {
        :scope { --anchor-item-color: #475569; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #4f46e5; --anchor-item-active-bg: transparent; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #4f46e5; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #4f46e5; }
      }
      @nav_login_txt = { color: #334155; font-size: 14px; font-weight: 600; cursor: pointer; }
      @nav_trial_btn = {
        color: #ffffff;
        background: linear-gradient(120deg, #4f46e5 0%, #6366f1 100%);
        border-radius: 999px;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 6px 18px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(79, 70, 229, 0.35); }
      }

      # 1. 首屏
      @hero_grid_cell = {
        :scope {
          background-image: radial-gradient(rgba(79, 70, 229, 0.14) 1.2px, rgba(79, 70, 229, 0) 1.2px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(130% 100% at 50% 8%, #000000 22%, transparent 76%);
          mask-image: radial-gradient(130% 100% at 50% 8%, #000000 22%, transparent 76%);
        }
      }
      @hero_stat_div_1 = { background: linear-gradient(180deg, rgba(79, 70, 229, 0), rgba(79, 70, 229, 0.24) 50%, rgba(79, 70, 229, 0)); }
      @hero_stat_div_2 = { background: linear-gradient(180deg, rgba(79, 70, 229, 0), rgba(79, 70, 229, 0.24) 50%, rgba(79, 70, 229, 0)); }
      @hero_region = {
        background: linear-gradient(180deg, #f4f6ff 0%, #e9edff 58%, #ffffff 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -160px;
          top: -140px;
          width: 640px;
          height: 640px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(79, 70, 229, 0.16), transparent 72%);
        }
        :scope::after {
          content: '';
          position: absolute;
          right: -120px;
          top: 40px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(14, 165, 233, 0.14), transparent 70%);
        }
      }
      @hero_eyebrow = { background-color: #eef2ff; color: #4338ca; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @hero_title = {
        font-size: 58px;
        font-weight: 900;
        line-height: 1.12;
        letter-spacing: -1.5px;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #1e1b4b 0%, #3730a3 45%, #4f46e5 75%, #0ea5e9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 14px 38px rgba(79, 70, 229, 0.18);
        }
      }
      @hero_sub = { color: #475569; font-size: 17px; line-height: 1.9; text-align: center; }
      @hero_cta_primary = {
        color: #ffffff;
        background: linear-gradient(120deg, #4f46e5 0%, #6366f1 115%);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0 10px 26px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(79, 70, 229, 0.38); }
      }
      @hero_cta_demo = {
        color: #3730a3;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        :scope { border: 1px solid rgba(79, 70, 229, 0.28); transition: transform 0.22s ease, border-color 0.22s ease; }
        :scope:hover { transform: translateY(-2px); border-color: #4f46e5; }
      }
      @hero_stat_teams_value = { color: #4f46e5; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @hero_stat_closed_value = { color: #0ea5e9; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @hero_stat_response_value = { color: #10b981; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @hero_stat_teams_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @hero_stat_closed_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @hero_stat_response_label = { color: #64748b; font-size: 13px; font-weight: 600; }

      # 2. 客户名单条
 @proof_region = { background: #ffffff; :scope { border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; } }
      @proof_label = { color: #94a3b8; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      @proof_brand_huayun = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @proof_brand_nanfeng = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @proof_brand_jidi = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @proof_brand_xunda = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @proof_brand_lanwan = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 1px; }

      # 3. 能力卡
 @feature_region = { background: #ffffff; }
      @feature_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @feature_title = { color: #0f172a; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @feat_scan_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_loop_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_flow_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_insight_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_scan_icon = { color: #4f46e5; font-size: 30px; }
      @feat_loop_icon = { color: #0ea5e9; font-size: 30px; }
      @feat_flow_icon = { color: #f59e0b; font-size: 30px; }
      @feat_insight_icon = { color: #10b981; font-size: 30px; }
      @feat_scan_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_loop_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_flow_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_insight_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_scan_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @feat_loop_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @feat_flow_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }
      @feat_insight_desc = { color: #64748b; font-size: 14px; line-height: 1.9; }

      @feat_scan_icon_cell = { background: linear-gradient(150deg, #eef2ff 0%, #e0e7ff 100%); border-radius: 12px; }
@feat_loop_icon_cell = { background: linear-gradient(150deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 12px; }
@feat_flow_icon_cell = { background: linear-gradient(150deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; }
@feat_insight_icon_cell = { background: linear-gradient(150deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 12px; }

      # 4. 定价
 @pricing_region = { background: #f6f8fc; }
      @pricing_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @pricing_title = { color: #0f172a; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @pricing_note = { color: #64748b; font-size: 15px; }
      @tier_starter_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(15, 23, 42, 0.1); }
      }
      @tier_pro_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 16px 40px rgba(79, 70, 229, 0.16);
        :scope { border: 2px solid #4f46e5; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 26px 56px rgba(79, 70, 229, 0.22); }
      }
      @tier_ent_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(15, 23, 42, 0.1); }
      }
      @tier_starter_name = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @tier_pro_name = { color: #3730a3; font-size: 20px; font-weight: 800; }
      @tier_ent_name = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @tier_pro_badge = { background-color: #fef3c7; color: #b45309; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tier_starter_amount = { color: #0f172a; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @tier_pro_amount = { color: #4f46e5; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @tier_ent_amount = { color: #0f172a; font-size: 30px; font-weight: 900; letter-spacing: -0.5px; }
      @tier_starter_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_pro_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_ent_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_starter_desc = { color: #64748b; font-size: 14px; }
      @tier_pro_desc = { color: #64748b; font-size: 14px; }
      @tier_ent_desc = { color: #64748b; font-size: 14px; }
      @tier_starter_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f4_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f5_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f4_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f5_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f1_text = { color: #334155; font-size: 14px; }
      @tier_starter_f2_text = { color: #334155; font-size: 14px; }
      @tier_starter_f3_text = { color: #334155; font-size: 14px; }
      @tier_pro_f1_text = { color: #334155; font-size: 14px; }
      @tier_pro_f2_text = { color: #334155; font-size: 14px; }
      @tier_pro_f3_text = { color: #334155; font-size: 14px; }
      @tier_pro_f4_text = { color: #334155; font-size: 14px; }
      @tier_pro_f5_text = { color: #334155; font-size: 14px; }
      @tier_ent_f1_text = { color: #334155; font-size: 14px; }
      @tier_ent_f2_text = { color: #334155; font-size: 14px; }
      @tier_ent_f3_text = { color: #334155; font-size: 14px; }
      @tier_ent_f4_text = { color: #334155; font-size: 14px; }
      @tier_ent_f5_text = { color: #334155; font-size: 14px; }
      @tier_starter_cta = {
        color: #3730a3;
        background: #eef2ff;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #e0e7ff; }
      }
      @tier_pro_cta = {
        color: #ffffff;
        background: #4f46e5;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        box-shadow: 0 8px 20px rgba(79, 70, 229, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4338ca; }
      }
      @tier_ent_cta = {
        color: #334155;
        background: #f1f5f9;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #e2e8f0; }
      }

      # 5. 常见问题
 @faq_region = { background: #ffffff; }
      @faq_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @faq_title = { color: #0f172a; font-size: 38px; font-weight: 900; letter-spacing: -1px; }
      @faq_answer_plan = { color: #475569; font-size: 15px; line-height: 1.9; }
      @faq_answer_offline = { color: #475569; font-size: 15px; line-height: 1.9; }
      @faq_answer_data = { color: #475569; font-size: 15px; line-height: 1.9; }
      @faq_answer_deploy = { color: #475569; font-size: 15px; line-height: 1.9; }

      # 6. 收口 CTA
      @cta_card = {
        background: linear-gradient(120deg, #312e81 0%, #4338ca 48%, #4f46e5 72%, #0ea5e9 130%);
        border-radius: 28px;
        box-shadow: 0 30px 70px rgba(49, 46, 129, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -150px; bottom: -180px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(closest-side, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0) 72%); }
      }
      @cta_title = { color: #ffffff; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @cta_desc = { color: rgba(224, 231, 255, 0.92); font-size: 16px; line-height: 1.8; text-align: center; }
      @cta_btn = {
        color: #312e81;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.28); }
      }

      # 7. 页脚
      @footer_divider = { background: #eef2f7; }
      @footer_brand = { color: #3730a3; font-size: 17px; font-weight: 800; }
      @footer_privacy = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_terms = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_contact = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_copyright = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：两组动效编排只在「首屏 onMount」与「能力卡 onView」——其余区块保持静态（终帧纪律：零动效面完整可读）；数字滚动仅首屏（折叠线下会白播）；工具性内容（定价明细 / FAQ 文案）不做逐条动画。
>
> 质感升级（2026-09-14，visual-composition 规则 16）——① **涂装/留白分层修复 ×13**：nav / hero / 客户名单条 / 定价带四条带 + 能力卡 ×4 + 定价卡 ×3 + CTA 卡（原带底色与分隔线内缩、卡描边贴内容）；② **hero 网格装饰层**：点阵网格（radial dot 平铺 + mask 径向淡出）叠于渐变与双柔光斑之上；③ **图标瓦片**：能力卡图标入四色语义 tint 圆角瓦片（indigo/sky/amber/emerald）；④ **统计分隔线** + 渐变标题字柔光晕；⑤ 五类按钮内高光/外发光；CTA 卡双柔光斑 + 内高光；⑥ **对齐一致性**：能力卡标题与定价卡名称/描述补 `width:100%`（抗 cell 居中注入——原为居中与左侧混排）。
