const mongoose = require('mongoose');

// Define the schema for subcategory
const subcategorySchema = new mongoose.Schema({
    subcategory: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        type:String,
        ref: 'Category',
        required: true
        },
    categoryid:{
        type: mongoose.Schema.Types.ObjectId,
        type:String,
        ref: 'category',
        required: true
    }
});

// Create the model
const Subcategory = mongoose.model('Subcategory', subcategorySchema); // This is the model constructor

// Export the model so that it can be used elsewhere
module.exports = Subcategory;
