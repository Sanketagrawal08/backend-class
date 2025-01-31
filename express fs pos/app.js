const express = require("express");
const fs = require("fs");
const cors = require("cors")
const app = express();

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hii");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/create", (req, res) => {

  const { fileName, fileData } = req.body;
  const filePath = "./uploads/" + fileName;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("file created");
    }
  });
});



app.get("/read/:fileName", (req, res) => {
  const filePath = "./uploads/" + req.params.fileName;

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.patch("/update/:fileName", (req, res) => {
  console.log(req.body);

  const { fileData } = req.body;
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
      res.send("file not uopdate");
    } else {
      res.send("file Update");
    }
  });
});


app.delete("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName
  const filePath = "./uploads/" + fileName;

  fs.unlink(filePath, (err) => {
    if (err) {
        res.send("error in deleting");
      console.log(err);
    } else {
        res.send("file deleted successfuly");
    }
  });
});


app.get("/get-all",(req,res) => {

  fs.readdir("./uploads" , (err,files) => {
    if(err){
      console.log(err)
      res.send("error in reading files")
    }else{
      res.send(files)
    }
  })

})
