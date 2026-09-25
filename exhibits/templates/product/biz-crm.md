# CRM Customer Management (List + Detail) — "Beacon CRM" Customer Center

> Template role (product / app tab · business systems): the standard master-detail business page —
> a data-driven customer list on the left (List + item template) beside a customer profile on the
> right (summary header + field descriptions + follow-up timeline).
> Scenario: a customer center for a sales team. The left rail is a searchable customer list (name /
> company / status tag, loop-rendered from a dataSource); the right pane holds the full profile of
> the selected customer — avatar, name, company, status tag, follow-up and convert-to-deal actions,
> six customer fields (two-column Descriptions), the last four follow-up entries (Timeline), and a
> note. Light business styling, zero motion (utility-page discipline), static data, no API calls.

```lang
<App dsl-version="0.3" name="Beacon CRM · Customer Center">
  <Page id="crm_customers" name="Customers" route="/customers">
    <FlexContainer id="crm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Header ─── -->
      <Container id="crm_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="crm_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="crm_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crm_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="crm_logo_cell" style="height:auto; width:auto"><Icon id="crm_logo" props={iconName: "Contact", iconSource: "lucide"}/></Container>
              <Container id="crm_brand_text_cell" style="height:auto; width:auto"><Text id="crm_brand" props={content: "Beacon CRM · Customer Center", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="crm_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crm_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="crm_bell_cell" style="height:auto; width:auto"><Icon id="crm_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="crm_avatar_cell" style="height:auto; width:auto"><Avatar id="crm_avatar" props={text: "D", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="crm_user_name_cell" style="height:auto; width:auto"><Text id="crm_user_name" props={content: "Dana Whitfield", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Master-detail region ─── -->
      <Container id="crm_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="crm_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">

          <!-- Left: customer list -->
          <Container id="crm_list_card" style="flex-shrink:0; height:auto; width:320px">
            <FlexContainer id="crm_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 16px">
              <Container id="crm_list_head_cell" style="height:auto; width:100%">
                <FlexContainer id="crm_list_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="crm_list_title_cell" style="height:auto; width:auto"><Text id="crm_list_title" props={content: "Customer list", tagName: "h3"}/></Container>
                  <Container id="crm_list_count_cell" style="height:auto; width:auto"><Text id="crm_list_count" props={content: "6 in pipeline", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crm_search_cell" style="height:auto; width:100%">
                <Input id="crm_search" props={placeholder: "Search name / company"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crm_list_body_cell" style="height:auto; width:100%">
                <List id="crm_list" props={dataSource: [{name: "Marcus Reed", company: "Evergreen Foods Group", status: "Priority"}, {name: "Elena Vasquez", company: "Gulfstream Commerce", status: "Proposal"}, {name: "Daniel Okafor", company: "Polaris Convenience", status: "Priority"}, {name: "Sofia Lindqvist", company: "Cloudrest Tea", status: "New lead"}, {name: "Victor Hale", company: "Tradewind Logistics", status: "Proposal"}, {name: "Nadia Farouk", company: "Clearwater Travel", status: "New lead"}], direction: "vertical", gap: "10px"} style="height:auto; width:100%">
                  <Container id="crm_item_tpl" style="height:auto; width:100%">
                    <FlexContainer id="crm_item_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:6px; padding:12px 12px">
                      <Container id="crm_item_name_cell" style="height:auto; width:100%"><Text id="crm_item_name" props={content: "{{item.name}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                      <Container id="crm_item_company_cell" style="height:auto; width:100%"><Text id="crm_item_company" props={content: "{{item.company}}", tagName: "span"} style="height:auto; width:100%"/></Container>
                      <Container id="crm_item_status_cell" style="height:auto; width:auto"><Tag id="crm_item_status" props={text: "{{item.status}}", color: "blue"} style="height:auto; width:auto"/></Container>
                    </FlexContainer>
                  </Container>
                </List>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Right: customer profile -->
          <Container id="crm_detail_card" style="flex-grow:1; height:auto; width:auto">
            <FlexContainer id="crm_detail_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:20px; padding:22px 24px">

              <!-- Summary header -->
              <Container id="crm_profile_cell" style="height:auto; width:100%">
                <FlexContainer id="crm_profile_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="crm_profile_left_cell" style="height:auto; width:auto">
                    <FlexContainer id="crm_profile_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
                      <Container id="crm_profile_avatar_cell" style="height:auto; width:auto"><Avatar id="crm_profile_avatar" props={text: "MR", shape: "square"} style="height:52px; width:52px"/></Container>
                      <Container id="crm_profile_text_cell" style="height:auto; width:auto">
                        <FlexContainer id="crm_profile_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:6px">
                          <Container id="crm_profile_name_row_cell" style="height:auto; width:auto">
                            <FlexContainer id="crm_profile_name_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                              <Container id="crm_profile_name_cell" style="height:auto; width:auto"><Text id="crm_profile_name" props={content: "Marcus Reed", tagName: "h2"}/></Container>
                              <Container id="crm_profile_tag_cell" style="height:auto; width:auto"><Tag id="crm_profile_tag" props={text: "Priority", color: "gold"}/></Container>
                            </FlexContainer>
                          </Container>
                          <Container id="crm_profile_company_cell" style="height:auto; width:auto"><Text id="crm_profile_company" props={content: "Evergreen Foods Group · Head of Procurement", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="crm_profile_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="crm_profile_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                      <Container id="crm_follow_btn_cell" style="height:auto; width:auto"><Button id="crm_follow_btn" props={content: "Log follow-up", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                      <Container id="crm_convert_cell" style="height:auto; width:auto"><Button id="crm_convert_btn" props={content: "Convert to deal", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>

              <!-- Customer fields -->
              <Container id="crm_fields_cell" style="height:auto; width:100%">
                <Descriptions id="crm_fields" props={title: "Customer profile", column: 2, items: [{"label": "Industry", "value": "Food processing · supply chain"}, {"label": "Company size", "value": "2,400 staff · $180M revenue"}, {"label": "Account owner", "value": "Marcus Reed (Head of Procurement)"}, {"label": "Lead source", "value": "Trade show · Spring 2026 F&B Expo"}, {"label": "Phone", "value": "+1 415 555 0186"}, {"label": "Email", "value": "m.reed@evergreenfoods.example.com"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- Follow-up timeline -->
              <Container id="crm_timeline_cell" style="height:auto; width:100%">
                <Timeline id="crm_follow_timeline" props={items: [{"label": "Call: confirmed Q3 supply categories and 30-day payment terms", "time": "2026-09-12 15:40"}, {"label": "Samples sent: 6 SKUs across chilled dairy and bakery", "time": "2026-09-08 10:20"}, {"label": "On-site visit: toured the central kitchen, demoed reconciliation", "time": "2026-09-03 14:00"}, {"label": "First contact: trade-show lead, regional bulk purchasing", "time": "2026-08-27 11:15"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- Note -->
              <Container id="crm_note_cell" style="height:auto; width:100%">
                <Text id="crm_note" props={content: "Note: payment terms are the sticking point — finance must approve the 30-day option; custom quote due Wednesday.", tagName: "p"} style="height:auto; width:100%; padding:14px 16px"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Utility page has no data logic; the buttons are declarative feedback only
      @crm_follow_btn = {
        events: { addFollow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Follow-up form opened (demo)"}) } }
      };
      @crm_convert_btn = {
        events: { convertLead: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Deal created: Evergreen Foods Group · Q3 bulk order"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and header
      @crm_root = { background: #f4f6fb; }
      @crm_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @crm_logo = { color: #2563eb; font-size: 22px; }
      @crm_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @crm_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @crm_avatar = { background-color: #2563eb; color: #ffffff; font-size: 13px; }
      @crm_user_name = { color: #334155; font-size: 14px; font-weight: 600; }

      # 1. Left list
      @crm_list_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @crm_list_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @crm_list_count = { color: #94a3b8; font-size: 12px; }
      @crm_item_tpl = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateX(2px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); } }
      # 12px company line: an English company name is ~2x the CJK one at the same size, so it keeps
      # 12px (two stacked lines at 13px+ would push the third list row out of the first screen).
      @crm_item_name = { color: #0f172a; font-size: 15px; font-weight: 700; }
      @crm_item_company = { color: #64748b; font-size: 12px; }
      @crm_item_status = { background-color: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 700; border-radius: 999px; }

      # 2. Right profile
      @crm_detail_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @crm_profile_avatar = { background-color: #dbeafe; color: #1d4ed8; font-size: 20px; font-weight: 800; }
      @crm_profile_name = { color: #0f172a; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; }
      @crm_profile_tag = { background-color: #fef3c7; color: #b45309; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @crm_profile_company = { color: #475569; font-size: 14px; }
      @crm_follow_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @crm_convert_btn = {
        color: #ffffff;
        background: #2563eb;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #1d4ed8; }
      }
      @crm_note_cell = { background: #eff6ff; border-radius: 12px; :scope { border-left: 3px solid #2563eb; } }
      # Latin gets 1.7 leading (CJK needed 1.8) — the English note is one full-width line, and the
      # looser leading only made the box taller without helping the read.
      @crm_note = { color: #1e3a8a; font-size: 13px; line-height: 1.7; }
    </styles>
  </Page>
</App>
```

