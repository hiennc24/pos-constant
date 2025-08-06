export type TenantCollectionsConstantType = {
    [key in keyof typeof TENANT_COLLECTIONS]: string;
};
declare const TENANT_COLLECTIONS: {
    TENANT_COLLECTION_NAME: string;
    TENANT_REPOSITORY_NAME: string;
    ACCOUNT_COLLECTION_NAME: string;
    ACCOUNT_REPOSITORY_NAME: string;
    GIT_PROJECT_COLLECTION_NAME: string;
    GIT_PROJECT_REPOSITORY_NAME: string;
    ROLE_COLLECTION_NAME: string;
    ROLE_REPOSITORY_NAME: string;
    SERVER_COLLECTION_NAME: string;
    SERVER_REPOSITORY_NAME: string;
    SERVICE_COLLECTION_NAME: string;
    SERVICE_REPOSITORY_NAME: string;
    SETTING_COLLECTION_NAME: string;
    SETTING_REPOSITORY_NAME: string;
};
export default TENANT_COLLECTIONS;
