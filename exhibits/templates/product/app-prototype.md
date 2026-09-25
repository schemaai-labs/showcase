# Clickable prototype (multi-page flow) — "Cloudgate" sign-in → workspace → project detail

> Template role (product / app tab · prototype, P2): a clickable prototype — a three-screen link chain
> (sign-in → workspace → project detail) routed with `nav.to`; whole cards are clickable
> (container onClick).
> Scenario: a flow prototype for a fictional collaboration product: ① sign-in (a centred card with
> email / password / submit); ② workspace (a greeting line + three clickable stat cards + a recent
> projects list); ③ project detail (back / title + status / progress bar / members / task list /
> update progress). What matters is that **the link chain actually clicks through**; the content is
> deliberately thin — a prototype is not a finished page.

```lang
<App dsl-version="0.3" name="Cloudgate · Clickable Prototype">
  <!-- ══════════════ 1. Sign-in ══════════════ -->
  <Page id="login" name="Sign in" route="/">
    <FlexContainer id="pt_login_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="pt_login_frame" props={direction: "column"} style="height:auto; width:100%; align-items:center; justify-content:center; padding:48px 24px; position:relative">
      <Container id="pt_login_card" style="height:auto; width:100%; max-width:420px; flex-shrink:0">
        <FlexContainer id="pt_login_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:20px; padding:40px 36px">
          <Container id="pt_login_logo_cell" style="height:auto; width:auto"><Icon id="pt_login_logo" props={iconName: "Layers", iconSource: "lucide"}/></Container>
          <Container id="pt_login_title_cell" style="height:auto; width:100%"><Text id="pt_login_title" props={content: "Welcome back", tagName: "h1"} style="height:auto; width:100%"/></Container>
          <Container id="pt_login_sub_cell" style="height:auto; width:100%"><Text id="pt_login_sub" props={content: "Sign in to Cloudgate and pick up where your team left off.", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="pt_login_email_cell" style="height:auto; width:100%">
            <Input id="pt_login_email" props={placeholder: "Work email"} style="height:auto; width:100%"/>
          </Container>
          <Container id="pt_login_password_cell" style="height:auto; width:100%">
            <Input id="pt_login_password" props={placeholder: "Password"} style="height:auto; width:100%"/>
          </Container>
          <Container id="pt_login_submit_cell" style="height:auto; width:100%; padding-top:4px">
            <Button id="pt_login_submit" props={content: "Sign in to workspace", variant: "primary"} style="height:auto; width:100%; padding:12px 0px"/>
          </Container>
          <Container id="pt_login_hint_cell" style="height:auto; width:100%">
            <Text id="pt_login_hint" props={content: "Demo prototype — click Sign in to continue.", tagName: "span"} style="height:auto; width:100%"/>
          </Container>
        </FlexContainer>
      </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      @pt_login_submit = { events: { enter: { trigger: "onClick", action: nav.to("/home") } } };
    </script>
    <styles>
      @pt_login_root = {
        background: linear-gradient(160deg, #eef2ff 0%, #e0f2fe 55%, #f8fafc 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -120px;
          top: -110px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(99, 102, 241, 0.16), transparent 72%);
        }
      }
      @pt_login_card = { background: #ffffff; border-radius: 20px; box-shadow: 0 24px 60px rgba(30, 41, 59, 0.14); }
      @pt_login_logo = { color: #6366f1; font-size: 40px; }
      @pt_login_title = { color: #0f172a; font-size: 30px; font-weight: 900; letter-spacing: -0.8px; text-align: center; }
      @pt_login_sub = { color: #64748b; font-size: 14px; line-height: 1.7; text-align: center; }
      @pt_login_submit = {
        color: #ffffff;
        background: #6366f1;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4f46e5; }
      }
      @pt_login_hint = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>

  <!-- ══════════════ 2. Workspace ══════════════ -->
  <Page id="home" name="Workspace" route="/home">
    <FlexContainer id="pt_home_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">
      <Container id="pt_home_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="pt_home_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="pt_home_brand_cell" style="height:auto; width:auto">
            <FlexContainer id="pt_home_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:9px">
              <Container id="pt_home_brand_icon_cell" style="height:auto; width:auto"><Icon id="pt_home_brand_icon" props={iconName: "Layers", iconSource: "lucide"}/></Container>
              <Container id="pt_home_brand_text_cell" style="height:auto; width:auto"><Text id="pt_home_brand_text" props={content: "Cloudgate", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="pt_home_avatar_cell" style="height:auto; width:auto"><Avatar id="pt_home_avatar" props={text: "A", shape: "circle"} style="height:34px; width:34px"/></Container>
        </FlexContainer>
      </Container>

      <Container id="pt_home_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 48px">
        <FlexContainer id="pt_home_col" props={direction: "column"} style="height:auto; width:100%; max-width:980px; margin-left:auto; margin-right:auto; align-items:stretch; gap:18px">
          <Container id="pt_home_greet_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_home_greet_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
              <Container id="pt_home_greet_title_cell" style="height:auto; width:auto"><Text id="pt_home_greet_title" props={content: "Good afternoon, Alex", tagName: "h2"}/></Container>
              <Container id="pt_home_greet_sub_cell" style="height:auto; width:auto"><Text id="pt_home_greet_sub" props={content: "Two deliverables are due today, and one project is waiting on your review.", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>

          <!-- Clickable stat cards (→ project detail) -->
          <Container id="pt_home_stats_row_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_home_stats_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
              <Container id="pt_stat_projects_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_projects_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_projects_label_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_label" props={content: "Active projects", tagName: "span"}/></Container>
                  <Container id="pt_stat_projects_value_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_value" props={content: "4", tagName: "h2"}/></Container>
                  <Container id="pt_stat_projects_note_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_note" props={content: "1 started this week", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_stat_delivery_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_delivery_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_delivery_label_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_label" props={content: "Due this week", tagName: "span"}/></Container>
                  <Container id="pt_stat_delivery_value_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_value" props={content: "2", tagName: "h2"}/></Container>
                  <Container id="pt_stat_delivery_note_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_note" props={content: "Both close by Friday", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_stat_review_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_review_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_review_label_cell" style="height:auto; width:100%"><Text id="pt_stat_review_label" props={content: "Awaiting review", tagName: "span"}/></Container>
                  <Container id="pt_stat_review_value_cell" style="height:auto; width:100%"><Text id="pt_stat_review_value" props={content: "6", tagName: "h2"}/></Container>
                  <Container id="pt_stat_review_note_cell" style="height:auto; width:100%"><Text id="pt_stat_review_note" props={content: "1 marked urgent", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Recent projects -->
          <Container id="pt_home_recent_card" style="height:auto; width:100%">
            <FlexContainer id="pt_home_recent_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="pt_home_recent_title_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_home_recent_title_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="pt_home_recent_title_text_cell" style="height:auto; width:auto"><Text id="pt_home_recent_title" props={content: "Recent projects", tagName: "h3"}/></Container>
                  <Container id="pt_home_recent_hint_cell" style="height:auto; width:auto"><Text id="pt_home_recent_hint" props={content: "Open any row for details", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_1_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_1_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_1_name_cell" style="height:auto; width:auto"><Text id="pt_recent_1_name" props={content: "Mobile 3.0 Redesign", tagName: "span"}/></Container>
                      <Container id="pt_recent_1_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_1_meta" props={content: "6 tasks in flight · updated 2 hours ago", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_1_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_1_tag" props={text: "In progress", color: "blue"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_2_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_2_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_2_name_cell" style="height:auto; width:auto"><Text id="pt_recent_2_name" props={content: "Analytics Dashboard 2.0", tagName: "span"}/></Container>
                      <Container id="pt_recent_2_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_2_meta" props={content: "Awaiting review · updated yesterday", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_2_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_2_tag" props={text: "In review", color: "gold"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_3_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_3_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_3_name_cell" style="height:auto; width:auto"><Text id="pt_recent_3_name" props={content: "Help Center Migration", tagName: "span"}/></Container>
                      <Container id="pt_recent_3_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_3_meta" props={content: "Done · archived 8 Sep", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_3_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_3_tag" props={text: "Done", color: "green"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      # Prototype link chain: stat card / project row → detail page
      @pt_stat_projects_card = { events: { openDetail: { trigger: "onClick", action: nav.to("/detail") } } };
      @pt_recent_1_cell = { events: { openDetail: { trigger: "onClick", action: nav.to("/detail") } } };
    </script>
    <styles>
      @pt_home_root = { background: #f5f7fa; }
      @pt_home_header = { background: #ffffff; :scope { border-bottom: 1px solid rgba(148, 163, 184, 0.16); box-shadow: 0 1px 8px rgba(15, 23, 42, 0.03); } }
      @pt_home_brand_icon = { color: #6366f1; font-size: 20px; }
      @pt_home_brand_text = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @pt_home_avatar = { background-color: #6366f1; color: #ffffff; font-size: 13px; }
      @pt_home_greet_title = { color: #0f172a; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; }
      @pt_home_greet_sub = { color: #64748b; font-size: 14px; }
      @pt_stat_projects_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); cursor: pointer; :scope { border: 1px solid #eef2f7; transition: transform 0.2s ease, box-shadow 0.2s ease; } :scope:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(15, 23, 42, 0.1); } }
      @pt_stat_delivery_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #eef2f7; } }
      @pt_stat_review_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05); :scope { border: 1px solid #eef2f7; } }
      @pt_stat_projects_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @pt_stat_delivery_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @pt_stat_review_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @pt_stat_projects_value = { color: #6366f1; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pt_stat_delivery_value = { color: #0ea5e9; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pt_stat_review_value = { color: #f59e0b; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pt_stat_projects_note = { color: #94a3b8; font-size: 12px; }
      @pt_stat_delivery_note = { color: #94a3b8; font-size: 12px; }
      @pt_stat_review_note = { color: #94a3b8; font-size: 12px; }
      @pt_home_recent_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @pt_home_recent_title = { color: #0f172a; font-size: 17px; font-weight: 800; }
      @pt_home_recent_hint = { color: #94a3b8; font-size: 12px; }
      @pt_recent_1_cell = { background: #f8fafc; border-radius: 12px; cursor: pointer; :scope { border: 1px solid #eef2f7; transition: transform 0.18s ease, box-shadow 0.18s ease; } :scope:hover { transform: translateX(2px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); } }
      @pt_recent_2_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @pt_recent_3_cell = { background: #f8fafc; border-radius: 12px; :scope { border: 1px solid #eef2f7; } }
      @pt_recent_1_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @pt_recent_2_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @pt_recent_3_name = { color: #0f172a; font-size: 14px; font-weight: 700; }
      @pt_recent_1_meta = { color: #94a3b8; font-size: 12px; }
      @pt_recent_2_meta = { color: #94a3b8; font-size: 12px; }
      @pt_recent_3_meta = { color: #94a3b8; font-size: 12px; }
      @pt_recent_1_tag = { background-color: #dbeafe; color: #1d4ed8; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @pt_recent_2_tag = { background-color: #fef3c7; color: #b45309; font-size: 11px; font-weight: 700; border-radius: 999px; }
      @pt_recent_3_tag = { background-color: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; border-radius: 999px; }
    </styles>
  </Page>

  <!-- ══════════════ 3. Project detail ══════════════ -->
  <Page id="detail" name="Project detail" route="/detail">
    <FlexContainer id="pt_detail_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">
      <Container id="pt_detail_body" style="flex-grow:1; height:auto; width:100%; padding:28px 24px 56px">
        <FlexContainer id="pt_detail_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:18px">

          <Container id="pt_detail_back_cell" style="height:auto; width:auto">
            <FlexContainer id="pt_detail_back_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="pt_detail_back_icon_cell" style="height:auto; width:auto"><Icon id="pt_detail_back_icon" props={iconName: "ChevronLeft", iconSource: "lucide"}/></Container>
              <Container id="pt_detail_back_text_cell" style="height:auto; width:auto"><Text id="pt_detail_back_text" props={content: "Back to workspace", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>

          <Container id="pt_detail_head_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
              <Container id="pt_detail_head_left_cell" style="height:auto; width:auto">
                <FlexContainer id="pt_detail_head_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="pt_detail_title_cell" style="height:auto; width:auto"><Text id="pt_detail_title" props={content: "Mobile 3.0 Redesign", tagName: "h1"}/></Container>
                  <Container id="pt_detail_tag_cell" style="height:auto; width:auto"><Tag id="pt_detail_tag" props={text: "In progress", color: "blue"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_detail_members_cell" style="height:auto; width:auto">
                <FlexContainer id="pt_detail_members_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
                  <Container id="pt_detail_member_1_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_1" props={text: "A", shape: "circle"} style="height:30px; width:30px"/></Container>
                  <Container id="pt_detail_member_2_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_2" props={text: "M", shape: "circle"} style="height:30px; width:30px"/></Container>
                  <Container id="pt_detail_member_3_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_3" props={text: "R", shape: "circle"} style="height:30px; width:30px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Progress card -->
          <Container id="pt_detail_progress_card" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_progress_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 24px">
              <Container id="pt_detail_progress_head_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_detail_progress_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="pt_detail_progress_label_cell" style="height:auto; width:auto"><Text id="pt_detail_progress_label" props={content: "Overall progress", tagName: "h3"}/></Container>
                  <Container id="pt_detail_progress_value_cell" style="height:auto; width:auto"><Text id="pt_detail_progress_value" props={content: "62% · 9 days to delivery", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_detail_progress_track_cell" style="height:10px; width:100%">
                <Container id="pt_detail_progress_fill" style="height:100%; width:62%"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- Task list -->
          <Container id="pt_detail_tasks_card" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_tasks_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="pt_detail_tasks_title_cell" style="height:auto; width:100%"><Text id="pt_detail_tasks_title" props={content: "Task list", tagName: "h3"}/></Container>
              <Container id="pt_task_1_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_1_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_1_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_1_text_cell" style="height:auto; width:auto"><Text id="pt_task_1_text" props={content: "Home IA review (done)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_2_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_2_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_2_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_2_text_cell" style="height:auto; width:auto"><Text id="pt_task_2_text" props={content: "Design tokens migrated to v2.4 (done)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_3_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_3_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_3_icon" props={iconName: "CircleEllipsis", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_3_text_cell" style="height:auto; width:auto"><Text id="pt_task_3_text" props={content: "Offline mode integration (in progress · Sophie Su)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_4_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_4_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_4_icon" props={iconName: "Circle", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_4_text_cell" style="height:auto; width:auto"><Text id="pt_task_4_text" props={content: "Performance workstream (not started · Ryan Lu)", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <Container id="pt_detail_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
            <FlexContainer id="pt_detail_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="pt_detail_back_btn_cell" style="height:auto; width:auto"><Button id="pt_detail_back_btn" props={content: "Back to workspace", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
              <Container id="pt_detail_update_cell" style="height:auto; width:auto"><Button id="pt_detail_update_btn" props={content: "Update progress", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @pt_detail_back_cell = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @pt_detail_back_btn = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @pt_detail_update_btn = {
        events: { update: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Progress updated to 62% (demo)"}) } }
      };
    </script>
    <styles>
      @pt_detail_root = { background: #f5f7fa; }
      @pt_detail_back_icon = { color: #64748b; font-size: 18px; }
      @pt_detail_back_text = { color: #64748b; font-size: 13px; font-weight: 600; cursor: pointer; }
      @pt_detail_title = { color: #0f172a; font-size: 28px; font-weight: 900; letter-spacing: -0.6px; }
      @pt_detail_tag = { background-color: #dbeafe; color: #1d4ed8; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @pt_detail_member_1 = { background-color: #6366f1; color: #ffffff; font-size: 12px; }
      @pt_detail_member_2 = { background-color: #0ea5e9; color: #ffffff; font-size: 12px; }
      @pt_detail_member_3 = { background-color: #f59e0b; color: #ffffff; font-size: 12px; }
      @pt_detail_progress_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @pt_detail_progress_label = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @pt_detail_progress_value = { color: #64748b; font-size: 13px; font-weight: 600; }
      @pt_detail_progress_track_cell = { background: #e2e8f0; border-radius: 999px; }
      @pt_detail_progress_fill = { background: linear-gradient(90deg, #6366f1 0%, #0ea5e9 100%); border-radius: 999px; }
      @pt_detail_tasks_card = { background: #ffffff; border-radius: 14px; box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04); }
      @pt_detail_tasks_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @pt_task_1_icon = { color: #10b981; font-size: 18px; }
      @pt_task_2_icon = { color: #10b981; font-size: 18px; }
      @pt_task_3_icon = { color: #f59e0b; font-size: 18px; }
      @pt_task_4_icon = { color: #cbd5e1; font-size: 18px; }
      @pt_task_1_text = { color: #94a3b8; font-size: 14px; }
      @pt_task_2_text = { color: #94a3b8; font-size: 14px; }
      @pt_task_3_text = { color: #0f172a; font-size: 14px; font-weight: 600; }
      @pt_task_4_text = { color: #334155; font-size: 14px; }
      @pt_detail_back_btn = {
        color: #334155;
        background: #ffffff;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        :scope { border: 1px solid #e2e8f0; transition: border-color 0.2s ease; }
        :scope:hover { border-color: #94a3b8; }
      }
      @pt_detail_update_btn = {
        color: #ffffff;
        background: #6366f1;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4f46e5; }
      }
    </styles>
  </Page>
</App>
```

