import { describe, it, expect } from "vitest";
import { createSafeGuards } from "../src";

describe("createSafeGuards", () => {
  it("uses strict preset", () => {
    const rules = createSafeGuards({ preset: "strict" });

    expect(rules).toHaveLength(2);
  });

  it("allows overriding preset values", () => {
    const rules = createSafeGuards({
      preset: "strict",
      depth: 10,
    });

    expect(rules).toHaveLength(2);
  });

  it("works without preset (backward compatible)", () => {
    const rules = createSafeGuards({
      depth: 4,
      complexity: 20,
    });

    expect(rules).toHaveLength(2);
  });
});
