---
name: pmf-signal-reader
description: Reads whether traction is real by judging retention, word of mouth, engagement, and revenue signals. Use when the founder needs an honest PMF read instead of vanity metrics. Produces pmf-assessment.md.
---

# pmf-signal-reader

Use this when the user clearly wants the pmf-signal-reader workflow.

OpenClaw behavior:
- If coding work is required, spawn a coding session with the current repo context.
- Read the relevant Founder Skills OS artifacts before implementation.
- Return with the produced artifacts and the next recommended move.

## When to invoke
- Read my PMF signals
- Do we have PMF?

## Expected outputs
- pmf-assessment.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

## Read first when available
- north-star.md
- founder-context.md

## Feeds into
- churn-diagnosis.md
- retention-loop.md
- growth-loop.md

## Quality checks
- honest_assessment
- signal_strength_named
- next_step_present

## Workflow
# PMF Signal Reader

Read first:
- `north-star.md`
- `founder-context.md`
- `.fs/weekly-review.json`
- recent cycle notes, launch notes, or support summaries if they exist

Produce `pmf-assessment.md` with:
1. Overall PMF signal rating: none, faint, building, or clear
2. Signal breakdown across retention, word of mouth, engagement, and revenue
3. The strongest true signal you see
4. The most dangerous false signal the founder might be overvaluing
5. What metric to obsess over next
6. The next skill or sequence to run

Rules:
- judge behavior, not vibes
- be conservative with PMF claims
- explain uncertainty explicitly when evidence is thin
