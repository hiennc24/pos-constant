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
// export const PERMISSIONS: PermissionsRegistry = {
export const PERMISSIONS = {
  // Master Data Partners Permissions
  PARTNERS: {
    LIST: "master_data:partners:list",
    CREATE: "master_data:partners:create",
    UPDATE: "master_data:partners:update",
    DELETE: "master_data:partners:delete",
    VIEW: "master_data:partners:view",
  },

  // Master Data Partners Group Permissions
  PARTNER_GROUPS: {
    LIST: "master_data:partner_groups:list",
    CREATE: "master_data:partner_groups:create",
    UPDATE: "master_data:partner_groups:update",
    DELETE: "master_data:partner_groups:delete",
    VIEW: "master_data:partner_groups:view",
  },

  // Master Data Products Permissions
  PRODUCTS: {
    LIST: "master_data:products:list",
    CREATE: "master_data:products:create",
    UPDATE: "master_data:products:update",
    DELETE: "master_data:products:delete",
    VIEW: "master_data:products:view",
  },

  REPORTS: {
    VIEW: "analytics:reports:view",
    EXPORT: "analytics:reports:export",
    CREATE: "analytics:reports:create",
  },

  SYSTEM: {
    CONFIG: "system:configuration:manage",
    LOGS: "system:logs:view",
    BACKUP: "system:backup:create",
  },

  // Tenant Management Permissions
  TENANT: {
    CREATE: "system:tenant:create",
    READ: "system:tenant:read",
    UPDATE: "system:tenant:update",
    DELETE: "system:tenant:delete",
    LIST: "system:tenant:list",
    GET: "system:tenant:get",
    MIGRATE: "system:tenant:migrate",
    CHECK_TAX_CODE: "system:tenant:check_tax_code",
    MIGRATE_DATA: "system:tenant:migrate_data",
  },
};

// Type exports
export type { PermissionsRegistry, DomainPermissions } from "../types";
