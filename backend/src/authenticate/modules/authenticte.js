const User = require("../../../model/user");
const { getUser } = require("../../common/user");

module.exports.userSignup = async (data) => {
  try {
    const existingUser = await getUser({
      contactNumber: data.userContactNumber,
    });
    console.log(existingUser);
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
