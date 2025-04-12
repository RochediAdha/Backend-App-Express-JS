import { validate } from "../validation/validation.js";
import { createPeranValidation, getPeranValidation, updatePeranValidation } from "../validation/peran-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

// Create
const create = async (request) => {
  const peran = validate(createPeranValidation, request);

  const countPeran = await prismaClient.peran.count({
    where: {
      nama: peran.nama},
  });
  if (countPeran > 0) {
    throw new ResponseError(400, "Data already exists");
  }

  peran.created_at = new Date().toISOString();
  peran.updated_at = new Date().toISOString();

  return prismaClient.peran.create({
    data: peran,
    select: {
      nama: true,
      deskripsi: true,
      created_at: true,
    },
  });
};

// Get By ID
const get = async (request) => {
  const peran = validate(getPeranValidation, request);
  const result = await prismaClient.peran.findFirst({
    where: {
      id: peran.id,
      deleted_at: null,
    },
    select: {
      id: true,
      nama: true,
      deskripsi: true,
      created_at: true,
      updated_at: true,
      deleted_at: true,
    },
  });

  if (!result) {
    throw new ResponseError(404, "Data not found");
  }

  return result;
};

// Get All
const getall = async () => {
  const peran = await prismaClient.peran.findMany({
    where: {
      deleted_at: null,
    },
    orderBy: {
      nama : 'asc',
    },
    select: {
      id: true,
      nama: true,
      deskripsi: true,
      created_at: true,
      updated_at: true,
      deleted_at: true,
    },
  });

  if (!peran) {
    throw new ResponseError(404, "Data not found");
  }

  return peran;
};

// Update
const update = async (request) => {
  const peran = validate(updatePeranValidation, request);

  const totalPeran = await prismaClient.peran.count({
    where: {
      id: peran.id,
    },
  });

  if (totalPeran !== 1) {
    throw new ResponseError(404, "Data not found");
  }

  const data = {};
  if (peran.nama) {
    data.nama = peran.nama;
  }
  if (peran.deskripsi) {
    data.deskripsi = peran.deskripsi;
  } 
  data.updated_at = new Date().toISOString();

  return prismaClient.peran.update({
    where: {
      id: peran.id,
    },
    data: data,
    select: {
      id: true,
      nama: true,
      deskripsi: true,
      created_at: true,
      updated_at: true,
    },
  });
};

//Delete
const del = async (request) => {
  const peran = validate(getPeranValidation, request);

  const totalPeran = await prismaClient.peran.count({
    where: {
      id: peran.id,
    },
  });

  if (totalPeran !== 1) {
    throw new ResponseError(404, "Data not found");
  }

  return prismaClient.peran.update({
    where: {
      id: peran.id,
    },
    data: {
      deleted_at: new Date().toISOString(),
    },
  });
};

export default { create, get, getall, update, del };
