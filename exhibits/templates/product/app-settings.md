# 设置中心 — 「云扉产品」团队设置

> 模板定位（产品 / 应用 tab · SaaS 工具）：设置类页面标准形态——左侧分区导航（menu）+ 右侧表单组（基础信息 / 通知偏好 / 危险区）。
> 场景需求：给虚构 SaaS 产品做团队设置页：顶栏品牌，左栏五分区菜单（基础信息高亮），右栏依次是基础信息表单（名称 / 客服邮箱 / 行业下拉 / 简介多行）、通知偏好（三行开关）、危险区（转让所有权 + 危险按钮）。浅灰画布、白卡分区、零动效工具页。

```lang
<App dsl-version="0.3" name="云扉产品 · 设置中心">
  <Page id="settings" name="设置中心" route="/settings">
    <FlexContainer id="st_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 顶栏 ─── -->
      <Container id="st_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="st_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="st_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="st_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="st_logo_cell" style="height:auto; width:auto"><Icon id="st_logo" props={iconName: "Settings", iconSource: "lucide"}/></Container>
              <Container id="st_brand_text_cell" style="height:auto; width:auto"><Text id="st_brand" props={content: "云扉产品 · 设置中心", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="st_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="st_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="st_bell_cell" style="height:auto; width:auto"><Icon id="st_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="st_avatar_cell" style="height:auto; width:auto"><Avatar id="st_avatar" props={text: "扉", shape: "circle"} style="height:32px; width:32px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 主区：左菜单 + 右表单 ─── -->
      <Container id="st_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 40px">
        <FlexContainer id="st_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- 左栏分区导航 -->
          <Container id="st_nav_card" style="flex-shrink:0; height:auto; width:230px">
            <Menu id="st_nav" props={mode: "inline", selectedKeys: ["basic"]} style="height:auto; width:100%; padding:12px 8px">
              <Container id="st_nav_basic" props={itemLabel: "基础信息", itemIcon: "Info"} style="height:auto; width:100%"/>
              <Container id="st_nav_notify" props={itemLabel: "通知偏好", itemIcon: "Bell"} style="height:auto; width:100%"/>
              <Container id="st_nav_security" props={itemLabel: "安全设置", itemIcon: "ShieldCheck"} style="height:auto; width:100%"/>
              <Container id="st_nav_team" props={itemLabel: "团队管理", itemIcon: "Users"} style="height:auto; width:100%"/>
              <Container id="st_nav_billing" props={itemLabel: "账单与订阅", itemIcon: "Wallet"} style="height:auto; width:100%"/>
            </Menu>
          </Container>

          <!-- 右栏表单区 -->
          <FlexContainer id="st_content_col" props={direction: "column"} style="flex-grow:1; height:auto; width:auto; align-items:stretch; gap:16px">

            <!-- 基础信息 -->
            <Container id="st_basic_card" style="height:auto; width:100%">
              <FlexContainer id="st_basic_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:22px 24px">
                <Container id="st_basic_head_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_basic_head_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
                    <Container id="st_basic_title_cell" style="height:auto; width:auto"><Text id="st_basic_title" props={content: "基础信息", tagName: "h3"}/></Container>
                    <Container id="st_basic_desc_cell" style="height:auto; width:auto"><Text id="st_basic_desc" props={content: "产品对外的名称与联系方式，将展示在帮助中心与系统邮件中。", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_name_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_name_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_name_label_cell" style="height:auto; width:auto"><Text id="st_field_name_label" props={content: "产品名称", tagName: "span"}/></Container>
                    <Container id="st_field_name_input_cell" style="height:auto; width:100%"><Input id="st_field_name_input" props={value: "云扉协同", placeholder: "产品名称"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_mail_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_mail_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_mail_label_cell" style="height:auto; width:auto"><Text id="st_field_mail_label" props={content: "客服邮箱", tagName: "span"}/></Container>
                    <Container id="st_field_mail_input_cell" style="height:auto; width:100%"><Input id="st_field_mail_input" props={value: "support@yunfei.example.com", placeholder: "客服邮箱"} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_industry_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_industry_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_industry_label_cell" style="height:auto; width:auto"><Text id="st_field_industry_label" props={content: "所属行业", tagName: "span"}/></Container>
                    <Container id="st_field_industry_select_cell" style="height:auto; width:320px">
                      <Select id="st_field_industry_select" props={options: [{label: "企业服务", value: "biz"}, {label: "教育培训", value: "edu"}, {label: "医疗健康", value: "health"}, {label: "零售电商", value: "retail"}], placeholder: "企业服务"} style="height:auto; width:100%"/>
                    </Container>
                  </FlexContainer>
                </Container>
                <Container id="st_field_intro_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_field_intro_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px">
                    <Container id="st_field_intro_label_cell" style="height:auto; width:auto"><Text id="st_field_intro_label" props={content: "产品简介", tagName: "span"}/></Container>
                    <Container id="st_field_intro_input_cell" style="height:auto; width:100%"><Textarea id="st_field_intro_input" props={placeholder: "一句话介绍你的产品（将展示在帮助中心首页）", rows: 3} style="height:auto; width:100%"/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <!-- 通知偏好 -->
            <Container id="st_notify_card" style="height:auto; width:100%">
              <FlexContainer id="st_notify_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px; padding:22px 24px">
                <Container id="st_notify_title_cell" style="height:auto; width:100%"><Text id="st_notify_title" props={content: "通知偏好", tagName: "h3"} style="height:auto; width:100%"/></Container>
                <Container id="st_switch_order_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_order_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_order_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_order_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_order_name_cell" style="height:auto; width:auto"><Text id="st_switch_order_name" props={content: "新订单通知", tagName: "span"}/></Container>
                        <Container id="st_switch_order_desc_cell" style="height:auto; width:auto"><Text id="st_switch_order_desc" props={content: "每笔新订单实时推送到管理员邮箱", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_order_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_order_ctrl" props={checked: true}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_switch_report_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_report_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_report_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_report_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_report_name_cell" style="height:auto; width:auto"><Text id="st_switch_report_name" props={content: "周报摘要", tagName: "span"}/></Container>
                        <Container id="st_switch_report_desc_cell" style="height:auto; width:auto"><Text id="st_switch_report_desc" props={content: "每周一 9:00 发送上周经营摘要", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_report_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_report_ctrl" props={checked: true}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_switch_risk_cell" style="height:auto; width:100%">
                  <FlexContainer id="st_switch_risk_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                    <Container id="st_switch_risk_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="st_switch_risk_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                        <Container id="st_switch_risk_name_cell" style="height:auto; width:auto"><Text id="st_switch_risk_name" props={content: "风险告警", tagName: "span"}/></Container>
                        <Container id="st_switch_risk_desc_cell" style="height:auto; width:auto"><Text id="st_switch_risk_desc" props={content: "库存 / 账期异常时立即通知", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="st_switch_risk_ctrl_cell" style="height:auto; width:auto; flex-shrink:0"><Switch id="st_switch_risk_ctrl" props={checked: false}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>

            <!-- 保存动作 -->
            <Container id="st_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
              <FlexContainer id="st_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                <Container id="st_cancel_cell" style="height:auto; width:auto"><Button id="st_cancel_btn" props={content: "取消", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
                <Container id="st_save_cell" style="height:auto; width:auto"><Button id="st_save_btn" props={content: "保存修改", variant: "primary"} style="height:auto; width:auto; padding:9px 26px"/></Container>
              </FlexContainer>
            </Container>

            <!-- 危险区 -->
            <Container id="st_danger_card" style="height:auto; width:100%">
              <FlexContainer id="st_danger_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:20px 24px">
                <Container id="st_danger_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="st_danger_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:3px">
                    <Container id="st_danger_title_cell" style="height:auto; width:auto"><Text id="st_danger_title" props={content: "转让所有权", tagName: "span"}/></Container>
                    <Container id="st_danger_desc_cell" style="height:auto; width:auto"><Text id="st_danger_desc" props={content: "将团队所有权移交给其他成员，操作不可撤回。", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="st_danger_btn_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="st_danger_btn" props={content: "转让所有权", variant: "danger"} style="height:auto; width:auto; padding:9px 22px"/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑；动作按钮为声明式反馈
      @st_save_btn = {
        events: { saveSettings: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "设置已保存（演示）"}) } }
      };
      @st_cancel_btn = {
        events: { resetSettings: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已放弃未保存的修改"}) } }
      };
      @st_danger_btn = {
        events: { transferOwnership: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "转让需二次验证，请前往安全设置确认（演示）"}) } }
      };
    </script>

    <styles>
      # 0. 画布与顶栏
      @st_root = { background: #f5f7fa; }
      @st_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @st_logo = { color: #6366f1; font-size: 22px; }
      @st_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @st_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @st_avatar = { background-color: #6366f1; color: #ffffff; font-size: 13px; }

      # 1. 左栏导航
      @st_nav_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }

      # 2. 表单卡
      @st_basic_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @st_basic_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @st_basic_desc = { color: #94a3b8; font-size: 12px; }
      @st_field_name_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_mail_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_industry_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_field_intro_label = { color: #334155; font-size: 13px; font-weight: 600; }
      @st_notify_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @st_notify_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
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

      # 3. 危险区
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

> 制作要点：设置页 = 左分区导航（menu slot-cell）+ 右侧功能卡（表单 / 开关列表 / 危险区）；危险操作**只做入口**（执行走确认流）；工具页零动效。
