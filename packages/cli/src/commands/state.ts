import path from "node:path";
import { loadAllCanonicalSequences, loadAllCanonicalSkills } from "../../../core/src/loaders/index.js";
import { recommendNextMove } from "../../../orchestrator/src/founder-partner.js";
import {
  ensureFounderWorkspace,
  readArtifactIndex,
  readCompanyState,
  readSequenceState,
  writeCompanyState,
  writeRecommendedNextStep,
  type EnsureWorkspaceOptions,
} from "../../../state/src/workspace.js";

const VALID_STAGES = ["idea", "validating", "building", "launched", "revenue", "growing"] as const;

export function initStateCommand(rootDir: string, projectDir: string, options: EnsureWorkspaceOptions = {}) {
  const catalog = loadCatalog(rootDir);
  validateEnsureWorkspaceOptions(options, catalog);
  return ensureFounderWorkspace(path.resolve(projectDir), catalog, options);
}

export function recommendStateCommand(rootDir: string, projectDir: string) {
  const resolvedProjectDir = path.resolve(projectDir);
  const catalog = loadCatalog(rootDir);
  const workspace = ensureFounderWorkspace(resolvedProjectDir, catalog);
  const recommendation = recommendNextMove(workspace.companyState, {
    artifactIndex: workspace.artifactIndex,
    sequenceState: workspace.sequenceState,
    catalog,
  });

  writeRecommendedNextStep(resolvedProjectDir, recommendation);
  const currentState = readCompanyState(resolvedProjectDir);
  writeCompanyState(resolvedProjectDir, {
    ...currentState,
    focus: {
      ...currentState.focus,
      recommendedNext: {
        type: recommendation.type,
        name: recommendation.name,
        reason: recommendation.reason,
      },
    },
    stateMeta: {
      ...currentState.stateMeta,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
  });

  return {
    recommendation,
    companyState: readCompanyState(resolvedProjectDir),
    artifactIndex: readArtifactIndex(resolvedProjectDir),
    sequenceState: readSequenceState(resolvedProjectDir),
  };
}

function loadCatalog(rootDir: string) {
  return {
    skills: loadAllCanonicalSkills(rootDir),
    sequences: loadAllCanonicalSequences(rootDir),
  };
}

function validateEnsureWorkspaceOptions(options: EnsureWorkspaceOptions, catalog: ReturnType<typeof loadCatalog>) {
  if (options.stage && !VALID_STAGES.includes(options.stage)) {
    throw new Error(`Unknown stage '${options.stage}'. Valid stages: ${VALID_STAGES.join(", ")}`);
  }

  if (options.activeSequence && !catalog.sequences.some((sequence) => sequence.name === options.activeSequence)) {
    throw new Error(
      `Unknown sequence '${options.activeSequence}'. Valid sequences: ${catalog.sequences.map((sequence) => sequence.name).join(", ")}`,
    );
  }
}
