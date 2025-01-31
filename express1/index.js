const express = require("express")
const app= express()

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("hello from home page")
})

app.get("/about",(req,res) => {
    res.send("hello form about")
})

app.get("/*",(req,res) => {
    res.send("error page")
})

app.listen(3000 , ()=> {
    console.log("thanks man");
})
