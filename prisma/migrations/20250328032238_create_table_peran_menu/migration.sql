-- CreateTable
CREATE TABLE "peran_menu" (
    "id" SERIAL NOT NULL,
    "peran_id" INTEGER NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "c" BOOLEAN NOT NULL DEFAULT false,
    "r" BOOLEAN NOT NULL DEFAULT false,
    "u" BOOLEAN NOT NULL DEFAULT false,
    "d" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "peran_menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "peran_menu_peran_id_menu_id_key" ON "peran_menu"("peran_id", "menu_id");

-- AddForeignKey
ALTER TABLE "peran_menu" ADD CONSTRAINT "peran_menu_peran_id_fkey" FOREIGN KEY ("peran_id") REFERENCES "peran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peran_menu" ADD CONSTRAINT "peran_menu_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
