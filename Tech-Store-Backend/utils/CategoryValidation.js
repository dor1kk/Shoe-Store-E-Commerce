const Joi = require('joi');

const validateCategory = (data) => {
    const schema = Joi.object({
        name: Joi.string().required()
    });
    return schema.validate(data);
};

module.exports = {
    validateCategory
};
