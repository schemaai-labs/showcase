# Mobile app (multi-page) — "FitRun" training app

> Template role (product / app tab · mobile): the standard three-page mobile skeleton — onboarding →
> home workspace → workout detail, page-to-page `nav.to` routing, bottom tab bar.
> Scenario: the mobile UI for a fitness app: ① onboarding (brand mark + oversized headline + three
> features + start button, first-screen entrance orchestration); ② home (greeting row + today's step
> goal card with progress bar + four activity shortcuts + recommended course list + bottom tab bar);
> ③ workout detail (back navigation + gradient hero + title tags + intro + coaching points + sticky
> "start workout" bar). Phone-width centred content column (430px), static data, zero API.

```lang
<App dsl-version="0.3" name="FitRun">
  <!-- ══════════════ 1. Onboarding ══════════════ -->
  <Page id="onboarding" name="Onboarding" route="/">
    <FlexContainer id="ob_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="ob_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; position:relative; align-items:stretch">
        <Container id="ob_hero_region" style="flex-grow:1; height:auto; width:100%; position:relative; overflow:hidden">
          <Animate id="ob_reveal" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; align-items:center; gap:18px; padding:72px 28px 40px">
            <Container id="ob_logo_cell" style="height:auto; width:auto">
              <Icon id="ob_logo" props={iconName: "Activity", iconSource: "lucide"}/>
            </Container>
            <Container id="ob_title_cell" style="height:auto; width:100%">
              <Text id="ob_title" props={content: "Move today", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ob_sub_cell" style="height:auto; width:100%">
              <Text id="ob_sub" props={content: "Twenty minutes a day, one coach-led session at a time. Your body remembers every drop of sweat.", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ob_feature_1_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_1_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_1_icon" props={iconName: "Target", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_1_text_cell" style="height:auto; width:auto"><Text id="ob_feature_1_text" props={content: "A plan tuned to your fitness", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_feature_2_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_2_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_2_icon" props={iconName: "Flame", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_2_text_cell" style="height:auto; width:auto"><Text id="ob_feature_2_text" props={content: "Live heart-rate and calorie tracking", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_feature_3_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_3_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_3_icon" props={iconName: "Users", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_3_text_cell" style="height:auto; width:auto"><Text id="ob_feature_3_text" props={content: "Training alongside 3.2M others", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_cta_cell" style="height:auto; width:100%; padding-top:16px">
              <Button id="ob_cta" props={content: "Get started", variant: "primary"} style="height:auto; width:100%; padding:14px 0px"/>
            </Container>
            <Container id="ob_login_cell" style="height:auto; width:100%; padding-top:4px">
              <Text id="ob_login" props={content: "Already have an account? Log in", tagName: "span"} style="height:auto; width:100%"/>
            </Container>
          </Animate>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      @ob_cta = { events: { enterApp: { trigger: "onClick", action: nav.to("/home") } } };
    </script>
    <styles>
      @ob_root = { background: #f8fafc; }
      @ob_shell = { background: #ffffff; }
      @ob_hero_region = {
        background: linear-gradient(180deg, #f0fdf4 0%, #ecfeff 55%, #ffffff 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -110px;
          top: -80px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(16, 185, 129, 0.2), transparent 72%);
        }
      }
      @ob_logo = { color: #10b981; font-size: 56px; }
      @ob_title = { color: #0f172a; font-size: 40px; font-weight: 900; letter-spacing: -1px; text-align: center; }
      @ob_sub = { color: #64748b; font-size: 15px; line-height: 1.7; text-align: center; }
      @ob_feature_1_icon = { color: #10b981; font-size: 22px; }
      @ob_feature_2_icon = { color: #f59e0b; font-size: 22px; }
      @ob_feature_3_icon = { color: #0ea5e9; font-size: 22px; }
      @ob_feature_1_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @ob_feature_2_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @ob_feature_3_text = { color: #334155; font-size: 15px; font-weight: 600; }
      @ob_cta = {
        color: #ffffff;
        background: linear-gradient(120deg, #10b981 0%, #0ea5e9 120%);
        border-radius: 14px;
        font-size: 16px;
        font-weight: 800;
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(16, 185, 129, 0.32); }
      }
      @ob_login = { color: #64748b; font-size: 13px; text-align: center; }
    </styles>
  </Page>

  <!-- ══════════════ 2. Home ══════════════ -->
  <Page id="home" name="Home" route="/home">
    <FlexContainer id="hm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="hm_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; align-items:stretch">

        <!-- Greeting row -->
        <Container id="hm_greet_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:22px 20px 12px">
          <FlexContainer id="hm_greet_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="hm_greet_left_cell" style="height:auto; width:auto">
              <FlexContainer id="hm_greet_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                <Container id="hm_avatar_cell" style="height:auto; width:auto"><Avatar id="hm_avatar" props={text: "A", shape: "circle"} style="height:42px; width:42px"/></Container>
                <Container id="hm_greet_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="hm_greet_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="hm_greet_title_cell" style="height:auto; width:auto"><Text id="hm_greet_title" props={content: "Good morning, Alex", tagName: "h3"}/></Container>
                    <Container id="hm_greet_sub_cell" style="height:auto; width:auto"><Text id="hm_greet_sub" props={content: "Let's make today count", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="hm_bell_cell" style="height:auto; width:auto"><Icon id="hm_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
          </FlexContainer>
        </Container>

        <!-- Today's goal card -->
        <Container id="hm_goal_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:8px 20px 16px">
          <Container id="hm_goal_card" style="height:auto; width:100%">
            <FlexContainer id="hm_goal_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 22px">
              <Container id="hm_goal_head_cell" style="height:auto; width:100%">
                <FlexContainer id="hm_goal_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="hm_goal_label_cell" style="height:auto; width:auto"><Text id="hm_goal_label" props={content: "Steps today", tagName: "span"}/></Container>
                  <Container id="hm_goal_rate_cell" style="height:auto; width:auto"><Text id="hm_goal_rate" props={content: "68%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hm_goal_value_cell" style="height:auto; width:100%"><Text id="hm_goal_value" props={content: "6,832", tagName: "h2"}/></Container>
              <Container id="hm_goal_target_cell" style="height:auto; width:100%"><Text id="hm_goal_target" props={content: "Goal 10,000 steps · 3,168 to go", tagName: "span"}/></Container>
              <Container id="hm_goal_progress_cell" style="height:8px; width:100%">
                <Container id="hm_goal_progress_fill" style="height:100%; width:68%"/>
              </Container>
            </FlexContainer>
          </Container>
        </Container>

        <!-- Activity shortcuts -->
        <Container id="hm_quick_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:8px 20px 8px">
          <FlexContainer id="hm_quick_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:12px">
            <Container id="hm_quick_run_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_run_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_run_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_run_icon" props={iconName: "Footprints", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_run_text_cell" style="height:auto; width:auto"><Text id="hm_quick_run_text" props={content: "Run", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_bike_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_bike_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_bike_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_bike_icon" props={iconName: "Bike", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_bike_text_cell" style="height:auto; width:auto"><Text id="hm_quick_bike_text" props={content: "Bike", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_yoga_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_yoga_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_yoga_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_yoga_icon" props={iconName: "HeartPulse", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_yoga_text_cell" style="height:auto; width:auto"><Text id="hm_quick_yoga_text" props={content: "Yoga", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_strength_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_strength_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_strength_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_strength_icon" props={iconName: "Dumbbell", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_strength_text_cell" style="height:auto; width:auto"><Text id="hm_quick_strength_text" props={content: "Weights", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- Recommended courses -->
        <Container id="hm_course_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:14px 20px 24px">
          <FlexContainer id="hm_course_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="hm_course_head_cell" style="height:auto; width:100%">
              <FlexContainer id="hm_course_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                <Container id="hm_course_title_cell" style="height:auto; width:auto"><Text id="hm_course_title" props={content: "Recommended", tagName: "h3"}/></Container>
                <Container id="hm_course_more_cell" style="height:auto; width:auto"><Text id="hm_course_more" props={content: "See all", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_course_list_cell" style="height:auto; width:100%">
              <List id="hm_course_list" props={dataSource: [{name: "Full-body Burn HIIT", meta: "20 min · Intermediate · No kit"}, {name: "Morning Wake-up Stretch", meta: "12 min · Beginner · Mat"}, {name: "Core Strength Builder", meta: "18 min · Intermediate · Dumbbells"}], direction: "vertical", gap: "12px"} style="height:auto; width:100%">
                <Container id="hm_course_item_tpl" style="height:auto; width:100%">
                  <FlexContainer id="hm_course_item_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:16px 16px">
                    <Container id="hm_course_item_text_cell" style="height:auto; width:auto">
                      <FlexContainer id="hm_course_item_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                        <Container id="hm_course_item_name_cell" style="height:auto; width:auto"><Text id="hm_course_item_name" props={content: "{{item.name}}", tagName: "h4"}/></Container>
                        <Container id="hm_course_item_meta_cell" style="height:auto; width:auto"><Text id="hm_course_item_meta" props={content: "{{item.meta}}", tagName: "span"}/></Container>
                      </FlexContainer>
                    </Container>
                    <Container id="hm_course_item_go_cell" style="height:auto; width:auto"><Icon id="hm_course_item_go" props={iconName: "ChevronRight", iconSource: "lucide"}/></Container>
                  </FlexContainer>
                </Container>
              </List>
            </Container>
          </FlexContainer>
        </Container>

        <!-- Bottom tab bar (sticky) -->
        <Container id="hm_tabbar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; bottom:0px; z-index:20">
          <FlexContainer id="hm_tabbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:10px 20px 16px">
            <Container id="hm_tab_home_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_home_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_home_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_home_icon" props={iconName: "House", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_home_text_cell" style="height:auto; width:auto"><Text id="hm_tab_home_text" props={content: "Home", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_tab_course_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_course_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_course_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_course_icon" props={iconName: "Dumbbell", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_course_text_cell" style="height:auto; width:auto"><Text id="hm_tab_course_text" props={content: "Train", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_tab_me_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_me_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_me_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_me_icon" props={iconName: "CircleUserRound", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_me_text_cell" style="height:auto; width:auto"><Text id="hm_tab_me_text" props={content: "Profile", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      @hm_course_list_cell = {
        events: { openCourse: { trigger: "onClick", action: nav.to("/workout") } }
      };
      @hm_tab_course_cell = {
        events: { toWorkout: { trigger: "onClick", action: nav.to("/workout") } }
      };
    </script>
    <styles>
      @hm_root = { background: #f1f5f9; }
      @hm_shell = { background: #f8fafc; }
      @hm_avatar = { background-color: #10b981; color: #ffffff; font-size: 15px; }
      @hm_greet_title = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @hm_greet_sub = { color: #94a3b8; font-size: 12px; }
      @hm_bell = { color: #64748b; font-size: 20px; cursor: pointer; }
      @hm_goal_card = {
        background: linear-gradient(140deg, #10b981 0%, #0d9488 58%, #0ea5e9 130%);
        border-radius: 20px;
        box-shadow: 0 14px 34px rgba(13, 148, 136, 0.28);
      }
      @hm_goal_label = { color: rgba(236, 253, 245, 0.92); font-size: 13px; font-weight: 600; }
      @hm_goal_rate = { color: rgba(236, 253, 245, 0.92); font-size: 13px; font-weight: 700; }
      @hm_goal_value = { color: #ffffff; font-size: 40px; font-weight: 900; letter-spacing: -1px; }
      @hm_goal_target = { color: rgba(236, 253, 245, 0.86); font-size: 12px; }
      @hm_goal_progress_cell = { background: rgba(255, 255, 255, 0.28); border-radius: 999px; }
      @hm_goal_progress_fill = { background: #ffffff; border-radius: 999px; }
      @hm_quick_run_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); }
      @hm_quick_bike_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); }
      @hm_quick_yoga_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); }
      @hm_quick_strength_cell = { background: #ffffff; border-radius: 16px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); }
      @hm_quick_run_icon = { color: #f97316; font-size: 24px; }
      @hm_quick_bike_icon = { color: #0ea5e9; font-size: 24px; }
      @hm_quick_yoga_icon = { color: #ec4899; font-size: 24px; }
      @hm_quick_strength_icon = { color: #8b5cf6; font-size: 24px; }
      @hm_quick_run_text = { color: #334155; font-size: 12px; font-weight: 600; }
      @hm_quick_bike_text = { color: #334155; font-size: 12px; font-weight: 600; }
      @hm_quick_yoga_text = { color: #334155; font-size: 12px; font-weight: 600; }
      @hm_quick_strength_text = { color: #334155; font-size: 12px; font-weight: 600; }
      @hm_course_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @hm_course_more = { color: #0d9488; font-size: 12px; font-weight: 600; cursor: pointer; }
      @hm_course_item_tpl = { background: #ffffff; border-radius: 16px; cursor: pointer; :scope { transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); } }
      @hm_course_item_name = { color: #0f172a; font-size: 15px; font-weight: 700; }
      @hm_course_item_meta = { color: #94a3b8; font-size: 12px; }
      @hm_course_item_go = { color: #cbd5e1; font-size: 18px; }
      @hm_tabbar = { background: rgba(248, 250, 252, 0.94); backdrop-filter: blur(12px); :scope { border-top: 1px solid rgba(148, 163, 184, 0.18); } }
      @hm_tab_home_icon = { color: #0d9488; font-size: 22px; }
      @hm_tab_course_icon = { color: #94a3b8; font-size: 22px; cursor: pointer; }
      @hm_tab_me_icon = { color: #94a3b8; font-size: 22px; cursor: pointer; }
      @hm_tab_home_text = { color: #0d9488; font-size: 11px; font-weight: 700; }
      @hm_tab_course_text = { color: #94a3b8; font-size: 11px; font-weight: 600; }
      @hm_tab_me_text = { color: #94a3b8; font-size: 11px; font-weight: 600; }
    </styles>
  </Page>

  <!-- ══════════════ 3. Workout detail ══════════════ -->
  <Page id="workout" name="Workout" route="/workout">
    <FlexContainer id="wk_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="wk_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; align-items:stretch">

        <!-- Navigation -->
        <Container id="wk_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:18px 20px 10px">
          <FlexContainer id="wk_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="wk_back_cell" style="height:auto; width:auto"><Icon id="wk_back" props={iconName: "ChevronLeft", iconSource: "lucide"}/></Container>
            <Container id="wk_nav_title_cell" style="height:auto; width:auto"><Text id="wk_nav_title" props={content: "Workout", tagName: "h3"}/></Container>
            <Container id="wk_share_cell" style="height:auto; width:auto"><Icon id="wk_share" props={iconName: "Share2", iconSource: "lucide"}/></Container>
          </FlexContainer>
        </Container>

        <!-- Hero visual -->
        <Container id="wk_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:6px 20px 0px">
          <Container id="wk_hero_visual" style="height:190px; width:100%; align-items:center; justify-content:center">
            <Icon id="wk_hero_icon" props={iconName: "Flame", iconSource: "lucide"}/>
          </Container>
        </Container>

        <!-- Title and tags -->
        <Container id="wk_info_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:18px 20px 20px">
          <FlexContainer id="wk_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="wk_title_cell" style="height:auto; width:100%"><Text id="wk_title" props={content: "Full-body Burn HIIT · 20 min", tagName: "h2"} style="height:auto; width:100%"/>
            </Container>
            <Container id="wk_tags_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_tags_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                <Container id="wk_tag_time_cell" style="height:auto; width:auto"><Tag id="wk_tag_time" props={text: "20 min", color: "green"}/></Container>
                <Container id="wk_tag_level_cell" style="height:auto; width:auto"><Tag id="wk_tag_level" props={text: "Intermediate", color: "orange"}/></Container>
                <Container id="wk_tag_gear_cell" style="height:auto; width:auto"><Tag id="wk_tag_gear" props={text: "No equipment", color: "blue"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_desc_cell" style="height:auto; width:100%"><Text id="wk_desc" props={content: "Four full-body rounds: jumping jacks to wake up, squats and glute bridges, burpees for the sprint, then core work to close. Twenty seconds between rounds, voice-cued the whole way.", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="wk_points_title_cell" style="height:auto; width:100%; padding-top:6px"><Text id="wk_points_title" props={content: "Coach's notes", tagName: "h3"}/></Container>
            <Container id="wk_point_1_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_1_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_1_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_1_text_cell" style="height:auto; width:auto"><Text id="wk_point_1_text" props={content: "Keep breathing between reps — never hold your breath", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_point_2_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_2_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_2_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_2_text_cell" style="height:auto; width:auto"><Text id="wk_point_2_text" props={content: "If your knees complain, swap the jumps for half squats", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_point_3_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_3_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_3_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_3_text_cell" style="height:auto; width:auto"><Text id="wk_point_3_text" props={content: "Stretch for three minutes afterwards to skip next-day soreness", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- Sticky action bar -->
        <Container id="wk_action_bar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; bottom:0px; z-index:20">
          <FlexContainer id="wk_action_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:12px 20px 18px">
            <Container id="wk_action_meta_cell" style="height:auto; width:auto">
              <FlexContainer id="wk_action_meta_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                <Container id="wk_action_kcal_cell" style="height:auto; width:auto"><Text id="wk_action_kcal" props={content: "Estimated 220 kcal", tagName: "span"}/></Container>
                <Container id="wk_action_level_cell" style="height:auto; width:auto"><Text id="wk_action_level" props={content: "Warm-up to cool-down · 24 min", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_start_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="wk_start_btn" props={content: "Start workout", variant: "primary"} style="height:auto; width:auto; padding:12px 34px"/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      @wk_back_cell = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @wk_start_btn = {
        events: { startWorkout: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Workout started — follow the beat for round one"}) } }
      };
    </script>
    <styles>
      @wk_root = { background: #f1f5f9; }
      @wk_shell = { background: #ffffff; }
      @wk_back = { color: #334155; font-size: 24px; cursor: pointer; }
      @wk_nav_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @wk_share = { color: #64748b; font-size: 20px; cursor: pointer; }
      @wk_hero_visual = {
        background: linear-gradient(140deg, #10b981 0%, #0ea5e9 70%, #6366f1 130%);
        border-radius: 20px;
        box-shadow: 0 16px 36px rgba(13, 148, 136, 0.26);
      }
      @wk_hero_icon = { color: #ffffff; font-size: 72px; }
      @wk_title = { color: #0f172a; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; }
      @wk_tag_time = { background-color: #dcfce7; color: #15803d; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wk_tag_level = { background-color: #ffedd5; color: #c2410c; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wk_tag_gear = { background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @wk_desc = { color: #475569; font-size: 14px; line-height: 1.7; }
      @wk_points_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @wk_point_1_icon = { color: #10b981; font-size: 18px; }
      @wk_point_2_icon = { color: #10b981; font-size: 18px; }
      @wk_point_3_icon = { color: #10b981; font-size: 18px; }
      @wk_point_1_text = { color: #334155; font-size: 14px; line-height: 1.7; }
      @wk_point_2_text = { color: #334155; font-size: 14px; line-height: 1.7; }
      @wk_point_3_text = { color: #334155; font-size: 14px; line-height: 1.7; }
      @wk_action_bar = { background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(12px); :scope { border-top: 1px solid rgba(148, 163, 184, 0.18); } }
      @wk_action_kcal = { color: #0f172a; font-size: 13px; font-weight: 700; }
      @wk_action_level = { color: #94a3b8; font-size: 12px; }
      @wk_start_btn = {
        color: #ffffff;
        background: linear-gradient(120deg, #10b981 0%, #0ea5e9 120%);
        border-radius: 14px;
        font-size: 15px;
        font-weight: 800;
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(16, 185, 129, 0.34); }
      }
    </styles>
  </Page>
</App>
```

