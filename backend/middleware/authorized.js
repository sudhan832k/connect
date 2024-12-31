const { getUser } = require("../src/common/user");
/* eslint-disable no-useless-catch */
module.exports.loggedinUserAuth = async (req, res, next) => {
  try {
    const { userId } = req.cookies;
    if (!userId) return res.status(401).send("You are notauthorized");
    const user = await getUser({ _id: userId });
    if (!user) return res.status(401).send("You are not authorized");
    req.locals = { user: user._doc };
    next();
  } catch (error) {
    throw error;
  }
};
