---
name: integration-picker
description: Recommends the specific third-party services to use for auth, payments, email, storage, and other common needs. Use when building a feature that requires an external service and you're unsure which tool to use or how to set it up. Produces an integrations-plan.md with specific tool choices and the order to add them.
phase: build
version: 1.0.0
---

# Integration Picker

## Quick Start

## Human-First Response

Default: answer in chat first with **Verdict**, **Do this now**, and **Details saved**.
Keep chat under 150 words unless asked; do not paste the full artifact.
Write/update the requested `.md` file as the durable record for agents.

Say: **"Help me pick my integrations"** or **"Which [payment/auth/email] tool should I use?"**

Describe what your product needs to do. Total time: 10 minutes.
Output: `integrations-plan.md` — specific tool for each integration category, setup priority, and what NOT to add yet.

## What You'll Get

An `integrations-plan.md` naming the tool for each category you need, with the reason for the choice, a one-line setup description, cost at your expected scale, and an explicit "add only when" condition for anything you don't need yet.

> **Example output excerpt:**
> **Auth: Supabase Auth**
> Reason: You're already using Supabase — auth is built in. Don't add Clerk unless you need SSO or organization management later.
> Setup: Enable Email provider in Supabase dashboard, add the auth helpers to Next.js. 30 minutes with your agent.
> Cost: Free.
> Upgrade when: You need Google/GitHub social login (supported), SAML SSO (needs Clerk), or multi-org management.

## The Expert Judgment Embedded

This skill applies **Integration Cost Analysis** — the idea that every third-party integration is a liability as much as an asset. Each tool adds: a monthly cost, a learning curve, a failure point, a vendor dependency, and often a webhook to maintain. The right integration decision minimizes the number of external dependencies while solving the real need.

The cardinal rule: **don't add an integration because it might be useful**. Add it because you have a specific feature that requires it, right now, and the cost of not having it is user friction or lost revenue.

For the full catalog of integration options by category, see [integrations-catalog.md](integrations-catalog.md).

## The Process

### Step 1: Identify Categories Needed

The agent asks what your product needs to do, then maps those needs to integration categories:

| Need | Category |
|------|----------|
| Users log in and have accounts | **Auth** |
| Users pay you money | **Payments** |
| You send emails to users | **Transactional Email** |
| Users send emails through your product | **Email Sending API** |
| Store files, images, documents | **File Storage** |
| Get notified when users do something | **Webhooks / Events** |
| Schedule tasks (daily reports, reminders) | **Background Jobs / Cron** |
| Track what users do | **Analytics** |
| Allow users to connect other apps | **OAuth / Third-Party APIs** |

### Step 2: One Recommendation Per Category

For each category your product needs, the agent gives one specific tool — not a comparison, not a list. The recommendation is based on:
- Your tech stack (from `stack-decision.md` if available)
- Your timeline (fast to set up vs. fully featured)
- Your expected scale in the first 90 days
- Free tier generosity (you're pre-revenue or early revenue)

### Step 3: Setup Priority

Integrations are sequenced by when you'll need them during the build:

**Week 1 (before any code):**
- Auth (users can't do anything without this)
- Database (already covered in stack)

**Week 1-2 (when building core features):**
- File storage (if your core feature involves files)
- Transactional email (for auth confirmation, at minimum)

**Week 2-3 (before launch):**
- Payments (if you're charging on launch)
- Analytics (set up before you have users, so you have baseline data)

**Post-launch (when the need emerges):**
- Background jobs (when you have a specific async task)
- OAuth connections (when users ask for a specific integration)

### Step 4: Output

`integrations-plan.md` — all chosen tools, with rationale, setup cost (time), monetary cost, and a "don't add until" condition for anything deferred.

## Worked Example

**Founder:** Building an agency client portal (Next.js + Supabase). Needs: client logins, file sharing, comment approvals, monthly billing.

**Output:**
> **Integrations Plan — Agency Client Portal**
>
> **Auth: Supabase Auth** ✅ Already chosen with stack
> Setup: Enable email + Google provider in Supabase dashboard. 30 min.
> Cost: Free to 50,000 MAU.
>
> **Payments: Stripe + Stripe Billing**
> You're charging monthly subscriptions, so Stripe Billing handles recurring charges, invoices, and failed payment retries automatically.
> Setup: Create Stripe account, add Stripe Billing product, implement Stripe Checkout for subscription sign-up. Agent can scaffold this in 2 hours.
> Cost: 2.9% + $0.30 per transaction. No monthly fee.
> ⚠️ Don't add: Stripe Connect (for marketplace splits) — you don't have two-sided payments.
>
> **File Storage: Supabase Storage** ✅ Already in your stack
> Clients upload briefs; you upload deliverables. Supabase Storage with row-level security ensures clients only see their own files.
> Setup: Create a storage bucket in Supabase, configure access policies. 1 hour.
> Cost: Free to 1GB, then $0.021/GB.
>
> **Transactional Email: Resend**
> You need: client invite emails, approval notifications, monthly invoice delivery.
> Setup: Create Resend account, add API key to environment variables, create email templates with React Email. 1 hour.
> Cost: Free to 3,000 emails/month.
>
> **Analytics: PostHog**
> You need to know: which clients log in, which projects get viewed, where in the approval flow users drop off.
> Setup: Add PostHog snippet to Next.js layout. 15 minutes. Start capturing before launch.
> Cost: Free to 1M events/month.
>
> **Don't add yet:**
> - Slack integration (add when 3+ clients request it)
> - Zapier/Make webhooks (add when a specific automation need emerges)
> - Customer support chat (add when support volume justifies it)

## Related Skills

- Use **stack-selector** before this — the stack choice constrains integration options
- Use **feature-sequencer** before this — know what you're building before choosing integrations
- Use **architecture-explainer** after this — explains how all the pieces fit together
