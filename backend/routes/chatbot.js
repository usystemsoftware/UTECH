
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const SECRET = "U-Tech-Secret";

// Authentication middleware to verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token.' });
    req.user = user;
    next();
  });
}

// In-memory store for OTPs: { email: { otp: '123456', expiresAt: Date } }
const otpStore = new Map();

// Configure nodemailer transporter (use your SMTP settings)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anuq06392@gmail.com',
    pass: 'wsxh qyuj sccs hlpw',
  },
});

router.post('/', authenticateToken, (req, res) => {
  const { message } = req.body;
  const msg = message.toLowerCase();

  if (msg.includes("banking")) {
    return res.json({ reply: "Banking services: Mobile apps, ATM software, onboarding tools, chatbots." });
  }
  if (msg.includes("retail")) {
    return res.json({ reply: "Retail solutions: POS integration, behavior tracking, loyalty programs." });
  }
  return res.json({ reply: "Please ask about our services or industries like banking, retail, healthcare." });
});

// Endpoint to send OTP to email
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with 5 minutes expiry
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  otpStore.set(email, { otp, expiresAt });

  // Send OTP email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send OTP email" });
  }
});


router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  const record = otpStore.get(email);
  if (!record) {
    return res.status(400).json({ error: "OTP not found or expired" });
  }

  if (record.expiresAt < new Date()) {
    otpStore.delete(email);
    return res.status(400).json({ error: "OTP expired" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  // OTP is valid, delete from store
  otpStore.delete(email);

  // Authenticate or create user and generate token
  try {
    let user = await User.findOne({ email });
    if (!user) {
      const randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomPassword, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();
    }
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
    return res.json({ message: "OTP verified successfully", token });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
