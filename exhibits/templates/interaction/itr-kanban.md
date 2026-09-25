# Kanban drag and drop (cross-column + handles) — "Starport App" sprint board

> Template role (interaction / motion tab): the flagship shape of runtime drag — a three-column
> data-driven board (`sortable` + `dataSource` + shared `group` for cross-column drops + drag handles
> + three-state onChange written back to data).
> Scenario: a team sprint board: a title bar (sprint info + member avatars + new task), three lanes
> (To do / In progress / Done) each holding task cards (title + priority tag + owner + due date),
> **dragging a card by its handle moves it across columns**, and cards re-order inside a column; the
> hint stays visible (dragging is not the only way in). Light workbench ground, no API, static data.

```lang
<App dsl-version="0.3" name="Starport App · Sprint Board">
  <Page id="board" name="Sprint board" route="/board">
    <FlexContainer id="kb_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Title bar ─── -->
      <Container id="kb_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="kb_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="kb_header_left_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="kb_header_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="kb_logo_cell" style="height:auto; width:auto"><Icon id="kb_logo" props={iconName: "Kanban", iconSource: "lucide"}/></Container>
              <Container id="kb_title_cell" style="height:auto; width:auto"><Text id="kb_title" props={content: "Starport App · Sprint Board", tagName: "h1"}/></Container>
              <Container id="kb_sprint_cell" style="height:auto; width:auto"><Tag id="kb_sprint" props={text: "Sprint 24 · Sep 8 – 21", color: "geekblue"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="kb_header_right_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="kb_header_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="kb_member_1_cell" style="height:auto; width:auto"><Avatar id="kb_member_1" props={text: "C", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_member_2_cell" style="height:auto; width:auto"><Avatar id="kb_member_2" props={text: "Y", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_member_3_cell" style="height:auto; width:auto"><Avatar id="kb_member_3" props={text: "Q", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_create_cell" style="height:auto; width:auto"><Button id="kb_create_btn" props={content: "New task", variant: "primary"} style="height:auto; width:auto; padding:8px 18px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Usage hint (dragging is not the only way in) ─── -->
      <Container id="kb_hint_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:12px 24px 4px">
        <FlexContainer id="kb_hint_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
          <Container id="kb_hint_icon_cell" style="height:auto; width:auto"><Icon id="kb_hint_icon" props={iconName: "Info", iconSource: "lucide"}/></Container>
          <Container id="kb_hint_text_cell" style="height:auto; width:auto"><Text id="kb_hint_text" props={content: "Drag a card by its handle to move it across columns; ↑/↓ reorders within a column.", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. Three lanes ─── -->
      <Container id="kb_board" style="flex-grow:1; height:auto; width:100%; padding:12px 24px 32px">
        <FlexContainer id="kb_board_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- To do -->
          <Container id="kb_lane_todo_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_todo" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_todo_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_todo_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_todo_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_todo_title_cell" style="height:auto; width:auto"><Text id="kb_lane_todo_title" props={content: "To do", tagName: "h3"}/></Container>
                    <Container id="kb_lane_todo_count_cell" style="height:auto; width:auto"><Text id="kb_lane_todo_count" props={content: "{{DOM.kb_root.data.todo.length}} tasks", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_todo_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_todo" props={dataSource: "{{DOM.kb_root.data.todo}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_todo_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_todo_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_todo_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_todo_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_todo_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_todo_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_todo_grip_text_cell" style="height:auto; width:auto"><Text id="kb_todo_grip_text" props={content: "Drag", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                        <Container id="kb_todo_card_title_cell" style="height:auto; width:100%"><Text id="kb_todo_card_title" props={content: "{{item.title}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                        <Container id="kb_todo_card_meta_cell" style="height:auto; width:100%">
                          <FlexContainer id="kb_todo_card_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                            <Container id="kb_todo_card_pri_cell" style="height:auto; width:auto"><Tag id="kb_todo_card_pri" props={text: "{{item.priority}}", color: "gold"} style="height:auto; width:auto"/></Container>
                            <Container id="kb_todo_card_owner_cell" style="height:auto; width:auto">
                              <FlexContainer id="kb_todo_card_owner_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
                                <Container id="kb_todo_card_owner_name_cell" style="height:auto; width:auto"><Text id="kb_todo_card_owner_name" props={content: "{{item.owner}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                                <Container id="kb_todo_card_due_cell" style="height:auto; width:auto"><Text id="kb_todo_card_due" props={content: "{{item.due}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                              </FlexContainer>
                            </Container>
                          </FlexContainer>
                        </Container>
                      </FlexContainer>
                    </Container>
                  </Sortable>
                </Container>
              </FlexContainer>
            </Container>
          </Container>

          <!-- In progress -->
          <Container id="kb_lane_doing_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_doing" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_doing_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_doing_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_doing_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_doing_title_cell" style="height:auto; width:auto"><Text id="kb_lane_doing_title" props={content: "In progress", tagName: "h3"}/></Container>
                    <Container id="kb_lane_doing_count_cell" style="height:auto; width:auto"><Text id="kb_lane_doing_count" props={content: "{{DOM.kb_root.data.doing.length}} tasks", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_doing_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_doing" props={dataSource: "{{DOM.kb_root.data.doing}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_doing_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_doing_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_doing_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_doing_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_doing_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_doing_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_doing_grip_text_cell" style="height:auto; width:auto"><Text id="kb_doing_grip_text" props={content: "Drag", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                        <Container id="kb_doing_card_title_cell" style="height:auto; width:100%"><Text id="kb_doing_card_title" props={content: "{{item.title}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                        <Container id="kb_doing_card_meta_cell" style="height:auto; width:100%">
                          <FlexContainer id="kb_doing_card_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                            <Container id="kb_doing_card_pri_cell" style="height:auto; width:auto"><Tag id="kb_doing_card_pri" props={text: "{{item.priority}}", color: "blue"} style="height:auto; width:auto"/></Container>
                            <Container id="kb_doing_card_owner_cell" style="height:auto; width:auto">
                              <FlexContainer id="kb_doing_card_owner_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
                                <Container id="kb_doing_card_owner_name_cell" style="height:auto; width:auto"><Text id="kb_doing_card_owner_name" props={content: "{{item.owner}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                                <Container id="kb_doing_card_due_cell" style="height:auto; width:auto"><Text id="kb_doing_card_due" props={content: "{{item.due}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                              </FlexContainer>
                            </Container>
                          </FlexContainer>
                        </Container>
                      </FlexContainer>
                    </Container>
                  </Sortable>
                </Container>
              </FlexContainer>
            </Container>
          </Container>

          <!-- Done -->
          <Container id="kb_lane_done_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_done" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_done_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_done_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_done_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_done_title_cell" style="height:auto; width:auto"><Text id="kb_lane_done_title" props={content: "Done", tagName: "h3"}/></Container>
                    <Container id="kb_lane_done_count_cell" style="height:auto; width:auto"><Text id="kb_lane_done_count" props={content: "{{DOM.kb_root.data.done.length}} tasks", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_done_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_done" props={dataSource: "{{DOM.kb_root.data.done}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_done_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_done_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_done_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_done_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_done_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_done_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_done_grip_text_cell" style="height:auto; width:auto"><Text id="kb_done_grip_text" props={content: "Drag", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                        <Container id="kb_done_card_title_cell" style="height:auto; width:100%"><Text id="kb_done_card_title" props={content: "{{item.title}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                        <Container id="kb_done_card_meta_cell" style="height:auto; width:100%">
                          <FlexContainer id="kb_done_card_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                            <Container id="kb_done_card_pri_cell" style="height:auto; width:auto"><Tag id="kb_done_card_pri" props={text: "{{item.priority}}", color: "green"} style="height:auto; width:auto"/></Container>
                            <Container id="kb_done_card_owner_cell" style="height:auto; width:auto">
                              <FlexContainer id="kb_done_card_owner_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
                                <Container id="kb_done_card_owner_name_cell" style="height:auto; width:auto"><Text id="kb_done_card_owner_name" props={content: "{{item.owner}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                                <Container id="kb_done_card_due_cell" style="height:auto; width:auto"><Text id="kb_done_card_due" props={content: "{{item.due}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                              </FlexContainer>
                            </Container>
                          </FlexContainer>
                        </Container>
                      </FlexContainer>
                    </Container>
                  </Sortable>
                </Container>
              </FlexContainer>
            </Container>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Board data (a data-driven row set; row key = item.value)
      @kb_root = {
        data: {
          todo: [
            { value: "t1", title: "Idempotent payment callbacks", priority: "P0", owner: "Xu Che", due: "9/18" },
            { value: "t2", title: "Async order export", priority: "P1", owner: "Lu Yuan", due: "9/19" },
            { value: "t3", title: "Home screen skeleton polish", priority: "P1", owner: "Su Qing", due: "9/20" },
            { value: "t4", title: "Align analytics event fields", priority: "P2", owner: "Lu Yuan", due: "9/21" },
            { value: "t5", title: "Help-centre search tuning", priority: "P2", owner: "Su Qing", due: "9/21" }
          ],
          doing: [
            { value: "d1", title: "Virtual scrolling for lists", priority: "P0", owner: "Su Qing", due: "9/16" },
            { value: "d2", title: "Coupon stacking rules", priority: "P1", owner: "Xu Che", due: "9/17" },
            { value: "d3", title: "Unread roll-up in messages", priority: "P1", owner: "Lu Yuan", due: "9/18" }
          ],
          done: [
            { value: "c1", title: "Rebuild the auth layer", priority: "P0", owner: "Xu Che", due: "9/12" },
            { value: "c2", title: "Product search tokenizer", priority: "P1", owner: "Lu Yuan", due: "9/13" },
            { value: "c3", title: "Dark-mode tokens", priority: "P2", owner: "Su Qing", due: "9/13" },
            { value: "c4", title: "Warm the release pipeline", priority: "P2", owner: "Su Qing", due: "9/14" }
          ]
        }
      }
      # One onChange per lane covering the three states (removed from this lane / inserted into this lane / the rest = a re-order inside the lane); both sides write back, so data consistency lives in the event code
      @kb_list_todo = {
        events: {
          todoChange: {
            trigger: "onChange",
            code: "var rows = DOM.kb_root.data.todo; if (event.removed) { DOM.kb_root.data.todo = rows.filter(function(r){ return r.value !== event.removed.key; }); } else if (event.inserted) { var next = rows.slice(); next.splice(event.inserted.index, 0, event.inserted.item); DOM.kb_root.data.todo = next; } else { DOM.kb_root.data.todo = event.order.map(function(k){ return rows.filter(function(r){ return r.value === k; })[0]; }); }"
          }
        }
      }
      @kb_list_doing = {
        events: {
          doingChange: {
            trigger: "onChange",
            code: "var rows = DOM.kb_root.data.doing; if (event.removed) { DOM.kb_root.data.doing = rows.filter(function(r){ return r.value !== event.removed.key; }); } else if (event.inserted) { var next = rows.slice(); next.splice(event.inserted.index, 0, event.inserted.item); DOM.kb_root.data.doing = next; } else { DOM.kb_root.data.doing = event.order.map(function(k){ return rows.filter(function(r){ return r.value === k; })[0]; }); }"
          }
        }
      }
      @kb_list_done = {
        events: {
          doneChange: {
            trigger: "onChange",
            code: "var rows = DOM.kb_root.data.done; if (event.removed) { DOM.kb_root.data.done = rows.filter(function(r){ return r.value !== event.removed.key; }); } else if (event.inserted) { var next = rows.slice(); next.splice(event.inserted.index, 0, event.inserted.item); DOM.kb_root.data.done = next; } else { DOM.kb_root.data.done = event.order.map(function(k){ return rows.filter(function(r){ return r.value === k; })[0]; }); }"
          }
        }
      }
      @kb_create_btn = {
        events: { createTask: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "New task form opened (demo)"}) } }
      };
    </script>

    <styles>
      # 0. Workbench ground
      @kb_root = { background: #f4f6fa; }
      @kb_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @kb_logo = { color: #4f46e5; font-size: 22px; }
      @kb_title = { color: #0f172a; font-size: 19px; font-weight: 800; letter-spacing: -0.2px; }
      @kb_sprint = { background-color: #eef2ff; color: #4338ca; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @kb_member_1 = { background-color: #4f46e5; color: #ffffff; font-size: 12px; }
      @kb_member_2 = { background-color: #0ea5e9; color: #ffffff; font-size: 12px; }
      @kb_member_3 = { background-color: #f59e0b; color: #ffffff; font-size: 12px; }
      @kb_create_btn = {
        color: #ffffff;
        background: #4f46e5;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4338ca; }
      }

      # 1. Hint strip
      @kb_hint_icon = { color: #94a3b8; font-size: 15px; }
      @kb_hint_text = { color: #64748b; font-size: 13px; }

      # 2. Lanes and cards
      @kb_lane_todo = { background: #eef1f7; border-radius: 16px; }
      @kb_lane_doing = { background: #eef1f7; border-radius: 16px; }
      @kb_lane_done = { background: #eef1f7; border-radius: 16px; }
      @kb_lane_todo_title = { color: #334155; font-size: 15px; font-weight: 800; }
      @kb_lane_doing_title = { color: #334155; font-size: 15px; font-weight: 800; }
      @kb_lane_done_title = { color: #334155; font-size: 15px; font-weight: 800; }
      @kb_lane_todo_count = { color: #94a3b8; font-size: 12px; font-weight: 600; }
      @kb_lane_doing_count = { color: #94a3b8; font-size: 12px; font-weight: 600; }
      @kb_lane_done_count = { color: #94a3b8; font-size: 12px; font-weight: 600; }
      @kb_todo_card_tpl = { background: #ffffff; border-radius: 12px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @kb_doing_card_tpl = { background: #ffffff; border-radius: 12px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @kb_done_card_tpl = { background: #ffffff; border-radius: 12px; box-shadow: 0 3px 12px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9); }
      @kb_todo_grip = { cursor: grab; :scope { border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; } }
      @kb_doing_grip = { cursor: grab; :scope { border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; } }
      @kb_done_grip = { cursor: grab; :scope { border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; } }
      @kb_todo_grip_icon = { color: #cbd5e1; font-size: 14px; }
      @kb_doing_grip_icon = { color: #cbd5e1; font-size: 14px; }
      @kb_done_grip_icon = { color: #cbd5e1; font-size: 14px; }
      @kb_todo_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.6px; }
      @kb_doing_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.6px; }
      @kb_done_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.6px; }
      @kb_todo_card_title = { color: #0f172a; font-size: 14px; font-weight: 700; line-height: 1.5; }
      @kb_doing_card_title = { color: #0f172a; font-size: 14px; font-weight: 700; line-height: 1.5; }
      @kb_done_card_title = { color: #64748b; font-size: 14px; font-weight: 700; line-height: 1.5; }
      @kb_todo_card_pri = { background-color: #fef3c7; color: #b45309; font-size: 11px; font-weight: 800; border-radius: 999px; }
      @kb_doing_card_pri = { background-color: #dbeafe; color: #1d4ed8; font-size: 11px; font-weight: 800; border-radius: 999px; }
      @kb_done_card_pri = { background-color: #dcfce7; color: #15803d; font-size: 11px; font-weight: 800; border-radius: 999px; }
      @kb_todo_card_owner_name = { color: #94a3b8; font-size: 12px; }
      @kb_doing_card_owner_name = { color: #94a3b8; font-size: 12px; }
      @kb_done_card_owner_name = { color: #94a3b8; font-size: 12px; }
      @kb_todo_card_due = { color: #cbd5e1; font-size: 12px; }
      @kb_doing_card_due = { color: #cbd5e1; font-size: 12px; }
      @kb_done_card_due = { color: #cbd5e1; font-size: 12px; }
    </styles>
  </Page>
</App>
```

