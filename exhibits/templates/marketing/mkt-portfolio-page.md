# 3D portfolio landing page (responsive) — "Ran Chen UI/UX Design"

> Template role (marketing / growth tab · responsive page): the **full-page** form of
> `mkt-portfolio-cover` — the same assets and the same visual language, extended into a scrollable
> landing page. The hero keeps the cover's proportions through container query units (cqw); the
> content sections (work grid / about / contact) use flow layout and re-flow on their own; narrow
> screens need only two decisions (the hero copy stack tightens and the about section stacks).
> Scenario: turn the portfolio cover into a one-page site — ① sticky nav; ② hero (background plate +
> 3D character + oversized gradient headline + badge + skill tags + contact strip); ③ work grid (six
> project cards, `auto-fit` between 3 / 2 / 1 columns); ④ about (portrait plus two-column bio, stacks
> on narrow screens); ⑤ closing contact section + footer. No API, static data; responsiveness comes
> from cqw + clamp + `@media`, **never a fixed art board**.

```lang
<App dsl-version="0.3" name="Ran Chen UI/UX Design — Portfolio Landing Page">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="pf_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:stretch; position:relative">

      <!-- ─── ① Sticky nav ─── -->
      <Container id="pf_nav_region" style="width:100%; height:auto; flex-shrink:0; position:sticky; top:0px; z-index:60">
        <FlexContainer id="pf_nav_row" props={direction: "row"} style="width:100%; height:auto; align-items:center; justify-content:space-between; padding:14px 5vw; gap:12px">
          <Container id="pf_nav_brand_cell" style="width:auto; height:auto; flex-shrink:0">
            <Text id="pf_nav_brand" props={content: "RAN CHEN · UI/UX", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_nav_menu_cell" style="width:auto; height:auto; flex-shrink:0">
            <Anchor id="pf_nav_menu" props={direction: "horizontal", affix: false} style="width:auto; height:auto">
              <Container id="pf_nav_i1" props={itemLabel: "Work", itemTarget: "pf_works_region"} style="width:auto; height:auto"/>
              <Container id="pf_nav_i2" props={itemLabel: "About", itemTarget: "pf_about_region"} style="width:auto; height:auto"/>
              <Container id="pf_nav_i3" props={itemLabel: "Contact", itemTarget: "pf_contact_region"} style="width:auto; height:auto"/>
            </Anchor>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── ② Hero (container query context: the scene layer scales proportionally) ─── -->
      <FlexContainer id="pf_hero_region" props={direction: "column"} style="width:100%; height:auto; min-height:88vh; flex-shrink:0; position:relative; overflow:hidden; align-items:stretch">

        <Container id="pf_hero_bg_cell" style="position:absolute; left:0px; top:0px; width:100%; height:100%; z-index:0">
          <Image id="pf_hero_bg" props={src: "assets/images/portfolio-cover-bg.png", alt: "Liquid-metal abstract background", objectFit: "cover", loading: "eager"} style="width:100%; height:100%"/>
        </Container>

        <Container id="pf_hero_girl_cell" style="position:absolute; left:46cqw; top:4cqw; width:78cqw; height:59cqw; z-index:1">
          <Image id="pf_hero_girl" props={src: "assets/images/portfolio-cover-girl.png", alt: "3D illustration of a designer with mint-green hair", objectFit: "contain", loading: "eager"} style="width:100%; height:100%"/>
        </Container>

        <FlexContainer id="pf_hero_stack" props={direction: "column"} style="position:relative; z-index:2; width:100%; height:auto; min-height:88vh; align-items:flex-start; justify-content:center; padding:96px 5vw 120px; gap:18px">

          <Container id="pf_hero_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_hero_eyebrow" props={content: "▶▶ UI | UX DESIGN · PORTFOLIO 2026", tagName: "span"} style="width:auto; height:auto"/>
          </Container>

          <Container id="pf_hero_title1_cell" style="width:100%; height:auto">
            <Text id="pf_hero_title1" props={content: "PORTFOLIO", tagName: "h1"} style="width:100%; height:auto"/>
          </Container>

          <Container id="pf_hero_title2_cell" style="width:100%; height:auto">
            <Text id="pf_hero_title2" props={content: "DESIGN", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>

          <FlexContainer id="pf_hero_meta_row" props={direction: "row"} style="width:100%; height:auto; align-items:center; flex-wrap:wrap; gap:14px; padding-top:10px">
            <Container id="pf_hero_badge_cell" style="width:auto; height:auto; flex-shrink:0">
              <Text id="pf_hero_badge" props={content: "2021-2023 ✕ UI PORTFOLIO", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_hero_cta_cell" style="width:auto; height:auto; flex-shrink:0">
              <Button id="pf_hero_cta" props={content: "View work ↓", variant: "primary"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>

          <FlexContainer id="pf_hero_tags" props={direction: "row"} style="width:100%; height:auto; align-items:center; flex-wrap:wrap; gap:12px 28px; padding-top:6px">
            <Container id="pf_tag1_cell" style="width:auto; height:auto">
              <Text id="pf_tag1" props={content: "● APP DESIGN", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag2_cell" style="width:auto; height:auto">
              <Text id="pf_tag2" props={content: "● WEB DESIGN", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag3_cell" style="width:auto; height:auto">
              <Text id="pf_tag3" props={content: "● H5 DESIGN", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag4_cell" style="width:auto; height:auto">
              <Text id="pf_tag4" props={content: "● IP DESIGN", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_tag5_cell" style="width:auto; height:auto">
              <Text id="pf_tag5" props={content: "● AIGC", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer id="pf_hero_info" props={direction: "row"} style="position:relative; z-index:2; width:100%; height:auto; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px 32px; padding:20px 5vw 28px; min-height:0px">
          <Container id="pf_info_l_cell" style="width:auto; height:auto">
            <Text id="pf_info_l" props={content: "DESIGNER: Ran Chen", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_info_c_cell" style="width:auto; height:auto">
            <Text id="pf_info_c" props={content: "TEL: +86 153 6909 8371", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_info_r_cell" style="width:auto; height:auto">
            <Text id="pf_info_r" props={content: "EMAIL: ran@ranchen.design", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ③ Work grid (auto-fit: 3 / 2 / 1 columns) ─── -->
      <FlexContainer id="pf_works_region" props={direction: "column"} style="width:100%; height:auto; flex-shrink:0; align-items:center; padding:88px 5vw 72px; gap:34px">
        <FlexContainer id="pf_works_head" props={direction: "column"} style="width:100%; max-width:1120px; height:auto; align-items:flex-start; gap:10px">
          <Container id="pf_works_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_works_eyebrow" props={content: "SELECTED WORKS", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_works_title_cell" style="width:100%; height:auto">
            <Text id="pf_works_title" props={content: "Six projects that answered a real brief", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>

        <FlexContainer id="pf_works_grid" props={direction: "row"} style="width:100%; max-width:1120px; height:auto; flex-wrap:wrap; align-items:stretch; gap:20px">
          <FlexContainer id="pf_work1" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work1_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work1_tag" props={content: "APP · 2023", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work1_name_cell" style="width:100%; height:auto">
              <Text id="pf_work1_name" props={content: "Inspection app, rebuilt", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work1_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work1_desc" props={content: "Paper checklists moved onto a phone: scan, photo evidence, works offline. Frontline training now takes half a day.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work2" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work2_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work2_tag" props={content: "WEB · 2022", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work2_name_cell" style="width:100%; height:auto">
              <Text id="pf_work2_name" props={content: "Analytics platform", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work2_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work2_desc" props={content: "Forty reports collapsed into six boards: one metric definition everywhere, so teams pull their own numbers.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work3" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work3_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work3_tag" props={content: "H5 · 2022", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work3_name_cell" style="width:100%; height:auto">
              <Text id="pf_work3_name" props={content: "Anniversary campaign H5", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work3_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work3_desc" props={content: "120,000 entries in seven days: the prize flow trimmed to three steps, and the share rate doubled.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work4" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work4_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work4_tag" props={content: "IP · 2021", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work4_name_cell" style="width:100%; height:auto">
              <Text id="pf_work4_name" props={content: "Rui the mascot", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work4_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work4_desc" props={content: "From turnaround sheets to sticker packs: one character carried across the app, print and merch.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work5" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work5_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work5_tag" props={content: "AIGC · 2023", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work5_name_cell" style="width:100%; height:auto">
              <Text id="pf_work5_name" props={content: "AI image pipeline", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work5_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work5_desc" props={content: "Product shots went from a day of shooting to eight versions in half an hour, plus a compliance checklist.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
          <FlexContainer id="pf_work6" props={direction: "column"} style="flex-basis:300px; flex-grow:1; min-width:0px; width:auto; height:auto; align-items:flex-start; gap:10px; padding:26px 24px">
            <Container id="pf_work6_tag_cell" style="width:auto; height:auto">
              <Text id="pf_work6_tag" props={content: "WEB · 2021", tagName: "span"} style="width:auto; height:auto"/>
            </Container>
            <Container id="pf_work6_name_cell" style="width:100%; height:auto">
              <Text id="pf_work6_name" props={content: "Design system 1.0", tagName: "h3"} style="width:100%; height:auto"/>
            </Container>
            <Container id="pf_work6_desc_cell" style="width:100%; height:auto">
              <Text id="pf_work6_desc" props={content: "Sixty-eight components and two theme token sets shared by design and front-end; reviews went from weeks to days.", tagName: "p"} style="width:100%; height:auto"/>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ④ About (two columns: portrait + bio; stacks on narrow screens) ─── -->
      <FlexContainer id="pf_about_region" props={direction: "row"} style="width:100%; height:auto; flex-shrink:0; align-items:center; justify-content:center; flex-wrap:wrap; gap:40px; padding:80px 5vw">

        <Container id="pf_about_portrait_cell" style="width:340px; height:auto; flex-shrink:0; position:relative; overflow:hidden">
          <Image id="pf_about_portrait" props={src: "assets/images/portfolio-cover-girl.png", alt: "Portrait of the designer", objectFit: "contain", loading: "lazy"} style="width:340px; height:256px"/>
        </Container>

        <FlexContainer id="pf_about_text" props={direction: "column"} style="width:100%; max-width:560px; height:auto; align-items:flex-start; gap:14px">
          <Container id="pf_about_eyebrow_cell" style="width:auto; height:auto">
            <Text id="pf_about_eyebrow" props={content: "ABOUT ME", tagName: "span"} style="width:auto; height:auto"/>
          </Container>
          <Container id="pf_about_title_cell" style="width:100%; height:auto">
            <Text id="pf_about_title" props={content: "Four years, six industries, one method", tagName: "h2"} style="width:100%; height:auto"/>
          </Container>
          <Container id="pf_about_p1_cell" style="width:100%; height:auto">
            <Text id="pf_about_p1" props={content: "I don't design pages that only look good. I design interfaces that hold up in production: agree on what the business measures first, then turn the answer into reusable components.", tagName: "p"} style="width:100%; height:auto"/>
          </Container>
          <Container id="pf_about_p2_cell" style="width:100%; height:auto">
            <Text id="pf_about_p2" props={content: "For the past two years I've been wiring AI into that process, from brief to finished artwork, handing the repetitive work to tools.", tagName: "p"} style="width:100%; height:auto"/>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <!-- ─── ⑤ Closing contact ─── -->
      <FlexContainer id="pf_contact_region" props={direction: "column"} style="width:100%; height:auto; flex-shrink:0; align-items:center; padding:96px 5vw 88px; gap:16px">
        <Container id="pf_contact_title_cell" style="width:100%; height:auto">
          <Text id="pf_contact_title" props={content: "Got a project in mind? Let's talk.", tagName: "h2"} style="width:100%; height:auto"/>
        </Container>
        <Container id="pf_contact_desc_cell" style="width:100%; max-width:560px; height:auto">
          <Text id="pf_contact_desc" props={content: "Full-time roles · remote-friendly · happy to take on single-project design work. Email usually answered within 24 hours.", tagName: "p"} style="width:100%; height:auto"/>
        </Container>
        <Container id="pf_contact_btn_cell" style="width:auto; height:auto; padding-top:10px">
          <Button id="pf_contact_btn" props={content: "Email me", variant: "primary"} style="width:auto; height:auto"/>
        </Container>
      </FlexContainer>

      <!-- ─── ⑥ Footer ─── -->
      <FlexContainer id="pf_footer_region" props={direction: "row"} style="width:100%; height:auto; flex-shrink:0; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px 24px; padding:26px 5vw 30px">
        <Container id="pf_footer_brand_cell" style="width:auto; height:auto">
          <Text id="pf_footer_brand" props={content: "RAN CHEN · UI/UX DESIGN", tagName: "span"} style="width:auto; height:auto"/>
        </Container>
        <Container id="pf_footer_note_cell" style="width:auto; height:auto">
          <Text id="pf_footer_note" props={content: "© 2026 Portfolio demo · copy and figures are fictional", tagName: "span"} style="width:auto; height:auto"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      # Closing CTA: declarative feedback (front-end action only, no API)
      @pf_contact_btn = {
        events: { mailMe: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Email copied — ran@ranchen.design. Say hello anytime."}) } }
      }
      @pf_hero_cta = {
        events: { toWorks: { trigger: "onClick", action: nav.scroll({target: "pf_works_region"}) } }
      }
    </script>

    <styles>
      # ── 0. Base tone (dark stage + mint accent; same visual language as the cover) ──
      @pf_root = { background: #0B0E14; }
      @pf_nav_region = { background: rgba(11, 14, 20, 0.72); backdrop-filter: blur(12px) saturate(150%); :scope { border-bottom: 1px solid rgba(62, 235, 208, 0.10); } }
      @pf_nav_brand = { color: #E8FFF8; font-size: 13px; font-weight: 800; letter-spacing: 2.2px; line-height: 1; }
      @pf_nav_menu = {
        :scope { --anchor-item-color: #9FB3B0; --anchor-item-font-size: 13px; --anchor-item-font-weight: 700; --anchor-item-padding: 6px 2px; --anchor-item-active-color: #3EEBD0; --anchor-item-active-bg: transparent; --anchor-gap: 26px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #3EEBD0; }
      }

      # ── 1. Hero (scene layer: cqw proportional; copy layer: clamp sizes, tightens on narrow screens) ──
      @pf_hero_region = {
        background: #050810;
        :scope { container-type: inline-size; container-name: pfhero; }
      }
      @pf_hero_eyebrow = { color: #7FE3D2; font-size: clamp(10px, 1.1cqw, 13px); font-weight: 800; letter-spacing: clamp(1.2px, 0.24cqw, 2.6px); line-height: 1; }
      # "PORTFOLIO" / "DESIGN" were already Latin in the source; the arithmetic still has to hold at the
      # narrow end. At 375px the 46px floor gives 9 glyphs ≈ 307px inside a 337px box — 30px of slack.
      @pf_hero_title1 = {
        font-weight: 900; line-height: 1; text-align: left;
        font-size: clamp(46px, 12.4cqw, 137px); letter-spacing: clamp(2px, 0.7cqw, 8px);
        :scope {
          background-image: linear-gradient(180deg, #A8FFE0 0%, #E8FFF8 45%, #FFFFFF 68%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      }
      @pf_hero_title2 = { color: #FFFFFF; font-weight: 600; line-height: 1; text-align: left; font-size: clamp(26px, 6.8cqw, 75px); letter-spacing: clamp(3px, 1cqw, 11px); }
      @pf_hero_badge_cell = { background: #3EEBD0; border-radius: 999px; padding: 10px 22px; box-shadow: 0px 6px 16px rgba(62, 235, 208, 0.22); }
      # 17px ceiling → 15px: "2021-2023 ✕ UI PORTFOLIO" is 24 Latin glyphs against 11 CJK/figure glyphs,
      # so the pill would run past its 12px radius on either side of the type.
      @pf_hero_badge = { color: #0A1A18; font-size: clamp(12px, 1.5cqw, 15px); font-weight: 700; letter-spacing: 0.6px; line-height: 1; }
      @pf_hero_cta = { border-radius: 12px; font-size: clamp(12px, 1.3cqw, 15px); font-weight: 700; :scope { background: #3EEBD0; border-color: #3EEBD0; color: #0A1A18; } }
      @pf_tag1 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag2 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag3 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag4 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      @pf_tag5 = { color: #DDE7E5; font-size: clamp(12px, 1.4cqw, 16px); font-weight: 700; letter-spacing: 0.5px; line-height: 1; }
      # Note: flex-direction / flex-wrap are wrapper landing keys (FlexContainer enforces them from
      # props), and scoped-css `@media` **cannot** rewrite them — so the contact strip ships with a
      # hard-wired `flex-wrap` instead of being re-ordered at a breakpoint.
      @pf_info_l = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }
      @pf_info_c = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }
      @pf_info_r = { color: #8FA3A0; font-size: clamp(11px, 1.1cqw, 13px); font-weight: 700; letter-spacing: 1px; line-height: 1.4; }

      # ── 2. Work section (auto-fit grid: 3/2/1 columns; card finish + hover) ──
      @pf_works_region = { background: #0B0E14; }
      @pf_works_eyebrow = { color: #3EEBD0; font-size: 13px; font-weight: 800; letter-spacing: 3px; line-height: 1; }
      # 3.2vw / 40px seat: "Six projects that answered a real brief" is 39 Latin glyphs against 10 CJK
      # graphemes — it stays one line on the 1120px measure but takes two at the 26px clamp floor.
      @pf_works_title = { color: #F2F6FA; font-size: clamp(26px, 3.2vw, 40px); font-weight: 900; letter-spacing: -0.5px; line-height: 1.25; }
      @pf_work1 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work2 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work3 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work4 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work5 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work6 = { background: #12161F; border-radius: 18px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05); :scope { transition: transform 0.24s ease, box-shadow 0.24s ease; } :scope:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(62, 235, 208, 0.22); } }
      @pf_work1_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work2_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work3_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work4_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work5_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work6_tag = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1; }
      @pf_work1_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work2_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work3_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work4_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work5_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      @pf_work6_name = { color: #F2F6FA; font-size: 19px; font-weight: 800; letter-spacing: 0.2px; line-height: 1.35; }
      # Latin at 14px in a 312px card runs ~44 characters a line against ~22 CJK glyphs — same 3 lines,
      # but leading drops from 1.85 to 1.7 so the cards keep their height.
      @pf_work1_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }
      @pf_work2_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }
      @pf_work3_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }
      @pf_work4_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }
      @pf_work5_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }
      @pf_work6_desc = { color: #9AA7B4; font-size: 14px; line-height: 1.7; }

      # ── 3. About (two columns; stacking on narrow screens comes from flex-wrap) ──
      @pf_about_region = { background: #0E1219; }
      @pf_about_portrait_cell = { background: radial-gradient(120% 120% at 30% 20%, rgba(62, 235, 208, 0.16), rgba(62, 235, 208, 0) 62%); border-radius: 20px; :scope { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05); } }
      @pf_about_eyebrow = { color: #3EEBD0; font-size: 12px; font-weight: 800; letter-spacing: 3px; line-height: 1; }
      # 32px seat kept: "Four years, six industries, one method" wraps to two lines on the 560px
      # measure, matching the two-line CJK original.
      @pf_about_title = { color: #F2F6FA; font-size: clamp(24px, 2.6vw, 32px); font-weight: 900; letter-spacing: -0.4px; line-height: 1.3; }
      @pf_about_p1 = { color: #9AA7B4; font-size: 15px; line-height: 1.75; }
      @pf_about_p2 = { color: #9AA7B4; font-size: 15px; line-height: 1.75; }

      # ── 4. Contact + footer ──
      @pf_contact_region = { background: linear-gradient(140deg, #0E2A2A 0%, #0B1418 58%, #0B0E14 100%); :scope { border-top: 1px solid rgba(62, 235, 208, 0.10); } }
      @pf_contact_title = { color: #F2F6FA; font-size: clamp(26px, 3.4vw, 42px); font-weight: 900; letter-spacing: -0.6px; line-height: 1.25; text-align: center; }
      @pf_contact_desc = { color: #9FB3B0; font-size: 15px; line-height: 1.7; text-align: center; }
      @pf_contact_btn = { border-radius: 12px; font-size: 15px; font-weight: 700; padding: 12px 26px; :scope { background: #3EEBD0; border-color: #3EEBD0; color: #0A1A18; } }
      @pf_footer_region = { background: #080B11; :scope { border-top: 1px solid rgba(255, 255, 255, 0.06); } }
      @pf_footer_brand = { color: #7FE3D2; font-size: 12px; font-weight: 800; letter-spacing: 1.8px; line-height: 1; }
      @pf_footer_note = { color: #6B7A85; font-size: 12px; letter-spacing: 0.6px; line-height: 1; }
    </styles>
  </Page>
</App>
```

