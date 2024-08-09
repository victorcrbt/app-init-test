import { delay } from "../utils";

export class LoggerAdapter {
  async init() {
    console.log('[SessionReplay]: started module initialization');
    await delay(1000);
    console.log('[SessionReplay]: finished module initialization');
  }
}
