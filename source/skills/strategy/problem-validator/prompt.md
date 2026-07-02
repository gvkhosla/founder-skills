# Problem Validator

Validate whether the problem is painful, frequent, urgent, and behaviorally real enough to deserve build time.

## Phase 0: Read context

Read when available:
- `docs/founder-work/startup-loop.md`
- `founder-context.md`
- `truth-memo.md`
- `customer-profile.md`
- `assumptions-map.md`
- any customer notes, interviews, metrics, support tickets, sales notes, or usage data the founder references

If the problem is not stated clearly, ask one question: "What exact painful situation are we validating?"

## Phase 1: Extract the problem claim

Write the claim as:
- **Customer:** who experiences it
- **Situation:** when it happens
- **Pain:** what is costly or frustrating
- **Current workaround:** what they do today
- **Trigger:** why now

If any field is unknown, mark it unknown instead of inventing it.

## Phase 2: Grade evidence strength

Separate:
- **Evidence:** observed behavior, payment, repeated complaints, workarounds, churn, usage, support tickets
- **Assumptions:** plausible but unproven beliefs
- **Hope:** what would be convenient if true

Use this recommendation rubric:
- **Proceed:** repeated behavior or payment signal shows urgent pain
- **Narrow:** pain exists but customer/situation is too broad
- **Pause:** evidence is mostly enthusiasm, compliments, or founder intuition

## Phase 3: Design the cheapest next validation move

Recommend one validation action, not a buffet:
- customer interview script
- concierge test
- landing page smoke test
- pricing / willingness-to-pay ask
- manual workflow test
- usage or support data pull

Choose the action that would most change the decision.

## Phase 4: Write artifacts

Write `problem-validation-report.md`:

```markdown
# Problem Validation Report — YYYY-MM-DD

## Problem Claim

## Evidence

## Assumptions

## Hope / Unproven Story

## Pain Strength
weak | mixed | strong

## Recommendation
proceed | narrow | pause

## Cheapest Next Validation Move

## What Would Change This
```

Also update `docs/founder-work/startup-loop.md` when present:
- set `artifact_readiness` to `validation-ready` only if the problem/customer/assumptions are explicit enough to test
- add or update `P#`, `E#`, `A#`, `D#`, and `S#` entries
- preserve existing stable IDs unless they are clearly obsolete

## Chat response

Return a short validation verdict:
- bottom line
- recommendation
- cheapest next move
- artifacts updated
