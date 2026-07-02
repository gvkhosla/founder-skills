# Founder Skills install and export flows

Founder Skills currently supports these generated host bundles:

- pi
- Codex
- OpenCode
- OpenClaw
- Hermes
- ChatGPT prompt bundles

## Generate bundles

```bash
npm run os:gen:all
```

This writes host-specific outputs under `generated/<host>/`. The directory is intentionally gitignored and regenerated during tests and package preparation.

## Install examples

| Flow | Command |
| --- | --- |
| pi global skills | `npm run os:install -- --host pi` |
| Codex global `$skill-name` skills | `npm run os:install -- --host codex` |
| Codex project bundle | `npm run os:install -- --host codex --scope project --project /path/to/startup` |
| OpenCode project bundle | `npm run os:install -- --host opencode --scope project --project /path/to/startup` |
| OpenClaw project bundle | `npm run os:install -- --host openclaw --scope project --project /path/to/startup` |
| Hermes global skills | `npm run os:install -- --host hermes` |

## Host layout

### pi
- global scope: `~/.pi/agent/skills/founder-skills/`
- nested generated skills under `generated/pi/<domain>/<skill>/SKILL.md`

### Codex
- global scope: `~/.codex/skills/<skill-name>/SKILL.md`
- project scope: `.codex/founder-skills/`
- project installs also update an `AGENTS.md` managed section

### OpenCode
- project scope: `.opencode/founder-skills/`
- project installs update an `AGENTS.md` managed section

### OpenClaw
- project scope: `.openclaw/founder-skills/`
- project installs update an `AGENTS.md` managed section
- helper prompt files:
  - `founder-skills-lite.md`
  - `founder-skills-full.md`

### Hermes
- global scope: `~/.hermes/skills/founder-skills/`

### ChatGPT
- generated prompt bundles live under `generated/chatgpt/`
- these are copy/paste or project-instruction assets, not native installed skills

## Workspace memory

Every host bundle includes starter workspace files:

- `.fs/company-state.json`
- `.fs/artifact-index.json`
- `.fs/sequence-state.json`
- `.fs/weekly-review.json`
- `founder-context.md`
- `truth-memo.md`
- `recommended-next-step.md`
- `docs/founder-work/startup-loop.md`

Use:

```bash
npm run os:init -- --project /path/to/startup
npm run os:doctor -- --project /path/to/startup
```

## Validation

```bash
npm run os:gen:all
npm run os:check:generated
npm run os:typecheck
npm test
```
