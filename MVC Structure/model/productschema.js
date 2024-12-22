const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    Product_name: {
        type: String,
        required: true,
        trim:true
    },
    Price: {
        type: Number,
        required: true,
    },
    Deposite: {
        type: Number,
        trim: true
    },
    Qty: {
        type: Number,
        trim: true
    },
    Description:{
        type:String,
        trim:true
    },
    image:{
        type:Array,
        trim:true,
        validate: [imageLimit, "Add only 3 products images"]
    },
    Sub_c_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    },
    Cat_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    User_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    Color_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'color'
    },
    Size_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'size'
    }

});
function imageLimit(value) {
    return value.length <= 3; // Allow up to 3 images
  }
  const productmodel = mongoose.model("Product", productSchema);

module.exports = productmodel;
