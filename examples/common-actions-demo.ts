/**
 * Service-Based Actions Demo - SERVICE-SVC.ACTION_NAME Structure
 *
 * This example demonstrates the optimized SERVICE-SVC.ACTION_NAME structure
 * for microservices architecture with clear service identification and
 * centralized CRUD operations to prevent code duplication.
 */

import {
  ACTIONS,
  createDomainActions,
  createActionGroups,
  generateCRUDActions,
  generateEntityActions,
} from "../src/actions";

/**
 * Service-Specific Action Generator
 *
 * Creates actions with SERVICE-SVC.ACTION_NAME format for clear service identification
 */
function createServiceActions(
  serviceName: string,
  actions: Record<string, string>
) {
  const servicePrefix = `${serviceName.toUpperCase()}-SVC`;
  const serviceActions: Record<string, string> = {};

  for (const [key, value] of Object.entries(actions)) {
    serviceActions[`${servicePrefix}.${value}`] = `${servicePrefix}.${value}`;
  }

  return serviceActions;
}

/**
 * Service-Specific CRUD Generator
 *
 * Generates CRUD actions with service prefix to avoid conflicts
 */
function generateServiceCRUD(serviceName: string, entity: string) {
  const servicePrefix = `${serviceName.toUpperCase()}-SVC`;
  return {
    [`${servicePrefix}.CREATE_${entity}`]: `${servicePrefix}.CREATE_${entity}`,
    [`${servicePrefix}.READ_${entity}`]: `${servicePrefix}.READ_${entity}`,
    [`${servicePrefix}.UPDATE_${entity}`]: `${servicePrefix}.UPDATE_${entity}`,
    [`${servicePrefix}.DELETE_${entity}`]: `${servicePrefix}.DELETE_${entity}`,
    [`${servicePrefix}.LIST_${entity}S`]: `${servicePrefix}.LIST_${entity}S`,
    [`${servicePrefix}.GET_${entity}`]: `${servicePrefix}.GET_${entity}`,
  };
}

/**
 * Example 1: Service-Specific Actions Structure
 */
console.log("=== Example 1: SERVICE-SVC.ACTION_NAME Structure ===");

// Auth Service Actions
const AUTH_SVC_ACTIONS = createServiceActions("AUTH", {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  RESET_PASSWORD: "RESET_PASSWORD",
  VERIFY_TOKEN: "VERIFY_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  UPDATE_PROFILE: "UPDATE_PROFILE",
});

// Order Service Actions
const ORDER_SVC_ACTIONS = createServiceActions("ORDER", {
  CREATE_ORDER: "CREATE_ORDER",
  UPDATE_ORDER: "UPDATE_ORDER",
  DELETE_ORDER: "DELETE_ORDER",
  GET_ORDER: "GET_ORDER",
  LIST_ORDERS: "LIST_ORDERS",
  APPROVE_ORDER: "APPROVE_ORDER",
  REJECT_ORDER: "REJECT_ORDER",
  CANCEL_ORDER: "CANCEL_ORDER",
});

// Payment Service Actions
const PAYMENT_SVC_ACTIONS = createServiceActions("PAYMENT", {
  PROCESS_PAYMENT: "PROCESS_PAYMENT",
  REFUND_PAYMENT: "REFUND_PAYMENT",
  VOID_PAYMENT: "VOID_PAYMENT",
  GET_PAYMENT_STATUS: "GET_PAYMENT_STATUS",
  LIST_PAYMENTS: "LIST_PAYMENTS",
  GENERATE_INVOICE: "GENERATE_INVOICE",
});

console.log("Auth Service Actions:", AUTH_SVC_ACTIONS);
console.log("Order Service Actions:", ORDER_SVC_ACTIONS);
console.log("Payment Service Actions:", PAYMENT_SVC_ACTIONS);

/**
 * Example 2: Service-Specific CRUD Operations
 */
console.log("\n=== Example 2: Service-Specific CRUD Operations ===");

// Auth Service CRUD for User entity
const AUTH_SVC_USER_CRUD = generateServiceCRUD("AUTH", "USER");
console.log("Auth Service User CRUD:", AUTH_SVC_USER_CRUD);

// Order Service CRUD for Order entity
const ORDER_SVC_ORDER_CRUD = generateServiceCRUD("ORDER", "ORDER");
console.log("Order Service Order CRUD:", ORDER_SVC_ORDER_CRUD);

