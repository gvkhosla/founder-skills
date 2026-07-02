import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export type CodingHostId = "pi" | "codex" | "opencode" | "openclaw" | "hermes";
export type InstallScope = "global" | "project";

export interface InstallGeneratedHostOptions {
  rootDir: string;
  host: CodingHostId;
  scope?: InstallScope;
  projectDir?: string;
  dest?: string;
}

export interface InstallResult {
  host: CodingHostId;
  bundlePath: string;
  updatedFiles: string[];
  notes: string[];
}

const BUNDLE_NAME = "founder-skills";

export function getSupportedCodingHosts(): CodingHostId[] {
  return ["pi", "codex", "opencode", "openclaw", "hermes"];
}

export function installGeneratedHostBundle(options: InstallGeneratedHostOptions): InstallResult {
  const projectDir = path.resolve(options.projectDir ?? process.cwd());
  const scope = options.scope ?? defaultScopeForHost(options.host);
  const generatedDir = path.join(options.rootDir, "generated", options.host);

  if (!fs.existsSync(generatedDir)) {
    throw new Error(`Missing generated bundle for ${options.host} at ${generatedDir}. Run npm run os:gen first.`);
  }

  const bundlePath = path.resolve(options.dest ?? getDefaultBundlePath(options.host, scope, projectDir));
  const notes: string[] = [];
  const updatedFiles: string[] = [];

  if (options.host === "codex" && scope === "global") {
    const installedSkills = installCodexGlobalSkills(generatedDir, bundlePath);
    notes.push(`Installed ${installedSkills.length} Codex skill(s) from generated/codex → ${bundlePath}`);
    notes.push("Codex discovers skills at ~/.codex/skills/<skill-name>/SKILL.md; restart Codex if a skill is not immediately visible");
  } else {
    copyDirectory(generatedDir, bundlePath);
    notes.push(`Copied generated/${options.host} → ${bundlePath}`);
  }

  if (options.host === "pi") {
    notes.push("pi will discover nested SKILL.md folders under ~/.pi/agent/skills/");
  }

  if (options.host === "hermes") {
    notes.push("Hermes will discover nested SKILL.md folders under ~/.hermes/skills/");
    notes.push("Run `hermes skills list` to confirm the bundle is visible");
  }


  if (options.host === "codex" && scope === "project") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-CODEX", renderCodexSection(path.relative(projectDir, bundlePath) || "."));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with a Codex bundle section`);
  }

  if (options.host === "opencode") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-OPENCODE", renderOpenCodeSection(path.relative(projectDir, bundlePath) || "."));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with an OpenCode bundle section`);
  }

  if (options.host === "openclaw") {
    const agentsFile = path.join(projectDir, "AGENTS.md");
    const openclawSectionPath = path.join(bundlePath, "agents-founder-skills-section.md");
    const openclawSection = fs.existsSync(openclawSectionPath)
      ? fs.readFileSync(openclawSectionPath, "utf8").trim()
      : "Use Founder Skills as the routing layer for startup bottlenecks.";
    upsertManagedSectionFile(agentsFile, "FOUNDER-SKILLS-OPENCLAW", renderOpenClawSection(path.relative(projectDir, bundlePath) || ".", openclawSection));
    updatedFiles.push(agentsFile);
    notes.push(`Updated ${agentsFile} with an OpenClaw bundle section`);
  }

  notes.push(...renderPostInstallNotes(options.host, scope, projectDir));

  return {
    host: options.host,
    bundlePath,
    updatedFiles,
    notes,
  };
}

export function defaultScopeForHost(host: CodingHostId): InstallScope {
  return host === "opencode" || host === "openclaw" ? "project" : "global";
}

export function getDefaultBundlePath(host: CodingHostId, scope: InstallScope, projectDir: string): string {
  switch (host) {
    case "pi":
      return path.join(os.homedir(), ".pi", "agent", "skills", BUNDLE_NAME);
    case "codex":
      return scope === "global"
        ? path.join(os.homedir(), ".codex", "skills")
        : path.join(projectDir, ".codex", BUNDLE_NAME);
    case "opencode":
      return path.join(projectDir, ".opencode", BUNDLE_NAME);
    case "openclaw":
      return path.join(projectDir, ".openclaw", BUNDLE_NAME);
    case "hermes":
      return path.join(os.homedir(), ".hermes", "skills", BUNDLE_NAME);
  }
}

export function upsertManagedSection(existing: string, marker: string, body: string): string {
  const begin = `<!-- BEGIN ${marker} -->`;
  const end = `<!-- END ${marker} -->`;
  const section = `${begin}\n${body.trim()}\n${end}`;
  const pattern = new RegExp(`${escapeRegExp(begin)}[\\s\\S]*?${escapeRegExp(end)}`, "m");

  if (pattern.test(existing)) {
    return existing.replace(pattern, section);
  }

  const trimmed = existing.trim();
  if (!trimmed) return `${section}\n`;
  return `${trimmed}\n\n${section}\n`;
}

