const mongoose = require('mongoose');

// Define the schema for subcategory
const subcategorySchema = new mongoose.Schema({
    subcategory: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model
const Subcategory = mongoose.model('Subcategory', subcategorySchema); // This is the model constructor

// Export the model so that it can be used elsewhere
module.exports = Subcategory;
