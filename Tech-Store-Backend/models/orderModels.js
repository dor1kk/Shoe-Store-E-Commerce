
const pool = require('../config/db');

const createOrder = (orderData, callback) => {
    const { product_id, quantity, price, color, size, user_id, total_amount, order_status } = orderData;
    const sql = `INSERT INTO orders (product_id, quantity, price, color, size, user_id, total_amount, order_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [product_id, quantity, price, color, size, user_id, total_amount, order_status];
    
    pool.query(sql, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

const getOrdersByUserId = (user_id, callback) => {
    const sql = 'SELECT * FROM orders INNER JOIN products ON orders.product_id = products.product_id WHERE user_id = ?';
    
    pool.query(sql, [user_id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
};

module.exports = {
    createOrder,
    getOrdersByUserId
};
