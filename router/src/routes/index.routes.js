const express = require('express')

const router = express.Router();

const userRegister = require("../controllers/users.controller")

console.log("index.routes.js");

router.get("/", (req, res) => {
    res.send("Hello World from route");
})

router.get("/about",(req,res)=>{
    res.send("About page")
})

router.post("/register",userRegister)

module.exports = router