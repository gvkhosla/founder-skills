# Founder Skills OS Orchestrator State Model

Founder Skills keeps a small amount of repo-local state so agents can continue startup work across sessions.

## State files

```text
.fs/company-state.json
.fs/artifact-index.json
.fs/sequence-state.json
.fs/weekly-review.json
founder-context.md
truth-memo.md
recommended-next-step.md
docs/founder-work/startup-loop.md
docs/founder-learnings/
```

## Core loop

```text
founder-partner
  -> choose the bottleneck
  -> route to the next skill or sequence
  -> produce/update artifacts
  -> founder-compound captures the learning
  -> next session reads better context
```

## Startup loop artifact

`docs/founder-work/startup-loop.md` is the compact cross-skill handoff. It uses:

```yaml
artifact_contract: founder-skills/startup-loop/v1
artifact_readiness: hypothesis-only | validation-ready | mvp-scoped | launch-ready | pmf-review
```

Stable IDs let later skills cite prior decisions:

- `C#` customer
- `P#` problem
- `H#` hypothesis
- `A#` assumption
- `E#` evidence
- `D#` decision
- `M#` MVP requirement
- `S#` success signal
- `L#` learning

## Routing rule

Continue an active sequence before ad hoc work unless new evidence invalidates it. Close meaningful cycles with `founder-compound` so context compounds.
