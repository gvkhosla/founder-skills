---
name: mpp-evaluator
description: Gives an honest, scored assessment of whether your product has crossed the Minimum Proud Product threshold. Uses 5 parallel scoring agents — one per criterion — then synthesizes into a composite score and the single most important gap to close. Use every 3–4 build cycles or before any major share/launch moment. Produces mpp-scorecard.md.
phase: compound
version: 2.0.0
---

# MPP Evaluator

## What Is MPP?

**Minimum Proud Product** — the minimum version you'd be genuinely proud to show to someone you deeply respect. Not just functional. Not just shipped. Something where a user feels something.

You've hit MPP when:
- You'd be embarrassed *not* to show it to someone you admire
- At least one user has described it to someone else without being asked
- The product creates a feeling, not just a function
- There's evidence in the details that someone cared deeply

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Evaluate my MPP"** or **"Run the MPP scorecard"** or **"Am I proud of this?"**

Output: `mpp-scorecard.md` — five criteria scored by independent agents, composite score, one gap named.

---

## Parallel Execution

Five independent criteria. Five parallel agents. All five can be scored simultaneously — there's no dependency between them.

**Before spawning agents, read:**
- `founder-context.md` — current stage, north star, last MPP score
- `cycles/` — the last 3 cycle records for behavioral evidence

**Spawn these 5 agents simultaneously:**

**Agent 1 — Pride Scorer**
Reads: `founder-context.md` + last cycle + any demo/share mentions in cycles
Task: Score the Pride Test (1–10): "Would the founder show this without apologizing?"
Returns: Score + 2-sentence evidence statement + the specific thing blocking a higher score

**Agent 2 — Recommendation Scorer**
Reads: `founder-context.md` + all cycles for mentions of sharing/referrals
Task: Score the Recommendation Test (1–10): "Has any user described it to someone else unprompted?"
Returns: Score + specific evidence (quotes from cycles if any, absence if none) + what would trigger sharing

**Agent 3 — Emotion Scorer**
Reads: `founder-context.md` + cycle records for user behavior descriptions
Task: Score the Emotion Test (1–10): "What do users feel after the core task?"
Returns: Score + evidence from user feedback in cycles + what the product currently makes users feel vs. what it should

**Agent 4 — Craft Scorer**
Reads: `founder-context.md` + any UX or design notes in cycles
Task: Score the Craft Test (1–10): "Is there evidence someone cared about the details?"
Returns: Score + specific gaps identified (error messages, empty states, copy quality) + 1 highest-leverage craft fix

**Agent 5 — Grief Scorer**
Reads: `founder-context.md` + cycle records for retention and engagement signals
Task: Score the Grief Test (1–10): "How would the best user react if this disappeared tomorrow?"
Returns: Score + evidence (retention data, user quotes) + what would need to be true for a higher grief score

**Wait for all 5 agents to return. The orchestrator (main agent) synthesizes.**

---

## Synthesis (Orchestrator Only)

After all 5 scores return:

**1. Calculate composite:** Average of 5 criterion scores.

**2. Find the gap:** Which single criterion, if improved by 2+ points, would move the composite most? That's the gap to name.

**3. Write `mpp-scorecard.md`** (orchestrator is the only writer):

```markdown
# MPP Scorecard — [YYYY-MM-DD]

## Scores
| Criterion | Score | Key Evidence |
|-----------|-------|-------------|
| Pride Test | [X]/10 | [Agent 1's evidence statement] |
| Recommendation Test | [X]/10 | [Agent 2's evidence statement] |
| Emotion Test | [X]/10 | [Agent 3's evidence statement] |
| Craft Test | [X]/10 | [Agent 4's evidence statement] |
| Grief Test | [X]/10 | [Agent 5's evidence statement] |

**Composite: [X.X]/10**

## Interpretation
[Score range interpretation — see criteria reference]

## What MPP Looks Like for [Your Product]
[Specific description of what THIS product needs to be to earn MPP — not generic]

## The One Gap
[The criterion holding back the score most + the specific fix]

## What Changes When You Close This Gap
[One sentence — what happens to the product and users if this gap closes]
```

**4. Update `founder-context.md`:** Set `mpp-score` to the new composite.

---

## The Five Criteria (Quick Reference)

For the deep criteria guide, see [mpp-criteria.md](mpp-criteria.md).

| Criterion | The Question | 1–3 | 4–6 | 7–9 | 10 |
|-----------|-------------|-----|-----|-----|-----|
| **Pride** | Show without apologizing? | Avoid showing | Show with caveats | Show without apology | Excited to share |
| **Recommendation** | Unprompted sharing? | None | 1–2 instances | Regular pattern | Measurable word-of-mouth |
| **Emotion** | What users feel after core task? | Nothing | Mild satisfaction | Clear positive feeling | Delight |
| **Craft** | Evidence someone cared? | Rough, placeholder | Mostly functional | Details considered | Every touchpoint intentional |
| **Grief** | React if it disappeared? | Would shrug | Mild inconvenience | Genuinely frustrated | Devastated |

**Composite ≥ 7.0 = MPP achieved.** Below 7.0: fix the lowest criterion first.

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, run each criterion assessment in sequence:

1. Pride Test → score + evidence
2. Recommendation Test → score + evidence
3. Emotion Test → score + evidence
4. Craft Test → score + evidence
5. Grief Test → score + evidence
6. Synthesize → write `mpp-scorecard.md`

Same output. ~4× longer.

---

## Related Skills

- **build-cycle** uses this skill's criteria in Phase 3 (abbreviated in-cycle version)
- **failure-navigator** — if MPP score is flat across 3+ cycles, run this next
- **founder-partner** (Partner phase) — uses MPP trajectory as a key health signal
