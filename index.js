const express = require("express");
const dotenv = require("dotenv");
const mongo = require('./shared/connect');
const Router = require('./routes/route');

dotenv.config();
const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();

app.use('/', Router);

//app.listen(process.env.PORT || 3000);
app.listen(3000);