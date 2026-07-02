---
name: launch-plan-builder
description: Builds a realistic launch plan across channels, assets, and timing. Use when product and message are ready but launch motion is vague. Returns launch-plan.md.
---

# launch-plan-builder

## When to invoke
- Build my launch plan
- Help me plan the launch

## Outputs
- launch-plan.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- positioning.md
- landing-page-copy.md
- pricing-model.md

## Feeds into
- weekly-review.md
- pipeline-review.md

## Quality checks
- specific_recommendation
- staged_plan
- next_step_present

## Prompt
# Launch Plan Builder

Read first:
- `positioning.md`
- `landing-page-copy.md`
- `pricing-model.md`
- `customer-profile.md`
- `founder-context.md`

Produce `launch-plan.md` with:
1. Launch goal and the exact audience for this launch
2. Owned, rented, and borrowed channel choices with rationale
3. A week-by-week prelaunch and launch-week plan
4. Launch-day checklist
5. Metrics to watch in the first 72 hours
6. What not to do during this launch
7. The next skill or sequence to run after launch

Rules:
- recommend channels that match the founder's real distribution surface
- sequence work in a way the founder can execute without a full team
- prefer one sharp launch motion over many weak channels
