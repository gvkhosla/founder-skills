import fs from "node:fs";
import path from "node:path";
import {
  ARTIFACT_INDEX_FILE,
  COMPANY_STATE_FILE,
  FOUNDER_CONTEXT_FILE,
  RECOMMENDED_NEXT_FILE,
  SEQUENCE_STATE_FILE,
  TRUTH_MEMO_FILE,
  readArtifactIndex,
  readCompanyState,
  readSequenceState,
} from "../packages/state/src/workspace.js";

const root = process.cwd();
const groups: Record<string, string[]> = {
  docs: [
    "docs/README.md",
    "docs/internal/README.md",
    "docs/legacy/README.md",
    "docs/internal/founder-skills-os-orchestrator-state-model.md",
    "docs/internal/founder-skills-os-folder-scaffold.md",
    "docs/internal/founder-skills-os-host-adapter-contract.md",
    "docs/internal/founder-skills-os-coding-host-priority.md",
    "docs/founder-partner-manifesto.md",
    "docs/homepage-positioning.md",
    "docs/founder-skills-os-install-export-flows.md",
  ],
  workspace: ["pnpm-workspace.yaml", "turbo.json", "tsconfig.base.json", "tsconfig.json"],
  core: [
    "packages/cli/src/index.ts",
    "packages/core/src/index.ts",
    "packages/core/src/loaders/canonical-skill.ts",
    "packages/state/src/company-state.ts",
    "packages/state/src/workspace.ts",
    "packages/graph/src/artifact-index.ts",
    "packages/evals/src/recommendation-scenarios.ts",
    "packages/orchestrator/src/founder-partner.ts",
    "packages/hosts/src/registry.ts",
    "packages/hosts/src/openclaw/index.ts",
    "packages/hosts/src/hermes/index.ts",
    "packages/hosts/src/install/export-bundles.ts",
  ],
  source: [
    "source/skills/engineering-product/implementation-planner/skill.yaml",
    "source/skills/engineering-product/qa-verifier/skill.yaml",
    "source/skills/engineering-product/design-to-code-brief/skill.yaml",
    "source/skills/engineering-product/post-ship-review/skill.yaml",
    "source/skills/marketing/messaging-architect/skill.yaml",
    "source/skills/ads/cac-diagnostician/skill.yaml",
    "source/skills/pmf/pmf-signal-reader/skill.yaml",
    "source/skills/partner/founder-partner/reference.md",
    "source/skills/scale/first-hire-brief/skill.yaml",
    "source/skills/sales/pipeline-reviewer/skill.yaml",
    "source/sequences/validate-to-build/sequence.yaml",
    "source/sequences/build-to-release/sequence.yaml",
    "source/sequences/build-to-launch/sequence.yaml",
    "source/sequences/gtm-engine/sequence.yaml",
    "source/sequences/pmf-recovery/sequence.yaml",
  ],
  scripts: [
    "scripts/gen-host-skills.ts",
    "scripts/gen-chat-bundles.ts",
    "scripts/check-consistency.ts",
    "scripts/validate-generated-hosts.ts",
    "scripts/validate-sequences.ts",
    "scripts/init-company-workspace.ts",
    "scripts/recommend-next.ts",
    "scripts/sequence-cli.ts",
    "scripts/install-host-bundles.ts",
  ],
  tests: [
    "tests/evals/recommendation-scenarios.test.ts",
    "tests/unit/workspace.test.ts",
    "tests/unit/orchestrator.test.ts",
  ],
};

function parseArgs(argv: string[]) {
  let projectDir: string | undefined;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--help" || token === "-h") {
      console.log(`Founder Skills OS doctor\n\nUsage:\n  npm run os:doctor\n  npm run os:doctor -- --project /path/to/startup\n`);
      process.exit(0);
    }
    if (token === "--project") {
      projectDir = argv[index + 1];
      index += 1;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }

  return { projectDir };
}

function checkWorkspaceState(projectDir: string) {
  const checks: Array<[string, string, () => void]> = [
    ["company-state", COMPANY_STATE_FILE, () => void readCompanyState(projectDir)],
    ["artifact-index", ARTIFACT_INDEX_FILE, () => void readArtifactIndex(projectDir)],
    ["sequence-state", SEQUENCE_STATE_FILE, () => void readSequenceState(projectDir)],
  ];

  let failed = false;
  for (const [label, relPath, validate] of checks) {
    const absPath = path.join(projectDir, relPath);
    if (!fs.existsSync(absPath)) {
      console.log(`- missing ${relPath}`);
      failed = true;
      continue;
    }

    validate();
    console.log(`✓ ${label}`);
  }

  for (const relPath of [FOUNDER_CONTEXT_FILE, TRUTH_MEMO_FILE, RECOMMENDED_NEXT_FILE]) {
    const absPath = path.join(projectDir, relPath);
    if (fs.existsSync(absPath)) {
      console.log(`✓ ${relPath}`);
    } else {
      console.log(`- missing ${relPath}`);
      failed = true;
    }
  }

  if (failed) {
    throw new Error(`Workspace validation failed for ${projectDir}`);
  }
}

try {
  const { projectDir } = parseArgs(process.argv.slice(2));
  let failed = false;
  for (const [group, relPaths] of Object.entries(groups)) {
    const missing = relPaths.filter((rel) => !fs.existsSync(path.join(root, rel)));
    if (missing.length === 0) {
      console.log(`✓ ${group}`);
      continue;
    }
    failed = true;
    console.log(`✗ ${group}`);
    for (const rel of missing) console.log(`  - missing: ${rel}`);
  }

  if (projectDir) {
    console.log(`Checking workspace state in ${path.resolve(projectDir)}`);
    checkWorkspaceState(path.resolve(projectDir));
  }

  if (failed) process.exit(1);
  console.log(projectDir ? "Founder Skills OS bootstrap and workspace look healthy." : "Founder Skills OS bootstrap looks healthy.");
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
