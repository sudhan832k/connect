const {
  getAllUsers,
  getAllFriends,
  getAllMessageByReceiverId,
  sendMessage,
} = require("../modules/auth");

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

module.exports.getAllMessageByReceiverId = async (req, res) => {
  try {
    const { user } = req.locals;
    const { receiverId } = req.query;
    if (!receiverId)
      return res
        .status(400)
        .send({ error: "Mandatory parameters are missing." });
    const result = await getAllMessageByReceiverId(user.id, receiverId);
    res.status(200).send({ result });
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};

module.exports.sendMessage = async (req, res) => {
  try {
    const { user } = req.locals;
    const { receiverId, message } = req.body;
    if (!receiverId || !message)
      return res
        .status(400)
        .send({ error: "Mandatory parameters are missing." });
    const result = await sendMessage(user.id, receiverId, message);
    res.status(200).send({ result });
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
