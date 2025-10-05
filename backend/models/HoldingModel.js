const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingSchema.js");

const HoldingModel = new model("holding", HoldingsSchema);

module.exports = { HoldingModel };