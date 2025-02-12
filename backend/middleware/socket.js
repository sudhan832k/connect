const cookie = require("cookie");
const { getUser } = require("../src/common/user");

module.exports.socketUserAuth = async (socket, next) => {
  const cookies = socket.handshake.headers.cookie;
  ``;

  if (cookies) {
    // Parse cookies
    const parsedCookies = cookie.parse(cookies);
    console.log("cookiesss", parsedCookies);
    const userId = parsedCookies.userId;
    if (userId) {
      try {
        const user = await getUser({ _id: userId });
        if (!user)
          return next(new Error("Authentication failed: Invalid userId"));
        socket.userId = userId;
        return next();
      } catch (error) {
        return next(new Error(error));
      }
    } else {
      return next(new Error("Authentication failed: No userId found"));
    }
  } else {
    return next(new Error("Authentication failed: No cookies sent"));
  }
};
