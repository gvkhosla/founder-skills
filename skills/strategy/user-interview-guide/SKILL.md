---
name: user-interview-guide
description: Plans a 5-person user interview sprint and synthesizes findings into research-report.md. Use before building or whenever you are guessing about users instead of knowing.
phase: strategy
version: 1.0.0
---

# User Interview Guide

## Quick Start

Say: **"Help me interview users"** or **"I need to talk to real users before I build this"**

Share your product idea, customer profile, or the assumption you want to test.
Output: `research-report.md` — themes, surprises, and verbatim quotes synthesized from 5 user interviews.

## What You'll Get

A `research-report.md` containing: the top 3 themes across all interviews, the top 3 surprises that challenge your assumptions, and the 5 best verbatim quotes that capture the insights. Plus the interview plan, recruiting message, and facilitation guide you used to get there.

> **Example output excerpt:**
> **Theme #1: Freelance designers don't track time — they track energy.**
> 4 of 5 interviewees described their workflow in terms of "deep focus blocks" rather than hours. None used a timer. Two had tried Toggl and abandoned it within a week.
> **Best quote:** "I don't bill by the hour. I bill by the deliverable. So tracking time feels like I'm lying to myself about how I work." — P3, freelance brand designer, 6 years experience.

---

## Expert Judgment

This skill embeds the principles of **The Mom Test** by Rob Fitzpatrick. Every question, every guideline, and every warning in this skill is designed to produce good data and avoid bad data.

**Good data:**
- Specific stories about what they did, not what they would do
- Workarounds they have built or tolerated
- Emotions — frustration, embarrassment, relief
- Money or time they have already spent trying to solve this

**Bad data:**
- Compliments ("That sounds really cool!")
- Hypotheticals ("I would definitely use that")
- Generalities ("Yeah, that's always a problem")

**Core rules:**
1. Ask about their life, not your idea
2. Ask about the past, not the future
3. Ask for specifics, not generalities
4. Never ask "Would you use this?"
5. Never explain what you are building until after the interview
6. Talk less, listen more

---

## Phase 1: PLAN (Orchestrator)

Generate the interview plan. Auto-read `customer-profile.md` if it exists in the project — it shapes who to recruit and what to ask.

### Mom Test Questions (8 core questions)

These are starter questions. Adapt the language to fit your domain, but preserve the structure — every question asks about the past, asks for specifics, and never reveals your idea.

1. **"Walk me through the last time you [did the thing your product addresses]. What happened?"**
   Opens with a concrete, recent event. Not hypothetical.

2. **"What was the hardest part of that?"**
   Surfaces the real pain, in their words.

3. **"Why was that hard?"**
   Goes one level deeper. The first answer is rarely the real answer.

4. **"How are you dealing with that problem today?"**
   Reveals current workarounds. If they have none, the pain may not be real.

5. **"What have you tried before to solve this? What happened?"**
   Shows whether they have spent time or money searching for a solution.

6. **"What don't you love about the tools/process you're using now?"**
   Surfaces gaps in existing solutions without leading toward yours.

7. **"If you could wave a magic wand and fix one thing about [this process], what would it be?"**
   Use sparingly — this can produce hypotheticals. Follow up immediately with: "Tell me about the last time that thing caused a real problem."

8. **"Is there anything else about [this area] that I should have asked about but didn't?"**
   Often produces the most valuable insight of the entire interview.

### Recruiting Message Template

```
Subject: Quick chat about how you [do the relevant activity]?

Hi [Name],

I'm researching how [target role/persona] handle [the activity or problem area].
I'm not selling anything — I'm just trying to understand the workflow better
before I build something wrong.

Would you be open to a 20-minute call this week? Happy to work around your
schedule. I'd love to hear how you actually do [the thing] day-to-day.

[Your name]
```

### Who to Recruit

If `customer-profile.md` exists, use it to define the recruiting criteria. If not, define:

- **Role/title:** Who specifically are you targeting?
- **Experience level:** Enough experience to have felt the pain, not so senior they have delegated it away
- **Recency:** They must have done the relevant activity in the last 2 weeks
- **Diversity:** Recruit across company sizes, industries, or workflows to avoid echo-chamber results
- **Number:** 5 interviews. Patterns emerge by interview 3–4. Five is enough to act on.

