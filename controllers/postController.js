// Importing models
const Post = require('../models/postModel');
const Like = require('../models/likeModel');
const Comment = require('../models/commentModel');

// Defining route handler
exports.createPost = async(req,res) => {
    try{
        // Fetching the data from the request body
        const {title, body} = req.body;

        // creating a post and saving it in DB
        const newPost = await Post.create({title, body});

        // sending response
        res.status(200).json({
            success : true,
            data : newPost,
            message : "Post Created Successfully"
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}

exports.deletePost = async(req,res) => {
    try{
        // finding the post 
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if(!deletedPost) res.status(404).json({
            success : false,
            message : "Such Post Doesn't Exist!",
        });

        // Sending successful response
        res.status(200).json({
            sucess : true,
            data : deletedPost,
            message : "Post Deleted Successfully",
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}

exports.getAllPosts = async(req,res) => {
    try{
        // Fetching the posts from DB
        const posts = await Post.find();

        // sending successful response
        res.status(200).json({
            success : true,
            data : posts,
            message : "All posts fetched successfully",
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}
exports.getPost = async(req,res) => {
    try{
        // Fetching the posts from DB
        const post = await Post.findById(req.params.id).populate('likes').populate('comments').exec();

        if(!post) res.status(404).json({
            success : false,
            message : "Such Post Doesn't Exist!"
        });

        // sending successful response
        res.status(200).json({
            success : true,
            data : post,
            message : "Post fetched successfully",
        });
    }catch{
        res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : err.message
        });
    }
}