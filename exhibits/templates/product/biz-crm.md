# CRM 客户管理（列表 + 详情） — 「长风 CRM」客户中心

> 模板定位（产品 / 应用 tab · 业务系统）：主从式业务页标准形态——左栏数据驱动客户列表（List + item 模板）+ 右栏客户档案（摘要头 + 字段描述 + 跟进时间线）。
> 场景需求：给销售团队做客户中心：左栏是可搜索的客户列表（姓名 / 公司 / 状态标签，数据来自 dataSource 循环渲染），右栏是选中客户的完整档案——头像姓名公司 + 状态标签 + 跟进 / 转商机动作、六项客户字段（Descriptions 两列）、最近四次跟进记录（Timeline）与备注。浅色商务风、零动效（工具页纪律）、静态数据零 API。

```lang
<App dsl-version="0.3" name="长风 CRM · 客户中心">
  <Page id="crm_customers" name="客户中心" route="/customers">
    <FlexContainer id="crm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 顶栏 ─── -->
      <Container id="crm_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="crm_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="crm_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crm_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="crm_logo_cell" style="height:auto; width:auto"><Icon id="crm_logo" props={iconName: "Contact", iconSource: "lucide"}/></Container>
              <Container id="crm_brand_text_cell" style="height:auto; width:auto"><Text id="crm_brand" props={content: "长风 CRM · 客户中心", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="crm_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crm_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="crm_bell_cell" style="height:auto; width:auto"><Icon id="crm_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="crm_avatar_cell" style="height:auto; width:auto"><Avatar id="crm_avatar" props={text: "许", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="crm_user_name_cell" style="height:auto; width:auto"><Text id="crm_user_name" props={content: "许晨", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 主从区 ─── -->
      <Container id="crm_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="crm_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">

          <!-- 左栏：客户列表 -->
          <Container id="crm_list_card" style="flex-shrink:0; height:auto; width:320px">
            <FlexContainer id="crm_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 16px">
              <Container id="crm_list_head_cell" style="height:auto; width:100%">
                <FlexContainer id="crm_list_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="crm_list_title_cell" style="height:auto; width:auto"><Text id="crm_list_title" props={content: "客户列表", tagName: "h3"}/></Container>
                  <Container id="crm_list_count_cell" style="height:auto; width:auto"><Text id="crm_list_count" props={content: "6 位跟进中", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crm_search_cell" style="height:auto; width:100%">
                <Input id="crm_search" props={placeholder: "搜索姓名 / 公司"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crm_list_body_cell" style="height:auto; width:100%">
                <List id="crm_list" props={dataSource: [{name: "沈知远", company: "青禾食品集团", status: "重点跟进"}, {name: "黎晚晴", company: "湾流跨境电商", status: "方案沟通"}, {name: "陆铭", company: "北辰连锁便利", status: "重点跟进"}, {name: "苏叶", company: "云栖茶饮", status: "新线索"}, {name: "程野", company: "风行物流", status: "方案沟通"}, {name: "宋清和", company: "澄海文旅", status: "新线索"}], direction: "vertical", gap: "10px"} style="height:auto; width:100%">
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

          <!-- 右栏：客户档案 -->
          <Container id="crm_detail_card" style="flex-grow:1; height:auto; width:auto">
            <FlexContainer id="crm_detail_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:20px; padding:22px 24px">

              <!-- 摘要头 -->
              <Container id="crm_profile_cell" style="height:auto; width:100%">
                <FlexContainer id="crm_profile_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                  <Container id="crm_profile_left_cell" style="height:auto; width:auto">
                    <FlexContainer id="crm_profile_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
                      <Container id="crm_profile_avatar_cell" style="height:auto; width:auto"><Avatar id="crm_profile_avatar" props={text: "沈", shape: "square"} style="height:52px; width:52px"/></Container>
                      <Container id="crm_profile_text_cell" style="height:auto; width:auto">
                        <FlexContainer id="crm_profile_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:6px">
                          <Container id="crm_profile_name_row_cell" style="height:auto; width:auto">
                            <FlexContainer id="crm_profile_name_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
                              <Container id="crm_profile_name_cell" style="height:auto; width:auto"><Text id="crm_profile_name" props={content: "沈知远", tagName: "h2"}/></Container>
                              <Container id="crm_profile_tag_cell" style="height:auto; width:auto"><Tag id="crm_profile_tag" props={text: "重点跟进", color: "gold"}/></Container>
                            </FlexContainer>
                          </Container>
                          <Container id="crm_profile_company_cell" style="height:auto; width:auto"><Text id="crm_profile_company" props={content: "青禾食品集团 · 采购总监", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="crm_profile_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="crm_profile_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                      <Container id="crm_follow_btn_cell" style="height:auto; width:auto"><Button id="crm_follow_btn" props={content: "记录跟进", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                      <Container id="crm_convert_cell" style="height:auto; width:auto"><Button id="crm_convert_btn" props={content: "转为商机", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>

              <!-- 客户字段 -->
              <Container id="crm_fields_cell" style="height:auto; width:100%">
                <Descriptions id="crm_fields" props={title: "客户档案", column: 2, items: [{"label": "所属行业", "value": "食品加工 / 供应链"}, {"label": "企业规模", "value": "2,400 人 · 年营收 18 亿"}, {"label": "对接负责人", "value": "沈知远（采购总监）"}, {"label": "线索来源", "value": "行业展会 · 2026 春季糖酒会"}, {"label": "联系电话", "value": "138-0000-2688"}, {"label": "企业邮箱", "value": "shen@qinghe-food.example.com"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- 跟进时间线 -->
              <Container id="crm_timeline_cell" style="height:auto; width:100%">
                <Timeline id="crm_follow_timeline" props={items: [{"label": "电话沟通：确认三季度供货品类与账期（30 天）", "time": "2026-09-12 15:40"}, {"label": "寄送样品：低温奶与烘焙系列共 6 款", "time": "2026-09-08 10:20"}, {"label": "现场拜访：参观中央厨房并演示对账系统", "time": "2026-09-03 14:00"}, {"label": "首次建联：展会留资，需求为区域集中采购", "time": "2026-08-27 11:15"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- 备注 -->
              <Container id="crm_note_cell" style="height:auto; width:100%">
                <Text id="crm_note" props={content: "备注：客户对账期敏感，需财务侧确认 30 天方案；下周三前给出定制报价单。", tagName: "p"} style="height:auto; width:100%; padding:14px 16px"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑；动作为声明式反馈
      @crm_follow_btn = {
        events: { addFollow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已打开跟进记录表单（演示）"}) } }
      };
      @crm_convert_btn = {
        events: { convertLead: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已创建商机：青禾食品集团 · 三季度集采"}) } }
      };
    </script>

    <styles>
      # 0. 画布与顶栏
      @crm_root = { background: #f4f6fb; }
      @crm_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @crm_logo = { color: #2563eb; font-size: 22px; }
      @crm_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @crm_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @crm_avatar = { background-color: #2563eb; color: #ffffff; font-size: 13px; }
      @crm_user_name = { color: #334155; font-size: 14px; font-weight: 600; }

      # 1. 左栏列表
      @crm_list_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @crm_list_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @crm_list_count = { color: #94a3b8; font-size: 12px; }
      @crm_item_tpl = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateX(2px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); } }
      @crm_item_name = { color: #0f172a; font-size: 15px; font-weight: 700; }
      @crm_item_company = { color: #64748b; font-size: 12px; }
      @crm_item_status = { background-color: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 700; border-radius: 999px; }

      # 2. 右栏档案
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
      @crm_note = { color: #1e3a8a; font-size: 13px; line-height: 1.8; }
    </styles>
  </Page>
</App>
```

> 制作要点：主从布局（左列表 320px 固定 + 右档案伸缩）；列表为 **List 数据驱动**（`{{item.*}}` 模板，数据轴展示）；档案区三段式（摘要头 / Descriptions 字段 / Timeline 跟进）；工具页零动效。
