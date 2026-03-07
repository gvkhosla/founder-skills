---
name: positioning-writer
description: Crafts your product's positioning by spawning 3 parallel direction agents — Category Creator, Best-in-Class, and Enemy Reframe — each producing a complete one-liner, tagline, and elevator pitch. The orchestrator picks the strongest direction and explains why. Use when your product description isn't landing, when people say "I don't get it," or before writing any marketing copy. Produces positioning.md with your winning direction, one-liner, tagline, elevator pitch, and objection messaging.
phase: launch
version: 2.0.0
---

# Positioning Writer

## Quick Start

Say: **"Write my positioning"** or **"Help me explain what I do"**

Share your product description, customer profile, or MVP brief.
Output: `positioning.md` — the strongest positioning direction out of three, with one-liner, tagline, elevator pitch, and objection messaging.

## What You'll Get

A `positioning.md` containing: the winning positioning direction (out of three explored), a one-liner (what you do in 10 words), a tagline (memorable, emotional, 5-7 words), a 3-sentence elevator pitch, category framing, counter-messaging for the top 3 objections, and the reasoning for why this direction won over the other two.

> **Example output excerpt:**
> **Direction chosen:** Category Creator (over Best-in-Class and Enemy Reframe)
> **One-liner:** The booking tool built for solo therapists who hate admin.
> **Tagline:** "Less back-and-forth. More therapy."
> **Elevator pitch:** Therapists lose hours every week to booking coordination — emails back and forth, no-shows, forgotten confirmations. TherapyBook gives them a simple booking link their clients actually use. Setup takes 5 minutes; the time savings start the same day.

## The Expert Judgment Embedded

This skill applies **April Dunford's Positioning Framework** from *Obviously Awesome* — the most practical framework for startup positioning. Most founders describe their product by features ("we have X, Y, Z") or category ("we're like Calendly for therapists"). Neither is positioning. Positioning answers: why should this specific person choose this over every alternative, including doing nothing?

The critical insight: your positioning isn't just what you say — it's the lens through which users evaluate you. Get it wrong and every feature sounds mediocre. Get it right and even simple features sound valuable.

The v2.0 upgrade explores three distinct positioning directions in parallel. Most founders lock into one framing too early. By generating all three and comparing, the founder sees the full strategic landscape before committing.

For detailed framework reference, see [frameworks.md](frameworks.md).

---

## Parallel Execution

Three positioning directions are completely independent — each can be developed simultaneously. Three agents each produce a full positioning package, then the orchestrator picks the strongest and explains why.

### Step 1: Context Gathering (Orchestrator)

**Auto-read existing documents (if they exist):**
- `customer-profile.md` — who the target customer is
- `problem-validation-report.md` — validated problem and evidence
- `mvp-brief.md` — what the product does and its unique attributes

**Ask the founder directly:**
1. When people decide NOT to use your product, what do they do instead? (Competitive alternatives — not competitors, but what users actually reach for: spreadsheets, manual processes, free tools, doing nothing)
2. What does your product do that those alternatives absolutely cannot? (Unique attributes — must be real and specific. "It's easier" is not positioning; "it requires zero setup" is.)
3. Is there a dominant incumbent in your space? If so, who, and what do people complain about with them?

Compile all context into a brief. Pass the full brief to all three agents.

---

### Step 2: Parallel Direction Agents (3 Agents Simultaneously)

**Spawn these 3 agents simultaneously:**

**Agent 1 — Category Creator**
Context: Full brief from Step 1
Task: Position this product as the founder of a **new category** — a way of solving the problem that didn't exist before.
Process:
1. Identify what makes this product fundamentally different from existing alternatives — not better, but *different in kind*
2. Name the new category (short, clear, instantly graspable — not jargon)
3. Frame the elevator pitch so the listener understands why the old category no longer applies
4. Identify the risk: new categories require market education — is there enough "pull" from the problem to justify it?