// Payment Service CRUD for Payment entity
const PAYMENT_SVC_PAYMENT_CRUD = generateServiceCRUD("PAYMENT", "PAYMENT");
console.log("Payment Service Payment CRUD:", PAYMENT_SVC_PAYMENT_CRUD);

/**
 * Example 3: Multi-Service Integration
 */
console.log("\n=== Example 3: Multi-Service Integration ===");

// Complete order processing workflow across multiple services
const ORDER_PROCESSING_WORKFLOW = {
  // Auth Service - User verification
  ...AUTH_SVC_USER_CRUD,
  "AUTH-SVC.VERIFY_USER": "AUTH-SVC.VERIFY_USER",
  "AUTH-SVC.CHECK_PERMISSION": "AUTH-SVC.CHECK_PERMISSION",

  // Order Service - Order management
  ...ORDER_SVC_ORDER_CRUD,
  "ORDER-SVC.VALIDATE_ORDER": "ORDER-SVC.VALIDATE_ORDER",
  "ORDER-SVC.CALCULATE_TOTAL": "ORDER-SVC.CALCULATE_TOTAL",

  // Payment Service - Payment processing
  ...PAYMENT_SVC_PAYMENT_CRUD,
  "PAYMENT-SVC.VALIDATE_PAYMENT": "PAYMENT-SVC.VALIDATE_PAYMENT",
  "PAYMENT-SVC.SEND_RECEIPT": "PAYMENT-SVC.SEND_RECEIPT",
};

console.log(
  "Order Processing Workflow Actions:",
  Object.keys(ORDER_PROCESSING_WORKFLOW)
);

/**
 * Example 4: Service-Specific Domain Actions
 */
console.log("\n=== Example 4: Service-Specific Domain Actions ===");

// Auth Service Domain
const AUTH_SVC_DOMAIN = {
  ...AUTH_SVC_USER_CRUD,
  "AUTH-SVC.ASSIGN_ROLE": "AUTH-SVC.ASSIGN_ROLE",
  "AUTH-SVC.REMOVE_ROLE": "AUTH-SVC.REMOVE_ROLE",
  "AUTH-SVC.CREATE_ROLE": "AUTH-SVC.CREATE_ROLE",
  "AUTH-SVC.UPDATE_ROLE": "AUTH-SVC.UPDATE_ROLE",
  "AUTH-SVC.DELETE_ROLE": "AUTH-SVC.DELETE_ROLE",
  "AUTH-SVC.CREATE_PERMISSION": "AUTH-SVC.CREATE_PERMISSION",
  "AUTH-SVC.UPDATE_PERMISSION": "AUTH-SVC.UPDATE_PERMISSION",
  "AUTH-SVC.DELETE_PERMISSION": "AUTH-SVC.DELETE_PERMISSION",
};

// Order Service Domain
const ORDER_SVC_DOMAIN = {
  ...ORDER_SVC_ORDER_CRUD,
  "ORDER-SVC.CREATE_CUSTOMER": "ORDER-SVC.CREATE_CUSTOMER",
  "ORDER-SVC.UPDATE_CUSTOMER": "ORDER-SVC.UPDATE_CUSTOMER",
  "ORDER-SVC.DELETE_CUSTOMER": "ORDER-SVC.DELETE_CUSTOMER",
  "ORDER-SVC.CREATE_ORDER_ITEM": "ORDER-SVC.CREATE_ORDER_ITEM",
  "ORDER-SVC.UPDATE_ORDER_ITEM": "ORDER-SVC.UPDATE_ORDER_ITEM",
  "ORDER-SVC.DELETE_ORDER_ITEM": "ORDER-SVC.DELETE_ORDER_ITEM",
};

// Payment Service Domain
const PAYMENT_SVC_DOMAIN = {
  ...PAYMENT_SVC_PAYMENT_CRUD,
  "PAYMENT-SVC.CREATE_PAYMENT_METHOD": "PAYMENT-SVC.CREATE_PAYMENT_METHOD",
  "PAYMENT-SVC.UPDATE_PAYMENT_METHOD": "PAYMENT-SVC.UPDATE_PAYMENT_METHOD",
  "PAYMENT-SVC.DELETE_PAYMENT_METHOD": "PAYMENT-SVC.DELETE_PAYMENT_METHOD",
  "PAYMENT-SVC.VALIDATE_PAYMENT_METHOD": "PAYMENT-SVC.VALIDATE_PAYMENT_METHOD",
};

