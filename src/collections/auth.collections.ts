/**
 * Tenant Collections - TENANT Domain
 *
 * Simple, performance-optimized collection constants for tenant domain.
 * All collections follow the KEY: "value" format for maximum performance.
 */

import { DomainCollections } from "../types";

/**
 * Authentication Collections
 *
 * Contains all tenant-related database collections as simple string constants.
 * This provides maximum performance with zero runtime overhead.
 */
export const SVC_AUTH_AUTHENTICATIONS_COLLECTIONS: DomainCollections = {
  // Tenant User Collections
  TENANT_USER_REPOSITORY_NAME: "tentant_users",
  TENANT_USER_COLLECTION_NAME: "tenant_user",

  // Employee Collections
  EMPLOYEE_REPOSITORY_NAME: "employees",
  EMPLOYEE_COLLECTION_NAME: "employee",

  // Refresh Token Collections
  REFRESH_TOKEN_REPOSITORY_NAME: "refresh_tokens",
  REFRESH_TOKEN_COLLECTION_NAME: "refresh_token",
} as const;

export const SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE_COLLECTIONS: DomainCollections =
  {
    // Tenant Role Collections
    TENANT_ROLE_REPOSITORY_NAME: "tentant_roles",
    TENANT_ROLE_COLLECTION_NAME: "tentant_role",
  } as const;
