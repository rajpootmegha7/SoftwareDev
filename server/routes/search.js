//Author: Pranjal Jain
const router = require("express").Router();
const pool = require("../db");

router.get("/", async(req, res) => {
    try {
        
        var{name , type, season, location} = req.body
        name = '%'+name+'%'
        const search = await pool.query("SELECT * FROM plant_care.plant p join plant_care.plant_type pt on p.plant_type_id=pt.plant_type_id join plant_care.season_type st on p.season_type_id=st.season_type_id join plant_care.location l on p.plant_id = l.plant_id where name like $1 or pt.plant_type = $2 or st.season_type = $3 or l.state_name = $4", [name , type, season, location]);
        
        res.json(search.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;