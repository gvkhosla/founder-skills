import type { CanonicalSequence } from "../../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../../core/src/types/skill.js";
import type { GeneratedArtifact } from "../../../core/src/types/host.js";
import { capabilityMatrix } from "../base/capability-matrix.js";
import type { HostAdapter, HostValidationResult, InstallBundle, WorkspaceBundle } from "../base/host-adapter.js";
import { HUMAN_FIRST_RESPONSE_CONTRACT } from "../base/response-ux.js";

export class OpenClawAdapter implements HostAdapter {
  id = "openclaw";
  displayName = "OpenClaw";
  hostClass = "coding-agent" as const;
  capabilities = capabilityMatrix.openclaw;

  generateSkill(input: CanonicalSkill): GeneratedArtifact[] {
    return [
      {
        path: `generated/openclaw/skills/${input.name}/SKILL.md`,
        kind: "skill",
        content: this.renderNativeSkill(input),
      },
    ];
  }

  generateSequence(input: CanonicalSequence): GeneratedArtifact[] {
    return [
      {
        path: `generated/openclaw/sequences/${input.name}.md`,
        kind: "sequence-bundle",
        content: this.renderSequence(input),
      },
    ];
  }

  generateWorkspace(input: WorkspaceBundle): GeneratedArtifact[] {
    return [
      {
        path: "generated/openclaw/agents-founder-skills-section.md",
        kind: "project-instructions",
        content: [
          "## Founder Skills OS routing",
          "When the user's request matches a Founder Skills OS workflow, spawn a coding session and inject the appropriate Founder Skills OS instructions.",
          "Read founder-context.md, truth-memo.md, recommended-next-step.md, and .fs state files before routing when they exist.",
          "Use co-founder for routing when the next move is unclear.",
          "Prefer validate-to-build for pre-launch product work, gtm-engine for distribution bottlenecks, pmf-recovery for weak retention or activation, and weekly-operating-rhythm for operating cadence.",
        ].join("\n\n"),
      },
      {
        path: "generated/openclaw/founder-skills-lite.md",
        kind: "project-instructions",
        content: [
          "# Founder Skills OS Lite",
          "1. Read project instructions, .fs state files, founder-context.md, truth-memo.md, and recent artifacts before editing.",
          "2. Identify the current bottleneck and separate what is known, believed, and hoped.",
          "3. Produce the expected artifact before making broad implementation changes.",
          "4. Keep build work tied to validation, launch, PMF, and GTM context.",
        ].join("\n"),
      },
      {
        path: "generated/openclaw/founder-skills-full.md",
        kind: "project-instructions",
        content: [
          "# Founder Skills OS Full",
          "1. Run co-founder logic first to identify bottleneck and next move.",
          "2. Read .fs/company-state.json, .fs/artifact-index.json, .fs/sequence-state.json, founder-context.md, truth-memo.md, and recommended-next-step.md when present.",
          "3. Continue the active sequence if one is in progress and update recommended-next-step.md.",
          "4. For build work: implementation-plan → architecture-review → QA → release readiness.",
          "5. For GTM work: customer clarity → positioning → messaging → launch / SEO / ads depending on the bottleneck.",
          "6. Report back with a short human-facing bottom line, the next action, and artifact paths. Keep detailed markdown as supporting memory.",
        ].join("\n"),
      },
      {
        path: "generated/openclaw/workspace/project-instructions.md",
        kind: "workspace-doc",
        content: input.recommendedInstructions,
      },
      ...input.starterFiles.map((file) => ({
        path: `generated/openclaw/${file.path}`,
        kind: "workspace-doc" as const,
        content: file.content,
      })),
    ];
  }

  generateInstallDocs(input: InstallBundle): GeneratedArtifact[] {
    return [
      {
        path: "generated/openclaw/install.md",
        kind: "install-doc",
        content: [
          `# ${input.hostName} install`,
          "- Paste agents-founder-skills-section.md into your OpenClaw AGENTS.md",
          "- Use founder-skills-lite.md for medium tasks",
          "- Use founder-skills-full.md for full product/build sequences",
          "- Spawn coding sessions with the right working directory and artifact context",
        ].join("\n"),
      },
    ];
  }

  validate(output: GeneratedArtifact[]): HostValidationResult {
    const warnings = output.filter((artifact) => !artifact.content.trim()).map((artifact) => `${artifact.path} is empty`);
    return { ok: warnings.length === 0, warnings };
  }

  private renderNativeSkill(skill: CanonicalSkill): string {
    const sections = [
      `---\nname: ${skill.name}\ndescription: ${skill.description}\n---`,
      `# ${skill.name}`,
      `Use this when the user clearly wants the ${skill.name} workflow.`,
      [
        "OpenClaw behavior:",
        "- If coding work is required, spawn a coding session with the current repo context.",
        "- Read the relevant Founder Skills OS artifacts before implementation.",
        "- Return with the produced artifacts and the next recommended move.",
      ].join("\n"),
      `## When to invoke\n${skill.invocations.map((invocation) => `- ${invocation}`).join("\n")}`,
      `## Expected outputs\n${skill.outputs.map((output) => `- ${output}`).join("\n")}`,
      HUMAN_FIRST_RESPONSE_CONTRACT,
    ];

    if (skill.dependsOn.length > 0) {
      sections.push(`## Read first when available\n${skill.dependsOn.map((dependency) => `- ${dependency}`).join("\n")}`);
    }

    if (skill.feedsInto.length > 0) {
      sections.push(`## Feeds into\n${skill.feedsInto.map((output) => `- ${output}`).join("\n")}`);
    }

    if (skill.checks.length > 0) {
      sections.push(`## Quality checks\n${skill.checks.map((check) => `- ${check}`).join("\n")}`);
    }

    sections.push(`## Workflow\n${skill.prompt.trim()}`);

    if (skill.reference?.trim()) {
      sections.push(`## Reference\n${skill.reference.trim()}`);
    }

    return `${sections.join("\n\n")}\n`;
  }

  private renderSequence(sequence: CanonicalSequence): string {
    const sections = [
      `# ${sequence.name}`,
      sequence.description,
      "OpenClaw should use this sequence as a staged spawn workflow.",
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
