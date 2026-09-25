# Settings Center — "Cloudgate" team settings

> Template role (product / app tab · SaaS tools): the standard settings layout — section navigation
> on the left (menu), grouped forms on the right (basic information / notification preferences /
> danger zone).
> Scenario: a team settings page for a fictional SaaS product: brand bar on top; a five-section menu
> on the left (basic information selected); on the right, the basic-information form (name / support
> email / industry select / description textarea), the notification preferences (three switch rows),
> and the danger zone (transfer ownership + danger button). Light grey canvas, white section cards,
> zero motion — a utility page.

```lang
<App dsl-version="0.3" name="Cloudgate · Settings Center">
  <Page id="settings" name="Settings" route="/settings">
    <FlexContainer id="st_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Header ─── -->
      <Container id="st_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="st_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="st_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="st_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="st_logo_cell" style="height:auto; width:auto"><Icon id="st_logo" props={iconName: "Settings", iconSource: "lucide"}/></Container>
              <Container id="st_brand_text_cell" style="height:auto; width:auto"><Text id="st_brand" props={content: "Cloudgate · Settings", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="st_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="st_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="st_bell_cell" style="height:auto; width:auto"><Icon id="st_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="st_avatar_cell" style="height:auto; width:auto"><Avatar id="st_avatar" props={text: "C", shape: "circle"} style="height:32px; width:32px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Main region: menu on the left, forms on the right ─── -->
      <Container id="st_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 40px">
        <FlexContainer id="st_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- Left: section navigation -->
          <Container id="st_nav_card" style="flex-shrink:0; height:auto; width:230px">
            <Menu id="st_nav" props={mode: "inline", selectedKeys: ["basic"]} style="height:auto; width:100%; padding:12px 8px">
              <Container id="st_nav_basic" props={itemLabel: "Basic information", itemIcon: "Info"} style="height:auto; width:100%"/>
              <Container id="st_nav_notify" props={itemLabel: "Notifications", itemIcon: "Bell"} style="height:auto; width:100%"/>
              <Container id="st_nav_security" props={itemLabel: "Security", itemIcon: "ShieldCheck"} style="height:auto; width:100%"/>
              <Container id="st_nav_team" props={itemLabel: "Team", itemIcon: "Users"} style="height:auto; width:100%"/>
              <Container id="st_nav_billing" props={itemLabel: "Billing & plan", itemIcon: "Wallet"} style="height:auto; width:100%"/>
            </Menu>
          </Container>

          <!-- Right: form area -->
          <FlexContainer id="st_content_col" props={direction: "column"} style="flex-grow:1; height:auto; width:auto; align-items:stretch; gap:16px">

            <!-- Basic information -->
            <Container id="st_basic_card" style="height:auto; width:100%">
              <FlexContainer id="st_basic_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
                <Container id="st_basic_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_basic_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                    <Container id="st_basic_title_cell" style="height:auto; width:auto"><Text id="st_basic_title" props={content: "Basic information", tagName: "h3"}/></Container>
                    <Container id="st_basic_desc_cell" style="height:auto; width:auto"><Text id="st_basic_desc" props={content: "The name and contact details your product shows publicly — in the help center and in system emails.", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_name_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_name_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_name_label_cell" style="height:auto; width:auto"><Text id="st_field_name_label" props={content: "Product name", tagName: "span"}/></Container>
                    <Container id="st_field_name_input_cell" style="height:auto; width:100%"><Input id="st_field_name_input" props={value: "Cloudgate Workspace", placeholder: "Product name"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_mail_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_mail_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_mail_label_cell" style="height:auto; width:auto"><Text id="st_field_mail_label" props={content: "Support email", tagName: "span"}/></Container>
                    <Container id="st_field_mail_input_cell" style="height:auto; width:100%"><Input id="st_field_mail_input" props={value: "support@cloudgate.example.com", placeholder: "Support email"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_industry_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_industry_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_industry_label_cell" style="height:auto; width:auto"><Text id="st_field_industry_label" props={content: "Industry", tagName: "span"}/></Container>
                    <Container id="st_field_industry_select_cell" style="height:auto; width:320px">
                      <Select id="st_field_industry_select" props={options: [{label: "Company services", value: "biz"}, {label: "Education", value: "edu"}, {label: "Healthcare", value: "health"}, {label: "Retail & e-commerce", value: "retail"}], placeholder: "Company services"} style="height:auto; width:100%"/>
                    </Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_intro_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_intro_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_intro_label_cell" style="height:auto; width:auto"><Text id="st_field_intro_label" props={content: "Product description", tagName: "span"}/></Container>
                    <Container id="st_field_intro_input_cell" style="height:auto; width:100%"><Textarea id="st_field_intro_input" props={placeholder: "One line about your product (shown on the help center home)", rows: 3} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <!-- Notification preferences -->
            <Container id="st_notify_card" style="height:auto; width:100%">
              <FlexContainer id="st_notify_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
                <Container id="st_notify_title_cell" style="height:auto; width:100%"><Text id="st_notify_title" props={content: "Notification preferences", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="st_switch_order_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_order_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_order_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_order_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_order_name_cell" style="height:auto; width:auto"><Text id="st_switch_order_name" props={content: "New order alerts", tagName: "span"}/></Container>
                        <Container id="st_switch_order_desc_cell" style="height:auto; width:auto"><Text id="st_switch_order_desc" props={content: "Push every new order to the admin inbox in real time", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_order_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_order_ctrl" props={checked: true} style="height:22px; width:40px"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_switch_report_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_report_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_report_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_report_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_report_name_cell" style="height:auto; width:auto"><Text id="st_switch_report_name" props={content: "Weekly digest", tagName: "span"}/></Container>
                        <Container id="st_switch_report_desc_cell" style="height:auto; width:auto"><Text id="st_switch_report_desc" props={content: "Send last week's summary every Monday at 9:00", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_report_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_report_ctrl" props={checked: true} style="height:22px; width:40px"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_switch_risk_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_risk_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_risk_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_risk_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_risk_name_cell" style="height:auto; width:auto"><Text id="st_switch_risk_name" props={content: "Risk alerts", tagName: "span"}/></Container>
                        <Container id="st_switch_risk_desc_cell" style="height:auto; width:auto"><Text id="st_switch_risk_desc" props={content: "Notify immediately on stock or payment anomalies", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_risk_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_risk_ctrl" props={checked: false} style="height:22px; width:40px"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <!-- Save actions -->
            <Container id="st_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
              <FlexContainer id="st_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                <Container id="st_cancel_cell" style="height:auto; width:auto"><Button id="st_cancel_btn" props={content: "Cancel", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                <Container id="st_save_cell" style="height:auto; width:auto"><Button id="st_save_btn" props={content: "Save changes", variant: "primary"} style="height:auto; width:auto; padding:9px 26px"/></Container>
              </FlexContainer>
            </Container>

            <!-- Danger zone -->
            <Container id="st_danger_card" style="height:auto; width:100%">
              <FlexContainer id="st_danger_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 24px">
                <Container id="st_danger_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="st_danger_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:3px">
                    <Container id="st_danger_title_cell" style="height:auto; width:auto"><Text id="st_danger_title" props={content: "Transfer ownership", tagName: "span"}/></Container>
                    <Container id="st_danger_desc_cell" style="height:auto; width:auto"><Text id="st_danger_desc" props={content: "Hand team ownership to another member. This cannot be undone.", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_danger_btn_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="st_danger_btn" props={content: "Transfer ownership", variant: "danger"} style="height:auto; width:auto; padding:9px 22px"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Utility page has no data logic; the buttons are declarative feedback only
      @st_save_btn = {
        events: { saveSettings: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Settings saved (demo)"}) } }
      };
      @st_cancel_btn = {
        events: { resetSettings: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Unsaved changes discarded"}) } }
      };
      @st_danger_btn = {
        events: { transferOwnership: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "Transfer needs re-authentication — confirm it in Security (demo)"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and header
      @st_root = { background: #f5f7fa; }
      @st_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @st_logo = { color: #6366f1; font-size: 22px; }
      @st_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @st_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @st_avatar = { background-color: #6366f1; color: #ffffff; font-size: 13px; }

      # 1. Left navigation
      @st_nav_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }

      # 2. Form cards
      @st_basic_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @st_basic_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      # The English subtitle is ~2x the CJK line at the same size; 12px keeps it to a single line in
      # the 938px card so the form below keeps its rhythm.
      @st_basic_desc = { color: #94a3b8; font-size: 12px; }
      @st_field_name_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_mail_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_industry_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_intro_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_notify_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @st_notify_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      # The three Switch nodes carry an explicit 40×22 box: inside a flex cell the engine injects
      # width/height 100% onto the component root, and against a `width:auto` cell that percentage
      # is circular — the control collapses to 0×0 and only its 18px thumb paints. A definite box on
      # the node lets the injected 100% resolve. See Production notes (pre-existing, not Latin-specific).
      @st_switch_order_name = { color: #0f172a; font-size: 14px; font-weight: 600; }
      @st_switch_report_name = { color: #0f172a; font-size: 14px; font-weight: 600; }
      @st_switch_risk_name = { color: #0f172a; font-size: 14px; font-weight: 600; }
      @st_switch_order_desc = { color: #94a3b8; font-size: 12px; }
      @st_switch_report_desc = { color: #94a3b8; font-size: 12px; }
      @st_switch_risk_desc = { color: #94a3b8; font-size: 12px; }
      @st_cancel_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @st_save_btn = {
        color: #ffffff;
        background: #6366f1;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4f46e5; }
      }

      # 3. Danger zone
      @st_danger_card = { background: #fff5f5; border-radius: 14px; :scope { border: 1px solid #fecaca; } }
      @st_danger_title = { color: #991b1b; font-size: 14px; font-weight: 700; }
      @st_danger_desc = { color: #b91c1c; font-size: 12px; }
      @st_danger_btn = {
        color: #ffffff;
        background: #dc2626;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #b91c1c; }
      }
    </styles>
  </Page>
</App>
```