> Production notes: three lanes each with their own `sortable` + `dataSource` + **the same `group`**
> (so they drag into one another); cards carry a `_slot="handle"` grip (drag starts only from the
> handle, declared identically on every card container); **one onChange per lane covers the three
> states** (removed / inserted / in-lane re-order) and both sides write back; the hint copy stays
> visible (dragging is not the only entry point); each lane header counts live through
> `{{DOM.kb_root.data.*.length}}`, so the header reflects every drag immediately.

## Production notes

**Same scene, re-set for Latin type (2026-09-25).** This template is UI chrome rather than display
type, so the geometry work was small — but the interactive surface is untouched by design.

**Every `kb_*` node id is unchanged, and so is every binding and event.** The showcase E2E drives
this board by id (`[data-node-id="kb_todo_grip"]` → `[data-node-id="kb_list_doing"]`) and asserts only
the *counts* and self-reference of the moved card (`doing.includes(todo[0])`), so it is
language-agnostic — the English edition drags exactly the same way. The data-axis values
(`t1…c4`), the `group: "sprint_board"` coupling and the three `onChange` code strings are byte-identical
to the Chinese edition.

Geometry and type (all values measured in the live page):

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Card titles | 14px / lh 1.6 | 14px / **lh 1.5** | Latin does not need CJK leading; the longest title ("Idempotent payment callbacks") measures 211px in a 348px card, so every card stays two text rows (grip + title) and the tallest lane still fits one screen |
| Page title | 19px | 19px | "Starport App · Sprint Board" measures 248px in a 1152px header row — the header keeps its 64px height |
| Lane titles / counts | 15px / 12px | unchanged | "To do / In progress / Done" and "5 tasks" are all shorter than the Chinese |
| Hint line | 13px | 13px | the sentence measures 511px in the full-width strip |
| Grip label | 11px, ls 1px | 11px, **ls 0.6px** | `Drag` is Latin; the CJK tracking reads as a gap |
| Buttons | 13px | 13px | "New task" is shorter than `新建任务`, so the header only gets tighter |
| `letter-spacing` | −0.3px | **−0.2px** | uppercase Latin already carries its own sidebearings |

