/**
 * POS Constants - Usage Examples
 *
 * This file demonstrates how to use the new simplified architecture
 * for maximum performance and developer experience.
 */

import {
  ACTIONS,
  PERMISSIONS,
  COLLECTIONS,
  AUTH_ACTIONS,
  SALES_ACTIONS,
  AUTH_PERMISSIONS,
  SALES_PERMISSIONS,
  AUTH_COLLECTIONS,
  SALES_COLLECTIONS,
} from "../src";

/**
 * Example 1: Using Actions
 *
 * Actions represent business operations that can be performed in the system.
 * They are simple string constants for maximum performance.
 */
function demonstrateActions() {
  console.log("=== Actions Examples ===");

  // Access actions through the main registry
  const loginAction = ACTIONS.AUTH.USER_LOGIN;
  const createOrderAction = ACTIONS.SALES.CREATE_ORDER;
  const addStockAction = ACTIONS.INVENTORY.ADD_STOCK;

  console.log("Login Action:", loginAction); // "USER_LOGIN"
  console.log("Create Order Action:", createOrderAction); // "CREATE_ORDER"
  console.log("Add Stock Action:", addStockAction); // "ADD_STOCK"

  // Access actions directly from domain modules
  const logoutAction = AUTH_ACTIONS.USER_LOGOUT;
  const processPaymentAction = SALES_ACTIONS.PROCESS_PAYMENT;

  console.log("Logout Action:", logoutAction); // "USER_LOGOUT"
  console.log("Process Payment Action:", processPaymentAction); // "PROCESS_PAYMENT"

  // Use in business logic
  const allowedActions = [
    ACTIONS.AUTH.USER_LOGIN,
    ACTIONS.AUTH.USER_LOGOUT,
    ACTIONS.SALES.CREATE_ORDER,
    ACTIONS.SALES.PROCESS_PAYMENT,
  ];

  console.log("Allowed Actions:", allowedActions);
}

/**
 * Example 2: Using Permissions
 *
 * Permissions define access control rules for actions and resources.
 * They are simple string constants for maximum performance.
 */
function demonstratePermissions() {
  console.log("\n=== Permissions Examples ===");

  // Access permissions through the main registry
  const loginPermission = PERMISSIONS.AUTH.AUTH_USER_LOGIN;
  const createOrderPermission = PERMISSIONS.SALES.SALES_CREATE_ORDER;
  const addStockPermission = PERMISSIONS.INVENTORY.INVENTORY_ADD_STOCK;

  console.log("Login Permission:", loginPermission); // "AUTH_USER_LOGIN"
  console.log("Create Order Permission:", createOrderPermission); // "SALES_CREATE_ORDER"
  console.log("Add Stock Permission:", addStockPermission); // "INVENTORY_ADD_STOCK"

  // Access permissions directly from domain modules
  const logoutPermission = AUTH_PERMISSIONS.AUTH_USER_LOGOUT;
  const processPaymentPermission = SALES_PERMISSIONS.SALES_PROCESS_PAYMENT;

  console.log("Logout Permission:", logoutPermission); // "AUTH_USER_LOGOUT"
  console.log("Process Payment Permission:", processPaymentPermission); // "SALES_PROCESS_PAYMENT"

  // Use in authorization logic
  const userPermissions = [
    PERMISSIONS.AUTH.AUTH_USER_LOGIN,
    PERMISSIONS.AUTH.AUTH_USER_LOGOUT,
    PERMISSIONS.SALES.SALES_CREATE_ORDER,
    PERMISSIONS.SALES.SALES_PROCESS_PAYMENT,
  ];

  console.log("User Permissions:", userPermissions);
}

/**
 * Example 3: Using Collections
 *
 * Collections represent database collection names.
 * They are simple string constants for maximum performance.
 */
function demonstrateCollections() {
  console.log("\n=== Collections Examples ===");

  // Access collections through the main registry
  const usersCollection = COLLECTIONS.AUTH.USERS;
  const ordersCollection = COLLECTIONS.SALES.ORDERS;
  const productsCollection = COLLECTIONS.INVENTORY.PRODUCTS;

  console.log("Users Collection:", usersCollection); // "users"
  console.log("Orders Collection:", ordersCollection); // "orders"
  console.log("Products Collection:", productsCollection); // "products"

  // Access collections directly from domain modules
  const userSessionsCollection = AUTH_COLLECTIONS.USER_SESSIONS;
  const orderItemsCollection = SALES_COLLECTIONS.ORDER_ITEMS;

  console.log("User Sessions Collection:", userSessionsCollection); // "user_sessions"
  console.log("Order Items Collection:", orderItemsCollection); // "order_items"

  // Use in database operations
  const collectionsToBackup = [
    COLLECTIONS.AUTH.USERS,
    COLLECTIONS.AUTH.USER_SESSIONS,
    COLLECTIONS.SALES.ORDERS,
    COLLECTIONS.SALES.PAYMENTS,
    COLLECTIONS.INVENTORY.PRODUCTS,
  ];

  console.log("Collections to Backup:", collectionsToBackup);
}

/**
 * Example 4: Real-world Usage Scenarios
 */
