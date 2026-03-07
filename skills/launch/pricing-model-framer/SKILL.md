---
name: pricing-model-framer
description: Defines your pricing model, tier structure, and price points by spawning 3 parallel pricing hypothesis agents — a Value-Based Pricer, a Competitive Benchmarker, and a Willingness-to-Pay Tester — then synthesizes their recommendations into a single pricing strategy. Use before launch when you need to decide how to charge. Produces pricing-model.md with a recommended structure, specific price points, and a validation test to run this week.
phase: launch
version: 2.0.0
---

# Pricing Model Framer

## Quick Start

Say: **"Help me decide my pricing"** or **"How should I charge for this?"**

Describe your product and who it's for.
Output: `pricing-model.md` — recommended model, tier structure, specific price points, competitive context, and a validation test you can run in 48 hours.

---

## What You'll Get

A `pricing-model.md` containing: recommended pricing model (and why), 2-3 tier structure with names, what's included at each tier, specific dollar amounts, a competitive pricing table showing where you sit relative to alternatives, and a concrete test design to validate the price point before launch.

> **Example output excerpt:**
> **Model: Free trial -> Paid (14-day trial, no credit card required)**
> **Tier 1 — Solo ($29/month):** 1 booking page, unlimited classes, email confirmations, up to 100 students.
> **Tier 2 — Studio ($79/month):** Multiple instructors, custom branding, payment collection.
> **Competitive position:** Priced between Acuity ($16/month, general scheduling) and Mindbody ($129/month, enterprise fitness). Targeting the gap for serious solo instructors.
> **Validation test:** Run a Van Westendorp survey with 15 yoga instructors this week. Ask four price-point questions. Takes 48 hours, costs $0.

---

## The Expert Judgment Embedded

This skill applies **Value-Based Pricing** principles combined with **SaaS Pricing Patterns** from Patrick Campbell (ProfitWell) and the **Pricing Page Clarity** principle. Most first-time founders underprice because they're afraid nobody will pay. This produces three problems: you attract price-sensitive early adopters who churn quickly, you undermine your own perceived value, and you make it mathematically impossible to build a real business.

The rule of thumb: charge at least 10x what you think is "reasonable." Then reality and willingness-to-pay interviews will move it to the right number. Starting too low is almost always harder to fix than starting too high.

---

## Step 1: Context Gathering (Orchestrator)

Before spawning agents, collect context.

**Auto-read these files if they exist:**
- `customer-profile.md` — target customer, their budget, where they spend
- `mvp-brief.md` — what the product does, core features, value proposition
- `positioning.md` — the one-liner, category, competitive alternatives

**Ask the founder directly:**
1. What type of product is this? (SaaS tool / marketplace / API / consumer app / service)
2. What does your target customer currently pay for alternatives or workarounds? (including $0 — doing it manually)
3. What budget category does this fall into for your customer? (impulse / tool budget / software line item / procurement)
4. Who are the 2-3 closest competitors or alternatives (including spreadsheets, manual processes, hiring someone)?

Pass all this context to all three agents.

---

## Step 2: Parallel Pricing Hypothesis (3 Agents Simultaneously)

**Spawn these 3 agents simultaneously:**

### Agent 1 — Value-Based Pricer

Context: Product description + customer profile + what value the product delivers
Task: Calculate price from the value delivered to the customer.

Quantify value using one or more of these lenses:
- **Time saved:** Hours saved per week x customer's hourly rate (or opportunity cost)
- **Revenue generated:** Additional revenue the customer earns because of the product
- **Cost avoided:** Money the customer no longer spends on alternatives, tools, or hires

Apply the **10x rule**: price should be roughly 1/10th of the value delivered, so the customer gets a clear 10x ROI.

Produce:
- Value calculation with specific numbers (e.g., "saves 3 hrs/week x $50/hr = $150/week value")
- Recommended pricing model (free trial, freemium, paid-only, usage-based) with rationale
- 2-3 tier structure with names, what's included, and specific dollar amounts
- The value metric that should gate tiers (users, usage, features, or seats)
- The upgrade trigger — what moment makes a customer ready for the next tier

