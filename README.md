<p align="center">
  <img src="site/assets/hero-invader.png" alt="Founder Skills invader" width="720" />
</p>

<p align="center">
  <a href="https://fskills.xyz">fskills.xyz</a>
</p>

# Founder Skills OS

**Turn your agent into a brutally honest co-founder.**

Founder Skills transforms your agent into a co-founder with product taste, validation rigor, and a growth mindset - to get you from idea to PMF and beyond.

Instead of only helping you ship code faster, it helps you answer the harder founder questions:
- is this problem real?
- who is the exact customer?
- should we validate, narrow, build, launch, or stop?
- what artifact do we need next?
- what is the one move that matters now?

Site: **https://fskills.xyz**

## Why it works

Founder Skills is built around a simple thesis:

> **Tell the founder the truth before the market does.**

That shows up in the product in five ways:
- **reads company memory first** — `.fs/` state, `founder-context.md`, `truth-memo.md`, `recommended-next-step.md`, and recent artifacts
- **separates what you know, think, and hope** — so strategy does not get smuggled through as confidence
- **routes into validation before build** — when the evidence is weak
- **writes concrete artifacts** — not vague advice or brainstorming sludge
- **ends with one next move** — not ten equally-weighted suggestions

## What ships today

Founder Skills currently has two layers:

### 1. Founder Skills OS beta
The new source-driven system for coding and chat hosts.

- **29 canonical skills**
- **10 operating areas**
- **6 lifecycle sequences**
- **stateful workspace memory** in `.fs/`
- **recommendation routing** that maps bottlenecks to the right skill or sequence
- **generated host bundles** for `pi`, `Claude Code`, `Codex`, `OpenCode`, `OpenClaw`, `Hermes`, `ChatGPT`, and `Claude`

### 2. Legacy pack
The published `npx founder-skills install ...` pack remains available and still ships the original 27-skill system.

---

## Fastest way to try it

If you want the quickest path, use the published package:

```bash
npx founder-skills install --agent pi
```

Then start with:

```text
Be brutally honest with me.
```

If the bottleneck is unclear, always start with **`founder-partner`**.

### Install by agent

Run the OS commands from this repo.

```bash
# pi
npx founder-skills install --agent pi

# Claude Code
npx founder-skills install --agent claude --scope project

# Codex
npx founder-skills install --agent codex --out ./AGENTS.founder-skills.md

# OpenCode
npm run os:install -- --host opencode --project /path/to/startup

# OpenClaw
npm run os:install -- --host openclaw --project /path/to/startup

# Hermes
npm run os:install -- --host hermes --project /path/to/startup
```

---

## Founder Skills OS beta quickstart

Use the OS if you want stateful company memory, active sequences, install/export flows, and a richer operating model.

```bash
npm install
npm run os:doctor
npm run os:gen:all

# bootstrap company memory inside your startup repo
npm run os:init -- --project /path/to/startup --stage building --sequence validate-to-build

# ask the router what matters next
npm run os:recommend -- --project /path/to/startup

# start or sync lifecycle sequences
npm run os:sequence -- start --name gtm-engine --project /path/to/startup
npm run os:sequence -- sync --project /path/to/startup

# install host bundles
npm run os:install -- --host pi
npm run os:install -- --host claude-code --scope project
npm run os:install -- --host codex
npm run os:install -- --host opencode
npm run os:install -- --host openclaw
npm run os:install -- --host hermes
```

## The operating model

A strong Founder Skills session should do four things:

1. **Read the state first**
   - `.fs/company-state.json`
   - `.fs/artifact-index.json`
   - `.fs/sequence-state.json`
   - `.fs/weekly-review.json`
   - `founder-context.md`
   - `truth-memo.md`
   - `recommended-next-step.md`

2. **Name the bottleneck clearly**
   - problem clarity
   - customer clarity
   - build confidence
   - launch readiness
   - PMF uncertainty
   - GTM weakness
   - founder focus
   - etc.

3. **Write the artifact**
   Examples: `truth-memo.md`, `mvp-brief.md`, `implementation-plan.md`, `landing-page-copy.md`, `pmf-assessment.md`.

4. **Call the next move**
   The output should narrow the company toward one next skill, one next sequence, or one real-world action.

---

## Operating areas

The canonical OS skills are organized around ten operating areas.

| Area | What it handles | Canonical skills |
|---|---|---|
| **Partner** | routing, hard truth, founder focus | `founder-partner` |
| **Strategy** | problem, customer, scope, assumptions | `problem-validator`, `customer-hypothesis`, `mvp-scoper`, `assumption-mapper` |
| **Engineering + Product** | implementation planning, architecture, design-to-code, QA, release, post-ship review | `implementation-planner`, `architecture-reviewer`, `design-to-code-brief`, `qa-verifier`, `release-readiness-auditor`, `post-ship-review` |
| **Launch** | positioning, landing pages, launch plans, pricing | `positioning-writer`, `landing-page-copywriter`, `launch-plan-builder`, `pricing-model-framer` |
| **Marketing** | messaging systems, SEO/GEO, CAC diagnosis | `messaging-architect`, `seo-geo-strategist`, `cac-diagnostician` |
| **Sales** | pipeline quality and sales motion | `pipeline-reviewer` |
| **PMF** | PMF signal, north star, churn, retention, growth loops | `pmf-signal-reader`, `north-star-definer`, `churn-diagnostician`, `retention-loop-designer`, `growth-loop-builder` |
| **Operations** | founder focus, experiments, weekly review cadence | `focus-planner`, `experiment-planner`, `weekly-founder-review` |
| **Support** | support signal into product decisions | `support-insights-reader` |
| **Scale** | first human or AI hire | `first-hire-brief` |

