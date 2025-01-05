const {
  getAllUsers,
  getAllFriends,
  getUserProfile,
  getAllMessageByReceiverId,
  sendMessage,
} = require("../controller/auth");

const authRoutes = require("express").Router();
authRoutes.get("/getallusers", getAllUsers);
authRoutes.get("/getallfriends", getAllFriends);
authRoutes.get("/getuserprofile", getUserProfile);
authRoutes.get("/getmessagebyreceiverid", getAllMessageByReceiverId);
authRoutes.post("/sendmessage", sendMessage);

module.exports = authRoutes;
