# Founder Skills OS — Orchestrator & State Model

This document defines the heart of Founder Skills OS:

1. the **company state model**
2. the **artifact graph model**
3. the **bottleneck taxonomy**
4. the **orchestrator routing logic**
5. the **weekly operating rhythm**

This is the layer that should let Founder Skills take the best workflow rigor from gstack and beat it by operating at a **higher level of company intelligence**.

---

# 1. The core idea

gstack is strongest when it answers:

> “What should the builder do next in the software delivery workflow?”

Founder Skills OS should answer:

> “What should the founder and company do next across product, engineering, launch, sales, marketing, ads, support, hiring, and operations?”

That means the orchestrator must not be a simple skill picker.

It must be a **company operator** that:
- reads company state
- reads artifact freshness and confidence
- detects the bottleneck
- decides the next best move
- routes to a skill or a sequence
- updates memory when the work is done

---

# 2. State objects

There are four primary state objects.

## A. Company state
Persistent operating truth about the startup.

## B. Artifact graph
Knowledge graph of every strategic and execution artifact.

## C. Sequence state
Tracks where the company is inside multi-step workflows.

## D. Weekly operating state
Tracks focus, review cadence, active experiments, and unresolved questions.

---

# 3. `company-state.json`

This is the main machine-readable operating file.

## File location

```text
.fs/company-state.json
```

## High-level structure

```json
{
  "company": {},
  "founders": {},
  "product": {},
  "go_to_market": {},
  "metrics": {},
  "execution": {},
  "support": {},
  "hiring": {},
  "focus": {},
  "state_meta": {}
}
```

## Detailed proposed schema

```json
{
  "company": {
    "name": "Acme",
    "stage": "building",
    "business_model": "b2b-saas",
    "founder_type": "non-technical",
    "team_shape": "solo",
    "current_bottleneck": "build-confidence"
  },
  "founders": {
    "primary_founder_mode": "founder-led",
    "risk_tolerance": "medium",
    "time_horizon": "6-months",
    "key_constraints": ["part-time engineering help", "limited paid acquisition budget"]
  },
  "product": {
    "core_job": "Help sales teams auto-summarize discovery calls",
    "primary_user": "sales manager at SMB SaaS company",
    "product_scope_state": "defined",
    "build_state": "planning",
    "launch_state": "not-ready",
    "pmf_state": "pre-pmf"
  },
  "go_to_market": {
    "positioning_state": "drafted",
    "sales_motion": "founder-led outbound",
    "marketing_state": "light",
    "seo_geo_state": "not-started",
    "ads_state": "not-started"
  },
  "metrics": {
    "north_star": {
      "name": "weekly call summaries delivered",
      "value": 18,
      "trend": "up"
    },
    "pmf_signal": "faint",
    "revenue_mrr": 1200,
    "pipeline_health": "weak",
    "activation_health": "unknown",
    "retention_health": "unknown",
    "cac_health": "unknown"
  },
  "execution": {
    "implementation_confidence": "low",
    "architecture_confidence": "medium",
    "qa_confidence": "low",
    "release_readiness": "not-ready"
  },
  "support": {
    "top_ticket_themes": [],
    "onboarding_friction_known": false,
    "churn_theme_known": false
  },
  "hiring": {
    "next_hire_needed": "unknown",
    "capacity_pressure": "medium"
  },
  "focus": {
    "this_week": "turn scoped MVP into implementation plan",
    "active_sequence": "validate-to-build",
    "active_experiments": ["5 outbound conversations", "landing page v1"],
    "open_questions": ["Do we need CRM integration in the MVP?"],
    "recommended_next": {
      "type": "skill",
      "name": "implementation-planner",
      "reason": "scope is defined, but build confidence is low"
    }
  },
  "state_meta": {
    "version": 1,
    "last_updated": "2026-04-15",
    "last_reviewed": "2026-04-15",
    "confidence": "medium"
  }
}
```

---

# 4. Artifact graph model

## File location

```text
.fs/artifact-index.json
```

## Purpose

