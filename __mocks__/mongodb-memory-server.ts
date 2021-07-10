export class MongoMemoryServer {
  constructor(public readonly options: unknown) {
  }

  async getUri(): Promise<string> {
    return 'test-uri';
  }

  stop = jest.fn();
}
