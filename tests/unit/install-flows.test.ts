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
  assert.ok(fs.existsSync(path.join(skillsDir, "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(skillsDir, "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(skillsDir, "strategy", "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(tempDir, "AGENTS.md")));
  assert.ok(result.notes.some((note) => note.includes("$co-founder")));
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

test("public default install writes current pi and codex skills", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-default-install-"));

  const output = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "install"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();

  assert.match(output, /Installed current generated skills for both pi and Codex/);
  assert.ok(fs.existsSync(path.join(tempDir, ".pi", "agent", "skills", "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "co-founder", "SKILL.md")));
});

test("public setup installs skills and seeds workspace memory", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-setup-"));

  const output = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "setup", "--project", tempDir, "--company", "Acme"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();

  assert.match(output, /Setup complete/);
  assert.ok(fs.existsSync(path.join(tempDir, ".pi", "agent", "skills", "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(tempDir, ".fs", "company-state.json")));
  assert.ok(fs.existsSync(path.join(tempDir, "docs", "founder-work", "startup-loop.md")));
  assert.ok(fs.readFileSync(path.join(tempDir, "AGENTS.md"), "utf8").includes("Use Founder Skills as the startup operating loop"));
  assert.equal(JSON.parse(fs.readFileSync(path.join(tempDir, ".fs", "company-state.json"), "utf8")).company.name, "Acme");
});

test("public codex install writes top-level global skills", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-codex-"));

  const output = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "install", "--agent", "codex"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();

  assert.match(output, /\$co-founder/);
  assert.match(output, /founder-skills doctor --agent codex/);
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(tempDir, ".codex", "skills", "problem-validator", "SKILL.md")));
  assert.ok(!fs.existsSync(path.join(tempDir, "AGENTS.founder-skills.md")));

  const doctorOutput = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "doctor", "--agent", "codex"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();
  assert.match(doctorOutput, /Founder Skills checks look healthy/);
});

test("public codex project install writes AGENTS reference without global skills", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-codex-project-"));

  execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "install", "--agent", "codex", "--scope", "project", "--out", "./AGENTS.founder-skills.md"], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  });

  assert.ok(fs.readFileSync(path.join(tempDir, "AGENTS.founder-skills.md"), "utf8").includes("co-founder"));
  assert.ok(!fs.existsSync(path.join(tempDir, ".codex", "skills", "co-founder", "SKILL.md")));

  const doctorOutput = execFileSync(process.execPath, [path.join(root, "legacy", "cli.js"), "doctor", "--agent", "codex", "--scope", "project", "--project", tempDir], {
    cwd: tempDir,
    env: { ...process.env, HOME: tempDir, USERPROFILE: tempDir },
    stdio: "pipe",
  }).toString();
  assert.match(doctorOutput, /codex project/);
});

test("public init seeds workspace memory files", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-init-"));

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
  assert.ok(fs.existsSync(path.join(bundleDir, "founder-skills-lite.md")));
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
  assert.ok(fs.existsSync(path.join(bundleDir, "partner", "co-founder", "SKILL.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "founder-context.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "workspace", "starter", "truth-memo.md")));
  assert.ok(fs.existsSync(path.join(bundleDir, "install.md")));
});
