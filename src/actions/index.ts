/**
 * Actions Registry - Main Export
 *
 * This module provides a centralized registry of all business actions
 * organized by domain for easy access and type safety.
 */

import { ActionsRegistry } from "../types";
import { SVC_TENANT_ACTIONS } from "./tenant.actions";
import { SVC_SHARED_ACTIVITY_LOGS } from "./share.actions";
import {
  SVC_AUTH_AUTHENTICATIONS,
  SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE,
  SVC_AUTH_ACCOUNTS,
} from "./auth.actions";
/**
 * Actions Registry
 *
 * Contains all business actions organized by domain.
 * This provides a clean, type-safe interface for accessing actions.
 */
export const ACTIONS: ActionsRegistry = {
  SVC_TENANT: SVC_TENANT_ACTIONS,
  SVC_AUTH_AUTHENTICATIONS: SVC_AUTH_AUTHENTICATIONS,
  SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE: SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE,
  SVC_AUTH_ACCOUNTS: SVC_AUTH_ACCOUNTS,
  SVC_SHARED_ACTIVITY_LOGS: SVC_SHARED_ACTIVITY_LOGS,
};

// Individual domain exports for direct access
export { SVC_TENANT_ACTIONS } from "./tenant.actions";

// Utility exports
export * from "./utils";

// Type exports
export type { ActionsRegistry, DomainActions } from "../types";
