# Expense Approval — "Cloudgate" reimbursement review

> Template role (product / app tab · business systems): the standard shape of an approval page — a
> request card (stepper progress + form) + a pending queue (inline approve / reject) + an approval log
> timeline.
> Scenario: an expense-approval page for a fictional SaaS: a brand bar on top; the content column
> holds a "New expense request" card (four-step progress: Submit request → Manager review → Finance
> check → Done, currently on step 1; form: type select / amount input / multi-line reason / submit
> button), a "Waiting on you" card (3 requests: title / submitter / amount / pending tag / approve and
> reject buttons) and an "Approval log" timeline (4 entries). Light grey canvas, white cards, zero
> motion.

```lang
<App dsl-version="0.3" name="Cloudgate · Expense Approvals">
  <Page id="approval" name="Expense Approvals" route="/approval">
    <FlexContainer id="ap_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── Top bar ─── -->
      <Container id="ap_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="ap_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="ap_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ap_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="ap_logo_cell" style="height:auto; width:auto"><Icon id="ap_logo" props={iconName: "GitPullRequest", iconSource: "lucide"}/></Container>
              <Container id="ap_brand_text_cell" style="height:auto; width:auto"><Text id="ap_brand" props={content: "Cloudgate · Expense Approvals", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ap_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ap_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="ap_bell_cell" style="height:auto; width:auto"><Icon id="ap_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="ap_avatar_cell" style="height:auto; width:auto"><Avatar id="ap_avatar" props={text: "C", shape: "circle"} style="height:32px; width:32px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── Content column ─── -->
      <Container id="ap_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 40px">
        <FlexContainer id="ap_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:980px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- Request card -->
          <Container id="ap_start_card" style="height:auto; width:100%">
            <FlexContainer id="ap_start_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:22px; padding:26px 28px">
              <Container id="ap_start_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_start_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                  <Container id="ap_start_title_cell" style="height:auto; width:auto"><Text id="ap_start_title" props={content: "New expense request", tagName: "h3"}/></Container>
                  <Container id="ap_start_desc_cell" style="height:auto; width:auto"><Text id="ap_start_desc" props={content: "Submitting routes it through manager review and a finance check — usually within one business day.", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>

              <!-- Four-step progress -->
              <Container id="ap_steps_cell" style="height:auto; width:100%">
                <Steps id="ap_steps" props={current: 0, direction: "horizontal"} style="height:auto; width:100%">
                  <Container id="ap_step_1" props={itemLabel: "Submit request", itemDescription: "In progress"} style="height:auto; width:100%"/>
                  <Container id="ap_step_2" props={itemLabel: "Manager review", itemDescription: "Within 1 business day"} style="height:auto; width:100%"/>
                  <Container id="ap_step_3" props={itemLabel: "Finance check", itemDescription: "Amount & payout check"} style="height:auto; width:100%"/>
                  <Container id="ap_step_4" props={itemLabel: "Done", itemDescription: "Payout notification"} style="height:auto; width:100%"/>
                </Steps>
              </Container>

              <!-- Form -->
              <Container id="ap_form_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_form_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="ap_field_type_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ap_field_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ap_field_type_label_cell" style="height:auto; width:auto"><Text id="ap_field_type_label" props={content: "Expense type", tagName: "span"}/></Container>
                      <Container id="ap_field_type_select_cell" style="height:auto; width:100%"><Select id="ap_field_type_select" props={options: [{label: "Travel", value: "travel"}, {label: "Office supplies", value: "office"}, {label: "Client entertainment", value: "client"}, {label: "Training", value: "training"}], placeholder: "Travel"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_field_amount_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ap_field_amount_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ap_field_amount_label_cell" style="height:auto; width:auto"><Text id="ap_field_amount_label" props={content: "Amount (USD)", tagName: "span"}/></Container>
                      <Container id="ap_field_amount_input_cell" style="height:auto; width:100%"><Input id="ap_field_amount_input" props={placeholder: "0.00"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_field_reason_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_field_reason_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                  <Container id="ap_field_reason_label_cell" style="height:auto; width:auto"><Text id="ap_field_reason_label" props={content: "Description", tagName: "span"}/></Container>
                  <Container id="ap_field_reason_input_cell" style="height:auto; width:100%"><Textarea id="ap_field_reason_input" props={placeholder: "When and where the cost was incurred, and what it was for — a couple of lines helps the approver decide quickly", rows: 3} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>

              <Container id="ap_submit_cell" style="height:auto; width:100%; justify-content:flex-end">
                <FlexContainer id="ap_submit_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="ap_draft_cell" style="height:auto; width:auto"><Button id="ap_draft_btn" props={content: "Save draft", variant: "default"} style="height:auto; width:auto; padding:9px 20px"/></Container>
                  <Container id="ap_submit_btn_cell" style="height:auto; width:auto"><Button id="ap_submit_btn" props={content: "Submit for approval", variant: "primary"} style="height:auto; width:auto; padding:9px 26px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Waiting on you -->
          <Container id="ap_todo_card" style="height:auto; width:100%">
            <FlexContainer id="ap_todo_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="ap_todo_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ap_todo_title_cell" style="height:auto; width:auto"><Text id="ap_todo_title" props={content: "Waiting on you", tagName: "h3"}/></Container>
                  <Container id="ap_todo_note_cell" style="height:auto; width:auto"><Text id="ap_todo_note" props={content: "3 requests pending", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_1_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_1_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_1_name_cell" style="height:auto; width:auto"><Text id="ap_todo_1_name" props={content: "Travel · On-site support, Shanghai client", tagName: "span"}/></Container>
                      <Container id="ap_todo_1_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_1_meta" props={content: "Submitted by C. Xu · 2026-09-14 18:20 · $2,480", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_1_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_1_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_1_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_1_tag" props={text: "Pending", color: "gold"}/></Container>
                      <Container id="ap_todo_1_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_1_reject" props={content: "Reject", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_1_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_1_pass" props={content: "Approve", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_2_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_2_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_2_name_cell" style="height:auto; width:auto"><Text id="ap_todo_2_name" props={content: "Office supplies · Monitors for Engineering", tagName: "span"}/></Container>
                      <Container id="ap_todo_2_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_2_meta" props={content: "Submitted by Q. Su · 2026-09-14 15:02 · $6,890", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_2_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_2_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_2_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_2_tag" props={text: "Pending", color: "gold"}/></Container>
                      <Container id="ap_todo_2_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_2_reject" props={content: "Reject", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_2_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_2_pass" props={content: "Approve", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_3_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_3_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_3_name_cell" style="height:auto; width:auto"><Text id="ap_todo_3_name" props={content: "Client entertainment · Channel partner quarterly", tagName: "span"}/></Container>
                      <Container id="ap_todo_3_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_3_meta" props={content: "Submitted by Y. Lu · 2026-09-13 20:41 · $1,260", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_3_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_3_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_3_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_3_tag" props={text: "Pending", color: "gold"}/></Container>
                      <Container id="ap_todo_3_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_3_reject" props={content: "Reject", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_3_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_3_pass" props={content: "Approve", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Approval log -->
          <Container id="ap_log_card" style="height:auto; width:100%">
            <FlexContainer id="ap_log_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="ap_log_title_cell" style="height:auto; width:100%"><Text id="ap_log_title" props={content: "Approval log", tagName: "h3"}/></Container>
              <Container id="ap_log_timeline_cell" style="height:auto; width:100%">
                <Timeline id="ap_log_timeline" props={items: [{"label": "Finance check passed · payout to salary account on T+1", "time": "Today 09:12 · Finance, C. He"}, {"label": "Manager review passed · note: 'Trip confirmed'", "time": "Yesterday 21:05 · Manager, C. Xu"}, {"label": "Supporting documents attached: rail ticket + 2 hotel invoices", "time": "Yesterday 20:47 · Requester, C. Xu"}, {"label": "Expense request submitted · travel, $2,480", "time": "Yesterday 20:20 · Requester, C. Xu"}]} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Utility page, no data logic; actions are declarative feedback
      @ap_submit_btn = {
        events: { submit: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Request submitted — next stop is manager review (demo)"}) } }
      };
      @ap_draft_btn = {
        events: { draft: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Saved as a draft — pick it up again under My requests"}) } }
      };
      @ap_todo_1_pass = {
        events: { pass1: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Approved — travel $2,480 moves to the finance check"}) } }
      };
      @ap_todo_1_reject = {
        events: { reject1: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "Rejecting needs a reason (demo)"}) } }
      };
      @ap_todo_2_pass = {
        events: { pass2: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Approved — office supplies $6,890 moves to the finance check"}) } }
      };
      @ap_todo_2_reject = {
        events: { reject2: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "Rejecting needs a reason (demo)"}) } }
      };
      @ap_todo_3_pass = {
        events: { pass3: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Approved — client entertainment $1,260 moves to the finance check"}) } }
      };
      @ap_todo_3_reject = {
        events: { reject3: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "Rejecting needs a reason (demo)"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and top bar
      @ap_root = { background: #f5f7fa; }
      @ap_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @ap_logo = { color: #7c3aed; font-size: 22px; }
      @ap_brand = { color: #0f172a; font-size: 16px; font-weight: 800; letter-spacing: -0.2px; }
      @ap_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @ap_avatar = { background-color: #7c3aed; color: #ffffff; font-size: 13px; }

      # 1. Request card
      @ap_start_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ap_start_title = { color: #0f172a; font-size: 18px; font-weight: 800; }
      @ap_start_desc = { color: #94a3b8; font-size: 12px; }
      @ap_field_type_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ap_field_amount_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ap_field_reason_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @ap_draft_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @ap_submit_btn = {
        color: #ffffff;
        background: #7c3aed;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #6d28d9; }
      }

      # 2. Queue
      @ap_todo_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ap_todo_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @ap_todo_note = { color: #94a3b8; font-size: 12px; }
      @ap_todo_1_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ap_todo_2_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ap_todo_3_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @ap_todo_1_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @ap_todo_2_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @ap_todo_3_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @ap_todo_1_meta = { color: #94a3b8; font-size: 12px; }
      @ap_todo_2_meta = { color: #94a3b8; font-size: 12px; }
      @ap_todo_3_meta = { color: #94a3b8; font-size: 12px; }
      @ap_todo_1_tag = { background-color: #fef3c7; color: #b45309; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @ap_todo_2_tag = { background-color: #fef3c7; color: #b45309; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @ap_todo_3_tag = { background-color: #fef3c7; color: #b45309; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @ap_todo_1_reject = { color: #334155; background: #ffffff; border-radius: 8px; font-size: 12px; font-weight: 600; :scope { border: 1px solid #e2e8f0; } :scope:hover { border-color: #94a3b8; } }
      @ap_todo_2_reject = { color: #334155; background: #ffffff; border-radius: 8px; font-size: 12px; font-weight: 600; :scope { border: 1px solid #e2e8f0; } :scope:hover { border-color: #94a3b8; } }
      @ap_todo_3_reject = { color: #334155; background: #ffffff; border-radius: 8px; font-size: 12px; font-weight: 600; :scope { border: 1px solid #e2e8f0; } :scope:hover { border-color: #94a3b8; } }
      @ap_todo_1_pass = { color: #ffffff; background: #7c3aed; border-radius: 8px; font-size: 12px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #6d28d9; } }
      @ap_todo_2_pass = { color: #ffffff; background: #7c3aed; border-radius: 8px; font-size: 12px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #6d28d9; } }
      @ap_todo_3_pass = { color: #ffffff; background: #7c3aed; border-radius: 8px; font-size: 12px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #6d28d9; } }

      # 3. Log
      @ap_log_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ap_log_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
    </styles>
  </Page>
</App>
```

