# Canonical Sequences Source

Sequences are the lifecycle loops of Founder Skills.

Current canonical sequences:
- `validate-to-build`
- `build-to-release`
- `build-to-launch`
- `gtm-engine`
- `pmf-recovery`
- `weekly-operating-rhythm`

Each sequence should contain:
- `sequence.yaml`
- `steps.md`
- `outputs.schema.json`
- optional host-specific prompt helpers

A valid sequence should:
- reference only canonical skill names
- produce primary outputs that are emitted by its steps
- be strong enough for the orchestrator to recommend directly
