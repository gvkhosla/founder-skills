# Legacy Compatibility

The legacy compatibility layer now supports **pi** and **Codex**.

## Install

```bash
founder-skills install --agent pi
founder-skills install --agent codex
founder-skills install --agent codex --scope project --out ./AGENTS.founder-skills.md
```

## Behavior

| Feature | pi | Codex |
| --- | --- | --- |
| Native skill folders | yes | yes, global `~/.codex/skills/<skill>/SKILL.md` |
| Project instructions | no | yes, via generated AGENTS file |
| Parallel intent | native when available | described as sequential steps |
| Workspace memory | reads/writes repo files | reads/writes repo files |

## Doctor

```bash
founder-skills doctor --agent pi
founder-skills doctor --agent codex
founder-skills doctor --agent codex --scope project --project .
```

For new work, prefer the OS host bundles and generated skills under `generated/`.
