export type TenantCollectionsConstantType = {
  [key in keyof typeof TENANT_COLLECTIONS]: string;
};

const TENANT_COLLECTIONS = {
  // Tenant Management Collections
  TENANT_COLLECTION_NAME: "tenant",
  TENANT_REPOSITORY_NAME: "tenants",

  // Account Management Collections
  ACCOUNT_COLLECTION_NAME: "account",
  ACCOUNT_REPOSITORY_NAME: "accounts",

  // Git project
  GIT_PROJECT_COLLECTION_NAME: "git_project",
  GIT_PROJECT_REPOSITORY_NAME: "git_projects",

  // Role Management Collections
  ROLE_COLLECTION_NAME: "role",
  ROLE_REPOSITORY_NAME: "roles",

  // Server Management Collections
  SERVER_COLLECTION_NAME: "server",
  SERVER_REPOSITORY_NAME: "servers",

  // Service Management Collections
  SERVICE_COLLECTION_NAME: "service",
  SERVICE_REPOSITORY_NAME: "services",

  // Setting Management Collections
  SETTING_COLLECTION_NAME: "setting",
  SETTING_REPOSITORY_NAME: "settings",
};

export default TENANT_COLLECTIONS;
