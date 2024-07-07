const router = require('express').Router();

router.get("/", (req,res)=>{
    res.render("home")
    
})

router.get("/dashboard", (req,res)=>{
    res.render("dashboard")
    
})

router.get("/editPost", (req,res)=>{
    res.render("editPost")
    
})

router.get("/login", (req,res)=>{
    res.render("login")
    
})

router.get("/newPost", (req,res)=>{
    res.render("newPost")
    
})

router.get("/post", (req,res)=>{
    res.render("post")
    
})

router.get("/signup", (req,res)=>{
    res.render("signup")
    
})

module.exports = router;
