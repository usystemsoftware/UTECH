import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    domains: [
      {
        type: String,
      },
    ],
    features: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
