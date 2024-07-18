const getCategories = (req, res, pool) => {
    pool.query('SELECT * FROM categories', (error, results) => {
      if (error) {
        console.error('Error fetching categories:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
      }
  
      res.status(200).json({ success: true, categories: results });
    });
  };
  
  module.exports = {
    getCategories
  };
  