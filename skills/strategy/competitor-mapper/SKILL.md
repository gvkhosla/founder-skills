---
name: competitor-mapper
description: Maps competitive landscape and finds positioning gap. Spawns 4 parallel agents — direct competitor analyst, indirect competitor analyst, positioning gap finder, and weakness harvester — to research simultaneously, then synthesizes into a unified competitive map. Use after defining your customer and problem, when you need to understand what you're up against and where you can win. Produces competitor-map.md.
phase: strategy
version: 1.0.0
---

# Competitor Mapper

## Quick Start

Say: **"Map my competitors"** or **"Where can I win in this market?"**

Share your product idea, the problem it solves, and who it's for.
Output: `competitor-map.md` — competitor profiles, indirect alternatives, a 2x2 positioning map, weakness analysis, and your recommended positioning gap.

## What You'll Get

A `competitor-map.md` containing: profiles of 3-5 direct competitors, a map of indirect alternatives people use today, a 2x2 positioning map with the empty quadrant where you can win, a weakness analysis of the top 2 competitors sourced from public reviews, and a recommended positioning gap.

> **Example output excerpt:**
> **Direct Competitor #1 — Proposify**
> What they do: Proposal software for agencies and sales teams. Pricing: $49/user/month. Strengths: polished templates, CRM integrations. Weaknesses: bloated for solo users, no design-specific features. Target: mid-size agencies with sales teams. Funding: Series B, 150+ employees.
>
> **Positioning Gap:** The market maps as Enterprise/Complex (top-right) vs. Solo/Simple (bottom-left). Top-left (Solo/Powerful) is empty — a design-first proposal tool for independents that looks as good as agency output but takes 10 minutes, not 10 hours.

---

## Expert Judgment

Competitive analysis is not about beating competitors — it's about finding gaps. The most common founder mistake is looking at the market leader and trying to build a better version of what they already have. That's a losing strategy. The right move is to find the quadrant nobody occupies — the combination of attributes that no existing player serves well — and own it completely. The best competitive positions come not from feature comparison but from serving a different customer, solving the problem differently, or pricing in a way that makes the incumbent's model a disadvantage. This skill is designed to surface that gap, not to produce a feature checklist.

---

## Parallel Execution

### Step 1: Context Gathering (Orchestrator)

Before spawning agents, collect context:

**Auto-read from existing documents (if they exist):**
- `customer-profile.md` — who the target customer is and where they spend time
- `problem-validation-report.md` — the validated problem and existing evidence

**Ask founder directly:**
1. What problem does your product solve?
2. Who are you building for?
3. Name any competitors you already know about.

Pass all this context to all four agents.

---

### Step 2: Parallel Research (4 Agents Simultaneously)

**Spawn these 4 agents simultaneously:**

