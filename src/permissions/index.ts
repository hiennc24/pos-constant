/**
 * Permissions Registry - Main Export
 *
 * This module provides a centralized registry of all permissions
 * organized by domain for easy access and type safety.
 */

/**
 * Permissions Registry
 *
 * Contains all permissions organized by domain.
 * This provides a clean, type-safe interface for accessing permissions.
 */
// export const PERMISSIONS: PermissionsRegistry = {
export const PERMISSIONS = {
  // Master Data Partners Permissions
  PARTNERS: {
    LIST: "master_data:partners:list",
    CREATE: "master_data:partners:create",
    UPDATE: "master_data:partners:update",
    DELETE: "master_data:partners:delete",
    VIEW: "master_data:partners:view",
  },

  // Master Data Partners Group Permissions
  PARTNER_GROUPS: {
    LIST: "master_data:partner_groups:list",
    CREATE: "master_data:partner_groups:create",
    UPDATE: "master_data:partner_groups:update",
    DELETE: "master_data:partner_groups:delete",
    VIEW: "master_data:partner_groups:view",
  },

  // Master Data Products Permissions
  PRODUCTS: {
    LIST: "master_data:products:list",
    CREATE: "master_data:products:create",
    UPDATE: "master_data:products:update",
    DELETE: "master_data:products:delete",
    VIEW: "master_data:products:view",
  },

  REPORTS: {
    VIEW: "analytics:reports:view",
    EXPORT: "analytics:reports:export",
    CREATE: "analytics:reports:create",
  },

  SYSTEM: {
    CONFIG: "system:configuration:manage",
    LOGS: "system:logs:view",
    BACKUP: "system:backup:create",
  },

  // Tenant Management Permissions
  TENANT: {
    CREATE: "system:tenant:create",
    READ: "system:tenant:read",
    UPDATE: "system:tenant:update",
    DELETE: "system:tenant:delete",
    LIST: "system:tenant:list",
    GET: "system:tenant:get",
    MIGRATE: "system:tenant:migrate",
    CHECK_TAX_CODE: "system:tenant:check_tax_code",
    MIGRATE_DATA: "system:tenant:migrate_data",
  },

  // KaPOS Permissions
  SALE_ORDERS: {
    CREATE: "kapos:sales:sale_orders:create",
    LIST: "kapos:sales:sale_orders:list",
    READ: "kapos:sales:sale_orders:read",
    UPDATE: "kapos:sales:sale_orders:update",
    DELETE: "kapos:sales:sale_orders:delete",
    COPY: "kapos:sales:sale_orders:copy",
    UPDATE_STATUS: "kapos:sales:sale_orders:update_status",
  },

  SALE_ORDER_RETURNS: {
    CREATE: "kapos:sales:sale_order_returns:create",
    LIST: "kapos:sales:sale_order_returns:list",
    READ: "kapos:sales:sale_order_returns:read",
    UPDATE: "kapos:sales:sale_order_returns:update",
    DELETE: "kapos:sales:sale_order_returns:delete",
    COPY: "kapos:sales:sale_order_returns:copy",
    UPDATE_STATUS: "kapos:sales:sale_order_returns:update_status",
  },

  SALE_ORDER_QUICK_REPORTS: {
    CREATE: "kapos:sales:sale_order_quick_reports:read",
  },

  PURCHASE_ORDERS: {
    CREATE: "kapos:purchases:purchase_orders:create",
    LIST: "kapos:purchases:purchase_orders:list",
    READ: "kapos:purchases:purchase_orders:read",
    UPDATE: "kapos:purchases:purchase_orders:update",
    DELETE: "kapos:purchases:purchase_orders:delete",
    COPY: "kapos:purchases:purchase_orders:copy",
    UPDATE_STATUS: "kapos:purchases:purchase_orders:update_status",
  },

  PURCHASE_ORDER_RETURNS: {
    CREATE: "kapos:purchases:purchase_order_returns:create",
    LIST: "kapos:purchases:purchase_order_returns:list",
    READ: "kapos:purchases:purchase_order_returns:read",
    UPDATE: "kapos:purchases:purchase_order_returns:update",
    DELETE: "kapos:purchases:purchase_order_returns:delete",
    COPY: "kapos:purchases:purchase_order_returns:copy",
    UPDATE_STATUS: "kapos:purchases:purchase_order_returns:update_status",
  },

  PURCHASE_ORDER_QUICK_REPORTS: {
    CREATE: "kapos:sales:purchase_order_quick_reports:read",
  },

  PAYMENT_BOOKS: {
    CREATE: "kapos:payment_books:create",
    LIST: "kapos:payment_books:list",
    READ: "kapos:payment_books:read",
    UPDATE: "kapos:payment_books:update",
    DELETE: "kapos:payment_books:delete",
    COPY: "kapos:payment_books:copy",
    UPDATE_STATUS: "kapos:payment_books:update_status",
  },

  IN_STOCKS: {
    CREATE: "kapos:warehouses:in_stock:create",
    LIST: "kapos:warehouses:in_stock:list",
    READ: "kapos:warehouses:in_stock:read",
    UPDATE: "kapos:warehouses:in_stock:update",
    DELETE: "kapos:warehouses:in_stock:delete",
    COPY: "kapos:warehouses:in_stock:copy",
    UPDATE_STATUS: "kapos:warehouses:in_stock:update_status",
    DOWNLOAD: "kapos:warehouses:in_stock:download",
    UPLOAD: "kapos:warehouses:in_stock:upload",
    BULK_UPDATE: "kapos:warehouses:in_stock:bulk_update",
  },
  OUT_STOCKS: {
    CREATE: "kapos:warehouses:out_stock:create",
    LIST: "kapos:warehouses:out_stock:list",
    READ: "kapos:warehouses:out_stock:read",
    UPDATE: "kapos:warehouses:out_stock:update",
    DELETE: "kapos:warehouses:out_stock:delete",
    COPY: "kapos:warehouses:out_stock:copy",
    UPDATE_STATUS: "kapos:warehouses:out_stock:update_status",
    DOWNLOAD: "kapos:warehouses:out_stock:download",
    UPLOAD: "kapos:warehouses:out_stock:upload",
    BULK_UPDATE: "kapos:warehouses:out_stock:bulk_update",
  },

  IN_OUT_STOCKS: {
    CREATE: "kapos:warehouses:in_out_stock:create",
    LIST: "kapos:warehouses:in_out_stock:list",
    READ: "kapos:warehouses:in_out_stock:read",
    UPDATE: "kapos:warehouses:in_out_stock:update",
    DELETE: "kapos:warehouses:in_out_stock:delete",
    COPY: "kapos:warehouses:in_out_stock:copy",
    UPDATE_STATUS: "kapos:warehouses:in_out_stock:update_status",
    DOWNLOAD: "kapos:warehouses:in_out_stock:download",
    UPLOAD: "kapos:warehouses:in_out_stock:upload",
    BULK_UPDATE: "kapos:warehouses:in_out_stock:bulk_update",
  },

  STOCK_TAKINGS: {
    CREATE: "kapos:warehouses:stocktaking:create",
    LIST: "kapos:warehouses:stocktaking:list",
    READ: "kapos:warehouses:stocktaking:read",
    UPDATE: "kapos:warehouses:stocktaking:update",
    DELETE: "kapos:warehouses:stocktaking:delete",
    COPY: "kapos:warehouses:stocktaking:copy",
    UPDATE_STATUS: "kapos:warehouses:stocktaking:update_status",
    DOWNLOAD: "kapos:warehouses:stocktaking:download",
    UPLOAD: "kapos:warehouses:stocktaking:upload",
    BULK_UPDATE: "kapos:warehouses:stocktaking:bulk_update",
  },

  STOCK_TAKING_MINUTES: {
    CREATE: "kapos:warehouses:stocktaking_minutes:create",
    LIST: "kapos:warehouses:stocktaking_minutes:list",
    READ: "kapos:warehouses:stocktaking_minutes:read",
    UPDATE: "kapos:warehouses:stocktaking_minutes:update",
    DELETE: "kapos:warehouses:stocktaking_minutes:delete",
    COPY: "kapos:warehouses:stocktaking_minutes:copy",
    UPDATE_STATUS: "kapos:warehouses:stocktaking_minutes:update_status",
    DOWNLOAD: "kapos:warehouses:stocktaking_minutes:download",
    UPLOAD: "kapos:warehouses:stocktaking_minutes:print",
  },

  SETTING_INFOMATIONS: {
    CREATE: "kapos:settings:bussiness:infomations:create",
    LIST: "kapos:settings:bussiness:infomations:list",
    READ: "kapos:settings:bussiness:infomations:read",
    UPDATE: "kapos:settings:bussiness:infomations:update",
    DELETE: "kapos:settings:bussiness:infomations:delete",
  },

  SETTING_INTEGRATIONS: {
    LIST: "kapos:settings:bussiness:integrations:list",
    READ: "kapos:settings:bussiness:integrations:read",
    UPDATE: "kapos:settings:bussiness:integrations:update",
  },

  SETTING_TAXS: {
    LIST: "kapos:settings:bussiness:taxs:list",
    READ: "kapos:settings:bussiness:taxs:read",
    UPDATE: "kapos:settings:bussiness:taxs:update",
  },

  SETTING_EINVOICES: {
    LIST: "kapos:settings:bussiness:einvoices:list",
    READ: "kapos:settings:bussiness:einvoices:read",
    UPDATE: "kapos:settings:bussiness:einvoices:update",
  },

  SETTING_ECOMMERCES: {
    LIST: "kapos:settings:bussiness:ecommerces:list",
    READ: "kapos:settings:bussiness:ecommerces:read",
    UPDATE: "kapos:settings:bussiness:ecommerces:update",
  },

  SETTING_PAYMENTS: {
    LIST: "kapos:settings:bussiness:payments:list",
    READ: "kapos:settings:bussiness:payments:read",
    UPDATE: "kapos:settings:bussiness:payments:update",
  },

  SETTING_FORMATS: {
    LIST: "kapos:settings:bussiness:formats:list",
    READ: "kapos:settings:bussiness:formats:read",
    UPDATE: "kapos:settings:bussiness:formats:update",
  },

  SETTING_CURRENCIES: {
    LIST: "kapos:settings:bussiness:currencies:list",
    READ: "kapos:settings:bussiness:currencies:read",
    UPDATE: "kapos:settings:bussiness:currencies:update",
  },

  SETTING_PRINT_TEMPLATES: {
    LIST: "kapos:settings:bussiness:print_templates:list",
    READ: "kapos:settings:bussiness:print_templates:read",
    UPDATE: "kapos:settings:bussiness:print_templates:update",
  },
};

// Type exports
export type { PermissionsRegistry, DomainPermissions } from "../types";
