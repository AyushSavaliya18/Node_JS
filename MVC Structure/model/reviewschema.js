const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    Review_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    },
    Description: {
        type: String,
        required: true,
        trim: true
    },
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;