**Copy policy — equivalent, not literal.** `星港 App` → "Starport App"; `待处理 / 进行中 / 已完成`
→ "To do / In progress / Done"; `拖动` → "Drag"; the three teammates are romanised rather than
renamed (`许澈 / 陆远 / 苏晴` → "Xu Che / Lu Yuan / Su Qing"). The avatars carry **one letter each**
(`C` / `Y` / `Q`) — the `Avatar` component renders `text.slice(0, 1)`, and the Chinese source put the
*given-name* glyph in the circle (澈 / 远 / 晴), so the English keeps the same convention (Che / Yuan /
Qing) rather than shorthand that would be truncated to an ambiguous letter anyway. Card titles are
written as the English feature name of the same work item (`支付回调幂等处理` → "Idempotent payment
callbacks", `列表虚拟滚动` → "Virtual scrolling for lists"), not word-for-word. The sprint tag reads
"Sprint 24 · Sep 8 – 21" instead of `9/08 - 9/21`.

**Drag re-verified in a live browser after the re-write** (not just screenshotted): a Playwright
pointer gesture on the first To-do handle — the same gesture the showcase E2E uses — moves
"Idempotent payment callbacks" into the In-progress lane, and the lane headers go 5/3/4 → 4/4/4. The
showcase capability E2E (`apps/showcase/tests/capability-e2e.mjs`, run against a dev server serving
this file) reports 15/15 PASS, its kanban check included — `dragging the handle → cross-column move +
data write-back (onChange code track) — todo 5→4 / doing 3→4`, with the English card titles in the
assertion payload.
