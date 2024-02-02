import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/schema.ts',
    out: './migrations',
    driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        host: process.env.DATABASE_HOST!,
        user: process.env.DATABASE_USER,
        password: process.env.DASTABASE_PASSWORD,
        database: process.env.DATABASE_NAME!,
    },
} satisfies Config;