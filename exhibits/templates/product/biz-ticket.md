# 工单 / 客服台 — 「栖木科技」客服工单台

> 模板定位（产品 / 应用 tab · 业务系统）：客服/支持台的队列-详情标准形态——左栏工单队列（List 数据驱动）+ 右栏工单详情（摘要头 + 字段 + 描述 + 处理时间线 + 动作）。
> 场景需求：给虚构 SaaS 公司做客服工单台：顶栏品牌，左栏工单队列（6 条工单：标题 / 客户 / 时间 / 状态标签，数据驱动循环渲染），右栏选中工单详情（编号 + 标题 + 紧急/处理中标签、五项字段、问题描述、四条处理记录时间线、回复/转派/关闭动作）。浅灰画布、白卡、零动效。

```lang
<App dsl-version="0.3" name="栖木科技 · 客服工单台">
  <Page id="ticket" name="客服工单台" route="/tickets">
    <FlexContainer id="tk_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 顶栏 ─── -->
      <Container id="tk_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="tk_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="tk_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="tk_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="tk_logo_cell" style="height:auto; width:auto"><Icon id="tk_logo" props={iconName: "Headset", iconSource: "lucide"}/></Container>
              <Container id="tk_brand_text_cell" style="height:auto; width:auto"><Text id="tk_brand" props={content: "栖木科技 · 客服工单台", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tk_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="tk_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="tk_bell_cell" style="height:auto; width:auto"><Icon id="tk_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="tk_avatar_cell" style="height:auto; width:auto"><Avatar id="tk_avatar" props={text: "栖", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="tk_user_name_cell" style="height:auto; width:auto"><Text id="tk_user_name" props={content: "值班坐席 · 阿澈", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 主从区 ─── -->
      <Container id="tk_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="tk_body_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:16px">

          <!-- 左栏：工单队列 -->
          <Container id="tk_queue_card" style="flex-shrink:0; height:auto; width:380px">
            <FlexContainer id="tk_queue_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 14px">
              <Container id="tk_queue_head_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_queue_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="tk_queue_title_cell" style="height:auto; width:auto"><Text id="tk_queue_title" props={content: "工单队列", tagName: "h3"}/></Container>
                  <Container id="tk_queue_note_cell" style="height:auto; width:auto"><Text id="tk_queue_note" props={content: "6 条跟进中 · 1 条紧急", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tk_queue_list_cell" style="height:auto; width:100%">
                <List id="tk_queue_list" props={dataSource: [{no: "QU-2026-0921", title: "导出报表在 Safari 下乱码", customer: "青禾食品 · 沈知远", time: "12 分钟前", status: "紧急"}, {no: "QU-2026-0920", title: "批量导入商品时 500 报错", customer: "明湖生鲜 · 林选品", time: "48 分钟前", status: "处理中"}, {no: "QU-2026-0919", title: "子账号无法查看订单列表", customer: "长风物流 · 陆铭", time: "2 小时前", status: "处理中"}, {no: "QU-2026-0918", title: "发票抬头信息修改未生效", customer: "澄见科技 · 苏叶", time: "4 小时前", status: "待回复"}, {no: "QU-2026-0917", title: "API 限流阈值能否调高", customer: "湾流跨境 · 黎晚晴", time: "昨天", status: "待回复"}, {no: "QU-2026-0916", title: "移动端消息推送延迟", customer: "北辰便利 · 程野", time: "昨天", status: "已解决"}], direction: "vertical", gap: "10px"} style="height:auto; width:100%">
                  <Container id="tk_item_tpl" style="height:auto; width:100%">
                    <FlexContainer id="tk_item_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:6px; padding:12px 12px">
                      <Container id="tk_item_top_cell" style="height:auto; width:100%">
                        <FlexContainer id="tk_item_top_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                          <Container id="tk_item_no_cell" style="height:auto; width:auto"><Text id="tk_item_no" props={content: "{{item.no}}", tagName: "span"} style="height:auto; width:auto"/></Container>
                          <Container id="tk_item_status_cell" style="height:auto; width:auto"><Tag id="tk_item_status" props={text: "{{item.status}}", color: "geekblue"} style="height:auto; width:auto"/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tk_item_title_cell" style="height:auto; width:100%"><Text id="tk_item_title" props={content: "{{item.title}}", tagName: "h4"} style="height:auto; width:100%"/></Container>
                      <Container id="tk_item_meta_cell" style="height:auto; width:100%"><Text id="tk_item_meta" props={content: "{{item.customer}}", tagName: "span"} style="height:auto; width:100%"/></Container>
                    </FlexContainer>
                  </Container>
                </List>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 右栏：工单详情 -->
          <Container id="tk_detail_card" style="flex-grow:1; height:auto; width:auto">
            <FlexContainer id="tk_detail_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:20px; padding:22px 24px">

              <!-- 摘要头 -->
              <Container id="tk_detail_head_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_detail_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; justify-content:space-between">
                  <Container id="tk_detail_head_left_cell" style="height:auto; width:auto">
                    <FlexContainer id="tk_detail_head_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:8px">
                      <Container id="tk_detail_no_cell" style="height:auto; width:auto"><Text id="tk_detail_no" props={content: "QU-2026-0921", tagName: "span"}/></Container>
                      <Container id="tk_detail_title_cell" style="height:auto; width:300px">
                        <Text id="tk_detail_title" props={content: "导出报表在 Safari 下乱码", tagName: "h2"} style="height:auto; width:100%"/>
                      </Container>
                      <Container id="tk_detail_tags_cell" style="height:auto; width:auto">
                        <FlexContainer id="tk_detail_tags_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:8px">
                          <Container id="tk_detail_tag_urgent_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_urgent" props={text: "紧急", color: "red"}/></Container>
                          <Container id="tk_detail_tag_status_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_status" props={text: "处理中", color: "blue"}/></Container>
                          <Container id="tk_detail_tag_channel_cell" style="height:auto; width:auto"><Tag id="tk_detail_tag_channel" props={text: "企业微信", color: "cyan"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tk_detail_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                    <FlexContainer id="tk_detail_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                      <Container id="tk_transfer_cell" style="height:auto; width:auto"><Button id="tk_transfer_btn" props={content: "转派", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                      <Container id="tk_close_cell" style="height:auto; width:auto"><Button id="tk_close_btn" props={content: "关闭工单", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                    </FlexContainer>
                  </Container>
                </FlexContainer>
              </Container>

              <!-- 字段 -->
              <Container id="tk_fields_cell" style="height:auto; width:100%">
                <Descriptions id="tk_fields" props={title: "工单信息", column: 2, items: [{"label": "客户", "value": "青禾食品集团 · 沈知远"}, {"label": "联系邮箱", "value": "shen@qinghe-food.example.com"}, {"label": "问题模块", "value": "数据导出 / 报表中心"}, {"label": "首次提交", "value": "2026-09-14 20:33"}, {"label": "影响范围", "value": "Safari 17+ / 桌面端"}, {"label": "当前负责人", "value": "阿澈（一线支持）"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- 问题描述 -->
              <Container id="tk_desc_cell" style="height:auto; width:100%">
                <FlexContainer id="tk_desc_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:8px; padding:16px 18px">
                  <Container id="tk_desc_title_cell" style="height:auto; width:100%"><Text id="tk_desc_title" props={content: "问题描述", tagName: "h3"}/></Container>
                  <Container id="tk_desc_text_cell" style="height:auto; width:100%"><Text id="tk_desc_text" props={content: "客户在 Safari 浏览器点击「导出报表」后，下载的 CSV 中文字段显示为乱码；Chrome 下正常。已确认导出文件未带 UTF-8 BOM，建议在导出服务端补 BOM 或改用 Excel 兼容编码。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>

              <!-- 处理记录 -->
              <Container id="tk_timeline_cell" style="height:auto; width:100%">
                <Timeline id="tk_timeline" props={items: [{"label": "定位完成：Safari 对无 BOM 的 UTF-8 CSV 判定为 GBK —— 已提交修复分支 fix/csv-bom", "time": "20:52 阿澈"}, {"label": "复现成功：客服复现环境为 Safari 17.4，Chrome 17 无问题", "time": "20:47 小满"}, {"label": "已升级为紧急：客户财务月底结账依赖该报表", "time": "20:41 阿澈"}, {"label": "工单创建：客户通过企业微信提交", "time": "20:33 系统"}]} style="height:auto; width:100%"/>
              </Container>

              <!-- 底部动作 -->
              <Container id="tk_footer_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
                <FlexContainer id="tk_footer_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="tk_note_cell" style="height:auto; width:auto"><Button id="tk_note_btn" props={content: "添加内部备注", variant: "default"} style="height:auto; width:auto; padding:9px 20px"/></Container>
                  <Container id="tk_reply_cell" style="height:auto; width:auto"><Button id="tk_reply_btn" props={content: "回复客户", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑；动作为声明式反馈
      @tk_reply_btn = {
        events: { reply: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已打开回复编辑器（演示）"}) } }
      };
      @tk_transfer_btn = {
        events: { transfer: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "转派需选择目标坐席（演示）"}) } }
      };
      @tk_close_btn = {
        events: { close: { trigger: "onClick", action: feedback.show({type: "message", subtype: "warning", message: "关闭前请确认已回复客户（演示）"}) } }
      };
    </script>

    <styles>
      # 0. 画布与顶栏
      @tk_root = { background: #f5f7fa; }
      @tk_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @tk_logo = { color: #0891b2; font-size: 22px; }
      @tk_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @tk_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @tk_avatar = { background-color: #0891b2; color: #ffffff; font-size: 13px; }
      @tk_user_name = { color: #334155; font-size: 14px; font-weight: 600; }

      # 1. 队列
      @tk_queue_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @tk_queue_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @tk_queue_note = { color: #94a3b8; font-size: 12px; }
      @tk_item_tpl = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateX(2px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); } }
      @tk_item_no = { color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; }
      @tk_item_status = { background-color: #ecfeff; color: #0e7490; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @tk_item_title = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @tk_item_meta = { color: #94a3b8; font-size: 12px; }

      # 2. 详情
      @tk_detail_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @tk_detail_no = { color: #0891b2; font-size: 13px; font-weight: 700; letter-spacing: 1px; }
      @tk_detail_title = { color: #0f172a; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; line-height: 1.35; }
      @tk_detail_tag_urgent = { background-color: #fee2e2; color: #b91c1c; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_detail_tag_status = { background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_detail_tag_channel = { background-color: #ecfeff; color: #0e7490; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tk_transfer_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_close_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_desc_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @tk_desc_title = { color: #0f172a; font-size: 15px; font-weight: 800; }
      @tk_desc_text = { color: #334155; font-size: 14px; line-height: 2; }
      @tk_note_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @tk_reply_btn = {
        color: #ffffff;
        background: #0891b2;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #0e7490; }
      }
    </styles>
  </Page>
</App>
```

> 制作要点：队列-详情主从（左 380px 数据驱动 List + 右伸缩详情）；详情三段式（摘要头 / Descriptions 字段 / Timeline 处理记录 / 描述块）；关闭类动作只做入口（执行走确认流纪律）。
