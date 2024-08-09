import { delay } from "../utils";

export class EnvironmentConfigAdapter {
  async init() {
    console.log("[EnvironmentConfig]: started module initialization");
    await delay(2000);
    console.log("[EnvironmentConfig]: finished module initialization");
  }
}
