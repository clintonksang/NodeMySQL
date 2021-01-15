
const express  = require("express");
const bodyParser  = require("body-Parser");
const mysqlConnection = require("./connection")
var app =express();


const PeopleRoute =require("./data");
app.use(bodyParser.json());

app.use("/people", PeopleRoute);



app.listen(3000);