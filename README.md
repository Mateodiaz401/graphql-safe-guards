![CI](https://github.com/Mateodiaz401/graphql-safe-guards/actions/workflows/ci.yml/badge.svg)
![npm](https://img.shields.io/npm/v/graphql-safe-guards)
![downloads](https://img.shields.io/npm/dm/graphql-safe-guards)
![license](https://img.shields.io/npm/l/graphql-safe-guards)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

# graphql-safe-guards 🛡️

Protect your GraphQL API from **deep, expensive, and abusive queries**
by enforcing **query depth** and **query complexity limits before execution**.

A tiny, framework-agnostic utility that combines **depth limiting** and
**query complexity validation** using **native GraphQL validation rules**.

> Designed for production GraphQL APIs, public endpoints, and high-traffic systems.

---

## 🚨 The Problem

GraphQL gives clients a lot of power — sometimes **too much**.

Without safeguards, a single query can:

- Exhaust database connections
- Cause CPU spikes
- Trigger accidental or malicious DoS attacks
- Degrade performance for all users

This is especially dangerous in **public APIs** or **high-traffic applications**.

---

## ✅ The Solution

`graphql-safe-guards` acts as a **logical firewall** for GraphQL queries.

Before **any resolver executes**, it:

- Validates query depth
- Calculates query complexity
- Rejects unsafe operations early

No resolvers are executed.  
No database calls are made.

---

## ✨ Features

- ✅ Limit query depth
- ✅ Limit query complexity
- ✅ Blocks abusive or accidental DoS-style queries
- ✅ Uses native GraphQL validation (AST-based)
- ✅ No schema directives
- ✅ No runtime execution cost
- ✅ Framework-agnostic
- ✅ Production-ready presets

---

## Installation

```bash
npm install graphql-safe-guards
# or
yarn add graphql-safe-guards
```

---

## 🚀 Quick Start (Apollo Server)

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

Any query exceeding the limits will be rejected before execution.

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

Environment-based setup

```ts
createSafeGuards({
  preset: process.env.NODE_ENV === "production" ? "strict" : "balanced",
});
```

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

---

## 🔐 Security Note — Introspection⚠️

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

---

### 🔥 What It Protects Against

Deeply nested queries

```ts
a {
  b {
    c {
      d {
        e {
          f {
            g
          }
        }
      }
    }
  }
}
```

High-cost queries

```ts
posts(limit: 100) {
  comments(limit: 100) {
    author {
      posts(limit: 100)
    }
  }
}
```

---

## 🧠 How It Works

- Parses the GraphQL AST
- Computes depth and complexity
- Runs during the validation phase
- Blocks unsafe queries before execution

Fast, predictable, and scalable.

---

## 🧩 Internals

This package composes and unifies:

- `graphql-safe-depth`
- `graphql-complexity-validation`

Validated through integration tests using native graphql-js validation.

---

## Supported Frameworks

- Apollo Server
- GraphQL Yoga
- Envelop
- NestJS GraphQL
- Plain `graphql-js`

---

## 📊 Production Recommendations

- For best results, combine this library with:
- DataLoader (avoid N+1 queries)
- Pagination on list fields
- HTTP caching / CDN
- Persisted queries (hash-based)

---

## 🗺️ Roadmap

### v1.x (current)

- ✅ Combine depth + complexity validation
- ✅ Presets support (`strict`, `balanced`, `relaxed`)
- ✅ Backward-compatible API
- ✅ Integration tests with `graphql-js`
- 🔜 Additional presets based on community feedback

> Roadmap items may change based on feedback and real-world usage.

## ⭐ Support

If this library helped you secure your GraphQL API,
please consider giving it a ⭐ on GitHub.

## License

MIT © Mateo Diaz
