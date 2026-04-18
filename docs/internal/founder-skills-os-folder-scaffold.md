# Founder Skills OS — Folder Scaffolding Plan

This is the **concrete scaffold** for building Founder Skills OS as an agent-agnostic company operating system.

It is designed to take the best parts of gstack:
- workflow rigor
- generated host outputs
- strong validation
- review / QA / shipping discipline
- multi-host support

…and improve on them with what Founder Skills should uniquely own:
- founder-first language
- company-level state
- artifact graph + memory
- cross-functional workflows beyond coding
- engineering + product + sales + marketing + SEO/GEO + ads + support + ops
- value for both coding-agent users and pure chat users

---

# Design principles

## 1. Core is host-neutral
The source of truth must not be:
- `SKILL.md`
- `CLAUDE.md`
- `AGENTS.md`
- slash commands
- one provider's conventions

The source of truth should be:
- canonical skill specs
- canonical sequences
- company state schema
- artifact graph schema
- evaluation rubrics

## 2. Hosts are delivery surfaces
Hosts should be adapters, not architecture.

Supported host classes:
- coding-agent hosts: pi, Claude Code, Codex, OpenCode, Cursor, OpenClaw, Hermes
- conversational hosts: ChatGPT, Claude chat

## 3. Build is a first-class pillar
Founders should never feel the system helps them think and sell, but not ship.

Founder Skills OS must have a complete **Engineering + Product** layer:
- product reframing
- implementation planning
- architecture review
- design-to-code handoff
- review
- QA
- release readiness

## 4. The system must compound
Every run should strengthen:
- company state
- artifact graph
- next-step routing
- confidence / freshness signals
- the founder’s operating rhythm

---

# Full repo scaffold

