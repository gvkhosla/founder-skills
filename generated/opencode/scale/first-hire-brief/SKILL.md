---
name: first-hire-brief
description: Decides the next human or agent hire from the company bottleneck. Use when founder time is the constraint and hiring could help or distract. Returns human-hire-brief.md or agent-hire-brief.md.
---

# first-hire-brief

## When to invoke
- Help me make my first hire
- What should I hire for first?

## Outputs
- human-hire-brief.md
- agent-hire-brief.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- weekly-review.md
- founder-context.md

## Feeds into
- focus-plan.md

## Quality checks
- specific_recommendation
- decision_made
- next_step_present

## Prompt
# First Hire Brief

Read first:
- `weekly-review.md`
- `founder-context.md`
- `focus-plan.md`
- `implementation-plan.md` if the bottleneck is build related

Produce either `human-hire-brief.md` or `agent-hire-brief.md` with:
1. The bottleneck this hire removes
2. Why the recommendation should be human or agentic
3. The exact role or agent spec
4. 30-day and 90-day success signals
5. Screening or evaluation steps
6. A paid test task or pilot run
7. The next operating step after the hire is made

Rules:
- hire for leverage, not comfort
- choose one first hire only
- make the brief specific enough to use immediately
