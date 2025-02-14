const express = require("express")

const app = express()
const router = require("./router/users.routes")
app.use(express.json());
app.use("/users",router)

module.exports = app;