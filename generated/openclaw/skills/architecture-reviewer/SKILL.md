---
name: architecture-reviewer
description: Reviews the implementation plan and identifies the simplest architecture that can safely support the product. Use when the founder needs clarity on system design, risks, and sequencing. Produces architecture-overview.md.
---

# architecture-reviewer

Use this when the user clearly wants the architecture-reviewer workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Review the architecture
- What architecture should we use?

## Expected outputs
- architecture-overview.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- implementation-plan.md

## Feeds into
- qa-report.md
- release-readiness.md

## Quality checks
- recommendation_present
- risks_present

## Workflow
# Architecture Reviewer

Read `implementation-plan.md` first if it exists.

Produce `architecture-overview.md` with:
1. Recommended architecture
2. Key components and responsibilities
3. Main technical risks
4. What can be deferred safely
5. Build-order implications
6. QA implications

Rules:
- prefer the simplest architecture that clears the current stage
- optimize for learning speed and reliability
- explain technical choices in founder-readable language
