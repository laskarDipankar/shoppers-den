const express = require("express");
const router = express.Router();
const {
  getHome,
  getUsers,
  signup,
  loginUser,
} = require("../Controllers/CHome");
const { admin, getAdmin, loginAdmin } = require("../Controllers/Admin");

router.get("/home", getHome);
router.post("/signup", signup);
router.get("/", getUsers);
router.post("/admin", admin);
router.get("/admin", getAdmin);
router.post("/admin/login", loginAdmin);
router.post("/login", loginUser);

module.exports = router;
