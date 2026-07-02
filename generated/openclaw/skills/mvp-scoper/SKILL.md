---
name: mvp-scoper
description: Draws the hard line between MVP and distraction. Use when the idea is clear but scope keeps expanding. Returns mvp-brief.md.
---

# mvp-scoper

Use this when the user clearly wants the mvp-scoper workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Help me scope my MVP
- What should I build first?

## Expected outputs
- mvp-brief.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- customer-profile.md
- problem-validation-report.md

## Feeds into
- implementation-plan.md
- build-sequence.md

## Quality checks
- specific_recommendation
- concrete_output
- explicit_out_of_scope_list

## Workflow
# MVP Scoper

Read available context first:
- `problem-validation-report.md`
- `customer-profile.md`
- `assumptions-map.md`

Then produce `mvp-brief.md` with:
1. The one job this product does
2. The primary user
3. The 3 must-have features
4. Explicit not-in-scope list
5. Success signal for the MVP
6. Time-to-build estimate
7. Recommended next skill

Rules:
- force clear tradeoffs
- maximum 3 in-scope features
- optimize for validation speed, not completeness
- make the cut list explicit and visible
