export type CollectionsConstantType = {
  [key in keyof typeof COLLECTIONS]: string;
};
import TENANT_COLLECTIONS from "./collections/tenant.collection";

const COLLECTIONS = {
  ...TENANT_COLLECTIONS,
};

export default COLLECTIONS;
