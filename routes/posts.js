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

router.get('/:id', function(req, res, next){
  Posts().where('id', req.params.id).first().then(function(post){
    res.json({'SUCCESS': post})
  })
})

router.get('/:id/edit', function(req, res, next){
  Posts().where('id', req.params.id).first().then(function(post){
    res.json({'SUCCESS' : post})
  })
})


function Posts(){
  return knex('posts');
}

module.exports = router;
