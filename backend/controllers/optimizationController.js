import Optimization from "../models/Optimization.js";

// Get all optimizations
export const getOptimizations = async (req, res) => {
  try {
    const data = await Optimization.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Create or update optimizations
export const saveOptimizations = async (req, res) => {
  try {
    const optimizations = req.body; // Array of objects
    const bulkOps = optimizations.map((opt) => ({
      updateOne: {
        filter: { field: opt.field },
        update: opt,
        upsert: true,
      },
    }));

    await Optimization.bulkWrite(bulkOps);
    res.status(200).json({ message: "Optimizations saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
