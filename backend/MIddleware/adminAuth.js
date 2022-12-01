const jwt = require("jsonwebtoken");
const Admin = require("../Model/Admin");

const verifyAdminAuth = async (req, res, next) => {
  const bearer = req.headers.authorization;

  console.log("auth");

  if (!bearer) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      // console.log(req.admin);
      const adminToken = bearer.split(" ")[1];
      const payload = jwt.verify(adminToken, process.env.JWT_SECRET);
      const admin = await Admin.findById(payload.id);
      if (!admin)
        return res.status(403).json({ error: "Login to access this route" });

      if (admin.role !== "ADMIN")
        return res
          .status(403)
          .json({ error: "You are not allowed to access this route." });
      req.admin = admin;
      next();
    } catch (err) {
      res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = verifyAdminAuth;
