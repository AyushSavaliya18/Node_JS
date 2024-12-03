const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        minlength : 2
    },
    email:{
            type:String,
            unique:true,
            require:true,
            lowercase:true,
            trim:true
    } ,
    password:{
        type:String,
        require:true,
        trim:true
    },
    mobile: {type:Number,
        require:true,
        trim:true,
        minlength:10,
        maxlength:10
    },
    Otp:{
        type:Number,
        default:0,
    }
});
const userModel = mongoose.model("user", userschema);
module.exports =userModel