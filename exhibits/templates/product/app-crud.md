# 数据表格管理页（CRUD 列表） — 「明湖生鲜」商品管理

> 模板定位（产品 / 应用 tab · SaaS 工具）：后台管理最通用的 CRUD 列表形态——页头动作 + 筛选卡 + 数据表格 + 分页。
> 场景需求：给连锁生鲜品牌做商品管理页：顶部导航，内容区依次是页头（标题 + 导出 / 新建动作）、筛选卡（关键词输入 + 分类下拉 + 状态下拉 + 查询 / 重置）、商品表格（8 行：商品名称 / SKU / 分类 / 售价 / 库存 / 状态 / 更新时间）与右下分页。浅灰画布白卡、整页零动效（工具页纪律），静态数据零 API。

```lang
<App dsl-version="0.3" name="明湖生鲜 · 商品管理">
  <Page id="goods_admin" name="商品管理" route="/goods">
    <FlexContainer id="crud_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 顶栏 ─── -->
      <Container id="crud_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="crud_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="crud_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crud_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="crud_logo_cell" style="height:auto; width:auto"><Icon id="crud_logo" props={iconName: "ShoppingBasket", iconSource: "lucide"}/></Container>
              <Container id="crud_brand_text_cell" style="height:auto; width:auto"><Text id="crud_brand" props={content: "明湖生鲜 · 商品管理", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="crud_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crud_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="crud_bell_cell" style="height:auto; width:auto"><Icon id="crud_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="crud_avatar_cell" style="height:auto; width:auto"><Avatar id="crud_avatar" props={text: "湖", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="crud_user_name_cell" style="height:auto; width:auto"><Text id="crud_user_name" props={content: "林选品", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 内容区 ─── -->
      <Container id="crud_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="crud_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px">

          <!-- 页头：标题 + 动作 -->
          <Container id="crud_pagehead_cell" style="height:auto; width:100%">
            <FlexContainer id="crud_pagehead_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
              <Container id="crud_pagehead_left_cell" style="height:auto; width:auto">
                <FlexContainer id="crud_pagehead_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="crud_title_cell" style="height:auto; width:auto"><Text id="crud_title" props={content: "商品列表", tagName: "h1"}/></Container>
                  <Container id="crud_subtitle_cell" style="height:auto; width:auto"><Text id="crud_subtitle" props={content: "共 128 个在售商品 · 库存预警 6 个", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crud_pagehead_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                <FlexContainer id="crud_pagehead_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="crud_export_cell" style="height:auto; width:auto"><Button id="crud_export_btn" props={content: "导出 CSV", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                  <Container id="crud_create_cell" style="height:auto; width:auto"><Button id="crud_create_btn" props={content: "新建商品", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 筛选卡 -->
          <Container id="crud_filter_card" style="height:auto; width:100%">
            <FlexContainer id="crud_filter_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px; padding:18px 20px">
              <Container id="crud_filter_kw_cell" style="height:auto; width:280px; flex-shrink:0">
                <Input id="crud_filter_kw" props={placeholder: "商品名称 / SKU"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_cat_cell" style="height:auto; width:160px; flex-shrink:0">
                <Select id="crud_filter_cat" props={options: [{label: "全部分类", value: "all"}, {label: "时令果蔬", value: "fruit"}, {label: "肉禽蛋品", value: "meat"}, {label: "水产海鲜", value: "seafood"}, {label: "乳品烘焙", value: "dairy"}], placeholder: "全部分类"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_status_cell" style="height:auto; width:150px; flex-shrink:0">
                <Select id="crud_filter_status" props={options: [{label: "全部状态", value: "all"}, {label: "在售", value: "on"}, {label: "库存预警", value: "low"}, {label: "已下架", value: "off"}], placeholder: "全部状态"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_search_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="crud_filter_search" props={content: "查询", variant: "primary"} style="height:auto; width:auto; padding:8px 22px"/>
              </Container>
              <Container id="crud_filter_reset_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="crud_filter_reset" props={content: "重置", variant: "default"} style="height:auto; width:auto; padding:8px 22px"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 表格卡 -->
          <Container id="crud_table_card" style="height:auto; width:100%">
            <FlexContainer id="crud_table_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="crud_table_head_cell" style="height:auto; width:100%">
                <FlexContainer id="crud_table_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="crud_table_title_cell" style="height:auto; width:auto"><Text id="crud_table_title" props={content: "商品数据", tagName: "h3"}/></Container>
                  <Container id="crud_table_note_cell" style="height:auto; width:auto"><Text id="crud_table_note" props={content: "数据每 10 分钟同步一次", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crud_table_body_cell" style="height:auto; width:100%">
                <Table id="crud_table" props={columns: [{title: "商品名称", dataIndex: "name", key: "name", width: "240px"}, {title: "SKU", dataIndex: "sku", key: "sku", width: "150px"}, {title: "分类", dataIndex: "category", key: "category", width: "110px"}, {title: "售价", dataIndex: "price", key: "price", width: "100px"}, {title: "库存", dataIndex: "stock", key: "stock", width: "100px"}, {title: "状态", dataIndex: "status", key: "status", width: "120px"}, {title: "更新时间", dataIndex: "updatedAt", key: "updatedAt", width: "170px"}], dataSource: [{id: 1, name: "阳山水蜜桃 4 枚装", sku: "MH-FR-0921", category: "时令果蔬", price: "¥39.8", stock: "1,204", status: "在售", updatedAt: "2026-09-14 09:20"}, {id: 2, name: "有机鲜牛奶 950ml", sku: "MH-DY-1102", category: "乳品烘焙", price: "¥15.9", stock: "836", status: "在售", updatedAt: "2026-09-14 08:45"}, {id: 3, name: "挪威三文鱼中段 300g", sku: "MH-SF-0308", category: "水产海鲜", price: "¥89.0", stock: "42", status: "库存预警", updatedAt: "2026-09-14 08:10"}, {id: 4, name: "土鸡蛋 30 枚礼盒", sku: "MH-EG-0705", category: "肉禽蛋品", price: "¥45.9", stock: "528", status: "在售", updatedAt: "2026-09-13 21:36"}, {id: 5, name: "云南蓝莓 125g ×2", sku: "MH-FR-0917", category: "时令果蔬", price: "¥29.9", stock: "0", status: "已下架", updatedAt: "2026-09-13 19:02"}, {id: 6, name: "谷饲牛腱子 500g", sku: "MH-MT-0502", category: "肉禽蛋品", price: "¥69.0", stock: "188", status: "在售", updatedAt: "2026-09-13 17:48"}, {id: 7, name: "丹麦风味吐司 400g", sku: "MH-BK-1201", category: "乳品烘焙", price: "¥12.9", stock: "19", status: "库存预警", updatedAt: "2026-09-13 16:22"}, {id: 8, name: "舟山带鱼段 500g", sku: "MH-SF-0404", category: "水产海鲜", price: "¥35.8", stock: "264", status: "在售", updatedAt: "2026-09-13 15:05"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_pager_cell" style="height:auto; width:100%; justify-content:flex-end">
                <Pagination id="crud_pager" props={current: 1, total: 128, pageSize: 10, showSizeChanger: true, pageSizeOptions: [10, 20, 50], align: "end"} style="height:auto; width:auto"/>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 工具页无数据逻辑（静态演示数据）；动作按钮为声明式反馈
      @crud_create_btn = {
        events: { createGoods: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已打开新建商品表单（演示）"}) } }
      };
      @crud_export_btn = {
        events: { exportList: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "导出任务已创建：商品列表_2026-09-14.csv"}) } }
      };
      @crud_filter_search = {
        events: { searchGoods: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "已按筛选条件查询：找到 8 条结果（演示）"}) } }
      };
      @crud_filter_reset = {
        events: { resetFilter: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "筛选条件已重置"}) } }
      };
    </script>

    <styles>
      # 0. 画布与卡片
      @crud_root = { background: #f5f7fa; }
      @crud_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @crud_logo = { color: #16a34a; font-size: 22px; }
      @crud_brand = { color: #0f172a; font-size: 17px; font-weight: 800; letter-spacing: -0.2px; }
      @crud_bell = { color: #64748b; font-size: 18px; cursor: pointer; }
      @crud_avatar = { background-color: #16a34a; color: #ffffff; font-size: 13px; }
      @crud_user_name = { color: #334155; font-size: 14px; font-weight: 600; }
      @crud_title = { color: #0f172a; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
      @crud_subtitle = { color: #64748b; font-size: 13px; }
      @crud_export_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @crud_create_btn = {
        color: #ffffff;
        background: #16a34a;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #15803d; }
      }
      @crud_filter_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @crud_filter_search = {
        color: #ffffff;
        background: #16a34a;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #15803d; }
      }
      @crud_filter_reset = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @crud_table_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @crud_table_title = { color: #0f172a; font-size: 17px; font-weight: 700; }
      @crud_table_note = { color: #94a3b8; font-size: 12px; }
    </styles>
  </Page>
</App>
```

> 制作要点：CRUD 列表 = 页头动作 + 筛选 + 表格 + 分页四段式；工具页**零动效**（交互纪律）；表格/下拉/分页全部 canonical 组件；静态数据零 API。
