const User = require('../models/user');
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  getOneUser,
  editProfile,
  createTransaction,
  getOneTransaction,
  editTransaction,
  deleteTransaction,
  getAllTransactions,
  signup,
  login
};

async function getOneUser(req, res) {
    try{
       await User.findById(req.user._id).then(function(user) {
          console.log('USER:', user)
        res.status(200).json(user);
      });
    }
    catch(err) {
        res.json({err})
    }
}

async function editProfile(req, res) {
    try{
        await User.findByIdAndUpdate(req.user._id, req.body, {new: true}).then(function(profile) {
            res.status(200).json(profile)
        });
    }
    catch(err) {
        res.json({err})
    }
}

async function getAllTransactions(req, res) {
    try{
        await User.findById(req.user).then(function(user) {
            console.log('test 1', user)
            console.log('test 2', user.transactions)
            let transactions = user.transactions;
            return res.status(200).json(transactions)
        });
    }
    catch(err) {
        res.json({err})
    }
}

async function createTransaction(req, res) {
    try{
        await User.findById(req.user).then(function(user) {
            user.transactions.unshift(req.body);
            user.save(function(user) {
                res.status(201).json(user);
            });
        });
    }
    catch(err) {
        res.json({err})
    }
}

async function getOneTransaction(req, res) {
    try{
        await 
        User.findById(req.user).then(function(user) {
           var oneTransaction = user.transactions.find(transaction => 
               transaction.id === req.params.id
            )
                // console.log('test', oneTransaction)
                res.status(200).json(oneTransaction)
        });
    }
    catch(err) {
        res.json({err})
    }
}

async function editTransaction(req, res) {
    try {
        await User.findById(req.user._id).then(function(user) {
          var oneTransaction = user.transactions.id(req.params.id);
          console.log('oneTransaction found: ', oneTransaction);
          oneTransaction.set(req.body);
          return user.save(trans => {
            console.log('oneTransaction has been set', oneTransaction)
            return res.status(200).json(trans) 
          });
        });
     }
    catch(err) {
        res.json({err})
    }
  }

  async function deleteTransaction(req, res) {
      try {
      await User.findById(req.user._id).then(function(user) {
       console.log('test', user)
       console.log('test 2', user.transactions)
       console.log('test 3', user.transactions.id(req.params.id))
       console.log('test 4', req.params.id)
       user.transactions.id(req.params.id).remove();
         user.save(function(user) {
        res.status(200).json(user)
        });    
      });
  }

  catch(err) {
      res.json({err})
  }
}

async function signup(req, res) {
  console.log("hit");
  const user = new User(req.body);
//   console.log(user);
  try {
    await user.save();
    // console.log(user);
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
