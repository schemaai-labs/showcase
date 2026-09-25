# Retro screen-print poster — "SEOUL AFTER DARK: a street food festival"

> Template role (marketing / growth tab · image + type overprint): a poster reproduction made of **one
> base illustration plus a fully overprinted type layer** — the artwork fills the board (a tteokbokki
> illustration) while the headline / badge / menu board / info strip are all overprinted onto it with
> platform components and scoped-css (`assets/images/seoul-after-dark-base.png`, seeded automatically
> when the app is created). The point it proves is the low-code proposition itself: one illustrated
> asset plus platform capability equals a designer's finished piece.
> Scenario: reproduce a fictional Seoul night-market street-food festival poster (628×940 portrait,
> 2:3) — a masthead strip and a crop mark along the top, a three-line extra-heavy display headline
> (SEOUL / AFTER / DARK, black stroke plus a misregistered magenta shadow), a rotated "EXTRA 매운맛
> SPICY" circular badge, oversized Hangul accents (먹토이 / 야시장), a red menu board (nine snacks
> separated by stars), a yellow three-column info strip (when / where / tickets) and a film-sprocket
> footer. Zero API, zero motion (print-reproduction discipline).

```lang
<App dsl-version="0.3" name="Seoul After Dark — Street Food Festival Poster">
  <Page id="poster" name="Poster" route="/">
    <FlexContainer id="sn_stage" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; padding:40px 24px; position:relative">

      <Container id="sn_poster" style="width:628px; height:940px; flex-shrink:0; position:relative; overflow:hidden">

        <!-- ─── 0. Base image (the only asset: the illustration fills the board) ─── -->
        <Container id="sn_base_cell" style="position:absolute; left:0px; top:0px; width:628px; height:940px; z-index:0">
          <Image id="sn_base" props={src: "assets/images/seoul-after-dark-base.png", alt: "Seoul night market: tteokbokki illustration base", objectFit: "cover", loading: "eager"} style="width:628px; height:940px"/>
        </Container>

        <!-- ─── 1. Hangul accent, top right (먹토이) ─── -->
        <FlexContainer id="sn_kr_box" props={direction: "column"} style="position:absolute; left:420px; top:62px; width:210px; height:72px; align-items:center; justify-content:center; z-index:4">
          <Container id="sn_kr_cell" style="width:100%; height:auto">
            <Text id="sn_kr" props={content: "먹토이", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 2. Display headline (SEOUL / AFTER / DARK) ─── -->
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

        <!-- ─── 3. EXTRA SPICY circular badge (rotated, overprinting the headline) ─── -->
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

        <!-- ─── 4. Hangul accent on the bowl (야시장) ─── -->
        <FlexContainer id="sn_ysj_box" props={direction: "column"} style="position:absolute; left:222px; top:464px; width:168px; height:88px; align-items:center; justify-content:center; z-index:4">
          <Container id="sn_ysj_cell" style="width:100%; height:auto">
            <Text id="sn_ysj" props={content: "야시장", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 5. Masthead strip (crop mark / VOL / series / date) ─── -->
        <FlexContainer id="sn_mark_box" props={direction: "column"} style="position:absolute; left:19px; top:12px; width:32px; height:30px; align-items:center; justify-content:center; z-index:3">
          <Container id="sn_mark_cell" style="width:32px; height:30px">
            <Svg id="sn_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30' fill='none'><path d='M1.5 29 L1.5 1.5 L30 1.5' stroke='#1A0D0B' stroke-width='3'/></svg>", ariaLabel: "Top-left crop mark"} style="width:32px; height:30px"/>
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

        <!-- ─── 6. Yellow kicker bar (A STREET FOOD FESTIVAL) ─── -->
        <FlexContainer id="sn_kick_box" props={direction: "column"} style="position:absolute; left:43px; top:53px; width:289px; height:19px; align-items:center; justify-content:center; z-index:6">
          <Container id="sn_kick_cell" style="width:100%; height:auto">
            <Text id="sn_kick" props={content: "A STREET FOOD FESTIVAL", tagName: "span"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 7. Black slogan strip (SKEWERS · SOJU · STEAM · SPICE) ─── -->
        <FlexContainer id="sn_strip_box" props={direction: "row"} style="position:absolute; left:45px; top:424px; width:356px; height:24px; align-items:center; justify-content:center; z-index:3; gap:10px">
          <Container id="sn_strip_dot_cell" style="width:auto; height:auto">
            <Text id="sn_strip_dot" props={content: "●", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="sn_strip_txt_cell" style="width:auto; height:auto">
            <Text id="sn_strip_txt" props={content: "SKEWERS · SOJU · STEAM · SPICE", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>

        <!-- ─── 8. Menu board (red ground: ON THE GRILL + nine snacks) ─── -->
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

        <!-- ─── 9. Yellow three-column info strip (when / where / tickets) ─── -->
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

        <!-- ─── 10. Film-sprocket footer (SEOUL.AFTER.DARK + dashes + the fine print) ─── -->
        <FlexContainer id="sn_foot_box" props={direction: "row"} style="position:absolute; left:28px; top:896px; width:572px; height:26px; align-items:center; justify-content:space-between; z-index:3; padding:0px 12px">
          <Container id="sn_foot_l_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="sn_foot_l" props={content: "SEOUL.AFTER.DARK", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="sn_foot_dash_cell" style="width:190px; height:8px; flex-shrink:0">
            <Svg id="sn_foot_dash" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 204 8' preserveAspectRatio='none'><line x1='0' y1='4' x2='204' y2='4' stroke='#1A0D0B' stroke-width='7' stroke-dasharray='12 9'/></svg>", ariaLabel: "Dashed divider"} style="width:204px; height:8px"/>
          </Container>
          <Container id="sn_foot_r_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="sn_foot_r" props={content: "21+ · CASH+CARD · RAIN OR SHINE", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <styles>
      # ── 0. Stage and board (dark ink surround + paper edge on the board) ──
      @sn_stage = { background: #17110F; }
      @sn_poster = { background: #E8DCC6; box-shadow: 0px 26px 60px rgba(0, 0, 0, 0.55); }

      # ── 1. Palette leads (extra-black display: black stroke + misregistered magenta) ──
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

      # ── 2. Hangul accents (red / magenta + yellow misregistration; the angle is the hand-pasted feel) ──
      @sn_kr_box = { transform: rotate(-6deg); }
      @sn_kr = { color: #FF2920; font-size: 48px; font-weight: 900; letter-spacing: 20px; line-height: 1; text-align: center; :scope { -webkit-text-stroke: 1.5px #1A0D0B; text-shadow: 7px 7px 0px #FFE600; } }
      @sn_ysj_box = { transform: rotate(-8deg); }
      @sn_ysj = { color: #FF2D8B; font-size: 57px; font-weight: 900; line-height: 1; text-align: center; :scope { -webkit-text-stroke: 2px #1A0D0B; text-shadow: 9px 9px 0px #FFE600; } }

      # ── 3. Circular badge (magenta ground + pink ring + three lines) ──
      @sn_badge_box = { background: #FF2D8B; border: 5px solid #FF7BB0; border-radius: 50%; box-shadow: 0px 6px 0px rgba(26, 13, 11, 0.55); transform: rotate(-18deg); }
      @sn_badge_l1 = { color: #FFE600; font-size: 15px; font-weight: 900; letter-spacing: 2.5px; line-height: 1.35; text-align: center; }
      @sn_badge_l2 = { color: #FFFFFF; font-size: 18px; font-weight: 800; letter-spacing: 1px; line-height: 1.2; text-align: center; }
      @sn_badge_l3 = { color: #FFFFFF; font-size: 20px; font-weight: 900; letter-spacing: 1.5px; line-height: 1.15; text-align: center; }

      # ── 4. Masthead strip ──
      @sn_mark = { opacity: 0.9; }
      @sn_vol_box = { background: #1A0D0B; box-shadow: 3px 3px 0px #FF2D8B; }
      @sn_vol = { color: #FFE600; font-size: 11px; font-weight: 900; letter-spacing: 1.4px; line-height: 1; text-align: center; }
      @sn_hm = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.8px; line-height: 1; text-align: left; }
      @sn_hr1 = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.4px; line-height: 1.35; text-align: right; }
      @sn_hr2 = { color: #1A0D0B; font-size: 10px; font-weight: 800; letter-spacing: 1.4px; line-height: 1.35; text-align: right; }
      @sn_hrdot = { background: #FF2920; border-radius: 50%; }

      # ── 5. Yellow kicker bar ──
      @sn_kick_box = { background: #FFE600; border: 2px solid #1A0D0B; border-left: 6px solid #1A0D0B; box-shadow: 0px 4px 0px #FF2D8B; }
      @sn_kick = { color: #1A0D0B; font-size: 11px; font-weight: 900; letter-spacing: 2.6px; line-height: 1; text-align: center; }

      # ── 6. Black slogan strip ──
      @sn_strip_box = { background: #1A0D0B; border-right: 5px solid #FFE600; }
      @sn_strip_dot = { color: #FF2D8B; font-size: 9px; line-height: 1; }
      @sn_strip_txt = { color: #F4ECD6; font-size: 11.5px; font-weight: 800; letter-spacing: 2.2px; line-height: 1; }

      # ── 7. Menu board (red ground + black edge; the label is black on violet, yellow / cream alternate) ──
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

      # ── 8. Yellow three-column info strip ──
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

      # ── 9. Film-sprocket footer ──
      @sn_foot_box = { background: #F4ECD6; }
      @sn_foot_l = { color: #1A0D0B; font-size: 9.5px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
      @sn_foot_r = { color: #1A0D0B; font-size: 9.5px; font-weight: 900; letter-spacing: 1.6px; line-height: 1; }
    </styles>
  </Page>
</App>
```

