---
name: feature-sequencer
description: Prioritizes what to build in what order, given your MVP brief and tech stack. Use when you have a feature list and don't know where to start, or when you're building in the wrong order and feeling stuck. Produces a build-sequence.md with a sequenced backlog and a clear "build this first" decision.
phase: build
version: 1.0.0
---

# Feature Sequencer

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Help me sequence my features"** or **"What should I build first?"**

Share your MVP brief or feature list. Total time: 10 minutes.
Output: `build-sequence.md` — features in build order with rationale, plus an explicit "don't build yet" list.

## What You'll Get

A `build-sequence.md` with features grouped into three tiers: build now (unblocks everything), build next (adds value after core works), and build later (nice to have). Each tier has a rationale and a time estimate.

> **Example output excerpt:**
> **Build First — The Core Loop (Week 1):**
> 1. User can log in and see their dashboard (auth + basic layout)
> 2. User can create a waste log entry (the core action)
> 3. User can view today's entries in a list (immediate feedback)
> **Why first:** Without these 3 working together, no other feature matters.
> **Build Next (Week 2):** Weekly summary view, category breakdown chart.
> **Don't Build Yet:** Slack notifications, CSV export, multi-user access, mobile app.

## The Expert Judgment Embedded

This skill applies the **Core Loop First** principle combined with **Dependency Graph** sequencing. Every product has a core loop — the minimum sequence of actions that delivers the product's value. Build that loop completely before building anything else, because every other feature depends on it working.

The most common sequencing mistake: building features in isolation (auth, then settings, then profile) before the core job is done. This produces a product where you can set up an account and configure your preferences but can't actually do the thing you came to do. Users leave.

## The Process

### Step 1: Identify the Core Loop

The agent asks: "What is the minimum sequence of 3–5 actions a user must be able to complete for your product to deliver its value — even once?"

The core loop is not a feature. It's a journey:
- Example (booking tool): Create account → Set availability → Share booking link → Client books → See confirmation
- Example (waste tracker): Log in → Enter waste items → See today's total
- Example (client portal): Client receives invite → Views project status → Approves deliverable

Everything outside the core loop is Tier 2 or Tier 3.

### Step 2: Identify Blockers

The agent identifies which features in your list are **blocked** by other features:

- Auth blocks everything — build first
- The database schema blocks data entry — design first
- The core action blocks all downstream views — build before dashboards and summaries

Features that nothing else depends on go to Tier 2 or 3.

### Step 3: Sequence Within Tiers

Within each tier, features are ordered by:
1. **User-facing value first** — things users see and do, before things that run behind the scenes
2. **Hard before easy** — get the hardest technical challenge done early, while motivation is high
3. **Feedback-generating first** — features that create data or output you can show to users

### Step 4: Time Estimates

Each feature gets a rough estimate: hours for simple additions, days for significant features, "unknown — spike first" for anything technically uncertain.

**Spike** = build a throwaway prototype of the uncertain part before committing to it in the sequence.

### Step 5: Output

`build-sequence.md` with three tiers, rationale for each sequencing decision, and a "what to open your laptop and build right now" first task.

## Worked Example

**Founder:** Building a proposal tool for freelance designers. Has a list of 9 features from the MVP scoper.

**Feature list:** user accounts, proposal templates, custom pricing table, client preview link, e-signature, PDF export, revision tracking, activity feed, email notifications.

**Output:**
> **Build Sequence — Freelance Proposal Tool**
>
> **Tier 1 — Core Loop (Build This Week):**
> 1. User account creation + login (Supabase Auth — 2 hours with agent)
> 2. Create a proposal: title, description, line items with prices (4 hours)
> 3. Shareable client preview link — a public URL where the client sees the proposal (3 hours)
> **Why:** This is the complete job. A freelancer can create a proposal and send it to a client. Everything else enhances this loop.
>
> **Tier 2 — Add Value (Next Week):**
> 4. E-signature: client can approve the proposal in the browser (1 day — high value, relatively easy with a library like Signature Pad)
> 5. Email notification to freelancer when client views/signs (2 hours)
> 6. PDF export (3 hours — use Puppeteer or a PDF library, not a custom renderer)
> **Why:** These make the core loop professional enough to actually use with real clients.
>
> **Tier 3 — After First Users (Week 3+):**
> 7. Proposal templates (useful at scale, not needed for first 10 users)
> 8. Revision tracking (adds complexity, validate first if users actually need it)
> 9. Activity feed (nice to have, low priority)
>
> **Start right now:** Create a new Next.js project, wire up Supabase auth, create the proposals database table. This is your first 2 hours.

## Related Skills

- Use **mvp-scoper** before this — the MVP brief is your input feature list
- Use **stack-selector** before this — knowing your stack clarifies what's fast vs. slow to build
- Use **integration-picker** after this — identify the third-party tools for specific features (payments, auth, email)
- Use **build-cycle** (Compound phase) after your first build cycle — reflects on what the sequencing taught you
