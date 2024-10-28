const express = require("express");
const { createMongoConnection } = require("../../connections/mongo");
const app = express();
module.exports.init = async () => {
  createMongoConnection();
  return app;
};
