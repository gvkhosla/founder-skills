---
name: growth-loop-builder
description: Designs the strongest self-reinforcing growth loop for the product. Use when the founder wants compounding growth instead of one-off acquisition tactics. Produces growth-loop.md.
---

# growth-loop-builder

## When to invoke
- Build my growth loop
- How do we grow without ads?

## Outputs
- growth-loop.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- pmf-assessment.md
- positioning.md
- customer-profile.md

## Feeds into
- experiment-plan.md
- pipeline-review.md

## Quality checks
- specific_recommendation
- loop_defined
- next_step_present

## Prompt
# Growth Loop Builder

Read first:
- `pmf-assessment.md`
- `positioning.md`
- `customer-profile.md`
- `founder-context.md`

Produce `growth-loop.md` with:
1. The best loop type for this product: viral, content, product, or sales
2. Why that loop fits better than the alternatives
3. The exact loop mechanics from trigger to new user
4. The metric that tells you the loop is working
5. The smallest implementation slice to test first
6. The next sequence or skill to run after the test

Rules:
- pick one loop to implement first
- use the product's natural mechanics instead of bolting on fake virality
- optimize for compounding behavior, not vanity reach
