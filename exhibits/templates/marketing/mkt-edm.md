# EDM 邮件模板（导出型） — 「晨光咖啡」新品豆发布邮件

> 模板定位（营销 / 增长 tab · 导出驱动）：EDM 邮件——**单列邮件安全结构**（600px 内容宽 / 简单块 / 居中），产出走导出面板的 **HTML 快照**（计算样式内联，best-effort）与图片版双轨。
> 场景需求：给虚构咖啡品牌做新品豆发布邮件：顶部品牌栏（logo + 查看网页版），渐变 Hero（新品标签 + 大标题 + 副题），正文块（卷首语 + 三条风味要点 + 满宽 CTA 按钮），信息条（上市时间 / 门店），页脚（退订 / 隐私 / 版权）。浅暖色系、单列自上而下。

```lang
<App dsl-version="0.3" name="晨光咖啡 · 新品发布邮件">
  <Page id="edm" name="新品邮件" route="/">
    <FlexContainer id="ed_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; padding:44px 24px 56px">
      <FlexContainer id="ed_shell" props={direction: "column"} style="height:auto; width:100%; max-width:600px; flex-shrink:0; align-items:stretch">

        <!-- ─── 品牌栏 ─── -->
        <Container id="ed_topbar" style="height:auto; width:100%">
          <FlexContainer id="ed_topbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:22px 30px">
            <Container id="ed_brand_cell" style="height:auto; width:auto">
              <FlexContainer id="ed_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:9px">
                <Container id="ed_brand_icon_cell" style="height:auto; width:auto"><Icon id="ed_brand_icon" props={iconName: "Coffee", iconSource: "lucide"}/></Container>
                <Container id="ed_brand_text_cell" style="height:auto; width:auto"><Text id="ed_brand_text" props={content: "晨光咖啡 Morning Brew", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_webview_cell" style="height:auto; width:auto"><Text id="ed_webview" props={content: "在浏览器中查看", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>

        <!-- ─── Hero ─── -->
        <Container id="ed_hero" style="height:auto; width:100%; position:relative; overflow:hidden">
          <Container id="ed_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="ed_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 260' fill='none' preserveAspectRatio='xMidYMax slice'><defs><linearGradient id='edArc' x1='60' y1='230' x2='540' y2='230' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#F59E0B' stop-opacity='0'/><stop offset='0.5' stop-color='#F59E0B' stop-opacity='0.55'/><stop offset='1' stop-color='#FB923C' stop-opacity='0'/></linearGradient><radialGradient id='edSun' cx='0.5' cy='1' r='0.9'><stop offset='0' stop-color='#FBBF24' stop-opacity='0.34'/><stop offset='0.55' stop-color='#FBBF24' stop-opacity='0.1'/><stop offset='1' stop-color='#FBBF24' stop-opacity='0'/></radialGradient><filter id='edSoft' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='12'/></filter></defs><circle cx='300' cy='330' r='248' fill='url(#edSun)'/><path d='M52,330 A248,248 0 0 1 548,330' stroke='url(#edArc)' stroke-width='2.5'/><circle cx='128' cy='96' r='18' fill='#FBBF24' opacity='0.25' filter='url(#edSoft)'/><circle cx='470' cy='58' r='14' fill='#F97316' opacity='0.22' filter='url(#edSoft)'/><circle cx='210' cy='52' r='9' fill='#FBBF24' opacity='0.3' filter='url(#edSoft)'/><circle cx='392' cy='120' r='7' fill='#F59E0B' opacity='0.28' filter='url(#edSoft)'/><circle cx='536' cy='160' r='11' fill='#FBBF24' opacity='0.22' filter='url(#edSoft)'/></svg>", ariaLabel: "晨光日弧与暖金光斑装饰层"} style="height:100%; width:100%"/>
          </Container>
          <FlexContainer id="ed_hero_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:46px 30px 42px; position:relative">
            <Container id="ed_hero_tag_cell" style="height:auto; width:auto">
              <Tag id="ed_hero_tag" props={text: "新品上市 · 云南日晒", color: "orange"}/>
            </Container>
            <Container id="ed_hero_title_cell" style="height:auto; width:100%">
              <Text id="ed_hero_title" props={content: "把秋天，烘进豆子里", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ed_hero_sub_cell" style="height:auto; width:100%">
              <Text id="ed_hero_sub" props={content: "2026 产季首批「高原蜜处理」，只烘三轮，售完即止。", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 正文 ─── -->
        <Container id="ed_body" style="height:auto; width:100%; padding:34px 30px 8px">
          <FlexContainer id="ed_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:22px">
            <Container id="ed_intro_cell" style="height:auto; width:100%">
              <Text id="ed_intro" props={content: "老朋友：这一季的雨水刚刚好。云南庄园的卡蒂姆在日晒床上躺了 21 天，杯测时出现了久违的白桃与桂花尾韵——我们决定把这份甜，原样交到你手上。", tagName: "p"} style="height:auto; width:100%"/>
            </Container>

            <Container id="ed_point_1_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_1_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_1_icon" props={iconName: "Leaf", iconSource: "lucide"}/></Container>
                <Container id="ed_point_1_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_1_title_cell" style="height:auto; width:auto"><Text id="ed_point_1_title" props={content: "白桃与桂花", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_1_desc_cell" style="height:auto; width:auto"><Text id="ed_point_1_desc" props={content: "蜜处理带来干净的甜感，尾韵像刚剥开的水果。", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="ed_point_2_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_2_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_2_icon" props={iconName: "Sun", iconSource: "lucide"}/></Container>
                <Container id="ed_point_2_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_2_title_cell" style="height:auto; width:auto"><Text id="ed_point_2_title" props={content: "中浅烘焙", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_2_desc_cell" style="height:auto; width:auto"><Text id="ed_point_2_desc" props={content: "手冲和意式都友好，加奶也压得住香气。", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="ed_point_3_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_3_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_3_icon" props={iconName: "Clock", iconSource: "lucide"}/></Container>
                <Container id="ed_point_3_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_3_title_cell" style="height:auto; width:auto"><Text id="ed_point_3_title" props={content: "烘焙后 48h 内发出", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_3_desc_cell" style="height:auto; width:auto"><Text id="ed_point_3_desc" props={content: "日期贴在袋底，到手就是最佳赏味期。", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <Container id="ed_cta_cell" style="height:auto; width:100%; padding-top:8px">
              <Button id="ed_cta_btn" props={content: "立即尝鲜 · ¥88 / 200g", variant: "primary"} style="height:auto; width:100%; padding:14px 0px"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 信息条 ─── -->
        <Container id="ed_info" style="height:auto; width:100%">
          <FlexContainer id="ed_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:26px 30px 30px">
            <Container id="ed_info_time_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_info_time_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                <Container id="ed_info_time_icon_cell" style="height:auto; width:auto"><Icon id="ed_info_time_icon" props={iconName: "CalendarDays", iconSource: "lucide"}/></Container>
                <Container id="ed_info_time_text_cell" style="height:auto; width:auto"><Text id="ed_info_time_text" props={content: "9 月 20 日 10:00 全渠道开售（会员提前 24 小时）", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_info_store_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_info_store_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                <Container id="ed_info_store_icon_cell" style="height:auto; width:auto"><Icon id="ed_info_store_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                <Container id="ed_info_store_text_cell" style="height:auto; width:auto"><Text id="ed_info_store_text" props={content: "全国 36 家门店同步上架 · 支持门店自提", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── 页脚 ─── -->
        <Container id="ed_footer" style="height:auto; width:100%">
          <FlexContainer id="ed_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:12px; padding:26px 30px 30px">
            <Container id="ed_footer_links_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_footer_links_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:center; gap:24px">
                <Container id="ed_footer_unsub_cell" style="height:auto; width:auto"><Link id="ed_footer_unsub" props={content: "退订邮件", to: "https://example.com/unsubscribe", target: "_blank"}/></Container>
                <Container id="ed_footer_privacy_cell" style="height:auto; width:auto"><Link id="ed_footer_privacy" props={content: "隐私政策", to: "https://example.com/legal/privacy", target: "_blank"}/></Container>
                <Container id="ed_footer_contact_cell" style="height:auto; width:auto"><Link id="ed_footer_contact" props={content: "联系客服", to: "https://example.com/contact", target: "_blank"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_footer_copy_cell" style="height:auto; width:100%">
              <Text id="ed_footer_copy" props={content: "© 2026 晨光咖啡有限公司 · 本邮件为演示模板（品牌与数据均为虚构）", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      @ed_cta_btn = {
        events: { orderNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已跳转到新品购买页（演示）"}) } }
      };
    </script>

    <styles>
      # 0. 邮件容器（画布浅底 + 单列白卡）
      @ed_root = { background: #f4f1ec; }
      @ed_shell = { background: #ffffff; border-radius: 18px; box-shadow: 0 24px 56px rgba(87, 60, 35, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { overflow: hidden; } }
      @ed_topbar = { background: #fffaf3; :scope { border-bottom: 1px solid #f3e8db; } }
      @ed_brand_icon = { color: #b45309; font-size: 22px; }
      @ed_brand_text = { color: #78350f; font-size: 16px; font-weight: 800; letter-spacing: 0.3px; }
      @ed_webview = { color: #a16207; font-size: 12px; cursor: pointer; }

      # 1. Hero（暖调渐变）
      @ed_hero = {
        background: linear-gradient(150deg, #fff7ed 0%, #ffedd5 55%, #fed7aa 100%);
        :scope::before {
          content: '';
          position: absolute;
          right: -60px;
          top: -70px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(251, 146, 60, 0.28), transparent 72%);
        }
      }
      @ed_hero_tag = { background-color: #ffedd5; color: #c2410c; font-size: 12px; font-weight: 700; border-radius: 999px; letter-spacing: 0.5px; }
      @ed_hero_title = { font-size: 40px; font-weight: 900; letter-spacing: -1.2px; line-height: 1.2; :scope { background-image: linear-gradient(120deg, #431407 0%, #7c2d12 38%, #c2410c 72%, #ea580c 100%); -webkit-background-clip: text; background-clip: text; color: transparent; } }
      @ed_hero_sub = { color: #7c2d12; font-size: 15px; line-height: 1.8; }

      # 2. 正文
      @ed_point_1_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_2_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_3_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_1_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      @ed_point_2_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      @ed_point_3_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      @ed_intro = { color: #44403c; font-size: 15px; line-height: 2; }
      @ed_point_1_icon = { color: #d97706; font-size: 20px; }
      @ed_point_2_icon = { color: #d97706; font-size: 20px; }
      @ed_point_3_icon = { color: #d97706; font-size: 20px; }
      @ed_point_1_title = { color: #292524; font-size: 14px; font-weight: 700; }
      @ed_point_2_title = { color: #292524; font-size: 14px; font-weight: 700; }
      @ed_point_3_title = { color: #292524; font-size: 14px; font-weight: 700; }
      @ed_point_1_desc = { color: #78716c; font-size: 13px; }
      @ed_point_2_desc = { color: #78716c; font-size: 13px; }
      @ed_point_3_desc = { color: #78716c; font-size: 13px; }
      @ed_cta_btn = {
        color: #ffffff;
        background: linear-gradient(120deg, #b45309 0%, #ea580c 120%);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(180, 83, 9, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.35);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 12px 26px rgba(180, 83, 9, 0.32); }
      }

      # 3. 信息条与页脚
      @ed_info = { background: #fffaf3; :scope { border-top: 1px solid #f3e8db; } }
      @ed_info_time_icon = { color: #a16207; font-size: 16px; }
      @ed_info_store_icon = { color: #a16207; font-size: 16px; }
      @ed_info_time_text = { color: #78350f; font-size: 13px; font-weight: 600; }
      @ed_info_store_text = { color: #78350f; font-size: 13px; font-weight: 600; }
      @ed_footer = { background: #f4f1ec; }
      @ed_footer_unsub = { color: #a8a29e; font-size: 12px; :scope { text-decoration: none; } :scope:hover { color: #78716c; } }
      @ed_footer_privacy = { color: #a8a29e; font-size: 12px; :scope { text-decoration: none; } :scope:hover { color: #78716c; } }
      @ed_footer_contact = { color: #a8a29e; font-size: 12px; :scope { text-decoration: none; } :scope:hover { color: #78716c; } }
      @ed_footer_copy = { color: #a8a29e; font-size: 11px; line-height: 1.7; text-align: center; }
    </styles>
  </Page>
</App>
```

> 制作要点：**邮件安全结构**——单列 600px、简单块（无多列复杂布局）、CTA 满宽；导出走 **HTML 快照**（计算样式内联，Outlook 等深度兼容见 §7 台账）与「整页图片」双轨；页脚含退订/隐私（邮件合规要素）。
>
> 质感升级（2026-09-14，visual-composition 规则 16）——① **涂装/留白分层修复**：topbar / hero / info / footer 四条带原本「涂装 + padding」同节点（带底色与分隔线内缩留缝），内边距全部下沉内层（row/col）；② **hero 晨光装饰层**：SVG 日弧（渐变描边）+ 地平光晕（radial 多段衰减）+ 暖金柔焦斑，`xMidYMax slice` 底对齐；③ **风味要点柔卡化**：三行要点 → 柔卡（描边 + 浅暖底）+ 图标瓦片（渐变琥珀底）；④ **渐变标题字**（深咖啡 → 暖橙 background-clip）；⑤ CTA 内高光 + 静息外发光；壳卡内高光 + 阴影加深。
