const orderModel = require('../models/orderModels');
const { validateOrder } = require('../utils/OrderValidation');

const makeAnOrder = (req, res) => {
    const { error } = validateOrder(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const orderData = {
        ...req.body,
        user_id: req.session.userid
    };

    orderModel.createOrder(orderData, (err, result) => {
        if (err) {
            console.error('Error inserting order:', err);
            return res.status(500).json({ message: 'Failed to insert order' });
        }
        console.log('Order inserted successfully');
        return res.status(200).json({ message: 'Order inserted successfully' });
    });
};

const getMyOrders = (req, res) => {
    const user_id = req.session.userid;

    orderModel.getOrdersByUserId(user_id, (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        return res.status(200).json({ results });
    });
};

const cancelOrder = (req, res) => {
    const orderId = req.params.id;

    orderModel.getOrdersByUserId(req.session.userid, (err, orders) => {
        if (err) {
            console.error('Error fetching orders:', err);
            return res.status(500).json({ message: 'Failed to fetch orders' });
        }

        const orderToCancel = orders.find(order => order.order_item_id === parseInt(orderId));

        if (!orderToCancel) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (orderToCancel.order_status !== 'pending') {
            return res.status(400).json({ message: 'Only pending orders can be cancelled' });
        }

        orderModel.cancelOrder(orderId, 'cancelled', (err, result) => {
            if (err) {
                console.error('Error cancelling order:', err);
                return res.status(500).json({ message: 'Failed to cancel order' });
            }
            console.log('Order cancelled successfully');
            return res.status(200).json({ message: 'Order cancelled successfully' });
        });
    });
};

module.exports = {
    makeAnOrder,
    cancelOrder,
    getMyOrders
};
