import { delay } from "../utils";

export class AppsFlyerAdapter {
  async init() {
    console.log("[AppsFlyerAdapter]: started module initialization");
    await delay();
    console.log("[AppsFlyerAdapter]: finished module initialization");
  }
}
