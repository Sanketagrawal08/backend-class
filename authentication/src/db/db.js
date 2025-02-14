const mongoose = require("mongoose")


function connect(){

    mongoose.connect("mongodb://localhost:27017/authentication").then(console.log("connected to db")).catch((err)=>{
        console.log(err)
    })

}

module.exports = connect