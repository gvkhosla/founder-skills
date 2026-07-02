import test from "node:test";
import assert from "node:assert/strict";
import { loadAllCanonicalSkills, loadAllCanonicalSequences } from "../../packages/core/src/loaders/index.js";

const root = process.cwd();

test("canonical skills load from source/skills", () => {
  const skills = loadAllCanonicalSkills(root);
  assert.ok(skills.length >= 25);
  assert.ok(skills.some((skill) => skill.name === "co-founder"));
  assert.ok(skills.some((skill) => skill.name === "implementation-planner"));
  assert.ok(skills.some((skill) => skill.name === "messaging-architect"));
  assert.ok(skills.some((skill) => skill.name === "pmf-signal-reader"));
});

test("canonical sequences load from source/sequences", () => {
  const sequences = loadAllCanonicalSequences(root);
  assert.ok(sequences.length >= 6);
  assert.ok(sequences.some((sequence) => sequence.name === "validate-to-build"));
  assert.ok(sequences.some((sequence) => sequence.name === "gtm-engine"));
  assert.ok(sequences.some((sequence) => sequence.name === "pmf-recovery"));
});
