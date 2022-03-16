//Author: Pranjal Jain
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const jwtAuth = require('./routes/jwtAuth');
const planner = require('./routes/planner');
const calendar = require('./routes/calendar');
const search = require('./routes/search');
const forgotPassword = require('./routes/forgotPassword');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', jwtAuth);
app.use('/planner', planner);
app.use('/calendar', calendar);
app.use('/search', search);
app.use('/forgotPassword', forgotPassword);



const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is up at port ${port}`)
});