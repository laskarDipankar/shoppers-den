const express = require("express");
const router = express.Router();
const userAuth = require("../MIddleware/userAuth");
const adminAuth = require("../MIddleware/adminAuth");

const { forgotPassword } = require("../Controllers/CHome");

router.patch("/forgot", forgotPassword);

module.exports = router;
