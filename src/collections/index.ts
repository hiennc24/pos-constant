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
import { DomainCollections } from "../types";

export type CollectionsConstantType = {
  [key in keyof typeof COLLECTIONS]: (typeof COLLECTIONS)[key];
};

const COLLECTIONS: DomainCollections = {
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

  GROUP_COLLECTION_NAME: "partner_group",
  GROUP_REPOSITORY_NAME: "partner_groups",

  PARTNER_COLLECTION_NAME: "partner",
  PARTNER_REPOSITORY_NAME: "partners",

  DEPARTMENT_COLLECTION_NAME: "department",
  DEPARTMENT_REPOSITORY_NAME: "departments",

  POSITION_COLLECTION_NAME: "position",
  POSITION_REPOSITORY_NAME: "positions",

  ADMINISTRATION_ITEMS_COLLECTION_NAME: "administrationItem",
  ADMINISTRATION_ITEMS_REPOSITORY_NAME: "administration_items",

  CUSTOMER_COLLECTION_NAME: "customer",
  CUSTOMER_REPOSITORY_NAME: "customers",

  GROUP_LABEL_COLLECTION_NAME: "groupLabel",
  GROUP_LABEL_REPOSITORY_NAME: "group_labels",

  // danh mục tiền tệ
  CURRENCY_COLLECTION_NAME: "currency",
  CURRENCY_REPOSITORY_NAME: "currencies",

  // Danh mục quốc gia
  COUNTRY_COLLECTION_NAME: "country",
  COUNTRY_REPOSITORY_NAME: "countries",

  // Danh mục đơn vị tính
  UNIT_COLLECTION_NAME: "unit",
  UNIT_REPOSITORY_NAME: "units",

  // Danh mục chứng từ
  VOUCHER_TYPE_COLLECTION_NAME: "voucherType",
  VOUCHER_TYPE_REPOSITORY_NAME: "voucher_types",
} as const;

export default COLLECTIONS;