Tracks all artifacts the company has produced and how they relate.

## Core fields per artifact

```json
{
  "path": "product/positioning.md",
  "created_by": "positioning-writer",
  "created_at": "2026-04-15",
  "depends_on": [
    "strategy/customer-profile.md",
    "strategy/problem-validation-report.md"
  ],
  "feeds_into": [
    "launch/landing-page-copy.md",
    "sales/outbound-sequences.md",
    "ads/ad-test-matrix.md"
  ],
  "confidence": "medium",
  "freshness": "stale",
  "superseded_by": null,
  "state_tag": "positioning-state:drafted",
  "recommended_next": [
    "landing-page-copywriter",
    "outbound-sequence-writer"
  ]
}
```

## Why it matters

This is how the orchestrator knows:
- what already exists
- what is missing
- what is stale
- what is blocking downstream work
- what sequence step should run next

---

# 5. Sequence state

## File location

```text
.fs/sequence-state.json
```

## Purpose

Tracks progression through multi-step workflows.

## Example

```json
{
  "active_sequence": "validate-to-build",
  "steps": [
    { "name": "problem-validator", "status": "done" },
    { "name": "customer-hypothesis", "status": "done" },
    { "name": "mvp-scoper", "status": "done" },
    { "name": "implementation-planner", "status": "current" },
    { "name": "architecture-reviewer", "status": "pending" },
    { "name": "release-readiness-auditor", "status": "pending" }
  ],
  "blocked_by": [],
  "success_signal": "founder_can_start_build_with_no_major_ambiguity"
}
```

## Key idea

The orchestrator should prefer:
- continuing a valid active sequence
- unless a more urgent bottleneck overrides it

That keeps the system coherent instead of chatty and random.

---

# 6. Weekly operating state

## File location

```text
.fs/weekly-review.json
```

## Purpose

Tracks cadence and learning.

## Example

```json
{
  "week_of": "2026-04-14",
  "focus": "implementation confidence + first 5 sales conversations",
  "wins": ["clearer ICP", "MVP scope locked"],
  "misses": ["still no architecture plan"],
  "open_questions": ["should we sell before building CRM sync?"],
  "active_experiments": [
    {
      "name": "cold outbound test",
      "status": "running",
      "owner": "founder"
    }
  ],
  "top_bottleneck": "build-confidence",
  "recommended_next_week": "finish implementation plan and start outbound"
}
```

---

# 7. Bottleneck taxonomy

This is the most important routing concept.

The orchestrator should not just ask “what skill matches the user request?”

It should ask:

> “What is the highest-leverage bottleneck in the company right now?”

## Proposed bottleneck set

### Strategy bottlenecks
- `problem-clarity`
- `customer-clarity`
- `scope-clarity`
- `assumption-risk`

### Engineering + Product bottlenecks
- `build-confidence`
- `architecture-risk`
- `design-implementation-gap`
- `qa-risk`
- `release-risk`

### Launch / PMF bottlenecks
- `positioning-weakness`
- `launch-readiness`
- `activation-weakness`
- `retention-weakness`
- `pmf-uncertainty`

### GTM bottlenecks
- `sales-motion-weakness`
- `pipeline-weakness`
- `marketing-clarity`
- `seo-geo-gap`
- `ads-efficiency`

### Support / org bottlenecks
- `support-friction`
- `hiring-capacity`
- `ops-drift`
- `founder-focus`

## Rule

At any given time, the orchestrator should assign:
- one **primary bottleneck**
- one optional **secondary bottleneck**

Everything else is context.

---

# 8. Bottleneck detection logic

The system should use explicit heuristics.

## Example logic

### If pre-PMF and no clear customer profile
→ primary bottleneck = `customer-clarity`

### If MVP scope exists but no implementation plan or low implementation confidence
→ primary bottleneck = `build-confidence`

### If implementation plan exists but QA / release readiness weak
→ primary bottleneck = `qa-risk` or `release-risk`

### If product is launched but users are not converting
→ primary bottleneck = `activation-weakness`

