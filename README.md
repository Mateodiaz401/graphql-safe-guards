# graphql-safe-guards

Protect your GraphQL API with a single import.

## Installation

npm install graphql-safe-guards

## Usage

```ts
import { graphqlSafeGuards } from "graphql-safe-guards";

const server = new ApolloServer({
  schema,
  validationRules: graphqlSafeGuards({
    depth: 3,
    complexity: 10,
  }),
});
```

What it includes

- Query depth limiting
- Query complexity limiting
- Sensible defaults
- Framework agnostic

---
