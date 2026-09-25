# 审批流程 — 「云扉产品」报销审批

> 模板定位（产品 / 应用 tab · 业务系统）：审批类页面标准形态——发起卡（steps 进度 + 表单）+ 待办列表（行内通过/驳回）+ 审批记录时间线。
> 场景需求：给虚构 SaaS 做报销审批页：顶栏品牌，内容区依次是「发起报销」卡（四步进度条：填写申请 → 部门审批 → 财务复核 → 完成，当前第 1 步；表单：类型下拉 / 金额输入 / 事由多行 / 提交按钮）、「我的待办」卡（3 条审批单：标题 / 提交人 / 金额 / 待审批标签 / 通过驳回按钮）、「审批记录」时间线（4 条）。浅灰画布、白卡、零动效。

```lang
<App dsl-version="0.3" name="云扉产品 · 报销审批">
  <Page id="approval" name="报销审批" route="/approval">
    <FlexContainer id="ap_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 顶栏 ─── -->
      <Container id="ap_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="ap_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="ap_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ap_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="ap_logo_cell" style="height:auto; width:auto"><Icon id="ap_logo" props={iconName: "GitPullRequest", iconSource: "lucide"}/></Container>
              <Container id="ap_brand_text_cell" style="height:auto; width:auto"><Text id="ap_brand" props={content: "云扉产品 · 报销审批", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="ap_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="ap_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="ap_bell_cell" style="height:auto; width:auto"><Icon id="ap_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="ap_avatar_cell" style="height:auto; width:auto"><Avatar id="ap_avatar" props={text: "澈", shape: "circle"} style="height:32px; width:32px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 内容区 ─── -->
      <Container id="ap_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 40px">
        <FlexContainer id="ap_body_col" props={direction: "column"} style="height:auto; width:100%; max-width:980px; margin-left:auto; margin-right:auto; align-items:stretch; gap:16px">

          <!-- 发起卡 -->
          <Container id="ap_start_card" style="height:auto; width:100%">
            <FlexContainer id="ap_start_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:22px; padding:26px 28px">
              <Container id="ap_start_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_start_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                  <Container id="ap_start_title_cell" style="height:auto; width:auto"><Text id="ap_start_title" props={content: "发起报销审批", tagName: "h3"}/></Container>
                  <Container id="ap_start_desc_cell" style="height:auto; width:auto"><Text id="ap_start_desc" props={content: "提交后将依次经部门审批与财务复核，全程预计 1 个工作日。", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>

              <!-- 四步进度 -->
              <Container id="ap_steps_cell" style="height:auto; width:100%">
                <Steps id="ap_steps" props={current: 0, direction: "horizontal"} style="height:auto; width:100%">
                  <Container id="ap_step_1" props={itemLabel: "填写申请", itemDescription: "进行中"} style="height:auto; width:100%"/>
                  <Container id="ap_step_2" props={itemLabel: "部门审批", itemDescription: "1 个工作日内"} style="height:auto; width:100%"/>
                  <Container id="ap_step_3" props={itemLabel: "财务复核", itemDescription: "金额校验与打款"} style="height:auto; width:100%"/>
                  <Container id="ap_step_4" props={itemLabel: "完成", itemDescription: "到账通知"} style="height:auto; width:100%"/>
                </Steps>
              </Container>

              <!-- 表单 -->
              <Container id="ap_form_row_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_form_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
                  <Container id="ap_field_type_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ap_field_type_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ap_field_type_label_cell" style="height:auto; width:auto"><Text id="ap_field_type_label" props={content: "报销类型", tagName: "span"}/></Container>
                      <Container id="ap_field_type_select_cell" style="height:auto; width:100%"><Select id="ap_field_type_select" props={options: [{label: "差旅费", value: "travel"}, {label: "办公用品", value: "office"}, {label: "招待费", value: "client"}, {label: "培训费", value: "training"}], placeholder: "差旅费"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_field_amount_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                    <FlexContainer id="ap_field_amount_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                      <Container id="ap_field_amount_label_cell" style="height:auto; width:auto"><Text id="ap_field_amount_label" props={content: "报销金额（元）", tagName: "span"}/></Container>
                      <Container id="ap_field_amount_input_cell" style="height:auto; width:100%"><Input id="ap_field_amount_input" props={placeholder: "0.00"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_field_reason_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_field_reason_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                  <Container id="ap_field_reason_label_cell" style="height:auto; width:auto"><Text id="ap_field_reason_label" props={content: "事由说明", tagName: "span"}/></Container>
                  <Container id="ap_field_reason_input_cell" style="height:auto; width:100%"><Textarea id="ap_field_reason_input" props={placeholder: "说明费用发生的时间、地点与用途，便于审批人快速判断", rows: 3} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>

              <Container id="ap_submit_cell" style="height:auto; width:100%; justify-content:flex-end">
                <FlexContainer id="ap_submit_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="ap_draft_cell" style="height:auto; width:auto"><Button id="ap_draft_btn" props={content: "存为草稿", variant: "default"} style="height:auto; width:auto; padding:9px 20px"/></Container>
                  <Container id="ap_submit_btn_cell" style="height:auto; width:auto"><Button id="ap_submit_btn" props={content: "提交审批", variant: "primary"} style="height:auto; width:auto; padding:9px 26px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 我的待办 -->
          <Container id="ap_todo_card" style="height:auto; width:100%">
            <FlexContainer id="ap_todo_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="ap_todo_head_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="ap_todo_title_cell" style="height:auto; width:auto"><Text id="ap_todo_title" props={content: "我的待办", tagName: "h3"}/></Container>
                  <Container id="ap_todo_note_cell" style="height:auto; width:auto"><Text id="ap_todo_note" props={content: "3 条待审批", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_1_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_1_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_1_name_cell" style="height:auto; width:auto"><Text id="ap_todo_1_name" props={content: "差旅费 · 上海客户现场支持", tagName: "span"}/></Container>
                      <Container id="ap_todo_1_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_1_meta" props={content: "许澈 提交 · 2026-09-14 18:20 · ¥2,480", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_1_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_1_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_1_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_1_tag" props={text: "待审批", color: "gold"}/></Container>
                      <Container id="ap_todo_1_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_1_reject" props={content: "驳回", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_1_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_1_pass" props={content: "通过", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_2_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_2_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_2_name_cell" style="height:auto; width:auto"><Text id="ap_todo_2_name" props={content: "办公用品 · 研发部显示器采购", tagName: "span"}/></Container>
                      <Container id="ap_todo_2_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_2_meta" props={content: "苏晴 提交 · 2026-09-14 15:02 · ¥6,890", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_2_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_2_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_2_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_2_tag" props={text: "待审批", color: "gold"}/></Container>
                      <Container id="ap_todo_2_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_2_reject" props={content: "驳回", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_2_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_2_pass" props={content: "通过", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="ap_todo_3_cell" style="height:auto; width:100%">
                <FlexContainer id="ap_todo_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="ap_todo_3_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="ap_todo_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="ap_todo_3_name_cell" style="height:auto; width:auto"><Text id="ap_todo_3_name" props={content: "招待费 · 渠道伙伴季度沟通", tagName: "span"}/></Container>
                      <Container id="ap_todo_3_meta_cell" style="height:auto; width:auto"><Text id="ap_todo_3_meta" props={content: "陆远 提交 · 2026-09-13 20:41 · ¥1,260", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="ap_todo_3_right_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="ap_todo_3_right_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                      <Container id="ap_todo_3_tag_cell" style="height:auto; width:auto"><Tag id="ap_todo_3_tag" props={text: "待审批", color: "gold"}/></Container>
                      <Container id="ap_todo_3_reject_cell" style="height:auto; width:auto"><Button id="ap_todo_3_reject" props={content: "驳回", variant: "default"} style="height:auto; width:auto; padding:6px 16px"/></Container>
                      <Container id="ap_todo_3_pass_cell" style="height:auto; width:auto"><Button id="ap_todo_3_pass" props={content: "通过", variant: "primary"} style="height:auto; width:auto; padding:6px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 审批记录 -->
          <Container id="ap_log_card" style="height:auto; width:100%">
            <FlexContainer id="ap_log_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="ap_log_title_cell" style="height:auto; width:100%"><Text id="ap_log_title" props={content: "审批记录", tagName: "h3"}/></Container>
              <Container id="ap_log_timeline_cell" style="height:auto; width:100%">
                <Timeline id="ap_log_timeline" props={items: [{"label": "财务复核通过 · 预计 T+1 打款到工资卡", "time": "今天 09:12 财务 · 何澈"}, {"label": "部门审批通过 · 附言「行程属实」", "time": "昨天 21:05 部门负责人 · 许澈"}, {"label": "提交补充凭证：高铁票与酒店发票 2 张", "time": "昨天 20:47 提交人 · 许澈"}, {"label": "发起报销申请 · 差旅费 ¥2,480", "time": "昨天 20:20 提交人 · 许澈"}]} style="height:auto; width:100%"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑；动作为声明式反馈
      @ap_submit_btn = {
        events: { submit: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "审批已提交：下一步为部门审批（演示）"}) } }
      };
      @ap_draft_btn = {
        events: { draft: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已存为草稿，可在「我的申请」继续编辑"}) } }
      };
      @ap_todo_1_pass = {
        events: { pass1: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已通过：差旅费 ¥2,480 进入财务复核"}) } }
      };
      @ap_todo_1_reject = {
        events: { reject1: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "驳回需填写原因（演示）"}) } }
      };
      @ap_todo_2_pass = {
        events: { pass2: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已通过：办公用品 ¥6,890 进入财务复核"}) } }
      };
      @ap_todo_2_reject = {
        events: { reject2: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "驳回需填写原因（演示）"}) } }
      };
      @ap_todo_3_pass = {
        events: { pass3: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已通过：招待费 ¥1,260 进入财务复核"}) } }
      };
      @ap_todo_3_reject = {
        events: { reject3: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "驳回需填写原因（演示）"}) } }
      };
    </script>

    <styles>
      # 0. 画布与顶栏
      @ap_root = { background: #f5f7fa; }
      @ap_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @ap_logo = { color: #7c3aed; font-size: 22px; }
      @ap_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @ap_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @ap_avatar = { background-color: #7c3aed; color: #ffffff; font-size: 13px; }

      # 1. 发起卡
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

      # 2. 待办
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

      # 3. 记录
      @ap_log_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @ap_log_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
    </styles>
  </Page>
</App>
```

> 制作要点：审批页 = 发起（steps 进度 + 表单）+ 待办（行内动作）+ 记录（时间线）三段；steps 用 cellContract 面板 cell；驳回类动作留入口（原因表单走确认流纪律）。
