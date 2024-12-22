const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    Address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
    },
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    pincode:{
        type:Number,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    phone_no:{
        type:Number,
        required:true,
        trim:true
    }

});
    const addressmodel = mongoose.model("Address",addressSchema );
    module.exports = addressmodel;