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

export type CollectionsConstantType = {
  [key in keyof typeof COLLECTIONS]: string;
};

const COLLECTIONS = {
  // Tenant Management Collections
  TENANT_COLLECTION_NAME: "tenant",
  TENANT_REPOSITORY_NAME: "tenants",

  // Account Management Collections
  TENANT_ACCOUNT_COLLECTION_NAME: "tenant_account",
  TENANT_ACCOUNT_REPOSITORY_NAME: "tenant_accounts",

  // Git project
  GIT_PROJECT_COLLECTION_NAME: "git_project",
  GIT_PROJECT_REPOSITORY_NAME: "git_projects",

  // Role Management Collections
  TENANT_ROLE_COLLECTION_NAME: "tenant_role",
  TENANT_ROLE_REPOSITORY_NAME: "tenant_roles",

  // Server Management Collections
  TENANT_SERVER_COLLECTION_NAME: "tenant_server",
  TENANT_SERVER_REPOSITORY_NAME: "tenant_servers",

  // Service Management Collections
  TENANT_SERVICE_COLLECTION_NAME: "tenant_service",
  TENANT_SERVICE_REPOSITORY_NAME: "tenant_services",

  // Setting Management Collections
  TENANT_SETTING_COLLECTION_NAME: "tenant_setting",
  TENANT_SETTING_REPOSITORY_NAME: "tenant_settings",

  // Application Management Collections
  TENANT_APPLICATION_COLLECTION_NAME: "tenant_application",
  TENANT_APPLICATION_REPOSITORY_NAME: "tenant_applications",

  // Common Management Collections
  COMMON_COLLECTION_NAME: "common",
  COMMON_REPOSITORY_NAME: "commons",

  // Core Management Collections
  EMPLOYEE_COLLECTION_NAME: "employee",
  EMPLOYEE_REPOSITORY_NAME: "employees",

  EMPLOYEE_PROFILE_COLLECTION_NAME: "employee_profile",
  EMPLOYEE_PROFILE_REPOSITORY_NAME: "employee_profiles",

  EMPLOYEE_SETTING_COLLECTION_NAME: "employee_setting",
  EMPLOYEE_SETTING_REPOSITORY_NAME: "employee_settings",

  EMPLOYEE_HISTORY_COLLECTION_NAME: "employee_history",
  EMPLOYEE_HISTORY_REPOSITORY_NAME: "employee_histories",

  EMPLOYEE_CHANGE_HISTORY_COLLECTION_NAME: "employee_change_history",
  EMPLOYEE_CHANGE_HISTORY_REPOSITORY_NAME: "employee_change_histories",

  DEPARTMENT_POSITION_COLLECTION_NAME: "department_position",
  DEPARTMENT_POSITION_REPOSITORY_NAME: "department_positions",

  ORGANIZATION_COLLECTION_NAME: "organization",
  ORGANIZATION_REPOSITORY_NAME: "organizations",

  ORG_SETTING_COLLECTION_NAME: "org_setting",
  ORG_SETTING_REPOSITORY_NAME: "org_settings",

  DEPARTMENT_COLLECTION_NAME: "department",
  DEPARTMENT_REPOSITORY_NAME: "departments",

  // Account Management Collections
  ACCOUNT_COLLECTION_NAME: "account",
  ACCOUNT_REPOSITORY_NAME: "accounts",

  POSITION_COLLECTION_NAME: "position",
  POSITION_REPOSITORY_NAME: "positions",

  // Business Management Collections
  BUSINESS_COLLECTION_NAME: "business",
  BUSINESS_REPOSITORY_NAME: "businesses",

  GROUP_COLLECTION_NAME: "partner_group",
  GROUP_REPOSITORY_NAME: "partner_groups",

  PARTNER_COLLECTION_NAME: "partner",
  PARTNER_REPOSITORY_NAME: "partners",

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
};

export default COLLECTIONS;
