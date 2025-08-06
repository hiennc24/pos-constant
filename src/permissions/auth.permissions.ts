/**
 * Authentication Permissions - AUTH Domain
 *
 * Simple, performance-optimized permission constants for authentication domain.
 * All permissions follow the KEY: "value" format for maximum performance.
 */

import { DomainPermissions } from "../types";

/**
 * Authentication Permissions
 *
 * Contains all authentication-related permissions as simple string constants.
 * This provides maximum performance with zero runtime overhead.
 */
export const AUTH_PERMISSIONS: DomainPermissions = {
  // User Authentication Permissions
  AUTH_USER_LOGIN: "AUTH_USER_LOGIN",
  AUTH_USER_LOGOUT: "AUTH_USER_LOGOUT",
  AUTH_USER_REGISTER: "AUTH_USER_REGISTER",
  AUTH_USER_VERIFY_EMAIL: "AUTH_USER_VERIFY_EMAIL",
  AUTH_USER_RESET_PASSWORD: "AUTH_USER_RESET_PASSWORD",
  AUTH_USER_CHANGE_PASSWORD: "AUTH_USER_CHANGE_PASSWORD",

  // Session Management Permissions
  AUTH_SESSION_CREATE: "AUTH_SESSION_CREATE",
  AUTH_SESSION_REFRESH: "AUTH_SESSION_REFRESH",
  AUTH_SESSION_REVOKE: "AUTH_SESSION_REVOKE",

  // Two-Factor Authentication Permissions
  AUTH_TFA_ENABLE: "AUTH_TFA_ENABLE",
  AUTH_TFA_DISABLE: "AUTH_TFA_DISABLE",
  AUTH_TFA_VERIFY: "AUTH_TFA_VERIFY",

  // OAuth Permissions
  AUTH_OAUTH_AUTHORIZE: "AUTH_OAUTH_AUTHORIZE",
  AUTH_OAUTH_TOKEN: "AUTH_OAUTH_TOKEN",

  // API Key Permissions
  AUTH_API_KEY_CREATE: "AUTH_API_KEY_CREATE",
  AUTH_API_KEY_REVOKE: "AUTH_API_KEY_REVOKE",
} as const;
