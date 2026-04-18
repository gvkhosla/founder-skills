# Founder Skills OS — Concrete Repo & Folder Architecture

This is the concrete architecture for turning Founder Skills from a strong founder skill pack into a **full operating system for AI-native startups**.

The goal is to take the **best system ideas from gstack** and improve them with the **higher-order architecture, company memory, and founder focus** that Founder Skills already does better.

---

## The core design principle

**gstack's best idea:** a skill system should feel like an operating environment, not a bag of prompts.

**Founder Skills improvement:** that operating environment should cover the **whole company**, not just software delivery.

So Founder Skills OS should become:

- **founder-first** in language and outputs
- **stateful** across weeks and months
- **cross-functional** across product, engineering, sales, marketing, SEO/GEO, ads, support, hiring, and ops
- **testable** with evals and workflow regression tests
- **agent-agnostic** across pi, Claude Code, Codex, OpenCode, Cursor, OpenClaw, Hermes, ChatGPT, Claude chat, and future hosts

---

# 1. Top-level repo structure

```text
founder-skills/
├─ apps/
│  ├─ cli/                         # founder-skills CLI
│  ├─ studio/                      # local / hosted UI for company state + artifacts
│  └─ site/                        # fskills.xyz marketing site
│
├─ packages/
│  ├─ core/                        # shared runtime primitives, parsers, routing interfaces
│  ├─ orchestrator/                # founder-partner 2.0 / company operator
│  ├─ state/                       # company-state schemas, freshness, confidence, bottlenecks
│  ├─ graph/                       # artifact graph, dependencies, supersession, next-step logic
│  ├─ skillgen/                    # generate host-specific skill files from canonical source
│  ├─ hosts/                       # pi / claude-code / codex / opencode / cursor / openclaw / hermes / chatgpt / claude-chat adapters
│  ├─ execution/                   # engineering + product workflows: plan, review, QA, release
│  ├─ connectors/                  # analytics, Stripe, CRM, support, repo, ads, SEO data imports
│  ├─ validators/                  # skill linting, consistency checks, readiness gates
│  ├─ evals/                       # scenario eval runners, scoring, benchmarks
│  ├─ browser/                     # optional browser/QA layer borrowed from gstack-style ideas
│  └─ ui/                          # shared UI components for Studio + docs views
│
├─ source/
│  ├─ skills/                      # canonical skill source files by domain
│  ├─ sequences/                   # multi-step workflows (validate→build, GTM engine, PMF recovery)
│  ├─ validators/                  # runtime validators for state, artifacts, sequences, and scorecards
│  ├─ rubrics/                     # scoring rubrics for evals and artifact quality
│  └─ templates/                   # host and artifact templates
│
├─ generated/
│  ├─ pi/
│  ├─ claude-code/
│  ├─ codex/
│  ├─ opencode/
│  ├─ cursor/
│  ├─ openclaw/
│  ├─ hermes/
│  ├─ chatgpt/
│  ├─ claude-chat/
│  └─ generic/
│
├─ examples/
│  ├─ demo-company/                # example company state + artifacts
│  └─ scenarios/                   # canonical startup scenarios for docs and evals
│
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  ├─ workflow/
│  ├─ evals/
│  └─ fixtures/
│
├─ docs/
│  ├─ internal/
│  ├─ legacy/
│  ├─ README.md
│  └─ founder-skills-os-install-export-flows.md
│
├─ scripts/
│  ├─ gen-host-skills.ts
│  ├─ gen-site-data.ts
│  ├─ lint-skills.ts
│  ├─ run-evals.ts
│  ├─ sync-readme.ts
│  └─ doctor.ts
│
├─ package.json
├─ pnpm-workspace.yaml             # or turbo.json / nx.json if you want task orchestration
└─ README.md
```

## Important host model

Founder Skills OS should support **two host classes**:

### A. Native coding-agent hosts
These support skill files, slash commands, AGENTS/CLAUDE-style instructions, or direct tool workflows.

Examples:
- pi
- Claude Code
- Codex
- OpenCode
- Cursor
- OpenClaw

### B. Conversational hosts
These may not support native skill folders, but they still matter because many founders work directly in chat products.

