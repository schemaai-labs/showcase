# 程序员终端风 — 「hex」日志分析 CLI 落地页

> 模板定位（产品 / 应用 tab · SaaS 工具分组 · 风格系列）：终端（Terminal / Dev-Tool）——纯黑底 + 等宽字体 + 荧光绿 / 琥珀 / 青的终端配色、提示符行（`$`）/ 光标闪烁 / ASCII 分节线 / man-page 式参数表 / 安装命令复制块。**开发者语境优先**：文案是命令行口吻，信息按「用法 → 参数 → 示例输出」组织。
> 场景需求：给一个虚构的日志分析 CLI 工具做落地页：终端窗口式首屏（安装命令 + 真实运行输出）；能力三栏（管道 / 索引 / 告警）用 `man` 风格参数表；性能对照表（hex vs 传统 grep）；快速开始四步（命令行分步）；页脚。零 API、静态数据、一组入场编排（首屏 onMount）。

```lang
<App dsl-version="0.3" name="hex — 极速日志分析 CLI">
  <Page id="home" name="首页" route="/">
    <FlexContainer id="tm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. 顶栏 ─── -->
      <Container id="tm_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="tm_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 40px">
          <Container id="tm_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="tm_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="tm_nav_prompt_cell" style="height:auto; width:auto"><Text id="tm_nav_prompt" props={content: "~/hex", tagName: "span"}/></Container>
              <Container id="tm_nav_word_cell" style="height:auto; width:auto"><Text id="tm_nav_word" props={content: "hex", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tm_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="tm_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="tm_nav_i1" props={itemLabel: "用法", itemTarget: "tm_usage_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i2" props={itemLabel: "参数", itemTarget: "tm_flags_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i3" props={itemLabel: "基准", itemTarget: "tm_bench_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i4" props={itemLabel: "安装", itemTarget: "tm_quick_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="tm_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="tm_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="tm_nav_cta_txt" props={content: "$ brew install hex", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. 首屏（终端窗口） ─── -->
      <Container id="tm_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="tm_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:64px 40px 76px; gap:30px; align-items:flex-start">
          <Container id="tm_hero_line_cell" style="height:auto; width:auto">
            <FlexContainer id="tm_hero_line_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="tm_hero_prompt_cell" style="height:auto; width:auto"><Text id="tm_hero_prompt" props={content: "$", tagName: "span"}/></Container>
              <Container id="tm_hero_cmd_cell" style="height:auto; width:auto"><Text id="tm_hero_cmd" props={content: "hex 'SELECT status, count(*) FROM nginx.log GROUP BY status' --last 1h", tagName: "span"}/></Container>
              <Container id="tm_hero_cursor_cell" style="height:20px; width:10px; flex-shrink:0"><Container id="tm_hero_cursor" style="height:20px; width:10px"/></Container>
            </FlexContainer>
          </Container>
          <Container id="tm_hero_title_cell" style="height:auto; width:auto"><Text id="tm_hero_title" props={content: "用 SQL 查询你的日志", tagName: "h1"}/></Container>
          <Container id="tm_hero_sub_cell" style="height:auto; width:100%; max-width:620px"><Text id="tm_hero_sub" props={content: "hex 把 10GB 的日志当数据库用：不需要上传、不需要建表，一条 SQL 直接在本地文件上跑。索引按需建立，内存占用恒定。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="tm_hero_term_cell" style="height:auto; width:100%; max-width:920px; padding-top:8px">
            <Container id="tm_term_frame" style="height:auto; width:100%; padding:0px">
              <FlexContainer id="tm_term_col" props={direction: "column"} style="height:auto; width:100%; gap:0px; align-items:stretch">
                <Container id="tm_term_bar_cell" style="height:auto; width:100%; padding:12px 16px">
                  <FlexContainer id="tm_term_bar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:10px">
                    <Container id="tm_term_dot1_cell" style="height:11px; width:11px; flex-shrink:0"><Container id="tm_term_dot1" style="height:11px; width:11px"/></Container>
                    <Container id="tm_term_dot2_cell" style="height:11px; width:11px; flex-shrink:0"><Container id="tm_term_dot2" style="height:11px; width:11px"/></Container>
                    <Container id="tm_term_dot3_cell" style="height:11px; width:11px; flex-shrink:0"><Container id="tm_term_dot3" style="height:11px; width:11px"/></Container>
                    <Container id="tm_term_bar_title_cell" style="height:auto; width:auto; padding-left:8px"><Text id="tm_term_bar_title" props={content: "hex — /var/log/nginx · 1.2 GB scanned in 0.8s", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
                <Container id="tm_term_body_cell" style="height:auto; width:100%; padding:20px 22px 24px">
                  <FlexContainer id="tm_term_body_col" props={direction: "column"} style="height:auto; width:100%; gap:8px; align-items:flex-start">
                    <Container id="tm_o1_cell" style="height:auto; width:auto"><Text id="tm_o1" props={content: "status | count(*) ", tagName: "span"}/></Container>
                    <Container id="tm_o2_cell" style="height:auto; width:auto"><Text id="tm_o2" props={content: "-------+---------- ", tagName: "span"}/></Container>
                    <Container id="tm_o3_cell" style="height:auto; width:auto"><Text id="tm_o3" props={content: "200    | 8,214,903 ", tagName: "span"}/></Container>
                    <Container id="tm_o4_cell" style="height:auto; width:auto"><Text id="tm_o4" props={content: "301    |   412,776 ", tagName: "span"}/></Container>
                    <Container id="tm_o5_cell" style="height:auto; width:auto"><Text id="tm_o5" props={content: "404    |    58,201 ", tagName: "span"}/></Container>
                    <Container id="tm_o6_cell" style="height:auto; width:auto"><Text id="tm_o6" props={content: "500    |     2,344 ", tagName: "span"}/></Container>
                    <Container id="tm_o7_cell" style="height:auto; width:auto; padding-top:8px"><Text id="tm_o7" props={content: "(4 rows · 0.82s · peak mem 42MB)", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </Container>
          <Container id="tm_hero_meta_cell" style="height:auto; width:auto">
            <FlexContainer id="tm_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; gap:34px; align-items:center">
              <Container id="tm_hero_m1_cell" style="height:auto; width:auto"><Text id="tm_hero_m1" props={content: "MIT 开源", tagName: "span"}/></Container>
              <Container id="tm_hero_m2_cell" style="height:auto; width:auto"><Text id="tm_hero_m2" props={content: "macOS / Linux / Windows", tagName: "span"}/></Container>
              <Container id="tm_hero_m3_cell" style="height:auto; width:auto"><Text id="tm_hero_m3" props={content: "12.4k stars", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. 能力三栏（man 风格） ─── -->
      <Container id="tm_usage_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_usage_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 88px; gap:34px">
          <Container id="tm_usage_head_cell" style="height:auto; width:auto"><Text id="tm_usage_head" props={content: "## NAME — hex · 日志分析器（本地优先，零上传）", tagName: "span"}/></Container>
          <Container id="tm_usage_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="tm_usage_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:22px; align-items:stretch">
              <Container id="tm_u1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u1_flag_cell" style="height:auto; width:auto"><Text id="tm_u1_flag" props={content: "--pipe", tagName: "h4"}/></Container>
                  <Container id="tm_u1_name_cell" style="height:auto; width:auto"><Text id="tm_u1_name" props={content: "管道接一切", tagName: "span"}/></Container>
                  <Container id="tm_u1_desc_cell" style="height:auto; width:100%"><Text id="tm_u1_desc" props={content: "cat app.log | hex '...' 直接吃 stdin；也能读目录通配与 gz 压缩，解压与扫描重叠执行。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_u2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u2_flag_cell" style="height:auto; width:auto"><Text id="tm_u2_flag" props={content: "--index", tagName: "h4"}/></Container>
                  <Container id="tm_u2_name_cell" style="height:auto; width:auto"><Text id="tm_u2_name" props={content: "按需索引", tagName: "span"}/></Container>
                  <Container id="tm_u2_desc_cell" style="height:auto; width:100%"><Text id="tm_u2_desc" props={content: "第一次查询建列式索引（落盘在 .hex/），之后同字段查询快 40 倍；索引可随时删除。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_u3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u3_flag_cell" style="height:auto; width:auto"><Text id="tm_u3_flag" props={content: "--watch", tagName: "h4"}/></Container>
                  <Container id="tm_u3_name_cell" style="height:auto; width:auto"><Text id="tm_u3_name" props={content: "实时告警", tagName: "span"}/></Container>
                  <Container id="tm_u3_desc_cell" style="height:auto; width:100%"><Text id="tm_u3_desc" props={content: "tail -f 式跟进 + SQL 条件：命中即执行命令（发通知、触发脚本、写 kafka）。", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. 参数表 ─── -->
      <Container id="tm_flags_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_flags_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 88px; gap:28px">
          <Container id="tm_flags_head_cell" style="height:auto; width:auto"><Text id="tm_flags_head" props={content: "## SYNOPSIS — hex [OPTIONS] <QUERY> [FILES...]", tagName: "span"}/></Container>
          <Container id="tm_flags_table_cell" style="height:auto; width:100%">
            <FlexContainer id="tm_flags_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="tm_f1_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f1_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f1_key" props={content: "--last <dur>", tagName: "span"}/></Container>
                  <Container id="tm_f1_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f1_desc" props={content: "时间窗过滤：1h / 30m / 7d（相对最后一条日志）", tagName: "span"}/></Container>
                  <Container id="tm_f1_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f1_def" props={content: "[default: 1h]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f2_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f2_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f2_key" props={content: "--format <fmt>", tagName: "span"}/></Container>
                  <Container id="tm_f2_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f2_desc" props={content: "解析器：nginx / jsonl / syslog / 自定义正则", tagName: "span"}/></Container>
                  <Container id="tm_f2_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f2_def" props={content: "[default: auto]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f3_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f3_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f3_key" props={content: "--out <fmt>", tagName: "span"}/></Container>
                  <Container id="tm_f3_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f3_desc" props={content: "输出：table / csv / json / parquet（管道友好）", tagName: "span"}/></Container>
                  <Container id="tm_f3_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f3_def" props={content: "[default: table]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f4_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f4_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f4_key" props={content: "--mem <limit>", tagName: "span"}/></Container>
                  <Container id="tm_f4_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f4_desc" props={content: "内存上限，超限自动切分片扫描（恒定占用）", tagName: "span"}/></Container>
                  <Container id="tm_f4_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f4_def" props={content: "[default: 256MB]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f5_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f5_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f5_key" props={content: "--watch [cmd]", tagName: "span"}/></Container>
                  <Container id="tm_f5_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f5_desc" props={content: "持续模式：条件命中执行命令（{row} 注入当前行）", tagName: "span"}/></Container>
                  <Container id="tm_f5_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f5_def" props={content: "[default: off]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. 基准对照 ─── -->
      <Container id="tm_bench_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_bench_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 40px 88px; gap:48px; align-items:flex-start">
          <Container id="tm_bench_copy_cell" style="height:auto; width:360px; flex-shrink:0">
            <FlexContainer id="tm_bench_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="tm_bench_head_cell" style="height:auto; width:auto"><Text id="tm_bench_head" props={content: "## BENCH — 1.2GB nginx 日志 · M2 MacBook Air", tagName: "span"}/></Container>
              <Container id="tm_bench_desc_cell" style="height:auto; width:100%"><Text id="tm_bench_desc" props={content: "对照组：grep + awk + sort 组合拳（同一台机器，冷缓存）。hex 首次扫描即建索引，重复查询不再全量读盘。", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="tm_bench_note_cell" style="height:auto; width:auto"><Text id="tm_bench_note" props={content: "基准脚本公开在仓库 bench/ 目录", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tm_bench_table_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="tm_bench_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="tm_b0_cell" style="height:auto; width:100%; padding:12px 16px">
                <FlexContainer id="tm_b0_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b0_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b0_task" props={content: "任务", tagName: "span"}/></Container>
                  <Container id="tm_b0_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b0_grep" props={content: "grep 组合", tagName: "span"}/></Container>
                  <Container id="tm_b0_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b0_hex" props={content: "hex", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b1_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b1_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b1_task" props={content: "统计状态码分布", tagName: "span"}/></Container>
                  <Container id="tm_b1_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b1_grep" props={content: "38.4s", tagName: "span"}/></Container>
                  <Container id="tm_b1_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b1_hex" props={content: "0.82s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b2_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b2_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b2_task" props={content: "TOP 20 IP（含地区）", tagName: "span"}/></Container>
                  <Container id="tm_b2_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b2_grep" props={content: "52.1s", tagName: "span"}/></Container>
                  <Container id="tm_b2_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b2_hex" props={content: "0.94s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b3_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b3_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b3_task" props={content: "P99 延迟时序（10s 桶）", tagName: "span"}/></Container>
                  <Container id="tm_b3_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b3_grep" props={content: "需要二次开发", tagName: "span"}/></Container>
                  <Container id="tm_b3_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b3_hex" props={content: "1.31s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b4_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b4_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b4_task" props={content: "重复查询（索引命中）", tagName: "span"}/></Container>
                  <Container id="tm_b4_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b4_grep" props={content: "38.4s（每次全扫）", tagName: "span"}/></Container>
                  <Container id="tm_b4_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b4_hex" props={content: "0.19s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. 快速开始 ─── -->
      <Container id="tm_quick_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_quick_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 96px; gap:26px">
          <Container id="tm_quick_head_cell" style="height:auto; width:auto"><Text id="tm_quick_head" props={content: "## QUICKSTART", tagName: "span"}/></Container>
          <Container id="tm_quick_steps_cell" style="height:auto; width:100%; max-width:860px">
            <FlexContainer id="tm_quick_steps_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:stretch">
              <Container id="tm_q1_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q1_n_cell" style="height:auto; width:auto"><Text id="tm_q1_n" props={content: "1", tagName: "span"}/></Container>
                  <Container id="tm_q1_cmd_cell" style="height:auto; width:auto"><Text id="tm_q1_cmd" props={content: "brew install hex", tagName: "span"}/></Container>
                  <Container id="tm_q1_note_cell" style="height:auto; width:auto"><Text id="tm_q1_note" props={content: "# 或 cargo install hex-cli", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q2_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q2_n_cell" style="height:auto; width:auto"><Text id="tm_q2_n" props={content: "2", tagName: "span"}/></Container>
                  <Container id="tm_q2_cmd_cell" style="height:auto; width:auto"><Text id="tm_q2_cmd" props={content: "hex --from /var/log/nginx 'status >= 500'", tagName: "span"}/></Container>
                  <Container id="tm_q2_note_cell" style="height:auto; width:auto"><Text id="tm_q2_note" props={content: "# 先看看今天出了什么事", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q3_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q3_n_cell" style="height:auto; width:auto"><Text id="tm_q3_n" props={content: "3", tagName: "span"}/></Container>
                  <Container id="tm_q3_cmd_cell" style="height:auto; width:auto"><Text id="tm_q3_cmd" props={content: "hex --index 'status'", tagName: "span"}/></Container>
                  <Container id="tm_q3_note_cell" style="height:auto; width:auto"><Text id="tm_q3_note" props={content: "# 常用字段建索引（落盘 .hex/）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q4_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q4_n_cell" style="height:auto; width:auto"><Text id="tm_q4_n" props={content: "4", tagName: "span"}/></Container>
                  <Container id="tm_q4_cmd_cell" style="height:auto; width:auto"><Text id="tm_q4_cmd" props={content: "hex --watch 'status >= 500' --out json | your-alert.sh", tagName: "span"}/></Container>
                  <Container id="tm_q4_note_cell" style="height:auto; width:auto"><Text id="tm_q4_note" props={content: "# 接进你的告警管线", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. 页脚 ─── -->
      <Container id="tm_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="tm_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:20px 40px 26px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="tm_footer_left_cell" style="height:auto; width:auto"><Text id="tm_footer_left" props={content: "© 2026 hex contributors · MIT · 工具与基准均为虚构演示", tagName: "span"}/></Container>
          <Container id="tm_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="tm_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="tm_footer_f1_cell" style="height:auto; width:auto"><Text id="tm_footer_f1" props={content: "GitHub", tagName: "span"}/></Container>
              <Container id="tm_footer_f2_cell" style="height:auto; width:auto"><Text id="tm_footer_f2" props={content: "CHANGELOG", tagName: "span"}/></Container>
              <Container id="tm_footer_f3_cell" style="height:auto; width:auto"><Text id="tm_footer_f3" props={content: "cd ..", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # 页脚回顶（nav.scroll 能力：回到当前滚动容器顶部）
      @tm_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── 页面基调（终端黑） ──
      @tm_root = { background: #0A0C0A; }

      # ── 顶栏 ──
      @tm_nav_region = { background: rgba(10, 12, 10, 0.92); backdrop-filter: blur(8px); border-bottom: 1px solid #1C241C; }
      @tm_nav_prompt = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_nav_word = { color: #D1FAE5; font-size: 16px; font-weight: 800; letter-spacing: 1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { text-shadow: 0 0 14px rgba(52, 211, 153, 0.5); } }
      @tm_nav_menu = {
        :scope { --anchor-item-color: rgba(209, 250, 229, 0.6); --anchor-item-font-size: 13px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 10px; --anchor-item-radius: 4px; --anchor-item-active-color: #0A0C0A; --anchor-item-active-bg: #34D399; --anchor-gap: 6px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.6px; transition: background 0.2s ease, color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(52, 211, 153, 0.14); color: #D1FAE5; }
      }
      @tm_nav_cta = { border: 1px solid rgba(52, 211, 153, 0.5); border-radius: 4px; transition: background 0.25s ease; :scope:hover { background: rgba(52, 211, 153, 0.14); } }
      @tm_nav_cta_txt = { color: #34D399; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 首屏 ──
      @tm_hero_prompt = { color: #34D399; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_cmd = { color: #D1FAE5; font-size: 15px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_cursor = { background: #34D399; }
      @tm_hero_title = { color: #ECFDF5; font-size: 64px; font-weight: 900; letter-spacing: -2.4px; }
      @tm_hero_sub = { color: rgba(209, 250, 229, 0.62); font-size: 15.5px; line-height: 2.0; }
      @tm_hero_m1 = { color: #34D399; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_m2 = { color: rgba(209, 250, 229, 0.5); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_m3 = { color: #FBBF24; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 终端窗口 ──
      @tm_term_frame = { background: #0D110D; border: 1px solid #22301F; border-radius: 10px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6); }
      @tm_term_bar_cell = { background: #131A13; border-bottom: 1px solid #22301F; }
      @tm_term_dot1 = { background: #F87171; border-radius: 999px; }
      @tm_term_dot2 = { background: #FBBF24; border-radius: 999px; }
      @tm_term_dot3 = { background: #34D399; border-radius: 999px; }
      @tm_term_bar_title = { color: rgba(209, 250, 229, 0.45); font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_o1 = { color: #7DD3FC; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o2 = { color: #3E4C3E; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o3 = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o4 = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o5 = { color: #FBBF24; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o6 = { color: #F87171; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { white-space: pre; } }
      @tm_o7 = { color: rgba(209, 250, 229, 0.4); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 能力栏 ──
      @tm_usage_head = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_u1_col = { background: #0D110D; border: 1px solid #22301F; border-radius: 10px; transition: border-color 0.3s ease; :scope:hover { border-color: rgba(52, 211, 153, 0.55); } }
      @tm_u2_col = { background: #0D110D; border: 1px solid #22301F; border-radius: 10px; transition: border-color 0.3s ease; :scope:hover { border-color: rgba(52, 211, 153, 0.55); } }
      @tm_u3_col = { background: #0D110D; border: 1px solid #22301F; border-radius: 10px; transition: border-color 0.3s ease; :scope:hover { border-color: rgba(52, 211, 153, 0.55); } }
      @tm_u1_flag = { color: #FBBF24; font-size: 15px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_u2_flag = { color: #FBBF24; font-size: 15px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_u3_flag = { color: #FBBF24; font-size: 15px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_u1_name = { color: #ECFDF5; font-size: 17px; font-weight: 700; }
      @tm_u2_name = { color: #ECFDF5; font-size: 17px; font-weight: 700; }
      @tm_u3_name = { color: #ECFDF5; font-size: 17px; font-weight: 700; }
      @tm_u1_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.9; }
      @tm_u2_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.9; }
      @tm_u3_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.9; }

      # ── 参数表 ──
      @tm_flags_head = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f1_cell = { border-top: 1px solid #1C241C; }
      @tm_f2_cell = { border-top: 1px solid #1C241C; }
      @tm_f3_cell = { border-top: 1px solid #1C241C; }
      @tm_f4_cell = { border-top: 1px solid #1C241C; }
      @tm_f5_cell = { border-top: 1px solid #1C241C; border-bottom: 1px solid #1C241C; }
      @tm_f1_key = { color: #7DD3FC; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f2_key = { color: #7DD3FC; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f3_key = { color: #7DD3FC; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f4_key = { color: #7DD3FC; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f5_key = { color: #7DD3FC; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f1_desc = { color: rgba(209, 250, 229, 0.62); font-size: 13px; }
      @tm_f2_desc = { color: rgba(209, 250, 229, 0.62); font-size: 13px; }
      @tm_f3_desc = { color: rgba(209, 250, 229, 0.62); font-size: 13px; }
      @tm_f4_desc = { color: rgba(209, 250, 229, 0.62); font-size: 13px; }
      @tm_f5_desc = { color: rgba(209, 250, 229, 0.62); font-size: 13px; }
      @tm_f1_def = { color: rgba(209, 250, 229, 0.35); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f2_def = { color: rgba(209, 250, 229, 0.35); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f3_def = { color: rgba(209, 250, 229, 0.35); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f4_def = { color: rgba(209, 250, 229, 0.35); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_f5_def = { color: rgba(209, 250, 229, 0.35); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 基准表 ──
      @tm_bench_head = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_bench_desc = { color: rgba(209, 250, 229, 0.6); font-size: 13.5px; line-height: 2.0; }
      @tm_bench_note = { color: rgba(209, 250, 229, 0.35); font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b0_cell = { border-bottom: 1px solid #22301F; }
      @tm_b1_cell = { border-bottom: 1px solid #1C241C; }
      @tm_b2_cell = { border-bottom: 1px solid #1C241C; }
      @tm_b3_cell = { border-bottom: 1px solid #1C241C; }
      @tm_b4_cell = { border-bottom: 1px solid #22301F; }
      @tm_b0_task = { color: rgba(209, 250, 229, 0.45); font-size: 12px; font-weight: 700; letter-spacing: 1.4px; }
      @tm_b0_grep = { color: rgba(209, 250, 229, 0.45); font-size: 12px; font-weight: 700; letter-spacing: 1.4px; }
      @tm_b0_hex = { color: #34D399; font-size: 12px; font-weight: 700; letter-spacing: 1.4px; }
      @tm_b1_task = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b2_task = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b3_task = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b4_task = { color: #D1FAE5; font-size: 13.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b1_grep = { color: #64748B; font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b2_grep = { color: #64748B; font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b3_grep = { color: #64748B; font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b4_grep = { color: #64748B; font-size: 13px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b1_hex = { color: #34D399; font-size: 13px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b2_hex = { color: #34D399; font-size: 13px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b3_hex = { color: #34D399; font-size: 13px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_b4_hex = { color: #FBBF24; font-size: 13px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 快速开始 ──
      @tm_quick_head = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q1_cell = { background: #0D110D; border: 1px solid #1C241C; border-radius: 8px; }
      @tm_q2_cell = { background: #0D110D; border: 1px solid #1C241C; border-radius: 8px; }
      @tm_q3_cell = { background: #0D110D; border: 1px solid #1C241C; border-radius: 8px; }
      @tm_q4_cell = { background: #0D110D; border: 1px solid #1C241C; border-radius: 8px; }
      @tm_q1_n = { color: #0A0C0A; background: #34D399; font-size: 12.5px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; padding: 2px 9px; border-radius: 4px; }
      @tm_q2_n = { color: #0A0C0A; background: #34D399; font-size: 12.5px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; padding: 2px 9px; border-radius: 4px; }
      @tm_q3_n = { color: #0A0C0A; background: #34D399; font-size: 12.5px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; padding: 2px 9px; border-radius: 4px; }
      @tm_q4_n = { color: #0A0C0A; background: #34D399; font-size: 12.5px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; padding: 2px 9px; border-radius: 4px; }
      @tm_q1_cmd = { color: #D1FAE5; font-size: 13.5px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q2_cmd = { color: #D1FAE5; font-size: 13.5px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q3_cmd = { color: #D1FAE5; font-size: 13.5px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q4_cmd = { color: #D1FAE5; font-size: 13.5px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q1_note = { color: rgba(209, 250, 229, 0.38); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q2_note = { color: rgba(209, 250, 229, 0.38); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q3_note = { color: rgba(209, 250, 229, 0.38); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_q4_note = { color: rgba(209, 250, 229, 0.38); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── 页脚 ──
      @tm_footer_row = { border-top: 1px solid #1C241C; }
      @tm_footer_left = { color: rgba(209, 250, 229, 0.3); font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_footer_f1 = { color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
      @tm_footer_f2 = { color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
      @tm_footer_f3 = { cursor: pointer; color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
    </styles>
  </Page>
</App>
```
