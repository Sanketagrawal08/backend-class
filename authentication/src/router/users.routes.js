const express = require("express");
const userModel = require("../model/users.model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
  });
  res.send(user);
  console.log("registed");

  

});

module.exports = router;
