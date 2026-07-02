# validate-to-build

Moves a founder from validated problem to confident implementation planning.

OpenClaw should use this sequence as a staged spawn workflow.

## Entrypoint
- founder-partner

## Steps
1. problem-validator
2. customer-hypothesis
3. mvp-scoper
4. implementation-planner
5. architecture-reviewer
6. release-readiness-auditor

## Primary outputs
- problem-validation-report.md
- customer-profile.md
- mvp-brief.md
- implementation-plan.md
- architecture-overview.md
- release-readiness.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Success signals
- founder_can_start_build_with_no_major_ambiguity

## Operating notes
# Validate to Build

Use this sequence when the founder has conviction around the problem and now needs to turn that into a buildable path.

## Sequence logic
1. Validate the problem
2. Define the customer
3. Scope the MVP
4. Turn scope into a concrete implementation plan
5. Review architecture and technical risk
6. Audit release readiness before shipping
