---
name: retention-loop-designer
description: Designs the habit-forming mechanism that brings users back without prompting, using the Hook Canvas framework. Spawns 4 parallel agents to design each phase of the hook simultaneously — Trigger, Action, Variable Reward, Investment. Use when users aren't returning on their own, when retention is flat, or when you want to build compounding engagement into the product. Produces retention-loop.md with a complete hook design and implementation priorities.
phase: pmf
version: 1.0.0
---

# Retention Loop Designer

## The Core Insight

Most products rely on external triggers to bring users back: push notifications, email reminders, re-engagement campaigns. These work — until users turn them off or start ignoring them.

The best products create internal triggers: the user feels something — boredom, anxiety, curiosity, social pressure — and the product comes to mind as the solution. No notification needed. This is habit.

The difference between a product people return to willingly and one they return to because they were nudged is the difference between retention that scales and retention that requires constant marketing spend to maintain.

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Design my retention loop"** or **"Why aren't users coming back?"** or **"Build my hook"**

Output: `retention-loop.md` — a complete Hook Canvas for your product with specific implementation priorities.

---

## The Hook Canvas

Nir Eyal's framework from *Hooked*. Four phases that, when working together, create habits.

```
        ┌─────────────────────────────────────┐
        │              HOOK                    │
        │                                      │
        │   TRIGGER → ACTION → REWARD → INVEST │
        │      ↑                        │      │
        │      └────────────────────────┘      │
        │         (investment feeds next        │
        │          trigger — the loop)          │
        └─────────────────────────────────────┘
```

---

## Parallel Execution

Each phase of the Hook Canvas is independent — all four can be designed simultaneously.

**Before spawning, gather:**
- `founder-context.md` — customer profile, product description, current stage
- `customer-profile.md` — the painful moment, what they fear, their existing habits
- `user-flows.md` — the core user journey (if it exists)
- Any cycle notes about why users do or don't return

**Spawn these 4 agents simultaneously:**

**Agent 1 — Trigger Designer**
Context: Customer profile + product description + current usage patterns
Task: Design the trigger system for this product.

Trigger types:
- **External triggers:** Push notification, email, SMS, badge — someone tells the user to come back
- **Internal triggers:** An emotion or state that cues the behavior (boredom → Instagram, anxiety → checking email, FOMO → Slack)

The goal: design external triggers that create internal ones over time.

Questions to answer:
- What emotional state does the target user regularly experience that this product could solve?
- What existing daily habit could this product be attached to? (habit stacking)
- What external trigger is low-friction, high-relevance, and not annoying?
- How many uses does it take before the internal trigger starts forming?

Returns: Primary internal trigger (the emotion) + external trigger design (what, when, frequency) + the habit stacking opportunity (what existing behavior to attach to)

**Agent 2 — Action Designer**
Context: Customer profile + product's core value + user flow
Task: Design the simplest possible action that initiates the habit loop.

Fogg Behavior Model: Behavior = Motivation × Ability × Prompt
The action must be:
- Simple enough to do in the triggered state (low ability required)
- Directly connected to the reward
- The minimum action that moves toward value

Questions to answer:
- What is the single simplest action a user takes to start getting value?
- What friction currently exists between trigger and action? (Each friction point is a drop-off)
- Can the action be shortened to under 30 seconds?
- Is there a "minimum viable engagement" version of the core action?

Returns: The designed action (specific, described step-by-step) + current friction map + specific friction to remove first

**Agent 3 — Variable Reward Designer**
Context: Product description + customer profile + what users currently feel after using it
Task: Design the variable reward system.

Variable rewards are the engine of habits. Predictable rewards lose their pull quickly — variability creates the compulsion to return. Three reward types:

- **Tribe rewards:** Social validation, recognition, belonging (likes, responses, leaderboard position)
- **Hunt rewards:** The search for information, resources, or outcomes (feed refresh, search results, new content)
- **Self rewards:** Mastery, completion, personal achievement (streak, level up, goal met)

Questions to answer:
- Which reward type fits this product's core value? (social products → tribe; productivity → self; content → hunt)
- Where is the moment of variability in the current product? (If there isn't one, design it)
- How can the reward be made variable without feeling random or cheap?
- What "near miss" mechanism creates the desire to try again?

Returns: Primary reward type + specific reward design + variability mechanism + the moment of delight to design toward

**Agent 4 — Investment Designer**
Context: Product description + customer profile + current data/content users put into the product
Task: Design the investment phase that makes the product more valuable with use and feeds the next trigger.

Investments are what users put INTO the product: data, content, relationships, customization, reputation, skill. Investments:
1. Make the product better for the user over time (switching cost increases)
2. Load the next trigger (the investment creates the context for the next return)

Questions to answer:
- What can users store, create, or build in this product that makes it more valuable to them over time?
- Does the product currently get smarter/better the more a user uses it? If not, how could it?
- What investment creates a "loaded next trigger"? (e.g., posting content → notification when someone responds)
- What would make a user feel that leaving means losing something valuable?

Returns: Primary investment type + how it loads the next trigger + specific feature that enables the investment + switching cost it creates

**Wait for all 4 agents. Orchestrator assembles the complete Hook.**

---

## Synthesis (Orchestrator Only)

Assemble the four agent returns into a complete Hook Canvas. Check that the loop is coherent:
- Does the investment feed the next trigger? (The loop must close)
- Is the action simple enough to do in the triggered state?
- Is the reward genuinely variable, or just reliably pleasant?
- Is the investment something users would actually do (not just something clever in theory)?

**Write `retention-loop.md`:**

```markdown
# Retention Loop — [Product Name] — [YYYY-MM-DD]

## The Hook

**Internal Trigger:** [The emotion/state that cues return — e.g., "anxiety about forgetting something"]
**External Trigger:** [What, when, and how — e.g., "weekly digest email every Monday 9am showing last week's stats"]

**Action:** [The simplest behavior — described step by step]
**Friction to remove first:** [The single highest-friction point between trigger and action]

**Variable Reward:** [Type + specific design — e.g., "Hunt reward: which waste category changed most this week?"]
**The variability:** [What changes each return that makes it worth coming back]

**Investment:** [What the user puts in — e.g., "daily waste logs that build a personal historical record"]
**How it loads the next trigger:** [The loop closure — e.g., "logs accumulate → weekly summary → curiosity about trend → return"]

## Implementation Priorities

The hook only works if all 4 phases work. Build in this order:

1. **[Highest-friction fix]** — Remove the biggest obstacle between trigger and action (1 day)
2. **[Investment feature]** — Build the accumulation mechanism that makes the loop self-sustaining (1 week)
3. **[Variable reward]** — Introduce the variability that makes return worth it (3 days)
4. **[External trigger]** — Set up the notification/email trigger (1 day — do last, after loop works)

## What to Watch
- D7 retention: should improve within 2 cycles of implementing the investment phase
- Time-between-sessions: should decrease as internal trigger strengthens
- Session-initiating action: track what % of sessions start from external vs. internal trigger over time
```

---

## Sequential Fallback (Codex)

Design each Hook phase in sequence:
1. Trigger design
2. Action design
3. Variable reward design
4. Investment design
5. Assemble and write `retention-loop.md`

---

## Related Skills

- Use **pmf-signal-reader** before this — confirms retention is the signal to amplify
- Use **north-star-definer** to align the retention metric with the north star
- Use **ux-flow-designer** (Design phase) alongside — the hook lives inside the UX flow
- Use **build-cycle** — retention improvement tracked across subsequent cycles
