// Author: Pranjal Jain
// Code for setting up the connection to DB
const Pool = require('pg').Pool;

const pool = new Pool();

module.exports = pool;
