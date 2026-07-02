import test from "node:test";
import assert from "node:assert/strict";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../packages/core/src/loaders/index.js";
import { defaultCompanyState, updateBottleneck } from "../../packages/state/src/company-state.js";
import { defaultArtifactIndex } from "../../packages/graph/src/artifact-index.js";
import { recommendNextMove } from "../../packages/orchestrator/src/co-founder.js";

const root = process.cwd();
const catalog = {
  skills: loadAllCanonicalSkills(root),
  sequences: loadAllCanonicalSequences(root),
};

test("co-founder recommends implementation planning for build-confidence", () => {
  const state = updateBottleneck(
    {
      ...defaultCompanyState,
      company: { ...defaultCompanyState.company, stage: "building" },
    },
    "build-confidence",
  );
  const recommendation = recommendNextMove(state, { catalog });
  assert.equal(recommendation.name, "implementation-planner");
  assert.equal(recommendation.type, "skill");
});

test("co-founder routes PMF uncertainty into the PMF recovery sequence", () => {
  const state = {
    ...defaultCompanyState,
    company: {
      ...defaultCompanyState.company,
      stage: "launched" as const,
      currentBottleneck: "pmf-uncertainty" as const,
    },
    metrics: {
      ...defaultCompanyState.metrics,
      pmfSignal: "faint",
    },
  };

  const recommendation = recommendNextMove(state, {
    artifactIndex: defaultArtifactIndex(),
    catalog,
  });

  assert.equal(recommendation.name, "north-star-definer");
  assert.equal(recommendation.source, "gate");
  assert.deepEqual(recommendation.missingArtifacts, [
    "north-star.md",
    "pmf-assessment.md",
    "support-insights.md",
    "churn-diagnosis.md",
  ]);
});

test("co-founder continues the active sequence before ad hoc routing", () => {
  const state = {
    ...defaultCompanyState,
    company: {
      ...defaultCompanyState.company,
      stage: "building" as const,
      currentBottleneck: "build-confidence" as const,
    },
    focus: {
      ...defaultCompanyState.focus,
      activeSequence: "validate-to-build",
    },
  };

  const recommendation = recommendNextMove(state, {
    artifactIndex: {
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
    },
    sequenceState: {
      activeSequence: "validate-to-build",
      steps: [
        { name: "problem-validator", status: "done" },
        { name: "customer-hypothesis", status: "current" },
      ],
    },
    catalog,
  });

  assert.equal(recommendation.name, "customer-hypothesis");
  assert.equal(recommendation.source, "sequence");
  assert.equal(recommendation.activeSequence, "validate-to-build");
});

test("co-founder routes GTM bottlenecks through launch-readiness gaps first", () => {
  const state = {
    ...defaultCompanyState,
    company: {
      ...defaultCompanyState.company,
      stage: "launched" as const,
      currentBottleneck: "marketing-clarity" as const,
    },
    metrics: {
      ...defaultCompanyState.metrics,
      pipelineHealth: "weak",
    },
  };

  const recommendation = recommendNextMove(state, {
    artifactIndex: {
      artifacts: [
        {
          path: "positioning.md",
          createdBy: "positioning-writer",
          createdAt: "2026-04-16",
          dependsOn: [],
          feedsInto: [],
          confidence: "high",
          freshness: "fresh",
          supersededBy: null,
          recommendedNext: [],
        },
      ],
    },
    catalog,
  });

  assert.equal(recommendation.name, "pricing-model-framer");
  assert.equal(recommendation.source, "gate");
});