> Craft notes: a settings page = section navigation on the left (menu slot-cells) plus feature cards
> on the right (form / switch list / danger zone); dangerous operations **only provide the entry
> point** (execution goes through the confirmation flow); zero motion — a utility page.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese source is typeset for CJK metrics
(square glyphs, no inter-word spacing). Latin reads roughly twice as wide per word, so every label
and helper line on this page was re-derived against its box; the sizes that survived are ones where
the box has room to spare, and they are listed below as *kept* rather than silently ignored.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| menu item labels | 基础信息 / 通知偏好 / … (4 CJK) | `Basic information` / `Notifications` / `Security` / `Team` / `Billing & plan` | the rail is 230px and each menu row measures 198px; `Basic information` is ~120px of 14px text with its icon, so the rail width is kept and the five sections stay one line each |
| `st_basic_desc` | 12px | 12px (kept) | the English subtitle (99 glyphs, measured **574px**) still fits one line inside the 938px card, so it does **not** drop to a second line and the form below keeps its rhythm |
| switch row descriptions | 12px | 12px (kept) | each row is `space-between` with an auto-width text column and a `flex-shrink:0` switch; the two longest English helpers measure **298px** and **286px** of the row's 938px, leaving the switch well clear |
| `st_danger_desc` | 12px | 12px (kept) | the danger row also resolves as auto + fixed; the English line measures **376px**, and with the 168px button the row stays inside 890px |
| select / textarea widths | `320px` / fluid | unchanged | option labels ("Company services", "Retail & e-commerce") and the textarea `placeholder` are shorter than the boxes they sit in |
| field labels | 13px | 13px (kept) | labels are stacked **above** their controls (not beside them), so English label length costs nothing horizontally |

