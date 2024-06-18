const mongoose = require('mongoose');
const validator = require('validator');

// CREATING SCHEMA
const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        minlength:3,//validation
        maxlength:30,//validation
        required:true,
    },
    password:{
        type:String,
    }

});

// CREATING MODEL
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;