const express = require("express")
const app = express()
//alternative--> 
//const app = require("express")()

require("./model/index")

// telling nodejs to set its view engine to ejs
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})




const PORT = 5000

app.listen(PORT,()=>{
    console.log(`NodeJs project has started in port ${PORT}`)
})