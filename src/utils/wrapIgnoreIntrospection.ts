import { ValidationRule, ValidationContext, ASTVisitor } from "graphql";

const INTROSPECTION_FIELDS = new Set(["__schema", "__type"]);
export function wrapIgnoreIntrospection(rule: ValidationRule): ValidationRule {
  return (context: ValidationContext) => {
    const visitor = rule(context) as ASTVisitor | void;

    return {
      Field(node) {
        // Ignora introspection sin romper traversal
        if (INTROSPECTION_FIELDS.has(node.name.value)) {
          return null;
        }

        // Delegate safely if Field visitor exists
        const fieldVisitor = (visitor as any)?.Field;
        if (typeof fieldVisitor === "function") {
          return fieldVisitor(node);
        }

        return undefined;
      },
    };
  };
}
