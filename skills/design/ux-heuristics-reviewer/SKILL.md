---
name: ux-heuristics-reviewer
description: Reviews your product UI against Nielsen's 10 usability heuristics. Spawns 10 parallel agents — one per heuristic — to score, identify issues, and prescribe fixes simultaneously, then synthesizes into a severity-sorted report. Use after building your first screens, when users report confusion, or before showing the product to anyone important. Produces ux-review.md with prioritized issues and specific fixes.
phase: design
version: 2.0.0
---

# UX Heuristics Reviewer

## Quick Start

Say: **"Review my UI"** or **"Check my UX"** and describe your current screens or share screenshots.

You'll describe the key screens. Total time: 15 minutes.
Output: `ux-review.md` — a severity-sorted list of UX issues with the specific fix for each one.

## What You'll Get

A `ux-review.md` containing: a score for each of the 10 heuristics (1-5), every issue found sorted by severity, a specific fix for each issue, and a prioritized fix order with effort estimates.

> **Example output excerpt:**
> **Issue #1 (Critical) — Visibility of System Status | Score: 1/5**
> Users submit the booking form and see a blank screen for 2 seconds with no feedback.
> **Why it matters:** Users assume the form didn't submit and click again — causing duplicate bookings.
> **Fix:** Add a loading state immediately on submit: spinner + "Booking your session..." text. Takes 30 minutes to implement. Fixes immediately.

---

## The Expert Judgment Embedded

This skill applies **Nielsen's 10 Usability Heuristics** — the most validated framework in UX, developed by Jakob Nielsen in 1994 and still the gold standard for identifying usability problems. They don't go out of date because they describe how human attention and cognition work, which doesn't change.

Most non-technical founders' UX issues fall into three heuristics almost every time: visibility of system status (users don't know what's happening), error prevention (the UI lets users make mistakes that could be avoided), and help and documentation (users get stuck and don't know what to do). This skill finds which ones apply to your specific product and gives you the fix.

---

## Parallel Execution

Each of the 10 heuristics is a completely independent evaluation — they can all run simultaneously. Spawn one agent per heuristic, then the orchestrator synthesizes into a single severity-sorted report.

### Step 1: Screen Inventory (Orchestrator)

Before spawning agents, collect the UI context:

**From existing documents:**
- `founder-context.md` — product description, customer profile, stage (auto-read if exists)

**Ask the founder directly:**
1. List or describe your current screens — what's on each one, what the user can do, and what happens when they take key actions.
2. Where are users getting confused or dropping off (if known)?
3. Screenshots or screen descriptions for each key flow.

Compile the screen inventory into a structured brief. This brief is the input for all 10 agents.

### Step 2: Parallel Heuristic Evaluation (10 Agents Simultaneously)

**Spawn 10 agents simultaneously — one per Nielsen heuristic.**

Every agent receives:
- The screen inventory (all screens, flows, and interactions described)
- The product description and target customer
- Their assigned heuristic name and definition

Each agent's task:

1. **Score their heuristic (1-5):**
   - 5: No issues found — this heuristic is well-handled
   - 4: Minor issues — small annoyances, not causing real problems
   - 3: Moderate issues — some users will be confused or slowed down
   - 2: Serious issues — many users will struggle or make mistakes
   - 1: Critical issues — users will fail, abandon, or lose trust

2. **Identify the specific issue:** Describe exactly what violates the heuristic, on which screen, during which user action. Not vague — concrete.

3. **Prescribe the exact fix:** Not "improve the feedback" but "Add a confirmation card after form submit showing the saved data with an Edit link." Include effort estimate (30 min / 1 hour / half day / redesign).

Each agent returns: heuristic name, score, issue description, severity (Critical / Major / Minor / None), fix prescription, effort estimate.

**The 10 agents and their heuristics:**

| Agent | Heuristic | What It Evaluates |
|-------|-----------|-------------------|
| 1 | **Visibility of system status** | Does the UI always show users what's happening? |
| 2 | **Match between system and real world** | Does the language and flow match how users think — not how you built it? |
| 3 | **User control and freedom** | Can users undo mistakes and exit unwanted states easily? |
| 4 | **Consistency and standards** | Do similar things look and work the same way throughout? |
| 5 | **Error prevention** | Does the design prevent problems before they happen? |
| 6 | **Recognition rather than recall** | Do users recognize options rather than having to remember them? |
| 7 | **Flexibility and efficiency of use** | Can experienced users take shortcuts? |
| 8 | **Aesthetic and minimalist design** | Does every element earn its place, or is there visual noise? |
| 9 | **Help users recognize, diagnose, and recover from errors** | Are error messages clear and actionable? |
| 10 | **Help and documentation** | When users get stuck, can they figure out what to do? |

**Wait for all 10 agents. The orchestrator synthesizes.**

### Step 3: Synthesis and Ranking (Orchestrator Only)

Sort all issues by severity (Critical first, then Major, then Minor). Within each severity level, sort by fix effort (cheapest fixes first — highest ROI).

