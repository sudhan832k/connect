const config = {
  app: {
    port: 4000,
  },
  mongo: {
    url: "mongodb://host.docker.internal:27017/",
    dataBase: "connect-main",
  },
};
module.exports = { config };
