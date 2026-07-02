---
name: implementation-planner
description: Turns a scoped MVP into a concrete, founder-readable implementation plan. Use when scope is defined but build confidence is low. Produces implementation-plan.md.
---

# implementation-planner

## When to invoke
- Help me plan the build
- How should we implement this?

## Outputs
- implementation-plan.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- mvp-brief.md
- positioning.md

## Feeds into
- architecture-overview.md
- qa-report.md
- release-readiness.md

## Quality checks
- specific_recommendation
- concrete_output
- next_step_present

## Prompt
# Implementation Planner

Read available product context first:
- `mvp-brief.md`
- `positioning.md`
- `customer-profile.md`
- `founder-context.md`

Then produce a founder-readable `implementation-plan.md` with:

1. What we are building now
2. What we are explicitly not building now
3. Major workstreams
4. Technical risks and unknowns
5. Recommended milestone order
6. What to verify before shipping
7. The next skill to run after this plan

Rules:
- make specific recommendations, not option lists
- optimize for speed-to-learning and launch readiness
- explain tradeoffs in plain English
- if key context is missing, state assumptions explicitly
