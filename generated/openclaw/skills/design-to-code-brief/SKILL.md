---
name: design-to-code-brief
description: Converts product intent and design taste into a build-ready UI brief. Use when the desired experience is clear but the implementation handoff is fuzzy. Returns design-build-brief.md.
---

# design-to-code-brief

Use this when the user clearly wants the design-to-code-brief workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Turn this design into a build brief
- Help me hand this off to build

## Expected outputs
- design-build-brief.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- implementation-plan.md
- positioning.md

## Feeds into
- qa-report.md

## Quality checks
- handoff_clarity_present
- states_and_interactions_present

## Workflow
# Design to Code Brief

Read available context:
- `implementation-plan.md`
- `positioning.md`
- any design notes or screenshots if available

Produce `design-build-brief.md` with:
1. Product intent for the screen or flow
2. Core components and states
3. Interaction expectations
4. Copy and messaging constraints
5. Edge states and failure states
6. What good looks like when implemented

Rules:
- optimize for implementation clarity, not visual poetry
- write for builders and founders to understand equally well
- include states, interactions, and acceptance criteria
