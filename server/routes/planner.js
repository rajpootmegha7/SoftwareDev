//Author: Pranjal Jain
const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization');

router.get("/", authorization, async(req, res) => {
    try {
        

        const planner = await pool.query("SELECT planner_json FROM plant_care.planner where user_id = $1", [req.user]);
        
        res.json(planner.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post("/", authorization, async(req, res) => {
    try {
        var {planner_json} = req.body
        planner_json = "'"+planner_json+"'"
        console.log(planner_json)

        const newPlanner = await pool.query("INSERT INTO plant_care.planner (user_id, planner_json) VALUES($1, $2) ON CONFLICT (user_id) DO UPDATE SET planner_json = $2", [req.user, planner_json]);
        
        res.status(200).json("Planner Saved Successfully");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;