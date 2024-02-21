import dotenv from 'dotenv';
import path from 'path';
import type { Payload } from 'payload';
import payload from 'payload';
import type { InitOptions } from 'payload/config';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

// eslint-disable-next-line
let cached = (global as any).payload;

if (!cached) {
  // eslint-disable-next-line
  cached = (global as any).payload = { client: null, promise: null };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET environment variable is missing');
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    process.env.PAYLOAD_DROP_DATABASE = 'false';
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
