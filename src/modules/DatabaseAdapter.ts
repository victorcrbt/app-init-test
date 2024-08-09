import { delay } from "../utils";

export class DatabaseAdapter {
  async init() {
    console.log("[DatabaseAdapter]: started module initialization");
    await delay(500);
    console.log("[DatabaseAdapter]: finished module initialization");
  }
}
