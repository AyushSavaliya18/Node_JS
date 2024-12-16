const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
        trim: true,
        unidue:true
    },
    product_name: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    deposit: {
        type: Number,
        trim: true
    },
    qty: {
        type: Number,
        trim: true
    },
    description:{
        type:String,
        trim:true
    },
    subcategory_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    color_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'color'
    },
    size_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'size'
    }

});
module.exports = mongoose.model("user", userschema);
