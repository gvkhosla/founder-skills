# Founder Skills OS — Host Adapter Contract

This document defines the **host adapter contract** for Founder Skills OS.

The goal is simple:

> Founder Skills OS must be **agent-agnostic at the core** and **host-specific at the delivery layer**.

This is how Founder Skills can take the best operational ideas from gstack without becoming locked to Claude Code or any single runtime.

It must work well for:
- **coding-agent hosts**: pi, Claude Code, Codex, OpenCode, Cursor, OpenClaw, Hermes
- **chat hosts**: ChatGPT, Claude chat
- **future hosts** with different capability shapes

---

# 1. Design goals

## Goal A — one canonical source
All skill logic, sequences, artifacts, state schemas, and evaluation rules live in canonical source.

Adapters only:
- transform
- package
- expose
- optimize

They do **not** redefine business logic.

## Goal B — capability-aware output
Different hosts support different things:
- native skill folders
- slash commands
- system prompts
- project instructions
- AGENTS/CLAUDE files
- tools
- browser integration
- file mutation
- memory

Adapters must shape the output to match the host.

## Goal C — founder experience stays consistent
Even when the delivery surface changes, the founder should still get:
- the same company-state awareness
- the same artifact contracts
- the same workflow logic
- the same readiness gates
- the same next-step guidance

## Goal D — coding hosts and chat hosts are both first-class
ChatGPT and Claude chat should not be an afterthought.

They need real outputs such as:
- system prompt bundles
- conversation starters
- structured “paste this into chat” workflows
- artifact-aware weekly review prompts
- sequence-specific operating prompts

---

# 2. Host taxonomy

## Class 1 — Coding-agent hosts
These can usually read skill files or obey structured instructions tied to a repo.

Examples:
- pi
- Claude Code
- Codex
- OpenCode
- Cursor
- OpenClaw
- Hermes

### Typical strengths
- file read/write/edit support
- command execution
- repo context
- repeatable project instructions
- slash-command or skill-style workflows

### Typical outputs to generate
- `SKILL.md`
- `AGENTS.md` sections
- `CLAUDE.md` sections
- project instructions
- sequence runners
- host-specific install docs

---

## Class 2 — Conversational hosts
These are chat-native experiences without a standard local skill-folder runtime.

Examples:
- ChatGPT
- Claude chat

### Typical strengths
- fast conversations
- system prompts / project instructions
- persistent chat threads or projects
- easy founder accessibility

### Typical limitations
- may not have native skill files
- may not have direct filesystem control
- may not have repo-local installation
- may rely on user copy/paste workflows

### Typical outputs to generate
- `system-prompt.md`
- `conversation-starter.md`
- `project-instructions.md`
- `sequence-starter.md`
- `workspace/how-to-use.md`

---

# 3. Core adapter interface

All adapters should implement a common contract.

## TypeScript shape

```ts
export type HostClass = "coding-agent" | "chat" | "generic";

export interface HostCapabilities {
  nativeSkills: boolean;
  slashCommands: boolean;
  systemPrompt: boolean;
  projectInstructions: boolean;
  repoAware: boolean;
  canReadFiles: boolean;
  canWriteFiles: boolean;
  canRunCommands: boolean;
  canUseBrowser: boolean;
  supportsSequences: boolean;
  supportsStateInjection: boolean;
}

export interface GeneratedArtifact {
  path: string;
  kind:
    | "skill"
    | "system-prompt"
    | "conversation-starter"
    | "project-instructions"
    | "sequence-bundle"
    | "install-doc"
    | "workspace-doc";
  content: string;
}

export interface HostAdapter {
  id: string;
  displayName: string;
  hostClass: HostClass;
  capabilities: HostCapabilities;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[];
  generateSequence(input: CanonicalSequence): GeneratedArtifact[];
  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[];
  generateInstallDocs(input: InstallBundle): GeneratedArtifact[];

  validate(output: GeneratedArtifact[]): HostValidationResult;
}
```

