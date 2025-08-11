const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// In-memory OTP store
const otpStore = new Map();

exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: "Invalid email format" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    otpStore.set(email, { otp, expiresAt });

    try {
        await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}. It will expire in 5 minutes.`);
        res.json({ message: "OTP sent successfully" });
    } catch {
        res.status(500).json({ error: "Failed to send OTP email" });
    }
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

    const record = otpStore.get(email);
    if (!record) return res.status(400).json({ error: "OTP not found or expired" });

    if (record.expiresAt < new Date()) {
        otpStore.delete(email);
        return res.status(400).json({ error: "OTP expired" });
    }

    if (record.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

    otpStore.delete(email);

    try {
        let user = await User.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(Math.random().toString(36).slice(-8), 10);
            user = new User({ email, password: hashedPassword });
            await user.save();
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "OTP verified successfully", token });
    } catch {
        res.status(500).json({ error: "Server error" });
    }
};
