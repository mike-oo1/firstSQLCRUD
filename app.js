const express =require("express")
const app = express()
const port =4000


app.use(express.json())
app.use("/api",routes)

app.listen(port,()=>{
    console.log("server is listening to port")
})
module.exports =app