import { SAFE_GUARD_PRESETS } from "./presets";

export type SafeGuardPreset = keyof typeof SAFE_GUARD_PRESETS;

export interface GraphQLSafeGuardsOptions {
  preset?: SafeGuardPreset;
  depth?: number;
  complexity?: number;
}
