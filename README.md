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

Pick your agent, install, then start with `founder-partner`.

```bash
# pi
npx --yes github:gvkhosla/founder-skills install --agent pi

# Codex, invokable as $founder-partner after restart
npx --yes github:gvkhosla/founder-skills install --agent codex

# Claude Code, project-scoped
npx --yes github:gvkhosla/founder-skills install --agent claude --scope project
```

Optional but recommended for startup repos:

```bash
npx --yes github:gvkhosla/founder-skills init --project . --company "Acme"
npx --yes github:gvkhosla/founder-skills doctor --project .
```

Then ask:

```text
Use founder-partner and be brutally honest with me.
```

Founder Skills are **human-first in chat**: you get a short bottom line, one next move, and concrete steps immediately. The `.md` files are durable memory for agents and follow-up work, not required reading before you can act.

## 60-second demo

```text
You: Use founder-partner and be brutally honest with me.

Agent:
## Founder Brief
Bottom line: You are building before the painful customer moment is specific enough. The risk is not engineering speed; it is inventing for a vague user.
Do this now: validate one narrow customer and one urgent workaround before adding features.
1. Name the exact buyer and moment of pain.
2. Talk to 5 people about the current workaround.
3. Only scope the MVP after one repeated painful pattern appears.
Details saved: recommended-next-step.md, truth-memo.md, founder-context.md.
```

## Install matrix

| If you want... | Use this | Verify |
| --- | --- | --- |
| Quick pi skills | `founder-skills install --agent pi` | `founder-skills doctor --agent pi` |
| Codex `$skill-name` invocation | `founder-skills install --agent codex` | `founder-skills doctor --agent codex` |
| Claude Code project skills | `founder-skills install --agent claude --scope project` | `founder-skills doctor --agent claude --scope project` |
| Repo memory files | `founder-skills init --project .` | `founder-skills doctor --project .` |
| OpenCode/OpenClaw/Hermes beta bundles | clone repo, then `npm run os:install -- --host <host> --project /path/to/startup` | `npm run os:doctor -- --host <host> --project /path/to/startup` |

## Founder Skills OS quickstart

```bash
npm install
npm run os:gen:all
npm run os:init -- --project /path/to/startup --stage building --sequence validate-to-build
npm run os:install -- --host opencode --project /path/to/startup
npm run os:doctor -- --host opencode --project /path/to/startup
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
