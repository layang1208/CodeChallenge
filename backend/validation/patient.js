const Joi = require("joi");

const patientSchema = Joi.object({
  email: Joi.string().email().min(5).max(255).required(),
});

module.exports = {
  patientSchema,
};
