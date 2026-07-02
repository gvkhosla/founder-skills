---
name: churn-diagnostician
description: Investigates why users are leaving — systematically, not by asking "why did you cancel?" Use when retention drops or churn reasons feel unclear. Produces churn-diagnosis.md with the root cause, confidence level, and a specific experiment to run.
phase: pmf
version: 1.0.0
---

# Churn Diagnostician

## The Problem With How Founders Handle Churn

Most founders either ignore churn entirely ("we're early, it's expected") or ask churned users "why did you cancel?" and accept whatever they say.

Both are mistakes.

Ignoring churn means missing the product's clearest feedback signal. Asking users why they left produces polite lies — people say "it was too expensive" or "I didn't need it anymore" because those feel less harsh than the truth, which is usually "I never figured out the value."

Churn is the product telling you something specific. This skill reads that signal without flinching.

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Why are users churning?"** or **"Help me reduce churn"** or **"Diagnose my churn"**

Output: `churn-diagnosis.md` — root cause with confidence level, the specific experiment to run, and what success looks like.

---

## Parallel Execution

Three independent investigative angles. All run simultaneously.

**Before spawning, gather:**
- `founder-context.md` — customer profile, north star, current retention data
- All `cycles/` records — any churn observations, user behavior notes, feedback mentions
- Any data available: when users churned (day/week/month), what they did before churning, any exit feedback

**Spawn these 3 agents simultaneously:**

**Agent 1 — Time-to-Churn Pattern Analyst**
Reads: All cycle records for retention data + any timing observations
Task: Identify WHEN users are churning — the timing reveals the cause.

Churn timing patterns and what they mean:

| When Churn Happens | Root Cause | Implication |
|-------------------|-----------|-------------|
| Day 1 (never came back) | Onboarding failure — didn't reach value moment | Fix time-to-value, not the product |
| Week 1–2 | Wrong expectation set by marketing/positioning | Fix messaging or onboarding narrative |
| Month 1 | Habit didn't form — product not sticky enough | Retention loop problem |
| Month 2–3 | Use case is episodic, not recurring | Wrong customer or pricing model |
| After price increase | Price sensitivity — value not proven enough | ROI messaging problem |

Questions to investigate from cycle data:
- When does the typical user churn? (D1, D7, D30, D90?)
- Is there a spike at a specific moment? (e.g., exactly when the trial ends)
- Do different acquisition channels produce different churn timing?
- Are there users who churned early who look different from those who stayed?

Returns: Timing pattern + probable cause + confidence level + the question it raises about the product

**Agent 2 — Behavioral Gap Analyst**
Reads: All cycle records for any user behavior descriptions + usage patterns
Task: Identify what churned users did NOT do before leaving.

The behavioral gap technique: look for features or actions that retained users took but churned users didn't. These gaps reveal the value threshold the product requires.

Evidence to find:
- Any mention of users who engaged heavily vs. those who didn't come back — what did the engaged ones do differently?
- Is there a "magic moment" — a specific action correlated with retention? (e.g., "users who created their first project within 24h retained at 3× the rate")
- Is there an action or feature that churned users never reached?
- What was the typical churned user's last action before leaving?

Common behavioral gaps:
- Never completed onboarding
- Never invited a collaborator (for team products)
- Never hit a key feature (core value not delivered)
- Never returned after a specific bad experience (error, bug, confusing flow)

Returns: The behavioral gap (what churned users didn't do) + the implied "magic moment" to reach faster + specific onboarding or product change to test

**Agent 3 — Feedback Signal Analyst**
Reads: All cycle records for any user feedback, exit comments, support tickets, or user conversation notes
Task: Extract the signal from user feedback about why they left.

Apply the Mom Test to churn feedback: don't take exit survey answers at face value. Look for:

**What they said:**
- "Too expensive" → often means "I didn't see enough value to justify the price"
- "Missing [feature]" → often means "I couldn't accomplish my goal without it"
- "Not the right time" → often means "I didn't form a habit before the trial ended"
- "Found another solution" → means there's a competitive threat OR the value wasn't clear enough to resist switching

**What to look for instead:**
- Feedback that appeared in multiple conversations (frequency = signal)
- Feedback given unprompted vs. asked directly (unprompted = stronger signal)
- Behavior at the time of feedback: did they try to fix the problem before leaving, or leave immediately?

Returns: Top 2–3 feedback themes + the translated meaning (what they actually meant vs. what they said) + confidence level

**Wait for all 3 agents. Orchestrator synthesizes.**

---

## Synthesis (Orchestrator Only)

**1. Cross-reference the three investigations:**
- Does the timing pattern point to the same root cause as the behavioral gap?
- Does the feedback confirm or contradict the behavioral evidence?
- When all three point to the same thing: high confidence. When they diverge: name the uncertainty.

**2. Root cause classification:**

| Root Cause | Timing Signal | Behavioral Signal | Feedback Signal |
|-----------|--------------|------------------|----------------|
| **Onboarding failure** | Day 1 churn | Never reached value moment | "Didn't have time to figure it out" |
| **Wrong customer** | Month 1–2 | Low engagement from day 1 | "Not really for me" |
| **Habit didn't form** | Month 1 | Sporadic usage, no pattern | "Kept forgetting about it" |
| **Feature gap** | Specific trigger point | Heavy use then sudden stop | "Needs [X] before I can use it" |
| **Competitive loss** | Month 2–3 | Good engagement then sudden stop | "Found [competitor]" |
| **Price sensitivity** | Post-trial or price change | Good engagement | "Too expensive" |

**3. Write `churn-diagnosis.md`:**

```markdown
# Churn Diagnosis — [YYYY-MM-DD]

## Root Cause
**Primary:** [One of the 6 root causes above]
**Confidence:** [High / Medium / Low]
**Why:** [2–3 sentences connecting all three agent findings]

## Evidence Summary
| Investigation | Key Finding |
|--------------|-------------|
| Time-to-Churn | [Agent 1 finding] |
| Behavioral Gap | [Agent 2 finding] |
| Feedback Signals | [Agent 3 finding] |

## The Experiment
**What to try:** [Specific change — narrow enough to implement in 1 week]
**Why this addresses the root cause:** [One sentence]
**Success signal:** [Specific, observable — e.g., "D30 retention improves by 5+ points in next cohort"]
**Time to see results:** [Realistic estimate — usually 4–6 weeks for retention experiments]

## What to Leave Alone
[The thing that might look like a churn cause but probably isn't — don't fix this yet]

## If the Experiment Doesn't Work
→ Re-run churn-diagnostician with the new data from the experiment
→ The root cause confidence will be higher the second time
```

---

## Sequential Fallback (Codex)

Run each investigation in sequence:
1. Time-to-churn pattern analysis
2. Behavioral gap analysis
3. Feedback signal analysis
4. Cross-reference → write `churn-diagnosis.md`

---

## Related Skills

- Use **pmf-signal-reader** — churn is the inverse of retention signal; read both together
- Use **build-cycle** — churn experiment tracked across subsequent cycles
- Use **failure-navigator** if churn is part of a broader stagnation pattern across 3+ cycles
- Use **retention-loop-designer** once root cause is fixed — build the loop that prevents the next cohort from churning the same way
