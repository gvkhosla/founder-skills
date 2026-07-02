---
name: ux-flow-designer
description: Maps your product's user journeys and identifies the key screens to build. Use when you're about to start building but haven't mapped how users will actually move through the product, or when flows feel unclear. Produces a user-flows.md with step-by-step journeys for your 2–3 most important user paths.
phase: design
version: 1.0.0
---

# UX Flow Designer

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Map my user flows"** or **"Help me design the user journey"**

You'll describe your product and key actions. Total time: 15 minutes.
Output: `user-flows.md` — step-by-step journeys for your 2–3 critical paths, plus a list of screens to build.

## What You'll Get

A `user-flows.md` containing: your 2–3 most critical user flows written step by step, the emotion the user should feel at each step, the screens implied by those flows, and the "happy path" clearly distinguished from edge cases.

> **Example output excerpt:**
> **Flow 1 — New User Booking a Session (Happy Path)**
> 1. User receives a booking link via email [feels: invited, slightly uncertain]
> 2. Opens link → lands on therapist's booking page [feels: reassured — looks professional]
> 3. Sees available times in their timezone [feels: oriented]
> 4. Selects a time → enters name + email [feels: committed]
> 5. Receives confirmation email with calendar invite [feels: done, confident]
> **Screens needed:** Booking page, confirmation page. Email templates: booking link, confirmation.
> **Edge cases to handle (not MVP):** Reschedule, cancellation, timezone mismatch warning.

## The Expert Judgment Embedded

This skill applies **Task Flow Analysis** combined with **Emotional Journey Mapping** — a technique from service design that maps not just steps but how the user feels at each one. Most founders design screens without mapping flows first, which produces disconnected screens that technically work but feel broken to use.

The key insight: every screen exists to move the user from one emotional state to another. A booking confirmation screen isn't just data delivery — it's the moment a user goes from "uncertain" to "done and confident." Designing for emotion produces better products than designing for function alone.

The flow also forces the **fewest screens possible** heuristic: every screen is a potential exit point. The best flows use the minimum screens required to complete the job.

## The Process

### Step 1: Identify Critical Paths

The agent asks: "What are the 2–3 things a user MUST be able to do for your product to deliver its core value?"

These become the flows to design. Everything else is secondary.

**Examples:**
- For a booking tool: (1) First-time user books a session, (2) Returning user reschedules
- For a waste tracker: (1) Manager logs today's waste, (2) Manager views weekly summary
- For a client portal: (1) Client views project status, (2) Client approves a deliverable

### Step 2: Walk Each Flow Step by Step

For each critical path, the agent walks through the flow as a narration — not as a screen wireframe, but as a sequence of **what the user does, what they see, and how they feel**.

Format: `[Action] → [What they see] → [Emotion]`

This produces a flow that's implementation-ready without being over-specified.

### Step 3: Extract the Screen List

From the flows, the agent extracts every distinct screen needed. Duplicate screens across flows are noted as shared.

Each screen gets: a name, one-line purpose, and the key element it must contain.

### Step 4: Separate Happy Path from Edge Cases

The agent explicitly labels:
- **Happy path:** The ideal sequence — design and build this completely first
- **Edge cases:** What happens when things go wrong — documented but not built in MVP unless critical

### Step 5: Output

`user-flows.md` with all flows, the screen list, and a recommended build order (start with the first-time user happy path; everything else can wait).

## Worked Example

**Founder:** Building a tool for yoga instructors to manage class bookings.

**Output (excerpt):**
> **Critical Path 1 — Student Books a Drop-In Class**
> 1. Instructor shares booking link → student opens it [feels: curious]
> 2. Student sees upcoming classes with time, style, spots left [feels: oriented]
> 3. Student taps "Book" on a class → enters name + email [feels: committing]
> 4. Student sees confirmation + "Add to calendar" button [feels: done ✓]
> 5. Student receives confirmation email with class details [feels: reassured]
>
> **Critical Path 2 — Instructor Views Today's Roster**
> 1. Instructor logs in → sees today's classes [feels: in control]
> 2. Taps a class → sees who's booked + contact info [feels: prepared]
>
> **Screens Needed:**
> | Screen | Purpose | Must Have |
> |--------|---------|-----------|
> | Public booking page | Student sees and books classes | Class list, spots remaining, Book button |
> | Booking confirmation | Student feels done | Time, location, calendar link |
> | Instructor dashboard | Overview of today + upcoming | Class list with student counts |
> | Class roster | Who's coming to a specific class | Student names, emails |
>
> **Build order:** Public booking page → Confirmation page → Instructor dashboard → Class roster
>
> **Edge cases (post-MVP):** Waitlist, cancellations, recurring bookings, payment collection.

## Related Skills

- Use **customer-hypothesis** before this — the customer profile informs which flows matter most
- Use **mvp-scoper** before this — the MVP brief defines which flows are in scope
- Use **design-direction-setter** after this — once flows are mapped, set the visual direction
- Use **ux-heuristics-reviewer** after building — to check your implemented screens against principles
