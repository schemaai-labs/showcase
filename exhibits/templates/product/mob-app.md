# 移动端应用（多页） — 「乐动 FitRun」运动健身 App

> 模板定位（产品 / 应用 tab · 移动端）：移动端应用三页标准骨架——onboarding 引导 → 首页工作台 → 课程详情，页间 `nav.to` 路由跳转，底部标签栏。
> 场景需求：给运动健身 App 做移动端界面：① 引导页（品牌图标 + 大标题 + 三条特性 + 开始按钮，首屏入场编排）；② 首页（问候栏 + 今日步数目标卡含进度条 + 四个运动快捷入口 + 推荐课程列表 + 底部标签栏）；③ 课程详情（返回导航 + 渐变色头图 + 标题标签 + 简介 + 训练要点 + 底部吸底开始训练）。手机宽度居中（430px 内容列），静态数据零 API。

```lang
<App dsl-version="0.3" name="乐动 FitRun">
  <!-- ══════════════ 1. 引导页 ══════════════ -->
  <Page id="onboarding" name="引导" route="/">
    <FlexContainer id="ob_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="ob_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; position:relative; align-items:stretch">
        <Container id="ob_hero_region" style="flex-grow:1; height:auto; width:100%; position:relative; overflow:hidden">
          <Animate id="ob_reveal" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 110, duration: "slow"} style="height:auto; width:100%; align-items:center; gap:18px; padding:72px 28px 40px">
            <Container id="ob_logo_cell" style="height:auto; width:auto">
              <Icon id="ob_logo" props={iconName: "Activity", iconSource: "lucide"}/>
            </Container>
            <Container id="ob_title_cell" style="height:auto; width:100%">
              <Text id="ob_title" props={content: "今天，动起来", tagName: "h1"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ob_sub_cell" style="height:auto; width:100%">
              <Text id="ob_sub" props={content: "每天 20 分钟，跟着教练完成一节训练课——你的身体会记得每一滴汗。", tagName: "p"} style="height:auto; width:100%"/>
            </Container>
            <Container id="ob_feature_1_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_1_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_1_icon" props={iconName: "Target", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_1_text_cell" style="height:auto; width:auto"><Text id="ob_feature_1_text" props={content: "按体能定制的训练计划", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_feature_2_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_2_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_2_icon" props={iconName: "Flame", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_2_text_cell" style="height:auto; width:auto"><Text id="ob_feature_2_text" props={content: "实时心率与卡路里追踪", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_feature_3_cell" style="height:auto; width:100%">
              <FlexContainer id="ob_feature_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:12px">
                <Container id="ob_feature_3_icon_cell" style="height:auto; width:auto"><Icon id="ob_feature_3_icon" props={iconName: "Users", iconSource: "lucide"}/></Container>
                <Container id="ob_feature_3_text_cell" style="height:auto; width:auto"><Text id="ob_feature_3_text" props={content: "跟 320 万伙伴一起坚持", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="ob_cta_cell" style="height:auto; width:100%; padding-top:16px">
              <Button id="ob_cta" props={content: "开始使用", variant: "primary"} style="height:auto; width:100%; padding:14px 0px"/>
            </Container>
            <Container id="ob_login_cell" style="height:auto; width:100%; padding-top:4px">
              <Text id="ob_login" props={content: "已有账号？直接登录", tagName: "span"} style="height:auto; width:100%"/>
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
      @ob_title = { color: #0f172a; font-size: 40px; font-weight: 900; letter-spacing: -1.5px; text-align: center; }
      @ob_sub = { color: #64748b; font-size: 15px; line-height: 1.9; text-align: center; }
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

  <!-- ══════════════ 2. 首页 ══════════════ -->
  <Page id="home" name="首页" route="/home">
    <FlexContainer id="hm_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="hm_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; align-items:stretch">

        <!-- 问候栏 -->
        <Container id="hm_greet_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:22px 20px 12px">
          <FlexContainer id="hm_greet_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="hm_greet_left_cell" style="height:auto; width:auto">
              <FlexContainer id="hm_greet_left_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:12px">
                <Container id="hm_avatar_cell" style="height:auto; width:auto"><Avatar id="hm_avatar" props={text: "澈", shape: "circle"} style="height:42px; width:42px"/></Container>
                <Container id="hm_greet_text_cell" style="height:auto; width:auto">
                  <FlexContainer id="hm_greet_text_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                    <Container id="hm_greet_title_cell" style="height:auto; width:auto"><Text id="hm_greet_title" props={content: "早上好，阿澈", tagName: "h3"}/></Container>
                    <Container id="hm_greet_sub_cell" style="height:auto; width:auto"><Text id="hm_greet_sub" props={content: "今天也要元气满满", tagName: "span"}/></Container>
                  </FlexContainer>
                </Container>
              </FlexContainer>
            </Container>
            <Container id="hm_bell_cell" style="height:auto; width:auto"><Icon id="hm_bell" props={iconName: "Bell", iconSource: "lucide"}/></Container>
          </FlexContainer>
        </Container>

        <!-- 今日目标卡 -->
        <Container id="hm_goal_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:8px 20px 16px">
          <Container id="hm_goal_card" style="height:auto; width:100%">
            <FlexContainer id="hm_goal_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px; padding:22px 22px">
              <Container id="hm_goal_head_cell" style="height:auto; width:100%">
                <FlexContainer id="hm_goal_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                  <Container id="hm_goal_label_cell" style="height:auto; width:auto"><Text id="hm_goal_label" props={content: "今日步数", tagName: "span"}/></Container>
                  <Container id="hm_goal_rate_cell" style="height:auto; width:auto"><Text id="hm_goal_rate" props={content: "68%", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hm_goal_value_cell" style="height:auto; width:100%"><Text id="hm_goal_value" props={content: "6,832", tagName: "h2"}/></Container>
              <Container id="hm_goal_target_cell" style="height:auto; width:100%"><Text id="hm_goal_target" props={content: "目标 10,000 步 · 还差 3,168 步", tagName: "span"}/></Container>
              <Container id="hm_goal_progress_cell" style="height:8px; width:100%">
                <Container id="hm_goal_progress_fill" style="height:100%; width:68%"/>
              </Container>
            </FlexContainer>
          </Container>
        </Container>

        <!-- 快捷入口 -->
        <Container id="hm_quick_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:8px 20px 8px">
          <FlexContainer id="hm_quick_row" props={direction: "row"} style="height:auto; width:100%; align-items:stretch; gap:12px">
            <Container id="hm_quick_run_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_run_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_run_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_run_icon" props={iconName: "Footprints", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_run_text_cell" style="height:auto; width:auto"><Text id="hm_quick_run_text" props={content: "跑步", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_bike_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_bike_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_bike_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_bike_icon" props={iconName: "Bike", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_bike_text_cell" style="height:auto; width:auto"><Text id="hm_quick_bike_text" props={content: "骑行", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_yoga_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_yoga_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_yoga_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_yoga_icon" props={iconName: "HeartPulse", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_yoga_text_cell" style="height:auto; width:auto"><Text id="hm_quick_yoga_text" props={content: "瑜伽", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_quick_strength_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_quick_strength_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:8px; padding:16px 8px">
                <Container id="hm_quick_strength_icon_cell" style="height:auto; width:auto"><Icon id="hm_quick_strength_icon" props={iconName: "Dumbbell", iconSource: "lucide"}/></Container>
                <Container id="hm_quick_strength_text_cell" style="height:auto; width:auto"><Text id="hm_quick_strength_text" props={content: "力量", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 推荐课程 -->
        <Container id="hm_course_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:14px 20px 24px">
          <FlexContainer id="hm_course_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="hm_course_head_cell" style="height:auto; width:100%">
              <FlexContainer id="hm_course_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; justify-content:space-between">
                <Container id="hm_course_title_cell" style="height:auto; width:auto"><Text id="hm_course_title" props={content: "推荐课程", tagName: "h3"}/></Container>
                <Container id="hm_course_more_cell" style="height:auto; width:auto"><Text id="hm_course_more" props={content: "查看全部", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_course_list_cell" style="height:auto; width:100%">
              <List id="hm_course_list" props={dataSource: [{name: "全身燃脂 HIIT", meta: "20 分钟 · 中级 · 无器械"}, {name: "晨间唤醒拉伸", meta: "12 分钟 · 初级 · 垫上"}, {name: "核心力量强化", meta: "18 分钟 · 中级 · 哑铃"}], direction: "vertical", gap: "12px"} style="height:auto; width:100%">
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

        <!-- 底部标签栏（吸底） -->
        <Container id="hm_tabbar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; bottom:0px; z-index:20">
          <FlexContainer id="hm_tabbar_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:10px 20px 16px">
            <Container id="hm_tab_home_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_home_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_home_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_home_icon" props={iconName: "House", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_home_text_cell" style="height:auto; width:auto"><Text id="hm_tab_home_text" props={content: "首页", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_tab_course_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_course_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_course_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_course_icon" props={iconName: "Dumbbell", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_course_text_cell" style="height:auto; width:auto"><Text id="hm_tab_course_text" props={content: "训练", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="hm_tab_me_cell" style="flex-basis:0; flex-grow:1; height:auto; width:100%">
              <FlexContainer id="hm_tab_me_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:4px">
                <Container id="hm_tab_me_icon_cell" style="height:auto; width:auto"><Icon id="hm_tab_me_icon" props={iconName: "CircleUserRound", iconSource: "lucide"}/></Container>
                <Container id="hm_tab_me_text_cell" style="height:auto; width:auto"><Text id="hm_tab_me_text" props={content: "我的", tagName: "span"}/></Container>
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

  <!-- ══════════════ 3. 课程详情 ══════════════ -->
  <Page id="workout" name="课程详情" route="/workout">
    <FlexContainer id="wk_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto; align-items:center">
      <FlexContainer id="wk_shell" props={direction: "column"} style="width:100%; max-width:430px; min-height:100vh; height:auto; align-items:stretch">

        <!-- 导航 -->
        <Container id="wk_nav" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:18px 20px 10px">
          <FlexContainer id="wk_nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
            <Container id="wk_back_cell" style="height:auto; width:auto"><Icon id="wk_back" props={iconName: "ChevronLeft", iconSource: "lucide"}/></Container>
            <Container id="wk_nav_title_cell" style="height:auto; width:auto"><Text id="wk_nav_title" props={content: "课程详情", tagName: "h3"}/></Container>
            <Container id="wk_share_cell" style="height:auto; width:auto"><Icon id="wk_share" props={iconName: "Share2", iconSource: "lucide"}/></Container>
          </FlexContainer>
        </Container>

        <!-- 头图 -->
        <Container id="wk_hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:6px 20px 0px">
          <Container id="wk_hero_visual" style="height:190px; width:100%; align-items:center; justify-content:center">
            <Icon id="wk_hero_icon" props={iconName: "Flame", iconSource: "lucide"}/>
          </Container>
        </Container>

        <!-- 标题与标签 -->
        <Container id="wk_info_region" style="flex-grow:1; flex-shrink:0; height:auto; width:100%; padding:18px 20px 20px">
          <FlexContainer id="wk_info_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:14px">
            <Container id="wk_title_cell" style="height:auto; width:100%"><Text id="wk_title" props={content: "全身燃脂 HIIT · 20 分钟", tagName: "h2"} style="height:auto; width:100%"/>
            </Container>
            <Container id="wk_tags_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_tags_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                <Container id="wk_tag_time_cell" style="height:auto; width:auto"><Tag id="wk_tag_time" props={text: "20 分钟", color: "green"}/></Container>
                <Container id="wk_tag_level_cell" style="height:auto; width:auto"><Tag id="wk_tag_level" props={text: "中级", color: "orange"}/></Container>
                <Container id="wk_tag_gear_cell" style="height:auto; width:auto"><Tag id="wk_tag_gear" props={text: "无器械", color: "blue"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_desc_cell" style="height:auto; width:100%"><Text id="wk_desc" props={content: "跟随节奏完成四组全身循环：开合跳唤醒 + 深蹲提臀 + 波比跳冲刺 + 核心收尾。每组间歇 20 秒，全程有语音节拍提示。", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="wk_points_title_cell" style="height:auto; width:100%; padding-top:6px"><Text id="wk_points_title" props={content: "训练要点", tagName: "h3"}/></Container>
            <Container id="wk_point_1_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_1_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_1_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_1_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_1_text_cell" style="height:auto; width:auto"><Text id="wk_point_1_text" props={content: "动作间保持呼吸节奏，不要憋气", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_point_2_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_2_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_2_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_2_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_2_text_cell" style="height:auto; width:auto"><Text id="wk_point_2_text" props={content: "膝盖不适时用半程深蹲替代跳跃动作", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_point_3_cell" style="height:auto; width:100%">
              <FlexContainer id="wk_point_3_row" props={direction: "row"} style="height:auto; width:100%; align-items:flex-start; gap:10px">
                <Container id="wk_point_3_icon_cell" style="height:auto; width:auto"><Icon id="wk_point_3_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                <Container id="wk_point_3_text_cell" style="height:auto; width:auto"><Text id="wk_point_3_text" props={content: "结束后拉伸 3 分钟，避免第二天酸痛", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
          </FlexContainer>
        </Container>

        <!-- 吸底行动栏 -->
        <Container id="wk_action_bar" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; bottom:0px; z-index:20">
          <FlexContainer id="wk_action_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:12px 20px 18px">
            <Container id="wk_action_meta_cell" style="height:auto; width:auto">
              <FlexContainer id="wk_action_meta_col" props={direction: "column"} style="height:auto; width:auto; align-items:flex-start; gap:2px">
                <Container id="wk_action_kcal_cell" style="height:auto; width:auto"><Text id="wk_action_kcal" props={content: "预计消耗 220 千卡", tagName: "span"}/></Container>
                <Container id="wk_action_level_cell" style="height:auto; width:auto"><Text id="wk_action_level" props={content: "含热身与拉伸 · 全流程 24 分钟", tagName: "span"}/></Container>
              </FlexContainer>
            </Container>
            <Container id="wk_start_cell" style="height:auto; width:auto; flex-shrink:0"><Button id="wk_start_btn" props={content: "开始训练", variant: "primary"} style="height:auto; width:auto; padding:12px 34px"/></Container>
          </FlexContainer>
        </Container>
      </FlexContainer>
    </FlexContainer>
    <script>
      @wk_back_cell = { events: { goBack: { trigger: "onClick", action: nav.to("/home") } } };
      @wk_start_btn = {
        events: { startWorkout: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "训练已开始：跟着节拍完成第一组"}) } }
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
      @wk_desc = { color: #475569; font-size: 14px; line-height: 1.9; }
      @wk_points_title = { color: #0f172a; font-size: 16px; font-weight: 800; }
      @wk_point_1_icon = { color: #10b981; font-size: 18px; }
      @wk_point_2_icon = { color: #10b981; font-size: 18px; }
      @wk_point_3_icon = { color: #10b981; font-size: 18px; }
      @wk_point_1_text = { color: #334155; font-size: 14px; line-height: 1.8; }
      @wk_point_2_text = { color: #334155; font-size: 14px; line-height: 1.8; }
      @wk_point_3_text = { color: #334155; font-size: 14px; line-height: 1.8; }
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

> 制作要点：三页应用 = 每页自带头部 + `nav.to` 路由跳转（引导 → 首页 → 详情）；手机宽度内容列（`max-width:430px` 居中）；底部标签栏与行动栏用 `position:sticky; bottom:0` 吸底（零 JS 也保持布局）；课程列表为 List 数据驱动；仅引导页一组入场编排（折叠面零动效）。
