# Compound

Close the loop on a unit of startup work so the next session starts smarter.

Use this after any meaningful work cycle:
- customer call or validation sprint
- MVP scoping or build decision
- launch, pricing, messaging, sales, or growth experiment
- PMF, churn, retention, support, or weekly operating review
- a co-founder session that produced a new decision or contradiction

## Operating principle

Each unit of startup work should leave behind reusable context. Do not merely summarize what happened. Extract the lesson, name when it applies again, update memory, and route the next cycle.

## Phase 0: Resolve context

Read when available:
- `.fs/company-state.json`
- `.fs/artifact-index.json`
- `.fs/sequence-state.json`
- `founder-context.md`
- `truth-memo.md`
- `recommended-next-step.md`
- the most recent artifact from the cycle being closed

If the user references notes, transcripts, metrics, or files, treat those as primary evidence. If no cycle evidence is available, ask one question: "What changed or what did we learn that you want captured?"

## Phase 1: Classify the learning

Classify the learning into one primary track:
- **customer** — who has the problem, what they tried, what they value
- **problem** — pain strength, frequency, urgency, current workaround
- **product** — MVP scope, feature cut, UX, activation, quality
- **positioning** — message, category, landing page, objections
- **pricing / sales** — willingness to pay, buyer, sales motion, pipeline
- **launch / growth** — channel, campaign, conversion, CAC, loop
- **PMF / retention** — usage, churn, support, repeat behavior
- **operations** — focus, cadence, experiment discipline, team constraint

Then decide whether this is:
- **single-signal** — one useful observation, low confidence
- **pattern** — repeated enough to guide future decisions
- **decision** — a choice the company is now committing to
- **invalidated assumption** — something the founder should stop relying on

## Phase 2: Extract reusable knowledge

Write the learning in a form future agents can use:
- what happened
- what changed in our understanding
- what evidence supports it
- when this should influence future work
- what it means for the next skill or sequence

Always separate:
- **Evidence** — what was observed, said, paid for, used, retained, churned, or measured
- **Interpretation** — what we infer
- **Decision** — what changes now
- **Open question** — what remains uncertain

## Phase 3: Update memory

Update only what changed:
- `founder-context.md` — product, customer, stage, focus, what is working, what is not working, open questions, partner session history
- `.fs/company-state.json` — current bottleneck, stage, active experiments, recommended next when obvious
- `.fs/artifact-index.json` — add the learning artifact and relevant dependencies / feeds_into paths
- `.fs/sequence-state.json` — if this closes the current step, mark the next step current when safe

Do not invent metrics or confidence. If confidence is low, record low confidence.

## Phase 4: Write the learning artifact

Default path:
`docs/founder-learnings/YYYY-MM-DD-<short-slug>.md`

If `docs/founder-learnings/` does not exist, create it.

Use this structure:

```markdown
---
artifact_contract: founder-skills/learning/v1
date: YYYY-MM-DD
track: customer | problem | product | positioning | pricing-sales | launch-growth | pmf-retention | operations
learning_type: single-signal | pattern | decision | invalidated-assumption
confidence: low | medium | high
source_artifacts:
  - path-or-note
feeds_into:
  - next-skill-or-sequence
---

# <Learning Title>

## Learning Brief
[One paragraph a future agent can read first.]

## Evidence
- [Observed fact with source]

## Interpretation
- [What we infer and why]

## Decision / Implication
- [What changes in product, GTM, PMF, focus, or sequencing]

## Applies When
- [Future situation where this learning should be reused]

## Do Not Overgeneralize
- [Boundary / caveat / confidence limit]

## Recommended Next
- [One skill, sequence, or real-world action]
```

## Default chat response

Respond with a compact Learning Brief before or alongside file updates:

```markdown
## Learning Brief
**Captured:** [one sentence]
**Reusable pattern:** [when this should matter again]
**Memory updated:** [files]
**Next move:** [one skill, sequence, or action]
```

Keep chat under 120 words unless the founder asks for details. The markdown file is the durable memory; chat is the human summary.
