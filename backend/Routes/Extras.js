const express = require("express");
const router = express.Router();
const userAuth = require("../MIddleware/userAuth");
const adminAuth = require("../MIddleware/adminAuth");

const { forgotPassword, resetPassword } = require("../Controllers/CHome");

router.post("/forgot", forgotPassword);
router.patch("/reset", resetPassword);

module.exports = router;
