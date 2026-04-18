# How to Write a Founder Skill

> This document describes the archived legacy pack in `legacy/skills/`. For Founder Skills OS work, start in `source/skills/`.

This guide is for anyone contributing a new skill to Founder Skills. Read it completely before writing your first skill.

---

## The Single Most Important Principle

**Skills are not prompts. They are expert co-founders.**

A prompt asks the agent to do something. A skill *embeds expert judgment* so the agent behaves like someone who has seen hundreds of similar situations and knows exactly what to recommend.

The test: if the skill output sounds like something a great founder advisor would say — specific, opinionated, grounded in frameworks — it's a good skill. If it sounds like a generic chatbot asking open-ended questions, it's not.

---

## Skill File Structure

```
legacy/skills/[phase]/[skill-name]/
├── SKILL.md          # Required. The skill itself. Under 350 lines.
└── reference.md      # Optional. Detailed frameworks, long reference lists, examples.
```

**When to add `reference.md`:**
- The skill needs a detailed framework that would make SKILL.md too long
- There's a catalog (e.g., integration options, stack recommendations) better kept separate
- You have 2+ worked examples that would crowd the main file

---

## Frontmatter

Every SKILL.md starts with YAML frontmatter:

```yaml
---
name: skill-name
description: One sentence of what it does. Use when [trigger scenario]. Produces [concrete output].
phase: strategy | design | build | launch | compound | pmf | scale | partner
version: 1.0.0
---
```

**Description rules:**
- Must include a trigger ("Use when...")
- Must name the output ("Produces...")
- Max 200 characters
- Written for founder discovery, not developer discovery

**Good:**
```yaml
description: Defines what's in and out of scope for your MVP. Use when you have a product idea and need to decide what to build first, or when scope is getting unclear. Produces a one-page MVP brief.
```

**Bad:**
```yaml
description: Helps with product scoping decisions.
```

---

## SKILL.md Template

```markdown
---
name: [skill-name]
description: [what it does]. Use when [trigger]. Produces [output].
phase: [strategy|design|build|launch|compound|pmf|partner]
version: 1.0.0
---

# [Skill Name]

## Quick Start

Say: **"[exact phrase to invoke this skill]"**

You'll answer [N] questions. Total time: [X] minutes.

## What You'll Get

A `[output-filename].md` containing [concrete description].

> **Example output excerpt:**
> [2-4 lines of real-sounding output — specific, not generic]

## The Expert Judgment Embedded

[2-3 sentences explaining the framework or mental model this skill applies.
Be specific. Name the framework if it has a name. Explain why most founders
skip this and what goes wrong when they do.]

## The Process

### Step 1: [Name]
[What happens — what questions the agent asks, what it's looking for]

### Step 2: [Name]
[What the agent does with the input — analysis, synthesis, decision-making]

### Step 3: Output
[Exact format: what file is created, what sections it contains]

## Worked Example

**Founder:** [One sentence about who they are, what they're building, what stage they're at]

**They said:** "[Quote or paraphrase of what they invoked the skill with]"

**Output:**
> [Realistic, specific output — 5-15 lines. Must not be generic. Should read
> like it was actually produced for this founder's specific situation.]

## Related Skills

- Use **[skill-name]** before this if you haven't [prerequisite] yet
- Use **[skill-name]** after this to [next natural step]
- Use **founder-partner** anytime to get oriented on where to focus
```

---

## The 7 Laws of Good Skill Writing

### 1. Make a recommendation, don't present options

**Wrong:**
> "You could use React, Vue, or Svelte for your frontend. Each has pros and cons..."

**Right:**
> "For a non-technical founder building your first product, use Next.js. Here's why: [specific reason]. The only reason to deviate is if [specific exception]."

Non-technical founders don't want a menu. They want a decision from someone who knows more than they do.

### 2. Produce a concrete artifact

Every skill must output a file. Not a conversation. Not a list of recommendations in the chat. An actual `[something].md` that the founder can save, share, and act on.

The artifact is what makes the skill valuable across time — it's the output of the session.

### 3. Name what you're applying

If you're using the Eisenhower Matrix, say "Eisenhower Matrix." If you're using Jobs To Be Done, say "Jobs To Be Done." This gives founders language to understand *why* the recommendation makes sense, not just *what* it is.

### 4. Address the thing founders avoid

Every phase has a thing founders systematically avoid. Good skills name it and address it directly.

- Strategy: founders avoid validating that anyone actually cares
- Design: founders avoid testing with real users (not friends)
- Build: founders avoid making hard "no" decisions on scope
- Compound: founders avoid reflecting honestly (they reflect to confirm, not to learn)
- PMF: founders confuse vanity metrics with PMF signals

### 5. Keep it under 350 lines

If SKILL.md exceeds 350 lines, extract the excess into `reference.md` and link to it. Long skills lose the founder's attention and dilute the key points.

### 6. Write the worked example last

The worked example is your quality check. If you can't write a specific, realistic, founder-appropriate example, the skill isn't well-defined enough. Write it last, and if it sounds generic, revise the skill until it doesn't.

### 7. Test it before submitting

Run the skill with a real founder scenario (or roleplay one). The output should:
- Feel like something an expert advisor said, not a chatbot
- Be specific to the founder's situation, not generic
- Produce something actionable in the next 24 hours

---

## Phase-Specific Notes

### Strategy skills
Focus on decisions, not exploration. The founder knows what they want to build — help them stress-test it and scope it. Output should include red flags and explicit "you're not building" statements.

### Design skills
Produce wireframe-ready descriptions or design briefs. Don't stay abstract — name fonts, name color palettes, name interaction patterns. Founders can't act on "clean and modern."

### Build skills
Recommend specific tools by name. "Use Supabase for your database, Clerk for auth, Stripe for payments" beats "choose a database that fits your needs."

### Launch skills
Every output should be something the founder can use directly — copy they can paste, a checklist they can follow, a plan with actual weeks and actions.

### Compound skills
These skills should surface uncomfortable truths. The `build-cycle` skill should ask "what are you avoiding looking at?" The `mpp-evaluator` should give honest scores, not encouraging ones. If a founder's product isn't at MPP, say so — with specifics.

### PMF skills
Be conservative with PMF signals. False positives are more damaging than missing the signal. Teach founders to see what's actually there, not what they want to see.

### Partner skills
The `founder-partner` reads `founder-context.md`. All other partner-adjacent skills should update it. The file is the persistent memory — treat it as sacred.

---

## Submitting a Skill

1. Create the skill directory and files
2. Run through the authoring checklist below
3. Test with 3 real founder scenarios
4. Open a PR with: skill files + 1 paragraph on why this skill was needed

### Authoring Checklist

- [ ] Frontmatter complete (name, description, phase, version)
- [ ] Description includes trigger and output name
- [ ] Quick Start has the exact invocation phrase
- [ ] Skill produces a concrete `[filename].md` artifact
- [ ] Expert judgment section names the framework being applied
- [ ] Worked example is specific (not generic)
- [ ] Skill makes a recommendation, not an option list
- [ ] SKILL.md is under 350 lines
- [ ] Related Skills links are accurate
- [ ] Tested with 3 real founder scenarios
