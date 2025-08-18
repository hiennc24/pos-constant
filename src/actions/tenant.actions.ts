/**
 * Sales Actions - SALES Domain (Refactored)
 *
 * Refactored to use common CRUD patterns with domain-specific custom actions.
 * This demonstrates how to combine common actions with domain-specific functionality.
 */

import { DomainActions } from "../types";
import { generateServiceCRUDActions } from "./utils";

const SVC_TENANT_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_TENANT", entity: "TENANT" },
  { serviceName: "SVC_ACCOUNT", entity: "ACCOUNT" },
  { serviceName: "SVC_GIT_PROJECT", entity: "GIT_PROJECT" },
  { serviceName: "SVC_ROLE", entity: "ROLE" },
  { serviceName: "SVC_SERVER", entity: "SERVER" },
  { serviceName: "SVC_SERVICE", entity: "SERVICE" },
  { serviceName: "SVC_SETTING", entity: "SETTING" },
  { serviceName: "SVC_USER", entity: "USER" },
]);

export const SVC_TENANT_ACTIONS: DomainActions = {
  ...SVC_TENANT_CRUD_ACTIONS,

  // Tenant Management - Custom actions
  ACTION_MIGRATION_DATA: "ACTION_MIGRATION_DATA",
  ACTION_CHECK_TAX_CODE: "ACTION_CHECK_TAX_CODE",
  ACTION_GET_DOMAIN_BY_TAX_CODE: "ACTION_GET_DOMAIN_BY_TAX_CODE",
};
