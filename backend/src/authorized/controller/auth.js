const { getAllUsers, getAllFriends } = require("../modules/auth");

module.exports.getAllUsers = async (req, res) => {
  try {
    const { user } = req.locals;
    const result = await getAllUsers(user.id);
    res.status(200).send(result);
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
module.exports.getAllFriends = async (req, res) => {
  try {
    const { user } = req.locals;
    const result = await getAllFriends(user);
    res.status(200).send({ result });
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};

module.exports.getUserProfile = async (req, res) => {
  try {
    const { user } = req.locals;
    delete user.password;
    res.status(200).send({ result: user });
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
