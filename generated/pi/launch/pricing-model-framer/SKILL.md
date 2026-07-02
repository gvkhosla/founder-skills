---
name: pricing-model-framer
description: Turns value, buyer psychology, and stage into a concrete pricing model. Use when pricing is stuck in vague debates or fear. Returns pricing-model.md.
---

# pricing-model-framer

## When to invoke
- Frame my pricing
- Help me price this

## Outputs
- pricing-model.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- positioning.md
- customer-profile.md

## Feeds into
- landing-page-copy.md
- launch-plan.md

## Quality checks
- specific_recommendation
- decision_made
- next_step_present

## Prompt
# Pricing Model Framer

Read first:
- `positioning.md`
- `customer-profile.md`
- `problem-validation-report.md`
- `founder-context.md`

Produce `pricing-model.md` with:
1. Recommended pricing structure
2. Suggested price points and package names
3. Why this pricing matches the customer and product stage
4. What should be included now vs later tiers
5. Key objections or price risks
6. A simple pricing test plan
7. The next artifact that should use this pricing

Rules:
- make one pricing recommendation, not a menu of options
- keep the first version simple enough to explain in one sentence
- optimize for learning velocity and buyer clarity
