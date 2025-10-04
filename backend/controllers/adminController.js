const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

// @desc    Register Admin
// @route   POST /api/admin/register
// @access  Public
const registerAdmin = async (req, res) => {
  const { name, email, mobile, password, role } = req.body;

  try {
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ name, email, mobile, password, role });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id, admin.role),
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerAdmin };
