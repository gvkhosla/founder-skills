# Founder Skills OS

**Compound Engineering for the non-technical work of building a startup.**

Founder Skills gives your agent a repeatable operating loop for the work around the code: finding ideas, validating customers, scoping products, planning launches, reading PMF signals, and deciding what to do next.

Each cycle should make the next cycle easier. A good customer hypothesis sharpens validation. A good validation report sharpens scope. A good scope makes build planning smaller. A good launch review improves the next launch.

<p>
  <a href="https://fskills.xyz">Website</a> ·
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

# OpenCode, project-scoped (from a cloned repo)
npm run os:install -- --host opencode --scope project
```

Seed startup memory in a repo:

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
Use founder-partner to help me decide what to do next.
```

---

## Philosophy

**Each unit of startup work should make subsequent units easier — not noisier.**

Most early-stage work creates scattered notes: customer calls in one place, product ideas in another, launch plans in a thread, PMF signals in someone's head. The next agent or session has to rediscover the context.

Founder Skills inverts that. It turns messy startup work into reusable artifacts:

- customer hypotheses that make validation sharper
- validation reports that make scope smaller
- MVP briefs that make implementation planning easier
- launch plans that make GTM repeatable
- PMF reviews that make the next product decision clearer
- weekly reviews that keep focus from resetting every session

The point is not ceremony. The point is leverage. Your startup memory should compound.

## The loop

The core loop is:

1. **Ideate / choose a direction**
2. **Validate the problem and customer**
3. **Scope the smallest useful product**
4. **Plan the build and launch**
5. **Review signals from users and the market**
6. **Update memory so the next cycle starts smarter**

Founder Skills is especially useful before and around coding, when the important question is not “can we build it?” but “what should we build, for whom, why now, and what would prove it is working?”

## What you get

Founder Skills is **human-first in chat**:

- a short bottom line
- one recommended move
- up to three concrete steps
- saved `.md` artifacts for agent memory and follow-up work

The artifacts are the compounding layer. They let future sessions read what happened instead of starting over.

## 60-second example

```text
You: Use founder-partner to help me decide what to do next.

Agent:
## Founder Brief
Bottom line: The idea is plausible, but the customer and painful moment are still too broad to guide product decisions.
Do this now: turn the idea into a specific customer hypothesis before building.
1. Pick one exact buyer and use case.
2. Write the current workaround and why it is painful.
3. Run problem-validator before scoping the MVP.
Details saved: recommended-next-step.md, truth-memo.md, founder-context.md.
```

## Install matrix

| If you want... | Use this | Verify |
| --- | --- | --- |
| Quick pi skills | `founder-skills install --agent pi` | `founder-skills doctor --agent pi` |
| Codex `$skill-name` invocation | `founder-skills install --agent codex` | `founder-skills doctor --agent codex` |
| Repo memory files | `founder-skills init --project .` | `founder-skills doctor --project .` |
| OpenCode/OpenClaw/Hermes beta bundles | clone repo, then `npm run os:install -- --host <host> --project /path/to/startup` | `npm run os:doctor -- --host <host> --project /path/to/startup` |

## Core commands

```bash
founder-skills install --agent codex   # install skills
founder-skills init --project .        # seed startup memory
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

Founder Skills includes 30 canonical skills across:

- **Partner** — route the next move and compound learnings
- **Strategy** — problem validation, customer hypothesis, MVP scope, assumptions
- **Engineering + Product** — implementation planning, architecture, QA, release readiness
- **Launch** — positioning, landing page copy, pricing, launch plans
- **Marketing + Sales** — messaging, SEO/GEO, CAC, pipeline review
- **PMF** — PMF signal, north star, churn, retention, growth loops
- **Operations** — focus, experiments, weekly review
- **Support + Scale** — support insights, first hire briefs

It also includes lifecycle sequences for validation, build, launch, GTM, PMF recovery, and weekly operating rhythm. Meaningful cycles close with `founder-compound` so learnings become reusable memory.

## Docs

- [Docs index](docs/README.md)
- [Positioning](docs/homepage-positioning.md)
- [Founder Partner details](docs/founder-partner-manifesto.md)
- [Startup loop artifact contract](docs/startup-loop-artifacts.md)
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
