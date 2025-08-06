export type ServicesConstantType = {
  [key in keyof typeof SERVICES]: string;
};
import TENANT_SERVICES from "./tenant.action";
import BUSINESS_SERVICES from "./business.action";
import COMMON_SERVICES from "./common.action";
import CORE_SERVICES from "./core.action";

export const SERVICES = {
  ...TENANT_SERVICES,
  ...BUSINESS_SERVICES,
  ...COMMON_SERVICES,
  ...CORE_SERVICES,
};
