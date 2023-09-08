const express = require("express");
const router = express.Router();

// Import the Controller module
const Controller = require("../Controller/user.controller");
const addressController = require("../Controller/address.controller");
router.get("/address", addressController.getAllAddresses);
router.post("/address", addressController.createAddress);
router.get("/user", Controller.getAllUsers);
router.post("/user", Controller.createUser);

module.exports = router;