```text
founder-skills/
├─ apps/
│  ├─ cli/
│  │  ├─ src/
│  │  │  ├─ index.ts
│  │  │  ├─ commands/
│  │  │  │  ├─ install.ts
│  │  │  │  ├─ generate.ts
│  │  │  │  ├─ doctor.ts
│  │  │  │  ├─ eval.ts
│  │  │  │  ├─ sequence.ts
│  │  │  │  └─ state.ts
│  │  │  └─ utils/
│  │  ├─ package.json
│  │  └─ README.md
│  │
│  ├─ studio/
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  ├─ components/
│  │  │  ├─ routes/
│  │  │  └─ lib/
│  │  ├─ public/
│  │  ├─ package.json
│  │  └─ README.md
│  │
│  └─ site/
│     ├─ src/
│     ├─ public/
│     ├─ package.json
│     └─ README.md
│
├─ packages/
│  ├─ core/
│  │  ├─ src/
│  │  │  ├─ types/
│  │  │  │  ├─ skill.ts
│  │  │  │  ├─ sequence.ts
│  │  │  │  ├─ artifact.ts
│  │  │  │  ├─ host.ts
│  │  │  │  └─ state.ts
│  │  │  ├─ loaders/
│  │  │  ├─ parsers/
│  │  │  └─ index.ts
│  │  └─ package.json
│  │
│  ├─ state/
│  │  ├─ src/
│  │  │  ├─ company-state.ts
│  │  │  ├─ stage-machine.ts
│  │  │  ├─ bottlenecks.ts
│  │  │  ├─ confidence.ts
│  │  │  ├─ freshness.ts
│  │  │  ├─ workspace.ts
│  │  │  └─ migrations/
│  │  └─ package.json
│  │
│  ├─ graph/
│  │  ├─ src/
│  │  │  ├─ artifact-index.ts
│  │  │  ├─ dependency-graph.ts
│  │  │  ├─ stale-detection.ts
│  │  │  ├─ supersession.ts
│  │  │  └─ next-step.ts
│  │  └─ package.json
│  │
│  ├─ orchestrator/
│  │  ├─ src/
│  │  │  ├─ founder-partner.ts
│  │  │  ├─ company-operator.ts
│  │  │  ├─ sequence-router.ts
│  │  │  ├─ bottleneck-router.ts
│  │  │  └─ readiness-router.ts
│  │  └─ package.json
│  │
│  ├─ skillgen/
│  │  ├─ src/
│  │  │  ├─ generate-host-output.ts
│  │  │  ├─ generate-chat-bundle.ts
│  │  │  ├─ templates/
│  │  │  ├─ transforms/
│  │  │  └─ emitters/
│  │  └─ package.json
│  │
│  ├─ hosts/
│  │  ├─ src/
│  │  │  ├─ base/
│  │  │  │  ├─ host-adapter.ts
│  │  │  │  ├─ coding-host.ts
│  │  │  │  ├─ chat-host.ts
│  │  │  │  └─ capability-matrix.ts
│  │  │  ├─ pi/
│  │  │  ├─ claude-code/
│  │  │  ├─ codex/
│  │  │  ├─ opencode/
│  │  │  ├─ cursor/
│  │  │  ├─ openclaw/
│  │  │  ├─ hermes/
│  │  │  ├─ chatgpt/
│  │  │  ├─ claude-chat/
│  │  │  └─ generic/
│  │  └─ package.json
│  │
│  ├─ execution/
│  │  ├─ src/
│  │  │  ├─ product-reframing.ts
│  │  │  ├─ implementation-plan.ts
│  │  │  ├─ architecture-review.ts
│  │  │  ├─ design-to-code.ts
│  │  │  ├─ code-review.ts
│  │  │  ├─ qa.ts
│  │  │  ├─ release-readiness.ts
│  │  │  └─ ship-handoff.ts
│  │  └─ package.json
│  │
│  ├─ connectors/
│  │  ├─ analytics/
│  │  ├─ stripe/
│  │  ├─ crm/
│  │  ├─ support/
│  │  ├─ repo/
│  │  ├─ ads/
│  │  ├─ seo/
│  │  └─ surveys/
│  │
│  ├─ validators/
│  │  ├─ src/
│  │  │  ├─ lint-skill.ts
│  │  │  ├─ lint-sequence.ts
│  │  │  ├─ check-consistency.ts
│  │  │  ├─ check-readiness-gates.ts
│  │  │  └─ check-generated-freshness.ts
│  │  └─ package.json
│  │
│  ├─ evals/
│  │  ├─ src/
│  │  │  ├─ run-scenario.ts
│  │  │  ├─ score-artifact.ts
│  │  │  ├─ score-sequence.ts
│  │  │  └─ regression.ts
│  │  ├─ scenarios/
│  │  ├─ rubrics/
│  │  └─ package.json
│  │
│  ├─ browser/
│  │  ├─ src/
│  │  │  ├─ qa-browser.ts
│  │  │  ├─ screenshot.ts
│  │  │  ├─ flow-runner.ts
│  │  │  └─ growth-landing-audit.ts
│  │  └─ package.json
│  │
│  └─ ui/
│     ├─ src/
│     └─ package.json
│
├─ source/
│  ├─ skills/
│  │  ├─ strategy/
│  │  ├─ design/
│  │  ├─ engineering-product/
│  │  ├─ launch/
│  │  ├─ pmf/
│  │  ├─ sales/
│  │  ├─ marketing/
│  │  ├─ ads/
│  │  ├─ support/
│  │  ├─ hiring/
│  │  ├─ finance/
│  │  ├─ operations/
│  │  └─ partner/
│  │
│  ├─ sequences/
│  │  ├─ founder-intake/
│  │  ├─ validate-to-build/
│  │  ├─ build-to-launch/
│  │  ├─ gtm-engine/
│  │  ├─ pmf-recovery/
│  │  ├─ weekly-operating-rhythm/
│  │  ├─ first-hire-decision/
│  │  └─ support-to-roadmap/
│  │
│  ├─ validators/
│  ├─ rubrics/
│  └─ templates/
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
│  ├─ demo-company/
│  └─ scenarios/
│
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  ├─ workflow/
│  ├─ evals/
│  └─ fixtures/
│
├─ docs/
├─ scripts/
├─ package.json
├─ pnpm-workspace.yaml
└─ README.md
```

