import { ServiceConstants } from "./types";
import { ConstantValidator } from "./validators/constantValidator";
import { ConstantUtils } from "./utils/constantUtils";
import { LazyConstantLoader } from "./loaders/lazyConstantLoader";

// Import all service constants
import { SERVICES } from "./actions";

const SERVICE_BROKER: ServiceConstants = {
  ...SERVICES,
};

// Validate on startup
ConstantValidator.validateServiceConstants(SERVICE_BROKER);

// Export main constants
export default SERVICE_BROKER;

// Export types
export type { ServiceConstants, ServiceConstant } from "./types";

export { PERMISSIONS } from "./permissions";

// Export utilities
export { ConstantUtils, LazyConstantLoader };

// Export collections
export { COLLECTIONS, CollectionsConstantType } from "./collections";

// Enhanced addLocalServices function
export const addLocalServices = (services: ServiceConstants): void => {
  ConstantValidator.validateServiceConstants(services);
  Object.assign(SERVICE_BROKER, services);
  console.log(`Added ${Object.keys(services).length} local services`);
};
