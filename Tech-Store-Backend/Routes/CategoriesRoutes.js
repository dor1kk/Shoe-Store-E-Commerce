const express = require('express');
const router = express.Router();
const { getCategories, createCategory } = require('../controllers/categoryController');
const { isAuthenticated, hasRole } = require('../middleware/authMiddleware');
const { validateCategory } = require('../utils/CategoryValidation');

router.get('/categories', getCategories);

router.post('/categories', isAuthenticated, hasRole('admin'), (req, res) => {
    const { error } = validateCategory(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const categoryData = {
        name: req.body.name
    };

    createCategory(categoryData, (err, result) => {
        if (err) {
            console.error('Error creating category:', err);
            return res.status(500).json({ message: 'Failed to create category' });
        }
        console.log('Category created successfully');
        return res.status(200).json({ message: 'Category created successfully' });
    });
});

module.exports = router;
