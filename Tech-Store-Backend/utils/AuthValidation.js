
const Joi = require('joi');

const signUpValidation = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  image: Joi.string().optional(),
  role: Joi.string().valid('admin', 'customer').required() 
});

const signInValidation = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

module.exports = {
  signUpValidation,
  signInValidation,
};
