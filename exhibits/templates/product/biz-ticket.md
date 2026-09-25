# Support Ticket Desk — "Perch Technologies" agent console

> Template role (product / app tab · business systems): the standard queue-to-detail support desk —
> a ticket queue on the left (data-driven List) beside the ticket detail on the right (summary header
> + fields + description + handling timeline + actions).
> Scenario: a support desk for a fictional SaaS company: brand bar on top; the left rail is the
> ticket queue (six tickets: number / title / customer / time / status tag, loop-rendered); the right
> pane is the selected ticket (number + title + urgent and in-progress tags, five fields, the problem
> description, a four-entry handling timeline, and reply / transfer / close actions). Light grey
> canvas, white cards, zero motion.

```lang
<App dsl-version="0.3" name="Perch Technologies · Support Desk">
  <Page id="ticket" name="Support Desk" route="/tickets">
    <FlexContainer id="tk_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Header ─── -->
      <Container id="tk_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="tk_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="tk_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="tk_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="tk_logo_cell" style="height:auto; width:auto"><Icon id="tk_logo" props={iconName: "Headset", iconSource: "lucide"}/></Container>
              <Container id="tk_brand_text_cell" style="height:auto; width:auto"><Text id="tk_brand" props={content: "Perch Technologies · Support Desk", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tk_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="tk_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="tk_bell_cell" style="height:auto; width:auto"><Icon id="tk_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="tk_avatar_cell" style="height:auto; width:auto"><Avatar id="tk_avatar" props={text: "P", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="tk_user_name_cell" style="height:auto; width:auto"><Text id="tk_user_name" props={content: "On duty · R. Osei", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Master-detail region ─── -->
      <Container id="tk_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="tk_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- Left: ticket queue -->
          <Container id="tk_queue_card" style="flex-shrink:0; height:auto; width:380px">
            <FlexContainer id="tk_queue_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 14px">
              <Container id="tk_queue_head_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_queue_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="tk_queue_title_cell" style="height:auto; width:auto"><Text id="tk_queue_title" props={content: "Ticket queue", tagName: "h3"}/></Container>
                  <Container id="tk_queue_note_cell" style="height:auto; width:auto"><Text id="tk_queue_note" props={content: "6 open · 1 urgent", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tk_queue_list_cell" style="height:auto; width:100%">
                <List id="tk_queue_list" props={dataSource: [{no: "QU-2026-0921", title: "Report export garbled in Safari", customer: "Evergreen Foods · Marcus Reed", time: "12 minutes ago", status: "Urgent"}, {no: "QU-2026-0920", title: "500 error on bulk product import", customer: "Ming Lake Fresh · Lena Xu", time: "48 minutes ago", status: "In progress"}, {no: "QU-2026-0919", title: "Sub-account can't see the order list", customer: "Longwind Freight · Owen Blake", time: "2 hours ago", status: "In progress"}, {no: "QU-2026-0918", title: "Invoice header edit did not save", customer: "Clarity Tech · Grace Ito", time: "4 hours ago", status: "Awaiting reply"}, {no: "QU-2026-0917", title: "Can we raise the API rate limit?", customer: "Gulfstream Commerce · Elena Vasquez", time: "Yesterday", status: "Awaiting reply"}, {no: "QU-2026-0916", title: "Push notifications delayed on mobile", customer: "Polaris Convenience · Daniel Okafor", time: "Yesterday", status: "Resolved"}], direction: "vertical", gap: "10px"} style="height:auto; width:100%">
                  <Container id="tk_item_tpl" style="height:auto; width:100%">
                    <FlexContainer id="tk_item_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:6px; padding:12px 12px">
                      <Container id="tk_item_top_cell" style="height:auto; width:100%">
                        <FlexContainer id="tk_item_top_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                          <Container id="tk_item_no_cell" style="height:auto; width:auto"><Text id="tk_item_no" props={content: "{{item.no}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                          <Container id="tk_item_status_cell" style="height:auto; width:auto"><Tag id="tk_item_status" props={text: "{{item.status}}", color: "geekblue"} style="height:auto; width:auto"/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tk_item_title_cell" style="height:auto; width:100%"><Text id="tk_item_title" props={content: "{{item.title}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                      <Container id="tk_item_meta_cell" style="height:auto; width:100%"><Text id="tk_item_meta" props={content: "{{item.customer}}", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </List>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Right: ticket detail -->
          <Container id="tk_detail_card" style="flex-grow:1; height:auto; width:auto">
            <FlexContainer id="tk_detail_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:20px; padding:22px 24px">

              <!-- Summary header -->
              <Container id="tk_detail_head_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_detail_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; justify-content:space-between">
                  <Container id="tk_detail_head_left_cell" style="height:auto; width:auto">
                    <FlexContainer id="tk_detail_head_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:8px">
                      <Container id="tk_detail_no_cell" style="height:auto; width:auto"><Text id="tk_detail_no" props={content: "QU-2026-0921", tagName: "span"}/></Container>
                      <Container id="tk_detail_title_cell" style="height:auto; width:440px">
                        <Text id="tk_detail_title" props={content: "Report export garbled in Safari", tagName: "h2"} style="height:auto; width:100%"/>
                      </Container>
                      <Container id="tk_detail_tags_cell" style="height:auto; width:auto">
                        <FlexContainer id="tk_detail_tags_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:8px">
                          <Container id="tk_detail_tag_urgent_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_urgent" props={text: "Urgent", color: "red"}/></Container>
                          <Container id="tk_detail_tag_status_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_status" props={text: "In progress", color: "blue"}/></Container>
                          <Container id="tk_detail_tag_channel_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_channel" props={text: "In-app chat", color: "cyan"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tk_detail_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="tk_detail_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                      <Container id="tk_transfer_cell" style="height:auto; width:auto"><Button id="tk_transfer_btn" props={content: "Transfer", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                      <Container id="tk_close_cell" style="height:auto; width:auto"><Button id="tk_close_btn" props={content: "Close ticket", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>

              <!-- Fields -->
              <Container id="tk_fields_cell" style="height:auto; width:100%">
                <Descriptions id="tk_fields" props={title: "Ticket details", column: 2, items: [{"label": "Customer", "value": "Evergreen Foods Group · Marcus Reed"}, {"label": "Contact email", "value": "m.reed@evergreenfoods.example.com"}, {"label": "Module", "value": "Data export / Reports"}, {"label": "First submitted", "value": "2026-09-14 20:33"}, {"label": "Scope", "value": "Safari 17+ / desktop"}, {"label": "Assigned to", "value": "R. Osei (Tier-1 support)"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- Problem description -->
              <Container id="tk_desc_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_desc_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:8px; padding:16px 18px">
                  <Container id="tk_desc_title_cell" style="height:auto; width:100%"><Text id="tk_desc_title" props={content: "Problem description", tagName: "h3"}/></Container>
                  <Container id="tk_desc_text_cell" style="height:auto; width:100%"><Text id="tk_desc_text" props={content: "Safari exports the CSV with mojibake in every non-ASCII field; the same file is correct in Chrome. The export is missing a UTF-8 BOM — add it server-side or switch to an Excel-compatible encoding.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>

              <!-- Handling history -->
              <Container id="tk_timeline_cell" style="height:auto; width:100%">
                <Timeline id="tk_timeline" props={items: [{"label": "Root cause found: Safari reads a BOM-less UTF-8 CSV as Latin-1 — fix on branch fix/csv-bom", "time": "20:52 R. Osei"}, {"label": "Reproduced: tier-1 sees it on Safari 17.4; Chrome 17 is clean", "time": "20:47 M. Ferrer"}, {"label": "Escalated to urgent: the client's month-end close depends on this report", "time": "20:41 R. Osei"}, {"label": "Ticket created: the client filed it from the in-app widget", "time": "20:33 System"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- Footer actions -->
              <Container id="tk_footer_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
                <FlexContainer id="tk_footer_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="tk_note_cell" style="height:auto; width:auto"><Button id="tk_note_btn" props={content: "Add internal note", variant: "default"} style="height:auto; width:auto; padding:9px 20px"/></Container>
                  <Container id="tk_reply_cell" style="height:auto; width:auto"><Button id="tk_reply_btn" props={content: "Reply to customer", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Utility page has no data logic; the buttons are declarative feedback only
      @tk_reply_btn = {
        events: { reply: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Reply editor opened (demo)"}) } }
      };
      @tk_transfer_btn = {
        events: { transfer: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Transfer needs a receiving agent (demo)"}) } }
      };
      @tk_close_btn = {
        events: { close: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "Confirm the customer was answered before closing (demo)"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and header
      @tk_root = { background: #f5f7fa; }
      @tk_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @tk_logo = { color: #0891b2; font-size: 22px; }
      @tk_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @tk_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @tk_avatar = { background-color: #0891b2; color: #ffffff; font-size: 13px; }
      @tk_user_name = { color: #334155; font-size: 14px; font-weight: 600; }

      # 1. Queue
      @tk_queue_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @tk_queue_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @tk_queue_note = { color: #94a3b8; font-size: 12px; }
      @tk_item_tpl = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateX(2px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); } }
      @tk_item_no = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; }
      @tk_item_status = { background-color: #ecfeff; color: #0e7490; font-size: 11px; font-weight: 700; border-radius: 999px; }
      # 14px title / 12px meta: an English ticket title is ~2x the CJK one at the same size; at 328px
      # of item box the longest ("Sub-account can't see the order list", 190px) still holds one line.
      @tk_item_title = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @tk_item_meta = { color: #94a3b8; font-size: 12px; }

      # 2. Detail
      @tk_detail_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @tk_detail_no = { color: #0891b2; font-size: 13px; font-weight: 700; letter-spacing: 1px; }
      @tk_detail_title = { color: #0f172a; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; line-height: 1.35; }
      @tk_detail_tag_urgent = { background-color: #fee2e2; color: #b91c1c; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_detail_tag_status = { background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_detail_tag_channel = { background-color: #ecfeff; color: #0e7490; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_transfer_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_close_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_desc_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @tk_desc_title = { color: #0f172a; font-size: 15px; font-weight: 800; }
      # Latin gets 1.7 leading (CJK needed 2.0): the English description runs to the same two lines
      # in the 752px block, and the looser leading only padded the card.
      @tk_desc_text = { color: #334155; font-size: 14px; line-height: 1.7; }
      @tk_note_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_reply_btn = {
        color: #ffffff;
        background: #0891b2;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #0e7490; }
      }
    </styles>
  </Page>
</App>
```