> Craft notes: an approval page is three segments — request (stepper progress + form) + queue (inline
> actions) + log (timeline); the Steps node uses the slot-cell panel cell contract; reject-type
> actions only provide the entry point (a reason form belongs to the confirmation-flow discipline).

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** Same reasoning as the other English templates: CJK
glyphs are square and set without word spacing, so Latin runs wider at the same nominal size. This
scene is a wide utility column (`max-width:980px`) whose rows are `space-between` with auto-width
text on the left, so almost every English string had room to spare — the one size that had to move
is the header wordmark, and everything else was *measured and kept* rather than silently ignored.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `ap_brand` | 17px | **16px** | the wordmark grew from 10 CJK glyphs to 28 Latin ones ("Cloudgate · Expense Approvals", measured **242px** at 16px); 17px would have made the brand row heavier than the header it sits in, and the 64px bar has no vertical room to rebalance |
| `ap_start_desc` | 12px | 12px (kept) | the English helper line measures **571px** inside the 924px card, so it stays on one line and the form below keeps its rhythm |
| `ap_todo_*_name` | 14px | 14px (kept) | the longest English title ("Client entertainment · Channel partner quarterly") measures **330px** against 900px of row width, with the action cluster still on the same line — `space-between` never wraps here |
| `ap_todo_*_meta` | 12px | 12px (kept) | "Submitted by C. Xu · 2026-09-14 18:20 · $2,480" measures **273px**, well clear of the buttons above it |
| `ap_step_*` label / description | 13px / 12px | unchanged (copy trimmed) | the four steps share 924px (≈231px each), but the renderer gives each description a **145px** single clipped line; the first English draft ("Amount & payout verification", 164px) rendered as "Amount & payout verifi…", so the wording was trimmed to "Amount & payout check" (**≈123px**) — the size was right, the string was too long |
| `ap_field_*_label` / select options | 13px | unchanged | labels stack **above** their controls, and "Client entertainment" (~120px) is far shorter than the 454px select box |
| textarea `placeholder` / `rows` | 3 rows | 3 rows (kept) | placeholders wrap inside the control; the English sentence stays under three lines at 13px |

