import type { ValidationRule } from "graphql";
import { createDepthLimitRule } from "graphql-safe-depth";
import { createComplexityLimitRule } from "graphql-complexity-validation";
import { GraphQLSafeGuardsOptions } from "./types";
import { SAFE_GUARD_PRESETS } from "./presets";

export function createSafeGuards(
  options: GraphQLSafeGuardsOptions = {},
): ValidationRule[] {
  const presetConfig = options.preset
    ? SAFE_GUARD_PRESETS[options.preset]
    : undefined;
  const depth = options.depth ?? presetConfig?.depth ?? 5;
  const complexity = options.complexity ?? presetConfig?.complexity ?? 100;

  return [
    createDepthLimitRule({ maxDepth: depth }),
    createComplexityLimitRule({ maxComplexity: complexity }),
  ];
}
