// REQUIRE MONGOOSE
const mongoose = require('mongoose');
const validator = require('validator');

// CREATING SCHEMA
const candidateSchema = new mongoose.Schema({
    fullName:{
        type:String,
        minlength:3,//validation
        maxlength:30,//validation
        required:true,
    },
    age:{
        type:Number, 
        validate(value){
            if(value<18){
                throw new Error(`Age can't be less than 18`);
            }
        }
    },
    party:{
        type:String,
        minlength:3,//validation
        maxlength:30,//validation
        required:true,
    },
    bio:{
        type:String,
        minlength:3,//validation
        required:true,
    },
    img: {
        type: String 
    },
    symbol: {
        type: String 
    },

    votes:{
        type:Number,
        default:0,
    },

});

// CREATING MODEL
const Candidates = mongoose.model('Candidates',candidateSchema);
module.exports = Candidates;