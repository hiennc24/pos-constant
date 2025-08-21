/**
 * MASTERDATA Actions - MASTERDATA Domain (Refactored)
 *
 * Refactored to use common CRUD patterns with domain-specific custom actions.
 * This demonstrates how to combine common actions with domain-specific functionality.
 */

import { DomainActions } from "../types";
import { generateServiceCRUDActions } from "./utils";

const SVC_PARTNER_GROUP_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_PARTNER_GROUP", entity: "PARTNER_GROUP" },
]);

const SVC_PARTNERS_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_PARTNER", entity: "PARTNER" },
]);

export const SVC_PARTNERS: DomainActions = {
  ...SVC_PARTNERS_CRUD_ACTIONS,
};

export const SVC_PARTNER_GROUPS: DomainActions = {
  ...SVC_PARTNER_GROUP_CRUD_ACTIONS,
};
