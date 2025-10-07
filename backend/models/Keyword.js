import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    topic: { type: String },
    searchVolume: { type: Number },
    difficulty: { type: Number },
    intent: {
      type: String,
      enum: ["Informational", "Navigational", "Commercial", "Transactional"],
      default: "Commercial",
    },
    cpc: { type: Number },
    priorityScore: { type: Number },
    status: {
      type: String,
      enum: ["Planned", "In Progress", "Published"],
      default: "Planned",
    },
    contentType: {
      type: String,
      enum: ["Blog", "Landing Page", "Product Page", "Video"],
      default: "Blog",
    },
    targetURL: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    channels: { type: [String], default: [] },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Keyword", keywordSchema);
