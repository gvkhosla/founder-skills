import path from "node:path";
import { startSequenceCommand, syncSequenceCommand } from "../packages/cli/src/index.js";

function usage() {
  console.log(`Founder Skills OS sequence control

Usage:
  npm run os:sequence -- start --name <sequence> [--project <path>]
  npm run os:sequence -- sync [--project <path>]
`);
}

function parseArgs(argv: string[]) {
  const [action, ...rest] = argv;
  let projectDir: string | undefined;
  let name: string | undefined;

  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token === "--help" || token === "-h") {
      usage();
      process.exit(0);
    }
    if (token === "--project") {
      projectDir = rest[i + 1];
      i += 1;
      continue;
    }
    if (token === "--name") {
      name = rest[i + 1];
      i += 1;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }

  return { action, projectDir, name };
}

function printState(state: { activeSequence?: string; currentStep?: string; steps?: Array<{ name: string; status: string }> }) {
  console.log(`- active sequence: ${state.activeSequence ?? "none"}`);
  console.log(`- current step: ${state.currentStep ?? "none"}`);
  for (const step of state.steps ?? []) {
    console.log(`  - ${step.status}: ${step.name}`);
  }
}

function main() {
  const rootDir = process.cwd();
  const { action, projectDir, name } = parseArgs(process.argv.slice(2));
  const resolvedProjectDir = path.resolve(projectDir ?? process.cwd());

  if (action === "start") {
    if (!name) throw new Error("Missing --name for sequence start.");
    const state = startSequenceCommand(rootDir, resolvedProjectDir, name);
    console.log(`Started sequence ${name}`);
    printState(state);
    return;
  }

  if (action === "sync") {
    const state = syncSequenceCommand(rootDir, resolvedProjectDir);
    console.log(`Synchronized sequence state`);
    printState(state);
    return;
  }

  throw new Error(`Unknown action: ${action ?? ""}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  console.error("");
  usage();
  process.exit(1);
}