> Craft notes: master-detail layout (fixed 320px list on the left, fluid profile on the right); the
> list is **data-driven** (List with a `{{item.*}}` template — the data axis on display); the profile
> is a three-part stack (summary header / Descriptions fields / follow-up Timeline); a utility page
> ships with zero motion.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** Same reasoning as the other English templates:
the Chinese source is typeset for CJK metrics (square glyphs, no inter-word spacing), so Latin at the
same nominal size runs wider. This scene is a form-and-list page — most of it is auto-width text in
wide containers, so the deltas are small; the note block was the one place where the English copy had
to be *written to a measure* rather than re-sized.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `crm_note` leading | `1.8` | **`1.7`** | Latin does not need CJK leading; at 1.8 the single-line note box only grew taller |
| `crm_note` copy | 44 CJK glyphs | **112 Latin glyphs** | written to a measure: the note box is 813px of text width (816px minus the 3px accent border), and the English line measures **726px** — one line, same as the Chinese. The phrasing was tightened rather than allowed to wrap, because a wrapped note would push the whole detail column down |
| `crm_item_company` | 12px | 12px (kept) | an English company name is ~2x the CJK width; keeping 12px holds the 6-row list at the same height so the master column still fills the first screen |
| `crm_profile_name` | 26px | 26px (kept) | "Marcus Reed" is 11 Latin glyphs ≈ 160px — no longer than the 3 CJK glyphs it replaces at display size |
| list card / detail card widths | `320px` / fluid | unchanged | the master column carries a 3-line stacked item (name / company / tag), so its width is set by the tag row, not by the name |

Everything else — radii, shadows, the action button padding, the Descriptions column count, the
Timeline shape and the hover translate on list items — is language-neutral and unchanged.

**Copy policy**: not a literal translation. Chinese-specific framing is rewritten to international
equivalents: `长风 CRM` → Beacon CRM, `青禾食品集团` → Evergreen Foods Group, person names replaced
with neutral English stand-ins (沈知远 → Marcus Reed), and the phone number moved from the mainland
`138-0000-2688` format to `+1 415 555 0186` with company size restated from 年营收 18 亿 to
`$180M revenue` (USD, not RMB). Status vocabulary maps onto standard CRM English: 重点跟进 → Priority,
方案沟通 → Proposal, 新线索 → New lead.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
