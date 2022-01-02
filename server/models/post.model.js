const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({ 
    author: {
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
    },
    upvotes:{
        type: Number,
        default : 0
    },
    downvotes:{
        type: Number,
        default : 0
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;