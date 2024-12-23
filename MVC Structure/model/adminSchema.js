const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    Admin_name:{
        type: String,

    },
    Email:{
        type: String,

    },
    Password:{
        type: String,

    },
    DOB:{
        type: String,

    },
    Phone:{
        type: Number,

    },
    Gender:{
        type: String,

    }
})
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;