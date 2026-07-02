---
name: growth-loop-builder
description: Designs a self-reinforcing growth loop where each new user or action creates the conditions for the next. Use when you want compounding organic growth instead of paid acquisition dependence. Produces growth-loop.md with the highest-potential loop for your product and a specific implementation plan.
phase: pmf
version: 1.0.0
---

# Growth Loop Builder

## What a Growth Loop Is

A growth loop is a system where growth feeds itself. Each user, action, or dollar of revenue creates the input for acquiring the next user — without proportional increase in effort or spend.

The opposite of a growth loop: a funnel. Funnels require constant top-of-funnel effort to produce output. When you stop feeding the funnel, growth stops. Growth loops compound — each cycle produces slightly more than the last.

**The test:** "Does each new user create the conditions for the next new user?" If yes, you have a loop. If not, you have a funnel.

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Build my growth loop"** or **"How do I grow without paid ads?"** or **"Design a growth loop for me"**

Output: `growth-loop.md` — the highest-potential loop type, specific design, implementation steps, and the metric that tells you the loop is working.

---

## Parallel Execution

Four loop types. Four independent evaluations. All run simultaneously.

**Before spawning, gather:**
- `founder-context.md` — product description, customer profile, current acquisition channels
- `customer-profile.md` — how the target customer makes decisions, who they influence
- `pmf-assessment.md` — which signals are strongest (points to which loop type fits best)
- Any data on current user behavior: referrals, content creation, usage patterns

**Spawn these 4 agents simultaneously:**

**Agent 1 — Viral Loop Evaluator**
A viral loop exists when users invite others as a natural part of using the product.

True viral loops:
- Calendly: sending a booking link exposes the product to a new person
- Dropbox: sharing a folder requires the recipient to have Dropbox
- Loom: watching a loom video shows the product to the viewer
- Zoom: joining a call requires downloading Zoom

Questions to assess fit:
- Does using the product naturally expose it to non-users?
- Is there a feature where value increases when others join?
- Can the invite/share be a core product action rather than a marketing bolt-on?
- What is the current viral coefficient (k-factor)? (invites sent per user × conversion rate)

Returns: Viral loop fit score (1–5) + whether a natural viral mechanic exists + specific design + k-factor estimate + what would need to be true for k > 1

**Agent 2 — Content Loop Evaluator**
A content loop exists when users generate content that attracts new users, who generate more content.

Content loop examples:
- YouTube: creators upload → viewers discover → some become creators
- Yelp: reviewers write → searchers find → some become reviewers
- Reddit: posters share → readers engage → some become posters
- Product Hunt: makers launch → hunters discover → some become makers

Questions to assess fit:
- Does using the product generate content or data that's valuable to non-users?
- Can that content be indexed by search engines or discovered on social platforms?
- Is there a "creator" user type that produces content consumed by a "consumer" type?
- What's the incentive for users to create content? (recognition, SEO benefit, social proof)

Returns: Content loop fit score (1–5) + whether a content creation mechanic exists + specific design + SEO/discovery opportunity + what type of content users already create that could be amplified

**Agent 3 — Product Loop Evaluator**
A product loop exists when usage of the product generates data or network effects that improve the product, attracting more users.

Product loop examples:
- Waze: drivers report traffic → map improves → attracts more drivers → more data
- Spotify: listeners create playlists → algorithm improves → attracts more listeners
- Duolingo: learners practice → AI improves → better app → more learners
- Notion: users create templates → template gallery grows → attracts new users

Questions to assess fit:
- Does more usage generate data that improves the product for all users?
- Is there a "community asset" (template gallery, benchmark data, community answers) that grows with usage?
- Do network effects exist — does the product get more valuable as more users join?
- What unique data asset is the product generating that competitors don't have?

Returns: Product loop fit score (1–5) + whether data/network effects exist + specific design + the unique data asset being generated + competitive moat this creates over time

**Agent 4 — Sales Loop Evaluator**
A sales loop exists when revenue from customers is reinvested into acquisition in a way that generates more revenue than it costs — the loop funds itself.

Sales loop examples:
- HubSpot: content → leads → revenue → more content team → more leads
- Salesforce: revenue → enterprise sales team → bigger contracts → more revenue
- Any SaaS with < 12 month payback period: CAC paid back → reinvest in acquisition → more customers

Questions to assess fit:
- What is the current (estimated) customer acquisition cost?
- What is the estimated LTV / payback period?
- If payback period is < 12 months, is there budget to reinvest in the loop?
- What acquisition channel has the best CAC and is most scalable?

Returns: Sales loop fit score (1–5) + estimated CAC/LTV ratio + whether payback period supports a self-funding loop + specific channel to invest in + when this loop makes sense (usually post-PMF, not pre-PMF)

**Wait for all 4 agents. Orchestrator selects and designs.**

---

## Synthesis (Orchestrator Only)

**1. Rank loops by fit score.** The highest-scoring loop gets the full design treatment.

**2. Reality check:** The best loop type is the one that works with the product's natural mechanics — not the one that sounds most exciting. A marketplace forcing a viral loop that doesn't fit will fail. A B2B SaaS forcing a content loop without writers will fail.

**3. Design the primary loop in full detail:**

```
[Input] → [Product Action] → [Output] → [Acquisition Channel] → [New User] → [Input]
```

**4. Write `growth-loop.md`:**

```markdown
# Growth Loop — [Product Name] — [YYYY-MM-DD]

## Primary Loop: [Viral / Content / Product / Sales]

### The Loop
```
[Input] → [Action] → [Output] → [Channel] → [New User joins] → [becomes Input]
```

### Why This Loop, Not the Others
| Loop Type | Fit Score | Reason Not Primary |
|-----------|-----------|-------------------|
| Viral | [X]/5 | [One sentence] |
| Content | [X]/5 | [One sentence] |
| Product | [X]/5 | [One sentence] |
| Sales | [X]/5 | [One sentence] |

### The Design

**Step 1 — [Input]:** [What triggers the loop — a user action, a piece of content, a referral]

**Step 2 — [Product Action]:** [What happens in the product that creates the output]

**Step 3 — [Output]:** [What the loop produces that attracts new users]

**Step 4 — [Channel]:** [How the output reaches potential new users]

**Step 5 — [New User]:** [What the new user does that feeds back into Step 1]

### Implementation Plan

**Week 1:** [The minimum change to create a working version of this loop]
**Week 2–3:** [What makes the loop more efficient]
**Week 4+:** [What scales the loop once it's working]

### The Loop Metric
The single number that tells you the loop is working:
**[Metric]** — Target: [X]. Current: [Y].

A loop is working when this metric is positive and improving cycle-over-cycle.

### What Could Break It
[The one assumption in this loop that must be true for it to work — and how to test it]
```

---

## Sequential Fallback (Codex)

Evaluate each loop type sequentially:
1. Viral loop → fit score + design notes
2. Content loop → fit score + design notes
3. Product loop → fit score + design notes
4. Sales loop → fit score + design notes
5. Select highest fit → full design → write `growth-loop.md`

---

## Related Skills

- Use **pmf-signal-reader** before this — word-of-mouth signal points to viral or content loops; engagement depth points to product loops
- Use **north-star-definer** — the loop metric should align with the north star
- Use **retention-loop-designer** alongside — retention and growth loops reinforce each other
- Use **founder-partner** to decide when to focus on growth vs. when to keep compounding on product quality
