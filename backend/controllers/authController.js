const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
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
      from: `"Authentication Portal" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Your One-Time Password (OTP)",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
      html: `
                <p>Dear <strong>User</strong>,</p>
                <p>
                Thank you for signing up with U Technology. To complete your email
                verification, please use the following One-Time Password (OTP):
                <strong>${otp}</strong>.
                </p>
                <p>
                This code is valid for the next 10 minutes. Do not share this code with
                anyone.
                </p>

                <p style="margin-top: 25px">
                    Best Regards,<br />
                    U Tech Team<br />
                </p>
            `,
    };

    await transporter.sendMail(userMailOptions);

    setOtp(email, otp);

    return res
      .status(200)
      .json({ success: true, message: "OTP sent successfully" });
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
