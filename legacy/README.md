# Legacy compatibility layer

Founder Skills is the primary product in this repo.

This `legacy/` subtree keeps the original 27-skill pack available for compatibility. The public CLI now lives in `cli/` and installs current generated skills by default.

## What lives here

- `legacy/skills/` — the original skill-pack source
- `legacy/cli.js` — compatibility shim that forwards to `cli/founder-skills.js`
- `legacy/validate-skill-pack.js` — compatibility validation plus canonical source/generated skill count checks

## Compatibility entrypoints

These public commands stay the same:

```bash
npx --yes github:gvkhosla/founder-skills install --agent pi
bash scripts/install.sh --agent pi
node scripts/validate-skill-pack.js
```

The repo-root validation/install shell wrappers preserve older command paths, but `bin/founder-skills.js` and `scripts/install.sh` now forward to `cli/founder-skills.js`.

## Rule of thumb

- If you are building or extending Founder Skills, work in `source/`, `packages/`, and `scripts/*.ts`. Generated bundles are created locally during tests/package prep.
- If you are preserving backward compatibility for the old skill pack, work in `legacy/`.
