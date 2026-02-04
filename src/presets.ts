export const SAFE_GUARD_PRESETS = {
  strict: {
    depth: 3,
    complexity: 50,
    ignoreIntrospection: false,
  },
  balanced: {
    depth: 5,
    complexity: 100,
    ignoreIntrospection: true,
  },
  relaxed: {
    depth: 8,
    complexity: 200,
    ignoreIntrospection: true,
  },
} as const;
