import type { ValidationRule } from "graphql";
import { createDepthLimitRule } from "graphql-safe-depth";
import { createComplexityLimitRule } from "graphql-complexity-validation";
import { GraphQLSafeGuardsOptions } from "./types";
import { SAFE_GUARD_PRESETS } from "./presets";
import { wrapIgnoreIntrospection } from "./utils/wrapIgnoreIntrospection";

export function createSafeGuards(
  options: GraphQLSafeGuardsOptions = {},
): ValidationRule[] {
  const presetConfig = options.preset
    ? SAFE_GUARD_PRESETS[options.preset]
    : SAFE_GUARD_PRESETS.strict;

  const depth = options.depth ?? presetConfig.depth;

  const complexity = options.complexity ?? presetConfig.complexity;

  const ignoreIntrospection =
    options.ignoreIntrospection ?? presetConfig.ignoreIntrospection;

  let rules: ValidationRule[] = [
    createDepthLimitRule({ maxDepth: depth }),
    createComplexityLimitRule({ maxComplexity: complexity }),
  ];

  if (ignoreIntrospection) {
    rules = rules.map((rule) => wrapIgnoreIntrospection(rule));
  }

  return rules;
}
