import type { ValidationRule } from "graphql";
import { createDepthLimitRule } from "graphql-safe-depth";
import { createComplexityLimitRule } from "graphql-complexity-validation";
import { GraphQLSafeGuardsOptions } from "./types";

export function graphqlSafeGuards(
  options: GraphQLSafeGuardsOptions = {},
): ValidationRule[] {
  const { depth = 5, complexity = 100 } = options;

  return [
    createDepthLimitRule({ maxDepth: depth }),
    createComplexityLimitRule({ maxComplexity: complexity }),
  ];
}
