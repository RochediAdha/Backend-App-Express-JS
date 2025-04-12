-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "password" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "nama" VARCHAR(128) NOT NULL,
    "token" VARCHAR(128),
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "akun_username_key" ON "akun"("username");
