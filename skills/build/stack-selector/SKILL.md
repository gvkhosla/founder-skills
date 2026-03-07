---
name: stack-selector
description: Recommends the right technology stack for your product, branching by product type (consumer mobile, B2B SaaS, internal tool, API/developer tool, marketplace, AI-native). Use before starting to build, when you're unsure what tools to use, or when an agent has suggested a stack that feels overwhelming. Produces a stack-decision.md with specific tool recommendations and setup order.
phase: build
version: 2.0.0
---

# Stack Selector

## Quick Start

Say: **"Help me choose my tech stack"** or **"What tools should I build with?"**

You'll answer 4 questions. Total time: 10 minutes.
Output: `stack-decision.md` — specific tools named, with rationale and setup order.

## What You'll Get

A `stack-decision.md` naming every layer of your stack (frontend, backend, database, auth, hosting, payments if needed), why each was chosen, what to set up first, and what you should explicitly refuse to add until you have 100 users.

> **Example output excerpt:**
> **Your Stack — B2B SaaS with user accounts and payments:**
> Frontend: Next.js (React) — one framework handles both marketing site and app
> Database: Supabase — Postgres + auth + file storage in one dashboard, free tier generous
> Auth: Supabase Auth (built in) — don't add Clerk until you need SSO or teams
> Payments: Stripe — the only choice for a first product. Set up Checkout, not a custom form.
> Hosting: Vercel — deploys automatically on every git push, zero config
> **Setup order:** Vercel → Supabase → Next.js → Stripe (add when you're ready to charge)

---

## The Expert Judgment Embedded

This skill applies the **Boring Technology** principle (Dan McKinley) combined with **Time-to-First-User** optimization. The right stack for a non-technical founder using a coding agent is not the most powerful, the most scalable, or the most popular among engineers — it's the one that lets you get a working product in front of real users fastest, with the least operational complexity.

Every tool in your stack has a learning curve, a failure mode, and a maintenance burden. The goal is minimum viable stack: the fewest tools that give you everything you need to launch, with room to swap components later.

The most common mistake: building for imagined scale. Founders choose Kubernetes, microservices, and Redis caches before they have 10 users. This skill prevents that.

For the full stack reference catalog, see [stacks-reference.md](stacks-reference.md).

---

## The Process

### Step 1: Product Type Classification

The agent classifies your product into one of six types. Each type has a default stack — the branching decision tree that determines everything downstream.

| Type | Description | Default Stack |
|------|-------------|---------------|
| **Consumer mobile app** | End-user mobile app (iOS/Android), social, fitness, consumer utility | React Native + Expo + Supabase + Railway |
| **B2B SaaS web app** | Users log in, have data, pay a subscription, use the product repeatedly | Next.js + Supabase + Vercel + Stripe |
| **Internal tool** | Data entry + display for a single organization, no external users paying | Next.js + Supabase + Vercel |
| **API / developer tool** | Developers integrate your service via API, CLI, or SDK | Node.js or Python + Railway + Postgres + Stripe |
| **Marketplace** | Two-sided platform (buyers + sellers, hosts + guests, clients + freelancers) | Next.js + Supabase + Vercel + Stripe Connect |
| **AI-native product** | AI is the core value — chat, generation, analysis, agents | Next.js + Vercel AI SDK + Supabase + Vercel |

If the product doesn't fit cleanly, pick the closest type. Do not invent a hybrid stack.

### Step 2: Four Clarifying Questions

1. **Payments:** Will users pay you directly, or is this free for now?
2. **Data complexity:** Is your data mostly rows of records, or does it involve files, media, or real-time updates?
3. **Users:** Single user type or multiple (admin + customer, host + guest)?
4. **Timeline:** Are you building to validate (ship in 2 weeks) or building to scale (3+ months)?

Answers can upgrade or simplify the baseline recommendation. For example: if a B2B SaaS has no payments yet, drop Stripe from setup order. If an internal tool needs file uploads, highlight Supabase Storage.

### Step 3: Layer-by-Layer Recommendation

Each stack layer is named explicitly:

| Layer | Recommended Tool | When to Upgrade |
|-------|-----------------|-----------------|
| **Frontend framework** | Next.js 14+ (App Router) — or React Native + Expo for mobile | Never — scales to millions |
| **Database** | Supabase (Postgres) | Switch to PlanetScale or Neon only at 10M+ rows |
| **Auth** | Supabase Auth | Upgrade to Clerk when you need SSO, SAML, or org management |
| **Payments** | Stripe Checkout | Add Stripe Billing (subscriptions) when you have recurring revenue |
| **Email (transactional)** | Resend | Switch to Postmark only if deliverability issues arise |
| **File storage** | Supabase Storage | Switch to Cloudflare R2 at high volume |
| **Hosting (web)** | Vercel | Switch to Railway when you need custom server logic or background jobs |
| **Hosting (API/mobile backend)** | Railway | Switch to Render or Fly.io only if Railway pricing becomes an issue |
| **AI integration** | Vercel AI SDK | Switch to LangChain only if you need complex agent orchestration |
| **Analytics** | PostHog (free tier) | Only add Amplitude or Mixpanel after PMF |

### Step 4: What You Will NOT Need Until 100 Users

This is the explicit "refuse list." When the founder or the coding agent suggests any of these, say no and point to this list.

Do not add until you have 100 real users and a specific problem that demands it:

- **Redis** — your database handles your current load; caching is a solution to a problem you don't have
- **Kubernetes** — you are deploying one application, not orchestrating a fleet
- **Microservices** — you have one product; split it into services only when one team can't hold the whole thing
- **Custom CI/CD pipelines** — Vercel and Railway deploy on git push; that is your CI/CD
- **Multiple environments** (dev/staging/prod) — you need one environment: production. Add staging when deploys start breaking things
- **Docker in production** — Railway and Vercel abstract this away; don't manage containers yourself
- **CDN configuration** — Vercel handles this automatically; don't touch Cloudflare or Fastly yet
- **Message queues** (RabbitMQ, SQS, Kafka) — use a simple database-backed job queue or Railway's cron if you need background work
- **Caching layers** — Postgres is fast enough for your first 100 users; add caching when you can prove a query is slow
- **Monitoring beyond basic analytics** — PostHog + Vercel's built-in logs are enough; skip Datadog, Sentry, and PagerDuty until you have paying users who depend on uptime

If something from this list feels necessary, ask: "Do I have 100 users who are experiencing the problem this solves?" If no, skip it.

### Step 5: Output

Write `stack-decision.md` — full stack with rationale, setup order (start with hosting + database, not auth), and the "don't add yet" list.

---

## Worked Example

**Founder:** Building a client portal for boutique agencies. Users log in, see project status, and approve deliverables. Wants to charge $49/month. No technical background.

**Product type classification:** B2B SaaS web app (users log in, have data, pay a subscription).

**Default stack:** Next.js + Supabase + Vercel + Stripe.

**Clarifying questions answered:**
1. Payments: Yes, $49/month subscription.
2. Data: Rows of records (projects, statuses, approvals) + occasional file uploads (deliverables).
3. Users: Two types — agency owner (admin) and client (viewer/approver).
4. Timeline: Validate in 2–3 weeks.

**Layer-by-layer adjustments:** Two user types confirmed but doesn't require Stripe Connect (not a marketplace — agency pays, not the client). File uploads mean Supabase Storage is relevant. Short timeline means setup order matters.

**Output:**
> **Stack Decision — Agency Client Portal**
>
> **Product type:** B2B SaaS web app
>
> **Frontend:** Next.js 14 (App Router)
> One framework covers your marketing site, login flow, and the app itself. Coding agents know it extremely well — you'll get better output than with any other choice.
>
> **Database + Auth:** Supabase
> Postgres database + authentication in one dashboard. You get row-level security (clients only see their own data) without writing custom authorization logic. Free tier handles your first 500 users comfortably.
>
> **File storage:** Supabase Storage
> Clients upload deliverables for approval. Supabase Storage is already in your dashboard — no new service to configure.
>
> **Payments:** Stripe + Stripe Billing
> You're charging recurring subscriptions, so set up Stripe Billing from day one. Use Stripe's hosted Checkout page — don't build a custom payment form.
>
> **Email:** Resend
> Send confirmation emails, invite emails, and notification emails. $0 until 3,000 emails/month.
>
> **Hosting:** Vercel
> Push to GitHub, it's live. Zero configuration. Free tier is more than sufficient for launch.
>
> **Analytics:** PostHog
> Free tier. Track who's logging in and what they're clicking. Nothing else until you have 50+ active users.
>
> **Setup order:**
> 1. Vercel account + GitHub repo connected (20 minutes)
> 2. Supabase project + schema (30 minutes)
> 3. Next.js project with Supabase auth wired up (agent handles this)
> 4. Stripe account + Billing product configured (30 minutes)
> 5. Resend account + first email template (15 minutes)
>
> **Do not add yet:** Redis, background jobs, CDN configuration, multiple environments, Docker, Kubernetes, microservices, custom CI/CD, message queues, caching layers, monitoring beyond PostHog. None of these solve a problem you currently have.

---

## Related Skills

- Use **mvp-scoper** before this — the MVP brief tells you what features the stack must support
- Use **integration-picker** after this — fills in the specific third-party services (payments, storage, email)
- Use **feature-sequencer** after this — now that you know the stack, sequence what to build first
- Use **architecture-explainer** after this — explains the stack decision to yourself and stakeholders
