const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var TransactionSchema = new mongoose.Schema({
  date: {
      type: Date,
      default: Date.now
    },
  transactionType: {
      type: String,
      default: 'Fun'
    },
  amount: {
      type: Number, 
      min: 0, 
      default: 0
    },
  description: String
}, {
  timestamps: true
});

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  password: String,
  budget: { type: Number, default: 0 },
  transactions: [TransactionSchema]
}, {
  timestamps: true
});

UserSchema.set("toJSON", {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });
  
UserSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    // password has been modified, so let's hash it!
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
  
UserSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
  };

module.exports = mongoose.model("User", UserSchema);