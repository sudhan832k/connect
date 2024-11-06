const { userSignup } = require("../modules/authenticte");

module.exports.signup = async (req, res) => {
  try {
    const result = await userSignup(req.body);
    res.status(200).send(result);
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