**One geometry fix, and it is not Latin-specific: the Switch control box.** The three toggles
carried no authored size, so inside their `width:auto` flex cell the engine's fill injection
(`width/height: 100%` on the component root) resolved against a circular percentage and the whole
control collapsed to 0×0 — the track never painted and only the 18px thumb was left hanging at the
card edge. **The Chinese version renders identically** (same collapse reproduced by measurement:
`st_switch_*_ctrl_cell` = 0px wide, `document.scrollWidth` unchanged); it is a template-authoring
gap, not an English one, and `.zh.md` is out of scope here, so it stays as-is on the Chinese side.
The English version gives each Switch node `style="height:22px; width:40px"`, which makes the
injected 100% resolvable: the control is now a 40×22 box at x=1192, flush with the card's inner
edge, and the page reports zero overflowing nodes. Three rows, three attributes — no node added,
removed or rebound.

**No structural changes.** Nothing in this scene is Chinese-only — the danger-zone confirm flow and
the switch semantics translate directly — so no node was dropped or simplified, and no new binding
was introduced.

**Copy policy**: not a literal translation. Chinese-specific framing is rewritten to international
equivalents: `云扉产品` → Cloudgate, `云扉协同` → Cloudgate Workspace, and the support address moved to
`support@cloudgate.example.com`. Industry options use standard international segment names, with
`零售电商` (retail + e-commerce) restated as the two-part "Retail & e-commerce".

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