function demonstrateRealWorldUsage() {
  console.log("\n=== Real-world Usage Examples ===");

  // Scenario 1: User Authentication
  function authenticateUser(userId: string, action: string) {
    const requiredPermission = PERMISSIONS.AUTH.AUTH_USER_LOGIN;
    const userCollection = COLLECTIONS.AUTH.USERS;
    const sessionCollection = COLLECTIONS.AUTH.USER_SESSIONS;

    console.log(`Authenticating user ${userId} with action ${action}`);
    console.log(`Required permission: ${requiredPermission}`);
    console.log(`User collection: ${userCollection}`);
    console.log(`Session collection: ${sessionCollection}`);
  }

  // Scenario 2: Order Processing
  function processOrder(orderId: string, action: string) {
    const requiredPermission = PERMISSIONS.SALES.SALES_CREATE_ORDER;
    const orderCollection = COLLECTIONS.SALES.ORDERS;
    const paymentCollection = COLLECTIONS.SALES.PAYMENTS;

    console.log(`Processing order ${orderId} with action ${action}`);
    console.log(`Required permission: ${requiredPermission}`);
    console.log(`Order collection: ${orderCollection}`);
    console.log(`Payment collection: ${paymentCollection}`);
  }

  // Scenario 3: Inventory Management
  function manageInventory(productId: string, action: string) {
    const requiredPermission = PERMISSIONS.INVENTORY.INVENTORY_ADD_STOCK;
    const productCollection = COLLECTIONS.INVENTORY.PRODUCTS;
    const stockCollection = COLLECTIONS.INVENTORY.STOCK_ITEMS;

    console.log(
      `Managing inventory for product ${productId} with action ${action}`
    );
    console.log(`Required permission: ${requiredPermission}`);
    console.log(`Product collection: ${productCollection}`);
    console.log(`Stock collection: ${stockCollection}`);
  }

  // Execute scenarios
  authenticateUser("user123", ACTIONS.AUTH.USER_LOGIN);
  processOrder("order456", ACTIONS.SALES.CREATE_ORDER);
  manageInventory("product789", ACTIONS.INVENTORY.ADD_STOCK);
}

/**
 * Example 5: Type Safety and IntelliSense
 */
function demonstrateTypeSafety() {
  console.log("\n=== Type Safety Examples ===");

  // TypeScript provides full IntelliSense support
  const authActions: typeof AUTH_ACTIONS = AUTH_ACTIONS;
  const salesPermissions: typeof SALES_PERMISSIONS = SALES_PERMISSIONS;
  const inventoryCollections: typeof COLLECTIONS.INVENTORY =
    COLLECTIONS.INVENTORY;

  console.log("Auth Actions Type:", typeof authActions);
  console.log("Sales Permissions Type:", typeof salesPermissions);
  console.log("Inventory Collections Type:", typeof inventoryCollections);

  // Compile-time validation
  const validAction = ACTIONS.AUTH.USER_LOGIN; // ✅ Valid
  // const invalidAction = ACTIONS.AUTH.INVALID_ACTION; // ❌ TypeScript error

  const validPermission = PERMISSIONS.SALES.SALES_CREATE_ORDER; // ✅ Valid
  // const invalidPermission = PERMISSIONS.SALES.INVALID_PERMISSION; // ❌ TypeScript error

  const validCollection = COLLECTIONS.INVENTORY.PRODUCTS; // ✅ Valid
  // const invalidCollection = COLLECTIONS.INVENTORY.INVALID_COLLECTION; // ❌ TypeScript error
}

/**
 * Example 6: Performance Comparison
 */
function demonstratePerformance() {
  console.log("\n=== Performance Examples ===");

  // Direct string access - maximum performance
  const startTime = performance.now();

  for (let i = 0; i < 1000000; i++) {
    const action = ACTIONS.AUTH.USER_LOGIN;
    const permission = PERMISSIONS.AUTH.AUTH_USER_LOGIN;
    const collection = COLLECTIONS.AUTH.USERS;
  }

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log(
    `Executed 1,000,000 constant accesses in ${executionTime.toFixed(2)}ms`
  );
  console.log(
    `Average time per access: ${(executionTime / 1000000).toFixed(6)}ms`
  );
}

/**
 * Example 7: Tree-shaking Benefits
 */
function demonstrateTreeShaking() {
  console.log("\n=== Tree-shaking Examples ===");

  // Only import what you need - unused code is eliminated
  import("../src/actions/auth.actions").then(({ AUTH_ACTIONS }) => {
    console.log("Only auth actions imported:", Object.keys(AUTH_ACTIONS));
  });

  import("../src/permissions/sales.permissions").then(
    ({ SALES_PERMISSIONS }) => {
      console.log(
        "Only sales permissions imported:",
        Object.keys(SALES_PERMISSIONS)
      );
    }
  );

  import("../src/collections/inventory.collections").then(
    ({ INVENTORY_COLLECTIONS }) => {
      console.log(
        "Only inventory collections imported:",
        Object.keys(INVENTORY_COLLECTIONS)
      );
    }
  );
}

// Run all examples
function runAllExamples() {
  demonstrateActions();
  demonstratePermissions();
  demonstrateCollections();
  demonstrateRealWorldUsage();
  demonstrateTypeSafety();
  demonstratePerformance();
  demonstrateTreeShaking();
}

// Export for use in other files
export {
  demonstrateActions,
  demonstratePermissions,
  demonstrateCollections,
  demonstrateRealWorldUsage,
  demonstrateTypeSafety,
  demonstratePerformance,
  demonstrateTreeShaking,
  runAllExamples,
};

// Run examples if this file is executed directly
if (require.main === module) {
  runAllExamples();
}
