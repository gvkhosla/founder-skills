---
name: pmf-signal-reader
description: Teaches you to read genuine PMF signals — and to stop fooling yourself with vanity metrics. Spawns 4 parallel agents analyzing retention, word-of-mouth, engagement depth, and revenue signals simultaneously. Use when build-cycle shows "Building" PMF signal, when you want an honest read on traction, or when you're not sure if what you're seeing is real. Produces pmf-assessment.md with a signal strength rating and the specific leading indicators to watch.
phase: pmf
version: 1.0.0
---

# PMF Signal Reader

## What PMF Actually Looks Like

PMF is not a moment. It's a pattern that becomes unmistakable when you know what to look for.

The clearest sign: the market is pulling the product forward. Users find you. Users tell others. Users come back without prompting. Usage grows without proportional marketing effort.

The false signals most founders mistake for PMF:
- High signups (acquisition ≠ retention)
- Good press (attention ≠ adoption)
- Investor interest (interest ≠ product-market fit)
- Users saying they love it (saying ≠ doing)

This skill reads the real signals — behavioral, not stated.

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Read my PMF signals"** or **"Do I have PMF?"** or **"Is this traction real?"**

Output: `pmf-assessment.md` — signal strength (None/Faint/Building/Clear), specific evidence for the rating, and the leading indicators to watch next cycle.

---

## Parallel Execution

PMF shows up in four independent signal categories. Spawn one agent per category simultaneously — they read different data and return independent assessments.

**Before spawning, gather:**
- `founder-context.md` — current stage, north star, customer profile
- All `cycles/` records — full behavioral history
- Any raw data the founder can share: retention numbers, referral counts, usage stats

**Spawn these 4 agents simultaneously:**

**Agent 1 — Retention Signal Analyst**
Reads: `founder-context.md` + all cycle records for any retention/return data
Task: Assess retention signal strength.
Evidence to find:
- D1 / D7 / D30 retention estimates or actuals (from cycle records)
- Cohort behavior: do later cohorts retain better than earlier ones?
- The retention curve shape: going to zero (no PMF) vs. flattening (signal)
- Users who have been active for 30+ days without re-engagement campaigns
Returns: Retention signal (None/Faint/Building/Clear) + specific evidence + the retention metric to track next

**Agent 2 — Word-of-Mouth Analyst**
Reads: `founder-context.md` + all cycle records for any sharing/referral mentions
Task: Assess organic word-of-mouth signal.
Evidence to find:
- Any user who told someone else without being asked or incentivized
- Referral rate: what % of new users come from existing users?
- Community mentions: is anyone talking about this product in forums/communities without the founder's involvement?
- The grief test signal: any users who expressed they'd miss the product
Returns: WoM signal (None/Faint/Building/Clear) + specific evidence (quotes from cycles if any) + trigger: what would cause users to share

**Agent 3 — Engagement Depth Analyst**
Reads: `founder-context.md` + all cycle records for usage and engagement descriptions
Task: Assess engagement depth signal.
Evidence to find:
- Feature discovery: are users finding features without being shown them?
- Usage frequency: how often are retained users using the product?
- Session depth: are users going deeper into the product over time?
- Power users: is there a segment using the product significantly more than average?
- Unexpected use cases: are users using the product for things the founder didn't design for?
Returns: Engagement signal (None/Faint/Building/Clear) + the most interesting engagement pattern + what it implies about product direction

**Agent 4 — Revenue Signal Analyst**
Reads: `founder-context.md` + all cycle records for any payment/conversion mentions
Task: Assess revenue signal strength (even for pre-revenue products).
Evidence to find:
- For paid products: is net revenue retention > 100%? (expansion > churn)
- For paid products: are users upgrading without being prompted?
- For free products: are users asking for a paid tier or offering to pay?
- Willingness to pay signal: any user who said "I'd pay for this" or "how do I pay?"
- Price sensitivity: any resistance when pricing was mentioned?
Returns: Revenue signal (None/Faint/Building/Clear) + specific evidence + the revenue signal to watch next

**Wait for all 4 agents. Orchestrator synthesizes.**

---

## Synthesis (Orchestrator Only)

**Composite PMF Signal:**
Weighted average of the four signals, with retention weighted most heavily (2×):

| Signal | Weight | Your Rating |
|--------|--------|-------------|
| Retention | 2× | [Agent 1] |
| Word-of-Mouth | 1× | [Agent 2] |
| Engagement Depth | 1× | [Agent 3] |
| Revenue | 1× | [Agent 4] |

**Signal levels:**
- **None:** All or most signals are absent. Focus on the compounding stage — you're not there yet.
- **Faint:** 1–2 signals present weakly. Something is working — find it and amplify it.
- **Building:** 2–3 signals present consistently. A core group is finding real value. Scale carefully.
- **Clear:** All 4 signals present. The market is pulling. Now is the time to scale.

**Write `pmf-assessment.md`:**

```markdown
# PMF Signal Assessment — [YYYY-MM-DD]

## Overall Signal: [None / Faint / Building / Clear]

## Signal Breakdown
| Category | Signal | Key Evidence |
|----------|--------|-------------|
| Retention | [level] | [Agent 1 evidence] |
| Word-of-Mouth | [level] | [Agent 2 evidence] |
| Engagement Depth | [level] | [Agent 3 evidence] |
| Revenue | [level] | [Agent 4 evidence] |

## What This Means
[One honest paragraph — what the composite signal tells you about where the product actually is]

## The Sean Ellis Test
If 40%+ of your surveyed users would be "very disappointed" if they couldn't use
this product: strong PMF signal. Current estimate based on cycle data: [X%] / Unknown.

## What to Watch Next Cycle
[The 2–3 specific behavioral signals that would move the composite rating up]

## What Would Confirm PMF
[Specific, observable threshold — e.g., "D30 retention above 20% for a second consecutive cohort"]
```

---

## Sequential Fallback (Codex)

Run each signal category analysis in sequence:
1. Retention → signal + evidence
2. Word-of-mouth → signal + evidence
3. Engagement depth → signal + evidence
4. Revenue → signal + evidence
5. Synthesize → write `pmf-assessment.md`

---

## Related Skills

- Use **build-cycle** — PMF signal is assessed every cycle (abbreviated version)
- Use **north-star-definer** after this — once you see which signal is strongest, define the metric that captures it
- Use **retention-loop-designer** if retention signal is Faint or Building
- Use **growth-loop-builder** if word-of-mouth signal is Building or Clear
- Use **co-founder** for overall strategic guidance on what the signal means for your next move
