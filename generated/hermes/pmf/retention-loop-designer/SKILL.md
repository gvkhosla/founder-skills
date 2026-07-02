---
name: retention-loop-designer
description: Designs the habit and return loop that makes users come back without constant prompting. Use when retention is weak or engagement needs to compound. Produces retention-loop.md.
---

# retention-loop-designer

## When to invoke
- Design my retention loop
- Why aren't users coming back?

## Outputs
- retention-loop.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- pmf-assessment.md
- customer-profile.md
- support-insights.md

## Feeds into
- experiment-plan.md

## Quality checks
- specific_recommendation
- loop_defined
- next_step_present

## Prompt
# Retention Loop Designer

Read first:
- `pmf-assessment.md`
- `customer-profile.md`
- `support-insights.md`
- `founder-context.md`

Produce `retention-loop.md` with:
1. Trigger, action, reward, and investment design
2. The current break in the loop
3. The smallest product or onboarding change that would strengthen return behavior
4. Risks or anti-patterns to avoid
5. A one-week implementation test
6. The next skill to run after the test

Rules:
- design for the user's real recurring moment, not generic notifications
- prioritize one loop that fits the product's natural behavior
- connect the loop to measurable usage changes
