const express = require("express");
const bodyparser = require("body-parser");
const { createMongoConnection } = require("../connections/mongo");
const { apiPrefix } = require("../config/constant");
const authenticateRouter = require("../src/authenticate/routes/authenticate");

const app = express();

const appMiddleware = () => {
  app.use(bodyparser.json());
};
const appRoutes = () => {
  app.use(apiPrefix.authenticate, authenticateRouter);
};

module.exports.init = async () => {
  appMiddleware();
  appRoutes();
  createMongoConnection();
  return app;
};
