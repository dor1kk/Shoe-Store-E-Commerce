const Joi = require('joi');

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().min(0).required(),
        description: Joi.string().required(),
        category_id: Joi.number().integer().min(1).required(),
        stock: Joi.number().integer().min(0).required(),
        image_url: Joi.string().uri().required()
    });

    return schema.validate(product);
};

module.exports = {
    validateProduct
};