**Agent 1 — Direct Competitor Analyst**
Context: Problem description + target customer + any competitors the founder named
Task: Profile 3-5 direct competitors — products that solve roughly the same problem for roughly the same customer.
For each competitor, produce:
- What they do (one sentence)
- Pricing model and price point
- Key strengths (2-3)
- Key weaknesses (2-3)
- Target customer (who they're really built for)
- Funding / company size (bootstrapped, seed, Series A+, public; team size if findable)

Returns: 3-5 competitor profiles in a consistent format.

**Agent 2 — Indirect Competitor Analyst**
Context: Problem description + target customer
Task: Map what people currently use instead of a purpose-built solution. These are the real competitors for an early-stage product — the status quo.
Investigate and describe:
- Spreadsheets or docs (Google Sheets, Notion, Excel templates)
- Manual processes (doing it by hand, pen and paper)
- Hiring someone (freelancer, assistant, agency)
- Cobbling together free tools (stitching 3-4 free apps with duct tape)
- Doing nothing (tolerating the pain, not solving it at all)

For each alternative, note: how common it is, why people stick with it, and what finally makes them look for something better.

Returns: Indirect alternatives map with prevalence and switching triggers.

**Agent 3 — Positioning Gap Finder**
Context: Problem description + target customer + competitor profiles from the founder's named competitors
Task: Map the competitive landscape on a 2x2 grid. Choose 2 axes that are meaningful for this specific market (e.g., simplicity vs. power, price vs. features, self-serve vs. managed, individual vs. team, horizontal vs. vertical). Place each direct competitor and major indirect alternative on the grid. Identify the empty quadrant — the combination of attributes that no current player serves well.
Produce:
- The two axes chosen and why they matter for this market
- Where each competitor sits on the grid
- Which quadrant is empty or underserved
- Why that quadrant represents a real opportunity (not just an empty space nobody wants)

Returns: 2x2 positioning map with axis rationale, competitor placement, and the gap.

**Agent 4 — Weakness Harvester**
Context: Top 2 direct competitors (by name) + target customer
Task: Read public reviews and complaints for the top 2 direct competitors. Sources: G2, Reddit, App Store, Capterra, Twitter/X complaints.
For each of the 2 competitors, extract:
- Top 5 complaints or weaknesses mentioned by real users
- Patterns in the complaints (are they about pricing, UX, missing features, support, reliability?)
- Direct quotes where possible
- Which complaints are most relevant to the founder's target customer

Returns: Weakness analysis — top 5 complaints per competitor with patterns and quotes.

**Wait for all 4 agents. The orchestrator synthesizes.**

---

### Step 3: Synthesis (Orchestrator Only)

The orchestrator assembles the four agent outputs into a unified competitive map.

**Write `competitor-map.md`:**

```markdown
# Competitor Map — [Product Name] — [YYYY-MM-DD]

## Direct Competitors

### [Competitor 1 Name]
**What they do:** [one sentence]
**Pricing:** [model + price point]
**Strengths:** [2-3 bullets]
**Weaknesses:** [2-3 bullets]
**Target customer:** [who they're really built for]
**Size:** [funding stage / team size]

### [Competitor 2 Name]
[Same format]

[...3-5 competitors total...]

## Indirect Alternatives (The Real Competition)

| Alternative | How Common | Why People Stick | What Makes Them Switch |
|-------------|-----------|-----------------|----------------------|
| Spreadsheets | [prevalence] | [reason] | [trigger] |
| Manual process | [prevalence] | [reason] | [trigger] |
| Hiring someone | [prevalence] | [reason] | [trigger] |
| Free tool stack | [prevalence] | [reason] | [trigger] |
| Doing nothing | [prevalence] | [reason] | [trigger] |

## 2x2 Positioning Map

**Axis X:** [axis name] — [why it matters]
**Axis Y:** [axis name] — [why it matters]

|  | Low [X] | High [X] |
|---|---------|----------|
| **High [Y]** | [who's here] | [who's here] |
| **Low [Y]** | [who's here] | [who's here / EMPTY] |

**The gap:** [Which quadrant is empty and why it's a real opportunity]

## Weakness Analysis

### [Top Competitor 1]
1. [Complaint] — [pattern] — "[quote if available]"
2. [Complaint] — [pattern] — "[quote if available]"
3. [Complaint] — [pattern]
4. [Complaint] — [pattern]
5. [Complaint] — [pattern]

### [Top Competitor 2]
1. [Complaint] — [pattern] — "[quote if available]"
2. [Complaint] — [pattern] — "[quote if available]"
3. [Complaint] — [pattern]
4. [Complaint] — [pattern]
5. [Complaint] — [pattern]

**Pattern across both:** [What the shared weaknesses reveal about the market]

## Recommended Positioning Gap

**Position yourself as:** [one sentence — the gap in the market stated as a product position]
**Why this works:** [2-3 sentences — connects the empty quadrant, the competitor weaknesses, and the indirect alternatives into a coherent argument for why this gap is real and winnable]
**What to say:** [One-liner the founder can use — "We're the [X] for [Y] who need [Z]"]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, research each area one at a time:

1. Direct competitor profiles (3-5 competitors)
2. Indirect alternatives map
3. 2x2 positioning map
4. Weakness harvesting for top 2 competitors
5. Synthesize into `competitor-map.md`

Same output. ~4x longer.

---

## Worked Example

**Founder:** Building a proposal tool for freelance designers. They've noticed designers spend hours in Canva or InDesign building project proposals that could be templatized.

**Context gathered:**
- Problem: Freelance designers waste 3-5 hours per proposal, cobbling together pricing, scope, and portfolio pieces in design tools not built for proposals.
- Customer: Solo freelance designers earning $50k-$150k/year, doing 2-5 proposals per month.
- Known competitors: Proposify, Better Proposals, HoneyBook.

**4 agents spawn simultaneously.**

**Agent 1 (Direct Competitors) returns:**
> - **Proposify:** Full proposal suite, $49/user/month, strong templates + analytics, but bloated for solo users, built for sales teams. Series B, 150+ employees.
> - **Better Proposals:** Simpler proposal tool, $19/month, clean UI, but generic templates not design-focused, limited portfolio features. Bootstrapped, ~20 employees.
> - **HoneyBook:** Client management + proposals, $39/month, combines contracts + invoicing, but proposals are a secondary feature, not design-quality. Series C, 200+ employees.

**Agent 2 (Indirect Alternatives) returns:**
> - **Canva/InDesign:** Most common. Designers already know the tools, but proposals take 3-5 hours and aren't interactive. They switch when they lose a project because the proposal looked unprofessional or took too long.
> - **Google Docs:** Quick but ugly. Used by designers who hate it. Switch trigger: client feedback that it looked amateur.
> - **Doing nothing:** Some designers skip proposals entirely and just quote a price over email. They switch when they realize they're losing projects to designers who present better.

**Agent 3 (Positioning Gap) returns:**
> Axes: Design Quality (low to high) vs. Simplicity (complex to simple).
> - Proposify: medium design quality, complex. HoneyBook: low design quality, medium complexity. Better Proposals: medium design quality, simple.
> - **Empty quadrant: High design quality + Simple.** No tool produces proposals that look like a designer made them while being fast to assemble. That's the gap.

**Agent 4 (Weakness Harvester) returns:**
> **Proposify top complaints:** (1) "Way too expensive for one person" — pricing, (2) "Templates look corporate, not creative" — design, (3) "Overkill for freelancers" — complexity, (4) "Editor is clunky" — UX, (5) "Can't embed my portfolio work nicely" — missing feature.
> **Better Proposals top complaints:** (1) "Templates all look the same" — design, (2) "Can't customize enough" — flexibility, (3) "Doesn't feel premium to send to clients" — perception, (4) "No native portfolio section" — missing feature, (5) "Pricing tables are rigid" — UX.

**Synthesized output:**
> **Recommended Positioning Gap:** The design-first proposal tool for independent creatives. Proposify and Better Proposals serve sales teams and agencies with generic templates. No one builds for the designer who wants their proposal to be as beautiful as their portfolio — and done in 10 minutes, not 3 hours.
> **What to say:** "We're the proposal tool built for designers who refuse to send ugly docs."

---

## Related Skills

- Use **problem-validator** before this — validates that the problem is real before you map who else solves it
- Use **customer-hypothesis** before this — the customer profile determines which competitors and alternatives matter
- Use **assumption-mapper** after this — your positioning gap is an assumption that needs testing
- Use **positioning-writer** after this — turns the recommended gap into a full positioning statement
