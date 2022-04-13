//Author: Pranjal Jain
// This code encrypts the password sent by user while registration and stores user info into the DB
// and validates the password entered by user from login with decrypted password from DB
const router = require("express").Router()
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// This code inserts the user info to DB and encrypts the password
router.post("/register", validInfo, async (req, res) => {
    try{
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

// This code decrypts the password stored in DB and compares it with password sent in login request
// and generates token for the user.
router.post("/login", validInfo, async (req,res) => {
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

        res.json({"token" : token, "first_name" : user.rows[0].first_name, "last_name" : user.rows[0].last_name });

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    };
});

// this code verifies if user is logged in
router.get("/is-verify", authorization, async(req, res) =>{
    try{
        res.json(true);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    };
});

module.exports = router;