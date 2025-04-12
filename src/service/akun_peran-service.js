import { validate } from "../validation/validation.js";
import {
  createAkunPeranValidation,
  updateAkunPeranValidation,
} from "../validation/akun_peran-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (request) => {
  const akun_peran = validate(createAkunPeranValidation, request);

  const isAkunExist = await prismaClient.akun.findUnique({
    where: {
      id: akun_peran.akun_id,
    },
  });

  if (!isAkunExist) {
    throw new ResponseError(400, "Akun not found");
  }

  const isPeranExist = await prismaClient.peran.findUnique({
    where: {
      id: akun_peran.peran_id,
    },
  });

  if (!isPeranExist) {
    throw new ResponseError(400, "Peran not found");
  }

  // Initialize created_at and updated_at
  akun_peran.created_at = new Date().toISOString();
  akun_peran.updated_at = new Date().toISOString();

  try {
    const result = await prismaClient.akunPeran.create({
      data: akun_peran,
      select: {
        akun_id: true,
        peran_id: true,
        identitas: true,
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const del = async (request) => {
  const akun_peran = validate(createAkunPeranValidation, request);

  try {
    const result = await prismaClient.akunPeran.delete({
      where: {
        akun_id: akun_peran.akun_id,
        peran_id: akun_peran.peran_id,
      },
      select: {
        akun_id: true,
        peran_id: true,
        identitas: true,
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const getall = async ({ includeOptions }) => {
  try {
    const result = await prismaClient.akunPeran.findMany({
      include: {
        akun: {
          select: {
            id: true,
            username: true,
            nama: true,
          },
        },
        peran: {
          select: {
            id: true,
            nama: true,
            deskripsi: true,
          },
        }
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const get = async (id) => {
  try {
    const result = await prismaClient.akunPeran.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        akun: {
          select: {
            id: true,
            username: true,
            nama: true,
          },
        },
        peran: {
          select: {
            id: true,
            nama: true,
            deskripsi: true,
          },
        }
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

const update = async (id, request) => {
  const akun_peran = validate(updateAkunPeranValidation, request);

  try {
    const result = await prismaClient.akunPeran.update({
      where: {
        id: parseInt(id),
      },
      data: akun_peran,
      select: {
        akun_id: true,
        peran_id: true,
        identitas: true,
      },
    });
    return result;
  } catch (e) {
    throw new ResponseError(400, e.message);
  }
};

export default { create, del, getall, get, update };
