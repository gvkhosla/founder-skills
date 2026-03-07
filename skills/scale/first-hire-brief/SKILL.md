---
name: first-hire-brief
description: Defines who or what to hire first — a human or an AI agent — and produces a brief to find, evaluate, and onboard them.
phase: scale
version: 1.0.0
---

# First Hire Brief

## Quick Start

Say: **"Help me figure out my first hire"** or **"What should I hire for first?"**

Describe what you're spending your time on and where you're stuck.
Output: `human-hire-brief.md` or `agent-hire-brief.md` — a complete brief to find, evaluate, and onboard your first hire (human or AI agent).

---

## What You'll Get

A hire brief tailored to whether you need a human or an AI agent. The brief includes everything required to find, screen, and onboard the right fit — so you can act on it immediately, not deliberate for another month.

> **Example output excerpt (Human Hire):**
> **Role:** Community Manager (Part-time, Contract-to-Hire)
> **3 Key Outcomes:** (1) 50 engaged community members in 30 days. (2) Weekly community digest published every Friday. (3) 3 customer stories sourced from community conversations per month.
> **30-Day Signal:** Community responds to posts within 4 hours. Founder spends zero time on community moderation.
> **Paid Test Task:** Moderate our Discord for one week. Write 3 discussion-starter posts. Produce a one-page summary of the top themes and member sentiment. (Est. 3 hours, paid.)

> **Example output excerpt (AI Agent Hire):**
> **Agent:** Research Digest Agent
> **Trigger:** Runs every Monday at 6am.
> **Context:** Reads competitor blog RSS feeds, Hacker News front page, and founder's watch-list keywords.
> **Output:** `weekly-research-digest.md` — 5 bullets of what matters this week and why, with source links.
> **Quality Bar:** Every bullet must cite a primary source. No filler. Founder reads the digest in under 2 minutes.

---

> **The trap: hiring for comfort, not leverage.** The first hire should remove the biggest bottleneck, not the most annoying task. If the founder is the bottleneck on sales conversations, hiring an engineer doesn't help. If the founder is the bottleneck on content, an AI agent might handle 80% of it.

---

## Parallel Execution

### Step 1: Classification (Orchestrator)

Start with ONE question. Ask the founder directly:

**"What work is taking the most time that you are not the best person to do?"**

Wait for the answer. Then classify it:

| Work Type | Signal | Default Hire |
|-----------|--------|--------------|
| **Creative / Relational** | Sales calls, customer interviews, community building, partnerships, design with taste | Almost always **human** |
| **Systematic / Repeatable** | Research, reporting, data entry, content drafts, monitoring, formatting | Almost always **AI agent** |
| **Technical / Build** | Engineering, architecture, code, infrastructure | **Depends** — judgment-heavy = human, execution-heavy = AI agent |

Once classified, branch to the appropriate parallel phase.

---

### HUMAN HIRE BRANCH

**Spawn 2 agents simultaneously:**

**Agent A -- Role Definer**
Context: Founder's bottleneck description + customer profile + product stage
Task: Write a precise role brief containing:
- **Title:** Clear, specific role title (not "Operations Ninja")
- **3 Key Outcomes Expected:** What this person must produce, not what they must do
- **30-Day Success Signals:** What "working" looks like after one month
- **90-Day Success Signals:** What "thriving" looks like after one quarter
- **Must-Have Skills:** 3-4 non-negotiable capabilities (be specific — "has moderated a Discord with 100+ members" not "community experience")
- **Nice-to-Have Skills:** 2-3 bonus capabilities that would accelerate impact
- **Compensation Range Guidance:** Based on role type, part-time vs. full-time, contract vs. employment, and market range for this role at this stage

Returns: Complete role definition section for `human-hire-brief.md`

