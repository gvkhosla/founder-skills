---
name: landing-page-copywriter
description: Writes complete landing page copy from headline to final CTA by spawning 5 parallel section agents — Hero, Problem, Solution + Benefits, Social Proof + Objections, and Pricing + Final CTA — then assembles them into a single ready-to-implement document. Grounded in your positioning and customer profile. Produces landing-page-copy.md with every section written and ready to hand to your agent to build.
phase: launch
version: 2.0.0
---

# Landing Page Copywriter

## Quick Start

Say: **"Write my landing page copy"** or **"Help me write my homepage"**

Share your positioning doc or describe your product.
Output: `landing-page-copy.md` — every section of your landing page written, section by section, ready to implement.

---

## What You'll Get

A `landing-page-copy.md` with every section written: hero (headline + subheadline + CTA), problem section, solution + benefits section (3 key benefits), social proof + objection handling, and pricing teaser + final CTA. Each section includes copy and a note on what visual to use alongside it.

> **Example output excerpt:**
> **Hero:**
> Headline: "Less back-and-forth. More therapy."
> Subheadline: "Give your clients a booking link. They pick a time. It's confirmed. No emails, no phone tags, no missed appointments."
> CTA Button: "Get your booking link free" (not "Sign up" — too generic)
> Visual: Short screen recording showing a client booking a session in under 30 seconds

---

## The Expert Judgment Embedded

This skill applies the **PAS Framework** (Problem → Agitation → Solution) combined with **Conversion Copywriting** principles from Joanna Wiebe (Copyhackers). The single biggest landing page mistake is leading with the product and its features. Users don't care about your product — they care about their problem. A great landing page spends more time on the problem than the solution, because resonance with the problem is what makes the solution feel necessary.

The second biggest mistake: a CTA that says "Sign up" or "Get started." These communicate effort. The CTA should communicate value ("Get your free booking link") or outcome ("Start saving 3 hours a week").

---

## Step 1: Context Gathering (Orchestrator)

Before spawning agents, read the source material:

**Auto-read from project files:**
- `positioning.md` — **REQUIRED.** The one-liner, tagline, elevator pitch, and objections are the foundation for every section. **If this file does not exist, abort and tell the founder to run positioning-writer first.**
- `customer-profile.md` — optional. The painful moment, the workaround, the fear. If missing, the agent asks the founder to describe their customer directly.
- `mvp-brief.md` — optional. The 3 core features, the success signal. If missing, the agent asks the founder to list their top 3 features.

Pass all gathered context to all 5 agents.

---

## Step 2: Parallel Section Writing (5 Agents Simultaneously)

**Spawn these 5 agents simultaneously:**

**Agent 1 — Hero Writer**
Context: Positioning one-liner + tagline + customer's painful moment + product description
Task: Write the hero section.
Produce:
- Headline: States the transformation (before → after) or the unique value in 10 words or less. Never the product name.
- Subheadline: The 2-sentence explanation of how. Can be more descriptive than the headline.
- CTA: Value-framed button text (not "Sign up" — communicate outcome or value)
- Visual guidance: What should appear next to/behind the headline
Returns: Hero section (headline + subheadline + CTA + visual note)

**Agent 2 — Problem Section Writer**
Context: Customer profile + painful moment + workaround + customer's own language
Task: Write the problem/agitation section using PAS framework.
Produce:
- Name the frustrating situation in the customer's language — the words they would use, not the founder's
- Make them feel seen. The goal: "This is exactly my problem."
- 2-3 short paragraphs or a bulleted list of specific pain points
- Agitation: make the cost of the status quo concrete (time lost, money wasted, stress created)
Returns: Problem section (2-3 paragraphs + pain points)

**Agent 3 — Solution + Benefits Writer**
Context: MVP features + positioning elevator pitch + customer's desired outcome
Task: Write the solution section — not a feature list, but a description of life after using the product.
Produce:
- 3 benefit blocks: each has a benefit headline (outcome-framed) + 2-sentence description
- Benefit ≠ Feature: "Shareable booking link" is a feature. "Clients book themselves — no back-and-forth" is a benefit.
- Optional "How It Works" sub-section: 3-step process, simple enough that a skeptic believes it
- Each step: icon/number + short headline + one sentence
Returns: Solution section (3 benefit blocks + optional how-it-works steps)

**Agent 4 — Social Proof + Objection Handler**
Context: Positioning objections + customer fears + product stage
Task: Write social proof and objection-handling sections.
Produce:
- Social proof: 2-3 testimonial formats (short pull quote, detailed story quote, or results stat). If no testimonials exist yet: write placeholder copy and note what to replace it with.
- Logos of recognizable users or press mentions (if any)
- FAQ/objection section: 4-6 questions that address the real objections from `positioning.md`
- Questions written in the user's voice ("What if my clients don't want to use another tool?")
Returns: Social proof section + objection-handling FAQ

**Agent 5 — Pricing Teaser + Final CTA**
Context: Pricing info (if available) + positioning one-liner + CTA from Agent 1 (or independent CTA)
Task: Write the pricing teaser and closing CTA section.
Produce:
- Pricing teaser: If free tier or trial exists, mention it prominently. If paid-only, one line on pricing with link to pricing page. If pricing is undecided, write a "launching soon" teaser.
- Final CTA: Repeat the primary CTA with slightly different framing than the hero
- Risk-reduction line: "No credit card required." / "Cancel anytime." / "Setup in 5 minutes."
- Urgency or scarcity line if appropriate (early access, limited beta, founding member pricing)
Returns: Pricing teaser section + final CTA block

