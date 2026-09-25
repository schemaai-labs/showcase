# Interaction loops (inline edit + destructive confirm) — "Paperlane Notes"

> Template role (interaction / motion tab, P2): two classic event-driven loops — **inline editing**
> (direct manipulation: draft state plus an explicit save / discard) and **destructive-action
> confirmation** (overlay + type-the-object-name gate + result passed back).
> Scenario: a note-management demo. A note's title can be edited in place (edit → draft input →
> save/cancel; the original is untouched until you save). "Delete note" goes through a confirmation
> overlay that states the impact, only submits once the original name is typed, and reports its
> result either way; on confirm the page switches to the deleted state. All state lives on the owner
> (bindings are path references only, and the boolean flags come in pairs).

```lang
<App dsl-version="0.3" name="Paperlane Notes · Interaction Loops">
  <!-- ══════════════ Main page ══════════════ -->
  <Page id="loop_home" name="Notes" route="/">
    <FlexContainer id="loop_page" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="loop_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:stretch; gap:18px; padding:56px 32px 72px">

        <!-- Page header -->
        <Container id="loop_head_cell" style="height:auto; width:100%">
          <FlexContainer id="loop_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:6px">
            <Container id="loop_title_cell" style="height:auto; width:auto"><Text id="loop_title" props={content: "Paperlane Notes · Interaction Loops", tagName: "h1"}/></Container>
            <Container id="loop_sub_cell" style="height:auto; width:auto"><Text id="loop_sub" props={content: "Edit in place — nothing changes until you save. Deleting asks for the note name first.", tagName: "p"}/></Container>
          </FlexContainer>
        </Container>

        <!-- Note card (owner: value / draft / editing / idle / present / deleted) -->
        <Container id="loop_note_card" style="height:auto; width:100%">
          <FlexContainer id="loop_note_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:24px 26px">

            <!-- Deleted state -->
            <Container id="loop_deleted_cell" style="height:auto; width:100%">
              <Text id="loop_deleted_text" props={content: "Note deleted — the overlay returned confirmed = true. Refresh to restore the demo data.", visible: "{{DOM.loop_note_card.data.deleted}}"} style="height:auto; width:100%; padding:14px 16px"/>
            </Container>

            <!-- Title row (view / edit states swap in pairs) -->
            <Container id="loop_row_cell" style="height:auto; width:100%">
              <FlexContainer id="loop_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                <Container id="loop_value_cell" style="height:auto; width:auto; flex-grow:1">
                  <Text id="loop_value" props={content: "{{DOM.loop_note_card.data.value}}", visible: "{{DOM.loop_note_card.data.idle}}"} style="height:auto; width:100%"/>
                </Container>
                <Container id="loop_input_cell" style="height:auto; width:100%; flex-grow:1">
                  <Input id="loop_input" props={value: "{{DOM.loop_note_card.data.draft}}", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:100%"/>
                </Container>
                <Container id="loop_edit_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_edit_btn" props={content: "Edit", variant: "default", visible: "{{DOM.loop_note_card.data.idle}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                <Container id="loop_save_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_save_btn" props={content: "Save", variant: "primary", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                <Container id="loop_cancel_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_cancel_btn" props={content: "Cancel", variant: "default", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
              </FlexContainer>
            </Container>

            <!-- Meta + destructive entry point -->
            <Container id="loop_meta_row_cell" style="height:auto; width:100%; padding-top:2px">
              <FlexContainer id="loop_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                <Container id="loop_meta_cell" style="height:auto; width:auto"><Text id="loop_meta" props={content: "Last edited today 14:20 · filed under Work", tagName: "span"}/></Container>
                <Container id="loop_delete_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_delete_btn" props={content: "Delete note", variant: "danger", visible: "{{DOM.loop_note_card.data.present}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- Notes card -->
        <Container id="loop_tip_card" style="height:auto; width:100%">
          <FlexContainer id="loop_tip_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:18px 22px">
            <Container id="loop_tip_title_cell" style="height:auto; width:auto"><Text id="loop_tip_title" props={content: "What makes the loop hold", tagName: "h3"}/></Container>
            <Container id="loop_tip_1_cell" style="height:auto; width:100%"><Text id="loop_tip_1" props={content: "· Edit copies value into draft and flips the paired flags (editing / idle); Cancel only swaps the state back", tagName: "span"} style="height:auto; width:100%"/></Container>
            <Container id="loop_tip_2_cell" style="height:auto; width:100%"><Text id="loop_tip_2" props={content: "· Delete opens the overlay first (overlay.open, sendData carries the note name) — never runs directly", tagName: "span"} style="height:auto; width:100%"/></Container>
            <Container id="loop_tip_3_cell" style="height:auto; width:100%"><Text id="loop_tip_3" props={content: "· The result returns via onOverlayClose(result) to the page root; only then is the note deleted", tagName: "span"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      # Inline editing (value/draft + the paired flags editing/idle)
      @loop_edit_btn = {
        events: { startEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.draft = DOM.loop_note_card.data.value; DOM.loop_note_card.data.editing = true; DOM.loop_note_card.data.idle = false" } }
      }
      @loop_save_btn = {
        events: { commitEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.value = DOM.loop_note_card.data.draft; DOM.loop_note_card.data.editing = false; DOM.loop_note_card.data.idle = true; " } }
      }
      @loop_cancel_btn = {
        events: { cancelEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.editing = false; DOM.loop_note_card.data.idle = true; DOM.loop_note_card.data.draft = DOM.loop_note_card.data.value" } }
      }
      # Destructive action: open the confirm overlay (page resolves by page name; sendData carries the object name — the confirmation phrase matches it)
      @loop_delete_btn = {
        events: { askDelete: { trigger: "onClick", action: overlay.open({page: "Delete note", mode: "modal", sendData: {name: "Weekly draft"}}) } }
      }
      # owner: inline-edit state (the overlay result is written back cross-page by the **sub-page root**, see below)
      @loop_note_card = {
        data: { value: "Weekly draft", draft: "Weekly draft", editing: false, idle: true, present: true, deleted: false }
      }
    </script>
    <styles>
      @loop_page = { background: #f6f7fb; }
      @loop_title = { color: #0f172a; font-size: 30px; font-weight: 900; letter-spacing: -0.6px; }
      @loop_sub = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @loop_note_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @loop_value = { color: #0f172a; font-size: 22px; font-weight: 800; letter-spacing: -0.2px; }
      @loop_meta = { color: #94a3b8; font-size: 13px; }
      @loop_edit_btn = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; } :scope:hover { border-color: #94a3b8; } }
      @loop_save_btn = { color: #ffffff; background: #4f46e5; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #4338ca; } }
      @loop_cancel_btn = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; } :scope:hover { border-color: #94a3b8; } }
      @loop_delete_btn = { color: #b91c1c; background: #fef2f2; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { border: 1px solid #fecaca; transition: background-color 0.2s ease; } :scope:hover { background-color: #fee2e2; } }
      @loop_deleted_cell = { background: #f0fdf4; border-radius: 12px; :scope { border: 1px solid #bbf7d0; } }
      @loop_deleted_text = { color: #15803d; font-size: 13px; font-weight: 600; line-height: 1.7; }
      @loop_tip_card = { background: #fffbeb; border-radius: 14px; :scope { border: 1px solid #fde68a; } }
      @loop_tip_title = { color: #92400e; font-size: 15px; font-weight: 800; }
      @loop_tip_1 = { color: #a16207; font-size: 13px; line-height: 1.7; }
      @loop_tip_2 = { color: #a16207; font-size: 13px; line-height: 1.7; }
      @loop_tip_3 = { color: #a16207; font-size: 13px; line-height: 1.7; }
    </styles>
  </Page>

  <!-- ══════════════ Confirmation overlay (sub-page) ══════════════ -->
  <Page id="loop_confirm" name="Delete note" subpage>
    <FlexContainer id="loop_confirm_root" props={direction: "column"} style="width:100%; height:auto">
      <FlexContainer id="loop_confirm_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:26px 26px 22px">
        <Container id="loop_confirm_title_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_title" props={content: "Delete the note “Weekly draft”?", tagName: "h3"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_impact_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_impact" props={content: "This removes the note and every past revision. The action cannot be undone or recovered.", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_hint_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_hint" props={content: "Type the note name “Weekly draft” to confirm:", tagName: "span"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_input_cell" style="height:auto; width:100%">
          <Input id="loop_confirm_input" props={value: "{{DOM.loop_confirm_root.data.confirm_text}}", placeholder: "Weekly draft"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_error_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_error" props={content: "The name does not match — the confirm button stays disabled.", visible: "{{DOM.loop_confirm_root.data.name_mismatch}}"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_actions_cell" style="height:auto; width:100%; justify-content:flex-end; gap:12px">
          <Container id="loop_confirm_cancel_cell" style="height:auto; width:auto"><Button id="loop_confirm_cancel" props={content: "Cancel", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="loop_confirm_ok_ready_cell" props={visible: "{{DOM.loop_confirm_root.data.phrase_ok}}"} style="height:auto; width:auto"><Button id="loop_confirm_ok_ready" props={content: "Delete note", variant: "danger"} style="height:auto; width:auto; padding:9px 24px"/></Container>
          <Container id="loop_confirm_ok_blocked_cell" props={visible: "{{DOM.loop_confirm_root.data.name_mismatch}}"} style="height:auto; width:auto"><Button id="loop_confirm_ok_blocked" props={content: "Delete note", variant: "danger", disabled: true} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      # Page root: receives sendData (the original values; the name comparison happens in the event code — bindings must not carry expressions)
      # The gate UI swaps two static buttons via **paired visibility flags** (phrase_ok / name_mismatch):
      # a `disabled` **literal boolean** does not take part in re-resolution, which avoids the known
      # binding re-resolution hazard inside overlays (see roadmap/template-library.md §13).
      @loop_confirm_root = {
        data: { confirm_text: "", required_phrase: "Weekly draft", name_mismatch: true, phrase_ok: false },
        events: {
          initFromSendData: { trigger: "onOverlayInit", input: "data", code: "DOM.loop_confirm_root.data.required_phrase = data.name" },
          # Result hand-back: the sub-page root receives closeResult before the instance is removed and
          # **writes back across pages** to the main page owner
          commitResult: { trigger: "onOverlayClose", input: "event", code: "if (event && event.confirmed) { Notes.loop_note_card.data.deleted = true; Notes.loop_note_card.data.present = false; }" }
        }
      }
      # Validate on input: the onChange code compares directly and flips the gate flags, writing text
      # and flags to data in a single event (no onUpdate derivation — see §13
      # "late stale execution overwrites" in the ledger).
      @loop_confirm_input = {
        events: {
          verifyPhrase: { trigger: "onChange", input: "event", code: "var v = event && event.target ? event.target.value : event; DOM.loop_confirm_root.data.confirm_text = v; DOM.loop_confirm_root.data.name_mismatch = v !== DOM.loop_confirm_root.data.required_phrase; DOM.loop_confirm_root.data.phrase_ok = v === DOM.loop_confirm_root.data.required_phrase" }
        }
      }
      @loop_confirm_cancel = {
        events: { cancelDelete: { trigger: "onClick", action: overlay.close({result: {confirmed: false}}) } }
      }
      @loop_confirm_ok_ready = {
        events: { confirmDelete: { trigger: "onClick", action: overlay.close({result: {confirmed: true}}) } }
      }
    </script>
    <styles>
      @loop_confirm_root = { background: #ffffff; }
      @loop_confirm_title = { color: #0f172a; font-size: 19px; font-weight: 900; letter-spacing: -0.2px; }
      @loop_confirm_impact = { color: #b91c1c; font-size: 13px; line-height: 1.7; }
      @loop_confirm_hint = { color: #475569; font-size: 13px; }
      @loop_confirm_error = { color: #dc2626; font-size: 12px; font-weight: 600; }
      @loop_confirm_cancel = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; } :scope:hover { border-color: #94a3b8; } }
      @loop_confirm_ok_ready = { color: #ffffff; background: #dc2626; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b91c1c; } }
      @loop_confirm_ok_blocked = { color: #ffffff; background: #dc2626; border-radius: 10px; font-size: 13px; font-weight: 700; }
    </styles>
  </Page>
</App>
```

