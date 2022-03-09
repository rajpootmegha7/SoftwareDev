const Pool =  require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "Pranj@1234",
    host: "localhost",
    port: 5432,
    database: "plant_care"
});

module.exports = pool;