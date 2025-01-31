const express = require("express")
const app = express();

app.get("/",(req,res) => {
    res.send("server started")
})

module.exports = app