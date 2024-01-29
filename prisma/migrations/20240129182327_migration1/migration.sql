-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "synopsis" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "poster" TEXT NOT NULL,
    "genre" VARCHAR(100)[],
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");
