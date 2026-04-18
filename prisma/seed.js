import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Tambahkan data awal di sini bila diperlukan (peran default, menu, dll).
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
