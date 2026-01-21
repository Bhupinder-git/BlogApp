// Importing the Models
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Defining route handler
exports.commentController = async(req,res) => {
    try{
        // Fetching data from request body
        const {post, user, body} = req.body; 

        // Creating a like object and saving it in DB
        const newComment = await Comment.create({post,user,body});

        // Updating the likes array of the corresponding post
        const updatedPost = await Post.findByIdAndUpdate(
            post, // id to find the corresponding post
            {$push : {comments : newComment._id}}, // pushing that like id into the post likes array 
            {new : true} // return the updated post
        ).populate('likes').populate('comments').exec();
        
        // Sending the response
        res.status(200).json({
            success : true,
            data : updatedPost,
            message : "Commented Successfully",
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}
