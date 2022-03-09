const router = require("express").Router()
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

router.post("/register", async (req, res) => {
    try{
        console.log("in register")
        const {first_name , last_name, email, contact_number, password, security_question, security_answer} = req.body;
        const user = await pool.query("SELECT * FROM plant_care.user where email = $1 ", [
            email
        ]);
        if (user.rows.length != 0){
            return res.status(401).send("user already exists")
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO plant_care.user (first_name , last_name, email, contact_number, password, security_question, security_answer) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [first_name , last_name, email, contact_number, bcryptPassword, security_question, security_answer]);
        

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({token});

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    };
});

router.post("/login", async (req,res) => {
    try{
        const{email, password} = req.body;
       
        const user = await pool.query("SELECT * FROM plant_care.user where email = $1 ", [
            email
        ]);

        if(user.rows.length === 0){
            return res.status(401).json("Password or Email is incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        
        console.log(validPassword);

        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect");
        };

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({token});

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    };
});

module.exports = router;