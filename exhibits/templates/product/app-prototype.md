# 可点击原型（多页流程） — 「云扉协同」登录 → 工作台 → 详情

> 模板定位（产品 / 应用 tab · 原型，P2）：可点击原型——三页跳转链（登录 → 工作台 → 项目详情），页面间 `nav.to` 路由；卡片整体可点（container onClick）。
> 场景需求：给虚构协同产品做流程原型：① 登录页（居中卡片：邮箱 / 密码 / 登录按钮）；② 工作台（问候行 + 三张可点统计卡 + 最近项目列表）；③ 项目详情（返回 / 项目标题状态 / 进度条 / 成员 / 任务清单 / 更新进度）。重点是**跳转链路可点走通**，内容从简。

```lang
<App dsl-version="0.3" name="云扉协同 · 可点击原型">
  <!-- ══════════════ 1. 登录页 ══════════════ -->
  <Page id="login" name="登录" route="/">
    <FlexContainer id="pt_login_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center; justify-content:center">
      <FlexContainer id="pt_login_frame" props={direction: "column"} style="height:auto; width:100%; align-items:center; justify-content:center; padding:48px 24px; position:relative">
      <Container id="pt_login_card" style="height:auto; width:100%; max-width:420px; flex-shrink:0">
        <FlexContainer id="pt_login_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:20px; padding:40px 36px">
          <Container id="pt_login_logo_cell" style="height:auto; width:auto"><Icon id="pt_login_logo" props={iconName: "Layers", iconSource: "lucide"}/></Container>
          <Container id="pt_login_title_cell" style="height:auto; width:100%"><Text id="pt_login_title" props={content: "欢迎回来", tagName: "h1"} style="height:auto; width:100%"/></Container>
          <Container id="pt_login_sub_cell" style="height:auto; width:100%"><Text id="pt_login_sub" props={content: "登录云扉协同，继续你团队的协作空间。", tagName: "p"} style="height:auto; width:100%"/></Container>
          <Container id="pt_login_email_cell" style="height:auto; width:100%">
            <Input id="pt_login_email" props={placeholder: "工作邮箱"} style="height:auto; width:100%"/>
          </Container>
          <Container id="pt_login_password_cell" style="height:auto; width:100%">
            <Input id="pt_login_password" props={placeholder: "密码"} style="height:auto; width:100%"/>
          </Container>
          <Container id="pt_login_submit_cell" style="height:auto; width:100%; padding-top:4px">
            <Button id="pt_login_submit" props={content: "登录并进入工作台", variant: "primary"} style="height:auto; width:100%; padding:12px 0px"/>
          </Container>
          <Container id="pt_login_hint_cell" style="height:auto; width:100%">
            <Text id="pt_login_hint" props={content: "演示原型：点击登录即可进入下一页", tagName: "span"} style="height:auto; width:100%"/>
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
      @pt_login_sub = { color: #64748b; font-size: 14px; line-height: 1.8; text-align: center; }
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

  <!-- ══════════════ 2. 工作台 ══════════════ -->
  <Page id="home" name="工作台" route="/home">
    <FlexContainer id="pt_home_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">
      <Container id="pt_home_header" style="flex-shrink:0; flex-grow:0; height:64px; width:100%">
        <FlexContainer id="pt_home_header_row" props={direction: "row"} style="height:100%; width:100%; align-items:center; justify-content:space-between; padding:0px 24px">
          <Container id="pt_home_brand_cell" style="height:auto; width:auto">
            <FlexContainer id="pt_home_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:9px">
              <Container id="pt_home_brand_icon_cell" style="height:auto; width:auto"><Icon id="pt_home_brand_icon" props={iconName: "Layers", iconSource: "lucide"}/></Container>
              <Container id="pt_home_brand_text_cell" style="height:auto; width:auto"><Text id="pt_home_brand_text" props={content: "云扉协同", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="pt_home_avatar_cell" style="height:auto; width:auto"><Avatar id="pt_home_avatar" props={text: "澈", shape: "circle"} style="height:34px; width:34px"/></Container>
        </FlexContainer>
      </Container>

      <Container id="pt_home_body" style="flex-grow:1; height:auto; width:100%; padding:20px 24px 48px">
        <FlexContainer id="pt_home_col" props={direction: "column"} style="height:auto; width:100%; max-width:980px; margin-left:auto; margin-right:auto; align-items:stretch; gap:18px">
          <Container id="pt_home_greet_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_home_greet_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:4px">
              <Container id="pt_home_greet_title_cell" style="height:auto; width:auto"><Text id="pt_home_greet_title" props={content: "下午好，阿澈", tagName: "h2"}/></Container>
              <Container id="pt_home_greet_sub_cell" style="height:auto; width:auto"><Text id="pt_home_greet_sub" props={content: "今天有 2 项交付到期，1 个项目等待你的评审。", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>

          <!-- 可点统计卡（→ 项目详情） -->
          <Container id="pt_home_stats_row_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_home_stats_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:16px">
              <Container id="pt_stat_projects_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_projects_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_projects_label_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_label" props={content: "进行中项目", tagName: "span"}/></Container>
                  <Container id="pt_stat_projects_value_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_value" props={content: "4", tagName: "h2"}/></Container>
                  <Container id="pt_stat_projects_note_cell" style="height:auto; width:100%"><Text id="pt_stat_projects_note" props={content: "本周新增 1 个", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_stat_delivery_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_delivery_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_delivery_label_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_label" props={content: "本周交付", tagName: "span"}/></Container>
                  <Container id="pt_stat_delivery_value_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_value" props={content: "2", tagName: "h2"}/></Container>
                  <Container id="pt_stat_delivery_note_cell" style="height:auto; width:100%"><Text id="pt_stat_delivery_note" props={content: "均为周五前截止", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_stat_review_card" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
                <FlexContainer id="pt_stat_review_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:8px; padding:20px 22px">
                  <Container id="pt_stat_review_label_cell" style="height:auto; width:100%"><Text id="pt_stat_review_label" props={content: "待我评审", tagName: "span"}/></Container>
                  <Container id="pt_stat_review_value_cell" style="height:auto; width:100%"><Text id="pt_stat_review_value" props={content: "6", tagName: "h2"}/></Container>
                  <Container id="pt_stat_review_note_cell" style="height:auto; width:100%"><Text id="pt_stat_review_note" props={content: "含 1 条加急", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 最近项目 -->
          <Container id="pt_home_recent_card" style="height:auto; width:100%">
            <FlexContainer id="pt_home_recent_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="pt_home_recent_title_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_home_recent_title_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="pt_home_recent_title_text_cell" style="height:auto; width:auto"><Text id="pt_home_recent_title" props={content: "最近项目", tagName: "h3"}/></Container>
                  <Container id="pt_home_recent_hint_cell" style="height:auto; width:auto"><Text id="pt_home_recent_hint" props={content: "点击任意行进入项目详情", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_1_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_1_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_1_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_1_name_cell" style="height:auto; width:auto"><Text id="pt_recent_1_name" props={content: "移动端 3.0 改版", tagName: "span"}/></Container>
                      <Container id="pt_recent_1_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_1_meta" props={content: "6 个任务进行中 · 更新于 2 小时前", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_1_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_1_tag" props={text: "进行中", color: "blue"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_2_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_2_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_2_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_2_name_cell" style="height:auto; width:auto"><Text id="pt_recent_2_name" props={content: "数据看板 2.0", tagName: "span"}/></Container>
                      <Container id="pt_recent_2_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_2_meta" props={content: "等待评审 · 更新于昨天", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_2_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_2_tag" props={text: "待评审", color: "gold"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_recent_3_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_recent_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 16px">
                  <Container id="pt_recent_3_text_cell" style="height:auto; width:auto">
                    <FlexContainer id="pt_recent_3_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:4px">
                      <Container id="pt_recent_3_name_cell" style="height:auto; width:auto"><Text id="pt_recent_3_name" props={content: "帮助中心迁移", tagName: "span"}/></Container>
                      <Container id="pt_recent_3_meta_cell" style="height:auto; width:auto"><Text id="pt_recent_3_meta" props={content: "已完成 · 归档于 9 月 8 日", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="pt_recent_3_tag_cell" style="height:auto; width:auto"><Tag id="pt_recent_3_tag" props={text: "已完成", color: "green"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      # 原型跳转链：统计卡 / 项目行 → 详情页
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

  <!-- ══════════════ 3. 项目详情 ══════════════ -->
  <Page id="detail" name="项目详情" route="/detail">
    <FlexContainer id="pt_detail_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">
      <Container id="pt_detail_body" style="flex-grow:1; height:auto; width:100%; padding:28px 24px 56px">
        <FlexContainer id="pt_detail_col" props={direction: "column"} style="height:auto; width:100%; max-width:860px; margin-left:auto; margin-right:auto; align-items:stretch; gap:18px">

          <Container id="pt_detail_back_cell" style="height:auto; width:auto">
            <FlexContainer id="pt_detail_back_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
              <Container id="pt_detail_back_icon_cell" style="height:auto; width:auto"><Icon id="pt_detail_back_icon" props={iconName: "ChevronLeft", iconSource: "lucide"}/></Container>
              <Container id="pt_detail_back_text_cell" style="height:auto; width:auto"><Text id="pt_detail_back_text" props={content: "返回工作台", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>

          <Container id="pt_detail_head_cell" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
              <Container id="pt_detail_head_left_cell" style="height:auto; width:auto">
                <FlexContainer id="pt_detail_head_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                  <Container id="pt_detail_title_cell" style="height:auto; width:auto"><Text id="pt_detail_title" props={content: "移动端 3.0 改版", tagName: "h1"}/></Container>
                  <Container id="pt_detail_tag_cell" style="height:auto; width:auto"><Tag id="pt_detail_tag" props={text: "进行中", color: "blue"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_detail_members_cell" style="height:auto; width:auto">
                <FlexContainer id="pt_detail_members_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:6px">
                  <Container id="pt_detail_member_1_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_1" props={text: "澈", shape: "circle"} style="height:30px; width:30px"/></Container>
                  <Container id="pt_detail_member_2_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_2" props={text: "满", shape: "circle"} style="height:30px; width:30px"/></Container>
                  <Container id="pt_detail_member_3_cell" style="height:auto; width:auto"><Avatar id="pt_detail_member_3" props={text: "远", shape: "circle"} style="height:30px; width:30px"/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 进度卡 -->
          <Container id="pt_detail_progress_card" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_progress_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:12px; padding:22px 24px">
              <Container id="pt_detail_progress_head_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_detail_progress_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="pt_detail_progress_label_cell" style="height:auto; width:auto"><Text id="pt_detail_progress_label" props={content: "整体进度", tagName: "h3"}/></Container>
                  <Container id="pt_detail_progress_value_cell" style="height:auto; width:auto"><Text id="pt_detail_progress_value" props={content: "62% · 距交付还有 9 天", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_detail_progress_track_cell" style="height:10px; width:100%">
                <Container id="pt_detail_progress_fill" style="height:100%; width:62%"/>
              </Container>
            </FlexContainer>
          </Container>

          <!-- 任务清单 -->
          <Container id="pt_detail_tasks_card" style="height:auto; width:100%">
            <FlexContainer id="pt_detail_tasks_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 24px">
              <Container id="pt_detail_tasks_title_cell" style="height:auto; width:100%"><Text id="pt_detail_tasks_title" props={content: "任务清单", tagName: "h3"}/></Container>
              <Container id="pt_task_1_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_1_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_1_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_1_text_cell" style="height:auto; width:auto"><Text id="pt_task_1_text" props={content: "首页信息架构评审（已完成）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_2_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_2_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_2_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_2_text_cell" style="height:auto; width:auto"><Text id="pt_task_2_text" props={content: "设计令牌迁移到 v2.4（已完成）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_3_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_3_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_3_icon" props={iconName: "CircleEllipsis", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_3_text_cell" style="height:auto; width:auto"><Text id="pt_task_3_text" props={content: "离线模式联调（进行中 · 苏晴）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="pt_task_4_cell" style="height:auto; width:100%">
                <FlexContainer id="pt_task_4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                  <Container id="pt_task_4_icon_cell" style="height:auto; width:auto"><Icon id="pt_task_4_icon" props={iconName: "Circle", iconSource: "lucide"}/></Container>
                  <Container id="pt_task_4_text_cell" style="height:auto; width:auto"><Text id="pt_task_4_text" props={content: "性能优化专项（未开始 · 陆远）", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>

          <Container id="pt_detail_actions_cell" style="height:auto; width:100%; justify-content:flex-end">
            <FlexContainer id="pt_detail_actions_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
              <Container id="pt_detail_back_btn_cell" style="height:auto; width:auto"><Button id="pt_detail_back_btn" props={content: "回到工作台", variant: "default"} style="height:auto; width:auto; padding:9px 22px"/></Container>
              <Container id="pt_detail_update_cell" style="height:auto; width:auto"><Button id="pt_detail_update_btn" props={content: "更新进度", variant: "primary"} style="height:auto; width:auto; padding:9px 24px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>
    </FlexContainer>
    <script>
      @pt_detail_back_cell = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @pt_detail_back_btn = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @pt_detail_update_btn = {
        events: { update: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "进度已更新为 62%（演示）"}) } }
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

> 制作要点：可点击原型的核心是**跳转链**（登录按钮 → 工作台；统计卡/项目行/返回 → 详情）；容器级 onClick（`nav.to`）承载整卡可点；其余内容从简（原型不是成品页）。
