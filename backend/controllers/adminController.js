const User = require("../models/Admin.js");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Manual Registration
exports.registerUser = async (req, res) => {
  const { name, email, password, mobile, role, address, city, company } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      mobile,
      role,
      address,
      city,
      company,
    });

    res.status(201).json({ token: generateToken(user) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Manual Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ token: generateToken(user) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  const { token } = req.body; // credential from frontend

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, googleId, role: "customer" });
    }

    res.json({ token: generateToken(user) });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Google login failed" });
  }
};
