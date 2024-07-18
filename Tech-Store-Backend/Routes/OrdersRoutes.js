const express = require('express');
const router = express.Router();
const { makeAnOrder, getMyOrders, cancelOrder } = require('../controllers/ordersController');
const { isAuthenticated, hasRole } = require('../middleware/authMiddleware');

router.post('/order', isAuthenticated, makeAnOrder);
router.get('/my-orders', isAuthenticated, getMyOrders);
router.post('/cancel-order/:id', isAuthenticated, cancelOrder)

module.exports = router;
