/**
 * Tenant Permissions - SVC_TENANT Domain
 *
 * Simple, performance-optimized permission constants for tenant domain.
 * All permissions follow the KEY: "value" format for maximum performance.
 */

import { DomainPermissions } from "../types";

/**
 * Tenant Permissions
 *
 * Contains all tenant-related permissions as simple string constants.
 * This provides maximum performance with zero runtime overhead.
 */
export const SVC_TENANT_PERMISSIONS: DomainPermissions = {
  // Tenant Management Permissions
  SVC_TENANT_CREATE: "SVC_TENANT_CREATE",
  SVC_TENANT_READ: "SVC_TENANT_READ",
  SVC_TENANT_UPDATE: "SVC_TENANT_UPDATE",
  SVC_TENANT_DELETE: "SVC_TENANT_DELETE",

  // Tenant List Permissions
  SVC_TENANT_LIST: "SVC_TENANT_LIST",
  SVC_TENANT_GET: "SVC_TENANT_GET",

  // Tenant Migration Permissions
  SVC_TENANT_MIGRATE: "SVC_TENANT_MIGRATE",
  SVC_TENANT_CHECK_TAX_CODE: "SVC_TENANT_CHECK_TAX_CODE",

  // Tenant Migration Data Permissions
  SVC_TENANT_MIGRATE_DATA: "SVC_TENANT_MIGRATE_DATA",
} as const;
