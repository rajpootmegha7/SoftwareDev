//Author: Pranjal Jain
// code for searching plants from DB based on certain search criteria.
const router = require("express").Router();
const pool = require("../db");

router.post("/", async(req, res) => {
    try {
        
        var{name , type, season, location} = req.body
        console.log(name , type, season, location);
        name = '%'+name+'%'
        type = '%'+type+'%'
        season = '%'+season+'%'
        location = '%'+location+'%'

        console.log(name , type, season, location)
        const search = await pool.query("SELECT * FROM plant_care.plant p join plant_care.plant_type pt on p.plant_type_id=pt.plant_type_id join plant_care.season_type st on p.season_type_id=st.season_type_id join plant_care.location l on p.plant_id = l.plant_id where name like $1 and pt.plant_type like $2 and st.season_type like $3 and l.state_name like $4", [name , type, season, location]);

        if (search.rows.length === 0)
                return res.sendStatus(403);
        return res.status(200).send({ text: "Search Successful", data: search.rows });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;