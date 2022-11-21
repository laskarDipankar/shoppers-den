const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
  const userToken = req.header.Authorization;

  if (!userToken) {
    return res.status(401).send({ error: "Unauthorized User jai mata di" });
  } else {
    try {
      userToken = userToken.split(" ")[1];
      user = jwt.verify(userToken, process.env.JWT_SECRET);
      const userId = user.id;
      next();
    } catch (err) {
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = userAuth;
