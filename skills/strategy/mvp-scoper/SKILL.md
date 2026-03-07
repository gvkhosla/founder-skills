---
name: mvp-scoper
description: Defines exactly what's in and out of scope for your MVP. Spawns scope pressure agents — one arguing to expand, one arguing to cut — to stress-test your scope from both directions before locking it. Use when you have a product idea and need to decide what to build first, when your scope keeps growing, or when you're not sure where to start. Produces mvp-brief.md — a one-page brief you can build from immediately.
phase: strategy
version: 2.0.0
---

# MVP Scoper

## Quick Start

Say: **"Help me scope my MVP"** or **"What should I build first?"**

Share your product idea, customer profile, or problem description.
Output: `mvp-brief.md` — a one-page brief that tells you (and your agent) exactly what to build.

## What You'll Get

An `mvp-brief.md` containing: the one sentence your product does, who it's for (specifically), the 3 features that make or break the MVP, the explicit list of what's NOT in scope, the scope pressure verdict (what was debated and why), and the one signal that tells you the MVP worked.

> **Example output excerpt:**
> **The MVP:** A scheduling tool that lets independent therapists send booking links to clients — no back-and-forth email.
> **For:** Solo therapists who manage their own schedule and lose 30+ minutes per client to booking coordination.
> **In scope (build these, nothing else):** (1) Shareable booking link with available slots, (2) Email confirmation to both parties, (3) Simple admin view of upcoming appointments.
> **Scope Pressure Verdict:** Expander argued for calendar sync (strong case — rejected: adds integration complexity week 1). Eliminator argued to cut email confirmation (rejected: without it, both parties are blind).
> **Not in scope:** Payment processing, cancellation policies, recurring appointments, reminders, team features, calendar sync.
> **Success signal:** A therapist sends their link to 3 clients and at least 2 book without asking follow-up questions.

---

## The Expert Judgment Embedded

This skill applies the **Jobs To Be Done** framework combined with **ruthless scope elimination**. Most founders scope their MVP by listing features they want to build. This produces MVPs that are too large, take too long, and validate too many hypotheses at once.

The right approach: identify the ONE job the user is hiring the product to do, build only what's required to let them do that job, and define success as a specific user behavior — not revenue, not signups, not feedback.

What founders almost always get wrong: they include "nice to have" features because they're worried the MVP will look unprofessional. It won't. Users forgive missing features. They don't forgive core flows that don't work.

For deeper framework reference, see [reference.md](reference.md).

---

## Parallel Execution

The core scoping process runs sequentially (it requires founder input at each step). Once the initial scope is defined, two scope pressure agents spawn simultaneously to stress-test it from opposite directions. The orchestrator makes the final call.

### Step 1: Auto-Read Context (Orchestrator)

Before asking any questions, check for and read these files if they exist:
- `problem-validation-report.md` — validated problem statement and evidence
- `customer-profile.md` — target customer hypothesis and segments
- `assumptions-map.md` — ranked assumptions and what's been tested

Use whatever context is found to pre-fill answers and skip questions the founder has already answered. If none exist, proceed with direct questions.

### Step 2: The Core Job

The agent asks: "In one sentence, what job does your product do for its user? Start with: '[User type] can finally...'"

This forces specificity. "Finally" forces you to name what was previously frustrating or impossible.

If you can't complete this sentence, scope isn't your problem — clarity is. Use `problem-validator` first.

### Step 3: The Primary User

The agent asks: "Who specifically is the first person who would pay for this — not a category, but a person. Describe their situation, not their demographics."

Wrong: "Small business owners aged 25-45"
Right: "A solo marketing consultant who manages 3-5 clients and builds their own reporting manually every Friday"

Specificity here determines everything. The more specific, the better the scoping.

### Step 4: The Must-Have Features

The agent applies the **Kano Model** heuristic to the feature list you provide:

- **Must-haves:** If missing, the product fundamentally doesn't work. Include these.
- **Performance features:** More = better. Include the minimum version only.
- **Delighters:** Unexpected extras. Cut all of these from the MVP.

The output is maximum 3 must-have features. If you have more than 3, the agent helps you eliminate until you're at 3 or fewer.

### Step 5: The Explicit Cut List

The agent asks what you were considering building but haven't mentioned. These become the explicit "not in scope" list.

