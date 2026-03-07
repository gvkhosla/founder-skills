---
name: problem-validator
description: Stress-tests whether your problem is real, painful, and worth solving before you build anything. Runs 5 validation tests (max 25 points), then spawns 3 parallel research agents — Evidence Hunter, Market Sizer, and Alternative Mapper — to gather supporting data simultaneously. Use when you have a product idea and want to validate it's solving a genuine problem, or when you're unsure if people actually care. Produces problem-validation-report.md with a confidence score and clear go/no-go signal.
phase: strategy
version: 2.0.0
---

# Problem Validator

## Quick Start

Say: **"Validate my problem"** or **"Is this problem worth solving?"**

You'll answer 5 questions. Three research agents run in parallel to gather evidence. Total time: 10 minutes.
Output: `problem-validation-report.md` — a structured assessment with a confidence score and an honest go/no-go recommendation.

## What You'll Get

A `problem-validation-report.md` containing: your problem restated precisely, the five validation tests scored (max 25 points), parallel research from three agents (existing solutions, market size, current alternatives), a confidence level (Low / Medium / High), and a clear recommendation — build, validate more, or pivot.

> **Example output excerpt:**
> **Problem:** Independent yoga instructors lose 3-5 hours per week manually following up with students who haven't rebooked.
> **Score: 18/25 — Medium Confidence**
> Frequency: 3/5 — weekly occurrence
> Active Workaround: 5/5 — spreadsheets + manual DMs
> Intensity: 3/5 — lost time + embarrassment
> Willingness to Pay: 2/5 — indirect spend on scheduling tools
> Beachhead Density: 5/5 — can name 50 instructors easily via local studios and Instagram
> **Agent A found:** 4 competing tools, 12 Reddit threads complaining about rebooking
> **Agent B found:** ~180K independent yoga instructors in the US, $2.1B adjacent market in studio software
> **Agent C found:** Current alternatives are spreadsheets, Calendly hacks, and manual DMs
> **Recommendation:** Validate willingness to pay before building. Talk to 5 instructors. Ask if they've ever paid for anything to reduce admin time.

---

## The Expert Judgment Embedded

This skill applies **The Mom Test** (Rob Fitzpatrick) combined with **Problem-Solution Fit** criteria from Steve Blank's customer development methodology. Most founders validate problems by asking "Would you use this?" — which is useless because people are polite. This skill validates against observable signals: active workarounds, money already being spent, frequency, and intensity of the pain.

The uncomfortable truth: most product ideas fail the problem validation test not because the problem is fake, but because it's a *vitamin* (nice to have) rather than a *painkiller* (urgent to fix). This skill distinguishes between the two.

---

## Parallel Execution

### Step 1: Restate the Problem and Run the Five Tests (Orchestrator)

The agent asks the founder to complete: "Right now, [specific user] has to [painful thing] every [frequency], which causes [consequence]."

Vague problems fail validation. Precise problems succeed or fail clearly.

**Auto-read:** If `customer-profile.md` exists in the project, read it first and use it to pre-fill context about the target user.

Then ask the founder the 5 validation questions and score each:

| Test | Question | Scoring |
|------|----------|---------|
| **1. Frequency** | How often does this problem occur for your target user? | Daily = 5, Weekly = 3, Monthly = 1, Rarely = 0 |
| **2. Active Workaround** | Are people already solving this with a hack, spreadsheet, or manual process? | Yes = 5, Sort of = 2, No = 0 |
| **3. Intensity** | How much pain does this cause? Score 1 point for each: lost money, lost time, embarrassment, risk, blocked from progress. | 0-5 (1 point per criterion met) |
| **4. Willingness to Pay** | Is anyone already spending money (directly or indirectly) to address this? | Direct spend on this category = 5, Indirect/adjacent spend = 2, None = 0 |
| **5. Beachhead Density** | Can you name 50 specific people who have this problem? | Easily = 5, With effort = 3, Struggling = 1, Cannot = 0 |

**Max score: 25 points.**

**Confidence levels:**
- **20-25: High** — strong signal, safe to scope and build
- **12-19: Medium** — real problem, but validate more before building
- **Under 12: Low** — rethink the problem or the user before proceeding

Record the scores. This is the input for the parallel phase.

### Step 2: Parallel Research (3 Agents Simultaneously)

After the founder answers the 5 questions, **spawn 3 agents simultaneously:**

**Agent A — Evidence Hunter**
Context: The restated problem + target user description
Task: Search for evidence that this problem exists in the wild.
- Look for existing solutions (products, tools, services) that address this problem
- Find forum complaints, Reddit threads, review site mentions, support tickets
- Surface any customer research, surveys, or articles discussing this pain point
- Note the language real people use to describe this problem
Returns: Evidence report — what exists, what people say, links and sources, strength of signal (weak / moderate / strong)

**Agent B — Market Sizer**
Context: The restated problem + target user description + beachhead density answer
Task: Estimate the beachhead market size and adjacent spend.
- How many people in the beachhead segment have this problem?
- What are they currently spending on related tools or services?
- What is the adjacent market size (the broader category)?
- Is the beachhead growing, stable, or shrinking?
Returns: Market sizing report — beachhead estimate, adjacent market size, spend data, growth direction

