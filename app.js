const express = require("express")
const { blogs } = require("./model/index")
const app = express()
//alternative--> 
//const app = require("express")()

require("./model/index")

// telling nodejs to set its view engine to ejs
app.set('view engine','ejs')

app.use(express.urlencoded({extended : true}))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

app.get("/addblog",(req,res)=>{
    res.render("addBlog")
})

app.post("/addblog",async(req,res)=>{
    
    // const title = req.body.title
    // const subtitle = req.body.subtitle
    // const description = req.body.description
    const {title,subtitle,description}= req.body
  
    //Inserting data into blogs table
  await blogs.create({
        title : title,
        subtitle : subtitle,
        description : description
     }),
     res.send("Sucessful")
})


const PORT = 5000

app.listen(PORT,()=>{
    console.log(`NodeJs project has started in port ${PORT}`)
})