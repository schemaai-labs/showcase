# Poster / e-invitation (export-oriented) — "Of Light & Dust" autumn launch invitation

> Template role (marketing / growth tab · export-driven): posters and e-invitations — a **portrait
> poster composition** (A4 proportions) exported from the export panel as PNG or PDF (to forward or
> to print).
> Scenario: a launch invitation for a fictional design brand: deep green ground with gold accents, an
> "INVITATION" kicker at the top, the headline "OF LIGHT & DUST", three lines of detail (time /
> venue / dress), a gold rule, a three-line agenda, a bottom RSVP block with a QR code (the qrcode
> component) and a note about seats. The layout works at both A4 portrait (1240×1754) and 9:16.

```lang
<App dsl-version="0.3" name="Of Light & Dust · Autumn Launch Invitation">
  <Page id="poster" name="Invitation" route="/">
    <FlexContainer id="po_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center; position:relative; overflow:hidden">

      <Container id="po_deco_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0">
        <Svg id="po_deco" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1400' fill='none' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='poArc' x1='30' y1='480' x2='970' y2='480' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#D4AF37' stop-opacity='0'/><stop offset='0.5' stop-color='#D4AF37' stop-opacity='0.38'/><stop offset='1' stop-color='#D4AF37' stop-opacity='0'/></linearGradient><filter id='poGlow' x='-80%' y='-80%' width='260%' height='260%'><feGaussianBlur stdDeviation='3.5' result='b'/><feMerge><feMergeNode in='b'/><feMergeNode in='SourceGraphic'/></feMerge></filter><filter id='poSoft' x='-90%' y='-90%' width='280%' height='280%'><feGaussianBlur stdDeviation='16'/></filter></defs><path d='M30,480 A520,520 0 0 1 970,480' stroke='url(#poArc)' stroke-width='1.6'/><path d='M210,790 A330,330 0 0 1 790,790' stroke='url(#poArc)' stroke-width='1.2' opacity='0.7'/><ellipse cx='500' cy='1320' rx='420' ry='190' fill='#D4AF37' opacity='0.07' filter='url(#poSoft)'/><path d='M196,237 C198.0,243.3 198.7,244.0 205,246 C198.7,248.0 198.0,248.7 196,255 C194.0,248.7 193.3,248.0 187,246 C193.3,244.0 194.0,243.3 196,237 Z' fill='#D4AF37' opacity='0.75' filter='url(#poGlow)'/><path d='M806,315 C807.5,319.9 808.1,320.5 813,322 C808.1,323.5 807.5,324.1 806,329 C804.5,324.1 803.9,323.5 799,322 C803.9,320.5 804.5,319.9 806,315 Z' fill='#D4AF37' opacity='0.6'/><path d='M344,126 C345.3,130.2 345.8,130.7 350,132 C345.8,133.3 345.3,133.8 344,138 C342.7,133.8 342.2,133.3 338,132 C342.2,130.7 342.7,130.2 344,126 Z' fill='#D4AF37' opacity='0.55'/><path d='M664,167 C666.4,174.7 667.3,175.6 675,178 C667.3,180.4 666.4,181.3 664,189 C661.6,181.3 660.7,180.4 653,178 C660.7,175.6 661.6,174.7 664,167 Z' fill='#D4AF37' opacity='0.8' filter='url(#poGlow)'/><path d='M884,555 C885.1,558.5 885.5,558.9 889,560 C885.5,561.1 885.1,561.5 884,565 C882.9,561.5 882.5,561.1 879,560 C882.5,558.9 882.9,558.5 884,555 Z' fill='#D4AF37' opacity='0.45'/><path d='M118,606 C119.3,610.2 119.8,610.7 124,612 C119.8,613.3 119.3,613.8 118,618 C116.7,613.8 116.2,613.3 112,612 C116.2,610.7 116.7,610.2 118,606 Z' fill='#D4AF37' opacity='0.5'/><path d='M500,930 C501.8,935.6 502.4,936.2 508,938 C502.4,939.8 501.8,940.4 500,946 C498.2,940.4 497.6,939.8 492,938 C497.6,936.2 498.2,935.6 500,930 Z' fill='#D4AF37' opacity='0.6' filter='url(#poGlow)'/><path d='M262,1103 C263.1,1106.5 263.5,1106.9 267,1108 C263.5,1109.1 263.1,1109.5 262,1113 C260.9,1109.5 260.5,1109.1 257,1108 C260.5,1106.9 260.9,1106.5 262,1103 Z' fill='#D4AF37' opacity='0.42'/><path d='M742,1160 C743.3,1164.2 743.8,1164.7 748,1166 C743.8,1167.3 743.3,1167.8 742,1172 C740.7,1167.8 740.2,1167.3 736,1166 C740.2,1164.7 740.7,1164.2 742,1160 Z' fill='#D4AF37' opacity='0.48'/><path d='M860,857 C861.1,860.5 861.5,860.9 865,862 C861.5,863.1 861.1,863.5 860,867 C858.9,863.5 858.5,863.1 855,862 C858.5,860.9 858.9,860.5 860,857 Z' fill='#D4AF37' opacity='0.4'/><circle cx='150' cy='380' r='1.2' fill='#E8D48A' opacity='0.22'/><circle cx='300' cy='528' r='1.7' fill='#E8D48A' opacity='0.30'/><circle cx='452' cy='236' r='2.2' fill='#E8D48A' opacity='0.38'/><circle cx='588' cy='402' r='1.2' fill='#E8D48A' opacity='0.46'/><circle cx='760' cy='640' r='1.7' fill='#E8D48A' opacity='0.22'/><circle cx='836' cy='214' r='2.2' fill='#E8D48A' opacity='0.30'/><circle cx='232' cy='806' r='1.2' fill='#E8D48A' opacity='0.38'/><circle cx='648' cy='760' r='1.7' fill='#E8D48A' opacity='0.46'/><circle cx='392' cy='1010' r='2.2' fill='#E8D48A' opacity='0.22'/><circle cx='712' cy='1064' r='1.2' fill='#E8D48A' opacity='0.30'/><circle cx='158' cy='1178' r='1.7' fill='#E8D48A' opacity='0.38'/><circle cx='872' cy='1224' r='2.2' fill='#E8D48A' opacity='0.46'/><circle cx='524' cy='570' r='1.2' fill='#E8D48A' opacity='0.22'/><circle cx='68' cy='522' r='1.7' fill='#E8D48A' opacity='0.30'/></svg>", ariaLabel: "Ornament layer: two gold arcs and a dusting of stars"} style="height:100%; width:100%"/>
      </Container>
      <FlexContainer id="po_col" props={direction: "column"} style="height:auto; width:100%; max-width:992px; align-items:center; gap:26px; padding:72px 96px; position:relative">

        <!-- Kicker -->
        <Container id="po_kicker_cell" style="height:auto; width:auto">
          <Text id="po_kicker" props={content: "YOU ARE INVITED", tagName: "span"} style="height:auto; width:auto"/>
        </Container>
        <Container id="po_brand_cell" style="height:auto; width:auto">
          <FlexContainer id="po_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
            <Container id="po_brand_icon_cell" style="height:auto; width:auto"><Icon id="po_brand_icon" props={iconName: "Sparkles", iconSource: "lucide"}/></Container>
            <Container id="po_brand_text_cell" style="height:auto; width:auto"><Text id="po_brand_text" props={content: "SEEKLICHT DESIGN", tagName: "span"}/></Container>
          </FlexContainer>
        </Container>

        <!-- Headline -->
        <Container id="po_title_cell" style="height:auto; width:100%">
          <Text id="po_title" props={content: "OF LIGHT & DUST", tagName: "h1"} style="height:auto; width:100%"/>
        </Container>
        <Container id="po_subtitle_cell" style="height:auto; width:100%">
          <Text id="po_subtitle" props={content: "2026 Autumn Collection Launch", tagName: "p"} style="height:auto; width:100%"/>
        </Container>

        <!-- Three detail lines -->
        <Container id="po_info_cell" style="height:auto; width:100%; padding-top:6px">
          <FlexContainer id="po_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px">
            <Container id="po_time_cell" style="height:auto; width:auto">
              <FlexContainer id="po_time_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_time_icon_cell" style="height:auto; width:auto"><Icon id="po_time_icon" props={iconName: "CalendarDays", iconSource: "lucide"}/></Container>
                <Container id="po_time_text_cell" style="height:auto; width:auto"><Text id="po_time_text" props={content: "Saturday 26 September · Doors 7:30 PM · Show 8:00 PM", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_place_cell" style="height:auto; width:auto">
              <FlexContainer id="po_place_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_place_icon_cell" style="height:auto; width:auto"><Icon id="po_place_icon" props={iconName: "MapPin", iconSource: "lucide"}/></Container>
                <Container id="po_place_text_cell" style="height:auto; width:auto"><Text id="po_place_text" props={content: "West Bund Art Center, Hall B · 2555 Longteng Ave, Shanghai", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_dress_cell" style="height:auto; width:auto">
              <FlexContainer id="po_dress_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                <Container id="po_dress_icon_cell" style="height:auto; width:auto"><Icon id="po_dress_icon" props={iconName: "Ticket", iconSource: "lucide"}/></Container>
                <Container id="po_dress_text_cell" style="height:auto; width:auto"><Text id="po_dress_text" props={content: "Dress: semi-formal · This invitation confirms your seat", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <Container id="po_divider_cell" style="height:1px; width:320px; flex-shrink:0"/>

        <!-- Agenda -->
        <Container id="po_agenda_cell" style="height:auto; width:100%">
          <FlexContainer id="po_agenda_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="po_agenda_title_cell" style="height:auto; width:100%">
              <Text id="po_agenda_title" props={content: "THE EVENING", tagName: "h3"} style="height:auto; width:100%"/>
            </Container>
            <Container id="po_agenda_1_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_1_time_cell" style="height:auto; width:auto"><Text id="po_agenda_1_time" props={content: "20:00", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_1_text_cell" style="height:auto; width:auto"><Text id="po_agenda_1_text" props={content: "Doors open · Welcome from the founder", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_agenda_2_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_2_time_cell" style="height:auto; width:auto"><Text id="po_agenda_2_time" props={content: "20:20", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_2_text_cell" style="height:auto; width:auto"><Text id="po_agenda_2_text" props={content: "Runway: the 'Of Light & Dust' collection", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
            <Container id="po_agenda_3_cell" style="height:auto; width:100%">
              <FlexContainer id="po_agenda_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                <Container id="po_agenda_3_time_cell" style="height:auto; width:auto"><Text id="po_agenda_3_time" props={content: "21:00", tagName: "span"} style="height:auto; width:auto"/></Container>
                <Container id="po_agenda_3_text_cell" style="height:auto; width:auto"><Text id="po_agenda_3_text" props={content: "After-party · signings and conversation", tagName: "span"} style="height:auto; width:auto"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- RSVP -->
        <Container id="po_rsvp_cell" style="height:auto; width:100%">
          <FlexContainer id="po_rsvp_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; gap:28px; padding:28px 30px">
            <Container id="po_rsvp_text_cell" style="height:auto; width:auto">
              <FlexContainer id="po_rsvp_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:10px">
                <Container id="po_rsvp_title_cell" style="height:auto; width:auto"><Text id="po_rsvp_title" props={content: "Scan to reserve a seat", tagName: "h3"} style="height:auto; width:auto"/></Container>
                <Container id="po_rsvp_desc_cell" style="height:auto; width:auto"><Text id="po_rsvp_desc" props={content: "Capacity is 120 seats and your e-ticket confirms the booking. Please give us 48 hours' notice if you can no longer make it.", tagName: "p"} style="height:auto; width:auto"/></Container>
                <Container id="po_rsvp_contact_cell" style="height:auto; width:auto"><Text id="po_rsvp_contact" props={content: "Enquiries: +86 21 5200 8888 · rsvp@seeklicht.example.com", tagName: "span"} style="height:auto; width:auto"/></Container>
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
          <Text id="po_footer" props={content: "SEEKLICHT DESIGN · OF LIGHT & DUST 2026 — demo template, brand and details are fictional", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
      </FlexContainer>
    </FlexContainer>

    <styles>
      # Deep-green evening ground with gold accents
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
      # Uppercase Latin already carries its own spacing: 8px tracking on a 15-glyph kicker reads as a gap,
      # so the tracking comes down and the size comes up to stay above the brand line beneath it.
      @po_kicker = { color: #d4af37; font-size: 15px; font-weight: 700; letter-spacing: 7px; }
      @po_brand_icon = { color: #d4af37; font-size: 20px; }
      @po_brand_text = { color: #d9e7df; font-size: 14px; font-weight: 600; letter-spacing: 2.5px; }
      # 96px was set for four CJK glyphs (384px of ink). "OF LIGHT & DUST" is 15 Latin glyphs —
      # measured, not guessed: uppercase Inter Black runs ~0.62em per glyph including the spaces and
      # the ampersand, so 15 × 0.62 × 64px ≈ 595px, plus 14 × 6px tracking = ~680px inside the 800px
      # content measure. 64px keeps the poster presence without wrapping.
      @po_title = {
        font-size: 64px;
        font-weight: 900;
        letter-spacing: 6px;
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
      @po_subtitle = { color: #9db8ab; font-size: 18px; letter-spacing: 3px; text-align: center; }
      @po_time_icon = { color: #d4af37; font-size: 17px; }
      @po_place_icon = { color: #d4af37; font-size: 17px; }
      @po_dress_icon = { color: #d4af37; font-size: 17px; }
      @po_time_text = { color: #cfe0d6; font-size: 16px; }
      @po_place_text = { color: #cfe0d6; font-size: 16px; }
      @po_dress_text = { color: #cfe0d6; font-size: 16px; }
      @po_divider_cell = { background: linear-gradient(90deg, rgba(212, 175, 55, 0) 0%, #d4af37 50%, rgba(212, 175, 55, 0) 100%); }
      @po_agenda_title = { color: #d4af37; font-size: 14px; font-weight: 700; letter-spacing: 3px; text-align: center; }
      @po_agenda_1_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_2_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_3_time = { color: #d4af37; font-size: 17px; font-weight: 800; letter-spacing: 1px; }
      @po_agenda_1_text = { color: #cfe0d6; font-size: 16px; }
      @po_agenda_2_text = { color: #cfe0d6; font-size: 16px; }
      @po_agenda_3_text = { color: #cfe0d6; font-size: 16px; }
      @po_rsvp_cell = { background: linear-gradient(150deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%); border-radius: 20px; box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(245, 230, 184, 0.18); :scope { border: 1px solid rgba(212, 175, 55, 0.38); } }
      @po_qr_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 14px 34px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @po_rsvp_title = { color: #f5e6b8; font-size: 20px; font-weight: 800; letter-spacing: 1px; }
      @po_rsvp_desc = { color: #9db8ab; font-size: 13px; line-height: 1.7; }
      @po_rsvp_contact = { color: #d4af37; font-size: 12px; letter-spacing: 0.5px; }
      @po_footer = { color: #5f7a6d; font-size: 12px; letter-spacing: 1px; text-align: center; }
    </styles>
  </Page>
</App>
```

