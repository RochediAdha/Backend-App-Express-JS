import peranMenuService from "../service/peran_menu-service.js";
import { parseIncludeQuery } from "../utils/query.js";

const getall = async (req, res, next) => {
  const includeOptions = parseIncludeQuery(req.query.include, [
    "peran",
    "menu",
  ]);

  try {
    const result = await peranMenuService.getall({ includeOptions });
    res.status(200).json({
      message: "Get all data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await peranMenuService.create(req.body);
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
    const { id } = req.params;
    await peranMenuService.delete(id);
    res.status(200).json({
      message: "Delete data success",
    });
  } catch (e) {
    next(e);
  }
};

export default { getall, create, del };
