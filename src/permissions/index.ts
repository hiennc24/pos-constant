/**
 * Permissions Registry - Main Export
 *
 * This module provides a centralized registry of all permissions
 * organized by domain for easy access and type safety.
 */

import { PermissionsRegistry } from "../types";
// import { BUSINESS_PERMISSIONS } from "./business.permissions";
import { SVC_TENANT_PERMISSIONS } from "./tenant.permissions";

/**
 * Permissions Registry
 *
 * Contains all permissions organized by domain.
 * This provides a clean, type-safe interface for accessing permissions.
 */
export const PERMISSIONS: PermissionsRegistry = {
  SVC_TENANT: SVC_TENANT_PERMISSIONS,
  // Placeholder domains for future expansion
  // SVC_ACCOUNT: {} as const,
  // SVC_GIT_PROJECT: {} as const,
  // SVC_ROLE: {} as const,
  // SVC_SERVER: {} as const,
  // SVC_SERVICE: {} as const,
  // SVC_SETTING: {} as const,
  // SVC_USER: {} as const,
} as const;

// Individual domain exports for direct access
// export { BUSINESS_PERMISSIONS } from "./business.permissions";
export { SVC_TENANT_PERMISSIONS } from "./tenant.permissions";

// Type exports
export type { PermissionsRegistry, DomainPermissions } from "../types";
