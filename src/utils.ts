import { resolve } from 'path';
import { existsSync } from 'fs';
import { MongoMemoryServerOpts } from 'mongodb-memory-server-core/lib/MongoMemoryServer';
import parse from '@xpr/swiss-knife/json/parse';

export async function readOptions(): Promise<MongoMemoryServerOpts> {
  // try 0. env
  const parsed = parse(process.env.__XPR_MONGO_OPTS || '');
  if (parsed) {
    return parsed;
  }

  const cwd = process.cwd();

  // try 1. /package.json
  const pkgPath = resolve(cwd, 'package.json');
  if (pkgPath && existsSync(pkgPath)) {
    const pkg = await import(pkgPath);
    if (pkg['jest-mongo']) {
      return pkg['jest-mongo'];
    }
  }

  // try 2. /jest-mongo.json
  const jsonPath = resolve(cwd, 'jest-mongo.json');
  if (jsonPath && existsSync(jsonPath)) {
    return import(jsonPath);
  }

  // try 3. /jest-mongo.js
  const jsPath = resolve(cwd, 'jest-mongo.js');
  if (jsPath && existsSync(jsPath)) {
    return import(jsPath);
  }

  // no options
  return {};
}
