const User = require("../../../model/user");
const { getUser } = require("../../common/user");

module.exports.userSignup = async (data) => {
  try {
    const existingUser = await getUser({
      contactNumber: data.userContactNumber,
    });
    if (existingUser)
      return {
        hasError: true,
        message: "Existing user, You can login.",
      };

    const newUser = await new User({
      name: data.userName,
      contactNumber: data.userContactNumber,
      password: data.userPassword,
      status: "active",
    }).save();

    return {
      hasError: false,
      message: "You signedup succesfully.",
      info: newUser,
    };
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};

module.exports.userSignin = async (data) => {
  try {
    const existingUser = await getUser({
      contactNumber: data.userContactNumber,
      password: data.userPassword,
    });
    if (existingUser)
      return {
        hasError: false,
        message: "Welcome back",
        userName: existingUser.name,
      };
    return {
      hasError: true,
      message: "Incorrect login credentials.",
      userName: null,
    };
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
