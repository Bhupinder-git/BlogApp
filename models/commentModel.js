// Importing Mongoose
const mongoose = require('mongoose');

// Defining Schema
const commentSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : true
    },
    user : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
        maxLength : 200
    }
});

// Exporting it as model
module.exports = mongoose.model('Comment',commentSchema);