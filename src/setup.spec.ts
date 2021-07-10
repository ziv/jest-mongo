import { MongoMemoryServer } from 'mongodb-memory-server';
import setup from '@/setup';

describe('setup', () => {
  it('should start mongodb and update globals', async () => {
    expect(await setup()).toBe(true);
    expect(global.__XPR_MONGODB).toBeInstanceOf(MongoMemoryServer);
    expect(process.env.__XPR_MONGOURI).toEqual('test-uri');
  });
});
