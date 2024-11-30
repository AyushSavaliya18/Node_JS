const mongoose = require("mongoose");

const userschema = new mongoose.schema({
    name:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    mobile: {type:Number,
        require:true,
        trim:true,
        minlength:10,
        maxlength:10
    }
})
const usermodel = mongoose.model("user", userschema);

module.exports = usermodel;