const { signup } = require("../controller/authenticate");

const authenticateRouter = require("express").Router();
authenticateRouter.post("/signup", signup);

module.exports = authenticateRouter;
