# SaaS Product Landing Page — "CloudPatrol" Inspection Platform

> Template role (marketing / growth tab): a conversion-oriented single-page site — hero entrance
> choreography + social proof + capability cards (revealed on view) + pricing tiers + FAQ + closing CTA.
> Scenario: a marketing landing page for a B2B SaaS that handles equipment inspection and maintenance
> coordination: deep indigo theme, a hero with a large headline, two CTAs and three animated counters
> (teams served / issue closure rate / average response), followed by a customer logo strip, four
> capability cards revealed as they enter the viewport, three pricing tiers (Pro recommended), an
> accordion FAQ, a gradient closing CTA, and a footer. Motion is limited to two orchestrations
> (hero onMount / capability cards onView). No API calls — purely static data.

```lang
<App dsl-version="0.3" name="CloudPatrol Product Site">
  <Page id="home" name="Home" route="/">
    <FlexContainer id="lp_root" props={direction: "column"} style="width:100%; min-height:100vh; height:auto">

      <!-- ─── 1. Nav (glass, sticky) ─── -->
      <Container id="nav_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:sticky; top:0px; z-index:50">
        <FlexContainer id="nav_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between; padding:14px 48px">
          <Container id="nav_brand_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nav_brand_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="nav_logo_cell" style="height:auto; width:auto">
                <Icon id="nav_logo" props={iconName: "ShieldCheck", iconSource: "lucide"}/>
              </Container>
              <Container id="nav_brand_text_cell" style="height:auto; width:auto">
                <Text id="nav_brand" props={content: "CloudPatrol", tagName: "span"}/>
              </Container>
            </FlexContainer>
          </Container>
          <Container id="nav_menu_cell" style="height:auto; width:auto; flex-shrink:0">
            <Anchor id="nav_menu" props={direction: "horizontal", affix: false} style="height:auto; width:auto">
              <Container id="nav_item_feature" props={itemLabel: "Capabilities", itemTarget: "feature_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_proof" props={itemLabel: "Customers", itemTarget: "proof_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_pricing" props={itemLabel: "Pricing", itemTarget: "pricing_region"} style="height:auto; width:auto"/>
              <Container id="nav_item_faq" props={itemLabel: "FAQ", itemTarget: "faq_region"} style="height:auto; width:auto"/>
            </Anchor>
          </Container>
          <Container id="nav_cta_cell" style="height:auto; width:auto; flex-shrink:0">
            <FlexContainer id="nav_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:18px; align-items:center">
              <Container id="nav_login_cell" style="height:auto; width:auto"><Text id="nav_login_txt" props={content: "Sign in", tagName: "span"}/></Container>
              <Container id="nav_trial_cell" style="height:auto; width:auto"><Button id="nav_trial_btn" props={content: "Start free", variant: "primary"} style="height:auto; width:auto; padding:8px 20px"/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 2. Hero (onMount choreography + counters) ─── -->
      <Container id="hero_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; position:relative; overflow:hidden">
        <Container id="hero_grid_cell" style="height:100%; width:100%; position:absolute; left:0px; top:0px; z-index:0"/>
        <Animate id="hero_reveal" props={direction: "column", effect: "fadeInUp", trigger: "onMount", stagger: 100, duration: "slow"} style="align-items:center; gap:22px; height:auto; width:100%; padding:84px 48px 88px; position:relative">
          <Container id="hero_eyebrow_cell" style="height:auto; width:auto">
            <Tag id="hero_eyebrow" props={text: "Inspection 3.0 is out — offline mode included", color: "blue"}/>
          </Container>
          <Container id="hero_title_cell" style="height:auto; width:100%">
            <Text id="hero_title" props={content: "Every inspection, on the record", tagName: "h1"} style="height:auto; width:100%"/>
          </Container>
          <Container id="hero_sub_cell" style="height:auto; width:760px; flex-shrink:0">
            <Text id="hero_sub" props={content: "Scan-check, report issues, dispatch work orders, watch the dashboard — turn the records scattered across paper forms and group chats into an auditable, analysable asset.", tagName: "p"} style="height:auto; width:100%"/>
          </Container>
          <Container id="hero_cta_cell" style="height:auto; width:auto; padding-top:8px">
            <FlexContainer id="hero_cta_row" props={direction: "row"} style="height:auto; width:auto; gap:16px; align-items:center">
              <Container id="hero_cta_primary_cell" style="height:auto; width:auto"><Button id="hero_cta_primary" props={content: "Start for free", variant: "primary"} style="height:auto; width:auto; padding:13px 30px"/></Container>
              <Container id="hero_cta_demo_cell" style="height:auto; width:auto"><Button id="hero_cta_demo" props={content: "Book a demo", variant: "default"} style="height:auto; width:auto; padding:13px 26px"/></Container>
            </FlexContainer>
          </Container>
          <Container id="hero_stats_cell" style="height:auto; width:100%; padding-top:30px">
            <FlexContainer id="hero_stats_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:72px">
              <Container id="hero_stat_teams_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_teams_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_teams_value_cell" style="height:auto; width:auto"><Text id="hero_stat_teams_value" props={content: "1200+", tagName: "h3"}/></Container>
                  <Container id="hero_stat_teams_label_cell" style="height:auto; width:auto"><Text id="hero_stat_teams_label" props={content: "teams on board", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hero_stat_div_1" style="height:44px; width:1px"/>
              <Container id="hero_stat_closed_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_closed_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_closed_value_cell" style="height:auto; width:auto"><Text id="hero_stat_closed_value" props={content: "98%", tagName: "h3"}/></Container>
                  <Container id="hero_stat_closed_label_cell" style="height:auto; width:auto"><Text id="hero_stat_closed_label" props={content: "issues closed", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="hero_stat_div_2" style="height:44px; width:1px"/>
              <Container id="hero_stat_response_cell" style="height:auto; width:auto">
                <FlexContainer id="hero_stat_response_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:4px">
                  <Container id="hero_stat_response_value_cell" style="height:auto; width:auto"><Text id="hero_stat_response_value" props={content: "3", tagName: "h3"}/></Container>
                  <Container id="hero_stat_response_label_cell" style="height:auto; width:auto"><Text id="hero_stat_response_label" props={content: "min to respond", tagName: "span"}/></Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </Animate>
      </Container>

      <!-- ─── 3. Customer strip ─── -->
      <Container id="proof_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:72px">
        <FlexContainer id="proof_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; align-items:center; gap:48px; padding:28px 48px">
          <Container id="proof_label_cell" style="height:auto; width:auto"><Text id="proof_label" props={content: "Trusted by teams at", tagName: "span"}/></Container>
          <Container id="proof_names_cell" style="height:auto; width:auto">
            <FlexContainer id="proof_names_row" props={direction: "row"} style="height:auto; width:auto; align-items:center; gap:36px">
              <Container id="proof_brand_huayun_cell" style="height:auto; width:auto"><Text id="proof_brand_huayun" props={content: "Huayun Mfg", tagName: "span"}/></Container>
              <Container id="proof_brand_nanfeng_cell" style="height:auto; width:auto"><Text id="proof_brand_nanfeng" props={content: "Nanfeng Estates", tagName: "span"}/></Container>
              <Container id="proof_brand_jidi_cell" style="height:auto; width:auto"><Text id="proof_brand_jidi" props={content: "Polar Energy", tagName: "span"}/></Container>
              <Container id="proof_brand_xunda_cell" style="height:auto; width:auto"><Text id="proof_brand_xunda" props={content: "Xunda Logistics", tagName: "span"}/></Container>
              <Container id="proof_brand_lanwan_cell" style="height:auto; width:auto"><Text id="proof_brand_lanwan" props={content: "Blue Bay Hotels", tagName: "span"}/></Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 4. Capability cards (revealed on view) ─── -->
      <Container id="feature_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:64px 48px 96px; scroll-margin-top:72px">
        <FlexContainer id="feature_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px">
          <Container id="feature_head_cell" style="height:auto; width:auto">
            <FlexContainer id="feature_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="feature_eyebrow_cell" style="height:auto; width:auto"><Text id="feature_eyebrow" props={content: "Capabilities", tagName: "span"}/></Container>
              <Container id="feature_title_cell" style="height:auto; width:auto"><Text id="feature_title" props={content: "One chain from the floor to the dashboard", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="feature_cards_cell" style="height:auto; width:100%; justify-content:center">
            <Animate id="feature_reveal" props={direction: "row", effect: "scaleIn", trigger: "onView", stagger: 90} style="height:auto; width:100%; max-width:1160px; justify-content:center; gap:24px">
              <Container id="feat_scan_cell" style="height:auto; width:276px; flex-shrink:0">
                <FlexContainer id="feat_scan_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_scan_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_scan_icon" props={iconName: "ScanLine", iconSource: "lucide"}/></Container>
                  <Container id="feat_scan_name_cell" style="height:auto; width:100%"><Text id="feat_scan_name" props={content: "Scan to inspect", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_scan_desc_cell" style="height:auto; width:100%"><Text id="feat_scan_desc" props={content: "Scan a checkpoint QR code and walk the checklist item by item. Photos are filed as evidence automatically.", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_loop_cell" style="height:auto; width:276px; flex-shrink:0">
                <FlexContainer id="feat_loop_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_loop_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_loop_icon" props={iconName: "CircleCheck", iconSource: "lucide"}/></Container>
                  <Container id="feat_loop_name_cell" style="height:auto; width:100%"><Text id="feat_loop_name" props={content: "Close the loop", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_loop_desc_cell" style="height:auto; width:100%"><Text id="feat_loop_desc" props={content: "Tag severity and owner on the spot. Every step is logged, and overdue items escalate on their own.", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_flow_cell" style="height:auto; width:276px; flex-shrink:0">
                <FlexContainer id="feat_flow_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_flow_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_flow_icon" props={iconName: "Zap", iconSource: "lucide"}/></Container>
                  <Container id="feat_flow_name_cell" style="height:auto; width:100%"><Text id="feat_flow_name" props={content: "Work orders", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_flow_desc_cell" style="height:auto; width:100%"><Text id="feat_flow_desc" props={content: "Turn an issue into a work order in one tap. Dispatch, accept and sign-off stay in sync, with SMS and email alerts.", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
              <Container id="feat_insight_cell" style="height:auto; width:276px; flex-shrink:0">
                <FlexContainer id="feat_insight_col" props={direction: "column"} style="height:auto; width:100%; align-items:flex-start; gap:14px; padding:32px 26px">
                  <Container id="feat_insight_icon_cell" style="height:46px; width:46px; flex-shrink:0"><Icon id="feat_insight_icon" props={iconName: "TrendingUp", iconSource: "lucide"}/></Container>
                  <Container id="feat_insight_name_cell" style="height:auto; width:100%"><Text id="feat_insight_name" props={content: "Insight", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="feat_insight_desc_cell" style="height:auto; width:100%"><Text id="feat_insight_desc" props={content: "Throughput, checkpoint pass rates and fault hotspots on one screen — so rosters and budgets follow the data.", tagName: "p"}/></Container>
                </FlexContainer>
              </Container>
            </Animate>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 5. Pricing (three tiers) ─── -->
      <Container id="pricing_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; scroll-margin-top:72px">
        <FlexContainer id="pricing_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:44px; padding:88px 48px 104px">
          <Container id="pricing_head_cell" style="height:auto; width:auto">
            <FlexContainer id="pricing_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="pricing_eyebrow_cell" style="height:auto; width:auto"><Text id="pricing_eyebrow" props={content: "Pricing", tagName: "span"}/></Container>
              <Container id="pricing_title_cell" style="height:auto; width:auto"><Text id="pricing_title" props={content: "Pick the tier that fits your team", tagName: "h2"}/></Container>
              <Container id="pricing_note_cell" style="height:auto; width:auto"><Text id="pricing_note" props={content: "Every tier includes a 14-day full-feature trial — it downgrades automatically, no charge", tagName: "p"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="pricing_cards_cell" style="height:auto; width:100%; justify-content:center">
            <FlexContainer id="pricing_row" props={direction: "row"} style="height:auto; width:100%; max-width:1120px; justify-content:center; align-items:stretch; gap:24px">
              <Container id="tier_starter_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_starter_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_starter_name_cell" style="height:auto; width:100%"><Text id="tier_starter_name" props={content: "Starter", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_starter_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_starter_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_starter_amount_cell" style="height:auto; width:auto"><Text id="tier_starter_amount" props={content: "$29", tagName: "h3"}/></Container>
                      <Container id="tier_starter_period_cell" style="height:auto; width:auto"><Text id="tier_starter_period" props={content: "/ mo · up to 10 seats", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_starter_desc_cell" style="height:auto; width:100%"><Text id="tier_starter_desc" props={content: "Get a small team running the routine.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_starter_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_starter_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_starter_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f1_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f1_text" props={content: "Scan checks + photo evidence", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_starter_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f2_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f2_text" props={content: "Issue reporting and tracking", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_starter_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_starter_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_starter_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_starter_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_starter_f3_text_cell" style="height:auto; width:auto"><Text id="tier_starter_f3_text" props={content: "Core dashboards", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_starter_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_starter_cta" props={content: "Start 14-day trial", variant: "default"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tier_pro_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_pro_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_pro_head_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_head_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; justify-content:space-between">
                      <Container id="tier_pro_name_cell" style="height:auto; width:auto"><Text id="tier_pro_name" props={content: "Pro", tagName: "h3"}/></Container>
                      <Container id="tier_pro_badge_cell" style="height:auto; width:auto"><Tag id="tier_pro_badge" props={text: "Most popular", color: "gold"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_pro_amount_cell" style="height:auto; width:auto"><Text id="tier_pro_amount" props={content: "$89", tagName: "h3"}/></Container>
                      <Container id="tier_pro_period_cell" style="height:auto; width:auto"><Text id="tier_pro_period" props={content: "/ mo · up to 50 seats", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_desc_cell" style="height:auto; width:100%"><Text id="tier_pro_desc" props={content: "Full coordination across crews and sites.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_pro_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_pro_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_pro_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f1_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f1_text" props={content: "Everything in Starter", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f2_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f2_text" props={content: "Full work-order workflow", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f3_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f3_text" props={content: "Roster and pass-rate analytics", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f4_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f4_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f4_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f4_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f4_text" props={content: "API access and SSO", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_pro_f5_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_pro_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_pro_f5_icon_cell" style="height:auto; width:auto"><Icon id="tier_pro_f5_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_pro_f5_text_cell" style="height:auto; width:auto"><Text id="tier_pro_f5_text" props={content: "Dedicated success manager", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_pro_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_pro_cta" props={content: "Go Pro now", variant: "primary"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
              <Container id="tier_ent_cell" style="height:auto; width:340px; flex-shrink:0">
                <FlexContainer id="tier_ent_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:18px; padding:34px 30px">
                  <Container id="tier_ent_name_cell" style="height:auto; width:100%"><Text id="tier_ent_name" props={content: "Enterprise", tagName: "h3"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_ent_price_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_ent_price_row" props={direction: "row"} style="height:auto; width:100%; align-items:baseline; gap:6px">
                      <Container id="tier_ent_amount_cell" style="height:auto; width:auto"><Text id="tier_ent_amount" props={content: "Custom", tagName: "h3"}/></Container>
                      <Container id="tier_ent_period_cell" style="height:auto; width:auto"><Text id="tier_ent_period" props={content: "unlimited · self-hosted option", tagName: "span"}/></Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_ent_desc_cell" style="height:auto; width:100%"><Text id="tier_ent_desc" props={content: "Group-level control and compliance.", tagName: "p"} style="height:auto; width:100%"/></Container>
                  <Container id="tier_ent_list_cell" style="height:auto; width:100%">
                    <FlexContainer id="tier_ent_list_col" props={direction: "column"} style="height:auto; width:100%; align-items:stretch; gap:10px">
                      <Container id="tier_ent_f1_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f1_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f1_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f1_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f1_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f1_text" props={content: "Everything in Pro", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f2_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f2_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f2_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f2_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f2_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f2_text" props={content: "Multi-org and data isolation", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f3_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f3_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f3_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f3_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f3_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f3_text" props={content: "Self-hosted or dedicated cloud", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f4_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f4_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f4_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f4_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f4_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f4_text" props={content: "SLA and quarterly reviews", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                      <Container id="tier_ent_f5_cell" style="height:auto; width:100%">
                        <FlexContainer id="tier_ent_f5_row" props={direction: "row"} style="height:auto; width:100%; align-items:center; gap:8px">
                          <Container id="tier_ent_f5_icon_cell" style="height:auto; width:auto"><Icon id="tier_ent_f5_icon" props={iconName: "Check", iconSource: "lucide"}/></Container>
                          <Container id="tier_ent_f5_text_cell" style="height:auto; width:auto"><Text id="tier_ent_f5_text" props={content: "On-site training and rollout", tagName: "span"}/></Container>
                        </FlexContainer>
                      </Container>
                    </FlexContainer>
                  </Container>
                  <Container id="tier_ent_cta_cell" style="height:auto; width:100%; padding-top:6px">
                    <Button id="tier_ent_cta" props={content: "Talk to sales", variant: "default"} style="height:auto; width:100%; padding:11px 0px"/>
                  </Container>
                </FlexContainer>
              </Container>
            </FlexContainer>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 6. FAQ ─── -->
      <Container id="faq_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:88px 48px 96px; scroll-margin-top:72px">
        <FlexContainer id="faq_stack" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:36px">
          <Container id="faq_head_cell" style="height:auto; width:auto">
            <FlexContainer id="faq_head_col" props={direction: "column"} style="height:auto; width:auto; align-items:center; gap:10px">
              <Container id="faq_eyebrow_cell" style="height:auto; width:auto"><Text id="faq_eyebrow" props={content: "FAQ", tagName: "span"}/></Container>
              <Container id="faq_title_cell" style="height:auto; width:auto"><Text id="faq_title" props={content: "What you might want to know first", tagName: "h2"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="faq_body_cell" style="height:auto; width:100%; justify-content:center">
            <Collapse id="faq_collapse" props={accordion: true} style="height:auto; width:100%; max-width:860px">
              <Container id="faq_panel_plan" props={panelLabel: "How are inspection plans and checkpoints managed?"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_plan" props={content: "Checkpoints import in bulk and get QR labels generated automatically. Plans combine checkpoint groups with checklist templates at daily, weekly or custom frequencies, and a published change reaches the field immediately.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_offline" props={panelLabel: "Our workshops and basements have no signal. Does it still work?"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_offline" props={content: "Yes. The app inspects offline: records and photos are captured with no network and sync once you are back in range, with conflicting edits flagged for a human to confirm.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_data" props={panelLabel: "Can historical data be exported for clients or auditors?"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_data" props={content: "Yes. Inspection records, the issue ledger and handling timelines export to Excel or PDF filtered by date and checkpoint, with operator names and timestamps included — enough for a compliance audit.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
              <Container id="faq_panel_deploy" props={panelLabel: "How are deployment and data security handled?"} style="height:auto; width:100%; padding:6px 2px">
                <Text id="faq_answer_deploy" props={content: "SaaS by default, with encrypted storage and daily backups. Enterprise adds self-hosted or dedicated-cloud deployment so group data never has to leave your network.", tagName: "p"} style="height:auto; width:100%"/>
              </Container>
            </Collapse>
          </Container>
        </FlexContainer>
      </Container>

      <!-- ─── 7. Closing CTA ─── -->
      <Container id="cta_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:16px 48px 104px">
        <Container id="cta_card" style="height:auto; width:100%; max-width:1120px; margin-left:auto; margin-right:auto; position:relative">
          <FlexContainer id="cta_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:14px; padding:64px 56px">
            <Container id="cta_title_cell" style="height:auto; width:auto"><Text id="cta_title" props={content: "Make your first inspection count as data, today", tagName: "h2"}/></Container>
            <Container id="cta_desc_cell" style="height:auto; width:660px; flex-shrink:0"><Text id="cta_desc" props={content: "Set up in 30 minutes: import checkpoints, apply a template, invite the crew — the field can use it the same day.", tagName: "p"} style="height:auto; width:100%"/></Container>
            <Container id="cta_btn_cell" style="height:auto; width:auto; padding-top:12px"><Button id="cta_btn" props={content: "Start for free", variant: "primary"} style="height:auto; width:auto; padding:13px 32px"/></Container>
          </FlexContainer>
        </Container>
      </Container>

      <!-- ─── 8. Footer ─── -->
      <Container id="footer_divider" style="flex-shrink:0; flex-grow:0; height:1px; width:100%"/>
      <Container id="footer_region" style="flex-shrink:0; flex-grow:0; height:auto; width:100%; padding:32px 48px 40px">
        <FlexContainer id="footer_col" props={direction: "column"} style="height:auto; width:100%; align-items:center; gap:16px">
          <Container id="footer_brand_cell" style="height:auto; width:auto"><Text id="footer_brand" props={content: "CloudPatrol", tagName: "span"}/></Container>
          <Container id="footer_links_cell" style="height:auto; width:100%">
            <FlexContainer id="footer_links_row" props={direction: "row"} style="height:auto; width:100%; justify-content:center; gap:28px">
              <Container id="footer_link_privacy_cell" style="height:auto; width:auto"><Link id="footer_privacy" props={content: "Privacy", to: "https://example.com/legal/privacy", target: "_blank"}/></Container>
              <Container id="footer_link_terms_cell" style="height:auto; width:auto"><Link id="footer_terms" props={content: "Terms", to: "https://example.com/legal/terms", target: "_blank"}/></Container>
              <Container id="footer_link_contact_cell" style="height:auto; width:auto"><Link id="footer_contact" props={content: "Contact", to: "https://example.com/contact", target: "_blank"}/></Container>
            </FlexContainer>
          </Container>
          <Container id="footer_copyright_cell" style="height:auto; width:100%"><Text id="footer_copyright" props={content: "© 2026 CloudPatrol · demo template (brand and figures are fictional)", tagName: "p"}/></Container>
        </FlexContainer>
      </Container>
    </FlexContainer>

    <script>
      # Hero counters (value interpolation: tween from 0 up to the default number, prefixes/suffixes preserved;
      # no JS / reduced-motion → the default number is already the final frame)
      @hero_stats_cell = {
        events: { statsCount: { trigger: "onMount", action: motion.counter({targets: ["hero_stat_teams_value", "hero_stat_closed_value", "hero_stat_response_value"], duration: "slow"}) } }
      };
      # Declarative feedback (front-end only, no endpoint)
      @hero_cta_primary = {
        events: { startNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your 14-day trial is reserved — activate it the moment you sign up"}) } }
      };
      @tier_pro_cta = {
        events: { openPro: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Pro trial started: valid for 14 days, cancel any time"}) } }
      };
      @cta_btn = {
        events: { startNow: { trigger: "onClick", action: feedback.show({type: "message", subtype: "success", message: "Your 14-day trial is reserved — activate it the moment you sign up"}) } }
      };
    </script>

    <styles>
      # 0. Base
      @lp_root = { background: #ffffff; }
      @nav_region = {
        background: rgba(255, 255, 255, 0.78);
        backdrop-filter: blur(14px) saturate(160%);
        :scope { border-bottom: 1px solid rgba(79, 70, 229, 0.08); }
      }
      @nav_logo = { color: #4f46e5; font-size: 24px; }
      @nav_brand = { color: #1e1b4b; font-size: 18px; font-weight: 800; letter-spacing: -0.2px; }
      @nav_menu = {
        :scope { --anchor-item-color: #475569; --anchor-item-font-size: 14px; --anchor-item-font-weight: 600; --anchor-item-padding: 6px 2px; --anchor-item-radius: 0px; --anchor-item-active-color: #4f46e5; --anchor-item-active-bg: transparent; --anchor-gap: 36px; --anchor-padding: 0px; }
        :scope [data-rb-anchor-link] { transition: color 0.2s ease; }
        :scope [data-rb-anchor-link]:hover { color: #4f46e5; }
        :scope [data-rb-anchor-link][aria-current] { box-shadow: inset 0 -2px 0 #4f46e5; }
      }
      @nav_login_txt = { color: #334155; font-size: 14px; font-weight: 600; cursor: pointer; }
      @nav_trial_btn = {
        color: #ffffff;
        background: linear-gradient(120deg, #4f46e5 0%, #6366f1 100%);
        border-radius: 999px;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 6px 18px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        :scope:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(79, 70, 229, 0.35); }
      }

      # 1. Hero
      @hero_grid_cell = {
        :scope {
          background-image: radial-gradient(rgba(79, 70, 229, 0.14) 1.2px, rgba(79, 70, 229, 0) 1.2px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(130% 100% at 50% 8%, #000000 22%, transparent 76%);
          mask-image: radial-gradient(130% 100% at 50% 8%, #000000 22%, transparent 76%);
        }
      }
      @hero_stat_div_1 = { background: linear-gradient(180deg, rgba(79, 70, 229, 0), rgba(79, 70, 229, 0.24) 50%, rgba(79, 70, 229, 0)); }
      @hero_stat_div_2 = { background: linear-gradient(180deg, rgba(79, 70, 229, 0), rgba(79, 70, 229, 0.24) 50%, rgba(79, 70, 229, 0)); }
      @hero_region = {
        background: linear-gradient(180deg, #f4f6ff 0%, #e9edff 58%, #ffffff 100%);
        :scope::before {
          content: '';
          position: absolute;
          left: -160px;
          top: -140px;
          width: 640px;
          height: 640px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(79, 70, 229, 0.16), transparent 72%);
        }
        :scope::after {
          content: '';
          position: absolute;
          right: -120px;
          top: 40px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(14, 165, 233, 0.14), transparent 70%);
        }
      }
      @hero_eyebrow = { background-color: #eef2ff; color: #4338ca; font-size: 13px; font-weight: 700; border-radius: 999px; }
      # English headline is 31 Latin glyphs against 12 CJK chars in the Chinese version; Latin advances
      # are roughly half a CJK em, so the measure is comparable and 58px still fits 1280 minus padding.
      @hero_title = {
        font-size: 58px;
        font-weight: 900;
        line-height: 1.08;
        letter-spacing: -1.5px;
        text-align: center;
        :scope {
          background-image: linear-gradient(120deg, #1e1b4b 0%, #3730a3 45%, #4f46e5 75%, #0ea5e9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 14px 38px rgba(79, 70, 229, 0.18);
        }
      }
      # Latin needs less leading than CJK at the same size: 1.9 → 1.7
      @hero_sub = { color: #475569; font-size: 17px; line-height: 1.7; text-align: center; }
      @hero_cta_primary = {
        color: #ffffff;
        background: linear-gradient(120deg, #4f46e5 0%, #6366f1 115%);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0 10px 26px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(79, 70, 229, 0.38); }
      }
      @hero_cta_demo = {
        color: #3730a3;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        :scope { border: 1px solid rgba(79, 70, 229, 0.28); transition: transform 0.22s ease, border-color 0.22s ease; }
        :scope:hover { transform: translateY(-2px); border-color: #4f46e5; }
      }
      @hero_stat_teams_value = { color: #4f46e5; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @hero_stat_closed_value = { color: #0ea5e9; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @hero_stat_response_value = { color: #10b981; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      # Stat labels are two-word English here, so 13px keeps each on a single line under the 34px figures.
      @hero_stat_teams_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @hero_stat_closed_label = { color: #64748b; font-size: 13px; font-weight: 600; }
      @hero_stat_response_label = { color: #64748b; font-size: 13px; font-weight: 600; }

      # 2. Customer strip
      @proof_region = { background: #ffffff; :scope { border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; } }
      @proof_label = { color: #94a3b8; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
      # Latin wordmarks carry their own spacing; the Chinese 1px tracking reads too loose here.
      @proof_brand_huayun = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 0.2px; }
      @proof_brand_nanfeng = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 0.2px; }
      @proof_brand_jidi = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 0.2px; }
      @proof_brand_xunda = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 0.2px; }
      @proof_brand_lanwan = { color: #64748b; font-size: 17px; font-weight: 800; letter-spacing: 0.2px; }

      # 3. Capability cards
      @feature_region = { background: #ffffff; }
      @feature_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      # Section headings drop 38 → 34px: the English titles run ~2x the character count of the Chinese ones.
      @feature_title = { color: #0f172a; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @feat_scan_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_loop_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_flow_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_insight_cell = {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
      }
      @feat_scan_icon = { color: #4f46e5; font-size: 30px; }
      @feat_loop_icon = { color: #0ea5e9; font-size: 30px; }
      @feat_flow_icon = { color: #f59e0b; font-size: 30px; }
      @feat_insight_icon = { color: #10b981; font-size: 30px; }
      @feat_scan_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_loop_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_flow_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_insight_name = { color: #0f172a; font-size: 19px; font-weight: 800; }
      @feat_scan_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @feat_loop_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @feat_flow_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }
      @feat_insight_desc = { color: #64748b; font-size: 14px; line-height: 1.7; }

      @feat_scan_icon_cell = { background: linear-gradient(150deg, #eef2ff 0%, #e0e7ff 100%); border-radius: 12px; }
      @feat_loop_icon_cell = { background: linear-gradient(150deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 12px; }
      @feat_flow_icon_cell = { background: linear-gradient(150deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; }
      @feat_insight_icon_cell = { background: linear-gradient(150deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 12px; }

      # 4. Pricing
      @pricing_region = { background: #f6f8fc; }
      @pricing_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @pricing_title = { color: #0f172a; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @pricing_note = { color: #64748b; font-size: 15px; }
      @tier_starter_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(15, 23, 42, 0.1); }
      }
      @tier_pro_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 16px 40px rgba(79, 70, 229, 0.16);
        :scope { border: 2px solid #4f46e5; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 26px 56px rgba(79, 70, 229, 0.22); }
      }
      @tier_ent_cell = {
        background: #ffffff;
        border-radius: 22px;
        box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { border: 1px solid #eef2f7; transition: transform 0.28s ease, box-shadow 0.28s ease; }
        :scope:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(15, 23, 42, 0.1); }
      }
      @tier_starter_name = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @tier_pro_name = { color: #3730a3; font-size: 20px; font-weight: 800; }
      @tier_ent_name = { color: #0f172a; font-size: 20px; font-weight: 800; }
      @tier_pro_badge = { background-color: #fef3c7; color: #b45309; font-size: 12px; font-weight: 700; border-radius: 999px; }
      @tier_starter_amount = { color: #0f172a; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      @tier_pro_amount = { color: #4f46e5; font-size: 34px; font-weight: 900; letter-spacing: -0.5px; }
      # "Custom" is a word, not a figure — 30px stops it from crowding the period label beside it.
      @tier_ent_amount = { color: #0f172a; font-size: 28px; font-weight: 900; letter-spacing: -0.5px; }
      @tier_starter_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_pro_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_ent_period = { color: #94a3b8; font-size: 13px; font-weight: 600; }
      @tier_starter_desc = { color: #64748b; font-size: 14px; }
      @tier_pro_desc = { color: #64748b; font-size: 14px; }
      @tier_ent_desc = { color: #64748b; font-size: 14px; }
      @tier_starter_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f4_icon = { color: #10b981; font-size: 16px; }
      @tier_pro_f5_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f1_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f2_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f3_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f4_icon = { color: #10b981; font-size: 16px; }
      @tier_ent_f5_icon = { color: #10b981; font-size: 16px; }
      @tier_starter_f1_text = { color: #334155; font-size: 14px; }
      @tier_starter_f2_text = { color: #334155; font-size: 14px; }
      @tier_starter_f3_text = { color: #334155; font-size: 14px; }
      @tier_pro_f1_text = { color: #334155; font-size: 14px; }
      @tier_pro_f2_text = { color: #334155; font-size: 14px; }
      @tier_pro_f3_text = { color: #334155; font-size: 14px; }
      @tier_pro_f4_text = { color: #334155; font-size: 14px; }
      @tier_pro_f5_text = { color: #334155; font-size: 14px; }
      @tier_ent_f1_text = { color: #334155; font-size: 14px; }
      @tier_ent_f2_text = { color: #334155; font-size: 14px; }
      @tier_ent_f3_text = { color: #334155; font-size: 14px; }
      @tier_ent_f4_text = { color: #334155; font-size: 14px; }
      @tier_ent_f5_text = { color: #334155; font-size: 14px; }
      @tier_starter_cta = {
        color: #3730a3;
        background: #eef2ff;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #e0e7ff; }
      }
      @tier_pro_cta = {
        color: #ffffff;
        background: #4f46e5;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        box-shadow: 0 8px 20px rgba(79, 70, 229, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.32);
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #4338ca; }
      }
      @tier_ent_cta = {
        color: #334155;
        background: #f1f5f9;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
        :scope { transition: background-color 0.2s ease; }
        :scope:hover { background-color: #e2e8f0; }
      }

      # 5. FAQ
      @faq_region = { background: #ffffff; }
      @faq_eyebrow = { color: #4f46e5; font-size: 14px; font-weight: 800; letter-spacing: 3px; }
      @faq_title = { color: #0f172a; font-size: 34px; font-weight: 900; letter-spacing: -1px; }
      @faq_answer_plan = { color: #475569; font-size: 15px; line-height: 1.7; }
      @faq_answer_offline = { color: #475569; font-size: 15px; line-height: 1.7; }
      @faq_answer_data = { color: #475569; font-size: 15px; line-height: 1.7; }
      @faq_answer_deploy = { color: #475569; font-size: 15px; line-height: 1.7; }

      # 6. Closing CTA
      @cta_card = {
        background: linear-gradient(120deg, #312e81 0%, #4338ca 48%, #4f46e5 72%, #0ea5e9 130%);
        border-radius: 28px;
        box-shadow: 0 30px 70px rgba(49, 46, 129, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        :scope { overflow: hidden; }
        :scope::before { content: ''; position: absolute; left: -130px; top: -150px; width: 440px; height: 440px; border-radius: 50%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%); }
        :scope::after { content: ''; position: absolute; right: -150px; bottom: -180px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(closest-side, rgba(56, 189, 248, 0.4), rgba(56, 189, 248, 0) 72%); }
      }
      @cta_title = { color: #ffffff; font-size: 32px; font-weight: 900; letter-spacing: -1px; }
      @cta_desc = { color: rgba(224, 231, 255, 0.92); font-size: 16px; line-height: 1.65; text-align: center; }
      @cta_btn = {
        color: #312e81;
        background: #ffffff;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 800;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        :scope { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        :scope:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.28); }
      }

      # 7. Footer
      @footer_divider = { background: #eef2f7; }
      @footer_brand = { color: #3730a3; font-size: 17px; font-weight: 800; }
      @footer_privacy = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_terms = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_contact = { color: #64748b; font-size: 13px; :scope { text-decoration: none; transition: color 0.2s ease; } :scope:hover { color: #4f46e5; } }
      @footer_copyright = { color: #94a3b8; font-size: 12px; text-align: center; }
    </styles>
  </Page>
</App>
```

