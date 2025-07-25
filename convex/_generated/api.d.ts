/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as lib_customizations from "../lib/customizations.js";
import type * as lib_getBaseUrl from "../lib/getBaseUrl.js";
import type * as lib_links from "../lib/links.js";
import type * as lib_usernames from "../lib/usernames.js";
import type * as myFunctions from "../myFunctions.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "lib/customizations": typeof lib_customizations;
  "lib/getBaseUrl": typeof lib_getBaseUrl;
  "lib/links": typeof lib_links;
  "lib/usernames": typeof lib_usernames;
  myFunctions: typeof myFunctions;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