**Agent B -- Evaluation Designer**
Context: Founder's bottleneck description + the work this person will do + product context
Task: Design the screening and evaluation process:
- **3 Screening Questions:** Each tests a specific skill. No generic questions. Each question states what skill it tests and what a strong answer looks like.
- **1 Paid Test Task:** 2-4 hours of real, representative work. Describes the task, the deliverable, the time estimate, and the payment. The task must be something the founder can evaluate without expertise in the hire's domain.
- **2 Red Flags:** Specific warning signs to watch for during interviews that indicate poor fit for an early-stage role (not generic red flags — specific to this role and stage)

Returns: Complete evaluation section for `human-hire-brief.md`

**Wait for both agents. The orchestrator assembles.**

**Write `human-hire-brief.md`:**

```markdown
# Human Hire Brief -- [Role Title] -- [YYYY-MM-DD]

## Why This Hire
[One paragraph: what bottleneck this removes, why now, what changes when this person is in place]

## Role Definition
**Title:** [Role Title]
**Type:** [Full-time / Part-time / Contract / Contract-to-Hire]

### 3 Key Outcomes
1. [Outcome, not activity]
2. [Outcome, not activity]
3. [Outcome, not activity]

### Success Signals
**30 Days:** [What "working" looks like]
**90 Days:** [What "thriving" looks like]

### Skills
**Must-Have:**
- [Specific skill 1]
- [Specific skill 2]
- [Specific skill 3]

**Nice-to-Have:**
- [Bonus skill 1]
- [Bonus skill 2]

### Compensation
[Range + rationale + structure recommendation]

## Evaluation Process

### Screening Questions
1. [Question] -- Tests: [skill]. Strong answer: [what to listen for].
2. [Question] -- Tests: [skill]. Strong answer: [what to listen for].
3. [Question] -- Tests: [skill]. Strong answer: [what to listen for].

### Paid Test Task
**Task:** [Description of real work]
**Deliverable:** [What they hand back]
**Time:** [2-4 hours]
**Pay:** [Amount]
**What you're evaluating:** [What good looks like vs. what bad looks like]

### Red Flags
1. [Specific warning sign for this role]
2. [Specific warning sign for this role]

## Next Step
[Where to post this role / who to send it to / how to start the search this week]
```

---

### AI AGENT HIRE BRANCH

**Spawn 2 agents simultaneously:**

**Agent A -- Agent Scoper**
Context: Founder's bottleneck description + the repeatable work to automate + product context
Task: Define the agent specification:
- **Trigger:** When does the agent run? (Schedule, event, manual invocation)
- **Context Needed:** What files, data, APIs, or information does the agent read as input?
- **Output Format:** What does the agent produce? (File, message, report, action)
- **Quality Bar:** What does "good" look like? Specific, measurable criteria.
- **Human Checkpoint:** When should the agent pause for human review before proceeding?

Returns: Complete agent definition section for `agent-hire-brief.md`

**Agent B -- Agent Evaluator**
Context: Founder's bottleneck description + Agent A's scope (inferred from the same input) + product context
Task: Design the agent testing and validation process:
- **3 Test Prompts:** Each tests a different aspect of the agent's capability. Each prompt includes specific acceptance criteria — what the output must contain and must not contain.
- **Edge Cases to Test:** 2-3 situations where the agent might fail or produce poor output (e.g., missing input data, ambiguous instructions, conflicting sources)
- **Failure Modes to Watch For:** 2-3 ways the agent could silently fail (producing output that looks right but is wrong)

Returns: Complete evaluation section for `agent-hire-brief.md`

**Wait for both agents. The orchestrator assembles.**

**Write `agent-hire-brief.md`:**

```markdown
# AI Agent Hire Brief -- [Agent Name] -- [YYYY-MM-DD]

## Why This Agent
[One paragraph: what bottleneck this removes, why an agent and not a human, what changes when this is running]

## Agent Definition
**Name:** [Descriptive agent name]
**Trigger:** [When it runs]
**Context Needed:**
- [Input 1: file / data source / API]
- [Input 2: file / data source / API]

**Output:** [What it produces + format + where it goes]

**Quality Bar:**
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

**Human Checkpoint:** [When to review before the agent acts]

## System Prompt Scaffold

```
You are [Agent Name]. Your job is to [core task].

