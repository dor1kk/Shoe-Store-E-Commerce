const { signUpUserModel, signInUserModel } = require('../models/authModels');
const { signUpValidation } = require('../utils/AuthValidation'); 

const signUpUser = (req, res) => {
  const { username, email, password, first_name, last_name, image } = req.body;

  const { error } = signUpValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  signUpUserModel({ username, email, password, first_name, last_name, image }, (err, result) => {
    if (err) {
      console.error('Error signing up user:', err);
      return res.status(500).json({ message: 'Failed to register user' });
    }

    req.session.username = username;
    req.session.userid = result.insertId;
    req.session.role = 'customer';

    return res.status(201).json({ id: result.insertId, username, email });
  });
};

const signInUser = (req, res) => {
  const { username, password } = req.body;

  const { error } = require('../utils/AuthValidation').signInValidation.validate(req.body); // Use .validate() directly
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  signInUserModel(username, password, (error, results) => {
    if (error) {
      console.error('Error signing in user:', error);
      return res.status(500).json({ Login: false, error: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = results[0];
      req.session.username = user.username;
      req.session.userid = user.user_id;
      req.session.role = user.role;
      req.session.image = user.image_url;

      console.log('Session after signInUser:', req.session);

      return res.json({ Login: true });
    } else {
      return res.json({ Login: false });
    }
  });
};

const Logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err.stack);
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logged out successfully' });
  });
};

const getUsername = (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
};

const getImage = (req, res) => {
  if (req.session.image) {
    return res.json({ valid: true, image: req.session.image });
  } else {
    return res.json({ valid: false });
  }
};

module.exports = {
  signUpUser,
  signInUser,
  Logout,
  getUsername,
  getImage,
};
