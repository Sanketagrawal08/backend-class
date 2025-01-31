
const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.json());

// create

// fs.writeFile("hello.txt","hello text ka data", (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
//     }
// })

//read operation..

// fs.readFile("hello.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })

//update operationn...

// fs.writeFile("hello.txt", "welcome to nodejs", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file updayes");
//   }
// });

// fs.appendFile("hello.txt","changes",(err) => {
//     console.log("file updates");
// })

//delete operations

// fs.unlink("hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted");
//   }
// });
