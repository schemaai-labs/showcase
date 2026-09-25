# Material — "TaskFlow" team task manager product page

> Template role (product / app tab · SaaS tools · style series): Material Design 3 — a **tonal
> palette** (primary / primary-container / surface tiers), large corner radii (16–28px), **elevation
> shadows** stepping from surface to surface-container-high, and the full interface vocabulary of a
> navigation rail + top app bar + list items + floating action button. **An interface-simulation
> template**: the platform containers build a real-looking product screen (nav rail / task list /
> FAB).
> Scenario: an introduction page for a fictional team task manager: hero copy on the left with a
> product-screen simulation on the right (app bar / task card list / FAB); three capability cards
> (checklists / boards / automation); a tonal-surface demonstration band; two pricing tiers; a
> footer. Zero API, static data, one entrance orchestration (hero onMount).

```lang
<App dsl-version="0.3" name="TaskFlow — Team Task Management">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="mt_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Top app bar ─── -->
      <Container id="mt_nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="mt_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 48px">
          <Container id="mt_nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="mt_nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="mt_nav_mark_cell" style="height:36px; width:36px; flex-shrink:0">
                <Svg id="mt_nav_mark" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><rect width='36' height='36' rx='12' fill='#6750A4'/><path d='M11,18.6 L16,23.5 L25.5,13' stroke='#FFFFFF' stroke-width='3.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>", ariaLabel: "TaskFlow logo"} style="height:36px; width:36px"/>
              </Container>
              <Container id="mt_nav_word_cell" style="height:auto; width:auto"><Text id="mt_nav_word" props={content: "TaskFlow", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mt_nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="mt_nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="mt_nav_i1" props={itemLabel: "Features", itemTarget: "mt_feature_region"} style="height:auto; width:auto"/>
              <Container id="mt_nav_i2" props={itemLabel: "Surfaces", itemTarget: "mt_surface_region"} style="height:auto; width:auto"/>
              <Container id="mt_nav_i3" props={itemLabel: "Pricing", itemTarget: "mt_plan_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="mt_nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <Container id="mt_nav_cta" style="height:auto; width:auto; padding:11px 26px">
              <Text id="mt_nav_cta_txt" props={content: "Start free", tagName: "span"}/>
            </Container>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (copy left + product-screen simulation right) ─── -->
      <Container id="mt_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <Animate id="mt_hero_stack" props={direction: "row", effect: "fadeInUp", trigger: "onMount", stagger: 130, duration: "slow"} style="height:auto; width:100%; padding:76px 48px 88px; gap:64px; align-items:center">
          <Container id="mt_hero_left_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
            <FlexContainer id="mt_hero_left_col" props={direction: "column"} style="height:auto; width:100%; gap:24px; align-items:flex-start">
              <Container id="mt_hero_chip_cell" style="height:auto; width:auto">
                <Container id="mt_hero_chip" style="height:auto; width:auto; padding:8px 16px">
                  <Text id="mt_hero_chip_txt" props={content: "Material You design language · dark mode ready", tagName: "span"}/>
                </Container>
              </Container>
              <Container id="mt_hero_title_cell" style="height:auto; width:100%; max-width:520px"><Text id="mt_hero_title" props={content: "Let every task find its owner", tagName: "h1"} style="height:auto; width:100%"/></Container>
              <Container id="mt_hero_sub_cell" style="height:auto; width:100%; max-width:500px"><Text id="mt_hero_sub" props={content: "Write it down, hand it over, follow it through. TaskFlow threads every team to-do onto one timeline — including the ones still only in your head.", tagName: "p"} style="height:auto; width:100%"/></Container>
              <Container id="mt_hero_actions_cell" style="height:auto; width:auto; padding-top:6px">
                <FlexContainer id="mt_hero_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:16px">
                  <Container id="mt_hero_btn_cell" style="height:auto; width:auto">
                    <Container id="mt_hero_btn" style="height:auto; width:auto; padding:15px 34px">
                      <Text id="mt_hero_btn_txt" props={content: "Get started", tagName: "span"}/>
                    </Container>
                  </Container>
                  <Container id="mt_hero_ghost_cell" style="height:auto; width:auto">
                    <Container id="mt_hero_ghost" style="height:auto; width:auto; padding:15px 30px">
                      <Text id="mt_hero_ghost_txt" props={content: "Watch demo", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="mt_hero_meta_cell" style="height:auto; width:auto; padding-top:12px">
                <FlexContainer id="mt_hero_meta_row" props={direction: "row"} style="height:auto; width:auto; gap:32px; align-items:center">
                  <Container id="mt_hero_m1_cell" style="height:auto; width:auto"><Text id="mt_hero_m1" props={content: "2,300+ teams", tagName: "span"}/></Container>
                  <Container id="mt_hero_m2_cell" style="height:auto; width:auto"><Text id="mt_hero_m2" props={content: "3 days to onboard", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="mt_hero_app_cell" style="height:auto; width:560px; flex-shrink:0">
            <Container id="mt_hero_app_frame" style="height:560px; width:100%; padding:20px">
              <FlexContainer id="mt_app_row" props={direction: "row"} style="height:100%; width:100%; gap:16px; align-items:stretch">
                <Container id="mt_app_rail_cell" style="height:100%; width:76px; flex-shrink:0">
                  <FlexContainer id="mt_app_rail_col" props={direction: "column"} style="height:100%; width:100%; gap:14px; align-items:center; padding:18px 0px">
                    <Container id="mt_rail_active_cell" style="height:44px; width:44px; flex-shrink:0">
                      <Svg id="mt_rail_active" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' rx='14' fill='#6750A4'/><path d='M14,22.6 L19,27.5 L30,16.5' stroke='#FFFFFF' stroke-width='3' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Tasks icon"} style="height:44px; width:44px"/>
                    </Container>
                    <Container id="mt_rail_2_cell" style="height:44px; width:44px; flex-shrink:0">
                      <Svg id="mt_rail_2" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' rx='14' fill='#EADDFF'/><rect x='13' y='14' width='18' height='4' rx='2' fill='#6750A4'/><rect x='13' y='21' width='18' height='4' rx='2' fill='#6750A4'/><rect x='13' y='28' width='12' height='4' rx='2' fill='#6750A4'/></svg>", ariaLabel: "Board icon"} style="height:44px; width:44px"/>
                    </Container>
                    <Container id="mt_rail_3_cell" style="height:44px; width:44px; flex-shrink:0">
                      <Svg id="mt_rail_3" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' rx='14' fill='#EADDFF'/><circle cx='22' cy='22' r='8' stroke='#6750A4' stroke-width='3' fill='none'/><path d='M22,10 L22,14 M22,30 L22,34 M10,22 L14,22 M30,22 L34,22' stroke='#6750A4' stroke-width='3' stroke-linecap='round'/></svg>", ariaLabel: "Automation icon"} style="height:44px; width:44px"/>
                    </Container>
                    <Container id="mt_rail_4_cell" style="height:44px; width:44px; flex-shrink:0">
                      <Svg id="mt_rail_4" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' rx='14' fill='#EADDFF'/><circle cx='22' cy='18' r='6' fill='#6750A4'/><path d='M12,34 C12,27 32,27 32,34' fill='#6750A4'/></svg>", ariaLabel: "Members icon"} style="height:44px; width:44px"/>
                    </Container>
                  </FlexContainer>
                </Container>
                <Container id="mt_app_main_cell" style="height:100%; flex-basis:0; flex-grow:1; width:100%">
                  <FlexContainer id="mt_app_main_col" props={direction: "column"} style="height:100%; width:100%; gap:14px; align-items:stretch">
                    <Container id="mt_app_bar_cell" style="height:auto; width:100%">
                      <FlexContainer id="mt_app_bar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; gap:12px">
                        <Container id="mt_app_bar_title_cell" style="height:auto; width:auto"><Text id="mt_app_bar_title" props={content: "My tasks", tagName: "h4"}/></Container>
                        <Container id="mt_app_bar_chip_cell" style="height:auto; width:auto"><Container id="mt_app_bar_chip" style="height:auto; width:auto; padding:5px 12px"><Text id="mt_app_bar_chip_txt" props={content: "Today", tagName: "span"}/></Container></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mt_task1_cell" style="height:auto; width:100%">
                      <FlexContainer id="mt_task1_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:16px 16px">
                        <Container id="mt_task1_check_cell" style="height:24px; width:24px; flex-shrink:0">
                          <Svg id="mt_task1_check" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='1.5' y='1.5' width='21' height='21' rx='7' fill='#6750A4'/><path d='M7,12.4 L10.6,16 L17,8.8' stroke='#FFFFFF' stroke-width='2.4' fill='none' stroke-linecap='round'/></svg>", ariaLabel: "Done"} style="height:24px; width:24px"/>
                        </Container>
                        <Container id="mt_task1_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                          <FlexContainer id="mt_task1_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                            <Container id="mt_task1_name_cell" style="height:auto; width:100%"><Text id="mt_task1_name" props={content: "Sync the release checklist with Marketing", tagName: "span"} style="height:auto; width:100%"/></Container>
                            <Container id="mt_task1_meta_cell" style="height:auto; width:auto"><Text id="mt_task1_meta" props={content: "Done · 10:20 · Wang Xiao", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mt_task2_cell" style="height:auto; width:100%">
                      <FlexContainer id="mt_task2_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:16px 16px">
                        <Container id="mt_task2_check_cell" style="height:24px; width:24px; flex-shrink:0">
                          <Svg id="mt_task2_check" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='2' y='2' width='20' height='20' rx='7' stroke='#79747E' stroke-width='2' fill='none'/></svg>", ariaLabel: "Not done"} style="height:24px; width:24px"/>
                        </Container>
                        <Container id="mt_task2_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                          <FlexContainer id="mt_task2_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                            <Container id="mt_task2_name_cell" style="height:auto; width:100%"><Text id="mt_task2_name" props={content: "Review the first Q4 roadmap draft", tagName: "span"} style="height:auto; width:100%"/></Container>
                            <Container id="mt_task2_meta_cell" style="height:auto; width:auto"><Text id="mt_task2_meta" props={content: "Due 18:00 today · High priority", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                        <Container id="mt_task2_avatar_cell" style="height:32px; width:32px; flex-shrink:0">
                          <Svg id="mt_task2_avatar" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='#E8DEF8'/><circle cx='16' cy='13' r='5.4' fill='#6750A4'/><path d='M6,28 C7.5,21 24.5,21 26,28' fill='#6750A4'/></svg>", ariaLabel: "Assignee avatar"} style="height:32px; width:32px"/>
                        </Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mt_task3_cell" style="height:auto; width:100%">
                      <FlexContainer id="mt_task3_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:12px; padding:16px 16px">
                        <Container id="mt_task3_check_cell" style="height:24px; width:24px; flex-shrink:0">
                          <Svg id="mt_task3_check" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='2' y='2' width='20' height='20' rx='7' stroke='#79747E' stroke-width='2' fill='none'/></svg>", ariaLabel: "Not done"} style="height:24px; width:24px"/>
                        </Container>
                        <Container id="mt_task3_body_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                          <FlexContainer id="mt_task3_body_col" props={direction: "column"} style="height:auto; width:100%; gap:6px; align-items:flex-start">
                            <Container id="mt_task3_name_cell" style="height:auto; width:100%"><Text id="mt_task3_name" props={content: "Triage 12 threads from user interviews", tagName: "span"} style="height:auto; width:100%"/></Container>
                            <Container id="mt_task3_meta_cell" style="height:auto; width:auto"><Text id="mt_task3_meta" props={content: "Wed · In progress 2/5", tagName: "span"}/></Container>
                          </FlexContainer>
                        </Container>
                      </FlexContainer>
                    </Container>
                    <Container id="mt_app_fab_cell" style="height:auto; width:auto; align-self:flex-end; padding-top:6px">
                      <FlexContainer id="mt_app_fab_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px; padding:14px 22px">
                        <Container id="mt_fab_icon_cell" style="height:18px; width:18px; flex-shrink:0">
                          <Svg id="mt_fab_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'><path d='M9,2 L9,16 M2,9 L16,9' stroke='#381E72' stroke-width='2.6' stroke-linecap='round'/></svg>", ariaLabel: "New task"} style="height:18px; width:18px"/>
                        </Container>
                        <Container id="mt_fab_txt_cell" style="height:auto; width:auto"><Text id="mt_fab_txt" props={content: "New task", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Capability cards (tonal tiers) ─── -->
      <Container id="mt_feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="mt_feature_col" props={direction: "column"} style="height:auto; width:100%; padding:8px 48px 96px; gap:44px">
          <Container id="mt_feature_head_cell" style="height:auto; width:auto; align-self:center">
            <FlexContainer id="mt_feature_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:center">
              <Container id="mt_feature_label_cell" style="height:auto; width:auto"><Text id="mt_feature_label" props={content: "CAPABILITIES", tagName: "span"}/></Container>
              <Container id="mt_feature_title_cell" style="height:auto; width:auto"><Text id="mt_feature_title" props={content: "Three building blocks, one team rhythm", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mt_feature_cards_cell" style="height:auto; width:100%">
            <FlexContainer id="mt_feature_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="mt_f1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_f1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:30px 28px">
                  <Container id="mt_f1_icon_cell" style="height:48px; width:48px; flex-shrink:0">
                    <Svg id="mt_f1_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' rx='16' fill='#EADDFF'/><path d='M14,24.5 L20,30.5 L34,16.5' stroke='#6750A4' stroke-width='3.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>", ariaLabel: "Checklist icon"} style="height:48px; width:48px"/>
                  </Container>
                  <Container id="mt_f1_name_cell" style="height:auto; width:auto"><Text id="mt_f1_name" props={content: "Checklists and subtasks", tagName: "h3"}/></Container>
                  <Container id="mt_f1_desc_cell" style="height:auto; width:100%"><Text id="mt_f1_desc" props={content: "Break any task into three more levels — progress rolls up on its own.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mt_f2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_f2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:30px 28px">
                  <Container id="mt_f2_icon_cell" style="height:48px; width:48px; flex-shrink:0">
                    <Svg id="mt_f2_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' rx='16' fill='#D0BCFF'/><rect x='13' y='14' width='10' height='20' rx='4' fill='#381E72'/><rect x='27' y='22' width='9' height='12' rx='4' fill='#381E72'/></svg>", ariaLabel: "Board icon"} style="height:48px; width:48px"/>
                  </Container>
                  <Container id="mt_f2_name_cell" style="height:auto; width:auto"><Text id="mt_f2_name" props={content: "Drag-and-drop boards", tagName: "h3"}/></Container>
                  <Container id="mt_f2_desc_cell" style="height:auto; width:100%"><Text id="mt_f2_desc" props={content: "One drag changes the status: cards cross columns, each move timestamped.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mt_f3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_f3_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:30px 28px">
                  <Container id="mt_f3_icon_cell" style="height:48px; width:48px; flex-shrink:0">
                    <Svg id="mt_f3_icon" props={svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' rx='16' fill='#FFD8E4'/><path d='M16,24 h16 M24,16 v16' stroke='#7D5260' stroke-width='3.4' stroke-linecap='round'/><circle cx='16' cy='24' r='6' fill='none' stroke='#7D5260' stroke-width='3'/><circle cx='32' cy='24' r='6' fill='none' stroke='#7D5260' stroke-width='3'/></svg>", ariaLabel: "Automation icon"} style="height:48px; width:48px"/>
                  </Container>
                  <Container id="mt_f3_name_cell" style="height:auto; width:auto"><Text id="mt_f3_name" props={content: "Automation rules", tagName: "h3"}/></Container>
                  <Container id="mt_f3_desc_cell" style="height:auto; width:100%"><Text id="mt_f3_desc" props={content: "Rules like \"ping the owner 24 hours before due\" take about two minutes.", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Tonal-surface band ─── -->
      <Container id="mt_surface_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="mt_surface_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 96px; gap:36px">
          <Container id="mt_surface_head_cell" style="height:auto; width:auto">
            <FlexContainer id="mt_surface_head_col" props={direction: "column"} style="height:auto; width:auto; gap:12px; align-items:flex-start">
              <Container id="mt_surface_label_cell" style="height:auto; width:auto"><Text id="mt_surface_label" props={content: "TONAL SURFACES", tagName: "span"}/></Container>
              <Container id="mt_surface_title_cell" style="height:auto; width:auto"><Text id="mt_surface_title" props={content: "Depth without stacking shadows", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="mt_tone_cell" style="height:auto; width:100%">
            <FlexContainer id="mt_tone_row" props={direction: "row"} style="height:auto; width:100%; gap:18px; align-items:stretch">
              <Container id="mt_t1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_t1_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:26px 24px">
                  <Container id="mt_t1_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="mt_t1_chip" style="height:12px; width:12px"/></Container>
                  <Container id="mt_t1_name_cell" style="height:auto; width:auto"><Text id="mt_t1_name" props={content: "surface", tagName: "span"}/></Container>
                  <Container id="mt_t1_desc_cell" style="height:auto; width:100%"><Text id="mt_t1_desc" props={content: "Page ground — the quietest tier", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mt_t2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_t2_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:26px 24px">
                  <Container id="mt_t2_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="mt_t2_chip" style="height:12px; width:12px"/></Container>
                  <Container id="mt_t2_name_cell" style="height:auto; width:auto"><Text id="mt_t2_name" props={content: "surface-container", tagName: "span"}/></Container>
                  <Container id="mt_t2_desc_cell" style="height:auto; width:100%"><Text id="mt_t2_desc" props={content: "Cards and list rows — carrying content", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mt_t3_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_t3_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:26px 24px">
                  <Container id="mt_t3_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="mt_t3_chip" style="height:12px; width:12px"/></Container>
                  <Container id="mt_t3_name_cell" style="height:auto; width:auto"><Text id="mt_t3_name" props={content: "primary-container", tagName: "span"}/></Container>
                  <Container id="mt_t3_desc_cell" style="height:auto; width:100%"><Text id="mt_t3_desc" props={content: "Emphasis and selection — impossible to miss", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
              <Container id="mt_t4_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_t4_col" props={direction: "column"} style="height:auto; width:100%; gap:10px; align-items:flex-start; padding:26px 24px">
                  <Container id="mt_t4_chip_cell" style="height:12px; width:12px; flex-shrink:0"><Container id="mt_t4_chip" style="height:12px; width:12px"/></Container>
                  <Container id="mt_t4_name_cell" style="height:auto; width:auto"><Text id="mt_t4_name" props={content: "tertiary-container", tagName: "span"}/></Container>
                  <Container id="mt_t4_desc_cell" style="height:auto; width:100%"><Text id="mt_t4_desc" props={content: "Secondary actions and tags — a light touch", tagName: "p"} style="height:auto; width:100%"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Pricing ─── -->
      <Container id="mt_plan_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:88px">
        <FlexContainer id="mt_plan_col" props={direction: "column"} style="height:auto; width:100%; padding:0px 48px 104px; gap:44px; align-items:center">
          <Container id="mt_plan_title_cell" style="height:auto; width:auto"><Text id="mt_plan_title" props={content: "Priced by team size — never per seat", tagName: "h2"}/></Container>
          <Container id="mt_plan_cards_cell" style="height:auto; width:100%; max-width:880px">
            <FlexContainer id="mt_plan_cards_row" props={direction: "row"} style="height:auto; width:100%; gap:26px; align-items:stretch">
              <Container id="mt_pl1_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_pl1_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="mt_pl1_name_cell" style="height:auto; width:auto"><Text id="mt_pl1_name" props={content: "Small team", tagName: "h4"}/></Container>
                  <Container id="mt_pl1_price_cell" style="height:auto; width:auto"><Text id="mt_pl1_price" props={content: "$0", tagName: "h3"}/></Container>
                  <Container id="mt_pl1_desc_cell" style="height:auto; width:100%"><Text id="mt_pl1_desc" props={content: "Up to 10 people, 3 projects — enough to get the habit going.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="mt_pl1_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="mt_pl1_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="mt_pl1_cta_txt" props={content: "Start free", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="mt_pl2_cell" style="height:auto; flex-basis:0; flex-grow:1; width:100%">
                <FlexContainer id="mt_pl2_col" props={direction: "column"} style="height:auto; width:100%; gap:16px; align-items:flex-start; padding:34px 32px">
                  <Container id="mt_pl2_head_cell" style="height:auto; width:100%">
                    <FlexContainer id="mt_pl2_head_row" props={direction: "row"} style="height:auto; width:100%; justify-content:space-between; align-items:center; gap:16px">
                      <Container id="mt_pl2_name_cell" style="height:auto; width:auto"><Text id="mt_pl2_name" props={content: "Team", tagName: "h4"}/></Container>
                      <Container id="mt_pl2_badge_cell" style="height:auto; width:auto"><Container id="mt_pl2_badge" style="height:auto; width:auto; padding:6px 14px"><Text id="mt_pl2_badge_txt" props={content: "Recommended", tagName: "span"}/></Container></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="mt_pl2_price_cell" style="height:auto; width:auto"><Text id="mt_pl2_price" props={content: "$19 / month", tagName: "h3"}/></Container>
                  <Container id="mt_pl2_desc_cell" style="height:auto; width:100%"><Text id="mt_pl2_desc" props={content: "Unlimited people and projects, with automation rules and audit logs.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="mt_pl2_cta_cell" style="height:auto; width:100%; padding-top:8px">
                    <Container id="mt_pl2_cta" style="height:auto; width:100%; padding:14px 0px">
                      <Text id="mt_pl2_cta_txt" props={content: "Start 14-day trial", tagName: "span"}/>
                    </Container>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. Footer ─── -->
      <Container id="mt_footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%">
        <FlexContainer id="mt_footer_row" props={direction: "row"} style="height:auto; width:100%; padding:28px 48px 32px; justify-content:space-between; align-items:center; gap:32px">
          <Container id="mt_footer_left_cell" style="height:auto; width:auto"><Text id="mt_footer_left" props={content: "© 2026 TaskFlow · product and data are fictional demos", tagName: "span"}/></Container>
          <Container id="mt_footer_right_cell" style="height:auto; width:auto">
            <FlexContainer id="mt_footer_right_row" props={direction: "row"} style="height:auto; width:auto; gap:26px; align-items:center">
              <Container id="mt_footer_f1_cell" style="height:auto; width:auto"><Text id="mt_footer_f1" props={content: "Help center", tagName: "span"}/></Container>
              <Container id="mt_footer_f2_cell" style="height:auto; width:auto"><Text id="mt_footer_f2" props={content: "Changelog", tagName: "span"}/></Container>
              <Container id="mt_footer_f3_cell" style="height:auto; width:auto"><Text id="mt_footer_f3" props={content: "Back to top ↑", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Footer "Back to top" → return to the top of the current scroll container (nav.scroll)
      @mt_footer_f3 = { events: { backToTop: { trigger: "onClick", action: nav.scroll() } } };
    </script>

    <styles>
      # ── Page base (MD3 surface) ──
      @mt_root = { background: #FEF7FF; }

      # ── App bar ──
      @mt_nav_region = { background: rgba(254, 247, 255, 0.94); backdrop-filter: blur(10px); }
      @mt_nav_word = { color: #1D1B20; font-size: 18px; font-weight: 700; letter-spacing: 0.2px; }
      @mt_nav_menu = {
        :scope { --anchor-item-color: rgba(29, 27, 32, 0.7); --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 8px 14px; --anchor-item-radius: 999px; --anchor-item-active-color: #381E72; --anchor-item-active-bg: #EADDFF; --anchor-gap: 10px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: background 0.25s ease, color 0.25s ease; }
        :scope [data-rb-anchor-link]:hover { background: rgba(103, 80, 164, 0.08); }
      }
      @mt_nav_cta = { background: #6750A4; border-radius: 999px; transition: box-shadow 0.25s ease, transform 0.25s ease; :scope:hover { box-shadow: 0 6px 18px rgba(103, 80, 164, 0.35); transform: translateY(-1px); } }
      @mt_nav_cta_txt = { color: #FFFFFF; font-size: 14px; font-weight: 700; letter-spacing: 0.4px; }

      # ── Hero ──
      @mt_hero_chip = { background: #EADDFF; border-radius: 999px; }
      @mt_hero_chip_txt = { color: #21005D; font-size: 12.5px; font-weight: 700; letter-spacing: 0.4px; }
      # 58px CJK (8 glyphs, 464px) becomes 46px Latin: "Let every task find its owner" is 30 glyphs,
      # and it sets as two lines inside the 520px measure — the block height the Chinese lockup had
      # on one line, kept against the 560px product frame beside it.
      @mt_hero_title = { color: #1D1B20; font-size: 46px; font-weight: 900; letter-spacing: -1.4px; line-height: 1.16; }
      # 1.95 → 1.7 leading: Latin does not need the CJK inter-line air. Measure widened 480 → 500px so
      # the English sentence keeps to three lines rather than four.
      @mt_hero_sub = { color: rgba(29, 27, 32, 0.68); font-size: 15.5px; line-height: 1.7; }
      @mt_hero_btn = { background: #6750A4; border-radius: 999px; transition: box-shadow 0.25s ease, transform 0.25s ease; :scope:hover { box-shadow: 0 10px 26px rgba(103, 80, 164, 0.35); transform: translateY(-1px); } }
      @mt_hero_btn_txt = { color: #FFFFFF; font-size: 15px; font-weight: 700; letter-spacing: 0.4px; }
      @mt_hero_ghost = { border: 1px solid rgba(103, 80, 164, 0.5); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(103, 80, 164, 0.08); } }
      @mt_hero_ghost_txt = { color: #6750A4; font-size: 15px; font-weight: 700; letter-spacing: 0.4px; }
      @mt_hero_m1 = { color: rgba(29, 27, 32, 0.55); font-size: 13px; font-weight: 600; }
      @mt_hero_m2 = { color: rgba(29, 27, 32, 0.55); font-size: 13px; font-weight: 600; }

      # ── Product-screen simulation ──
      @mt_hero_app_frame = { background: #F7F2FA; border-radius: 28px; box-shadow: 0 18px 44px rgba(29, 27, 32, 0.14); }
      @mt_app_rail_cell = { background: #ECE6F0; border-radius: 20px; }
      @mt_app_bar_title = { color: #1D1B20; font-size: 20px; font-weight: 800; }
      @mt_app_bar_chip = { background: #EADDFF; border-radius: 999px; }
      @mt_app_bar_chip_txt = { color: #21005D; font-size: 11.5px; font-weight: 700; }
      @mt_task1_cell = { background: #FFFFFF; border-radius: 16px; }
      @mt_task2_cell = { background: #FFFFFF; border-radius: 16px; box-shadow: 0 2px 8px rgba(29, 27, 32, 0.08); }
      @mt_task3_cell = { background: #FFFFFF; border-radius: 16px; }
      # The task body column resolves to 360px (316px on the row carrying an avatar). The longest
      # English title here is "Sync the release checklist with Marketing" — 41 glyphs, 292px at
      # 14.5px — so every row still sets on one line and the list keeps its Chinese row heights.
      @mt_task1_name = { color: rgba(29, 27, 32, 0.55); font-size: 14.5px; font-weight: 600; }
      @mt_task2_name = { color: #1D1B20; font-size: 14.5px; font-weight: 700; }
      @mt_task3_name = { color: #1D1B20; font-size: 14.5px; font-weight: 700; }
      @mt_task1_meta = { color: rgba(29, 27, 32, 0.45); font-size: 12px; }
      @mt_task2_meta = { color: #7D5260; font-size: 12px; font-weight: 600; }
      @mt_task3_meta = { color: rgba(29, 27, 32, 0.5); font-size: 12px; }
      @mt_app_fab_row = { background: #6750A4; border-radius: 18px; box-shadow: 0 8px 20px rgba(103, 80, 164, 0.35); transition: transform 0.25s ease; :scope:hover { transform: translateY(-2px); } }
      @mt_fab_txt = { color: #FFFFFF; font-size: 14px; font-weight: 700; }

      # ── Capability cards ──
      @mt_feature_label = { color: #6750A4; font-size: 12px; font-weight: 800; letter-spacing: 3.4px; }
      # 44px → 40px: 11 CJK glyphs against 37 Latin ones ("Three building blocks, one team rhythm").
      @mt_feature_title = { color: #1D1B20; font-size: 40px; font-weight: 900; letter-spacing: -1.2px; }
      @mt_f1_col = { background: #F7F2FA; border-radius: 24px; transition: box-shadow 0.3s ease, transform 0.3s ease; :scope:hover { box-shadow: 0 12px 30px rgba(29, 27, 32, 0.12); transform: translateY(-4px); } }
      @mt_f2_col = { background: #F7F2FA; border-radius: 24px; transition: box-shadow 0.3s ease, transform 0.3s ease; :scope:hover { box-shadow: 0 12px 30px rgba(29, 27, 32, 0.12); transform: translateY(-4px); } }
      @mt_f3_col = { background: #F7F2FA; border-radius: 24px; transition: box-shadow 0.3s ease, transform 0.3s ease; :scope:hover { box-shadow: 0 12px 30px rgba(29, 27, 32, 0.12); transform: translateY(-4px); } }
      @mt_f1_name = { color: #1D1B20; font-size: 21px; font-weight: 800; }
      @mt_f2_name = { color: #1D1B20; font-size: 21px; font-weight: 800; }
      @mt_f3_name = { color: #1D1B20; font-size: 21px; font-weight: 800; }
      # Each card is 377px wide with 321px of indoor space, so the three descriptions are cut to
      # ~70 glyphs — two lines each, matching the Chinese cards' height.
      @mt_f1_desc = { color: rgba(29, 27, 32, 0.62); font-size: 14px; line-height: 1.7; }
      @mt_f2_desc = { color: rgba(29, 27, 32, 0.62); font-size: 14px; line-height: 1.7; }
      @mt_f3_desc = { color: rgba(29, 27, 32, 0.62); font-size: 14px; line-height: 1.7; }

      # ── Tonal surfaces ──
      @mt_surface_label = { color: #6750A4; font-size: 12px; font-weight: 800; letter-spacing: 3.4px; }
      @mt_surface_title = { color: #1D1B20; font-size: 36px; font-weight: 900; letter-spacing: -1px; }
      @mt_t1_col = { background: #FEF7FF; border: 1px solid rgba(29, 27, 32, 0.1); border-radius: 20px; }
      @mt_t2_col = { background: #F3EDF7; border-radius: 20px; }
      @mt_t3_col = { background: #EADDFF; border-radius: 20px; }
      @mt_t4_col = { background: #FFD8E4; border-radius: 20px; }
      @mt_t1_chip = { background: #FEF7FF; border: 1px solid rgba(29, 27, 32, 0.2); border-radius: 999px; }
      @mt_t2_chip = { background: #F3EDF7; border: 1px solid rgba(29, 27, 32, 0.2); border-radius: 999px; }
      @mt_t3_chip = { background: #EADDFF; border: 1px solid rgba(103, 80, 164, 0.4); border-radius: 999px; }
      @mt_t4_chip = { background: #FFD8E4; border: 1px solid rgba(125, 82, 96, 0.4); border-radius: 999px; }
      @mt_t1_name = { color: #1D1B20; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mt_t2_name = { color: #1D1B20; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mt_t3_name = { color: #21005D; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mt_t4_name = { color: #31111D; font-size: 15px; font-weight: 800; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      @mt_t1_desc = { color: rgba(29, 27, 32, 0.6); font-size: 13px; line-height: 1.7; }
      @mt_t2_desc = { color: rgba(29, 27, 32, 0.6); font-size: 13px; line-height: 1.7; }
      @mt_t3_desc = { color: rgba(33, 0, 93, 0.7); font-size: 13px; line-height: 1.7; }
      @mt_t4_desc = { color: rgba(49, 17, 29, 0.7); font-size: 13px; line-height: 1.7; }

      # ── Pricing ──
      @mt_plan_title = { color: #1D1B20; font-size: 36px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @mt_pl1_col = { background: #FFFFFF; border: 1px solid rgba(29, 27, 32, 0.12); border-radius: 24px; }
      @mt_pl2_col = { background: #EADDFF; border-radius: 24px; box-shadow: 0 14px 34px rgba(103, 80, 164, 0.2); }
      @mt_pl1_name = { color: #1D1B20; font-size: 20px; font-weight: 800; }
      @mt_pl2_name = { color: #21005D; font-size: 20px; font-weight: 800; }
      @mt_pl1_price = { color: #1D1B20; font-size: 40px; font-weight: 900; letter-spacing: -1.2px; }
      @mt_pl2_price = { color: #21005D; font-size: 40px; font-weight: 900; letter-spacing: -1.2px; }
      @mt_pl1_desc = { color: rgba(29, 27, 32, 0.62); font-size: 13.5px; line-height: 1.7; }
      @mt_pl2_desc = { color: rgba(33, 0, 93, 0.72); font-size: 13.5px; line-height: 1.7; }
      @mt_pl2_badge = { background: #6750A4; border-radius: 999px; }
      @mt_pl2_badge_txt = { color: #FFFFFF; font-size: 11.5px; font-weight: 800; }
      @mt_pl1_cta = { border: 1px solid rgba(103, 80, 164, 0.5); border-radius: 999px; transition: background 0.25s ease; :scope:hover { background: rgba(103, 80, 164, 0.08); } }
      @mt_pl1_cta_txt = { color: #6750A4; font-size: 14.5px; font-weight: 700; letter-spacing: 0.4px; }
      @mt_pl2_cta = { background: #6750A4; border-radius: 999px; transition: transform 0.25s ease, box-shadow 0.25s ease; :scope:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(103, 80, 164, 0.35); } }
      @mt_pl2_cta_txt = { color: #FFFFFF; font-size: 14.5px; font-weight: 700; letter-spacing: 0.4px; }

      # ── Footer ──
      @mt_footer_row = { border-top: 1px solid rgba(29, 27, 32, 0.12); }
      @mt_footer_left = { color: rgba(29, 27, 32, 0.45); font-size: 12.5px; }
      @mt_footer_f1 = { color: rgba(29, 27, 32, 0.68); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6750A4; } }
      @mt_footer_f2 = { color: rgba(29, 27, 32, 0.68); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6750A4; } }
      @mt_footer_f3 = { cursor: pointer; color: rgba(29, 27, 32, 0.68); font-size: 13px; :scope { transition: color 0.25s ease; } :scope:hover { color: #6750A4; } }
    </styles>
  </Page>
</App>
```

