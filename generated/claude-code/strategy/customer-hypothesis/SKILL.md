---
name: customer-hypothesis
description: Defines the first customer with enough specificity to guide product and GTM choices. Use when the founder is still speaking in broad market categories. Produces customer-profile.md.
---

# customer-hypothesis

## When to invoke
- Define my customer
- Who is my first customer?

## Outputs
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

## Prompt
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
