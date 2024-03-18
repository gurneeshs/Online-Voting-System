// REQUIRE MONGOOSE
const mongoose = require('mongoose');
const validator = require('validator');

// CREATING SCHEMA
const voterSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:3,//validation
        maxlength:30,//validation
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        minlength:3,//validation
        maxlength:30,//validation
        required:true,
        trim:true,

    },
    age:{
        type:Number, 
        validate(value){
            if(value<18){
                throw new Error(`Age can't be less than 18`);
            }
        }
    },
    dob:{
        type:Date,
    },
    voterid:{
        type:Number,
        unique:true,
    },
    image:{
        type:String,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    phone:{
        type:Number,
        required:true,
        trim:true,

    },
    pass:{
        type:String,
        required:true,
    }
});

// CREATING MODEL
const Voters = mongoose.model('Voters',voterSchema);
module.exports = Voters;