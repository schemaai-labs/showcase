# Social 图文封面（导出型） — 「小满厨房」笔记封面

> 模板定位（营销 / 增长 tab · 导出驱动）：社交图文（小红书 / Instagram 封面）——**3:4 竖版封面构图**（大标题 + 编号亮点 + 品牌条），导出面板按 3:4（1080×1440）或 1:1（1080×1080）出图。
> 场景需求：给虚构美食账号「小满厨房」做笔记封面：奶油底 + 珊瑚色大标题「夏天晚餐就吃它 / 低卡又顶饱」+ 三条编号亮点白卡 + 底部品牌条（头像 + 昵称 + 收藏提示）。版式对 3:4 与 1:1 都成立（纵向居中、安全边距充足）。

```lang
<App dsl-version="0.3" name="小满厨房 · 笔记封面">
  <Page id="social" name="笔记封面" route="/">
    <FlexContainer id="so_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">

      <Container id="so_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
        <Svg id="so_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1440' fill='none' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='soSteam' x1='0' y1='300' x2='0' y2='80' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#FB7185' stop-opacity='0'/><stop offset='0.6' stop-color='#FB7185' stop-opacity='0.28'/><stop offset='1' stop-color='#FDA4AF' stop-opacity='0'/></linearGradient><filter id='soSoft' x='-90%' y='-90%' width='280%' height='280%'><feGaussianBlur stdDeviation='15'/></filter><filter id='soGlow' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='3' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><circle cx='932' cy='172' r='48' fill='#FB7185' opacity='0.16' filter='url(#soSoft)'/><circle cx='146' cy='528' r='36' fill='#F59E0B' opacity='0.14' filter='url(#soSoft)'/><circle cx='958' cy='764' r='30' fill='#FB7185' opacity='0.12' filter='url(#soSoft)'/><circle cx='172' cy='1108' r='40' fill='#F59E0B' opacity='0.12' filter='url(#soSoft)'/><circle cx='742' cy='1272' r='28' fill='#FB7185' opacity='0.1' filter='url(#soSoft)'/><circle cx='520' cy='96' r='22' fill='#FDA4AF' opacity='0.14' filter='url(#soSoft)'/><path d='M772,306 C748,262 792,232 768,188 C748,152 782,124 764,84' stroke='url(#soSteam)' stroke-width='5' stroke-linecap='round'/><path d='M830,344 C812,308 848,282 828,246 C812,216 840,192 824,158' stroke='url(#soSteam)' stroke-width='4' stroke-linecap='round' opacity='0.8'/><path d='M204,210 C205.8,215.6 206.4,216.2 212,218 C206.4,219.8 205.8,220.4 204,226 C202.2,220.4 201.6,219.8 196,218 C201.6,216.2 202.2,215.6 204,210 Z' fill='#F59E0B' opacity='0.55' filter='url(#soGlow)'/><path d='M884,463 C885.5,467.9 886.1,468.5 891,470 C886.1,471.5 885.5,472.1 884,477 C882.5,472.1 881.9,471.5 877,470 C881.9,468.5 882.5,467.9 884,463 Z' fill='#F59E0B' opacity='0.5' filter='url(#soGlow)'/><path d='M284,946 C285.3,950.2 285.8,950.7 290,952 C285.8,953.3 285.3,953.8 284,958 C282.7,953.8 282.2,953.3 278,952 C282.2,950.7 282.7,950.2 284,946 Z' fill='#F59E0B' opacity='0.42' filter='url(#soGlow)'/><path d='M868,1056 C869.8,1061.6 870.4,1062.2 876,1064 C870.4,1065.8 869.8,1066.4 868,1072 C866.2,1066.4 865.6,1065.8 860,1064 C865.6,1062.2 866.2,1061.6 868,1056 Z' fill='#F59E0B' opacity='0.5' filter='url(#soGlow)'/><circle cx='348' cy='128' r='2.2' fill='#FB7185' opacity='0.35'/><circle cx='620' cy='232' r='1.8' fill='#FB7185' opacity='0.3'/><circle cx='110' cy='730' r='2' fill='#FB7185' opacity='0.32'/><circle cx='972' cy='984' r='2.4' fill='#FB7185' opacity='0.3'/><circle cx='474' cy='1248' r='2' fill='#FB7185' opacity='0.28'/><circle cx='838' cy='136' r='1.6' fill='#FB7185' opacity='0.3'/></svg>", ariaLabel: "珊瑚暖橙柔焦光斑与蒸汽装饰层"} style="height:100%; width:100%"/>
      </Container>
      <FlexContainer id="so_col" props={direction: "column"} style="height:auto; width:100%; max-width:1048px; align-items:flex-start; gap:34px; padding:76px 84px; position:relative">

        <!-- 品牌行 -->
        <Container id="so_brand_cell" style="height:auto; width:100%">
          <FlexContainer id="so_brand_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="so_brand_left_cell" style="height:auto; width:auto">
              <FlexContainer id="so_brand_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="so_brand_icon_cell" style="height:auto; width:auto"><Icon id="so_brand_icon" props={iconName: "ChefHat", iconSource: "lucide"}/></Container>
                <Container id="so_brand_text_cell" style="height:auto; width:auto"><Text id="so_brand_text" props={content: "小满厨房", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="so_brand_tag_cell" style="height:auto; width:auto">
              <Tag id="so_brand_tag" props={text: "今日食谱", color: "volcano"}/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 大标题（手工断行：封面排版纪律——美术断行不交给自动换行） -->
        <Container id="so_title_cell" style="height:auto; width:100%">
          <FlexContainer id="so_title_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:0px">
            <Container id="so_title_line1_cell" style="height:auto; width:100%">
              <Text id="so_title_line1" props={content: "夏天晚餐就吃它", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="so_title_line2_cell" style="height:auto; width:100%">
              <Text id="so_title_line2" props={content: "低卡又顶饱", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
          </FlexContainer>
        </Container>
        <Container id="so_sub_cell" style="height:auto; width:100%">
          <Text id="so_sub" props={content: "三道菜，一口锅，10 分钟端上桌", tagName: "p"} style="height:auto; width:100%"/>
        </Container>

        <!-- 编号亮点 -->
        <Container id="so_list_cell" style="height:auto; width:100%">
          <FlexContainer id="so_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px">
            <Container id="so_item_1_cell" style="height:auto; width:100%">
              <FlexContainer id="so_item_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:16px; padding:20px 22px">
                <Container id="so_item_1_num_cell" style="height:52px; width:52px; flex-shrink:0"><Text id="so_item_1_num" props={content: "01", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="so_item_1_text_cell" style="height:auto; width:auto"><Text id="so_item_1_text" props={content: "凉拌鸡丝荞麦面 · 一碗 320 千卡", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="so_item_2_cell" style="height:auto; width:100%">
              <FlexContainer id="so_item_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:16px; padding:20px 22px">
                <Container id="so_item_2_num_cell" style="height:52px; width:52px; flex-shrink:0"><Text id="so_item_2_num" props={content: "02", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="so_item_2_text_cell" style="height:auto; width:auto"><Text id="so_item_2_text" props={content: "虾仁豆腐蒸蛋 · 蛋白质 28g", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="so_item_3_cell" style="height:auto; width:100%">
              <FlexContainer id="so_item_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:16px; padding:20px 22px">
                <Container id="so_item_3_num_cell" style="height:52px; width:52px; flex-shrink:0"><Text id="so_item_3_num" props={content: "03", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="so_item_3_text_cell" style="height:auto; width:auto"><Text id="so_item_3_text" props={content: "冰镇话梅小番茄 · 解腻又开胃", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 底部品牌条 -->
        <Container id="so_footer_cell" style="height:auto; width:100%; padding-top:10px">
          <FlexContainer id="so_footer_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="so_footer_left_cell" style="height:auto; width:auto">
              <FlexContainer id="so_footer_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                <Container id="so_footer_avatar_cell" style="height:44px; width:44px; flex-shrink:0"><Avatar id="so_footer_avatar" props={text: "满", shape: "circle"} style="height:44px; width:44px"/></Container>
                <Container id="so_footer_name_cell" style="height:auto; width:auto">
                  <FlexContainer id="so_footer_name_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="so_footer_name_main_cell" style="height:auto; width:auto"><Text id="so_footer_name_main" props={content: "小满厨房", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="so_footer_name_sub_cell" style="height:auto; width:auto"><Text id="so_footer_name_sub" props={content: "每天一道家常菜", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="so_footer_cta_cell" style="height:auto; width:auto">
              <FlexContainer id="so_footer_cta_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:8px; padding:9px 16px">
                <Container id="so_footer_cta_icon_cell" style="height:auto; width:auto"><Icon id="so_footer_cta_icon" props={iconName: "Star", iconSource: "lucide"}/></Container>
                <Container id="so_footer_cta_text_cell" style="height:auto; width:auto"><Text id="so_footer_cta_text" props={content: "收藏这期不迷路", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <styles>
      # 奶油底 + 珊瑚色标题（小红书风）
      @so_root = {
        background: linear-gradient(165deg, #fffbf5 0%, #fff1e6 55%, #ffe4d6 100%);
        :scope::before {
          content: '';
          position: absolute;
          right: -120px;
          top: -110px;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(251, 113, 133, 0.2), rgba(251, 113, 133, 0.05) 52%, transparent 74%);
        }
        :scope::after {
          content: '';
          position: absolute;
          left: -140px;
          bottom: -130px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(245, 158, 11, 0.16), rgba(245, 158, 11, 0.04) 55%, transparent 76%);
        }
      }
      @so_brand_icon = { color: #f43f5e; font-size: 26px; }
      @so_brand_text = { color: #7f1d1d; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
      @so_brand_tag = { background-color: #ffe4e6; color: #be123c; font-size: 13px; font-weight: 700; border-radius: 999px; }
      @so_title_line1 = { font-size: 84px; font-weight: 900; letter-spacing: -3px; line-height: 1.18; :scope { background-image: linear-gradient(120deg, #9f1239 0%, #e11d48 46%, #fb7185 80%, #f59e0b 118%); -webkit-background-clip: text; background-clip: text; color: transparent; text-shadow: 0 16px 42px rgba(244, 63, 94, 0.22); } }
      @so_title_line2 = { font-size: 84px; font-weight: 900; letter-spacing: -3px; line-height: 1.18; :scope { background-image: linear-gradient(120deg, #9f1239 0%, #e11d48 46%, #fb7185 80%, #f59e0b 118%); -webkit-background-clip: text; background-clip: text; color: transparent; text-shadow: 0 16px 42px rgba(244, 63, 94, 0.22); } }
      @so_sub = { color: #b45309; font-size: 22px; font-weight: 600; letter-spacing: 1px; }
      @so_item_1_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 10px 26px rgba(190, 24, 93, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @so_item_2_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 10px 26px rgba(190, 24, 93, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @so_item_3_cell = { background: #ffffff; border-radius: 18px; box-shadow: 0 10px 26px rgba(190, 24, 93, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @so_item_1_num = { color: #ffffff; font-size: 21px; font-weight: 900; letter-spacing: 0.5px; }
      @so_item_1_num_cell = { background: linear-gradient(150deg, #fb7185 0%, #e11d48 100%); border-radius: 14px; box-shadow: 0 6px 16px rgba(225, 29, 72, 0.26); }
      @so_item_2_num = { color: #ffffff; font-size: 21px; font-weight: 900; letter-spacing: 0.5px; }
      @so_item_2_num_cell = { background: linear-gradient(150deg, #fb7185 0%, #e11d48 100%); border-radius: 14px; box-shadow: 0 6px 16px rgba(225, 29, 72, 0.26); }
      @so_item_3_num = { color: #ffffff; font-size: 21px; font-weight: 900; letter-spacing: 0.5px; }
      @so_item_3_num_cell = { background: linear-gradient(150deg, #fb7185 0%, #e11d48 100%); border-radius: 14px; box-shadow: 0 6px 16px rgba(225, 29, 72, 0.26); }
      @so_item_1_text = { color: #3f3f46; font-size: 22px; font-weight: 700; }
      @so_item_2_text = { color: #3f3f46; font-size: 22px; font-weight: 700; }
      @so_item_3_text = { color: #3f3f46; font-size: 22px; font-weight: 700; }
      @so_footer_avatar_cell = { box-shadow: 0 6px 16px rgba(225, 29, 72, 0.3); :scope { border-radius: 50%; } }
      @so_footer_avatar = { :scope { --avatar-bg: linear-gradient(150deg, #fb7185 0%, #e11d48 100%); --avatar-color: #ffffff; --avatar-font-weight: 800; } }
      @so_footer_name_main = { color: #3f3f46; font-size: 17px; font-weight: 800; }
      @so_footer_name_sub = { color: #a1a1aa; font-size: 13px; }
      @so_footer_cta_cell = { background: #fff7ed; border-radius: 999px; box-shadow: 0 6px 16px rgba(180, 83, 9, 0.1); :scope { border: 1px solid #fcd9a8; } }
      @so_footer_cta_icon = { color: #f59e0b; font-size: 18px; }
      @so_footer_cta_text = { color: #b45309; font-size: 15px; font-weight: 700; }
    </styles>
  </Page>
</App>
```

