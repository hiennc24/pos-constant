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
  ACCOUNT_COLLECTION_NAME: "account",
  ACCOUNT_REPOSITORY_NAME: "accounts",
  GIT_PROJECT_COLLECTION_NAME: "git_project",
  GIT_PROJECT_REPOSITORY_NAME: "git_projects",
  ROLE_COLLECTION_NAME: "role",
  ROLE_REPOSITORY_NAME: "roles",
  SERVER_COLLECTION_NAME: "server",
  SERVER_REPOSITORY_NAME: "servers",
  SERVICE_COLLECTION_NAME: "service",
  SERVICE_REPOSITORY_NAME: "services",
  SETTING_COLLECTION_NAME: "setting",
  SETTING_REPOSITORY_NAME: "settings",
  REFRESH_TOKEN_COLLECTION_NAME: "refresh_token",
  REFRESH_TOKEN_REPOSITORY_NAME: "refresh_tokens",
  TENANT_USER_REPOSITORY_NAME: "tentant_users",
  TENANT_USER_COLLECTION_NAME: "tenant_user",
  TENANT_ROLE_REPOSITORY_NAME: "tentant_roles",
  TENANT_ROLE_COLLECTION_NAME: "tentant_role",

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
