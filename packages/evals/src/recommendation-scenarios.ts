import type { ArtifactIndex } from "../../core/src/types/artifact.js";
import type { SequenceState } from "../../core/src/types/sequence.js";
import type { CompanyState } from "../../core/src/types/state.js";
import { recommendNextMove, type FounderCatalog } from "../../orchestrator/src/co-founder.js";

export interface RecommendationScenario {
  name: string;
  state: CompanyState;
  artifactIndex?: ArtifactIndex;
  sequenceState?: SequenceState;
  expected: {
    type: "skill" | "sequence";
    name: string;
    bottleneck?: CompanyState["company"]["currentBottleneck"];
  };
}

export interface RecommendationScenarioResult {
  name: string;
  pass: boolean;
  score: number;
  actual: ReturnType<typeof recommendNextMove>;
}

export function evaluateRecommendationScenario(
  scenario: RecommendationScenario,
  catalog: FounderCatalog,
): RecommendationScenarioResult {
  const actual = recommendNextMove(scenario.state, {
    artifactIndex: scenario.artifactIndex,
    sequenceState: scenario.sequenceState,
    catalog,
  });

  const exactMatch = actual.type === scenario.expected.type && actual.name === scenario.expected.name;
  const bottleneckMatch = scenario.expected.bottleneck ? actual.bottleneck === scenario.expected.bottleneck : true;
  const pass = exactMatch && bottleneckMatch;

  return {
    name: scenario.name,
    pass,
    score: pass ? 1 : 0,
    actual,
  };
}

export function summarizeScenarioResults(results: RecommendationScenarioResult[]) {
  const passed = results.filter((result) => result.pass).length;
  return {
    total: results.length,
    passed,
    failed: results.length - passed,
    passRate: results.length === 0 ? 0 : passed / results.length,
  };
}
