import Joi from "joi";

const createMenuValidation = Joi.object({
  nama: Joi.string().max(128).required(),
  url: Joi.string().max(128).required(),
  parent: Joi.number().optional(),
  icon: Joi.string().max(128).optional(),
  order: Joi.number().optional(),
});

const getMenuValidation = Joi.object({
  id: Joi.number().required(),
});

const updateMenuValidation = Joi.object({
  id: Joi.number().required(),
  nama: Joi.string().max(128).required(),
  url: Joi.string().max(128).required(),
  parent: Joi.number().optional(),
  icon: Joi.string().max(128).optional(),
  order: Joi.number().optional(),
});

export {
  createMenuValidation,
  getMenuValidation,
  updateMenuValidation,
};
