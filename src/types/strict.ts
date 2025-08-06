import SERVICE_BROKER from "../service.constant.json";

export type ServiceAction =
  | "create"
  | "update"
  | "delete"
  | "get"
  | "getList"
  | "getDetail"
  | "createMany"
  | "updateMany"
  | "deleteMany"
  | "approve"
  | "reject"
  | "cancel"
  | "sync"
  | "upload"
  | "download"
  | "generateCode"
  | "lock"
  | "unlock";

export interface StrictServiceConstant {
  NAME: string;
  [key: `ACTION_${string}`]: ServiceAction;
}

export type StrictServiceConstants = {
  [K in keyof typeof SERVICE_BROKER]: StrictServiceConstant;
};
