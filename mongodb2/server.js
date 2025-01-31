const app = require("./src/app");
const connect = require("./src/db/db");

connect();

app.listen(3000, (req, res) => {
  console.log("server connected");
});
