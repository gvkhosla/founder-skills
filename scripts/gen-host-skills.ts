import fs from "node:fs";
import path from "node:path";
import { loadAllCanonicalSkills, loadAllCanonicalSequences } from "../packages/core/src/loaders/index.js";
import { getDefaultHostAdapters } from "../packages/hosts/src/index.js";
import { STARTER_TEMPLATE_DATE, getStarterWorkspaceFiles } from "../packages/state/src/workspace.js";

const root = process.cwd();
const hostAdapters = getDefaultHostAdapters().filter((adapter) => adapter.hostClass === "coding-agent");
const skills = loadAllCanonicalSkills(root);
const sequences = loadAllCanonicalSequences(root);

function writeArtifact(rootDir: string, relPath: string, content: string) {
  const absPath = path.join(rootDir, relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, "utf8");
}

for (const adapter of hostAdapters) {
  fs.rmSync(path.join(root, "generated", adapter.id), { recursive: true, force: true });
  for (const skill of skills) {
    if (skill.supportedHosts && !skill.supportedHosts.includes(adapter.id)) continue;
    for (const artifact of adapter.generateSkill(skill)) {
      writeArtifact(root, artifact.path, artifact.content);
    }
  }

  for (const sequence of sequences) {
    for (const artifact of adapter.generateSequence(sequence)) {
      writeArtifact(root, artifact.path, artifact.content);
    }
  }

  for (const artifact of adapter.generateWorkspace({
    companyStateSchema: {},
    artifactGraphSchema: {},
    starterFiles: getStarterWorkspaceFiles({ date: STARTER_TEMPLATE_DATE }),
    recommendedInstructions:
      "Start with co-founder. Read .fs/company-state.json, .fs/artifact-index.json, .fs/sequence-state.json, founder-context.md, truth-memo.md, and recommended-next-step.md when they exist. Continue the active sequence before ad hoc work, keep recommended-next-step.md current, and tie build work to validation, launch, PMF, and GTM context.",
  })) {
    writeArtifact(root, artifact.path, artifact.content);
  }

  const installSteps = adapter.id === "codex"
    ? [
        "Default/global install copies each generated skill to ~/.codex/skills/<skill-name>/SKILL.md",
        "Restart Codex if $co-founder or other skills are not immediately discoverable",
        "Use --scope project for the .codex/founder-skills-os bundle plus AGENTS.md reference workflow",
      ]
    : [
        "Install Founder Skills OS for this host",
        "Load generated project instructions",
        "Run co-founder as the default entrypoint",
      ];

  for (const artifact of adapter.generateInstallDocs({
    hostName: adapter.displayName,
    installSteps,
  })) {
    writeArtifact(root, artifact.path, artifact.content);
  }
}

console.log(`Generated coding-host outputs for ${hostAdapters.length} hosts, ${skills.length} skills, ${sequences.length} sequences.`);
