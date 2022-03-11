//Author: Pranjal Jain
const Pool =  require('pg').Pool

const pool = new Pool({
    user: "plant_care",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "plant_care"
});

module.exports = pool;