/*
  Warnings:

  - Changed the type of `type` on the `PostMedia` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE');

-- AlterTable
ALTER TABLE "PostMedia" DROP COLUMN "type",
ADD COLUMN     "type" "MediaType" NOT NULL;