For each issue, calculate triage score:
- **Severity:** Critical (3), Major (2), Minor (1)
- **Frequency:** Every user (3), most users (2), edge cases (1)
- **Fix effort:** 30 min (3), half day (2), redesign (1)
- **Priority = (Severity x Frequency) x Fix Effort Score** — higher = fix first

**Write `ux-review.md`:**

```markdown
# UX Heuristic Review — [Product Name] — [YYYY-MM-DD]

## Scorecard

| # | Heuristic | Score | Severity |
|---|-----------|-------|----------|
| 1 | Visibility of system status | [X]/5 | [Critical/Major/Minor/None] |
| 2 | Match between system and real world | [X]/5 | [severity] |
| 3 | User control and freedom | [X]/5 | [severity] |
| 4 | Consistency and standards | [X]/5 | [severity] |
| 5 | Error prevention | [X]/5 | [severity] |
| 6 | Recognition rather than recall | [X]/5 | [severity] |
| 7 | Flexibility and efficiency of use | [X]/5 | [severity] |
| 8 | Aesthetic and minimalist design | [X]/5 | [severity] |
| 9 | Help users recognize/recover from errors | [X]/5 | [severity] |
| 10 | Help and documentation | [X]/5 | [severity] |

**Overall UX Score: [average]/5**

## Issues by Severity

### Critical

#### Issue #1 — [Heuristic Name] | Score: [X]/5
**Screen:** [Which screen]
**Problem:** [Exact description of what's wrong]
**Impact:** [What happens to users because of this]
**Fix:** [Specific fix — not vague, actionable] | Effort: [time estimate]

[...all critical issues...]

### Major

[...same format...]

### Minor

[...same format...]

## Priority Fix Order
1. [Issue — effort — rationale for doing first]
2. [...]
[...]

Fix #1 and #2 this week. Total effort: [time]. These two fixes eliminate the most user confusion for the least work.
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, evaluate each heuristic one at a time:

For each of the 10 heuristics (in order 1-10):
1. Score the heuristic (1-5)
2. Identify the specific issue (if any)
3. Prescribe the exact fix with effort estimate

Then sort by severity and write `ux-review.md`.

Same output. Time scales linearly (~2 min per heuristic in sequential mode).

---

## Worked Example

**Founder:** Built a food waste logging tool for restaurant managers. Has 3 screens: login, daily log entry, and weekly summary.

**10 agents spawn simultaneously — one per heuristic.**

**Synthesis output (sorted by severity):**

> **Issue #1 — Critical | Visibility of System Status | Score: 1/5**
> **Screen:** Daily log entry
> After a manager submits the daily waste log, the form just clears. No confirmation, no total, nothing.
> **Impact:** Managers don't know if their entry was saved. In testing, 3 out of 5 managers re-entered data "just in case."
> **Fix:** After submit, replace the form with a confirmation card: "Today's log saved — $142 in waste recorded." Include an "Edit" link. Effort: 45 minutes.
>
> **Issue #2 — Critical | Error Prevention | Score: 2/5**
> **Screen:** Daily log entry
> The waste quantity field accepts any number. A manager accidentally entered 500 lbs of butter (meant 5). No validation or warning.
> **Fix:** Add a soft warning when an entry is >3x the category average: "That's unusually high — did you mean [X]?" Don't block submission, just confirm. Effort: 1 hour.
>
> **Issue #3 — Major | Match Between System and Real World | Score: 2/5**
> **Screen:** Daily log entry
> The category labels use inventory management terms ("SKU category," "unit measure") that kitchen staff don't use. They use "proteins," "produce," "dairy."
> **Fix:** Rename all categories to kitchen language. Effort: 20 minutes.
>
> **Issue #4 — Major | Aesthetic and Minimalist Design | Score: 2/5**
> **Screen:** Weekly summary
> The weekly summary shows 12 data points per row. Managers can't read it during a busy service.
> **Fix:** Default view shows only total waste + top 3 waste categories. Add "See full breakdown" link. Effort: 2 hours.
>
> **Issue #5 — Major | Help Users Recognize, Diagnose, and Recover from Errors | Score: 3/5**
> **Screen:** Daily log entry
> When a required field is missing, the form shows "Validation error" with no indication of which field or what's wrong.
> **Fix:** Highlight the specific field in red with inline text: "Weight is required — enter the amount in lbs." Effort: 1 hour.
>
> **Issue #6 — Minor | User Control and Freedom | Score: 3/5**
> **Screen:** Daily log entry
> Once a log entry is submitted, there's no way to edit or delete it. Managers who make mistakes have no recourse.
> **Fix:** Add an "Edit today's entries" link on the confirmation card and on the weekly summary. Effort: 3 hours.
>
> **Priority fix order:** #3 (20 min, high impact) -> #1 (45 min, critical) -> #2 (1 hr, critical) -> #5 (1 hr, major) -> #4 (2 hr) -> #6 (3 hr)

---

## Related Skills

- Use **ux-flow-designer** before building — maps the flows this skill later reviews
- Use **design-direction-setter** before building — sets the visual standard this skill evaluates against
- Use **build-cycle** (Compound phase) after testing with users — combines UX review with real usage learnings
- Use **mpp-evaluator** (Compound phase) — UX quality is one of the MPP criteria