---

# 4. Canonical input types

Host adapters consume canonical objects from the core system.

## `CanonicalSkill`

```ts
interface CanonicalSkill {
  name: string;
  domain: string;
  description: string;
  invocations: string[];
  outputs: string[];
  dependsOn: string[];
  feedsInto: string[];
  prompt: string;
  reference?: string;
  checks: string[];
  readinessGate?: string;
  supportedHosts?: string[];
}
```

## `CanonicalSequence`

```ts
interface CanonicalSequence {
  name: string;
  description: string;
  entrypoint: string;
  steps: string[];
  primaryOutputs: string[];
  successSignal: string[];
  prompt: string;
}
```

## `WorkspaceBundle`

```ts
interface WorkspaceBundle {
  companyStateSchema: object;
  artifactGraphSchema: object;
  starterFiles: Array<{ path: string; content: string }>;
  recommendedInstructions: string;
}
```

These are the real source of truth.

---

# 5. Capability matrix

| Host | Class | Native skills | Slash commands | System prompt | Project instructions | Repo-aware | File ops | Commands | Browser |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| pi | coding-agent | yes | yes | yes | yes | yes | yes | yes | optional |
| Claude Code | coding-agent | yes | yes | yes | yes | yes | yes | yes | optional |
| Codex | coding-agent | yes / partial | maybe | yes | yes | yes | yes | yes | limited / external |
| OpenCode | coding-agent | yes / partial | maybe | yes | yes | yes | yes | yes | limited |
| Cursor | coding-agent | partial | no | yes | yes | yes | yes | limited | limited |
| OpenClaw | coding-agent | indirect | task-based | yes | yes | yes | depends | depends | optional |
| Hermes | coding-agent | yes | yes | yes | yes | yes | yes | yes | limited / external |
| ChatGPT | chat | no | no | yes | yes | partial | limited | limited | limited |
| Claude chat | chat | no | no | yes | yes | partial | limited | limited | limited |

**Rule:** adapter output should degrade gracefully based on capabilities.

---

# 6. Output rules by host class

## For coding-agent hosts
Generate:
- host-native skills
- sequence bundles
- project instructions
- install docs
- optional routing sections

### Example outputs
```text
generated/pi/engineering-product/implementation-planner/SKILL.md
generated/claude-code/partner/founder-partner/SKILL.md
generated/codex/AGENTS.section.md
generated/opencode/project-instructions.md
```

## For chat hosts
Generate:
- system prompts
- conversation starters
- workspace instructions
- copy/paste sequence prompts
- artifact-aware operating prompts

### Example outputs
```text
generated/chatgpt/bundles/validate-to-build/system-prompt.md
generated/chatgpt/skills/sales/pipeline-review/conversation-starter.md
generated/claude-chat/bundles/weekly-operating-rhythm/system-prompt.md
generated/claude-chat/workspace/how-to-use.md
```

## For generic hosts
Generate:
- fallback prompt packs
- host-agnostic docs
- project instructions

---

# 7. Adapter-specific contracts

## 7.1 pi adapter

## Why pi matters
pi is already aligned with:
- skills
- prompts
- packages
- agentic workflows

## Expected outputs
```text
generated/pi/[domain]/[skill-name]/SKILL.md
generated/pi/sequences/[sequence-name].md
generated/pi/install.md
```

## Contract
- generate compact `SKILL.md` files
- preserve dependency and output declarations
- include references to company-state and artifact graph files
- support project-local installation where possible
- generate one pi-specific install doc

## Value add over gstack-style approach
- keep it founder-readable
- attach every build skill to company goals and stage
- include GTM / sales / PMF / ops domains, not just coding

---

## 7.2 Claude Code adapter

## Why it matters
Claude Code is where gstack is strongest, so this adapter must be excellent.

## Expected outputs
```text
generated/claude-code/[domain]/[skill-name]/SKILL.md
generated/claude-code/CLAUDE.section.md
generated/claude-code/sequences/[sequence-name].md
generated/claude-code/install.md
```