**Input:** You will receive [description of input].
**Output:** Produce [description of output format].

**Rules:**
- [Rule 1: quality constraint]
- [Rule 2: quality constraint]
- [Rule 3: boundary / what NOT to do]
```

## Test Prompts

### Test 1 -- [What this tests]
**Prompt:** [The test input]
**Acceptance Criteria:**
- [What the output must contain]
- [What the output must NOT contain]

### Test 2 -- [What this tests]
**Prompt:** [The test input]
**Acceptance Criteria:**
- [What the output must contain]
- [What the output must NOT contain]

### Test 3 -- [What this tests]
**Prompt:** [The test input]
**Acceptance Criteria:**
- [What the output must contain]
- [What the output must NOT contain]

## Edge Cases
1. [Situation where the agent might fail + how to handle it]
2. [Situation where the agent might fail + how to handle it]

## Failure Modes
1. [Way the agent could silently fail + how to detect it]
2. [Way the agent could silently fail + how to detect it]

## Integration Checklist
- [ ] Input data sources accessible and in expected format
- [ ] Output destination exists and agent has write access
- [ ] Trigger mechanism configured (cron / webhook / manual)
- [ ] Human checkpoint notification set up (Slack / email / other)
- [ ] All 3 test prompts pass acceptance criteria
- [ ] Edge cases tested and handled gracefully
- [ ] Founder has reviewed first 3 real outputs before going hands-off
```

---

## Expert Judgment

The classification step is the highest-leverage decision in this skill. Two common mistakes:

1. **Defaulting to human when an agent would do.** Founders often assume they need a person because "it requires judgment." But many judgment-heavy tasks are actually pattern-matching on well-defined criteria — exactly what an agent does well. Ask: "Could I write down the rules for how I make this decision?" If yes, an agent can likely do it.

2. **Defaulting to agent when a human is needed.** Relational work — building trust, reading social cues, navigating ambiguity in conversations — is where humans still dominate. If the work requires adapting to another person's emotional state in real time, hire a human.

The technical/build category requires the most nuance. A human engineer is needed when the work involves architectural decisions, ambiguous requirements, or cross-system judgment calls. An AI agent is effective when the work is well-scoped: "write tests for this module," "refactor this file to match this pattern," "generate API documentation from this codebase."

---

## Sequential Fallback (Codex / OpenCode)

If your agent doesn't support parallel subagents, run the steps in sequence:

1. Ask the classification question and categorize the answer
2. Branch to human or agent path
3. Run Role Definer / Agent Scoper first
4. Run Evaluation Designer / Agent Evaluator second
5. Assemble into `human-hire-brief.md` or `agent-hire-brief.md`

Same output. Roughly 2x longer since the two branch agents run sequentially instead of in parallel.

---

## Worked Example

### Example 1: Human Hire -- Community Manager

**Founder:** Runs a developer tools startup. Has 200 users on a Discord server. Spends 8 hours/week answering questions, moderating, and trying to spark discussions. Says: "I'm spending all my time on community instead of building the product."

**Classification:** Creative/relational (community building, relationship management, reading social dynamics) -- **human hire.**

**Agent A (Role Definer) produces:**
> **Title:** Developer Community Manager (Part-time, 20 hrs/week)
> **3 Key Outcomes:** (1) Discord response time under 4 hours during business hours. (2) 2 community-led discussions per week without founder initiation. (3) Monthly community health report: active members, top questions, feature requests surfaced.
> **30-Day Signal:** Founder spends less than 1 hour/week on Discord. Members tag the community manager, not the founder.
> **90-Day Signal:** Community has grown to 400+ members. 3 user-generated guides or tutorials exist. Community manager has identified 2 potential beta testers or champions.
> **Must-Have:** Has managed a developer Discord (100+ members). Can write technically accurate responses. Comfortable working async.
> **Nice-to-Have:** Has contributed to open source. Familiar with the founder's tech stack.
> **Compensation:** $25-35/hr for part-time contract. Transition to full-time at $55-70K if community becomes a core growth channel.

