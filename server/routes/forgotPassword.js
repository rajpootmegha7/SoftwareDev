//Author: Pranjal Jain
const router = require("express").Router()
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/validate", async(req, res) => {
    try {
        
        var{email} = req.body
        const count = await pool.query("SELECT * FROM plant_care.user u where u.email = $1", [email]);
        if (count.rows.length === 0){
            return res.status(401).send("Email does not exists")
        }
        const security = await pool.query("select security_question from plant_care.user u where u.email = $1", [email]);
        res.json(security.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


router.post("/", async(req,res) => {

    try{
        const{email, password, security_answer} = req.body;

        const security = await pool.query("SELECT * FROM plant_care.user u where u.email = $1 and u.security_answer = $2", [email, security_answer]);
        if (security.rows.length === 0){
            return res.status(401).send("Incorrect answer")
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);

        const update = await pool.query("UPDATE plant_care.user SET password=$1 WHERE email = $2", [bcryptPassword, email]);
        res.send("Password updated successfully")
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;