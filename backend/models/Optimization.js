import mongoose from "mongoose";

const OptimizationSchema = new mongoose.Schema(
  {
    field: { type: String, required: true },
    goal: { type: String, default: "" },
    statusLabel: { type: String, default: "" },
    checked: { type: Boolean, default: false },
    notes: { type: String, default: "" },
    intent: { type: String, default: "" },
    defaultNote: { type: String, default: "" },
  },
  { timestamps: true }
);

const Optimization = mongoose.model("Optimization", OptimizationSchema);

export default Optimization;