> Craft notes: the core of a clickable prototype is the **link chain** (submit → workspace; stat card /
> project row / back → project detail); container-level onClick (`nav.to`) is what makes a whole card
> clickable; everything else stays thin — a prototype is not a finished page.

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** This template is a *fluid* layout (no fixed board),
so the re-typesetting work sits in the two places where English is genuinely longer than Chinese: the
sign-in card (a hard 420px box) and the single-line labels that share a row with something else.

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `pt_login_sub` | `line-height: 1.8` | **1.7** | "Sign in to Cloudgate and pick up where your team left off." is ~57 Latin glyphs against 22 CJK chars, so it wraps to two lines in the 348px card measure; CJK leading is not needed for Latin |
| `pt_login_title` | 30px / `-0.8px` | 30px / `-0.8px` (kept) | "Welcome back" is ~180px of ink in a 348px box — no reason to shrink it; mild negative tracking is already the right setting for heavy Latin display type (same call as `app-dashboard` / `app-settings`) |
| stat card labels | 13px | 13px (kept) | "Active projects" / "Awaiting review" are ~108px in a 272px card measure; the English names were kept to two words so they still sit on one line over the 34px figures |
| recent-row meta | 12px | 12px (kept) | "6 tasks in flight · updated 2 hours ago" is ~236px against the 900px row measure — it never approaches the status tag |
| detail task lines | 14px | 14px (kept) | even the longest ("Performance workstream (not started · Ryan Lu)", ~330px with the icon) has ~480px of headroom in the 812px card |
| `pt_detail_progress_value` | `62% · 距交付还有 9 天` | `62% · 9 days to delivery` | re-expressed so the whole status stays one line; the `62%` figure itself and the bar's `width:62%` are unchanged |

