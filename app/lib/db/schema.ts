import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { nanoid } from 'nanoid'

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const products = pgTable('products', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  imageData: text('imageData'), // Changed from imageUrl to imageData
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert
