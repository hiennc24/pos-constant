/**
 * Tenant Collections - TENANT Domain
 *
 * Simple, performance-optimized collection constants for tenant domain.
 * All collections follow the KEY: "value" format for maximum performance.
 */

import { DomainCollections } from "../types";

/**
 * Tenant Collections
 *
 * Contains all tenant-related database collections as simple string constants.
 * This provides maximum performance with zero runtime overhead.
 */
export const SVC_TENANT_COLLECTIONS: DomainCollections = {
  // Tenant Management Collections
  TENANT_COLLECTION_NAME: "tenant",
  TENANT_REPOSITORY_NAME: "tenants",

  // Account Management Collections
  ACCOUNT_COLLECTION_NAME: "account",
  ACCOUNT_REPOSITORY_NAME: "accounts",

  // Git project
  GIT_PROJECT_COLLECTION_NAME: "git_project",
  GIT_PROJECT_REPOSITORY_NAME: "git_projects",

  // Role Management Collections
  ROLE_COLLECTION_NAME: "role",
  ROLE_REPOSITORY_NAME: "roles",

  // Git branch
  SERVER_COLLECTION_NAME: "server",
  SERVER_REPOSITORY_NAME: "servers",

  // Git commit
  SERVICE_COLLECTION_NAME: "service",
  SERVICE_REPOSITORY_NAME: "services",

  // Git commit
  SETTING_COLLECTION_NAME: "setting",
  SETTING_REPOSITORY_NAME: "settings",
} as const;
