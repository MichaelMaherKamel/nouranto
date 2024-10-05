ALTER TABLE "products" RENAME COLUMN "image_url" TO "image_data";--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "image_data" SET DATA TYPE jsonb;