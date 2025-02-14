const userModel = require("../models/user.model");

module.exports.UserRegister = async (req, res) => {
  const { name, username } = req.body;
  const user = await userModel.create({ name, username });
  res.send(user)
};

