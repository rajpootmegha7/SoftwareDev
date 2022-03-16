//Author: Pranjal Jain
const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization');

router.get("/", authorization, async(req, res) => {
    try {
        

        const calendar = await pool.query("SELECT calendar_json FROM plant_care.calendar where user_id = $1", [req.user]);
        
        res.json(calendar.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


router.post("/", authorization, async(req, res) => {
    try {
        var {calendar_json} = req.body
        calendar_json = "'"+calendar_json+"'"

        const newPlanner = await pool.query("INSERT INTO plant_care.calendar (user_id, calendar_json) VALUES($1, $2) ON CONFLICT (user_id) DO UPDATE SET calendar_json = $2", [req.user, calendar_json]);
        
        res.status(200).json("calendar Saved Successfully");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;