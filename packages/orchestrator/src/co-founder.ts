import type { ArtifactIndex } from "../../core/src/types/artifact.js";
import type { CanonicalSequence, SequenceState } from "../../core/src/types/sequence.js";
import type { CanonicalSkill } from "../../core/src/types/skill.js";
import type { Bottleneck, CompanyState } from "../../core/src/types/state.js";
import { hasArtifact } from "../../graph/src/artifact-index.js";
import { detectPrimaryBottleneck } from "./bottleneck-router.js";

export interface FounderCatalog {
  skills: CanonicalSkill[];
  sequences: CanonicalSequence[];
}

export interface FounderRecommendation {
  type: "skill" | "sequence";
  name: string;
  reason: string;
  bottleneck: Bottleneck;
  source: "explicit" | "sequence" | "gate" | "bottleneck";
  activeSequence?: string;
  missingArtifacts?: string[];
  expectedOutputs?: string[];
}

const bottleneckDefaults: Record<Bottleneck, { type: "skill" | "sequence"; name: string; reason: string }> = {
  "problem-clarity": {
    type: "skill",
    name: "problem-validator",
    reason: "The company still needs sharper evidence that the problem is real.",
  },
  "customer-clarity": {
    type: "skill",
    name: "customer-hypothesis",
    reason: "Customer definition is the main blocker to everything downstream.",
  },
  "scope-clarity": {
    type: "skill",
    name: "mvp-scoper",
    reason: "The founder needs a clearer build boundary before moving forward.",
  },
  "assumption-risk": {
    type: "skill",
    name: "assumption-mapper",
    reason: "The riskiest assumptions should be surfaced before deeper execution.",
  },
  "build-confidence": {
    type: "skill",
    name: "implementation-planner",
    reason: "The founder knows what to build, but not yet how to build it confidently.",
  },
  "architecture-risk": {
    type: "skill",
    name: "architecture-reviewer",
    reason: "Architecture risk is the main build blocker right now.",
  },
  "design-implementation-gap": {
    type: "skill",
    name: "design-to-code-brief",
    reason: "The product vision needs a stronger build-ready handoff.",
  },
  "qa-risk": {
    type: "skill",
    name: "qa-verifier",
    reason: "Quality confidence is too low for safe forward motion.",
  },
  "release-risk": {
    type: "skill",
    name: "release-readiness-auditor",
    reason: "Launch timing is constrained by release confidence.",
  },
  "positioning-weakness": {
    type: "skill",
    name: "positioning-writer",
    reason: "Message clarity is the biggest bottleneck right now.",
  },
  "launch-readiness": {
    type: "skill",
    name: "launch-plan-builder",
    reason: "The next leverage point is preparing a concrete launch motion.",
  },
  "activation-weakness": {
    type: "sequence",
    name: "pmf-recovery",
    reason: "Activation issues should be handled as a coordinated PMF recovery sequence.",
  },
  "retention-weakness": {
    type: "skill",
    name: "retention-loop-designer",
    reason: "The company needs to strengthen repeat usage before adding more growth.",
  },
  "pmf-uncertainty": {
    type: "skill",
    name: "pmf-signal-reader",
    reason: "PMF signal quality should be clarified before compounding effort elsewhere.",
  },
  "sales-motion-weakness": {
    type: "sequence",
    name: "gtm-engine",
    reason: "The sales and GTM motion should be rebuilt as one coherent system.",
  },
  "pipeline-weakness": {
    type: "skill",
    name: "pipeline-reviewer",
    reason: "Pipeline quality is the clearest commercial bottleneck.",
  },
  "marketing-clarity": {
    type: "skill",
    name: "messaging-architect",
    reason: "Marketing cannot compound without a clearer message architecture.",
  },
  "seo-geo-gap": {
    type: "skill",
    name: "seo-geo-strategist",
    reason: "Search visibility is an obvious strategic gap right now.",
  },
  "ads-efficiency": {
    type: "skill",
    name: "cac-diagnostician",
    reason: "Paid acquisition efficiency needs diagnosis before more spend.",
  },
  "support-friction": {
    type: "skill",
    name: "support-insights-reader",
    reason: "Support signals are not yet being translated into product decisions.",
  },
  "hiring-capacity": {
    type: "skill",
    name: "first-hire-brief",
    reason: "Team capacity is the main limiter to execution speed.",
  },
  "ops-drift": {
    type: "skill",
    name: "weekly-founder-review",
    reason: "The system needs a tighter operating rhythm and decision cadence.",
  },
  "founder-focus": {
    type: "skill",
    name: "co-founder",
    reason: "The founder needs focus and prioritization more than another isolated artifact.",
  },
};

const readinessGates: Record<string, string[]> = {
  "build-readiness": [
    "problem-validation-report.md",
    "customer-profile.md",
    "mvp-brief.md",
    "implementation-plan.md",
    "architecture-overview.md",
  ],
  "launch-readiness": [
    "positioning.md",
    "pricing-model.md",
    "landing-page-copy.md",
    "launch-plan.md",
    "release-readiness.md",
  ],
  "pmf-review-readiness": [
    "north-star.md",
    "pmf-assessment.md",
    "support-insights.md",
    "churn-diagnosis.md",
  ],
};

