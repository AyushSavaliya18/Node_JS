const mongoose = require("mongoose");

const colorchema = new mongoose.Schema({
    Color_id: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    Color_code: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    Otp: {
        type: Number,
        default: 0,
    }
});
module.exports = mongoose.model("user", userschema);