import { ValidationRule, ValidationContext, Kind, ASTNode } from "graphql";

export function wrapIgnoreIntrospection(rule: ValidationRule): ValidationRule {
  return (context: ValidationContext) => {
    const visitor = rule(context);

    return {
      Field(node) {
        // Detecta introspection (__schema, __type)
        if (node.name.value.startsWith("__")) {
          return false;
        }

        // Delegamos al visitor original si existe
        const fieldVisitor = (visitor as any)?.Field;
        if (typeof fieldVisitor === "function") {
          return fieldVisitor(node);
        }
      },
    };
  };
}
