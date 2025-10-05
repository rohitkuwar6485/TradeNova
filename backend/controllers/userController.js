const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/UserModel.js');


// Signup controller
exports.signupUser = async (req, res) => {
    // console.log(req.body);
    try {
        const { name, contact, email, password } = req.body;

        // Check for missing fields
        if (!name || !contact || !email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await UserModel.create({ name, contact, email, password: hashedPassword });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Send response
        return res.json({
            success: true,
            message: "Signup successful!",
            user: { id: user._id, name: user.name, email: user.email, contact: user.contact },
        });
    } catch (error) {
        console.error(error.message);
        return res.json({ success: false, message: error.message });
    }
};

// Login User: /api/user/login
exports.loginUser = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;

        // Check for missing fields
        if (!email || !password) {
            return res.json({ success: false, message: 'Email and Password are required' });
        }

        // Find user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'Invalid Email or Password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid Email or Password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Send response
        return res.json({
            success: true,
            message: "Login successful!",
            user: { id: user._id, name: user.name, email: user.email, contact: user.contact },
        });
    } catch (error) {
        console.error(error.message);
        return res.json({ success: false, message: error.message });
    }
};

// Logout controller
exports.logoutUser = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true on production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/", // must match cookie path when it was set
    });

    return res.json({
      success: true,
      message: "Logout successful!",
    });
  } catch (error) {
    console.error(error.message);
    return res.json({ success: false, message: "Error during logout" });
  }
};


