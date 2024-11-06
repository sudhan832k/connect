const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
    trim: true,
  },
  contactNumber: {
    require: true,
    type: Number,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  friends: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  friendRequestTo: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  pendingApproval: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  status: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
