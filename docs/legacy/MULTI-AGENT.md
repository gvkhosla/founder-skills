# Multi-Agent Patterns in Founder Skills

Skills in this pack use parallel subagents wherever tasks are independent — scoring criteria, researching hypotheses, generating channel strategies. This document explains how multi-agent patterns work in each supported coding agent, and how skills are designed to take advantage of them.

---

## Why Multi-Agent

Sequential execution: Score MPP criterion 1 → 2 → 3 → 4 → 5. Time: 5 minutes.
Parallel execution: Score all 5 criteria simultaneously. Time: ~90 seconds. Each scorer has full focus.

Beyond speed: a subagent focused on ONE criterion — "Does this product create a feeling?" — gives a better answer than an agent context-switching across all five. Specialization improves quality, not just latency.

The pattern from compound-engineering: `/compound` uses 5 parallel subagents (Context Analyzer, Solution Extractor, Related Docs Finder, Prevention Strategist, Category Classifier) then ONE orchestrator assembles the result. That architecture is the model for every parallelized skill in this pack.

---

## Agent Capability Matrix

| Capability | pi | Claude | Codex |
|-----------|-----|------------|-------|
| Spawn parallel subagents (Task tool) | ✅ | ✅ | ⚠️ Sequential |
| Persistent teammate teams (TeammateTool) | ✅ | ✅ | ❌ |
| Named subagent types (Explore, Plan) | ✅ | ✅ | ❌ |
| Background execution | ✅ | ✅ | ❌ |
| Skill auto-discovery | ✅ | ✅ | Manual |
| `context: fork` frontmatter | ✅ | ❌ | ❌ |

**For Codex:** Skills describe the parallel intent. Run each agent step sequentially — same output, longer time. Every parallelized skill includes a "Sequential Fallback" section for this.

---

## How Skills Use Parallel Agents

Skills that use multi-agent patterns describe them in a **Parallel Execution** section. This section specifies:
- What each subagent does
- What type of agent (Explore for read-only research, general-purpose for analysis + write)
- What it returns to the orchestrator
- How the orchestrator synthesizes

### Pattern A — Parallel Specialists (Assessment skills)

Used by: `mpp-evaluator`, `failure-navigator`

```
Orchestrator spawns N specialist agents simultaneously.
Each specialist analyzes ONE thing independently.
Each returns findings to the orchestrator.
Orchestrator synthesizes all findings into a unified output.
```

```
                    ┌──────────────┐
                    │ ORCHESTRATOR │
                    └──────┬───────┘
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │Specialist│    │Specialist│    │Specialist│
    │    A     │    │    B     │    │    C     │
    └────┬─────┘    └────┬─────┘    └────┬─────┘
         │               │               │
         └───────────────┼───────────────┘
                         ↓
                  ┌──────────────┐
                  │  SYNTHESIS   │
                  └──────────────┘
```

### Pattern B — Research Swarm (Discovery skills)

Used by: `assumption-mapper`, `launch-plan-builder`

```
Orchestrator creates a task pool (one task per item to research).
Multiple Explore agents claim and complete tasks from the pool.
Orchestrator assembles results as they arrive.
```

### Pattern C — Pipeline with Parallel Phases (build-cycle)

```
Phase 1 (sequential) → Phase 2 (sequential) → Phase 3 (PARALLEL) → Phase 4 (sequential)
```

Some phases depend on previous results (sequential). Others are independent (parallel).

---

## Implementation by Agent

### pi

Use the `Task` tool directly in conversation, or define `context: fork` in SKILL.md frontmatter for the skill to run in its own context:

```yaml
---
name: mpp-criterion-scorer
context: fork
agent: Explore
user-invocable: false
---
Score the Pride Test criterion for the MPP Evaluator...
```

For orchestration in a skill prompt:
```
Spawn these agents in parallel (Task tool, run_in_background: true):
1. Agent: "Score Pride Test — read founder-context.md + last 3 cycles, score 1-10 with evidence"
2. Agent: "Score Recommendation Test — same sources, score 1-10 with evidence"
3. Agent: "Score Emotion Test — same sources, score 1-10 with evidence"
4. Agent: "Score Craft Test — same sources, score 1-10 with evidence"  
5. Agent: "Score Grief Test — same sources, score 1-10 with evidence"
Wait for all 5. Synthesize into mpp-scorecard.md.
```