> Craft notes: **one visual language, two delivery forms** — `mkt-portfolio-cover` is a fixed art
> board (a marketing asset), this template is a **full page** (self-adapting). The responsive strategy
> has three layers: ① the **hero scene layer** uses container query units (`cqw`: character 78cqw wide
> / 59cqw tall = the asset ratio; headline `clamp(46px, 12.4cqw, 137px)`) so the composition keeps its
> proportions at any width; ② the **content layer** is fluid (`flex-wrap` + `auto-fit` grid) so the
> work grid lands on 3/2/1 columns and the about section stacks, **with zero media queries**; ③ **two
> explicit decisions**: the hero's bottom contact strip is hard-wired to wrap rather than re-ordered
> at a breakpoint, and the `clamp` floors catch the narrow end.
>
> Every typography key (`font-size` / `letter-spacing`) goes through the `<styles>` block or a direct
> key — since 2026-09-23 the engine treats typography keys as transferable
> (`CUSTOM_CSS_OVERRIDABLE_KEYS`), so both `@media` overrides and component-default overrides take
> effect.

## Production notes

**The headline never needed retuning — the supporting copy did.** "PORTFOLIO" and "DESIGN" are the
same strings in both editions (the source artwork is an English-language portfolio cover), so
`pf_hero_title1` / `pf_hero_title2` keep their `clamp(46px, 12.4cqw, 137px)` and
`clamp(26px, 6.8cqw, 75px)` seats untouched. What was sized for CJK were the labels around them:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `pf_hero_badge` | `clamp(12px, 1.5cqw, 17px)` | **`clamp(12px, 1.5cqw, 15px)`** | "2021-2023 ✕ UI PORTFOLIO" is 24 Latin glyphs against 11 CJK/figure glyphs — at the 17px ceiling the pill lost its margins (same correction as the cover's `t2_badge_txt`, 27px → 22px) |
| work-card body | `line-height: 1.85` | **1.7** | Latin does not need CJK leading; 14px copy stays at 3 lines a card |
| about body (`pf_about_p1/p2`) | `line-height: 2` | **1.75** | 15px in a 560px measure: the English paragraphs are ~160 characters against ~48 CJK glyphs, so leading is the only way to hold the section height |
| `pf_contact_title` | `clamp(26px, 3.4vw, 44px)` | **`clamp(26px, 3.4vw, 42px)`** | "Got a project in mind? Let's talk." is 34 Latin glyphs against 9 CJK: 653px at the 42px ceiling (room in the 1152px band) and measured to stay on one line down to ~450px viewport width, below which it wraps to two centered lines |
| `pf_contact_desc` | `line-height: 1.9` | **1.7** | same reason as the work cards |
| skill tags (`pf_tag1…5`) | 16px / `0.5px` | 16px / `0.5px` (kept) | the tags were already Latin micro-labels; "● APP DESIGN" is 115px in a 1184px hero, so five of them plus gaps still fit one row with room to spare |
| `pf_works_title` | 40px seat | 40px (kept) | "Six projects that answered a real brief" is ~741px on a 1120px measure — one line, same as the CJK original |
| `pf_about_title` | 32px seat | 32px (kept) | "Four years, six industries, one method" wraps to two lines on the 560px measure, matching the original's two lines |

**Copy policy — re-expressed, not translated.** The designer is **Ran Chen** and the contact details
match `mkt-portfolio-cover.en.md` (`+86 153 6909 8371`, `ran@ranchen.design`) so the two templates
stay one portfolio; the made-up QQ-style address in the Chinese source is replaced accordingly. The
six work cards keep the same facts (40 reports → 6 boards, 120k entries in 7 days, 68 components)
but are written as English case-study one-liners; card names were shortened so they stay on one line
at 19px in a 312px card ("巡检 App 改版" → "Inspection app, rebuilt").

**No structural refactor was needed.** There is no Chinese-only construct in this layout, so every
node id survives unchanged — tooling (the responsive E2E, the thumbnail pipeline) can address either
document by the same selectors. Image paths (`assets/images/portfolio-cover-*.png`) are untouched:
both editions compose the same two assets.
