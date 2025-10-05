const { PositionsModel } = require("../models/PositionsModel.js");

exports.getAllPositions = async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
};

// This route should be run only once to insert initial data
exports.addInitialPositions = async (req, res) => {
  try {
    const existing = await PositionsModel.find();
    if (existing.length > 0) {
      return res.status(400).send("Initial positions already exist in the database.");
    }

    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    await PositionsModel.insertMany(tempPositions);
    res.send("Initial positions inserted successfully!");
  } catch (error) {
    res.status(500).send("Failed to insert positions.");
  }
};
