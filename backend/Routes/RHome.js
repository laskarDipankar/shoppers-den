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
const {
  admin,
  getAdmin,
  verifyShop,
  loginAdmin,
  deleteShop: removeShop,
} = require("../Controllers/Admin");
const {
  shopRegistration,
  updatedShopDetails,
  getShopDetails,
  getAllShopsDetails,
  deleteShop,
  updateIsActive,
} = require("../Controllers/Shop");

router.get("/home", getHome);
router.post("/signup", signup);
router.get("/", getUsers);
router.post("/admin", admin);
router.get("/admin", getAdmin);
router.post("/admin/login", loginAdmin);
router.post("/login", loginUser);
router.post("/registration", userAuth, shopRegistration);
router.patch("/shop/:id", userAuth, updatedShopDetails);
router.patch("/admin/shop/:id", adminAuth, verifyShop);
router.get("/shop/:id", getShopDetails);
router.get("/shops", getAllShopsDetails);
router.delete("/shop/:id", userAuth, deleteShop);
router.delete("/admin/shop/:id", adminAuth, removeShop);
router.patch("/shop/active/:id", userAuth, updateIsActive);

module.exports = router;
