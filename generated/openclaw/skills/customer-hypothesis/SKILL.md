---
name: customer-hypothesis
description: Defines the first customer precisely enough to guide product and GTM. Use when the founder is still describing a broad market instead of a specific buyer. Returns customer-profile.md.
---

# customer-hypothesis

Use this when the user clearly wants the customer-hypothesis workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Define my customer
- Who is my first customer?

## Expected outputs
- customer-profile.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Feeds into
- mvp-brief.md
- positioning.md

## Quality checks
- specificity_present
- recommendation_present

## Workflow
# Customer Hypothesis

Produce `customer-profile.md` with:
1. Primary customer
2. Situation, not demographics
3. Existing behavior and workaround
4. Trigger that makes them care now
5. Why they are a better first customer than adjacent segments

Rules:
- choose one sharp starting customer
- optimize for founder focus, not TAM theater
- make the profile usable by product and GTM skills
