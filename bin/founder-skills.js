#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const PHASES = ['strategy', 'design', 'build', 'launch', 'compound', 'pmf', 'scale', 'partner'];
const AGENTS = ['pi', 'claude', 'codex'];

const packageRoot = path.resolve(__dirname, '..');
const packageJson = JSON.parse(
  fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'),
);

function usage() {
  console.log(`Founder Skills CLI v${packageJson.version}

Usage:
  founder-skills install --agent <pi|claude|codex> [options]
  founder-skills install <agent> [phase|project]
  founder-skills list [--phase <phase>]
  founder-skills version

Install options:
  --agent, -a   Agent target (pi | claude | codex)
  --phase, -p   all | strategy | design | build | launch | compound | pmf | scale | partner
  --scope, -s   (claude only) global | project
  --out, -o     (codex only) output file path (default: ./AGENTS.founder-skills.md)

Examples:
  npx --yes github:gvkhosla/founder-skills install --agent pi
  npx --yes github:gvkhosla/founder-skills install --agent pi --phase strategy
  npx --yes github:gvkhosla/founder-skills install claude project
  npx --yes github:gvkhosla/founder-skills install --agent claude --scope project --phase pmf
  npx --yes github:gvkhosla/founder-skills install --agent codex --out ./AGENTS.md
  npx --yes github:gvkhosla/founder-skills list
`);
}

function parseArgs(argv) {
  const options = {};
  const positionals = [];

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      options.help = true;
      continue;
    }

    if (token === '--agent' || token === '-a') {
      options.agent = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === '--phase' || token === '-p') {
      options.phase = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === '--scope' || token === '-s') {
      options.scope = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === '--out' || token === '-o') {
      options.out = argv[i + 1];
      i += 1;
      continue;
    }

    if (token.startsWith('-')) {
      throw new Error(`Unknown option: ${token}`);
    }

    positionals.push(token);
  }

  return { options, positionals };
}

function ensurePhase(phase) {
  if (phase === 'all') return phase;
  if (!PHASES.includes(phase)) {
    throw new Error(
      `Unknown phase '${phase}'. Valid phases: all, ${PHASES.join(', ')}`,
    );
  }
  return phase;
}

function listSkillDirs(phase = 'all') {
  const skillsRoot = path.join(packageRoot, 'skills');

  const phasesToScan = phase === 'all' ? PHASES : [phase];
  const out = [];

  for (const phaseName of phasesToScan) {
    const phaseDir = path.join(skillsRoot, phaseName);
    if (!fs.existsSync(phaseDir)) continue;

    for (const entry of fs.readdirSync(phaseDir)) {
      const skillDir = path.join(phaseDir, entry);
      if (!fs.statSync(skillDir).isDirectory()) continue;

      const skillFile = path.join(skillDir, 'SKILL.md');
      if (!fs.existsSync(skillFile)) continue;

      out.push(skillDir);
    }
  }

  return out.sort((a, b) => {
    const pa = `${path.basename(path.dirname(a))}/${path.basename(a)}`;
    const pb = `${path.basename(path.dirname(b))}/${path.basename(b)}`;
    return pa.localeCompare(pb);
  });
}

function parseSkillFrontmatter(skillDir) {
  const skillFile = path.join(skillDir, 'SKILL.md');
  const text = fs.readFileSync(skillFile, 'utf8');

  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  const rows = {};

  if (fm) {
    for (const line of fm[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      rows[key] = value;
    }
  }

  return rows;
}

function copyDirContents(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function installPi(skillDirs) {
  const targetRoot = path.join(os.homedir(), '.pi', 'agent', 'skills');
  fs.mkdirSync(targetRoot, { recursive: true });

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const dest = path.join(targetRoot, skillName);
    copyDirContents(skillDir, dest);
  }

  console.log(`Installed ${skillDirs.length} skill(s) for pi → ${targetRoot}`);
}

function installClaude(skillDirs, scope) {
  const targetRoot =
    scope === 'project'
      ? path.join(process.cwd(), '.claude', 'skills')
      : path.join(os.homedir(), '.claude', 'skills');

  fs.mkdirSync(targetRoot, { recursive: true });

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const dest = path.join(targetRoot, skillName);
    copyDirContents(skillDir, dest);
  }

  console.log(
    `Installed ${skillDirs.length} skill(s) for Claude (${scope}) → ${targetRoot}`,
  );
}

