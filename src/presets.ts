export const SAFE_GUARD_PRESETS = {
  strict: {
    depth: 3,
    complexity: 50,
  },
  balanced: {
    depth: 5,
    complexity: 100,
  },
  relaxed: {
    depth: 8,
    complexity: 200,
  },
} as const;
