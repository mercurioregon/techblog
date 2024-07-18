const express = require("express")
const exphbs = require("express-handlebars")
const router = require("./controllers")
const app = express()
const PORT = process.env.PORT || 4001
const hbs =  exphbs.create({
    extname:".handlebars", 
    defaultLayout: "main"
})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.use(express.json())
app.use(router)
app.listen(PORT, ()=>{
    console.log("application works")
} )