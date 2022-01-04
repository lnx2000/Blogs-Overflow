const express = require('express');
var router = express.Router();
let Post = require('../models/post.model');

router.get('/', function(req, res, next) {
  console.log("getting blog");
  var id = req.query.id;
  if(id !== undefined){
    Post.find({_id:id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
  }
  else{
    Post.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
  }
});

router.post('/add', function(req, res){
  const newPost = new Post({author: req.body.author, 
                            authorInfo: req.body.authorInfo, 
                            title: req.body.title, 
                            description: req.body.description});
  
  newPost.save()
  .then(_res => res.send(_res))
  .catch(err => {
    console.log(err);
    res.status(400).json(`Error: ${err}`)
  });
})
router.put('/update', function(req, res){
    var id = req.query.id;
    var upvotes = req.body.upvotes;
    var downvotes = req.body.downvotes;

    Post.updateOne({_id : id}, {upvotes : upvotes, downvotes : downvotes}, function(err, _res){
      if(err)
        res.send("Error occured :(");
      else res.status(200).send("Success");
    })
})

module.exports = router;