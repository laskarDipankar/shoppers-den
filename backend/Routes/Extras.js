const express = require("express");
const router = express.Router();
const userAuth = require("../MIddleware/userAuth");
const adminAuth = require("../MIddleware/adminAuth");

const {
  forgotPassword,
  getSingleUser,
  resetPassword,
} = require("../Controllers/CHome");

router.post("/forgot", forgotPassword);
router.patch("/reset", resetPassword);
router.get("/user/:id", getSingleUser);

module.exports = router;
