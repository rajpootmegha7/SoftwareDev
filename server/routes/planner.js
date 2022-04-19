// Author: Pranjal Jain
// This module has the code for reteriving and saving planner to DB
// eslint-disable-next-line new-cap
const router = require('express').Router();
const pool = require('../db');

// code for authorizing and reteriving the planner for user.
router.post('/get', async (req, res) => {
  try {
    // console.log('inside planner get',req)
    const planner = await pool.query(
        'SELECT planner_json FROM plant_care.planner where user_id = $1',
        [req.body.user_id]);
    // console.log(planner)
    if (planner.rowCount === 0) {
      res.status(400).send('No results found');
    }
    res.json(planner.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// code for authorizing and saving the planner for user in DB.
router.post('/save', async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const data_json = req.body;
    console.log(data_json);
    // eslint-disable-next-line max-len
    await pool.query('INSERT INTO plant_care.planner (user_id, planner_json) VALUES($1, $2) ON CONFLICT (user_id) DO UPDATE SET planner_json = $2', [data_json.user_id, data_json.data]);

    res.status(200).json('Planner Saved Successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

