const express = require('express');
const router = express.Router();
const { makeAnOrder, getMyOrders } = require('../controllers/ordersController');
const { isAuthenticated, hasRole } = require('../middleware/authMiddleware');

router.post('/order', isAuthenticated, makeAnOrder);
router.get('/my-orders', isAuthenticated, getMyOrders);

module.exports = router;
