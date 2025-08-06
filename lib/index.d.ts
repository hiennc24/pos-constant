import SERVICE_BROKER from "./service.constant.json";
import COLLECTIONS, { CollectionsConstantType } from "./collections.constant";
export default SERVICE_BROKER;
export type ServiceBrokerConstantType = {
    [K in keyof typeof SERVICE_BROKER]: (typeof SERVICE_BROKER)[K];
};
export { COLLECTIONS, CollectionsConstantType };
export declare const addLocalServices: (services: ServiceBrokerConstantType) => void;
