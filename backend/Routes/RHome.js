const express = require("express");
const router = express.Router();
const userAuth = require("../MIddleware/userAuth");
const adminAuth = require("../MIddleware/adminAuth");
const {
  getHome,
  getUsers,
  signup,
  loginUser,
} = require("../Controllers/CHome");
const { admin, getAdmin, loginAdmin } = require("../Controllers/Admin");
const { shopRegistration, updatedShopDetails } = require("../Controllers/Shop");

router.get("/home", getHome);
router.post("/signup", signup);
router.get("/", getUsers);
router.post("/admin", admin);
router.get("/admin", getAdmin);
router.post("/admin/login", loginAdmin);
router.post("/login", loginUser);
router.post("/registration", userAuth, shopRegistration);
router.patch("/shop/:id", userAuth, updatedShopDetails);

module.exports = router;
