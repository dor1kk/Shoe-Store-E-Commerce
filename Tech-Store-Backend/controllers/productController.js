const productModel = require('../models/productModels');
const { validateProduct } = require('../utils/ProductValidation');

const createProduct = (req, res) => {
    const { name, price, description, category_id, stock, image_url } = req.body;

    const { error } = validateProduct(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    productModel.createProduct({ name, price, description, category_id, stock, image_url }, (err, result) => {
        if (err) {
            console.error('Error creating product:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        res.status(201).json({ success: true, message: 'Product created successfully', product: result });
    });
};

const getProducts = (req, res) => {
    productModel.getProducts((err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        res.status(200).json({ success: true, products: results });
    });
};

const getProductsById = (req, res) => {
    const productId = req.params.id;

    productModel.getProductById(productId, (err, result) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        if (!result || result.length === 0) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.status(200).json({ success: true, product: result[0] });
    });
};

module.exports = {
    createProduct,
    getProducts,
    getProductsById
};
