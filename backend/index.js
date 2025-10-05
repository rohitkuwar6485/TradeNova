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

const corsOptions = {
  origin: (origin, callback) => {
    console.log("CORS request from origin:", origin); // optional debug
    if (!origin) return callback(null, true); // allow Postman / same-origin
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // allowed origin
    } else {
      callback(null, false); // blocked origin
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,          // allow cookies / authentication headers
  optionsSuccessStatus: 200   // for legacy browsers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests for all routes
app.options("*", cors(corsOptions));

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