> Production notes: the two-loop discipline — inline-edit state belongs to the owner (draft + **paired
> flags** editing/idle, no expressions in bindings); a destructive action is **never wired straight to
> execution** (overlay.open + sendData carrying the object name → the sub-page `onOverlayInit` injects
> it → the **onChange event code computes** the comparison and the gate flags directly (the decision
> lives in event code) → the gate UI swaps two static buttons via **paired visibility flags**
> (`phrase_ok` / `name_mismatch`, sidestepping the `disabled`-binding re-resolution hazard inside
> overlays) → `overlay.close({result})` → the main page root sets the state from `result.confirmed`).

## Production notes

**Same scene, re-set for Latin type (2026-09-25).** This template is mostly UI chrome rather than
display type, so the geometry work was small — but one thing was not optional.

**The validation literal is part of the behaviour, not the copy.** The Chinese version gates the
destructive submit on typing the note name `周报草稿`; that string appears in four places that must
agree — `sendData.name`, the `required_phrase` seed, the input placeholder, and the hint text. All
four are now `Weekly draft`. **The English document is therefore only passable with the English
phrase** — E2E and the confirm flow must type `Weekly draft`, not the Chinese name.

Geometry and type:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Page title | 30px | 30px | "Paperlane Notes · Interaction Loops" is ~34 glyphs; measured 513px inside a 696px column, so it still holds one line |
| Body copy leading | 1.8 / 1.9 | **1.7** | Latin does not need CJK leading; used on the subtitle, the deleted banner and the three tip lines |
| Tip lines | 13px | 13px | copy trimmed to fit one line each inside the 716px tip card (~110 glyphs) instead of growing the card to six lines |
| Note title / meta / buttons | 22px / 13px / 13px | unchanged | Latin button labels (Edit, Save, Cancel, Delete note) are *shorter* than the Chinese ones, so the button row only gets tighter |
| `letter-spacing` | −0.8px / −0.3px | **−0.6px / −0.2px** | Latin capitals already carry their own sidebearings; the CJK tracking was too tight here |

**Copy policy**: not a literal translation. `云笺笔记` → Paperlane Notes; `周报草稿` → "Weekly draft";
`编辑 / 保存 / 取消 / 删除此笔记` → "Edit / Save / Cancel / Delete note"; the overlay page name
`确认删除` → "Delete note" (the `overlay.open({page})` argument was updated with it).

**One structural rename.** The main page's `name` is the alias used for cross-page write-back in event
code (`笔记.loop_note_card.data…`), so it became `Notes` and that code line follows. Node **ids** are
identical to the Chinese version, so tooling and E2E can address either document with the same
selectors.
