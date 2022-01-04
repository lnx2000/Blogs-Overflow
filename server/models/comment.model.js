const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({ 
    postID: {
        type: String, 
        required : true,
    },
    body : {
        type: String,
        required : true,
        trim : true
    },
    posted:{
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;