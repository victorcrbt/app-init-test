import { delay } from "../utils";

export class RumAdapter {
  async init() {
    console.log("[Rum]: started module initialization");
    await delay();
    console.log("[Rum]: finished module initialization");
  }
}
