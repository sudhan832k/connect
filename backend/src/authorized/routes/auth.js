const { getAllUsers } = require("../controller/auth");

const authRoutes = require("express").Router();
authRoutes.post("/getallusers", getAllUsers);

module.exports = authRoutes;
