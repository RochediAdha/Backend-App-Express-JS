import { validate } from "../validation/validation.js";
import { createMenuValidation, getMenuValidation, updateMenuValidation } from "../validation/menu-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

// Create
const create = async (request) => {
  const menu = validate(createMenuValidation, request);

  const countmenu = await prismaClient.menu.count({
    where: {
      nama: menu.nama
    },
  });
  if (countmenu > 0) {
    throw new ResponseError(400, "Data already exists");
  }

  menu.created_at = new Date().toISOString();
  menu.updated_at = new Date().toISOString();

  return prismaClient.menu.create({
    data: menu,
    select: {
      nama: true,
      url: true,
      parent: true,
      icon: true,
      order: true,
      created_at: true,
    },
  });
};

// Get By ID
const get = async (request) => {
  const menu = validate(getMenuValidation, request);
  const result = await prismaClient.menu.findFirst({
    where: {
      id: menu.id,
      deleted_at: null,
    },
    select: {
      id: true,
      nama: true,
      url: true,
      parent: true,
      icon: true,
      order: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!result) {
    throw new ResponseError(404, "Data not found");
  }

  return result;
};

// Get All
const getall = async () => {
  const menu = await prismaClient.menu.findMany({
    where: {
      deleted_at: null,
    },
    orderBy: {
      nama : 'asc',
    },
    select: {
      id: true,
      nama: true,
      url: true,
      parent: true,
      icon: true,
      order: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!menu) {
    throw new ResponseError(404, "Data not found");
  }

  return menu;
};

// Update
const update = async (request) => {
  const menu = validate(updateMenuValidation, request);

  const totalMenu = await prismaClient.menu.count({
    where: {
      id: menu.id,
    },
  });

  if (totalMenu !== 1) {
    throw new ResponseError(404, "Data not found");
  }

  const data = {};
  if (menu.nama) {
    data.nama = menu.nama;
  }
  if (menu.url) {
    data.url = menu.url;
  }
  if (menu.parent) {
    data.parent = menu.parent;
  }
  if (menu.icon) {
    data.icon = menu.icon;
  }
  if (menu.order) {
    data.order = menu.order;
  }
  data.updated_at = new Date().toISOString();

  return prismaClient.menu.update({
    where: {
      id: menu.id,
    },
    data: data,
    select: {
      id: true,
      nama: true,
      url: true,
      parent: true,
      icon: true,
      order: true,
      created_at: true,
      updated_at: true,
    },
  });
};

//Delete
const del = async (request) => {
  const menu = validate(getMenuValidation, request);

  const totalMenu = await prismaClient.menu.count({
    where: {
      id: menu.id,
    },
  });

  if (totalMenu !== 1) {
    throw new ResponseError(404, "Data not found");
  }

  return prismaClient.menu.update({
    where: {
      id: menu.id,
    },
    data: {
      deleted_at: new Date().toISOString(),
    },
  });
};

export default { create, get, getall, update, del };
