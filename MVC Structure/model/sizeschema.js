const mongoose = require("mongoose");

const sizeschema = new mongoose.Schema({
    Size_id: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected to use Schema.Types.ObjectId
        ref: "Size"
    },
    Size_name: {
        type: String,
        required: true
    }
});

// Create the model after the schema definition
const Size = mongoose.model('Size', sizeschema);

module.exports = Size;
