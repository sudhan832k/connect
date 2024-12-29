const { getAllUsers } = require("../modules/auth");

module.exports.getAllUsers = async (req, res) => {
  try {
    const result = await getAllUsers(req.body);
    res.status(200).send(result);
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
