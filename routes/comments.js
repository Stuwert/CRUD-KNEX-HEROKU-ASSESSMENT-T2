var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/:post_id/comments', function(req, res, next){
  Comments().where('post_id', req.params.post_id).then(function(comments){
    res.json({'SUCCESS' : comments})
  })
})

router.post('/:post_id/comments', function(req, res, next){
  Comments().insert(req.body).then(function(){
    res.redirect('/posts/' + req.params.post_id + '/comments')
  })
})

router.get('/:post_id/comments/:id', function(req, res, next){
  Comments().where('id', req.params.id).then(function(post){
    res.json({'SUCCESS' : post})
  })
})

router.get('/:post_id/comments/:id/edit', function(req, res, next){
  Comments().where('id', req.params.id).then(function(post){
    res.json({'SUCCESS' : post})
  })
})

router.post('/:post_id/comments/:id', function(req, res, next){
  Comments().where('id', req.params.id).update(req.body).then(function(post){
    res.redirect('/posts/' + req.params.post_id + '/comments')
  })
})

router.post('/:post_id/comments/:id/delete', function(req, res, next){
  Comments().where('id', req.params.id).del().then(function(posts){
    res.redirect('/posts/' + req.params.post_id + '/comments');
  })
})

function Comments(){
  return knex('comments');
}
module.exports = router;
