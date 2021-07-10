import { MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  namespace NodeJS {
    interface Global {
      __XPR_MONGODB: MongoMemoryServer;
    }
  }
}
