// Importing Express
const express = require('express');

// Creating an instance of the router
const router = express.Router();

// Importing Controllers
const {createPost, deletePost, getAllPosts, getPost} = require('../controllers/postController');
const { likeController, unlikeController } = require('../controllers/likeController');
const { commentController } = require('../controllers/commentController');

// Mapping Controllers
router.post('/posts/create',createPost);
router.delete('/posts/:id',deletePost);
router.get('/posts',getAllPosts);
router.get('/posts/:id',getPost);
router.post('/likes/like',likeController);
router.post('/likes/unlike',unlikeController);
router.post('/comment',commentController);

// Exporting
module.exports = router;