#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const skillsRoot = path.join(root, 'legacy', 'skills');

const errors = [];
const warnings = [];

const allowedPhases = new Set([
  'strategy',
  'design',
  'build',
  'launch',
  'compound',
  'pmf',
  'scale',
  'partner',
]);

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readFile(relPath) {
  const abs = path.join(root, relPath);
  try {
    return fs.readFileSync(abs, 'utf8');
  } catch (error) {
    fail(`Missing required file: ${relPath}`);
    return '';
  }
}

function listSkillFiles() {
  const files = [];
  if (!fs.existsSync(skillsRoot)) {
    fail('legacy/skills/ directory not found');
    return files;
  }

  for (const phase of fs.readdirSync(skillsRoot)) {
    const phaseDir = path.join(skillsRoot, phase);
    if (!fs.statSync(phaseDir).isDirectory() || phase === 'codex') continue;

    for (const skill of fs.readdirSync(phaseDir)) {
      const skillDir = path.join(phaseDir, skill);
      if (!fs.statSync(skillDir).isDirectory()) continue;
      const skillFile = path.join(skillDir, 'SKILL.md');
      if (fs.existsSync(skillFile)) files.push(skillFile);
      else fail(`Missing SKILL.md for ${phase}/${skill}`);
    }
  }

  return files;
}

function parseFrontmatter(text, fileRel) {
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    fail(`${fileRel}: missing YAML frontmatter`);
    return null;
  }

  const fm = {};
  for (const line of fmMatch[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    fm[key] = value;
  }

  return fm;
}

function extractSkillOutput(text, skillName) {
  const explicit = text.match(/Output:\s*`([^`]+\.md)`/);
  if (explicit) return explicit[1];

  if (skillName === 'build-cycle') {
    const implicit = text.match(/`(cycles\/YYYY-MM-DD\.md)`/);
    if (implicit) return implicit[1];
  }

  if (skillName === 'founder-partner') {
    const implicit = text.match(/Updates?\s+`?(founder-context\.md)`?/i);
    if (implicit) return implicit[1];
  }

  return null;
}

function extractRelatedSkills(text) {
  const relatedMatch = text.match(/## Related Skills\n([\s\S]*?)(\n## |$)/);
  if (!relatedMatch) return [];

  const related = new Set();
  const section = relatedMatch[1];
  for (const match of section.matchAll(/\*\*([a-z0-9-]+)\*\*/g)) {
    related.add(match[1]);
  }
  return [...related];
}

function parseReadmeOutputs(text) {
  const map = new Map();
  for (const line of text.split('\n')) {
    if (!line.startsWith('| `')) continue;
    const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
    if (cells.length < 2) continue;

    const skill = cells[0].match(/`([^`]+)`/);
    const output = cells[1].match(/`([^`]+\.md)`/);
    if (skill && output) map.set(skill[1], output[1]);
  }
  return map;
}

