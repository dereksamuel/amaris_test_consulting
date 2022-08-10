-- CreateTable
CREATE TABLE "Carrousel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "main_message" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrousel_id_key" ON "Carrousel"("id");