## Contract
- generate native skills with strong project-context assumptions
- emit `CLAUDE.section.md` routing guidance
- support engineering-product workflows especially well
- include founder-partner routing logic
- keep build workflows tied to launch / PMF / customer context

## Improvement over gstack
- do not stop at software delivery
- build, sell, market, support, and operate in the same system
- keep founder-level architecture above the coding workflows

---

## 7.3 Codex adapter

## Expected outputs
```text
generated/codex/[domain]/[skill-name]/SKILL.md
generated/codex/AGENTS.section.md
generated/codex/sequences/[sequence-name].md
```

## Contract
- support sequential fallback for anything parallelized
- optimize instructions for AGENTS-style integration
- generate compact, explicit artifact-first instructions
- include engineering-product and GTM workflows equally

## Critical rule
Codex output must never assume Claude-specific runtime behavior.

---

## 7.4 OpenCode adapter

## Expected outputs
```text
generated/opencode/[domain]/[skill-name]/SKILL.md
generated/opencode/project-instructions.md
generated/opencode/sequences/[sequence-name].md
```

## Contract
- emit OpenCode-friendly skill/instruction bundles
- keep workflows explicit and deterministic
- include sequence guidance and artifact expectations

---

## 7.5 Hermes adapter

## Expected outputs
```text
generated/hermes/[domain]/[skill-name]/SKILL.md
generated/hermes/install.md
generated/hermes/workspace/project-instructions.md
```

## Contract
- generate native `SKILL.md` outputs aligned with Hermes skill discovery
- target `~/.hermes/skills/` as the canonical install surface
- support slash-command style invocation where Hermes exposes skills in chat
- keep founder-partner and engineering-product workflows available first-class
- preserve artifact-first behavior and sequence continuation

## Why Hermes matters
Hermes gives Founder Skills OS another serious coding-agent surface with native skill support and tool-calling behavior. It should be treated as a first-class host, not a generic fallback.

---

## 7.6 ChatGPT adapter

## Expected outputs
```text
generated/chatgpt/bundles/founder-intake/system-prompt.md
generated/chatgpt/bundles/validate-to-build/system-prompt.md
generated/chatgpt/skills/pmf/pmf-signal-reader/conversation-starter.md
generated/chatgpt/workspace/how-to-use.md
```

## Contract
- no dependence on skill folders
- generate **copy-pasteable prompt bundles**
- generate a “how to run this in ChatGPT Projects” guide
- produce sequence-specific conversation starters
- explain where artifacts should be pasted or stored
- support weekly founder operating rhythm in a chat-native way

## Why this matters
Many founders will live in ChatGPT first. If Founder Skills OS works beautifully there, adoption expands dramatically.

---

## 7.7 Claude chat adapter

## Expected outputs
```text
generated/claude-chat/bundles/build-to-launch/system-prompt.md
generated/claude-chat/skills/sales/pipeline-review/conversation-starter.md
generated/claude-chat/workspace/how-to-use.md
```

## Contract
- generate Claude-chat-specific prompt bundles
- emphasize longer-form, context-rich reasoning
- support artifact-aware workflows without assuming native skills
- provide project instructions for Claude Projects or equivalent workflows

---

# 8. Prompt bundle contract for chat hosts

This is one of the most important improvements.

## `system-prompt.md`
Should include:
- role definition
- outputs expected
- files/artifacts to read if available
- questions to ask when state is missing
- formatting rules
- next-step recommendation rule

## `conversation-starter.md`
Should include:
- what to paste into chat to start the workflow
- what context/files to attach
- what artifact to ask for
- what to do after the result is produced

## `workspace/how-to-use.md`
Should include:
- how founders use the system in this host
- how to store artifacts
- how to move between sequences
- how to update weekly state

This is how chat hosts become first-class instead of degraded fallback modes.

---

# 9. Sequence generation contract