function parseLlmsOutputs(text) {
  const map = new Map();
  for (const match of text.matchAll(/- \[([a-z0-9-]+)\]\([^\)]+\):[^\n]*?Output: `([^`]+\.md)`/g)) {
    map.set(match[1], match[2]);
  }
  return map;
}

function parseSiteOutputs(text) {
  const map = new Map();
  for (const match of text.matchAll(/<div class="skill"><div class="skill-name">([a-z0-9-]+)<\/div><div class="skill-output">→ <code>([^<]+\.md)<\/code>/g)) {
    map.set(match[1], match[2]);
  }
  return map;
}

function assertOutputMap(mapName, source, canonical) {
  for (const [skill, output] of source.entries()) {
    if (!canonical.has(skill)) {
      warn(`${mapName}: unknown skill '${skill}'`);
      continue;
    }
    const expected = canonical.get(skill);
    if (output !== expected) {
      fail(`${mapName}: ${skill} output mismatch (got ${output}, expected ${expected})`);
    }
  }
}

function assertNoLegacyStrings() {
  const scans = [
    'README.md',
    'docs/legacy/PHILOSOPHY.md',
    'docs/legacy/AUTHORING.md',
    'docs/legacy/MULTI-AGENT.md',
    'site/index.html',
    'site/llms.txt',
    'site/og-source.svg',
    'legacy/install.sh',
    'scripts/install.sh',
  ];

  for (const rel of scans) {
    const text = readFile(rel);
    if (!text) continue;

    if (text.includes('cycle-reflector')) {
      fail(`${rel}: contains stale reference to cycle-reflector`);
    }

    if (text.includes('founder-skill-pack')) {
      fail(`${rel}: contains stale repository slug founder-skill-pack`);
    }
  }
}

function assertParallelFallbacks(skillFilesByName) {
  const parallelSkills = [
    'assumption-mapper',
    'mpp-evaluator',
    'failure-navigator',
    'build-cycle',
    'launch-plan-builder',
    'pmf-signal-reader',
    'north-star-definer',
    'retention-loop-designer',
    'growth-loop-builder',
    'churn-diagnostician',
  ];

  for (const skill of parallelSkills) {
    const file = skillFilesByName.get(skill);
    if (!file) {
      fail(`Parallel skill '${skill}' not found`);
      continue;
    }
    const text = fs.readFileSync(file, 'utf8');
    if (!/Sequential Fallback/i.test(text)) {
      fail(`${path.relative(root, file)}: missing Sequential Fallback section`);
    }
  }
}

function assertNpmReadiness() {
  const packageJsonPath = path.join(root, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    fail('Missing package.json');
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  if (packageJson.name !== 'founder-skills') {
    fail(`package.json: expected name 'founder-skills', got '${packageJson.name}'`);
  }

  if (!packageJson.bin || packageJson.bin['founder-skills'] !== 'bin/founder-skills.js') {
    fail('package.json: missing bin entry founder-skills -> bin/founder-skills.js');
  }

  const requiredFilesEntries = ['bin', 'legacy', 'README.md', 'LICENSE'];
  const files = Array.isArray(packageJson.files) ? packageJson.files : [];
  for (const entry of requiredFilesEntries) {
    if (!files.includes(entry)) {
      fail(`package.json: files[] missing '${entry}'`);
    }
  }

  const requiredPaths = ['bin/founder-skills.js', 'README.md', 'LICENSE'];
  for (const rel of requiredPaths) {
    if (!fs.existsSync(path.join(root, rel))) {
      fail(`Missing required npm artifact: ${rel}`);
    }
  }

  const installCommand = 'npx --yes github:gvkhosla/founder-skills install --agent pi';

  const readme = readFile('README.md');
  if (!readme.includes(installCommand)) {
    fail('README.md: missing GitHub npx install command for pi');
  }

  const llms = readFile('site/llms.txt');
  if (!llms.includes(installCommand)) {
    fail('site/llms.txt: missing GitHub npx install command for pi');
  }

  const site = readFile('site/index.html');
  if (!site.includes(installCommand)) {
    fail('site/index.html: missing GitHub npx install command for pi');
  }
}

function main() {
  const skillFiles = listSkillFiles();
  if (skillFiles.length !== 27) {
    fail(`Expected 27 skills, found ${skillFiles.length}`);
  }

  const canonicalOutputs = new Map();
  const skillNames = new Set();
  const skillFilesByName = new Map();

  for (const file of skillFiles) {
    const rel = path.relative(root, file);
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split('\n').length;
    if (lines > 350) fail(`${rel}: exceeds 350 lines (${lines})`);

    const fm = parseFrontmatter(text, rel);
    if (!fm) continue;

    const dirName = path.basename(path.dirname(file));
    if (!fm.name) fail(`${rel}: missing frontmatter field 'name'`);
    if (!fm.description) fail(`${rel}: missing frontmatter field 'description'`);
    if (!fm.phase) fail(`${rel}: missing frontmatter field 'phase'`);
    if (!fm.version) fail(`${rel}: missing frontmatter field 'version'`);

    if (fm.name && fm.name !== dirName) {
      fail(`${rel}: frontmatter name '${fm.name}' does not match directory '${dirName}'`);
    }

    if (fm.phase && !allowedPhases.has(fm.phase)) {
      fail(`${rel}: invalid phase '${fm.phase}'`);
    }

    if (fm.description) {
      if (!/\bUse\b|\bTriggered\b/i.test(fm.description)) {
        warn(`${rel}: description should include a trigger phrase ("Use when ...")`);
      }
      if (!fm.description.includes('Produces') && !fm.description.includes('Updates')) {
        warn(`${rel}: description should mention output ("Produces ...")`);
      }
    }

    if (fm.name) {
      if (skillNames.has(fm.name)) fail(`${rel}: duplicate skill name '${fm.name}'`);
      skillNames.add(fm.name);
      skillFilesByName.set(fm.name, file);
    }

    const output = extractSkillOutput(text, fm.name || dirName);
    if (!output) {
      fail(`${rel}: could not determine output artifact`);
    } else {
      canonicalOutputs.set(fm.name || dirName, output);
    }
  }

  // Related skills must point to real skills
  for (const file of skillFiles) {
    const rel = path.relative(root, file);
    const text = fs.readFileSync(file, 'utf8');
    const related = extractRelatedSkills(text);
    for (const skill of related) {
      if (!skillNames.has(skill)) {
        fail(`${rel}: related skill '${skill}' does not exist`);
      }
    }
  }

  const readmeOutputs = parseReadmeOutputs(readFile('README.md'));
  const llmsOutputs = parseLlmsOutputs(readFile('site/llms.txt'));
  const siteOutputs = parseSiteOutputs(readFile('site/index.html'));

  assertOutputMap('README', readmeOutputs, canonicalOutputs);
  assertOutputMap('site/llms.txt', llmsOutputs, canonicalOutputs);
  assertOutputMap('site/index.html', siteOutputs, canonicalOutputs);

  assertNoLegacyStrings();
  assertParallelFallbacks(skillFilesByName);
  assertNpmReadiness();

  if (warnings.length > 0) {
    console.log('Warnings:');
    for (const message of warnings) console.log(`- ${message}`);
    console.log('');
  }

  if (errors.length > 0) {
    console.error('Validation failed:\n');
    for (const message of errors) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log('Validation passed ✅');
  console.log(`- Skills checked: ${skillFiles.length}`);
  console.log('- README/site/llms outputs are in sync with SKILL.md artifacts');
  console.log('- No stale cycle-reflector or founder-skill-pack references in key files');
  console.log('- NPM metadata + CLI install paths are present and wired');
}

main();
