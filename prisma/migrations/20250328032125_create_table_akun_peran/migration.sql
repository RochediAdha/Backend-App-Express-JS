-- CreateTable
CREATE TABLE "akun_peran" (
    "id" SERIAL NOT NULL,
    "akun_id" INTEGER NOT NULL,
    "peran_id" INTEGER NOT NULL,
    "identitas" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "akun_peran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "akun_peran_akun_id_peran_id_key" ON "akun_peran"("akun_id", "peran_id");

-- AddForeignKey
ALTER TABLE "akun_peran" ADD CONSTRAINT "akun_peran_akun_id_fkey" FOREIGN KEY ("akun_id") REFERENCES "akun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "akun_peran" ADD CONSTRAINT "akun_peran_peran_id_fkey" FOREIGN KEY ("peran_id") REFERENCES "peran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;