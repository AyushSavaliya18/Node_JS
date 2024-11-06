const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const userModel = mongoose.model("user", userschema);

module.exports =userModel