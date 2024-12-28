const { userSignup } = require("../modules/authenticte");

module.exports.signup = async (req, res) => {
  try {
    const { userName, userContactNumber, userPassword } = req.body;
    if (!userName || !userContactNumber || !userPassword)
      return res
        .status(400)
        .send({ error: "Mandatory parameters are missing." });
    const result = await userSignup(req.body);
    res.status(200).send(result);
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
