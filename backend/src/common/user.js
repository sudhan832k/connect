const User = require("../../model/user");

module.exports.getUser = async (data) => {
  try {
    const user = await User.find(data);
    return user[0];
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