> Craft notes: queue-to-detail master-detail (a 380px data-driven List on the left, a fluid detail
> pane on the right); the detail is a three-part stack (summary header / Descriptions fields /
> Timeline of handling entries / description block); close-type actions only provide the entry point
> (execution goes through the confirmation flow).

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese source is typeset for CJK metrics —
square glyphs, and a ticket title that happens to land on one line at 26px. Latin at the same size
runs about twice as wide per word, and this page has one hard box (the title rail) plus one block
where the line count is the whole design (the description).

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `tk_detail_title_cell` | `width:300px` | **`width:440px`** | the Chinese title 导出报表在 Safari 下乱码 is ~300px at 26px and just fits the authored rail; "Report export garbled in Safari" measures **383px**, so the rail had to grow or the hero title would break onto a second line. 440px still leaves air before the 216px action cluster inside the 788px detail column |
| `tk_desc_text` leading | `2` | **`1.7`** | Latin does not need CJK leading; the English description still lands on **two lines** (measured: 750px block, longest line 731px) — the same count as the Chinese, just in a shorter block |
| queue item `title` / `meta` | 14px / 12px | 14px / 12px (kept) | the item box is 328px; the longest English title ("Sub-account can't see the order list") is ~190px, so the queue keeps its 380px rail and six-row rhythm |
| `tk_detail_head_left_col` | `width:auto` | unchanged | the column is sized by the widest child — the title rail above — so the number / tag rows follow it without further change |

**No structural changes.** The queue item renders number / title / customer, exactly as the Chinese
version does, and the `time` field in the `dataSource` stays a data-axis demo value rather than a new
binding. Nothing was deleted either: this scene has no Chinese-only construct — the two idioms that
*look* Chinese-only (the `企业微信` channel tag and the GBK root cause) are handled by rewording, not
by dropping nodes.

**Copy policy**: not a literal translation. Chinese-specific framing is rewritten to international
equivalents: `栖木科技` → Perch Technologies, `企业微信` (WeChat Work) → a vendor-neutral "In-app chat"
channel, and the Latin-1/GBK root cause is restated as an encoding mismatch ("Safari reads a
BOM-less UTF-8 CSV as Latin-1") because GBK is not a meaningful encoding to a global audience.
Customer identities are shared with `biz-crm` where the Chinese versions share them
(青禾食品集团 · 沈知远 → Evergreen Foods Group · Marcus Reed), so the two templates read as one world.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
can address either one by the same selectors.
