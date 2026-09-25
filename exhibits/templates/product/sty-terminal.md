# Terminal — "hex" log-analysis CLI landing page

> Template role (product / app tab · SaaS tools · style series): terminal / dev-tool — a pure black
> ground with a monospaced face and a fluorescent green / amber / cyan terminal palette, a prompt
> line (`$`), a blinking cursor, ASCII section rules, a man-page flag table and a copy-paste install
> block. **Developer register first**: the copy is written in command-line voice, and the page is
> organised as usage → flags → example output.
> Scenario: a landing page for a fictional log-analysis CLI: a terminal-window hero (install command
> plus real run output); a three-column capability row (pipe / index / watch) written as man-page
> flags; a benchmark table (hex vs classic grep); a four-step quickstart in command-line voice;
> a footer. Zero API, static data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="hex — fast log-analysis CLI">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="tm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Top bar ─── -->
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
              <Container id="tm_nav_i1" props={itemLabel: "Usage", itemTarget: "tm_usage_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i2" props={itemLabel: "Flags", itemTarget: "tm_flags_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i3" props={itemLabel: "Bench", itemTarget: "tm_bench_region"} style="height:auto; width:auto"/>
              <Container id="tm_nav_i4" props={itemLabel: "Install", itemTarget: "tm_quick_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="tm_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="tm_nav_cta" style="height:auto; width:auto; padding:10px 22px">
              <Text id="tm_nav_cta_txt" props={content: "$ brew install hex", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (terminal window) ─── -->
      <Container id="tm_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="tm_hero_stack" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 120, duration: "slow"} style="height:auto; width:100%; padding:64px 40px 76px; gap:30px; align-items:flex-start">
          <Container id="tm_hero_line_cell" style="height:auto; width:auto">
            <FlexContainer id="tm_hero_line_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="tm_hero_prompt_cell" style="height:auto; width:auto"><Text id="tm_hero_prompt" props={content: "$", tagName: "span"}/></Container>
              <Container id="tm_hero_cmd_cell" style="height:auto; width:auto"><Text id="tm_hero_cmd" props={content: "hex 'SELECT status, count(*) FROM nginx.log GROUP BY status' --last 1h", tagName: "span"}/></Container>
              <Container id="tm_hero_cursor_cell" style="height:20px; width:10px; flex-shrink:0"><Container id="tm_hero_cursor" style="height:20px; width:10px"/></Container>
            </FlexContainer>
          </Container>
          <Container id="tm_hero_title_cell" style="height:auto; width:auto"><Text id="tm_hero_title" props={content: "Query your logs with SQL", tagName: "h1"}/></Container>
          <Container id="tm_hero_sub_cell" style="height:auto; width:100%; max-width:720px"><Text id="tm_hero_sub" props={content: "hex treats a 10GB log file as a database: no upload, no schema, no import. Point one SQL query at the local file — indexes build on demand, memory stays flat.", tagName: "p"} style="height:auto; width:100%"/></Container>
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
              <Container id="tm_hero_m1_cell" style="height:auto; width:auto"><Text id="tm_hero_m1" props={content: "MIT licensed", tagName: "span"}/></Container>
              <Container id="tm_hero_m2_cell" style="height:auto; width:auto"><Text id="tm_hero_m2" props={content: "macOS / Linux / Windows", tagName: "span"}/></Container>
              <Container id="tm_hero_m3_cell" style="height:auto; width:auto"><Text id="tm_hero_m3" props={content: "12.4k stars", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Capability row (man-page style) ─── -->
      <Container id="tm_usage_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_usage_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 88px; gap:34px">
          <Container id="tm_usage_head_cell" style="height:auto; width:auto"><Text id="tm_usage_head" props={content: "## NAME — hex · log analyzer (local-first, zero upload)", tagName: "span"}/></Container>
          <Container id="tm_usage_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="tm_usage_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:22px; align-items:stretch">
              <Container id="tm_u1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u1_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u1_flag_cell" style="height:auto; width:auto"><Text id="tm_u1_flag" props={content: "--pipe", tagName: "h4"}/></Container>
                  <Container id="tm_u1_name_cell" style="height:auto; width:auto"><Text id="tm_u1_name" props={content: "Pipe in anything", tagName: "span"}/></Container>
                  <Container id="tm_u1_desc_cell" style="height:auto; width:100%"><Text id="tm_u1_desc" props={content: "cat app.log | hex '...' reads stdin directly; globs and gzipped files work too, decompression overlapping the scan.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_u2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u2_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u2_flag_cell" style="height:auto; width:auto"><Text id="tm_u2_flag" props={content: "--index", tagName: "h4"}/></Container>
                  <Container id="tm_u2_name_cell" style="height:auto; width:auto"><Text id="tm_u2_name" props={content: "Index on demand", tagName: "span"}/></Container>
                  <Container id="tm_u2_desc_cell" style="height:auto; width:100%"><Text id="tm_u2_desc" props={content: "The first query builds a columnar index under .hex/; queries on the same field then run 40× faster. Delete it any time.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_u3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="tm_u3_col" props={direction: "column"} style="height:auto; width:100%; gap:14px; align-items:flex-start; padding:26px 24px">
                  <Container id="tm_u3_flag_cell" style="height:auto; width:auto"><Text id="tm_u3_flag" props={content: "--watch", tagName: "h4"}/></Container>
                  <Container id="tm_u3_name_cell" style="height:auto; width:auto"><Text id="tm_u3_name" props={content: "Live alerts", tagName: "span"}/></Container>
                  <Container id="tm_u3_desc_cell" style="height:auto; width:100%"><Text id="tm_u3_desc" props={content: "tail -f behaviour plus a SQL predicate: on a match run a command — page someone, fire a script, push to Kafka.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Flag table ─── -->
      <Container id="tm_flags_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_flags_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 88px; gap:28px">
          <Container id="tm_flags_head_cell" style="height:auto; width:auto"><Text id="tm_flags_head" props={content: "## SYNOPSIS — hex [OPTIONS] <QUERY> [FILES...]", tagName: "span"}/></Container>
          <Container id="tm_flags_table_cell" style="height:auto; width:100%">
            <FlexContainer id="tm_flags_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="tm_f1_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f1_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f1_key" props={content: "--last <dur>", tagName: "span"}/></Container>
                  <Container id="tm_f1_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f1_desc" props={content: "Time window: 1h / 30m / 7d, measured back from the last entry", tagName: "span"}/></Container>
                  <Container id="tm_f1_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f1_def" props={content: "[default: 1h]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f2_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f2_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f2_key" props={content: "--format <fmt>", tagName: "span"}/></Container>
                  <Container id="tm_f2_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f2_desc" props={content: "Parser: nginx / jsonl / syslog / your own regex", tagName: "span"}/></Container>
                  <Container id="tm_f2_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f2_def" props={content: "[default: auto]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f3_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f3_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f3_key" props={content: "--out <fmt>", tagName: "span"}/></Container>
                  <Container id="tm_f3_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f3_desc" props={content: "Output: table / csv / json / parquet, all pipe-friendly", tagName: "span"}/></Container>
                  <Container id="tm_f3_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f3_def" props={content: "[default: table]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f4_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f4_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f4_key" props={content: "--mem <limit>", tagName: "span"}/></Container>
                  <Container id="tm_f4_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f4_desc" props={content: "Memory ceiling; past it hex falls back to chunked scans (flat footprint)", tagName: "span"}/></Container>
                  <Container id="tm_f4_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f4_def" props={content: "[default: 256MB]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_f5_cell" style="height:auto; width:100%; padding:15px 18px">
                <FlexContainer id="tm_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:28px">
                  <Container id="tm_f5_key_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f5_key" props={content: "--watch [cmd]", tagName: "span"}/></Container>
                  <Container id="tm_f5_desc_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_f5_desc" props={content: "Streaming mode: run a command on a match ({row} injects the current row)", tagName: "span"}/></Container>
                  <Container id="tm_f5_def_cell" style="height:auto; width:220px; flex-shrink:0"><Text id="tm_f5_def" props={content: "[default: off]", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Benchmark ─── -->
      <Container id="tm_bench_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_bench_row" props={direction: "row"} style="height:auto; width:100%; padding:0px 40px 88px; gap:48px; align-items:flex-start">
          <Container id="tm_bench_copy_cell" style="height:auto; width:360px; flex-shrink:0">
            <FlexContainer id="tm_bench_copy_col" props={direction: "column"} style="height:auto; width:100%; gap:20px; align-items:flex-start">
              <Container id="tm_bench_head_cell" style="height:auto; width:auto"><Text id="tm_bench_head" props={content: "## BENCH — 1.2GB nginx log · M2 MacBook Air", tagName: "span"}/></Container>
              <Container id="tm_bench_desc_cell" style="height:auto; width:100%"><Text id="tm_bench_desc" props={content: "Baseline: the grep + awk + sort combo on the same machine, cold cache. hex builds its index on the first scan, so repeat queries never re-read the dataset.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="tm_bench_note_cell" style="height:auto; width:auto"><Text id="tm_bench_note" props={content: "Benchmark scripts live in the repo under bench/", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="tm_bench_table_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="tm_bench_table_col" props={direction: "column"} style="height:auto; width:100%; gap:0px">
              <Container id="tm_b0_cell" style="height:auto; width:100%; padding:12px 16px">
                <FlexContainer id="tm_b0_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b0_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b0_task" props={content: "TASK", tagName: "span"}/></Container>
                  <Container id="tm_b0_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b0_grep" props={content: "grep combo", tagName: "span"}/></Container>
                  <Container id="tm_b0_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b0_hex" props={content: "hex", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b1_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b1_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b1_task" props={content: "Status-code distribution", tagName: "span"}/></Container>
                  <Container id="tm_b1_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b1_grep" props={content: "38.4s", tagName: "span"}/></Container>
                  <Container id="tm_b1_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b1_hex" props={content: "0.82s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b2_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b2_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b2_task" props={content: "Top 20 IPs, with geo", tagName: "span"}/></Container>
                  <Container id="tm_b2_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b2_grep" props={content: "52.1s", tagName: "span"}/></Container>
                  <Container id="tm_b2_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b2_hex" props={content: "0.94s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b3_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b3_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b3_task" props={content: "P99 latency over time (10s buckets)", tagName: "span"}/></Container>
                  <Container id="tm_b3_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b3_grep" props={content: "custom script", tagName: "span"}/></Container>
                  <Container id="tm_b3_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b3_hex" props={content: "1.31s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_b4_cell" style="height:auto; width:100%; padding:14px 16px">
                <FlexContainer id="tm_b4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:20px">
                  <Container id="tm_b4_task_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%"><Text id="tm_b4_task" props={content: "Repeat query, index hit", tagName: "span"}/></Container>
                  <Container id="tm_b4_grep_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b4_grep" props={content: "38.4s every time", tagName: "span"}/></Container>
                  <Container id="tm_b4_hex_cell" style="height:auto; width:150px; flex-shrink:0"><Text id="tm_b4_hex" props={content: "0.19s", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Quickstart ─── -->
      <Container id="tm_quick_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:80px">
        <FlexContainer id="tm_quick_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 40px 96px; gap:26px">
          <Container id="tm_quick_head_cell" style="height:auto; width:auto"><Text id="tm_quick_head" props={content: "## QUICKSTART", tagName: "span"}/></Container>
          <Container id="tm_quick_steps_cell" style="height:auto; width:100%; max-width:860px">
            <FlexContainer id="tm_quick_steps_col" props={direction: "column"} style="height:auto; width:100%; gap:12px; align-items:stretch">
              <Container id="tm_q1_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q1_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q1_n_cell" style="height:auto; width:auto"><Text id="tm_q1_n" props={content: "1", tagName: "span"}/></Container>
                  <Container id="tm_q1_cmd_cell" style="height:auto; width:auto"><Text id="tm_q1_cmd" props={content: "brew install hex", tagName: "span"}/></Container>
                  <Container id="tm_q1_note_cell" style="height:auto; width:auto"><Text id="tm_q1_note" props={content: "# or: cargo install hex-cli", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q2_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q2_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q2_n_cell" style="height:auto; width:auto"><Text id="tm_q2_n" props={content: "2", tagName: "span"}/></Container>
                  <Container id="tm_q2_cmd_cell" style="height:auto; width:auto"><Text id="tm_q2_cmd" props={content: "hex --from /var/log/nginx 'status >= 500'", tagName: "span"}/></Container>
                  <Container id="tm_q2_note_cell" style="height:auto; width:auto"><Text id="tm_q2_note" props={content: "# see what broke today", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q3_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q3_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q3_n_cell" style="height:auto; width:auto"><Text id="tm_q3_n" props={content: "3", tagName: "span"}/></Container>
                  <Container id="tm_q3_cmd_cell" style="height:auto; width:auto"><Text id="tm_q3_cmd" props={content: "hex --index 'status'", tagName: "span"}/></Container>
                  <Container id="tm_q3_note_cell" style="height:auto; width:auto"><Text id="tm_q3_note" props={content: "# index the fields you query most (.hex/)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="tm_q4_cell" style="height:auto; width:100%; padding:16px 20px">
                <FlexContainer id="tm_q4_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:16px">
                  <Container id="tm_q4_n_cell" style="height:auto; width:auto"><Text id="tm_q4_n" props={content: "4", tagName: "span"}/></Container>
                  <Container id="tm_q4_cmd_cell" style="height:auto; width:auto"><Text id="tm_q4_cmd" props={content: "hex --watch 'status >= 500' --out json | your-alert.sh", tagName: "span"}/></Container>
                  <Container id="tm_q4_note_cell" style="height:auto; width:auto"><Text id="tm_q4_note" props={content: "# into your alerting pipeline", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Footer ─── -->
      <Container id="tm_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="tm_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:20px 40px 26px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="tm_footer_left_cell" style="height:auto; width:auto"><Text id="tm_footer_left" props={content: "© 2026 hex contributors · MIT · tool and benchmarks are fictional demos", tagName: "span"}/></Container>
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
      # Footer "cd .." → back to the top of the current scroll container (nav.scroll)
      @tm_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page base (terminal black) ──
      @tm_root = { background: #0A0C0A; }

      # ── Top bar ──
      @tm_nav_region = { background: rgba(10, 12, 10, 0.92); backdrop-filter: blur(8px); border-bottom: 1px solid #1C241C; }
      @tm_nav_prompt = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_nav_word = { color: #D1FAE5; font-size: 16px; font-weight: 800; letter-spacing: 1px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { text-shadow: 0 0 14px rgba(52, 211, 153, 0.5); } }
      @tm_nav_menu = {
        :scope { --anchor-item-color: rgba(209, 250, 229, 0.6); --anchor-item-font-size: 13px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 10px; --anchor-item-radius: 4px; --anchor-item-active-color: #0A0C0A; --anchor-item-active-bg: #34D399; --anchor-gap: 6px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.4px; transition: background 0.2s ease, color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(52, 211, 153, 0.14); color: #D1FAE5; }
      }
      @tm_nav_cta = { border: 1px solid rgba(52, 211, 153, 0.5); border-radius: 4px; transition: background 0.25s ease; :scope:hover { background: rgba(52, 211, 153, 0.14); } }
      @tm_nav_cta_txt = { color: #34D399; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Hero ──
      @tm_hero_prompt = { color: #34D399; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_cmd = { color: #D1FAE5; font-size: 15px; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_cursor = { background: #34D399; }
      # 64px CJK (8 glyphs, ~512px) becomes 52px Latin: "Query your logs with SQL" is 24 glyphs and
      # measures 620px at that size — a single line inside the 1200px measure, with the same optical
      # weight the Chinese lockup had against the terminal window below.
      @tm_hero_title = { color: #ECFDF5; font-size: 52px; font-weight: 900; letter-spacing: -1.6px; }
      @tm_hero_sub = { color: rgba(209, 250, 229, 0.62); font-size: 15.5px; line-height: 1.7; }
      @tm_hero_m1 = { color: #34D399; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_m2 = { color: rgba(209, 250, 229, 0.5); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_hero_m3 = { color: #FBBF24; font-size: 12.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      # ── Terminal window ──
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

      # ── Capability row ──
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
      @tm_u1_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.7; }
      @tm_u2_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.7; }
      @tm_u3_desc = { color: rgba(209, 250, 229, 0.55); font-size: 13px; line-height: 1.7; }

      # ── Flag table ──
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

      # ── Bench table ──
      @tm_bench_head = { color: #34D399; font-size: 13.5px; font-weight: 700; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_bench_desc = { color: rgba(209, 250, 229, 0.6); font-size: 13.5px; line-height: 1.7; }
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

      # ── Quickstart ──
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

      # ── Footer ──
      @tm_footer_row = { border-top: 1px solid #1C241C; }
      @tm_footer_left = { color: rgba(209, 250, 229, 0.3); font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @tm_footer_f1 = { color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
      @tm_footer_f2 = { color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
      @tm_footer_f3 = { cursor: pointer; color: rgba(209, 250, 229, 0.55); font-size: 12.5px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; :scope { transition: color 0.2s ease; } :scope:hover { color: #34D399; } }
    </styles>
  </Page>
</App>
```

## Production notes

**Not a translation — the same terminal window, set for Latin.** Most of this page was already
English (the shell commands, the SQL, the ASCII result set, the `man`-page headings), so the rework
is concentrated in three places: the prose that was Chinese, the flag/benchmark **column budgets**,
and the hero type size.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero title | 64px, tracking −2.4px | **52px, tracking −1.6px** | `用 SQL 查询你的日志` is 8 glyphs (~512px); "Query your logs with SQL" is 24 glyphs and measures 620px at 52px — one line inside the 1200px measure, at the same optical weight against the terminal window |
| Hero sub measure | `max-width: 620px` | **720px** | The Chinese sub was 50 glyphs / 2 lines; the English is ~150 glyphs. 620px forced 3 lines; 720px restores the original 2-line block |
| Body leading | 1.9–2.0 | **1.7** | Latin does not need CJK leading (hero sub, capability descriptions, bench description) |
| Bench "grep" column | `38.4s（每次全扫）` fits 150px | **copy re-cut**: `custom script`, `38.4s every time` | The 150px time column is fixed. Literal renderings ("needs a custom script", "38.4s — full scan every time") measured past 150px and wrapped; both cells are now ≤ 16 monospace glyphs (~125px) |
| Anchor tracking | 0.6px | 0.4px | Wide tracking is a CJK device; at 13px Latin it reads as gaps |
| Capability descriptions | 2 lines each | 3 lines each | Not a style change — the same 13px in the same 335px column; English simply needs more words. All three reflow together, so the card row stays level |

Everything else keeps its Chinese geometry: the 220px flag key/default columns, the 150px benchmark
value columns, the `flex-basis:0; flex-grow:1` capability row and bench table, every padding, radius
and colour, and every monospace line of the terminal body (identical advance width in both scripts,
so the ASCII result set is byte-for-byte the same).

**Measured after the fact** (rendered at 1280px, `getClientRects` on every text node): the hero
title sets on one line at 620px; the hero sub takes two lines with a 715px widest line inside its
720px measure; all five flag rows, all five benchmark rows and all four quickstart rows are
single-line, the tightest being the benchmark note at 340px in a 360px column. Page-level audit:
no `scrollWidth > clientWidth` anywhere, no clipped content, no horizontal document overflow, and
no absolutely-positioned decoration layers on this page to collide with.

**Copy policy** — the developer voice is rewritten, not transliterated: `管道接一切` → *Pipe in
anything*, `按需索引` → *Index on demand*, `实时告警` → *Live alerts*, `统计状态码分布` → *Status-code
distribution*, `重复查询（索引命中）` → *Repeat query, index hit*. The quickstart comments became shell
comments an English-reading developer would actually type (`# 先看看今天出了什么事` → `# see what broke
today`). `MIT 开源` → *MIT licensed*; `工具与基准均为虚构演示` → *tool and benchmarks are fictional
demos*.

**Deliberately kept.** `~/hex`, `$ brew install hex`, the hero's SQL query, the aligned result set
with its `white-space: pre` styling, the `## NAME` / `## SYNOPSIS` / `## BENCH` / `## QUICKSTART`
man-page headings, `--pipe` / `--index` / `--watch` / `--last` / `--format` / `--out` / `--mem`
flag tokens, `[default: …]` brackets, `tail -f`, `kafka`→`Kafka`, `12.4k stars` and `cd ..` — this
page's authenticity is that a shell user recognises all of it.

**No structural changes.** Every node id is unchanged, the single `nav.scroll` back-to-top event on
`tm_footer_f3` is unchanged, and there are no bitmap assets in either edition.