Produce:
- Category name and framing
- One-liner (10 words max)
- Tagline (5-7 words, memorable)
- 3-sentence elevator pitch
- Top 3 objection counter-messages
- Confidence note: when this direction works best and when it doesn't

Returns: Complete Category Creator positioning package.

**Agent 2 — Best-in-Class**
Context: Full brief from Step 1
Task: Position this product as the **best option in an existing, understood category** — win by being sharper, faster, or more focused than alternatives.
Process:
1. Identify the existing category buyers already use to evaluate this type of product
2. Find the sub-segment or niche where this product is genuinely the best option (not "best for everyone" — best for a *specific* person)
3. Frame the elevator pitch so the listener immediately understands the category AND why this product wins within it
4. Identify the risk: competing in an existing category means direct comparison — can you survive feature-by-feature scrutiny?

Produce:
- Category and sub-category framing
- One-liner (10 words max)
- Tagline (5-7 words, memorable)
- 3-sentence elevator pitch
- Top 3 objection counter-messages
- Confidence note: when this direction works best and when it doesn't

Returns: Complete Best-in-Class positioning package.

**Agent 3 — Enemy Reframe**
Context: Full brief from Step 1
Task: Position this product **against a dominant incumbent** — make the incumbent's strength look like a weakness.
Process:
1. Identify the dominant player (or dominant approach) that most of the market defaults to
2. Find the incumbent's core strength and reframe it as a liability for the target customer (e.g., "Mindbody is built for studios with staff — that's exactly why it's overkill for you")
3. Frame the elevator pitch as a direct contrast: "They do X, we do Y, and here's why Y matters more for you"
4. Identify the risk: enemy positioning ties your brand to the incumbent — if they change, your positioning breaks

Produce:
- The enemy and the reframe
- One-liner (10 words max)
- Tagline (5-7 words, memorable)
- 3-sentence elevator pitch
- Top 3 objection counter-messages
- Confidence note: when this direction works best and when it doesn't

Returns: Complete Enemy Reframe positioning package.

**Wait for all 3 agents. The orchestrator synthesizes.**

---

### Step 3: Synthesis — Pick the Strongest Direction (Orchestrator Only)

Evaluate all three directions against these criteria:

| Criterion | What to Check |
|-----------|--------------|
| **Clarity** | Can a stranger understand it in 5 seconds? |
| **Differentiation** | Does it make this product impossible to confuse with alternatives? |
| **Believability** | Can the founder back this up today, not after 2 years of growth? |
| **Stage fit** | Is it appropriate for a product at this stage? (New categories are expensive to educate; enemy positioning requires a known enemy) |
| **Emotional pull** | Does it make the target customer feel something — relief, excitement, "finally"? |

Pick the strongest direction. Explain why it won and why the other two lost.

**Write `positioning.md`:**

