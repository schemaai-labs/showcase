# 交互闭环（行内编辑 + 危险确认） — 「云笺笔记」

> 模板定位（交互 / 动效 tab，P2）：事件驱动的两个经典闭环——**行内编辑**（直接操作：draft 草稿态 + 显式存/弃）与**危险操作确认**（浮层 + 输入对象名二次确认 + 结果回传）。
> 场景需求：做一页笔记管理演示：一条笔记支持就地改标题（编辑 → 草稿输入 → 保存/取消，未保存前原文不受影响）；「删除此笔记」走确认浮层（展示影响面 + 输入原名「周报草稿」方可提交 + 取消/确认都回传结果）；确认后主页面置为已删除态。状态全放 owner（绑 `{{}}` 只做路径引用，成对布尔标志）。

```lang
<App dsl-version="0.3" name="云笺笔记 · 交互闭环演示">
  <!-- ══════════════ 主页面 ══════════════ -->
  <Page id="loop_home" name="笔记" route="/">
    <FlexContainer id="loop_page" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="loop_col" props={direction: "column"} style="height:auto; width:100%; max-width:760px; align-items:stretch; gap:18px; padding:56px 32px 72px">

        <!-- 页头 -->
        <Container id="loop_head_cell" style="height:auto; width:100%">
          <FlexContainer id="loop_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:6px">
            <Container id="loop_title_cell" style="height:auto; width:auto"><Text id="loop_title" props={content: "云笺笔记 · 交互闭环", tagName: "h1"}/></Container>
            <Container id="loop_sub_cell" style="height:auto; width:auto"><Text id="loop_sub" props={content: "就地编辑（草稿态，未保存前原文不变）；删除走确认浮层（输入原名方可提交）。", tagName: "p"}/></Container>
          </FlexContainer>
        </Container>

        <!-- 笔记卡（owner：value / draft / editing / idle / present / deleted） -->
        <Container id="loop_note_card" style="height:auto; width:100%">
          <FlexContainer id="loop_note_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:24px 26px">

            <!-- 已删除态 -->
            <Container id="loop_deleted_cell" style="height:auto; width:100%">
              <Text id="loop_deleted_text" props={content: "该笔记已删除（浮层确认回传 confirmed = true；此态可刷新恢复演示数据）", visible: "{{DOM.loop_note_card.data.deleted}}"} style="height:auto; width:100%; padding:14px 16px"/>
            </Container>

            <!-- 标题行（显示态 / 编辑态成对切显） -->
            <Container id="loop_row_cell" style="height:auto; width:100%">
              <FlexContainer id="loop_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px">
                <Container id="loop_value_cell" style="height:auto; width:auto; flex-grow:1">
                  <Text id="loop_value" props={content: "{{DOM.loop_note_card.data.value}}", visible: "{{DOM.loop_note_card.data.idle}}"} style="height:auto; width:100%"/>
                </Container>
                <Container id="loop_input_cell" style="height:auto; width:100%; flex-grow:1">
                  <Input id="loop_input" props={value: "{{DOM.loop_note_card.data.draft}}", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:100%"/>
                </Container>
                <Container id="loop_edit_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_edit_btn" props={content: "编辑", variant: "default", visible: "{{DOM.loop_note_card.data.idle}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                <Container id="loop_save_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_save_btn" props={content: "保存", variant: "primary", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                <Container id="loop_cancel_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_cancel_btn" props={content: "取消", variant: "default", visible: "{{DOM.loop_note_card.data.editing}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
              </FlexContainer>
            </Container>

            <!-- 元信息 + 危险入口 -->
            <Container id="loop_meta_row_cell" style="height:auto; width:100%; padding-top:2px">
              <FlexContainer id="loop_meta_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                <Container id="loop_meta_cell" style="height:auto; width:auto"><Text id="loop_meta" props={content: "最后编辑：今天 14:20 · 归入「工作」", tagName: "span"}/></Container>
                <Container id="loop_delete_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="loop_delete_btn" props={content: "删除此笔记", variant: "danger", visible: "{{DOM.loop_note_card.data.present}}"} style="height:auto; width:auto; padding:8px 18px"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 说明卡 -->
        <Container id="loop_tip_card" style="height:auto; width:100%">
          <FlexContainer id="loop_tip_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:18px 22px">
            <Container id="loop_tip_title_cell" style="height:auto; width:auto"><Text id="loop_tip_title" props={content: "闭环要点", tagName: "h3"}/></Container>
            <Container id="loop_tip_1_cell" style="height:auto; width:100%"><Text id="loop_tip_1" props={content: "· 编辑 = value 复制进 draft 并翻转成对标志（editing / idle）；取消只切态，原文零影响", tagName: "span"} style="height:auto; width:100%"/></Container>
            <Container id="loop_tip_2_cell" style="height:auto; width:100%"><Text id="loop_tip_2" props={content: "· 删除先开浮层（overlay.open，sendData 传对象名），不直接执行", tagName: "span"} style="height:auto; width:100%"/></Container>
            <Container id="loop_tip_3_cell" style="height:auto; width:100%"><Text id="loop_tip_3" props={content: "· 浮层结果经 onOverlayClose(result) 回传主页 root，确认后才置已删除态", tagName: "span"} style="height:auto; width:100%"/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      # 行内编辑（value/draft + 成对标志 editing/idle）
      @loop_edit_btn = {
        events: { startEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.draft = DOM.loop_note_card.data.value; DOM.loop_note_card.data.editing = true; DOM.loop_note_card.data.idle = false" } }
      }
      @loop_save_btn = {
        events: { commitEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.value = DOM.loop_note_card.data.draft; DOM.loop_note_card.data.editing = false; DOM.loop_note_card.data.idle = true; " } }
      }
      @loop_cancel_btn = {
        events: { cancelEdit: { trigger: "onClick", code: "DOM.loop_note_card.data.editing = false; DOM.loop_note_card.data.idle = true; DOM.loop_note_card.data.draft = DOM.loop_note_card.data.value" } }
      }
      # 危险操作：开确认浮层（page 按页面 name 解析；sendData 传对象名——确认短语与原名一致）
      @loop_delete_btn = {
        events: { askDelete: { trigger: "onClick", action: overlay.open({page: "确认删除", mode: "modal", sendData: {name: "周报草稿"}}) } }
      }
      # owner：行内编辑状态（浮层结果由**子页根** onOverlayClose 跨页写回，见下）
      @loop_note_card = {
        data: { value: "周报草稿", draft: "周报草稿", editing: false, idle: true, present: true, deleted: false }
      }
    </script>
    <styles>
      @loop_page = { background: #f6f7fb; }
      @loop_title = { color: #0f172a; font-size: 30px; font-weight: 900; letter-spacing: -0.8px; }
      @loop_sub = { color: #64748b; font-size: 14px; line-height: 1.8; }
      @loop_note_card = { background: #ffffff; border-radius: 16px; box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9); :scope { border: 1px solid #eef2f7; } }
      @loop_value = { color: #0f172a; font-size: 22px; font-weight: 800; letter-spacing: -0.3px; }
      @loop_meta = { color: #94a3b8; font-size: 13px; }
      @loop_edit_btn = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; } :scope:hover { border-color: #94a3b8; } }
      @loop_save_btn = { color: #ffffff; background: #4f46e5; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #4338ca; } }
      @loop_cancel_btn = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; } :scope:hover { border-color: #94a3b8; } }
      @loop_delete_btn = { color: #b91c1c; background: #fef2f2; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { border: 1px solid #fecaca; transition: background-color 0.2s ease; } :scope:hover { background-color: #fee2e2; } }
      @loop_deleted_cell = { background: #f0fdf4; border-radius: 12px; :scope { border: 1px solid #bbf7d0; } }
      @loop_deleted_text = { color: #15803d; font-size: 13px; font-weight: 600; line-height: 1.8; }
      @loop_tip_card = { background: #fffbeb; border-radius: 14px; :scope { border: 1px solid #fde68a; } }
      @loop_tip_title = { color: #92400e; font-size: 15px; font-weight: 800; }
      @loop_tip_1 = { color: #a16207; font-size: 13px; line-height: 1.9; }
      @loop_tip_2 = { color: #a16207; font-size: 13px; line-height: 1.9; }
      @loop_tip_3 = { color: #a16207; font-size: 13px; line-height: 1.9; }
    </styles>
  </Page>

  <!-- ══════════════ 确认浮层（sub-page） ══════════════ -->
  <Page id="loop_confirm" name="确认删除" subpage>
    <FlexContainer id="loop_confirm_root" props={direction: "column"} style="width:100%; height:auto">
      <FlexContainer id="loop_confirm_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:26px 26px 22px">
        <Container id="loop_confirm_title_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_title" props={content: "删除笔记「周报草稿」？", tagName: "h3"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_impact_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_impact" props={content: "将删除该笔记及其全部历史版本；此操作不可撤销，也无法恢复。", tagName: "p"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_hint_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_hint" props={content: "请输入笔记名称「周报草稿」以确认：", tagName: "span"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_input_cell" style="height:auto; width:100%">
          <Input id="loop_confirm_input" props={value: "{{DOM.loop_confirm_root.data.confirm_text}}", placeholder: "周报草稿"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_error_cell" style="height:auto; width:100%">
          <Text id="loop_confirm_error" props={content: "名称不一致，确认按钮保持禁用。", visible: "{{DOM.loop_confirm_root.data.name_mismatch}}"} style="height:auto; width:100%"/>
        </Container>
        <Container id="loop_confirm_actions_cell" style="height:auto; width:100%; justify-content:flex-end; gap:12px">
          <Container id="loop_confirm_cancel_cell" style="height:auto; width:auto"><Button id="loop_confirm_cancel" props={content: "取消", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
          <Container id="loop_confirm_ok_ready_cell" props={visible: "{{DOM.loop_confirm_root.data.phrase_ok}}"} style="height:auto; width:auto"><Button id="loop_confirm_ok_ready" props={content: "确认删除", variant: "danger"} style="height:auto; width:auto; padding:9px 24px"/></Container>
          <Container id="loop_confirm_ok_blocked_cell" props={visible: "{{DOM.loop_confirm_root.data.name_mismatch}}"} style="height:auto; width:auto"><Button id="loop_confirm_ok_blocked" props={content: "确认删除", variant: "danger", disabled: true} style="height:auto; width:auto; padding:9px 24px"/></Container>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      # 页根：接收 sendData（原值；名称比对的判断在事件代码里做——绑定禁表达式）
      # 闸门 UI 用**成对可见标志**互换两个静态按钮（phrase_ok / name_mismatch）：
      # disabled 的「字面量布尔」不参与重解析，规避浮层内绑定重解析的已知隐患
      # （见 roadmap/template-library.md §13 台账）。
      @loop_confirm_root = {
        data: { confirm_text: "", required_phrase: "周报草稿", name_mismatch: true, phrase_ok: false },
        events: {
          initFromSendData: { trigger: "onOverlayInit", input: "data", code: "DOM.loop_confirm_root.data.required_phrase = data.name" },
          # 结果回传：子页根在实例移除前收到 closeResult，**跨页写回主页面 owner**
          commitResult: { trigger: "onOverlayClose", input: "event", code: "if (event && event.confirmed) { 笔记.loop_note_card.data.deleted = true; 笔记.loop_note_card.data.present = false; }" }
        }
      }
      # 输入即验：onChange 代码直算比对与闸门标志，与文本在单次事件内一并写回数据
      # （不走 onUpdate 派生——见 §13 台账「迟到陈旧执行覆盖」记录）
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
      @loop_confirm_title = { color: #0f172a; font-size: 19px; font-weight: 900; letter-spacing: -0.3px; }
      @loop_confirm_impact = { color: #b91c1c; font-size: 13px; line-height: 1.8; }
      @loop_confirm_hint = { color: #475569; font-size: 13px; }
      @loop_confirm_error = { color: #dc2626; font-size: 12px; font-weight: 600; }
      @loop_confirm_cancel = { color: #334155; background: #ffffff; border-radius: 10px; font-size: 13px; font-weight: 600; :scope { border: 1px solid #e2e8f0; } :scope:hover { border-color: #94a3b8; } }
      @loop_confirm_ok_ready = { color: #ffffff; background: #dc2626; border-radius: 10px; font-size: 13px; font-weight: 700; :scope { transition: background-color 0.2s ease; } :scope:hover { background-color: #b91c1c; } }
      @loop_confirm_ok_blocked = { color: #ffffff; background: #dc2626; border-radius: 10px; font-size: 13px; font-weight: 700; }
    </styles>
  </Page>
</App>
```

> 制作要点：两闭环纪律——行内编辑状态归 owner（draft + **成对标志** editing/idle，绑定禁表达式）；危险操作**不直连执行**（overlay.open + sendData 传对象名 → 子页 `onOverlayInit` 注入 → **onChange 事件代码直算**比对与闸门标志（判断在事件代码里做）→ 闸门 UI 用**成对可见标志**互换两个静态按钮（`phrase_ok` / `name_mismatch`，规避浮层内 `disabled` 绑定重解析隐患）→ `overlay.close({result})` → 主页 root `onOverlayClose` 按 `result.confirmed` 置态）。
