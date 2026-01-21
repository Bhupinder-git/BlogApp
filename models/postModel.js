// Importing Mongoose
const mongoose = require("mongoose");
const Like = require("../models/likeModel");
const Comment = require("../models/commentModel");

// Defining Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
    maxLength: 2000,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// Middleware to delete all the related comments and likes when the post deleted
postSchema.pre("findOneAndDelete", async function () {
  const postId = this.getQuery()["_id"]; // get ID of the post being deleted
  await Like.deleteMany({ post: postId }); // deleting all the likes
  console.log("all likes related to this post deleted");
  await Comment.deleteMany({ post: postId }); // deleting all the posts
  console.log("all comments related to this post deleted");
});

// Exporting it as model
module.exports = mongoose.model("Post", postSchema);
