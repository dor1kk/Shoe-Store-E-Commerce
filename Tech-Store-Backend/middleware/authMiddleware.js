
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userid) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  const hasRole = (role) => {
    return (req, res, next) => {
        if (req.session && req.session.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    };
  };
  
  module.exports = {
    isAuthenticated,
    hasRole
  };
  