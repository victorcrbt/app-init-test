export async function delay(interval = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const RESOLVE_VALUE = undefined;
      resolve(RESOLVE_VALUE);
    }, interval);
  });
}
