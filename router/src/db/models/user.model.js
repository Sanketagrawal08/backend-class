const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel