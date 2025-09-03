/**
 * POS Constants - Main Package Export
 *
 * High-performance, type-safe constants library for POS applications.
 * This package provides simple, fast access to actions, permissions, and collections.
 */

// Exports all actions, permissions, and collections
export { ACTIONS } from "./actions";
export { PERMISSIONS } from "./permissions";
export { COLLECTIONS } from "./collections";

// Individual Domain Exports for Direct Access
export { SVC_TENANT_ACTIONS } from "./actions/tenant.actions";

export { SVC_TENANT_COLLECTIONS } from "./collections/tenant.collections";
