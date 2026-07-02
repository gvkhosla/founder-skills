import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact, HostCapabilities } from "../../../core/src/types/host.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "./host-adapter.js";
import { HUMAN_FIRST_RESPONSE_CONTRACT } from "./response-ux.js";

export abstract class CodingHostAdapter implements HostAdapter {
  abstract id: string;
  abstract displayName: string;
  hostClass = "coding-agent" as const;
  abstract capabilities: HostCapabilities;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/${input.domain}/${input.name}/SKILL.md`,
        kind: "skill",
        content: this.renderSkill(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/sequences/${input.name}.md`,
        kind: "sequence-bundle",
        content: this.renderSequence(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/workspace/project-instructions.md`,
        kind: "project-instructions",
        content: input.recommendedInstructions,
      },
      ...input.starterFiles.map((file) => ({
        path: `generated/${this.id}/${file.path}`,
        kind: "workspace-doc" as const,
        content: file.content,
      })),
    ];
  }

  generateInstallDocs(input: InstallBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/install.md`,
        kind: "install-doc",
        content: [`# ${input.hostName} install`, ...input.installSteps.map((s) => `- ${s}`)].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const warnings = output.filter((artifact) => !artifact.content.trim()).map((artifact) => `${artifact.path} is empty`);
    return { ok: warnings.length === 0, warnings };
  }

  protected renderSkill(skill: CanonicalSkill): string {
    const sections = [
      `---\nname: ${skill.name}\ndescription: ${skill.description}\n---`,
      `# ${skill.name}`,
      `## When to invoke\n${skill.invocations.map((invocation) => `- ${invocation}`).join("\n")}`,
      `## Outputs\n${skill.outputs.map((output) => `- ${output}`).join("\n")}`,
      HUMAN_FIRST_RESPONSE_CONTRACT,
    ];

    if (skill.dependsOn.length > 0) {
      sections.push(`## Depends on\n${skill.dependsOn.map((dependency) => `- ${dependency}`).join("\n")}`);
    }

    if (skill.feedsInto.length > 0) {
      sections.push(`## Feeds into\n${skill.feedsInto.map((output) => `- ${output}`).join("\n")}`);
    }

    if (skill.checks.length > 0) {
      sections.push(`## Quality checks\n${skill.checks.map((check) => `- ${check}`).join("\n")}`);
    }

    sections.push(`## Prompt\n${skill.prompt.trim()}`);

    if (skill.reference?.trim()) {
      sections.push(`## Reference\n${skill.reference.trim()}`);
    }

    return `${sections.join("\n\n")}\n`;
  }

  protected renderSequence(sequence: CanonicalSequence): string {
    const sections = [
      `# ${sequence.name}`,
      sequence.description,
      `## Entrypoint\n- ${sequence.entrypoint}`,
      `## Steps\n${sequence.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`,
      `## Primary outputs\n${sequence.primaryOutputs.map((output) => `- ${output}`).join("\n")}`,
      HUMAN_FIRST_RESPONSE_CONTRACT,
    ];

    if (sequence.successSignal.length > 0) {
      sections.push(`## Success signals\n${sequence.successSignal.map((signal) => `- ${signal}`).join("\n")}`);
    }

    if (sequence.prompt.trim()) {
      sections.push(`## Operating notes\n${sequence.prompt.trim()}`);
    }

    return `${sections.join("\n\n")}\n`;
  }
}
