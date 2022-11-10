const express = require("express");
const router = express.Router();
const getHome = require("../Controllers/CHome");

router.get("/", getHome);

module.exports = router;
