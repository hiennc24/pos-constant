import PERMISSIONS from "./permissions/index.json";
import ACTIONS from "./actions/index.json";

export default {
  PERMISSIONS,
  ACTIONS,
};

export type ServiceBrokerConstantType = {
  [K in keyof typeof ACTIONS]: (typeof ACTIONS)[K];
};

export type PermissionsConstantType = {
  [K in keyof typeof PERMISSIONS]: (typeof PERMISSIONS)[K];
};

export { default as COLLECTIONS, CollectionsConstantType } from "./collections";

export const addLocalActions = (actions: ServiceBrokerConstantType) => {
  Object.assign(ACTIONS, actions);
  console.log("added local actions!");
};

export const addLocalPermissions = (permissions: PermissionsConstantType) => {
  Object.assign(PERMISSIONS, permissions);
  console.log("added local permissions!");
};
