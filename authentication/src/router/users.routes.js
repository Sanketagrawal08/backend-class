const express= require("express")
const userModel = require('../model/users.model')
const router = express.Router()

router.post("/register", async (req,res) => {
        const {username,email,password} = req.body;
        const user = await userModel.create({  username,email,password });
        res.send(user)
        console.log("registed")

})

module.exports = router