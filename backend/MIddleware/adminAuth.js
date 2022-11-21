const jwt = require("jsonwebtoken");

const verifyAdminAuth = (req, res, next) => {
  const adminToken = req.header.Authorization;

  if (!adminToken) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      adminToken = adminToken.split(" ")[1];
      const admin = jwt.verify(adminToken, process.env.JWT_SECRET);
      req.adminId = admin.id;
      next();
    } catch (err) {
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = verifyAdminAuth;
