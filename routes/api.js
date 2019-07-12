var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET /api/posts */
router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.use(require('../config/auth'))
router.get('/users', checkAuth, usersController.getOneUser);
router.put('/profile/edit', checkAuth, usersController.editProfile);
// router.get('/users/:id', usersController.getOnePost);
// router.post('/users', usersController.createPost);
// router.put('/users/:id/downvote', usersController.downvotePost);
// router.delete('/users/:id', usersController.deletePost);
// router.put('/users/:id', usersController.updatePost);
// router.post('/users/:id/transactions', usersController.addComment);

function checkAuth(req, res, next) {
    console.log('checkauth reached')
      if (req.user) {
        console.log(req.user)
        return next()
      };
      return res.status(401).json({msg: 'Not Authorized'});
    }

module.exports = router;