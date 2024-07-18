
const Joi = require('joi');

const orderSchema = Joi.object({
    product_id: Joi.number().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    color: Joi.string().required(),
    size: Joi.string().required(),
    total_amount: Joi.number().required(),
    order_status: Joi.string().required()
});

const validateOrder = (data) => {
    return orderSchema.validate(data);
};

module.exports = {
    validateOrder
};
