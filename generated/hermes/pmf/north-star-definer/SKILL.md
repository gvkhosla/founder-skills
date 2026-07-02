---
name: north-star-definer
description: Chooses the one metric that best represents delivered value and future company health. Use when the team tracks too many numbers or lacks a leading signal. Returns north-star.md.
---

# north-star-definer

## When to invoke
- Define my north star
- What metric should we obsess over?

## Outputs
- north-star.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- customer-profile.md
- mvp-brief.md

## Feeds into
- pmf-assessment.md
- weekly-review.md

## Quality checks
- specific_recommendation
- metric_definition_present
- next_step_present

## Prompt
# North Star Definer

Read first:
- `customer-profile.md`
- `mvp-brief.md`
- `positioning.md`
- `founder-context.md`

Produce `north-star.md` with:
1. The recommended north star metric
2. Why it best captures value delivered
3. What not to use as the north star
4. The exact definition and counting rule
5. Supporting diagnostic metrics to watch around it
6. The review cadence for this metric
7. The next artifact that should reference it

Rules:
- choose one leading metric, not a dashboard
- optimize for user value first and business health second
- keep the metric easy to explain and hard to game
