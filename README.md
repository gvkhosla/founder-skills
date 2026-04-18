<p align="center">
  <img src="site/assets/hero-invader.png" alt="Founder Skills invader" width="720" />
</p>

<p align="center">
  <a href="https://fskills.xyz">fskills.xyz</a>
</p>

# Founder Skills OS

**Turn your agent into a brutally honest co-founder.**

Founder Skills transforms coding agents into founder collaborators with:
- founder workflows
- company memory
- clear next-step routing
- concrete written artifacts

It is built for the moments where the real bottleneck is not code — it is clarity.

## What it does

Founder Skills helps your agent:
- pressure-test the problem and customer
- decide what to validate before building
- scope and sequence build work
- write launch and GTM artifacts
- read PMF signals and route the next move
- keep context in `.fs/`, `founder-context.md`, `truth-memo.md`, and `recommended-next-step.md`

## What ships today

Founder Skills is now organized around **one primary product**:

- **Founder Skills OS** in `source/`, `generated/`, `packages/`, and `scripts/*.ts`
- **29 canonical skills** in `source/skills/`
- **6 lifecycle sequences** in `source/sequences/`
- workspace memory in `.fs/`
- recommendation routing
- multi-host generation and install/export flows

The original 27-skill pack still ships as a **legacy compatibility layer** under `legacy/` so existing install commands keep working.

Quick install still runs directly from GitHub:
```bash
npx --yes github:gvkhosla/founder-skills install --agent pi
```

## Best supported today

Best today on:
- **pi**
- **Claude Code**
- **Codex**

Also available in beta for:
- **OpenCode**
- **OpenClaw**
- **Hermes**

Chat bundles are also generated for:
- **ChatGPT**
- **Claude**

## Fastest way to try it

```bash
npx --yes github:gvkhosla/founder-skills install --agent pi
```

Then start with:

```text
Be brutally honest with me.
```

If the bottleneck is unclear, start with **`founder-partner`**.

## Install by host

### Legacy compatibility install

```bash
# pi
npx --yes github:gvkhosla/founder-skills install --agent pi

# Claude Code
npx --yes github:gvkhosla/founder-skills install --agent claude --scope project

# Codex
npx --yes github:gvkhosla/founder-skills install --agent codex --out ./AGENTS.founder-skills.md
```

Verify:
- pi → `~/.pi/agent/skills/founder-partner/SKILL.md`
- Claude Code → `.claude/skills/founder-partner/SKILL.md`
- Codex → `AGENTS.founder-skills.md`

### Founder Skills OS install

Run these from this repo:

```bash
npm install
npm run os:gen:all

# OpenCode
npm run os:install -- --host opencode --project /path/to/startup

# OpenClaw
npm run os:install -- --host openclaw --project /path/to/startup

# Hermes
npm run os:install -- --host hermes --project /path/to/startup
```

You can also use the OS install flow for pi, Claude Code, and Codex.

Verify OS installs with:
- OpenCode → `.opencode/founder-skills-os/workspace/project-instructions.md`
- OpenClaw → `.openclaw/founder-skills-os/founder-skills-full-CLAUDE.md`
- Hermes → `~/.hermes/skills/founder-skills-os/workspace/project-instructions.md`
- any initialized repo → `npm run os:doctor -- --project /path/to/startup`

## Founder Skills OS quickstart

```bash
npm install
npm run os:gen:all
npm run os:init -- --project /path/to/startup --stage building --sequence validate-to-build
npm run os:recommend -- --project /path/to/startup
```

Useful commands:

```bash
npm run os:sequence -- start --name gtm-engine --project /path/to/startup
npm run os:sequence -- sync --project /path/to/startup
npm run os:install -- --host pi
npm run os:install -- --host claude-code --scope project
npm run os:install -- --host codex
```

## Core idea

Founder Skills is built around a simple rule:

> **Tell the founder the truth before the market does.**

In practice that means:
- read company memory first
- separate what is known, believed, and hoped
- route into validation before build when the evidence is weak
- leave behind one concrete artifact and one next move

## Docs

- [Docs index](docs/README.md)
- [Homepage positioning](docs/homepage-positioning.md)
- [Founder Partner manifesto](docs/founder-partner-manifesto.md)
- [OS install/export flows](docs/founder-skills-os-install-export-flows.md)
- [Legacy compatibility layer](legacy/README.md)

## Development

```bash
npm run os:gen:all
npm test
```

## License

MIT
