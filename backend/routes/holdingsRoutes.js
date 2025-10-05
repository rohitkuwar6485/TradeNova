const express = require("express");
const router = express.Router();

const { addInitialHoldings, getAllHoldings } = require("../controllers/holdingsController.js");

//initial data insertion
router.get("/addHoldings", addInitialHoldings);
router.get("/allHoldings", getAllHoldings);

module.exports = router;