---

# Domain scaffold with concrete filenames

## `source/skills/strategy/`

```text
source/skills/strategy/
├─ problem-validator/
│  ├─ skill.yaml
│  ├─ prompt.md
│  ├─ outputs.schema.json
│  └─ examples/
├─ customer-hypothesis/
├─ mvp-scoper/
├─ competitor-mapper/
├─ assumption-mapper/
└─ user-interview-guide/
```

## `source/skills/engineering-product/`

This is the major expansion that absorbs the best build/product ideas from gstack.

```text
source/skills/engineering-product/
├─ product-reframer/
│  ├─ skill.yaml
│  ├─ prompt.md
│  ├─ reference.md
│  └─ outputs.schema.json
├─ implementation-planner/
├─ architecture-reviewer/
├─ design-to-code-brief/
├─ build-sequencer/
├─ code-review-brief/
├─ qa-verifier/
├─ release-readiness-auditor/
└─ post-ship-review/
```

### Initial outputs
- `product-plan.md`
- `implementation-plan.md`
- `architecture-overview.md`
- `design-build-brief.md`
- `review-report.md`
- `qa-report.md`
- `release-readiness.md`
- `post-ship-review.md`

## `source/skills/sales/`

```text
source/skills/sales/
├─ icp-definer/
├─ outbound-sequence-writer/
├─ sales-call-script-builder/
├─ objection-mapper/
├─ pipeline-reviewer/
├─ lost-deal-analyzer/
└─ follow-up-composer/
```

## `source/skills/marketing/`

```text
source/skills/marketing/
├─ messaging-architect/
├─ content-engine-builder/
├─ content-calendar-planner/
├─ seo-geo-strategist/
├─ founder-narrative-writer/
└─ channel-strategy-designer/
```

## `source/skills/ads/`

```text
source/skills/ads/
├─ ad-angle-generator/
├─ creative-brief-writer/
├─ paid-acquisition-planner/
├─ landing-page-matcher/
├─ cac-diagnostician/
└─ retargeting-designer/
```

## `source/skills/support/`

```text
source/skills/support/
├─ support-insights-reader/
├─ onboarding-friction-analyzer/
├─ save-playbook-builder/
├─ churn-signal-extractor/
└─ support-to-roadmap-mapper/
```

## `source/skills/operations/`

```text
source/skills/operations/
├─ weekly-founder-review/
├─ board-update-drafter/
├─ experiment-planner/
├─ experiment-postmortem/
├─ bottleneck-diagnostician/
└─ focus-planner/
```

## `source/skills/partner/`

```text
source/skills/partner/
├─ founder-partner/
│  ├─ skill.yaml
│  ├─ prompt.md
│  ├─ routing.md
│  ├─ context-template.md
│  ├─ outputs.schema.json
│  └─ examples/
└─ company-operator/
```

---

# Canonical skill folder contract

Every canonical skill folder should look like this:

```text
source/skills/[domain]/[skill-name]/
├─ skill.yaml
├─ prompt.md
├─ reference.md                # optional
├─ outputs.schema.json
├─ examples/
│  ├─ happy-path.md
│  └─ edge-case.md
├─ evals/
│  ├─ scenario-1.json
│  └─ scenario-2.json
└─ fixtures/
   └─ sample-input.json
```

## Minimum `skill.yaml`

```yaml
name: implementation-planner
category: engineering-product
invocations:
  - "Help me plan the build"
  - "How should we implement this?"
outputs:
  - implementation-plan.md
depends_on:
  - mvp-brief.md
  - positioning.md
feeds_into:
  - architecture-overview.md
  - qa-report.md
  - release-readiness.md
host_support:
  - pi
  - claude-code
  - codex
  - opencode
  - chatgpt
  - claude-chat
quality_checks:
  - specific_recommendation
  - concrete_output
  - next_step_present
```

