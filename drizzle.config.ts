import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/db/schema.ts',
  // out: './migrations',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env['DEV_URL']!,
    // host: process.env['DEV_DATABASE_HOST']!,
    // user: process.env['DEV_DATABASE_USERNAME']!,
    // password: process.env['DEV_DATABASE_PASSWORD']!,
    // database: process.env['DEV_DATABASE_NAME']!,
  },
  breakpoints: true,
  strict: false,
} satisfies Config;