> 制作要点：3:4 与 1:1 双成立（纵向居中 + 安全边距 ≥76px）；标题用 `\n` + `white-space: pre-line` 手工断行（封面排版纪律：美术断行不交给自动换行）；品牌条承担账号识别（社交封面惯例）。
>
> 质感升级（2026-09-14，visual-composition 规则 16）——① **画幅根全幅修复**：根「渐变 + padding」同节点曾使奶油底内缩漏白底；根零 padding + `so_col` 收敛 1048 持 padding（内容宽不变，仍 880）；② **装饰层**：SVG 双缕珊瑚蒸汽（圆头描边 + 渐变淡出）+ 6 枚柔焦光斑（珊瑚/暖橙多段衰减）+ 四角星徽与金尘；根补左下暖橙第二斑；③ **标题渐变字**（玫瑰 → 珊瑚 → 暖橙）加柔光晕；④ **编号徽**：01/02/03 入渐变珊瑚圆角方徽（白字 + 投影）；白卡内高光 + 阴影加深；⑤ **收藏提示绘制胶囊**（暖橙底 + 描边 + 投影）；⑥ **头像主题化**——`avatar` 组件内层视觉已走 CSS 变量透传（2026-09-15 平台修复），直接 `:scope { --avatar-bg / --avatar-color }` 主题化为渐变珊瑚圆 + 白字。