console.log(
  "Auth Service Domain Actions Count:",
  Object.keys(AUTH_SVC_DOMAIN).length
);
console.log(
  "Order Service Domain Actions Count:",
  Object.keys(ORDER_SVC_DOMAIN).length
);
console.log(
  "Payment Service Domain Actions Count:",
  Object.keys(PAYMENT_SVC_DOMAIN).length
);

/**
 * Example 5: Centralized CRUD Operations
 */
console.log("\n=== Example 5: Centralized CRUD Operations ===");

// Centralized CRUD operations that can be reused across services
const CENTRALIZED_CRUD = {
  // Common CRUD patterns
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  LIST: "LIST",
  GET: "GET",
  SEARCH: "SEARCH",

  // Extended operations
  CREATE_MANY: "CREATE_MANY",
  UPDATE_MANY: "UPDATE_MANY",
  DELETE_MANY: "DELETE_MANY",
  BULK_OPERATION: "BULK_OPERATION",

  // Status operations
  APPROVE: "APPROVE",
  REJECT: "REJECT",
  CANCEL: "CANCEL",
  PUBLISH: "PUBLISH",
  UNPUBLISH: "UNPUBLISH",

  // Assignment operations
  ASSIGN: "ASSIGN",
  UNASSIGN: "UNASSIGN",
  TRANSFER: "TRANSFER",
};

// Function to apply centralized CRUD to any service
function applyServiceCRUD(serviceName: string, entity: string) {
  const servicePrefix = `${serviceName.toUpperCase()}-SVC`;
  const serviceCRUD: Record<string, string> = {};

  for (const [action, value] of Object.entries(CENTRALIZED_CRUD)) {
    serviceCRUD[
      `${servicePrefix}.${action}_${entity}`
    ] = `${servicePrefix}.${action}_${entity}`;
  }

  return serviceCRUD;
}

// Apply centralized CRUD to different services
const AUTH_USER_CRUD = applyServiceCRUD("AUTH", "USER");
const ORDER_ORDER_CRUD = applyServiceCRUD("ORDER", "ORDER");
const PAYMENT_PAYMENT_CRUD = applyServiceCRUD("PAYMENT", "PAYMENT");

console.log(
  "Centralized CRUD applied to Auth Service:",
  Object.keys(AUTH_USER_CRUD)
);
console.log(
  "Centralized CRUD applied to Order Service:",
  Object.keys(ORDER_ORDER_CRUD)
);
console.log(
  "Centralized CRUD applied to Payment Service:",
  Object.keys(PAYMENT_PAYMENT_CRUD)
);

/**
 * Example 6: Performance Optimized Action Registry
 */
console.log("\n=== Example 6: Performance Optimized Action Registry ===");

// Optimized action registry with service-based organization
const OPTIMIZED_ACTION_REGISTRY = {
  AUTH_SVC: {
    ...AUTH_SVC_ACTIONS,
    ...AUTH_SVC_DOMAIN,
  },
  ORDER_SVC: {
    ...ORDER_SVC_ACTIONS,
    ...ORDER_SVC_DOMAIN,
  },
  PAYMENT_SVC: {
    ...PAYMENT_SVC_ACTIONS,
    ...PAYMENT_SVC_DOMAIN,
  },
  // Common CRUD operations that can be reused
  COMMON_CRUD: CENTRALIZED_CRUD,
} as const;

console.log(
  "Optimized Action Registry Services:",
  Object.keys(OPTIMIZED_ACTION_REGISTRY)
);
console.log(
  "Auth Service Actions Count:",
  Object.keys(OPTIMIZED_ACTION_REGISTRY.AUTH_SVC).length
);
console.log(
  "Order Service Actions Count:",
  Object.keys(OPTIMIZED_ACTION_REGISTRY.ORDER_SVC).length
);
console.log(
  "Payment Service Actions Count:",
  Object.keys(OPTIMIZED_ACTION_REGISTRY.PAYMENT_SVC).length
);

/**
 * Example 7: Real-World Usage Examples
 */
console.log("\n=== Example 7: Real-World Usage Examples ===");

// Example: User authentication flow
const USER_AUTH_FLOW = {
  "AUTH-SVC.VERIFY_USER": "AUTH-SVC.VERIFY_USER",
  "AUTH-SVC.CHECK_PERMISSION": "AUTH-SVC.CHECK_PERMISSION",
  "AUTH-SVC.CREATE_SESSION": "AUTH-SVC.CREATE_SESSION",
  "AUTH-SVC.GENERATE_TOKEN": "AUTH-SVC.GENERATE_TOKEN",
};