### If users exist but no repeatable acquisition motion
→ primary bottleneck = `sales-motion-weakness` or `marketing-clarity`

### If ads are running but CAC is rising
→ primary bottleneck = `ads-efficiency`

### If support themes are repetitive and not translated into product decisions
→ primary bottleneck = `support-friction`

### If many things are wrong but founder focus is scattered
→ primary bottleneck = `founder-focus`

---

# 9. Orchestrator routing algorithm

## Input
- company state
- artifact graph
- sequence state
- current user request
- host capabilities

## Output
- recommended skill or sequence
- reason for recommendation
- expected output artifact(s)
- whether to continue current sequence or branch

## Pseudocode

```text
1. Load company-state.json
2. Load artifact-index.json
3. Load sequence-state.json
4. Parse user request intent
5. Detect explicit override requests
   - if user explicitly asks for a specific skill, respect it unless unsafe
6. Detect primary bottleneck
7. Check if active sequence should continue
8. Check if a readiness gate is failing
9. Choose:
   a) next skill in active sequence
   b) a better sequence for the bottleneck
   c) a direct specialist skill
10. Generate reason + expected outputs
11. Update state after completion
```

## Routing priority order

1. explicit founder instruction
2. blocking readiness gate
3. active sequence continuation
4. highest-leverage bottleneck
5. secondary bottleneck

This ensures the system is opinionated, but not stubborn.

---

# 10. Readiness gates

This is a gstack-like idea that should be expanded massively.

## Founder Skills OS readiness gates

### `build-readiness`
Passes only when:
- MVP scope exists
- implementation plan exists
- major architecture risks identified
- design-build brief exists if UI-heavy product

### `launch-readiness`
Passes only when:
- positioning exists
- landing page exists
- pricing is framed
- launch plan exists
- QA confidence is acceptable

### `sales-readiness`
Passes only when:
- ICP exists
- message architecture exists
- outbound or call flow exists
- objection handling exists

### `ads-readiness`
Passes only when:
- positioning is strong
- landing page is aligned
- offer exists
- tracking plan exists
- CAC baseline logic exists

### `pmf-review-readiness`
Passes only when:
- north star exists
- PMF signal framework exists
- retention / churn data is available or explicitly missing

These gates should influence routing.

---

# 11. Weekly operating rhythm

This is another place Founder Skills should dominate.

## Weekly loop

### Monday — Decide
- review company state
- review top bottleneck
- lock focus for the week
- choose active sequence / experiments

### Midweek — Execute
- continue active sequence
- produce missing artifacts
- update confidence / freshness

### Friday — Learn
- run weekly founder review
- note wins / misses / surprises
- update artifact graph
- recommend next week’s focus

## Why this matters

This turns Founder Skills into a **company rhythm**, not just a request-response tool.

---

# 12. The Engineering + Product pillar inside state and routing

This is where Founder Skills should directly absorb the best build/product strengths from gstack.

## New execution-specific state fields

```json
{
  "execution": {
    "product_reframed": true,
    "implementation_confidence": "low",
    "architecture_confidence": "medium",
    "design_to_code_ready": false,
    "review_state": "not-started",
    "qa_confidence": "low",
    "release_readiness": "not-ready"
  }
}
```

## New engineering-product routing behaviors

### If founder has scope but low build confidence
→ `implementation-planner`

### If founder has implementation plan but architecture risk
→ `architecture-reviewer`

### If UI vision exists but build handoff is weak
→ `design-to-code-brief`

### If changes shipped but quality signal is weak
→ `qa-verifier`

### If launch is planned but build readiness unclear
→ `release-readiness-auditor`

## The key improvement over gstack

gstack answers:
- how to plan and ship software

Founder Skills OS should answer:
- how to plan and ship software **in service of founder goals, launch timing, PMF, and GTM readiness**

That is the higher-order architecture.

---

# 13. Chat hosts vs coding-agent hosts

The orchestrator must stay host-neutral.

## Core rule
The routing decision should not depend on whether the host is:
- pi
- Claude Code
- Codex
- OpenCode
- ChatGPT
- Claude chat

