# Founder Skills OS — Install and Export Flows

Founder Skills OS now has a concrete install/export layer for the coding-host rebuild.

## Prerequisite

Generate the latest coding-host outputs first:

```bash
npm run os:gen
```

## Supported hosts

- pi
- Claude Code
- Codex
- OpenCode
- OpenClaw
- Hermes

## Main command

```bash
npm run os:install -- --host <host>
```

Examples:

```bash
npm run os:install -- --host pi
npm run os:install -- --host claude-code --scope project
npm run os:install -- --host codex
npm run os:install -- --host opencode
npm run os:install -- --host openclaw
npm run os:install -- --host hermes
npm run os:install -- --host all
```

After install, validate the workspace state and wiring with:

```bash
npm run os:doctor -- --project /path/to/startup
```

---

## Default destinations

### pi
- bundle copied to `~/.pi/agent/skills/founder-skills-os/`
- nested `SKILL.md` folders are discovered recursively by pi

### Claude Code
- project scope: `.claude/skills/founder-skills-os/`
- global scope: `~/.claude/skills/founder-skills-os/`
- project installs also update a managed Founder Skills OS section in `CLAUDE.md`

### Codex
- bundle copied to `.codex/founder-skills-os/`
- project `AGENTS.md` gets a managed Founder Skills OS section

### OpenCode
- bundle copied to `.opencode/founder-skills-os/`
- project `AGENTS.md` gets a managed Founder Skills OS section

### OpenClaw
- bundle copied to `.openclaw/founder-skills-os/`
- project `AGENTS.md` gets a managed Founder Skills OS section referencing:
  - `agents-founder-skills-section.md`
  - `founder-skills-lite-CLAUDE.md`
  - `founder-skills-full-CLAUDE.md`

### Hermes
- bundle copied to `~/.hermes/skills/founder-skills-os/`
- nested `SKILL.md` folders are discovered recursively by Hermes
- verify with `hermes skills list`

---

## Why this matters

This makes the rebuild practical.

Founder Skills OS is no longer just generating files into `generated/`.
It now has a real path to:
- pi skill installation
- Claude Code project wiring
- Codex project wiring
- OpenCode project wiring
- OpenClaw AGENTS/project wiring
- Hermes skill installation

That gives the coding-host strategy a real install surface instead of just scaffolding.
