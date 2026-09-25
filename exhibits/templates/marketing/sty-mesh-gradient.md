# 渐变网格风 — 「Lumen AI」知识网络产品落地页

> 模板定位（营销 / 增长 tab · 风格系列）：渐变网格（Mesh Gradient）——深墨紫底上叠四团**柔焦色雾**（紫 / 青 / 品红 / 蓝的 radial-gradient 网格），玻璃拟态卡片（半透明 + 背景模糊 + 内侧亮线），现代无衬线大字与等宽标签混排。首屏含**产品界面模拟**（玻璃面板里的命令输入与知识卡片）。
> 场景需求：给一款虚构 AI 笔记工具做落地页：首屏 mesh 渐变 + 「把零散笔记，连成一张网」大标题 + 产品界面玻璃模拟；三项能力玻璃卡；数字带；两档定价玻璃卡（推荐档描边发光）；收口 CTA；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="Lumen AI — 知识网络">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="mg_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（玻璃吸顶） ─── -->
      <Container id="mg_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="mg_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="mg_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="mg_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="mg_nav_mark_cell" style="height:32px; width:32px; flex-shrink:0">
                <Svg id="mg_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='mgMark' x1='0' y1='0' x2='32' y2='32'><stop offset='0' stop-color='#A78BFA'/><stop offset='1' stop-color='#22D3EE'/></linearGradient></defs><rect width='32' height='32' rx='9' fill='url(#mgMark)'/><circle cx='11' cy='12' r='3.4' fill='#0B0B14'/><circle cx='21' cy='20' r='3.4' fill='#0B0B14'/><path d='M13.6,14.2 L18.4,17.8' stroke='#0B0B14' stroke-width='2.4' stroke-linecap='round'/></svg>", ariaLabel: "Lumen 标志"} style="height:32px; width:32px"/>
              </Container>
              <Container id="mg_nav_word_cell" style="height:auto; width:auto"><Text id="mg_nav_word" props={content: "Lumen", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mg_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="mg_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="mg_nav_i1" props={itemLabel: "能力", itemTarget: "mg_feature_region"} style="height:auto; width:auto"/>
              <Container id="mg_nav_i2" props={itemLabel: "数字", itemTarget: "mg_stats_region"} style="height:auto; width:auto"/>
              <Container id="mg_nav_i3" props={itemLabel: "价格", itemTarget: "mg_pricing_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="mg_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="mg_nav_cta" style="height:auto; width:auto; padding:11px 24px">
              <Text id="mg_nav_cta_txt" props={content: "免费开始", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（mesh 渐变 + 产品界面模拟） ─── -->
      <Container id="mg_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Animate id="mg_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:88px 48px 96px; position:relative; z-index:1; gap:30px; align-items:center">
          <Container id="mg_hero_chip_cell" style="height:auto; width:auto">
            <Container id="mg_hero_chip" style="height:auto; width:auto; padding:8px 18px">
              <Text id="mg_hero_chip_txt" props={content: "Lumen 2.0 · 支持双向链接与语义索引", tagName: "span"}/>
            </Container>
          </Container>
          <Container id="mg_hero_title_cell" style="height:auto; width:100%">
            <FlexContainer id="mg_hero_title_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:center">
              <Container id="mg_hero_l1_cell" style="height:auto; width:auto"><Text id="mg_hero_l1" props={content: "把零散笔记，", tagName: "h1"}/></Container>
              <Container id="mg_hero_l2_cell" style="height:auto; width:auto"><Text id="mg_hero_l2" props={content: "连成一张会呼吸的网", tagName: "h1"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mg_hero_sub_cell" style="height:auto; width:100%; max-width:620px">
            <Text id="mg_hero_sub" props={content: "写完就忘的笔记等于没写。Lumen 在后台持续建立语义连接——你只需写下，剩下的交给它。", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="mg_hero_actions_cell" style="height:auto; width:auto; padding-top:4px">
            <FlexContainer id="mg_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
              <Container id="mg_hero_btn_cell" style="height:auto; width:auto">
                <Container id="mg_hero_btn" style="height:auto; width:auto; padding:16px 38px">
                  <Text id="mg_hero_btn_txt" props={content: "免费开始使用", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="mg_hero_ghost_cell" style="height:auto; width:auto">
                <Container id="mg_hero_ghost" style="height:auto; width:auto; padding:16px 32px">
                  <Text id="mg_hero_ghost_txt" props={content: "看 2 分钟演示", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="mg_demo_cell" style="height:auto; width:100%; max-width:880px; padding-top:24px">
            <Container id="mg_demo_frame" style="height:auto; width:100%; padding:26px 28px">
              <FlexContainer id="mg_demo_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:stretch">
                <Container id="mg_demo_bar_cell" style="height:auto; width:100%">
                  <FlexContainer id="mg_demo_bar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                    <Container id="mg_demo_dot1_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="mg_demo_dot1" style="height:10px; width:10px"/></Container>
                    <Container id="mg_demo_dot2_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="mg_demo_dot2" style="height:10px; width:10px"/></Container>
                    <Container id="mg_demo_dot3_cell" style="height:10px; width:10px; flex-shrink:0"><Container id="mg_demo_dot3" style="height:10px; width:10px"/></Container>
                    <Container id="mg_demo_bar_label_cell" style="height:auto; width:auto; padding-left:8px"><Text id="mg_demo_bar_label" props={content: "lumen://daily/产品思考", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="mg_demo_input_cell" style="height:auto; width:100%; padding:16px 18px">
                  <FlexContainer id="mg_demo_input_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                    <Container id="mg_demo_prompt_cell" style="height:auto; width:auto"><Text id="mg_demo_prompt" props={content: "⌘K", tagName: "span"}/></Container>
                    <Container id="mg_demo_text_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="mg_demo_text" props={content: "输入任何想法…例如「为什么用户会在第 3 天流失」", tagName: "span"} style="height:auto; width:100%"/></Container>
                    <Container id="mg_demo_send_cell" style="height:auto; width:auto"><Container id="mg_demo_send" style="height:auto; width:auto; padding:7px 14px"><Text id="mg_demo_send_txt" props={content: "接入", tagName: "span"}/></Container></Container>
                  </FlexContainer>
                </Container>
                <Container id="mg_demo_cards_cell" style="height:auto; width:100%">
                  <FlexContainer id="mg_demo_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:14px; align-items:stretch">
                    <Container id="mg_demo_c1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                      <FlexContainer id="mg_demo_c1_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 16px">
                        <Container id="mg_demo_c1_tag_cell" style="height:auto; width:auto"><Text id="mg_demo_c1_tag" props={content: "关于「留存」的 7 条笔记", tagName: "span"}/></Container>
                        <Container id="mg_demo_c1_desc_cell" style="height:auto; width:100%"><Text id="mg_demo_c1_desc" props={content: "与你上周写的《激活时刻》高度相关", tagName: "p"} style="height:auto; width:100%"/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mg_demo_c2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                      <FlexContainer id="mg_demo_c2_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 16px">
                        <Container id="mg_demo_c2_tag_cell" style="height:auto; width:auto"><Text id="mg_demo_c2_tag" props={content: "新旧观点冲突 · 2 处", tagName: "span"}/></Container>
                        <Container id="mg_demo_c2_desc_cell" style="height:auto; width:100%"><Text id="mg_demo_c2_desc" props={content: "你在 3 月认为「留存靠功能」，本周改口了", tagName: "p"} style="height:auto; width:100%"/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mg_demo_c3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                      <FlexContainer id="mg_demo_c3_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:18px 16px">
                        <Container id="mg_demo_c3_tag_cell" style="height:auto; width:auto"><Text id="mg_demo_c3_tag" props={content: "待写 · 由这条延伸", tagName: "span"}/></Container>
                        <Container id="mg_demo_c3_desc_cell" style="height:auto; width:100%"><Text id="mg_demo_c3_desc" props={content: "「第 3 天流失」拆解为 4 个子问题", tagName: "p"} style="height:auto; width:100%"/></Container>
                      </FlexContainer>
                    </Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 能力（玻璃三卡） ─── -->
      <Container id="mg_feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="mg_feature_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 48px 96px; gap:48px">
          <Container id="mg_feature_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="mg_feature_head_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:center">
              <Container id="mg_feature_label_cell" style="height:auto; width:auto"><Text id="mg_feature_label" props={content: "能力 · CAPABILITIES", tagName: "span"}/></Container>
              <Container id="mg_feature_title_cell" style="height:auto; width:auto"><Text id="mg_feature_title" props={content: "笔记工具终于开始「用脑子」", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mg_feature_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="mg_feature_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="mg_f1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mg_f1_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:34px 32px">
                  <Container id="mg_f1_icon_cell" style="height:44px; width:44px; flex-shrink:0">
                    <Svg id="mg_f1_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><defs><linearGradient id='mgI1' x1='0' y1='0' x2='44' y2='44'><stop offset='0' stop-color='#A78BFA'/><stop offset='1' stop-color='#7C3AED'/></linearGradient></defs><rect width='44' height='44' rx='14' fill='url(#mgI1)'/><circle cx='16' cy='17' r='4' fill='#0B0B14'/><circle cx='29' cy='27' r='4' fill='#0B0B14'/><path d='M19,19.6 L26,24.4' stroke='#0B0B14' stroke-width='2.6' stroke-linecap='round'/></svg>", ariaLabel: "双向链接图标"} style="height:44px; width:44px"/>
                  </Container>
                  <Container id="mg_f1_name_cell" style="height:auto; width:auto"><Text id="mg_f1_name" props={content: "双向链接", tagName: "h3"}/></Container>
                  <Container id="mg_f1_desc_cell" style="height:auto; width:100%"><Text id="mg_f1_desc" props={content: "写下 [[ 就开始连接。每条笔记都知道自己被谁引用、又指向谁。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mg_f2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mg_f2_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:34px 32px">
                  <Container id="mg_f2_icon_cell" style="height:44px; width:44px; flex-shrink:0">
                    <Svg id="mg_f2_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><defs><linearGradient id='mgI2' x1='0' y1='0' x2='44' y2='44'><stop offset='0' stop-color='#22D3EE'/><stop offset='1' stop-color='#0EA5E9'/></linearGradient></defs><rect width='44' height='44' rx='14' fill='url(#mgI2)'/><path d='M12,30 L12,22 M20,30 L20,14 M28,30 L28,18 M12,34 L32,34' stroke='#0B0B14' stroke-width='3' stroke-linecap='round'/></svg>", ariaLabel: "语义索引图标"} style="height:44px; width:44px"/>
                  </Container>
                  <Container id="mg_f2_name_cell" style="height:auto; width:auto"><Text id="mg_f2_name" props={content: "语义索引", tagName: "h3"}/></Container>
                  <Container id="mg_f2_desc_cell" style="height:auto; width:100%"><Text id="mg_f2_desc" props={content: "不靠标签靠意思。搜「怎么留住人」能找到你写的「次日回访话术」。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mg_f3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mg_f3_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:34px 32px">
                  <Container id="mg_f3_icon_cell" style="height:44px; width:44px; flex-shrink:0">
                    <Svg id="mg_f3_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><defs><linearGradient id='mgI3' x1='0' y1='0' x2='44' y2='44'><stop offset='0' stop-color='#F472B6'/><stop offset='1' stop-color='#DB2777'/></linearGradient></defs><rect width='44' height='44' rx='14' fill='url(#mgI3)'/><path d='M22,12 a10,10 0 0 1 0,20 a10,10 0 0 1 0,-20 Z' fill='none' stroke='#0B0B14' stroke-width='3'/><path d='M22,17 L22,27 M17,22 L27,22' stroke='#0B0B14' stroke-width='3' stroke-linecap='round'/></svg>", ariaLabel: "观点演化图标"} style="height:44px; width:44px"/>
                  </Container>
                  <Container id="mg_f3_name_cell" style="height:auto; width:auto"><Text id="mg_f3_name" props={content: "观点演化", tagName: "h3"}/></Container>
                  <Container id="mg_f3_desc_cell" style="height:auto; width:100%"><Text id="mg_f3_desc" props={content: "同一个人三个月前怎么写、今天怎么改——冲突的地方会被温和地指出来。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 数字带 ─── -->
      <Container id="mg_stats_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="mg_stats_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px">
          <Container id="mg_stats_rule_cell" style="height:1px; width:100%; flex-shrink:0"><Container id="mg_stats_rule" style="height:1px; width:100%"/></Container>
          <FlexContainer id="mg_stats_row" props={direction: "row"} style="height:auto; width:100%; padding:52px 0px 56px; gap:32px; align-items:flex-start">
            <Container id="mg_st1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="mg_st1_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="mg_st1_num_cell" style="height:auto; width:auto"><Text id="mg_st1_num" props={content: "24 万", tagName: "h3"}/></Container>
                <Container id="mg_st1_label_cell" style="height:auto; width:auto"><Text id="mg_st1_label" props={content: "条笔记正在被连接", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="mg_st2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="mg_st2_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="mg_st2_num_cell" style="height:auto; width:auto"><Text id="mg_st2_num" props={content: "1.8 s", tagName: "h3"}/></Container>
                <Container id="mg_st2_label_cell" style="height:auto; width:auto"><Text id="mg_st2_label" props={content: "语义搜索平均响应", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="mg_st3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="mg_st3_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="mg_st3_num_cell" style="height:auto; width:auto"><Text id="mg_st3_num" props={content: "0 个文件夹", tagName: "h3"}/></Container>
                <Container id="mg_st3_label_cell" style="height:auto; width:auto"><Text id="mg_st3_label" props={content: "默认不需要分类", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="mg_st4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
              <FlexContainer id="mg_st4_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                <Container id="mg_st4_num_cell" style="height:auto; width:auto"><Text id="mg_st4_num" props={content: "端到端加密", tagName: "h3"}/></Container>
                <Container id="mg_st4_label_cell" style="height:auto; width:auto"><Text id="mg_st4_label" props={content: "笔记内容仅你可见", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 定价（玻璃双卡） ─── -->
      <Container id="mg_pricing_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="mg_pricing_col" props={direction: "column"} style="height:auto; width:100%; padding:96px 48px 104px; gap:48px; align-items:center">
          <Container id="mg_pricing_head_cell" style="height:auto; width:auto">
            <FlexContainer id="mg_pricing_head_col" props={direction: "column"} style="height:auto; width:auto; gap:14px; align-items:center">
              <Container id="mg_pricing_label_cell" style="height:auto; width:auto"><Text id="mg_pricing_label" props={content: "价格 · PRICING", tagName: "span"}/></Container>
              <Container id="mg_pricing_title_cell" style="height:auto; width:auto"><Text id="mg_pricing_title" props={content: "先白嫖，上头了再说", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mg_pricing_cards_cell" style="height:auto; width:100%; max-width:860px">
            <FlexContainer id="mg_pricing_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="mg_p1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mg_p1_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:36px 34px">
                  <Container id="mg_p1_name_cell" style="height:auto; width:auto"><Text id="mg_p1_name" props={content: "个人版", tagName: "h4"}/></Container>
                  <Container id="mg_p1_price_cell" style="height:auto; width:auto"><Text id="mg_p1_price" props={content: "¥ 0", tagName: "h3"}/></Container>
                  <Container id="mg_p1_desc_cell" style="height:auto; width:100%"><Text id="mg_p1_desc" props={content: "无限笔记、双向链接与本地搜索——先用起来。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="mg_p1_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="mg_p1_list_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:flex-start">
                      <Container id="mg_p1_f1_cell" style="height:auto; width:auto"><Text id="mg_p1_f1" props={content: "· 不限笔记数量", tagName: "span"}/></Container>
                      <Container id="mg_p1_f2_cell" style="height:auto; width:auto"><Text id="mg_p1_f2" props={content: "· 双向链接与图谱视图", tagName: "span"}/></Container>
                      <Container id="mg_p1_f3_cell" style="height:auto; width:auto"><Text id="mg_p1_f3" props={content: "· 单设备同步", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="mg_p1_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Container id="mg_p1_cta" style="height:auto; width:100%; padding:15px 0px">
                      <Text id="mg_p1_cta_txt" props={content: "免费开始", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="mg_p2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mg_p2_col" props={direction: "column"} style="height:auto; width:100%; gap:18px; align-items:flex-start; padding:36px 34px">
                  <Container id="mg_p2_head_cell" style="height:auto; width:100%">
                    <FlexContainer id="mg_p2_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center; gap:16px">
                      <Container id="mg_p2_name_cell" style="height:auto; width:auto"><Text id="mg_p2_name" props={content: "Pro", tagName: "h4"}/></Container>
                      <Container id="mg_p2_badge_cell" style="height:auto; width:auto"><Container id="mg_p2_badge" style="height:auto; width:auto; padding:6px 14px"><Text id="mg_p2_badge_txt" props={content: "最受欢迎", tagName: "span"}/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="mg_p2_price_cell" style="height:auto; width:auto">
                    <FlexContainer id="mg_p2_price_row" props={direction: "row"} style="height:auto; width:auto; align-items:baseline; gap:8px">
                      <Container id="mg_p2_amount_cell" style="height:auto; width:auto"><Text id="mg_p2_amount" props={content: "¥ 39", tagName: "h3"}/></Container>
                      <Container id="mg_p2_period_cell" style="height:auto; width:auto"><Text id="mg_p2_period" props={content: "/ 月", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="mg_p2_desc_cell" style="height:auto; width:100%"><Text id="mg_p2_desc" props={content: "为每天写东西的人准备：语义索引与观点演化全开。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="mg_p2_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="mg_p2_list_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:flex-start">
                      <Container id="mg_p2_f1_cell" style="height:auto; width:auto"><Text id="mg_p2_f1" props={content: "· 个人版全部能力", tagName: "span"}/></Container>
                      <Container id="mg_p2_f2_cell" style="height:auto; width:auto"><Text id="mg_p2_f2" props={content: "· 语义索引与跨笔记问答", tagName: "span"}/></Container>
                      <Container id="mg_p2_f3_cell" style="height:auto; width:auto"><Text id="mg_p2_f3" props={content: "· 观点演化追踪", tagName: "span"}/></Container>
                      <Container id="mg_p2_f4_cell" style="height:auto; width:auto"><Text id="mg_p2_f4" props={content: "· 全设备同步 + 版本历史", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="mg_p2_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Container id="mg_p2_cta" style="height:auto; width:100%; padding:15px 0px">
                      <Text id="mg_p2_cta_txt" props={content: "开始 14 天试用", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="mg_pricing_note_cell" style="height:auto; width:auto"><Text id="mg_pricing_note" props={content: "学生与教育工作者五折 · 随时导出全部数据（Markdown）", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 收口 CTA ─── -->
      <Container id="mg_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="mg_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:100px 48px; gap:28px; align-items:center; position:relative; overflow:hidden">
          <Container id="mg_cta_glow_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="mg_cta_glow" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 420' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='mgCtaG1' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#A78BFA' stop-opacity='0.35'/><stop offset='0.55' stop-color='#A78BFA' stop-opacity='0.08'/><stop offset='1' stop-color='#A78BFA' stop-opacity='0'/></radialGradient><radialGradient id='mgCtaG2' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#22D3EE' stop-opacity='0.3'/><stop offset='0.55' stop-color='#22D3EE' stop-opacity='0.06'/><stop offset='1' stop-color='#22D3EE' stop-opacity='0'/></radialGradient></defs><circle cx='260' cy='200' r='300' fill='url(#mgCtaG1)'/><circle cx='1180' cy='240' r='320' fill='url(#mgCtaG2)'/></svg>", ariaLabel: "收口区柔焦色雾"} style="height:100%; width:100%"/>
          </Container>
          <Container id="mg_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="mg_cta_title" props={content: "今晚写下第一条", tagName: "h2"}/></Container>
          <Container id="mg_cta_sub_cell" style="height:auto; width:100%; max-width:520px; position:relative; z-index:1"><Text id="mg_cta_sub" props={content: "注册只要一个邮箱，不需要信用卡。你的第一条笔记和第十万条，会在同一张网里相遇。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="mg_cta_btn_cell" style="height:auto; width:auto; position:relative; z-index:1; padding-top:6px">
            <Container id="mg_cta_btn" style="height:auto; width:auto; padding:17px 44px">
              <Text id="mg_cta_btn_txt" props={content: "免费注册", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="mg_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mg_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 48px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="mg_footer_left_cell" style="height:auto; width:auto"><Text id="mg_footer_left" props={content: "© 2026 Lumen Labs · 产品与数据均为虚构演示", tagName: "span"}/></Container>
          <Container id="mg_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="mg_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="mg_footer_f1_cell" style="height:auto; width:auto"><Text id="mg_footer_f1" props={content: "更新日志", tagName: "span"}/></Container>
              <Container id="mg_footer_f2_cell" style="height:auto; width:auto"><Text id="mg_footer_f2" props={content: "隐私", tagName: "span"}/></Container>
              <Container id="mg_footer_f3_cell" style="height:auto; width:auto"><Text id="mg_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @mg_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调：mesh 渐变（四团色雾 + 深墨紫底） ──
      @mg_root = { background:
          radial-gradient(58% 52% at 10% 12%, rgba(124, 58, 237, 0.55) 0%, rgba(124, 58, 237, 0.12) 45%, rgba(124, 58, 237, 0) 70%),
          radial-gradient(48% 46% at 88% 8%, rgba(34, 211, 238, 0.42) 0%, rgba(34, 211, 238, 0.1) 48%, rgba(34, 211, 238, 0) 72%),
          radial-gradient(52% 55% at 82% 72%, rgba(236, 72, 153, 0.32) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(236, 72, 153, 0) 74%),
          radial-gradient(46% 50% at 16% 86%, rgba(59, 130, 246, 0.34) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(59, 130, 246, 0) 74%),
          #0B0B14;
; :scope { background-attachment: fixed; }
      }

      # ── 导航（玻璃） ──
      @mg_nav_region = { background: rgba(11, 11, 20, 0.6); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
      @mg_nav_word = { color: #F5F3FF; font-size: 18px; font-weight: 800; letter-spacing: 0.6px; }
      @mg_nav_menu = { :scope { --anchor-item-color: rgba(245, 243, 255, 0.72); --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #C4B5FD; --anchor-item-active-bg: transparent; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #F5F3FF; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #C4B5FD; }
      }
      @mg_nav_cta = { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(255, 255, 255, 0.16); } }
      @mg_nav_cta_txt = { color: #F5F3FF; font-size: 13.5px; font-weight: 700; letter-spacing: 1px; }

      # ── 首屏 ──
      @mg_hero_chip = { background: rgba(167, 139, 250, 0.14); border: 1px solid rgba(167, 139, 250, 0.4); border-radius: 999px; }
      @mg_hero_chip_txt = { color: #C4B5FD; font-size: 12.5px; font-weight: 700; letter-spacing: 1.6px; }
      @mg_hero_l1 = { color: #FFFFFF; font-size: 64px; font-weight: 900; letter-spacing: -2.5px; }
      @mg_hero_l2 = {color: #FFFFFF; font-size: 64px; font-weight: 900; letter-spacing: -2.5px; background: linear-gradient(96deg, #C4B5FD 0%, #67E8F9 55%, #F9A8D4 100%); :scope { -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; } }
      @mg_hero_sub = { color: rgba(245, 243, 255, 0.68); font-size: 16.5px; line-height: 1.95; text-align: center; }
      @mg_hero_btn = { background: linear-gradient(120deg, #A78BFA 0%, #22D3EE 100%); border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(124, 58, 237, 0.42); } }
      @mg_hero_btn_txt = { color: #0B0B14; font-size: 15px; font-weight: 800; letter-spacing: 1.4px; }
      @mg_hero_ghost = { background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(255, 255, 255, 0.12); } }
      @mg_hero_ghost_txt = { color: rgba(245, 243, 255, 0.85); font-size: 15px; font-weight: 700; letter-spacing: 1.4px; }

      # ── 产品界面模拟（玻璃面板） ──
      @mg_demo_frame = { background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(18px); border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 22px; box-shadow: 0 24px 60px rgba(5, 5, 16, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.12); }
      @mg_demo_dot1 = { background: #F87171; border-radius: 999px; }
      @mg_demo_dot2 = { background: #FBBF24; border-radius: 999px; }
      @mg_demo_dot3 = { background: #34D399; border-radius: 999px; }
      @mg_demo_bar_label = { color: rgba(245, 243, 255, 0.45); font-size: 11.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mg_demo_input_cell = { background: rgba(11, 11, 20, 0.5); border: 1px solid rgba(167, 139, 250, 0.3); border-radius: 14px; }
      @mg_demo_prompt = { color: #C4B5FD; font-size: 12px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mg_demo_text = { color: rgba(245, 243, 255, 0.55); font-size: 13.5px; }
      @mg_demo_send = { background: rgba(167, 139, 250, 0.18); border: 1px solid rgba(167, 139, 250, 0.45); border-radius: 999px; }
      @mg_demo_send_txt = { color: #C4B5FD; font-size: 12px; font-weight: 700; }
      @mg_demo_c1_col = { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; }
      @mg_demo_c2_col = { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; }
      @mg_demo_c3_col = { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; }
      @mg_demo_c1_tag = { color: #C4B5FD; font-size: 11.5px; font-weight: 700; }
      @mg_demo_c2_tag = { color: #67E8F9; font-size: 11.5px; font-weight: 700; }
      @mg_demo_c3_tag = { color: #F9A8D4; font-size: 11.5px; font-weight: 700; }
      @mg_demo_c1_desc = { color: rgba(245, 243, 255, 0.5); font-size: 12px; line-height: 1.7; }
      @mg_demo_c2_desc = { color: rgba(245, 243, 255, 0.5); font-size: 12px; line-height: 1.7; }
      @mg_demo_c3_desc = { color: rgba(245, 243, 255, 0.5); font-size: 12px; line-height: 1.7; }

      # ── 能力卡（玻璃） ──
      @mg_feature_label = { color: #C4B5FD; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @mg_feature_title = { color: #FFFFFF; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @mg_f1_col = { background: rgba(255, 255, 255, 0.055); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); transition: transform 0.35s ease, border-color 0.35s ease; :scope:hover { transform: translateY(-5px); border-color: rgba(167, 139, 250, 0.45); } }
      @mg_f2_col = { background: rgba(255, 255, 255, 0.055); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); transition: transform 0.35s ease, border-color 0.35s ease; :scope:hover { transform: translateY(-5px); border-color: rgba(103, 232, 249, 0.45); } }
      @mg_f3_col = { background: rgba(255, 255, 255, 0.055); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); transition: transform 0.35s ease, border-color 0.35s ease; :scope:hover { transform: translateY(-5px); border-color: rgba(244, 114, 182, 0.45); } }
      @mg_f1_name = { color: #FFFFFF; font-size: 21px; font-weight: 800; }
      @mg_f2_name = { color: #FFFFFF; font-size: 21px; font-weight: 800; }
      @mg_f3_name = { color: #FFFFFF; font-size: 21px; font-weight: 800; }
      @mg_f1_desc = { color: rgba(245, 243, 255, 0.6); font-size: 14px; line-height: 1.9; }
      @mg_f2_desc = { color: rgba(245, 243, 255, 0.6); font-size: 14px; line-height: 1.9; }
      @mg_f3_desc = { color: rgba(245, 243, 255, 0.6); font-size: 14px; line-height: 1.9; }

      # ── 数字带 ──
      @mg_stats_rule = { background: rgba(255, 255, 255, 0.14); }
      @mg_st1_num = { color: #FFFFFF; font-size: 40px; font-weight: 900; letter-spacing: -1.5px; }
      @mg_st2_num = { color: #FFFFFF; font-size: 40px; font-weight: 900; letter-spacing: -1.5px; }
      @mg_st3_num = { color: #FFFFFF; font-size: 40px; font-weight: 900; letter-spacing: -1.5px; }
      @mg_st4_num = { color: #FFFFFF; font-size: 40px; font-weight: 900; letter-spacing: -1.5px; }
      @mg_st1_label = { color: rgba(245, 243, 255, 0.5); font-size: 13px; letter-spacing: 1.2px; }
      @mg_st2_label = { color: rgba(245, 243, 255, 0.5); font-size: 13px; letter-spacing: 1.2px; }
      @mg_st3_label = { color: rgba(245, 243, 255, 0.5); font-size: 13px; letter-spacing: 1.2px; }
      @mg_st4_label = { color: rgba(245, 243, 255, 0.5); font-size: 13px; letter-spacing: 1.2px; }

      # ── 定价（玻璃双卡） ──
      @mg_pricing_label = { color: #C4B5FD; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @mg_pricing_title = { color: #FFFFFF; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @mg_p1_col = { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 22px; }
      @mg_p2_col = { background: rgba(167, 139, 250, 0.1); backdrop-filter: blur(16px); border: 1px solid rgba(167, 139, 250, 0.55); border-radius: 22px; box-shadow: 0 18px 48px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.14); }
      @mg_p1_name = { color: #FFFFFF; font-size: 20px; font-weight: 800; }
      @mg_p2_name = { color: #FFFFFF; font-size: 20px; font-weight: 800; }
      @mg_p1_price = { color: #FFFFFF; font-size: 44px; font-weight: 900; letter-spacing: -2px; }
      @mg_p2_amount = { color: #FFFFFF; font-size: 44px; font-weight: 900; letter-spacing: -2px; }
      @mg_p2_period = { color: rgba(245, 243, 255, 0.55); font-size: 14px; }
      @mg_p1_desc = { color: rgba(245, 243, 255, 0.6); font-size: 14px; line-height: 1.85; }
      @mg_p2_desc = { color: rgba(245, 243, 255, 0.68); font-size: 14px; line-height: 1.85; }
      @mg_p1_f1 = { color: rgba(245, 243, 255, 0.72); font-size: 13.5px; }
      @mg_p1_f2 = { color: rgba(245, 243, 255, 0.72); font-size: 13.5px; }
      @mg_p1_f3 = { color: rgba(245, 243, 255, 0.72); font-size: 13.5px; }
      @mg_p2_f1 = { color: rgba(245, 243, 255, 0.85); font-size: 13.5px; }
      @mg_p2_f2 = { color: rgba(245, 243, 255, 0.85); font-size: 13.5px; }
      @mg_p2_f3 = { color: rgba(245, 243, 255, 0.85); font-size: 13.5px; }
      @mg_p2_f4 = { color: rgba(245, 243, 255, 0.85); font-size: 13.5px; }
      @mg_p2_badge = { background: linear-gradient(120deg, #A78BFA 0%, #22D3EE 100%); border-radius: 999px; }
      @mg_p2_badge_txt = { color: #0B0B14; font-size: 11.5px; font-weight: 800; letter-spacing: 1px; }
      @mg_p1_cta = { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(255, 255, 255, 0.16); } }
      @mg_p1_cta_txt = { color: rgba(245, 243, 255, 0.9); font-size: 14.5px; font-weight: 700; }
      @mg_p2_cta = { background: linear-gradient(120deg, #A78BFA 0%, #22D3EE 100%); border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(34, 211, 238, 0.35); } }
      @mg_p2_cta_txt = { color: #0B0B14; font-size: 14.5px; font-weight: 800; letter-spacing: 1px; }
      @mg_pricing_note = { color: rgba(245, 243, 255, 0.45); font-size: 13px; letter-spacing: 0.8px; }

      # ── 收口 ──
      @mg_cta_title = { color: #FFFFFF; font-size: 54px; font-weight: 900; letter-spacing: -2px; }
      @mg_cta_sub = { color: rgba(245, 243, 255, 0.62); font-size: 15px; line-height: 1.95; text-align: center; }
      @mg_cta_btn = { background: #F5F3FF; border-radius: 999px; transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @mg_cta_btn_txt = { color: #0B0B14; font-size: 15.5px; font-weight: 800; letter-spacing: 2px; }

      # ── 页脚 ──
      @mg_footer_row = { border-top: 1px solid rgba(255, 255, 255, 0.1); }
      @mg_footer_left = { color: rgba(245, 243, 255, 0.42); font-size: 12.5px; letter-spacing: 0.6px; }
      @mg_footer_f1 = { color: rgba(245, 243, 255, 0.6); font-size: 13px; :scope { transition: color 0.2s ease; }; :scope:hover { color: #C4B5FD; } }
      @mg_footer_f2 = { color: rgba(245, 243, 255, 0.6); font-size: 13px; :scope { transition: color 0.2s ease; }; :scope:hover { color: #C4B5FD; } }
      @mg_footer_f3 = { cursor: pointer; color: rgba(245, 243, 255, 0.6); font-size: 13px; :scope { transition: color 0.2s ease; }; :scope:hover { color: #C4B5FD; } }
    </styles>
  </Page>
</App>
```
