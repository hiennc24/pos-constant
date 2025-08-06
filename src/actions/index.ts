/**
 * Actions Registry - Main Export
 *
 * This module provides a centralized registry of all business actions
 * organized by domain for easy access and type safety.
 */

import { ActionsRegistry } from "../types";
import { SVC_TENANT_ACTIONS } from "./tenant.actions";
/**
 * Actions Registry
 *
 * Contains all business actions organized by domain.
 * This provides a clean, type-safe interface for accessing actions.
 */
export const ACTIONS: ActionsRegistry = {
  SVC_TENANT: SVC_TENANT_ACTIONS,
};

// Individual domain exports for direct access
export { SVC_TENANT_ACTIONS } from "./tenant.actions";

// Utility exports
export * from "./utils";

// Type exports
export type { ActionsRegistry, DomainActions } from "../types";
