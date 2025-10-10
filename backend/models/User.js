import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { 
    type: String, 
    required: true, 
    enum: ["admin", "editor", "seo_user"], // Define your roles
    default: "seo_user"
  },
  password: { type: String, required: true },
  
  // Domains/folders assigned to user
  domains: [
    {
      client: { type: String, required: true },
      platform: { type: String, enum: ["Facebook", "Instagram", "YouTube", "Google Ads"], required: true },
    }
  ],

  status: { type: String, default: "Active" },
  lastLogin: { type: String, default: "Never" },
  deadline: { type: Date, required: false }, // Optional deadline
});

// Hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Safe export (prevents OverwriteModelError)
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