Examples:
- ChatGPT
- Claude chat

For these hosts, the system should generate:
- host-optimized prompt packs
- conversation starters
- structured paste-in system prompts
- artifact-aware workflows
- sequence-specific starter prompts

**Rule:** the canonical source should never be tied to one host's format. Generate host-native outputs where possible, and **portable prompt bundles** where not.

---

# 2. What this steals from gstack — and improves

| Borrow from gstack | Keep | Improve in Founder Skills OS |
|---|---|---|
| Generated host-specific skill files | Yes | Generate from cleaner canonical source, not giant hand-edited skill docs |
| Multi-host support | Yes | Make host support subordinate to company-state and artifact graph |
| Claude Code-style workflow rigor | Yes | Apply it across pi, Codex, OpenCode, ChatGPT, Claude chat, and future hosts |
| Workflow chaining | Yes | Chain across the **whole startup**, not just coding workflows |
| Skill lint/check tooling | Yes | Add artifact quality, business utility, and cross-function checks |
| Review / QA / ship discipline | Yes | Put it inside an **Engineering + Product** pillar tied to founder goals |
| Browser/QA capability | Maybe / optional package | Use it only where it helps product QA and growth workflows |
| Update/config/install rigor | Yes | Keep it simpler and more founder-readable |
| Learnings/memory | Yes | Upgrade to full structured company state + artifact graph |

**Short version:**
- gstack contributes the **operating discipline**
- Founder Skills contributes the **company architecture and founder judgment**

---

# 3. Canonical source layout for skills

Do **not** keep the long-term system centered on raw `SKILL.md` files alone.

Use a cleaner canonical source structure, then generate host-specific skill outputs and chat-native prompt bundles.

## Proposed canonical skill layout

```text
source/skills/[domain]/[skill-name]/
├─ skill.yaml                      # metadata
├─ prompt.md                       # canonical instructions
├─ reference.md                    # deeper frameworks / catalogues / examples
├─ outputs.schema.json             # expected artifact contract
├─ examples/
│  ├─ happy-path.md
│  └─ edge-case.md
├─ evals/
│  ├─ scenario-1.json
│  └─ scenario-2.json
└─ fixtures/
   └─ sample-input.json
```

## `skill.yaml` should contain

```yaml
name: implementation-planner
category: engineering-product
phase: engineering-product
invocations:
  - "Help me plan the implementation"
  - "How should we build this?"
outputs:
  - implementation-plan.md
depends_on:
  - mvp-brief.md
  - positioning.md
feeds_into:
  - architecture-overview.md
  - qa-report.md
  - release-readiness.md
readiness_gate: build-readiness
requires_state:
  - current_stage
  - product_scope
  - active_bottleneck
quality_checks:
  - specific_recommendation
  - concrete_output
  - next_step_present
```

## Why this is better than today's repo

It gives you:
- a **single source of truth**
- clean generation for every host
- built-in eval hooks
- explicit artifact contracts
- explicit dependency graph links

This is the right evolution of what gstack does with `SKILL.md.tmpl`, but more structured, more founder-system aware, and not locked to Claude Code-style skill mechanics.

---

# 4. Domain layout: the real Founder Skills OS taxonomy

```text
source/skills/
├─ strategy/
├─ design/
├─ engineering-product/
├─ launch/
├─ pmf/
├─ sales/
├─ marketing/
├─ ads/
├─ support/
├─ hiring/
├─ finance/
├─ operations/
└─ partner/
```

## Domain responsibilities

### `strategy/`
Problem validation, customer definition, assumptions, competitive context, MVP scope.

### `design/`
Flows, design direction, heuristics, design language, founder-readable UI guidance.

### `engineering-product/`
This is the **new missing pillar** that steals the best build/product pieces from gstack.

Suggested initial skills:

```text
source/skills/engineering-product/
├─ product-reframer/               # gstack office-hours / CEO-review spirit, founder-first
├─ implementation-planner/         # build plan from scope + positioning
├─ architecture-reviewer/          # system design, edge cases, dependencies, risks
├─ design-to-code-brief/           # build-ready UI/system handoff
├─ build-sequencer/                # sprint / milestone sequencing
├─ code-review-brief/              # founder-readable review + risk scan
├─ qa-verifier/                    # product QA + regression focus
├─ release-readiness-auditor/      # ship gate, docs/tests/support/readiness
└─ post-ship-review/               # what changed, what broke, what to fix next
```

