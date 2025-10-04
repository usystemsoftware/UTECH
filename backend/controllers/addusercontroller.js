import User from "../models/Addusers.js";

// @desc Add new user
// @route POST /api/users
export const addUser = async (req, res) => {
  try {
    const { name, email, role, domains, features } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      name,
      email,
      role,
      domains,
      features,
    });

    res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get all users
// @route GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
