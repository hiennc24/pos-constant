/**
 * Collections Registry - Main Export
 *
 * This module provides a centralized registry of all database collections
 * organized by domain for easy access and type safety.
 */

import { CollectionsRegistry } from "../types";
import { SVC_TENANT_COLLECTIONS } from "./tenant.collections";

/**
 * Collections Registry
 *
 * Contains all database collections organized by domain.
 * This provides a clean, type-safe interface for accessing collections.
 */
export const COLLECTIONS: CollectionsRegistry = {
  SVC_TENANT: SVC_TENANT_COLLECTIONS,
} as const;

// Individual domain exports for direct access
export { SVC_TENANT_COLLECTIONS } from "./tenant.collections";

// Type exports
export type { CollectionsRegistry, DomainCollections } from "../types";
