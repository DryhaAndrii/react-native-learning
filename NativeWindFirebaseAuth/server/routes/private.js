const express = require("express");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.get("/", authenticateToken, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.email}! This is protected endpoint.`,
    user: req.user,
  });
});

module.exports = router;
