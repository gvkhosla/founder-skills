---
name: pipeline-reviewer
description: Diagnoses the biggest leak in founder-led sales. Use when demos, leads, or conversations are happening but closes are weak. Returns pipeline-review.md.
---

# pipeline-reviewer

## When to invoke
- Review my pipeline
- Why are our deals not closing?

## Outputs
- pipeline-review.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Depends on
- positioning.md

## Feeds into
- objection-map.md
- outbound-sequences.md

## Quality checks
- specific_recommendation
- concrete_output

## Prompt
# Pipeline Reviewer

Read any available context:
- `positioning.md`
- `icp.md`
- sales call notes
- lost-deal notes

Produce `pipeline-review.md` with:
1. Current pipeline diagnosis
2. Most likely conversion bottleneck
3. Objection patterns
4. Deal-stage weakness
5. Immediate fixes for this week
6. Next sales skill to run

Be decisive and founder-readable.
