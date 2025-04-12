import { prismaClient } from "../application/database.js";

const methodToPermission = {
  GET: "r", // Read
  POST: "c", // Create
  PUT: "u", // Update
  PATCH: "u", // Update
  DELETE: "d", // Delete
};

export const authMiddleware = async (req, res, next) => {
  const token = req.get("Authorization");

  if (!token) {
    return res.status(401).json({
      errors: "Unauthorized",
    });
  } else {
    const akun = await prismaClient.akun.findFirst({
      where: {
        token: token,
      },
    });

    if (!akun) {
      return res
        .status(401)
        .json({
          errors: "Unauthorized",
        })
        .end();
    }

    req.akun = akun;

    const requiredPermission = methodToPermission[req.method];
    if (!requiredPermission)
      return res.status(405).json({ error: "Method Not Allowed" });

    // const url = req.originalUrl;
    const url = '/' + req.path.split('/').filter(Boolean)[0];

    const menu = await prismaClient.menu.findFirst({
      where: {
        url: url,
      },
      select: {
        id: true,
      },
    });

    if (!menu) {
      return res
        .status(401)
        .json({
          errors: "You are not allowed to access this menu",
        })
        .end();
    }

    const permissions = await prismaClient.peranMenu.findFirst({
      where: {
        menu_id: menu.id,
        peran: {
          AkunPeran: {
            some: { akun_id: akun.id },
          },
        },
      },
      select: { c: true, r: true, u: true, d: true },
    });

    if (!permissions || !permissions[requiredPermission]) {
      return res
        .status(403)
        .json({ errors: "Access Denied: Insufficient Permission" });
    }
    next();
  }
};
