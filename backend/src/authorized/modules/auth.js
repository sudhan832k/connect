/* eslint-disable no-useless-catch */
const User = require("../../../model/user");
const Message = require("../../../model/message");
module.exports.getAllUsers = async (userId) => {
  try {
    const users = await User.find({ status: "active", _id: { $ne: userId } });
    return users;
  } catch (error) {
    throw error;
  }
};
module.exports.getAllFriends = async (user) => {
  try {
    const users = await User.find({
      status: "active",
      _id: { $in: user.friends },
    });
    const result = users.map((user) => {
      delete user._doc.password;
      return user;
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllMessageByReceiverId = async (loggedInUser, receiverId) => {
  try {
    const getAllUsers = await User.find();
    const messages = await Message.find({
      status: "active",
      $and: [
        { sentBy: { $in: [loggedInUser, receiverId] } },
        { receivedBy: { $in: [loggedInUser, receiverId] } },
      ],
    });
    const transformedMessages = messages.map((msg) => {
      const isMessageSentByLoggedinUser =
        msg.sentBy === loggedInUser ? true : false;
      return {
        message: msg.content,
        sentBy: getAllUsers.find((user) => user.id === msg.sentBy).name,
        receivedBy: getAllUsers.find((user) => user.id === msg.receivedBy).name,
        isMessageSentByLoggedinUser,
        createdOn: msg.createdOn,
      };
    });
    return transformedMessages;
  } catch (error) {
    throw error;
  }
};

module.exports.sendMessage = async (loggedInUserId, receiverId, message) => {
  try {
    const newMessage = await new Message({
      sentBy: loggedInUserId,
      receivedBy: receiverId,
      content: message,
    }).save();

    return {
      hasError: false,
      message: "Message sent succesfully.",
      info: newMessage,
    };
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
