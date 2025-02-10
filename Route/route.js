const express = require("express");
const User = require("../model/user.model");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/create-user", userController);

module.exports = router;