### `launch/`
Positioning, landing pages, launch plans, pricing, launch readiness.

### `pmf/`
PMF signals, north star, retention, churn, growth loops, experiment framing.

### `sales/`
ICP, outbound, calls, objections, pipeline review, lost-deal analysis.

### `marketing/`
Messaging architecture, content engine, content calendar, channel strategy, SEO/GEO.

### `ads/`
Angle generation, creative briefs, landing-page matching, CAC diagnosis, retargeting.

### `support/`
Ticket theme clustering, save playbooks, onboarding friction, churn signal extraction.

### `hiring/`
First hires, role design, human-vs-agent decisions, onboarding plans.

### `finance/`
Pricing systems, runway framing, spend discipline, margin diagnosis.

### `operations/`
Weekly review, board updates, experiment reviews, bottleneck diagnosis.

### `partner/`
The top-level orchestrator and company memory interface.

---

# 5. Sequences: the part that makes it feel like a system

This is one of the most important ideas to take from gstack.

Skills should not just be one-off tools. They should be grouped into **company workflows**.

## Repo structure

```text
source/sequences/
├─ founder-intake/
├─ validate-to-build/
├─ build-to-launch/
├─ gtm-engine/
├─ pmf-recovery/
├─ weekly-operating-rhythm/
├─ first-hire-decision/
└─ support-to-roadmap/
```

## Example: `validate-to-build/`

```text
source/sequences/validate-to-build/
├─ sequence.yaml
├─ steps.md
├─ outputs.schema.json
└─ evals/
```

### `sequence.yaml`

```yaml
name: validate-to-build
entrypoint: founder-partner
steps:
  - problem-validator
  - customer-hypothesis
  - mvp-scoper
  - product-reframer
  - implementation-planner
  - architecture-reviewer
  - release-readiness-auditor
primary_outputs:
  - mvp-brief.md
  - implementation-plan.md
  - architecture-overview.md
  - release-readiness.md
success_signal:
  - founder_can_start_build_with_no_major_ambiguity
```

## Why sequences matter

Because the system can say:

> “Given your stage and bottleneck, run this sequence next.”

That is a much bigger jump than simply adding more skills.

---

# 6. The orchestrator package: founder-partner 2.0

This is the package that upgrades Founder Skills from a library into an OS.

## Repo location

```text
packages/orchestrator/
├─ src/
│  ├─ founder-partner.ts
│  ├─ bottleneck-detector.ts
│  ├─ sequence-router.ts
│  ├─ readiness-router.ts
│  └─ next-step-engine.ts
└─ tests/
```

## Responsibilities

- read company state
- read artifact graph
- detect the current bottleneck
- recommend the next skill or sequence
- decide whether the bottleneck is:
  - product clarity
  - build confidence
  - launch readiness
  - PMF weakness
  - sales weakness
  - marketing weakness
  - ads inefficiency
  - support friction
  - hiring capacity
- update state after each run

## Improvement over gstack

gstack routes mostly within a software delivery workflow.

Founder Skills OS should route at the **company level**.

That is the higher architecture.

---

# 7. State engine: the real moat

This is the most important structural improvement.

## Repo location

```text
packages/state/
├─ src/
│  ├─ company-state.ts
│  ├─ freshness.ts
│  ├─ confidence.ts
│  ├─ bottlenecks.ts
│  ├─ stage-machine.ts
│  └─ workspace.ts                 # runtime validation + state IO
```

## Core state schema

```json
{
  "company": {
    "name": "Acme",
    "stage": "building",
    "founder_type": "non-technical",
    "current_bottleneck": "build-confidence"
  },
  "metrics": {
    "north_star": { "name": "weekly active teams", "value": 12 },
    "pmf_signal": "faint",
    "revenue": 1200,
    "pipeline_health": "weak",
    "cac_state": "unknown"
  },
  "focus": {
    "this_week": "finish implementation plan and launch page",
    "active_sequence": "validate-to-build"
  },
  "artifacts": {
    "stale": ["positioning.md"],
    "high_confidence": ["customer-profile.md"],
    "missing": ["implementation-plan.md"]
  }
}
```

