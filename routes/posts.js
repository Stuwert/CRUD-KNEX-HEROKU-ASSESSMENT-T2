var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/', function(req, res, next) {
  Posts().select().then(function (posts) {
    res.json({'SUCCESS': posts });
  })
});

router.post('/', function(req, res, next){
  Posts().insert(req.body).then(function(posts){
    res.redirect('/')
  })
})



function Posts(){
  return knex('posts');
}

module.exports = router;
