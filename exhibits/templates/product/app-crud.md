# Data Table Admin Page (CRUD list) — "Minghu Fresh" product catalog

> Template role (product / app tab · SaaS tools): the most common back-office list shape — page
> header actions + filter card + data table + pagination.
> Scenario: a product catalog for a grocery chain: a top navigation bar, then a page header (title +
> export / create actions), a filter card (keyword input + category select + status select + search /
> reset), the product table (8 rows: name / SKU / category / price / stock / status / last updated)
> and pagination at the bottom right. Light grey canvas with white cards, zero motion on the whole
> page (utility-page discipline), static data, no API calls.

```lang
<App dsl-version="0.3" name="Minghu Fresh · Product Admin">
  <Page id="goods_admin" name="Product Admin" route="/goods">
    <FlexContainer id="crud_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Top bar ─── -->
      <Container id="crud_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="crud_header_row" props={direction: "row"} style="height:100%; width:100%; justify-content:space-between; align-items:center; padding:0px 24px">
          <Container id="crud_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crud_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="crud_logo_cell" style="height:auto; width:auto"><Icon id="crud_logo" props={iconName: "ShoppingBasket", iconSource: "lucide"}/></Container>
              <Container id="crud_brand_text_cell" style="height:auto; width:auto"><Text id="crud_brand" props={content: "Minghu Fresh · Product Admin", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="crud_user_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="crud_user_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:14px">
              <Container id="crud_bell_cell" style="height:auto; width:auto"><Icon id="crud_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
              <Container id="crud_avatar_cell" style="height:auto; width:auto"><Avatar id="crud_avatar" props={text: "L", shape: "circle"} style="height:32px; width:32px"/></Container>
              <Container id="crud_user_name_cell" style="height:auto; width:auto"><Text id="crud_user_name" props={content: "Lin Wu", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Content ─── -->
      <Container id="crud_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 36px">
        <FlexContainer id="crud_body_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:16px">

          <!-- Page header: title + actions -->
          <Container id="crud_pagehead_cell" style="height:auto; width:100%">
            <FlexContainer id="crud_pagehead_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
              <Container id="crud_pagehead_left_cell" style="height:auto; width:auto">
                <FlexContainer id="crud_pagehead_left_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                  <Container id="crud_title_cell" style="height:auto; width:auto"><Text id="crud_title" props={content: "Products", tagName: "h1"}/></Container>
                  <Container id="crud_subtitle_cell" style="height:auto; width:auto"><Text id="crud_subtitle" props={content: "128 products live · 6 low on stock", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crud_pagehead_actions_cell" style="height:auto; width:auto; flex-shrink:0">
                <FlexContainer id="crud_pagehead_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="crud_export_cell" style="height:auto; width:auto"><Button id="crud_export_btn" props={content: "Export CSV", variant: "default"} style="height:auto; width:auto; padding:8px 18px"/></Container>
                  <Container id="crud_create_cell" style="height:auto; width:auto"><Button id="crud_create_btn" props={content: "New product", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Filter card -->
          <Container id="crud_filter_card" style="height:auto; width:100%">
            <FlexContainer id="crud_filter_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:14px; padding:18px 20px">
              <Container id="crud_filter_kw_cell" style="height:auto; width:280px; flex-shrink:0">
                <Input id="crud_filter_kw" props={placeholder: "Product name / SKU"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_cat_cell" style="height:auto; width:170px; flex-shrink:0">
                <Select id="crud_filter_cat" props={options: [{label: "All categories", value: "all"}, {label: "Produce", value: "fruit"}, {label: "Meat & eggs", value: "meat"}, {label: "Seafood", value: "seafood"}, {label: "Dairy & bakery", value: "dairy"}], placeholder: "All categories"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_status_cell" style="height:auto; width:150px; flex-shrink:0">
                <Select id="crud_filter_status" props={options: [{label: "All statuses", value: "all"}, {label: "Live", value: "on"}, {label: "Low stock", value: "low"}, {label: "Delisted", value: "off"}], placeholder: "All statuses"} style="height:auto; width:100%"/>
              </Container>
              <Container id="crud_filter_search_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="crud_filter_search" props={content: "Search", variant: "primary"} style="height:auto; width:auto; padding:8px 22px"/>
              </Container>
              <Container id="crud_filter_reset_cell" style="height:auto; width:auto; flex-shrink:0">
                <Button id="crud_filter_reset" props={content: "Reset", variant: "default"} style="height:auto; width:auto; padding:8px 22px"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Table card -->
          <Container id="crud_table_card" style="height:auto; width:100%">
            <FlexContainer id="crud_table_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:18px 20px">
              <Container id="crud_table_head_cell" style="height:auto; width:100%">
                <FlexContainer id="crud_table_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="crud_table_title_cell" style="height:auto; width:auto"><Text id="crud_table_title" props={content: "Product data", tagName: "h3"}/></Container>
                  <Container id="crud_table_note_cell" style="height:auto; width:auto"><Text id="crud_table_note" props={content: "Synced every 10 minutes", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="crud_table_body_cell" style="height:auto; width:100%">
                <Table id="crud_table" props={columns: [{title: "Product", dataIndex: "name", key: "name", width: "220px"}, {title: "SKU", dataIndex: "sku", key: "sku", width: "140px"}, {title: "Category", dataIndex: "category", key: "category", width: "140px"}, {title: "Price", dataIndex: "price", key: "price", width: "90px"}, {title: "Stock", dataIndex: "stock", key: "stock", width: "90px"}, {title: "Status", dataIndex: "status", key: "status", width: "120px"}, {title: "Updated", dataIndex: "updatedAt", key: "updatedAt", width: "160px"}], dataSource: [{id: 1, name: "Yangshan Peaches, 4-pack", sku: "MH-FR-0921", category: "Produce", price: "$9.80", stock: "1,204", status: "Live", updatedAt: "2026-09-14 09:20"}, {id: 2, name: "Organic Whole Milk 950ml", sku: "MH-DY-1102", category: "Dairy & bakery", price: "$4.50", stock: "836", status: "Live", updatedAt: "2026-09-14 08:45"}, {id: 3, name: "Norwegian Salmon Fillet 300g", sku: "MH-SF-0308", category: "Seafood", price: "$13.90", stock: "42", status: "Low stock", updatedAt: "2026-09-14 08:10"}, {id: 4, name: "Free-range Eggs, 30-pack", sku: "MH-EG-0705", category: "Meat & eggs", price: "$7.90", stock: "528", status: "Live", updatedAt: "2026-09-13 21:36"}, {id: 5, name: "Yunnan Blueberries 125g ×2", sku: "MH-FR-0917", category: "Produce", price: "$6.50", stock: "0", status: "Delisted", updatedAt: "2026-09-13 19:02"}, {id: 6, name: "Grain-fed Beef Shank 500g", sku: "MH-MT-0502", category: "Meat & eggs", price: "$11.50", stock: "188", status: "Live", updatedAt: "2026-09-13 17:48"}, {id: 7, name: "Danish-style Toast 400g", sku: "MH-BK-1201", category: "Dairy & bakery", price: "$3.20", stock: "19", status: "Low stock", updatedAt: "2026-09-13 16:22"}, {id: 8, name: "Zhoushan Hairtail Steaks 500g", sku: "MH-SF-0404", category: "Seafood", price: "$8.40", stock: "264", status: "Live", updatedAt: "2026-09-13 15:05"}], rowKey: "id", size: "middle"} style="height:auto; width:100%"/>
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
      # Utility page has no data logic (static demo data); the action buttons are declarative feedback
      @crud_create_btn = {
        events: { createGoods: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "New product form opened (demo)"}) } }
      };
      @crud_export_btn = {
        events: { exportList: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Export queued: product-list_2026-09-14.csv"}) } }
      };
      @crud_filter_search = {
        events: { searchGoods: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Filters applied: 8 results (demo)"}) } }
      };
      @crud_filter_reset = {
        events: { resetFilter: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Filters reset"}) } }
      };
    </script>

    <styles>
      # 0. Canvas and cards
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

> Craft notes: a CRUD list is four blocks in one column — page header actions + filters + table +
> pagination; a utility page ships with **zero motion** (interaction discipline); table / select /
> pagination are all canonical components; static data, no API.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** CJK glyphs are square and set without word
spacing, so the same nominal sizes run wider in English; a dense table is where that bites first —
every header cell now holds a whole word rather than 2–4 CJK chars.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Table `Product` | 240px | **220px** | longest name ("Norwegian Salmon Fillet 300g", 28 glyphs) still fits on one line at 14px |
| Table `SKU` | 150px | **140px** | codes are Latin in both versions; the surplus went to `Category` |
| Table `Category` | 110px | **140px** | "Dairy & bakery" is 14 glyphs against 4 CJK chars — at 110px it wrapped to two lines |
| Table `Price` / `Stock` | 100px each | **90px each** | `$13.90` / `1,204` are shorter than 售价 / 库存 headers plus their padding |
| Table `Updated` | 170px | **160px** | `2026-09-14 09:20` is narrower than the CJK header that sat above it |
| Filter category select | 160px | **170px** | "All categories" + the dropdown arrow need ~10px more than 全部分类 |
| Page title | 商品列表 | "Products" | the English page title is one word; the subtitle carries the counts (128 live · 6 low on stock) |
| `crud_title` / `crud_brand` / body copy | 24px / 17px / 13px | unchanged | short Latin labels; sizes were already comfortable |

Everything else — the card radii, shadows, 64px header, button paddings and the pagination options —
is language-neutral and unchanged.

**Copy policy**: not a literal translation. Chinese retail framing is rewritten to international
equivalents: `明湖生鲜` → Minghu Fresh, product names converted to everyday English grocery lines
(Yangshan peaches, Zhoushan hairtail kept as the real regional products they are), and the currency
restated from `¥` to `$` with plausible shelf prices. Status vocabulary became `Live` / `Low stock` /
`Delisted` (在售 / 库存预警 / 已下架), the category set shrank `时令果蔬` to the idiomatic American
"Produce", and the demo toast strings were rewritten rather than transliterated (including the export
file name, now `product-list_...csv`).

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
