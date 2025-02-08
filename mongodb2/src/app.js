const express = require("express");
const userModel = require("./models/user.model");
const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  const { email, password, username } = req.body;

  const user = await userModel.create({
    email: email,
    password: password,
    username: username,
  });

  res.send(user);
});


app.get("/get-all", async (req, res) => {

  const users = await userModel.find();
  res.send(users);

});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await userModel.findByIdAndDelete(id);
  res.send("deleted");
})

module.exports = app;
