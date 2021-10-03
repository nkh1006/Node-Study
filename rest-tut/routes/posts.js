const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL POST
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({ message: err });
  };  
});


router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
  } catch(err) {
    res.json();
  }
});

//SPECIFIC POST
router.get('/:postId', async (req,res) => {
  try{
    const post = Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({ message: err });
  }
});

//Delete Post
router.delete('/:postId', async (req,res) => {
  try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
  }catch(err){
    res.json({ message: err });
  }
});

//Update a post
router.patch('/:postId', async (req,res) => {
  try{
    const updatedPost = await Post.updateOne(
      {_id: req.params.postId},
      {$set: {title: req.body.title}}
    );
    res.json(updatedPost);
  }catch(err){
    res.json({ messge: err });
  }
});

module.exports = router;