import path from "node:path";
import { recommendStateCommand } from "../packages/cli/src/index.js";

function usage() {
  console.log(`Founder Skills OS recommendation

Usage:
  npm run os:recommend -- --project <path>
`);
}

function parseArgs(argv: string[]) {
  let projectDir: string | undefined;
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--help" || token === "-h") {
      usage();
      process.exit(0);
    }
    if (token === "--project") {
      projectDir = argv[i + 1];
      i += 1;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }
  return { projectDir };
}

function main() {
  const rootDir = process.cwd();
  const options = parseArgs(process.argv.slice(2));
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const result = recommendStateCommand(rootDir, projectDir);

  console.log(`# Recommended Next Step`);
  console.log(`- type: ${result.recommendation.type}`);
  console.log(`- name: ${result.recommendation.name}`);
  console.log(`- bottleneck: ${result.recommendation.bottleneck}`);
  console.log(`- reason: ${result.recommendation.reason}`);
  if (result.recommendation.activeSequence) {
    console.log(`- active sequence: ${result.recommendation.activeSequence}`);
  }
  if (result.recommendation.expectedOutputs?.length) {
    console.log(`- expected outputs: ${result.recommendation.expectedOutputs.join(", ")}`);
  }
  console.log(`- wrote ${path.join(projectDir, "recommended-next-step.md")}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  console.error("");
  usage();
  process.exit(1);
}
