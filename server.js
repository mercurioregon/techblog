const express = require("express")
const exphbs = require("express-handlebars")
const router = require("./controllers")
const app = express()
const hbs =  exphbs.create({
    extname:".handlebars", 
    defaultLayout: "main"
})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.use(express.json())
app.use(router)
app.listen(4001, ()=>{
    console.log("application works")
} )