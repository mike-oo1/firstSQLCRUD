const mySQL =require("mysql2/promise")
const dotenv=require("dotenv").config()
require("./db")
const express =  require("express")
const app = express()
const routes = require("./Route/route")
app.use("/api",routes)

const port =4077
app.use(express.json())

app.listen(port,()=>{
    console.log("server is listening to port " +port)
})
