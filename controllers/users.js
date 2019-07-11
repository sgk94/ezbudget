const User = require('../models/user');
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  getAllUser,
  // updateUser,
  // getAllTransactions,
  // createTransaction,
  // updateTransaction,
	// deleteTransaction,
	signup,
	login
};

function getAllUser(req, res) {
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

async function signup(req, res) {
  console.log("hit");
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    console.log(user);
    // TODO: Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/* --- Helper Functions ---- */

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