function generateCodexAgents(skillDirs, outPath) {
  const header = `# Founder Skills — Codex Integration

Add this file's contents to your project's \`AGENTS.md\` file,
or reference it via your Codex system prompt.

## Available Skills

Each skill below can be invoked by name. When invoking a skill:
1. Read the SKILL.md file for that skill from the skills/ directory
2. Follow the instructions in order (sequential — no parallel subagents)
3. Write only the output file(s) specified in the skill
4. Do not write any other files

---

`;

  let body = header;

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const phase = path.basename(path.dirname(skillDir));
    const fm = parseSkillFrontmatter(skillDir);
    const description = fm.description || '(no description found)';

    body += `### ${skillName}\n`;
    body += `**Phase:** ${phase}\n`;
    body += `${description}\n`;
    body += `**Invoke with:** "Use the ${skillName} skill"\n`;
    body += `**SKILL.md path:** skills/${phase}/${skillName}/SKILL.md\n\n`;
  }

  const resolvedOut = path.resolve(process.cwd(), outPath || 'AGENTS.founder-skills.md');
  fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
  fs.writeFileSync(resolvedOut, body, 'utf8');

  console.log(`Generated Codex AGENTS file with ${skillDirs.length} skill(s) → ${resolvedOut}`);
  console.log('Next: append it to your project AGENTS.md or reference it in your system prompt.');
}

function resolveInstallArgs(options, positionals) {
  const config = {
    agent: options.agent,
    phase: options.phase || 'all',
    scope: options.scope || 'global',
    out: options.out,
  };

  const tokens = [...positionals];
  if (!config.agent && tokens.length > 0) {
    config.agent = tokens.shift();
  }

  for (const token of tokens) {
    if (token === '.' || token === 'project' || token === '--local') {
      config.scope = 'project';
      continue;
    }

    if (token === 'global') {
      config.scope = 'global';
      continue;
    }

    if (token === 'all' || PHASES.includes(token)) {
      config.phase = token;
      continue;
    }

    throw new Error(`Unrecognized install argument: ${token}`);
  }

  if (!config.agent) {
    throw new Error('Missing agent. Use --agent <pi|claude|codex>.');
  }

  if (!AGENTS.includes(config.agent)) {
    throw new Error(`Unknown agent '${config.agent}'. Valid agents: ${AGENTS.join(', ')}`);
  }

  config.phase = ensurePhase(config.phase);

  if (config.agent !== 'claude' && options.scope) {
    throw new Error('--scope is only valid for --agent claude');
  }

  if (config.scope !== 'global' && config.scope !== 'project') {
    throw new Error(`Unknown scope '${config.scope}'. Use global or project.`);
  }

  if (config.agent !== 'codex' && options.out) {
    throw new Error('--out is only valid for --agent codex');
  }

  return config;
}

function runInstall(options, positionals) {
  const config = resolveInstallArgs(options, positionals);
  const skillDirs = listSkillDirs(config.phase);

  if (skillDirs.length === 0) {
    throw new Error(`No skills found for phase '${config.phase}'`);
  }

  if (config.agent === 'pi') {
    installPi(skillDirs);
    return;
  }

  if (config.agent === 'claude') {
    installClaude(skillDirs, config.scope);
    return;
  }

  generateCodexAgents(skillDirs, config.out);
}

function runList(options) {
  const phase = ensurePhase(options.phase || 'all');
  const skillDirs = listSkillDirs(phase);

  const byPhase = new Map();
  for (const skillDir of skillDirs) {
    const phaseName = path.basename(path.dirname(skillDir));
    const skillName = path.basename(skillDir);
    if (!byPhase.has(phaseName)) byPhase.set(phaseName, []);
    byPhase.get(phaseName).push(skillName);
  }

  for (const phaseName of PHASES) {
    if (!byPhase.has(phaseName)) continue;
    console.log(`${phaseName}:`);
    for (const skillName of byPhase.get(phaseName).sort()) {
      console.log(`  - ${skillName}`);
    }
  }
}

function main() {
  const argv = process.argv.slice(2);
  const command = argv[0];

  if (!command || command === '--help' || command === '-h' || command === 'help') {
    usage();
    return;
  }

  if (command === '--version' || command === '-v' || command === 'version') {
    console.log(packageJson.version);
    return;
  }

  // Convenience: founder-skills pi strategy
  if (AGENTS.includes(command)) {
    const { options, positionals } = parseArgs(argv.slice(1));
    runInstall(options, [command, ...positionals]);
    return;
  }

  if (command === 'install') {
    const { options, positionals } = parseArgs(argv.slice(1));
    if (options.help) {
      usage();
      return;
    }
    runInstall(options, positionals);
    return;
  }

  if (command === 'list') {
    const { options } = parseArgs(argv.slice(1));
    if (options.help) {
      usage();
      return;
    }
    runList(options);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.error('');
  usage();
  process.exit(1);
}
