# Multi-Agent Compatibility

Legacy skills describe parallel intent in plain language so hosts can execute the work with the capabilities they have.

| Capability | pi | Codex |
| --- | --- | --- |
| Native skills | yes | yes |
| Multiple workers | host-dependent | sequential by default |
| File writes | yes | yes |
| Command execution | yes | yes |

## Rule

If the host cannot run parallel subagents, execute the same reviewer/research steps sequentially and preserve the same final artifact shape.

## Recommended path

For new workflows, use the generated OS bundles and `founder-partner` as the router. Legacy skills remain for compatibility only.
