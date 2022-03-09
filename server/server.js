require("dotenv").config();
const express = require("express");
const cors = require('cors');
const login = require('./routes/login');
const jwtAuth = require('./routes/jwtAuth');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', jwtAuth);
app.use('/login', login);


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is up at port ${port}`)
});