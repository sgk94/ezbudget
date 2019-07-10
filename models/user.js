var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
  date: Date,
  transactionType: String,
  amount: Number,
  description: String
}, {
  timestamps: true
});

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  budget: { type: Number, default: 0 },
  transactions: [TransactionSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);