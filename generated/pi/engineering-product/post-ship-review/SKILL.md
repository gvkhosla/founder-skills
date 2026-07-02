---
name: post-ship-review
description: Turns a shipped change into a decision about what to do next. Use after release when you need to separate real behavior change from shipping activity. Returns post-ship-review.md.
---

# post-ship-review

## When to invoke
- Review what changed after shipping
- Run a post-ship review

## Outputs
- post-ship-review.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- qa-report.md
- release-readiness.md

## Feeds into
- weekly-review.md
- experiment-plan.md

## Quality checks
- outcomes_present
- next_move_present

## Prompt
# Post Ship Review

Read available context:
- `qa-report.md`
- `release-readiness.md`
- any launch notes, user feedback, or support notes if available

Produce `post-ship-review.md` with:
1. What shipped
2. What appears to have improved
3. What still feels fragile
4. Early quality or user-signal concerns
5. Highest-leverage follow-up action
6. Recommendation for the next sequence or skill

Rules:
- optimize for learning after shipping, not celebration
- distinguish signal from hope
- identify the clearest next move