## What this enables

- freshness checks
- stateful routing
- better UI
- better tests
- better weekly reviews
- actual company memory

This is where Founder Skills can surpass gstack decisively.

---

# 8. Artifact graph package

## Repo location

```text
packages/graph/
├─ src/
│  ├─ artifact-index.ts
│  ├─ dependency-graph.ts
│  ├─ supersession.ts
│  ├─ next-artifact.ts
│  └─ stale-detection.ts
└─ tests/
```

## Purpose

Every artifact should know:
- who created it
- what it depends on
- what it feeds into
- whether it is stale
- what replaced it
- what sequence uses it next

## Example artifact metadata

```json
{
  "path": "product/positioning.md",
  "created_by": "positioning-writer",
  "depends_on": ["strategy/customer-profile.md", "strategy/problem-validation-report.md"],
  "feeds_into": ["launch/landing-page-copy.md", "sales/outbound-sequences.md", "ads/ad-test-matrix.md"],
  "confidence": "medium",
  "freshness": "stale",
  "recommended_next": ["landing-page-copywriter", "outbound-sequence-writer"]
}
```

This is how the system becomes cumulative instead of session-local.

---

# 9. Build / execution package: take the best gstack coding ideas, but keep founder focus

This is the package that ensures the build side never feels lacking.

## Repo location

```text
packages/execution/
├─ src/
│  ├─ product-review.ts
│  ├─ implementation-plan.ts
│  ├─ architecture-review.ts
│  ├─ design-to-code.ts
│  ├─ code-review.ts
│  ├─ qa.ts
│  ├─ release-readiness.ts
│  └─ ship-handoff.ts
└─ tests/
```

## What to borrow from gstack

- product reframing before implementation
- architecture review as a first-class step
- design-to-code discipline
- review and QA as standard workflow steps
- release readiness instead of loose “ship it” vibes

## What to improve for Founder Skills

- every build workflow must stay anchored to:
  - `mvp-brief.md`
  - `positioning.md`
  - current company stage
  - founder type
  - launch / PMF / support context
- outputs should stay **founder-readable**, not just engineer-readable
- build decisions should be explained in terms of:
  - speed
  - risk
  - validation value
  - customer impact
  - launch readiness

That is the higher-order Founder Skills layer.

---

# 10. Connectors package

This is what makes the system evidence-backed.

## Repo location

```text
packages/connectors/
├─ analytics/
├─ stripe/
├─ crm/
├─ support/
├─ repo/
├─ ads/
├─ seo/
└─ survey/
```

## Initial connectors to prioritize

### Must-have
- `repo/` → GitHub / local repo summary for build workflows
- `analytics/` → PostHog / GA / Amplitude
- `stripe/` → pricing / revenue / churn context
- `support/` → Intercom / Zendesk / exported CSV

### Next
- `crm/` → HubSpot / Pipedrive / Notion CRM
- `ads/` → Meta / Google Ads exports
- `seo/` → Search Console / Ahrefs / CSV

## Why this matters

This is how you turn Founder Skills from “good advice” into “advice grounded in current company evidence.”

---

# 11. Generated host outputs

Take this idea directly from gstack, but keep the canonical source cleaner and make the output layer truly agent-agnostic.

## Repo structure

```text
generated/
├─ pi/
├─ claude-code/
├─ codex/
├─ opencode/
├─ cursor/
├─ openclaw/
├─ chatgpt/
├─ claude-chat/
└─ generic/
```

These are **build artifacts**, not source of truth.

Example:

```text
generated/pi/engineering-product/implementation-planner/SKILL.md
generated/claude-code/sales/outbound-sequence-writer/SKILL.md
generated/codex/launch/landing-page-copywriter/SKILL.md
generated/chatgpt/pmf/pmf-signal-reader/system-prompt.md
generated/claude-chat/sales/pipeline-review/conversation-starter.md
```

