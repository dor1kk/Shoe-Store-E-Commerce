const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

const register = (req, res) => {
  const { username, password, email, first_name, last_name, role } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Please provide username, password, and email' });
  }

  userModel.getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length > 0) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { username, password: hashedPassword, email, first_name, last_name, role };

    userModel.createUser(newUser, (err, results) => {
      if (err) return res.status(500).json({ message: 'Server error' });
      return res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  userModel.getUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ user_id: user.user_id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    return res.status(200).json({ token });
  });
};

module.exports = {
  register,
  login
};
