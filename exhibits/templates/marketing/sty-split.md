# 分屏构成风 — 「昼与夜 DAY&NIGHT」双面咖啡馆

> 模板定位（营销 / 增长 tab · 风格系列）：分屏构成（Split-screen）——**50:50 对撞构图**：左半「昼」（米白 / 琥珀 / 墨字），右半「夜」（深墨绿 / 金字），中缝一道发光线；页面本体即两名角色的对照。进阶段用 **sticky 固定左栏 + 右栏滚动**的行程构图（左说明钉住、右侧内容依次经过）。
> 场景需求：给一家白天卖咖啡、晚上变酒馆的虚构店铺做官网：首屏一整屏对半分屏（中央跨屏大标题 + 左右各自时段/菜单/CTA）；一对 sticky 行程段（左半「昼」说明钉住，右侧三张日间内容卡滚动经过，随后整屏翻转颜色重复「夜」段）；双面菜单对比（咖啡 / 鸡尾酒两栏）；中缝合流 CTA；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="昼与夜 DAY&NIGHT — 双面咖啡馆">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="sp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航（中缝对称） ─── -->
      <Container id="sp_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="sp_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 48px">
          <Container id="sp_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="sp_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="sp_nav_half_cell" style="height:22px; width:22px; flex-shrink:0">
                <Svg id="sp_nav_half" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'><rect width='22' height='22' rx='6' fill='#F7F1E5'/><path d='M11,0 h5 a6,6 0 0 1 0 22 h-5 Z' fill='#0E211C'/></svg>", ariaLabel: "昼夜半圆标志"} style="height:22px; width:22px"/>
              </Container>
              <Container id="sp_nav_word_cell" style="height:auto; width:auto"><Text id="sp_nav_word" props={content: "昼与夜 DAY&NIGHT", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="sp_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="sp_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="sp_nav_i1" props={itemLabel: "昼 · 咖啡", itemTarget: "sp_day_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i2" props={itemLabel: "夜 · 酒", itemTarget: "sp_night_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i3" props={itemLabel: "菜单", itemTarget: "sp_menu_region"} style="height:auto; width:auto"/>
              <Container id="sp_nav_i4" props={itemLabel: "找到我们", itemTarget: "sp_cta_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="sp_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="sp_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="sp_nav_cta_txt" props={content: "订位", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（一整屏 50:50 分屏） ─── -->
      <Container id="sp_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sp_hero_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; position:relative">
          <Container id="sp_hero_day_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; position:relative; overflow:hidden">
            <Container id="sp_hero_day_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
              <Svg id="sp_hero_day_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 620' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='600' cy='90' r='120' fill='#E8A33D' opacity='0.25'/><circle cx='600' cy='90' r='64' fill='#E8A33D' opacity='0.45'/><g stroke='#141414' stroke-width='1' opacity='0.12'><line x1='0' y1='430' x2='720' y2='430'/><line x1='0' y1='470' x2='720' y2='470'/></g></svg>", ariaLabel: "昼半屏装饰：暖阳"} style="height:100%; width:100%"/>
            </Container>
            <Animate id="sp_hero_day_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; padding:88px 48px 84px 56px; position:relative; z-index:1; gap:22px; align-items:flex-start">
              <Container id="sp_day_kicker_cell" style="height:auto; width:auto"><Text id="sp_day_kicker" props={content: "07:30 — 17:00 · 白天", tagName: "span"}/></Container>
              <Container id="sp_day_title_cell" style="height:auto; width:auto"><Text id="sp_day_title" props={content: "一杯清醒", tagName: "h2"}/></Container>
              <Container id="sp_day_desc_cell" style="height:auto; width:100%; max-width:420px"><Text id="sp_day_desc" props={content: "自烘豆，每周三上新。手冲与奶咖各有五支配方轮换——早上七点半开门，第一炉可颂同时出炉。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sp_day_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="sp_day_cta" style="height:auto; width:auto; padding:14px 32px">
                  <Text id="sp_day_cta_txt" props={content: "看咖啡单", tagName: "span"}/>
                </Container>
              </Container>
            </Animate>
          </Container>
          <Container id="sp_hero_gap_cell" style="height:auto; width:2px; flex-shrink:0"><Container id="sp_hero_gap" style="height:100%; width:2px"/></Container>
          <Container id="sp_hero_night_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%; position:relative; overflow:hidden">
            <Container id="sp_hero_night_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
              <Svg id="sp_hero_night_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 620' preserveAspectRatio='xMidYMid slice' fill='none'><circle cx='120' cy='520' r='150' fill='#D8B45A' opacity='0.12'/><circle cx='470' cy='120' r='2.6' fill='#F4E9CE' opacity='0.8'/><circle cx='560' cy='200' r='1.8' fill='#F4E9CE' opacity='0.6'/><circle cx='620' cy='80' r='2.2' fill='#F4E9CE' opacity='0.7'/><circle cx='380' cy='70' r='1.6' fill='#F4E9CE' opacity='0.5'/><g stroke='#F4E9CE' stroke-width='1' opacity='0.14'><line x1='0' y1='430' x2='720' y2='430'/><line x1='0' y1='470' x2='720' y2='470'/></g></svg>", ariaLabel: "夜半屏装饰：星点与暖光"} style="height:100%; width:100%"/>
            </Container>
            <Animate id="sp_hero_night_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; padding:88px 56px 84px 48px; position:relative; z-index:1; gap:22px; align-items:flex-start">
              <Container id="sp_night_kicker_cell" style="height:auto; width:auto"><Text id="sp_night_kicker" props={content: "18:00 — 01:00 · 夜晚", tagName: "span"}/></Container>
              <Container id="sp_night_title_cell" style="height:auto; width:auto"><Text id="sp_night_title" props={content: "一杯微醺", tagName: "h2"}/></Container>
              <Container id="sp_night_desc_cell" style="height:auto; width:100%; max-width:420px"><Text id="sp_night_desc" props={content: "同一个吧台，换了灯光与杯子。十二款经典鸡尾酒 + 每月一张客座酒单，十一点后放黑胶。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="sp_night_cta_cell" style="height:auto; width:auto; padding-top:6px">
                <Container id="sp_night_cta" style="height:auto; width:auto; padding:14px 32px">
                  <Text id="sp_night_cta_txt" props={content: "看酒单", tagName: "span"}/>
                </Container>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 昼（sticky 左栏 + 右栏滚动） ─── -->
      <Container id="sp_day_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_day_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:64px; align-items:flex-start">
          <Container id="sp_day_left_cell" style="height:auto; width:380px; flex-shrink:0; position:sticky; top:96px">
            <FlexContainer id="sp_day_left_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="sp_day_label_cell" style="height:auto; width:auto"><Text id="sp_day_label" props={content: "昼 · 07:30 — 17:00", tagName: "span"}/></Container>
              <Container id="sp_day_h_cell" style="height:auto; width:auto"><Text id="sp_day_h" props={content: "把早晨做扎实", tagName: "h2"}/></Container>
              <Container id="sp_day_p_cell" style="height:auto; width:100%"><Text id="sp_day_p" props={content: "白天所有的讲究，都指向同一件事：让第一口咖啡值得早起。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
          <Container id="sp_day_right_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sp_day_right_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="sp_d1_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d1_num_cell" style="height:auto; width:auto"><Text id="sp_d1_num" props={content: "01 · 豆子", tagName: "span"}/></Container>
                  <Container id="sp_d1_name_cell" style="height:auto; width:auto"><Text id="sp_d1_name" props={content: "每周三上新豆", tagName: "h4"}/></Container>
                  <Container id="sp_d1_desc_cell" style="height:auto; width:100%"><Text id="sp_d1_desc" props={content: "两支浅烘单一产区 + 一支拼配。杯测笔记贴在吧台上，欢迎翻看。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_d2_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d2_num_cell" style="height:auto; width:auto"><Text id="sp_d2_num" props={content: "02 · 手法", tagName: "span"}/></Container>
                  <Container id="sp_d2_name_cell" style="height:auto; width:auto"><Text id="sp_d2_name" props={content: "手冲五支配方轮换", tagName: "h4"}/></Container>
                  <Container id="sp_d2_desc_cell" style="height:auto; width:100%"><Text id="sp_d2_desc" props={content: "同一支豆子，用三种水温各冲一杯——点单时可以和咖啡师只聊这一件事。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_d3_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_d3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_d3_num_cell" style="height:auto; width:auto"><Text id="sp_d3_num" props={content: "03 · 面包", tagName: "span"}/></Container>
                  <Container id="sp_d3_name_cell" style="height:auto; width:auto"><Text id="sp_d3_name" props={content: "第一炉可颂 07:30", tagName: "h4"}/></Container>
                  <Container id="sp_d3_desc_cell" style="height:auto; width:100%"><Text id="sp_d3_desc" props={content: "每天两炉，售完即止。周末请早点来——上周六 9 点 40 分就空了。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 夜（整屏翻转：深底） ─── -->
      <Container id="sp_night_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_night_row" props={direction: "row"} style="height:auto; width:100%; padding:96px 56px; gap:64px; align-items:flex-start">
          <Container id="sp_night_right_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="sp_night_right_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:stretch">
              <Container id="sp_n1_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n1_num_cell" style="height:auto; width:auto"><Text id="sp_n1_num" props={content: "01 · 经典", tagName: "span"}/></Container>
                  <Container id="sp_n1_name_cell" style="height:auto; width:auto"><Text id="sp_n1_name" props={content: "十二款经典，只改细节", tagName: "h4"}/></Container>
                  <Container id="sp_n1_desc_cell" style="height:auto; width:100%"><Text id="sp_n1_desc" props={content: "内格罗尼的苦、戴克利的酸、古典的甜——都按 1930 年代的配方，杯子提前冰过。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_n2_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n2_num_cell" style="height:auto; width:auto"><Text id="sp_n2_num" props={content: "02 · 客座", tagName: "span"}/></Container>
                  <Container id="sp_n2_name_cell" style="height:auto; width:auto"><Text id="sp_n2_name" props={content: "每月一张客座酒单", tagName: "h4"}/></Container>
                  <Container id="sp_n2_desc_cell" style="height:auto; width:100%"><Text id="sp_n2_desc" props={content: "请不同城市的调酒师来写一个月。本月客座来自成都，主打花椒与桂花。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="sp_n3_cell" style="height:auto; width:100%">
                <FlexContainer id="sp_n3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:34px 36px">
                  <Container id="sp_n3_num_cell" style="height:auto; width:auto"><Text id="sp_n3_num" props={content: "03 · 声音", tagName: "span"}/></Container>
                  <Container id="sp_n3_name_cell" style="height:auto; width:auto"><Text id="sp_n3_name" props={content: "十一点后放黑胶", tagName: "h4"}/></Container>
                  <Container id="sp_n3_desc_cell" style="height:auto; width:100%"><Text id="sp_n3_desc" props={content: "爵士与 bossa nova 为主，也接受点播——前提是你愿意自己去翻唱片。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="sp_night_left_cell" style="height:auto; width:380px; flex-shrink:0; position:sticky; top:96px">
            <FlexContainer id="sp_night_left_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="sp_night_label_cell" style="height:auto; width:auto"><Text id="sp_night_label" props={content: "夜 · 18:00 — 01:00", tagName: "span"}/></Container>
              <Container id="sp_night_h_cell" style="height:auto; width:auto"><Text id="sp_night_h" props={content: "让夜晚慢下来", tagName: "h2"}/></Container>
              <Container id="sp_night_p_cell" style="height:auto; width:100%"><Text id="sp_night_p" props={content: "灯调暗之后，这里不是另一家店——是同一个座位上的第二种人生。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 双面菜单对比 ─── -->
      <Container id="sp_menu_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_menu_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 56px 96px; gap:40px">
          <Container id="sp_menu_title_cell" style="height:auto; width:auto; align-self:center"><Text id="sp_menu_title" props={content: "一张菜单，两种心情", tagName: "h2"}/></Container>
          <Container id="sp_menu_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="sp_menu_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:32px; align-items:stretch">
              <Container id="sp_menu_day_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="sp_md_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; padding:38px 40px">
                  <Container id="sp_md_head_cell" style="height:auto; width:100%; padding-bottom:20px"><Text id="sp_md_head" props={content: "昼 · COFFEE", tagName: "span"}/></Container>
                  <Container id="sp_md_1_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_1_n_cell" style="height:auto; width:auto"><Text id="sp_md_1_n" props={content: "手冲 · 埃塞 耶加雪菲", tagName: "span"}/></Container>
                      <Container id="sp_md_1_p_cell" style="height:auto; width:auto"><Text id="sp_md_1_p" props={content: "¥ 32", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_2_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_2_n_cell" style="height:auto; width:auto"><Text id="sp_md_2_n" props={content: "燕麦拿铁", tagName: "span"}/></Container>
                      <Container id="sp_md_2_p_cell" style="height:auto; width:auto"><Text id="sp_md_2_p" props={content: "¥ 28", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_3_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_md_3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_3_n_cell" style="height:auto; width:auto"><Text id="sp_md_3_n" props={content: "黄油可颂", tagName: "span"}/></Container>
                      <Container id="sp_md_3_p_cell" style="height:auto; width:auto"><Text id="sp_md_3_p" props={content: "¥ 18", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_md_4_cell" style="height:auto; width:100%; padding:16px 0px 0px">
                    <FlexContainer id="sp_md_4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_md_4_n_cell" style="height:auto; width:auto"><Text id="sp_md_4_n" props={content: "晨间套餐（咖啡 + 可颂）", tagName: "span"}/></Container>
                      <Container id="sp_md_4_p_cell" style="height:auto; width:auto"><Text id="sp_md_4_p" props={content: "¥ 42", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="sp_menu_night_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="sp_mn_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; padding:38px 40px">
                  <Container id="sp_mn_head_cell" style="height:auto; width:100%; padding-bottom:20px"><Text id="sp_mn_head" props={content: "夜 · COCKTAILS", tagName: "span"}/></Container>
                  <Container id="sp_mn_1_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_1_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_1_n_cell" style="height:auto; width:auto"><Text id="sp_mn_1_n" props={content: "内格罗尼", tagName: "span"}/></Container>
                      <Container id="sp_mn_1_p_cell" style="height:auto; width:auto"><Text id="sp_mn_1_p" props={content: "¥ 78", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_2_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_2_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_2_n_cell" style="height:auto; width:auto"><Text id="sp_mn_2_n" props={content: "花椒桂花特调（本月客座）", tagName: "span"}/></Container>
                      <Container id="sp_mn_2_p_cell" style="height:auto; width:auto"><Text id="sp_mn_2_p" props={content: "¥ 88", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_3_cell" style="height:auto; width:100%; padding:16px 0px">
                    <FlexContainer id="sp_mn_3_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_3_n_cell" style="height:auto; width:auto"><Text id="sp_mn_3_n" props={content: "威士忌酸", tagName: "span"}/></Container>
                      <Container id="sp_mn_3_p_cell" style="height:auto; width:auto"><Text id="sp_mn_3_p" props={content: "¥ 72", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="sp_mn_4_cell" style="height:auto; width:100%; padding:16px 0px 0px">
                    <FlexContainer id="sp_mn_4_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:20px">
                      <Container id="sp_mn_4_n_cell" style="height:auto; width:auto"><Text id="sp_mn_4_n" props={content: "无酒精夜色（司机特调）", tagName: "span"}/></Container>
                      <Container id="sp_mn_4_p_cell" style="height:auto; width:auto"><Text id="sp_mn_4_p" props={content: "¥ 46", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 中缝合流 CTA ─── -->
      <Container id="sp_cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="sp_cta_col" props={direction: "column"} style="height:auto; width:100%; padding:92px 56px; gap:26px; align-items:center; position:relative">
          <Container id="sp_cta_seam_cell" style="height:100%; width:2px; position:absolute; left:50%; top:0px; z-index:0"><Container id="sp_cta_seam" style="height:100%; width:2px"/></Container>
          <Container id="sp_cta_title_cell" style="height:auto; width:auto; position:relative; z-index:1"><Text id="sp_cta_title" props={content: "白天见，或者晚上见", tagName: "h2"}/></Container>
          <Container id="sp_cta_sub_cell" style="height:auto; width:100%; max-width:520px; position:relative; z-index:1"><Text id="sp_cta_sub" props={content: "愚园路 1088 号，梧桐树底下。白天不订位，晚上十点前建议订。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="sp_cta_actions_cell" style="height:auto; width:auto; position:relative; z-index:1; padding-top:6px">
            <FlexContainer id="sp_cta_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:20px">
              <Container id="sp_cta_day_cell" style="height:auto; width:auto">
                <Container id="sp_cta_day" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="sp_cta_day_txt" props={content: "来杯咖啡", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="sp_cta_night_cell" style="height:auto; width:auto">
                <Container id="sp_cta_night" style="height:auto; width:auto; padding:15px 34px">
                  <Text id="sp_cta_night_txt" props={content: "订个位子", tagName: "span"}/>
                </Container>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="sp_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="sp_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:30px 56px 34px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="sp_footer_left_cell" style="height:auto; width:auto"><Text id="sp_footer_left" props={content: "© 2026 昼与夜 DAY&NIGHT · 店铺与菜单均为虚构演示", tagName: "span"}/></Container>
          <Container id="sp_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="sp_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="sp_footer_f1_cell" style="height:auto; width:auto"><Text id="sp_footer_f1" props={content: "小红书", tagName: "span"}/></Container>
              <Container id="sp_footer_f2_cell" style="height:auto; width:auto"><Text id="sp_footer_f2" props={content: "公众号", tagName: "span"}/></Container>
              <Container id="sp_footer_f3_cell" style="height:auto; width:auto"><Text id="sp_footer_f3" props={content: "返回顶部 ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @sp_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调 ──
      @sp_root = { background: #F7F1E5; }

      # ── 导航 ──
      @sp_nav_region = { background: rgba(247, 241, 229, 0.94); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(14, 33, 28, 0.14); }
      @sp_nav_word = { color: #0E211C; font-size: 16px; font-weight: 800; letter-spacing: 1.6px; }
      @sp_nav_menu = {
        :scope { --anchor-item-color: rgba(14, 33, 28, 0.72); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #0E211C; --anchor-item-active-bg: transparent; --anchor-item-active-font-weight: 800; --anchor-gap: 38px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 0.8px; transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #B4552D; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #0E211C; }
      }
      @sp_nav_cta = { background: #0E211C; transition: background 0.25s ease; :scope:hover { background: #B4552D; } }
      @sp_nav_cta_txt = { color: #F7F1E5; font-size: 13.5px; font-weight: 700; letter-spacing: 2px; }

      # ── 首屏（昼半） ──
      @sp_hero_day_cell = { background: #F7F1E5; }
      @sp_hero_gap = { background: #0E211C; opacity: 0.85; }
      @sp_day_kicker = { color: #B4552D; font-size: 13px; font-weight: 800; letter-spacing: 3.4px; }
      @sp_day_title = { color: #141414; font-size: 76px; font-weight: 900; letter-spacing: -3px; }
      @sp_day_desc = { color: rgba(20, 20, 20, 0.66); font-size: 15px; line-height: 2.0; }
      @sp_day_cta = {
        border: 2px solid #141414;
        border-radius: 999px;
        :scope { transition: background 0.25s ease; }
        :scope:hover { background: #141414; }
        :scope:hover > * { color: #F7F1E5; }
      }
      @sp_day_cta_txt = { color: #141414; font-size: 14.5px; font-weight: 800; letter-spacing: 2px; }

      # ── 首屏（夜半） ──
      @sp_hero_night_cell = { background: #0E211C; }
      @sp_night_kicker = { color: #D8B45A; font-size: 13px; font-weight: 800; letter-spacing: 3.4px; }
      @sp_night_title = { color: #F4E9CE; font-size: 76px; font-weight: 900; letter-spacing: -3px; }
      @sp_night_desc = { color: rgba(244, 233, 206, 0.66); font-size: 15px; line-height: 2.0; }
      @sp_night_cta = { border: 2px solid #D8B45A; border-radius: 999px; }
      @sp_night_cta_txt = { color: #D8B45A; font-size: 14.5px; font-weight: 800; letter-spacing: 2px; }

      # ── 昼段 ──
      @sp_day_region = { background: #F7F1E5; }
      @sp_day_label = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @sp_day_h = { color: #141414; font-size: 48px; font-weight: 900; letter-spacing: -1.5px; }
      @sp_day_p = { color: rgba(20, 20, 20, 0.6); font-size: 14.5px; line-height: 2.0; }
      @sp_d1_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d2_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d3_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.12); border-radius: 18px; }
      @sp_d1_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_d2_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_d3_num = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_d1_name = { color: #141414; font-size: 21px; font-weight: 800; }
      @sp_d2_name = { color: #141414; font-size: 21px; font-weight: 800; }
      @sp_d3_name = { color: #141414; font-size: 21px; font-weight: 800; }
      @sp_d1_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.95; }
      @sp_d2_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.95; }
      @sp_d3_desc = { color: rgba(20, 20, 20, 0.6); font-size: 14px; line-height: 1.95; }

      # ── 夜段 ──
      @sp_night_region = { background: #0E211C; }
      @sp_night_label = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @sp_night_h = { color: #F4E9CE; font-size: 48px; font-weight: 900; letter-spacing: -1.5px; }
      @sp_night_p = { color: rgba(244, 233, 206, 0.62); font-size: 14.5px; line-height: 2.0; }
      @sp_n1_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n2_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n3_col = { background: rgba(244, 233, 206, 0.06); border: 1px solid rgba(216, 180, 90, 0.28); border-radius: 18px; }
      @sp_n1_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_n2_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_n3_num = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 2.4px; }
      @sp_n1_name = { color: #F4E9CE; font-size: 21px; font-weight: 800; }
      @sp_n2_name = { color: #F4E9CE; font-size: 21px; font-weight: 800; }
      @sp_n3_name = { color: #F4E9CE; font-size: 21px; font-weight: 800; }
      @sp_n1_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.95; }
      @sp_n2_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.95; }
      @sp_n3_desc = { color: rgba(244, 233, 206, 0.6); font-size: 14px; line-height: 1.95; }

      # ── 菜单对比 ──
      @sp_menu_region = { background: #F7F1E5; }
      @sp_menu_title = { color: #141414; font-size: 46px; font-weight: 900; letter-spacing: -1.5px; }
      @sp_md_col = { background: #FFFFFF; border: 1px solid rgba(14, 33, 28, 0.14); border-radius: 20px; }
      @sp_mn_col = { background: #0E211C; border-radius: 20px; }
      @sp_md_head = { color: #B4552D; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @sp_mn_head = { color: #D8B45A; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @sp_md_1_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_2_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_3_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_md_4_cell = { border-top: 1px solid rgba(14, 33, 28, 0.12); }
      @sp_mn_1_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_2_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_3_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_mn_4_cell = { border-top: 1px solid rgba(244, 233, 206, 0.16); }
      @sp_md_1_n = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @sp_md_2_n = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @sp_md_3_n = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @sp_md_4_n = { color: #141414; font-size: 14.5px; font-weight: 600; }
      @sp_mn_1_n = { color: #F4E9CE; font-size: 14.5px; font-weight: 600; }
      @sp_mn_2_n = { color: #F4E9CE; font-size: 14.5px; font-weight: 600; }
      @sp_mn_3_n = { color: #F4E9CE; font-size: 14.5px; font-weight: 600; }
      @sp_mn_4_n = { color: #F4E9CE; font-size: 14.5px; font-weight: 600; }
      @sp_md_1_p = { color: #B4552D; font-size: 14.5px; font-weight: 800; }
      @sp_md_2_p = { color: #B4552D; font-size: 14.5px; font-weight: 800; }
      @sp_md_3_p = { color: #B4552D; font-size: 14.5px; font-weight: 800; }
      @sp_md_4_p = { color: #B4552D; font-size: 14.5px; font-weight: 800; }
      @sp_mn_1_p = { color: #D8B45A; font-size: 14.5px; font-weight: 800; }
      @sp_mn_2_p = { color: #D8B45A; font-size: 14.5px; font-weight: 800; }
      @sp_mn_3_p = { color: #D8B45A; font-size: 14.5px; font-weight: 800; }
      @sp_mn_4_p = { color: #D8B45A; font-size: 14.5px; font-weight: 800; }

      # ── 合流 CTA ──
      @sp_cta_region = { background: #F7F1E5; }
      @sp_cta_seam = { background: linear-gradient(180deg, #B4552D 0%, #0E211C 100%); opacity: 0.5; }
      @sp_cta_title = { color: #141414; font-size: 56px; font-weight: 900; letter-spacing: -2px; }
      @sp_cta_sub = { color: rgba(20, 20, 20, 0.62); font-size: 15px; line-height: 1.95; text-align: center; }
      @sp_cta_day = { background: #FFFFFF; border: 2px solid #141414; border-radius: 999px; transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @sp_cta_day_txt = { color: #141414; font-size: 15px; font-weight: 800; letter-spacing: 2px; }
      @sp_cta_night = { background: #0E211C; border: 2px solid #0E211C; border-radius: 999px; transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @sp_cta_night_txt = { color: #D8B45A; font-size: 15px; font-weight: 800; letter-spacing: 2px; }

      # ── 页脚 ──
      @sp_footer_row = { border-top: 1px solid rgba(14, 33, 28, 0.14); }
      @sp_footer_left = { color: rgba(20, 20, 20, 0.45); font-size: 12.5px; letter-spacing: 0.6px; }
      @sp_footer_f1 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
      @sp_footer_f2 = { color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
      @sp_footer_f3 = { cursor: pointer; color: rgba(20, 20, 20, 0.68); font-size: 13px; :scope { transition: color 0.2s ease; } :scope:hover { color: #B4552D; } }
    </styles>
  </Page>
</App>
```
