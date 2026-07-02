---
name: release-readiness-auditor
description: Audits whether the product is actually ready to ship given scope, quality, risk, and launch context. Use when launch feels close but confidence is uneven. Produces release-readiness.md.
---

# release-readiness-auditor

Use this when the user clearly wants the release-readiness-auditor workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Are we ready to ship?
- Audit release readiness

## Expected outputs
- release-readiness.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- implementation-plan.md
- qa-report.md

## Feeds into
- launch-plan.md

## Quality checks
- readiness_verdict_present
- blockers_present

## Workflow
# Release Readiness Auditor

Read available context:
- `implementation-plan.md`
- `qa-report.md`
- `launch-plan.md`

Produce `release-readiness.md` with:
1. Verdict: ready, at risk, or not ready
2. Top blockers
3. Product quality risks
4. Launch risks
5. Must-fix now vs can-fix-after-launch
6. Recommended next move

Rules:
- be honest and conservative
- optimize for founder trust, not false momentum
