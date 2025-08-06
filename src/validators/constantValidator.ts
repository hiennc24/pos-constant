// src/validators/constantValidator.ts
import { ServiceConstants } from "../types";

export class ConstantValidator {
  static validateServiceConstants(constants: ServiceConstants): void {
    for (const [key, service] of Object.entries(constants)) {
      if (!service.NAME) {
        throw new Error(`Service ${key} missing NAME property`);
      }

      // Validate naming conventions
      if (!/^[A-Z_]+$/.test(key)) {
        throw new Error(`Invalid constant key format: ${key}`);
      }

      // Validate service name format
      if (!/^[a-z-]+\.[a-z-]+$/.test(service.NAME)) {
        throw new Error(`Invalid service name format: ${service.NAME}`);
      }
    }
  }
}
