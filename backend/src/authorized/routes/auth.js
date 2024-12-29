const { getAllUsers, getAllFriends } = require("../controller/auth");

const authRoutes = require("express").Router();
authRoutes.get("/getallusers", getAllUsers);
authRoutes.get("/getallfriends", getAllFriends);

module.exports = authRoutes;
