---
name: design-direction-setter
description: Establishes the visual tone, typography, color, and feel of your product before a line of UI is written. Use when you're about to build your UI and need a clear aesthetic direction, or when your product looks generic and you can't articulate why. Produces a design-brief.md with specific font, color, and visual direction choices your agent can implement immediately.
phase: design
version: 1.0.0
---

# Design Direction Setter

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Set my design direction"** or **"What should my product look and feel like?"**

You'll answer 5 questions. Total time: 10 minutes.
Output: `design-brief.md` — specific typography, color palette, visual tone, and 3 reference products your agent can use to implement the UI.

## What You'll Get

A `design-brief.md` with: the emotional tone your product should communicate, specific font family names (heading + body pair), a 5-color palette with hex codes, 3 real-world design references your agent can draw from, and 3 visual patterns to avoid.

> **Example output excerpt:**
> **Tone:** Calm authority. Like a doctor who's also a friend — competent but approachable. Not clinical, not playful.
> **Heading font:** DM Serif Display — warmth and confidence without formality
> **Body font:** Inter — neutral, highly readable, won't compete with content
> **Palette:** #1B4332 (deep forest, primary), #D8F3DC (soft mint, background), #B7E4C7 (accent), #1C1C1E (text), #FFFFFF (surface)
> **References:** (1) Levels Health — data-forward but human, (2) Notion — structured calm, (3) Linear — precision without coldness
> **Avoid:** Purple gradients, generic sans-serif pairings, dashboard-heavy layouts that feel like enterprise software

## The Expert Judgment Embedded

This skill applies **Brand Personality Theory** (Jennifer Aaker's five brand dimensions) combined with the principle of **emotional fit** — the idea that the visual design of a product should make users feel the way they want to feel when the problem is solved, not just describe what the product does.

Most non-technical founders either pick fonts and colors at random, or choose the most "professional" options (which always means Inter + blue). Both produce forgettable products. Great design starts with a clear emotional intention and works backward to typography and color.

The key decision: pick one of five tonal directions and commit. Trying to be all five produces products that feel like nothing.

## The Process

### Step 1: The Emotional Destination

The agent asks: "When a user finishes a key task in your product, how do you want them to feel? Choose one primary emotion."

The five most useful options for product design:
- **Calm & in control** → muted palettes, generous whitespace, serif or neutral sans-serif
- **Energized & motivated** → bold colors, strong typography, dynamic layouts
- **Trusted & reassured** → conservative palettes, established font families, clean hierarchy
- **Delighted & playful** → saturated accents, rounded corners, friendly typefaces
- **Focused & precise** → dark mode friendly, monospace accents, information density

### Step 2: The User's Context

The agent asks: "Where and when will users use this product — at their desk focused, on their phone briefly, in a stressful moment, or during a reflective pause?"

Context determines density, font size, and mobile vs. desktop priority.

### Step 3: Reference Products

The agent asks: "Name 3 products you personally find well-designed — not necessarily in your category."

These become the reference palette. The agent extracts what those products have in common (not copies them) and applies it to your direction.

### Step 4: Typography Selection

Based on tone and context, the agent recommends a specific **heading + body font pair** from Google Fonts or system fonts. Both are named explicitly — no "choose a professional font" vagueness.

**Pairing logic:**
- High contrast pair (display + neutral): for products where content is the hero
- Harmonious pair (same family at different weights): for data-heavy or functional products
- Personality-forward pair (distinctive display + workhorse body): for consumer products

### Step 5: Color Palette

The agent produces a 5-color palette with hex codes:
1. **Primary** — brand color, used for key actions and highlights
2. **Background** — the dominant surface color (often off-white or very light tint of primary)
3. **Accent** — a lighter version of primary for secondary elements
4. **Text** — near-black (rarely pure #000000)
5. **Surface** — card/modal background (usually white)

### Step 6: Output

`design-brief.md` — everything an agent needs to implement consistent UI without you making micro-decisions on every screen.

## Worked Example

**Founder:** Building a financial tracking tool for freelancers.

**Output:**
> **Design Brief — Freelancer Finance Tracker**
>
> **Emotional destination:** Calm + in control. When a freelancer checks their numbers, they should feel like a competent professional, not like they're doing homework they've been avoiding.
>
> **User context:** Primarily desktop, focused mode, used weekly during admin time. Not a crisis tool — a planning tool.
>
> **Tone:** Sophisticated simplicity. Think: a well-organized financial advisor's desk. Nothing flashy. Everything has a place.
>
> **Typography:**
> - Headings: **Playfair Display** — adds gravitas without feeling stuffy
> - Body: **Inter** (400 + 500 weight) — maximum readability, never competes
>
> **Color Palette:**
> | Role | Name | Hex |
> |------|------|-----|
> | Primary | Deep Slate | #1E293B |
> | Background | Warm White | #FAFAF8 |
> | Accent | Sage | #6EE7B7 |
> | Text | Near-Black | #0F172A |
> | Surface | Pure White | #FFFFFF |
>
> **Design references:**
> 1. **Mercury** (newsletter platform) — calm editorial typography
> 2. **Framer** — sophisticated dark/light balance without coldness
> 3. **Bench** (accounting) — financial data made human
>
> **Explicitly avoid:**
> - Bright blue (#2196F3 "corporate blue") — looks like every SaaS tool from 2015
> - Chart overload on the dashboard — data density triggers anxiety, not control
> - Rounded-corner cards stacked on gray backgrounds — overused, zero personality

## Related Skills

- Use **ux-flow-designer** before this — map flows before setting visual direction
- Use **ux-heuristics-reviewer** after building — check your implemented design against UX principles
- Use **landing-page-copywriter** (Launch phase) — this brief feeds your landing page's visual tone
