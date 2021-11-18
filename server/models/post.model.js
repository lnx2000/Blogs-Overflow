const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author : {
        type: String,
        required : true,
        trim: true
    },   
    authorInfo : {
        type: String,
        required: true,
        trim: true
    }, 
    title : {
        type: String,
        required : true,
        trim : true
    },
    description : {
        type: String,
        required : true,
    },
    created:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;