This step is as important as the in-scope list. Without it, cut features silently creep back in during building. Making the cuts explicit and visible prevents scope creep.

### Step 6: The Success Signal

The agent asks: "What would a user have to *do* — not say, but do — for you to know the MVP worked?"

The success signal must be:
- A behavior (not a sentiment)
- Observable (you can verify it happened)
- Achievable in 2 weeks of having real users

Wrong: "Users say they love it"
Right: "3 users complete the core flow start to finish without asking me for help"

### Step 7: Scope Pressure (2 Agents Simultaneously)

At this point the initial scope is defined: 3 in-scope features, a cut list, and a success signal. Now stress-test it.

**Spawn 2 agents simultaneously:**

**Agent A — Scope Expander (Devil's Advocate: Why You SHOULD Add More)**
Context: The 3 in-scope features, the full cut list, the core job, and the primary user.
Task: Argue the case for the 3 most tempting items from the cut list. For each:
1. Name the cut feature
2. Make the strongest honest argument for why it should be in the MVP
3. Describe the specific user moment where its absence will hurt
4. Estimate the additional build time it would add
Returns: 3 expansion arguments, ranked by strength of case.

**Agent B — Scope Eliminator (Devil's Advocate: Why You Should Cut Even More)**
Context: The 3 in-scope features, the core job, the primary user, and the success signal.
Task: Argue the case for removing 1 feature from the current in-scope list. Specifically:
1. Name the in-scope feature to cut
2. Make the strongest honest argument for why the MVP still works without it
3. Describe a workaround the user could use instead (manual process, existing tool, etc.)
4. Explain how removing it simplifies the build and sharpens the test
Returns: 1 elimination argument with workaround and simplified success signal.

**Wait for both agents. The orchestrator makes the final call.**

### Step 8: Scope Verdict and Output (Orchestrator Only)

Review both agents' arguments. For each argument, make a binary decision: accept or reject. Explain each decision in 1–2 sentences. The decision framework:

- **Accept an expansion** only if: the feature is required for the success signal to be achievable, AND build time adds less than 25% to the total.
- **Accept an elimination** only if: the success signal is still achievable without the feature, AND a realistic workaround exists.

After the verdict, produce the final `mvp-brief.md`:

```markdown
# MVP Brief — [Product Name] — [YYYY-MM-DD]

## The One Job
[User type] can finally [what they can do now].

## Primary User
[Specific person description — situation, not demographics]

## In Scope — Build These, Nothing Else
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

## Scope Pressure Verdict
**Expander argued for:** [Feature A] — [1-sentence argument]. **Decision:** [Accepted/Rejected] — [why].
**Expander argued for:** [Feature B] — [1-sentence argument]. **Decision:** [Accepted/Rejected] — [why].
**Expander argued for:** [Feature C] — [1-sentence argument]. **Decision:** [Accepted/Rejected] — [why].
**Eliminator argued to cut:** [Feature X] — [1-sentence argument]. **Decision:** [Accepted/Rejected] — [why].

## Not In Scope (Save for Later)
[Explicit list of everything cut — including anything the Expander argued for that was rejected]

## Success Signal
[Specific observable user behavior achievable in 2 weeks]

## Time to Build
[Estimated build time for the locked scope]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, run the scope pressure arguments in sequence:

1. Steps 1–6: Core scoping process (same as above)
2. Play the Scope Expander role: argue for the 3 most tempting cut items
3. Play the Scope Eliminator role: argue for cutting 1 in-scope feature
4. Make the final verdict on each argument
5. Write `mvp-brief.md`

Same output. The pressure test takes ~5 extra minutes in sequential mode.

---

## Worked Example

**Founder:** Building a tool for restaurant managers to track their weekly food waste and see where they're losing money. Has a list of 12 features they want to build.

**They said:** "Help me scope my MVP. I want to build a food waste tracker for restaurants."

**Core scoping (Steps 2–6) produces:**
- **Core Job:** Restaurant managers can finally see exactly where their food budget is disappearing each week — without building a spreadsheet from scratch.
- **Primary User:** A manager at a single-location independent restaurant (not a chain) who suspects food waste is a problem but has no data to prove it or fix it.
- **In Scope:** (1) Daily waste log: staff enter what was wasted, in what quantity, at what cost. (2) Weekly summary: total waste cost by category (produce, proteins, prepared food). (3) Simple trend line: is waste going up or down week-over-week?
- **Cut List:** Supplier integrations, inventory tracking, staff accountability features, automated ordering, mobile app, multi-location support, recipe cost analysis, alerts, payroll integration.
- **Success Signal:** A manager enters waste data for 5 consecutive days and uses the weekly summary to identify one category to reduce — without asking for help or training.

**Scope Pressure agents spawn simultaneously:**

> **Agent A — Scope Expander argues for 3 additions:**
>
> **1. Alerts (strongest case):** "When a manager discovers their produce waste spiked 40% on Tuesday, they need to know before Friday's summary. Without alerts, the data is always stale by the time they see it. Users will open the app less because there's no trigger to check it. Add 2–3 days of build time."
>
> **2. Staff accountability features:** "If the manager can't see WHO is logging waste, they can't have a conversation with the prep cook who's over-portioning. The data is useful but not actionable at the staff level. Add 3–4 days."
>
> **3. Recipe cost analysis:** "Without knowing what the wasted food was supposed to become, the manager can't connect waste to menu decisions. Adds 4–5 days."

> **Agent B — Scope Eliminator argues to cut 1 feature:**
>
> **Cut the trend line (feature 3):** "The manager doesn't need a trend in week 1 — they need to see this week's damage. The trend line requires multiple weeks of data to be meaningful, so it's useless during the validation period anyway. The manager can compare two weekly summaries side by side manually. Removing it simplifies the build to pure data-in, summary-out and sharpens the test: does the manager act on a SINGLE week's data? Build time drops by 3–4 days."

**Orchestrator verdict:**

> **Alerts — Rejected.** The success signal measures whether a manager uses the weekly summary to act. Alerts optimize for speed of discovery, which matters at scale but not for validation. Save for v2.
>
> **Staff accountability — Rejected.** The core job is "see where the budget disappears," not "hold staff accountable." Accountability is a downstream use case that depends on the core data being valuable first.
>
> **Recipe cost analysis — Rejected.** Adds 4–5 days and tests a second hypothesis (menu optimization) that's distinct from the core waste visibility job.
>
> **Cut trend line — Rejected.** The success signal specifically requires the manager to "identify one category to reduce." Seeing the trend — even a single week's breakdown — is what makes the data actionable. The trend line stays, but scoped to the simplest version: one number per category, up or down arrow vs. last week.

**Final `mvp-brief.md`:**

> **MVP Brief — Food Waste Tracker**
>
> **The One Job:** Restaurant managers can finally see exactly where their food budget is disappearing each week — without building a spreadsheet from scratch.
>
> **Primary User:** A manager at a single-location independent restaurant (not a chain) who suspects food waste is a problem but has no data to prove it or fix it.
>
> **In Scope — Build These, Nothing Else:**
> 1. Daily waste log: staff enter what was wasted, in what quantity, at what cost
> 2. Weekly summary: total waste cost by category (produce, proteins, prepared food)
> 3. Simple trend line: is waste going up or down week-over-week?
>
> **Scope Pressure Verdict:**
> Expander argued for alerts — rejected: optimizes discovery speed, not needed for validation.
> Expander argued for staff accountability — rejected: tests a different job than core waste visibility.
> Expander argued for recipe cost analysis — rejected: adds 4–5 days and a second hypothesis.
> Eliminator argued to cut trend line — rejected: needed for the success signal to work. Scoped to simplest version.
>
> **Not In Scope (Save for Later):**
> Alerts, staff accountability features, recipe cost analysis, supplier integrations, inventory tracking, automated ordering, mobile app, multi-location support, payroll integration.
>
> **Success Signal:** A manager enters waste data for 5 consecutive days and uses the weekly summary to identify one category to reduce — without asking for help or training.
>
> **Time to Build:** 1–2 weeks of focused agent-assisted building.

---

## Related Skills

- Use **problem-validator** before this if you're not sure the problem is real
- Use **customer-hypothesis** before this to sharpen who you're building for
- Use **assumption-mapper** after this to identify which parts of this brief are assumptions vs. facts
- Use **feature-sequencer** (Build phase) when you're ready to plan the build order
- Use **founder-partner** anytime to check in on where to focus