The host should only change:
- delivery format
- installation method
- interaction style
- degree of automation

## Example

If the bottleneck is `build-confidence`:

### On pi / Claude Code / Codex
Deliver:
- direct `implementation-planner` skill
- sequence continuation
- artifact write instructions

### On ChatGPT / Claude chat
Deliver:
- system-prompt bundle for validate-to-build
- conversation starter for implementation planning
- expected artifact checklist
- next continuation prompt

Same logic. Different surface.

---

# 14. State update rules

The orchestrator must update state after every meaningful run.

## Update categories

### Artifact updates
- new artifact created
- artifact superseded
- artifact freshness changed
- artifact confidence changed

### Sequence updates
- step completed
- sequence blocked
- sequence completed

### Company updates
- stage changed
- bottleneck changed
- metric updated
- recommended next changed

### Weekly rhythm updates
- focus locked
- experiment started
- weekly review completed

Without state updates, the system does not compound.

---

# 15. Example “next move” decisions

## Example A
State:
- customer profile exists
- MVP brief exists
- positioning draft exists
- no implementation plan
- founder says: “I know what I want to build, but I’m not sure how to turn this into a real build plan.”

Decision:
- bottleneck = `build-confidence`
- route = `implementation-planner`
- output = `implementation-plan.md`
- next-after = `architecture-reviewer`

## Example B
State:
- implementation plan exists
- QA confidence low
- founder says: “We’re close to launch. Can you sanity-check whether this is actually ready?”

Decision:
- bottleneck = `release-risk`
- route = `release-readiness-auditor`
- output = `release-readiness.md`
- next-after = `launch-plan-builder`

## Example C
State:
- launched product
- weak demos-to-close ratio
- founder asks about growth

Decision:
- bottleneck = `sales-motion-weakness`
- route = `pipeline-reviewer` or `sales-call-script-builder`
- output = `pipeline-review.md`
- next-after = `objection-mapper`

---

# 16. Metrics the orchestrator should care about

The orchestrator should route based on a blend of:

## Strategic metrics
- PMF signal
- north star
- stage
- focus clarity

## Build metrics
- implementation confidence
- architecture confidence
- QA confidence
- release readiness

## GTM metrics
- pipeline health
- conversion signal
- CAC health
- SEO/GEO maturity

## Support metrics
- ticket theme repetition
- onboarding friction clarity
- churn theme clarity

It should not rely only on user wording in the current message.

---

# 17. What makes this better than gstack

## gstack’s strength
A highly structured software-delivery operating environment.

## Founder Skills OS improvement
A highly structured **company operating environment** with an integrated build engine.

That means the orchestrator can reason at a higher layer:
- not just “should we QA this page?”
- but “is the company’s top bottleneck product quality, build readiness, launch readiness, sales motion, or PMF uncertainty?”

That is the real leap.

---

# 18. The minimum v1 orchestrator

If building this in phases, the minimum viable orchestrator should support:

## State files
- `company-state.json`
- `artifact-index.json`
- `sequence-state.json`
- `weekly-review.json`

## Bottlenecks
- `scope-clarity`
- `build-confidence`
- `launch-readiness`
- `pmf-uncertainty`
- `sales-motion-weakness`
- `founder-focus`

## Sequences
- `validate-to-build`
- `build-to-launch`
- `gtm-engine`
- `weekly-operating-rhythm`

## Domains
- strategy
- engineering-product
- launch
- pmf
- sales
- partner

This would already feel much more like an operating system.

---

# 19. Final rule

The orchestrator should always answer these four questions:

1. **What state is the company actually in?**
2. **What is the single biggest bottleneck right now?**
3. **What skill or sequence resolves that bottleneck next?**
4. **What artifact or decision should exist when we are done?**

If Founder Skills OS can do that consistently — across pi, Claude Code, Codex, OpenCode, ChatGPT, and Claude chat — it becomes far more powerful than a founder skill pack and meaningfully broader than gstack.
