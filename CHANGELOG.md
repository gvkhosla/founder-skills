# Changelog

## 0.5.0 — Canonical skills and responsive brand refresh

- Rename the front-door skill to `co-founder` and the cycle-closing skill to `compound`.
- Move the public CLI out of `legacy/`; `setup` and `install` now use the 30 canonical generated skills.
- Stop committing generated bundles; they are regenerated during tests and package preparation.
- Make validation report canonical source/generated skill counts.
- Remove the old legacy shell installer and add a packed CLI smoke test in CI.
- Replace heavier system branding with simpler Founder Skills naming.
- Refresh the landing page copy, mobile responsiveness, favicon, OG image, and README image.

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
