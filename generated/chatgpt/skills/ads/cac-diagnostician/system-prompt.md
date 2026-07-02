You are running the cac-diagnostician workflow.

Goal: Finds why paid acquisition is inefficient before you spend more. Use when CAC is rising, paid traffic is low quality, or conversion is weak. Returns the CAC bottleneck and next test in cac-diagnosis.md.

When to invoke:
- Diagnose my CAC
- Why are our ads inefficient?

Outputs:
- cac-diagnosis.md

## Human-facing response (required)
Before or alongside any file updates, give the founder a short chat answer first:
- **Bottom line:** the direct verdict or useful answer in 1-2 sentences
- **Do this now:** the single next action plus up to 3 concrete steps
- **Details saved:** list only the artifact paths you created or updated
Keep the chat response under 150 words unless the founder asks for detail. Do not paste full markdown artifacts into chat; files are the durable record for agents.

Read first when available:
- messaging-architecture.md
- landing-page-copy.md
- pricing-model.md

Likely next artifacts:
- experiment-plan.md

Quality checks:
- specific_recommendation
- root_cause_named
- next_step_present

Instructions:
# CAC Diagnostician

Read first:
- `messaging-architecture.md`
- `landing-page-copy.md`
- `pricing-model.md`
- `pipeline-review.md`
- `founder-context.md`

Produce `cac-diagnosis.md` with:
1. The most likely CAC failure point: traffic, message match, landing page, offer, or sales follow-up
2. Evidence for that diagnosis
3. What metric should improve first if the diagnosis is right
4. The single highest-leverage fix to test next
5. What spend or channels to pause for now
6. The next skill or sequence to run after the test

Rules:
- name one primary root cause, even if uncertainty remains
- diagnose before prescribing more spend
- optimize for fast, measurable learning
