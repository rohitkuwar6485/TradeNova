//require env
require('dotenv').config();

//express required
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//routes required
const holdingsRoutes = require("./routes/holdingsRoutes.js");
const positionsRoutes = require("./routes/positionsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// Allowed frontend URLs
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow requests with no origin (e.g. Postman)
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // allow this origin
    } else {
      callback(new Error('Not allowed by CORS')); // block others
    }
  },
  credentials: true, // allow cookies
}));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database Connection Successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

//routes
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is Working");
});

app.use("/api", holdingsRoutes);
app.use("/api", positionsRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
  connectDB();
})