---

# Sequence scaffold with concrete filenames

## `source/sequences/validate-to-build/`

```text
source/sequences/validate-to-build/
├─ sequence.yaml
├─ steps.md
├─ outputs.schema.json
├─ prompts/
│  ├─ chatgpt.md
│  └─ claude-chat.md
└─ evals/
   ├─ b2b-prelaunch.json
   └─ founder-with-agency.json
```

## `source/sequences/gtm-engine/`

```text
source/sequences/gtm-engine/
├─ sequence.yaml
├─ steps.md
├─ outputs.schema.json
└─ evals/
```

## `source/sequences/weekly-operating-rhythm/`

```text
source/sequences/weekly-operating-rhythm/
├─ sequence.yaml
├─ monday.md
├─ friday.md
└─ outputs.schema.json
```

---

# Generated output scaffold

This is where canonical source becomes host-native deliverables.

## Coding-agent hosts

```text
generated/pi/
├─ strategy/problem-validator/SKILL.md
├─ engineering-product/implementation-planner/SKILL.md
└─ sequences/validate-to-build.md

generated/claude-code/
├─ strategy/problem-validator/SKILL.md
├─ engineering-product/qa-verifier/SKILL.md
├─ CLAUDE.section.md
└─ sequences/build-to-launch.md

generated/codex/
├─ strategy/problem-validator/SKILL.md
├─ operations/weekly-founder-review/SKILL.md
└─ AGENTS.section.md

generated/opencode/
├─ skills/engineering-product/release-readiness-auditor/SKILL.md
└─ project-instructions.md
```

## Chat hosts

```text
generated/chatgpt/
├─ bundles/
│  ├─ founder-intake/system-prompt.md
│  ├─ validate-to-build/system-prompt.md
│  └─ weekly-review/system-prompt.md
├─ skills/
│  ├─ sales/pipeline-review/conversation-starter.md
│  └─ pmf/pmf-signal-reader/conversation-starter.md
└─ workspace/
   └─ how-to-use.md

generated/claude-chat/
├─ bundles/
│  ├─ founder-intake/system-prompt.md
│  └─ build-to-launch/system-prompt.md
├─ skills/
│  ├─ marketing/seo-geo-strategist/conversation-starter.md
│  └─ support/support-insights-reader/conversation-starter.md
└─ workspace/
   └─ how-to-use.md
```

## Generic fallback

```text
generated/generic/
├─ skills/
├─ bundles/
└─ docs/
```

This is what makes the system truly agent-agnostic.

---

# User project scaffold

