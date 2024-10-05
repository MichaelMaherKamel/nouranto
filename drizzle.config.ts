import { defineConfig } from 'drizzle-kit'
import { env } from '~/lib/env.server'
export default defineConfig({
  schema: './app/lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
