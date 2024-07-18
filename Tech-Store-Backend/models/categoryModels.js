const pool = require('../config/db');

const getAllCategories = (callback) => {
    pool.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
};

const createCategory = (categoryData, callback) => {
    const { name } = categoryData;
    const sql = 'INSERT INTO categories (name) VALUES (?)';
    const values = [name];
    
    pool.query(sql, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};

module.exports = {
    getAllCategories,
    createCategory
};
