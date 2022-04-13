// Author: Pranjal Jain
// this module has code for validating the security question and resetting the
// password.
// eslint-disable-next-line new-cap
const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// This code validates the email from DB and sends the security question as
// response.
router.post('/validate', async (req, res) => {
  try {
    const {email} = req.body;
    // eslint-disable-next-line max-len
    const count = await pool.query('SELECT * FROM plant_care.user u where u.email = $1', [email]);
    if (count.rows.length === 0) {
      return res.status(401).send('Email does not exists');
    }
    // eslint-disable-next-line max-len
    const security = await pool.query('select security_question from plant_care.user u where u.email = $1', [email]);
    res.json(security.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// this code updates the new password into DB after validating the security
// answer.
router.post('/resetpass', async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const {email, password, security_answer} = req.body;

    // eslint-disable-next-line max-len
    const security = await pool.query('SELECT * FROM plant_care.user u where u.email = $1 and u.security_answer = $2', [email, security_answer]);
    if (security.rows.length === 0) {
      return res.status(401).send('Incorrect answer');
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    // eslint-disable-next-line max-len
    await pool.query('UPDATE plant_care.user SET password=$1 WHERE email = $2', [bcryptPassword, email]);
    res.status(200).json('Password updated successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