**Wait for all 5 agents. The orchestrator assembles.**

---

## Step 3: Assembly (Orchestrator Only)

The orchestrator assembles the five agent outputs in section order into a single document. The sequencing principle: **Hero → Problem → Solution → Social Proof → Pricing/CTA** follows the PAS framework — hook them, agitate the problem, present the solution, prove it works, ask for the action.

**Write `landing-page-copy.md`:**

```markdown
# Landing Page Copy — [Product Name] — [YYYY-MM-DD]

## Hero
**Headline:** [Agent 1 output]
**Subheadline:** [Agent 1 output]
**CTA:** [Agent 1 output]
**Visual:** [Agent 1 output]

## Problem
[Agent 2 output — pain points, agitation, cost of status quo]

## Solution + Benefits
[Agent 3 output — 3 benefit blocks + optional how-it-works]

### Benefit 1 — [Outcome Headline]
[2-sentence description]

### Benefit 2 — [Outcome Headline]
[2-sentence description]

### Benefit 3 — [Outcome Headline]
[2-sentence description]

### How It Works
1. [Step] — [one sentence]
2. [Step] — [one sentence]
3. [Step] — [one sentence]

## Social Proof
[Agent 4 output — testimonials or placeholders]

## Objection Handling (FAQ)
[Agent 4 output — 4-6 Q&A pairs]

## Pricing
[Agent 5 output — pricing teaser]

## Final CTA
[Agent 5 output — CTA + risk reduction line]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, write each section one at a time:

1. Read context files (positioning.md required, customer-profile.md and mvp-brief.md optional)
2. Write Hero section (headline, subheadline, CTA, visual note)
3. Write Problem section (pain points, agitation)
4. Write Solution + Benefits section (3 benefit blocks, how-it-works)
5. Write Social Proof + Objection Handling section (testimonials, FAQ)
6. Write Pricing Teaser + Final CTA section
7. Assemble into `landing-page-copy.md`

Same output. ~5x longer since each section is written sequentially.

---

## Worked Example

**Founder:** Yoga instructor booking tool. Has positioning doc and customer profile.

**Step 1 — Context gathered:** positioning.md found (one-liner: "Booking software for yoga instructors"), customer-profile.md found (painful moment: spending 3-5 hours/week on scheduling logistics). mvp-brief.md found (3 features: shareable booking link, calendar sync, payment collection).

**Step 2 — 5 agents spawn simultaneously.**

**Agent 1 (Hero) returns:**
> **Headline:** "Your students book themselves. You just teach."
> **Subheadline:** Share one link. Students pick their class and time. You get notified. No DMs, no "is Tuesday still open?", no double-bookings.
> **CTA:** "Get your free booking link"
> **Visual:** 15-second screen recording — instructor shares a link in WhatsApp; client taps it, picks a time, sees confirmation.

**Agent 2 (Problem) returns:**
> Running classes is the good part. Everything around it — confirming who's coming, chasing people who dropped out, remembering who paid — that's the part nobody warned you about.
> If you teach 8-10 classes a week, you're spending 3-5 hours on logistics. That's a full extra workday. Every week.
> The solution isn't hiring an assistant. It's removing the coordination entirely.

**Agent 3 (Solution + Benefits) returns:**
> **Benefit 1 — "One link does all the work"**
> Share your booking page anywhere — Instagram bio, WhatsApp, email signature. Students see your schedule, pick a class, and they're confirmed. You don't touch it.
>
> **Benefit 2 — "Your calendar stays honest"**
> Two-way sync with Google Calendar and iCal. When you block personal time, it disappears from your booking page. No more double-bookings.
>
> **Benefit 3 — "Get paid before class starts"**
> Students pay when they book. No more awkward cash exchanges. No more chasing payments after class.
>
> **How It Works:** (1) Create your booking page — 5 minutes. (2) Share the link anywhere. (3) Students book and pay — you just show up and teach.

**Agent 4 (Social Proof + Objections) returns:**
> **Testimonial placeholder:** [Replace with real quote from first 5 users — ask: "What changed about your week after you started using this?"]
>
> **Objection FAQ:**
> Q: My students are older — will they actually use this?
> A: The booking page works like any website and requires no account or app download. Students just tap a time and enter their name. If they can book a restaurant on OpenTable, they can book your class.
>
> Q: What if I need to cancel a class?
> A: Cancel in one tap. Every booked student gets notified automatically. No individual messages needed.

**Agent 5 (Pricing + Final CTA) returns:**
> **Pricing:** Free for your first 20 bookings/month. No credit card required to start.
>
> **Final CTA:** "Start your free booking page" — You're fully set up in under 5 minutes. No credit card. No contracts. Just fewer DMs.

**Step 3 — Orchestrator assembles all 5 sections into `landing-page-copy.md` in order.**

---

## Related Skills

- Use **positioning-writer** before this — the positioning doc is required input and feeds directly into every section
- Use **design-direction-setter** (Design phase) — the design brief ensures the page matches your product's visual tone
- Use **pricing-model-framer** before this — pricing decisions feed into Agent 5's pricing teaser
- Use **launch-plan-builder** after this — the landing page must be live before launch traffic arrives
- Use **build-cycle** (Compound phase) after launch — to assess which copy sections are working
