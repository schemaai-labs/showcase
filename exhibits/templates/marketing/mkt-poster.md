# 海报 / 电子邀请函（导出型） — 「与光同尘」秋季发布会邀请函

> 模板定位（营销 / 增长 tab · 导出驱动）：海报与电子邀请函——**竖版海报构图**（A4 比例），导出面板出 PNG 或 PDF（打印/转发两用）。
> 场景需求：给虚构设计品牌做发布会邀请函：墨绿底 + 金色点缀，顶部「邀请函」题字，主标题「与光同尘」，时间 / 地点 / 着装三行信息，金色分隔线，三段议程，底部二维码报名区（qrcode 组件）与席位说明。A4 竖版（1240×1754）与 9:16 均成立。

```lang
<App dsl-version="0.3" name="与光同尘 · 秋季发布会邀请函">
  <Page id="poster" name="邀请函" route="/">
    <FlexContainer id="po_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">

      <Container id="po_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
        <Svg id="po_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1400' fill='none' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='poArc' x1='30' y1='480' x2='970' y2='480' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#D4AF37' stop-opacity='0'/><stop offset='0.5' stop-color='#D4AF37' stop-opacity='0.38'/><stop offset='1' stop-color='#D4AF37' stop-opacity='0'/></linearGradient><filter id='poGlow' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='3.5' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter><filter id='poSoft' x='-90%' y='-90%' width='280%' height='280%'><feGaussianBlur stdDeviation='16'/></filter></defs><path d='M30,480 A520,520 0 0 1 970,480' stroke='url(#poArc)' stroke-width='1.6'/><path d='M210,790 A330,330 0 0 1 790,790' stroke='url(#poArc)' stroke-width='1.2' opacity='0.7'/><ellipse cx='500' cy='1320' rx='420' ry='190' fill='#D4AF37' opacity='0.07' filter='url(#poSoft)'/><path d='M196,237 C198.0,243.3 198.7,244.0 205,246 C198.7,248.0 198.0,248.7 196,255 C194.0,248.7 193.3,248.0 187,246 C193.3,244.0 194.0,243.3 196,237 Z' fill='#D4AF37' opacity='0.75' filter='url(#poGlow)'/><path d='M806,315 C807.5,319.9 808.1,320.5 813,322 C808.1,323.5 807.5,324.1 806,329 C804.5,324.1 803.9,323.5 799,322 C803.9,320.5 804.5,319.9 806,315 Z' fill='#D4AF37' opacity='0.6'/><path d='M344,126 C345.3,130.2 345.8,130.7 350,132 C345.8,133.3 345.3,133.8 344,138 C342.7,133.8 342.2,133.3 338,132 C342.2,130.7 342.7,130.2 344,126 Z' fill='#D4AF37' opacity='0.55'/><path d='M664,167 C666.4,174.7 667.3,175.6 675,178 C667.3,180.4 666.4,181.3 664,189 C661.6,181.3 660.7,180.4 653,178 C660.7,175.6 661.6,174.7 664,167 Z' fill='#D4AF37' opacity='0.8' filter='url(#poGlow)'/><path d='M884,555 C885.1,558.5 885.5,558.9 889,560 C885.5,561.1 885.1,561.5 884,565 C882.9,561.5 882.5,561.1 879,560 C882.5,558.9 882.9,558.5 884,555 Z' fill='#D4AF37' opacity='0.45'/><path d='M118,606 C119.3,610.2 119.8,610.7 124,612 C119.8,613.3 119.3,613.8 118,618 C116.7,613.8 116.2,613.3 112,612 C116.2,610.7 116.7,610.2 118,606 Z' fill='#D4AF37' opacity='0.5'/><path d='M500,930 C501.8,935.6 502.4,936.2 508,938 C502.4,939.8 501.8,940.4 500,946 C498.2,940.4 497.6,939.8 492,938 C497.6,936.2 498.2,935.6 500,930 Z' fill='#D4AF37' opacity='0.6' filter='url(#poGlow)'/><path d='M262,1103 C263.1,1106.5 263.5,1106.9 267,1108 C263.5,1109.1 263.1,1109.5 262,1113 C260.9,1109.5 260.5,1109.1 257,1108 C260.5,1106.9 260.9,1106.5 262,1103 Z' fill='#D4AF37' opacity='0.42'/><path d='M742,1160 C743.3,1164.2 743.8,1164.7 748,1166 C743.8,1167.3 743.3,1167.8 742,1172 C740.7,1167.8 740.2,1167.3 736,1166 C740.2,1164.7 740.7,1164.2 742,1160 Z' fill='#D4AF37' opacity='0.48'/><path d='M860,857 C861.1,860.5 861.5,860.9 865,862 C861.5,863.1 861.1,863.5 860,867 C858.9,863.5 858.5,863.1 855,862 C858.5,860.9 858.9,860.5 860,857 Z' fill='#D4AF37' opacity='0.4'/><circle cx='150' cy='380' r='1.2' fill='#E8D48A' opacity='0.22'/><circle cx='300' cy='528' r='1.7' fill='#E8D48A' opacity='0.30'/><circle cx='452' cy='236' r='2.2' fill='#E8D48A' opacity='0.38'/><circle cx='588' cy='402' r='1.2' fill='#E8D48A' opacity='0.46'/><circle cx='760' cy='640' r='1.7' fill='#E8D48A' opacity='0.22'/><circle cx='836' cy='214' r='2.2' fill='#E8D48A' opacity='0.30'/><circle cx='232' cy='806' r='1.2' fill='#E8D48A' opacity='0.38'/><circle cx='648' cy='760' r='1.7' fill='#E8D48A' opacity='0.46'/><circle cx='392' cy='1010' r='2.2' fill='#E8D48A' opacity='0.22'/><circle cx='712' cy='1064' r='1.2' fill='#E8D48A' opacity='0.30'/><circle cx='158' cy='1178' r='1.7' fill='#E8D48A' opacity='0.38'/><circle cx='872' cy='1224' r='2.2' fill='#E8D48A' opacity='0.46'/><circle cx='524' cy='570' r='1.2' fill='#E8D48A' opacity='0.22'/><circle cx='68' cy='522' r='1.7' fill='#E8D48A' opacity='0.30'/></svg>", ariaLabel: "金色双弧光环与星尘装饰层"} style="height:100%; width:100%"/>
      </Container>
      <FlexContainer id="po_col" props={direction: "column"} style="height:auto; width:100%; max-width:992px; align-items:center; gap:30px; padding:88px 96px; position:relative">

        <!-- 题头 -->
        <Container id="po_kicker_cell" style="height:auto; width:auto">
          <Text id="po_kicker" props={content: "邀 请 函 · INVITATION", tagName: "span"} style="height:auto; width:auto"/>
        </Container>
        <Container id="po_brand_cell" style="height:auto; width:auto">
          <FlexContainer id="po_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
            <Container id="po_brand_icon_cell" style="height:auto; width:auto"><Icon id="po_brand_icon" props={iconName: "Sparkles", iconSource: "lucide"}/></Container>
            <Container id="po_brand_text_cell" style="height:auto; width:auto"><Text id="po_brand_text" props={content: "拾光设计 SEEKLICHT", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>

        <!-- 主标题 -->
        <Container id="po_title_cell" style="height:auto; width:100%">
          <Text id="po_title" props={content: "与光同尘", tagName: "h1"} style="height:auto; width:100%"/>
        </Container>
        <Container id="po_subtitle_cell" style="height:auto; width:100%">
          <Text id="po_subtitle" props={content: "2026 秋季新品发布会", tagName: "p"} style="height:auto; width:100%"/>
        </Container>

        <!-- 信息三行 -->
        <Container id="po_info_cell" style="height:auto; width:100%; padding-top:6px">
          <FlexContainer id="po_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px">
            <Container id="po_time_cell" style="height:auto; width:auto">
              <FlexContainer id="po_time_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_time_icon_cell" style="height:auto; width:auto"><Icon id="po_time_icon" props={iconName: "CalendarDays", iconSource: "lucide"}/></Container>
                <Container id="po_time_text_cell" style="height:auto; width:auto"><Text id="po_time_text" props={content: "9 月 26 日（周六）19:30 入场 · 20:00 开场", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_place_cell" style="height:auto; width:auto">
              <FlexContainer id="po_place_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_place_icon_cell" style="height:auto; width:auto"><Icon id="po_place_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                <Container id="po_place_text_cell" style="height:auto; width:auto"><Text id="po_place_text" props={content: "上海 · 西岸艺术中心 B 馆（龙腾大道 2555 号）", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_dress_cell" style="height:auto; width:auto">
              <FlexContainer id="po_dress_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_dress_icon_cell" style="height:auto; width:auto"><Icon id="po_dress_icon" props={iconName: "Ticket", iconSource: "lucide"}/></Container>
                <Container id="po_dress_text_cell" style="height:auto; width:auto"><Text id="po_dress_text" props={content: "着装：半正式 · 凭本函核对席位", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <Container id="po_divider_cell" style="height:1px; width:320px; flex-shrink:0"/>

        <!-- 议程 -->
        <Container id="po_agenda_cell" style="height:auto; width:100%">
          <FlexContainer id="po_agenda_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="po_agenda_title_cell" style="height:auto; width:100%">
              <Text id="po_agenda_title" props={content: "当晚流程", tagName: "h3"} style="height:auto; width:100%"/>
            </Container>
            <Container id="po_agenda_1_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_1_time_cell" style="height:auto; width:auto"><Text id="po_agenda_1_time" props={content: "20:00", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_1_text_cell" style="height:auto; width:auto"><Text id="po_agenda_1_text" props={content: "开幕 · 主理人致辞", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_agenda_2_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_2_time_cell" style="height:auto; width:auto"><Text id="po_agenda_2_time" props={content: "20:20", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_2_text_cell" style="height:auto; width:auto"><Text id="po_agenda_2_text" props={content: "「与光同尘」系列发布与走秀", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_agenda_3_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_3_time_cell" style="height:auto; width:auto"><Text id="po_agenda_3_time" props={content: "21:00", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_3_text_cell" style="height:auto; width:auto"><Text id="po_agenda_3_text" props={content: "after party · 自由交流与签约", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 报名区 -->
        <Container id="po_rsvp_cell" style="height:auto; width:100%">
          <FlexContainer id="po_rsvp_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; gap:28px; padding:28px 30px">
            <Container id="po_rsvp_text_cell" style="height:auto; width:auto">
              <FlexContainer id="po_rsvp_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:10px">
                <Container id="po_rsvp_title_cell" style="height:auto; width:auto"><Text id="po_rsvp_title" props={content: "扫码锁定席位", tagName: "h3"} style="height:auto; width:auto"/></Container>
                <Container id="po_rsvp_desc_cell" style="height:auto; width:auto"><Text id="po_rsvp_desc" props={content: "本场限量 120 席，报名成功后凭电子票入场；如无法出席请提前 48 小时告知。", tagName: "p"} style="height:auto; width:auto"/></Container>
                <Container id="po_rsvp_contact_cell" style="height:auto; width:auto"><Text id="po_rsvp_contact" props={content: "垂询：021-5200-8888 · event@seeklicht.example.com", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_qr_cell" style="height:auto; width:auto; flex-shrink:0">
              <Container id="po_qr_pad" style="height:auto; width:auto; padding:13px">
                <Qrcode id="po_qr" props={value: "https://example.com/invitation/seeklicht-2026-autumn", color: "#1c3a2f", bgColor: "#ffffff"} style="height:148px; width:148px"/>
              </Container>
            </Container>
          </FlexContainer>
        </Container>

        <Container id="po_footer_cell" style="height:auto; width:100%; padding-top:6px">
          <Text id="po_footer" props={content: "拾光设计 · 与光同尘 2026（演示模板，品牌与信息均为虚构）", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <styles>
      # 墨绿礼服底 + 金色点缀
      @po_root = {
        background: linear-gradient(170deg, #0d1f1a 0%, #123128 55%, #0a1a16 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -160px;
          width: 680px;
          height: 680px;
          border-radius: 50%;
          margin-left: -340px;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.16), rgba(212, 175, 55, 0.04) 52%, transparent 74%);
        }
        :scope::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -220px;
          width: 760px;
          height: 620px;
          border-radius: 50%;
          margin-left: -380px;
          background: radial-gradient(closest-side, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.03) 55%, transparent 76%);
        }
      }
      @po_kicker = { color: #d4af37; font-size: 17px; font-weight: 700; letter-spacing: 8px; }
      @po_brand_icon = { color: #d4af37; font-size: 20px; }
      @po_brand_text = { color: #d9e7df; font-size: 16px; font-weight: 600; letter-spacing: 3px; }
      @po_title = {
        font-size: 96px;
        font-weight: 900;
        letter-spacing: 18px;
        line-height: 1.2;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #f5e6b8 0%, #d4af37 48%, #f5e6b8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 18px 48px rgba(212, 175, 55, 0.3);
        }
      }
      @po_subtitle = { color: #9db8ab; font-size: 22px; letter-spacing: 6px; text-align: center; }
      @po_time_icon = { color: #d4af37; font-size: 17px; }
      @po_place_icon = { color: #d4af37; font-size: 17px; }
      @po_dress_icon = { color: #d4af37; font-size: 17px; }
      @po_time_text = { color: #cfe0d6; font-size: 16px; }
      @po_place_text = { color: #cfe0d6; font-size: 16px; }
      @po_dress_text = { color: #cfe0d6; font-size: 16px; }
      @po_divider_cell = { background: linear-gradient(90deg, rgba(212, 175, 55, 0) 0%, #d4af37 50%, rgba(212, 175, 55, 0) 100%); }
      @po_agenda_title = { color: #d4af37; font-size: 18px; font-weight: 700; letter-spacing: 4px; text-align: center; }
      @po_agenda_1_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_2_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_3_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_1_text = { color: #cfe0d6; font-size: 16px; }
      @po_agenda_2_text = { color: #cfe0d6; font-size: 16px; }
      @po_agenda_3_text = { color: #cfe0d6; font-size: 16px; }
      @po_rsvp_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 20px; box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(245, 230, 184, 0.18); :scope { border: 1px solid rgba(212, 175, 55, 0.38); } }
      @po_qr_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 14px 34px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @po_rsvp_title = { color: #f5e6b8; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @po_rsvp_desc = { color: #9db8ab; font-size: 13px; line-height: 1.9; }
      @po_rsvp_contact = { color: #d4af37; font-size: 12px; letter-spacing: 0.5px; }
      @po_footer = { color: #5f7a6d; font-size: 12px; letter-spacing: 1px; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：A4 与 9:16 双成立（纵向居中 + 大安全边距）；标题 `letter-spacing` + 金色渐变（礼服感）；报名区含 **qrcode 组件**（真实可扫演示链接）；导出 PNG（转发）或 PDF（打印）两用。
>
> 质感升级（2026-09-14，visual-composition 规则 16）——① **画幅根全幅修复**：根节点「渐变 + padding」同节点曾使整幅墨绿底内缩、四周漏页面白底；配方 = 根零 padding 持渐变 + `po_col` 收敛为 `max-width:992px` + `padding:88px 96px`（内容宽度不变，仍是 800）；② **金色双弧装饰层**：SVG 大/小双弧光环（渐变描边）+ 10 枚四角星徽（大件带辉光）+ 14 粒金尘 + 底部柔光晕，`xMidYMid slice` 全幅锚定；③ 根补第二枚柔光斑（下缘）+ 顶端光晕多段衰减；④ 标题金色渐变 + 柔光晕（text-shadow）；⑤ 报名卡玻璃化（渐变白膜 + 金边 + 内高光 + 深投影）；⑥ 二维码白卡化（圆角 + 投影 + 内衬 padding——涂装零 padding 配方）。
