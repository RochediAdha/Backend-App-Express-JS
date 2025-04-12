import Joi from "joi";

const createAkunPeranValidation = Joi.object({
  akun_id: Joi.number().required(),
  peran_id: Joi.number().required(),
  identitas: Joi.number().required(),
});

const updateAkunPeranValidation = Joi.object({
  akun_id: Joi.number().required(),
  peran_id: Joi.number().required(),
  identitas: Joi.number().required(),
});

export { createAkunPeranValidation, updateAkunPeranValidation };
