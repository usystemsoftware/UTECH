const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { setOtp, getOtp, deleteOtp } = require("../utils/otpStore");
const { transporter } = require("../utils/sendEmail");

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        // Basic validation
        if (!email) {
            return res.status(400).json({
                success: false,
                error: "Email is required",
            });
        }

        // Check if the user already exists
        // const existingUser = await User.findOne({ email });
        const existingUser = false;


        if (existingUser) {
            return res.status(409).json({
                success: false,
                error: "User already exists",
            });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const userMailOptions = {
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
            html: `<p>Your OTP is <strong>${otp}</strong>. It is valid for 10 minutes.</p>`,
        }

        await transporter.sendMail(userMailOptions);


        setOtp(email, otp);

        return res.status(200).json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({
            success: false,
            error: "Server error during registration. Please try again.",
        });
    }
};


exports.verifyOtp = (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                error: "Email and OTP are required",
            });
        }

        const record = getOtp(email); // Retrieve OTP from in-memory store or cache

        if (!record) {
            return res.status(400).json({
                success: false,
                error: "OTP not found or expired",
            });
        }

        if (Date.now() > record.expiresAt) {
            deleteOtp(email); // Clean up expired OTP
            return res.status(400).json({
                success: false,
                error: "OTP expired",
            });
        }

        if (record.otp !== otp) {
            return res.status(400).json({
                success: false,
                error: "Invalid OTP",
            });
        }

        deleteOtp(email); // Clean up used OTP

        return res.status(200).json({
            success: true,
            message: "OTP verified successfully",
        });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({
            success: false,
            error: "Server error while verifying OTP",
        });
    }
};