Everything else — the fluid column measures (420 / 980 / 860px), card radii, shadows, gaps, tag
colours, the three pages' `route`s and every `nav.to` target (`/`, `/home`, `/detail`) — is
language-neutral and untouched.

**Copy policy**: not a literal translation, and not a literal transliteration either. The fictional
brand `云扉协同` becomes **Cloudgate**; `阿澈` → **Alex** and the member chars `澈 / 满 / 远` become the
initials **A / M / R** (the avatar convention `app-dashboard` already uses — a two-glyph CJK name does
not survive as a single Latin letter, so the initial is carried instead), with `苏晴` → **Sophie Su**
and `陆远` → **Ryan Lu** on the task lines. `移动端 3.0 改版` → "Mobile 3.0 Redesign",
`数据看板 2.0` → "Analytics Dashboard 2.0", `帮助中心迁移` → "Help Center Migration";
`归档于 9 月 8 日` → "archived 8 Sep" (day-month order, no year, as a UI timestamp). The two
`nav.to` events and the `feedback.show` message are translated but functionally identical.

**Verified in the running app, not assumed.** The link chain was clicked through end to end: the
sign-in button → `#/home`; a click **inside the stat card's padding** (a point 14px in from its
corner, deliberately not on a child element) → `#/detail`; the back row → `#/home`; the first recent
row → `#/detail`; and "Update progress" raises the success toast reading "Progress updated to 62%
(demo)". A leaf-level scan of all three pages (5 / 30 / 12 text nodes) finds no overflow and exactly
one intended wrap — `pt_login_sub`, the sentence that takes two lines in the 348px card measure. Every
other English label stays on one line, including the longest ("Performance workstream (not started ·
Ryan Lu)").

**No structural refactor was needed.** Nothing in the Chinese document is a CJK-only construct (no
big-glyph + Latin-gloss pairing, no fullwidth punctuation), so every node id survives unchanged and
the two documents are the same scene — tooling (the thumbnail pipeline, the showcase preview) can
address either one by the same selectors. With comments stripped, the two lang blocks differ in 48
lines: 47 of copy plus the single `@pt_login_sub` leading change above. The three `route`s, both
`nav.to` targets and the `feedback.show` payload are functionally identical.