export { detectPrimaryBottleneck } from "./bottleneck-router.js";

export function recommendNextMove(
  state: CompanyState,
  options: {
    artifactIndex?: ArtifactIndex;
    sequenceState?: SequenceState;
    catalog?: FounderCatalog;
    explicitName?: string;
  } = {},
): FounderRecommendation {
  const catalog = options.catalog;
  const bottleneck = detectPrimaryBottleneck(state);

  if (options.explicitName) {
    return {
      type: findSequence(catalog, options.explicitName) ? "sequence" : "skill",
      name: options.explicitName,
      reason: "The founder explicitly asked for this workflow.",
      bottleneck,
      source: "explicit",
      expectedOutputs: findSkill(catalog, options.explicitName)?.outputs,
    };
  }

  const sequenceRecommendation = recommendFromActiveSequence(bottleneck, options.sequenceState, options.artifactIndex, catalog);
  if (sequenceRecommendation) return sequenceRecommendation;

  const gateRecommendation = recommendFromReadinessGate(bottleneck, options.artifactIndex, catalog);
  if (gateRecommendation) return gateRecommendation;

  const base = bottleneckDefaults[bottleneck];
  const skill = base.type === "skill" ? findSkill(catalog, base.name) : undefined;

  return {
    ...base,
    bottleneck,
    source: "bottleneck",
    expectedOutputs: skill?.outputs,
  };
}

function recommendFromActiveSequence(
  bottleneck: Bottleneck,
  sequenceState: SequenceState | undefined,
  artifactIndex: ArtifactIndex | undefined,
  catalog: FounderCatalog | undefined,
): FounderRecommendation | null {
  if (!sequenceState?.activeSequence || !catalog || !artifactIndex) return null;
  const sequence = findSequence(catalog, sequenceState.activeSequence);
  if (!sequence) return null;

  const nextStepName =
    sequenceState.steps?.find((step) => step.status === "current")?.name ??
    determineNextSequenceStep(sequence, catalog.skills, artifactIndex, sequenceState.blockedBy ?? []);

  if (!nextStepName) return null;
  const skill = findSkill(catalog, nextStepName);

  return {
    type: "skill",
    name: nextStepName,
    reason: `Continue ${sequence.name}: ${nextStepName} is the next unresolved step in the active company workflow.`,
    bottleneck,
    source: "sequence",
    activeSequence: sequence.name,
    expectedOutputs: skill?.outputs,
  };
}

function recommendFromReadinessGate(
  bottleneck: Bottleneck,
  artifactIndex: ArtifactIndex | undefined,
  catalog: FounderCatalog | undefined,
): FounderRecommendation | null {
  if (!artifactIndex || !catalog) return null;
  const gateName = gateForBottleneck(bottleneck);
  if (!gateName) return null;

  const missingArtifacts = readinessGates[gateName].filter((artifact) => !hasArtifact(artifactIndex, artifact));
  if (missingArtifacts.length === 0) return null;

  const nextArtifact = missingArtifacts[0];
  const nextSkill = catalog.skills.find((skill) => skill.outputs.includes(nextArtifact));
  if (!nextSkill) return null;

  return {
    type: "skill",
    name: nextSkill.name,
    reason: `${gateName} is blocked because ${nextArtifact} is missing or stale. Produce it before branching into lower-leverage work.`,
    bottleneck,
    source: "gate",
    missingArtifacts,
    expectedOutputs: nextSkill.outputs,
  };
}

function gateForBottleneck(bottleneck: Bottleneck): string | null {
  if (["build-confidence", "architecture-risk", "design-implementation-gap", "qa-risk", "release-risk"].includes(bottleneck)) {
    return "build-readiness";
  }
  if (["positioning-weakness", "launch-readiness", "sales-motion-weakness", "pipeline-weakness", "marketing-clarity", "seo-geo-gap", "ads-efficiency"].includes(bottleneck)) {
    return "launch-readiness";
  }
  if (["activation-weakness", "retention-weakness", "pmf-uncertainty", "support-friction"].includes(bottleneck)) {
    return "pmf-review-readiness";
  }
  return null;
}

function determineNextSequenceStep(
  sequence: CanonicalSequence,
  skills: CanonicalSkill[],
  artifactIndex: ArtifactIndex,
  blockedBy: string[],
): string | undefined {
  const blocked = new Set(blockedBy);
  for (const stepName of sequence.steps) {
    if (blocked.has(stepName)) continue;
    const skill = skills.find((candidate) => candidate.name === stepName);
    if (!skill) return stepName;
    const isDone = skill.outputs.length > 0 && skill.outputs.every((output) => hasArtifact(artifactIndex, output));
    if (!isDone) return stepName;
  }
  return undefined;
}

function findSkill(catalog: FounderCatalog | undefined, name: string): CanonicalSkill | undefined {
  return catalog?.skills.find((skill) => skill.name === name);
}

function findSequence(catalog: FounderCatalog | undefined, name: string): CanonicalSequence | undefined {
  return catalog?.sequences.find((sequence) => sequence.name === name);
}
