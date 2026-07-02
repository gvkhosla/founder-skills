# Changelog

## Unreleased

- Rename the front-door skill to `co-founder` across source, generated bundles, docs, tests, install checks, and the website.
- Rename the cycle-closing skill to `compound`.
- Move the public CLI out of `legacy/`, install current generated skills from `setup`, and make validation report canonical source skill counts.
- Mark generated bundles as generated/no-diff review artifacts.

## 0.4.0 — Compound startup loop

- Add `compound` to close startup work cycles and capture reusable learnings.
- Add `docs/founder-work/startup-loop.md` as the cross-skill startup artifact contract.
- Rewrite `co-founder`, `problem-validator`, `customer-hypothesis`, and `mvp-scoper` as more explicit phased workflows.
- Add `compound` as the final step in lifecycle sequences.
- Remove the retired model-specific host adapters, generated bundles, install docs, and public references.

## 0.3.0 — Founder-first install and onboarding

- Make skill responses human-first by default: short chat answer first, detailed markdown as durable agent memory.
- Fix Codex global install so `$co-founder` style invocation works from `~/.codex/skills`.
- Add `founder-skills doctor` for install and workspace checks.
- Add `founder-skills init` to seed `.fs`, `founder-context.md`, `truth-memo.md`, and `recommended-next-step.md` from the public CLI.
- Improve post-install output with exact next prompts and verification commands.
- Add a 60-second demo flow, clearer install matrix, and sharper skill descriptions.
