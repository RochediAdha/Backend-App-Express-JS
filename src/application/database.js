import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";

export const prismaClient = new PrismaClient({
  omit: {
    akun: {
      password: true,
    },
  },

  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prismaClient.$on("query", (e) => {
  logger.info(e);
});

prismaClient.$on("query", (e) => {
  logger.error(e);
});

prismaClient.$on("info", (e) => {
  logger.info(e);
});

prismaClient.$on("warn", (e) => {
  logger.warn(e);
});
