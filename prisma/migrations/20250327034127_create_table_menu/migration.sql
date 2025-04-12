-- CreateTable
CREATE TABLE "menu" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(128) NOT NULL,
    "url" VARCHAR(128) NOT NULL,
    "parent" INTEGER,
    "icon" VARCHAR(128),
    "order" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "menu_nama_key" ON "menu"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "menu_url_key" ON "menu"("url");