Every host adapter must be able to turn a canonical sequence into a host-native workflow.

## For coding-agent hosts
Generate:
- a sequence file or section
- ordered steps
- artifact handoffs
- fallback instructions for unsupported parallelism

## For chat hosts
Generate:
- a single sequence prompt bundle
- optional follow-up prompts per step
- artifact checklist
- next-step continuation prompt

## Example
Canonical sequence: `validate-to-build`

### Claude Code output
- `SKILL.md` sequence instructions
- `CLAUDE.section.md` route hint

### ChatGPT output
- “Paste this into a Project” system prompt
- “Start with this message” conversation starter
- “After you get `mvp-brief.md`, paste this next” continuation prompt

This is a massive adoption unlock.

---

# 10. Workspace contract

Each adapter should also be able to generate a startup workspace bundle.

## Coding-agent hosts
May generate:
- `.fs/` state files
- host instructions
- skill install docs
- starter artifact folders

## Chat hosts
May generate:
- `how-to-use.md`
- `artifact-index-template.md`
- `weekly-review-template.md`
- prompt bundles

## Shared requirement
Every workspace bundle must support:
- company state
- artifact storage
- sequence progression
- weekly operating rhythm

---

# 11. Validation contract

Every adapter must validate its own output.

## Required checks
- all required files emitted
- no unsupported host features referenced
- generated output references valid skill/sequence names
- artifact expectations preserved
- host-specific syntax valid where applicable

## Examples

### ChatGPT validation
- no mention of `SKILL.md`
- no slash command assumptions
- includes conversation starter
- includes system prompt

### Claude Code validation
- `SKILL.md` structure valid
- references correct install locations
- no ChatGPT-only terminology

### Codex validation
- sequential fallback present for parallel workflows
- AGENTS content emitted if required

---

# 12. Test contract by host

## Unit tests
- adapter transforms canonical skill correctly
- capability matrix used correctly
- unsupported features omitted cleanly

## Integration tests
- generated host folders complete
- bundle files render correctly
- install docs reference valid paths

## Workflow tests
For every major sequence, test across:
- one coding-agent host
- one chat host

Example:
- `validate-to-build` on pi
- `validate-to-build` on ChatGPT

## Quality tests
Check that generated output still:
- recommends specific actions
- produces explicit artifacts
- preserves state awareness
- remains founder-readable

---

# 13. Massive improvements over gstack enabled by this contract

## Improvement 1 — real agent agnosticism
Not just “supports multiple coding agents.”

This contract supports:
- coding agents
- chat products
- future generic hosts

## Improvement 2 — company-level consistency across hosts
A founder can use:
- ChatGPT during the day
- pi in the terminal
- Claude Code for implementation

…and still stay inside the same system architecture.

## Improvement 3 — build is integrated, not bolted on
Engineering + Product workflows are native citizens of the OS, not sidecars.

## Improvement 4 — better than Claude-only packaging
This contract makes Founder Skills bigger than a single host ecosystem.

## Improvement 5 — the same high-level company architecture everywhere
The host changes, but:
- state model stays the same
- artifact graph stays the same
- sequences stay the same
- founder operating rhythm stays the same

That is the real moat.

---

# 14. Recommended first adapters to ship

## Tier 1
- pi
- Claude Code
- Codex
- OpenCode
- OpenClaw
- Hermes

## Tier 2
- ChatGPT
- Claude chat
- Cursor

## Why this order
Tier 1 covers:
- strong coding-agent workflows
- strong chat-native founder workflows
- broad adoption surface

That gets Founder Skills OS out of the “single-runtime” trap immediately.

---

# 15. Final rule

The adapter layer should always express this idea:

> **Founder Skills OS core decides what the company needs.**
>
> **Host adapters decide how that help is delivered.**

That separation is what lets you:
- steal the best operational ideas from gstack
- avoid Claude Code lock-in
- support both build-heavy and chat-heavy founders
- create much more value for founders everywhere
