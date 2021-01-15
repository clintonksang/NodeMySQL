const express = require ("express");
const mySQLConnection = require ("./connection");
const Router = express.Router();

Router.get("/", (req, res)=>{
    mySQLConnection.query("SELECT * FROM tables",(err, rows, fields)=>{
        if (!err) {
            res.send(rows);     
        } else {
            console.log(err); 
        }
    })
})

module.exports = Router;