import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact, HostCapabilities } from "../../../core/src/types/host.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "./host-adapter.js";
import { HUMAN_FIRST_RESPONSE_CONTRACT } from "./response-ux.js";

export abstract class ChatHostAdapter implements HostAdapter {
  abstract id: string;
  abstract displayName: string;
  hostClass = "chat" as const;
  abstract capabilities: HostCapabilities;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/skills/${input.domain}/${input.name}/system-prompt.md`,
        kind: "system-prompt",
        content: this.renderSystemPrompt(input),
      },
      {
        path: `generated/${this.id}/skills/${input.domain}/${input.name}/conversation-starter.md`,
        kind: "conversation-starter",
        content: this.renderConversationStarter(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/bundles/${input.name}/system-prompt.md`,
        kind: "system-prompt",
        content: this.renderSequencePrompt(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: `generated/${this.id}/workspace/how-to-use.md`,
        kind: "workspace-doc",
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
        path: `generated/${this.id}/workspace/setup.md`,
        kind: "workspace-doc",
        content: [`# ${input.hostName} setup`, ...input.installSteps.map((s) => `- ${s}`)].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const invalid = output.filter((artifact) => artifact.content.includes("SKILL.md"));
    return {
      ok: invalid.length === 0,
      warnings: invalid.map((artifact) => `${artifact.path} references SKILL.md in chat output`),
    };
  }

  protected renderSystemPrompt(skill: CanonicalSkill): string {
    const sections = [
      `You are running the ${skill.name} workflow.`,
      `Goal: ${skill.description}`,
      `When to invoke:\n${skill.invocations.map((invocation) => `- ${invocation}`).join("\n")}`,
      `Outputs:\n${skill.outputs.map((output) => `- ${output}`).join("\n")}`,
      HUMAN_FIRST_RESPONSE_CONTRACT,
    ];

    if (skill.dependsOn.length > 0) {
      sections.push(`Read first when available:\n${skill.dependsOn.map((dependency) => `- ${dependency}`).join("\n")}`);
    }

    if (skill.feedsInto.length > 0) {
      sections.push(`Likely next artifacts:\n${skill.feedsInto.map((output) => `- ${output}`).join("\n")}`);
    }

    if (skill.checks.length > 0) {
      sections.push(`Quality checks:\n${skill.checks.map((check) => `- ${check}`).join("\n")}`);
    }

    sections.push(`Instructions:\n${skill.prompt.trim()}`);

    if (skill.reference?.trim()) {
      sections.push(`Reference:\n${skill.reference.trim()}`);
    }

    return `${sections.join("\n\n")}\n`;
  }

  protected renderConversationStarter(skill: CanonicalSkill): string {
    const invocation = skill.invocations[0] ?? `Help me with ${skill.name}`;
    const lines = [
      `Use the ${skill.name} workflow.`,
      `Start with: \"${invocation}\"`,
      `Expected outputs:\n${skill.outputs.map((output) => `- ${output}`).join("\n")}`,
    ];

    if (skill.dependsOn.length > 0) {
      lines.push(`Bring this context if you have it:\n${skill.dependsOn.map((dependency) => `- ${dependency}`).join("\n")}`);
    }

    return lines.join("\n\n");
  }

  protected renderSequencePrompt(sequence: CanonicalSequence): string {
    const sections = [
      `You are running the ${sequence.name} sequence.`,
      sequence.description,
      `Entrypoint:\n- ${sequence.entrypoint}`,
      `Steps:\n${sequence.steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`,
      `Primary outputs:\n${sequence.primaryOutputs.map((output) => `- ${output}`).join("\n")}`,
      HUMAN_FIRST_RESPONSE_CONTRACT,
    ];

    if (sequence.successSignal.length > 0) {
      sections.push(`Success signals:\n${sequence.successSignal.map((signal) => `- ${signal}`).join("\n")}`);
    }

    if (sequence.prompt.trim()) {
      sections.push(`Operating notes:\n${sequence.prompt.trim()}`);
    }

    return sections.join("\n\n");
  }
}
