---
name: build-cycle
description: The recurring founder ritual — run after every meaningful ship or weekly, whichever comes first. Guides you through honest reflection, user signal synthesis, MPP/PMF assessment, and one clear decision for the next cycle. Produces a dated cycle record that compounds over time. Use whenever you've shipped something and want to figure out what it taught you and what to do next.
phase: compound
version: 1.0.0
---

# Build Cycle

The ritual you run again and again — all the way to PMF and beyond.

## What This Is

Not a tool you pick up once. A rhythm.

Engineers document every solved problem so the next occurrence takes minutes, not hours. That's `/compound`. The Build Cycle is the founder equivalent: after every meaningful ship, you run this ritual. It asks the honest questions, synthesizes what you learned, and produces one record that compounds over time.

After 10 cycles, you have a complete record of your product's evolution — what you tried, what you learned, how you navigated each failure point, and exactly how you got to where you are.

**Cadence:** Run after each meaningful ship. Or weekly if you ship continuously. Never less than once a week. Never more than once a day — daily cycles are too granular to surface real signal.

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Run build cycle"** or **"Let's do our cycle"** or **"What did we learn?"**

This takes 20–30 minutes. Do it with intention — not rushed. Total time invested compounds.

**What gets produced:**
- `cycles/YYYY-MM-DD.md` — the permanent cycle record
- Updated `founder-context.md` — your source of truth

## How It Opens

Before asking you anything, the skill reads two things:

1. **`founder-context.md`** — your product's current state, north star, stage
2. **The most recent `cycles/` document** — what happened last cycle, what you decided

If neither exists, the skill runs a one-time **First Cycle Setup** (see below).

After reading both, the skill opens with a single orienting statement — not a question:

> "Last cycle you decided to [X]. Before we reflect on how that went, I want to name one thing I noticed from your context: [observation]. Let's start there."

This is borrowed from the best therapy and coaching: name what you see before asking what they feel.

---

## The Six Phases

Run in order. Don't skip phases even when you're in a hurry — the order matters.

---

### Phase 1 — The Honest Open

**One question:** "What actually happened since last cycle — not what you hoped would happen, but what actually happened?"

This is not a status update. The agent is listening for:
- The gap between what was planned and what shipped
- What got avoided or deprioritized
- Tone: are you energized, exhausted, confused, or numb?

After you answer, the agent reflects back what it heard — including the things you said but might have glossed over. This is the "document-review" move: surface what's being minimized.

> **The uncomfortable question for this phase:** "What are you not saying?"

---

### Phase 2 — What Users Actually Did

**One question:** "What did your users do — not what you hoped they'd do, not what they said they'd do, but what they actually did?"

This phase separates signal from noise by distinguishing:

| Signal Type | Weight |
|------------|--------|
| **Behavior** (what they did without being asked) | High |
| **Unprompted feedback** (what they said without being asked) | High |
| **Prompted feedback** (what they said when you asked) | Medium |
| **What you want to believe** | Zero |

The agent asks follow-up questions here — one at a time, never more than three:
- "Did any users do something you didn't expect?"
- "Did any users NOT do something you expected?"
- "Has anyone told someone else about this without you asking them to?"

> **The uncomfortable question:** "Is there user behavior you've been avoiding looking at?"

---

### Phase 3 — The Honest Assessment (Parallel)

Phase 3 runs three independent analyses simultaneously — MPP scoring, PMF signal assessment, and cycle pattern reading. These have no dependencies on each other. Run them in parallel.

**Spawn these 3 agents simultaneously:**

**Agent A — MPP Scorer**
Reads: `founder-context.md`, last cycle record, any user behavior data from Phases 1–2
Task: Score MPP using the 5 criteria from [mpp-criteria.md](../mpp-evaluator/mpp-criteria.md)
Returns: Composite score (1–10) + the single criterion holding the score back + one sentence on why

**Agent B — PMF Signal Analyst**
Reads: `founder-context.md`, all `cycles/` records
Task: Assess PMF signal strength
Signal levels:
- **None:** Users use it once and don't return. No unprompted sharing.
- **Faint:** Some users return. 1–2 unprompted mentions across all cycles.
- **Building:** A core group retains consistently. Word of mouth starting without incentive.
- **Clear:** Users would be upset if it disappeared. Usage grows without effort.
Returns: Signal level + the specific evidence for that rating + the one behavior that would move it to the next level

**Agent C — Pattern Reader**
Reads: All `cycles/` records (last 3 minimum, all if available)
Task: Identify patterns across cycles
Patterns to find:
- Momentum: Is MPP score trending up, flat, or declining?
- Effort: What type of work keeps repeating without producing signal?
- Avoidance: What has been mentioned across cycles but never acted on?
- User: Is there a user type showing stronger signal than others?
Returns: Momentum trend + the most important pattern (effort or avoidance, whichever is stronger)