Everything else — the 64px header, card radii, shadows, the 980px column, button paddings, the gold
tag and the timeline shape — is language-neutral and unchanged.

**Verified mechanically** (script diff against the Chinese source): same **120 node ids in the same
order**, same **37 style rules**, and **zero inline-style differences** — the single numeric delta in
the whole document is `ap_brand`'s 17px → 16px above.

**One discovered constraint — the Steps description is a clipped single line.** The browser
measurement pass found exactly one string in the page that did not fit: step 3's description, 164px of
text in a 145px box with `overflow:hidden`, rendering as "Amount & payout verifi…". The renderer's
step description is a one-line cell, not a wrapping paragraph, so the fix was wording (roughly 24
characters is the ceiling at 12px), not geometry. Everything else in the page measured clean: zero
overflowing nodes, zero clipped text, zero elements crossing the 1280px edge.

**No structural changes.** Nothing in this scene is Chinese-only: the stepper, the queue rows and the
timeline all translate directly, so no node was dropped or simplified and no new binding was
introduced.

**Copy policy**: not a literal translation. Chinese business framing is rewritten to international
equivalents: `云扉产品` → Cloudgate (matching `app-settings.en.md`, which names the same fictional
vendor), `报销` → expense/expense request rather than "reimbursement" wherever the row is a noun, and
the currency restated from `¥` to `$` on plausible US SMB amounts. Person names are replaced with
neutral stand-ins (许澈 → C. Xu, 苏晴 → Q. Su, 陆远 → Y. Lu, 何澈 → C. He), matching the
`app-dashboard.en.md` convention of initial + surname, and the avatar carries the single glyph "C".
The timeline's 「行程属实」 note becomes the literal-but-idiomatic 'Trip confirmed'. Rejection copy
stays a stub ("Rejecting needs a reason (demo)") because the Chinese version deliberately routes it
to the confirmation-flow discipline rather than modelling it here.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
