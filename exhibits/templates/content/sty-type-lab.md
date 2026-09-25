# 实验字体风 — 「字在」字体设计工作室

> 模板定位（内容 / 品牌 tab · 风格系列）：实验字体（Typographic Experiment）——**文字即图形**：超大字重对比、描边字 / 叠压字 / 极端字距（-8px 到 +30px）、字族展示卡（同字不同形）、字符集平铺带；黑白为主 + 一处荧光黄绿点睛。
> 场景需求：给一间虚构的字体设计工作室做字体发布页：首屏三层叠压实验标题（实心 / 描边 / 反白）+ 字体名与版本；三套字族展示（黑体 / 宋体 / 等宽，用大字展示各自性格）；字符集平铺带；授权两档；页脚。零位图、零 API、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="字在 — 字体设计工作室">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="tl_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 导航 ─── -->
      <Container id="tl_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="tl_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:18px 48px">
          <Container id="tl_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0"><Text id="tl_nav_brand" props={content: "字在 ZIZAI®", tagName: "span"}/></Container>
          <Container id="tl_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="tl_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="tl_nav_i1" props={itemLabel: "字族", itemTarget: "tl_family_region"} style="height:auto; width:auto"/>
              <Container id="tl_nav_i2" props={itemLabel: "字符集", itemTarget: "tl_glyph_region"} style="height:auto; width:auto"/>
              <Container id="tl_nav_i3" props={itemLabel: "授权", itemTarget: "tl_license_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="tl_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="tl_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="tl_nav_cta_txt" props={content: "下载试用", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（三层叠压实验标题） ─── -->
      <Container id="tl_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Animate id="tl_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:64px 48px 80px; gap:0px; align-items:flex-start">
          <Container id="tl_hero_kicker_cell" style="height:auto; width:auto"><Text id="tl_hero_kicker" props={content: "字体发布 · ZIZAI GROTESK v3 / 2026", tagName: "span"}/></Container>
          <Container id="tl_hero_type1_cell" style="height:auto; width:auto; padding-top:26px"><Text id="tl_hero_type1" props={content: "字重即态度", tagName: "h1"}/></Container>
          <Container id="tl_hero_type2_cell" style="height:auto; width:auto; padding-left:220px"><Text id="tl_hero_type2" props={content: "字距即呼吸", tagName: "h1"}/></Container>
          <Container id="tl_hero_type3_cell" style="height:auto; width:auto; padding-top:18px">
            <Container id="tl_hero_reverse" style="height:auto; width:auto; padding:6px 26px 12px">
              <Text id="tl_hero_type3" props={content: "笔画即结构", tagName: "h1"}/>
            </Container>
          </Container>
          <Container id="tl_hero_meta_cell" style="height:auto; width:100%; padding-top:40px">
            <FlexContainer id="tl_hero_meta_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:flex-end; gap:32px">
              <Container id="tl_hero_meta_l_cell" style="height:auto; width:100%; max-width:560px"><Text id="tl_hero_meta_l" props={content: "三套字族、9 个字重、覆盖 GB18030 全部汉字与拉丁扩展——「字在」的第一款自研字库，历时 26 个月。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="tl_hero_meta_r_cell" style="height:auto; width:auto"><Text id="tl_hero_meta_r" props={content: "↓ 往下看字形", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 字族展示 ─── -->
      <Container id="tl_family_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_family_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 88px; gap:30px">
          <Container id="tl_family_head_cell" style="height:auto; width:auto"><Text id="tl_family_head" props={content: "字族 · FAMILIES", tagName: "span"}/></Container>
          <Container id="tl_fam1_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam1_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam1_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam1_title_cell" style="height:auto; width:auto"><Text id="tl_fam1_title" props={content: "自在黑 Grotesk", tagName: "h4"}/></Container>
                  <Container id="tl_fam1_note_cell" style="height:auto; width:auto"><Text id="tl_fam1_note" props={content: "标题与界面 · 6 字重", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam1_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam1_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam1_big_cell" style="height:auto; width:auto"><Text id="tl_fam1_big" props={content: "永和九年", tagName: "h2"}/></Container>
                  <Container id="tl_fam1_small_cell" style="height:auto; width:auto"><Text id="tl_fam1_small" props={content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="tl_fam2_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam2_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam2_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam2_title_cell" style="height:auto; width:auto"><Text id="tl_fam2_title" props={content: "自在宋 Song", tagName: "h4"}/></Container>
                  <Container id="tl_fam2_note_cell" style="height:auto; width:auto"><Text id="tl_fam2_note" props={content: "正文与书籍 · 3 字重", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam2_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam2_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam2_big_cell" style="height:auto; width:auto"><Text id="tl_fam2_big" props={content: "永和九年", tagName: "h2"}/></Container>
                  <Container id="tl_fam2_small_cell" style="height:auto; width:auto"><Text id="tl_fam2_small" props={content: "衬线起笔收锋，横细竖粗；小字号下仍保留剑锋细节。", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="tl_fam3_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_fam3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:40px; padding:34px 32px">
              <Container id="tl_fam3_name_cell" style="height:auto; width:260px; flex-shrink:0">
                <FlexContainer id="tl_fam3_name_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                  <Container id="tl_fam3_title_cell" style="height:auto; width:auto"><Text id="tl_fam3_title" props={content: "自在等宽 Mono", tagName: "h4"}/></Container>
                  <Container id="tl_fam3_note_cell" style="height:auto; width:auto"><Text id="tl_fam3_note" props={content: "代码与数据 · 4 字重", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tl_fam3_spec_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_fam3_spec_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                  <Container id="tl_fam3_big_cell" style="height:auto; width:auto"><Text id="tl_fam3_big" props={content: "SELECT * FROM t WHERE id = 1;", tagName: "h2"}/></Container>
                  <Container id="tl_fam3_small_cell" style="height:auto; width:auto"><Text id="tl_fam3_small" props={content: "等宽 + 高辨识度：0110 / O0Il1 一眼可分。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 字符集平铺 ─── -->
      <Container id="tl_glyph_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_glyph_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 88px; gap:26px">
          <Container id="tl_glyph_head_cell" style="height:auto; width:100%">
            <FlexContainer id="tl_glyph_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:baseline; gap:32px">
              <Container id="tl_glyph_head_l_cell" style="height:auto; width:auto"><Text id="tl_glyph_head_l" props={content: "字符集 · GLYPH SET", tagName: "span"}/></Container>
              <Container id="tl_glyph_head_r_cell" style="height:auto; width:auto"><Text id="tl_glyph_head_r" props={content: "27,533 个字形 · 含全部标点与符号", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tl_glyph_band_cell" style="height:auto; width:100%; padding:30px 28px">
            <FlexContainer id="tl_glyph_band_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start">
              <Container id="tl_g1_cell" style="height:auto; width:auto"><Text id="tl_g1" props={content: "永 和 九 年 岁 在 癸 丑 暮 春 之 初 会 于 会 稽 山 阴 之 兰 亭", tagName: "h3"}/></Container>
              <Container id="tl_g2_cell" style="height:auto; width:auto"><Text id="tl_g2" props={content: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr", tagName: "h3"}/></Container>
              <Container id="tl_g3_cell" style="height:auto; width:auto"><Text id="tl_g3" props={content: "0123456789 ← ↑ → ↓ $ € ¥ % ‰ & @ # ¶ § ° ± × ÷", tagName: "h3"}/></Container>
              <Container id="tl_g4_cell" style="height:auto; width:auto"><Text id="tl_g4" props={content: "。，、；：？！「」『』（）—— …… 《》【】·～", tagName: "h3"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 授权 ─── -->
      <Container id="tl_license_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tl_license_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 104px; gap:34px">
          <Container id="tl_license_title_cell" style="height:auto; width:auto"><Text id="tl_license_title" props={content: "两种授权，都不贵", tagName: "h2"}/></Container>
          <Container id="tl_license_cards_cell" style="height:auto; width:100%; max-width:880px">
            <FlexContainer id="tl_license_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="tl_l1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_l1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="tl_l1_name_cell" style="height:auto; width:auto"><Text id="tl_l1_name" props={content: "个人版", tagName: "h4"}/></Container>
                  <Container id="tl_l1_price_cell" style="height:auto; width:auto"><Text id="tl_l1_price" props={content: "免费", tagName: "h3"}/></Container>
                  <Container id="tl_l1_desc_cell" style="height:auto; width:100%"><Text id="tl_l1_desc" props={content: "非商用项目、个人作品与学习使用；可嵌入网页与 App。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tl_l1_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="tl_l1_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="tl_l1_cta_txt" props={content: "免费下载", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tl_l2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tl_l2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:32px 30px">
                  <Container id="tl_l2_name_cell" style="height:auto; width:auto"><Text id="tl_l2_name" props={content: "商用版", tagName: "h4"}/></Container>
                  <Container id="tl_l2_price_cell" style="height:auto; width:auto"><Text id="tl_l2_price" props={content: "¥ 1,800 / 年起", tagName: "h3"}/></Container>
                  <Container id="tl_l2_desc_cell" style="height:auto; width:100%"><Text id="tl_l2_desc" props={content: "品牌、出版与产品内置；含源工程（可变字体版）与技术支持。", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tl_l2_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="tl_l2_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="tl_l2_cta_txt" props={content: "获取商用授权", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 页脚 ─── -->
      <Container id="tl_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="tl_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:26px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="tl_footer_left_cell" style="height:auto; width:auto"><Text id="tl_footer_left" props={content: "© 2026 字在设计 · 字库与数据均为虚构演示", tagName: "span"}/></Container>
          <Container id="tl_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="tl_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="tl_footer_f1_cell" style="height:auto; width:auto"><Text id="tl_footer_f1" props={content: "更新日志", tagName: "span"}/></Container>
              <Container id="tl_footer_f2_cell" style="height:auto; width:auto"><Text id="tl_footer_f2" props={content: "联系我们", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 首屏「向下滚动」提示 → 页内定位到下一区块（nav.scroll 能力，落点避让吸顶导航）
      @tl_hero_meta_r = { events: { scrollToGlyph: { trigger: "onClick", action: nav.scroll({target: "tl_glyph_region"}) } } };
    </script>

    <styles>
      # ── 页面基调（近黑纸） ──
      @tl_root = { background: #111111; }

      # ── 导航 ──
      @tl_nav_region = { background: rgba(17, 17, 17, 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(245, 245, 240, 0.14); }
      @tl_nav_brand = { color: #F5F5F0; font-size: 17px; font-weight: 900; letter-spacing: 2.4px; }
      @tl_nav_menu = {
        :scope { --anchor-item-color: rgba(245, 245, 240, 0.6); --anchor-item-font-size: 13.5px; --anchor-item-font-weight: 600; --anchor-item-padding: 7px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #D4FF3F; --anchor-item-active-bg: transparent; --anchor-gap: 40px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { letter-spacing: 2.6px; transition: color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { color: #D4FF3F; }
        :scope [data-rb-anchor-link][aria-current] { border-bottom: 2px solid #D4FF3F; }
      }
      @tl_nav_cta = { background: #D4FF3F; transition: transform 0.25s ease; :scope:hover { transform: translateY(-1px); } }
      @tl_nav_cta_txt = { color: #111111; font-size: 13px; font-weight: 800; letter-spacing: 1.6px; }

      # ── 首屏（三层叠压实验标题） ──
      @tl_hero_kicker = { color: rgba(245, 245, 240, 0.45); font-size: 12px; font-weight: 600; letter-spacing: 5px; }
      @tl_hero_type1 = { color: #F5F5F0; font-size: 132px; font-weight: 900; letter-spacing: -4px; line-height: 1.0; }
      @tl_hero_type2 = { color: transparent; font-size: 132px; font-weight: 900; letter-spacing: 22px; line-height: 1.0; :scope { -webkit-text-stroke: 2.5px #F5F5F0; } }
      @tl_hero_reverse = { background: #D4FF3F; }
      @tl_hero_type3 = { color: #111111; font-size: 132px; font-weight: 900; letter-spacing: -4px; line-height: 1.0; }
      @tl_hero_meta_l = { color: rgba(245, 245, 240, 0.6); font-size: 14px; line-height: 2.05; }
      @tl_hero_meta_r = { cursor: pointer; color: #D4FF3F; font-size: 13px; font-weight: 700; letter-spacing: 2px; }

      # ── 字族 ──
      @tl_family_head = { color: #D4FF3F; font-size: 12px; font-weight: 700; letter-spacing: 5px; }
      @tl_fam1_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam2_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam3_row = { border-top: 1px solid rgba(245, 245, 240, 0.18); }
      @tl_fam1_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @tl_fam2_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @tl_fam3_title = { color: #F5F5F0; font-size: 19px; font-weight: 800; letter-spacing: 1px; }
      @tl_fam1_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 1.6px; }
      @tl_fam2_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 1.6px; }
      @tl_fam3_note = { color: rgba(245, 245, 240, 0.42); font-size: 12px; letter-spacing: 1.6px; }
      @tl_fam1_big = { color: #F5F5F0; font-size: 56px; font-weight: 900; letter-spacing: 10px; }
      @tl_fam2_big = { color: #F5F5F0; font-size: 56px; font-weight: 400; letter-spacing: 10px; }
      @tl_fam3_big = { color: #F5F5F0; font-size: 40px; font-weight: 500; letter-spacing: 1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tl_fam1_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; letter-spacing: 1.4px; }
      @tl_fam2_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; letter-spacing: 1.4px; }
      @tl_fam3_small = { color: rgba(245, 245, 240, 0.5); font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 字符集 ──
      @tl_glyph_head_l = { color: #D4FF3F; font-size: 12px; font-weight: 700; letter-spacing: 5px; }
      @tl_glyph_head_r = { color: rgba(245, 245, 240, 0.45); font-size: 12px; letter-spacing: 2px; }
      @tl_glyph_band_cell = { background: #171717; border: 1px solid rgba(245, 245, 240, 0.14); }
      @tl_g1 = { color: #F5F5F0; font-size: 30px; font-weight: 500; letter-spacing: 8px; line-height: 1.7; }
      @tl_g2 = { color: rgba(245, 245, 240, 0.85); font-size: 26px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }
      @tl_g3 = { color: rgba(245, 245, 240, 0.7); font-size: 24px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }
      @tl_g4 = { color: rgba(245, 245, 240, 0.7); font-size: 24px; font-weight: 400; letter-spacing: 6px; line-height: 1.7; }

      # ── 授权 ──
      @tl_license_title = { color: #F5F5F0; font-size: 44px; font-weight: 900; letter-spacing: -1.5px; }
      @tl_l1_col = { border: 1px solid rgba(245, 245, 240, 0.22); }
      @tl_l2_col = { background: #D4FF3F; }
      @tl_l1_name = { color: #F5F5F0; font-size: 19px; font-weight: 800; }
      @tl_l2_name = { color: #111111; font-size: 19px; font-weight: 800; }
      @tl_l1_price = { color: #F5F5F0; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @tl_l2_price = { color: #111111; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @tl_l1_desc = { color: rgba(245, 245, 240, 0.55); font-size: 13.5px; line-height: 1.9; }
      @tl_l2_desc = { color: rgba(17, 17, 17, 0.75); font-size: 13.5px; line-height: 1.9; }
      @tl_l1_cta = { border: 1px solid rgba(245, 245, 240, 0.4); transition: background 0.25s ease; :scope:hover { background: rgba(245, 245, 240, 0.1); } }
      @tl_l1_cta_txt = { color: #F5F5F0; font-size: 14px; font-weight: 700; letter-spacing: 1.4px; }
      @tl_l2_cta = { background: #111111; transition: transform 0.25s ease; :scope:hover { transform: translateY(-1px); } }
      @tl_l2_cta_txt = { color: #D4FF3F; font-size: 14px; font-weight: 700; letter-spacing: 1.4px; }

      # ── 页脚 ──
      @tl_footer_row = { border-top: 1px solid rgba(245, 245, 240, 0.14); }
      @tl_footer_left = { color: rgba(245, 245, 240, 0.35); font-size: 12px; letter-spacing: 0.8px; }
      @tl_footer_f1 = { color: rgba(245, 245, 240, 0.55); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #D4FF3F; } }
      @tl_footer_f2 = { color: rgba(245, 245, 240, 0.55); font-size: 12.5px; :scope { transition: color 0.2s ease; } :scope:hover { color: #D4FF3F; } }
    </styles>
  </Page>
</App>
```
