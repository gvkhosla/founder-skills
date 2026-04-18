import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../packages/core/src/loaders/index.js";
import {
  ARTIFACT_INDEX_FILE,
  COMPANY_STATE_FILE,
  FOUNDER_CONTEXT_FILE,
  RECOMMENDED_NEXT_FILE,
  SEQUENCE_STATE_FILE,
  STARTER_TEMPLATE_DATE,
  TRUTH_MEMO_FILE,
  ensureFounderWorkspace,
  getStarterWorkspaceFiles,
  renderRecommendedNextStep,
  startSequence,
  syncSequenceState,
  writeArtifactIndex,
  readArtifactIndex,
  readCompanyState,
  readSequenceState,
} from "../../packages/state/src/workspace.js";

const root = process.cwd();
const catalog = {
  skills: loadAllCanonicalSkills(root),
  sequences: loadAllCanonicalSequences(root),
};

test("ensureFounderWorkspace creates stateful operating files", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-workspace-"));
  const result = ensureFounderWorkspace(tempDir, catalog, {
    companyName: "Acme",
    stage: "building",
    activeSequence: "validate-to-build",
  });

  assert.equal(result.companyState.company.name, "Acme");
  assert.equal(result.companyState.company.stage, "building");
  assert.ok(fs.existsSync(path.join(tempDir, COMPANY_STATE_FILE)));
  assert.ok(fs.existsSync(path.join(tempDir, ARTIFACT_INDEX_FILE)));
  assert.ok(fs.existsSync(path.join(tempDir, SEQUENCE_STATE_FILE)));
  assert.ok(fs.existsSync(path.join(tempDir, FOUNDER_CONTEXT_FILE)));
  assert.ok(fs.existsSync(path.join(tempDir, TRUTH_MEMO_FILE)));
  assert.ok(fs.existsSync(path.join(tempDir, RECOMMENDED_NEXT_FILE)));
  assert.equal(result.sequenceState.activeSequence, "validate-to-build");
});

test("generated starter workspace files are deterministic", () => {
  const starterFiles = getStarterWorkspaceFiles();
  const founderContext = starterFiles.find((file) => file.path.endsWith("founder-context.md"));
  const truthMemo = starterFiles.find((file) => file.path.endsWith("truth-memo.md"));
  const weeklyReview = starterFiles.find((file) => file.path.endsWith("weekly-review.json"));

  assert.ok(founderContext?.content.includes(`Last updated: ${STARTER_TEMPLATE_DATE}`));
  assert.ok(truthMemo?.content.includes(`# Truth Memo — ${STARTER_TEMPLATE_DATE}`));
  assert.equal(JSON.parse(weeklyReview?.content || "{}").weekOf, STARTER_TEMPLATE_DATE);
});

test("startSequence and syncSequenceState track the current lifecycle step", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-sequence-"));
  ensureFounderWorkspace(tempDir, catalog, { stage: "building" });

  const initial = startSequence(tempDir, catalog, "validate-to-build");
  assert.equal(initial.currentStep, "problem-validator");

  writeArtifactIndex(tempDir, {
    artifacts: [
      {
        path: "problem-validation-report.md",
        createdBy: "problem-validator",
        createdAt: "2026-04-16",
        dependsOn: [],
        feedsInto: [],
        confidence: "high",
        freshness: "fresh",
        supersededBy: null,
        recommendedNext: [],
      },
    ],
  });

  const synced = syncSequenceState(readSequenceState(tempDir), catalog, readArtifactIndex(tempDir));
  assert.equal(synced.currentStep, "customer-hypothesis");
  assert.equal(synced.steps?.find((step) => step.name === "problem-validator")?.status, "done");
});

test("readCompanyState rejects invalid persisted stage values", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-invalid-company-state-"));
  fs.mkdirSync(path.join(tempDir, ".fs"), { recursive: true });
  fs.writeFileSync(
    path.join(tempDir, COMPANY_STATE_FILE),
    JSON.stringify({
      company: { name: "Acme", stage: "nonsense", currentBottleneck: "problem-clarity" },
      metrics: {},
      execution: {},
      focus: {},
      stateMeta: { version: 1, lastUpdated: "2026-04-18" },
    }),
    "utf8",
  );

  assert.throws(() => readCompanyState(tempDir), /company\.stage must be one of/);
});

test("readArtifactIndex rejects invalid artifact payloads", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-invalid-artifacts-"));
  fs.mkdirSync(path.join(tempDir, ".fs"), { recursive: true });
  fs.writeFileSync(
    path.join(tempDir, ARTIFACT_INDEX_FILE),
    JSON.stringify({ artifacts: [{ path: 123 }] }),
    "utf8",
  );

  assert.throws(() => readArtifactIndex(tempDir), /artifacts\[0\]\.path must be a string/);
});

test("readSequenceState rejects invalid step statuses", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-invalid-sequence-state-"));
  fs.mkdirSync(path.join(tempDir, ".fs"), { recursive: true });
  fs.writeFileSync(
    path.join(tempDir, SEQUENCE_STATE_FILE),
    JSON.stringify({ steps: [{ name: "problem-validator", status: "wat" }] }),
    "utf8",
  );

  assert.throws(() => readSequenceState(tempDir), /steps\[0\]\.status must be one of/);
});

test("renderRecommendedNextStep produces a founder-readable routing note", () => {
  const markdown = renderRecommendedNextStep({
    type: "sequence",
    name: "gtm-engine",
    reason: "Message clarity is the bottleneck.",
    bottleneck: "marketing-clarity",
    source: "bottleneck",
    expectedOutputs: ["messaging-architecture.md", "landing-page-copy.md"],
    missingArtifacts: ["positioning.md"],
  });

  assert.ok(markdown.includes("marketing-clarity"));
  assert.ok(markdown.includes("gtm-engine"));
  assert.ok(markdown.includes("positioning.md"));
});
