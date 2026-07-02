---
name: landing-page-copywriter
description: Turns positioning and product scope into a high-conviction landing page draft that can actually ship. Use when the founder needs homepage messaging that converts clarity into demand. Produces landing-page-copy.md.
---

# landing-page-copywriter

Use this when the user clearly wants the landing-page-copywriter workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Write my landing page
- Draft homepage copy

## Expected outputs
- landing-page-copy.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- positioning.md
- customer-profile.md
- mvp-brief.md

## Feeds into
- launch-plan.md
- pipeline-review.md

## Quality checks
- specific_recommendation
- concrete_output
- next_step_present

## Workflow
# Landing Page Copywriter

Read first:
- `positioning.md`
- `customer-profile.md`
- `mvp-brief.md`
- `pricing-model.md`
- `founder-context.md`

Produce `landing-page-copy.md` with:
1. Hero headline, subhead, and primary CTA
2. Social proof / credibility block
3. Problem section using the customer's actual painful moment
4. Product section explaining the minimum proud product clearly
5. Objection-handling section
6. Pricing / offer section if pricing is known
7. FAQ
8. The one change that should be tested first after publishing

Rules:
- write one strong page, not multiple variants
- optimize for clarity and conversion, not brand fluff
- every section should move the same customer toward the same action