**Where to find them:** LinkedIn, relevant Slack/Discord communities, Twitter/X, Reddit, professional associations, personal network (second-degree connections preferred over friends).

---

## Phase 2: GUIDE (Orchestrator)

Step-by-step facilitation guide for conducting each interview.

### Interview Structure (20–25 minutes)

**Warm-Up (3 minutes)**
- Thank them for their time
- "This is informal — there are no wrong answers"
- "I'm going to ask about how you work, not pitch you anything"
- Ask one easy factual question: "How long have you been doing [role/activity]?"
- Do NOT explain what you are building. Not yet. Not even a hint.

**Core Questions (15 minutes)**
- Work through questions 1–6 from the Mom Test list above
- Follow the thread, not the script — if they say something interesting, dig into it
- Use "Tell me more about that" and "Why?" liberally
- Use question 7 (magic wand) only if the conversation stalls
- End with question 8 (anything I should have asked)

**Wrap-Up (2–5 minutes)**
- "Is there anyone else you think I should talk to about this?" (snowball recruiting)
- "Would it be okay if I followed up in a few weeks if I have more questions?"
- Thank them sincerely
- Only NOW, if they ask, can you briefly describe what you are exploring — keep it to two sentences

### What to Listen For

| Signal | What It Means | Write It Down |
|--------|--------------|---------------|
| Specific story with details | Real pain, real experience | Verbatim quote + context |
| Emotional language (frustrated, embarrassing, hate) | Strong pain signal | The exact words they used |
| Money or time already spent | Validated willingness to pay/invest | Amount + what they tried |
| Workaround they built | Problem is real enough to act on | What they built and why |
| "It's not that big a deal" | Weak pain — may not be worth solving | Note it honestly |
| Compliments about your idea | Bad data — they are being polite | Discard. Do not count this. |

### How to Take Notes

- Use a shared doc or notebook — not your memory
- Write verbatim quotes in quotation marks as they speak
- Note emotions and emphasis, not just words
- After the call, spend 5 minutes adding context while it is fresh
- Tag each note with the participant number (P1, P2, P3, P4, P5)

### What NOT to Do

- **Do not pitch.** You are here to learn, not sell.
- **Do not ask "Would you use this?"** The answer is always yes, and it means nothing.
- **Do not ask leading questions.** "Don't you think it would be better if...?" is leading.
- **Do not talk for more than 30 seconds at a time.** If you are talking, you are not learning.
- **Do not accept compliments as data.** "That's a great idea" is not validation.
- **Do not explain your solution.** Even if they ask. Say: "I'm still figuring that out — I want to understand the problem first."
- **Do not interview friends or family.** They will tell you what you want to hear.
- **Do not skip the follow-up notes.** The 5 minutes after the call are the most valuable writing you will do.

---

## Phase 3: SYNTHESIZE (Parallel Execution)

After the founder completes 5 interviews and pastes raw notes, spawn 3 agents simultaneously to analyze the data.

### Input

The founder pastes raw interview notes (all 5 interviews). The orchestrator passes the complete set of notes to all 3 agents.

### Spawn 3 Agents Simultaneously

**Agent A — Pattern Finder**
Context: All 5 interview transcripts/notes
Task: Identify the top 3 themes that appear across multiple interviews.
For each theme:
- Name the theme in one sentence
- How many of the 5 interviewees mentioned it (and which ones: P1, P2, etc.)
- The strongest evidence for this theme (a specific story or quote)
- What this means for the product

Returns: Top 3 themes, ranked by frequency and strength of evidence.

**Agent B — Surprise Extractor**
Context: All 5 interview transcripts/notes + `customer-profile.md` or founder's stated assumptions (if available)
Task: Identify the top 3 unexpected findings — things that challenge the founder's assumptions or reveal something the founder did not anticipate.
For each surprise:
- What the founder likely assumed
- What the interviews actually revealed
- Which interviewees provided the evidence (P1, P2, etc.)
- Why this matters for the product direction

Returns: Top 3 surprises, ranked by potential impact on product decisions.

**Agent C — Quote Curator**
Context: All 5 interview transcripts/notes
Task: Select the 5 best verbatim quotes from across all interviews.
Selection criteria:
- The quote captures a key insight in the interviewee's own words
- The quote is specific, not generic
- The quote carries emotional weight or reveals a real behavior
- Together, the 5 quotes should cover different aspects of the findings

