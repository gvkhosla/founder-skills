# Startup Loop Artifact Contract

Founder Skills uses durable artifacts so startup work compounds across sessions.

## Contract

Canonical startup loop artifacts use this frontmatter:

```yaml
artifact_contract: founder-skills/startup-loop/v1
artifact_readiness: hypothesis-only | validation-ready | mvp-scoped | launch-ready | pmf-review
stage: idea | validating | building | launched | revenue | growing
date: YYYY-MM-DD
```

## Readiness states

| Readiness | Meaning | Typical owner |
| --- | --- | --- |
| `hypothesis-only` | Idea exists, but customer/problem evidence is weak | `co-founder`, `customer-hypothesis` |
| `validation-ready` | Problem, customer, and assumptions are explicit enough to test | `problem-validator`, `assumption-mapper` |
| `mvp-scoped` | A narrow product wedge and success signal are defined | `mvp-scoper` |
| `launch-ready` | Build/release work is tied to positioning, QA, and launch motion | `build-to-launch`, `launch-plan-builder` |
| `pmf-review` | Usage, retention, churn, support, or growth-loop evidence is being evaluated | `pmf-signal-reader`, `pmf-recovery` |

## Stable IDs

Use stable IDs so later skills can cite earlier decisions without re-explaining them:

- `C#` — customer / segment
- `P#` — problem claim
- `H#` — hypothesis
- `A#` — assumption
- `E#` — evidence
- `D#` — decision
- `M#` — MVP requirement
- `S#` — success signal
- `L#` — learning captured by `founder-compound`

## Recommended structure

```markdown
---
artifact_contract: founder-skills/startup-loop/v1
artifact_readiness: validation-ready
stage: validating
date: YYYY-MM-DD
---

# Startup Loop — <topic>

## Goal Capsule
**Customer:** C1 ...
**Problem:** P1 ...
**Current bottleneck:** ...
**Success signal:** S1 ...

## Customer / Problem
- C1. ...
- P1. ...

## Evidence Ledger
- E1. ...

## Assumptions
- A1. ...

## MVP / Offer Shape
- M1. ...

## Decisions
- D1. ...

## Learnings
- L1. ...

## Next Handoff
- Recommended skill or sequence: ...
- Why: ...
```

## Rule of thumb

Separate artifacts are still useful for human-readable reports, but the startup loop artifact is the compact handoff that future agents should read first.