> Craft notes: **one base asset carries all the visual weight** — the artwork (bowl / bottles / steam /
> paper grain) is the asset; everything "designed" about it comes from the type layer: ① the three
> headline lines use the `Impact` stack (`Impact, 'Arial Black', sans-serif`) for a condensed extra-black
> face, with `-webkit-text-stroke` for the black outline and `text-shadow` for the **zero-blur** magenta
> misregistration (a mechanical reproduction of a screen-print plate going out of register — the offset
> has to be in the same order of magnitude as the stroke to read as print); ② the Hangul accents and the
> circular badge rotate through `transform: rotate()` (**a direct key in the `<styles>` block** —
> `transform` is a visual key and is rejected by the compiler inside the `style` attribute; the rotation
> lands on a wrapper so it turns about its own centre), stacked over the headline with `z-index`; ③ the
> hand-made feel is not corrected — misregistration, rotation and heavy strokes *are* the language of
> vintage print.
>
> **Reproduction method and measurement discipline (2026-09-23)** — the full handbook (decompose /
> quantitative image reading / convergence loop / traps / tools) is in
> `packages/docs/agents/reference-reproduction-skill.md`（内部文档，未随本仓发布）,
> the toolset in `apps/studio-web/scripts/design-repro/`:
>
> - **Measurement-driven convergence**: treat the target artwork (628×940) as the ruler — hide every
>   other node in turn and diff each element against an "empty board" reference to measure its **ink box
>   (x/y/w/h)**, then align it with the same measurement taken from the target; this template went through
>   six rounds (headline size 152→137px, per-line `letter-spacing`, one round each for the Hangul and the
>   footer).
> - **Size ↔ ink is non-linear**: font size sets the ink **height**; width comes from `letter-spacing`,
>   set separately (the target's three lines are tracked display type: SEOUL 350px / AFTER 345px / DARK
>   385px with fewer glyphs each). **A headline box must be given its full width** — `DARK` wraps inside
>   a 404px box (advance + tracking + stroke > box width), so it needs ≥460px.
> - **A Hangul block glyph is ≈1em wide**: 야시장 / 먹토이 at 57px for three glyphs ≈ the target's
>   155–173px, so glyph count × size is the most accurate width estimate; the system Hangul face sits
>   **taller** than the target's, so it takes a slightly smaller size plus added tracking to hold the
>   width while pressing the height back down.
> - **Traps hit on the way**: ① footer wrapping = flex children defaulting to `flex-shrink:1` (they shrink
>   even at `width:auto`) → the copy cells got `flex-shrink:0`; ② stroke weight = face weight (5px looked
>   bloated on Impact, pulled back to 4px); ③ the base image has to go through the `Image` component's
>   `src` (a `url()` in scoped-css does not pass through the asset resolution layer).
> - **Known deviations from the target (stated honestly)**: the face is an Impact approximation (the
>   target uses a custom condensed face, narrower and taller); the printed **texture** — halftone dots,
>   crayon strokes — belongs to the asset side and is not reproduced by the type layer; thumbnails are
>   taken at the pipeline standard 1280×800 first screen (the poster's bottom two bands are cropped, as
>   with `mkt-poster`).

