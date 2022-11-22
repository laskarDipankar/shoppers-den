const jwt = require("jsonwebtoken");
const Users = require("../Model/User");

const userAuth = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).send({ error: "Unauthorized User jai mata di" });
  } else {
    try {
      const userToken = bearer.split(" ")[1];
      const payload = jwt.verify(userToken, process.env.JWT_SECRET);
      const user = await Users.findById(payload.id);

      if (!user) return res.status(403).json({ error: "User doesn't exist." });

      if (user.role !== "USER")
        return res
          .status(403)
          .json({ error: "You are not allowed to access this route." });

      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = userAuth;
