# 灯具插画风 — 「灯下」灯具与夜晚生活品牌

> 模板定位（内容 / 品牌 tab · 风格系列）：灯具插画（Lamp Illustration）——深夜蓝紫底 + 暖黄光晕、SVG 手绘灯插画（台灯 / 吊灯 / 落地灯，灯罩下带径向光池）、细腻的暖光质感与柔和描边。整体像一本关于「晚上的光」的插画册。
> 场景需求：给一间虚构的灯具品牌做介绍页：首屏大幅台灯插画（灯下光池 + 猫的剪影暗喻「灯下生活」）+ 标题；三款灯（插画卡 + 名称 + 参数）；「一晚上的光」叙事短段；线下空间；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="灯下 — 灯具与夜晚生活">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="lm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="lm_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="lm_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 48px">
          <Container id="lm_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="lm_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="lm_nav_mark_cell" style="height:34px; width:34px; flex-shrink:0">
                <Svg id="lm_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34' fill='none'><path d='M8,13 L26,13 L23.5,7 L10.5,7 Z' fill='#FFC96B'/><path d='M17,13 L17,27' stroke='#F4E3C1' stroke-width='2.4'/><path d='M11,27 L23,27' stroke='#F4E3C1' stroke-width='2.4' stroke-linecap='round'/><circle cx='17' cy='17' r='1.8' fill='#FFE9B8'/></svg>", ariaLabel: "灯下标志"} style="height:34px; width:34px"/>
              </Container>
              <Container id="lm_nav_word_cell" style="height:auto; width:auto"><Text id="lm_nav_word" props={content: "灯下 LAMPLIT", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lm_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="lm_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="lm_nav_i1" props={itemLabel: "灯", itemTarget: "lm_lamp_region"} style="height:auto; width:auto"/>
              <Container id="lm_nav_i2" props={itemLabel: "一晚上的光", itemTarget: "lm_story_region"} style="height:auto; width:auto"/>
              <Container id="lm_nav_i3" props={itemLabel: "线下", itemTarget: "lm_space_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="lm_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="lm_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="lm_nav_cta_txt" props={content: "来店里看灯", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（台灯插画 + 光池） ─── -->
      <Container id="lm_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="lm_hero_glow_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
          <Svg id="lm_hero_glow" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 720' preserveAspectRatio='xMidYMid slice' fill='none'><defs><radialGradient id='lmHalo' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFC96B' stop-opacity='0.34'/><stop offset='0.5' stop-color='#FFC96B' stop-opacity='0.1'/><stop offset='1' stop-color='#FFC96B' stop-opacity='0'/></radialGradient></defs><circle cx='1010' cy='360' r='330' fill='url(#lmHalo)'/><circle cx='200' cy='120' r='2.4' fill='#F4E3C1' opacity='0.7'/><circle cx='320' cy='80' r='1.8' fill='#F4E3C1' opacity='0.5'/><circle cx='140' cy='240' r='1.6' fill='#F4E3C1' opacity='0.45'/></svg>", ariaLabel: "暖黄光晕与星点"} style="height:100%; width:100%"/>
        </Container>
        <Animate id="lm_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:76px 48px 92px; position:relative; z-index:1; gap:56px; align-items:center">
          <Container id="lm_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="lm_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="lm_hero_eyebrow_cell" style="height:auto; width:auto"><Text id="lm_hero_eyebrow" props={content: "夜晚生活品牌 · 2019 年至今", tagName: "span"}/></Container>
              <Container id="lm_hero_title_cell" style="height:auto; width:auto">
                <FlexContainer id="lm_hero_title_col" props={direction: "column"} style="height:auto; width:auto; gap:0px; align-items:flex-start">
                  <Container id="lm_hero_l1_cell" style="height:auto; width:auto"><Text id="lm_hero_l1" props={content: "把一整晚的光，", tagName: "h1"}/></Container>
                  <Container id="lm_hero_l2_cell" style="height:auto; width:auto"><Text id="lm_hero_l2" props={content: "留给一张桌子", tagName: "h1"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="lm_hero_sub_cell" style="height:auto; width:100%; max-width:480px"><Text id="lm_hero_sub" props={content: "我们只做晚上的灯：不刺眼、能久待、关掉时房间不会突然变黑。每一盏都可以亲手试光。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="lm_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="lm_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:18px">
                  <Container id="lm_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="lm_hero_btn" style="height:auto; width:auto; padding:16px 34px">
                      <Text id="lm_hero_btn_txt" props={content: "看三盏灯", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="lm_hero_note_cell" style="height:auto; width:auto"><Text id="lm_hero_note" props={content: "全系可调色温 · 保修五年", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lm_hero_fig_cell" style="height:auto; width:520px; flex-shrink:0">
            <Container id="lm_hero_fig" style="height:520px; width:100%">
              <Svg id="lm_hero_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 520' fill='none'><defs><radialGradient id='lmPool' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFD98F' stop-opacity='0.55'/><stop offset='1' stop-color='#FFD98F' stop-opacity='0'/></radialGradient></defs><ellipse cx='260' cy='402' rx='210' ry='86' fill='url(#lmPool)'/><path d='M148,176 L372,176 L332,120 L188,120 Z' fill='#E8B25C'/><path d='M148,176 L372,176 L364,188 L156,188 Z' fill='#C9944A'/><path d='M256,188 L256,330' stroke='#D8C7A2' stroke-width='9' stroke-linecap='round'/><path d='M196,330 L316,330' stroke='#D8C7A2' stroke-width='9' stroke-linecap='round'/><path d='M256,410 L256,440' stroke='#D8C7A2' stroke-width='9' stroke-linecap='round'/><ellipse cx='256' cy='452' rx='64' ry='14' fill='#C9B893'/><path d='M120,462 C170,430 220,468 262,452 C306,436 352,466 400,446' stroke='#7C6BA6' stroke-width='0'/><g fill='#2B2A44'><path d='M382,380 q18,-30 52,-26 q30,4 34,30 q2,20 -22,24 l-50,0 q-18,-6 -14,-28 Z'/><path d='M392,352 q6,-18 22,-16' stroke='#2B2A44' stroke-width='8' fill='none' stroke-linecap='round'/></g><circle cx='430' cy='372' r='2.6' fill='#FFE9B8'/><circle cx='150' cy='300' r='2' fill='#F4E3C1' opacity='0.8'/><circle cx='420' cy='250' r='2.4' fill='#F4E3C1' opacity='0.6'/></svg>", ariaLabel: "插画：台灯与灯下的猫"} style="height:520px; width:100%"/>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 三盏灯 ─── -->
      <Container id="lm_lamp_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="lm_lamp_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 92px; gap:44px">
          <Container id="lm_lamp_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="lm_lamp_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="lm_lamp_label_cell" style="height:auto; width:auto"><Text id="lm_lamp_label" props={content: "三盏灯 · THREE LAMPS", tagName: "span"}/></Container>
              <Container id="lm_lamp_title_cell" style="height:auto; width:auto"><Text id="lm_lamp_title" props={content: "够用，然后耐看", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lm_lamp_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="lm_lamp_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="lm_l1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lm_l1_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lm_l1_fig_cell" style="height:260px; width:100%; flex-shrink:0">
                    <Svg id="lm_l1_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 260' preserveAspectRatio='xMidYMid slice'><rect width='360' height='260' fill='#232242'/><defs><radialGradient id='lmP1' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFD98F' stop-opacity='0.5'/><stop offset='1' stop-color='#FFD98F' stop-opacity='0'/></radialGradient></defs><ellipse cx='180' cy='204' rx='120' ry='40' fill='url(#lmP1)'/><path d='M120,96 L240,96 L216,62 L144,62 Z' fill='#E8B25C'/><path d='M180,96 L180,168' stroke='#D8C7A2' stroke-width='6' stroke-linecap='round'/><path d='M140,168 L220,168' stroke='#D8C7A2' stroke-width='6' stroke-linecap='round'/><ellipse cx='180' cy='182' rx='38' ry='9' fill='#C9B893'/></svg>", ariaLabel: "台灯插画"} style="height:260px; width:100%"/>
                  </Container>
                  <FlexContainer id="lm_l1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 26px 28px">
                    <Container id="lm_l1_name_cell" style="height:auto; width:auto"><Text id="lm_l1_name" props={content: "「晚读」台灯", tagName: "h3"}/></Container>
                    <Container id="lm_l1_desc_cell" style="height:auto; width:100%"><Text id="lm_l1_desc" props={content: "2700K 暖光起步，最低 3% 亮度——给看纸质书的人。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lm_l1_meta_cell" style="height:auto; width:auto"><Text id="lm_l1_meta" props={content: "¥ 699 · 胡桃木 / 黄铜", tagName: "span"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lm_l2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lm_l2_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lm_l2_fig_cell" style="height:260px; width:100%; flex-shrink:0">
                    <Svg id="lm_l2_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 260' preserveAspectRatio='xMidYMid slice'><rect width='360' height='260' fill='#232242'/><defs><radialGradient id='lmP2' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFD98F' stop-opacity='0.5'/><stop offset='1' stop-color='#FFD98F' stop-opacity='0'/></radialGradient></defs><ellipse cx='180' cy='216' rx='140' ry='36' fill='url(#lmP2)'/><path d='M180,20 L180,72' stroke='#D8C7A2' stroke-width='5'/><path d='M118,132 a62,34 0 0 1 124,0 Z' fill='#E8B25C'/><path d='M118,132 L242,132' stroke='#C9944A' stroke-width='5'/><circle cx='180' cy='148' r='11' fill='#FFE9B8'/><path d='M132,90 q48,-26 96,0' stroke='#D8C7A2' stroke-width='4' fill='none'/></svg>", ariaLabel: "吊灯插画"} style="height:260px; width:100%"/>
                  </Container>
                  <FlexContainer id="lm_l2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 26px 28px">
                    <Container id="lm_l2_name_cell" style="height:auto; width:auto"><Text id="lm_l2_name" props={content: "「低垂」吊灯", tagName: "h3"}/></Container>
                    <Container id="lm_l2_desc_cell" style="height:auto; width:100%"><Text id="lm_l2_desc" props={content: "灯罩压得很低，光只落在桌面——吃饭时人比菜好看。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lm_l2_meta_cell" style="height:auto; width:auto"><Text id="lm_l2_meta" props={content: "¥ 1,280 · 拉丝铝 / 亚麻罩", tagName: "span"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
              <Container id="lm_l3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="lm_l3_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
                  <Container id="lm_l3_fig_cell" style="height:260px; width:100%; flex-shrink:0">
                    <Svg id="lm_l3_fig" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 260' preserveAspectRatio='xMidYMid slice'><rect width='360' height='260' fill='#232242'/><defs><radialGradient id='lmP3' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFD98F' stop-opacity='0.42'/><stop offset='1' stop-color='#FFD98F' stop-opacity='0'/></radialGradient></defs><ellipse cx='196' cy='210' rx='130' ry='38' fill='url(#lmP3)'/><path d='M92,58 L92,196' stroke='#D8C7A2' stroke-width='6' stroke-linecap='round'/><path d='M92,58 q46,-16 84,26' stroke='#D8C7A2' stroke-width='6' fill='none'/><path d='M150,62 L214,62 L200,36 L164,36 Z' fill='#E8B25C'/><circle cx='182' cy='76' r='8' fill='#FFE9B8'/><ellipse cx='122' cy='204' rx='44' ry='10' fill='#C9B893'/></svg>", ariaLabel: "落地灯插画"} style="height:260px; width:100%"/>
                  </Container>
                  <FlexContainer id="lm_l3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; padding:24px 26px 28px">
                    <Container id="lm_l3_name_cell" style="height:auto; width:auto"><Text id="lm_l3_name" props={content: "「角落」落地灯", tagName: "h3"}/></Container>
                    <Container id="lm_l3_desc_cell" style="height:auto; width:100%"><Text id="lm_l3_desc" props={content: "往沙发角一放，房间就有了第二个中心。可摇头补光。", tagName: "p"} style="height:auto; width:100%"/></Container>
                    <Container id="lm_l3_meta_cell" style="height:auto; width:auto"><Text id="lm_l3_meta" props={content: "¥ 980 · 铸铁底座 / 布面罩", tagName: "span"}/></Container>
                  </FlexContainer>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 一晚上的光（叙事） ─── -->
      <Container id="lm_story_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="lm_story_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 48px 92px; gap:64px; align-items:flex-start">
          <Container id="lm_story_left_cell" style="height:auto; width:280px; flex-shrink:0">
            <FlexContainer id="lm_story_left_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
              <Container id="lm_story_label_cell" style="height:auto; width:auto"><Text id="lm_story_label" props={content: "一晚上的光", tagName: "span"}/></Container>
              <Container id="lm_story_hint_cell" style="height:auto; width:auto"><Text id="lm_story_hint" props={content: "19:00 — 01:00", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="lm_story_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="lm_story_body_col" props={direction: "column"} style="height:auto; width:100%; gap:22px; align-items:flex-start">
              <Container id="lm_story_q_cell" style="height:auto; width:100%; max-width:760px"><Text id="lm_story_q" props={content: "19 点刚过，光要亮得起来；22 点以后，光要退到背后去。", tagName: "h3"} style="height:auto; width:100%"/></Container>
              <Container id="lm_story_p_cell" style="height:auto; width:100%; max-width:620px"><Text id="lm_story_p" props={content: "同一盏灯，从晚饭的明亮到睡前的 3%，中间没有突兀的一档。我们花了两年调这条曲线——因为「氛围感」不是亮度的数字，是你愿意在灯下多待的那一个小时。", tagName: "p"} style="height:auto; width:100%"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 线下空间 ─── -->
      <Container id="lm_space_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:84px">
        <FlexContainer id="lm_space_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 48px 104px; gap:56px; align-items:center">
          <Container id="lm_space_card_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="lm_space_card_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:38px 40px">
              <Container id="lm_space_title_cell" style="height:auto; width:auto"><Text id="lm_space_title" props={content: "来把灯打开看看", tagName: "h2"}/></Container>
              <Container id="lm_space_desc_cell" style="height:auto; width:100%; max-width:520px"><Text id="lm_space_desc" props={content: "展厅刻意装成「一间没开大灯的客厅」：傍晚来最好，可以坐在沙发上看两小时的书，把三盏灯轮流开一遍。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="lm_space_meta_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="lm_space_meta_col" props={direction: "column"} style="height:auto; width:auto; gap:10px; align-items:flex-start">
                  <Container id="lm_sm1_cell" style="height:auto; width:auto"><Text id="lm_sm1" props={content: "地址 — 上海 · 永嘉路 550 号 后院", tagName: "span"}/></Container>
                  <Container id="lm_sm2_cell" style="height:auto; width:auto"><Text id="lm_sm2" props={content: "时间 — 每天 14:00-22:00（周一休息）", tagName: "span"}/></Container>
                  <Container id="lm_sm3_cell" style="height:auto; width:auto"><Text id="lm_sm3" props={content: "试灯 — 无需预约，提供咖啡", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="lm_space_fig_cell" style="height:auto; width:360px; flex-shrink:0">
            <Container id="lm_space_fig" style="height:340px; width:100%">
              <Svg id="lm_space_fig_svg" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 340' fill='none'><defs><radialGradient id='lmP4' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#FFD98F' stop-opacity='0.45'/><stop offset='1' stop-color='#FFD98F' stop-opacity='0'/></radialGradient></defs><ellipse cx='180' cy='256' rx='140' ry='48' fill='url(#lmP4)'/><rect x='64' y='196' width='232' height='60' rx='18' fill='#3A3860'/><rect x='84' y='160' width='80' height='44' rx='14' fill='#4A4878'/><path d='M296,196 q0,-42 -34,-52' stroke='#D8C7A2' stroke-width='5' fill='none'/><path d='M244,120 L296,120 L282,96 L258,96 Z' fill='#E8B25C'/><circle cx='270' cy='134' r='7' fill='#FFE9B8'/><path d='M40,300 h280' stroke='#2B2A44' stroke-width='6' stroke-linecap='round'/></svg>", ariaLabel: "插画：展厅的一角"} style="height:340px; width:100%"/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 页脚 ─── -->
      <Container id="lm_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="lm_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="lm_footer_left_cell" style="height:auto; width:auto"><Text id="lm_footer_left" props={content: "© 2026 灯下 LAMPLIT · 品牌与产品均为虚构演示", tagName: "span"}/></Container>
          <Container id="lm_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="lm_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="lm_footer_f1_cell" style="height:auto; width:auto"><Text id="lm_footer_f1" props={content: "照明笔记", tagName: "span"}/></Container>
              <Container id="lm_footer_f2_cell" style="height:auto; width:auto"><Text id="lm_footer_f2" props={content: "保修与退换", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 页面基调（深夜蓝紫） ──
      @lm_root = { background: #1B1A33; }

      # ── 导航 ──
      @lm_nav_region = { background: rgba(27, 26, 51, 0.9); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(244, 227, 193, 0.12); }
      @lm_nav_word = { color: #F4E3C1; font-size: 15px; font-weight: 700; letter-spacing: 3px; }
      @lm_nav_menu = {
        :scope { --anchor-item-color: rgba(244, 227, 193, 0.62); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 8px 14px; --anchor-item-radius: 999px; --anchor-item-active-color: #FFC96B; --anchor-item-active-bg: rgba(255, 201, 107, 0.12); --anchor-gap: 10px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: background 0.25s ease, color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(255, 201, 107, 0.1); color: #F4E3C1; }
      }
      @lm_nav_cta = { border: 1px solid rgba(255, 201, 107, 0.5); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(255, 201, 107, 0.14); } }
      @lm_nav_cta_txt = { color: #FFC96B; font-size: 12.5px; font-weight: 700; letter-spacing: 1.4px; }

      # ── 首屏 ──
      @lm_hero_eyebrow = { color: rgba(244, 227, 193, 0.55); font-size: 12px; font-weight: 600; letter-spacing: 3.4px; }
      @lm_hero_l1 = { color: #F4E3C1; font-size: 66px; font-weight: 900; letter-spacing: -2px; line-height: 1.28; }
      @lm_hero_l2 = { color: #F4E3C1; font-size: 66px; font-weight: 900; letter-spacing: -2px; line-height: 1.28; }
      @lm_hero_sub = { color: rgba(244, 227, 193, 0.66); font-size: 15.5px; line-height: 2.05; }
      @lm_hero_btn = { background: #FFC96B; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(255, 201, 107, 0.3); } }
      @lm_hero_btn_txt = { color: #2B2A44; font-size: 15px; font-weight: 800; letter-spacing: 1.6px; }
      @lm_hero_note = { color: rgba(244, 227, 193, 0.5); font-size: 13px; }

      # ── 三盏灯 ──
      @lm_lamp_label = { color: #FFC96B; font-size: 12px; font-weight: 800; letter-spacing: 4px; }
      @lm_lamp_title = { color: #F4E3C1; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @lm_l1_fig_cell = { border-radius: 20px; overflow: hidden; }
      @lm_l2_fig_cell = { border-radius: 20px; overflow: hidden; }
      @lm_l3_fig_cell = { border-radius: 20px; overflow: hidden; }
      @lm_l1_col = { background: #232242; border-radius: 20px; border: 1px solid rgba(244, 227, 193, 0.1); transition: border-color 0.3s ease, transform 0.3s ease; :scope:hover { border-color: rgba(255, 201, 107, 0.45); transform: translateY(-4px); } }
      @lm_l2_col = { background: #232242; border-radius: 20px; border: 1px solid rgba(244, 227, 193, 0.1); transition: border-color 0.3s ease, transform 0.3s ease; :scope:hover { border-color: rgba(255, 201, 107, 0.45); transform: translateY(-4px); } }
      @lm_l3_col = { background: #232242; border-radius: 20px; border: 1px solid rgba(244, 227, 193, 0.1); transition: border-color 0.3s ease, transform 0.3s ease; :scope:hover { border-color: rgba(255, 201, 107, 0.45); transform: translateY(-4px); } }
      @lm_l1_name = { color: #F4E3C1; font-size: 20px; font-weight: 800; }
      @lm_l2_name = { color: #F4E3C1; font-size: 20px; font-weight: 800; }
      @lm_l3_name = { color: #F4E3C1; font-size: 20px; font-weight: 800; }
      @lm_l1_desc = { color: rgba(244, 227, 193, 0.6); font-size: 13.5px; line-height: 1.9; }
      @lm_l2_desc = { color: rgba(244, 227, 193, 0.6); font-size: 13.5px; line-height: 1.9; }
      @lm_l3_desc = { color: rgba(244, 227, 193, 0.6); font-size: 13.5px; line-height: 1.9; }
      @lm_l1_meta = { color: #FFC96B; font-size: 12.5px; font-weight: 700; }
      @lm_l2_meta = { color: #FFC96B; font-size: 12.5px; font-weight: 700; }
      @lm_l3_meta = { color: #FFC96B; font-size: 12.5px; font-weight: 700; }

      # ── 叙事 ──
      @lm_story_label = { color: #FFC96B; font-size: 12px; font-weight: 700; letter-spacing: 3.4px; }
      @lm_story_hint = { color: rgba(244, 227, 193, 0.45); font-size: 12.5px; letter-spacing: 2px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @lm_story_q = { color: #F4E3C1; font-size: 28px; font-weight: 800; letter-spacing: -0.4px; line-height: 1.9; }
      @lm_story_p = { color: rgba(244, 227, 193, 0.62); font-size: 14.5px; line-height: 2.15; }

      # ── 线下 ──
      @lm_space_card_col = { background: #232242; border-radius: 24px; border: 1px solid rgba(244, 227, 193, 0.12); }
      @lm_space_title = { color: #F4E3C1; font-size: 38px; font-weight: 900; letter-spacing: -1.2px; }
      @lm_space_desc = { color: rgba(244, 227, 193, 0.62); font-size: 14.5px; line-height: 2.05; }
      @lm_sm1 = { color: rgba(244, 227, 193, 0.72); font-size: 13.5px; }
      @lm_sm2 = { color: rgba(244, 227, 193, 0.72); font-size: 13.5px; }
      @lm_sm3 = { color: #FFC96B; font-size: 13.5px; font-weight: 600; }

      # ── 页脚 ──
      @lm_footer_row = { border-top: 1px solid rgba(244, 227, 193, 0.12); }
      @lm_footer_left = { color: rgba(244, 227, 193, 0.35); font-size: 12.5px; }
      @lm_footer_f1 = { color: rgba(244, 227, 193, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #FFC96B; } }
      @lm_footer_f2 = { color: rgba(244, 227, 193, 0.6); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #FFC96B; } }
    </styles>
  </Page>
</App>
```
