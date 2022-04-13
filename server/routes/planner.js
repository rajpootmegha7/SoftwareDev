// Author: Pranjal Jain
// This module has the code for reteriving and saving planner to DB
// eslint-disable-next-line new-cap
const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

// code for authorizing and reteriving the planner for user.
router.get('/', authorization, async (req, res) => {
  try {
    const planner = await pool.query(
        'SELECT planner_json FROM plant_care.planner where user_id = $1',
        [req.user]);
    if (planner.rowCount === 0) {
      res.json({});
    }
    res.json(planner.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// code for authorizing and saving the planner for user in DB.
router.post('/', authorization, async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    let {planner_json} = req.body;
    // eslint-disable-next-line camelcase
    planner_json = '\''+planner_json+'\'';

    // eslint-disable-next-line max-len
    await pool.query('INSERT INTO plant_care.planner (user_id, planner_json) VALUES($1, $2) ON CONFLICT (user_id) DO UPDATE SET planner_json = $2', [req.user, planner_json]);

    res.status(200).json('Planner Saved Successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