## Production notes

**No geometry was re-derived — and that was measured, not assumed (2026-09-25).** Every string on this
board is already Latin or Hangul in the Chinese original. The three display lines (SEOUL / AFTER /
DARK), the masthead (VOL. 01, NIGHT MARKET SERIES // 야시장, FRI · OCT 24, 8PM · 'TIL LATE), the yellow
kicker (A STREET FOOD FESTIVAL), the black strip (SKEWERS · SOJU · STEAM · SPICE), the menu board (ON
THE GRILL plus nine romanized snacks), the info strip (// WHEN / // WHERE / // TICKETS with FRI OCT 24,
8 PM — 2 AM, PIER 32, ALLEYWAY LOT, $18 / DOOR, $12 / ADV.) and the footer (SEOUL.AFTER.DARK, 21+ ·
CASH+CARD · RAIN OR SHINE) were all set for Latin metrics to begin with — they are measurements of the
reference, not copy waiting to be translated. Re-deriving them would have been pure churn, and would
have put six rounds of convergence at risk.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| display headline (137 / 114 / 137px, 4px stroke, 8–10px shadow offset) | already Latin | **unchanged** | `Impact` advance is ~0.49em per uppercase glyph here; the same words in the same boxes still measure the same ink, so the composition (and the boxes' ≥460px clearance for `DARK`) holds exactly |
| masthead / kicker / strip / menu / info / footer micro-type | already Latin | **unchanged** | all uppercase Latin at 9–16px inside boxes sized for it; nothing about the copy changed, so nothing about its measure did |
| Hangul accents (`sn_kr` 먹토이, `sn_ysj` 야시장, `sn_badge_l2` 매운맛) | Hangul | **unchanged** | diegetic signage of a Seoul scene: exactly as opaque to a Chinese reader as to an English one, and the template's own English metadata already frames them as "script accents". Romanising them would have shrunk them (Latin at 48–57px runs ~2× the width of block glyphs) and broken the reproduction |
| App / Page names, `alt`, `ariaLabel`s, comments, this document | Chinese | English | the document frame is what the showcase page and the AI catalog read; the board itself contains no Chinese |

**The check that mattered was the composition, not the copy.** For an overprinted poster the risk is
not "does the text fit" but "did anything slide onto the artwork's subject". Two checks were run on the
live render (1280×800, dsf=1):

- **Document level**: with comments stripped, the two lang blocks differ in exactly **five lines** —
  the App name, the Page name, the base image's `alt` and the two `ariaLabel`s. Not one style key, not
  one coordinate, not one letter of the board's copy.
- **Node level**: all 44 text nodes report zero overflow, and the display block reproduces the
  reference's own ink widths (measured with a Range, so stroke and shadow spill are included where they
  overlap the glyphs): `SEOUL` 345px (reference 350), `AFTER` 355px (345), `DARK` 413px inside the
  460px box the craft notes require, 먹토이 190px in a 214px box, 야시장 156px (reference 155–173). The
  tightest micro-type is the masthead line at 201px of its 214px box — still one line. Nothing moved:
  the title block still sits top-left over the smoke, the badge still lands on the left bottle, 야시장
  still sits on the bowl's rim, and the menu board / info strip / footer stay in the bottom bands.

**One caveat for anyone diffing the two archived thumbnails.** The Chinese `.zh.png` comes from the
studio pipeline, whose Google Fonts request stops at Inter **700** — so the 800/900 micro-type
(masthead, kicker, badge, menu board, info strip, footer) is *synthetically* bolded there. The showcase
pipeline that produces this `.en.png` loads Inter 300–900 and sets those weights for real, so the two
PNGs rasterise the micro-type a little differently (the Impact display lines, the Hangul and the
artwork are unaffected and compare pixel-identical). That is pipeline font loading, not a template
regression — the geometry behind both is the same, as the five-line document diff above shows.

**Copy policy**: the doc frame is translated, not the board. `首尔夜市` → "Seoul night market",
`街头小吃节` → "street food festival", `辣炒年糕` → "tteokbokki", `韩文点缀` → "Hangul accents",
`胶片孔` → "film sprocket", `裁切标记` → "crop mark". Product names, the romanized menu, the prices and
the street addresses are carried over verbatim: they are the reproduction's content, and the Chinese
edition already reads them as Latin.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
