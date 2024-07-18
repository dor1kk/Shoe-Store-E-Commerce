const getProducts = (req, res,pool) => {
    pool.query('SELECT * FROM products', (error, results) => {
      if (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
      }
      res.status(200).json({results });
    });
  };

  const getProductsById = (req, res, pool) => {
    const productId = req.params.id; // Extracts the product ID from the request parameters

    console.log(productId)
    pool.query('SELECT * FROM products WHERE product_id = ?', [productId], (error, results) => {
      if (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
      }
      res.status(200).json({ results });
    });
  };
  
  module.exports = {
    getProducts,
    getProductsById
  };