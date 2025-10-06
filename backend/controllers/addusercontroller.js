import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (id, role) =>
  jwt.sign({ id, role }, "secretkey", { expiresIn: "2h" });

// @desc Register / Add User (Admin only)
export const addUser = async (req, res) => {
  try {
    const { name, email, role, password, domains, features } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, role, password, domains, features });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get All Users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// @desc Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    user.lastLogin = new Date().toLocaleString();
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};