Returns: Value-based pricing recommendation with model, tiers, price points, and value math.

### Agent 2 — Competitive Benchmarker

Context: Product description + customer profile + competitors/alternatives the founder named
Task: Find 3 comparable products, map their pricing, and identify where to position.

For each of the 3 competitors/alternatives:
- Product name and what it does
- Pricing model (free, freemium, trial, paid-only)
- Price points per tier
- What's included at each tier
- Who it's really built for (their target customer vs. your target customer)

Then determine positioning:
- **Premium:** Price above all competitors. Justified when? (better UX, niche focus, higher value)
- **Parity:** Price at market rate. Justified when? (similar feature set, competing on other dimensions)
- **Undercut:** Price below competitors. Justified when? (simpler product, targeting underserved segment)

Returns: Competitor pricing table (3 products) + positioning recommendation (premium / parity / undercut) with rationale.

### Agent 3 — Willingness-to-Pay Tester

Context: Product description + customer profile + price range emerging from value/competitive analysis
Task: Design a validation test the founder can run in 48 hours to check whether real customers will pay the proposed price.

Choose one of these test designs based on the founder's situation:

| Test Type | When to Use | Cost | Time |
|-----------|------------|------|------|
| **Van Westendorp survey** | You have access to 10-20 target customers | $0 | 48 hours |
| **Fake door test** | You have a landing page or can build one fast | $50-$200 ads | 48 hours |
| **Pre-sell / deposit** | You have warm leads who expressed interest | $0 | 24-48 hours |
| **Price anchoring interview** | You can get 5 target customers on a call | $0 | 2-3 days |

Produce:
- Which test to run and why it fits this founder's situation
- Exact step-by-step instructions (not general advice — specific actions)
- What questions to ask or what to put on the page
- Sample size needed and what "success" looks like
- How to interpret the results

Returns: Complete test design with exact steps, timeline, cost, and success criteria.

**Wait for all 3 agents. The orchestrator synthesizes.**

---

## Step 3: Synthesis and Recommendation (Orchestrator Only)

The orchestrator reviews all three agents' outputs and reconciles them.

**If agents agree:** Reinforce the recommendation with the converging evidence. State the price point with confidence.

**If agents disagree:** Explain the tension (e.g., "Value-based analysis suggests $49/month, but competitive benchmarking shows the market clusters at $29/month"). Pick the recommendation and explain the logic — usually: go with value-based pricing if you have a differentiated product, go with competitive parity if you're entering a crowded market, and always validate with the WTP test before committing.

**Write `pricing-model.md`:**

