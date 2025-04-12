-- CreateTable
CREATE TABLE "peran" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(64) NOT NULL,
    "deskripsi" VARCHAR(256),
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "peran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "peran_nama_key" ON "peran"("nama");
