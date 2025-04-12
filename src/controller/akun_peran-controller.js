import akunPeranService from "../service/akun_peran-service.js";
import { parseIncludeQuery } from "../utils/query.js";

const create = async (req, res, next) => {
  try {
    const result = await akunPeranService.create(req.body);
    res.status(200).json({
      message: "Create data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const del = async (req, res, next) => {
  try {
    const result = await akunPeranService.del(req.body);
    res.status(200).json({
      message: "Delete data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getall = async (req, res, next) => {
  const includeOptions = parseIncludeQuery(req.query.include, [
    "akun",
    "peran",
  ]);
  try {
    const result = await akunPeranService.getall({
      includeOptions: includeOptions,
    });
    res.status(200).json({
      message: "Get all data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await akunPeranService.get(req.params.id);
    res.status(200).json({
      message: "Get data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await akunPeranService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Update data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { create, del, getall, get, update };
