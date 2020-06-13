const express = require("express");
const router = express.Router();

const {
    signUp,
    authenticate
} = require("./../controllers/users");

router.post("/signup", signUp);
router.post("/login", authenticate);

module.exports = router;