import { ServiceConstants } from "../types";

export class LazyConstantLoader {
  private static cache = new Map<string, ServiceConstants>();

  static async loadServiceConstants(domain: string): Promise<ServiceConstants> {
    if (this.cache.has(domain)) {
      return this.cache.get(domain)!;
    }

    const constants = await import(`../constants/services/${domain}`);
    this.cache.set(domain, constants);
    return constants;
  }

  static preloadAll(): Promise<void> {
    const domains = ["auth", "sales", "purchase", "hcm", "warehouse"];
    return Promise.all(
      domains.map((domain) => this.loadServiceConstants(domain))
    ).then(() => {});
  }
}
