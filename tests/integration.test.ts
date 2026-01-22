import { buildSchema, parse, validate } from "graphql";
import { describe, it, expect } from "vitest";
import { createSafeGuards } from "../src";

describe("graphql-safe-guards integration", () => {
  it("blocks query exceeding depth and complexity", () => {
    const schema = buildSchema(`
      type Query {
        user: User
      }

      type User {
        posts: [Post]
      }

      type Post {
        comments: [Comment]
      }

      type Comment {
        id: ID
      }
    `);

    const query = `
      query {
        user {
          posts {
            comments {
              id
            }
          }
        }
      }
    `;

    const errors = validate(
      schema,
      parse(query),
      createSafeGuards({
        depth: 2,
        complexity: 3,
      }),
    );

    expect(errors.length).toBeGreaterThan(0);
  });

  it("allows introspection when ignoreIntrospection is true", () => {
    const schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

    const introspectionQuery = `
    query {
      __schema {
        types {
          name
        }
      }
    }
  `;

    const errors = validate(
      schema,
      parse(introspectionQuery),
      createSafeGuards({
        depth: 1,
        complexity: 1,
        ignoreIntrospection: true,
      }),
    );

    expect(errors.length).toBe(0);
  });
});
