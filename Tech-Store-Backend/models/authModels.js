
const pool = require('../config/db');

const signUpUserModel = (user, callback) => {
  const { username, email, password, first_name, last_name, image } = user;
  
  pool.query(
    'INSERT INTO users (username, email, password, first_name, last_name, image_url) VALUES (?, ?, ?, ?, ?, ?)',
    [username, email, password, first_name, last_name, image],
    (error, result) => {
      if (error) {
        console.error('Error inserting user:', error);
        return callback(error, null);
      }
      callback(null, result);
    }
  );
};

const signInUserModel = (username, password, callback) => {
  pool.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        return callback(error, null);
      }
      callback(null, results);
    }
  );
};

module.exports = {
  signUpUserModel,
  signInUserModel,
};
