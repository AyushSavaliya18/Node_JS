const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
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

// Export the model directly
module.exports = mongoose.model("user", userschema);
