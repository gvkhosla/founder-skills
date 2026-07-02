---
name: customer-hypothesis
description: Builds a sharp, specific customer profile you can actually build for — not a demographic, but a person in a situation. Use when your target customer feels vague, when you're building for "everyone," or when you want to sharpen who your first users should be. Produces a customer-profile.md with the situation, pain, motivation, and workaround of your ideal early adopter.
phase: strategy
version: 1.0.0
---

# Customer Hypothesis

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Help me define my customer"** or **"Who should I be building for?"**

You'll answer 6 questions. Total time: 10 minutes.
Output: `customer-profile.md` — a one-page portrait of your ideal early adopter, specific enough to build for.

## What You'll Get

A `customer-profile.md` with: who they are by situation (not demographics), what their day looks like around the problem, what they've already tried, what they're afraid of, what success looks like to them, and why they'd be the perfect early adopter.

> **Example output excerpt:**
> **Customer:** The Overwhelmed Solo Bookkeeper
> **Situation:** Runs their own bookkeeping practice, manages 8–15 small business clients, works from home, no team.
> **The painful moment:** Every month-end, they spend 2–3 days reconciling accounts manually in spreadsheets, often working weekends to hit client deadlines.
> **What they've tried:** Tried QuickBooks but found it overkill; uses Excel because "at least I understand it."
> **What they fear:** Making an error that costs a client money — and losing the client's trust.
> **Why they're the perfect early adopter:** High pain, already paying for tools that don't fully work, have time to give feedback, willing to try something new if the risk feels low.

## The Expert Judgment Embedded

This skill applies **Early Adopter Theory** (Geoffrey Moore, Crossing the Chasm) and the **Customer Forces Canvas** (Bob Moesta). Early adopters are not average customers — they have a problem so acute they're actively seeking a solution. They're the only ones worth building for in the early stages.

The critical distinction: **demographics** describe who someone is (age, gender, industry). **Situations** describe what someone is experiencing. You can't build for demographics. You can build for situations.

Most founders' customer descriptions are 90% demographic and 10% situational. This skill inverts that ratio.

## The Process

### Step 1: Situation Over Demographics

The agent asks: "Forget job titles and ages. Describe the situation your customer is in right NOW — what are they dealing with, what pressure are they under, what are they responsible for?"

If the description sounds like it could describe 10 million people, it's still too broad.

### Step 2: The Painful Moment

The agent asks: "Walk me through the exact moment the problem you're solving happens. What triggers it? What do they do? What do they feel?"

This produces the "situation scene" — the specific, observable moment the product would intervene in. It's the scene you'll describe on your landing page.

### Step 3: The Workaround

The agent asks: "What are they doing RIGHT NOW to deal with this problem? Not what they wish they had — what are they actually doing?"

This is the most important question. A workaround is proof of an active problem. The nature of the workaround reveals what the product needs to beat.

### Step 4: The Fear

The agent asks: "What are they most afraid of in this area? What's the downside scenario they're trying to avoid?"

Fear reveals the emotional job the product must address. This drives copywriting, onboarding, and trust-building decisions.

### Step 5: Early Adopter Fitness

The agent scores whether this customer profile is ideal for an early stage product:
- ✅ Active workaround = they're seeking a solution already
- ✅ High frequency = they'll use the product often and give feedback faster
- ✅ Accessible = you can actually reach and talk to them
- ✅ Risk tolerance = willing to try something new, not locked into an incumbent
- ⚠️ Large enterprise = long sales cycles, procurement, red tape — wrong for early stage
- ❌ "Anyone who…" = too broad, needs narrowing

### Step 6: Output

`customer-profile.md` — the full profile, plus the single sentence that captures who they are ("I build for [situation] who are trying to [job] but keep running into [obstacle].")

## Worked Example

**Founder:** Building a client portal tool for service businesses.

**Output:**
> **Customer Profile — The Boutique Agency Owner**
>
> **Who they are (situation):** Runs a 2–4 person creative or marketing agency. Has 5–12 active clients at any time. They're the founder, main client contact, AND doing the actual work. No operations person.
>
> **The painful moment:** A client emails asking "where are we on the deliverables?" — and the founder has to stop what they're doing, dig through Slack, Notion, Google Drive, and email threads to assemble an answer. This happens 3–5 times a week.
>
> **What they've tried:** Shared Notion docs (clients rarely log in), weekly email updates (clients still ask anyway), Basecamp (felt like overkill, clients resisted learning it).
>
> **What they fear:** Looking disorganized to a client and losing the account. Their entire business runs on referrals — reputation is everything.
>
> **Why they're the perfect early adopter:** High pain (wastes hours weekly), already tried alternatives (knows what doesn't work), reachable (active in agency Facebook groups and Twitter), will evangelize if it works (referral-driven community).
>
> **The one sentence:** "I build for boutique agency owners who are trying to keep clients informed without creating more work for themselves."

## Related Skills

- Use **problem-validator** before this to confirm the problem is real
- Use **mvp-scoper** after this — the customer profile sharpens what to include and cut
- Use **assumption-mapper** after this — the profile is full of assumptions worth testing
- Use **ux-flow-designer** (Design phase) — this profile informs the user journey
