const { signup, signin } = require("../controller/authenticate");

const authenticateRouter = require("express").Router();
authenticateRouter.post("/signup", signup);
authenticateRouter.post("/signin", signin);

module.exports = authenticateRouter;
