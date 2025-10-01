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
  TENANT_REPOSITORY_NAME: "tenant",
  TENANT_COLLECTION_NAME: "tenants",

  // Account Management Collections
  TENANT_ACCOUNT_REPOSITORY_NAME: "tenantAccount",
  TENANT_ACCOUNT_COLLECTION_NAME: "tenant_accounts",

  // Git project
  GIT_PROJECT_REPOSITORY_NAME: "gitProject",
  GIT_PROJECT_COLLECTION_NAME: "git_projects",

  // Role Management Collections
  TENANT_ROLE_REPOSITORY_NAME: "tenantRole",
  TENANT_ROLE_COLLECTION_NAME: "tenant_roles",

  // Server Management Collections
  TENANT_SERVER_REPOSITORY_NAME: "tenantServer",
  TENANT_SERVER_COLLECTION_NAME: "tenant_servers",

  // Service Management Collections
  TENANT_SERVICE_REPOSITORY_NAME: "tenantService",
  TENANT_SERVICE_COLLECTION_NAME: "tenant_services",

  // Setting Management Collections
  TENANT_SETTING_REPOSITORY_NAME: "tenantSetting",
  TENANT_SETTING_COLLECTION_NAME: "tenant_settings",

  // Application Management Collections
  TENANT_APPLICATION_REPOSITORY_NAME: "tenantApplication",
  TENANT_APPLICATION_COLLECTION_NAME: "tenant_applications",

  // Common Management Collections
  COMMON_REPOSITORY_NAME: "common",
  COMMON_COLLECTION_NAME: "commons",

  // Core Management Collections
  EMPLOYEE_REPOSITORY_NAME: "employee",
  EMPLOYEE_COLLECTION_NAME: "employees",

  EMPLOYEE_PROFILE_REPOSITORY_NAME: "employeeProfile",
  EMPLOYEE_PROFILE_COLLECTION_NAME: "employee_profiles",

  EMPLOYEE_SETTING_REPOSITORY_NAME: "employeeSetting",
  EMPLOYEE_SETTING_COLLECTION_NAME: "employee_settings",

  EMPLOYEE_HISTORY_REPOSITORY_NAME: "employeeHistory",
  EMPLOYEE_HISTORY_COLLECTION_NAME: "employee_histories",

  EMPLOYEE_CHANGE_HISTORY_REPOSITORY_NAME: "employeeChangeHistory",
  EMPLOYEE_CHANGE_HISTORY_COLLECTION_NAME: "employee_change_histories",

  DEPARTMENT_POSITION_REPOSITORY_NAME: "departmentPosition",
  DEPARTMENT_POSITION_COLLECTION_NAME: "department_positions",

  ORGANIZATION_REPOSITORY_NAME: "organization",
  ORGANIZATION_COLLECTION_NAME: "organizations",

  ORG_SETTING_REPOSITORY_NAME: "orgSetting",
  ORG_SETTING_COLLECTION_NAME: "org_settings",

  DEPARTMENT_REPOSITORY_NAME: "department",
  DEPARTMENT_COLLECTION_NAME: "departments",

  // Account Management Collections
  ACCOUNT_REPOSITORY_NAME: "account",
  ACCOUNT_COLLECTION_NAME: "accounts",

  POSITION_REPOSITORY_NAME: "position",
  POSITION_COLLECTION_NAME: "positions",

  // Business Management Collections
  BUSINESS_REPOSITORY_NAME: "business",
  BUSINESS_COLLECTION_NAME: "businesses",

  GROUP_REPOSITORY_NAME: "partnerGroup",
  GROUP_COLLECTION_NAME: "partner_groups",

  PARTNER_REPOSITORY_NAME: "partner",
  PARTNER_COLLECTION_NAME: "partners",

  PARTNER_DETAIL_REPOSITORY_NAME: "partnerDetail",
  PARTNER_DETAIL_COLLECTION_NAME: "partner_details",

  ADMINISTRATION_ITEMS_REPOSITORY_NAME: "administrationItems",
  ADMINISTRATION_ITEMS_COLLECTION_NAME: "administration_items",

  CUSTOMER_REPOSITORY_NAME: "customer",
  CUSTOMER_COLLECTION_NAME: "customers",

  GROUP_LABEL_REPOSITORY_NAME: "groupLabel",
  GROUP_LABEL_COLLECTION_NAME: "group_labels",

  // danh mục tiền tệ
  CURRENCY_REPOSITORY_NAME: "currency",
  CURRENCY_COLLECTION_NAME: "currencies",

  // Danh mục quốc gia
  COUNTRY_REPOSITORY_NAME: "country",
  COUNTRY_COLLECTION_NAME: "countries",

  // Danh mục đơn vị tính
  UNIT_REPOSITORY_NAME: "unit",
  UNIT_COLLECTION_NAME: "units",

  // Danh mục chứng từ
  VOUCHER_TYPE_REPOSITORY_NAME: "voucherTypes",
  VOUCHER_TYPE_COLLECTION_NAME: "voucher_types",

  // Danh mục thuộc tính
  ATTRIBUTE_REPOSITORY_NAME: "attribute",
  ATTRIBUTE_COLLECTION_NAME: "attributes",

  // Danh mục Kho
  WAREHOUSE_REPOSITORY_NAME: "warehouse",
  WAREHOUSE_COLLECTION_NAME: "warehouses",

  // Role Management Collections
  ROLE_REPOSITORY_NAME: "role",
  ROLE_COLLECTION_NAME: "roles",

  COMPANY_INFOMATION_REPOSITORY_NAME: "companyInformation",
  COMPANY_INFOMATION_COLLECTION_NAME: "company_informations",

  CURRENCY_SETTING_REPOSITORY_NAME: "currencySetting",
  CURRENCY_SETTING_COLLECTION_NAME: "currency_settings",

  TAX_SETTING_REPOSITORY_NAME: "taxSetting",
  TAX_SETTING_COLLECTION_NAME: "tax_settings",
};

export default COLLECTIONS;
