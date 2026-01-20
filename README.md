# graphql-safe-guards

Protect your GraphQL API with a single import.

A tiny utility that **combines depth limiting and query complexity validation**
using native GraphQL validation rules.

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
  depth?: number;       // default: 5
  complexity?: number;  // default: 100
});
```

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

---

## License

MIT © Mateo Diaz
