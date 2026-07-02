import { capabilityMatrix } from "../base/capability-matrix.js";
import { CodingHostAdapter } from "../base/coding-host.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact } from "../../../core/src/types/host.js";
import type { InstallBundle } from "../base/host-adapter.js";

export class HermesAdapter extends CodingHostAdapter {
  id = "hermes";
  displayName = "Hermes";
  capabilities = capabilityMatrix.hermes;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/hermes/${input.domain}/${input.name}/SKILL.md`,
        kind: "skill",
        content: this.renderSkill(input),
      },
    ];
  }

  generateInstallDocs(_input: InstallBundle) {
    return [
      {
        path: "generated/hermes/install.md",
        kind: "install-doc" as const,
        content: [
          "# Hermes install",
          "- Copy the generated skill folders into ~/.hermes/skills/<category>/<skill>/SKILL.md",
          "- Hermes scans ~/.hermes/skills/ automatically on launch",
          "- Use `hermes skills list` to verify installed skills",
          "- Use co-founder as the default entrypoint workflow",
        ].join("\n"),
      },
    ];
  }
}
