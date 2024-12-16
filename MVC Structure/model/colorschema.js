const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
    Color_id: {
        type: mongoose.Types.ObjectId,
        ref : "Color"
    },
    Color_code: {
        type: String,
        required: true
    }
});

// Create the model after the schema definition
const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
