import path from "node:path";
import { initStateCommand } from "../packages/cli/src/index.js";
import type { CompanyStage } from "../packages/core/src/types/state.js";

function usage() {
  console.log(`Founder Skills OS workspace init

Usage:
  npm run os:init -- --project <path> [options]

Options:
  --project <path>    Startup project directory (default: cwd)
  --company <name>    Company name to seed into .fs/company-state.json
  --stage <stage>     idea | validating | building | launched | revenue | growing
  --sequence <name>   Optional active sequence to start immediately
`);
}

function parseArgs(argv: string[]) {
  const options: {
    projectDir?: string;
    companyName?: string;
    stage?: CompanyStage;
    activeSequence?: string;
  } = {};

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--help" || token === "-h") {
      usage();
      process.exit(0);
    }
    if (token === "--project") {
      options.projectDir = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--company") {
      options.companyName = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--stage") {
      options.stage = argv[i + 1] as CompanyStage;
      i += 1;
      continue;
    }
    if (token === "--sequence") {
      options.activeSequence = argv[i + 1];
      i += 1;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }

  return options;
}

function main() {
  const rootDir = process.cwd();
  const options = parseArgs(process.argv.slice(2));
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const result = initStateCommand(rootDir, projectDir, options);

  console.log(`Initialized Founder Skills OS workspace in ${result.projectDir}`);
  for (const file of result.createdFiles) {
    console.log(`- created ${file}`);
  }
  console.log(`- bottleneck: ${result.companyState.company.currentBottleneck}`);
  if (result.sequenceState.activeSequence) {
    console.log(`- active sequence: ${result.sequenceState.activeSequence}`);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  console.error("");
  usage();
  process.exit(1);
}
