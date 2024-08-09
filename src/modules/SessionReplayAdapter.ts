import { delay } from "../utils";

export class SessionReplayAdapter {
  async init() {
    console.log('[SessionReplay]: started module initialization');
    await delay();
    console.log('[SessionReplay]: finished module initialization');
  }
}