**Agent C — Alternative Mapper**
Context: The restated problem + target user description + active workaround answer
Task: Map what people currently do instead of having a proper solution.
- Document every current alternative (manual processes, spreadsheets, existing tools, ignoring the problem)
- Rate each alternative: how good is it? (terrible / adequate / good enough)
- Identify the switching cost from each alternative to a new solution
- Flag the "good enough" alternatives — these are the real competitors, not other startups
Returns: Alternatives map — every current approach, its quality, switching cost, and whether it's "good enough" to block adoption

**Wait for all 3 agents. The orchestrator synthesizes.**

### Step 3: Synthesis (Orchestrator Only)

Combine the founder's 5 test scores with the research from all three agents. Adjust confidence if agent research contradicts or reinforces the founder's answers.

**Write `problem-validation-report.md`:**

```markdown
# Problem Validation Report — [YYYY-MM-DD]

## Problem Statement
[Restated problem in the precise format]

## Validation Scores

| Test | Score | Detail |
|------|-------|--------|
| Frequency | [X]/5 | [one-line explanation] |
| Active Workaround | [X]/5 | [one-line explanation] |
| Intensity | [X]/5 | [which criteria met: lost money, lost time, embarrassment, risk, blocked] |
| Willingness to Pay | [X]/5 | [one-line explanation] |
| Beachhead Density | [X]/5 | [one-line explanation] |
| **Total** | **[X]/25** | **[High / Medium / Low]** |

## Research Findings

### Evidence in the Wild (Agent A)
[Existing solutions found, forum complaints, reviews, language people use]

### Market Size (Agent B)
[Beachhead estimate, adjacent market, current spend, growth direction]

### Current Alternatives (Agent C)
[What people do today, quality of each alternative, switching costs]

## Confidence: [High / Medium / Low]

[One paragraph synthesizing the scores and agent research into a clear signal]

## Recommendation

[Build / Validate more / Pivot — with specific next action]
[If Medium: exactly what to validate and how]
[If Low: what to rethink and why]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, run the research sequentially:

1. Restate the problem and score the 5 validation tests
2. Evidence Hunter research (existing solutions, forum complaints, reviews)
3. Market Sizer research (beachhead estimate, adjacent spend)
4. Alternative Mapper research (current approaches, switching costs)
5. Synthesize into `problem-validation-report.md`

Same output. ~3x longer.

---

## Worked Example

**Founder:** Building an AI tool to help HR managers write job descriptions faster.

**Step 1 — Problem restated:** "Right now, HR managers at companies with 20-200 employees have to write each job description from scratch every time they open a new role, which causes 45-90 minutes of lost time per JD and inconsistent quality across roles."

**Step 1 — Validation scores:**

| Test | Score | Detail |
|------|-------|--------|
| Frequency | 3/5 | Weekly — every new hire triggers this, most HR managers write 2-4 JDs per month |
| Active Workaround | 5/5 | Yes — HR managers copy old JDs, use Google templates, or ask ChatGPT |
| Intensity | 3/5 | Lost time (1) + embarrassment from bad JDs attracting wrong candidates (1) + blocked from moving hiring forward until JD is done (1) |
| Willingness to Pay | 5/5 | Direct spend — tools like Workable and Greenhouse are paid for; adjacent spend on recruiting confirmed |
| Beachhead Density | 5/5 | Can easily name 50 HR managers at mid-size companies via LinkedIn search |
| **Total** | **21/25** | **High** |

**Step 2 — Parallel agents spawn:**

> **Agent A (Evidence Hunter):** Found 8 existing JD tools (Textio, Ongig, Gender Decoder), 23 Reddit threads in r/humanresources complaining about JD writing, 4 G2 review threads mentioning "JD creation" as a pain point. Signal: strong.
>
> **Agent B (Market Sizer):** ~340K companies in the US with 20-200 employees. Average 1.2 HR managers per company. Beachhead: ~408K potential users. ATS market is $2.7B and growing 9% YoY. Adjacent spend confirmed.
>
> **Agent C (Alternative Mapper):** Current alternatives: (1) Copy-paste from old JDs — adequate but produces stale, inconsistent output. (2) Google "job description template" — terrible quality. (3) ChatGPT — adequate but requires heavy editing and no compliance checking. (4) ATS built-in templates — good enough for basic roles, weak for specialized positions. Switching cost: low for all alternatives.

**Step 3 — Synthesis:**

> **Score: 21/25 — High Confidence**
>
> The active workaround signal (people already using ChatGPT for this) is the strongest possible validation — you're not creating demand, you're serving it better. Market is large enough, alternatives are adequate but not great, and switching cost is low.
>
> **Recommendation:** Build. The combination of high frequency, strong active workarounds, and confirmed willingness to pay makes this a clear go. Start with `mvp-scoper` to define exactly what to build first. Focus differentiation on what ChatGPT can't do: compliance checking, tone consistency across roles, and integration with ATS systems.

---

## Related Skills

- Use **mvp-scoper** after this — once the problem is validated, scope what to build
- Use **customer-hypothesis** in parallel — sharpens who exactly has this problem
- Use **assumption-mapper** after this — maps your remaining unknowns to validation methods
- Use **founder-partner** if your score is Medium and you're not sure whether to build or validate more
