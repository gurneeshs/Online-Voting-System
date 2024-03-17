// REQUIRE MONGOOSE
const mongoose = require('mongoose');
const validator = require('validator');

// CREATING SCHEMA
const voteSchema = new mongoose.Schema({
    VoterName: {
        type: String,
        minlength: 3,//validation
        maxlength: 30,//validation
        required: true,
        trim: true,

    },
    CandidateName: {
        type: String,
        minlength: 3,//validation
        maxlength: 30,//validation
        required: true,
        trim: true,

    },
    Party: {
        type: String,
        minlength: 3,//validation
        maxlength: 30,//validation
        required: true,
    },

});

// CREATING MODEL
const Votes = mongoose.model('Votes', voteSchema);
module.exports = Votes;