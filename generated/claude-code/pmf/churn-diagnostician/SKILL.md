---
name: churn-diagnostician
description: Diagnoses why users are leaving by translating timing, behavior, and feedback into one root-cause call. Use when churn is rising or retention feels mysterious. Produces churn-diagnosis.md.
---

# churn-diagnostician

## When to invoke
- Diagnose my churn
- Why are users leaving?

## Outputs
- churn-diagnosis.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- pmf-assessment.md
- support-insights.md
- founder-context.md

## Feeds into
- retention-loop.md
- experiment-plan.md

## Quality checks
- specific_recommendation
- root_cause_named
- next_step_present

## Prompt
# Churn Diagnostician

Read first:
- `pmf-assessment.md`
- `support-insights.md`
- `founder-context.md`
- recent review or usage notes if they exist

Produce `churn-diagnosis.md` with:
1. The primary churn root cause
2. Evidence from timing, behavior, and user feedback
3. The magic moment users are failing to reach or sustain
4. The experiment most likely to reduce churn fastest
5. What the founder should stop assuming about churn
6. The next skill or sequence to run after the experiment

Rules:
- make one main diagnosis even when evidence is imperfect
- translate polite user feedback into the underlying truth
- prefer behavioral explanations over survey clichés
