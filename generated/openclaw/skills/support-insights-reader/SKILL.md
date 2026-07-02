---
name: support-insights-reader
description: Turns support conversations and tickets into product and retention insights. Use when support volume is growing or repeating patterns are hard to see. Produces support-insights.md.
---

# support-insights-reader

Use this when the user clearly wants the support-insights-reader workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Read our support insights
- What are support tickets telling us?

## Expected outputs
- support-insights.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Feeds into
- onboarding-friction.md
- retention-loop.md

## Quality checks
- themes_present
- recommendations_present

## Workflow
# Support Insights Reader

Produce `support-insights.md` with:
1. Top ticket themes
2. Most repeated user confusion points
3. Signals of onboarding friction
4. Signals of churn or disappointment
5. Product or support fixes to prioritize next

Rules:
- cluster by repeated patterns, not isolated anecdotes
- separate severity from frequency
- make recommendations actionable within a week
