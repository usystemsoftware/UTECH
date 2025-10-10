import User from "../models/User.js";

// Add new user
export const addUser = async (req, res) => {
  try {
    const { name, email, password, role, domains, deadline } = req.body;

    if (!name || !email || !password || !role || !deadline) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
      domains,
      deadline,
    });

    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};
// Update user
export const updateUser = async (req, res) => {
  try {
    const { name, email, role, domains, deadline } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role, domains, deadline }, 
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  } 
};