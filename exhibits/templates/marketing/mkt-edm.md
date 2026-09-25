# EDM / marketing email (export-oriented) — "Morning Brew" new-bean release

> Template role (marketing / growth tab · export-driven): an EDM — **email-safe single-column
> structure** (600px content width, simple blocks, centred) whose output is the export panel's
> **HTML snapshot** (computed styles inlined, best effort) plus a flat image version.
> Scenario: a launch email for a fictional coffee brand's new beans: a brand bar on top (logo + view
> in browser), a gradient hero (release tag + headline + subtitle), the body block (opening note +
> three flavour points + a full-width CTA button), an info bar (on-sale date / stores) and a footer
> (unsubscribe / privacy / copyright). Warm light palette, single column top to bottom.

```lang
<App dsl-version="0.3" name="Morning Brew · New Bean Release">
  <Page id="edm" name="New Arrival Email" route="/">
    <FlexContainer id="ed_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; padding:44px 24px 56px">
      <FlexContainer id="ed_shell" props={direction: "column"} style="height:auto; width:100%; max-width:600px; flex-shrink:0; align-items:stretch">

        <!-- ─── Brand bar ─── -->
        <Container id="ed_topbar" style="height:auto; width:100%">
          <FlexContainer id="ed_topbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:22px 30px">
            <Container id="ed_brand_cell" style="height:auto; width:auto">
              <FlexContainer id="ed_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:9px">
                <Container id="ed_brand_icon_cell" style="height:auto; width:auto"><Icon id="ed_brand_icon" props={iconName: "Coffee", iconSource: "lucide"}/></Container>
                <Container id="ed_brand_text_cell" style="height:auto; width:auto"><Text id="ed_brand_text" props={content: "Morning Brew Coffee", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_webview_cell" style="height:auto; width:auto"><Text id="ed_webview" props={content: "View in browser", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>

        <!-- ─── Hero ─── -->
        <Container id="ed_hero" style="height:auto; width:100%; position:relative; overflow:hidden">
          <Container id="ed_hero_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
            <Svg id="ed_hero_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 260' fill='none' preserveAspectRatio='xMidYMax slice'><defs><linearGradient id='edArc' x1='60' y1='230' x2='540' y2='230' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#F59E0B' stop-opacity='0'/><stop offset='0.5' stop-color='#F59E0B' stop-opacity='0.55'/><stop offset='1' stop-color='#FB923C' stop-opacity='0'/></linearGradient><radialGradient id='edSun' cx='0.5' cy='1' r='0.9'><stop offset='0' stop-color='#FBBF24' stop-opacity='0.34'/><stop offset='0.55' stop-color='#FBBF24' stop-opacity='0.1'/><stop offset='1' stop-color='#FBBF24' stop-opacity='0'/></radialGradient><filter id='edSoft' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='12'/></filter></defs><circle cx='300' cy='330' r='248' fill='url(#edSun)'/><path d='M52,330 A248,248 0 0 1 548,330' stroke='url(#edArc)' stroke-width='2.5'/><circle cx='128' cy='96' r='18' fill='#FBBF24' opacity='0.25' filter='url(#edSoft)'/><circle cx='470' cy='58' r='14' fill='#F97316' opacity='0.22' filter='url(#edSoft)'/><circle cx='210' cy='52' r='9' fill='#FBBF24' opacity='0.3' filter='url(#edSoft)'/><circle cx='392' cy='120' r='7' fill='#F59E0B' opacity='0.28' filter='url(#edSoft)'/><circle cx='536' cy='160' r='11' fill='#FBBF24' opacity='0.22' filter='url(#edSoft)'/></svg>", ariaLabel: "Morning-sun arc and warm glow ornament layer"} style="height:100%; width:100%"/>
          </Container>
          <FlexContainer id="ed_hero_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:46px 30px 42px; position:relative">
            <Container id="ed_hero_tag_cell" style="height:auto; width:auto">
              <Tag id="ed_hero_tag" props={text: "New release · Yunnan natural", color: "orange"}/>
            </Container>
            <Container id="ed_hero_title_cell" style="height:auto; width:100%">
              <Text id="ed_hero_title" props={content: "Autumn, in the cup", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ed_hero_sub_cell" style="height:auto; width:100%">
              <Text id="ed_hero_sub" props={content: "The first highland honey-process lot of the 2026 harvest — three roast batches only, then it's gone.", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── Body ─── -->
        <Container id="ed_body" style="height:auto; width:100%; padding:34px 30px 8px">
          <FlexContainer id="ed_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:22px">
            <Container id="ed_intro_cell" style="height:auto; width:100%">
              <Text id="ed_intro" props={content: "Old friend — the rain came right this season. Our Yunnan Catimor spent 21 days on the drying beds, and the cupping table found white peach and osmanthus in the finish. We're passing that sweetness on, exactly as it came.", tagName: "p"} style="height:auto; width:100%"/>
            </Container>

            <Container id="ed_point_1_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_1_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_1_icon" props={iconName: "Leaf", iconSource: "lucide"}/></Container>
                <Container id="ed_point_1_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_1_title_cell" style="height:auto; width:auto"><Text id="ed_point_1_title" props={content: "White peach & osmanthus", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_1_desc_cell" style="height:auto; width:auto"><Text id="ed_point_1_desc" props={content: "Honey processing keeps the sweetness clean, the finish bright.", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="ed_point_2_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_2_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_2_icon" props={iconName: "Sun", iconSource: "lucide"}/></Container>
                <Container id="ed_point_2_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_2_title_cell" style="height:auto; width:auto"><Text id="ed_point_2_title" props={content: "Medium-light roast", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_2_desc_cell" style="height:auto; width:auto"><Text id="ed_point_2_desc" props={content: "Kind to pour-over and espresso alike — it holds up to milk.", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="ed_point_3_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px; padding:14px 16px">
                <Container id="ed_point_3_icon_cell" style="height:38px; width:38px; flex-shrink:0"><Icon id="ed_point_3_icon" props={iconName: "Clock", iconSource: "lucide"}/></Container>
                <Container id="ed_point_3_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="ed_point_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="ed_point_3_title_cell" style="height:auto; width:auto"><Text id="ed_point_3_title" props={content: "Shipped within 48h of roasting", tagName: "span"} style="height:auto; width:auto"/></Container>
                    <Container id="ed_point_3_desc_cell" style="height:auto; width:auto"><Text id="ed_point_3_desc" props={content: "Roast date on the bag, so it lands at its peak.", tagName: "span"} style="height:auto; width:auto"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <Container id="ed_cta_cell" style="height:auto; width:100%; padding-top:8px">
              <Button id="ed_cta_btn" props={content: "Taste it now · $18 / 200g", variant: "primary"} style="height:auto; width:100%; padding:14px 0px"/>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── Info bar ─── -->
        <Container id="ed_info" style="height:auto; width:100%">
          <FlexContainer id="ed_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:26px 30px 30px">
            <Container id="ed_info_time_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_info_time_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                <Container id="ed_info_time_icon_cell" style="height:auto; width:auto"><Icon id="ed_info_time_icon" props={iconName: "CalendarDays", iconSource: "lucide"}/></Container>
                <Container id="ed_info_time_text_cell" style="height:auto; width:auto"><Text id="ed_info_time_text" props={content: "On sale Sep 20, 10:00 AM — members get 24h early access", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_info_store_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_info_store_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                <Container id="ed_info_store_icon_cell" style="height:auto; width:auto"><Icon id="ed_info_store_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                <Container id="ed_info_store_text_cell" style="height:auto; width:auto"><Text id="ed_info_store_text" props={content: "Live in all 36 stores nationwide · in-store pickup available", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- ─── Footer ─── -->
        <Container id="ed_footer" style="height:auto; width:100%">
          <FlexContainer id="ed_footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:12px; padding:26px 30px 30px">
            <Container id="ed_footer_links_cell" style="height:auto; width:100%">
              <FlexContainer id="ed_footer_links_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:center; gap:24px">
                <Container id="ed_footer_unsub_cell" style="height:auto; width:auto"><Link id="ed_footer_unsub" props={content: "Unsubscribe", to: "https://example.com/unsubscribe", target: "_blank"}/></Container>
                <Container id="ed_footer_privacy_cell" style="height:auto; width:auto"><Link id="ed_footer_privacy" props={content: "Privacy policy", to: "https://example.com/legal/privacy", target: "_blank"}/></Container>
                <Container id="ed_footer_contact_cell" style="height:auto; width:auto"><Link id="ed_footer_contact" props={content: "Contact support", to: "https://example.com/contact", target: "_blank"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ed_footer_copy_cell" style="height:auto; width:100%">
              <Text id="ed_footer_copy" props={content: "© 2026 Morning Brew Coffee Ltd. · demo template (brand and data are fictional)", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <script>
      @ed_cta_btn = {
        events: { orderNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Redirected to the new-release shop page (demo)"}) } }
      };
    </script>

    <styles>
      # 0. Email shell (light canvas + single white card)
      @ed_root = { background: #f4f1ec; }
      @ed_shell = { background: #ffffff; border-radius: 18px; box-shadow: 0 24px 56px rgba(87, 60, 35, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { overflow: hidden; } }
      @ed_topbar = { background: #fffaf3; :scope { border-bottom: 1px solid #f3e8db; } }
      @ed_brand_icon = { color: #b45309; font-size: 22px; }
      @ed_brand_text = { color: #78350f; font-size: 16px; font-weight: 800; letter-spacing: 0.3px; }
      @ed_webview = { color: #a16207; font-size: 12px; cursor: pointer; }

      # 1. Hero (warm gradient)
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
      # 40px was set for a 10-glyph CJK line; "Autumn, in the cup" is 17 Latin glyphs and still fits the
      # 540px measure at 40px, so the display weight is kept.
      @ed_hero_title = { font-size: 40px; font-weight: 900; letter-spacing: -1.2px; line-height: 1.2; :scope { background-image: linear-gradient(120deg, #431407 0%, #7c2d12 38%, #c2410c 72%, #ea580c 100%); -webkit-background-clip: text; background-clip: text; color: transparent; } }
      # Latin does not need CJK leading: 1.8 → 1.7
      @ed_hero_sub = { color: #7c2d12; font-size: 15px; line-height: 1.7; }

      # 2. Body
      @ed_point_1_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_2_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_3_cell = { background: #fffaf3; border-radius: 14px; :scope { border: 1px solid #f6e8d8; } }
      @ed_point_1_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      @ed_point_2_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      @ed_point_3_icon_cell = { background: linear-gradient(150deg, #ffedd5 0%, #fed7aa 100%); border-radius: 10px; }
      # Opening note: 2 lines of CJK become 3 lines of Latin here — leading dropped 2.0 → 1.7 to hold the block height
      @ed_intro = { color: #44403c; font-size: 15px; line-height: 1.7; }
      @ed_point_1_icon = { color: #d97706; font-size: 20px; }
      @ed_point_2_icon = { color: #d97706; font-size: 20px; }
      @ed_point_3_icon = { color: #d97706; font-size: 20px; }
      @ed_point_1_title = { color: #292524; font-size: 14px; font-weight: 700; }
      @ed_point_2_title = { color: #292524; font-size: 14px; font-weight: 700; }
      @ed_point_3_title = { color: #292524; font-size: 14px; font-weight: 700; }
      # The three point rows are width:auto columns (no wrap), so each description is held ≤ 62 glyphs;
      # at 13px that is ~390px, leaving the icon tile + gaps inside the 600px shell.
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

      # 3. Info bar and footer
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

> Craft notes: **email-safe structure** — a single 600px column, simple blocks (no complex
> multi-column layout) and a full-width CTA; the export route is an **HTML snapshot** (computed styles
> inlined, best effort) plus a "whole page as image" track; the footer carries unsubscribe and
> privacy links (email compliance essentials).

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese original is typeset for CJK metrics —
square glyphs, no word spacing, short display lines. Latin runs wider at the same nominal size, and
in a 600px single-column email there is nowhere to hide. What changed:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `ed_hero_title` | 40px / `-1.2px` | 40px / `-1.2px` (kept) | "Autumn, in the cup" is 17 Latin glyphs against 10 CJK chars — ~408px at 40px inside the 540px measure, so the display weight survives |
| `ed_hero_sub` | `line-height: 1.8` | **1.7** | Latin needs less leading than CJK; the sub is 2 lines either way and the hero block keeps its height |
| `ed_intro` | `line-height: 2` | **1.7** | the opening note grows from 2 CJK lines to 3 Latin lines; tighter leading holds the block to ~72px instead of ~90px |
| point descriptions | ~20 CJK chars | **≤ 62 Latin glyphs, hard-trimmed** | each row's text column is `width:auto` (no wrap) — a longer line would push past the 600px shell rather than wrapping |
| point titles | 4–7 CJK chars | 12–30 glyphs, kept at 14px | "Shipped within 48h of roasting" is ~231px, still well inside the row |

Colours, gradients, the topbar / hero / info / footer bands, card radii, shadows and the SVG ornament
layer are language-neutral and unchanged.

**Copy policy**: not a literal translation, and not a literal price conversion either. `晨光咖啡` →
Morning Brew Coffee; `把秋天，烘进豆子里` becomes the idiomatic "Autumn, in the cup" rather than a
word-for-word "roast autumn into the beans"; `高原蜜处理` → "highland honey-process lot"; the
currency moved from `¥88 / 200g` to `$18 / 200g` (a plausible USD shelf price for a 200g
single-origin lot, not a converted figure). `云南` and `卡蒂姆` stay as the real origin and varietal
they are (Yunnan Catimor).

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
