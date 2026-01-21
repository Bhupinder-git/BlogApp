// Importing Mongoose
const mongoose = require('mongoose');

// Defining Schema
const likeSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : true
    },
    user : {
        type : String,
        required : true,
    }
});

// Exporting it as model
module.exports = mongoose.model('Like',likeSchema);