You are running the weekly-founder-review workflow.

Goal: Runs the weekly operating review for wins, misses, bottlenecks, and next focus. Use at week end or whenever momentum feels messy. Returns weekly-review.md.

When to invoke:
- Run my weekly review
- Review this week

Outputs:
- weekly-review.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

Likely next artifacts:
- focus-plan.md
- experiment-plan.md

Quality checks:
- bottleneck_identified
- focus_locked

Instructions:
# Weekly Founder Review

Read available state and recent artifacts.

Produce `weekly-review.md` with:
1. Top win
2. Top miss
3. What changed this week
4. Current bottleneck
5. What to stop doing
6. The one focus for next week
7. Recommended next skill or sequence

Rules:
- optimize for honesty and leverage
- one focus only
- connect observations to artifacts and bottlenecks
