---
name: architecture-explainer
description: Explains your product's technical architecture in plain English — so you understand what's being built, can make informed decisions, and can describe it to others. Use when an agent has set up your tech stack and you're not sure how the pieces connect, or when you need to explain your system to a potential co-founder, investor, or hire. Produces an architecture-overview.md in plain language with a simple diagram.
phase: build
version: 1.0.0
---

# Architecture Explainer

## Quick Start

## Human-First Response

Default: answer in chat first with **Bottom line**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Explain my architecture"** or **"Help me understand how this is built"**

Describe your stack or share your `stack-decision.md`. Total time: 10 minutes.
Output: `architecture-overview.md` — a plain-English explanation of how your system works, with a simple diagram and a glossary.

## What You'll Get

An `architecture-overview.md` with: a plain-English paragraph explaining how the system works, a simple flow diagram (text-based), what each component does in one sentence, what breaks if each component goes down, and a glossary of technical terms you'll hear repeatedly.

> **Example output excerpt:**
> **How it works in plain English:**
> When a user opens your app, their browser talks to Vercel, which runs your Next.js code. That code talks to Supabase to check if the user is logged in and fetch their data. Supabase stores all your data in a Postgres database — rows and columns, like a spreadsheet. When a user uploads a file, it goes to Supabase Storage (separate from the database). When someone pays, Stripe processes the transaction and tells your app "payment succeeded" via a webhook — a notification Stripe sends to your server.
> **The short version:** Browser → Vercel → Supabase (data + auth) + Stripe (payments). That's it.

## The Expert Judgment Embedded

This skill applies the **System Mental Model** approach — the idea that non-technical founders need to understand their architecture at the conceptual level, not the implementation level. You don't need to know how a database B-tree index works. You need to know that your database is where all your data lives, what happens if it goes down, and roughly how it connects to the rest of your system.

Understanding your architecture at this level lets you: make informed decisions when the agent asks what to do, evaluate trade-offs without needing to understand the code, onboard a technical hire faster, and describe your system credibly to investors or partners.

## The Process

### Step 1: Inventory Components

The agent asks you to share your stack (from `stack-decision.md` or by describing it). It maps every component into four categories:

| Category | What It Means | Example |
|----------|--------------|---------|
| **Frontend** | What the user sees in their browser | Next.js, your React components |
| **Backend** | The logic that runs on a server | Next.js API routes, Supabase Edge Functions |
| **Data** | Where information is stored | Supabase Postgres (database), Supabase Storage (files) |
| **Services** | Third-party tools your app relies on | Stripe (payments), Resend (email), PostHog (analytics) |

### Step 2: The Request Flow

The agent traces a "request" — what happens when a user does something — through your system:

1. User does X in the browser
2. Browser sends a request to Y
3. Y checks/stores data in Z
4. Response comes back to the browser
5. User sees the result

This is described in plain English, not code.

### Step 3: Failure Points

For each component, the agent explains what breaks if it goes down:
- "If Supabase goes down: users can't log in, no data loads, app is effectively down"
- "If Stripe goes down: existing users can use the app normally, but new signups can't pay"
- "If Vercel goes down: the app is completely inaccessible"

This gives you a realistic picture of dependencies and risk.

### Step 4: Glossary

Every technical term you'll encounter repeatedly is defined in one plain-English sentence. No jargon in the definition.

### Step 5: Output

`architecture-overview.md` — the plain-English explanation, ASCII flow diagram, component summary, failure analysis, and glossary. Save this. Update it when the stack changes.

## Worked Example

**Founder:** Has a Next.js + Supabase + Stripe + Resend stack for an agency client portal.

**Output:**
> **Architecture Overview — Agency Client Portal**
>
> **How it works (plain English):**
> Your product has four main pieces. Your **app** (Next.js on Vercel) is what users see — it's a website that runs both your marketing pages and the logged-in product. Your **database** (Supabase) is where everything is stored: user accounts, projects, files, comments. **Stripe** handles all money movement — when an agency signs up and pays, Stripe processes the card and tells your app "this person is now a paying customer." **Resend** sends emails — invites to clients, notifications when something needs approval.
>
> **How a request flows:**
> ```
> User's Browser
>       ↓ (opens the app)
>   Vercel (serves Next.js)
>       ↓ (needs user data)
>   Supabase (checks auth + fetches data)
>       ↓ (data returned)
>   Browser displays the project dashboard
>
> When a user uploads a file:
>   Browser → Vercel → Supabase Storage → File saved → URL returned → Browser shows preview
>
> When an agency pays:
>   Browser → Stripe Checkout (Stripe's page, not yours) → Payment processed
>   → Stripe sends webhook to Vercel → Your app marks the account as paid → Resend sends receipt
> ```
>
> **If each piece goes down:**
> | Component | What breaks |
> |-----------|-------------|
> | Vercel | Entire app inaccessible |
> | Supabase | Login fails, no data loads |
> | Stripe | Can't accept new payments (existing users unaffected) |
> | Resend | No emails sent (app still works) |
>
> **Glossary:**
> - **Webhook:** A notification Stripe (or any service) sends to your server when something happens — like a text message between servers
> - **API route:** A URL in your app that doesn't show a page — it does something (saves data, sends an email) and returns a response
> - **Row-level security:** A Supabase feature that makes the database enforce "User A can only see their own data" — your code doesn't have to check this manually
> - **Edge Function:** Code that runs on Supabase's servers (not your user's browser) — used for things that need to be kept secret or run server-side

## Related Skills

- Use **stack-selector** before this — the stack decision feeds into the architecture explanation
- Use **integration-picker** before this — integrations are the "services" layer of the architecture
- Use **co-founder** when making architectural changes — the partner tracks how the system evolves over time