## Production notes

**Geometry re-tuned for Latin type (2026-09-25).** The Chinese original is typeset for CJK metrics —
square glyphs, no inter-word spacing, four-character display lines. Latin reads very differently at the
same nominal size, so a straight substitution overflows. What changed:

| Element | Chinese source | English version | Why |
| --- | --- | --- | --- |
| `hero_title` | 58px / `-1.5px` tracking | 58px / `-1.5px` (kept) | "Every inspection, on the record" is 31 glyphs vs 12 CJK chars — similar *measure* at 58px because Latin advances are roughly half a CJK em, so the line still fits 1280 with the same padding |
| `hero_sub` | `width:720px` | `width:760px` | English runs ~15% longer in character count; the extra 40px keeps it to two lines |
| feature cards | `width:270px` | `width:276px` | each description gains a line at 270px; 276px restores the four-card row to equal heights |
| `cta_desc` | `width:640px` | `width:660px` | same reason as `hero_sub` |
| stat labels | `家团队正在使用` etc. | `teams on board` / `issues closed` / `min to respond` | shortened to two-word labels so they stay on one line under the 34px figures |

Everything else (colors, gradients, spacing, motion specs, radii) is language-neutral and unchanged.

**Copy policy**: this is not a literal translation. Chinese-specific framing (「巡检 3.0 全新发布」,
「微信群」, `¥199` pricing) is rewritten to equivalent international expressions rather than carried over.
Currency switched to USD and brand names transliterated to neutral English stand-ins.

**Node ids are identical to the Chinese version** — the two documents are the same scene, so tooling
(the capability E2E, the thumbnail pipeline) can address either one by the same selectors.
