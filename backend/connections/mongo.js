const mongoose = require("mongoose");
const { config } = require("../config/env");
// const User = require("../model/user");

module.exports.createMongoConnection = () => {
  const url = `${config.mongo.url}${config.mongo.dataBase}`;
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connection establsihed");
    })
    .catch((error) => {
      console.log(error);
    });
};
