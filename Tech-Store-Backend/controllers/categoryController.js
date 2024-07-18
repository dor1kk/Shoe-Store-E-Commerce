const categoryModel = require('../models/categoryModels');

const getCategories = (req, res) => {
    categoryModel.getAllCategories((err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        return res.status(200).json({ success: true, categories: results });
    });
};

const createCategory = (categoryData, callback) => {
    categoryModel.createCategory(categoryData, callback);
};

module.exports = {
    getCategories,
    createCategory
};
