const express = require("express")
const Router = express()
const{getAll,getOne,deleteEmployee,newEmployee}=require("../Controllers/employee")
Router.route("/getAll").get(getAll)
Router.route("/getOne/:id").get(getOne)
Router.route("/delete/:id").delete(deleteEmployee)
Router.route("/create").post(newEmployee)
module.exports =Router