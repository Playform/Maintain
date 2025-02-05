import type Zod from "zod";
/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Variable>;
export type { Type as default };
declare const Variable: any;
