import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { setOtp, getOtp, deleteOtp } from "../utils/otpStore.js";
import { transporter } from "../utils/sendEmail.js";

/* =====================
   SEND OTP
===================== */
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, error: "Email is required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const mailOptions = {
      from: `"U Tech" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Your One-Time Password (OTP)",
      html: `
        <p>Dear User,</p>
        <p>Your OTP is <strong>${otp}</strong>. Valid for 10 minutes.</p>
        <p>Do not share this with anyone.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    setOtp(email, otp);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP send error:", error);
    return res.status(500).json({ success: false, error: "Server error sending OTP" });
  }
};

/* =====================
   VERIFY OTP
===================== */
export const verifyOtp = (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ success: false, error: "Email and OTP required" });

    const record = getOtp(email);
    if (!record) return res.status(400).json({ success: false, error: "OTP not found or expired" });

    if (Date.now() > record.expiresAt) {
      deleteOtp(email);
      return res.status(400).json({ success: false, error: "OTP expired" });
    }

    if (record.otp !== otp) return res.status(400).json({ success: false, error: "Invalid OTP" });

    deleteOtp(email);
    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("OTP verify error:", error);
    return res.status(500).json({ success: false, error: "Server error verifying OTP" });
  }
};

/* =====================
   USER LOGIN
===================== */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id, role: user.role, domains: user.domains }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        domains: user.domains,
        redirectDomain: user.domains[0] || "/",
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

/* =====================
   REGISTER NEW USER (Admin Only)
===================== */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, domains, deadline } = req.body;
    if (!name || !email || !password || !role || !deadline)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      domains,
      deadline,
    });

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Register user error:", error);
    res.status(500).json({ message: "Server error during user registration" });
  }
};

/* =====================
   GET ALL USERS (Admin Only)
===================== */
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
};
