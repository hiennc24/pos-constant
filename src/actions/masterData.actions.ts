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

const SVC_COUNTRIES_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_COUNTRIES", entity: "COUNTRY" },
]);

export const SVC_COUNTRIES: DomainActions = {
  ...SVC_COUNTRIES_CRUD_ACTIONS,
};

const SVC_CURRENCIES_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_CURRENCIES", entity: "CURRENCY" },
]);

export const SVC_CURRENCIES: DomainActions = {
  ...SVC_CURRENCIES_CRUD_ACTIONS,
};

const SVC_UNITS_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_UNITS", entity: "UNIT" },
]);

export const SVC_UNITS: DomainActions = {
  ...SVC_UNITS_CRUD_ACTIONS,
};

const SVC_VOUCHER_TYPES_CRUD_ACTIONS = generateServiceCRUDActions([
  { serviceName: "SVC_VOUCHER_TYPES", entity: "VOUCHER_TYPE" },
]);

export const SVC_VOUCHER_TYPES: DomainActions = {
  ...SVC_VOUCHER_TYPES_CRUD_ACTIONS,
};
