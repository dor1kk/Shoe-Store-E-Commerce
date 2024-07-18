const pool = require('../config/db');

const createProduct = (productData, callback) => {
    const { name, price, description, category_id, stock, image_url } = productData;

    const sql = `INSERT INTO products (name, price, description, category_id, stock, image_url) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [name, price, description, category_id, stock, image_url];

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting product:', err);
            return callback(err, null);
        }
        callback(null, result);
    });
};

const getProductById = (productId, callback) => {
    const sql = 'SELECT * FROM products WHERE product_id = ?';
    pool.query(sql, [productId], (error, results) => {
        if (error) {
            console.error('Error fetching product:', error);
            return callback(error, null);
        }
        callback(null, results);
    });
};

const getProducts = (callback) => {
    const sql = 'SELECT * FROM products';
    pool.query(sql, (error, results) => {
        if (error) {
            console.error('Error fetching products:', error);
            return callback(error, null);
        }
        callback(null, results);
    });
};

module.exports = {
    createProduct,
    getProductById,
    getProducts
};
