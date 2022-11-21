const express = require("express");
const router = express.Router();
const {
  getHome,
  getUsers,
  signup,
  loginUser,
} = require("../Controllers/CHome");
const { admin, getAdmin, loginAdmin } = require("../Controllers/Admin");
const shopRegistration = require("../Controllers/Shop");

router.get("/home", getHome);
router.post("/signup", signup);
router.get("/", getUsers);
router.post("/admin", admin);
router.get("/admin", getAdmin);
router.post("/admin/login", loginAdmin);
router.post("/login", loginUser);
router.post("/registration", shopRegistration);

module.exports = router;
