const express = require("express");
const router = express.Router();

const { signUp, authenticate } = require("./../controllers/users");

router.post("/signup", signUp);
router.post("/signin", authenticate);

module.exports = router;
