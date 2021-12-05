const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    email : {
        type: String,
        required: true,
        trim: true
    }, 
    name : {
        type: String,
        required : true,
        trim : true
    },
    hash : {
        type: String,
        required : true,
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;