**Wait for all 3 agents. The orchestrator presents findings.**

The orchestrator does NOT soften the assessment. If the score is 3/10, say 3/10. Present all three agent findings, then ask:

> **"What's the most honest reason we're at this score?"**

This is not rhetorical. It's the most important question in the cycle. Take time here.

> **The uncomfortable question:** "If this score doesn't improve next cycle, what does that mean?"

> **If Pattern Reader returns 3+ consecutive flat or declining cycles:** Do not continue to Phase 5. Name it: "I need to flag something. We've had [N] cycles without improving signal. That's not a reason to panic, but it is a reason to diagnose before deciding. I want to run the Failure Navigator before we choose what to do next." See [failure-modes.md](failure-modes.md).

#### Sequential Fallback (Codex / OpenCode)

If the agent cannot run parallel subagents, run Phase 3 in this order:

1. MPP Scorer
2. PMF Signal Analyst
3. Pattern Reader
4. Orchestrator synthesis

Same output. ~2–3× longer.

---

### Phase 4 — Synthesis

With all three agent returns from Phase 3 in hand, the orchestrator (no subagents — this is synthesis work) connects the findings:

- What does the MPP score tell us about the Phase 1 and 2 findings?
- What does the PMF signal tell us about which parts of the product are working?
- What does the pattern read reveal that neither score alone would show?

One paragraph. No lists. This is the co-founder thinking out loud — connecting the dots between what was built, what users did, and what the numbers say.

---

### Phase 5 — One Decision

Not a list. One thing.

The agent synthesizes everything from Phases 1–4 and proposes a single decision for the next cycle. The format is always:

> "The most important thing you can do in the next [cycle period] is [specific action], because [reason grounded in the cycle's findings]. You'll know it worked if [specific observable signal]."

Then the agent asks: "Does this feel right — or is there something the data is pointing to that I'm missing?"

This is the co-founder moment. Not just presenting the analysis — checking it against your instinct, which sometimes sees things data doesn't.

The one decision becomes the `commitment` field in the cycle record.

---

### Phase 6 — The Record

The agent writes two things:

**1. `cycles/YYYY-MM-DD.md`** — the permanent record

Following the template in [cycle-template.md](cycle-template.md). This document is never edited after the cycle closes — it's a permanent record, like a ship's log. Future cycles can reference it, but not change it.

**2. Updated `founder-context.md`**

The source of truth is updated:
- Stage (has it changed?)
- North star metric and current value
- MPP score
- PMF signal strength
- Current focus (the one decision from Phase 5)
- Last cycle date and key learning

---

## First Cycle Setup

If no `founder-context.md` or `cycles/` exists, the agent runs a one-time setup:

It asks 6 questions — one at a time:
1. "What are you building, in one sentence?"
2. "Who specifically is your first customer — describe their situation, not their demographics."
3. "What stage are you at? (Pre-launch / Just launched / Have users / Revenue)"
4. "What's the one metric you're tracking right now?"
5. "What's the biggest thing you're unsure about?"
6. "What did you try most recently, and what happened?"

This creates `founder-context.md` and `cycles/[today].md` (the first cycle). Setup takes 10 minutes.

---

## The Cycle Record

Each cycle produces one document. The document structure is in [cycle-template.md](cycle-template.md).

The `cycles/` directory becomes your product's memory:

```
cycles/
├── 2026-02-01.md    # First ship — the baseline
├── 2026-02-08.md    # First users
├── 2026-02-15.md    # First feedback
├── 2026-02-22.md    # First sign something is working
└── ...              # The full story, in your own words
```

After 10 cycles, you'll have something most founders don't: a clear record of why you made every significant decision, what you learned from it, and how the product evolved. This is not just useful for you — it's the clearest possible input for a fundraising narrative, a co-founder conversation, or a moment of doubt where you need to remember why you started.

---

## What the Build Cycle Is Not

- **Not a retrospective format** borrowed from engineering sprints. Those are team-coordination tools. This is a founder-learning tool.
- **Not cheerleading.** If your signal is weak, the cycle says so. Honest over kind.
- **Not a feature planning session.** Features happen after the cycle. The cycle decides what problem to solve — not how to solve it.
- **Not skippable when things are going well.** The best cycles happen when things feel good. They find the fragility before it becomes a crisis.

---

## Related Skills

- Use **mpp-evaluator** for a deep-dive MPP scoring session between cycles
- Use **failure-navigator** when build-cycle detects stagnation (3+ flat cycles)
- Use **founder-partner** (Partner phase) for the broader PMF journey and beyond
- Use **pmf-signal-reader** (PMF phase) when build-cycle shows "Building" PMF signal and you want to understand it deeply
