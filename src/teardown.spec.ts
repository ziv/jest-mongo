import { MongoMemoryServer } from 'mongodb-memory-server';
import teardown from '@/teardown';

describe('teardown', () => {
  it('should close mongo connection', async () => {
    const mongo = new MongoMemoryServer();
    global.__XPR_MONGODB = mongo;

    expect(await teardown()).toEqual(true);
    expect(mongo.stop).toHaveBeenCalled();
  });

  it('should return true', async () => {
    expect(await teardown()).toEqual(true);
  });
});