**Agent B (Evaluation Designer) produces:**
> **Q1:** "A user posts a frustrated message saying the API documentation is wrong and they've wasted 2 hours. How do you respond?" -- Tests: empathy + technical communication. Strong answer: acknowledges frustration first, asks for the specific doc page, offers to walk through it, flags the doc issue internally.
> **Q2:** "Our Discord has been quiet for 3 days. What do you do?" -- Tests: proactive community building. Strong answer: doesn't just post a generic prompt. Identifies a recent product update, user question, or industry event to spark a real discussion.
> **Q3:** "A user asks a question you don't know the answer to. Walk me through your process." -- Tests: resourcefulness + knowing limits. Strong answer: says they'd check docs first, try to reproduce, then escalate to the founder with context — not guess.
> **Paid Test Task:** Moderate our Discord for 5 days. Post 3 discussion starters. At the end, write a one-page report: top themes, member sentiment, and one recommendation for improving engagement. (Est. 3-4 hours over the week, $100.)
> **Red Flags:** (1) Responds to the test task with generic community management advice instead of specific observations about THIS community. (2) Takes more than 24 hours to respond to messages during the test period without communicating availability.

---

### Example 2: AI Agent Hire -- Research Digest Agent

**Founder:** Runs a B2B SaaS in the logistics space. Spends 5 hours/week reading industry news, competitor blogs, and regulatory updates to stay informed. Says: "I need to keep up with the market but I'm reading 30 tabs every morning instead of talking to customers."

**Classification:** Systematic/repeatable (research, filtering, summarizing from known sources) -- **AI agent.**

**Agent A (Agent Scoper) produces:**
> **Trigger:** Runs every Monday and Thursday at 6am.
> **Context Needed:** (1) List of 12 competitor blog URLs. (2) 5 industry keywords to monitor on Hacker News and Reddit. (3) 3 regulatory body RSS feeds. (4) Founder's `watch-list.md` with current strategic questions.
> **Output:** `research-digest-[date].md` — 5-7 bullets, each with: what happened, why it matters to us, source link. Saved to `/reports/` folder.
> **Quality Bar:** Every bullet cites a primary source. No bullet older than 7 days. "Why it matters" must reference the founder's product or market, not generic commentary. Entire digest readable in under 3 minutes.
> **Human Checkpoint:** Founder reviews the first 5 digests before the agent runs unsupervised. After that, founder flags any bullet that was irrelevant or missed something important, and the agent's watch-list is updated.

**Agent B (Agent Evaluator) produces:**
> **Test 1 -- Core summarization:** Feed the agent 10 real articles from last week. Acceptance: produces exactly 5-7 bullets. Each has a source link. Each "why it matters" references logistics SaaS specifically.
> **Test 2 -- Signal vs. noise:** Feed the agent 10 articles, 4 of which are irrelevant (general tech news, unrelated industries). Acceptance: irrelevant articles do not appear in the digest. Agent does not pad output to fill 5 bullets if only 3 are relevant.
> **Test 3 -- Sparse input:** Feed the agent a week with very little news (2 minor articles). Acceptance: agent produces a short digest (2-3 bullets) and does not hallucinate or inflate minor news into major developments.
> **Edge Cases:** (1) A competitor blog goes down or changes URL format -- agent should flag the broken source, not silently skip it. (2) A regulatory update is ambiguous or draft-stage -- agent should note the uncertainty, not present it as final.
> **Failure Modes:** (1) Agent produces plausible-sounding summaries of articles it didn't actually read (hallucination). Detect by spot-checking 2 source links per digest for the first month. (2) Agent anchors on the same 2-3 sources and ignores the rest of the watch list. Detect by tracking source diversity across 10 digests.

---

## Related Skills

- Use **assumption-mapper** before this -- validates whether the bottleneck you're hiring for is real
- Use **mvp-scoper** before this -- a scoped MVP clarifies what work exists to delegate
- Use **founder-partner** after this -- to pressure-test the hire brief and identify blind spots
- Use **build-cycle** after onboarding -- the new hire or agent fits into your build rhythm
