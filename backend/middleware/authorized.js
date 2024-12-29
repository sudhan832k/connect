const { getUser } = require("../src/common/user");
/* eslint-disable no-useless-catch */
module.exports.loggedinUserAuth = async (req, res, next) => {
  try {
    const userId = req.cookies;
    if (!userId) res.status(401).send("You are notauthorized");
    const user = await getUser({ id: userId });
    if (!user) res.status(401).send("You are not authorized");
    req.locals.user = user;
    next();
  } catch (error) {
    throw error;
  }
};
