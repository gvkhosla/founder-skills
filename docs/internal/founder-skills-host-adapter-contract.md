# Founder Skills Host Adapter Contract

Host adapters translate canonical Founder Skills into host-specific bundles without changing the skill logic.

## Host classes

- **coding-agent hosts:** pi, Codex, OpenCode, OpenClaw, Hermes
- **chat hosts:** ChatGPT

## Adapter contract

Every adapter should define:

- `id`
- `displayName`
- `hostClass`
- `capabilities`
- `generateSkill`
- `generateSequence`
- `generateWorkspace`
- `generateInstallDocs`
- `validate`

## Generated layout

```text
generated/<host>/
  <domain>/<skill>/SKILL.md
  sequences/<sequence>.md
  workspace/project-instructions.md
  workspace/starter/...
```

Hosts may adapt the layout when native conventions require it. For example, OpenClaw emits skills under `generated/openclaw/skills/<skill>/SKILL.md` plus helper prompt files.

## Rules

- Canonical source lives in `source/skills` and `source/sequences`.
- Host adapters should not invent product strategy or startup logic.
- Human-first response rules must be included in every generated skill and sequence.
- Project installs should update `AGENTS.md` when that is the host's routing surface.
- Global installs should use the host's native skill discovery path.

## Validation

Run:

```bash
npm run os:gen:all
npm run os:check:generated
npm run os:typecheck
npm test
```