```markdown
# Positioning — [Product Name] — [YYYY-MM-DD]

## Winning Direction: [Category Creator / Best-in-Class / Enemy Reframe]

**Why this direction:** [2-3 sentences on why this won]
**Why not [Direction 2]:** [1 sentence]
**Why not [Direction 3]:** [1 sentence]

## One-Liner
[10 words max — what you do, for whom]

## Tagline
"[5-7 words — memorable, emotional]"

## Elevator Pitch
[3 sentences — problem, solution, why now/why this]

## Category
[How you want buyers to categorize you — and why]

## Competitive Alternatives
[What people do instead of using your product]

## Unique Attributes
[What you do that alternatives cannot]

## Objection Counter-Messaging

**"[Objection 1]"** → [Counter-message]
**"[Objection 2]"** → [Counter-message]
**"[Objection 3]"** → [Counter-message]

## Runner-Up Directions (For Reference)

### [Direction 2 Name]
**One-liner:** [text]
**Tagline:** "[text]"
**Pitch:** [text]
**Why it lost:** [1-2 sentences]

### [Direction 3 Name]
**One-liner:** [text]
**Tagline:** "[text]"
**Pitch:** [text]
**Why it lost:** [1-2 sentences]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, develop each direction one at a time:

1. Gather context (competitive alternatives, unique attributes, incumbent info)
2. Develop Category Creator positioning package
3. Develop Best-in-Class positioning package
4. Develop Enemy Reframe positioning package
5. Compare all three, pick strongest, write `positioning.md`

Same output. ~3x longer.

---

## Worked Example

**Founder:** Built a booking tool (FitBook) for independent yoga and fitness instructors. Competitive alternatives: Google Calendar + DMs, Mindbody (complex, expensive), generic Calendly. Unique attributes: no monthly subscription (flat pricing), designed for solo instructors (no studio features to navigate), 3-minute setup vs. hours for Mindbody. Dominant incumbent: Mindbody.

**3 agents spawn simultaneously.**

**Agent 1 — Category Creator output:**
> **Category:** "Solo instructor booking" — a new category distinct from studio management software
> **One-liner:** The first booking tool designed exclusively for solo fitness instructors.
> **Tagline:** "Built for one. Just like you."
> **Pitch:** Studio software was built for studios — teams, front desks, multi-location management. Solo instructors don't have any of that, so why are they paying for it? FitBook is the first booking tool built for instructors who work alone: one link, one price, zero complexity.
> **Confidence:** Strong category clarity, but "solo instructor booking" may be too small a category for buyers to search for.

**Agent 2 — Best-in-Class output:**
> **Category:** Booking software for solo fitness instructors (sub-category of scheduling software)
> **One-liner:** The booking tool solo fitness instructors set up in 3 minutes — and never think about again.
> **Tagline:** "Your classes, fully booked."
> **Pitch:** Fitness instructors spend more time managing bookings than teaching. Mindbody is overkill for someone teaching 10 classes a week alone. FitBook is the alternative: set up a booking page in 3 minutes, share one link, and let clients book themselves. No features you don't need. No monthly subscription eating into your revenue.
> **Confidence:** Strong — sub-category positioning is well-understood by buyers and easy to find via search. The "3 minutes" claim is concrete and testable.

**Agent 3 — Enemy Reframe output:**
> **The enemy:** Mindbody. Reframe: Mindbody's power is its weakness — it's built for studios with staff, which means solo instructors pay for complexity they'll never use.
> **One-liner:** Everything Mindbody does for studios, minus everything you don't need.
> **Tagline:** "Mindbody is overkill. This isn't."
> **Pitch:** Mindbody costs $129/month and takes hours to set up because it's built for studios with front desks and multiple locations. If you teach alone, you're paying for someone else's features. FitBook gives you class-based booking with capacity limits, automatic confirmations, and a shareable link — for a flat price, set up in 3 minutes.
> **Confidence:** Punchy and clear, but ties the brand to Mindbody. If Mindbody launches a solo tier, this positioning breaks.

**Orchestrator synthesis:**
> **Winner: Best-in-Class.** The sub-category framing ("booking software for solo fitness instructors") is immediately understood by the buyer, findable via search, and doesn't require market education. The "3 minutes" differentiator is concrete, believable, and testable. Category Creator was strong but "solo instructor booking" is too niche a category name — buyers won't search for it. Enemy Reframe was punchy but chains the brand to Mindbody's decisions.

---

## Related Skills

- Use **customer-hypothesis** before this — positioning flows from a sharp customer profile
- Use **problem-validator** before this — validated problems produce stronger positioning
- Use **mvp-scoper** before this — unique attributes come from knowing exactly what you're building
- Use **landing-page-copywriter** after this — the positioning doc is the input to your landing page
- Use **pricing-model-framer** in parallel — pricing and positioning are two sides of the same decision
- Use **launch-plan-builder** after this — your positioning shapes all channel messaging
