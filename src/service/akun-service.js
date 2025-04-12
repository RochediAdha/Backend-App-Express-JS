import { validate } from "../validation/validation.js";
import {
  loginAccountValidation,
  registerAccountValidation,
  getAccountValidation,
  updateAccountValidation,
} from "../validation/account-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

// Register
const register = async (request) => {
  const akun = validate(registerAccountValidation, request);

  const countAkun = await prismaClient.akun.count({
    where: {
      username: akun.username,
    },
  });

  if (countAkun > 0) {
    throw new ResponseError(400, "Username already exists");
  }

  akun.password = await bcrypt.hash(akun.password, 10);
  akun.created_at = new Date().toISOString();
  akun.updated_at = new Date().toISOString();

  return prismaClient.akun.create({
    data: akun,
    select: {
      username: true,
      nama: true,
      email: true,
      created_at: true,
    },
  });
};

// Login
const login = async (request) => {
  const login = validate(loginAccountValidation, request);

  const akun = await prismaClient.akun.findUnique({
    where: {
      username: login.username,
    },
    select: {
      username: true,
      password: true,
    },
  });

  if (!akun) {
    throw new ResponseError(401, "Username or password invalid");
  }
  const isPasswordValid = await bcrypt.compare(login.password, akun.password);

  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password invalid");
  }

  const token = uuid().toString();
  try {
    return await prismaClient.akun.update({
      data: {
        token: token,
        updated_at: new Date().toISOString(),
      },
      where: {
        username: akun.username,
      },
      select: {
        token: true,
      },
    });
  } catch (e) {
    throw new ResponseError(500, "Internal Server Error");
  }
};

// Get
const get = async (username) => {
  username = validate(getAccountValidation, username);

  const akun = await prismaClient.akun.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
      nama: true,
      email: true,
      created_at: true,
    },
  });

  if (!akun) {
    throw new ResponseError(404, "Account not found");
  }

  return akun;
};

// Update
const update = async (request) => {
  const akun = validate(updateAccountValidation, request);

  const totalAkun = await prismaClient.akun.count({
    where: {
      username: akun.username,
    },
  });

  if (totalAkun !== 1) {
    throw new ResponseError(404, "Account not found");
  }

  const data = {};
  if (akun.password) {
    data.password = await bcrypt.hash(akun.password, 10);
  }
  if (akun.nama) {
    data.nama = akun.nama;
  }
  if (akun.email) {
    data.email = akun.email;
  }
  data.updated_at = new Date().toISOString();

  return prismaClient.akun.update({
    where: {
      username: akun.username,
    },
    data: data,

    select: {
      username: true,
      nama: true,
      email: true,
      created_at: true,
      updated_at: true,
    },
  });
};

//Logout
const logout = async (username) => {
  username = validate(getAccountValidation, username);

  const akun = await prismaClient.akun.findUnique({
    where: {
      username: username,
    },
  });

  if (!akun) {
    throw new ResponseError(404, "Account not found");
  }

  return prismaClient.akun.update({
    where: {
      username: username,
    },
    data: {
      token: null,
      updated_at: new Date().toISOString(),
    },
  });
};

export default { register, login, get, update, logout };
