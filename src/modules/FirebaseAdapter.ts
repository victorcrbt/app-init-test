import { delay } from "../utils";

export class FirebaseAdapter {
  async init() {
    console.log("[Firebase]: started module initialization");
    await delay(3000);
    console.log("[Firebase]: finished module initialization");
  }
}
