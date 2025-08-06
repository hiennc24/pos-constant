// src/config/constantConfig.ts
export interface ConstantConfig {
  enableValidation: boolean;
  enableCaching: boolean;
  enableLazyLoading: boolean;
  logLevel: "debug" | "info" | "warn" | "error";
}

export const DEFAULT_CONFIG: ConstantConfig = {
  enableValidation: true,
  enableCaching: true,
  enableLazyLoading: false,
  logLevel: "info",
};

export class ConstantConfigManager {
  private static config = DEFAULT_CONFIG;

  static setConfig(newConfig: Partial<ConstantConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  static getConfig(): ConstantConfig {
    return { ...this.config };
  }
}
