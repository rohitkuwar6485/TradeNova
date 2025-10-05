// require env
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const holdingsRoutes = require("./routes/holdingsRoutes.js");
const positionsRoutes = require("./routes/positionsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database Connection Successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

// CORS setup
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL], // allow frontend URLs
  credentials: true, // allow cookies
}));

// Parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is Working"));
app.use("/api", holdingsRoutes);
app.use("/api", positionsRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  connectDB();
});
