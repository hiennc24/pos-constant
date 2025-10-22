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

  COMPANY_INFORMATION_REPOSITORY_NAME: "companyInformation",
  COMPANY_INFORMATION_COLLECTION_NAME: "company_information",

  CURRENCY_SETTING_REPOSITORY_NAME: "currencySetting",
  CURRENCY_SETTING_COLLECTION_NAME: "currency_settings",

  TAX_SETTING_REPOSITORY_NAME: "taxSetting",
  TAX_SETTING_COLLECTION_NAME: "tax_settings",

  ITEM_CODE_REPOSITORY_NAME: "itemCode",
  ITEM_CODE_COLLECTION_NAME: "item_codes",

  PRODUCT_REPOSITORY_NAME: "product",
  PRODUCT_COLLECTION_NAME: "products",

  PRODUCT_ITEM_REPOSITORY_NAME: "productItem",
  PRODUCT_ITEM_COLLECTION_NAME: "product_items",

  EC_ORDER_PRODUCTS_REPOSITORY_NAME: "ecOrderProduct",
  EC_ORDER_PRODUCTS_COLLECTION_NAME: "ec_order_products",

  PRODUCT_SETTING_REPOSITORY_NAME: "productSetting",
  PRODUCT_SETTING_COLLECTION_NAME: "product_settings",

  INVENTORY_REPOSITORY_NAME: "inventory",
  INVENTORY_COLLECTION_NAME: "inventories",

  INVENTORY_TRANSACTION_COLLECTION_NAME: "inventoryTransaction",
  INVENTORY_TRANSACTION_REPOSITORY_NAME: "inventory_transactions",

  ORDER_INVENTORY_REPOSITORY_NAME: "orderInventory",
  ORDER_INVENTORY_COLLECTION_NAME: "order_inventories",

  ORDER_INVENTORY_TRANSACTION_COLLECTION_NAME: "orderInventoryTransaction",
  ORDER_INVENTORY_TRANSACTION_REPOSITORY_NAME: "order_inventory_transactions",
  WAREHOUSE_SETTING_REPOSITORY_NAME: "warehouse_setting",
  WAREHOUSE_SETTING_COLLECTION_NAME: "warehouse_settings",

  WAREHOUSE_MANAGEMENT_REPOSITORY_NAME: "warehouse_management",
  WAREHOUSE_MANAGEMENT_COLLECTION_NAME: "warehouse_managements",

  WAREHOUSE_PRODUCT_REPOSITORY_NAME: "warehouse_product",
  WAREHOUSE_PRODUCT_COLLECTION_NAME: "warehouse_products",

  WAREHOUSE_STOCKTAKING_PRODUCT_REPOSITORY_NAME:
    "warehouse_stocktaking_product",
  WAREHOUSE_STOCKTAKING_PRODUCT_COLLECTION_NAME:
    "warehouse_stocktaking_products",

  WAREHOUSE_STOCKTAKING_REPOSITORY_NAME: "warehouse_stocktaking",
  WAREHOUSE_STOCKTAKING_COLLECTION_NAME: "warehouse_stocktakings",

  PRODUCT_VARIANT_REPOSITORY_NAME: "product_variant",
  PRODUCT_VARIANT_COLLECTION_NAME: "product_variants",

  WAREHOUSE_VOUCHER_PRODUCT_REPOSITORY_NAME: "warehouse_voucher_product",
  WAREHOUSE_VOUCHER_PRODUCT_COLLECTION_NAME: "warehouse_voucher_products",

  WAREHOUSE_VOUCHER_REPOSITORY_NAME: "warehouse_voucher",
  WAREHOUSE_VOUCHER_COLLECTION_NAME: "warehouse_vouchers",

  WAREHOUSE_BASKET_REPOSITORY_NAME: "warehouse_basket",
  WAREHOUSE_BASKET_COLLECTION_NAME: "warehouse_baskets",

  WAREHOUSE_LEVEL_COLLECTION_NAME: "warehouse_levels",
  WAREHOUSE_LEVEL_REPOSITORY_NAME: "warehouse_level",

  WAREHOUSE_PALLET_REPOSITORY_NAME: "warehouse_pallet",
  WAREHOUSE_PALLET_COLLECTION_NAME: "warehouse_pallets",

  WAREHOUSE_RACK_REPOSITORY_NAME: "warehouse_rack",
  WAREHOUSE_RACK_COLLECTION_NAME: "warehouse_racks",

  WAREHOUSE_ZONE_REPOSITORY_NAME: "warehouse_zone",
  WAREHOUSE_ZONE_COLLECTION_NAME: "warehouse_zones",

  WAREHOUSE_LIST_REPOSITORY_NAME: "warehouse_list",
  WAREHOUSE_LIST_COLLECTION_NAME: "warehouse_lists",

  ORDERS_REPOSITORY_NAME: "order",
  ORDERS_COLLECTION_NAME: "orders",

  DEBT_HISTORIES_REPOSITORY_NAME: "debt_histories",
  DEBT_HISTORIES_COLLECTION_NAME: "debt_histories",

  DEBT_TRANSACTIONS_REPOSITORY_NAME: "debt_transactions",
  DEBT_TRANSACTIONS_COLLECTION_NAME: "debt_transactions",

  DEBTS_REPOSITORY_NAME: "debts",
  DEBTS_COLLECTION_NAME: "debts",

  DEBT_PERIOD_REPOSITORY_NAME: "debt_periods",
  DEBT_PERIOD_COLLECTION_NAME: "debt_periods",

  WAREHOUSE_TYPE_REPOSITORY_NAME: "warehouseType",
  WAREHOUSE_TYPE_COLLECTION_NAME: "warehouse_types",

  CONTRACT_LISTS_COLLECTION_NAME: "contract_lists",
  CONTRACT_LISTS_REPOSITORY_NAME: "contract_lists",

  TENANT_USER_REPOSITORY_NAME: "tenant_user",
  TENANT_USER_COLLECTION_NAME: "tenant_users",

  ORDER_REPOSITORY_NAME: "orders",
  ORDER_COLLECTION_NAME: "orders",

  ORDER_PRODUCTS_REPOSITORY_NAME: "order_products",
  ORDER_PRODUCTS_COLLECTION_NAME: "order_products",

  ORDERS_DETAIL_REPOSITORY_NAME: "orders_detail",
  ORDERS_DETAIL_COLLECTION_NAME: "orders_detail",

  INVOICES_REPOSITORY_NAME: "invoices",
  INVOICES_COLLECTION_NAME: "invoices",

  ORDERS_HISTORY_REPOSITORY_NAME: "orders_history",
  ORDERS_HISTORY_COLLECTION_NAME: "orders_history",

  PROMOTION_REPOSITORY_NAME: "promotions",
  PROMOTION_COLLECTION_NAME: "promotions",

  VENDOR_CONFIRM_REPOSITORY_NAME: "vendor_confirms",
  VENDOR_CONFIRM_COLLECTION_NAME: "vendor_confirms",

  LEAD_ITEM_REPOSITORY_NAME: "lead_items",
  LEAD_ITEM_COLLECTION_NAME: "lead_items",

  CAMPAIGN_PRICE_REPOSITORY_NAME: "campaign_prices",
  CAMPAIGN_PRICE_COLLECTION_NAME: "campaign_prices",
};

export default COLLECTIONS;
