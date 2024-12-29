/* eslint-disable no-useless-catch */
const User = require("../../../model/user");
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
    return users;
  } catch (error) {
    throw error;
  }
};
