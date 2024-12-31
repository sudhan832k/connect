const {
  getAllUsers,
  getAllFriends,
  getUserProfile,
} = require("../controller/auth");

const authRoutes = require("express").Router();
authRoutes.get("/getallusers", getAllUsers);
authRoutes.get("/getallfriends", getAllFriends);
authRoutes.get("/getuserprofile", getUserProfile);

module.exports = authRoutes;
