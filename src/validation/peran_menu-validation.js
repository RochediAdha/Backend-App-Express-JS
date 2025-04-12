import Joi from "joi";

const createPeranMenuValidation = Joi.object({
  peran_id: Joi.number().required(),
  menu_id: Joi.number().required(),
  c: Joi.boolean().required(),
  r: Joi.boolean().required(),
  u: Joi.boolean().required(),
  d: Joi.boolean().required(),
});

export { createPeranMenuValidation };