```markdown
# Pricing Model — [Product Name] — [YYYY-MM-DD]

## Recommended Model
[Free trial / Freemium / Paid-only / Usage-based] — [one sentence rationale]

## Value Math
[Value-Based Pricer's calculation: what value is delivered, in dollars, per week/month]
[Price as a fraction of value delivered — target 10x ROI for customer]

## Competitive Landscape
| Product | Model | Price | Target Customer | Key Difference |
|---------|-------|-------|----------------|----------------|
| [Comp 1] | [model] | [price] | [who] | [vs. your product] |
| [Comp 2] | [model] | [price] | [who] | [vs. your product] |
| [Comp 3] | [model] | [price] | [who] | [vs. your product] |

**Positioning:** [Premium / Parity / Undercut] — [rationale]

## Tier Structure

| | **[Tier 1 Name] — $[X]/month** | **[Tier 2 Name] — $[Y]/month** |
|--|-------------------------------|-------------------------------|
| [Value metric] | [limit] | [limit or unlimited] |
| [Feature 1] | [included?] | [included?] |
| [Feature 2] | [included?] | [included?] |

**Value metric:** [What scales with value — and why this is the right gate]
**Upgrade trigger:** [The moment that makes a customer ready for the next tier]

## Validation Test
[WTP Tester's recommended test]
**What to do:** [Exact steps]
**Timeline:** [Hours/days]
**Cost:** [Dollars]
**Success signal:** [What result means the price is right]
**If the test fails:** [What to adjust — price, model, or tier structure]

## Pricing Page Guidance
- Lead with the outcome, not the feature list
- Show annual pricing as an option ([X] months free = [Y]% discount)
- [Any additional pricing page advice specific to this product]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, run each pricing hypothesis in sequence:

1. Value-Based Pricer — calculate value delivered, recommend model + tiers + price points
2. Competitive Benchmarker — map 3 competitors, determine positioning
3. Willingness-to-Pay Tester — design validation test

Then synthesize into `pricing-model.md`.

Same output. ~3x longer.

---

## Worked Example

**Founder:** Building a booking tool for solo yoga/fitness instructors. Target customer charges $15-$25 per class, teaches 8-12 classes/week, has 50-120 regular students. Competitors mentioned: Acuity Scheduling, Mindbody, Google Calendar + Venmo.

**Context gathered:** Read `customer-profile.md` (solo yoga instructors, tech-hesitant, budget-conscious). Read `mvp-brief.md` (booking page, class schedule, automated reminders, payment collection). `positioning.md` not found.

**3 agents spawn simultaneously:**

**Agent 1 (Value-Based Pricer) returns:**
> Value calculation: Instructor saves 3+ hours/week on booking admin (DMs, confirmations, no-show follow-ups). At $30/hr opportunity cost = $90/week saved. Also reduces no-shows by ~20%, recovering ~$60/week in lost revenue. Total value: ~$150/week.
> At 10x ROI: price up to $15/week = $60/month.
> Recommended model: 14-day free trial, no credit card. Freemium rejected — free tier attracts hobbyists with 5 students who never upgrade.
> Tiers: Solo ($19/month, up to 75 students, 1 booking page) and Pro ($39/month, unlimited students, multiple pages, payment collection, custom branding).
> Value metric: active students. Upgrade trigger: hitting 75 students.

**Agent 2 (Competitive Benchmarker) returns:**
> | Product | Model | Price | Target | Key Difference |
> |---------|-------|-------|--------|----------------|
> | Acuity Scheduling | Free trial -> Paid | $16-$49/month | General service providers | Generic — not fitness-specific, no class packs |
> | Mindbody | Paid-only | $129-$399/month | Studios + gyms | Enterprise — overkill and overpriced for solo instructors |
> | Google Calendar + Venmo | Free | $0 | Everyone | Manual — works until you hit 30+ students |
>
> Positioning: **Premium vs. free tools, undercut vs. Mindbody.** There's a clear gap between free/manual ($0) and enterprise ($129+). Price in the $19-$49 range targets serious solo instructors who've outgrown Google Calendar but can't justify Mindbody.

**Agent 3 (Willingness-to-Pay Tester) returns:**
> Recommended test: **Van Westendorp survey** — founder has access to yoga instructor communities on Facebook and Instagram.
> Steps: (1) Post in 2-3 yoga instructor Facebook groups asking for 5-minute feedback on a "new booking tool." (2) Ask four questions: At what price would this be so cheap you'd question the quality? At what price is this a great deal? At what price is it getting expensive but you'd still consider it? At what price is it too expensive to consider? (3) Collect 15-20 responses. (4) Plot the four curves — the intersection defines the acceptable price range.
> Success signal: Acceptable range includes $19-$39/month. If range is below $15, reconsider the value proposition. If above $49, you may be underpricing.
> Timeline: 48 hours. Cost: $0.

**Orchestrator synthesis:**
> All three agents converge: $19-$39/month range is supported by value math (10x ROI at $19), competitive gap (between free and $129), and will be validated by the Van Westendorp survey. Recommendation: Solo at $19/month, Pro at $39/month. Run the survey this week before finalizing the pricing page.

---

## Related Skills

- Use **positioning-writer** before this — positioning shapes how pricing is perceived
- Use **landing-page-copywriter** after this — your landing page needs to reflect your pricing model
- Use **assumption-mapper** before or after this — "customers will pay $X/month" is a key assumption to validate
- Use **launch-plan-builder** after this — pricing must be decided before full launch
