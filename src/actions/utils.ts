/**
 * Action Utilities
 *
 * Helper functions for generating domain-specific actions using common patterns.
 * This provides a clean way to create consistent actions across domains.
 */

import { DomainActions } from "../types";

/**
 * Generate CRUD actions for a specific entity
 *
 * @param entity - The entity name (e.g., "USER", "PRODUCT", "ORDER")
 * @returns Object containing standard CRUD actions for the entity
 */
export function generateCRUDActions(entity: string): Record<string, string> {
  return {
    [`ACTION_CREATE_${entity}`]: `ACTION_CREATE_${entity}`,
    [`ACTION_UPDATE_${entity}`]: `ACTION_UPDATE_${entity}`,
    [`ACTION_DELETE_${entity}`]: `ACTION_DELETE_${entity}`,
    [`ACTION_GET_${entity}`]: `ACTION_GET_${entity}`,
    [`ACTION_LIST_${entity}S`]: `ACTION_LIST_${entity}S`,
  };
}

/**
 * Service-Specific CRUD Generator
 *
 * Generates CRUD actions with service prefix to avoid conflicts
 */
export function generateServiceCRUDActions(
  entities: { serviceName: string; entity: string }[]
) {
  const serviceActions: Record<string, string> = {};

  for (const { serviceName, entity } of entities) {
    const servicePrefix = `${serviceName.toUpperCase()}`;
    serviceActions[
      `${servicePrefix}.CREATE_${entity}`
    ] = `${servicePrefix}.CREATE_${entity}`;
    serviceActions[
      `${servicePrefix}.READ_${entity}`
    ] = `${servicePrefix}.READ_${entity}`;
    serviceActions[
      `${servicePrefix}.UPDATE_${entity}`
    ] = `${servicePrefix}.UPDATE_${entity}`;
    serviceActions[
      `${servicePrefix}.DELETE_${entity}`
    ] = `${servicePrefix}.DELETE_${entity}`;
    serviceActions[
      `${servicePrefix}.LIST_${entity}S`
    ] = `${servicePrefix}.LIST_${entity}S`;
    serviceActions[
      `${servicePrefix}.GET_${entity}`
    ] = `${servicePrefix}.GET_${entity}`;
  }

  return serviceActions;
}

/**
 * Generate extended actions for a specific entity
 *
 * @param entity - The entity name
 * @returns Object containing extended actions for the entity
 */
export function generateExtendedActions(
  entity: string
): Record<string, string> {
  return {
    [`ACTION_SEARCH_${entity}S`]: `ACTION_SEARCH_${entity}S`,
    [`ACTION_DUPLICATE_${entity}`]: `ACTION_DUPLICATE_${entity}`,
    [`ACTION_ARCHIVE_${entity}`]: `ACTION_ARCHIVE_${entity}`,
    [`ACTION_RESTORE_${entity}`]: `ACTION_RESTORE_${entity}`,
  };
}

/**
 * Generate status actions for a specific entity
 *
 * @param entity - The entity name
 * @returns Object containing status actions for the entity
 */
export function generateStatusActions(entity: string): Record<string, string> {
  return {
    [`ACTION_APPROVE_${entity}`]: `ACTION_APPROVE_${entity}`,
    [`ACTION_REJECT_${entity}`]: `ACTION_REJECT_${entity}`,
    [`ACTION_CANCEL_${entity}`]: `ACTION_CANCEL_${entity}`,
  };
}

/**
 * Generate assignment actions for a specific entity
 *
 * @param entity - The entity name
 * @returns Object containing assignment actions for the entity
 */
export function generateAssignmentActions(
  entity: string
): Record<string, string> {
  return {
    [`ACTION_ASSIGN_${entity}`]: `ACTION_ASSIGN_${entity}`,
    [`ACTION_REMOVE_${entity}`]: `ACTION_REMOVE_${entity}`,
  };
}

/**
 * Generate all standard actions for a specific entity
 *
 * @param entity - The entity name
 * @returns Object containing all standard actions for the entity
 */
export function generateEntityActions(entity: string): DomainActions {
  return {
    ...generateCRUDActions(entity),
    ...generateExtendedActions(entity),
    ...generateStatusActions(entity),
    ...generateAssignmentActions(entity),
  };
}

/**
 * Service-Specific Action Generator
 *
 * Creates actions with SERVICE-SVC.ACTION_NAME format for clear service identification
 */
export function createServiceActions(
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
 * Create domain actions with common CRUD operations and custom actions
 *
 * @param entities - Array of entity names for CRUD operations
 * @param customActions - Custom actions specific to the domain
 * @returns Combined domain actions
 */
export function createDomainActions(
  entities: string[],
  customActions: DomainActions = {}
): DomainActions {
  const crudActions = entities.reduce((acc, entity) => {
    return { ...acc, ...generateEntityActions(entity) };
  }, {});

  return {
    ...crudActions,
    ...customActions,
  };
}

/**
 * Helper function to create action groups for better organization
 *
 * @param groups - Object with group names and their actions
 * @returns Flattened actions object
 */
export function createActionGroups(
  groups: Record<string, DomainActions>
): DomainActions {
  return Object.values(groups).reduce((acc, groupActions) => {
    return { ...acc, ...groupActions };
  }, {});
}
