import { ServiceConstants } from "../types";
import { SERVICE_CRUD_ACTION_COMMONS } from "../utils";

export const TENANT_SERVICES: ServiceConstants = {
  // Tenant Management Services
  SVC_TENANT_MANAGEMENTS: {
    NAME: "svc-tenants.tenant-managements",
    //actions
    ...SERVICE_CRUD_ACTION_COMMONS,
    ACTION_CHECK_TAX_CODE: "getTaxCode",
    ACTION_GET_BY_ID: "getById",
    ACTION_RESTORE: "restore",
    ACTION_APPROVAL: "approval",
    ACTION_RESEND_MAIL: "resendMail",
    ACTION_CHANGE_PASSWORD: "changePassword",
    ACTION_GET_CONNECTION_STRING: "getConnectionString",
  },
  // Tenant Account Services
  SVC_TENANT_ACCOUNTS: {
    NAME: "svc-tenants.tenant-accounts",
    ...SERVICE_CRUD_ACTION_COMMONS,
    //actions custom
    ACTION_GET_ACCOUNT_BY_ID: "getAccountById",
    ACTION_GET_ACCOUNT_BY_USERNAME: "getAccountByUsername",
    ACTION_GET_ACCOUNT_BY_EMAIL: "getAccountByEmail",
    ACTION_GET_ACCOUNT_BY_PHONE: "getAccountByPhone",
    ACTION_GET_ACCOUNT_BY_TENANT_ID: "getAccountByTenantId",
    ACTION_GET_ACCOUNT_BY_TENANT_ID_AND_USERNAME:
      "getAccountByTenantIdAndUsername",
  },
};

export default TENANT_SERVICES;
