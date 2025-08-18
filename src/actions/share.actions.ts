/**
 * Shares Actions - Shares Domain (Refactored)
 *
 * Refactored to use common CRUD patterns with domain-specific custom actions.
 * This demonstrates how to combine common actions with domain-specific functionality.
 */

import { DomainActions } from "../types";

export const SVC_SHARED_ACTIVITY_LOGS: DomainActions = {
  // Shares activities - Custom actions
  ACTION_CREATE_ACTIVITIES: "createActivities",
  ACTION_GET_ACTIVITIES: "getActivities",
};
