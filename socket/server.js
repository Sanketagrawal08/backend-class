const express = require("express");
const app = require("./src/app");

const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("A USER IS CONNECTED");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
