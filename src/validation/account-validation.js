import Joi from "joi";

const registerAccountValidation = Joi.object({
  username: Joi.string().max(64).required(),
  password: Joi.string().max(256).required(),
  nama: Joi.string().max(128).required(),
  email: Joi.string().max(128).required(),
});

const loginAccountValidation = Joi.object({
  username: Joi.string().max(64).required(),
  password: Joi.string().max(256).required(),
});

const getAccountValidation = Joi.string().max(64).required();

const updateAccountValidation = Joi.object({
  username: Joi.string().max(64).required(),
  password: Joi.string().max(256).optional(),
  nama: Joi.string().max(128).optional(),
  email: Joi.string().max(128).optional(),
});

export {
  registerAccountValidation,
  loginAccountValidation,
  getAccountValidation,
  updateAccountValidation,
};
