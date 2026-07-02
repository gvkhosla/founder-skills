---
name: north-star-definer
description: Identifies the single metric that best captures whether your product is delivering real value. Use when you're tracking many metrics but lack one value metric to align product decisions. Produces north-star.md with your north star metric, 3 leading indicators, and a measurement plan.
phase: pmf
version: 1.0.0
---

# North Star Definer

## What a North Star Is

One metric. The one that best reflects the value your product delivers to users.

Not revenue (that's an output of value, not value itself). Not signups (that's acquisition). Not sessions (that's activity). The north star is the metric that captures the *outcome* users get from your product.

When this number goes up, users are getting more value. When it goes up consistently, you're approaching PMF. When it goes up without proportional effort, you're there.

**Examples of real north stars:**
- Airbnb: Nights booked (value for both hosts and guests)
- Slack: Messages sent (depth of team adoption)
- Spotify: Time spent listening (value delivered to listeners)
- A booking tool: Sessions booked through the platform (the job done)
- A waste tracker: Weekly waste logs submitted (the behavior that creates value)

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Define my north star"** or **"What metric should I obsess over?"**

Output: `north-star.md` — your north star metric, why it was chosen, 3 leading indicators, and how to measure it.

---

## Parallel Execution

Evaluating candidate metrics is independent work — each metric can be assessed simultaneously.

**Step 1: Generate candidates (Orchestrator)**

From `founder-context.md` and the product description, generate 4–6 candidate metrics. One per category:
- An **acquisition metric** (signups, installs, trials) — almost never the north star
- An **activation metric** (completed first core action)
- A **retention metric** (D30 active users, sessions per week)
- A **value delivery metric** (the outcome the product creates — THIS is usually the north star)
- A **revenue metric** (MRR, conversion rate)
- A **network/viral metric** (if applicable: referrals, shared content)

**Step 2: Spawn one evaluator agent per candidate metric simultaneously**

Each agent evaluates ONE metric against the four north star criteria:

**Criterion 1 — Value Alignment:** Does this metric go up when users are getting more value? Or can it go up while users get no value? (e.g., sessions can rise when users are confused and refreshing)

**Criterion 2 — Leading vs. Lagging:** Is this metric a leading indicator of business health (predicts future outcomes) or a lagging indicator (confirms past results)? North stars are leading.

**Criterion 3 — Actionability:** When this metric is flat or declining, does it point to specific things to fix? Or is it too abstract to act on?

**Criterion 4 — Comprehensibility:** Can every person involved in building the product understand this metric and explain how their work affects it?

Each agent returns: metric name, scores on all 4 criteria (1–5 each), composite score, and one-sentence verdict.

**Wait for all agents. Orchestrator selects and defines.**

---

## Synthesis (Orchestrator Only)

**1. Rank candidates** by composite criterion score.

**2. Apply the north star test to the top scorer:**
Ask: "If this metric doubled while everything else stayed the same, would that unambiguously mean the product is working better for users?"
- Yes → confirmed north star
- No → move to the next candidate

**3. Define 3 leading indicators** — metrics that predict movement in the north star before the north star moves. These are what you watch week-to-week.

**4. Write `north-star.md`:**

```markdown
# North Star — [Product Name]

## The North Star Metric
**[Metric Name]**
[One sentence: exactly how this is measured]

## Why This, Not the Others
| Rejected Metric | Why Not |
|----------------|---------|
| [Signups] | Acquisition, not value — can rise while retention crashes |
| [Sessions] | Activity proxy — rises when users are confused as much as engaged |
| [...] | [...] |

**[Chosen metric] wins because:** [2 sentences — value alignment + actionability]

## How to Measure It
**Frequency:** [Daily / Weekly — weekly is usually right for early-stage]
**Source:** [Where the data comes from — Supabase query, PostHog event, manual count]
**Baseline:** [Current value as of today]
**Target:** [What would indicate PMF-level performance]

## 3 Leading Indicators
These predict north star movement before the north star moves.
Watch these weekly; review the north star monthly.

1. **[Metric]** — [Why it leads the north star]
2. **[Metric]** — [Why it leads the north star]
3. **[Metric]** — [Why it leads the north star]

## The Diagnostic Question
When the north star is flat, ask: [specific question that points to the root cause]
When the north star is declining, ask: [specific question]
When the north star is rising faster than expected, ask: [what's driving it?]
```

**5. Update `founder-context.md`:** Set `north_star_metric` and `north_star_current_value`.

---

## Sequential Fallback (Codex)

Evaluate each candidate metric one at a time against the 4 criteria, then select the highest scorer.

---

## Related Skills

- Use **pmf-signal-reader** before this — the PMF signals reveal which metric category matters most
- Use **build-cycle** — north star value tracked every cycle after this is defined
- Use **retention-loop-designer** if the north star is a retention-type metric
- Use **growth-loop-builder** if the north star is a viral/acquisition-type metric
