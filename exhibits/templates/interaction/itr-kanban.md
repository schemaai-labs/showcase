# 看板拖拽（跨列 + 把手） — 「星港 App」迭代看板

> 模板定位（交互 / 动效 tab）：运行期拖拽的旗舰形态——三列数据驱动看板（`sortable` + `dataSource` + 同组 `group` 跨列拖放 + 拖拽把手 + 三态 onChange 回写）。
> 场景需求：做团队迭代看板：顶部标题栏（迭代信息 + 成员头像 + 新建任务），三列泳道（待处理 / 进行中 / 已完成）各放任务卡（标题 + 优先级标签 + 负责人 + 截止日），**拖动卡片把手可跨列搬运**，列内可重排；操作提示常显（拖拽不是唯一入口）。浅色工作台风、零 API 静态数据。

```lang
<App dsl-version="0.3" name="星港 App · 迭代看板">
  <Page id="board" name="迭代看板" route="/board">
    <FlexContainer id="kb_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 标题栏 ─── -->
      <Container id="kb_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="kb_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="kb_header_left_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="kb_header_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="kb_logo_cell" style="height:auto; width:auto"><Icon id="kb_logo" props={iconName: "Kanban", iconSource: "lucide"}/></Container>
              <Container id="kb_title_cell" style="height:auto; width:auto"><Text id="kb_title" props={content: "星港 App · 迭代看板", tagName: "h1"}/></Container>
              <Container id="kb_sprint_cell" style="height:auto; width:auto"><Tag id="kb_sprint" props={text: "Sprint 24 · 9/08 - 9/21", color: "geekblue"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="kb_header_right_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="kb_header_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="kb_member_1_cell" style="height:auto; width:auto"><Avatar id="kb_member_1" props={text: "澈", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_member_2_cell" style="height:auto; width:auto"><Avatar id="kb_member_2" props={text: "远", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_member_3_cell" style="height:auto; width:auto"><Avatar id="kb_member_3" props={text: "晴", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="kb_create_cell" style="height:auto; width:auto"><Button id="kb_create_btn" props={content: "新建任务", variant: "primary"} style="height:auto; width:auto; padding:8px 18px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 使用提示（拖拽不是唯一入口） ─── -->
      <Container id="kb_hint_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:12px 24px 4px">
        <FlexContainer id="kb_hint_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
          <Container id="kb_hint_icon_cell" style="height:auto; width:auto"><Icon id="kb_hint_icon" props={iconName: "Info", iconSource: "lucide"}/></Container>
          <Container id="kb_hint_text_cell" style="height:auto; width:auto"><Text id="kb_hint_text" props={content: "拖动卡片把手可跨列移动任务；键盘 ↑/↓ 可调整顺序。", tagName: "span"}/></Container>
        </FlexContainer>
      </Container>

      <!-- ─── 3. 三列泳道 ─── -->
      <Container id="kb_board" style="flex-grow:1; height:auto; width:100%; padding:12px 24px 32px">
        <FlexContainer id="kb_board_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- 待处理 -->
          <Container id="kb_lane_todo_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_todo" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_todo_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_todo_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_todo_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_todo_title_cell" style="height:auto; width:auto"><Text id="kb_lane_todo_title" props={content: "待处理", tagName: "h3"}/></Container>
                    <Container id="kb_lane_todo_count_cell" style="height:auto; width:auto"><Text id="kb_lane_todo_count" props={content: "{{DOM.kb_root.data.todo.length}} 项", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_todo_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_todo" props={dataSource: "{{DOM.kb_root.data.todo}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_todo_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_todo_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_todo_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_todo_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_todo_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_todo_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_todo_grip_text_cell" style="height:auto; width:auto"><Text id="kb_todo_grip_text" props={content: "拖动", tagName: "span"}/></Container>
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

          <!-- 进行中 -->
          <Container id="kb_lane_doing_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_doing" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_doing_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_doing_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_doing_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_doing_title_cell" style="height:auto; width:auto"><Text id="kb_lane_doing_title" props={content: "进行中", tagName: "h3"}/></Container>
                    <Container id="kb_lane_doing_count_cell" style="height:auto; width:auto"><Text id="kb_lane_doing_count" props={content: "{{DOM.kb_root.data.doing.length}} 项", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_doing_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_doing" props={dataSource: "{{DOM.kb_root.data.doing}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_doing_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_doing_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_doing_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_doing_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_doing_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_doing_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_doing_grip_text_cell" style="height:auto; width:auto"><Text id="kb_doing_grip_text" props={content: "拖动", tagName: "span"}/></Container>
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

          <!-- 已完成 -->
          <Container id="kb_lane_done_cell" style="height:auto; width:33.33%">
            <Container id="kb_lane_done" style="height:auto; width:100%">
              <FlexContainer id="kb_lane_done_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:14px 12px">
                <Container id="kb_lane_done_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="kb_lane_done_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="kb_lane_done_title_cell" style="height:auto; width:auto"><Text id="kb_lane_done_title" props={content: "已完成", tagName: "h3"}/></Container>
                    <Container id="kb_lane_done_count_cell" style="height:auto; width:auto"><Text id="kb_lane_done_count" props={content: "{{DOM.kb_root.data.done.length}} 项", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="kb_lane_done_list_cell" style="height:auto; width:100%">
                  <Sortable id="kb_list_done" props={dataSource: "{{DOM.kb_root.data.done}}", group: "sprint_board", direction: "column"} style="height:auto; width:100%; gap:10px">
                    <Container id="kb_done_card_tpl" style="height:auto; width:100%">
                      <FlexContainer id="kb_done_card_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px; padding:14px 14px">
                        <Container id="kb_done_grip" props={_slot: "handle"} style="height:auto; width:100%">
                          <FlexContainer id="kb_done_grip_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:6px">
                            <Container id="kb_done_grip_icon_cell" style="height:auto; width:auto"><Icon id="kb_done_grip_icon" props={iconName: "GripVertical", iconSource: "lucide"}/></Container>
                            <Container id="kb_done_grip_text_cell" style="height:auto; width:auto"><Text id="kb_done_grip_text" props={content: "拖动", tagName: "span"}/></Container>
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
      # 看板数据（数据驱动行集；行 key = item.value）
      @kb_root = {
        data: {
          todo: [
            { value: "t1", title: "支付回调幂等处理", priority: "P0", owner: "许澈", due: "9/18" },
            { value: "t2", title: "订单导出异步化", priority: "P1", owner: "陆远", due: "9/19" },
            { value: "t3", title: "首页骨架屏打磨", priority: "P1", owner: "苏晴", due: "9/20" },
            { value: "t4", title: "埋点字段对齐", priority: "P2", owner: "陆远", due: "9/21" },
            { value: "t5", title: "帮助中心搜索优化", priority: "P2", owner: "苏晴", due: "9/21" }
          ],
          doing: [
            { value: "d1", title: "列表虚拟滚动", priority: "P0", owner: "苏晴", due: "9/16" },
            { value: "d2", title: "优惠券叠加规则", priority: "P1", owner: "许澈", due: "9/17" },
            { value: "d3", title: "消息中心未读聚合", priority: "P1", owner: "陆远", due: "9/18" }
          ],
          done: [
            { value: "c1", title: "登录鉴权重构", priority: "P0", owner: "许澈", due: "9/12" },
            { value: "c2", title: "商品搜索分词", priority: "P1", owner: "陆远", due: "9/13" },
            { value: "c3", title: "深色模式变量", priority: "P2", owner: "苏晴", due: "9/13" },
            { value: "c4", title: "发布流水线预热", priority: "P2", owner: "苏晴", due: "9/14" }
          ]
        }
      }
      # 每列一个 onChange 覆盖三态（removed 本列移除 / inserted 本列插入 / 其余 = 列内重排）；两侧都写回，数据一致性归事件代码
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
        events: { createTask: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已打开新建任务表单（演示）"}) } }
      };
    </script>

    <styles>
      # 0. 工作台基调
      @kb_root = { background: #f4f6fa; }
      @kb_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @kb_logo = { color: #4f46e5; font-size: 22px; }
      @kb_title = { color: #0f172a; font-size: 19px; font-weight: 800; letter-spacing: -0.3px; }
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

      # 1. 提示条
      @kb_hint_icon = { color: #94a3b8; font-size: 15px; }
      @kb_hint_text = { color: #64748b; font-size: 13px; }

      # 2. 泳道与卡片
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
      @kb_todo_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 1px; }
      @kb_doing_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 1px; }
      @kb_done_grip_text = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 1px; }
      @kb_todo_card_title = { color: #0f172a; font-size: 14px; font-weight: 700; line-height: 1.6; }
      @kb_doing_card_title = { color: #0f172a; font-size: 14px; font-weight: 700; line-height: 1.6; }
      @kb_done_card_title = { color: #64748b; font-size: 14px; font-weight: 700; line-height: 1.6; }
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

> 制作要点：三列各自 `sortable` + 各自 `dataSource` + **相同 `group`**（跨列互拖）；卡片带 `_slot="handle"` 把手（仅把手启动；同一容器一致声明）；**每列一个 onChange 覆盖三态**（removed / inserted / 列内重排）两侧写回；提示文案常显（拖拽非唯一入口）；列头计数经 `{{DOM.kb_root.data.*.length}}` 绑定实时反映拖拽结果。
