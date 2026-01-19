import { describe, it, expect } from "vitest";
import { graphqlSafeGuards } from "../src";

describe("graphqlSafeGuards", () => {
  it("returns validation rules", () => {
    const rules = graphqlSafeGuards({
      depth: 3,
      complexity: 10,
    });

    expect(rules).toHaveLength(2);
    expect(typeof rules[0]).toBe("function");
    expect(typeof rules[1]).toBe("function");
  });
});
