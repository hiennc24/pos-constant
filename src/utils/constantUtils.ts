import { ServiceConstant, ServiceConstants } from "../types";

export class ConstantUtils {
  static getServiceName(constant: ServiceConstant): string {
    return constant.NAME;
  }

  static getActions(constant: ServiceConstant): string[] {
    return Object.keys(constant).filter((key) => key.startsWith("ACTION_"));
  }

  static hasAction(constant: ServiceConstant, action: string): boolean {
    return Object.values(constant).includes(action);
  }

  static getServiceByDomain(domain: string): ServiceConstants {
    return null as unknown as ServiceConstants;
  }
}