A startup using Founder Skills OS should have a predictable workspace.

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
│  │  ├─ support/
│  │  ├─ ads/
│  │  └─ seo/
│  ├─ generated/
│  └─ logs/
│
├─ strategy/
│  ├─ problem-validation-report.md
│  ├─ customer-profile.md
│  └─ mvp-brief.md
├─ product/
│  ├─ positioning.md
│  ├─ pricing-model.md
│  └─ roadmap.md
├─ engineering/
│  ├─ implementation-plan.md
│  ├─ architecture-overview.md
│  ├─ review-report.md
│  ├─ qa-report.md
│  └─ release-readiness.md
├─ launch/
├─ sales/
├─ marketing/
├─ ads/
├─ support/
├─ hiring/
├─ operations/
└─ founder-context.md
```

---

# Scripts scaffold

```text
scripts/
├─ gen-host-skills.ts
├─ gen-chat-bundles.ts
├─ gen-site-data.ts
├─ sync-readme.ts
├─ lint-skills.ts
├─ lint-sequences.ts
├─ check-generated-freshness.ts
├─ run-evals.ts
├─ import-analytics.ts
├─ import-support.ts
└─ doctor.ts
```

## Must-have script commands

```json
{
  "scripts": {
    "build": "pnpm run gen:all",
    "gen:all": "pnpm run gen:hosts && pnpm run gen:chat && pnpm run gen:site",
    "gen:hosts": "tsx scripts/gen-host-skills.ts",
    "gen:chat": "tsx scripts/gen-chat-bundles.ts",
    "gen:site": "tsx scripts/gen-site-data.ts",
    "lint": "pnpm run lint:skills && pnpm run lint:sequences && pnpm run check:consistency",
    "lint:skills": "tsx scripts/lint-skills.ts",
    "lint:sequences": "tsx scripts/lint-sequences.ts",
    "check:consistency": "tsx scripts/check-consistency.ts",
    "check:freshness": "tsx scripts/check-generated-freshness.ts",
    "eval": "tsx scripts/run-evals.ts",
    "doctor": "tsx scripts/doctor.ts"
  }
}
```

---

# Test scaffold

```text
tests/
├─ unit/
│  ├─ state/company-state.test.ts
│  ├─ graph/dependency-graph.test.ts
│  ├─ orchestrator/sequence-router.test.ts
│  └─ validators/lint-skill.test.ts
│
├─ integration/
│  ├─ host-generation/pi.test.ts
│  ├─ host-generation/claude-code.test.ts
│  ├─ host-generation/codex.test.ts
│  ├─ host-generation/opencode.test.ts
│  ├─ chat-generation/chatgpt.test.ts
│  └─ chat-generation/claude-chat.test.ts
│
├─ workflow/
│  ├─ validate-to-build.test.ts
│  ├─ build-to-launch.test.ts
│  ├─ gtm-engine.test.ts
│  ├─ pmf-recovery.test.ts
│  └─ support-to-roadmap.test.ts
│
├─ evals/
│  ├─ founder-scenarios.test.ts
│  ├─ artifact-quality.test.ts
│  └─ regression-quality.test.ts
│
└─ fixtures/
   ├─ pre-pmf-b2b/
   ├─ founder-with-agency/
   ├─ sales-stalled/
   ├─ ads-cac-rising/
   └─ post-launch-quality-issues/
```

---

# Massive improvements over gstack, expressed in the scaffold

## 1. Bigger scope
Not just software delivery.

This scaffold supports:
- engineering + product
- sales
- marketing
- SEO/GEO
- ads
- support
- hiring
- ops

## 2. Higher-order routing
Not just “which coding skill next?”

This scaffold supports:
- company bottlenecks
- stage-aware sequences
- artifact-driven next-step logic
- weekly operating rhythm

## 3. Better host model
Not just Claude-style environments.

This scaffold supports:
- coding agents
- pure chat products
- future generic hosts

## 4. Better compounding memory
Not just learnings or one-off state.

This scaffold supports:
- company-state
- artifact graph
- freshness
- confidence
- sequence state

## 5. Better founder value
Not just “help me code.”

This scaffold supports:
- decide what to build
- build it well
- launch it
- sell it
- market it
- run ads
- support customers
- learn what changed

---

# First implementation pass I would do immediately

## Step 1
Create these folders first:

```text
packages/core
packages/state
packages/graph
packages/orchestrator
packages/skillgen
packages/hosts
packages/validators
packages/evals
source/skills
source/sequences
generated
tests
```

## Step 2
Migrate current skills into:

```text
source/skills/strategy
source/skills/design
source/skills/launch
source/skills/pmf
source/skills/partner
source/skills/engineering-product
```

## Step 3
Add first new engineering-product skills:
- `product-reframer`
- `implementation-planner`
- `architecture-reviewer`
- `qa-verifier`
- `release-readiness-auditor`

## Step 4
Add host generation for:
- pi
- Claude Code
- Codex
- OpenCode
- ChatGPT
- Claude chat

## Step 5
Build 3 flagship sequences:
- `validate-to-build`
- `gtm-engine`
- `weekly-operating-rhythm`

That is enough to make the repo feel like the start of a real operating system instead of a skill collection.
