---
name: failure-navigator
description: Diagnoses why your product isn't gaining traction after multiple build cycles. Spawns 5 parallel hypothesis agents — one per failure mode — each gathering independent evidence. Synthesizes into a ranked diagnosis with a specific 2-cycle prescription. Triggered automatically by build-cycle after 3+ flat cycles, or invoked directly when stuck. Produces diagnosis.md.
phase: compound
version: 2.0.0
---

# Failure Navigator

## What This Is

Most founders who give up do so not because the problem was insurmountable, but because they couldn't distinguish between "keep going" and "change direction." This skill ends that confusion.

When cycles stop producing signal improvement, there are exactly five possible reasons. This skill tests all five simultaneously and tells you which one is most likely — with evidence, not intuition.

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Help me figure out why I'm stuck"** or **"Run failure navigator"** or **"Why isn't this working?"**

Auto-triggered by `build-cycle` after 3+ consecutive flat cycles.

Output: `diagnosis.md` — failure mode ranked by evidence, 2-cycle prescription, pivot threshold.

---

## Pre-Check (Before Spawning Agents)

Rule out execution issues first — if any of these are true, this is not a product problem:

- [ ] Did the founder actually execute last cycle's commitment? (If no: execution problem)
- [ ] Have at least 5 real users tried the product? (If no: insufficient data)
- [ ] Have at least 3 complete build-cycles run? (If no: too early to diagnose)

If any box is unchecked, name the real problem and return.

---

## Parallel Execution

Five failure modes. Five independent evidence-gathering agents. All run simultaneously.

**Before spawning agents, gather:**
- `founder-context.md` — current stage, customer profile, north star
- All `cycles/` documents — the full record of what's been tried and what happened
- Any raw user feedback, retention data, or channel metrics mentioned in cycles

**Spawn these 5 agents simultaneously:**

**Agent 1 — Wrong Customer Investigator**
Reads: `founder-context.md`, all cycle records, any user profile descriptions
Task: Gather evidence for/against the Wrong Customer hypothesis.
Evidence to find:
- Do users engage once and not return?
- Is feedback positive but non-specific ("it's nice")?
- Can any user articulate what they'd lose if the product disappeared?
- How specific is the founder's customer description?
Returns: Likelihood (High/Medium/Low) + top 3 pieces of evidence + one diagnostic question the founder should answer

**Agent 2 — Wrong Problem Investigator**
Reads: `founder-context.md`, all cycle records, any user conversation notes
Task: Gather evidence for/against the Wrong Problem hypothesis.
Evidence to find:
- Do users understand the product but not use it regularly?
- Do users have workarounds they prefer to the product?
- How frequently does the problem actually occur in users' lives?
- Is the problem a vitamin (nice to have) or painkiller (must fix)?
Returns: Likelihood (High/Medium/Low) + top 3 pieces of evidence + one diagnostic question

**Agent 3 — Wrong Solution Investigator**
Reads: `founder-context.md`, all cycle records, any onboarding or usage data
Task: Gather evidence for/against the Wrong Solution hypothesis.
Evidence to find:
- Are specific friction points named repeatedly across cycles?
- What is the onboarding completion rate (estimated or actual)?
- Do the users who get through onboarding retain better than those who don't?
- Is there a gap between users who "get it" and those who don't?
Returns: Likelihood (High/Medium/Low) + top 3 pieces of evidence + one diagnostic question

**Agent 4 — Wrong Timing Investigator**
Reads: `founder-context.md`, all cycle records, any market or adoption observations
Task: Gather evidence for/against the Wrong Timing hypothesis.
Evidence to find:
- Is there intellectual interest without urgency?
- Are early adopters (innovators) enthusiastic but mainstream users unresponsive?
- Is there a specific trigger event that makes the problem urgent — and are you reaching people at that moment?
- Have any users said "I love this but I'm not ready for it yet"?
Returns: Likelihood (High/Medium/Low) + top 3 pieces of evidence + one diagnostic question

**Agent 5 — Wrong Distribution Investigator**
Reads: `founder-context.md`, all cycle records, any channel or acquisition data
Task: Gather evidence for/against the Wrong Distribution hypothesis.
Evidence to find:
- Do users from different acquisition channels behave differently?
- Where did the best (most engaged, best-retained) users come from?
- Is the founder reaching the buyer vs. the user vs. the influencer?
- Is CAC rising, flat, or unknown?
Returns: Likelihood (High/Medium/Low) + top 3 pieces of evidence + one diagnostic question