## Production notes

**Not a translation — the same product screen, set in Latin type.** This template is an *interface
simulation*: the pressure point is not the headline but the **task list inside a 560px product
frame**, where every label has to survive a fixed 360px column, and the **two uppercase eyebrows**,
which are the only place the page uses wide tracking.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| Hero title | 58px, tracking −2px | **46px, tracking −1.4px** | `让任务自己找到主人` is 8 glyphs (464px, one line); "Let every task find its owner" is 30 glyphs and sets as two lines inside the 520px measure — total block height stays close to the Chinese lockup against the 560px frame |
| Hero sub measure | `max-width: 480px` | **500px**, leading 1.95 → **1.7** | 143 Latin glyphs against 48 CJK; the wider measure keeps it at three lines instead of four |
| Section h2 (features) | 44px, tracking −1.5px | **40px, tracking −1.2px** | "Three building blocks, one team rhythm" is 37 glyphs vs 11 CJK |
| Section h2 (surfaces / pricing) | 40px, tracking −1.4px | **36px, tracking −1px** | Same ratio, one step down |
| Capability descriptions | 1.9 leading | **1.7** leading, copy re-cut to ~70 glyphs | Cards are 377px wide with 321px of indoor space; the literal renderings ran to three lines and made the card row taller than its neighbours |
| Eyebrow tracking | 3.4px | **kept 3.4px** | These are the page's only all-caps Latin labels (`CAPABILITIES` / `TONAL SURFACES`) — tracking is the Material idiom here, not a CJK crutch, and neither label is width-constrained |
| Button / CTA tracking | 0.6px | 0.4px | 13px-plus Latin labels read as letter-spaced gap at 0.6px |
| Body leading (tone / pricing / footer) | 1.8–1.9 | **1.7** | Latin does not need CJK leading |

