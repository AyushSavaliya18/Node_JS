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
    }
});
module.exports = mongoose.model("color", colorchema);