## Why this is better than the current repo

- clean source / build separation
- easier host customization
- easier support for both coding agents and pure chat products
- easier freshness checks
- easier diffs
- easier tests

---

# 12. Tests folder architecture

This is non-negotiable if you want Founder Skills OS to become a serious product.

```text
tests/
├─ unit/
│  ├─ state/
│  ├─ graph/
│  ├─ routing/
│  └─ validators/
├─ integration/
│  ├─ host-generation/
│  ├─ connectors/
│  └─ cli/
├─ workflow/
│  ├─ validate-to-build.test.ts
│  ├─ gtm-engine.test.ts
│  ├─ pmf-recovery.test.ts
│  └─ support-to-roadmap.test.ts
├─ evals/
│  ├─ founder-scenarios.test.ts
│  ├─ artifact-quality.test.ts
│  └─ regression-quality.test.ts
└─ fixtures/
   ├─ demo-company/
   ├─ pre-pmf-b2b/
   ├─ consumer-activation-problem/
   ├─ sales-stalled/
   └─ ads-cac-rising/
```

## Test types

### Structure tests
- frontmatter valid
- outputs declared
- dependencies valid
- host generation works

### Consistency tests
- README matches source skills
- site data matches source skills
- generated host files are fresh
- chat prompt bundles are fresh
- sequences reference real skills

### Workflow tests
- product → engineering → QA → release sequence works
- PMF → support → retention → experiment sequence works
- sales → ads → support sequence stays coherent

### Quality evals
- output is specific
- output makes a recommendation
- output is actionable in 7 days
- output is consistent with company state
- output avoids option-list mush

This is a direct upgrade path from gstack’s stronger testing culture.

---

# 13. Startup workspace layout in a user project

This is not the repo itself — this is the **output structure** inside a company using Founder Skills OS.

```text
my-startup/
├─ .fs/
│  ├─ company-state.json
│  ├─ artifact-index.json
│  ├─ sequence-state.json
│  ├─ imports/
│  │  ├─ analytics/
│  │  ├─ stripe/
│  │  ├─ crm/
│  │  └─ support/
│  └─ logs/
│
├─ strategy/
├─ product/
├─ engineering/
├─ launch/
├─ sales/
├─ marketing/
├─ ads/
├─ support/
├─ hiring/
├─ operations/
└─ founder-context.md
```

## Why this matters

This gives the system a predictable workspace:
- human-readable artifacts in clear folders
- machine-readable state in `.fs/`
- consistent handoff surfaces for build / launch / sales / support workflows

This is the company equivalent of gstack’s repo-level operating environment.

---

# 14. Recommended implementation order

## Phase 1 — Foundation
1. move to canonical `source/skills/` structure
2. add `packages/skillgen`
3. add `packages/validators`
4. fix current drift and generate README / site / llms from source

## Phase 2 — OS layer
5. add `packages/state`
6. add `packages/graph`
7. upgrade `founder-partner` into `packages/orchestrator`
8. add first 3 sequences

## Phase 3 — Build + GTM expansion
9. add `engineering-product/` domain
10. add `sales/`, `marketing/`, `ads/`, `support/`
11. add `packages/execution`

## Phase 4 — Proof and compounding advantage
12. add `packages/evals`
13. add connectors
14. add Studio UI over state + artifacts

---

# 15. Final strategic note

The repo architecture should express one central truth:

> **Founder Skills OS is not a Claude Code-centric coding tool with founder prompts added on.**
>
> It is an **agent-agnostic company operating system** with an integrated build engine.

That means:
- borrow gstack’s **discipline, generation, workflows, and tests**
- improve it with Founder Skills’ **company-level architecture, memory, and founder judgment**
- make **Engineering + Product** a first-class pillar so founders never feel build is missing
- support both **coding-agent hosts** and **pure chat hosts** cleanly
- connect everything through **state, graph, sequences, and evals**

If this architecture is executed well, Founder Skills will feel larger and more essential than either:
- a normal founder playbook
- or a pure AI coding workflow system

It becomes the system that tells a startup:
- what matters
- what to build
- how to build it
- how to sell it
- how to learn from it
- what to do next
