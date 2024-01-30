/*
  Warnings:

  - You are about to drop the column `rating` on the `Movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "rating",
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "poster" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "moviedId" INTEGER NOT NULL,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_moviedId_fkey" FOREIGN KEY ("moviedId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
