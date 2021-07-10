import { MongoMemoryServer } from 'mongodb-memory-server';
import { readOptions } from '@/utils';

export default async function setup(): Promise<boolean> {
  // starting mongo in memory
  const mongo = new MongoMemoryServer(await readOptions());

  // keeping instance globally for teardown
  // the teardown function runs in the same
  // context hence, the same "global"
  global.__XPR_MONGODB = mongo;

  // we are in the parent process (the runner)
  // any environment variable in current process
  // will be reflect in child processes (the tests)
  process.env.__XPR_MONGOURI = await mongo.getUri();

  return true;
}
