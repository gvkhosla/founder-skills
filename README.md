# Founder Skills OS

**A truth-first startup operator for your coding agent.**

Founder Skills helps your agent read company context, separate evidence from optimism, name the current bottleneck, and give you one useful next move.

<p>
  <a href="https://fskills.xyz">Website</a> ·
  <a href="docs/founder-partner-manifesto.md">Manifesto</a> ·
  <a href="CHANGELOG.md">Changelog</a>
</p>

---

## Start in 60 seconds

Install for your agent:

```bash
# Codex, invokable as $founder-partner after restart
npx --yes github:gvkhosla/founder-skills install --agent codex

# pi
npx --yes github:gvkhosla/founder-skills install --agent pi

# Claude Code, project-scoped
npx --yes github:gvkhosla/founder-skills install --agent claude --scope project
```

Seed memory in a startup repo:

```bash
npx --yes github:gvkhosla/founder-skills init --project . --company "Acme"
npx --yes github:gvkhosla/founder-skills doctor --project .
```

Then run the front-door skill:

```text
$founder-partner
```

Or ask:

```text
Use founder-partner and be brutally honest with me.
```

---

## What you get

Founder Skills is **human-first in chat**:

- a short bottom line
- one recommended move
- up to three concrete steps
- saved `.md` artifacts for agent memory and follow-up work

The files are useful, but they should not be required reading before you can act.

## 60-second example

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

## Core commands

```bash
founder-skills install --agent codex   # install skills
founder-skills init --project .        # seed company memory
founder-skills doctor --agent codex    # verify install
founder-skills list                    # list available skills
```

Advanced OS commands from a cloned repo:

```bash
npm run os:gen:all
npm run os:init -- --project /path/to/startup --stage building
npm run os:install -- --host opencode --project /path/to/startup
npm run os:doctor -- --host opencode --project /path/to/startup
npm test
```

## Included workflows

Founder Skills includes 29 canonical skills across:

- **Partner** — `founder-partner`
- **Strategy** — problem validation, customer hypothesis, MVP scope, assumptions
- **Engineering + Product** — implementation planning, architecture, QA, release readiness
- **Launch** — positioning, landing page copy, pricing, launch plans
- **Marketing + Sales** — messaging, SEO/GEO, CAC, pipeline review
- **PMF** — PMF signal, north star, churn, retention, growth loops
- **Operations** — focus, experiments, weekly review
- **Support + Scale** — support insights, first hire briefs

It also includes lifecycle sequences for validation, build, launch, GTM, PMF recovery, and weekly operating rhythm.

## Core idea

> **Tell the founder the truth before the market does.**

That means:

- read company memory first
- separate what is known, believed, and hoped
- route into validation before build when evidence is weak
- leave behind one artifact and one next move

## Docs

- [Docs index](docs/README.md)
- [Founder Partner manifesto](docs/founder-partner-manifesto.md)
- [OS install/export flows](docs/founder-skills-os-install-export-flows.md)
- [Legacy compatibility layer](legacy/README.md)
- [Changelog](CHANGELOG.md)

## Development

```bash
npm install
npm run os:gen:all
npm test
```

## License

MIT
