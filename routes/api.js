var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET /api/posts */
router.get('/users', usersController.getUser);
// router.get('/users/:id', usersController.getOnePost);
// router.post('/users', usersController.createPost);
// router.put('/users/:id/upvote', usersController.upvotePost);
// router.put('/users/:id/downvote', usersController.downvotePost);
// router.delete('/users/:id', usersController.deletePost);
// router.put('/users/:id', usersController.updatePost);
// router.post('/users/:id/transactions', usersController.addComment);

module.exports = router;