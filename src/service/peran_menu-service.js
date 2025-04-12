import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { createPeranMenuValidation } from "../validation/peran_menu-validation.js";

const getall = async ({ includeOptions }) => {
  try {
    const result = await prismaClient.peranMenu.findMany({
      select: {
        id: true,
        peran_id: true,
        menu_id: true,
        c: true,
        u: true,
        r: true,
        d: true,
        ...includeOptions,
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const create = async (request) => {
  const peran_menu = validate(createPeranMenuValidation, request);

  const isPeranExist = await prismaClient.peran.findUnique({
    where: {
      id: peran_menu.peran_id,
    },
  });

  if (!isPeranExist) {
    throw new ResponseError(400, "Peran not found");
  }

  const isMenuExist = await prismaClient.menu.findUnique({
    where: {
      id: peran_menu.menu_id,
    },
  });

  if (!isMenuExist) {
    throw new ResponseError(400, "Menu not found");
  }

  // Initialize created_at and updated_at
  peran_menu.created_at = new Date().toISOString();
  peran_menu.updated_at = new Date().toISOString();

  try {
    const result = await prismaClient.peranMenu.create({
      data: peran_menu,
      select: {
        peran_id: true,
        menu_id: true,
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const del = async (id) => {
  try {
    await prismaClient.peranMenu.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

export default { getall, create, del };