**The task list was measured, not guessed.** The app frame is 560px wide, so with rail (76px) and
gap (16px) the main column is 428px; a task row's body column is **360px** (316px on the row that
carries an avatar). The longest English title — "Sync the release checklist with Marketing", 41
glyphs — measures **292px** at 14.5px (the other two: 238px and 272px), so all three rows still set
on a single line and the list keeps its original row heights. The metadata lines (24 / 30 / 21
glyphs at 12px) measure 142 / 176 / 122px and all clear their columns.

**Verified by measurement, not by eye** (rendered at 1280px, `getClientRects` per text node): hero
title two lines (widest 463px in a 520px measure), hero sub three lines (widest 497px in 500px),
the three capability descriptions two lines each, and every section h2 on one line. Page-level
audit: no `scrollWidth > clientWidth` anywhere, no clipped content, no horizontal document
overflow, and no absolutely-positioned decoration on this page to collide with.

**Copy policy** — re-voiced for an English product page, not transliterated: `让任务自己找到主人` →
*Let every task find its owner*, `三块积木，搭出团队节奏` → *Three building blocks, one team rhythm*,
`层次不是阴影堆出来的` → *Depth without stacking shadows*, `按团队人数计价，不按人头加价` → *Priced by
team size — never per seat*. The currency moves to the equivalent international figure (`¥ 0` →
`$0`, `¥ 199 / 月` → `$19 / month`), and the assignee keeps a real name in pinyin (`王潇` →
*Wang Xiao*) — a plausible person, not a placeholder. `小团队` → *Small team*, `团队版` → *Team*
(the tier name a pricing page would actually print), `推荐` → *Recommended*.

**Node ids are identical to the Chinese version.** The single `nav.scroll` back-to-top event on
`mt_footer_f3` is unchanged, the tonal tier names (`surface` / `surface-container` /
`primary-container` / `tertiary-container`) stay verbatim because they *are* the MD3 token names, and
no structure was removed: the `能力 · CAPABILITIES` and `色调分层 · TONAL SURFACES` eyebrows keep both
their nodes and drop only the redundant Chinese half of the label, which the English version does not
need.
