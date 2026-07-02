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
  console.log(`Founder Skills legacy compatibility CLI v${packageJson.version}

Usage:
  founder-skills install --agent <pi|claude|codex> [options]
  founder-skills install <agent> [phase|project]
  founder-skills init [--project <path>] [--company <name>] [--stage <stage>]
  founder-skills doctor [--agent <pi|claude|codex>] [--scope <global|project>] [--project <path>]
  founder-skills list [--phase <phase>]
  founder-skills version

Install options:
  --agent, -a   Agent target (pi | claude | codex)
  --phase, -p   all | strategy | design | build | launch | compound | pmf | scale | partner
  --scope, -s   (claude/codex) global | project (codex global installs ~/.codex/skills)
  --out, -o     (codex only) also write an AGENTS file for project-mode/reference use
  --project     Project directory for init/doctor project checks (default: cwd)
  --company     Company name for init
  --stage       idea | validating | building | launched | revenue | growing

Examples:
  npx --yes github:gvkhosla/founder-skills install --agent pi
  npx --yes github:gvkhosla/founder-skills install --agent pi --phase strategy
  npx --yes github:gvkhosla/founder-skills install claude project
  npx --yes github:gvkhosla/founder-skills install --agent claude --scope project --phase pmf
  npx --yes github:gvkhosla/founder-skills install --agent codex
  npx --yes github:gvkhosla/founder-skills init --project . --company "Acme"
  npx --yes github:gvkhosla/founder-skills install --agent codex --scope project --out ./AGENTS.md
  npx --yes github:gvkhosla/founder-skills doctor --agent codex
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

    if (token === '--project') {
      options.project = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === '--company') {
      options.company = argv[i + 1];
      i += 1;
      continue;
    }

    if (token === '--stage') {
      options.stage = argv[i + 1];
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
  const skillsRoot = path.join(packageRoot, 'legacy', 'skills');

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

function printPostInstall({ agent, scope, targetRoot, skillCount, agentsFile }) {
  console.log('');
  console.log('Founder Skills is ready.');
  console.log(`✓ Installed ${skillCount} skill(s)`);

  if (targetRoot) console.log(`✓ Location: ${targetRoot}`);
  if (agentsFile) console.log(`✓ Project instructions: ${agentsFile}`);

  if (agent === 'codex' && scope !== 'project') {
    console.log('Try next: restart Codex, then type `$founder-partner`.');
  } else if (agent === 'codex') {
    console.log('Try next: add/reference the AGENTS file, then ask Codex to use founder-partner.');
  } else if (agent === 'claude') {
    console.log('Try next: ask Claude Code, "Use the founder-partner skill."');
  } else {
    console.log('Try next: ask pi, "Use founder-partner."');
  }

  const doctorBits = ['founder-skills doctor', '--agent', agent];
  if (scope === 'project') doctorBits.push('--scope', 'project');
  console.log(`Verify later: ${doctorBits.join(' ')}`);
}

function installPi(skillDirs) {
  const targetRoot = path.join(os.homedir(), '.pi', 'agent', 'skills');
  fs.mkdirSync(targetRoot, { recursive: true });

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const dest = path.join(targetRoot, skillName);
    copyDirContents(skillDir, dest);
  }

  printPostInstall({ agent: 'pi', scope: 'global', targetRoot, skillCount: skillDirs.length });
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

  printPostInstall({ agent: 'claude', scope, targetRoot, skillCount: skillDirs.length });
}

function installCodexSkills(skillDirs) {
  const targetRoot = path.join(os.homedir(), '.codex', 'skills');
  fs.mkdirSync(targetRoot, { recursive: true });

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    const dest = path.join(targetRoot, skillName);
    copyDirContents(skillDir, dest);
  }

  printPostInstall({ agent: 'codex', scope: 'global', targetRoot, skillCount: skillDirs.length });
}

function generateCodexAgents(skillDirs, outPath) {
  const header = `# Founder Skills — Codex Integration

Add this file's contents to your project's \`AGENTS.md\` file,
or reference it via your Codex system prompt.

## Available Skills

Each skill below can be invoked by name. When invoking a skill:
1. Read the SKILL.md file for that skill from the legacy/skills/ directory
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
    body += `**SKILL.md path:** legacy/skills/${phase}/${skillName}/SKILL.md\n\n`;
  }

  const resolvedOut = path.resolve(process.cwd(), outPath || 'AGENTS.founder-skills.md');
  fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
  fs.writeFileSync(resolvedOut, body, 'utf8');

  printPostInstall({ agent: 'codex', scope: 'project', agentsFile: resolvedOut, skillCount: skillDirs.length });
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

  if (config.agent !== 'claude' && config.agent !== 'codex' && options.scope) {
    throw new Error('--scope is only valid for --agent claude or --agent codex');
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

  if (config.scope === 'project') {
    generateCodexAgents(skillDirs, config.out);
    return;
  }

  installCodexSkills(skillDirs);
  if (config.out) generateCodexAgents(skillDirs, config.out);
}

function copyStarterFile(src, dest) {
  if (fs.existsSync(dest)) return false;
  let content = fs.readFileSync(src, 'utf8').replaceAll('YYYY-MM-DD', new Date().toISOString().slice(0, 10));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content, 'utf8');
  return true;
}

function initWorkspace(options) {
  const validStages = ['idea', 'validating', 'building', 'launched', 'revenue', 'growing'];
  if (options.stage && !validStages.includes(options.stage)) {
    throw new Error(`Unknown stage '${options.stage}'. Valid stages: ${validStages.join(', ')}`);
  }

  const projectDir = path.resolve(process.cwd(), options.project || '.');
  const starterDir = path.join(packageRoot, 'generated', 'pi', 'workspace', 'starter');
  if (!fs.existsSync(starterDir)) {
    throw new Error(`Missing starter workspace at ${starterDir}.`);
  }

  const created = [];
  for (const filePath of walkFiles(starterDir)) {
    const relPath = path.relative(starterDir, filePath);
    const dest = path.join(projectDir, relPath);
    if (copyStarterFile(filePath, dest)) created.push(relPath);
  }

  const companyStatePath = path.join(projectDir, '.fs', 'company-state.json');
  const companyState = JSON.parse(fs.readFileSync(companyStatePath, 'utf8'));
  companyState.company.name = options.company || companyState.company.name || path.basename(projectDir);
  if (options.stage) companyState.company.stage = options.stage;
  companyState.stateMeta.lastUpdated = new Date().toISOString().slice(0, 10);
  companyState.stateMeta.lastReviewed = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(companyStatePath, `${JSON.stringify(companyState, null, 2)}\n`, 'utf8');

  console.log(`Initialized Founder Skills workspace in ${projectDir}`);
  if (created.length === 0) {
    console.log('✓ Workspace files already existed; left existing files in place.');
  } else {
    for (const relPath of created) console.log(`✓ created ${relPath}`);
  }
  console.log('Try next: ask your agent, "Use founder-partner to help me decide what to do next."');
  console.log(`Verify later: founder-skills doctor --project ${projectDir}`);
}

function* walkFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkFiles(absPath);
    else yield absPath;
  }
}

function resolveDoctorArgs(options) {
  const scope = options.scope || 'global';
  if (options.agent && !AGENTS.includes(options.agent)) {
    throw new Error(`Unknown agent '${options.agent}'. Valid agents: ${AGENTS.join(', ')}`);
  }
  if (scope !== 'global' && scope !== 'project') {
    throw new Error(`Unknown scope '${scope}'. Use global or project.`);
  }
  return {
    agent: options.agent,
    scope,
    projectDir: path.resolve(process.cwd(), options.project || '.'),
  };
}

function readTextIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function checkSkillFile(label, filePath) {
  if (!fs.existsSync(filePath)) {
    return { ok: false, message: `✗ ${label}: missing ${filePath}` };
  }

  const text = fs.readFileSync(filePath, 'utf8');
  if (!text.includes('name: founder-partner')) {
    return { ok: false, message: `✗ ${label}: ${filePath} does not look like founder-partner` };
  }

  if (!text.includes('Human-First Response')) {
    return { ok: false, message: `✗ ${label}: installed founder-partner is missing the human-first response section; reinstall` };
  }

  return { ok: true, message: `✓ ${label}: ${filePath}` };
}

function checkCodexProject(projectDir) {
  const candidates = [
    path.join(projectDir, 'AGENTS.md'),
    path.join(projectDir, 'AGENTS.founder-skills.md'),
  ];
  const found = candidates.find((filePath) => readTextIfExists(filePath).includes('founder-partner'));
  if (!found) {
    return { ok: false, message: `✗ codex project: no AGENTS file mentioning founder-partner in ${projectDir}` };
  }
  return { ok: true, message: `✓ codex project: ${found}` };
}

function checkAgentInstall(agent, scope, projectDir) {
  if (agent === 'pi') {
    return [checkSkillFile('pi', path.join(os.homedir(), '.pi', 'agent', 'skills', 'founder-partner', 'SKILL.md'))];
  }

  if (agent === 'claude') {
    const root = scope === 'project'
      ? path.join(projectDir, '.claude', 'skills')
      : path.join(os.homedir(), '.claude', 'skills');
    return [checkSkillFile(`claude ${scope}`, path.join(root, 'founder-partner', 'SKILL.md'))];
  }

  if (agent === 'codex' && scope === 'project') {
    return [checkCodexProject(projectDir)];
  }

  return [checkSkillFile('codex', path.join(os.homedir(), '.codex', 'skills', 'founder-partner', 'SKILL.md'))];
}

function checkWorkspace(projectDir, required = false) {
  const files = [
    'founder-context.md',
    'truth-memo.md',
    'recommended-next-step.md',
    path.join('.fs', 'company-state.json'),
    path.join('.fs', 'artifact-index.json'),
    path.join('.fs', 'sequence-state.json'),
  ];
  const found = files.filter((rel) => fs.existsSync(path.join(projectDir, rel)));
  const missing = files.filter((rel) => !fs.existsSync(path.join(projectDir, rel)));

  if (missing.length === 0) {
    console.log(`✓ Workspace memory in ${projectDir}`);
    return true;
  }

  if (found.length === 0 && !required) {
    console.log(`- Optional workspace memory not initialized in ${projectDir}`);
    console.log('  Run `founder-skills init --project .` when you want persistent company state.');
    return true;
  }

  for (const rel of missing) console.log(`✗ workspace missing ${rel}`);
  return false;
}

function runDoctor(options) {
  const { agent, scope, projectDir } = resolveDoctorArgs(options);
  const agentsToCheck = agent ? [agent] : AGENTS;
  let failed = false;

  console.log('Founder Skills doctor');

  if (options.project && !agent) {
    failed = !checkWorkspace(projectDir, true);
  } else {
    for (const candidate of agentsToCheck) {
      const checks = checkAgentInstall(candidate, scope, projectDir);
      for (const check of checks) {
        console.log(check.message);
        if (!check.ok) failed = true;
      }
    }
    checkWorkspace(projectDir, false);
  }

  if (failed) {
    console.log('');
    console.log('Suggested fix: run `founder-skills install --agent <agent>` for install issues or `founder-skills init --project .` for workspace memory.');
    process.exit(1);
  }

  console.log('Founder Skills checks look healthy.');
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

  if (command === 'init') {
    const { options } = parseArgs(argv.slice(1));
    if (options.help) {
      usage();
      return;
    }
    initWorkspace(options);
    return;
  }

  if (command === 'doctor') {
    const { options } = parseArgs(argv.slice(1));
    if (options.help) {
      usage();
      return;
    }
    runDoctor(options);
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
