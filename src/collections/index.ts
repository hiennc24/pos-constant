/**
 * Collections Registry - Main Export
 *
 * This module provides a centralized registry of all database collections
 * organized by domain for easy access and type safety.
 */

import { CollectionsRegistry } from "../types";
import { SVC_TENANT_COLLECTIONS } from "./tenant.collections";
import {
  SVC_AUTH_AUTHENTICATIONS_COLLECTIONS,
  SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE_COLLECTIONS,
} from "./auth.collections";

/**
 * Collections Registry
 *
 * Contains all database collections organized by domain.
 * This provides a clean, type-safe interface for accessing collections.
 */
export const COLLECTIONS: CollectionsRegistry = {
  SVC_TENANT: SVC_TENANT_COLLECTIONS,
  SVC_AUTH_AUTHENTICATIONS: SVC_AUTH_AUTHENTICATIONS_COLLECTIONS,
  SVC_AUTH_ACCOUNTS: SVC_AUTH_AUTHENTICATIONS_COLLECTIONS,
  SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE:
    SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE_COLLECTIONS,
} as const;

// Individual domain exports for direct access
export { SVC_TENANT_COLLECTIONS } from "./tenant.collections";
export {
  SVC_AUTH_AUTHENTICATIONS_COLLECTIONS,
  SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE_COLLECTIONS,
} from "./auth.collections";

// Type exports
export type { CollectionsRegistry, DomainCollections } from "../types";
