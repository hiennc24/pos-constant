import { PermissionConstant } from "../types";

export const PERMISSIONS: PermissionConstant = {
  SVC_AUTH_FULL: "auth:*",
  SVC_AUTH_ACCOUNTS_FULL: "auth:accounts:*",
  SVC_AUTH_ACCOUNTS_READ: "auth:accounts:read",
  SVC_AUTH_ACCOUNTS_WRITE: "auth:accounts:write",
  SVC_AUTH_ACCOUNTS_DELETE: "auth:accounts:delete",
  SVC_AUTH_ACCOUNTS_UPDATE: "auth:accounts:update",
  SVC_AUTH_ACCOUNTS_CREATE: "auth:accounts:create",

  SVC_CORE_FULL: "core:*",
  SVC_CORE_TENANT_MANAGEMENTS_FULL: "core:tenant-managements:*",
  SVC_CORE_TENANT_MANAGEMENTS_READ: "core:tenant-managements:read",
  SVC_CORE_TENANT_MANAGEMENTS_WRITE: "core:tenant-managements:write",
  SVC_CORE_TENANT_MANAGEMENTS_DELETE: "core:tenant-managements:delete",
  SVC_CORE_TENANT_MANAGEMENTS_UPDATE: "core:tenant-managements:update",
  SVC_CORE_TENANT_MANAGEMENTS_CREATE: "core:tenant-managements:create",
};

export default PERMISSIONS;
