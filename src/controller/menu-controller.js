import menuService from "../service/menu-service.js";

const create = async (req, res, next) => {
  try {
    const result = await menuService.create(req.body);
    res.status(200).json({
      message: "Create data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Get By ID
const get = async (req, res, next) => {
  try {
    const id = req.params.id;
    const request = req.body;
    request.id = id;

    const result = await menuService.get(request);
    res.status(200).json({
      message: "Get data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Get All
const getall = async (req, res, next) => {
  try {
    const result = await menuService.getall();
    res.status(200).json({
      message: "Get all data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Update
const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const request = req.body;
    request.id = id;

    const result = await menuService.update(request);
    res.status(200).json({
      message: "Update data success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Delete
const del = async (req, res, next) => {
  try {
    const id = req.params.id;
    const request = req.body;
    request.id = id;

    const result = await menuService.del(request);
    res.status(200).json({
      data: "Delete data success",
    });
  } catch (e) {
    next(e);
  }
};

export default { create, get, getall, update, del };
