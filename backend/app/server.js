const http = require("http");
const express = require("express");
const cors = require("cors");
const { createMongoConnection } = require("../connections/mongo");
const { apiPrefix } = require("../config/constant");
const authenticateRouter = require("../src/authenticate/routes/authenticate");
const authorizedRouter = require("../src/authorized/routes/auth");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { loggedinUserAuth } = require("../middleware/authorized");
const { setupSocket } = require("./socket");

const app = express();
app.use("/health", (req, res) => {
  res.status(200).send("Health check");
});
app.use(
  cors({
    origin: "http://localhost:4200", // Allow requests only from this domain
    method: ["GET", "POST"], // Allow only specific HTTP methods
    credentials: true,
    // preflightContinue: false,
    // //allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

const appMiddleware = () => {
  app.use(bodyParser.json());
  app.use(cookieParser());
};
const appRoutes = () => {
  app.use(apiPrefix.authenticate, authenticateRouter);
  app.use(apiPrefix.authorized, loggedinUserAuth, authorizedRouter);
};
module.exports.init = async () => {
  appMiddleware();
  appRoutes();
  createMongoConnection();
  const server = http.createServer(app);
  setupSocket(server);
  return server;
};
