const express = require('express');
const router = express.Router();
const {
  signUpUser,
  signInUser,
  Logout,
  getUsername,
  getImage,
} = require('../controllers/authController');
const {isAuthenticated}= require('../middleware/authMiddleware')

router.post('/signup', signUpUser);

router.post('/login', signInUser);

router.post('/logout', Logout);


router.get('/username', isAuthenticated, getUsername);

router.get('/image', isAuthenticated, getImage);

module.exports = router;
