/**
 * Collections Registry - Main Export
 *
 * This module provides a centralized registry of all database collections
 * organized by domain for easy access and type safety.
 */

/**
 * Collections Registry
 *
 * Contains all database collections organized by domain.
 * This provides a clean, type-safe interface for accessing collections.
 */
export const COLLECTIONS = {
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

  // Common Management Collections
  COMMON_COLLECTION_NAME: "common",
  COMMON_REPOSITORY_NAME: "commons",

  // Core Management Collections
  EMPLOYEE_REPOSITORY_NAME: "employees",
  EMPLOYEE_COLLECTION_NAME: "employee",

  // Business Management Collections
  BUSINESS_COLLECTION_NAME: "business",
  BUSINESS_REPOSITORY_NAME: "businesses",
} as const;

// Type exports
export type { CollectionsRegistry, DomainCollections } from "../types";
