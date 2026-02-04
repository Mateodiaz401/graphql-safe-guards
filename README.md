![CI](https://github.com/Mateodiaz401/graphql-safe-guards/actions/workflows/ci.yml/badge.svg)
![npm](https://img.shields.io/npm/v/graphql-safe-guards)
![downloads](https://img.shields.io/npm/dm/graphql-safe-guards)
![license](https://img.shields.io/npm/l/graphql-safe-guards)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

# graphql-safe-guards

Protect your GraphQL API with a single import.

A tiny utility that **combines depth limiting and query complexity validation**
using **native GraphQL validation rules**.

---

## Installation

```bash
npm install graphql-safe-guards
```

---

## Usage (Apollo Server)

```ts
import { ApolloServer } from "@apollo/server";
import { createSafeGuards } from "graphql-safe-guards";

const server = new ApolloServer({
  schema,
  validationRules: createSafeGuards({
    depth: 3,
    complexity: 10,
  }),
});
```

---

## Configuration

```ts
createSafeGuards({
  depth?: number;       // default: 3 (strict preset)
  complexity?: number;  // default: 50 (strict preset)

  /**
   * If true, GraphQL introspection queries are ignored
   * by depth and complexity validation.
   *
   * Useful for GraphQL Playground / Apollo Sandbox.
   */
  ignoreIntrospection?: boolean; // default: false
});
```

Security Note ⚠️

- This library does not enable or disable GraphQL introspection

- Introspection is controlled by your GraphQL server (e.g. Apollo Server)
  For private APIs with documentation enabled, the recommended setup is:

```ts
const server = new ApolloServer({
  schema,
  introspection: true,
  validationRules: createSafeGuards({
    depth: 3,
    complexity: 10,
    ignoreIntrospection: true,
  }),
});
```

## Presets (Recommended)

graphql-safe-guards includes opinionated, production-ready presets for common use cases.

```ts
createSafeGuards({ preset: "strict" });
createSafeGuards({ preset: "balanced" });
createSafeGuards({ preset: "relaxed" });
```

| Preset   | Depth | Complexity | Use case                    |
| -------- | ----- | ---------- | --------------------------- |
| strict   | 3     | 50         | Public APIs, read-only APIs |
| balanced | 4     | 100        | Private frontends           |
| relaxed  | 6     | 200        | Admin / internal tools      |

---

## What It Does

- Limits query depth
- Limits query complexity
- Uses native GraphQL validation
- No schema directives
- No runtime execution cost
- Framework agnostic

Internally, this package composes:

- `graphql-safe-depth`
- `graphql-complexity-validation`

The combination is validated through integration tests using native GraphQL validation.

---

## Supported Frameworks

- Apollo Server
- GraphQL Yoga
- Envelop
- NestJS GraphQL
- Plain `graphql-js`

---

## Why this exists

Depth limiting and complexity analysis solve **different problems**.
Most GraphQL servers need **both**, but wiring them together is repetitive.

`graphql-safe-guards` provides a **single, predictable entry point**
for GraphQL query safety.

### Environment-based setup

```ts
createSafeGuards({
  preset: process.env.NODE_ENV === "production" ? "strict" : "balanced",
});
```

---

## 🗺️ Roadmap

### v1.x (current)

- ✅ Combine depth + complexity validation
- ✅ Presets support (`strict`, `balanced`, `relaxed`)
- ✅ Backward-compatible API
- ✅ Integration tests with `graphql-js`
- 🔜 Additional presets based on community feedback

> Roadmap items may change based on feedback and real-world usage.

## License

MIT © Mateo Diaz
