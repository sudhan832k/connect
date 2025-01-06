const { init } = require("./app/server");
const { config } = require("./config/env");

init().then((server) => {
  // app.listen(config.app.port, (error) => {
  //   if (error) console.log(`Error in running Application ${error}`);
  //   else console.log(`Application is running on ${config.app.port}`);
  // });
  server.listen(config.app.port, (error) => {
    if (error) console.log(`Error in running Application ${error}`);
    else console.log(`Application is running on ${config.app.port}`);
  });
});
