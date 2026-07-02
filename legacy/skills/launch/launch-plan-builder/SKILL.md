---
name: launch-plan-builder
description: Creates a realistic, week-by-week launch plan tailored to your product type and current audience. Spawns 3 parallel agents — one per channel tier (Owned, Rented, Borrowed) — to build channel strategies simultaneously, then assembles into a unified plan. Use when 2–4 weeks from launch or when you need a concrete plan to get your first 100 users. Produces launch-plan.md with a phased plan and launch-day checklist.
phase: launch
version: 2.0.0
---

# Launch Plan Builder

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Build my launch plan"** or **"Help me plan my launch"**

Describe your product, current audience, and timeline.
Output: `launch-plan.md` — a phased, channel-specific plan with weekly actions and a launch-day checklist.

---

## How This Works

The ORB framework (Owned, Rented, Borrowed channels) identifies three completely independent workstreams — each can be planned in parallel. Three agents work simultaneously on their channel tier, then the orchestrator assembles a unified, sequenced plan.

---

## Step 1: Context Gathering (Orchestrator)

Before spawning agents, collect:

**Audience assessment (ask founder directly):**
1. How many people currently know this product exists? (0 / handful / hundreds / thousands)
2. Existing owned assets: email list size? social following? community membership?
3. Where does your target customer spend time online? (which forums, communities, newsletters, platforms)
4. Timeline to full launch? (2 weeks / 4 weeks / 2 months)

**From existing documents:**
- `founder-context.md` — customer profile, stage, product description
- `positioning.md` — the one-liner and elevator pitch (if it exists)
- `customer-profile.md` — where the target customer hangs out

Pass all this context to all three agents.

---

## Step 2: Parallel Channel Strategy (3 Agents Simultaneously)

**Spawn these 3 agents simultaneously:**

**Agent 1 — Owned Channel Strategist**
Context: Founder's existing owned assets + customer profile + product description
Task: Design the owned channel strategy for this product and audience.
Owned channels include: email list, waitlist, personal outreach, blog, community.
Produce:
- Recommended 1–2 owned channels to prioritize (based on founder's current assets)
- Week-by-week actions for each channel across a 4-week plan
- How to build the owned asset during the launch (e.g., if list is tiny, how to grow it)
- Expected outcomes per channel at this audience size
Returns: Owned channel plan (weeks 1–4 + expected outcomes + effort estimate)

**Agent 2 — Rented Channel Strategist**
Context: Target customer profile + where they spend time + product description
Task: Design the rented channel strategy — the platforms the founder doesn't own but should use.
Rented channels include: Reddit, Facebook Groups, Twitter/X, LinkedIn, Product Hunt, BetaList, Hacker News.
Produce:
- Recommended 2–3 specific communities/platforms (by name) where this customer is active
- Concrete post strategy: what to post, when, how to frame it for this community
- The personal framing vs. promotional framing distinction (personal always outperforms)
- Product Hunt preparation checklist (if relevant to this product type)
Returns: Rented channel plan (weeks 1–4 + specific community names + post frameworks + PH checklist if applicable)

**Agent 3 — Borrowed Channel Strategist**
Context: Product description + target customer + existing network/connections
Task: Design the borrowed channel strategy — tapping into audiences the founder doesn't own.
Borrowed channels include: newsletter sponsorships, podcast appearances, co-marketing, influencer DMs, partnerships.
Produce:
- 3–5 specific newsletters or podcasts where target customer is an audience member
- How to pitch each (not a template — a specific angle for this product)
- One partnership opportunity that could produce a co-launch
- Timeline: borrowed channels take 2–4 weeks to secure; what needs to start NOW
Returns: Borrowed channel plan (specific targets + pitch angles + timeline + what to start immediately)

**Wait for all 3 agents. The orchestrator assembles.**

---

## Step 3: Assembly (Orchestrator Only)

The orchestrator synthesizes the three channel plans into a unified week-by-week plan. The sequencing principle: **do owned first (set up the capture mechanism), then rented (generate traffic), then borrowed (amplify at scale).**

**Write `launch-plan.md`:**

```markdown
# Launch Plan — [Product Name] — [YYYY-MM-DD]

## Audience Starting Point
[Current state: email list size, social following, awareness level]

## Channel Strategy
**Owned:** [1–2 channels + rationale]
**Rented:** [2–3 communities/platforms + rationale]
**Borrowed:** [Top 2–3 opportunities + rationale]

## Week-by-Week Plan

### Week 1 — Seed
**Goal:** Find your first 10 potential users.

**Owned:** [Agent 1's week 1 actions]
**Rented:** [Agent 2's week 1 actions — join communities, don't promote yet]
**Borrowed:** [Agent 3's week 1 actions — send pitches NOW so they're in motion]

### Week 2 — Soft Launch (Alpha)
**Goal:** First 5–10 real users.

[Same format — all three channels' actions integrated into a cohesive narrative]

### Week 3 — Beta Expansion
**Goal:** 20–50 users. First social proof.

[...]

### Week 4 — Full Launch
**Goal:** Maximum visibility. Convert the spike.

[...]

## Launch Day Checklist

### T-48 hours
- [ ] [Agent 2: rented channel posts drafted and ready]
- [ ] [Agent 3: borrowed channel partners briefed and ready]
- [ ] Email list segment identified and email drafted
- [ ] Analytics tracking confirmed working

### Launch moment
- [ ] Post across all rented channels simultaneously (not spread over hours)
- [ ] Send email to list
- [ ] Product Hunt listing goes live (if applicable)
- [ ] Personal message to top 10 contacts in your network

### First 4 hours
- [ ] Respond to every comment, DM, and mention personally
- [ ] Track where signups are coming from (which channel is converting)
- [ ] Note the questions people are asking — these become your FAQ

## What to Watch in the First 72 Hours
- Traffic source breakdown: which channel is sending real users?
- Signup conversion: what % of visitors are signing up?
- The question people ask: what's confusing them?
- Who's sharing it: are any rented or borrowed channels creating organic spread?
```

---

## Sequential Fallback (Codex / OpenCode)

Plan each channel tier in sequence:

1. Owned channel strategy → week-by-week plan
2. Rented channel strategy → week-by-week plan
3. Borrowed channel strategy → week-by-week plan
4. Orchestrator assembles into unified `launch-plan.md`

Same output. ~3× longer.

---

## Related Skills

- Use **positioning-writer** before this — your positioning shapes all channel messaging
- Use **landing-page-copywriter** before this — the landing page must be live before launch traffic arrives
- Use **pricing-model-framer** before this — pricing must be decided before full launch
- Use **build-cycle** (Compound phase) — run the first build cycle the week after launch
