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
        result: {
          hasError: false,
          message: `Welcome back ${
            existingUser.name[0].toUpperCase() +
            existingUser.name.slice(1).toLowerCase()
          }`,
        },
        user: existingUser,
      };
    return {
      result: { hasError: true, message: "Incorrect login credentials." },
    };
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
