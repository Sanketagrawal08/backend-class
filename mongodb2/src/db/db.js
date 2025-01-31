const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/n21")
    .then(() => {
      console.log("db connect");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
