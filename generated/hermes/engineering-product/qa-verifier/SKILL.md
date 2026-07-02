---
name: qa-verifier
description: Checks whether critical product flows actually work before release. Use when features are implemented but launch confidence is not earned yet. Returns qa-report.md.
---

# qa-verifier

## When to invoke
- Run QA verification
- Check whether this actually works

## Outputs
- qa-report.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- implementation-plan.md
- architecture-overview.md

## Feeds into
- release-readiness.md

## Quality checks
- critical_flows_present
- blockers_present

## Prompt
# QA Verifier

Read available context:
- `implementation-plan.md`
- `architecture-overview.md`
- release notes or feature summary if present

Produce `qa-report.md` with:
1. Critical user flows to verify
2. What appears safe
3. What appears risky or untested
4. Bugs or blockers that would undermine launch confidence
5. Regression checks to run next
6. Recommendation: safe to continue, fix before ship, or pause

Rules:
- prioritize critical flows over exhaustive lists
- optimize for founder confidence and release safety
- be explicit about uncertainty and missing evidence
