const User = require('../models/user');

module.exports = {
  getUser,
  // updateUser,
  // getAllTransactions,
  // createTransaction,
  // updateTransaction,
  // deleteTransaction
};

function getUser(req, res) {
  User.findById(req.params.id).then(function(user) {
    res.status(200).json(user);
  });
}

// function updateUser(req, res) {
// 	User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(user) {
// 		res.status(200).json(user)
// 	})
// }

// function getAllTransactions(req, res) {
// 	User.transactions.find({}).then(function())
// }

// function createTransaction(req, res) {
// 	User.create(req.body).then(function(user) {
// 		res.status(201).json(user);
// 	});
// }

// function updateTransaction(req, res) {
//   User.transactions.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(user) {
//     res.status(200).json(user);
//   });
// }

// function deleteTransaction(req, res) {
//   User.transactions.findByIdAndRemove(req.params.id).then(function(user) {
//     res.status(200).json(user);
//   });
// }



// function getAllUsers(req, res) {
//   User.find({}).then(function(Users) {
//     console.log(Users);
//     res.status(200).json(Users);
//   });
// }

// function upvoteUser(req, res) {
//   User.findById(req.params.id).then(function(User) {
//     User.upvotes += 1;
//     User.save(function(User) {
//       res.status(200).json(User);
//     })
//   })
// }

// function downvoteUser(req, res) {
//   User.findById(req.params.id).then(function(User) {
//     User.upvotes -= 1;
//     User.save(function(User) {
//       res.status(200).json(User);
//     })
//   })
// }

// function addComment(req, res) {
//   User.findById(req.params.id).then(function(User) {
//     User.comments.push(req.body);
//     User.save(function(User) {
//       res.status(200).json(User);
//     })
//   })
// }