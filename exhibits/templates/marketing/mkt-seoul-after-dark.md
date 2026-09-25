# 复古丝网印海报 — 「首尔夜市 SEOUL AFTER DARK：街头小吃节」

> 模板定位（营销 / 增长 tab · 图文叠印）：**单张底图 + 全排版层**的海报复刻件——底图素材铺满画板（辣炒年糕插画），标题 / 徽章 / 菜单牌 / 信息条全部由平台原子组件与 scoped-css 叠印其上（`assets/images/seoul-after-dark-base.png`，建应用自动播种）。验证「一个插画素材 + 平台能力 = 设计师成稿」的低代码表达力。
> 场景需求：复刻一张虚构的首尔夜市街头小吃节海报（628×940 竖版，2:3）——顶部刊头信息条与裁切标记、超粗压题三行大标题（SEOUL / AFTER / DARK，黑描边 + 品红错位色影）、旋转的「EXTRA 매운맛 SPICY」圆形徽章、巨型韩文点缀（먹토이 / 야시장）、红底菜单牌（9 道小吃 + 星号分隔）、黄底三栏信息条（时间 / 地点 / 票务）与胶片孔页脚。零 API、零动效（印刷品复刻纪律）。

```lang
<App dsl-version="0.3" name="首尔夜市 SEOUL AFTER DARK 街头小吃节海报">
  <Page id="poster" name="海报" route="/">
    <FlexContainer id="sn_stage" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; padding:40px 24px; position:relative">

      <Container id="sn_poster" style="width:628px; height:940px; flex-shrink:0; position:relative; overflow:hidden">

        <!-- ─── 0. 底图（唯一素材：插画铺满画板） ─── -->
        <Container id="sn_base_cell" style="position:absolute; left:0px; top:0px; width:628px; height:940px; z-index:0">
          <Image id="sn_base" props={src: "assets/images/seoul-after-dark-base.png", alt: "首尔夜市：辣炒年糕插画底图", objectFit: "cover", loading: "eager"} style="width:628px; height:940px"/>
        </Container>

        <!-- ─── 1. 右上韩文（먹토이） ─── -->
        <FlexContainer id="sn_kr_box" props={direction: "column"} style="position:absolute; left:420px; top:62px; width:210px; height:72px; align-items:center; justify-content:center; z-index:4">
          <Container id="sn_kr_cell" style="width:100%; height:auto">
            <Text id="sn_kr" props={content: "먹토이", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 2. 主标题（SEOUL / AFTER / DARK） ─── -->
        <FlexContainer id="sn_seoul_box" props={direction: "column"} style="position:absolute; left:26px; top:86px; width:372px; height:132px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_seoul_cell" style="width:100%; height:auto">
            <Text id="sn_seoul" props={content: "SEOUL", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="sn_after_box" props={direction: "column"} style="position:absolute; left:40px; top:198px; width:376px; height:112px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_after_cell" style="width:100%; height:auto">
            <Text id="sn_after" props={content: "AFTER", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="sn_dark_box" props={direction: "column"} style="position:absolute; left:8px; top:292px; width:460px; height:132px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_dark_cell" style="width:100%; height:auto">
            <Text id="sn_dark" props={content: "DARK", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 3. EXTRA SPICY 圆徽章（旋转叠压标题） ─── -->
        <FlexContainer id="sn_badge_box" props={direction: "column"} style="position:absolute; left:18px; top:176px; width:118px; height:118px; align-items:center; justify-content:center; z-index:5">
          <Container id="sn_badge_l1_cell" style="width:100%; height:auto">
            <Text id="sn_badge_l1" props={content: "EXTRA", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="sn_badge_l2_cell" style="width:100%; height:auto">
            <Text id="sn_badge_l2" props={content: "매운맛", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="sn_badge_l3_cell" style="width:100%; height:auto">
            <Text id="sn_badge_l3" props={content: "SPICY", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 4. 中部韩文（야시장，压在碗上） ─── -->
        <FlexContainer id="sn_ysj_box" props={direction: "column"} style="position:absolute; left:222px; top:464px; width:168px; height:88px; align-items:center; justify-content:center; z-index:4">
          <Container id="sn_ysj_cell" style="width:100%; height:auto">
            <Text id="sn_ysj" props={content: "야시장", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 5. 刊头信息条（裁切标记 / VOL / 系列 / 日期） ─── -->
        <FlexContainer id="sn_mark_box" props={direction: "column"} style="position:absolute; left:19px; top:12px; width:32px; height:30px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_mark_cell" style="width:32px; height:30px">
            <Svg id="sn_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30' fill='none'><path d='M1.5 29 L1.5 1.5 L30 1.5' stroke='#1A0D0B' stroke-width='3'/></svg>", ariaLabel: "左上裁切标记"} style="width:32px; height:30px"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="sn_vol_box" props={direction: "column"} style="position:absolute; left:48px; top:26px; width:66px; height:19px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_vol_cell" style="width:100%; height:auto">
            <Text id="sn_vol" props={content: "VOL. 01", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="sn_hm_box" props={direction: "column"} style="position:absolute; left:122px; top:26px; width:214px; height:19px; align-items:flex-start; justify-content:center; z-index:3">
          <Container id="sn_hm_cell" style="width:100%; height:auto">
            <Text id="sn_hm" props={content: "NIGHT MARKET SERIES // 야시장", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="sn_hr_box" props={direction: "column"} style="position:absolute; left:388px; top:29px; width:208px; height:26px; align-items:flex-end; justify-content:center; z-index:3">
          <Container id="sn_hr1_cell" style="width:100%; height:auto">
            <Text id="sn_hr1" props={content: "FRI · OCT 24", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
          <Container id="sn_hr2_cell" style="width:100%; height:auto">
            <Text id="sn_hr2" props={content: "8PM · 'TIL LATE", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <Container id="sn_hrdot" style="position:absolute; left:601px; top:34px; width:7px; height:7px; z-index:3"/>

        <!-- ─── 6. 黄条副题（A STREET FOOD FESTIVAL） ─── -->
        <FlexContainer id="sn_kick_box" props={direction: "column"} style="position:absolute; left:43px; top:53px; width:289px; height:19px; align-items:center; justify-content:center; z-index:6">
          <Container id="sn_kick_cell" style="width:100%; height:auto">
            <Text id="sn_kick" props={content: "A STREET FOOD FESTIVAL", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 7. 黑条标语（SKEWERS · SOJU · STEAM · SPICE） ─── -->
        <FlexContainer id="sn_strip_box" props={direction: "row"} style="position:absolute; left:45px; top:424px; width:356px; height:24px; align-items:center; justify-content:center; z-index:3; gap:10px">
          <Container id="sn_strip_dot_cell" style="width:auto; height:auto">
            <Text id="sn_strip_dot" props={content: "●", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="sn_strip_txt_cell" style="width:auto; height:auto">
            <Text id="sn_strip_txt" props={content: "SKEWERS · SOJU · STEAM · SPICE", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 8. 菜单牌（红底：ON THE GRILL + 9 道小吃） ─── -->
        <FlexContainer id="sn_menu_box" props={direction: "column"} style="position:absolute; left:34px; top:717px; width:560px; height:90px; align-items:stretch; justify-content:center; z-index:3; gap:3px">

          <FlexContainer id="sn_menu_r1" props={direction: "row"} style="width:100%; height:25px; align-items:center; justify-content:space-between; padding:0px 18px">
            <Container id="sn_r1_label_cell" style="width:auto; height:auto">
              <Text id="sn_r1_label" props={content: "ON THE GRILL", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r1_i1_cell" style="width:auto; height:auto">
              <Text id="sn_r1_i1" props={content: "TTEOBOKKI", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r1_s1_cell" style="width:auto; height:auto">
              <Text id="sn_r1_s1" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r1_i2_cell" style="width:auto; height:auto">
              <Text id="sn_r1_i2" props={content: "ODENG", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r1_s2_cell" style="width:auto; height:auto">
              <Text id="sn_r1_s2" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>

          <FlexContainer id="sn_menu_r2" props={direction: "row"} style="width:100%; height:25px; align-items:center; justify-content:space-between; padding:0px 18px">
            <Container id="sn_r2_i1_cell" style="width:auto; height:auto">
              <Text id="sn_r2_i1" props={content: "GIMBAP", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_s1_cell" style="width:auto; height:auto">
              <Text id="sn_r2_s1" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_i2_cell" style="width:auto; height:auto">
              <Text id="sn_r2_i2" props={content: "HOTTEOK", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_s2_cell" style="width:auto; height:auto">
              <Text id="sn_r2_s2" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_i3_cell" style="width:auto; height:auto">
              <Text id="sn_r2_i3" props={content: "SUNDAE", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_s3_cell" style="width:auto; height:auto">
              <Text id="sn_r2_s3" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_i4_cell" style="width:auto; height:auto">
              <Text id="sn_r2_i4" props={content: "BUNGEOFPANG", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r2_s4_cell" style="width:auto; height:auto">
              <Text id="sn_r2_s4" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>

          <FlexContainer id="sn_menu_r3" props={direction: "row"} style="width:100%; height:25px; align-items:center; justify-content:space-between; padding:0px 18px">
            <Container id="sn_r3_i1_cell" style="width:auto; height:auto">
              <Text id="sn_r3_i1" props={content: "DAKKOCHI", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r3_s1_cell" style="width:auto; height:auto">
              <Text id="sn_r3_s1" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r3_i2_cell" style="width:auto; height:auto">
              <Text id="sn_r3_i2" props={content: "MANDU", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r3_s2_cell" style="width:auto; height:auto">
              <Text id="sn_r3_s2" props={content: "★", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="sn_r3_i3_cell" style="width:auto; height:auto">
              <Text id="sn_r3_i3" props={content: "HOLY-MOLY SOJU", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>

        <!-- ─── 9. 黄底三栏信息条（时间 / 地点 / 票务） ─── -->
        <FlexContainer id="sn_info_box" props={direction: "row"} style="position:absolute; left:34px; top:816px; width:560px; height:70px; align-items:stretch; justify-content:space-between; z-index:3; padding:0px 16px">

          <FlexContainer id="sn_info_c1" props={direction: "column"} style="width:170px; height:auto; align-items:flex-start; justify-content:center">
            <Container id="sn_c1_lbl_cell" style="width:100%; height:auto">
              <Text id="sn_c1_lbl" props={content: "// WHEN", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c1_v1_cell" style="width:100%; height:auto">
              <Text id="sn_c1_v1" props={content: "FRI OCT 24", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c1_v2_cell" style="width:100%; height:auto">
              <Text id="sn_c1_v2" props={content: "8 PM — 2 AM", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>

          <Container id="sn_info_d1" style="width:2px; height:62px; flex-grow:0; align-self:center"/>

          <FlexContainer id="sn_info_c2" props={direction: "column"} style="width:170px; height:auto; align-items:center; justify-content:center">
            <Container id="sn_c2_lbl_cell" style="width:100%; height:auto">
              <Text id="sn_c2_lbl" props={content: "// WHERE", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c2_v1_cell" style="width:100%; height:auto">
              <Text id="sn_c2_v1" props={content: "PIER 32", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c2_v2_cell" style="width:100%; height:auto">
              <Text id="sn_c2_v2" props={content: "ALLEYWAY LOT", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>

          <Container id="sn_info_d2" style="width:2px; height:62px; flex-grow:0; align-self:center"/>

          <FlexContainer id="sn_info_c3" props={direction: "column"} style="width:170px; height:auto; align-items:flex-end; justify-content:center">
            <Container id="sn_c3_lbl_cell" style="width:100%; height:auto">
              <Text id="sn_c3_lbl" props={content: "// TICKETS", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c3_v1_cell" style="width:100%; height:auto">
              <Text id="sn_c3_v1" props={content: "$18 / DOOR", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
            <Container id="sn_c3_v2_cell" style="width:100%; height:auto">
              <Text id="sn_c3_v2" props={content: "$12 / ADV.", tagName: "span"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>

        <!-- ─── 10. 页脚胶片孔条（SEOUL.AFTER.DARK + 虚线 + 须读条款） ─── -->
        <FlexContainer id="sn_foot_box" props={direction: "row"} style="position:absolute; left:28px; top:896px; width:572px; height:26px; align-items:center; justify-content:space-between; z-index:3; padding:0px 12px">
          <Container id="sn_foot_l_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="sn_foot_l" props={content: "SEOUL.AFTER.DARK", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="sn_foot_dash_cell" style="width:190px; height:8px; flex-shrink:0">
            <Svg id="sn_foot_dash" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 204 8' preserveAspectRatio='none'><line x1='0' y1='4' x2='204' y2='4' stroke='#1A0D0B' stroke-width='7' stroke-dasharray='12 9'/></svg>", ariaLabel: "虚线分隔"} style="width:204px; height:8px"/>
          </Container>
          <Container id="sn_foot_r_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="sn_foot_r" props={content: "21+ · CASH+CARD · RAIN OR SHINE", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 0. 舞台与画板（深墨底衬 + 画面纸张边） ──
      @sn_stage = { background: #17110F; }
      @sn_poster = { background: #E8DCC6; box-shadow: 0px 26px 60px rgba(0, 0, 0, 0.55); }

      # ── 1. 色板主角（超粗压题：黑描边 + 品红错位色影） ──
      @sn_seoul = {
        color: #FFE600; font-family: Impact, 'Arial Black', sans-serif; font-size: 137px; font-weight: 900;
        letter-spacing: 3px; line-height: 1; text-align: center;
        :scope { -webkit-text-stroke: 4px #1A0D0B; text-shadow: 9px 9px 0px #FF2D8B; }
      }
      @sn_after = {
        color: #F4ECD6; font-family: Impact, 'Arial Black', sans-serif; font-size: 114px; font-weight: 900;
        letter-spacing: 18px; line-height: 1; text-align: center;
        :scope { -webkit-text-stroke: 4px #1A0D0B; text-shadow: 8px 8px 0px #FF2D8B; }
      }
      @sn_dark = {
        color: #FFE600; font-family: Impact, 'Arial Black', sans-serif; font-size: 137px; font-weight: 900;
        letter-spacing: 30px; line-height: 1; text-align: center;
        :scope { -webkit-text-stroke: 4px #1A0D0B; text-shadow: 10px 10px 0px #FF2D8B; }
      }

      # ── 2. 韩文点缀（红 / 品红 + 黄错位；旋角 = 手贴的错位感） ──
      @sn_kr_box = { transform: rotate(-6deg); }
      @sn_kr = { color: #FF2920; font-size: 48px; font-weight: 900; letter-spacing: 20px; line-height: 1; text-align: center; :scope { -webkit-text-stroke: 1.5px #1A0D0B; text-shadow: 7px 7px 0px #FFE600; } }
      @sn_ysj_box = { transform: rotate(-8deg); }
      @sn_ysj = { color: #FF2D8B; font-size: 57px; font-weight: 900; line-height: 1; text-align: center; :scope { -webkit-text-stroke: 2px #1A0D0B; text-shadow: 9px 9px 0px #FFE600; } }

      # ── 3. 圆徽章（品红底 + 粉色环 + 三行文字） ──
      @sn_badge_box = { background: #FF2D8B; border: 5px solid #FF7BB0; border-radius: 50%; box-shadow: 0px 6px 0px rgba(26, 13, 11, 0.55); transform: rotate(-18deg); }
      @sn_badge_l1 = { color: #FFE600; font-size: 15px; font-weight: 900; letter-spacing: 2.5px; line-height: 1.35; text-align: center; }
      @sn_badge_l2 = { color: #FFFFFF; font-size: 18px; font-weight: 800; letter-spacing: 1px; line-height: 1.2; text-align: center; }
      @sn_badge_l3 = { color: #FFFFFF; font-size: 20px; font-weight: 900; letter-spacing: 1.5px; line-height: 1.15; text-align: center; }

      # ── 4. 刊头信息条 ──
      @sn_mark = { opacity: 0.9; }
      @sn_vol_box = { background: #1A0D0B; box-shadow: 3px 3px 0px #FF2D8B; }
      @sn_vol = { color: #FFE600; font-size: 11px; font-weight: 900; letter-spacing: 1.4px; line-height: 1; text-align: center; }
      @sn_hm = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.8px; line-height: 1; text-align: left; }
      @sn_hr1 = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.4px; line-height: 1.35; text-align: right; }
      @sn_hr2 = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.4px; line-height: 1.35; text-align: right; }
      @sn_hrdot = { background: #FF2920; border-radius: 50%; }

      # ── 5. 黄条副题 ──
      @sn_kick_box = { background: #FFE600; border: 2px solid #1A0D0B; border-left: 6px solid #1A0D0B; box-shadow: 0px 4px 0px #FF2D8B; }
      @sn_kick = { color: #1A0D0B; font-size: 11px; font-weight: 900; letter-spacing: 2.6px; line-height: 1; text-align: center; }

      # ── 6. 黑条标语 ──
      @sn_strip_box = { background: #1A0D0B; border-right: 5px solid #FFE600; }
      @sn_strip_dot = { color: #FF2D8B; font-size: 9px; line-height: 1; }
      @sn_strip_txt = { color: #F4ECD6; font-size: 11.5px; font-weight: 800; letter-spacing: 2.2px; line-height: 1; }

      # ── 7. 菜单牌（红底 + 黑边；标签黑底紫框；黄/米白交替） ──
      @sn_menu_box = { background: #FF2920; border: 2px solid #1A0D0B; }
      @sn_r1_label_cell = { background: #1A0D0B; border: 2px solid #8B5CF6; padding: 5px 14px; }
      @sn_r1_label = { color: #FFE600; font-size: 14px; font-weight: 900; font-style: italic; letter-spacing: 1.6px; line-height: 1; }
      @sn_r1_i1 = { color: #F4ECD6; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r1_i2 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r2_i1 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r2_i2 = { color: #F4ECD6; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r2_i3 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r2_i4 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r3_i1 = { color: #F4ECD6; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r3_i2 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r3_i3 = { color: #FFE600; font-size: 16px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_r1_s1 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r1_s2 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r2_s1 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r2_s2 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r2_s3 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r2_s4 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r3_s1 = { color: #FF2D8B; font-size: 15px; line-height: 1; }
      @sn_r3_s2 = { color: #FF2D8B; font-size: 15px; line-height: 1; }

      # ── 8. 黄底三栏信息条 ──
      @sn_info_box = { background: #FFE600; border: 2px solid #1A0D0B; box-shadow: 0px 6px 0px #FF2D8B; }
      @sn_info_d1 = { background: #1A0D0B; }
      @sn_info_d2 = { background: #1A0D0B; }
      @sn_c1_lbl = { color: #F5A05A; font-size: 9px; font-weight: 800; letter-spacing: 1.6px; line-height: 1.35; text-align: left; }
      @sn_c2_lbl = { color: #F5A05A; font-size: 9px; font-weight: 800; letter-spacing: 1.6px; line-height: 1.35; text-align: center; }
      @sn_c3_lbl = { color: #F5A05A; font-size: 9px; font-weight: 800; letter-spacing: 1.6px; line-height: 1.35; text-align: right; }
      @sn_c1_v1 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: left; }
      @sn_c1_v2 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: left; }
      @sn_c2_v1 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: center; }
      @sn_c2_v2 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: center; }
      @sn_c3_v1 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: right; }
      @sn_c3_v2 = { color: #1A0D0B; font-size: 16px; font-weight: 900; letter-spacing: 0.4px; line-height: 1.15; text-align: right; }

      # ── 9. 页脚胶片孔条 ──
      @sn_foot_box = { background: #F4ECD6; }
      @sn_foot_l = { color: #1A0D0B; font-size: 9.5px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_foot_r = { color: #1A0D0B; font-size: 9.5px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
    </styles>
  </Page>
</App>
```

