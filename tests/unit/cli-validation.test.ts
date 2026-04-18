import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { initStateCommand } from "../../packages/cli/src/commands/state.js";
import { startSequenceCommand } from "../../packages/cli/src/commands/sequence.js";
import { readCompanyState } from "../../packages/state/src/workspace.js";

const root = process.cwd();

test("initStateCommand rejects invalid stage values before writing workspace state", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-init-stage-"));

  assert.throws(
    () => initStateCommand(root, tempDir, { stage: "nonsense" as never }),
    /Unknown stage 'nonsense'/,
  );

  assert.equal(fs.existsSync(path.join(tempDir, ".fs", "company-state.json")), false);
});

test("initStateCommand rejects invalid sequence names before writing workspace state", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-init-sequence-"));

  assert.throws(
    () => initStateCommand(root, tempDir, { activeSequence: "nonsense" }),
    /Unknown sequence 'nonsense'/,
  );

  assert.equal(fs.existsSync(path.join(tempDir, ".fs", "company-state.json")), false);
});

test("startSequenceCommand rejects unknown sequences without mutating company state", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "founder-skills-start-sequence-"));
  initStateCommand(root, tempDir, { stage: "building" });

  assert.throws(
    () => startSequenceCommand(root, tempDir, "does-not-exist"),
    /Unknown sequence 'does-not-exist'/,
  );

  assert.equal(readCompanyState(tempDir).focus.activeSequence, undefined);
});
