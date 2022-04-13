// Author: Pranjal Jain
// code for generating the token using user_id
const jwt = require('jsonwebtoken');
require('dotenv').config();

// eslint-disable-next-line require-jsdoc
function jwtGenerator(userId) {
  const payload = {
    user: userId,
  };

  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: '1hr'});
};

module.exports = jwtGenerator;