**Wait for all 5 agents to return. The orchestrator synthesizes.**

---

## Synthesis (Orchestrator Only)

**1. Score each hypothesis** based on agent returns:

| Mode | Likelihood | Top Evidence |
|------|-----------|-------------|
| Wrong Customer | [H/M/L] | [Agent 1 summary] |
| Wrong Problem | [H/M/L] | [Agent 2 summary] |
| Wrong Solution | [H/M/L] | [Agent 3 summary] |
| Wrong Timing | [H/M/L] | [Agent 4 summary] |
| Wrong Distribution | [H/M/L] | [Agent 5 summary] |

**2. Primary diagnosis:** The highest-likelihood mode. If two are tied, name both and recommend testing the cheaper hypothesis first.

**3. The prescription** — specific to the diagnosed mode:

| Failure Mode | 2-Cycle Prescription |
|-------------|---------------------|
| **Wrong Customer** | Find 5 people who exactly match your most-engaged user's situation. Go to them directly — don't use your existing channels. Show the product cold. Measure engagement vs. current users. |
| **Wrong Problem** | Interview 5 current users: "Walk me through the last 7 days of your life around this problem." Count how often it actually occurred and how much it cost them when it did. |
| **Wrong Solution** | Watch 5 users attempt the core flow without guidance. Record exactly where they slow or stop. Fix only those 3 points. Re-measure onboarding completion. Nothing else. |
| **Wrong Timing** | Identify the trigger event that makes the problem urgent. Build ONE way to reach people at exactly that moment. Compare engaged rate vs. current users. |
| **Wrong Distribution** | Interview your 3 best users: exact path from first hearing about you to becoming a user. Spend 1 full cycle reproducing that path more. Nothing else. |

**4. Write `diagnosis.md`** (orchestrator only):

```markdown
# Failure Diagnosis — [YYYY-MM-DD]

## Evidence Summary
Cycles analyzed: [N] | Users observed: [N] | Commitments executed: [Y/N]

## Hypothesis Scores
| Mode | Likelihood | Key Evidence |
|------|-----------|-------------|
| Wrong Customer | [H/M/L] | [One sentence] |
| Wrong Problem | [H/M/L] | [One sentence] |
| Wrong Solution | [H/M/L] | [One sentence] |
| Wrong Timing | [H/M/L] | [One sentence] |
| Wrong Distribution | [H/M/L] | [One sentence] |

## Primary Diagnosis
**Mode:** [Name]
**Confidence:** [High / Medium]
**Why:** [2-3 sentences of evidence-based reasoning]

## The Prescription (2 cycles)
**Do this:** [Specific action]
**Don't do:** [The tempting wrong thing that addresses a different mode]
**You'll know the diagnosis was right if:** [Observable signal within 2 cycles]
**You'll know it was wrong if:** [Signal pointing to a different mode]

## Pivot Threshold
If prescription produces no change by [date + 2 cycles]:
→ Run failure-navigator again → proceed to pivot conversation
```

---

## The Pivot Conversation

Triggered if prescription shows no change after 2 cycles:

> "We've now tested the [X] hypothesis with real effort across 2 cycles and the signal hasn't changed. That's meaningful evidence that [specific assumption] appears to be wrong.
>
> There are three responses to this:
> 1. **Customer pivot** — keep the solution, find who it's actually for
> 2. **Problem pivot** — keep the customer, find what they actually need most  
> 3. **Solution pivot** — keep the customer and problem, try a different approach
>
> Which of these does the evidence point to?"

The pivot conversation is not a verdict. It's the most important use of the evidence you've gathered.

---

## Sequential Fallback (Codex / OpenCode)

Run each investigator step sequentially:

1. Wrong Customer evidence → likelihood
2. Wrong Problem evidence → likelihood
3. Wrong Solution evidence → likelihood
4. Wrong Timing evidence → likelihood
5. Wrong Distribution evidence → likelihood
6. Rank all five → write `diagnosis.md`

Same output. ~5× longer.

---

## Related Skills

- Triggered by **build-cycle** at 3+ flat cycles
- Use **mpp-evaluator** alongside — MPP score trajectory is key diagnostic evidence
- Use **founder-partner** (Partner phase) for the broader strategic context when pivoting
