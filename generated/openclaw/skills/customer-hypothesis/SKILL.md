---
name: customer-hypothesis
description: Defines the first customer precisely enough to guide product and GTM. Use when the founder is still describing a broad market instead of a specific buyer. Returns customer-profile.md.
---

# customer-hypothesis

Use this when the user clearly wants the customer-hypothesis workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Define my customer
- Who is my first customer?

## Expected outputs
- customer-profile.md
- docs/founder-work/startup-loop.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Feeds into
- mvp-brief.md
- positioning.md

## Quality checks
- specificity_present
- recommendation_present

## Workflow
# Customer Hypothesis

Define the first customer sharply enough that validation, product scope, positioning, and GTM can all reuse it.

## Phase 0: Read context

Read when available:
- `docs/founder-work/startup-loop.md`
- `problem-validation-report.md`
- `assumptions-map.md`
- `founder-context.md`
- recent customer or sales artifacts

If multiple customers are plausible, choose the one most likely to produce a fast, high-signal validation cycle.

## Phase 1: Choose the beachhead customer

Produce one primary customer, not a market map.

Define:
- exact role / buyer / user
- situation that creates urgency
- current workaround
- consequence of the problem
- why this segment is better than adjacent segments right now

Avoid demographics unless they change buying behavior.

## Phase 2: Make the hypothesis testable

Write the customer hypothesis as:

```text
We believe [C1 customer] in [situation] struggles with [P1 problem], currently solves it by [workaround], and will care now because [trigger/consequence].
```

List the fastest disconfirming questions:
- what would make this customer wrong?
- what behavior should already exist if the pain is real?
- what adjacent customer is tempting but worse for focus?

## Phase 3: Write artifacts

Write `customer-profile.md`:

```markdown
# Customer Profile — YYYY-MM-DD

## Primary Customer

## Situation

## Current Workaround

## Trigger / Why Now

## Consequence

## Why This Beachhead

## Adjacent Segments to Ignore For Now

## Validation Questions
```

Also update `docs/founder-work/startup-loop.md` when present:
- add or update `C#`, linked `P#`, `A#`, `E#`, and `D#` entries
- keep the Goal Capsule current
- preserve stable IDs unless the customer truly changed

## Chat response

Return:
- the chosen customer
- why this customer first
- the one validation question that matters most
- artifacts updated
