const express = require("express");
const { getItemController, addItemController } = require("../controllers/itemController");
const router = express.Router();

// routes
// Mehod - GET
router.get("/get-item", getItemController);

// Method - POST
router.post('/add-item', addItemController)

module.exports = router;