function upsertManagedSectionFile(filePath: string, marker: string, body: string) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
  const next = upsertManagedSection(existing, marker, body);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next, "utf8");
}

function copyDirectory(src: string, dest: string) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function installCodexGlobalSkills(generatedDir: string, skillsRoot: string): string[] {
  const skillDirs = findSkillDirs(generatedDir);
  const seen = new Set<string>();
  fs.mkdirSync(skillsRoot, { recursive: true });

  for (const skillDir of skillDirs) {
    const skillName = path.basename(skillDir);
    if (seen.has(skillName)) {
      throw new Error(`Duplicate Codex skill name '${skillName}' while installing generated Codex skills.`);
    }
    seen.add(skillName);

    const dest = path.join(skillsRoot, skillName);
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(skillDir, dest, { recursive: true });
  }

  return skillDirs.map((skillDir) => path.basename(skillDir)).sort();
}

function findSkillDirs(rootDir: string): string[] {
  const out: string[] = [];
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const dir = path.join(rootDir, entry.name);
    if (fs.existsSync(path.join(dir, "SKILL.md"))) {
      out.push(dir);
      continue;
    }
    out.push(...findSkillDirs(dir));
  }

  return out;
}

function renderPostInstallNotes(host: CodingHostId, scope: InstallScope, projectDir: string): string[] {
  const doctor = `npm run os:doctor -- --host ${host}${scope === "project" ? ` --scope project --project ${toPosix(projectDir)}` : ""}`;

  switch (host) {
    case "codex":
      return scope === "global"
        ? ["Try next: restart Codex, then type `$co-founder`.", `Verify later: ${doctor}`]
        : ["Try next: ask Codex to use co-founder from the managed AGENTS.md instructions.", `Verify later: ${doctor}`];
    case "pi":
      return ["Try next: ask pi, \"Use co-founder.\"", `Verify later: ${doctor}`];
    case "hermes":
      return ["Try next: run `hermes skills list`, then ask Hermes to use co-founder.", `Verify later: ${doctor}`];
    case "opencode":
      return ["Try next: ask OpenCode to use co-founder from AGENTS.md.", `Verify later: ${doctor}`];
    case "openclaw":
      return ["Try next: ask OpenClaw to route through co-founder from AGENTS.md.", `Verify later: ${doctor}`];
  }
}

function renderCodexSection(bundlePath: string): string {
  return [
    "## Founder Skills for Codex",
    `Use the generated Founder Skills bundle at \`${toPosix(bundlePath)}\`.`,
    `Primary workspace instructions: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/project-instructions.md"))}\`.`,
    `Starter state files live under \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/starter"))}\`.`,
    `Skills live under \`${toPosix(bundlePath)}/<domain>/<skill>/SKILL.md\` and sequences under \`${toPosix(bundlePath)}/sequences/\`.`,
    "Route uncertain requests through `co-founder`, identify the current bottleneck explicitly, and keep build work tied to launch and GTM context.",
  ].join("\n\n");
}

function renderOpenCodeSection(bundlePath: string): string {
  return [
    "## Founder Skills for OpenCode",
    `Use the generated Founder Skills bundle at \`${toPosix(bundlePath)}\`.`,
    `Project instructions: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/project-instructions.md"))}\`.`,
    `Starter files: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/starter"))}\`.`,
    "Treat `co-founder` as the default router when the next move is unclear.",
    "Prefer the generated sequences for validate → build, build → launch, GTM, PMF recovery, and the weekly operating rhythm.",
  ].join("\n\n");
}

function renderOpenClawSection(bundlePath: string, sectionBody: string): string {
  return [
    "## Founder Skills for OpenClaw",
    `Bundle root: \`${toPosix(bundlePath)}\`.`,
    `AGENTS section source: \`${toPosix(path.posix.join(toPosix(bundlePath), "agents-founder-skills-section.md"))}\`.`,
    `Lite prompt: \`${toPosix(path.posix.join(toPosix(bundlePath), "founder-skills-lite.md"))}\`.`,
    `Full prompt: \`${toPosix(path.posix.join(toPosix(bundlePath), "founder-skills-full.md"))}\`.`,
    `Starter files: \`${toPosix(path.posix.join(toPosix(bundlePath), "workspace/starter"))}\`.`,
    sectionBody,
  ].join("\n\n");
}

function toPosix(value: string): string {
  return value.split(path.sep).join(path.posix.sep);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
