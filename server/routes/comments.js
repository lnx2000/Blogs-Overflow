const express = require('express');
var router = express.Router();
let Comment = require('../models/comment.model');

router.get('/', function(req, res, next) {
    var id = req.query.post_id;
    Comment.find({postID:id}).sort({posted:-1})
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json(`Error: ${err}`));
  });
  
router.post('/add', function(req, res){
  const newComment = new Comment({postID: req.body.post_id, 
                            body: req.body.body});
  
  newComment.save()
  .then(_res => res.send(_res))
  .catch(err => {
    console.log(err);
    res.status(400).json(`Error: ${err}`)
  });
})
  
  module.exports = router;