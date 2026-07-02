# Integrations Catalog

Quick-reference for the most common integrations a non-technical founder needs to wire up. Organized by job-to-be-done. Decision rule for every category: **pick the one with the most tutorials for your stack, not the one with the best features.**

---

## Auth / User Management

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Clerk** | React/Next.js products; needs fast setup | Free → $25/mo | ★☆☆ Very easy |
| **Supabase Auth** | If already using Supabase DB | Free | ★☆☆ Very easy |
| **Auth0** | Complex rules, enterprise SSO | Free → $23/mo | ★★☆ Medium |
| **Firebase Auth** | Google ecosystem, mobile | Free | ★☆☆ Very easy |

**Default pick:** Clerk (React) or Supabase Auth (anything with Supabase DB). Roll your own only when you have a security engineer.

---

## Database / Backend

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Supabase** | Full backend (DB + Auth + Storage + Realtime) | Free → $25/mo | ★☆☆ Very easy |
| **PlanetScale** | MySQL at scale, branch-based schema | Free → $29/mo | ★★☆ Medium |
| **Railway** | Any DB on managed infrastructure | $5/mo | ★☆☆ Very easy |
| **Neon** | Serverless Postgres | Free → $19/mo | ★☆☆ Very easy |
| **Firebase / Firestore** | Real-time, document model | Free | ★☆☆ Very easy |

**Default pick:** Supabase for anything starting from scratch. It replaces 4 other tools.

---

## Payments

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Stripe** | SaaS subscriptions, one-time payments | 2.9% + 30¢ | ★★☆ Medium |
| **Lemon Squeezy** | Digital products, software; handles VAT/tax | 5% + 50¢ | ★☆☆ Very easy |
| **Paddle** | Global SaaS; merchant of record | 5% + 50¢ | ★★☆ Medium |
| **Stripe + Polar.sh** | Open source, developer products | 2.9% + 30¢ | ★★☆ Medium |

**Default pick:** Lemon Squeezy if you want zero tax headaches. Stripe if you need maximum flexibility and have a developer.

---

## Email (Transactional)

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Resend** | Developer-friendly, React Email templates | Free → $20/mo | ★☆☆ Very easy |
| **Postmark** | High deliverability, simple | $15/mo | ★☆☆ Very easy |
| **SendGrid** | High volume, marketing + transactional | Free → $19.95/mo | ★★☆ Medium |

**Default pick:** Resend. Best DX for modern stacks, fastest to wire up.

---

## Email Marketing / Waitlist

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Loops** | SaaS + product emails, behavior-based | Free → $49/mo | ★☆☆ Very easy |
| **ConvertKit** | Creator economy, sequences | Free → $9/mo | ★☆☆ Very easy |
| **Beehiiv** | Newsletter-first, growth tools | Free → $42/mo | ★☆☆ Very easy |
| **Mailchimp** | Legacy, avoid for new products | Free → $20/mo | ★★☆ Medium |

**Default pick:** Loops for SaaS. ConvertKit for content/creator products.

---

## Analytics / Behavior Tracking

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **PostHog** | Full product analytics, session replay, feature flags | Free → $0 for <1M events | ★☆☆ Very easy |
| **Mixpanel** | Deep funnel analysis, cohorts | Free → $28/mo | ★★☆ Medium |
| **Plausible** | Privacy-first, GDPR-friendly page analytics | $9/mo | ★☆☆ Very easy |
| **Fathom** | Simple, privacy-first | $14/mo | ★☆☆ Very easy |
| **Amplitude** | Enterprise-grade product analytics | Free → expensive | ★★★ Complex |

**Default pick:** PostHog. Replaces Mixpanel, Hotjar, and LaunchDarkly in one tool. Generous free tier.

---

## Customer Support / Feedback

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Intercom** | In-app chat, tours, support | $74/mo | ★★☆ Medium |
| **Plain** | Modern support, developer-first | $50/mo | ★☆☆ Very easy |
| **Canny** | Feature requests, roadmap voting | Free → $79/mo | ★☆☆ Very easy |
| **Crisp** | Simple live chat + helpdesk | Free → $25/mo | ★☆☆ Very easy |
| **Typeform** | Qualitative surveys | Free → $29/mo | ★☆☆ Very easy |

**Default pick:** Crisp for early-stage (cheap, good enough). Plain or Intercom when you're scaling.

---

## File Storage

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Supabase Storage** | If already using Supabase | Free → included | ★☆☆ Very easy |
| **Cloudflare R2** | Zero egress fees, S3-compatible | $0.015/GB | ★★☆ Medium |
| **AWS S3** | Industry standard, maximum flexibility | $0.023/GB | ★★☆ Medium |
| **Uploadthing** | Next.js-first, dead simple file upload | Free → $10/mo | ★☆☆ Very easy |

**Default pick:** Supabase Storage if on Supabase. Uploadthing for the fastest possible setup.

---

## AI / LLM

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **OpenAI API** | GPT-4o, embeddings, vision | Pay per token | ★★☆ Medium |
| **Anthropic API** | Long-context model API | Pay per token | ★★☆ Medium |
| **Vercel AI SDK** | Unified wrapper for all LLMs in Next.js | Free | ★☆☆ Very easy |
| **Replicate** | Open source models, image generation | Pay per run | ★★☆ Medium |

**Default pick:** Vercel AI SDK if building on Next.js — it abstracts the provider choice.

---

## Deployment / Hosting

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Vercel** | Next.js, React, serverless | Free → $20/mo | ★☆☆ Very easy |
| **Railway** | Full-stack apps, databases, crons | $5/mo | ★☆☆ Very easy |
| **Render** | Web services, background workers | Free → $7/mo | ★☆☆ Very easy |
| **Fly.io** | Docker, global edge deployment | Free → pay as you go | ★★☆ Medium |

**Default pick:** Vercel for frontend/Next.js. Railway for full-stack apps needing background jobs.

---

## Billing / Subscriptions Management

| Tool | Best For | Cost | Complexity |
|------|----------|------|-----------|
| **Stripe Billing** | Direct, maximum flexibility | 0.5% for billing | ★★☆ Medium |
| **Autumn** | Stripe wrapper for complex pricing | Free → $25/mo | ★☆☆ Very easy |
| **Chargebee** | Enterprise subscription management | From $249/mo | ★★★ Complex |

**Default pick:** Stripe Billing directly until it becomes painful. Then Autumn.

---

## Decision Rules

1. **Don't integrate what you haven't validated you need.** No analytics tool until you have users. No support tool until users are complaining. Add integrations in response to evidence, not in anticipation of problems.

2. **Supabase replaces 4 tools.** If you're not using Supabase, ask why before adding individual auth, database, storage, and realtime tools separately.

3. **Free tiers are real.** PostHog, Supabase, Vercel, Loops — all have real free tiers. Don't pay until you're generating revenue.

4. **Complexity has a cost.** Every integration you add is something to maintain, debug, and pay for. The minimum viable integration stack is usually 3–5 tools total.
