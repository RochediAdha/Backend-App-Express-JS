import Joi from "joi";

const createPeranValidation = Joi.object({
  nama: Joi.string().max(128).required(),
  deskripsi: Joi.string().max(128).required(),
});

const getPeranValidation = Joi.object({
  id: Joi.number().required(),
});

const updatePeranValidation = Joi.object({
  id: Joi.number().required(),
  nama: Joi.string().max(64).required(),
  deskripsi: Joi.string().max(256).required(),
});

export {
  createPeranValidation,
  getPeranValidation,
  updatePeranValidation,
};