## Lifecycle sequences

Founder Skills OS also ships reusable sequences for common company transitions.

| Sequence | When to use it | Primary outputs |
|---|---|---|
| `validate-to-build` | when the founder needs to earn the right to build | `problem-validation-report.md`, `customer-profile.md`, `mvp-brief.md`, `implementation-plan.md`, `architecture-overview.md`, `release-readiness.md` |
| `build-to-release` | when the product is being built and needs stronger ship discipline | `implementation-plan.md`, `architecture-overview.md`, `design-build-brief.md`, `qa-report.md`, `release-readiness.md` |
| `build-to-launch` | when build and launch assets need to converge | `implementation-plan.md`, `architecture-overview.md`, `design-build-brief.md`, `qa-report.md`, `release-readiness.md`, `positioning.md`, `pricing-model.md`, `landing-page-copy.md`, `launch-plan.md` |
| `gtm-engine` | when message, pipeline, SEO, and CAC need to work as one system | `customer-profile.md`, `positioning.md`, `messaging-architecture.md`, `pricing-model.md`, `landing-page-copy.md`, `pipeline-review.md`, `seo-geo-plan.md`, `cac-diagnosis.md` |
| `pmf-recovery` | when activation, retention, churn, and PMF signals are weak | `north-star.md`, `pmf-assessment.md`, `support-insights.md`, `churn-diagnosis.md`, `retention-loop.md`, `growth-loop.md`, `experiment-plan.md`, `weekly-review.md` |
| `weekly-operating-rhythm` | when the founder needs a tighter weekly cadence | `weekly-review.md`, `focus-plan.md`, `experiment-plan.md` |

---

## Workspace memory

Founder Skills OS bootstraps a founder-readable operating layer inside the startup repo.

```text
.fs/
├─ company-state.json
├─ artifact-index.json
├─ sequence-state.json
└─ weekly-review.json

founder-context.md
truth-memo.md
recommended-next-step.md
```

This is what lets the system feel less like one-off prompting and more like an operating system.

## Install and export targets

Default OS export targets:

- `pi` → `~/.pi/agent/skills/founder-skills-os/`
- `Claude Code` → `.claude/skills/founder-skills-os/` or `~/.claude/skills/founder-skills-os/`
- `Codex` → `.codex/founder-skills-os/` + managed `AGENTS.md` section
- `OpenCode` → `.opencode/founder-skills-os/` + managed `AGENTS.md` section
- `OpenClaw` → `.openclaw/founder-skills-os/` + managed `AGENTS.md` section
- `Hermes` → `~/.hermes/skills/founder-skills-os/`

See [docs/founder-skills-os-install-export-flows.md](docs/founder-skills-os-install-export-flows.md) for the full matrix.

---

## Legacy package install

The published package still supports the original install flow:

```bash
# Install all skills for pi
npx founder-skills install --agent pi

# Install Claude globally
npx founder-skills install --agent claude

# Install Claude into the current project
npx founder-skills install --agent claude --scope project

# Generate a Codex agents file in the current directory
npx founder-skills install --agent codex --out ./AGENTS.founder-skills.md

# Install a single legacy phase
npx founder-skills install --agent pi --phase strategy
npx founder-skills install --agent claude --phase pmf
```

Optional legacy clone path:

```bash
git clone https://github.com/gvkhosla/founder-skills.git
cd founder-skills
bash scripts/install.sh pi
```

## Multi-agent behavior

Some workflows are deliberately parallelizable.

- pi and Claude-style coding agents can split independent workstreams
- Codex-compatible flows can run the same logic sequentially
- every strong skill still ends in a concrete artifact, not just parallel chatter

See [docs/MULTI-AGENT.md](docs/MULTI-AGENT.md).

## Philosophy

- **truth first** — say the uncomfortable thing early
- **artifacts over advice** — every serious workflow leaves behind something reusable
- **validation before build** — earn the right to execute
- **one move over many** — clarity beats option overload
- **company memory over one-off chat** — context compounds

Read more in [docs/PHILOSOPHY.md](docs/PHILOSOPHY.md) and [docs/founder-partner-manifesto.md](docs/founder-partner-manifesto.md).

## Documentation

- [Founder Partner manifesto](docs/founder-partner-manifesto.md)
- [Homepage positioning](docs/homepage-positioning.md)
- [OS install/export flows](docs/founder-skills-os-install-export-flows.md)
- [OS repo architecture](docs/founder-skills-os-repo-architecture.md)
- [OS host adapter contract](docs/founder-skills-os-host-adapter-contract.md)
- [OS coding-host priority](docs/founder-skills-os-coding-host-priority.md)
- [AUTHORING.md](docs/AUTHORING.md)
- [COMPATIBILITY.md](docs/COMPATIBILITY.md)
- [MULTI-AGENT.md](docs/MULTI-AGENT.md)

## Contributing

Read [docs/AUTHORING.md](docs/AUTHORING.md) first.

Before opening a PR:

```bash
npm run check
npm run os:typecheck
npm run os:test
```

## License

MIT
