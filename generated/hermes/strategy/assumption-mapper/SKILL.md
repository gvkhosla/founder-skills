---
name: assumption-mapper
description: Maps the riskiest product, customer, and GTM assumptions into a ranked test plan. Use when scope exists but the founder needs to know which bets could break the company fastest. Produces assumptions-map.md.
---

# assumption-mapper

## When to invoke
- Map my assumptions
- What are the riskiest bets here?

## Outputs
- assumptions-map.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- problem-validation-report.md
- customer-profile.md
- mvp-brief.md

## Feeds into
- experiment-plan.md

## Quality checks
- specific_recommendation
- ranked_output
- next_step_present

## Prompt
# Assumption Mapper

Read first:
- `problem-validation-report.md`
- `customer-profile.md`
- `mvp-brief.md`
- `founder-context.md`

Produce `assumptions-map.md` with:
1. The 5 highest-risk assumptions across problem, customer, build, GTM, and pricing
2. Why each assumption matters
3. Current evidence level for each assumption
4. The cheapest valid test to run next
5. Success / failure criteria for each test
6. Which assumption should be tested first
7. The next skill to run after the test

Rules:
- rank by kill-risk, not curiosity
- prefer cheap evidence over large launches
- make each test concrete enough to run this week
