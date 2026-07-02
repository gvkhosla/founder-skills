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
- docs/founder-work/startup-loop.md

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

Turn validated pain and a sharp customer into the smallest useful product wedge worth building.

## Phase 0: Read context

Read when available:
- `docs/founder-work/startup-loop.md`
- `problem-validation-report.md`
- `customer-profile.md`
- `assumptions-map.md`
- `truth-memo.md`
- recent founder-learning artifacts

If problem validation is weak, do not scope a build by default. Recommend returning to `problem-validator` unless the founder explicitly wants a speculative prototype.

## Phase 1: Define the one job

Write the MVP around one job:
- the customer
- the painful situation
- the outcome the product creates
- the success signal that proves usefulness

If you cannot write the job in one sentence, the MVP is not scoped yet.

## Phase 2: Cut scope aggressively

Choose maximum three must-have features.

For each candidate feature, decide:
- **must-have** — required to produce the success signal
- **manual / concierge** — can be done by hand for validation
- **later** — useful but not needed for the first proof
- **no** — distracts from the wedge

Optimize for validation speed and learning density, not completeness.

## Phase 3: Define the build handoff

Make implementation planning easier by capturing:
- must-have requirements with stable `M#` IDs
- explicit non-goals
- success signal `S#`
- risky assumptions that should remain visible during build
- rough complexity / time-to-build estimate
- recommended next skill

Do not design architecture here. That belongs in `implementation-planner` and `architecture-reviewer`.

## Phase 4: Write artifacts

Write `mvp-brief.md`:

```markdown
# MVP Brief — YYYY-MM-DD

## One Job

## Primary Customer

## Must-Have Features
- M1. ...
- M2. ...
- M3. ...

## Manual / Concierge For Now

## Explicitly Not In Scope

## Success Signal

## Risky Assumptions

## Time-to-Build Estimate

## Recommended Next Skill
```

Also update `docs/founder-work/startup-loop.md` when present:
- set `artifact_readiness: mvp-scoped` when scope and success signal are clear
- add or update `M#`, `S#`, `A#`, and `D#` entries
- keep the Goal Capsule current

## Chat response

Return:
- the one job
- the three must-haves or fewer
- the visible cut list
- recommended next skill
