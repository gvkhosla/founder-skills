---
name: messaging-architect
description: Builds the core message architecture that ties positioning, sales, SEO/GEO, and launch copy together. Use when the founder has positioning but needs a repeatable message system. Produces messaging-architecture.md.
---

# messaging-architect

## When to invoke
- Build my messaging architecture
- Tighten our messaging

## Outputs
- messaging-architecture.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- positioning.md
- customer-profile.md
- problem-validation-report.md

## Feeds into
- landing-page-copy.md
- pipeline-review.md
- seo-geo-plan.md

## Quality checks
- specific_recommendation
- message_hierarchy_present
- next_step_present

## Prompt
# Messaging Architect

Read first:
- `positioning.md`
- `customer-profile.md`
- `problem-validation-report.md`
- `founder-context.md`

Produce `messaging-architecture.md` with:
1. The core narrative in one paragraph
2. Message hierarchy: problem, promise, proof, differentiation
3. Top customer objections and the strongest rebuttal for each
4. Channel adaptations for homepage, outbound, SEO/GEO, and ads
5. Words and claims to stop using
6. The one message test to run next

Rules:
- create one coherent message system, not disconnected copy fragments
- every claim should tie back to a real customer pain or proof point
- optimize for repetition and consistency across channels