> Craft notes: the composition holds at both A4 and 9:16 (vertically centred with generous safe
> margins); the headline pairs `letter-spacing` with the gold gradient for the gown-like feel; the
> RSVP block carries the **qrcode component** (a real, scannable demo link); export to PNG (to
> forward) or PDF (to print).
>
> Texture pass (2026-09-14, visual-composition rule 16) — ① **full-bleed fix**: the root node used to
> carry both the gradient and the padding, which inset the deep-green ground and leaked white at the
> edges; the recipe is now zero padding on the root (gradient only) plus `po_col` capped at
> `max-width:992px` with `padding:88px 96px` (same 800px content width); ② **gold twin-arc ornament
> layer**: two SVG arcs (gradient stroke) + 10 four-point stars (the larger ones glowing) + 14 dust
> motes + a soft glow at the foot, anchored full-bleed with `xMidYMid slice`; ③ a second soft glow at
> the top edge and a multi-stop falloff at the bottom; ④ gradient headline with a soft outer glow
> (`text-shadow`); ⑤ glassy RSVP card (white film + gold border + inner highlight + deep shadow);
> ⑥ white-card QR (radius + shadow + inner padding — the paint/whitespace split recipe).

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese poster is typeset for four-glyph
display lines at 96px with 18px tracking — a square, evenly spaced block. Latin uppercased at the
same size runs to more than twice the measure, so the headline and every display label came down.
What changed:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `po_title` | 96px / `18px` tracking | **64px / 6px** | 「与光同尘」 is 4 glyphs ≈ 438px; "OF LIGHT & DUST" is 15 glyphs — measured at ~0.62em per glyph it lands at ~680px inside the 800px content measure |
| `po_kicker` | 17px / `8px` tracking | **15px / 7px** | "YOU ARE INVITED" is 15 glyphs against 4 + a Latin word; uppercase already carries its own spacing, so tracking comes down while the size stays above the brand line |
| `po_brand_text` | 16px / `3px` | **14px / 2.5px** | "SEEKLICHT DESIGN" vs 拾光设计 (4 glyphs); the tighter tracking keeps it a mark, not a sentence |
| `po_subtitle` | 22px / `6px` | **18px / 3px** | "2026 Autumn Collection Launch" is 27 glyphs; 6px tracking on lowercase Latin reads as broken type |
| `po_agenda_title` | 18px / `4px` | **14px / 3px** | "THE EVENING" is 11 glyphs against 4 CJK chars |
| `po_rsvp_desc` | `line-height: 1.9` | **1.7** | the English note is ~113 glyphs against 39 CJK chars and now wraps to two lines; tighter leading keeps the card compact |
| `po_col` | `padding: 88px 96px; gap: 30px` | **`72px 96px`; `gap: 26px`** | the English column is ~60px taller (longer detail lines, the wrapped RSVP note); trimming the vertical padding and gaps keeps the A4 proportion |

Everything else — the deep-green gradient, the gold ornament layer, the QR card, the divider, the
radii and shadows — is language-neutral and unchanged.

**Copy policy**: not a literal translation. `与光同尘` (a Daoist phrase about light and dust settling
together) becomes the standalone English campaign title "OF LIGHT & DUST" rather than a gloss;
`拾光设计 SEEKLICHT` → **SEEKLICHT DESIGN** (the brand already carried a Latin wordmark); `当晚流程` →
"THE EVENING"; `着装：半正式` → "Dress: semi-formal". The clock is restated in the English
convention (`19:30` → "Doors 7:30 PM") while the agenda keeps 24-hour times, which is how a printed
programme reads. The venue keeps its real Shanghai address; the phone becomes an international-format
line (`+86 21 5200 8888`) with the demo address swapped to `rsvp@seeklicht.example.com`.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
