export default async function teardown(): Promise<boolean> {
  if (global.__XPR_MONGODB) {
    // kill'em all
    await global.__XPR_MONGODB.stop();
  }
  return true;
}
