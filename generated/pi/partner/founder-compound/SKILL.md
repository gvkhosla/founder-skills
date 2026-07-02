---
name: founder-compound
description: Closes a startup work cycle by capturing what was learned, updating company memory, and making the next cycle easier. Use after customer calls, validation, MVP scoping, launches, PMF reviews, experiments, support reviews, or weekly reviews. Returns a compact Learning Brief plus founder-learning.md, updated founder-context.md, and updated .fs artifact/index state.
---

# founder-compound

## When to invoke
- Compound what we learned
- Capture this startup learning
- Close the loop and update memory

## Outputs
- docs/founder-learnings/
- founder-context.md
- .fs/artifact-index.json
- .fs/company-state.json

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- founder-context.md
- truth-memo.md
- recommended-next-step.md
- .fs/company-state.json
- .fs/artifact-index.json

## Feeds into
- founder-partner
- weekly-founder-review

## Quality checks
- learning_captured
- reusable_pattern_named
- memory_updated
- next_cycle_easier

## Prompt
# Founder Compound

Close the loop on a unit of startup work so the next session starts smarter.

Use this after any meaningful work cycle:
- customer call or validation sprint
- MVP scoping or build decision
- launch, pricing, messaging, sales, or growth experiment
- PMF, churn, retention, support, or weekly operating review
- a founder-partner session that produced a new decision or contradiction

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

## Reference
# Founder Compound Reference

Founder Compound is the closer for the Founder Skills loop. It exists because startup work compounds only when lessons are captured in a reusable shape.

## What qualifies as a learning

Capture when one of these changed:
- customer clarity
- problem urgency or frequency
- willingness to pay
- product scope or activation
- positioning or objection handling
- launch channel or conversion
- PMF, retention, churn, or support signal
- founder focus or operating cadence

Do not capture generic summaries. Capture decisions, evidence, patterns, invalidated assumptions, and reusable caveats.

## Good learning titles

- `Recruiters care about backfill risk more than sourcing speed`
- `Free users activate only after importing existing data`
- `Pricing objection is budget owner mismatch, not price level`
- `Weekly reviews drift unless the experiment has one numeric signal`

## Artifact index guidance

When updating `.fs/artifact-index.json`, add the new learning with:
- `createdBy: founder-compound`
- `dependsOn`: source artifacts used
- `feedsInto`: the next skill, sequence, or artifact it should inform
- `recommendedNext`: one or two next workflows
- `confidence`: match the learning confidence
- `freshness: fresh`

## Confidence rubric

- **low** — one signal, anecdote, or weak proxy
- **medium** — repeated qualitative evidence, early behavior, or credible metric movement
- **high** — repeated behavior, payment, retention, or clear metric movement over time
