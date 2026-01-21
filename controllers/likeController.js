// Importing the Models
const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// Defining route handler
exports.likeController = async(req,res) => {
    try{
        // Fetching data from request body
        const {post, user} = req.body; 

        // Creating a like object and saving it in DB
        const newLike = await Like.create({post,user});

        // Updating the likes array of the corresponding post
        const updatedPost = await Post.findByIdAndUpdate(
            post, // id to find the corresponding post
            {$push : {likes : newLike._id}}, // pushing that like id into the post likes array 
            {new : true} // return the updated post
        ).populate('likes').populate('comments').exec();
        
        // Sending the response
        res.status(200).json({
            success : true,
            data : updatedPost,
            message : "Post Liked Successfully",
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}

exports.unlikeController = async(req,res) => {
    try{
        // fetching the details from the request body
        const {post, like} = req.body;
        
        // Checking if the like exists
        const existingLike = await Like.findOne({post : post, _id : like});

        if(!existingLike) res.status(404).json({
            success : true,
            message : "Like Doesn't Exist!",
        });

        // deleting that like
        const deletedLike = await Like.findOneAndDelete({_id : like, post : post});

        // Updating the likes array of that post
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$pull : {likes : deletedLike._id}},
            {new : true}
        ).populate('likes').populate('comments').exec();

        res.status(200).json({
            success : true,
            data : updatedPost,
            message : "Post Unliked Successfully"
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}