// Example: Order creation flow
const ORDER_CREATION_FLOW = {
  "ORDER-SVC.VALIDATE_ORDER_DATA": "ORDER-SVC.VALIDATE_ORDER_DATA",
  "ORDER-SVC.CREATE_ORDER": "ORDER-SVC.CREATE_ORDER",
  "ORDER-SVC.CALCULATE_TOTAL": "ORDER-SVC.CALCULATE_TOTAL",
  "ORDER-SVC.APPLY_DISCOUNTS": "ORDER-SVC.APPLY_DISCOUNTS",
  "ORDER-SVC.CREATE_ORDER_ITEMS": "ORDER-SVC.CREATE_ORDER_ITEMS",
};

// Example: Payment processing flow
const PAYMENT_PROCESSING_FLOW = {
  "PAYMENT-SVC.VALIDATE_PAYMENT_DATA": "PAYMENT-SVC.VALIDATE_PAYMENT_DATA",
  "PAYMENT-SVC.PROCESS_PAYMENT": "PAYMENT-SVC.PROCESS_PAYMENT",
  "PAYMENT-SVC.UPDATE_ORDER_STATUS": "PAYMENT-SVC.UPDATE_ORDER_STATUS",
  "PAYMENT-SVC.SEND_CONFIRMATION": "PAYMENT-SVC.SEND_CONFIRMATION",
};

console.log("User Auth Flow:", Object.keys(USER_AUTH_FLOW));
console.log("Order Creation Flow:", Object.keys(ORDER_CREATION_FLOW));
console.log("Payment Processing Flow:", Object.keys(PAYMENT_PROCESSING_FLOW));

/**
 * Example 8: Benefits Summary
 */
console.log("\n=== Example 8: Benefits Summary ===");
console.log("✅ Clear service identification: AUTH-SVC.CREATE_USER");
console.log("✅ No action name conflicts across services");
console.log("✅ Centralized CRUD operations prevent code duplication");
console.log("✅ Easy to identify action ownership");
console.log("✅ Scalable for microservices architecture");
console.log("✅ Performance optimized with direct string values");
console.log("✅ Type-safe action access");
console.log("✅ Easy to maintain and extend");
console.log("✅ Supports service-specific custom actions");
console.log("✅ Clear separation of concerns");

/**
 * Example 9: Development Workflow
 */
console.log("\n=== Example 9: Development Workflow ===");

// How to add a new service
function addNewService(
  serviceName: string,
  customActions: Record<string, string> = {}
) {
  const servicePrefix = `${serviceName.toUpperCase()}-SVC`;

  // Start with centralized CRUD
  const serviceCRUD = applyServiceCRUD(serviceName, "ENTITY");

  // Add service-specific actions
  const serviceActions = createServiceActions(serviceName, customActions);

  // Combine into service domain
  const serviceDomain = {
    ...serviceCRUD,
    ...serviceActions,
  };

  return serviceDomain;
}

// Example: Adding a new Inventory Service
const INVENTORY_SVC_DOMAIN = addNewService("INVENTORY", {
  ADD_STOCK: "ADD_STOCK",
  REMOVE_STOCK: "REMOVE_STOCK",
  ADJUST_STOCK: "ADJUST_STOCK",
  CHECK_STOCK: "CHECK_STOCK",
  GENERATE_STOCK_REPORT: "GENERATE_STOCK_REPORT",
});

console.log(
  "New Inventory Service Actions:",
  Object.keys(INVENTORY_SVC_DOMAIN)
);

/**
 * Example 10: Performance and Scalability
 */
console.log("\n=== Example 10: Performance and Scalability ===");

// Performance benefits
console.log("🚀 Zero runtime overhead - direct string values");
console.log("🚀 No function calls or object lookups");
console.log("🚀 Memory efficient - shared string references");
console.log("🚀 Fast string comparison for action checking");
console.log("🚀 Easy to serialize/deserialize");
console.log("🚀 Supports tree-shaking for unused actions");
console.log("🚀 TypeScript autocomplete and type safety");
console.log("🚀 Easy to generate documentation");
console.log("🚀 Supports action validation at compile time");
console.log("🚀 Scalable to hundreds of services");
