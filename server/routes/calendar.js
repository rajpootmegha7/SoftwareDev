// Author: Pranjal Jain
// This module has the code for reteriving and saving calender to DB
// eslint-disable-next-line new-cap
const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

// code for authorizing and reteriving the calender for user.
router.get('/', authorization, async (req, res) => {
  try {
    // eslint-disable-next-line max-len
    const calendar = await pool.query('SELECT calendar_json FROM plant_care.calendar where user_id = $1', [req.user]);

    res.json(calendar.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// code for authorizing and saving the calender for user in DB.
router.post('/', authorization, async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    let {calendar_json} = req.body;
    // eslint-disable-next-line camelcase
    calendar_json = '\''+calendar_json+'\'';

    // eslint-disable-next-line max-len
    await pool.query('INSERT INTO plant_care.calendar (user_id, calendar_json) VALUES($1, $2) ON CONFLICT (user_id) DO UPDATE SET calendar_json = $2', [req.user, calendar_json]);

    res.status(200).json('calendar Saved Successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
