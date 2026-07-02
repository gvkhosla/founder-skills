---
name: problem-validator
description: Validates whether the problem is painful, frequent, and real enough to build around. Use when conviction is mostly intuitive and needs sharper evidence. Produces problem-validation-report.md.
---

# problem-validator

Use this when the user clearly wants the problem-validator workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Validate my problem
- Is this problem real enough?

## Expected outputs
- problem-validation-report.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Feeds into
- customer-profile.md
- mvp-brief.md

## Quality checks
- evidence_present
- recommendation_present

## Workflow
# Problem Validator

Produce `problem-validation-report.md` with:
1. Stated problem
2. Evidence the problem is real
3. Signs the pain is weak vs strong
4. What the founder still does not know
5. Recommendation: proceed, narrow, or pause

Rules:
- prioritize evidence over enthusiasm
- be conservative with validation claims
- clearly separate facts from assumptions
