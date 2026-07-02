---
name: assumption-mapper
description: Maps every key assumption in your product plan to a validation method and priority level. Spawns parallel research agents — one per assumption — to gather evidence simultaneously. Use after scoping your MVP or defining your customer, when you want to know which assumptions could kill the product if wrong, and how to test them cheaply before building. Produces assumptions-map.md with a ranked list of risky bets and how to test each one.
phase: strategy
version: 2.0.0
---

# Assumption Mapper

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Map my assumptions"** or **"What am I assuming that could be wrong?"**

Share your MVP brief, customer profile, or product description.
Output: `assumptions-map.md` — every key assumption ranked by kill risk, with a cheap test for each.

## What You'll Get

An `assumptions-map.md` containing: every major assumption extracted from your plan, categorized and scored by risk, with the cheapest test for each. The top 5 assumptions get a specific test design the founder can run this week.

> **Example output excerpt:**
> **#1 Critical (Score: 25):** Freelance designers will pay $29/month for proposal software.
> **Test:** Fake door — landing page with a "Start free trial" button, $50 of Twitter ads. Target: 5%+ click-through. Time: 3 days. Cost: $50.

---

## Parallel Execution

After extracting the assumption list, each assumption is researched independently. Spawn one agent per assumption — they can all run simultaneously.

### Step 1: Extract Assumptions (Orchestrator)

Read the input (MVP brief, customer profile, or description). Extract every assumption embedded in it, organized into four categories:

| Category | Question | Example |
|----------|----------|---------|
| **Desirability** | Do people want this? | "Yoga instructors want automated rebooking" |
| **Feasibility** | Can you build it? | "We can build a working sync in 2 weeks" |
| **Viability** | Can you make money? | "Users will pay $49/month" |
| **Adaptability** | Will users change behavior? | "Managers will actually log waste daily" |

Produce a numbered list of assumptions. This list is the input for the parallel phase.

### Step 2: Parallel Research (One Agent Per Assumption)

**Spawn N agents simultaneously — one per assumption.**

Each agent receives:
- The assumption text
- The assumption category (Desirability / Feasibility / Viability / Adaptability)
- The target customer description (from `founder-context.md` or provided context)

Each agent's task:
1. **Score Kill Risk (1–5):** If this assumption is wrong, how badly does it damage the product?
   - 5: Wrong = product has no market
   - 3: Wrong = significant pivot needed
   - 1: Wrong = minor adjustment needed

2. **Score Evidence Level (1–5):** How much evidence currently supports this assumption?
   - 5: Strong evidence (multiple customer conversations, observed behavior, market data)
   - 3: Indirect evidence (similar products exist, forum complaints, adjacent data)
   - 1: Hope and intuition only

3. **Priority Score = Kill Risk × (6 − Evidence Level)**
   Higher score = test this first.

4. **Design the cheapest test:**
   | Test Type | When to Use | Cost | Time |
   |-----------|------------|------|------|
   | Customer interview (5 calls) | Behavior + desirability | $0 | 2–3 days |
   | Fake door test | Willingness to pay, demand | $50–$200 ads | 3–5 days |
   | Landing page + waitlist | General demand, messaging | $0 | 1 day |
   | Concierge MVP | Core value delivery | $0 | Do manually first |
   | Smoke test / pre-sell | Strong willingness to pay | $0 | Ask for money |
   | Existing data research | Market size, competitor evidence | $0 | 2–4 hours |

Each agent returns: assumption text, category, kill risk, evidence level, priority score, test design (what to do, how long, what cost, what success looks like).

**Wait for all agents. The orchestrator synthesizes.**

### Step 3: Synthesis and Ranking (Orchestrator Only)

Sort all assumptions by priority score (descending). The top 5 get a full test design in the output. The rest are listed with scores only.

Write `assumptions-map.md`:

```markdown
# Assumptions Map — [YYYY-MM-DD]

## Critical Assumptions (Test Immediately)

### #1 — [Assumption] | Score: [Priority Score]
**Category:** [Desirability/Feasibility/Viability/Adaptability]
**Kill Risk:** [X]/5 — [one sentence on why]
**Evidence:** [X]/5 — [what evidence exists or doesn't]
**Test:** [Specific test design — what to do, time, cost, success signal]

### #2 — [Assumption] | Score: [Priority Score]
[Same format]

[...top 5...]

## Remaining Assumptions (Track, Don't Test Yet)
| # | Assumption | Category | Score |
|---|-----------|----------|-------|
| 6 | [text] | [cat] | [score] |
[...]

## This Week's Priority
Run tests #1 and #2 this week. They cost [time] and [money]. If both pass, you have strong grounds to build. If either fails, you've saved [cost of building wrong thing].
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, research each assumption one at a time:

For each assumption (in the order they were extracted):
1. Score Kill Risk
2. Score Evidence Level
3. Calculate Priority Score
4. Design test

Then sort by priority score and write `assumptions-map.md`.

Same output. Time scales with number of assumptions (~3 min per assumption in sequential mode).

---

## Worked Example

**Founder:** Building a client portal for boutique agencies. Has 6 assumptions from their MVP brief.

**Assumptions extracted:** (1) Agency owners lose 3+ hours/week to client status questions, (2) Clients will log into a portal rather than email, (3) Agencies will pay $49/month for this, (4) The tool can be set up in under 30 minutes, (5) Agency owners check the portal more than they check email, (6) Clients trust the portal over direct communication.

**Parallel agents spawn for all 6 simultaneously.**

**Synthesis output (top 2):**
> **#1 — Clients will log into a portal (Score: 20)**
> Kill Risk: 5 — if clients prefer email, the whole product is moot. Evidence: 2 — no data, just founder belief.
> Test: Ask 5 agency owners to show you a client portal tool they've tried. Ask: "Did clients actually log in?" This is 5 conversations in 3 days. Free.
>
> **#2 — Agencies will pay $49/month (Score: 16)**
> Kill Risk: 4 — wrong price = wrong model. Evidence: 3 — similar tools (Basecamp, ClickUp) exist at adjacent price points.
> Test: Build a 3-page landing page with a pricing page. Run $100 of LinkedIn ads to agency owners. Measure: what % click to pricing, what % start the (fake) trial.

---

## Related Skills

- Use **problem-validator** before this — validates the core problem, surfaces the first assumptions
- Use **customer-hypothesis** before this — the customer profile contains key desirability assumptions
- Use **mvp-scoper** before this — the MVP brief is the primary source of assumptions to map
- Use **founder-partner** after running tests — to synthesize what you learned
