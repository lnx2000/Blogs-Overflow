const express = require('express');
var router = express.Router();
let Post = require('../models/post.model');

router.get('/', function(req, res, next) {

  Post.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json(`Error: ${err}`));

});

router.post('/add', function(req, res){

  const newPost = new Post({author: req.body.author, 
                            authorInfo: req.body.authorInfo, 
                            title: req.body.title, 
                            description: req.body.description});
  
  newPost.save()
  .then(()=> res.redirect('/'))
  .catch(err => res.status(400).json(`Error: ${err}`));

})

module.exports = router;