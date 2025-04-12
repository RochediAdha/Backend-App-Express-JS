import akunService from "../service/akun-service.js";

const register = async (req, res, next) => {
  try {
    const result = await akunService.register(req.body);
    res.status(200).json({
      message: "Register success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const result = await akunService.login(req.body);
    res.status(200).json({
      message: "Login success",
      data: result,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

//Get
const get = async (req, res, next) => {
  try {
    const username = req.akun.username;

    const result = await akunService.get(username);
    res.status(200).json({
      message: "Get current akun success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Update
const update = async (req, res, next) => {
  try {
    const username = req.akun.username;
    const request = req.body;
    request.username = username;

    const result = await akunService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

//Logout
const logout = async (req, res, next) => {
  try {
    await akunService.logout(req.akun.username);
    res.status(200).json({
      data: "Logout success",
    });
  } catch (e) {
    next(e);
  }
};

export default { register, login, get, update, logout };
