# Canonical Skills Source

This directory is the source of truth for Founder Skills beta.

Each skill lives under:

`source/skills/[domain]/[skill-name]/`

Core files:
- `skill.yaml`
- `prompt.md`
- optional `outputs.schema.json`
- optional `reference.md`
- optional `evals/` and `examples/`

The legacy compatibility pack now lives in `legacy/skills/`, but all new routing, host generation, and sequence validation should point here first.

## UX standard

Founder Skills should be human-first by default:
- start with a short in-chat answer, not a wall of markdown
- include one clear bottom line, one next move, and up to three concrete steps
- keep detailed `.md` files as durable memory for agents and later review
- list saved artifacts briefly instead of making the founder inspect several files to understand the answer

A founder should get immediate clarity in chat and deeper context only when they ask for it.

## Compound startup loop

Prefer CE-style workflow structure over thin prompts:
- define phases explicitly: read context, classify state, produce/update artifacts, hand off
- use `docs/founder-work/startup-loop.md` as the compact cross-skill handoff when available
- preserve stable IDs (`C#`, `P#`, `A#`, `E#`, `D#`, `M#`, `S#`, `L#`) across skills
- end meaningful cycles with `compound` so learnings become reusable memory
- keep skill-specific reports human-readable, but make the startup-loop artifact the first thing future agents can scan
