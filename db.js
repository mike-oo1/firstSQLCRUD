const mysql = require("mysql2/promise")
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"michael001",
    database:"employee_db"

})

db.query("SELECT 1")
.then(()=>{
console.log("database connected") 
}).catch((error)=>{
    console.log(error.message)
})


module.exports = {db}