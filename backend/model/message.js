const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  content: {
    require: true,
    type: String,
    trim: true,
  },
  sentBy: {
    require: true,
    type: String,
  },
  receivedBy: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
