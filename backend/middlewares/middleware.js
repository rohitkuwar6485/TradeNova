const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel.js');

// Auth middleware to protect routes
const authUser = async (req, res, next) => {
  try {
    const { token } = req.cookies; // Read token from cookies

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: "Not Authorized" });
    }

    // Attach user info to request
    req.user = { id: decoded.id };
    
    next(); // Move to next middleware or route handler
  } catch (error) {
    return res.status(401).json({ success: false, message: "Token is invalid or expired" });
  }
};

export default authUser;
