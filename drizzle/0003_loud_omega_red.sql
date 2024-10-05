ALTER TABLE "products" RENAME COLUMN "image_data" TO "imageData";--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "created_at" TO "createdAt";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "created_at" TO "createdAt";--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "imageData" SET DATA TYPE text;