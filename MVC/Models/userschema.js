const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
            type:String,
            require:true,
            trim:true,
            unique:true
    } ,
    password:{
        type:String,
        require:true,
        trim:true
    },
    mobile: {type:Number,
        require:true,
        trim:true
    }
});
const userModel = mongoose.model("user", userschema);
module.exports =userModel