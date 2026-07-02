import test from "node:test";
import assert from "node:assert/strict";
import { getDefaultHostAdapters } from "../../packages/hosts/src/index.js";

const adapters = getDefaultHostAdapters();

test("default host adapters include coding and chat surfaces", () => {
  const ids = adapters.map((adapter) => adapter.id);
  assert.ok(ids.includes("pi"));
  assert.ok(ids.includes("codex"));
  assert.ok(ids.includes("opencode"));
  assert.ok(ids.includes("openclaw"));
  assert.ok(ids.includes("hermes"));
  assert.ok(ids.includes("chatgpt"));
});

test("openclaw and hermes adapters emit coding-harness artifacts", () => {
  const sampleSkill = {
    name: "implementation-planner",
    domain: "engineering-product",
    description: "Sample skill",
    invocations: ["Help me plan the build"],
    outputs: ["implementation-plan.md"],
    dependsOn: ["founder-context.md"],
    feedsInto: ["release-readiness.md"],
    prompt: "Do the work",
    reference: "Be direct.",
    checks: ["specific_recommendation"],
  };

  const openclaw = adapters.find((adapter) => adapter.id === "openclaw");
  const hermes = adapters.find((adapter) => adapter.id === "hermes");

  assert.ok(openclaw);
  assert.ok(hermes);

  const openclawArtifacts = openclaw!.generateSkill(sampleSkill);
  const hermesArtifacts = hermes!.generateSkill(sampleSkill);

  assert.ok(openclawArtifacts.some((artifact) => artifact.path.includes("generated/openclaw/skills/implementation-planner/SKILL.md")));
  assert.ok(openclawArtifacts.some((artifact) => artifact.content.includes("## Read first when available")));
  assert.ok(openclawArtifacts.some((artifact) => artifact.content.includes("founder-context.md")));
  assert.ok(openclawArtifacts.some((artifact) => artifact.content.includes("specific_recommendation")));
  assert.ok(openclawArtifacts.some((artifact) => artifact.content.includes("Be direct.")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.path.includes("generated/hermes/engineering-product/implementation-planner/SKILL.md")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.content.includes("## Human-facing response (required)")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.content.includes("Bottom line")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.content.includes("## Depends on")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.content.includes("## Quality checks")));
  assert.ok(hermesArtifacts.some((artifact) => artifact.content.includes("Be direct.")));
});

test("host adapters include sequence routing metadata in generated bundles", () => {
  const sampleSequence = {
    name: "validate-to-build",
    description: "Sample sequence",
    entrypoint: "co-founder",
    steps: ["problem-validator", "customer-hypothesis"],
    primaryOutputs: ["problem-validation-report.md"],
    successSignal: ["founder_can_start_build_with_no_major_ambiguity"],
    prompt: "Move from validation into implementation planning.",
  };

  const pi = adapters.find((adapter) => adapter.id === "pi");
  const chatgpt = adapters.find((adapter) => adapter.id === "chatgpt");

  assert.ok(pi);
  assert.ok(chatgpt);

  const piSequence = pi!.generateSequence(sampleSequence)[0];
  const chatSequence = chatgpt!.generateSequence(sampleSequence)[0];

  assert.ok(piSequence.content.includes("## Entrypoint"));
  assert.ok(piSequence.content.includes("## Human-facing response (required)"));
  assert.ok(piSequence.content.includes("## Success signals"));
  assert.ok(piSequence.content.includes("Move from validation into implementation planning."));
  assert.ok(chatSequence.content.includes("Entrypoint:"));
  assert.ok(chatSequence.content.includes("## Human-facing response (required)"));
  assert.ok(chatSequence.content.includes("Success signals:"));
  assert.ok(chatSequence.content.includes("Move from validation into implementation planning."));
});

test("coding-host adapters can emit starter workspace state files", () => {
  const pi = adapters.find((adapter) => adapter.id === "pi");
  assert.ok(pi);

  const artifacts = pi!.generateWorkspace({
    companyStateSchema: {},
    artifactGraphSchema: {},
    starterFiles: [
      { path: "workspace/starter/.fs/company-state.json", content: "{}" },
      { path: "workspace/starter/founder-context.md", content: "# Founder Context" },
    ],
    recommendedInstructions: "Read state first.",
  });

  assert.ok(artifacts.some((artifact) => artifact.path.endsWith("generated/pi/workspace/project-instructions.md")));
  assert.ok(artifacts.some((artifact) => artifact.path.endsWith("generated/pi/workspace/starter/.fs/company-state.json")));
  assert.ok(artifacts.some((artifact) => artifact.path.endsWith("generated/pi/workspace/starter/founder-context.md")));
});
