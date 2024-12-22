const mongoose = require("mongoose");

mongoose.set("strictQuery",false);

const db = mongoose.connect("mongodb://localhost:27017/Ayush",(error)=>{
    if(error){
        console.log("Error in connecting to Database MongoDB");
    }
    else{
        console.log("Database is connected to MongoDB");
    }
});
module.exports = {db};