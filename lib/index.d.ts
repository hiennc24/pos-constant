import SERVICE_BROKER from "./service.constant.json";
export default SERVICE_BROKER;
export type ServiceBrokerConstantType = {
    [K in keyof typeof SERVICE_BROKER]: (typeof SERVICE_BROKER)[K];
};
export { default as COLLECTIONS, CollectionsConstantType, } from "./collections.constant";
export declare const addLocalServices: (services: ServiceBrokerConstantType) => void;
