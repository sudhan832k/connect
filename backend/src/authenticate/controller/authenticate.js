const { userSignup, userSignin } = require("../modules/authenticte");

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

module.exports.signin = async (req, res) => {
  try {
    const { userContactNumber, userPassword } = req.body;
    if (!userContactNumber || !userPassword)
      return res
        .status(400)
        .send({ error: "Mandatory parameters are missing." });
    const data = await userSignin(req.body);
    if (!data.result.hasError)
      res.cookie("userId", data.user.id, {
        httpOnly: true, // Accessible only by the web server (not client-side JavaScript)
        secure: false, // Ensures the cookie is sent only over HTTPS
        sameSite: "strict", // Protects against CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      });
    res.status(200).send(data.result);
  } catch (error) {
    error.status ??= 400;
    throw error;
  }
};
