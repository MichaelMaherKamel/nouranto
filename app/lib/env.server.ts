import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string(),
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
