import {z} from 'zod';

const envSchema = z.object({
  PORT: z.string(),
  SECRET_KEY: z.string(),
  REDIS_HOST: z.string(),
  REDIS_USERNAME: z.string(),
  REDIS_PASSWORD: z.string(),
  REDIS_DB: z.string(),
  REDIS_PORT: z.string(),
});

export const envConfig = envSchema.parse(process.env);
