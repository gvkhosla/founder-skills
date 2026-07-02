import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const hosts = ["pi", "claude-code", "codex", "opencode", "openclaw", "hermes"];
const errors: string[] = [];

for (const host of hosts) {
  const hostDir = path.join(root, "generated", host);
  if (!fs.existsSync(hostDir)) {
    errors.push(`${host}: generated directory missing`);
    continue;
  }

  const files = Array.from(walk(hostDir));
  if (files.length === 0) {
    errors.push(`${host}: no generated files found`);
    continue;
  }

  const skillFiles = files.filter((file) => file.endsWith("SKILL.md"));
  const sequenceFiles = files.filter((file) => file.includes(`${path.sep}sequences${path.sep}`) && file.endsWith(".md"));
  const hasInstall = files.some((file) => file.endsWith("install.md"));
  const hasSequence = sequenceFiles.length > 0;
  const hasSkill = skillFiles.length > 0;
  const hasWorkspace = files.some((file) => file.includes(`${path.sep}workspace${path.sep}`));
  const starterStatePaths = [
    path.join("workspace", "starter", ".fs", "company-state.json"),
    path.join("workspace", "starter", ".fs", "artifact-index.json"),
    path.join("workspace", "starter", ".fs", "sequence-state.json"),
    path.join("workspace", "starter", "founder-context.md"),
    path.join("workspace", "starter", "truth-memo.md"),
    path.join("workspace", "starter", "recommended-next-step.md"),
  ];

  if (!hasInstall) errors.push(`${host}: install.md missing`);
  if (!hasSequence) errors.push(`${host}: no sequences generated`);
  if (!hasSkill) errors.push(`${host}: no skill files generated`);
  if (!hasWorkspace) errors.push(`${host}: no workspace instructions generated`);

  for (const file of [...skillFiles, ...sequenceFiles]) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("## Human-facing response (required)")) {
      errors.push(`${host}: ${path.relative(root, file)} missing human-facing response contract`);
    }
  }
  for (const starterPath of starterStatePaths) {
    if (!files.some((file) => file.includes(starterPath))) {
      errors.push(`${host}: starter file missing (${starterPath})`);
    }
  }

  if (host === "openclaw") {
    const required = [
      "generated/openclaw/agents-founder-skills-section.md",
      "generated/openclaw/founder-skills-lite-CLAUDE.md",
      "generated/openclaw/founder-skills-full-CLAUDE.md",
    ];
    for (const rel of required) {
      if (!fs.existsSync(path.join(root, rel))) errors.push(`openclaw: missing ${rel}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Generated host validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`Generated host validation passed for ${hosts.length} coding hosts.`);

function* walk(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(abs);
    } else {
      yield abs;
    }
  }
}
