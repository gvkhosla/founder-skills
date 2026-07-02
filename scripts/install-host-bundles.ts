import path from "node:path";
import { defaultScopeForHost, getSupportedCodingHosts, installGeneratedHostBundle, type CodingHostId, type InstallScope } from "../packages/hosts/src/install/export-bundles.js";

interface CliOptions {
  host: CodingHostId | "all";
  scope?: InstallScope;
  projectDir?: string;
  dest?: string;
}

function usage() {
  console.log(`Founder Skills OS host installer

Usage:
  npm run os:install -- --host <pi|claude-code|codex|opencode|openclaw|hermes|all> [options]

Options:
  --host <id>         Target host (default: all)
  --scope <mode>      global | project (codex default: global; claude-code default: project)
  --project <path>    Project directory for project-scoped hosts (default: cwd)
  --dest <path>       Override destination bundle/install path for a single host install

Examples:
  npm run os:gen
  npm run os:install -- --host pi
  npm run os:install -- --host claude-code --scope project
  npm run os:install -- --host codex
  npm run os:install -- --host codex --scope project --project /path/to/repo
  npm run os:install -- --host all --project /path/to/repo
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = { host: "all" };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === "--help" || token === "-h") {
      usage();
      process.exit(0);
    }

    if (token === "--host") {
      options.host = argv[i + 1] as CliOptions["host"];
      i += 1;
      continue;
    }

    if (token === "--scope") {
      options.scope = argv[i + 1] as InstallScope;
      i += 1;
      continue;
    }

    if (token === "--project") {
      options.projectDir = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === "--dest") {
      options.dest = argv[i + 1];
      i += 1;
      continue;
    }

    throw new Error(`Unknown option: ${token}`);
  }

  if (options.host !== "all" && !getSupportedCodingHosts().includes(options.host)) {
    throw new Error(`Unknown host '${options.host}'. Valid hosts: ${getSupportedCodingHosts().join(", ")}, all`);
  }

  if (options.scope && options.scope !== "global" && options.scope !== "project") {
    throw new Error(`Unknown scope '${options.scope}'. Use global or project.`);
  }

  if (options.dest && options.host === "all") {
    throw new Error("--dest can only be used with a single host.");
  }

  return options;
}

function main() {
  const rootDir = process.cwd();
  const options = parseArgs(process.argv.slice(2));
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const hosts = options.host === "all" ? getSupportedCodingHosts() : [options.host];

  for (const host of hosts) {
    const result = installGeneratedHostBundle({
      rootDir,
      host,
      scope: options.scope ?? defaultScopeForHost(host),
      projectDir,
      dest: options.dest,
    });

    console.log(`\n[${result.host}] ${result.bundlePath}`);
    for (const note of result.notes) console.log(`- ${note}`);
    for (const file of result.updatedFiles) console.log(`- updated ${file}`);
  }

  console.log(`\nInstalled Founder Skills OS bundles for ${hosts.length} host(s).`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  console.error("");
  usage();
  process.exit(1);
}