### Claude

Use the `Task` tool with subagent types:

```javascript
// Spawn all 5 in one message block (runs in parallel)
Task({ subagent_type: "Explore", prompt: "Score Pride Test: read founder-context.md and cycles/, score 1-10 with specific evidence. Return: score + 2-sentence justification." })
Task({ subagent_type: "Explore", prompt: "Score Recommendation Test: read founder-context.md and cycles/, score 1-10 with specific evidence. Return: score + 2-sentence justification." })
Task({ subagent_type: "Explore", prompt: "Score Emotion Test: read founder-context.md and cycles/, score 1-10 with specific evidence. Return: score + 2-sentence justification." })
Task({ subagent_type: "Explore", prompt: "Score Craft Test: read founder-context.md and cycles/, score 1-10 with specific evidence. Return: score + 2-sentence justification." })
Task({ subagent_type: "Explore", prompt: "Score Grief Test: read founder-context.md and cycles/, score 1-10 with specific evidence. Return: score + 2-sentence justification." })
// Wait for all 5, then synthesize
```

For persistent multi-cycle work (e.g., build-cycle with long-running analysis):
```javascript
Teammate({ operation: "spawnTeam", team_name: "build-cycle-[date]" })
Task({ team_name: "build-cycle-[date]", name: "cycle-reader", subagent_type: "Explore", prompt: "Read all cycles/ documents and founder-context.md. Identify patterns across last 3 cycles. Send findings to team-lead.", run_in_background: true })
Task({ team_name: "build-cycle-[date]", name: "mpp-scorer", subagent_type: "Explore", prompt: "Score MPP criteria based on founder-context.md. Send scores to team-lead.", run_in_background: true })
Task({ team_name: "build-cycle-[date]", name: "pmf-analyst", subagent_type: "Explore", prompt: "Analyze PMF signals from cycles/ history. Send signal assessment to team-lead.", run_in_background: true })
// Wait for all 3, synthesize, cleanup
```

### Codex / OpenCode (Sequential Fallback)

Run each agent step sequentially. The same questions, the same frameworks — just one at a time:

```
Step 1: Score Pride Test (read context, score, return)
Step 2: Score Recommendation Test
Step 3: Score Emotion Test
Step 4: Score Craft Test
Step 5: Score Grief Test
Step 6: Synthesize all scores
```

Same output. Roughly 4–5× slower.

---

## The Critical Rule

**Subagents NEVER write files. Only the orchestrator writes.**

Wrong:
```
Subagent 1 → writes criterion-1-score.md
Subagent 2 → writes criterion-2-score.md
Orchestrator → assembles from files
```

Right:
```
Subagent 1 → returns "Pride Test: 4/10. Evidence: founder still explains limitations when showing the product."
Subagent 2 → returns "Recommendation Test: 2/10. Evidence: no unprompted sharing documented in any cycle."
Orchestrator → synthesizes all returns → writes mpp-scorecard.md
```

This pattern is from `/compound` — the orchestrator is the single writer. Subagents are readers and analyzers only.

---

## Subagent Types to Use

| Task | Best Subagent Type | Why |
|------|-------------------|-----|
| Read cycles/ and analyze patterns | `Explore` | Read-only, focused, fast (haiku) |
| Score a single criterion | `Explore` | Read-only analysis |
| Research a failure mode | `Explore` | Read-only investigation |
| Research a market assumption | `Explore` | Web search + read |
| Write the final synthesis | Orchestrator (main agent) | Only one writes |
| Generate channel strategy copy | `general-purpose` | Needs to generate + structure content |

---

## Skill Design Principle

Skills describe **what to parallelize and why**, not the exact API syntax. This keeps them agent-agnostic. Each agent reads the parallel intent and implements it using its native tools.

The parallel sections in skill files look like:

```markdown
## Parallel Execution

Spawn these agents simultaneously — do not run them sequentially:

**Agent 1 — [Name]:** [What it reads] → [What it returns]
**Agent 2 — [Name]:** [What it reads] → [What it returns]
**Agent 3 — [Name]:** [What it reads] → [What it returns]

Wait for all agents to return. Then synthesize.
```

This description works in pi, Claude, and as a sequential checklist in Codex/OpenCode.