> Craft notes: a three-page app = each page carries its own header + `nav.to` routing (onboarding →
> home → detail); a phone-width content column (`max-width:430px`) centred; bottom tab bar and action
> bar pinned with `position:sticky; bottom:0` (the layout holds with zero JS); the course list is
> List-driven; only the onboarding page has an entrance orchestration (the utility pages ship with no
> motion).

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** This template is the narrow case: the content
column is 430px wide with 20–28px gutters, so a 374px measure is what every string has to live in.
Copy was written *to the column* rather than translated word for word, and only three values moved.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `ob_title` | 40px, `letter-spacing: -1.5px` | 40px, **`-1px`** | "Move today" is 10 Latin glyphs; `-1.5px` tracking is a CJK-tuned value that makes Latin look cramped |
| `ob_sub` / `wk_desc` / `wk_point_*_text` | `line-height: 1.9 / 1.9 / 1.8` | **1.7** | Latin setting does not need CJK leading; the paragraphs are also longer, so the reduced leading keeps the column from growing |
| everything else | — | unchanged | numerals are identical in both scripts, and the small labels (11–19px) already sat on a Latin measure — see the notes below |

**The strings that decided the type sizes** (measured on the live page, not guessed):

| String | Where | Measure it must fit | Result |
| --- | --- | --- | --- |
| "Twenty minutes a day, one coach-led session at a time. Your body remembers every drop of sweat." | onboarding sub, 15px | 374px | 2 lines, same count as the Chinese |
| "Live heart-rate and calorie tracking" | feature row, 15px | 374px minus the 22px icon and 12px gap | one line |
| "Goal 10,000 steps · 3,168 to go" | goal card, 12px | 346px | 173px — one line |
| "Weights" | shortcut label, 12px | **73px** (the 89px cell minus 8px padding each side) | 47px. "Strength" measures 65px — it *does* fit, but at 89% fill and 2.4× the width of "Run" it flattens the four-up rhythm, so the label was re-chosen rather than the cell resized |
| "Full-body Burn HIIT" / "20 min · Intermediate · No kit" | course row, 15px / 12px | 314px minus the chevron | 142px / 163px — no wrap |
| "Full-body Burn HIIT · 20 min" | workout title, 24px | 390px | one line — the 24px size held |
| "Warm-up to cool-down · 24 min" | sticky action bar, 12px | the 390px bar minus the 170px start button | 181px, leaving 39px clear — one line |
| "Good morning, Alex" / "Let's make today count" | greeting column, 19px / 12px | 390px minus the 42px avatar, gap and bell | 186px / 132px — one line each |

**Copy policy — equivalent, not literal.** The brand loses its Chinese half (`乐动 FitRun` →
**FitRun**) since the Latin half was already the product's name; the user 阿澈 becomes **Alex** (avatar
initial `A`), the greeting is re-written as a real English morning line, and `320 万伙伴` is
re-expressed as **3.2M** rather than transliterated. Duration/level/gear vocabulary became
`20 min` / `Intermediate` / `No equipment` / `Mat` / `Dumbbells`; `训练要点` → **Coach's notes**;
`查看全部` → "See all"; the toast message was rewritten, not translated.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
can address either one by the same selectors. **Routes and `nav.to` targets are unchanged**
(`/` → `/home` → `/workout`, back to `/home`), so the three pages still compose the same flow. No
nodes were added or removed.