> 制作要点：**一个底图素材撑满全部视觉重量**——画面（碗 / 酒瓶 / 蒸汽 / 纸纹）是素材，画面上的一切「设计感」由排版层给出：① 三行标题用 `Impact` 系（`Impact, 'Arial Black', sans-serif`）拿压缩超粗字形，`-webkit-text-stroke` 出黑描边、`text-shadow` 出「零模糊」品红错位色影（丝网印套色错版的机械复现，位偏移量与描边同量级才像印刷品）；② 韩文点缀与圆徽章用 `transform: rotate()`（**styles 区直接键**——`transform` 是视觉键，写进 `style` 属性会被编译器拒；容器上落 wrapper，绕中心旋转），叠压在标题之上靠 `z-index`；③ 手绘感不硬修——错位、旋角、粗描边本身就是复古印刷的语言。
>
> **复刻方法与实测纪律（2026-09-23）**——完整执行手册（拆解 / 量化读图 / 收敛回路 / 坑点 / 工具）见 `packages/docs/agents/reference-reproduction-skill.md`（内部文档，未随本仓发布），工具集 `apps/studio-web/scripts/design-repro/`：
>
> - **测量驱动收敛**：把目标稿（628×940）当尺子——逐节点隐藏其余节点 + 与「空画板」参照做像素差，量出每个元素的**墨迹盒（x/y/w/h）**，与目标稿同法量得的墨迹盒对齐；本模板迭代 6 轮（标题字号 152→137px、三行 `letter-spacing` 逐行取值、韩文与页脚各一轮）。
> - **字号 ↔ 墨迹的非线性**：字号只决定墨迹**高**，宽度靠 `letter-spacing` 单独配（目标稿三行本身就是大追踪排印：SEOUL 350px / AFTER 345px / DARK 385px 而字数递减）。**标题盒必须给足宽**——`DARK` 在 404px 盒里会折行（字形推进 + 字距 + 描边 > 盒宽），要 ≥460px。
> - **韩文方块字 ≈ 1em 宽**：`야시장` / `먹토이` 三字 @57px ≈ 目标 155–173px，「字数 × 字号」估宽最准；系统韩文字面比目标字体**偏高**，取「略小字号 + 补字距」保宽度、压高度。
> - **撞过的坑**：① 页脚换行 = flex 子项默认 `flex-shrink:1` 压缩（`width:auto` 也照压）→ 文案 cell 补 `flex-shrink:0`；② 描边量 = 字面粗细（5px 在 Impact 上偏「肿」，收到 4px）；③ 底图必须走 `Image` 组件 `src`（scoped-css 的 `url()` 不经素材解析层）。
> - **与目标稿的已知差异（诚实标注）**：字形 = Impact 近似（目标为定制压缩体，字面更瘦长）；网点 / 蜡笔笔触等**印刷肌理**属素材侧，排版层不复刻；缩略图按管线标准取 1280×800 首屏（竖版海报底部两带被裁，与 `mkt-poster` 同例）。
