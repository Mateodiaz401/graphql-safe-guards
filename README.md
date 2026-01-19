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

## 🧠 Lo que acabas de construir (importante)

Ahora tu stack es:

| Paquete                   | Rol                  |
| ------------------------- | -------------------- |
| `graphql-safe-depth`      | 🔒 profundidad       |
| `graphql-safe-complexity` | 🧮 costo             |
| **`graphql-safe-guards`** | 🛡️ solución completa |

Esto **sí** se ve profesional en CV, GitHub y entrevistas.

---

## 🚀 Siguiente pasos recomendados

1️⃣ Publicar `graphql-safe-guards`  
2️⃣ Añadir presets (`strict`, `balanced`)  
3️⃣ Post: _“GraphQL security in one import”_  
4️⃣ README cross-link entre las 3 libs

Si quieres, el próximo mensaje lo hacemos **listo para publicar en npm sin errores** 🔥