For each quote:
- The verbatim quote
- Who said it (participant number, role, relevant context)
- Why this quote matters

Returns: 5 curated quotes with attribution and significance.

**Wait for all 3 agents. The orchestrator synthesizes.**

### Orchestrator: Assemble research-report.md

```markdown
# Research Report — [YYYY-MM-DD]

## Interview Summary
- **Interviews completed:** 5
- **Participant profiles:** [Brief description of each: P1–P5]
- **Date range:** [When interviews were conducted]

## Top 3 Themes

### Theme 1: [Theme Name]
**Frequency:** [X] of 5 interviewees
**Evidence:** [Agent A's strongest evidence]
**Implication:** [What this means for the product]

### Theme 2: [Theme Name]
[Same format]

### Theme 3: [Theme Name]
[Same format]

## Top 3 Surprises

### Surprise 1: [What was unexpected]
**Assumed:** [What the founder believed]
**Reality:** [What interviews revealed]
**Source:** [Which participants, P1/P3/P5]
**Impact:** [How this changes the product direction]

### Surprise 2: [What was unexpected]
[Same format]

### Surprise 3: [What was unexpected]
[Same format]

## 5 Key Quotes

> "[Verbatim quote]"
> — P[X], [role], [context]
> **Why it matters:** [One sentence]

> "[Verbatim quote]"
> — P[X], [role], [context]
> **Why it matters:** [One sentence]

[...3 more quotes...]

## Recommended Next Steps
1. [Action based on Theme 1]
2. [Action based on Surprise 1]
3. [What to test or validate next based on findings]

## Raw Interview Notes
[Appended or linked — preserve the original data]
```

---

## Sequential Fallback (Codex / OpenCode)

If your agent does not support parallel subagents, run the synthesis in sequence:

1. Pattern Finder — identify top 3 themes across all interviews
2. Surprise Extractor — identify top 3 findings that challenge assumptions
3. Quote Curator — select the 5 best verbatim quotes

Then assemble `research-report.md`.

Same output. ~3x longer.

---

## Worked Example

**Founder:** Building a project scoping tool for freelance designers who struggle to estimate timelines and price projects accurately.

**Phase 1 — PLAN:**
- `customer-profile.md` exists: "Freelance UI/UX designers, 2–7 years experience, solo or small studio, earning $60K–$150K/year, primarily finding clients through referrals and Dribbble."
- Recruiting criteria: freelance designers who have scoped and priced a project in the last 2 weeks.
- Recruiting message sent to 12 designers via LinkedIn and a Figma community Slack. 5 agreed to chat.

**Phase 2 — GUIDE:**
- Interviews conducted over 4 days, 20–25 minutes each.
- Founder followed the Mom Test questions. Key adaptations: question 1 became "Walk me through the last project you scoped out for a client — from the initial conversation to sending the proposal."
- Founder resisted the urge to describe the tool when P2 said "I wish something like that existed."

**Phase 3 — SYNTHESIZE:**
- Founder pasted raw notes from all 5 interviews.
- 3 agents spawned simultaneously.

**Results:**

> **Theme #1: Designers undercharge because they cannot articulate scope, not because they do not know their value.**
> 5 of 5 interviewees described situations where they knew the project was worth more but could not break it down convincingly for the client. P1: "I know it's a $10K project but I can't explain why, so I say $6K and hate myself."

> **Surprise #1: Nobody wants a scoping "tool" — they want a script.**
> The founder assumed designers needed software to calculate estimates. But 4 of 5 said their real problem was the client conversation itself — they freeze when the client pushes back on price. They wanted words, not math.

> **Quote:** "I don't need a calculator. I need someone to tell me what to say when the client goes 'that seems expensive.'" — P4, freelance product designer, 4 years experience.

The founder pivoted from building a scoping calculator to building a guided proposal conversation tool with response scripts for common client objections.

---

## Related Skills

- Use **customer-hypothesis** before this — defines who to recruit and what assumptions to test
- Use **assumption-mapper** before this — identifies which assumptions need interview-based validation
- Use **problem-validator** after this — validates the core problem using your interview findings as evidence
- Use **mvp-scoper** after this — scope the MVP based on what users actually need, not what you guessed
- Use **founder-partner** throughout — to process what you are hearing and decide what to do next
