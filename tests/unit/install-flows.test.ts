import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { defaultScopeForHost, getDefaultBundlePath, installGeneratedHostBundle, upsertManagedSection } from "../../packages/hosts/src/install/export-bundles.js";

const root = process.cwd();

test("upsertManagedSection replaces an existing managed block", () => {
  const initial = [
    "# AGENTS",
    "",
    "<!-- BEGIN FOUNDER-SKILLS-OS-CODEX -->",
    "old body",
    "<!-- END FOUNDER-SKILLS-OS-CODEX -->",
  ].join("\n");

  const next = upsertManagedSection(initial, "FOUNDER-SKILLS-OS-CODEX", "new body");

  assert.ok(next.includes("new body"));
  assert.ok(!next.includes("old body"));
});

test("codex global install exports top-level invokable skills without touching AGENTS.md", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-codex-global-"));
  const skillsDir = path.join(tempDir, ".codex", "skills");

  const result = installGeneratedHostBundle({
    rootDir: root,
    host: "codex",
    scope: "global",
    projectDir: tempDir,
    dest: skillsDir,
  });

  assert.equal(result.bundlePath, skillsDir);
  assert.equal(result.updatedFiles.length, 0);
  assert.ok(fs.existsSync(path.join(skillsDir, "founder-partner", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(skillsDir, "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(skillsDir, "strategy", "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(tempDir, "AGENTS.md")));
  assert.ok(result.notes.some((note) => note.includes("$founder-partner")));
});

test("codex project install exports bundle and updates AGENTS.md", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-codex-project-"));
  const bundleDir = path.join(tempDir, ".codex", "founder-skills-os");

  const result = installGeneratedHostBundle({
    rootDir: root,
    host: "codex",
    scope: "project",
    projectDir: tempDir,
    dest: bundleDir,
  });

  const agentsFile = path.join(tempDir, "AGENTS.md");
  assert.equal(result.bundlePath, bundleDir);
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "project-instructions.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", ".fs", "company-state.json")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "truth-memo.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "strategy", "problem-validator", "SKILL.md")));
  assert.ok(fs.readFileSync(agentsFile, "utf8").includes("Founder Skills OS for Codex"));
});

test("legacy codex install writes top-level global skills", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-legacy-codex-"));

  const output = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "install", "--agent", "codex"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();

  assert.match(output, /\$founder-partner/);
  assert.match(output, /founder-skills doctor --agent codex/);
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "founder-partner", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(tempDir, "AGENTS.founder-skills.md")));

  const doctorOutput = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "doctor", "--agent", "codex"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();
  assert.match(doctorOutput, /Founder Skills checks look healthy/);
});

test("legacy codex project install writes AGENTS reference without global skills", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-legacy-codex-project-"));

  execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "install", "--agent", "codex", "--scope", "project", "--out", "./AGENTS.founder-skills.md"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  });

  assert.ok(fs.readFileSync(path.join(tempDir, "AGENTS.founder-skills.md"), "utf8").includes("founder-partner"));
  assert.ok(!fs.existsSync(path.join(tempDir, ".codex", "skills", "founder-partner", "SKILL.md")));

  const doctorOutput = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "doctor", "--agent", "codex", "--scope", "project", "--project", tempDir], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();
  assert.match(doctorOutput, /codex project/);
});

test("legacy init seeds workspace memory files", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-legacy-init-"));

  const output = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "init", "--project", tempDir, "--company", "Acme", "--stage", "building"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();

  assert.match(output, /Initialized Founder Skills workspace/);
  assert.ok(fs.existsSync(path.join(tempDir, ".fs", "company-state.json")));
  assert.ok(fs.existsSync(path.join(tempDir, "founder-context.md")));
  assert.ok(fs.existsSync(path.join(tempDir, "truth-memo.md")));
  assert.equal(JSON.parse(fs.readFileSync(path.join(tempDir, ".fs", "company-state.json"), "utf8")).company.name, "Acme");

  const doctorOutput = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "doctor", "--project", tempDir], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();
  assert.match(doctorOutput, /checks look healthy/);
});

test("OS install defaults use documented golden layouts", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-golden-"));

  assert.equal(defaultScopeForHost("codex"), "global");
  assert.equal(defaultScopeForHost("opencode"), "project");
  assert.equal(defaultScopeForHost("openclaw"), "project");
  assert.equal(getDefaultBundlePath("codex", "global", tempDir), path.join(os.homedir(), ".codex", "skills"));
  assert.equal(getDefaultBundlePath("opencode", "project", tempDir), path.join(tempDir, ".opencode", "founder-skills-os"));
  assert.equal(getDefaultBundlePath("openclaw", "project", tempDir), path.join(tempDir, ".openclaw", "founder-skills-os"));
  assert.equal(getDefaultBundlePath("hermes", "global", tempDir), path.join(os.homedir(), ".hermes", "skills", "founder-skills-os"));
});

test("claude project install exports bundle and updates CLAUDE.md", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-claude-"));
  const bundleDir = path.join(tempDir, ".claude", "skills", "founder-skills-os");

  installGeneratedHostBundle({
    rootDir: root,
    host: "claude-code",
    scope: "project",
    projectDir: tempDir,
    dest: bundleDir,
  });

  const claudeFile = path.join(tempDir, "CLAUDE.md");
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "project-instructions.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", ".fs", "artifact-index.json")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "truth-memo.md")));
  assert.ok(fs.readFileSync(claudeFile, "utf8").includes("Founder Skills OS"));
  assert.ok(fs.readFileSync(claudeFile, "utf8").includes("build-to-launch"));
});

test("openclaw install exports bundle and updates AGENTS.md", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-openclaw-"));
  const bundleDir = path.join(tempDir, ".openclaw", "founder-skills-os");

  installGeneratedHostBundle({
    rootDir: root,
    host: "openclaw",
    projectDir: tempDir,
    dest: bundleDir,
  });

  const agentsFile = path.join(tempDir, "AGENTS.md");
  assert.ok(fs.existsSync(path.join(bundleDir, "founder-skills-lite-CLAUDE.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", ".fs", "sequence-state.json")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "truth-memo.md")));
  assert.ok(fs.readFileSync(agentsFile, "utf8").includes("Founder Skills OS for OpenClaw"));
  assert.ok(fs.readFileSync(agentsFile, "utf8").includes("agents-founder-skills-section.md"));
});

test("hermes install exports a bundle without touching project files", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-hermes-"));
  const bundleDir = path.join(tempDir, ".hermes", "skills", "founder-skills-os");

  const result = installGeneratedHostBundle({
    rootDir: root,
    host: "hermes",
    dest: bundleDir,
  });

  assert.equal(result.updatedFiles.length, 0);
  assert.ok(fs.existsSync(path.join(bundleDir, "partner", "founder-partner", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "founder-context.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "truth-memo.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "install.md")));
});
