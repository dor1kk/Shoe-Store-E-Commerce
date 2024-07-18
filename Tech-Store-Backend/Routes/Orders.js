const makeAnOrder = (req, res, pool) => {
    const { product_id, quantity, price, color, size, total_amount, order_status } = req.body;
    const user_id= req.session.userid;

    const sql = `INSERT INTO orders (product_id, quantity, price, color, size, user_id, total_amount, order_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [product_id, quantity, price, color, size, user_id, total_amount, order_status];
  
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting order:', err);
        res.status(500).json({ message: 'Failed to insert order' });
      } else {
        console.log('Order inserted successfully');
        res.status(200).json({ message: 'Order inserted successfully' });
      }
    });
  };

  
  const getMyOrders = (req, res, pool) => {
    const userid = req.session.userid; 

    pool.query('SELECT * FROM orders inner join products on orders.product_id=products.product_id WHERE user_id = ?', [userid], (error, results) => {
      if (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
      }
      res.status(200).json({ results });
    });
  };


  
  module.exports = {
    makeAnOrder,
    getMyOrders
  };
  