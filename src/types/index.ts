/**
 * Simplified Types for POS Constants
 *
 * This module provides simple, performance-optimized type definitions
 * for the pos-constant package.
 */

/**
 * Business Domain Types
 */
export type BusinessDomain =
  | "SVC_TENANT"
  | "SVC_AUTH_AUTHENTICATIONS"
  | "SVC_AUTH_AUTHORIZATIONS_TENANT_ROLE"
  | "SVC_AUTH_ACCOUNTS"
  | "SVC_PARTNERS"
  | "SVC_UNITS"
  | "SVC_CURRENCIES"
  | "SVC_VOUCHER_TYPES"
  | "SVC_COUNTRIES"
  | "SVC_PARTNER_GROUPS";
// | "SVC_ACCOUNT"
// | "SVC_GIT_PROJECT"
// | "SVC_ROLE"
// | "SVC_SERVER"
// | "SVC_SERVICE"
// | "SVC_SETTING"
// | "SVC_USER";

/**
 * Action Category Types
 */
export type ActionCategory = "CREATE" | "READ" | "UPDATE" | "DELETE" | "CUSTOM";

/**
 * Permission Level Types
 */
export type PermissionLevel = "READ" | "WRITE" | "DELETE" | "ADMIN";

/**
 * Collection Type
 */
export type CollectionType = "MASTER" | "TRANSACTION" | "AUDIT" | "CONFIG";

/**
 * Domain Actions Type
 * Maps action keys to string values
 */
export type DomainActions = Record<string, string>;

/**
 * Domain Permissions Type
 * Maps permission keys to string values
 */
export type DomainPermissions = Record<string, string>;

/**
 * Domain Collections Type
 * Maps collection keys to string values
 */
export type DomainCollections = Record<string, string>;

/**
 * Actions Registry Type
 * Organized by domain
 */
export type ActionsRegistry = Record<BusinessDomain, DomainActions>;

/**
 * Permissions Registry Type
 * Organized by domain
 */
export type PermissionsRegistry = Record<BusinessDomain, DomainPermissions>;

/**
 * Collections Registry Type
 * Organized by domain
 */
export type CollectionsRegistry = Record<BusinessDomain, DomainCollections>;

/**
 * Main Package Exports Type
 */
export interface PosConstants {
  readonly ACTIONS: ActionsRegistry;
  readonly PERMISSIONS: PermissionsRegistry;
  readonly COLLECTIONS: CollectionsRegistry;
}
