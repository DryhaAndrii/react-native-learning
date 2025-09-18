// server/routes/api.js
const express = require("express");
const router = express.Router();

const privateRoute = require("./private");
const publicRoute = require("./public");
const uploadRoute = require("./upload");

router.use("/private", privateRoute);
router.use("/public", publicRoute);
router.use("/upload", uploadRoute);

module.exports = router;
