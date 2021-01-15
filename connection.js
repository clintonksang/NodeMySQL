const mysql  = require("mysql");

var mysqlconnection= mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"kaizen",
    multipleStatements:true,
})
mysqlconnection.connect((err=>{
    if (!err) {
        console.log("Connected")
    } else {
        console.log("Connection Error") 
    }
}));
module.exports=mysqlconnection;