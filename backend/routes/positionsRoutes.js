const express = require("express");
const router = express.Router();
const { addInitialPositions, getAllPositions } = require("../controllers/positionsController.js");

router.get("/addPositions", addInitialPositions);
router.get("/allPositions", getAllPositions);

module.exports = router;
